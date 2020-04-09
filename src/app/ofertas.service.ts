import {HttpClient} from '@angular/common/http';
import { Oferta } from './shared/ofertas.model';
import { Injectable } from '@angular/core';
import { URL_API, URL_API_OFERTAS, URL_API_OFERTA} from './app.api' 
import { promise } from 'protractor';

//import 'rxjs/add/operator/toPromise'
 
@Injectable()

export class OfertasService {

    constructor(private http: HttpClient){}
    //private urlApi = 'http://localhost:3000/ofertas'; //Var para guardar o endereço da API evitando repetição de codigo e que essa variavel seja alterada com metodo private

    public ofertas: Oferta[] = [
    ]
    
    public getOfertas(): Promise<Oferta[]> {
       return this.http.get(`${URL_API_OFERTAS}?destaque=true`)
        .toPromise()
        .then((resposta: any) => resposta)
        // Para rodar a api rest fake precissa startar o servidor do banco de dados
        // Json-server --watch banco_de_dados.json 
        //este getofertas vai filtrar aa melhores ofertas na tela 
    }  

    public getOfertasPorCategoria (categoria: string) : Promise<Oferta[]>{
        return this.http.get<Oferta[]>(`${URL_API_OFERTAS}?categoria=${categoria}`)
         .toPromise()
         .then((resposta) => resposta)}
        
    public getOfertaPorId(id: Number): Promise<Oferta> {
        return this.http.get(`${URL_API_OFERTAS}?id=${id}`) 
            .toPromise()
            .then((resposta: any) => {
                return resposta[0]
            })
    }
    public getComoUsarPorId(id: number): Promise<String>{
        return this.http.get(`${URL_API}?id=${id}`)
        .toPromise()
        .then((resposta: any)=>{
            return resposta[0].descricao
        })
    }
    public getOndeFicaPorId(id: number): Promise<String>{
        return this.http.get(`${URL_API_OFERTA}?id=${id}`)
        .toPromise()
        .then((resposta: any)=>{
            return resposta[0].descricao;
        })
    }
}