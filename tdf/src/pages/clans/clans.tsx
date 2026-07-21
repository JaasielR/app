import ClanCard from "@/componentes/ClanCard.tsx";
import {useEffect} from "react";
import'../../styles/clans.css'
import {useAppDispatch, useAppSelector} from "@/hooks/reduxhooks.ts";
import {fetchCollection} from "@/api/apiSlice.ts";

export default function Clans() {

    const dispatch = useAppDispatch();
    const clans = useAppSelector(
        state =>
            (state.api.collections["clans"] as any[]) ?? []
    );

    useEffect(() => {

        if (!clans.length) {

            dispatch(fetchCollection("clans"));

        }

    }, [dispatch, clans.length]);

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