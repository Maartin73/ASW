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
  private sortKindPriority = true;
  private sortKindStatus = true;
  private sortKindUser = true;

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues', {
      headers: new HttpHeaders()
          .set('Accept', 'application/json')
    });
  }

  getIssue(id: number): Observable<Issue> {
    return this.http.get<Issue>(`https://safe-ridge-41224.herokuapp.com/issues/${id}`, {
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
    this.sortKindPriority = !this.sortKindPriority;
    if (this.sortKindPriority){
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
    this.sortKindStatus = !this.sortKindStatus;
    if (this.sortKindStatus){
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
    this.sortKindUser = !this.sortKindUser;
    if (this.sortKindUser){
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

  showKind(idKind): Observable<Issue[]> { 
    return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?issue_kind_id='+idKind, {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
  }

  showStatus(idStatus): Observable<Issue[]> { 
    return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?issue_status_id='+idStatus, {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
  }

  showPriority(idPriority): Observable<Issue[]> { 
    return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?issue_priority_id='+idPriority, {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
  }

  showUser(idUser): Observable<Issue[]> { 
    return this.http.get<Issue[]>('https://safe-ridge-41224.herokuapp.com/issues?user_id='+idUser, {
        headers: new HttpHeaders()
            .set('Accept', 'application/json')
      });
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

  resolveIssue(id: number) {

  }

  constructor(private http: HttpClient) {}
}
