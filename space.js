document.getElementById("button").addEventListener("click", loadAstros);

// Load Astronauts from API
function loadAstros() {
  var space = new XMLHttpRequest();
  space.open("GET", "http://api.open-notify.org/astros.json", true);
  // space.send(null);

  space.onload = function() {
    if (this.status == 200) {
      
      var astros = JSON.parse(this.responseText);

      var output = "";
      var res = JSON.parse(space.response);	
      var totalPeople = res.number;
      for (i = 0; i < totalPeople; i++)
       {
        output +=
          '<div class="astros">' +
          "<ul>" +
          "<li>Name: " +
          res.people[i].name +
          "</li>" +
          "</ul>" +
          "</div>";
      }

      document.getElementById("astros").innerHTML = output;
    }
  };
  space.send();
}

