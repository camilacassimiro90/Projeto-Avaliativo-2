import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Lista } from './post';
import { PostDashboard } from './post-dashboard';

@Injectable({
  providedIn: 'root'
})
export class PostDashboardService {
  private apiURL = "http://localhost:3000/listDashboard";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // listDashboard () {
  //   return this.httpClient.get<PostDashboard[]>(this.apiURL)
  //   .pipe(
  //          catchError(this.errorHandler)
  //        )
  // }

  getAll(): Observable<Lista[]> {
    return this.httpClient.get<Lista[]>(this.apiURL + '/listas/')
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
