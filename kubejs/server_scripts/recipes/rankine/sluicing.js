onEvent("recipes", (event) => {
    let add_config = [
        {
            input: "blue_skies:turquoise_grass_block",
            output_block: `blue_skies:turquoise_dirt`,
            outputs: [
                { id: "blue_skies:winter_leaf_seeds", weight: 1 },
                { id: "blue_skies:scalefruit_seeds", weight: 1 },
                { id: "blue_skies:pine_fruit_seeds", weight: 1 },
                { id: "occultism:datura_seeds", weight: 1 },
                { id: "rankine:cranberries", weight: 1 },
                { id: "rankine:pokeberries", weight: 1 },
                { id: "rankine:strawberries", weight: 1 },
                { id: "rankine:pineapple", weight: 1 },
                { id: "rankine:elderberries", weight: 1 },
                { id: "rankine:snowberries", weight: 1 },
                { id: "rankine:blueberries", weight: 1 },
                { id: "rankine:raspberries", weight: 1 },
                { id: "rankine:blackberries", weight: 1 },
                { id: "rankine:banana_yucca", weight: 1 },
                { id: "rankine:juniper_berries", weight: 1 },
                { id: "minecraft:dandelion", weight: 1 },
                { id: "minecraft:rose_bush", weight: 1 },
                { id: "farmersrespite:coffee_berries", weight: 1 },
                { id: "farmersrespite:tea_seeds", weight: 1 },
                { id: "rankine:cotton_seeds", weight: 1 },
            ],
            tool: { item: "rankine:steel_gold_pan" },
        },
        {
            input: "rankine:desert_sand",
            output_block: `minecraft:sand`,
            outputs: [{ id: "minecraft:cactus", weight: 1 }],
            tool: { item: "rankine:pewter_gold_pan" },
        },
        {
            input: "blue_skies:lunar_grass_block",
            output_block: `blue_skies:lunar_dirt`,
            outputs: [
                { id: "hexerei:sage_seed", weight: 1 },
                { id: "blue_skies:fiery_bean_seeds", weight: 1 },
                { id: "blue_skies:scalefruit_seeds", weight: 1 },
                { id: "hexerei:mandrake_root", weight: 1 },
                { id: "minecraft:cocoa_beans", weight: 1 },
            ],
            tool: { item: "rankine:steel_gold_pan" },
        },
        {
            input: "undergarden:deepturf_block",
            output_block: `undergarden:deepsoil`,
            outputs: [
                { id: "undergarden:gloomgourd_seeds", weight: 1 },
                { id: "undergarden:underbeans", weight: 1 },
                { id: "minecraft:sugar_cane", weight: 1 },
            ],
            tool: { item: "rankine:steel_gold_pan" },
        },
        {
            input: "minecraft:soul_soil",
            output_block: `minecraft:soul_sand`,
            outputs: [{ id: "minecraft:nether_wart", weight: 1 }],
            tool: { item: "rankine:steel_gold_pan" },
        },
    ];

    let grasses = [
        "rankine:humus_grass_block",
        "rankine:loam_grass_block",
        "rankine:silty_loam_grass_block",
        "rankine:loamy_sand_grass_block",
        "rankine:sandy_loam_grass_block",
        "rankine:clay_loam_grass_block",
        "rankine:sandy_clay_loam_grass_block",
        "rankine:silty_clay_loam_grass_block",
        "rankine:sandy_clay_grass_block",
        "rankine:silty_clay_grass_block",
    ];

    grasses.forEach((id) => {
        add_config.push({
            input: id,
            output_block: "minecraft:dirt",
            outputs: [
                { id: "minecraft:sand", weight: 16.5 },
                { id: "rankine:silt", weight: 1 },
                { id: "minecraft:beetroot_seeds", weight: 1 },
                { id: "minecraft:potato", weight: 1 },
                { id: "minecraft:carrot", weight: 1 },
                { id: "minecraft:melon_seeds", weight: 1 },
                { id: "minecraft:pumpkin_seeds", weight: 1 },
                { id: "minecraft:wheat_seeds", weight: 1 },
                { id: "rankine:asparagus_seeds", weight: 1 },
                { id: "rankine:barley_seeds", weight: 1 },
                { id: "rankine:camphor_basil_seeds", weight: 1 },
                { id: "rankine:corn_seeds", weight: 1 },
                { id: "rankine:jute_seeds", weight: 1 },
                { id: "rankine:millet_seeds", weight: 1 },
                { id: "rankine:oat_seeds", weight: 1 },
                { id: "rankine:rice_seeds", weight: 1 },
                { id: "rankine:rye_seeds", weight: 1 },
                { id: "rankine:sorghum_seeds", weight: 1 },
                { id: "paragon_textiles:flax_seeds", weight: 1 },
                { id: "farmersdelight:cabbage_seeds", weight: 1 },
                { id: "farmersdelight:tomato_seeds", weight: 1 },
                { id: "farmersdelight:onion", weight: 1 },
            ],
            tool: {
                item: "rankine:pewter_gold_pan",
            },
        });
    });

    new recipes(event)
        .setType("rankine:sluicing")
        .setFunction((config) => {
            let json = {
                type: "rankine:sluicing",
                input: { item: config.input },
                tool: {
                    tag: config.tool.tag,
                    item: config.tool.item,
                },
                outputs: [
                    {
                        item: config.output_block || "minecraft:dirt",
                        weight: 100,
                    },
                ],
            };

            config.outputs.forEach((output) => {
                json.outputs.push({
                    item: output.id,
                    weight: output.weight,
                });
            });

            event.custom(json);
        })
        .removeInputs([
            "rankine:laterite",
            "rankine:light_gravel",
            "minecraft:gravel",
        ])
        .add(add_config);
});
