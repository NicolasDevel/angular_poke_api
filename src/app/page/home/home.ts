import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';
import { PokemonList } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';
import { Paginate } from '../../interfaces/utils';


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

  constructor(private servicio: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemones()
  }

  fetchPokemones():void {
    this.servicio.getPokemones().subscribe({
      next: (loQueRespondeElServidor) => {
        this.paginate = loQueRespondeElServidor
        this.pokemons = this.paginate.results
        this.loading = false
      },
      error: (err) => {
        console.log('Error: ', err)
      }
    });
  }

  seePokemon(name: string) {
    
  }
}
