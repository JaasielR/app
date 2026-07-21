import { useEffect} from "react";
import '../../styles/personajes.css'
import type {Character} from "@/interfaces/personajes";
import CharacterCard from "@/componentes/data.tsx";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxhooks";
import { fetchCollection } from "@/api/apiSlice";

export default function Personajes() {

    const dispatch = useAppDispatch();
    const characters = useAppSelector(
        state =>
            (state.api.collections["characters"] as Character[]) ?? []
    );

    useEffect(() => {

        if (!characters.length) {

            dispatch(fetchCollection("characters"));

        }

    }, [dispatch, characters.length]);

    return (
        <div className="characters-grid">

            {
                characters.map(character=>(

                    <CharacterCard
                        key={character.id}
                        character={character}
                    />

                ))

            }

        </div>
    );
}