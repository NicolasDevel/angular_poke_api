import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonList } from '../interfaces/pokemon';
import { Paginate } from '../interfaces/utils';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl: string = 'https://pokeapi.co/api/v2/'

  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<Paginate<PokemonList>> {
    return this.http.get<Paginate<PokemonList>>(`${this.apiUrl}pokemon`)
  }

  getPokemonByName(name: string): Observable<Pokemon> {
    const url = this.apiUrl + 'pokemon/' + name
    const urlDos = `${this.apiUrl}pokemon/${name}`
    return this.http.get<Pokemon>(url);
  }
}
