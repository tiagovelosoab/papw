import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abrefecha',
  templateUrl: './abrefecha.component.html',
  styleUrls: ['./abrefecha.component.css']
})
export class AbrefechaComponent implements OnInit {
  public imagem='assets/img/vai_pro_linkedin.jpg'
  public exibe=true;
  public descricao='Disciplinas de programação';
  public usuario='Rodrigo Fujioka';
  public profissao='Professor';
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
