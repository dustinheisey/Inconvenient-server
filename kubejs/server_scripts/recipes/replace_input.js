onEvent('recipes', event => {
  let config = [
    {
      target: {output: 'realistictorches:matchbox'},
      to_replace: 'minecraft:paper',
      replace_with: 'farmersdelight:canvas',
    },
    {
      target: {output: 'rankine:altimeter'},
      to_replace: 'rankine:brass_ingot',
      replace_with: 'rankine:bronze_ingot',
    },
    // {
    //   target: {
    //     output: [
    //       "cold_sweat:insulated_minecart",
    //       "cold_sweat:minecart_insulation",
    //     ],
    //   },
    //   to_replace: "#minecraft:wool",
    //   replace_with: "rankine:gun_cotton",
    // },
    {
      target: {output: 'malum:encyclopedia_arcana'},
      to_replace: 'malum:processed_soulstone',
      replace_with: 'malum:holy_sap',
    },
    {
      target: {output: 'botania:dodge_ring'},
      to_replace: 'minecraft:emerald',
      replace_with: 'botania:terrasteel_nugget',
    },
    {
      target: {output: 'botania:itemfinder'},
      to_replace: 'minecraft:emerald',
      replace_with: 'botania:terrasteel_ingot',
    },
    {
      target: {output: 'naturesaura:shockwave_creator'},
      to_replace: 'minecraft:diamond_boots',
      replace_with: 'botania:elementium_boots',
    },
    {
      target: {output: 'rankine:saddle_tree'},
      to_replace: 'rankine:steel_ingot',
      replace_with: 'naturesaura:sky_ingot',
    },
    {
      to_replace: 'minecraft:wheat',
      replace_with: 'kubejs:wheat',
    },
    {
      target: {output: 'minecraft:enchanted_golden_apple'},
      to_replace: 'rankine:mischmetal_block',
      replace_with: 'rankine:amalgam_block',
    },
    {
      target: {output: 'immersiveengineering:rs_engineering'},
      to_replace: 'minecraft:redstone',
      replace_with: 'extendedcrafting:redstone_ingot',
    },
    {
      target: {
        output: [
          'extendedcrafting:elite_component',
          'pneumaticcraft:gps_tool',
          'compactcrafting:base',
          'immersiveengineering:rockcutter',
          'pneumaticcraft:jackhammer',
          'pneumaticcraft:gun_ammo_ap',
          'pneumaticcraft:assembly_drill',
          'pneumaticcraft:large_tank',
          'pneumaticcraft:smart_chest',
        ],
      },
      to_replace: 'minecraft:diamond',
      replace_with: 'rankine:titanium_ingot',
    },
    {
      to_replace: 'charcoal_pit:straw',
      replace_with: 'farmersdelight:straw',
    },
    {
      target: {input: 'farmersdelight:cooked_bacon'},
      to_replace: 'farmersdelight:cooked_bacon',
      replace_with: 'butchercraft:cooked_bacon',
    },
    {
      target: {output: 'cold_sweat:boiler'},
      to_replace: 'minecraft:bucket',
      replace_with: 'minecraft:campfire',
    },
    {
      target: {output: 'cold_sweat:icebox'},
      to_replace: 'minecraft:bucket',
      replace_with: 'minecraft:packed_ice',
    },
    {
      target: {output: 'constructionwand:diamond_wand'},
      to_replace: 'minecraft:diamond',
      replace_with: 'minecraft:gold_ingot',
    },
    {
      target: {
        output: ['waystones:warp_scroll', 'waystones:bound_scroll'],
      },
      to_replace: 'minecraft:ender_pearl',
      replace_with: 'waystones:warp_dust',
    },
    {
      target: {output: 'constructionwand:core_destruction'},
      to_replace: 'minecraft:diamond_pickaxe',
      replace_with: 'minecraft:netherite_pickaxe',
    },
    {
      target: {output: 'constructionwand:core_destruction'},
      to_replace: 'minecraft:diamond_block',
      replace_with: 'minecraft:gold_block',
    },
    {
      target: {output: 'salt:salt_lamp'},
      to_replace: 'salt:raw_rock_salt_block',
      replace_with: 'salt:salt_block',
    },
    {
      target: {
        output: [
          'tconstruct:seared_faucet',
          'tconstruct:seared_basin',
          'tconstruct:seared_heater',
          'tconstruct:cast_chest',
          'tconstruct:seared_fuel_gauge',
          'tconstruct:flint_and_brick',
          'tconstruct:seared_table',
          'tconstruct:seared_lantern',
          'tconstruct:seared_channel',
          'tconstruct:seared_drain',
          'tconstruct:seared_fuel_tank',
          'tconstruct:seared_glass',
          'tconstruct:seared_ingot_tank',
          'tconstruct:seared_chute',
          'tconstruct:seared_ingot_gauge',
          'tconstruct:seared_duct',
        ],
      },
      to_replace: 'tconstruct:seared_brick',
      replace_with: 'tconstruct:seared_bricks',
    },
    {
      target: {output: 'charcoal_pit:bloomeryy'},
      to_replace: 'minecraft:bricks',
      replace_with: 'rankine:refractory_brick',
    },
    {
      target: {output: 'bloodmagic:blankrune'},
      to_replace: '#forge:stone',
      replace_with: 'rankine:slate',
    },
    {
      target: {output: 'minecraft:bone_block'},
      to_replace: 'minecraft:bone_meal',
      replace_with: 'minecraft:bone',
    },
    {to_replace: 'rankine:rope', replace_with: 'farmersdelight:rope'},
    {
      target: {output: 'hexerei:herb_drying_rack'},
      to_replace: 'minecraft:string',
      replace_with: 'farmersdelight:rope',
    },
    {
      target: {output: 'charcoal_pit:bloomeryy'},
      to_replace: 'minecraft:smooth_stone',
      replace_with: 'rankine:bronze_ingot',
    },
    {
      target: {output: 'botania:natura_pylon'},
      to_replace: 'minecraft:ender_eye',
      replace_with: 'botania:rune_envy',
    },
    {
      target: {output: 'framedblocks:framed_torch'},
      to_replace: 'rankine:coke',
      replace_with: 'realistictorches:glowstone_crystal',
    },
    {
      target: {output: 'framedblocks:framed_soul_torch'},
      to_replace: 'rankine:coke',
      replace_with: 'realistictorches:glowstone_crystal',
    },
    {
      target: {input: 'farmersdelight:wheat_dough'},
      to_replace: 'farmersdelight:wheat_dough',
      replace_with: 'create:dough',
    },
    {
      target: {output: 'rankine:sodium_arc_tube'},
      to_replace: 'rankine:xenon_nugget',
      replace_with: 'rankine:cobalt_nugget',
    },
    {
      target: {output: 'rankine:sodium_arc_tube'},
      to_replace: 'rankine:sodium_ingot',
      replace_with: 'rankine:pink_salt',
    },
    {
      target: {output: 'rankine:glass_cutter'},
      to_replace: 'rankine:alloy_rod',
      replace_with: 'rankine:black_gold_ingot',
    },
    {
      target: {output: 'architects_palette:nether_brass_blend'},
      to_replace: 'minecraft:iron_nugget',
      replace_with: 'rankine:brass_nugget',
    },
    {
      target: {
        output: [
          'bloodmagic:masterritualstone',
          'bloodmagic:ritualstone',
          'waystones:waystone',
          'bloodmagic:bettercapacityrune',
        ],
      },
      to_replace: '#forge:obsidian',
      replace_with: 'rankine:blood_obsidian',
    },
    {
      target: {
        output: 'pneumaticcraft:drill_bit_diamond',
      },
      to_replace: '#forge:storage_blocks/diamond',
      replace_with: 'rankine:titanium_alloy_block',
    },
    {
      target: {
        output: 'rankine:ore_detector',
      },
      to_replace: 'rankine:indium_tin_oxide',
      replace_with: 'rankine:silicon_carbide',
    },
    {
      target: {output: 'bloodmagic:orbcapacityrune'},
      to_replace: '#forge:stone',
      replace_with: 'rankine:blood_obsidian',
    },
    {
      target: {output: 'charcoal_pit:dynamite_remote'},
      to_replace: 'minecraft:ender_pearl',
      replace_with: 'minecraft:gunpowder',
    },
    {
      target: {output: 'minecraft:comparator'},
      to_replace: 'minecraft:quartz',
      replace_with: 'undergarden:regalium_crystal',
    },
    {
      target: {output: 'rankine:flood_gate'},
      to_replace: '#forge:ingots/aluminum',
      replace_with: 'minecraft:iron_ingot',
    },
    {
      target: {output: 'rankine:beehive_oven_pit'},
      to_replace: '#forge:storage_blocks/coal',
      replace_with: 'charcoal_pit:charcoal_block',
    },
    {
      target: {output: 'occultism:dictionary_of_spirits'},
      to_replace: 'minecraft:book',
      replace_with: 'farmersdelight:canvas',
    },
    {
      target: {output: 'occultism:golden_sacrificial_bowl'},
      to_replace: 'minecraft:gold_ingot',
      replace_with: 'blue_skies:ventium_ingot',
    },
    {
      target: {
        output: ['tconstruct:cast_chest', 'tconstruct:part_chest'],
      },
      to_replace: '#forge:chests',
      replace_with: 'paragon_textiles:basket_sturdy',
    },
    {
      target: {output: 'farmersdelight:stove'},
      to_replace: 'minecraft:iron_ingot',
      replace_with: 'rankine:pewter_ingot',
    },
    {
      target: {output: 'hexerei:book_of_shadows'},
      to_replace: '#forge:dyes',
      replace_with: 'minecraft:red_dye',
    },
    {
      target: {output: 'farmersdelight:skillet'},
      to_replace: 'minecraft:iron_ingot',
      replace_with: 'rankine:pewter_ingot',
    },
    {
      target: {output: 'occultism:brush'},
      to_replace: '#minecraft:wool',
      replace_with: 'rankine:gun_cotton',
    },
    {
      target: {output: 'bloodmagic:lavacrystal'},
      to_replace: 'minecraft:diamond',
      replace_with: 'occultism:afrit_essence',
    },
    {
      target: {
        output: ['malum:gilded_ring', 'malum:gilded_belt', 'malum:spirit_jar'],
      },
      to_replace: 'malum:hallowed_gold_ingot',
      replace_with: 'blue_skies:horizonite_ingot',
    },
    {
      target: {
        output: 'malum:weavers_workbench',
      },
      to_replace: 'minecraft:gold_ingot',
      replace_with: 'blue_skies:horizonite_ingot',
    },
    {
      target: {output: ['malum:stained_spirit_resonator']},
      to_replace: 'minecraft:quartz',
      replace_with: 'undergarden:regalium_crystal',
    },
    {
      target: {
        output: [
          'totemic:flute',
          'totemic:jingle_dress',
          'totemic:totemic_staff',
        ],
      },
      to_replace: '#minecraft:leaves',
      replace_with: 'blue_skies:winter_leaves',
    },
    {
      target: {output: 'occultism:book_of_binding_afrit'},
      to_replace: 'minecraft:purple_dye',
      replace_with: 'minecraft:orange_dye',
    },
    {
      target: {output: 'occultism:butcher_knife'},
      to_replace: 'minecraft:iron_ingot',
      replace_with: 'rankine:pewter_ingot',
    },
    {
      target: {input: 'paragon_textiles:wood_stain'},
      to_replace: 'minecraft:pink_dye',
      replace_with: 'minecraft:red_dye',
    },
    {
      target: {
        output: [
          'naturesaura:infused_iron_sword',
          'naturesaura:infused_iron_hoe',
          'naturesaura:infused_iron_shovel',
          'naturesaura:infused_iron_axe',
          'naturesaura:infused_iron_pickaxe',
        ],
      },
      to_replace: 'naturesaura:ancient_stick',
      replace_with: '#forge:rods/wooden',
    },
    {
      target: {
        output: 'farmersdelight:roast_chicken_block',
      },
      to_replace: 'minecraft:bread',
      replace_with: '#forge:flour',
    },
    {
      target: {
        output: 'blue_skies:bag_of_spoils',
      },
      to_replace: 'farmersdelight:rope',
      replace_with: 'minecraft:string',
    },
    {
      target: {
        output: ['bloodmagic:speedrune'],
      },
      to_replace: '#forge:stone',
      replace_with: 'rankine:gray_marble',
    },
    {
      target: {
        output: ['bloodmagic:incensealtar'],
      },
      to_replace: '#forge:stone',
      replace_with: 'rankine:shale',
    },
    {
      target: {
        output: 'bloodmagic:sacrificialdagger',
      },
      to_replace: 'minecraft:gold_ingot',
      replace_with: 'hexerei:blood_bottle',
    },
    {
      target: {
        output: 'bloodmagic:sacrificialdagger',
      },
      to_replace: 'minecraft:iron_ingot',
      replace_with: 'naturesaura:infused_iron',
    },
    {
      target: {
        output: ['bloodmagic:altarcapacityrune'],
      },
      to_replace: '#forge:stone',
      replace_with: 'rankine:black_marble',
    },
    {
      target: {
        output: ['bloodmagic:dislocationrune', 'bloodmagic:accelerationrune'],
      },
      to_replace: '#forge:stone',
      replace_with: 'rankine:rose_marble',
    },
    {
      target: {
        output: 'productivebees:bottler',
      },
      to_replace: '#forge:glass',
      replace_with: 'the_bumblezone:honey_crystal_shards',
    },
    {
      target: {
        output: 'productivebees:centrifuge',
      },
      to_replace: 'minecraft:grindstone',
      replace_with: 'the_bumblezone:honey_crystal_shards',
    },
    {
      target: {
        output: 'productivebees:catcher',
      },
      to_replace: 'minecraft:dirt',
      replace_with: 'the_bumblezone:honey_crystal_shards',
    },
    {
      target: {
        output: 'productivebees:incubator',
      },
      to_replace: 'minecraft:hay_block',
      replace_with: 'the_bumblezone:honey_crystal_shards',
    },
    {
      target: {
        output: 'productivebees:gene_indexer',
      },
      to_replace: '#forge:workbenches',
      replace_with: 'the_bumblezone:honey_crystal_shards',
    },
    {
      target: {
        output: 'sliceanddice:sprinkler',
      },
      to_replace: '#forge:plates/copper',
      replace_with: 'naturesaura:sky_ingot',
    },
    {
      target: {output: 'minecraft:piston'},
      to_replace: 'minecraft:iron_ingot',
      replace_with: 'create:andesite_alloy',
    },
  ];

  overworldWoods.forEach(wood => {
    config.push({
      target: {output: `smallships:${wood}_brigg`},
      to_replace: `minecraft:${wood}_boat`,
      replace_with: `smallships:${wood}_cog`,
    });
  });

  new recipes(event).replaceInput(config);
});
