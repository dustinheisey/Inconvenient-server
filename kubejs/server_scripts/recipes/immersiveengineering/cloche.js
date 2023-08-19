onEvent("recipes", (event) => {
    event.remove({
        output: "minecraft:wheat",
        type: "immersiveengineering:cloche",
    });

    event.recipes.immersiveengineeringCloche(
        ["2x kubejs:wheat", "minecraft:wheat_seeds"],
        "minecraft:wheat_seeds",
        "minecraft:dirt",
        { type: "crop", block: "minecraft:wheat" }
    );
});
