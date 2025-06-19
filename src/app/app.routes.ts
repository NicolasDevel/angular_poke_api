import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { DetailPokemon } from './page/detail-pokemon/detail-pokemon';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'detail/:name',
        component: DetailPokemon
    }
];
