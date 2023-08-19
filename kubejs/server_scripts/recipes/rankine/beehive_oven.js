onEvent("recipes", (event) => {
    new recipes(event)
        .setType("rankine:beehive_oven")
        .setFunction((config) =>
            event.custom({
                type: "rankine:beehive_oven",
                input: {
                    item: config.input,
                },
                result: config.output,
                minCookTime: config.min_time || 2400,
                maxCookTime: config.max_time || 4800,
            })
        )
        .removeOutputs([
            "rankine:zirconia_block",
            "rankine:bituminous_coal_block",
            "rankine:antimony_block",
            "rankine:lithium_block",
            "rankine:zinc_block",
            "rankine:graphite_block",
            "rankine:silicon_carbide_block",
            "rankine:tungsten_block",
            "rankine:titanium_block",
            "rankine:cadmium_block",
            "rankine:ruthenium_block",
            "rankine:thallium_block",
            "rankine:molybdenum_block",
            "rankine:nickel_block",
            "rankine:platinum_block",
            "minecraft:gold_block",
            "rankine:arsenic_block",
            "rankine:manganese_block",
            "minecraft:iron_block",
            "minecraft:glass",
            "rankine:lead_block",
            "rankine:palladium_block",
            "rankine:cobalt_block",
            "rankine:tin_block",
            "minecraft:copper_block",
            "rankine:chromium_block",
            "rankine:strontium_block",
            "rankine:bismuth_block",
            "rankine:silver_block",
            "rankine:magnesia_block",
            "rankine:coke_block",
        ])
        .modifyOutputs([
            {
                input: "rankine:chalk",
                output: "rankine:quicklime_block",
            },
        ])
        .add([
            {
                input: "tconstruct:grout",
                output: "tconstruct:seared_stone",
            },
            {
                input: "tconstruct:nether_grout",
                output: "tconstruct:scorched_stone",
            },
        ]);
});
