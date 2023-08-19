onEvent("recipes", (event) => {
    new recipes(event)
        .setType("minecraft:crafting_shapeless")
        .setStage("stage_2")
        .setFunction((config) => {
            return event.shapeless(config.output, config.inputs);
        })
        .modifyOutputs([
            {
                output: "tconstruct:materials_and_you",
                inputs: ["farmersdelight:canvas", "tconstruct:pattern"],
            },
            {
                output: "tconstruct:puny_smelting",
                inputs: ["farmersdelight:canvas", "tconstruct:grout"],
            },
            {
                output: "tconstruct:grout",
                inputs: ["rankine:bone_char", "#forge:sand", "#forge:gravel"],
            },
            {
                output: "paragon_textiles:fabric_red",
                inputs: ["paragon_textiles:fabric_plain", "minecraft:red_dye"],
            },
            {
                output: "comforts:sleeping_bag_red",
                inputs: ["comforts:sleeping_bag_white", "minecraft:red_dye"],
            },
            {
                output: "paragon_textiles:cushion_red",
                inputs: ["paragon_textiles:cushion_plain", "minecraft:red_dye"],
            },
            {
                output: "minecraft:red_bed",
                inputs: ["minecraft:white_bed", "minecraft:red_dye"],
            },
            {
                output: "minecraft:glass",
                inputs: ["tconstruct:clear_glass"],
            },
        ]);
});
