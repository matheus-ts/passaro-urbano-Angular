import { Component, OnInit } from '@angular/core';
import { Oferta } from '../../shared/ofertas.model';
import { OfertasService } from '../../ofertas.service';
import { ActivatedRoute } from '@angular/router';

import { interval, Observable, observable, Observer } from 'rxjs'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta) => {
        this.oferta = oferta
        //console.log(this.oferta)
      })
      // this.route.params.subscribe((paramentro : any) =>
      // console.log(paramentro), 
      // (erro : any) =>                       //Metodo observable que fica constamente ataulizando a pagin
      // console.log(erro),
      // ()=> console.log('Marcado como concluido tudo certo')
      // )
//Testes

      // const tempo = interval(2000).subscribe((intervalo: number) => {
      //   console.log(intervalo); testes 2
      // });
 
      //Observavel
      const testeObservavel = Observable.create((observavel: Observer<string>)=>
      
      observavel.error('Erro')
      

      )
      //Observador
      testeObservavel.subscribe((observador: string)=> 
      console.log(observador),
      ((erro: string)=> console.log(erro)
      )
      )

    
    }
}
 