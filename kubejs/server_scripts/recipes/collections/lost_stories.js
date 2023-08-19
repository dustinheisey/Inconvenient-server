onEvent("recipes", (event) => {
    new recipes(event)
        .setFunction((config) => {
            let pattern = config.large
                ? ["aaa", "aba", "aaa"]
                : [" a ", "aba", " a "];

            event.shaped(`kubejs:lost_story_${config.dimension}`, pattern, {
                a: `kubejs:lost_page_${config.dimension}`,
                b: config.book || "minecraft:writable_book",
            });
        })
        .add([
            {
                dimension: "everbright",
                book: "farmersdelight:canvas",
            },
            {
                dimension: "undergarden",
            },
            {
                dimension: "everdawn",
            },
            {
                dimension: "twilight",
                large: true,
            },
            {
                dimension: "nether",
                large: true,
            },
            {
                dimension: "blueleaf",
                large: true,
            },
        ]);
});

onEvent("item.right_click", (event) => {
    [
        "everbright",
        "undergarden",
        "everdawn",
        "twilight",
        "nether",
        "blueleaf",
    ].forEach((dimension) => {
        if (event.item.id == `kubejs:lost_story_${dimension}`) {
            event.item.count--;
            event.cancel();
        }
    });
});
