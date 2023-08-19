onEvent("recipes", (event) => {
    new recipes(event)
        .setType("architects_palette:warping")
        .removeOutputs("minecraft:netherite_ingot");
});
