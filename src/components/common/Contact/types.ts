export type TRole = "Chief Executive Officer" | "Chief Marketing Officer" | "Project Manager";

export interface IMember {
    first_name: string;
    last_name: string;
    nickname?: string;
    photo_url?: string;
    role: TRole;
    project?: string;
    contact: TMemberContact[];
}

export type TMemberContactLabel = "email" | "phone" | "github" | "twitter" | "website" | "facebook" | "linkedin" | "telegram";

export type TMemberContact = {
    label: TMemberContactLabel;
    name: string;
    value: string;
}