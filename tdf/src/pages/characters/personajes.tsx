import { useEffect, useState } from "react";
import '../../styles/personajes.css'
import type {Character} from "@/interfaces/personajes";
import { getCollection } from "@/services/apiService";
import CharacterCard from "@/pages/characters/data.tsx";

export default function Personajes() {

    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {

        async function cargar() {

            try {

                const data = await getCollection("characters");

                setCharacters(data.characters);

            } catch (error) {

                console.error(error);

            }

        }

        cargar();

    }, []);

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