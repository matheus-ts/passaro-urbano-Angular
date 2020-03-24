import {HttpClient} from '@angular/common/http';
import { Oferta } from './shared/ofertas.model';
import { Injectable } from '@angular/core';


//import 'rxjs/add/operator/toPromise'
 
@Injectable()

export class OfertasService {

    constructor(private http: HttpClient){}

    public ofertas: Oferta[] = [
    ]
    
    public getOfertas(): Promise<Oferta[]> {
       return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then((resposta: any) => resposta)
        // Para rodar a api rest fake precissa startar o servidor do banco de dados
        // Json-server --watch banco_de_dados.json 
        //este getofertas vai filtrar aa melhores ofertas na tela 
    }  

    public getOfertasPorCategoria (categoria: string) : Promise<Oferta[]>{
        return this.http.get<Oferta[]>(`http://localhost:3000/ofertas?categoria=${categoria}`)
         .toPromise()
         .then((resposta) => resposta)}
        
        
         
       
    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`http://localhost:3000/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta.json()[0]
            })
    }

    


   
//      public getOfertas2(): Promise<Oferta[]> {
//          return new Promise((resolve, reject) => {
            
//              //algum tipo de processamento, que ao finalizar, chama a função resolve ou a função reject
//              //console.log('será que passou por aqui?')
//              let deu_certo = true

//              if(deu_certo) {
//              setTimeout(() => resolve( this.ofertas ),1000)
//          } else{
//              reject ({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'})
//          }
//      })
//      .then((ofertas:Oferta[])=>{
//          console.log("esse é o primeiro then")
//          return ofertas
//      })
//          .then ((ofertas: Oferta[])=>{
//             return new Promise((resolve2, reject2  )=>{

//                 setTimeout (() =>{resolve2(ofertas)} ,1000)
//              })
//         })
//         .then((ofertas: Oferta[])=>{
//              console.log("Executado após 3 segundos porque uma promisse estava sendo executada")
//              return ofertas
//          })   
//  }
 }