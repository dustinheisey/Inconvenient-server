onEvent("recipes", (event) => {
    event.remove({ output: "pneumaticcraft:ingot_iron_compressed" });
    event.remove({ output: "pneumaticcraft:compressed_iron_block" });

    new recipes(event)
        .setType("pneumaticcraft:explosion_crafting")
        .setFunction((config) =>
            event.custom({
                type: "pneumaticcraft:explosion_crafting",
                input: config.input,
                results: [config.output],
                loss_rate: config.loss_rate,
            })
        )
        .modifyOutputs([
            {
                global: true,
                output: { item: "pneumaticcraft:ingot_iron_compressed" },
                input: { item: "rankine:steel_ingot" },
                loss_rate: 20,
            },
            {
                global: true,
                output: { item: "pneumaticcraft:compressed_iron_block" },
                input: { item: "rankine:steel_block" },
                loss_rate: 20,
            },
        ]);
});
