onEvent("server.datapack.high_priority", (event) => {
    addAdvancements(event, "stories", {
        item: "kubejs:lost_page_everbright",
        hide: true,
        children: [
            {
                id: "everbright",
                item: "kubejs:lost_story_everbright",
                hide: true,
            },
            {
                id: "undergarden",
                item: "kubejs:lost_story_undergarden",
                hide: true,
            },
            {
                id: "everdawn",
                item: "kubejs:lost_story_everdawn",
                hide: true,
            },
            {
                id: "twilight",
                item: "kubejs:lost_story_twilight",
                title: "The Rise of A Dictator",
                hide: true,
            },
            {
                id: "nether",
                item: "kubejs:lost_story_nether",
                hide: true,
            },
            {
                id: "blueleaf",
                item: "kubejs:lost_story_blueleaf",
                hide: true,
            },
        ],
    });
});
