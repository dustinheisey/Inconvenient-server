onEvent("server.datapack.high_priority", (event) => {
    [
        "living_boots",
        "living_helmet",
        "living_leggings",
        "living_plate",
        "living_trainer",
    ].forEach((array) => {
        event.addJson(`bloodmagic:recipes/array/${array}.json`, {});
    });
});

onEvent("recipes", (event) => {
    new recipes(event)
        .setType("bloodmagic:array")
        .setFunction((config) =>
            event.custom({
                type: "bloodmagic:array",
                texture: `bloodmagic:textures/models/alchemyarrays/${config.texture}.png`,
                baseinput: { item: config.base_input },
                addedinput: { item: config.added_input },
                output: { item: config.output },
            })
        )
        .add([
            {
                texture: "bindingarray",
                base_input: "bloodmagic:reagentbinding",
                added_input: "cataclysm:ignitium_helmet",
                output: "bloodmagic:livinghelmet",
            },
            {
                texture: "bindingarray",
                base_input: "bloodmagic:reagentbinding",
                added_input: "cataclysm:ignitium_chestplate",
                output: "bloodmagic:livingplate",
            },
            {
                texture: "bindingarray",
                base_input: "bloodmagic:reagentbinding",
                added_input: "cataclysm:ignitium_leggings",
                output: "bloodmagic:livingleggings",
            },
            {
                texture: "bindingarray",
                base_input: "bloodmagic:reagentbinding",
                added_input: "cataclysm:ignitium_boots",
                output: "bloodmagic:livingboots",
            },
            {
                texture: "bindingarray",
                base_input: "bloodmagic:reagentbinding",
                added_input: "cataclysm:ignitium_ingot",
                output: "bloodmagic:upgradetrainer",
            },
        ]);
});
