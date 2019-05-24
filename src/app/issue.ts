export class Issue {
    id: number;
    title: string;
    description: string;
    author_id: number;
    user_id: number;
    issue_kind_id: number;
    issue_priority_id: number;
    issue_status_id: number;
    created_at: string;
    updated_at: string;
    voters: number;
    watchers: number;
}