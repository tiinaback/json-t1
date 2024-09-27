fetch('https://tiinaback.github.io/json-t1-link/t1.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(responseJson) {
    kerro(responseJson);
  })
  .catch(function(error) {
    document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
  });


function kerro(data) {
  var teksti = ""; 

  teksti += "<h1>" + data.otsikko + "</h1>";
 
  teksti += "<p>" + data.kuvaus + "</p>";

  teksti += "<p><img src='" + data.kuva + "' alt='kuva'></p>";

  teksti += "<h3>Opintojakso: " + data.opintojakso.nimi + "</h3>";
  teksti += "<p>Tunnus: " + data.opintojakso.tunnus + "</p>";
  teksti += "<p>Opintopisteet: " + data.opintojakso.opintopisteet + "</p>";

  teksti += "<ul>";
  for (var i = 0; i < data.sisalto.length; i++) {
    teksti += "<li>" + data.sisalto[i] + "</li>";
  }
  teksti += "</ul>";

  for (var i = 0; i < data.tekniikat.length; i++) {
    teksti += "<p><a href='" + data.tekniikat[i].linkki + "'>" + data.tekniikat[i].aihe + "</a></p>";
  }

  document.getElementById("vastaus").innerHTML = teksti;
}
