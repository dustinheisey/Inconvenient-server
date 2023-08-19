onEvent("recipes", (event) => {
    event.custom({
        type: "immersiveengineering:refinery",
        result: {
            fluid: "pneumaticcraft:plastic",
            amount: 8,
        },
        catalyst: {
            item: "kubejs:catalyst",
        },
        input0: {
            tag: "forge:ethylene",
            amount: 8,
        },
        energy: 240,
    });
});
