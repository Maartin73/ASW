export class Comment {
    id: number;
    content: string;
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
    created_at: string;
}