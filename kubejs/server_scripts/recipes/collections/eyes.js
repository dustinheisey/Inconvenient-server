onEvent("recipes", (event) => {
    new recipes(event)
        .setFunction((config) => {
            event.remove({ output: `endrem:${config.id}_eye` });

            event
                .shaped(`endrem:${config.id}_eye`, ["aba", "bcb", "aba"], {
                    a: config.inputs[0],
                    b: config.inputs[1],
                    c: config.inputs[2],
                })
                .stage(`eye_${config.id}`);
        })
        .modifyOutputs([
            {
                id: "cold",
                inputs: [
                    "minecraft:packed_ice",
                    "minecraft:leather",
                    "minecraft:iron_ingot",
                ],
            },

            {
                id: "guardian",
                inputs: [
                    "blue_skies:moonstone",
                    "occultism:otherworld_ashes",
                    "occultism:purified_ink",
                ],
            },
            {
                id: "exotic",
                inputs: [
                    "blue_skies:diopside_gem",
                    "naturesaura:gold_powder",
                    "blue_skies:starlit_sapling",
                ],
            },

            {
                id: "undead",
                inputs: [
                    "hexerei:blood_bottle",
                    "undergarden:forgotten_nugget",
                    "endrem:undead_soul",
                ],
            },
            {
                id: "corrupted",
                inputs: [
                    "blue_skies:horizonite_ingot",
                    "create:powdered_obsidian",
                    "bloodmagic:infusedslate",
                ],
            },
            {
                id: "rogue",
                inputs: [
                    "create:andesite_alloy",
                    "create:cinder_flour",
                    "twilightforest:carminite",
                ],
            },

            {
                id: "wither",
                inputs: [
                    "tconstruct:pig_iron_ingot",
                    "minecraft:blaze_powder",
                    "bloodmagic:weakbloodshard",
                ],
            },
            {
                id: "black",
                inputs: [
                    "cataclysm:witherite_ingot",
                    "hem:circuit_board",
                    "create:shadow_steel",
                ],
            },

            {
                id: "cursed",
                inputs: [
                    "naturesaura:tainted_gold",
                    "botania:pixie_dust",
                    "farmersdelight:hamburger",
                ],
            },

            {
                id: "lost",
                inputs: [
                    "pneumaticcraft:ingot_iron_compressed",
                    "coinsje:iron_coin",
                    "create:precision_mechanism",
                ],
            },
        ]);
});
