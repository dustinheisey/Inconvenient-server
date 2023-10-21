onEvent("recipes", (event) => {
  new recipes(event)
    .setType("hexerei:dipper")
    .setFunction((config) =>
      event.custom({
        type: "hexerei:dipper",
        liquid: {
          fluid: config.input_fluid,
        },
        ingredients: [
          {
            item: config.input,
          },
        ],
        output: {
          item: config.output,
        },
        fluidLevelsConsumed: config.fluid_consumed,
        dippingTimeInTicks: 200,
        dryingTimeInTicks: 200,
        numberOfDips: 3,
      })
    )
    .modifyOutputs([
      {
        output: "hexerei:candle",
        input: "paragon_textiles:silk",
        input_fluid: "hexerei:tallow_fluid",
        fluid_consumed: 250,
      },
      {
        output: "rankine:altimeter",
        input: "depthmeter:depthmeter",
        input_fluid: "kubejs:molten_sterling_silver",
        fluid_consumed: 1000,
      },
    ])
    .add([
      {
        output: "blue_skies:turquoise_stone",
        input: "minecraft:stone",
        input_fluid: "kubejs:freezing_sap",
        fluid_consumed: 250,
      },
      {
        output: "blue_skies:bluebright_sapling",
        input: "rankine:weeping_willow_sapling",
        input_fluid: "kubejs:molten_sterling_silver",
        fluid_consumed: 1000,
      },
    ]);
});
