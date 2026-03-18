import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InteractionRequest } from '../models/interaction-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private apiUrl = 'http://localhost:8080/api/interactions';
  private http = inject(HttpClient);

  recordInteraction(request: InteractionRequest): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }
}