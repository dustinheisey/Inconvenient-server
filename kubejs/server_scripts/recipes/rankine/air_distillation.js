onEvent("server.datapack.high_priority", (event) => {
    ["overworld", "nether"].forEach((dimension) => {
        event.addJson(
            `rankine:recipes/air_distillation/${dimension}_air_distillation.json`,
            {
                type: "forge:conditional",
                recipes: [
                    {
                        conditions: [
                            {
                                type: "forge:false",
                            },
                        ],
                    },
                ],
            }
        );
    });
});

onEvent("recipes", (event) => {
    new recipes(event)
        .setType("rankine:air_distillation")
        .setFunction((config) => {
            let json = {
                type: "rankine:air_distillation",
                dimensions: [config.dimension],
            };
            config.outputs.forEach((output, index) => {
                json[`output${index + 1}`] = output;
            });
            event.custom(json);
        })
        .add([
            {
                dimension: "nether",
                outputs: [
                    { item: "rankine:carbon_dioxide_gas_block", chance: 0.8 },
                    { item: "rankine:sulfur_dioxide_gas_block", chance: 0.2 },
                    { item: "rankine:oxygen_gas_block", chance: 0.4 },
                ],
            },
        ]);
});
