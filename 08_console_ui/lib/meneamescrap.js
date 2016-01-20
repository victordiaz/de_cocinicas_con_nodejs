var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://www.meneame.net";

exports.getLastNews = getLastNews;

function getLastNews(num, callback) {
  request(url, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body),
      //nombre y primer voto
      primera_noticia = $("#newswrap .news-summary")[num];
      var votos = $(primera_noticia).find(".votes").text().split(" ")[1];
      var nombre = $(primera_noticia).find("h2").text();
      callback(nombre, votos)
    } else {
      callback("error", "error");
    }
  });

}
