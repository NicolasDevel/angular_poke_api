import { Component, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon-service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-detail-pokemon',
  imports: [CommonModule],
  templateUrl: './detail-pokemon.html',
  styleUrl: './detail-pokemon.css'
})
export class DetailPokemon {
  readonly pokemonName:string;
  pokemon! : Pokemon;
  private activatedRoute = inject(ActivatedRoute);

  constructor(private pokemonServices : PokemonService, private location : Location){
    this.pokemonName = this.activatedRoute.snapshot.paramMap.get('name')!;
  }

  ngOnInit()
  {
    this.getPokemonByName()
  }

  getPokemonByName() {
    this.pokemonServices.getPokemonFromName(this.pokemonName)
    .subscribe({
      next: (data) => {
        this.pokemon = data
      },
      error: (err) => {
        console.log('Error ', err)
      }
    })
  }

  back(){
    this.location.back()
  }
}


