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

  getPokemones(): Observable<Paginate<PokemonList>> {
    const url = this.apiUrl+'pokemon';
    return this.http.get<Paginate<PokemonList>>(url)
  }

  getPokemonFromName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}pokemon/${name}`)
  }
}
