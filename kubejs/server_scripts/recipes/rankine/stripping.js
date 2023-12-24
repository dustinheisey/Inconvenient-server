onEvent('recipes', event => {
  new recipes(event)
    .setType('rankine:stripping')
    .setFunction(config =>
      event.custom({
        type: 'rankine:stripping',
        chance: config.chance || 0.9,
        input: {
          item: config.input,
        },
        result: {
          item: config.output,
          count: 1,
        },
      })
    )
    .modifyInputs([
      {
        input: 'rankine:balsam_fir_log',
        output: 'farmersdelight:tree_bark',
      },
      {
        input: 'rankine:eastern_hemlock_log',
        output: 'farmersdelight:tree_bark',
      },
      {
        input: 'rankine:western_hemlock_log',
        output: 'farmersdelight:tree_bark',
      },
      {
        input: 'minecraft:spruce_log',
        output: 'farmersdelight:tree_bark',
      },
      {
        input: 'minecraft:birch_log',
        output: 'farmersdelight:tree_bark',
      },
      {
        input: 'rankine:black_birch_log',
        output: 'farmersdelight:tree_bark',
      },
      {
        input: 'rankine:red_birch_log',
        output: 'farmersdelight:tree_bark',
      },
      {
        input: 'rankine:yellow_birch_log',
        output: 'farmersdelight:tree_bark',
      },
    ]);
});
