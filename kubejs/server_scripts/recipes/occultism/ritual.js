onEvent('server.datapack.high_priority', event => {
  event.addJson(`occultism:recipes/ritual/possess_enderman.json`, {
    type: 'forge:conditional',
    recipes: [
      {
        conditions: [
          {
            type: 'forge:false',
          },
        ],
      },
    ],
  });

  event.addJson(`occultism:recipes/ritual/craft_infused_pickaxe.json`, {});
});

onEvent('recipes', event => {
  new recipes(event)
    .setType('occultism:ritual')
    .setFunction(config =>
      event.custom({
        type: 'occultism:ritual',
        ritual_type: config.ritual_type,
        activation_item: config.activation_item,
        pentacle_id: config.pentacle_id,
        duration: 60,
        ritual_dummy: config.ritual_dummy || {
          item: 'occultism:ritual_dummy/custom_ritual',
        },
        ingredients: config.inputs,
        result: config.output,
      })
    )
    .modifyOutputs([
      {
        ritual_type: 'occultism:summon_tamed',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:parrots',
          display_name: 'ritual.occultism.sacrifice.parrots',
        },
        entity_to_summon: 'occultism:otherworld_bird',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_otherworld_bird',
        },
        inputs: [
          {
            tag: 'forge:feathers',
          },
          {
            tag: 'forge:feathers',
          },
          {
            item: 'minecraft:cobweb',
          },
          {
            tag: 'minecraft:leaves',
          },
          {
            tag: 'forge:string',
          },
          {
            item: 'create:sturdy_sheet',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:craft',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:craft_foliot',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_infused_lenses',
        },
        inputs: [
          {
            item: 'occultism:lenses',
          },
          {
            tag: 'forge:ingots/silver',
          },
          {
            tag: 'forge:ingots/silver',
          },
          {
            item: 'naturesaura:infused_iron',
          },
        ],
        output: {
          item: 'occultism:infused_lenses',
        },
      },
      {
        ritual_type: 'occultism:craft_with_spirit_name',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:craft_foliot',
        duration: 240,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_satchel',
        },
        inputs: [
          {
            item: 'ecofriendly:recycled_carrier_bag_ym',
          },
          {
            tag: 'forge:leather',
          },
          {
            tag: 'forge:leather',
          },
          {
            tag: 'forge:string',
          },
          {
            tag: 'forge:ingots/silver',
          },
          {
            item: 'create:powdered_obsidian',
          },
          {
            item: 'create:powdered_obsidian',
          },
        ],
        output: {
          item: 'occultism:satchel',
        },
      },
      {
        ritual_type: 'occultism:summon_with_chance_of_chicken_tamed',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:chicken',
          display_name: 'ritual.occultism.sacrifice.chicken',
        },
        entity_to_summon: 'minecraft:parrot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_parrot',
        },
        inputs: [
          {
            tag: 'forge:feathers',
          },
          {
            tag: 'forge:dyes/green',
          },
          {
            tag: 'forge:dyes/yellow',
          },
          {
            tag: 'forge:dyes/red',
          },
          {
            tag: 'forge:dyes/blue',
          },
          {
            tag: 'forge:string',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon',
        activation_item: {
          type: 'forge:nbt',
          item: 'naturesaura:aura_bottle',
          count: 1,
          nbt: '{stored_type:"naturesaura:overworld"}',
        },
        duration: 30,
        pentacle_id: 'occultism:possess_foliot',
        entity_to_summon: 'occultism:possessed_endermite',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/possess_endermite',
        },
        inputs: [
          {
            item: 'minecraft:dirt',
          },
          {
            item: 'minecraft:stone',
          },
          {
            item: 'minecraft:dirt',
          },
          {
            item: 'minecraft:stone',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_summon: 'occultism:possessed_skeleton',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/possess_skeleton',
        },
        inputs: [
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:bones',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:summon_djinni',
        duration: 60,
        spirit_max_age: 60,
        spirit_job_type: 'occultism:clear_weather',
        entity_to_summon: 'occultism:djinni',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_djinni_clear_weather',
        },
        inputs: [
          {
            tag: 'forge:crops/beetroot',
          },
          {
            tag: 'forge:crops/carrot',
          },
          {
            tag: 'forge:crops/potato',
          },
          {
            item: 'kubejs:wheat',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:summon_djinni',
        duration: 90,
        spirit_max_age: -1,
        spirit_job_type: 'occultism:crush_tier2',
        entity_to_summon: 'occultism:djinni',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_djinni_crusher',
        },
        inputs: [
          {
            item: 'undergarden:cloggrum_ingot',
          },
          {
            item: 'undergarden:regalium_crystal',
          },
          {
            item: 'undergarden:utherium_crystal',
          },
          {
            item: 'undergarden:froststeel_ingot',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:summon_djinni',
        duration: 60,
        spirit_max_age: 60,
        spirit_job_type: 'occultism:day_time',
        entity_to_summon: 'occultism:djinni',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_djinni_day_time',
        },
        inputs: [
          {
            item: 'minecraft:blaze_powder',
          },
          {
            tag: 'minecraft:saplings',
          },
          {
            item: 'kubejs:wheat',
          },
          {
            tag: 'forge:dyes/yellow',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:summon_djinni',
        duration: 60,
        spirit_max_age: 60,
        spirit_job_type: 'occultism:night_time',
        entity_to_summon: 'occultism:djinni',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_djinni_night_time',
        },
        inputs: [
          {
            tag: 'minecraft:beds',
          },
          {
            item: 'minecraft:rotten_flesh',
          },
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:dyes/black',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:summon_foliot',
        duration: 60,
        spirit_max_age: 32400,
        spirit_job_type: 'occultism:crush_tier1',
        entity_to_summon: 'occultism:foliot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_foliot_crusher',
        },
        inputs: [
          {
            item: 'rankine:graphite',
          },
          {
            tag: 'forge:raw_materials/lead',
          },
          {
            tag: 'forge:raw_materials/copper',
          },
          {
            tag: 'forge:raw_materials/silver',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:summon_foliot',
        duration: 60,
        spirit_max_age: -1,
        spirit_job_type: 'occultism:lumberjack',
        entity_to_summon: 'occultism:foliot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_foliot_lumberjack',
        },
        inputs: [
          {
            tag: 'occultism:saplings/otherworld',
          },
          {
            item: 'minecraft:oak_sapling',
          },
          {
            item: 'minecraft:birch_sapling',
          },
          {
            item: 'minecraft:spruce_sapling',
          },
          {
            tag: 'forge:tools/metal/axes',
          },
        ],
        output: {
          item: 'occultism:book_of_calling_foliot_lumberjack',
        },
      },
      {
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:summon_foliot',
        duration: 30,
        spirit_max_age: 3600,
        spirit_job_type: 'occultism:trade_otherstone_t1',
        entity_to_summon: 'occultism:foliot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_foliot_otherstone_trader',
        },
        inputs: [
          {
            item: 'minecraft:stone',
          },
          {
            item: 'minecraft:granite',
          },
          {
            item: 'minecraft:diorite',
          },
          {
            item: 'minecraft:andesite',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:summon_foliot',
        duration: 30,
        spirit_max_age: 3600,
        spirit_job_type: 'occultism:trade_otherworld_saplings_t1',
        entity_to_summon: 'occultism:foliot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_foliot_sapling_trader',
        },
        inputs: [
          {
            item: 'minecraft:oak_sapling',
          },
          {
            item: 'minecraft:birch_sapling',
          },
          {
            item: 'minecraft:spruce_sapling',
          },
          {
            item: 'minecraft:jungle_sapling',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_afrit',
        },
        pentacle_id: 'occultism:summon_wild_afrit',
        duration: 60,
        entity_to_summon: 'occultism:afrit_wild',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_wild_afrit',
        },
        inputs: [
          {
            item: 'blue_skies:horizonite_ingot',
          },
          {
            item: 'bloodmagic:infusedslate',
          },
          {
            item: 'blue_skies:dusk_arc',
          },
          {
            item: 'extendedcrafting:black_iron_block',
          },
          {
            type: 'forge:nbt',
            item: 'naturesaura:aura_bottle',
            count: 1,
            nbt: '{stored_type:"naturesaura:nether"}',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon_wild_hunt',
        activation_item: {
          item: 'minecraft:skeleton_skull',
        },
        pentacle_id: 'occultism:summon_wild_greater_spirit',
        duration: 30,
        entity_to_summon: 'occultism:wild_hunt_wither_skeleton',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_wild_hunt',
        },
        inputs: [
          {
            tag: 'forge:storage_blocks/copper',
          },
          {
            tag: 'forge:storage_blocks/silver',
          },
          {
            tag: 'forge:storage_blocks/lead',
          },
          {
            tag: 'forge:storage_blocks/tin',
          },
          {
            item: 'naturesaura:infused_iron_block',
          },
          {
            type: 'forge:nbt',
            item: 'naturesaura:aura_bottle',
            count: 1,
            nbt: '{stored_type:"naturesaura:overworld"}',
          },
          {
            item: 'hexerei:blood_bottle',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:parrots',
          display_name: 'ritual.occultism.sacrifice.parrots',
        },
        entity_to_summon: 'occultism:otherworld_bird',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_wild_otherworld_bird',
        },
        inputs: [
          {
            tag: 'forge:feathers',
          },
          {
            tag: 'forge:feathers',
          },
          {
            item: 'minecraft:cobweb',
          },
          {
            tag: 'minecraft:leaves',
          },
          {
            tag: 'forge:eggs',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:chicken',
          display_name: 'ritual.occultism.sacrifice.chicken',
        },
        entity_to_summon: 'minecraft:parrot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_wild_parrot',
        },
        inputs: [
          {
            tag: 'forge:feathers',
          },
          {
            tag: 'forge:dyes/green',
          },
          {
            tag: 'forge:dyes/yellow',
          },
          {
            tag: 'forge:dyes/red',
          },
          {
            tag: 'forge:dyes/blue',
          },
          {
            tag: 'forge:eggs',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
    ])
    .modifyOutputs([
      {
        global: true,
        ritual_type: 'occultism:craft',
        activation_item: {
          item: 'occultism:book_of_binding_bound_marid',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 30,
        inputs: [
          {
            item: 'tconstruct:manyullyn_ingot',
          },
          {
            item: 'tconstruct:manyullyn_ingot',
          },
          {
            item: 'tconstruct:manyullyn_ingot',
          },
          {
            item: 'tconstruct:manyullyn_ingot',
          },
          {
            item: 'waystones:warp_dust',
          },
          {
            item: 'waystones:warp_dust',
          },
          {
            item: 'waystones:warp_dust',
          },
          {
            item: 'waystones:warp_dust',
          },
          {
            item: 'create:chromatic_compound',
          },
          {
            item: 'create:chromatic_compound',
          },
        ],
        output: {
          item: 'waystones:warp_stone',
        },
      },
      {
        global: true,
        ritual_type: 'occultism:craft',
        activation_item: {item: 'create:sturdy_sheet'},
        pentacle_id: 'occultism:craft_marid',
        inputs: [
          {
            item: 'bloodmagic:airscribetool',
          },
          {
            item: 'bloodmagic:waterscribetool',
          },
          {
            item: 'bloodmagic:firescribetool',
          },
          {
            item: 'bloodmagic:earthscribetool',
          },
        ],
        output: {
          item: 'bloodmagic:ritualdiviner',
        },
      },
      {
        activation_item: {item: 'rankine:blood_obsidian'},
        pentacle_id: 'occultism:craft_marid',
        ritual_type: 'occultism:craft',
        inputs: [
          {
            item: 'malum:twisted_rock',
          },
          {
            item: 'malum:twisted_rock',
          },
          {
            item: 'malum:twisted_rock',
          },
          {
            item: 'malum:twisted_rock',
          },
        ],
        output: {
          item: 'blue_skies:lunar_stone',
          count: 4,
        },
      },
      {
        activation_item: {item: 'minecraft:amethyst_shard'},
        pentacle_id: 'occultism:craft_marid',
        ritual_type: 'occultism:craft',
        inputs: [
          {
            item: 'minecraft:enchanted_book',
          },
          {
            item: 'minecraft:enchanted_book',
          },
          {
            item: 'minecraft:enchanted_book',
          },
          {
            item: 'minecraft:enchanted_book',
          },
          {
            item: 'minecraft:enchanted_book',
          },
          {
            item: 'minecraft:enchanted_book',
          },
          {
            item: 'minecraft:enchanted_book',
          },
          {
            item: 'minecraft:enchanted_book',
          },
          {
            item: 'charcoal_pit:prismarine_dust',
          },
          {
            item: 'charcoal_pit:prismarine_dust',
          },
        ],
        output: {
          item: 'charcoal_pit:xp_crystal',
        },
      },
      // {
      //   activation_item: {item: 'twilightforest:maze_map_focus'},
      //   pentacle_id: 'occultism:craft_marid',
      //   ritual_type: 'occultism:craft',
      //   inputs: [
      //     {
      //       item: 'minecraft:wither_skeleton_skull',
      //     },
      //     {
      //       item: 'minecraft:wither_skeleton_skull',
      //     },
      //     {
      //       item: 'minecraft:wither_skeleton_skull',
      //     },
      //     {
      //       item: 'minecraft:wither_skeleton_skull',
      //     },
      //     {
      //       item: 'twilightforest:carminite',
      //     },
      //     {
      //       item: 'twilightforest:carminite',
      //     },
      //     {
      //       item: 'minecraft:crafting_table',
      //     },
      //     {
      //       item: 'minecraft:crafting_table',
      //     },
      //     {
      //       item: 'minecraft:crafting_table',
      //     },
      //     {
      //       item: 'minecraft:crafting_table',
      //     },
      //     {
      //       item: 'twilightforest:transformation_powder',
      //     },
      //     {
      //       item: 'twilightforest:transformation_powder',
      //     },
      //   ],
      //   output: {
      //     item: 'twilightforest:uncrafting_table',
      //   },
      // },
      {
        global: true,
        activation_item: {item: 'occultism:afrit_essence'},
        pentacle_id: 'occultism:craft_marid',
        ritual_type: 'occultism:craft',
        inputs: [
          {
            item: 'twilightforest:ironwood_block',
          },
          {
            item: 'twilightforest:ironwood_block',
          },
          {
            item: 'twilightforest:ironwood_block',
          },
          {
            item: 'extendedcrafting:basic_component',
          },
          {
            item: 'extendedcrafting:basic_component',
          },
          {
            item: 'extendedcrafting:basic_component',
          },
          {
            item: 'extendedcrafting:basic_component',
          },
          {
            item: 'extendedcrafting:black_iron_slate',
          },
          {
            item: 'extendedcrafting:black_iron_slate',
          },
          {
            item: 'extendedcrafting:basic_catalyst',
          },
        ],
        output: {
          item: 'extendedcrafting:basic_table',
        },
      },
    ])
    .modifyOutputs([
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft_with_spirit_name',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:craft_djinni',
        duration: 240,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_dimensional_matrix',
        },
        inputs: [
          {
            item: 'occultism:iesnium_block',
          },
          {
            tag: 'forge:storage_blocks/quartz',
          },
          {
            tag: 'forge:storage_blocks/quartz',
          },
          {
            item: 'create:chromatic_compound',
          },
        ],
        output: {
          item: 'occultism:dimensional_matrix',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft_with_spirit_name',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:summon_marid',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_infused_pickaxe',
        },
        inputs: [
          {
            tag: 'forge:rods/wooden',
          },
          {
            tag: 'forge:rods/wooden',
          },
          {
            item: 'occultism:spirit_attuned_pickaxe_head',
          },
          {
            item: 'minecraft:netherite_ingot',
          },
          {
            item: 'minecraft:gold_ingot',
          },
        ],
        output: {
          item: 'occultism:infused_pickaxe',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:craft_djinni',
        duration: 60,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_soul_gem',
        },
        inputs: [
          {
            item: 'create:chromatic_compound',
          },
          {
            tag: 'forge:ingots/copper',
          },
          {
            tag: 'forge:ingots/silver',
          },
          {
            tag: 'forge:ingots/gold',
          },
          {
            tag: 'forge:ingots/iesnium',
          },
          {
            item: 'minecraft:soul_sand',
          },
          {
            item: 'minecraft:soul_sand',
          },
          {
            item: 'minecraft:soul_sand',
          },
          {
            item: 'minecraft:soul_sand',
          },
        ],
        output: {
          item: 'occultism:soul_gem',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:craft_foliot',
        duration: 120,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_stabilizer_tier1',
        },
        inputs: [
          {
            item: 'occultism:otherstone_pedestal',
          },
          {
            item: 'tconstruct:pig_iron_block',
          },
          {
            item: 'occultism:iesnium_block',
          },
          {
            item: 'minecraft:blaze_powder',
          },
          {
            item: 'occultism:spirit_attuned_gem',
          },
        ],
        output: {
          item: 'occultism:storage_stabilizer_tier1',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:craft_djinni',
        duration: 240,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_stabilizer_tier2',
        },
        inputs: [
          {
            item: 'occultism:storage_stabilizer_tier1',
          },
          {
            item: 'cataclysm:ignitium_block',
          },
          {
            item: 'occultism:iesnium_block',
          },
          {
            item: 'occultism:iesnium_block',
          },
          {
            item: 'minecraft:ghast_tear',
          },
          {
            item: 'rankine:vulcanized_rubber',
          },
          {
            item: 'occultism:spirit_attuned_gem',
          },
        ],
        output: {
          item: 'occultism:storage_stabilizer_tier2',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: {
          item: 'occultism:book_of_binding_bound_afrit',
        },
        pentacle_id: 'occultism:craft_afrit',
        duration: 240,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_stabilizer_tier3',
        },
        inputs: [
          {
            item: 'occultism:storage_stabilizer_tier2',
          },
          {
            item: 'cataclysm:witherite_block',
          },
          {
            item: 'occultism:iesnium_block',
          },
          {
            item: 'occultism:iesnium_block',
          },
          {
            item: 'occultism:iesnium_block',
          },
          {
            item: 'minecraft:nether_star',
          },
          {
            item: 'minecraft:gunpowder',
          },
          {
            item: 'create:chromatic_compound',
          },
        ],
        output: {
          item: 'occultism:storage_stabilizer_tier3',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: {
          item: 'occultism:book_of_binding_bound_marid',
        },
        pentacle_id: 'occultism:craft_marid',
        duration: 240,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_stabilizer_tier4',
        },
        inputs: [
          {
            item: 'occultism:storage_stabilizer_tier3',
          },
          {
            item: 'occultism:iesnium_block',
          },
          {
            item: 'occultism:iesnium_block',
          },
          {
            item: 'occultism:iesnium_block',
          },
          {
            item: 'occultism:iesnium_block',
          },
          {
            item: 'rankine:carbon_block',
          },
          {
            item: 'create:refined_radiance',
          },
          {
            item: 'create:shadow_steel',
          },
          {
            item: 'bloodmagic:demonslate',
          },
        ],
        output: {
          item: 'occultism:storage_stabilizer_tier4',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:craft_foliot',
        duration: 120,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_stable_wormhole',
        },
        inputs: [
          {
            item: 'occultism:wormhole_frame',
          },
          {
            item: 'create:chromatic_compound',
          },
          {
            tag: 'forge:gems/quartz',
          },
          {
            tag: 'forge:gems/quartz',
          },
        ],
        output: {
          item: 'occultism:stable_wormhole',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:craft',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:craft_djinni',
        duration: 120,
        ritual_dummy: {
          item: 'occultism:ritual_dummy/craft_storage_remote',
        },
        inputs: [
          {
            item: 'occultism:storage_remote_inert',
          },
          {
            item: 'create:chromatic_compound',
          },
          {
            item: 'create:chromatic_compound',
          },
          {
            tag: 'forge:gems/quartz',
          },
        ],
        output: {
          item: 'occultism:storage_remote',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 60,
        entity_to_sacrifice: {
          tag: 'forge:bats',
          display_name: 'ritual.occultism.sacrifice.bats',
        },
        entity_to_summon: 'occultism:bat_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_bat',
        },
        inputs: [
          {
            item: 'minecraft:golden_carrot',
          },
          {
            item: 'minecraft:spider_eye',
          },
          {
            item: 'minecraft:glowstone',
          },
          {
            item: 'rankine:sulfur',
          },
          {
            item: 'minecraft:lava_bucket',
          },
          {
            item: 'minecraft:torch',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_summon: 'occultism:beaver_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_beaver',
        },
        inputs: [
          {
            tag: 'minecraft:saplings',
          },
          {
            tag: 'minecraft:saplings',
          },
          {
            tag: 'minecraft:saplings',
          },
          {
            tag: 'minecraft:saplings',
          },
          {
            item: 'minecraft:crimson_fungus',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:spiders',
          display_name: 'ritual.occultism.sacrifice.spiders',
        },
        entity_to_summon: 'occultism:beholder_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_beholder',
        },
        inputs: [
          {
            item: 'minecraft:spider_eye',
          },
          {
            item: 'minecraft:spider_eye',
          },
          {
            item: 'minecraft:spider_eye',
          },
          {
            item: 'minecraft:spider_eye',
          },
          {
            tag: 'forge:dusts/glowstone',
          },
          {
            tag: 'forge:dusts/glowstone',
          },
          {
            tag: 'forge:dusts/glowstone',
          },
          {
            tag: 'forge:dusts/glowstone',
          },
          {
            item: 'rankine:sulfur',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:zombies',
          display_name: 'ritual.occultism.sacrifice.zombies',
        },
        entity_to_summon: 'occultism:blacksmith_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_blacksmith',
        },
        inputs: [
          {
            item: 'minecraft:golden_shovel',
          },
          {
            item: 'minecraft:golden_pickaxe',
          },
          {
            item: 'minecraft:golden_axe',
          },
          {
            item: 'minecraft:anvil',
          },
          {
            tag: 'forge:stone',
          },
          {
            tag: 'forge:stone',
          },
          {
            tag: 'forge:stone',
          },
          {
            tag: 'forge:stone',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 60,
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs',
        },
        entity_to_summon: 'occultism:chimera_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_chimera',
        },
        inputs: [
          {
            tag: 'forge:leather',
          },
          {
            tag: 'forge:string',
          },
          {
            tag: 'forge:feathers',
          },
          {
            tag: 'forge:bones',
          },
          {
            item: 'farmersdelight:ham',
          },
          {
            item: 'minecraft:porkchop',
          },
          {
            item: 'minecraft:chicken',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 60,
        entity_to_sacrifice: {
          tag: 'forge:squid',
          display_name: 'ritual.occultism.sacrifice.squid',
        },
        entity_to_summon: 'occultism:cthulhu_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_cthulhu',
        },
        inputs: [
          {
            tag: 'minecraft:fishes',
          },
          {
            tag: 'minecraft:fishes',
          },
          {
            tag: 'minecraft:fishes',
          },
          {
            tag: 'minecraft:fishes',
          },
          {
            tag: 'minecraft:fishes',
          },
          {
            tag: 'minecraft:fishes',
          },
          {
            tag: 'minecraft:fishes',
          },
          {
            item: 'farmersrespite:purulent_tea',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 15,
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs',
        },
        entity_to_summon: 'occultism:deer_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_deer',
        },
        inputs: [
          {
            tag: 'forge:rods/wooden',
          },
          {
            tag: 'forge:rods/wooden',
          },
          {
            tag: 'forge:rods/wooden',
          },
          {
            tag: 'forge:rods/wooden',
          },
          {
            tag: 'forge:string',
          },
          {
            tag: 'forge:string',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 60,
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs',
        },
        entity_to_summon: 'occultism:devil_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_devil',
        },
        inputs: [
          {
            item: 'minecraft:lava_bucket',
          },
          {
            item: 'minecraft:lava_bucket',
          },
          {
            item: 'minecraft:lava_bucket',
          },
          {
            item: 'minecraft:lava_bucket',
          },
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:bones',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 60,
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs',
        },
        entity_to_summon: 'occultism:dragon_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_dragon',
        },
        inputs: [
          {
            item: 'minecraft:lava_bucket',
          },
          {
            item: 'minecraft:flint_and_steel',
          },
          {
            tag: 'forge:storage_blocks/coal',
          },
          {
            tag: 'forge:storage_blocks/quartz',
          },
          {
            tag: 'forge:storage_blocks/gold',
          },
          {
            tag: 'forge:gunpowder',
          },
          {
            tag: 'forge:obsidian',
          },
          {
            tag: 'forge:obsidian',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs',
        },
        entity_to_summon: 'occultism:fairy_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_fairy',
        },
        inputs: [
          {
            item: 'minecraft:golden_apple',
          },
          {
            item: 'minecraft:golden_apple',
          },
          {
            item: 'minecraft:ghast_tear',
          },
          {
            item: 'minecraft:gunpowder',
          },
          {
            item: 'minecraft:gunpowder',
          },
          {
            item: 'minecraft:gunpowder',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:zombies',
          display_name: 'ritual.occultism.sacrifice.zombies',
        },
        entity_to_summon: 'occultism:greedy_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_greedy',
        },
        inputs: [
          {
            tag: 'forge:chests',
          },
          {
            tag: 'forge:storage_blocks/gold',
          },
          {
            item: 'minecraft:dispenser',
          },
          {
            item: 'minecraft:hopper',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_afrit',
        },
        pentacle_id: 'occultism:possess_afrit',
        duration: 60,
        entity_to_sacrifice: {
          tag: 'occultism:humans',
          display_name: 'ritual.occultism.sacrifice.humans',
        },
        entity_to_summon: 'occultism:guardian_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_guardian',
        },
        inputs: [
          {
            item: 'create:chromatic_compound',
          },
          {
            item: 'create:chromatic_compound',
          },
          {
            item: 'create:chromatic_compound',
          },
          {
            item: 'create:chromatic_compound',
          },
          {
            item: 'minecraft:golden_apple',
          },
          {
            item: 'minecraft:golden_apple',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 60,
        entity_to_sacrifice: {
          tag: 'forge:golems/snow',
          display_name: 'ritual.occultism.sacrifice.snow_golem',
        },
        entity_to_summon: 'occultism:headless_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_headless',
        },
        inputs: [
          {
            item: 'kubejs:wheat',
          },
          {
            item: 'kubejs:wheat',
          },
          {
            item: 'minecraft:hay_block',
          },
          {
            tag: 'forge:rods/wooden',
          },
          {
            tag: 'forge:rods/wooden',
          },
          {
            item: 'minecraft:carved_pumpkin',
          },
          {
            item: 'minecraft:warped_fungus',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:familiar',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs',
        },
        entity_to_summon: 'occultism:mummy_familiar',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_mummy',
        },
        inputs: [
          {
            tag: 'forge:slimeballs',
          },
          {
            tag: 'forge:slimeballs',
          },
          {
            item: 'minecraft:paper',
          },
          {
            item: 'minecraft:paper',
          },
          {
            item: 'rankine:gun_cotton',
          },
          {
            item: 'rankine:gun_cotton',
          },
          {
            item: 'rankine:gun_cotton',
          },
          {
            item: 'rankine:gun_cotton',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_tamed',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:parrots',
          display_name: 'ritual.occultism.sacrifice.parrots',
        },
        entity_to_summon: 'occultism:otherworld_bird',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_otherworld_bird',
        },
        inputs: [
          {
            tag: 'forge:feathers',
          },
          {
            tag: 'forge:feathers',
          },
          {
            item: 'minecraft:cobweb',
          },
          {
            tag: 'minecraft:leaves',
          },
          {
            tag: 'forge:string',
          },
          {
            item: 'minecraft:quartz',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_with_chance_of_chicken_tamed',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:chicken',
          display_name: 'ritual.occultism.sacrifice.chicken',
        },
        entity_to_summon: 'minecraft:parrot',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/familiar_parrot',
        },
        inputs: [
          {
            tag: 'forge:feathers',
          },
          {
            tag: 'forge:dyes/green',
          },
          {
            tag: 'forge:dyes/yellow',
          },
          {
            tag: 'forge:dyes/red',
          },
          {
            tag: 'forge:dyes/blue',
          },
          {
            tag: 'forge:string',
          },

          {
            item: 'minecraft:quartz',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_djinni',
        },
        pentacle_id: 'occultism:possess_djinni',
        duration: 60,
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs',
        },
        entity_to_summon: 'occultism:possessed_ghast',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/possess_ghast',
        },
        inputs: [
          {
            tag: 'forge:netherrack',
          },
          {
            tag: 'forge:netherrack',
          },
          {
            tag: 'forge:netherrack',
          },
          {
            tag: 'forge:magma',
          },
          {
            tag: 'forge:magma',
          },
          {
            tag: 'forge:magma',
          },
          {
            item: 'minecraft:lava_bucket',
          },
          {
            item: 'minecraft:lava_bucket',
          },
          {
            item: 'minecraft:lava_bucket',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon',
        activation_item: {
          item: 'occultism:book_of_binding_bound_foliot',
        },
        pentacle_id: 'occultism:possess_foliot',
        duration: 30,
        entity_to_sacrifice: {
          tag: 'forge:chicken',
          display_name: 'ritual.occultism.sacrifice.chicken',
        },
        entity_to_summon: 'occultism:possessed_skeleton',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/possess_skeleton',
        },
        inputs: [
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:bones',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_afrit',
        },
        pentacle_id: 'occultism:summon_afrit',
        duration: 120,
        spirit_max_age: -1,
        spirit_job_type: 'occultism:crush_tier3',
        entity_to_summon: 'occultism:afrit',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_afrit_crusher',
        },
        inputs: [
          {
            item: 'create:chromatic_compound',
          },
          {
            tag: 'forge:dusts/iesnium',
          },
          {
            tag: 'forge:dusts/iesnium',
          },
          {
            item: 'rankine:rose_gold_ingot',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_afrit',
        },
        pentacle_id: 'occultism:summon_afrit',
        duration: 60,
        spirit_max_age: 120,
        spirit_job_type: 'occultism:rain_weather',
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs',
        },
        entity_to_summon: 'occultism:afrit',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_afrit_rain_weather',
        },
        inputs: [
          {
            tag: 'forge:sand',
          },
          {
            item: 'create:chromatic_compound',
          },
          {
            item: 'minecraft:cactus',
          },
          {
            item: 'minecraft:dead_bush',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_afrit',
        },
        pentacle_id: 'occultism:summon_afrit',
        duration: 60,
        spirit_max_age: 240,
        spirit_job_type: 'occultism:thunder_weather',
        entity_to_sacrifice: {
          tag: 'forge:pigs',
          display_name: 'ritual.occultism.sacrifice.pigs',
        },
        entity_to_summon: 'occultism:afrit',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_afrit_thunder_weather',
        },
        inputs: [
          {
            tag: 'forge:bones',
          },
          {
            tag: 'forge:gunpowder',
          },
          {
            tag: 'forge:gunpowder',
          },
          {
            item: 'minecraft:ghast_tear',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
      {
        type: 'occultism:ritual',
        ritual_type: 'occultism:summon_spirit_with_job',
        activation_item: {
          item: 'occultism:book_of_binding_bound_marid',
        },
        pentacle_id: 'occultism:summon_marid',
        duration: 150,
        spirit_max_age: -1,
        spirit_job_type: 'occultism:crush_tier4',
        entity_to_summon: 'occultism:marid',
        ritual_dummy: {
          item: 'occultism:ritual_dummy/summon_marid_crusher',
        },
        inputs: [
          {
            item: 'rankine:rose_gold_block',
          },
          {
            item: 'minecraft:ghast_tear',
          },
          {
            tag: 'forge:storage_blocks/iesnium',
          },
          {
            item: 'cataclysm:witherite_block',
          },
        ],
        output: {
          item: 'occultism:jei_dummy/none',
        },
      },
    ]);
});
