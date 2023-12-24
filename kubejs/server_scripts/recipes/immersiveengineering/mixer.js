onEvent('recipes', event => {
  new recipes(event)
    .setType('immersiveengineering:mixer')
    .setFunction(config =>
      event.custom({
        type: 'immersiveengineering:mixer',
        inputs: config.inputs,
        result: config.output,
        fluid: config.fluid,
        energy: config.energy || 3200,
      })
    )
    .modifyOutputs([
      {
        inputs: [
          {
            tag: 'forge:dusts/redstone',
          },
        ],
        output: {
          fluid: 'immersiveengineering:redstone_acid',
          amount: 250,
        },
        fluid: {
          tag: 'pneumaticcraft:etching_acid',
          amount: 250,
        },
        energy: 1600,
      },
    ]);
});

onEvent('server.datapack.high_priority', event => {
  event.addJson(`immersiveengineering:recipes/mixer/redstone_acid.json`, {});
});
