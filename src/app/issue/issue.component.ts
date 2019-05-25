import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Issue }         from '../issue';
import { IssueService }  from '../issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
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

}
