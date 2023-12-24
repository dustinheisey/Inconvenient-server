onEvent('recipes', event => {
  new recipes(event)
    .setType('naturesaura:altar')
    .setFunction(config =>
      event.custom({
        type: 'naturesaura:altar',
        input: {
          item: config.input,
        },
        output: {
          item: config.output,
        },
        aura_type: `naturesaura:${config.aura_type || 'overworld'}`,
        aura: config.aura || 15000,
        time: config.time || 80,
      })
    )
    .removeOutputs([
      'minecraft:milk_bucket',
      'minecraft:egg',
      'minecraft:crimson_fungus',
      'minecraft:warped_fungus',
      'minecraft:nether_wart',
      'minecraft:chorus_flower',
      'minecraft:gilded_blackstone',
    ])
    .modifyOutputs([
      {
        global: true,
        input: 'rankine:shale',
        aura_type: 'overworld',
        output: 'naturesaura:infused_stone',
        aura: 100,
      },
      {
        global: true,
        input: 'rankine:rose_gold_ingot',
        aura_type: 'nether',
        output: 'naturesaura:tainted_gold',
        aura: 10000,
      },
      {
        global: true,
        input: 'botania:manasteel_block',
        aura_type: 'nether',
        output: 'naturesaura:tainted_gold_block',
        aura: 90000,
      },
    ]);
});
