// llama la libreria de jQuery 
// estatus code 200 = todo bien
// estatus code 404 = la pagina no fue encontrada 
// estatus code 500 = todo mal, error del lado del servidor
$(document).ready(function(){ 


    cargarPokemones();
    $('#pokemones');
});

  

async function cargarPokemones(){ //aca va todo la logica de las cartas


  try{

    const request = await fetch('api/pokemones', {
      method: 'GET',
      headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      }
    });

    const pokemones = await request.json();


    let pokemonesHtml = '';
    for (let pokemon of pokemones){

      
      let pokemonHtml ='<div class="card" id=""card> <div class="nombre_tipo"> <div class="nombre_pokemon"> <h4>'+ 
      pokemon.pok_name +'</h4> </div> <div class="tipo_pokemon"> <p>'+ 
      pokemon.pok_tipo1 +'</p> <p>'+ 
      pokemon.pok_tipo2 +'</p></div> </div> <div class="img_pokemon"> <img src="'+
      pokemon.pok_img +'" alt=""> </div> </div>';
      
      

      pokemonesHtml += pokemonHtml;
    }
    document.querySelector("#pokemones").outerHTML = pokemonesHtml;


    let coloresHtml = '';
    for (let pokemon of pokemones){

      if(!pokemon.pok_tipo1 == "Fire" && "Watter" && "Electric" && "Bug" && "Posiom" && "Ground" && "Fighting" && "Psychic" && "Dragon" && "Rock" && "Ice"){
        coloresHtml = 'document.getElementById("card").style.backgroundColor = "#69F0AE";'
      }

      if(!pokemon.pok_tipo1 == "Glass" && "Watter" && "Electric" && "Bug" && "Posiom" && "Ground" && "Fighting" && "Psychic" && "Dragon" && "Rock" && "Ice"){
        let colorHtml =  $(".card").css({"background-color": "#FF5252"})
      }

      if(!pokemon.pok_tipo1 == "Glass" && "Fire" && "Electric" && "Bug" && "Posiom" && "Ground" && "Fighting" && "Psychic" && "Dragon" && "Rock" && "Ice"){
        let colorHtml =  $(".card").css({"background-color": "#448AFF"})
      }

      if(!pokemon.pok_tipo1 == "Glass" && "Fire" && "Watter"&& "Bug" && "Posiom" && "Ground" && "Fighting" && "Psychic" && "Dragon" && "Rock" && "Ice"){
        let colorHtml =  $(".card").css({"background-color": "#FFC107"});
      }

      if(!pokemon.pok_tipo1 == "Glass" && "Fire" && "Watter" && "Electric" &&"Posiom" && "Ground" && "Fighting" && "Psychic" && "Dragon" && "Rock" && "Ice"){
        let colorHtml =  $(".card").css({"background-color": "#8BC34A"})
      }

      if(!pokemon.pok_tipo1 == "Glass" && "Fire" && "Watter" && "Electric" && "Bug" && "Ground" && "Fighting" && "Psychic" && "Dragon" && "Rock" && "Ice"){
        let colorHtml =  $(".card").css({"background-color": "#9C27B0"})
      }

      if(!pokemon.pok_tipo1 == "Glass" && "Fire" && "Watter" && "Electric" && "Bug" && "Posiom" && "Fighting" && "Psychic" && "Dragon" && "Rock" && "Ice"){
        let colorHtml = $(".card").css({"background-color": "#795548"})
      }
      
      if(!pokemon.pok_tipo1 == "Glass" && "Fire" && "Watter" && "Electric" && "Bug" && "Posiom" && "Ground" && "Psychic" && "Dragon" && "Rock" && "Ice"){
        let colorHtml =  $(".card").css({"background-color": "#FF9800"})
      }

      if(!pokemon.pok_tipo1 == "Glass" && "Fire" && "Watter" && "Electric" && "Bug" && "Posiom" && "Ground" && "Fighting" && "Dragon" && "Rock" && "Ice"){
        let colorHtml = $(".card").css({"background-color": "#E91E63"})
      }

      if(!pokemon.pok_tipo1 == "Glass" && "Fire" && "Watter" && "Electric" && "Bug" && "Posiom" && "Ground" && "Fighting" && "Psychic" && "Rock" && "Ice"){
        let colorHtml = $(".card").css({"background-color": "#607D8B"})
      }

      if(!pokemon.pok_tipo1 == "Glass" && "Fire" && "Watter" && "Electric" && "Bug" && "Posiom" && "Ground" && "Fighting" && "Psychic" && "Dragon" && "Ice"){
        let colorHtml = $(".card").css({"background-color": "#9E9E9E"})
      }

      if(!pokemon.pok_tipo1 == "Glass" && "Fire" && "Watter" && "Electric" && "Bug" && "Posiom" && "Ground" && "Fighting" && "Psychic" && "Dragon" && "Rock"){
        let colorHtml = $(".card").css({"background-color": "#03A9F4"})
      }
    }

    document.querySelector(".card").outerHTML = coloresHtml;

  }catch (error){
    console.log(error);
  }
    
}

