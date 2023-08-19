onEvent("recipes", (event) => {
    new recipes(event)
        .setType("tconstruct:casting_table")
        .setFunction((config) => {
            let json = {
                type: "tconstruct:casting_table",
                cast_consumed: true,
                switch_slots: true,
                fluid: {
                    name: config.fluid,
                    amount: 288,
                },
                result: config.output,
                cooling_time: 57,
            };

            if (config.input) {
                json.cast = config.input;
            }

            event.custom(json);
        })
        .removeOutputs([
            "tconstruct:rod_cast",
            "tconstruct:gear_cast",
            "tconstruct:wire_cast",
        ])
        .modifyOutputs([
            {
                input: { tag: "forge:gems" },
                output: "tconstruct:gem_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { tag: "forge:ingots" },
                output: "tconstruct:ingot_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { tag: "forge:nuggets" },
                output: "tconstruct:nugget_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:pick_head" },
                output: "tconstruct:pick_head_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:repair_kit" },
                output: "tconstruct:repair_kit_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:small_axe_head" },
                output: "tconstruct:small_axe_head_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:small_blade" },
                output: "tconstruct:small_blade_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:tool_binding" },
                output: "tconstruct:tool_binding_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:tool_handle" },
                output: "tconstruct:tool_handle_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:hammer_head" },
                output: "tconstruct:hammer_head_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:round_plate" },
                output: "tconstruct:round_plate_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:broad_blade" },
                output: "tconstruct:broad_blade_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:broad_axe_head" },
                output: "tconstruct:broad_axe_head_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:large_plate" },
                output: "tconstruct:large_plate_cast",
                fluid: "tconstruct:molten_bronze",
            },
            {
                input: { item: "tconstruct:tough_handle" },
                output: "tconstruct:tough_handle_cast",
                fluid: "tconstruct:molten_bronze",
            },
        ]);
});
