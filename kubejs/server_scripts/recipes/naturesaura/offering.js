onEvent("recipes", (event) => {
    new recipes(event)
        .setType("naturesaura:offering")
        .setFunction((config) =>
            event.custom({
                type: "naturesaura:offering",
                input: config.input,
                start_item: config.start_item,
                output: config.output,
            })
        )
        .modifyOutputs([
            {
                input: { item: "botania:manasteel_ingot" },
                start_item: { item: "naturesaura:calling_spirit" },
                output: { item: "naturesaura:sky_ingot" },
            },
        ]);
});
