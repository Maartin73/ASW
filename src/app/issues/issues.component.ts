import { Component, OnInit } from '@angular/core';
import { Issue } from './issue';
import { IssueService } from './issue.service';
import { CookieService } from '../cookieservice.service';
import { Router } from '@angular/router'; 
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  title = 'Issue Tracker';
  token = this.cookieService.get("sessionId");
  user_id = this.cookieService.get("user_id");

  issues: Issue[];

  constructor(private issueService: IssueService, private route: ActivatedRoute, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    //this.getIssues();
    this.route.params.subscribe(p => {
      var searchString = p["searchString"];
        switch(p["type"]) {
          case 'new':
             this.showStatus(1)
             break;
          case 'open':
             this.filterOpen()
             break;
          case 'onhold':
            this.showStatus(3)
             break;
          case 'resolved':
            this.showStatus(4)
             break;
          case 'duplicate':
            this.showStatus(5)
             break;
          case 'invalid':
            this.showStatus(6)
             break;
          case 'wontfix':
            this.showStatus(7)
             break;
          case 'closed':
            this.showStatus(8)
             break;
          case 'trivial':
            this.showPriority(1)
             break;
          case 'minor':
            this.showPriority(2)
             break;
          case 'major':
            this.showPriority(3)
             break;
          case 'critical':
            this.showPriority(4)
             break;
          case 'blocker':
            this.showPriority(5)
             break;
          case 'bug':
            this.showKind(1)
              break;
          case 'enhancement':
            this.showKind(2)
              break;
          case 'proposal':
            this.showKind(3)
              break;
          case 'task ':
            this.showKind(4)
              break;
          default:
            this.getIssues()
            break;
        }
    })
  }

  getIssues(): void {
    this.issueService.getIssues()
        .subscribe(issues => this.issues = issues);
  }

  filterOpen(): void {
    this.issueService.getOpen()
        .subscribe(issues => this.issues = issues);
  }

  sortTitle(): void {
    this.issueService.sortTitle()
        .subscribe(issues => this.issues = issues);
  }

  sortKind(): void {
    this.issueService.sortKind()
        .subscribe(issues => this.issues = issues);
  }

  sortPriority(): void {
    this.issueService.sortPriority()
        .subscribe(issues => this.issues = issues);
  }

  sortStatus(): void {
    this.issueService.sortStatus()
        .subscribe(issues => this.issues = issues);
  }

  sortUserID(): void {
    this.issueService.sortUserID()
        .subscribe(issues => this.issues = issues);
  }

  showKind(idKind): void {
    this.issueService.showKind(idKind)
        .subscribe(issues => this.issues = issues);
  }

  showPriority(idPriority): void {
    this.issueService.showPriority(idPriority)
        .subscribe(issues => this.issues = issues);
  }

  showStatus(idStatus): void {
    this.issueService.showStatus(idStatus)
        .subscribe(issues => this.issues = issues);
  }

  showUser(idUser): void {
    this.issueService.showUser(idUser)
        .subscribe(issues => this.issues = issues);
  }

  sortCreated(): void {
    /*this.issueService.sortCreated()
        .subscribe(issues => this.issues = issues);*/
  }

  sortUpdated(): void {
    /*this.issueService.sortUpdated()
        .subscribe(issues => this.issues = issues);*/
  }

  sortWatching(): void {

  }

  goToIssue(issueId: number) {
    this.cookieService.setWithExpiryInSeconds("sessionId", this.token, 20);
    this.cookieService.setWithExpiryInSeconds("user_id", this.user_id, 20);
    this.router.navigateByUrl(`/issue/${issueId}`);
  }

}
