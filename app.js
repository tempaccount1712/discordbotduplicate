const {ShardingManager} = require("discord.js");
const schedule = require("node-schedule-tz");
const process = require("process");
const mysql = require("mysql");
const {db_config} = require("./config.js");
const {claimReward} = require("./data/utility.js");
const manager = new ShardingManager("./bot.js", {token: process.env.TOKEN});


process.on("unhandledRejection", function(reason, promise) {
  console.log(promise, reason);
});

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();

schedule.scheduleJob("18 22 * * *", function() {
  const db = mysql.createConnection(db_config);
  console.log("Starting auto checkin setup..");
  db.query("SELECT * FROM uid WHERE cookie IS NOT NULL AND autojoin = 1", async function(err, tables) {
    if(err) {
      console.log(err);
    }else {
      for(var i = 0; i < tables.length; i++) {
        (function(i) {
          var begin = new Date();
          begin.setHours(22, 18, 0, 0);
          var end = new Date();
          end.setHours(24, 57, 0, 0);
          var randTime = begin.getTime() + Math.random() * (end.getTime() - begin.getTime());
          var randDate = new Date(randTime);
          schedule.scheduleJob(randDate, async function() {
            var cookie = tables[i]["cookie"];
            var a = await claimReward(cookie);
            console.log(tables[i]["discord_id"], a);
          });
        }).call(this, i);
      }
    }
    db.end();
  });
})