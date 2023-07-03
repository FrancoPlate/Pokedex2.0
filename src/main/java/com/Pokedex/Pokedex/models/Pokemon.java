package com.Pokedex.Pokedex.models;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Table(name = "pok")
@Entity

public class Pokemon {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "pok_id")  
    private Long pok_id;

    @Getter @Setter @Column(name = "pok_num")// lo mismo que abajo pero menos repetitivo 
    private String pok_num;

    @Getter @Setter @Column(name = "pok_name")
    private String pok_name;

    @Getter @Setter @Column(name = "pok_img")
    private String pok_img;

    @Getter @Setter @Column(name = "pok_tipo1")
    private String pok_tipo1;

    @Getter @Setter @Column(name = "pok_tipo2")
    private String pok_tipo2;

    @Getter @Setter @Column(name = "pok_alto") 
    private String pok_alto;

    @Getter @Setter @Column(name = "pok_peso") 
    private String pok_peso;

    

}
    
/*
    public Long getId() { return id; } GETTER
    
    public void setId(Long id){ this.id = id; } SETTER
    
    public String getNombre() { return nombre; }
    
    public void setNombre(String nombre){ this.nombre = nombre; }
    
    public String getApellido() { return apellido; }
    
    public void setApellido(String apellido){ this.apellido = apellido; }
    
    public String getEmail() { return email; }
    
    public void setEmail(String email){ this.email = email; }
    
    public String getTelefono() { return telefono; }
    
    public void setTelefono(String telefono){ this.telefono = telefono; }
    
    public String getPassword() { return password; }
    
    public void setPassword(String password){ this.password = password; }
*/
    
    

