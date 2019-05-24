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
}
