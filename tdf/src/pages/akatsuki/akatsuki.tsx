import { useEffect} from "react";
import '../../styles/akatsuki.css'
import AkatsukiCard from "@/componentes/dat.tsx";
import type {AkatsukiMember} from "@/interfaces/akatsuki.ts";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxhooks.ts";
import {fetchCollection} from "@/api/apiSlice.ts";

export default function Akatsuki() {

    const dispatch = useAppDispatch();
    const members = useAppSelector(
        state =>
            (state.api.collections["akatsuki"] as AkatsukiMember[]) ?? []
    );

    useEffect(() => {

        if (!members.length) {

            dispatch(fetchCollection("akatsuki"));

        }

    }, [dispatch, members.length]);

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