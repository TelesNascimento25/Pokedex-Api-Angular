import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from 'src/app/pokemon/pokemon.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  name:string = "Bulbasaur"
  attributesTypes:string[] = ['Fire', 'Rock']

  constructor (
    private service:PokemonComponent) {}

  ngOnInit(): void {
    this.service.getPokemon("Bulbasaur")
  }


}
