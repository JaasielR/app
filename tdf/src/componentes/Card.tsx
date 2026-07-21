import type { Props } from "@/interfaces/aldeas.ts";
import "../styles/Card.css";
import villageImages from "@/services/images.ts";


export default function VillageCard({ village }: Props) {

    const image =
        villageImages[village.name] ??
        "https://imgs.search.brave.com/dRil-Lx0jbq6vhCXHPhLR-q1yeBkNswwAF1pXWB2z0Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY29kaWdv/ZXNwYWd1ZXRpLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wNC9pbWFnZW5f/MjAyNC0wNC0yMl8x/NjI1MjAzMDEuanBn/P3Jlc2l6ZT0xMjgw/LDc1MyZzc2w9MQ";

    return (

        <div className="village-card">
            <div className="village-image-container">

                <img
                    src={image}
                    alt={village.name}
                    loading="lazy"
                />


                <div className="village-overlay">

                    <h2 className="village-name">
                        {village.name}
                    </h2>

                </div>

            </div>

            <div className="village-info">
                <div className="members-box">

                    <span>
                        Miembros
                    </span>

                    <strong>
                        {village.characters.length}
                    </strong>

                </div>
            </div>

        </div>

    );

}