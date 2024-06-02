// Pour menu déroulant

function recette(fruit) {
  if (fruit == "rien") {
    document.getElementById("infofruit").classList.remove("special");
    document.getElementById("infofruit").textContent="";
  }
  else {
    document.getElementById("infofruit").classList.add("special");
    if (fruit == "Clippers") {
    document.getElementById("infofruit").textContent="l'état est Los Angeles";
    }
    if (fruit == "Lakers") {
    document.getElementById("infofruit").textContent="l'état est Los Angeles";
    }
    if (fruit == "Kings") {
    document.getElementById("infofruit").textContent="l'état est Sacramento";
    }
    if (fruit == "Suns") {
    document.getElementById("infofruit").textContent="l'état est Phoenix";
    }
    if (fruit == "Mavericks") {
    document.getElementById("infofruit").textContent="l'état est Dallas";
    }
    if (fruit == "Rockets") {
    document.getElementById("infofruit").textContent="l'état est Houston";
    }
    if (fruit == "Grizzlies") {
    document.getElementById("infofruit").textContent="l'état est Memphis";
    }
    if (fruit == "Pelicans") {
    document.getElementById("infofruit").textContent="l'état est Nouvelle-Orléans";
    }
    if (fruit == "Spurs") {
    document.getElementById("infofruit").textContent="l'état est San Antonio";
    }
    if (fruit == "Trail Blazers") {
    document.getElementById("infofruit").textContent="l'état est Portland";
    }
    if (fruit == "Jazz") {
    document.getElementById("infofruit").textContent="l'état est l'Utah";
    }
    if (fruit == "Suns") {
    document.getElementById("infofruit").textContent="l'état est Phoenix";
    }


  }
}