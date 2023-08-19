onEvent("server.datapack.high_priority", (event) => {
    [
        "corrupted_coal",
        "corrupted_copper",
        "corrupted_gold",
        "corrupted_iron",
        "corrupted_netherite",
        "gold_ore_from_gilded",
        "sand_coal",
        "sand_gold",
        "sand_iron",
        "sulfur_from_lava",
        "bread",
        "sulfur_from_sigil",
        "string"
    ].forEach((recipe) => {
        event.addJson(`bloodmagic:recipes/alchemytable/${recipe}.json`, {});
    });
});

onEvent("recipes", (event) => {
    new recipes(event)
        .setType("bloodmagic:alchemytable")
        .setFunction((config) =>
            event.custom({
                type: "bloodmagic:alchemytable",
                input: config.inputs,
                output: {
                    item: config.output.item || config.output,
                    nbt: config.output.nbt,
                    count: config.output.count || 1,
                },
                syphon: config.syphon || 4000,
                ticks: config.ticks || 200,
                upgradeLevel: config.level || 1,
            })
        )
        .modifyOutputs([
            {
                inputs: [
                    { item: "bloodmagic:slate_vial" },
                    { item: "hexerei:yellow_dock_flowers" },
                    { item: "minecraft:bow" },
                    { item: "extendedcrafting:luminessence" },
                ],
                output: { item: "bloodmagic:bow_velocity_anointment" },
                syphon: 500,
                ticks: 100,
            },
            {
                inputs: [
                    { item: "bloodmagic:slate_vial" },
                    { item: "blue_skies:blaze_bud" },
                    { item: "minecraft:furnace" },
                    { item: "create:cinder_flour" },
                ],
                output: { item: "bloodmagic:smelting_anointment" },
                syphon: 500,
                ticks: 100,
            },
            {
                inputs: [
                    { item: "bloodmagic:slate_vial" },
                    { item: "hexerei:dried_belladonna_flowers" },
                    { item: "minecraft:redstone" },
                    { item: "minecraft:sugar" },
                ],
                output: { item: "bloodmagic:holy_water_anointment" },
                syphon: 500,
                ticks: 100,
            },
            {
                inputs: [
                    { item: "bloodmagic:slate_vial" },
                    { item: "hexerei:dried_mandrake_flowers" },
                    { item: "minecraft:redstone" },
                    { item: "create:powdered_obsidian" },
                ],
                output: { item: "bloodmagic:fortune_anointment" },
                syphon: 500,
                ticks: 100,
            },
            {
                inputs: [
                    { item: "bloodmagic:plantoil" },
                    { item: "bloodmagic:plantoil" },
                    { item: "rankine:carbon" },
                ],
                output: { item: "bloodmagic:saltpeter", count: 3 },
                syphon: 200,
                ticks: 200,
            },
            {
                inputs: [
                    { item: "bloodmagic:plantoil" },
                    { item: "bloodmagic:plantoil" },
                    { item: "rankine:carbon" },
                ],
                output: { item: "bloodmagic:saltpeter", count: 3 },
                syphon: 200,
                ticks: 200,
            },
            {
                inputs: [
                    { item: "rankine:sulfur" },
                    { item: "bloodmagic:saltpeter" },
                    { item: "minecraft:coal" },
                ],
                output: { item: "minecraft:gunpowder", count: 3 },
                syphon: 0,
                ticks: 0,
            },
        ]);
});
