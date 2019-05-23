import { Component, OnInit } from '@angular/core';
import { Issue } from './issue';
import { IssueService } from './issue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Issue Tracker';

  issues: Issue[];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.getIssues();
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

  /* sortCreated(): void {
    this.issueService.sortCreated()
        .subscribe(issues => this.issues = issues);
  }

  sortUpdated(): void {
    this.issueService.sortUpdated()
        .subscribe(issues => this.issues = issues);
  } */
}
