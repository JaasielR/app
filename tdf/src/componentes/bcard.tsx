import "../styles/bcard.css";
import { Tag } from "primereact/tag";
import tailedBeastData from "../services/data.ts";
import type { Props } from "@/interfaces/beasts.ts";



export default function TailedBeastCard({ beast }: Props) {

    const customData = tailedBeastData[beast.name];

    const color = customData?.color ?? "#6b7280";

    const jinchuriki =
        customData?.representativeJinchuriki ?? "Desconocido";

    const tails =
        customData?.tails ?? "?";

    const affiliation = Array.isArray(beast.personal?.affiliation)
        ? beast.personal?.affiliation[0]
        : beast.personal?.affiliation ?? "Sin afiliación";

    const natureTypes = beast.natureType?.slice(0, 3) ?? [];

    return (

        <div
            className="tailed-card"
            style={
                {
                    "--beast-color": color
                } as React.CSSProperties
            }
        >

            <div className="tails-badge">

                {tails}

            </div>

            <div className="tailed-image-container">

                <img

                    src={customData?.image ?? beast.images?.[0]}
                    alt={beast.name}

                />

                <div className="tailed-overlay">

                    <h2>
                        {beast.name}
                    </h2>

                </div>

            </div>

            <div className="tailed-content">
                <div className="info-box">

                    <span>
                        Afiliación
                    </span>

                    <strong>
                        {affiliation}
                    </strong>

                </div>

                <div className="info-box">

                    <span>
                        Jinchūriki
                    </span>

                    <strong>
                        {jinchuriki}
                    </strong>

                </div>

                <div className="nature-tags">

                    {

                        natureTypes.map(type => (

                            <Tag

                                key={type}
                                value={type.replace(" Release","")}
                                className="nature-tag"

                            />

                        ))

                    }

                </div>

            </div>
        </div>

    );

}