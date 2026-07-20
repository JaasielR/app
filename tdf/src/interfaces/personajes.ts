export interface Character {

    id: number;

    name: string;

    images: string[];

    personal?: {
        sex?: string;
        age?: {
            academyGraduate?: string;
            partI?: string;
            partII?: string;
        };
    };

    natureType?: string[];
}