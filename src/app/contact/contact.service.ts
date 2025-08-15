import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8081/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(formData: any) {
    return this.http.post(this.apiUrl, formData, { responseType: 'text' });
  }
}
