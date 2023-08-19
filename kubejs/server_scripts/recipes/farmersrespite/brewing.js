onEvent("recipes", (event) => {
    new recipes(event)
        .setType("farmersrespite:brewing")
        .setFunction((config) => {
            event.custom({
                type: "farmersrespite:brewing",
                ingredients: config.inputs,
                result: {
                    item: config.output,
                },
                experience: 0.35,
                brewingtime: 2400,
                needwater: config.water,
            });
        })
        .modifyOutputs([
            {
                output: "farmersrespite:purulent_tea",
                inputs: [
                    {
                        item: "bloodmagic:weakbloodshard",
                    },
                    {
                        item: "minecraft:fermented_spider_eye",
                    },
                ],
                water: true,
                global: true,
            },
        ]);
});
