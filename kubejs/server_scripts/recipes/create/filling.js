onEvent('recipes', event => {
  new recipes(event)
    .setType('create:filling')
    .setFunction(config =>
      event.recipes.createFilling(config.output, config.input)
    )
    .removeOutputs(['minecraft:gunpowder']);
});
