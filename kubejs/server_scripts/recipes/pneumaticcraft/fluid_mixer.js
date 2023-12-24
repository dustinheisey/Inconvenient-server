onEvent('recipes', event => {
  new recipes(event)
    .setType('pneumaticcraft:fluid_mixer')
    .setFunction(config =>
      event.custom({
        type: 'pneumaticcraft:fluid_mixer',
        input1: {
          type: 'pneumaticcraft:fluid',
          fluid: config.fluids[0].id,
          amount: config.fluids[0].amount,
        },
        input2: {
          type: 'pneumaticcraft:fluid',
          fluid: config.fluids[1].id,
          amount: config.fluids[1].amount,
        },
        item_output: config.output,
        fluid_output: config.fluid_output,
        pressure: config.pressure,
        time: config.time,
      })
    )
    .add([
      {
        fluids: [
          {id: 'pneumaticcraft:etching_acid', amount: 250},
          {id: 'kubejs:molten_redstone', amount: 250},
        ],
        fluid_output: {
          fluid: 'immersiveengineering:redstone_acid',
          amount: 250,
        },
        pressure: 2.0,
      },
    ]);
});
