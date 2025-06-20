import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { PokemonService } from '../../services/pokemon-service';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  imports: [CommonModule],
  templateUrl: './detail-pokemon.html',
  styleUrl: './detail-pokemon.css'
})
export class DetailPokemon {
  pokemonName:string = '';
  private activatedRoute = inject(ActivatedRoute)
  pokemon!: Pokemon;

  constructor(private location: Location, private servicio: PokemonService){
    //voy a capturar el nombre del pokemon que viene en la url
    this.pokemonName = this.activatedRoute.snapshot.paramMap.get('name')!
  }

  ngOnInit()
  {
    this.fetchPokemon()
  }

  fetchPokemon(){
    this.servicio.getPokemonByName(this.pokemonName).subscribe({
      next: (data) => {
        console.log(data)
        this.pokemon = data
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  back(){
    //regresar a la anterior pagina
    this.location.back()
  }
}


