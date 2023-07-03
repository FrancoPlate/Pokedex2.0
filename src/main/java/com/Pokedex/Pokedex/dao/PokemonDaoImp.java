package com.Pokedex.Pokedex.dao;

import com.Pokedex.Pokedex.models.Pokemon;


import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Repository
@Transactional


public class PokemonDaoImp implements PokemonDao{

    @PersistenceContext // inyecta de forma automática una referencia válida del EntityManager
    EntityManager entityManager; // conexion con la base de datos

    @Override // mostrar a los usuarios en una tabla
    public List<Pokemon> getPokemon(){
        String query = "FROM Pokemon";
        return entityManager.createQuery(query, Pokemon.class).getResultList();
    }

}

/* return !lista.isEmpty();  hace lo mismo que lo de abajo ->
        
        if (lista.isEmpty()){
            return false;
        }else{
            return true;
        }
        si la contraseña no se encunetra tirara un false,
        sino tira un true
        
        */  