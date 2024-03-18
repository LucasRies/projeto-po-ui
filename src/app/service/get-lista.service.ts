import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../Animals';

@Injectable({
  providedIn: 'root'
})
export class GetListaService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  } 
}
