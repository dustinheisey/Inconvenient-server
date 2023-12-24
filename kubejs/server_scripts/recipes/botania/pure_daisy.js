onEvent('recipes', event => {
  new recipes(event)
    .setType('botania:pure_daisy')
    .setFunction(config =>
      event.recipes.botania.pure_daisy(config.output, config.input, 1)
    )
    .modifyOutputs([
      {output: 'botania:livingrock', input: 'rankine:rose_marble'},
    ]);
});
