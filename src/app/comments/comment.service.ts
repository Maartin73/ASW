import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  createComment(issueId: number, comment: string): Observable<Comment> {
    return this.http.post<Comment>(`https://safe-ridge-41224.herokuapp.com/issues/${issueId}/comments`, {
      content: comment
    }, {
      headers: new HttpHeaders()
          .set('Accept', 'application/json')
    });
  }

  constructor(private http: HttpClient) { }

 
}
