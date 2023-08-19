onEvent("recipes", (event) => {
    new recipes(event)
        .setType("productivebees:bee_breeding")
        .setFunction((config) =>
            event.custom({
                type: "productivebees:bee_breeding",
                parent1: config.parents[0],
                parent2: config.parents[1],
                offspring: [config.offspring],
            })
        )
        .add([
            {
                parents: [
                    "productivebees:elementium",
                    "productivebees:radioactive",
                ],
                offspring: "productivebees:ender",
            },
            {
                parents: [
                    "productivebees:regenerative",
                    "productivebees:glowing",
                ],
                offspring: "productivebees:radioactive",
            },
            {
                parents: [
                    "productivebees:ashy_mining_bee",
                    "productivebees:silky",
                ],
                offspring: "productivebees:crystalline",
            },
        ]);
});
