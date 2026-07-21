import '../styles/data.css'
import { Tag } from "primereact/tag";
import type {CharacterCardProps} from "@/interfaces/personajes.ts";


export default function CharacterCard({character}:CharacterCardProps){


    return (

        <div className="ninja-card">
            <div className="image-container">

                <img
                    src={character.images[0]}
                    alt={character.name}
                    loading="lazy"
                />

            </div>

            <h2 className="character-name">
                {character.name}
            </h2>

            <div className="tags-container">

                {
                    character.natureType
                        ?.slice(0,3)
                        .map(
                            (nature:string,index:number)=>(

                                <Tag
                                    key={index}
                                    value={nature}
                                    className="nature-ta"
                                />

                            )
                        )
                }

            </div>

            <div className="character-data">
                <div>
                    <span>👤 Sexo</span>

                    <strong>
                        {character.personal?.sex}
                    </strong>
                </div>

                <div>
                    <span>🎂 Edad</span>

                    <strong>
                        {
                            character.personal?.age?.["Part I"]
                        }
                    </strong>

                </div>

                <div>
                    <span>🍃 Clan</span>

                    <strong>
                        {
                            character.personal?.clan
                            ||
                            character.clan
                            ||
                            "Desconocido"
                        }
                    </strong>

                </div>

                <div>
                    <span>⚔️ Rango</span>

                    <strong>
                        {
                            character.rank
                                ?.ninjaRank
                                ?.Gaiden
                            ||
                            character.rank
                                ?.ninjaRank
                                ?.["Part I"]
                            ||
                            "Desconocido"
                        }
                    </strong>

                </div>

            </div>


        </div>

    )

}