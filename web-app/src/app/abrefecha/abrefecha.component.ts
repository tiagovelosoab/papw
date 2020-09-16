import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abrefecha',
  templateUrl: './abrefecha.component.html',
  styleUrls: ['./abrefecha.component.css']
})
export class AbrefechaComponent implements OnInit {
  public imagem='https://br.pinterest.com/pin/641270434419679009/'
  public exibe=false;
  public descricao='Disciplinas de programação';
  public usuario='Rodrigo Fujioka';
  public profissao='Professor';
  constructor() { }

  ngOnInit(): void {
  }
  public aparece(){

  }
  public desaparece(){
    
  }
  public exibirPerfil(){
    this.exibe=!this.exibe;
  }
}
