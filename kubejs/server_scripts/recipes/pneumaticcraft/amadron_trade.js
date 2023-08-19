onEvent("server.datapack.high_priority", (event) => {
    [
        "assembly_program_drill",
        "assembly_program_drill_laser",
        "assembly_program_laser",
        "diesel_to_emerald",
        "emerald_to_lubricant",
        "gasoline_to_emerald",
        "kerosene_to_emerald",
        "lpg_to_emerald",
        "lubricant_to_emerald",
        "oil_to_emerald",
        "emerald_to_oil",
        "pcb_blueprint",
    ].forEach((id) =>
        event.addJson(`pneumaticcraft:recipes/amadron/${id}.json`, {
            type: "forge:conditional",
            recipes: [
                {
                    conditions: [
                        {
                            type: "forge:false",
                        },
                    ],
                },
            ],
        })
    );
});
