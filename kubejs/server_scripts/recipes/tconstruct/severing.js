onEvent('recipes', event => {
  event.remove({id: 'tconstruct:tools/severing/blaze_rod'});
  new recipes(event)
    .setType('tconstruct:severing')
    .setFunction(config =>
      event.custom({
        type: 'tconstruct:severing',
        entity: {
          type: config.mob,
        },
        result: config.output,
      })
    )
    .removeOutputs(['minecraft:blaze_rod']);
});
