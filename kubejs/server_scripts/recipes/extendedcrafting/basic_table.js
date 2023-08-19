onEvent("recipes", (event) => {
    new recipes(event)
        .setType("extendedcrafting:shaped_table")
        .setFunction((config) =>
            event.custom({
                type: "extendedcrafting:shaped_table",
                pattern: config.pattern,
                key: config.key,
                result: {
                    item: config.output,
                },
            })
        )
        .removeOutputs([
            "extendedcrafting:ultimate_singularity",
            "extendedcrafting:crystaltine_ingot",
        ])
        .modifyOutputs([
            {
                global: true,
                output: "immersiveengineering:windmill",
                pattern: ["aaa", "aba", "aaa"],
                key: {
                    a: "immersiveengineering:windmill_blade",
                    b: "rankine:steel_ingot",
                },
            },
            {
                global: true,
                output: "immersiveengineering:watermill",
                pattern: [" a ", "aba", " a "],
                key: {
                    a: "immersiveengineering:waterwheel_segment",
                    b: "rankine:steel_ingot",
                },
            },
            {
                global: true,
                output: "immersive_aircraft:hull",
                pattern: ["aaa", "bbb", "aaa"],
                key: {
                    a: "create:shadow_steel_casing",
                    b: "rankine:promethium_ingot",
                },
            },
            {
                global: true,
                output: "immersive_aircraft:propeller",
                pattern: ["aa ", " a ", " aa"],
                key: {
                    a: "rankine:promethium_ingot",
                },
            },
            {
                global: true,
                output: "immersive_aircraft:sail",
                pattern: ["aab", "aab", "aab"],
                key: {
                    a: "immersiveengineering:hemp_fabric",
                    b: "immersiveengineering:hemp_fiber",
                },
            },
            {
                global: true,
                output: "rankine:air_distillation_packing",
                pattern: ["aba", "bab", "aba"],
                key: {
                    a: "rankine:aluminum_sheetmetal",
                    b: "architects_palette:warpstone",
                },
            },
            {
                global: true,
                output: "rankine:gas_bottler",
                pattern: ["aba", "bab", "aba"],
                key: {
                    a: "rankine:purple_gold_sheetmetal",
                    b: "rankine:brass_ingot",
                },
            },
            {
                global: true,
                output: "rankine:gas_vent",
                pattern: ["aba", "bcb", "aba"],
                key: {
                    a: "rankine:copper_sheetmetal",
                    b: "tconstruct:scorched_glass",
                    c: "minecraft:glass_bottle",
                },
            },

            {
                global: true,
                output: "rankine:distillation_tower",
                pattern: ["aba", "aca", "ada"],
                key: {
                    a: "rankine:aluminum_sheetmetal",
                    b: "occultism:iesnium_block",
                    c: "rankine:rose_gold_block",
                    d: "cataclysm:ignitium_block",
                },
            },

            {
                global: true,
                output: "rankine:evaporation_tower",
                pattern: ["aaa", "bcb", "ada"],
                key: {
                    a: "rankine:promethium_ingot",
                    b: "minecraft:magma_block",
                    c: "immersivepetroleum:crudeoil_bucket",
                    d: "minecraft:hopper",
                },
            },

            {
                global: true,
                output: "extendedcrafting:advanced_table",
                pattern: ["aba", "cdc", "aea"],
                key: {
                    a: "extendedcrafting:advanced_component",
                    b: "extendedcrafting:advanced_catalyst",
                    c: "extendedcrafting:basic_table",
                    d: "bloodmagic:demonslate",
                    e: "extendedcrafting:black_iron_slate",
                },
            },
            {
                global: true,
                output: "cold_sweat:soulspring_lamp",
                pattern: [" a ", "bcb", " d "],
                key: {
                    a: "tconstruct:slimesteel_nugget",
                    b: "twilightforest:knightmetal_ingot",
                    c: "minecraft:soul_lantern",
                    d: "minecraft:chain",
                },
            },
            {
                global: true,
                output: "rankine:wood_tier_crushing_head",
                pattern: [" a ", "aba", "cdc"],
                key: {
                    a: "blue_skies:horizonite_ingot",
                    b: "twilightforest:carminite",
                    c: "minecraft:sticky_piston",
                    d: "blue_skies:horizonite_block",
                },
            },
            {
                output: "create:shaft",
                pattern: ["a", "a"],
                key: { a: "create:andesite_alloy" },
            },
            {
                output: "create:cogwheel",
                pattern: ["ab"],
                key: { a: "create:shaft", b: "undergarden:wigglewood_planks" },
            },
            {
                output: "create:large_cogwheel",
                pattern: ["ab"],
                key: {
                    a: "create:cogwheel",
                    b: "undergarden:wigglewood_planks",
                },
            },
            {
                output: "create:hand_crank",
                pattern: ["aaa", "  b"],
                key: {
                    a: "undergarden:wigglewood_planks",
                    b: "create:andesite_alloy",
                },
            },
            {
                output: "create:millstone",
                pattern: ["a", "b", "c"],
                key: {
                    a: "create:cogwheel",
                    b: "create:andesite_casing",
                    c: "rankine:gray_marble",
                },
            },
            {
                output: "minecraft:smoker",
                pattern: [" a ", "aba", " a "],
                key: {
                    a: "undergarden:wigglewood_log",
                    b: "minecraft:furnace",
                },
            },
            {
                output: "minecraft:blast_furnace",
                pattern: ["aaa", "aba", "ccc"],
                key: {
                    a: "minecraft:iron_ingot",
                    b: "minecraft:furnace",
                    c: "minecraft:smooth_stone",
                },
            },
            {
                output: "minecraft:cartography_table",
                pattern: ["aa", "bb", "bb"],
                key: {
                    a: "minecraft:paper",
                    b: "undergarden:wigglewood_planks",
                },
            },
            {
                output: "minecraft:fletching_table",
                pattern: ["aa", "bb", "bb"],
                key: {
                    a: "minecraft:flint",
                    b: "undergarden:wigglewood_planks",
                },
            },
            {
                output: "minecraft:grindstone",
                pattern: ["aba", "c c"],
                key: {
                    a: "undergarden:twistytwig",
                    b: "minecraft:stone_slab",
                    c: "undergarden:wigglewood_planks",
                },
            },
            {
                output: "minecraft:stonecutter",
                pattern: [" a ", "bbb"],
                key: { a: "minecraft:iron_ingot", b: "minecraft:smooth_stone" },
            },
            {
                output: "minecraft:piston",
                pattern: ["aaa", "bcb", "bdb"],
                key: {
                    a: "blue_skies:dusk_planks",
                    b: "rankine:gray_marble",
                    c: "create:andesite_alloy",
                    d: "blue_skies:horizonite_ingot",
                },
            },
            {
                output: "minecraft:compass",
                pattern: [" a ", "aba", " a "],
                key: {
                    a: "blue_skies:horizonite_ingot",
                    b: "minecraft:redstone",
                },
            },
            {
                output: "minecraft:brewing_stand",
                pattern: [" a ", "bbb"],
                key: {
                    a: "minecraft:blaze_rod",
                    b: "twilightforest:mazestone",
                },
            },
            {
                output: "minecraft:crossbow",
                pattern: ["aba", "cdc", " a "],
                key: {
                    a: "undergarden:twistytwig",
                    b: "minecraft:iron_ingot",
                    c: "minecraft:string",
                    d: "minecraft:tripwire_hook",
                },
            },
            {
                output: "minecraft:map",
                pattern: ["aaa", "aba", "aaa"],
                key: {
                    a: "minecraft:paper",
                    b: "minecraft:compass",
                },
            },
            {
                output: "blue_skies:tool_box",
                pattern: ["aa", "bb", "bb"],
                key: {
                    a: "blue_skies:ventium_ingot",
                    b: "blue_skies:maple_planks",
                },
            },
            {
                output: "charcoal_pit:mechanical_bellows",
                pattern: [" a ", "bcd", " a "],
                key: {
                    a: "minecraft:smooth_stone",
                    b: "minecraft:redstone",
                    c: "charcoal_pit:bellows",
                    d: "minecraft:iron_ingot",
                },
            },
            {
                output: "smallships:oak_brigg",
                pattern: ["aba", "cbc", "ddd"],
                key: {
                    a: "minecraft:lead",
                    b: "balanced_crates:oak_crate",
                    c: "smallships:sail",
                    d: "smallships:oak_cog",
                },
            },
            {
                output: "smallships:spruce_brigg",
                pattern: ["aba", "cbc", "ddd"],
                key: {
                    a: "minecraft:lead",
                    b: "balanced_crates:spruce_crate",
                    c: "smallships:sail",
                    d: "smallships:spruce_cog",
                },
            },
            {
                output: "smallships:birch_brigg",
                pattern: ["aba", "cbc", "ddd"],
                key: {
                    a: "minecraft:lead",
                    b: "balanced_crates:birch_crate",
                    c: "smallships:sail",
                    d: "smallships:birch_cog",
                },
            },
            {
                output: "smallships:jungle_brigg",
                pattern: ["aba", "cbc", "ddd"],
                key: {
                    a: "minecraft:lead",
                    b: "balanced_crates:jungle_crate",
                    c: "smallships:sail",
                    d: "smallships:jungle_cog",
                },
            },
            {
                output: "smallships:acacia_brigg",
                pattern: ["aba", "cbc", "ddd"],
                key: {
                    a: "minecraft:lead",
                    b: "balanced_crates:acacia_crate",
                    c: "smallships:sail",
                    d: "smallships:acacia_cog",
                },
            },
            {
                output: "smallships:dark_oak_brigg",
                pattern: ["aba", "cbc", "ddd"],
                key: {
                    a: "minecraft:lead",
                    b: "balanced_crates:dark_oak_crate",
                    c: "smallships:sail",
                    d: "smallships:dark_oak_cog",
                },
            },
            {
                output: "twilightforest:magic_map",
                pattern: ["aaa", "aba", "aaa"],
                key: {
                    a: "minecraft:paper",
                    b: "twilightforest:magic_map_focus",
                },
            },
            {
                output: "twilightforest:maze_map",
                pattern: ["aaa", "aba", "aaa"],
                key: {
                    a: "minecraft:paper",
                    b: "twilightforest:maze_map_focus",
                },
            },
            {
                output: "twilightforest:ore_map",
                pattern: ["aaa", "aba", "aaa"],
                key: {
                    a: "minecraft:paper",
                    b: "blue_skies:horizonite_block",
                },
            },
            {
                output: "balanced_crates:warped_crate",
                pattern: ["aba", "bcb", "aba"],
                key: {
                    a: "minecraft:warped_planks",
                    b: "hexerei:willow_slab",
                    c: "minecraft:chest",
                },
            },
            {
                output: "balanced_crates:oak_crate",
                pattern: ["aba", "bcb", "aba"],
                key: {
                    a: "minecraft:oak_planks",
                    b: "hexerei:willow_slab",
                    c: "minecraft:chest",
                },
            },
            {
                output: "balanced_crates:spruce_crate",
                pattern: ["aba", "bcb", "aba"],
                key: {
                    a: "minecraft:spruce_planks",
                    b: "hexerei:willow_slab",
                    c: "minecraft:chest",
                },
            },
            {
                output: "balanced_crates:birch_crate",
                pattern: ["aba", "bcb", "aba"],
                key: {
                    a: "minecraft:birch_planks",
                    b: "hexerei:willow_slab",
                    c: "minecraft:chest",
                },
            },
            {
                output: "balanced_crates:jungle_crate",
                pattern: ["aba", "bcb", "aba"],
                key: {
                    a: "minecraft:jungle_planks",
                    b: "hexerei:willow_slab",
                    c: "minecraft:chest",
                },
            },
            {
                output: "balanced_crates:acacia_crate",
                pattern: ["aba", "bcb", "aba"],
                key: {
                    a: "minecraft:acacia_planks",
                    b: "hexerei:willow_slab",
                    c: "minecraft:chest",
                },
            },
            {
                output: "balanced_crates:dark_oak_crate",
                pattern: ["aba", "bcb", "aba"],
                key: {
                    a: "minecraft:dark_oak_planks",
                    b: "hexerei:willow_slab",
                    c: "minecraft:chest",
                },
            },
            {
                output: "balanced_crates:crimson_crate",
                pattern: ["aba", "bcb", "aba"],
                key: {
                    a: "minecraft:crimson_planks",
                    b: "hexerei:willow_slab",
                    c: "minecraft:chest",
                },
            },
        ])
        .add([
            {
                output: "extendedcrafting:basic_auto_table",
                pattern: ["aba", "cdc", "aba"],
                key: {
                    a: "extendedcrafting:black_iron_ingot",
                    b: "extendedcrafting:redstone_component",
                    c: "extendedcrafting:redstone_catalyst",
                    d: "extendedcrafting:basic_table",
                },
            },
        ]);
});
