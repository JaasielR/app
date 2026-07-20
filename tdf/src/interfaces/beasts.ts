export interface Beast {

    id: number;
    name: string;
    images: string[];
    natureType?: string[];
    personal?: {

        affiliation?: string | string[];

    };

}

export interface Props {

    beast: Beast;

}