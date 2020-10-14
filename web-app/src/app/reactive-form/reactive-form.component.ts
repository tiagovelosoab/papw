import { Component, OnInit } from '@angular/core';
//autor:Tiago Veloso
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formCadastro:FormGroup;
  
  constructor() {
    this.formCadastro=new FormGroup({
      'nome':new FormControl(null,Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(149)])),
      'email':new FormControl(null,Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.email,
        Validators.maxLength(50)])),
      'telefone':new FormControl(null,Validators.compose([
        Validators.minLength(9),
        Validators.pattern("^[0-9]*$")])),
      'cpf':new FormControl(null,Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]-[0-9][0-9]$")])),
      'idade':new FormControl(null,Validators.compose([
        Validators.required,
        this.maior,
        Validators.pattern("^[0-9]*$")])),
      'senha':new FormControl(null,Validators.compose([
        Validators.required,
        Validators.minLength(8)
       ])),
      'confirma_senha':new FormControl(null,Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])) 
      
    });
   }

  ngOnInit(): void {
  }

  enviar(){
    if(this.formCadastro.value.senha===this.formCadastro.value.confirma_senha){
    let dados = `
    nome: ${this.formCadastro.value.nome}
    email: ${this.formCadastro.value.email}
    telefone: ${this.formCadastro.value.telefone}   
    cpf:${this.formCadastro.value.cpf} 
    idade:${this.formCadastro.value.idade}
    senha:${this.formCadastro.value.senha}          
  `;
   console.log(dados);
    }
   else{
     window.alert("Error:Passwords mismatch\nPlease try again");
   } 
  };
 maior(control:AbstractControl): {[key:string]:any}|null{
   if(control.value>=18){
     return null;
   }  
   else{
    return{'idade':true}
    }  
   }
 }
 
  

