onEvent('recipes', event => {
  [
    'fragmentsfrom_ore_gold',
    'fragmentsfrom_ore_copper',
    'dustsfrom_ore_copper',
    'ore/dustiron',
    'ore/dustgold',
    'fragmentsfrom_ore_iron',
    'fragmentsnetherite_scrap',
    'netherrack_to_sulfer',
    'fragmentscopper',
    'fragmentsiron',
    'fragmentsgold',
    'dustsfrom_ore_gold',
    'dustsfrom_ore_iron',
    'dustsfrom_gravel_copper',
    'dustsfrom_ingot_copper',
    'dustsfrom_gravel_iron',
    'dustsfrom_ingot_iron',
    'dustsfrom_gravel_gold',
    'dustsfrom_ingot_gold',
  ].forEach(id => {
    event.remove({id: `bloodmagic:arc/${id}`});
  });

  new recipes(event)
    .setType('bloodmagic:arc')
    .setFunction(config => {
      event.custom({
        type: 'bloodmagic:arc',
        input: {
          item: config.input,
        },
        inputsize: 1,
        tool: {
          tag: config.tool,
        },
        output: {
          item: config.output,
        },
        consumeingredient: config.consume_ingredient || false,
        mainoutputchance: 0.0,
      });
    })
    .modifyOutputs([
      {
        input: 'bloodmagic:weakbloodorb',
        tool: 'bloodmagic:arc/reverter',
        output: 'undergarden:utherium_crystal',
      },
      {
        input: 'bloodmagic:apprenticebloodorb',
        tool: 'bloodmagic:arc/reverter',
        output: 'tconstruct:slimesteel_block',
      },
      {
        input: 'bloodmagic:magicianbloodorb',
        tool: 'bloodmagic:arc/reverter',
        output: 'twilightforest:fiery_block',
      },
      {
        input: 'minecraft:raw_gold',
        tool: 'bloodmagic:arc/explosive',
        output: '2x bloodmagic:goldfragment',
      },
      {
        input: 'rankine:malachite',
        tool: 'bloodmagic:arc/explosive',
        output: '2x bloodmagic:copperfragment',
      },
      {
        input: 'rankine:hematite',
        tool: 'bloodmagic:arc/explosive',
        output: '2x bloodmagic:ironfragment',
      },
      {
        input: 'minecraft:ancient_debris',
        tool: 'bloodmagic:arc/explosive',
        output: 'bloodmagic:fragment_netherite_scrap',
      },
    ]);
});
