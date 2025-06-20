import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { PokemonList } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';
import { Paginate } from '../../interfaces/utils';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  paginate: Paginate<PokemonList> | null = null
  pokemons: PokemonList[] | null = null;
  loading = true;

  constructor(private servicio: PokemonService, private ruta: Router) {}

  ngOnInit(): void {
    this.fetchPokemones()
  }

  fetchPokemones():void {
    this.servicio.getAllPokemons().subscribe({
      next: (data) => {
        this.paginate = data
        this.pokemons = data.results
        setTimeout(() => {
          this.loading = false
        },3000)
      },
      error: (error) => {
        alert('error en la peticion')
        console.log('Hay un error en la peticion', error)
      } 
    })
  }

  seePokemon(name: string) {
    this.ruta.navigate(['detail', name])
  }
}
