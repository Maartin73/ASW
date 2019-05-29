import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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
  	private issueService: IssueService,
  	private commentService: CommentService,
  	private router: Router
  ) { }

  ngOnInit() {
  	this.getIssue();
  }

  getIssue() {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.issueService.getIssue(id).subscribe(issue => this.issue = issue);
  	console.log(this.issue);
  }

  deleteIssue() {
  	this.issueService.deleteIssue(this.issue.id);
  	this.router.navigateByUrl("/issues");
  }

  resolveIssue() {
  }

  createComment() {
  	this.commentService.createComment(this.issue.id, this.newComment).subscribe(
  	onSuccess => {
         console.log("Success");
       }, onFail => {
         console.log("Fail");
       });
  }

  voteIssue() {
  	this.issueService.voteIssue(this.issue.id);
  }

  watchIssue() {
  	this.issueService.watchIssue(this.issue.id);
  }
  
}
