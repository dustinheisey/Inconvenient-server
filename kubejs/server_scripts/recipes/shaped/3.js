onEvent('recipes', event => {
  let modify_config = [
    {
      output: 'occultism:book_of_binding_foliot',
      pattern: ['ab ', 'bcb', ' b '],
      key: {
        a: 'occultism:purified_ink',
        b: 'minecraft:red_dye',
        c: 'minecraft:book',
      },
    },
    {
      output: 'undergarden:catalyst',
      pattern: ['aba', 'bcb', 'aba'],
      key: {
        a: 'occultism:crushed_end_stone',
        b: 'naturesaura:infused_stone',
        c: 'naturesaura:infused_iron',
      },
    },
    {
      output: 'malum:spirit_pouch',
      pattern: [' a ', 'b b', ' b '],
      key: {
        a: 'minecraft:string',
        b: 'malum:spirit_fabric',
      },
    },
    {
      global: true,
      output: 'extendedcrafting:basic_component',
      pattern: ['ab', 'cc'],
      key: {
        a: 'extendedcrafting:black_iron_slate',
        b: 'twilightforest:carminite',
        c: 'twilightforest:ironwood_ingot',
      },
    },
    {
      output: 'malum:spirit_altar',
      pattern: [' a ', 'bcb', 'ccc'],
      key: {
        a: 'undergarden:forgotten_nugget',
        b: 'naturesaura:infused_iron',
        c: 'malum:runewood_planks',
      },
    },
    {
      output: '16x minecraft:torch',
      pattern: ['a', 'b'],
      key: {
        a: 'realistictorches:glowstone_crystal',
        b: '#forge:rods/wooden',
      },
    },
    {
      output: 'rankine:totem_of_timesaving',
      pattern: ['aaa', 'aba', 'aaa'],
      key: {
        a: 'twilightforest:ironwood_ingot',
        b: 'tconstruct:slimesteel_block',
      },
    },
    {
      output: 'undergarden:depthrock_bed',
      pattern: ['aaa', 'bbb'],
      key: {
        a: 'undergarden:mogmoss',
        b: '#minecraft:planks',
      },
    },
    {
      output: 'rankine:totem_of_enduring',
      pattern: ['aaa', 'aba', 'aaa'],
      key: {
        a: 'undergarden:froststeel_ingot',
        b: 'undergarden:utherium_block',
      },
    },
    {
      output: 'rankine:totem_of_promising',
      pattern: ['aaa', 'aba', 'aaa'],
      key: {
        a: 'twilightforest:knightmetal_ingot',
        b: 'minecraft:lapis_block',
      },
    },
    {
      global: true,
      output: `2x blue_skies:lunar_stonebrick`,
      pattern: ['ab', 'ba'],
      key: {a: `blue_skies:lunar_stone`, b: 'rankine:mortar'},
    },
    {
      global: true,
      output: '2x architects_palette:withered_osseous_bricks',
      pattern: ['ab', 'ba'],
      key: {
        a: `architects_palette:withered_bone_block`,
        b: 'rankine:mortar',
      },
    },
    {
      global: true,
      output: 'architects_palette:osseous_bricks',
      pattern: ['ab', 'ba'],
      key: {a: `minecraft:bone_block`, b: 'rankine:mortar'},
    },
    {
      output: `twilightforest:twilight_oak_chest`,
      pattern: ['aaa', 'a a', 'aaa'],
      key: {a: `twilightforest:twilight_oak_planks`},
    },
    {
      output: `twilightforest:canopy_chest`,
      pattern: ['aaa', 'a a', 'aaa'],
      key: {a: `twilightforest:canopy_planks`},
    },
    {
      output: `twilightforest:mangrove_chest`,
      pattern: ['aaa', 'a a', 'aaa'],
      key: {a: `twilightforest:mangrove_planks`},
    },
    {
      output: `twilightforest:time_chest`,
      pattern: ['aaa', 'a a', 'aaa'],
      key: {a: `twilightforest:time_planks`},
    },
    {
      output: `twilightforest:transformation_chest`,
      pattern: ['aaa', 'a a', 'aaa'],
      key: {a: `twilightforest:transformation_planks`},
    },
    {
      output: `twilightforest:mining_chest`,
      pattern: ['aaa', 'a a', 'aaa'],
      key: {a: `twilightforest:mining_planks`},
    },
    {
      output: `twilightforest:sorting_chest`,
      pattern: ['aaa', 'a a', 'aaa'],
      key: {a: `twilightforest:sorting_planks`},
    },
    {
      global: true,
      output: 'occultism:chalk_gold_impure',
      pattern: ['ab', 'b '],
      key: {
        a: 'occultism:chalk_white_impure',
        b: 'occultism:crushed_end_stone',
      },
    },
    {
      global: true,
      output: 'occultism:chalk_purple_impure',
      pattern: ['ab', 'cc'],
      key: {
        a: 'occultism:chalk_gold_impure',
        b: 'minecraft:glowstone_dust',
        c: 'malum:chunk_of_brilliance',
      },
    },
    {
      output: 'minecraft:book',
      pattern: ['aa', 'ab'],
      key: {
        a: 'minecraft:paper',
        b: 'minecraft:leather',
      },
    },
    {
      output: 'bloodmagic:sacrificerune',
      pattern: ['aba', 'cdc', 'aba'],
      key: {
        a: 'rankine:black_marble',
        b: 'bloodmagic:reinforcedslate',
        c: 'minecraft:glowstone_dust',
        d: 'bloodmagic:blankrune',
      },
    },
    {
      output: 'naturesaura:bottle_two_the_rebottling',
      pattern: [' a ', 'bcb', ' b '],
      key: {
        a: 'rankine:cork',
        b: '#forge:glass',
        c: 'naturesaura:gold_powder',
      },
    },
    {
      output: 'rankine:rock_drill',
      pattern: [' a ', 'bcb', ' b '],
      key: {
        a: 'create:shaft',
        b: 'rankine:bronze_ingot',
        c: 'create:powdered_obsidian',
      },
    },
    {
      output: 'bloodmagic:selfsacrificerune',
      pattern: ['aba', 'cdc', 'aba'],
      key: {
        a: 'rankine:gray_marble',
        b: 'bloodmagic:reinforcedslate',
        c: 'minecraft:redstone',
        d: 'bloodmagic:blankrune',
      },
    },
    {
      output: 'minecraft:bow',
      pattern: [' ab', 'a b', ' ab'],
      key: {a: '#forge:rods/wooden', b: 'minecraft:string'},
    },
    {
      output: 'bloodmagic:altar',
      pattern: ['a a', 'bcb', 'aba'],
      key: {
        a: 'undergarden:utherium_crystal',
        b: 'rankine:slate',
        c: 'hexerei:blood_bottle',
      },
    },
    {
      output: 'minecraft:sticky_piston',
      pattern: ['a', 'b'],
      key: {
        a: 'tconstruct:sky_slime_ball',
        b: 'minecraft:piston',
      },
    },
    {
      output: 'minecraft:lectern',
      pattern: ['aaa', ' b ', ' a '],
      key: {
        a: '#minecraft:wooden_slabs',
        b: '#forge:bookshelves',
      },
    },
    {
      output: 'minecraft:book',
      pattern: ['aa', 'ab'],
      key: {
        a: 'minecraft:paper',
        b: 'minecraft:leather',
      },
    },
    {
      output: '2x naturesaura:infused_brick',
      pattern: ['ab', 'ba'],
      key: {
        a: 'rankine:mortar',
        b: 'naturesaura:infused_stone',
      },
    },
    {
      output: '2x undergarden:twistytwig',
      pattern: [' a', 'a '],
      key: {
        a: 'undergarden:wigglewood_planks',
      },
    },
    {
      output: '2x blue_skies:maple_stick',
      pattern: ['a', 'a'],
      key: {
        a: 'blue_skies:maple_planks',
      },
    },
    {
      output: '2x blue_skies:dusk_stick',
      pattern: ['a', 'a'],
      key: {
        a: 'blue_skies:dusk_planks',
      },
    },
    {
      output: '2x blue_skies:lunar_stick',
      pattern: ['a', 'a'],
      key: {
        a: 'blue_skies:lunar_planks',
      },
    },
    {
      output: `twilightforest:darkwood_chest`,
      pattern: ['aaa', 'a a', 'aaa'],
      key: {a: `twilightforest:dark_planks`},
    },
  ];

  colors.forEach(color => {
    if (color !== 'red') {
      modify_config.push({
        output: `paragon_textiles:cushion_${color}`,
        pattern: ['a', 'b'],
        key: {
          a: `paragon_textiles:fabric_${color}`,
          b: '#minecraft:wooden_slabs',
        },
      });
    }
  });

  new recipes(event)
    .setType('minecraft:crafting_shaped')
    .setStage('stage_3')
    .setFunction(config => {
      return event.shaped(config.output, config.pattern, config.key);
    })
    .modifyOutputs(modify_config);
});
