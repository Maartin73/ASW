import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  createComment(issueId: number, comment: string, token: string): Observable<any> {
    console.log(comment);
    return this.http.post(`https://safe-ridge-41224.herokuapp.com/issues/${issueId}/comments`, {
      content: comment
    }, {
      headers: new HttpHeaders({'Accept' : 'application/json', 'api_key' : token})
    });
  }

  editComment(issueId: number, commentId: number, commentContent: string, token:string): Observable<any> {
    console.log(commentContent);
    return this.http.put(`https://safe-ridge-41224.herokuapp.com/issues/${issueId}/comments/${commentId}`, {
      content: commentContent
    }, {
      headers: new HttpHeaders({'Accept' : 'application/json', 'api_key' : token})
    });
  }

  deleteComment(issueId:number, commentId: number, token: string): Observable<any> {
    return this.http.delete(`https://safe-ridge-41224.herokuapp.com/issues/${issueId}/comments/${commentId}`, {
        headers: new HttpHeaders({'Accept' : 'application/json', 'api_key' : token})
        });
  }

  constructor(private http: HttpClient) { }

 
}
