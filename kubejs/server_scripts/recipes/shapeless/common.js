onEvent("recipes", (event) => {
    event.forEachRecipe(
        {
            type: "minecraft:crafting_shapeless",
            output: "#minecraft:planks",
            input: "#minecraft:logs",
        },
        (recipe) => {
            event.remove({
                type: "minecraft:crafting_shapeless",
                output: recipe.outputItems[0].id,
            });

            event.shapeless(`2x ${recipe.outputItems[0].id}`, [
                recipe.inputItems[0],
            ]);
        }
    );
});
