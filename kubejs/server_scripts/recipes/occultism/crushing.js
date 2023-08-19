onEvent("recipes", (event) => {
    new recipes(event)
        .setType("occultism:crushing")
        .setFunction((config) =>
            event.custom({
                type: "occultism:crushing",
                ingredient: config.input,
                result: {
                    item: config.output.id || config.output,
                    count: config.output.count || 1,
                },
                crushing_time: 200,
            })
        )
        .removeOutputs([
            "create:powdered_obsidian",
            "immersiveengineering:dust_copper",
            "immersiveengineering:dust_gold",
            "immersiveengineering:dust_iron",
            "immersiveengineering:dust_silver",
        ]);
});
