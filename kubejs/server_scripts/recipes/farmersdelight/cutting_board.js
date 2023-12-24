onEvent('recipes', event => {
  new recipes(event)
    .setType('farmersdelight:cutting')
    .setFunction(config => {
      let json = {
        type: 'farmersdelight:cutting',
        ingredients: [],
        tool: {
          type: config.action_type,
          action: config.action,
        },
        result: [],
        sound: config.sound,
      };

      config.inputs.forEach(item => {
        json.ingredients.push(item);
      });
      config.outputs.forEach(item => {
        json.result.push(item);
      });

      event.custom(json);
    })
    .removeOutputs([
      'farmersdelight:cabbage_seeds',
      'minecraft:yellow_dye',
      'farmersdelight:rice',
      'minecraft:potato',
      'minecraft:purple_dye',
      'farmersdelight:tomato',
      'farmersdelight:tomato_seeds',
      'minecraft:green_dye',
      'minecraft:black_dye',
      'minecraft:light_gray_dye',
      'farmersdelight:onion',
      'minecraft:pink_dye',
      'minecraft:magenta_dye',
      'minecraft:lime_dye',
      'minecraft:orange_dye',
      'minecraft:white_dye',
      'minecraft:blue_dye',
      'minecraft:carrot',
      'minecraft:light_blue_dye',
      'minecraft:red_dye',
      'minecraft:beetroot_seeds',
      'minecraft:stripped_birch_wood',
      'minecraft:quartz',
      'minecraft:brick',
      'minecraft:jungle_planks',
      'minecraft:stripped_acacia_log',
      'minecraft:clay_ball',
      'minecraft:stripped_spruce_log',
      'minecraft:stripped_acacia_wood',
      'minecraft:acacia_planks',
      'minecraft:stripped_jungle_wood',
      'minecraft:stripped_warped_stem',
      'minecraft:spruce_planks',
      'minecraft:stripped_birch_log',
      'minecraft:iron_nugget',
      'minecraft:stripped_jungle_log',
      'minecraft:dark_oak_planks',
      'minecraft:cobblestone',
      'minecraft:stripped_dark_oak_log',
      'minecraft:cobbled_deepslate',
      'minecraft:nether_brick',
      'minecraft:stripped_warped_hyphae',
      'minecraft:oak_planks',
      'minecraft:warped_planks',
      'minecraft:stripped_oak_log',
      'minecraft:stripped_dark_oak_wood',
      'minecraft:crimson_planks',
      'minecraft:stripped_crimson_stem',
      'minecraft:birch_planks',
      'minecraft:stripped_oak_wood',
      'minecraft:leather',
      'minecraft:stripped_spruce_wood',
      'minecraft:stripped_crimson_hyphae',
      'farmersdelight:tree_bark',
      'minecraft:amethyst_shard',
    ]);
});
