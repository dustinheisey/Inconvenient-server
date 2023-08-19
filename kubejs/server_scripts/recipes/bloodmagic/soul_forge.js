onEvent("recipes", (event) => {
    new recipes(event)
        .setType("bloodmagic:soulforge")
        .setFunction((config) => {
            event.recipes.bloodmagic
                .soulforge(config.output, config.inputs)
                .minimumDrain(config.min_drain)
                .drain(config.drain);
        })
        .modifyOutputs([
            {
                output: "bloodmagic:masterroutingnode",
                inputs: [
                    "minecraft:iron_block",
                    "create:rose_quartz",
                    "bloodmagic:infusedslate",
                ],
                min_drain: 400,
                drain: 200,
            },
            {
                output: "bloodmagic:soulgemcommon",
                inputs: [
                    "bloodmagic:soulgemlesser",
                    "create:rose_quartz",
                    "bloodmagic:infusedslate",
                    "rankine:rose_gold_block",
                ],
                min_drain: 240,
                drain: 50,
            },
            {
                output: "bloodmagic:soulgemlesser",
                inputs: [
                    "bloodmagic:soulgempetty",
                    "create:rose_quartz",
                    "minecraft:redstone_block",
                    "minecraft:lapis_block",
                ],
                min_drain: 60,
                drain: 20,
            },
        ]);
});
