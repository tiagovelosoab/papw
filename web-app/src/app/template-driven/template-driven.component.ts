import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    let dados=`
      Nome:${form.value.nome}
      Telefone:${form.value.telefone2}
      Endereço:${form.value.endereco}
    `;
    console.log(dados);
  }
}
