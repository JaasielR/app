import { useEffect } from "react";
import TailedBeastCard from "../../componentes/bcard.tsx";
import "../../styles/beasts.css";
import type {Beast} from "@/interfaces/beasts.ts";
import {useAppDispatch, useAppSelector} from "@/hooks/reduxhooks.ts";
import {fetchCollection} from "@/api/apiSlice.ts";

export default function TailedBeasts() {

    const dispatch = useAppDispatch();
    const beasts = useAppSelector(
        state =>
            (state.api.collections["tailed-beasts"] as Beast[]) ?? []
    );

    useEffect(() => {

        if (!beasts.length) {

            dispatch(fetchCollection("tailed-beasts"));

        }

    }, [dispatch, beasts.length]);

    return (

        <div className="tailed-page">

            <div className="tailed-grid">

                {

                    beasts.map(beast => (

                        <TailedBeastCard

                            key={beast.id}
                            beast={beast}

                        />

                    ))

                }

            </div>

        </div>

    );

}