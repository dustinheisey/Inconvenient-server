onEvent('recipes', event => {
  new recipes(event)
    .setType('create:basin')
    .setFunction(config =>
      event.recipes.createDeploying(config.output, [
        config.input,
        config.applied_to,
      ])
    )
    .add([
      {
        output: 'create:refined_radiance_casing',
        input: 'create:refined_radiance',
        applied_to: '#minecraft:planks',
      },
      {
        output: 'create:shadow_steel_casing',
        input: 'create:shadow_steel',
        applied_to: '#minecraft:planks',
      },
    ]);
});
