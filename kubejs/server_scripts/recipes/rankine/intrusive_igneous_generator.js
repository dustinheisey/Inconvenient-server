onEvent("recipes", (event) => {
    new recipes(event)
        .setType("rankine:rock_generator")
        .setFunction((config) =>
            event.custom({
                type: "rankine:rock_generator",
                genType: "intrusive_igneous",
                input1: { item: config.inputs[0] },
                input2: { item: config.inputs[1] },
                result: {
                    block: config.output,
                },
            })
        )
        .removeOutputs([
            "rankine:wehrlite",
            "rankine:troctolite",
            "rankine:sommanite",
            "rankine:red_porphyry",
            "rankine:pyroxenite",
            "rankine:purple_porphyry",
            "rankine:post_perovskite",
            "rankine:meteorite",
            "rankine:lherzolite",
            "rankine:komatiite",
            "rankine:harzburgite",
            "rankine:frozen_meteorite",
            "rankine:dunite",
            "rankine:diabase",
            "rankine:bridgmanham",
            "rankine:anorthosite",
            "rankine:gabbro",
            "create:veridium",
            "create:ochrum",
            "create:asurine"
        ])
        .modifyOutputs([
            {
                type: "intrusive_igneous",
                output: "minecraft:diorite",
                inputs: ["rankine:cassiterite_block", "rankine:graphite_block"],
            },
            {
                type: "intrusive_igneous",
                output: "minecraft:stone",
                inputs: ["create:asurine", "create:crimsite"],
            },
            {
                type: "intrusive_igneous",
                output: "minecraft:granite",
                inputs: ["rankine:malachite_block", "rankine:graphite_block"],
            },
        ])
        .add([
            {
                output: "rankine:slate",
                inputs: ["rankine:shale", "naturesaura:infused_iron_block"],
            },
            {
                type: "intrusive_igneous",
                output: "minecraft:andesite",
                inputs: [
                    "occultism:otherstone",
                    "twilightforest:knightmetal_block",
                ],
            },
        ]);
});
