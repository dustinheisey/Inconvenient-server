onEvent('recipes', event => {
  new recipes(event)
    .setType('create:pressing')
    .setFunction(config =>
      event.recipes.createPressing(config.output, config.input)
    )
    .modifyOutputs([
      {
        global: true,
        output: 'farmersdelight:minced_beef',
        input: 'butchercraft:beef_block_item',
      },
    ])
    .add([
      {
        output: 'minecraft:wheat',
        input: 'kubejs:feed_mix',
      },
      {
        output: 'chemlib:silver_plate',
        input: 'rankine:silver_ingot',
      },
      {
        output: 'chemlib:lead_plate',
        input: 'rankine:lead_ingot',
      },
      {
        output: 'chemlib:aluminum_plate',
        input: 'rankine:aluminum_ingot',
      },
      {
        output: 'chemlib:copper_plate',
        input: 'rankine:aluminum_ingot',
      },
      {
        output: 'chemlib:iron_plate',
        input: 'minecraft:iron_ingot',
      },
      {
        output: 'chemlib:gold_plate',
        input: 'minecraft:gold_ingot',
      },
      // {
      //     output: "chemlib:zinc_plate",
      //     input: "rankine:zinc_ingot",
      // },
      {
        output: 'chemlib:cobalt_plate',
        input: 'rankine:cobalt_ingot',
      },
      {
        output: 'chemlib:tin_plate',
        input: 'rankine:tin_ingot',
      },
      {
        output: 'chemlib:sodium_plate',
        input: 'rankine:sodium_chloride',
      },
      {
        output: 'chemlib:titanium_plate',
        input: 'rankine:aluminum_ingot',
      },
    ]);
});
