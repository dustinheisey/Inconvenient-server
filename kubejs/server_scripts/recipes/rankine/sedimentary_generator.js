onEvent('recipes', event => {
  new recipes(event)
    .setType('rankine:rock_generator')
    .setFunction(config =>
      event.custom({
        type: 'rankine:rock_generator',
        genType: 'sedimentary',
        input1: {item: config.input},
        result: {
          block: config.output,
        },
      })
    )
    .modifyOutputs([
      {
        output: 'rankine:dolostone',
        input: 'rankine:dolomite_block',
      },
      {
        output: 'rankine:chalk',
        input: 'blue_skies:pearl',
      },
      {
        output: 'rankine:shale',
        input: 'naturesaura:infused_stone',
      },
    ])
    .add([
      {
        output: 'create:ochrum',
        input: 'minecraft:dead_tube_coral_block',
      },
      {
        output: 'create:ochrum',
        input: 'minecraft:dead_brain_coral_block',
      },
      {
        output: 'create:ochrum',
        input: 'minecraft:dead_bubble_coral_block',
      },
      {
        output: 'create:ochrum',
        input: 'minecraft:dead_fire_coral_block',
      },
      {
        output: 'create:ochrum',
        input: 'minecraft:dead_horn_coral_block',
      },
      {
        output: 'create:veridium',
        input: 'rankine:malachite',
      },
      {
        output: 'create:asurine',
        input: 'rankine:cassiterite',
      },
    ]);
});
