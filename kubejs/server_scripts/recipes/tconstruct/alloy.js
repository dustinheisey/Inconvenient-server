onEvent("server.datapack.high_priority", (event) => {
    [
        "molten_rose_gold",
        "molten_invar",
        "molten_electrum",
        "molten_constantan",
        "molten_brass",
        "molten_obsidian",
    ].forEach((id) =>
        event.addJson(`tconstruct:recipes/smeltery/alloys/${id}`, {})
    );

    event.addJson("bloodsmeltery:recipes/smeltery/alloy/bloodbrass.json", {});
});
onEvent("recipes", (event) => {
    new recipes(event)
        .setType("tconstruct:alloy")
        .setFunction((config) =>
            event.custom({
                type: "tconstruct:alloy",
                inputs: config.inputs,
                result: {
                    fluid: config.fluid,
                    amount: config.amount,
                },
                temperature: 605,
            })
        )
        .add([
            {
                fluid: "kubejs:molten_sterling_silver",
                amount: 288,
                inputs: [
                    { name: "tconstruct:molten_silver", amount: 144 },
                    { name: "tconstruct:molten_copper", amount: 144 },
                ],
            },
            {
                fluid: "tconstruct:molten_brass",
                amount: 288,
                inputs: [
                    { name: "tconstruct:molten_copper", amount: 144 },
                    { name: "tconstruct:molten_zinc", amount: 144 },
                ],
            },
        ]);
});
