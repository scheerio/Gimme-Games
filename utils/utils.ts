const dummyArray = [
    {
        id: 0,
        game: "Wordpunch",
        description: "Can you guess today's word using the hints? If you like wordle and hangman, you'll get a kick out of this game.",
        hashtags: [
            {
                id: 0,
                label: "wordpunch"
            },
            {
                id: 1,
                label: "stumped"
            },
            {
                id: 2,
                label: "goodguess"
            }
        ]
    },
    {
        id: 1,
        game: "More Coming Soon",
        description: "Do you have a game idea of your own? If so, let's chat and create something. New games are always welcome!",
        hashtags: [
            {
                id: 0,
                label: "newstuff"
            },
            {
                id: 1,
                label: "gameideas"
            },
            {
                id: 2,
                label: "reachout"
            }
        ]
    }
    // {
    //     id: 2,
    //     game: "Cheesebread",
    //     description: "Just a silly game for humans. Nothing crazy. Try to get as many treats as you can.",
    //     hashtags: [
    //         {
    //             id: 0,
    //             label: "cheesey"
    //         },
    //         {
    //             id: 1,
    //             label: "stumped"
    //         },
    //         {
    //             id: 2,
    //             label: "goodguess"
    //         }
    //     ]
    // },
    // {
    //     id: 3,
    //     game: "Wordpunch",
    //     description: "Just a silly game for humans. Nothing crazy. Try to get as many treats as you can.",
    //     hashtags: [
    //         {
    //             id: 0,
    //             label: "bingbong"
    //         },
    //         {
    //             id: 1,
    //             label: "stumped"
    //         },
    //         {
    //             id: 2,
    //             label: "goodguess"
    //         }
    //     ]
    // },
    // {
    //     id: 4,
    //     game: "Wordpunch",
    //     description: "Just a silly game for humans. Nothing crazy. Try to get as many treats as you can.",
    //     hashtags: [
    //         {
    //             id: 0,
    //             label: "bingbong"
    //         },
    //         {
    //             id: 1,
    //             label: "stumped"
    //         },
    //         {
    //             id: 2,
    //             label: "goodguess"
    //         }
    //     ]
    // }
];

const provideDummyData = () =>{
    return dummyArray;
}

export { provideDummyData };