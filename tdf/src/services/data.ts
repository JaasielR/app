export interface TailedBeastCustomData {

    color: string;
    representativeJinchuriki: string;
    tails: number;
    image?: string;

}

const tailedBeastData: Record<string, TailedBeastCustomData> = {

    "Shukaku": {

        color: "#C89B5E",
        representativeJinchuriki: "Gaara",
        tails: 1

    },

    "Matatabi": {

        color: "#2E86FF",
        representativeJinchuriki: "Yugito Nii",
        tails: 2

    },

    "Isobu": {

        color: "#26C6DA",
        representativeJinchuriki: "Yagura Karatachi",
        tails: 3

    },

    "Son Gokū": {

        color: "#E64A19",
        representativeJinchuriki: "Rōshi",
        tails: 4

    },

    "Kokuō": {

        color: "#ECEFF1",
        representativeJinchuriki: "Han",
        tails: 5,
        image: "https://imgs.search.brave.com/BabAGPboPRUO47Y6vjqCKgz61unF7xt-jbaLaupjKys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA0Lzk3/LzMyLzA0OTczMjY4/MTBiYzM1YzIzOTFi/NjAzMGViMzhlNTA4/LmpwZw"

    },

    "Saiken": {

        color: "#9575CD",
        representativeJinchuriki: "Utakata",
        tails: 6

    },

    "Chōmei": {

        color: "#66BB6A",
        representativeJinchuriki: "Fū",
        tails: 7

    },

    "Gyūki": {

        color: "#7E57C2",
        representativeJinchuriki: "Killer B",
        tails: 8

    },

    "Kurama": {

        color: "#F57C00",
        representativeJinchuriki: "Naruto Uzumaki",
        tails: 9,
        image: "https://imgs.search.brave.com/CNCOiUncYxKZhafrAiFz_-NRIZybkpD9L-nDsyFR45g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC9iL2Qv/NC84ODI1NDgtMzAx/M3gxNjg0LWRlc2t0/b3AtaGQta3VyYW1h/LXdhbGxwYXBlci1p/bWFnZS5qcGc"

    },

    "Ten-Tails": {

        color: "#424242",
        representativeJinchuriki: "Madara Uchiha",
        tails: 10

    }

};

export default tailedBeastData;