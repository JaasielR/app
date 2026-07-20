import { useEffect, useState } from "react";
import { getCollection } from "@/services/apiService";
import TailedBeastCard from "./bcard";
import "./beasts.css";

interface Beast {

    id: number;
    name: string;
    images: string[];
    natureType?: string[];
    personal?: {

        affiliation?: string | string[];

    };

}

export default function TailedBeasts() {

    const [beasts, setBeasts] = useState<Beast[]>([]);

    useEffect(() => {

        getCollection("tailed-beasts")
            .then(data => {

                setBeasts(data["tailed-beasts"]);

            });

    }, []);

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