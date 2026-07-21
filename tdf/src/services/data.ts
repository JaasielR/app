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
        tails: 1,
        image: "https://imgs.search.brave.com/z1qAaDuwP6D8HajaBNBhWMt_rWkqHEwfWTvrc_LZzeM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE0LzVh/L2U3LzE0NWFlN2E4/ZmRhNGJiOTU3M2Zi/OWVlZGVhMDRmNTQz/LmpwZw"

    },

    "Matatabi": {

        color: "#2E86FF",
        representativeJinchuriki: "Yugito Nii",
        tails: 2,
        image: "https://imgs.search.brave.com/o3Wb6eAUb2us8LdzFFYAyH7qw_Yg7vIrtWranBoy2Zo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uYXJ1/dG8tYm91dGlxdWUu/Y29tL2Nkbi9zaG9w/L2FydGljbGVzL01h/dGF0YWJpX05hcnV0/by5qcGc_dj0xNzU3/ODU3MTkwJndpZHRo/PTExMDA"

    },

    "Isobu": {

        color: "#26C6DA",
        representativeJinchuriki: "Yagura Karatachi",
        tails: 3,
        image: "https://imgs.search.brave.com/d6Dz-7EJqNTfCsiyCz-EEFi5xhIOR8ISPpHBjtU59KM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvSXNvYnUtVGhy/ZWUtVGFpbHMtaW4t/TmFydXRvLmpwZz9x/PTQ5JmZpdD1jcm9w/Jnc9ODI1JmRwcj0y"

    },

    "Son Gokū": {

        color: "#E64A19",
        representativeJinchuriki: "Rōshi",
        tails: 4,
        image: "https://imgs.search.brave.com/Z0rhQ7uukeAvhzjHnWIxlu2I38UJZWs-_TOsSwFkvAY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzJlLzcy/LzY0LzJlNzI2NGI3/ODEzY2RiNDAyMTMz/YjQwYzZkZDY1ZGI2/LmpwZw"

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
        tails: 6,
        image: "https://imgs.search.brave.com/o-q70gNZ-a9RiihN81-vDAROtCYL7e9tRNqTb7RavBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L25h/cnV0by9pbWFnZXMv/NS81OC9TYWlrZW4u/cG5nL3JldmlzaW9u/L2xhdGVzdC9zY2Fs/ZS10by13aWR0aC1k/b3duLzEzMzI_Y2I9/MjAxNDAyMTEwNzU5/NDY"

    },

    "Chōmei": {

        color: "#66BB6A",
        representativeJinchuriki: "Fū",
        tails: 7,
        image: "https://imgs.search.brave.com/S1HYdPO8iAmo8ArV3V_yHKwRB2OCjwiG9Zc19f1LOj8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/dGhvdWdodHMtYWJv/dXQtY2glQzUlOERt/ZWktdjAtZDJxY3Zp/NmRiZG1hMS5qcGc_/d2lkdGg9NjQwJmNy/b3A9c21hcnQmYXV0/bz13ZWJwJnM9NWU0/YWY0OGNiMmY5ZDJi/MzFmYzk4ZTk5Y2M2/NTE4ZDc1NmMwNGFh/NA"

    },

    "Gyūki": {

        color: "#7E57C2",
        representativeJinchuriki: "Killer B",
        tails: 8,
        image: "https://imgs.search.brave.com/pXzRMT_xkmg7Ux13mSlcU1TPf3w76_B9wAGEsN0-Byw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvR3l1a2ktRWln/aHQtVGFpbHMtaW4t/TmFydXRvLmpwZz9x/PTcwJmZpdD1jcm9w/Jnc9ODI1JmRwcj0x"

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
        tails: 10,
        image: "https://imgs.search.brave.com/OtnfeRs8xQDDpUs_RytvMeUAkI2ZSwQwjWn86fI10q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvc3Vtc3No/bmFxdjlmMS5qcGVn"

    }

};

export default tailedBeastData;