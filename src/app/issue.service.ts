import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class IssueService {
  private issueUrl = 'https://safe-ridge-41224.herokuapp.com/issues';

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.issueUrl, {
      headers: new HttpHeaders()
          .set('Accept', 'application/json')
  });
  }

  constructor(private http: HttpClient) {}
}
