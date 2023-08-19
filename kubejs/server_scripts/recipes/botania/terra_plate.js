onEvent("recipes", (event) => {
    new recipes(event)
        .setType("botania:terra_plate")
        .setFunction((config) =>
            event.recipes.botania.terra_plate(
                config.output,
                config.inputs,
                config.mana
            )
        )
        .modifyOutputs([
            {
                output: "botania:terrasteel_ingot",
                inputs: [
                    "naturesaura:sky_ingot",
                    "naturesaura:token_euphoria",
                    "naturesaura:tainted_gold",
                ],
                mana: 50000,
            },
        ]);
});
