import { useEffect} from "react";
import VillageCard from "@/componentes/Card.tsx";
import "../../styles/aldeas.css";
import type {Village} from "@/interfaces/aldeas.ts";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxhooks.ts";
import {fetchCollection} from "@/api/apiSlice.ts";



export default function Villas(){

    const dispatch = useAppDispatch();
    const villages = useAppSelector(
        state =>
            (state.api.collections["villages"] as Village[]) ?? []
    );

    useEffect(() => {

        if (!villages.length) {

            dispatch(fetchCollection("villages"));

        }

    }, [dispatch, villages.length]);

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