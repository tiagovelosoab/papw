import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  

  private resource = 'contato';
      
  api = environment.urlBase+'/'+this.resource;

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os agenda
  getContatos(): Observable<Contato[]> {
    return this.httpClient.get<Contato[]>(this.api)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

    // Obtem todos os agenda
    getContatoByID(valor:number): Observable<Contato> {
      return this.httpClient.get<Contato>(this.api+'/'+valor)
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

    // salva um Agendaro
    saveContato(contato: Contato): Observable<Contato> {
      console.log( JSON.stringify(contato));
      return this.httpClient.post<Contato>(this.api, JSON.stringify(contato), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
    }
  

  createContato() {
    return this.httpClient.get<Contato>(this.api )
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }


  
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
      console.log(errorMessage, 'Client Error');
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      console.log(errorMessage, 'Server Error');
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}

