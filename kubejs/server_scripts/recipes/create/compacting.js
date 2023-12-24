onEvent('recipes', event => {
  new recipes(event)
    .setType('create:compacting')
    .setFunction(config =>
      event.recipes.createCompacting(config.output, config.input)
    )
    .modifyOutputs([
      {
        global: true,
        output: 'butchercraft:cubed_beef',
        input: '9x butchercraft:ground_beef',
      },
      {
        global: true,
        output: 'butchercraft:cubed_pork',
        input: '9x butchercraft:ground_pork',
      },
      {
        global: true,
        output: 'butchercraft:cubed_lamb',
        input: '9x butchercraft:ground_lamb',
      },
      {
        output: 'butchercraft:ground_beef',
        input: '9x butchercraft:beef_scraps',
      },
      {
        output: 'butchercraft:ground_pork',
        input: '9x butchercraft:pork_scraps',
      },
      {
        output: 'butchercraft:ground_lamb',
        input: '9x butchercraft:lamb_scraps',
      },
      {
        global: true,
        output: 'minecraft:blaze_rod',
        input: ['3x minecraft:blaze_powder'],
      },
      {
        global: true,
        output: 'paragon_textiles:flaxseed_oil_bucket',
        input: ['4x paragon_textiles:flax_seeds', 'minecraft:bucket'],
      },
      {
        global: true,
        output: 'createaddition:cake_base',
        input: [
          '#forge:eggs',
          '2x minecraft:sugar',
          'create:dough',
          Fluid.of('minecraft:milk', 1000),
        ],
      },
    ]);
});
