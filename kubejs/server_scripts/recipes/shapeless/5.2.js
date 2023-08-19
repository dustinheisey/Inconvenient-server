onEvent("recipes", (event) => {
    new recipes(event)
        .setType("minecraft:crafting_shapeless")
        .setStage("stage_5_2")
        .setFunction((config) => event.shapeless(config.output, config.inputs));
});
