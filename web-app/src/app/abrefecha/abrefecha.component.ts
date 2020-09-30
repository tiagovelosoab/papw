import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abrefecha',
  templateUrl: './abrefecha.component.html',
  styleUrls: ['./abrefecha.component.css']
})
export class AbrefechaComponent implements OnInit {
  public imagem='assets/img/vai_pro_linkedin.jpg'
  public exibe=false;
  public descricao='Disciplinas de programação';
  public usuario='Rodrigo Fujioka';
  public profissao='Professor';
  public lista: any[]=[
    {
      id:'1',
      year:'2007',
      cert:'SCJP 1.5'
    },
    {
      id:'2',
      year:'2009',
      cert:'SCWCD 1.5'
    },
    {
      id:'3',
      year:'2011',
      cert:'CTFL'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
 
  public exibirPerfil(){
    this.exibe=true;
  }
  public ocultaPerfil(){
    this.exibe=false;
  }
}
