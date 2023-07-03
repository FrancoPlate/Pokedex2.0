package com.Pokedex.Pokedex.controllers;
//controla las URL si el usuario entra a nuetra pagina, está le devolvera algo 

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Pokedex.Pokedex.dao.PokemonDao;
import com.Pokedex.Pokedex.models.Pokemon;

@RestController
public class PokemonesController {

    @Autowired
    private PokemonDao pokemonesDao;
    
    
    @RequestMapping(value = "api/pokemones")
    public List<Pokemon> getPokemon(){
        
        return pokemonesDao.getPokemon();

    }
    
}

//3 horas buscando que era lo que fallaba y se arreglo de una forma sin saber que era lo que fallaba :D