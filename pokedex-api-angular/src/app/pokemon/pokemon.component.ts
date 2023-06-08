import { Inject, Injectable } from '@angular/core';

@Injectable ({
  providedIn: 'root'
})


export class PokemonComponent {

  constructor()  { }

    getPokemon (pokemonName:string){
      console.log(pokemonName)
    }

}
