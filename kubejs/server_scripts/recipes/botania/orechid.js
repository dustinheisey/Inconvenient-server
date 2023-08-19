onEvent("recipes", (event) => {
    new recipes(event)
        .setType("botania:orechid")
        .setFunction((config) =>
            event.recipes.botania.orechid(
                config.output,
                config.input,
                config.count || 1
            )
        )
        .removeOutputs([
            "#forge:ores/emerald",
            "#forge:ores/copper",
            "#forge:ores/coal",
            "#forge:ores/diamond",
            "#forge:ores/gold",
            "#forge:ores/redstone",
            "#forge:ores/lapis",
            // "#forge:ores/iron",
        ])
        .add([
            {
                input: "rankine:asphalt",
                output: "minecraft:tuff",
            },
            // {
            //     input: "rankine:dark_gray_asphalt",
            //     output: "rankine:basaltic_tuff",
            // },
            // { input: "rankine:gray_asphalt", output: "rankine:andesitic_tuff" },
            // {
            //     input: "rankine:blue_asphalt",
            //     output: "rankine:rhyolitic_tuff",
            // },
            // {
            //     input: "rankine:green_asphalt",
            //     output: "rankine:kimberlitic_tuff",
            // },
        ]);
});
