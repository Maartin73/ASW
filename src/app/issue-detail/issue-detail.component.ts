import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Issue }         	from '../issues/issue';
import { IssueService }  	from '../issues/issue.service';
import { Comment }         	from '../comments/comment';
import { CommentService }  	from '../comments/comment.service';
import { CookieService }	from '../cookieservice.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  issue: Issue;
  newComment: string;
  token: string;
  user_id: string;
  error: Object;
  commentEditing: number;

  constructor(
  	private route: ActivatedRoute,
  	private issueService: IssueService,
  	private commentService: CommentService,
  	private router: Router,
  	private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.token = this.cookieService.get("sessionId");
    this.user_id = this.cookieService.get("user_id");
    this.getIssue();
    this.commentEditing = -1;
  }

  getIssue() {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.issueService.getIssue(id).subscribe(issue => this.issue = issue);
  	console.log(this.issue);
  }

  deleteIssue() {
  	this.issueService.deleteIssue(this.issue.id, this.token).subscribe(error => this.error = error);
    console.log(this.error);
  	this.router.navigateByUrl("/issues");
  }

  resolveIssue() {
    this.issueService.editIssue(this.issue.id, this.issue.title, this.issue.description, this.issue.user_id.id, this.issue.issue_kind_id, this.issue.issue_priority_id, 4, this.token).subscribe(onSuccess => {
      this.issue.issue_status_id = 4;
      this.createComment("changed the status to resolved");},
    onFail => {error => this.error = error;
    console.log(this.error);})
  }

  isCurrentUser(userId: number) {
    return this.user_id == String(userId);
  }

  createComment(content: string) {
    console.log(content);
  	this.commentService.createComment(this.issue.id, content, this.token).subscribe(comment => this.issue.comments.push(comment));
    this.newComment = "";
  }

  editComment(commentId: number, content: string) {
    console.log(content);
    this.commentService.editComment(this.issue.id, commentId, content, this.token).subscribe(error => this.error = error);
    console.log(this.error);
    this.commentEditing = -1;
  }

  deleteComment(commentId: number) {
    this.commentService.deleteComment(this.issue.id, commentId, this.token).subscribe(onSuccess => {
    for (var i = 0; i < this.issue.comments.length; i++) {
      if (this.issue.comments[i].id == commentId) {
        delete this.issue.comments[i];
      }
    }});
  }

  setCommentEditing(commentId) {
    this.commentEditing = commentId;
  }

  isCommentEditing(commentId: number) {
    return this.commentEditing == commentId;
  }

  voteIssue() {
  	this.issueService.voteIssue(this.issue.id, this.token).subscribe(error => this.error = error);
    console.log(this.error);
  }

  watchIssue() {
  	this.issueService.watchIssue(this.issue.id, this.token).subscribe(error => this.error = error);
    console.log(this.error);
  }
  
}
