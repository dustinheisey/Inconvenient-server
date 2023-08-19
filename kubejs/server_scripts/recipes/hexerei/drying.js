onEvent("recipes", (event) => {
    new recipes(event)
        .setType("hexerei:drying_rack")
        .setFunction((config) =>
            event.custom({
                type: "hexerei:drying_rack",
                ingredients: [
                    {
                        item: config.input,
                    },
                ],
                output: {
                    item: config.output,
                },
                dryingTimeInTicks: config.drying_time || 1800,
            })
        )
        .add([
            {
                input: "minecraft:rotten_flesh",
                output: "brewinandchewin:jerky",
                drying_time: 1200,
            },
            {
                input: "kubejs:salted_hide",
                output: "kubejs:dried_hide",
            },
            {
                input: "kubejs:wet_tanned_hide",
                output: "minecraft:leather",
            },
            {
                input: "paragon_textiles:plant_fibers",
                output: "farmersdelight:straw",
                drying_time: 1200,
            },
            { input: "rankine:pulp", output: "minecraft:paper" },
        ]);
});
