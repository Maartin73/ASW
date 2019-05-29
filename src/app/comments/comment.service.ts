import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  createComment(issueId: number, comment: string, token: string): Observable<any> {
    return this.http.post(`https://safe-ridge-41224.herokuapp.com/issues/${issueId}/comments`, {
      content: comment
    }, {
      headers: new HttpHeaders({'Accept' : 'application/json', 'api_key' : token})
    });
  }

  constructor(private http: HttpClient) { }

 
}
