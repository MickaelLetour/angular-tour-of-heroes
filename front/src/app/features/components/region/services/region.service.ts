import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Region} from "../interfaces/region";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private regionUrl: string = "http://localhost:8080/region"; // Url to web API

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getRegion(id:number): Observable<Region> {
    return this.http.get<Region>(this.regionUrl)
      .pipe(
        tap(_ => console.log(`Region fetched id=${id}`)),
        catchError(this.handleError<Region>(`get Hero id = ${id}`))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

}
