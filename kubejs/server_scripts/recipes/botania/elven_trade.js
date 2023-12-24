onEvent('recipes', event => {
  new recipes(event)
    .setType('botania:elven_trade')
    .setFunction(config =>
      event.recipes.botania.elven_trade(config.output, config.input)
    )
    .modifyOutputs([
      {output: 'botania:pixie_dust', input: 'minecraft:honeycomb'},
      {
        output: 'botania:elementium_ingot',
        input: 'naturesaura:tainted_gold',
      },
    ])
    .add([
      {
        output: 'immersiveengineering:seed',
        input: 'minecraft:wheat_seeds',
      },
    ]);
});
