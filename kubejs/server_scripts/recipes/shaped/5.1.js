onEvent("recipes", (event) => {
    new recipes(event)
        .setType("minecraft:crafting_shaped")
        .setStage("stage_5_1")
        .setFunction((config) =>
            event.shaped(config.output, config.pattern, config.key)
        )
        .modifyOutputs([
            {
                output: "naturesaura:calling_spirit",
                pattern: ["aba", "cde", "afa"],
                key: {
                    a: "bloodmagic:infusedslate",
                    b: Item.of(
                        "naturesaura:aura_bottle",
                        '{stored_type:"naturesaura:overworld"}'
                    ),
                    c: Item.of(
                        "naturesaura:aura_bottle",
                        '{stored_type:"naturesaura:end"}'
                    ),
                    d: "#botania:runes",
                    e: Item.of(
                        "naturesaura:aura_bottle",
                        '{stored_type:"naturesaura:nether"}'
                    ),
                    f: Item.of(
                        "naturesaura:aura_bottle",
                        '{stored_type:"naturesaura:other"}'
                    ),
                },
            },
            {
                output: "botania:diluted_pool",
                pattern: ["a a", "aaa"],
                key: {
                    a: "botania:livingrock_slab",
                },
            },
            {
                output: "botania:mana_pylon",
                pattern: [" a ", "bcb", " a "],
                key: {
                    a: "naturesaura:tainted_gold",
                    b: "naturesaura:sky_ingot",
                    c: "naturesaura:infused_iron_block",
                },
            },
            {
                output: "2x architects_palette:tuff_bricks",
                pattern: ["ab", "ba"],
                key: {
                    a: "rankine:mortar",
                    b: "minecraft:tuff",
                },
            },
            {
                output: "2x botania:metamorphic_forest_bricks",
                pattern: ["ab", "ba"],
                key: {
                    a: "rankine:mortar",
                    b: "botania:metamorphic_forest_stone",
                },
            },
            {
                output: "2x botania:metamorphic_plains_bricks",
                pattern: ["ab", "ba"],
                key: {
                    a: "rankine:mortar",
                    b: "botania:metamorphic_plains_stone",
                },
            },
            {
                output: "2x botania:metamorphic_mountain_bricks",
                pattern: ["ab", "ba"],
                key: {
                    a: "rankine:mortar",
                    b: "botania:metamorphic_mountain_stone",
                },
            },
            {
                output: "2x botania:metamorphic_fungal_bricks",
                pattern: ["ab", "ba"],
                key: {
                    a: "rankine:mortar",
                    b: "botania:metamorphic_fungal_stone",
                },
            },
            {
                output: "2x botania:metamorphic_swamp_bricks",
                pattern: ["ab", "ba"],
                key: {
                    a: "rankine:mortar",
                    b: "botania:metamorphic_swamp_stone",
                },
            },
            {
                output: "2x botania:metamorphic_desert_bricks",
                pattern: ["ab", "ba"],
                key: {
                    a: "rankine:mortar",
                    b: "botania:metamorphic_desert_stone",
                },
            },
            {
                output: "2x botania:metamorphic_taiga_bricks",
                pattern: ["ab", "ba"],
                key: {
                    a: "rankine:mortar",
                    b: "botania:metamorphic_taiga_stone",
                },
            },
            {
                output: "2x botania:metamorphic_mesa_bricks",
                pattern: ["ab", "ba"],
                key: {
                    a: "rankine:mortar",
                    b: "botania:metamorphic_mesa_stone",
                },
            },
            {
                output: "tconstruct:earth_cake",
                pattern: ["aaa", "bcb", "ddd"],
                key: {
                    a: "tconstruct:earth_slime_bucket",
                    b: "minecraft:glowstone_dust",
                    c: "minecraft:egg",
                    d: "minecraft:grass",
                },
            },
            {
                output: "tconstruct:sky_cake",
                pattern: ["aaa", "bcb", "ddd"],
                key: {
                    a: "tconstruct:sky_slime_bucket",
                    b: "minecraft:glowstone_dust",
                    c: "minecraft:egg",
                    d: "hem:blueleaf_grass",
                },
            },
            {
                output: "tconstruct:blood_cake",
                pattern: ["aaa", "bcb", "ddd"],
                key: {
                    a: "tconstruct:blood_bucket",
                    b: "tconstruct:blood_slime_ball",
                    c: "minecraft:egg",
                    d: "blue_skies:cherry_grass",
                },
            },
        ])
        .add([
            {
                output: "botania:mana_spreader",
                pattern: ["aaa", "bc ", "aaa"],
                key: {
                    a: "botania:livingwood",
                    b: "minecraft:gold_ingot",
                    c: "#botania:petals",
                },
            },
            {
                output: "naturesaura:tainted_gold_block",
                pattern: ["aaa", "aaa", "aaa"],
                key: {
                    a: "naturesaura:tainted_gold",
                },
            },
        ]);
});
