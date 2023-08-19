onEvent("recipes", (event) => {
    new recipes(event)
        .setType("botania:petal_apothecary")
        .setFunction((config) => event.smoking(config.output, config.input))
        .removeOutputs([
            "charcoal_pit:popcorn",
            "minecraft:bread",
            "twilightforest:cracked_towerwood",
        ])
        .modifyOutputs([
            { global: true, output: "minecraft:bread", input: "create:dough" },
            {
                global: true,
                output: "butchercraft:cooked_beef_block_item",
                input: "butchercraft:beef_block_item",
            },
            {
                global: true,
                output: "butchercraft:cooked_oxtail",
                input: "butchercraft:oxtail",
            },
            {
                global: true,
                output: "butchercraft:cooked_tongue",
                input: "butchercraft:tongue",
            },
            {
                global: true,
                output: "butchercraft:cooked_pork_block_item",
                input: "butchercraft:pork_block_item",
            },
            {
                global: true,
                output: "butchercraft:cooked_lamb_block_item",
                input: "butchercraft:lamb_block_item",
            },
            {
                global: true,
                output: "pneumaticcraft:sourdough_bread",
                input: "pneumaticcraft:sourdough",
            },
            {
                global: true,
                output: "minecraft:popped_chorus_fruit",
                input: "minecraft:chorus_fruit",
            },
        ])
        .add([
            {
                input: "farmersrespite:green_tea_leaves",
                output: "farmersrespite:yellow_tea_leaves",
            },
            {
                input: "farmersrespite:yellow_tea_leaves",
                output: "farmersrespite:black_tea_leaves",
            },
            {
                input: "delightful:cactus_flesh",
                output: "delightful:cactus_steak",
            },
        ]);
});
