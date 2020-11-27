import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contato } from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-formcontato',
  templateUrl: './formcontato.component.html',
  styleUrls: ['./formcontato.component.css']
})
export class FormcontatoComponent implements OnInit {
  contato = {} as Contato;
  contatos: Contato[];
  
  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
  }


  saveContato(form: NgForm) {    
    console.log(this.contato);
    this.contatoService.saveContato(this.contato).subscribe(() => {
      this.cleanForm(form);
    });  
  }

     // Chama o serviço para obtém todos os usuários
     getContatos() {
      this.contatoService.getContatos().subscribe((contatos: Contato[]) => {
        this.contatos = contatos;
      });
    }
  

    // limpa o formulario
    cleanForm(form: NgForm) {  
      form.resetForm();
      this.contato = {} as Contato;      
    }

}
