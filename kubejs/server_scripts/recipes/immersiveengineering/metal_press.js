onEvent("recipes", (event) => {
    new recipes(event)
        .setType("immersiveengineering:metal_press")
        .setFunction((config) =>
            event.recipes.immersiveengineeringMetalPress(
                config.output,
                config.input,
                config.mold
            )
        )
        .add([
            {
                output: "chemlib:sodium_plate",
                input: "rankine:sodium_chloride",
                mold: "immersiveengineering:mold_plate",
            },
            {
                output: "chemlib:titanium_plate",
                input: "rankine:titanium_ingot",
                mold: "immersiveengineering:mold_plate",
            },
        ]);
});
