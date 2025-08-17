import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'https://monportfolioservice-165829923522.europe-west1.run.app/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(formData: any) {
    return this.http.post(this.apiUrl, formData, { responseType: 'text' });
  }
}
