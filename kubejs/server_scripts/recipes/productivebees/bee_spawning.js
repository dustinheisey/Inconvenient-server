onEvent("recipes", (event) => {
    event.remove({ type: "productivebees:bee_spawning" });

    new recipes(event)
        .setType("productivebees:bee_spawning")
        .setFunction((config) =>
            event.custom({
                type: "productivebees:bee_spawning",
                ingredient: {
                    item: config.nest,
                },
                results: config.bees,
            })
        );
});
