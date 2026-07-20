import ClanCard from "@/pages/clans/ClanCard";
import { getCollection } from "@/services/apiService";
import {useEffect, useState} from "react";
import'./clans.css'

export default function Clans() {

    const [clans,setClans] = useState<any[]>([]);

    useEffect(()=>{

        async function load(){

            const data =
                await getCollection("clans");

            const uniqueClans = data.clans.filter(
                (clan:any, index:number, self:any[]) =>
                    index === self.findIndex(
                        (c:any) => c.name === clan.name
                    )
            );

            setClans(uniqueClans);

        }

        load();


    },[]);

    return(

        <div className="characters-grid">

            {
                clans.map(clan=>(

                    <ClanCard

                        key={clan.id}

                        clan={clan}

                    />

                ))

            }

        </div>

    )

}