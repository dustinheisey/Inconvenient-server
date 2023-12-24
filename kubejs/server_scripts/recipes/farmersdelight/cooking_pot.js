onEvent('recipes', event => {
  event.remove({
    output: [
      'undergarden:veiled_stew',
      'undergarden:bloody_stew',
      'undergarden:inky_stew',
      'undergarden:indigo_stew',
      'minecraft:fermented_spider_eye',
      'butchercraft:french_fries',
    ],
  });

  new recipes(event)
    .setType('farmersdelight:cooking')
    .setFunction(config => {
      let json = {
        type: 'farmersdelight:cooking',
        recipe_book_tab: 'meals',
        ingredients: config.inputs,
        result: {
          item: config.output,
          count: config.count || 1,
        },
        cookingtime: 200,
      };

      if (config.container) json.container = {item: config.container};

      event.custom(json);
    })
    .modifyOutputs([
      {
        output: 'farmersrespite:blazing_chili',
        inputs: [
          {item: 'minecraft:blaze_powder'},
          {item: 'minecraft:blaze_powder'},
          {item: 'minecraft:nether_wart'},
          {item: 'minecraft:nether_wart'},
          {item: 'farmersrespite:coffee_beans'},
          {item: 'minecraft:porkchop'},
        ],
        global: true,
      },
      {
        output: 'butchercraft:gelatin',
        count: 4,
        inputs: [
          {item: 'butchercraft:cow_hide'},
          {item: 'butchercraft:cow_hide'},
          {item: 'butchercraft:cow_hide'},
          {item: 'butchercraft:cow_hide'},
          {item: 'butchercraft:cow_hide'},
          {item: 'butchercraft:cow_hide'},
        ],
        global: true,
      },
      {
        global: true,
        output: 'butchercraft:stuffed_heart',
        inputs: [
          {item: 'butchercraft:heart'},
          {item: 'minecraft:egg'},
          {item: 'butchercraft:cooked_bacon'},
          {item: 'blue_skies:charscale_moki'},
          {item: 'farmersdelight:onion'},
          {item: 'farmersdelight:cabbage'},
        ],
      },
      {
        global: true,
        output: 'butchercraft:ketchup_jar_item',
        inputs: [{item: 'farmersdelight:tomato'}, {item: 'minecraft:sugar'}],
        container: 'farmersdelight:milk_bottle',
      },
      {
        global: true,
        output: 'butchercraft:stock_jar_item',
        inputs: [{tag: 'forge:vegetables'}, {tag: 'forge:bones'}],
        container: 'farmersdelight:milk_bottle',
      },
      {
        global: true,
        output: 'butchercraft:fries',
        inputs: [{item: 'pneumaticcraft:chips'}, {item: 'butchercraft:lard'}],
      },
      {
        global: true,
        output: 'pneumaticcraft:salmon_tempura',
        inputs: [
          {item: 'pneumaticcraft:raw_salmon_tempura'},
          {item: 'butchercraft:lard'},
        ],
      },
    ])
    .add([
      {
        output: 'butchercraft:gelatin',
        count: 4,
        inputs: [
          {item: 'butchercraft:sheep_hide'},
          {item: 'butchercraft:sheep_hide'},
          {item: 'butchercraft:sheep_hide'},
          {item: 'butchercraft:sheep_hide'},
          {item: 'butchercraft:sheep_hide'},
          {item: 'butchercraft:sheep_hide'},
        ],
        global: true,
      },
      {
        output: 'butchercraft:gelatin',
        count: 4,
        inputs: [
          {item: 'butchercraft:pig_hide'},
          {item: 'butchercraft:pig_hide'},
          {item: 'butchercraft:pig_hide'},
          {item: 'butchercraft:pig_hide'},
          {item: 'butchercraft:pig_hide'},
          {item: 'butchercraft:pig_hide'},
        ],
        global: true,
      },
      {
        output: 'butchercraft:gelatin',
        count: 4,
        inputs: [
          {item: 'butchercraft:sinew'},
          {item: 'butchercraft:sinew'},
          {item: 'butchercraft:sinew'},
          {item: 'butchercraft:sinew'},
          {item: 'butchercraft:sinew'},
          {item: 'butchercraft:sinew'},
        ],
        global: true,
      },
      {
        output: 'minecraft:fermented_spider_eye',
        inputs: [
          {item: 'minecraft:spider_eye'},
          {item: 'minecraft:sugar'},
          {item: 'undergarden:blood_mushroom'},
        ],
      },
      {
        output: 'undergarden:veiled_stew',
        inputs: [
          {item: 'undergarden:veil_mushroom'},
          {item: 'undergarden:veil_mushroom'},
          {item: 'undergarden:veil_mushroom'},
        ],
        container: 'minecraft:bowl',
      },
      {
        output: 'undergarden:bloody_stew',
        inputs: [
          {item: 'undergarden:blood_mushroom'},
          {item: 'undergarden:blood_mushroom'},
          {item: 'undergarden:blood_mushroom'},
        ],
        container: 'minecraft:bowl',
      },
      {
        output: 'undergarden:inky_stew',
        inputs: [
          {item: 'undergarden:ink_mushroom'},
          {item: 'undergarden:ink_mushroom'},
          {item: 'undergarden:ink_mushroom'},
        ],
        container: 'minecraft:bowl',
      },
      {
        output: 'undergarden:indigo_stew',
        inputs: [
          {item: 'undergarden:indigo_mushroom'},
          {item: 'undergarden:indigo_mushroom'},
          {item: 'undergarden:indigo_mushroom'},
        ],
        container: 'minecraft:bowl',
      },
      {
        output: 'farmersdelight:dog_food',
        inputs: [
          {
            item: 'minecraft:rotten_flesh',
          },
          {
            item: 'minecraft:bone_meal',
          },
          {
            tag: 'farmersdelight:wolf_prey',
          },
          {
            tag: 'forge:crops/rice',
          },
        ],
        container: 'minecraft:bowl',
      },
    ]);
});
