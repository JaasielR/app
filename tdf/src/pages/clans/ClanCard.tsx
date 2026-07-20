import "./ClanCard.css";
import { clanImages } from "@/pages/clans/images.ts";


interface ClanCardProps{

    clan:any;

}

export default function ClanCard({clan}:ClanCardProps){

    const image =
        clanImages[clan.name]
        ||
        "https://imgs.search.brave.com/mlpCl6_aE5_tEThXd40vPzJmmGK4eitXHVdwbMBGpHA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lraWhvdy5jb20v/aW1hZ2VzL3RodW1i/L2MvYzcvTmFydXRv/LUNsYW5zLVN0ZXAt/MTYuanBnLzQ2MHB4/LU5hcnV0by1DbGFu/cy1TdGVwLTE2Lmpw/Zw";

    return(

        <div className="clan-card">
            <div className="clan-image-container">
                <img

                    src={image}
                    alt={clan.name}
                    loading="lazy"

                />

            </div>


            <h2 className="clan-name">
                {clan.name}
            </h2>


            <div className="clan-data">
                <div>
                    <span>
                        👥 Miembros
                    </span>

                    <strong>
                        {clan.characters.length}
                    </strong>

                </div>
            </div>

        </div>

    )


}