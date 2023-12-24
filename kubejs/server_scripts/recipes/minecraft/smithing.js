onEvent('recipes', event => {
  new recipes(event)
    .setType('minecraft:smithing')
    .setFunction(config =>
      event.smithing(config.output, config.inputs[0], config.inputs[1])
    )
    .removeOutputs([
      'minecraft:netherite_helmet',
      'minecraft:netherite_chestplate',
      'minecraft:netherite_leggings',
      'minecraft:netherite_boots',
      'twilightforest:fiery_ingot',
    ])
    .modifyOutputs([
      {
        output: 'minecraft:netherite_axe',
        inputs: ['minecraft:netherite_ingot', 'malum:soul_stained_steel_axe'],
      },
      {
        output: 'minecraft:netherite_sword',
        inputs: ['minecraft:netherite_ingot', 'twilightforest:fiery_sword'],
      },
      {
        output: 'farmersdelight:netherite_knife',
        inputs: ['minecraft:netherite_ingot', 'malum:soul_stained_steel_knife'],
      },
      {
        output: 'minecraft:netherite_shovel',
        inputs: [
          'minecraft:netherite_ingot',
          'malum:soul_stained_steel_shovel',
        ],
      },
      {
        output: 'minecraft:netherite_helmet',
        inputs: ['minecraft:netherite_ingot', 'twilightforest:fiery_helmet'],
      },
      {
        output: 'minecraft:netherite_chestplate',
        inputs: [
          'minecraft:netherite_ingot',
          'twilightforest:fiery_chestplate',
        ],
      },
      {
        output: 'minecraft:netherite_leggings',
        inputs: ['minecraft:netherite_ingot', 'twilightforest:fiery_leggings'],
      },
      {
        output: 'minecraft:netherite_boots',
        inputs: ['minecraft:netherite_ingot', 'twilightforest:fiery_boots'],
      },
      {
        output: 'minecraft:netherite_pickaxe',
        inputs: ['minecraft:netherite_ingot', 'twilightforest:fiery_pickaxe'],
      },
      {
        output: 'minecraft:netherite_hoe',
        inputs: ['minecraft:netherite_ingot', 'malum:soul_stained_steel_hoe'],
      },
    ]);
});
