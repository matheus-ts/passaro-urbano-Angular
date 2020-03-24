import {Routes} from '@angular/router' //Sempre que for fazer o mapa de rotas importe a class

import {HomeComponent} from './Components/home/home.component'
import {RestauranteComponent} from './Components/restaurante/restaurante.component'
import {DiversaoComponent} from './Components/diversao/diversao.component'
import { OfertaComponent } from './Components/oferta/oferta.component'



export const ROUTES: Routes = [
    {path: '', component: HomeComponent}, //Path seria como um identificador de busca google.com/Imagens
    {path: 'restaurantes', component: RestauranteComponent},
    {path: 'diversao', component: DiversaoComponent},
   // {path: 'oferta', component: HomeComponent}, // caso nenhum parametro de id for passado ele retorna para home
    {path: 'oferta/:id', component: OfertaComponent} // os : serve como parametro de pesquisa  
    
]
