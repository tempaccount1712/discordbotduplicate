module.exports.elements = {
  "바람": "https://api.genshin.dev/elements/anemo/icon",
  "얼음": "https://api.genshin.dev/elements/cryo/icon",
  "풀": "https://api.genshin.dev/elements/dendro/icon",
  "번개": "https://api.genshin.dev/elements/electro/icon",
  "바위": "https://api.genshin.dev/elements/geo/icon",
  "물": "https://api.genshin.dev/elements/hydro/icon",
  "불": "https://api.genshin.dev/elements/pyro/icon"
}

module.exports.convElement = function(el) {
  el = el.toLowerCase();
  var val;
  switch(el) {
    case "anemo":
      val = "바람";
      break;
    case "cryo":
      val = "얼음";
      break;
    case "dendro":
      val = "풀";
      break;
    case "electro":
      val = "번개";
      break;
    case "geo":
      val = "바위";
      break;
    case "hydro":
      val = "물";
      break;
    case "pyro":
      val = "불";
      break;
  }
  return val;
}
