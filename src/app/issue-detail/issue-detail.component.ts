import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Issue }         	from '../issues/issue';
import { IssueService }  	from '../issues/issue.service';
import { Comment }         	from '../comments/comment';
import { CommentService }  	from '../comments/comment.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  issue: Issue;
  newComment: string;

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
  }

  createComment() {
  	this.issueService.createComment(this.issue.id, this.newComment);
  }
  
}
