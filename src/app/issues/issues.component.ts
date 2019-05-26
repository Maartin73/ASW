import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Issue }         	from '../issue';
import { IssueService }  	from '../issue.service';
import { Comment }         	from '../comment';
import { CommentService }  	from '../comment.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issue: Issue;

  constructor(
  	private route: ActivatedRoute,
  	private issueService: IssueService
  ) { }

  ngOnInit() {
  	this.getIssue();
  }

  getIssue() {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.issueService.getIssue(id).subscribe(issue => this.issue = issue);
  }

  resolveIssue() {
  	this.issue.issue_status_id = 4;
  	this.issueService.resolveIssue(this.issue).subscribe(issue => this.issue = issue);
  }

}
