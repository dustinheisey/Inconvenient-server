onEvent('recipes', event => {
  event.remove({
    output: ['rankine:sodium_chloride', 'rankine:mortar'],
    type: 'minecraft:crafting_shapeless',
  });

  event.remove({
    output: Item.of(
      'patchouli:guide_book',
      '{"patchouli:book":"rankine:rankine_journal"}'
    ),
  });

  event.shapeless(
    Item.of(
      'patchouli:guide_book',
      '{"patchouli:book":"rankine:rankine_journal"}'
    ),
    ['farmersdelight:canvas', 'farmersdelight:rope']
  );

  new recipes(event)
    .setType('minecraft:crafting_shapeless')
    .setStage('stage_1')
    .setFunction(config => {
      return event.shapeless(config.output, config.inputs);
    })
    .modifyOutputs([
      {
        output: '4x minecraft:mushroom_stew',
        inputs: [
          'rankine:honey_mushroom',
          'rankine:artist_conk_mushroom',
          'rankine:tinder_conk_mushroom',
          'rankine:turkey_tail_mushroom',
          'rankine:cinnabar_polypore_mushroom',
          'minecraft:bowl',
          'rankine:sulfur_shelf_mushroom',
          'rankine:lions_mane_mushroom',
          'rankine:oyster_mushroom',
        ],
      },
      {
        global: true,
        output: 'paragon_textiles:plant_fibers',
        inputs: ['#forge:grass', '#forge:grass', '#forge:grass'],
      },
      {
        global: true,
        output: 'labels:label',
        inputs: ['farmersdelight:canvas'],
      },
      {
        output: '9x kubejs:wheat',
        inputs: ['minecraft:hay_block'],
      },
    ])
    .add([
      {
        output: 'kubejs:salted_hide',
        inputs: ['kubejs:stitched_hide', 'salt:salt', 'salt:salt', 'salt:salt'],
      },
      {
        output: 'kubejs:stitched_hide',
        inputs: ['biomancy:living_flesh', 'biomancy:living_flesh'],
      },
      {
        output: 'paraglider:rito_goddess_statue',
        inputs: ['#minecraft:flowers', '#paraglider:statues'],
      },
    ]);
});
