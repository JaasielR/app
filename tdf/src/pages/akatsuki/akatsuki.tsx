import { useEffect, useState } from "react";
import './akatsuki.css'
import { getCollection } from "@/services/apiService";
import AkatsukiCard from "@/pages/akatsuki/dat.tsx";

interface AkatsukiMember {
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

export default function Akatsuki() {

    const [members, setMembers] = useState<AkatsukiMember[]>([]);

    useEffect(() => {

        async function loadAkatsuki() {

            const data = await getCollection("akatsuki");

            setMembers(data.akatsuki);

        }

        loadAkatsuki();

    }, []);

    return (

        <div className="akatsuki-page">
            <div className="akatsuki-grid">

                {
                    members.map(member => (

                        <AkatsukiCard
                            key={member.id}
                            member={member}
                        />

                    ))
                }

            </div>
        </div>

    );

}