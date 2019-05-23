import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class IssueService {
  private sortTitleBool = true;
  private sortKindBool = true;

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues', {
      headers: new HttpHeaders()
          .set('Accept', 'application/json')
    });
  }

  getOpen(): Observable<Issue[]> {
    return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?issue_status_id=2', {
      headers: new HttpHeaders()
          .set('Accept', 'application/json')
    });
  }


  sortTitle(): Observable<Issue[]> { 
    this.sortTitleBool = !this.sortTitleBool;
    if (this.sortTitleBool){
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
    else{
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
  }

  sortKind(): Observable<Issue[]> { 
    this.sortKindBool = !this.sortKindBool;
    if (this.sortKindBool){
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=issue_kind_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
    else{
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=issue_kind_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
  }

  sortPriority(): Observable<Issue[]> { 
    this.sortKindBool = !this.sortKindBool;
    if (this.sortKindBool){
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=issue_priority_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
    else{
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=issue_priority_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
  }

  sortStatus(): Observable<Issue[]> { 
    this.sortKindBool = !this.sortKindBool;
    if (this.sortKindBool){
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=issue_status_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
    else{
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=issue_status_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
  }

  sortUserID(): Observable<Issue[]> { 
    this.sortKindBool = !this.sortKindBool;
    if (this.sortKindBool){
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=user_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
    else{
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=user_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
  }

  /* sortCreated(): Observable<Issue[]> { 
    this.sortKindBool = !this.sortKindBool;
    if (this.sortKindBool){
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=issue_kind_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
    else{
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=issue_kind_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
  }

  sortUpdated(): Observable<Issue[]> { 
    this.sortKindBool = !this.sortKindBool;
    if (this.sortKindBool){
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=asc&sort=issue_kind_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
    else{
      return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?direction=desc&sort=issue_kind_id', {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
    }
  } */

  constructor(private http: HttpClient) {}
}
