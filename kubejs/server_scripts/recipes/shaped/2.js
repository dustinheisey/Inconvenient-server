onEvent('recipes', event => {
  let modify_config = [
    {
      output: 'totemic:wind_chime',
      pattern: ['aaa', ' bb', '  b'],
      key: {
        a: 'minecraft:iron_ingot',
        b: 'totemic:cedar_planks',
      },
    },
    {
      output: 'cold_sweat:minecart_insulation',
      pattern: ['a a', 'aaa'],
      key: {
        a: 'cold_sweat:fur',
      },
    },
    {
      output: 'tconstruct:pattern',
      pattern: ['ab', 'ba'],
      key: {
        a: 'rankine:jute',
        b: '#forge:rods/wooden',
      },
    },
    {
      output: 'farmersrespite:kettle',
      pattern: ['aba', 'cdc', 'cec'],
      key: {
        a: `#forge:rods/wooden`,
        b: 'minecraft:leather',
        c: 'minecraft:copper_ingot',
        d: 'minecraft:bucket',
        e: 'rankine:pewter_ingot',
      },
    },
    {
      output: `relics:researching_table`,
      pattern: ['aba', 'bcb', 'cdc'],
      key: {
        a: `naturesaura:gold_powder`,
        b: 'paragon_textiles:fabric_red',
        c: 'malum:runewood_log',
        d: 'malum:sacred_spirit',
      },
    },
    {
      output: 'naturesaura:wood_stand',
      pattern: ['a', 'b'],
      key: {
        a: `naturesaura:gold_leaf`,
        b: 'totemic:cedar_log',
      },
    },
    {
      output: `ecofriendly:recycled_carrier_bag_ym`,
      pattern: ['abc', 'bda', 'caa'],
      key: {
        a: 'farmersdelight:canvas',
        b: 'paragon_textiles:silk',
        c: 'paragon_textiles:fabric_plain',
        d: 'ecofriendly:plastic_bag_ym',
      },
    },
    {
      output: `rankine:pearl_block`,
      pattern: ['aa', 'aa'],
      key: {
        a: 'blue_skies:pearl',
      },
    },
    {
      output: `3x rankine:metal_pipe`,
      pattern: ['aaa'],
      key: {
        a: 'tconstruct:amethyst_bronze_ingot',
      },
    },
    {
      output: `2x blue_skies:cherry_stick`,
      pattern: ['a', 'a'],
      key: {
        a: 'blue_skies:cherry_planks',
      },
    },
    {
      output: `2x blue_skies:frostbright_stick`,
      pattern: ['a', 'a'],
      key: {
        a: 'blue_skies:frostbright_planks',
      },
    },
    {
      output: `2x blue_skies:starlit_stick`,
      pattern: ['a', 'a'],
      key: {
        a: 'blue_skies:starlit_planks',
      },
    },
    {
      output: `2x blue_skies:bluebright_stick`,
      pattern: ['a', 'a'],
      key: {
        a: 'blue_skies:bluebright_planks',
      },
    },
    {
      output: `3x rankine:bamboo_culms_sign`,
      pattern: ['aaa', 'aaa', ' b '],
      key: {
        a: `rankine:bamboo_culms`,
        b: '#forge:rods/wooden',
      },
    },
    {
      output: `8x rankine:tap_line`,
      pattern: ['aaa'],
      key: {
        a: 'minecraft:leather',
      },
    },
    {
      global: true,
      output: `rankine:tree_tap`,
      pattern: [' a ', 'bbb', 'c  '],
      key: {
        a: 'minecraft:red_dye',
        b: 'rankine:sterling_silver_ingot',
        c: 'minecraft:bucket',
      },
    },
    {
      output: `rankine:fins`,
      pattern: ['a  ', 'aaa'],
      key: {
        a: 'minecraft:leather',
      },
    },
    {
      output: `rankine:ice_skates`,
      pattern: ['a  ', 'bba', 'ccc'],
      key: {
        a: 'minecraft:leather',
        b: 'farmersdelight:rope',
        c: 'rankine:pewter_nugget',
      },
    },
    {
      output: `rankine:photometer`,
      pattern: [' a ', 'aba', ' a '],
      key: {
        a: 'rankine:sterling_silver_ingot',
        b: 'blue_skies:charoite',
      },
    },
    {
      output: `rankine:speedometer`,
      pattern: [' a ', 'bcb', ' a '],
      key: {
        a: 'blue_skies:ventium_ingot',
        b: 'blue_skies:falsite_ingot',
        c: 'blue_skies:aquite',
      },
    },
    {
      output: `rankine:biometer`,
      pattern: [' a ', 'aba', ' a '],
      key: {
        a: 'tconstruct:amethyst_bronze_ingot',
        b: 'blue_skies:diopside_gem',
      },
    },
    {
      output: `cold_sweat:sewing_table`,
      pattern: ['aaa', 'bbb', 'bbb'],
      key: {
        a: 'paragon_textiles:fabric_red',
        b: '#minecraft:planks',
      },
    },
    {
      output: 'hexerei:mixing_cauldron',
      pattern: ['a a', 'bcb', 'bbb'],
      key: {
        a: 'hexerei:selenite_shard',
        b: 'tconstruct:amethyst_bronze_ingot',
        c: 'minecraft:cauldron',
      },
    },
    {
      output: 'totemic:drum',
      pattern: ['aaa', 'bcb', 'cbc'],
      key: {
        a: 'minecraft:leather',
        b: '#minecraft:planks',
        c: 'rankine:gun_cotton',
      },
    },
    {
      output: 'paragon_textiles:cushion_plain',
      pattern: ['a', 'b'],
      key: {
        a: `paragon_textiles:fabric_plain`,
        b: '#minecraft:wooden_slabs',
      },
    },
    {
      output: 'paragon_textiles:cushion_red',
      pattern: ['a', 'b'],
      key: {
        a: `paragon_textiles:fabric_red`,
        b: '#minecraft:wooden_slabs',
      },
    },
    {
      output: 'occultism:brush',
      pattern: ['aaa', 'bbb'],
      key: {
        a: '#minecraft:planks',
        b: 'paragon_textiles:silk',
      },
    },
    {
      output: `comforts:hammock_white`,
      pattern: ['aba', 'aca', 'aba'],
      key: {
        a: `farmersdelight:rope`,
        b: '#forge:rods/wooden',
        c: 'rankine:gun_cotton',
      },
    },
    {
      output: `create:red_seat`,
      pattern: ['a', 'b'],
      key: {
        a: `paragon_textiles:cushion_red`,
        b: '#minecraft:wooden_slabs',
      },
    },
    {
      output: `minecraft:fishing_rod`,
      pattern: ['  a', ' ab', 'a b'],
      key: {
        a: `#forge:rods/wooden`,
        b: 'paragon_textiles:silk',
      },
    },
    {
      output: `minecraft:shears`,
      pattern: [' a', 'a '],
      key: {a: `rankine:pewter_ingot`},
    },
    {
      output: `minecraft:scaffolding`,
      pattern: ['aba', 'a a', 'a a'],
      key: {
        a: `#forge:rods/wooden`,
        b: 'farmersdelight:canvas',
      },
    },
    {
      output: 'farmersdelight:cooking_pot',
      pattern: ['aba', 'cdc', 'ccc'],
      key: {
        a: 'minecraft:brick',
        b: 'rankine:pewter_shovel',
        c: 'rankine:pewter_ingot',
        d: 'minecraft:water_bucket',
      },
    },
    {
      output: 'minecraft:lead',
      pattern: [' aa', ' aa', 'a  '],
      key: {
        a: 'paragon_textiles:silk',
      },
    },
    {
      output: 'smallships:sail',
      pattern: ['aaa', 'aba', 'cbc'],
      key: {
        a: 'rankine:gun_cotton',
        b: '#minecraft:logs',
        c: 'minecraft:lead',
      },
    },
    {
      output: 'rankine:totem_of_hastening',
      pattern: ['aaa', 'aba', 'aaa'],
      key: {
        a: 'tconstruct:amethyst_bronze_ingot',
        b: 'blue_skies:diopside_block',
      },
    },
    {
      output: 'astikorcarts:wheel',
      pattern: ['aba', 'bcb', 'aba'],
      key: {
        a: '#forge:rods/wooden',
        b: 'minecraft:iron_ingot',
        c: '#minecraft:planks',
      },
    },
    {
      output: 'astikorcarts:plow',
      pattern: ['aaa', 'bcb', 'dbd'],
      key: {
        a: 'minecraft:iron_hoe',
        b: '#forge:rods/wooden',
        c: '#minecraft:planks',
        d: 'astikorcarts:wheel',
      },
    },
    {
      output: 'astikorcarts:animal_cart',
      pattern: ['aaa', 'aba', 'cac'],
      key: {
        a: '#minecraft:planks',
        b: 'minecraft:iron_ingot',
        c: 'astikorcarts:wheel',
      },
    },
    {
      output: 'astikorcarts:supply_cart',
      pattern: ['aba', 'aba', 'cac'],
      key: {
        a: '#minecraft:planks',
        b: 'paragon_textiles:basket',
        c: 'astikorcarts:wheel',
      },
    },
    {
      output: '2x tconstruct:seared_bricks',
      pattern: ['ab', 'ba'],
      key: {
        a: 'tconstruct:seared_stone',
        b: 'rankine:mortar',
      },
    },
    {
      output: 'tconstruct:seared_melter',
      pattern: ['a a', 'aaa'],
      key: {
        a: 'tconstruct:seared_bricks',
      },
    },
    {
      output: 'totemic:tipi',
      pattern: [' a ', 'bcb', 'c c'],
      key: {
        a: 'minecraft:leather',
        b: '#forge:rods/wooden',
        c: 'rankine:gun_cotton',
      },
    },
  ];

  let signs = [
    'rankine:cedar_sign',
    'rankine:balsam_fir_sign',
    'rankine:eastern_hemlock_sign',
    'rankine:western_hemlock_sign',
    'rankine:pinyon_pine_sign',
    'rankine:juniper_sign',
    'rankine:black_birch_sign',
    'rankine:yellow_birch_sign',
    'rankine:red_birch_sign',
    'rankine:maple_sign',
    'rankine:magnolia_sign',
    'rankine:black_walnut_sign',
    'rankine:coconut_palm_sign',
    'rankine:cork_oak_sign',
    'rankine:sharinga_sign',
    'rankine:cinnamon_sign',
    'rankine:honey_locust_sign',
    'rankine:weeping_willow_sign',
    'rankine:erythrina_sign',
    'rankine:charred_sign',
    'rankine:bamboo_sign',
  ];

  let bricks = [
    {
      input: 'minecraft:obsidian',
      output: 'cataclysm:obsidian_bricks',
    },
    {
      input: 'tconstruct:seared_brick',
      output: 'tconstruct:seared_bricks',
    },
    {
      input: 'charcoal_pit:sandy_brick_item',
      output: 'charcoal_pit:sandy_brick',
    },
    {
      input: 'blue_skies:nature_stone',
      output: 'blue_skies:nature_stonebrick',
    },
    {
      input: 'blue_skies:polished_brumble',
      output: 'blue_skies:polished_brumble_bricks',
    },
    {
      input: 'blue_skies:turquoise_stone',
      output: 'blue_skies:turquoise_stonebrick',
    },
    {
      input: 'minecraft:polished_deepslate',
      output: 'minecraft:deepslate_bricks',
    },
    {
      input: 'architects_palette:myonite',
      output: 'architects_palette:myonite_bricks',
    },
    {
      input: 'minecraft:dripstone_block',
      output: 'architects_palette:dripstone_bricks',
    },
    {
      input: 'architects_palette:abyssaline',
      output: 'architects_palette:abyssaline_bricks',
    },
    {
      input: 'minecraft:calcite',
      output: 'architects_palette:calcite_bricks',
    },
  ];

  let grains = ['sorghum', 'rye', 'millet', 'barley'];

  overworldWoods.forEach(wood => {
    modify_config.push({
      output: `smallships:${wood}_cog`,
      pattern: ['aaa', 'bcb', 'ddd'],
      key: {
        a: 'paragon_textiles:silk',
        b: 'paragon_textiles:basket_sturdy',
        c: 'smallships:sail',
        d: `justaraftmod:${wood}_raft`,
      },
    });
  });

  signs.forEach(id => {
    modify_config.push({
      output: `3x ${id}`,
      pattern: ['aaa', 'aaa', ' b '],
      key: {
        a: `${id.slice(0, -5)}_planks`,
        b: '#forge:rods/wooden',
      },
    });
  });

  bricks.forEach(item => {
    modify_config.push({
      output: `2x ${item.output}`,
      pattern: ['ab', 'ba'],
      key: {a: item.input, b: 'rankine:mortar'},
    });
  });

  grains.forEach(id => {
    modify_config.push({
      output: `rankine:${id}_bale`,
      pattern: ['aaa', 'aaa', 'aaa'],
      key: {a: `rankine:${id}`},
    });
  });

  new recipes(event)
    .setType('minecraft:crafting_shaped')
    .setStage('stage_2')
    .setFunction(config => {
      return event.shaped(config.output, config.pattern, config.key);
    })
    .removeOutputs(['rankine:gun_cotton'])
    .modifyOutputs(modify_config)
    .add([
      {
        output: `blue_skies:blue_journal`,
        pattern: ['ab', 'b '],
        key: {
          a: `farmersdelight:canvas`,
          b: 'blue_skies:turquoise_stone',
        },
      },
      {
        output: `rankine:gun_cotton`,
        pattern: ['aaa', 'aaa', 'aaa'],
        key: {a: 'rankine:cotton'},
      },
      {
        output: 'minecraft:furnace',
        pattern: ['aaa', 'a a', 'aaa'],
        key: {
          a: '#forge:cobblestone',
        },
      },
      {
        output: `rankine:oat_bale`,
        pattern: ['aaa', 'aaa', 'aaa'],
        key: {a: `rankine:oats`},
      },
      {
        output: `rankine:lead_glass`,
        pattern: [' a ', 'aba', ' a '],
        key: {a: `rankine:lead_ingot`, b: '#forge:glass'},
      },
      {
        output: 'minecraft:furnace',
        pattern: ['aaa', 'a a', 'aaa'],
        key: {
          a: '#forge:cobblestone',
        },
      },
      {
        output: 'cold_sweat:hearth',
        pattern: ['  a', 'bcb', 'aba'],
        key: {
          a: 'minecraft:iron_ingot',
          b: '#forge:bricks',
          c: 'minecraft:furnace',
        },
      },
      {
        output: 'paragon_textiles:silk',
        pattern: ['aaa', 'aba', 'aaa'],
        key: {a: 'rankine:cotton', b: '#forge:rods/wooden'},
      },
    ]);
});
