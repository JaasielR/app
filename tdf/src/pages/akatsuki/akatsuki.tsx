import { useEffect, useState } from "react";
import '../../styles/akatsuki.css'
import { getCollection } from "@/services/apiService";
import AkatsukiCard from "@/pages/akatsuki/dat.tsx";
import type {AkatsukiMember} from "@/interfaces/akatsuki.ts";

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