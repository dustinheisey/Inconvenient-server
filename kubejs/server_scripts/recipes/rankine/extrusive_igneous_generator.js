onEvent("recipes", (event) => {
    new recipes(event)
        .setType("rankine:rock_generator")
        .setFunction((config) =>
            event.custom({
                type: "rankine:rock_generator",
                genType: "extrusive_igneous",
                input1: { item: config.input },
                result: {
                    block: config.output,
                },
            })
        )
        .removeOutputs([
            "minecraft:andesite",
            "minecraft:basalt",
            "rankine:black_dacite",
            "rankine:comendite",
            "rankine:hornblende_andesite",
            "minecraft:netherrack",
            "rankine:tholeiitic_basalt",
            "rankine:rhyolite",
            "rankine:red_dacite",
            "rankine:phonolite",
            "minecraft:end_stone"
        ]);
});
