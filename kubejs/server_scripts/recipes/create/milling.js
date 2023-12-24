onEvent('recipes', event => {
  new recipes(event)
    .setType('create:milling')
    .setFunction(config =>
      event.recipes.createMilling(config.output, config.input)
    )
    .removeInputs([
      '#minecraft:wool',
      'minecraft:bone_meal',
      'minecraft:cocoa_beans',
      'minecraft:oxeye_daisy',
      'minecraft:sea_pickle',
      'minecraft:ink_sac',
      'minecraft:wither_rose',
      'minecraft:lapis_lazuli',
      'minecraft:poppy',
      'minecraft:dandelion',
      'farmersdelight:wild_potatoes',
      'minecraft:lilac',
      'minecraft:white_tulip',
      'minecraft:cactus',
      'minecraft:sunflower',
      'farmersdelight:wild_tomatoes',
      'minecraft:grass',
      'farmersdelight:wild_cabbages',
      'minecraft:orange_tulip',
      'minecraft:calcite',
      'farmersdelight:wild_onions',
      'kubejs:wheat',
      'minecraft:large_fern',
      'minecraft:tall_grass',
      'farmersdelight:wild_beetroots',
      'minecraft:coal',
      'farmersdelight:rice_panicle',
      'minecraft:rose_bush',
      'minecraft:azure_bluet',
      'minecraft:lily_of_the_valley',
      'minecraft:red_tulip',
      'minecraft:allium',
      'farmersdelight:wild_rice',
      'minecraft:cornflower',
      'farmersdelight:wild_carrots',
      'minecraft:blue_orchid',
      'minecraft:peony',
      'minecraft:charcoal',
      'minecraft:pink_tulip',
      'minecraft:fern',
    ])
    .modifyOutputs([
      {
        input: 'botania:red_double_flower',
        output: '4x botania:red_petal',
        global: true,
      },
      {
        input: 'botania:red_mystical_flower',
        output: '2x botania:red_petal',
        global: true,
      },
      {
        input: 'botania:orange_double_flower',
        output: '4x botania:orange_petal',
        global: true,
      },
      {
        input: 'botania:orange_mystical_flower',
        output: '2x botania:orange_petal',
        global: true,
      },
      {
        input: 'botania:yellow_double_flower',
        output: '4x botania:yellow_petal',
        global: true,
      },
      {
        input: 'botania:yellow_mystical_flower',
        output: '2x botania:yellow_petal',
        global: true,
      },
      {
        input: 'botania:lime_double_flower',
        output: '4x botania:lime_petal',
        global: true,
      },
      {
        input: 'botania:lime_mystical_flower',
        output: '2x botania:lime_petal',
        global: true,
      },
      {
        input: 'botania:green_double_flower',
        output: '4x botania:green_petal',
        global: true,
      },
      {
        input: 'botania:green_mystical_flower',
        output: '2x botania:green_petal',
        global: true,
      },
      {
        input: 'botania:cyan_mystical_flower',
        output: '2x botania:cyan_petal',
        global: true,
      },
      {
        input: 'botania:cyan_double_flower',
        output: '4x botania:cyan_petal',
        global: true,
      },
      {
        input: 'botania:light_blue_mystical_flower',
        output: '2x botania:light_blue_petal',
        global: true,
      },
      {
        input: 'botania:light_blue_double_flower',
        output: '4x botania:light_blue_petal',
        global: true,
      },
      {
        input: 'botania:blue_mystical_flower',
        output: '2x botania:blue_petal',
        global: true,
      },
      {
        input: 'botania:blue_double_flower',
        output: '4x botania:blue_petal',
        global: true,
      },
      {
        input: 'botania:purple_mystical_flower',
        output: '2x botania:purple_petal',
        global: true,
      },
      {
        input: 'botania:purple_double_flower',
        output: '4x botania:purple_petal',
        global: true,
      },
      {
        input: 'botania:magenta_mystical_flower',
        output: '2x botania:magenta_petal',
        global: true,
      },
      {
        input: 'botania:magenta_double_flower',
        output: '4x botania:magenta_petal',
        global: true,
      },
      {
        input: 'botania:pink_mystical_flower',
        output: '2x botania:pink_petal',
        global: true,
      },
      {
        input: 'botania:pink_double_flower',
        output: '4x botania:pink_petal',
        global: true,
      },
      {
        input: 'botania:brown_mystical_flower',
        output: '2x botania:brown_petal',
        global: true,
      },
      {
        input: 'botania:brown_double_flower',
        output: '4x botania:brown_petal',
        global: true,
      },
      {
        input: 'botania:gray_mystical_flower',
        output: '2x botania:gray_petal',
        global: true,
      },
      {
        input: 'botania:gray_double_flower',
        output: '4x botania:gray_petal',
        global: true,
      },
      {
        input: 'botania:light_gray_mystical_flower',
        output: '2x botania:light_gray_petal',
        global: true,
      },
      {
        input: 'botania:light_gray_double_flower',
        output: '4x botania:light_gray_petal',
        global: true,
      },
      {
        input: 'botania:black_mystical_flower',
        output: '2x botania:black_petal',
        global: true,
      },
      {
        input: 'botania:black_double_flower',
        output: '4x botania:black_petal',
        global: true,
      },
      {
        input: 'botania:white_mystical_flower',
        output: '2x botania:white_petal',
        global: true,
      },
      {
        input: 'botania:white_double_flower',
        output: '4x botania:white_petal',
        global: true,
      },
      {
        input: 'minecraft:sugar_cane',
        output: 'minecraft:sugar',
      },
      {
        input: 'minecraft:bone',
        output: '3x minecraft:bone_meal',
      },
      {
        input: 'undergarden:ditchbulb',
        output: 'undergarden:ditchbulb_paste',
        global: true,
      },
      {
        input: 'minecraft:blaze_rod',
        output: 'minecraft:blaze_powder',
        global: true,
      },
      {
        input: 'minecraft:prismarine',
        output: 'charcoal_pit:prismarine_dust',
        global: true,
      },
      {
        input: 'rankine:corn_ear',
        output: 'rankine:corn_grain',
        global: true,
      },
      {
        input: 'rankine:oats',
        output: 'rankine:oat_grain',
        global: true,
      },
      {
        input: 'rankine:sorghum',
        output: 'rankine:sorghum_grain',
        global: true,
      },
      {
        input: 'rankine:rye',
        output: 'rankine:rye_grain',
        global: true,
      },
      {
        input: 'rankine:rice',
        output: 'rankine:rice_grain',
        global: true,
      },
      {
        input: 'rankine:millet',
        output: 'rankine:millet_grain',
        global: true,
      },
      {
        input: 'rankine:barley',
        output: 'rankine:barley_grain',
        global: true,
      },
      {
        input: 'kubejs:wheat',
        output: 'rankine:wheat_grain',
        global: true,
      },
      {
        input: 'undergarden:regalium_crystal',
        output: 'extendedcrafting:luminessence',
      },
      {
        input: 'rankine:blood_obsidian',
        output: 'create:powdered_obsidian',
        global: true,
      },
    ])
    .add([
      {
        input: 'blue_skies:spider_webbing',
        output: '3x minecraft:string',
      },
      {
        input: 'minecraft:end_stone',
        output: '3x occultism:crushed_end_stone',
      },
      {
        input: 'twilightforest:fiery_ingot',
        output: 'create:cinder_flour',
      },
      {
        output: 'minecraft:gray_dye',
        input: 'undergarden:veil_mushroom',
      },
      {output: 'minecraft:lime_dye', input: 'hexerei:mugwort_leaves'},
      {
        output: 'minecraft:light_gray_dye',
        input: 'undergarden:shimmerweed',
      },
      {output: 'minecraft:red_dye', input: 'blue_skies:brumble'},
      {output: 'minecraft:orange_dye', input: 'blue_skies:blaze_bud'},
      {
        output: 'minecraft:black_dye',
        input: 'undergarden:ink_mushroom',
      },
      {output: 'minecraft:blue_dye', input: 'blue_skies:nightcress'},
      {output: 'minecraft:pink_dye', input: 'blue_skies:blush_blossom'},
      {
        output: 'minecraft:yellow_dye',
        input: 'twilightforest:torchberries',
      },
      {output: 'minecraft:green_dye', input: 'undergarden:mogmoss'},
      {
        output: 'minecraft:light_blue_dye',
        input: 'blue_skies:snowcap_pinhead',
      },
      {output: 'minecraft:magenta_dye', input: 'blue_skies:camellia'},
      {
        output: 'minecraft:purple_dye',
        input: 'undergarden:gloomgourd_seeds',
      },
      {output: 'minecraft:cyan_dye', input: 'blue_skies:moonlit_bloom'},
      {output: 'minecraft:brown_dye', input: 'hexerei:mandrake_root'},
      {output: 'minecraft:white_dye', input: 'minecraft:bone_meal'},
    ]);
});
