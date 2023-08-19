onEvent("recipes", (event) => {
    event.custom({
        type: "createaddition:rolling",
        input: {
            tag: "forge:plates/copper",
        },
        result: {
            item: "immersiveengineering:wire_copper",
            count: 2,
        },
    });

    event.custom({
        type: "createaddition:rolling",
        input: {
            tag: "forge:ingots/iron",
        },
        result: {
            item: "immersiveengineering:stick_iron",
            count: 2,
        },
    });
});
