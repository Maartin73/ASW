import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Issue }         	from '../issues/issue';
import { IssueService }  	from '../issues/issue.service';
import { Comment }         	from '../comments/comment';
import { CommentService }  	from '../comments/comment.service';

@Component({
  selector: 'app-issue-new',
  templateUrl: './issue-new.component.html',
  styleUrls: ['./issue-new.component.css']
})
export class IssueNewComponent implements OnInit {
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
  }
  addIssue(issue): void {
    issue = issue.trim();
    if (!issue) { return; }
    this.issueService.addIssue({ issue } as Issue)
      .subscribe(issue => {
        this.issue.push(issue);
      });
  }

}
