import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OfertasService} from '../../../ofertas.service'

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public OndeFica : string = '';

  constructor(
    private router : ActivatedRoute,
    private ofertasService: OfertasService
    ) { }

  ngOnInit(): void {
    // console.log('ID recuperado da rota pai: ',this.router.parent.snapshot.params['id']
     this.ofertasService.getOndeFicaPorId(this.router.parent.snapshot.params['id'])
     .then((descricao: string )=>{
       this.OndeFica = descricao
     })
  }

}
