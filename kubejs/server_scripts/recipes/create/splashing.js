onEvent('recipes', event => {
  new recipes(event)
    .setType('create:splashing')
    .setFunction(config =>
      event.recipes.createSplashing(config.output, config.input)
    )
    .removeInputs(['minecraft:red_sand'])
    .modifyOutputs([
      {
        output: '9x rankine:zinc_nugget',
        input: 'create:crushed_raw_zinc',
      },
    ]);
});
