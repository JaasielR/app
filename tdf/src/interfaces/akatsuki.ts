export interface AkatsukiMember {
    id: number;
    name: string;
    images?: string[];
    natureType?: string[];
    personal?: {
        sex?: string;
        age?: {
            ["Part I"]?: string;
            ["Part II"]?: string;
        };
        affiliation?: string;
        occupation?: string | string[];
        classification?: string[];
    };
    rank?: {
        ninjaRank?: {
            ["Part I"]?: string;
            Gaiden?: string;
        };
    };
}

export interface Props{
    member:AkatsukiMember;
}