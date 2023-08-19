onEvent("server.datapack.high_priority", (event) => {
    ["lpg", "kerosene"].forEach((id) => {
        event.addJson(`pneumaticcraft:recipes/thermo_plant/${id}.json`, {});
    });
});

onEvent("recipes", (event) => {
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 100,
            tag: "forge:diesel",
        },
        fluid_output: {
            amount: 80,
            fluid: "pneumaticcraft:kerosene",
        },
        item_output: {
            item: "rankine:bitumen",
        },
        pressure: 2.0,
        temperature: {
            min_temp: 573,
        },
    });
    
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 100,
            tag: "forge:diesel",
        },
        fluid_output: {
            amount: 80,
            fluid: "pneumaticcraft:kerosene",
        },
        item_output: {
            item: "rankine:bitumen",
        },
        pressure: 2.0,
        temperature: {
            min_temp: 573,
        },
    });

    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 100,
            tag: "forge:lubricant",
        },
        item_input: {
            item: "rankine:titanium_alloy_block",
        },
        item_output: {
            item: "pneumaticcraft:drill_bit_diamond",
        },
        pressure: 7.5,
        temperature: {
            min_temp: 500,
        },
    });
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 100,
            tag: "forge:gasoline",
        },
        fluid_output: {
            amount: 80,
            fluid: "immersivepetroleum:naphtha",
        },
        pressure: 2.0,
        temperature: {
            min_temp: 573,
        },
    });
    event.custom({
        type: "pneumaticcraft:thermo_plant",
        exothermic: false,
        fluid_input: {
            type: "pneumaticcraft:fluid",
            amount: 100,
            fluid: "immersivepetroleum:naphtha",
        },
        fluid_output: {
            amount: 80,
            fluid: "pneumaticcraft:lpg",
        },
        pressure: 2.0,
        temperature: {
            min_temp: 573,
        },
    });
});
