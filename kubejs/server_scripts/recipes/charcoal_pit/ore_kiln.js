onEvent('server.datapack.high_priority', event => {
  [
    'bismuth_brass',
    'brass',
    'electrum',
    'constantan',
    'invar',
    'hepatizon',
  ].forEach(id => {
    event.addJson(`charcoal_pit:recipes/ore_kiln_recipes/${id}.json`, {});
  });
});

onEvent('recipes', event => {
  new recipes(event)
    .setType('charcoal_pit:ore_kiln')
    .setFunction(config =>
      event.custom({
        type: 'charcoal_pit:orekiln',
        ingredients: config.inputs,
        result: {
          item: config.output,
        },
        amount: 1,
      })
    )
    .modifyOutputs([
      {
        global: true,
        inputs: [
          {
            item: 'minecraft:magma_cream',
          },
          {
            item: 'minecraft:soul_soil',
          },
          {
            tag: 'forge:gravel',
          },
        ],
        output: 'tconstruct:scorched_brick',
      },
      {
        global: true,
        inputs: [
          {
            item: 'occultism:burnt_otherstone',
          },
          {
            tag: 'forge:sand',
          },
          {
            tag: 'forge:gravel',
          },
        ],
        output: 'tconstruct:seared_brick',
      },
      {
        global: true,
        inputs: [
          {
            item: 'rankine:high_refractory_brick',
          },
          {
            item: 'rankine:bone_char',
          },
          {
            item: 'rankine:galena',
          },
          {
            item: 'rankine:galena',
          },
        ],
        output: 'rankine:ultra_high_refractory_brick',
      },
      {
        global: true,
        inputs: [
          {
            item: 'rankine:refractory_brick',
          },
          {
            item: 'rankine:bone_char',
          },
          {
            item: 'rankine:acanthite',
          },
        ],
        output: 'rankine:high_refractory_brick',
      },
      {
        inputs: [
          {
            item: 'rankine:malachite',
          },
        ],
        output: 'minecraft:copper_ingot',
      },
      {
        inputs: [
          {
            item: 'rankine:cassiterite',
          },
        ],
        output: 'rankine:tin_ingot',
      },
      {
        inputs: [
          {
            item: 'rankine:tin_ingot',
          },
          {
            item: 'minecraft:copper_ingot',
          },
        ],
        output: 'rankine:bronze_ingot',
      },
      {
        inputs: [
          {
            item: 'rankine:galena',
          },
        ],
        output: 'rankine:lead_ingot',
      },
      {
        inputs: [
          {
            item: 'rankine:acanthite',
          },
        ],
        output: 'rankine:silver_ingot',
      },
    ]);
});
