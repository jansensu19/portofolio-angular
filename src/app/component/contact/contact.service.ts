import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private formSpreeEndpoint = 'https://formspree.io/f/moqgvwkl';

  constructor(private http: HttpClient) {}

  sendEmail(body: any): Observable<any> {
    return this.http.post(this.formSpreeEndpoint, body);
  }
}
