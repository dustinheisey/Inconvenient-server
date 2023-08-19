onEvent("recipes", (event) => {
    new recipes(event)
        .setType("rankine:rock_generator")
        .setFunction((config) =>
            event.custom({
                type: "rankine:rock_generator",
                genType: "metamorphic",
                input1: { item: config.input },
                result: {
                    block: config.output,
                },
            })
        )
        .removeOutputs([
            "rankine:whiteschist",
            "rankine:serpentinite",
            "rankine:mica_schist",
            "rankine:phyllite",
            "rankine:greenschist",
            "rankine:gneiss",
            "rankine:eclogite",
            "rankine:blueschist",
            "rankine:rose_marble",
            "rankine:slate",
        ])
        .modifyOutputs([
            {
                output: "create:crimsite",
                input: "architects_palette:rotten_flesh_block",
            },
            {
                output: "rankine:black_marble",
                input: "twilightforest:carminite_block",
            },
            {
                output: "rankine:gray_marble",
                input: "blue_skies:sunstone_block",
            },
            {
                output: "rankine:white_marble",
                input: "blue_skies:moonstone_block",
            },
            {
                output: "rankine:mariposite",
                input: "blue_skies:taratite",
            },
        ]);
});
