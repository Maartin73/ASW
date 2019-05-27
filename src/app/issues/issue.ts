import { Comment }          from '../comments/comment';

export class Issue {
    id: number;
    title: string;
    description: string;
    author_id: {
        id: number;
        name: string;
        email: string;
        links: {
            image: {
                href: string;
            };
        };
    };
    user_id: {
        id: number;
        name: string;
        email: string;
        _links: {
            image: {
                href: string;
            };
        };
    };
    issue_kind_id: number;
    issue_priority_id: number;
    issue_status_id: number;
    created_at: string;
    updated_at: string;
    voters: number;
    watchers: number;
    comments: [Comment]
}