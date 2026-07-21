import type { Props } from "@/interfaces/akatsuki.ts";
import '../styles/dat.css'
import { Tag } from "primereact/tag";


export default function AkatsukiCard({member}:Props){

    const sex =
        member.personal?.sex ??
        "Desconocido";


    const classification =
        member.personal?.classification?.[0] ??
        "S-Rank";


    const occupation =

        Array.isArray(member.personal?.occupation)

            ? member.personal?.occupation[0]
            : member.personal?.occupation ??
            member.rank?.ninjaRank?.Gaiden ??

            member.rank?.ninjaRank?.["Part I"] ??
            "Miembro";


    const age =

        member.personal?.age?.["Part II"] ??
        member.personal?.age?.["Part I"] ??
        "--";


    return(

        <div className="akatsuki-card">
            <div className="akatsuki-header">

                ☁ AKATSUKI

            </div>

            <div className="akatsuki-image-container">
                <img

                    src={member.images?.[0]}
                    alt={member.name}
                    loading="lazy"

                />
            </div>

            <h2 className="akatsuki-name">
                {member.name}
            </h2>

            <div className="akatsuki-tags">

                {
                    member.natureType
                        ?.slice(0,3)
                        .map((nature,index)=>(

                            <Tag

                                key={index}
                                value={nature}
                                className="akatsuki-tag"

                            />

                        ))

                }

            </div>

            <div className="akatsuki-data">

                <div>
                    <span>👤 Sexo</span>

                    <strong>
                        {sex}
                    </strong>

                </div>

                <div>
                    <span>🎂 Edad</span>

                    <strong>
                        {age}
                    </strong>

                </div>

                <div>
                    <span>☠ Clase</span>

                    <strong>
                        {classification}
                    </strong>

                </div>

                <div>
                    <span>⚔ Rol</span>

                    <strong>
                        {occupation}
                    </strong>

                </div>

            </div>


        </div>

    );

}