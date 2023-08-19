onEvent("recipes", (event) => {
    let modify_config = [
        {
            global: true,
            output: "hexerei:book_of_shadows",
            pattern: ["aba", "cde", "aaa"],
            key: {
                a: `minecraft:leather`,
                b: "architects_palette:twisted_sapling",
                c: "hexerei:animal_fat",
                d: "minecraft:book",
                e: "hexerei:sage_seed",
            },
        },
        {
            global: true,
            output: `create:controls`,
            pattern: ["a", "b", "c"],
            key: {
                a: `minecraft:lever`,
                b: "create:railway_casing",
                c: "create:electron_tube",
            },
        },
        {
            global: true,
            output: "bloodmagic:alchemytable",
            pattern: ["aaa", "bcb", "ded"],
            key: {
                a: `rankine:black_marble`,
                b: "#minecraft:planks",
                c: "blue_skies:horizonite_ingot",
                d: "extendedcrafting:black_iron_ingot",
                e: "bloodmagic:blankslate",
            },
        },
        {
            global: true,
            output: `chipped:carpenters_table`,
            pattern: ["  a", "bcb", "deb"],
            key: {
                a: `minecraft:iron_ingot`,
                b: "#minecraft:logs",
                c: "minecraft:crafting_table",
                d: "rankine:sawdust",
                e: "#minecraft:planks",
            },
        },
        {
            global: true,
            output: `create:electron_tube`,
            pattern: ["a", "b", "c"],
            key: {
                a: "create:polished_rose_quartz",
                b: "rankine:promethium_ingot",
                c: "chemlib:iron_plate",
            },
        },
        {
            output: "2x bloodmagic:bloodstonebrick",
            pattern: ["ab", "ba"],
            key: {
                a: "rankine:mortar",
                b: "bloodmagic:largebloodstonebrick",
            },
        },
        {
            output: `2x immersiveengineering:sheetmetal_gold`,
            pattern: ["aba", "aba", "aba"],
            key: { a: `minecraft:gold_nugget`, b: `minecraft:gold_ingot` },
        },

        {
            output: `2x immersiveengineering:sheetmetal_silver`,
            pattern: ["aba", "aba", "aba"],
            key: { a: `rankine:silver_nugget`, b: `rankine:silver_ingot` },
        },
        {
            output: `2x rankine:copper_sheetmetal`,
            pattern: ["aba", "aba", "aba"],
            key: { a: `rankine:copper_nugget`, b: `minecraft:copper_ingot` },
        },
        {
            output: `4x rankine:iron_sheetmetal`,
            pattern: [" a ", "a a", " a "],
            key: { a: `create:iron_sheet` },
        },
        {
            output: `4x immersiveengineering:sheetmetal_gold`,
            pattern: [" a ", "a a", " a "],
            key: { a: `create:golden_sheet` },
        },
        {
            output: `4x rankine:brass_sheetmetal`,
            pattern: [" a ", "a a", " a "],
            key: { a: `create:brass_sheet` },
        },
        {
            output: `4x rankine:copper_sheetmetal`,
            pattern: [" a ", "a a", " a "],
            key: { a: `create:copper_sheet` },
        },
        {
            global: true,
            output: `2x tconstruct:scorched_bricks`,
            pattern: ["ab", "ba"],
            key: { a: `tconstruct:scorched_brick`, b: "rankine:mortar" },
        },
        {
            global: true,
            output: `2x botania:livingrock_bricks`,
            pattern: ["ab", "ba"],
            key: { a: `botania:livingrock`, b: "rankine:mortar" },
        },
        {
            global: true,
            output: `cataclysm:witherite_block`,
            pattern: ["aaa", "aaa", "aaa"],
            key: { a: `cataclysm:witherite_ingot` },
        },
        {
            global: true,
            output: `rankine:alloy_furnace`,
            pattern: ["aba", "aba", "aca"],
            key: {
                a: `rankine:ultra_high_refractory_bricks`,
                b: "rankine:brass_block",
                c: "minecraft:soul_campfire",
            },
        },
        {
            output: "rankine:totem_of_blazing",
            pattern: ["aaa", "aba", "aaa"],
            key: {
                a: "cataclysm:ignitium_ingot",
                b: "botania:blaze_block",
            },
        },
        {
            output: "rankine:totem_of_infusing",
            pattern: ["aaa", "aba", "aaa"],
            key: {
                a: "tconstruct:queens_slime_ingot",
                b: "rankine:sulfur_block",
            },
        },
        {
            output: "rankine:totem_of_softening",
            pattern: ["aaa", "aba", "aaa"],
            key: {
                a: "tconstruct:manyullyn_ingot",
                b: "minecraft:quartz_block",
            },
        },
        {
            output: "rankine:glass_cutter",
            pattern: [" aa", " ba", "b  "],
            key: {
                a: "minecraft:quartz",
                b: "rankine:black_gold_ingot",
            },
        },
    ];

    [
        "rose_gold",
        "white_gold",
        "green_gold",
        "blue_gold",
        "purple_gold",
        "black_gold",
        "pewter",
        "bronze",
        "brass",
        "sterling_silver",
        "amalgam",
    ].forEach((id) => {
        modify_config.push({
            output: `2x rankine:${id}_sheetmetal`,
            pattern: ["aba", "aba", "aba"],
            key: { a: `rankine:${id}_nugget`, b: `rankine:${id}_ingot` },
        });
    });

    ["aluminum", "tin", "lead"].forEach((id) => {
        modify_config.push({
            output: `2x rankine:${id}_sheetmetal`,
            pattern: ["aba", "aba", "aba"],
            key: { a: `rankine:${id}_nugget`, b: `rankine:${id}_ingot` },
        });
    });

    new recipes(event)
        .setType("minecraft:crafting_shaped")
        .setStage("stage_4")
        .setFunction((config) =>
            event.shaped(config.output, config.pattern, config.key)
        )
        .modifyOutputs(modify_config)
        .add([
            {
                output: "minecraft:brewing_stand",
                pattern: [" a ", "bbb"],
                key: { a: "minecraft:blaze_rod", b: "#forge:stone" },
            },
            {
                output: "minecraft:piston",
                pattern: ["aaa", "bcb", "bdb"],
                key: {
                    a: "#minecraft:planks",
                    b: "minecraft:cobblestone",
                    c: "minecraft:iron_ingot",
                    d: "minecraft:redstone",
                },
            },
        ]);
});
