onEvent("recipes", (event) => {
    event.remove({ id: "botania:runic_altar/pride" });
    event.remove({ id: "botania:runic_altar/greed" });
    event.remove({ id: "botania:runic_altar/gluttony" });
    event.remove({ id: "botania:runic_altar/wrath" });
    event.remove({ id: "botania:runic_altar/sloth" });
    event.remove({ id: "botania:runic_altar/lust" });
    event.remove({ id: "botania:runic_altar/envy" });
    event.remove({ id: "botania:runic_altar/mana" });

    new recipes(event)
        .setType("botania:runic_altar")
        .setFunction((config) =>
            event.recipes.botania.runic_altar(
                `botania:rune_${config.output}`,
                config.inputs,
                config.mana
            )
        )
        .modifyOutputs([
            {
                global: true,
                output: "pride",
                inputs: [
                    "botania:rune_fire",
                    "botania:rune_summer",
                    "botania:elementium_ingot",
                    "botania:pixie_dust",
                    "farmersdelight:roast_chicken_block",
                ],
                mana: 12500,
            },
            {
                global: true,
                output: "envy",
                inputs: [
                    "botania:rune_water",
                    "botania:rune_winter",
                    "botania:elementium_ingot",
                    "botania:pixie_dust",
                    "farmersdelight:rice_roll_medley_block",
                ],
                mana: 12500,
            },
            {
                global: true,
                output: "wrath",
                inputs: [
                    "botania:rune_earth",
                    "botania:rune_winter",
                    "botania:elementium_ingot",
                    "botania:pixie_dust",
                    "butchercraft:pot_roast_block_item",
                ],
                mana: 12500,
            },
            {
                global: true,
                output: "sloth",
                inputs: [
                    "botania:rune_air",
                    "botania:rune_autumn",
                    "botania:elementium_ingot",
                    "botania:pixie_dust",
                    "butchercraft:stirfry_block_item",
                ],
                mana: 12500,
            },
            {
                global: true,
                output: "greed",
                inputs: [
                    "botania:rune_water",
                    "botania:rune_spring",
                    "botania:elementium_ingot",
                    "botania:pixie_dust",
                    "butchercraft:meat_pie_block_item",
                ],
                mana: 12500,
            },
            {
                global: true,
                output: "gluttony",
                inputs: [
                    "botania:rune_fire",
                    "botania:rune_winter",
                    "botania:elementium_ingot",
                    "botania:pixie_dust",
                    "butchercraft:haggis_block_item",
                ],
                mana: 12500,
            },
            {
                global: true,
                output: "lust",
                inputs: [
                    "botania:rune_air",
                    "botania:rune_summer",
                    "botania:elementium_ingot",
                    "botania:pixie_dust",
                    "farmersrespite:blazing_chili",
                ],
                mana: 12500,
            },
            {
                global: true,
                output: "mana",
                inputs: [
                    "botania:manasteel_ingot",
                    "botania:manasteel_ingot",
                    "botania:manasteel_ingot",
                    "botania:manasteel_ingot",
                    "botania:manasteel_ingot",
                    "naturesaura:sky_ingot",
                ],
                mana: 6250,
            },
        ]);
});
