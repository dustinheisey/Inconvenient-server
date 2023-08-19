onEvent("recipes", (event) => {
    new recipes(event)
        .setType("naturesaura:animal_spawner")
        .setFunction((config) =>
            event.custom({
                type: "naturesaura:animal_spawner",
                ingredients: config.inputs,
                entity: config.entity,
                aura: config.aura,
                time: config.time,
            })
        )
        .removeInputs(["minecraft:ender_pearl", "minecraft:phantom_membrane"])
        .modifyInputs([
            {
                inputs: [
                    { item: "naturesaura:birth_spirit" },
                    { item: "butchercraft:lamb_scraps" },
                    { item: "botania:rune_greed" },
                ],
                entity: "minecraft:sheep",
                aura: 50000,
                time: 1000,
            },
            {
                inputs: [
                    { item: "naturesaura:birth_spirit" },
                    { item: "butchercraft:beef_scraps" },
                    { item: "botania:rune_gluttony" },
                ],
                entity: "minecraft:cow",
                aura: 100000,
                time: 1000,
            },
        ])
        .add([
            {
                inputs: [
                    { item: "naturesaura:birth_spirit" },
                    { item: "minecraft:white_wool" },
                    { item: "botania:rune_pride" },
                ],
                entity: "energeticsheep:energetic_sheep",
                aura: 500000,
                time: 1000,
            },
        ]);
});
