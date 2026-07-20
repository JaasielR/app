import { useEffect, useState } from "react";
import { getCollection } from "@/services/apiService";
import VillageCard from "@/pages/aldeas/Card";
import "./aldeas.css";

interface Village {

    id:number;
    name:string;
    characters:number[];

}

export default function Villas(){

    const [villages,setVillages]=useState<Village[]>([]);

    useEffect(()=>{

        async function loadVillages(){

            const data=await getCollection("villages");

            const uniqueVillages=data.villages.filter(
                (village:Village,index:number,self:Village[])=>

                    index===self.findIndex(
                        v=>v.name===village.name
                    )
            );

            setVillages(uniqueVillages);

        }

        loadVillages();

    },[]);

    return(

        <div className="villages-page">
            <div className="villages-grid">

                {

                    villages.map(village=>(

                        <VillageCard

                            key={village.id}
                            village={village}

                        />

                    ))

                }

            </div>
        </div>

    );

}