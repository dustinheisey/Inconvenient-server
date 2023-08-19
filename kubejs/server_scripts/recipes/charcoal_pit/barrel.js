onEvent("recipes", (event) => {
    event.remove({ type: "charcoal_pit:barrel" });

    new recipes(event)
        .setType("charcoal_pit:barrel")
        .setFunction((config) =>
            event.custom({
                type: "charcoal_pit:barrel",
                item_in: {
                    item: config.input_item,
                },
                in_amount: 1,
                fluid_in: {
                    fluid: config.input_fluid,
                    amount: 1000,
                },
                fluid_out: {
                    fluid: config.output_fluid,
                    amount: 1000,
                },
                flags: 1,
                time: 6000,
            })
        )
        .add([
            {
                input_item: "butchercraft:brain",
                input_fluid: "minecraft:water",
                output_fluid: "kubejs:tanning_fluid",
            },
        ]);
});
