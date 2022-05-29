import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Lista } from './post';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private API = "http://localhost:3000";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  pegarDados(): Observable<Lista[]> {
    return this.httpClient.get<Lista[]>(this.API + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  enviarDados(post:any): Observable<Lista> {
    return this.httpClient.post<Lista>(this.API + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  pegarId(id:number): Observable<Lista> {
    return this.httpClient.get<Lista>(this.API + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  atualizar(id:number, post:any): Observable<Lista> {
    return this.httpClient.put<Lista>(this.API + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  excluir(id:number){
    return this.httpClient.delete<Lista>(this.API + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}