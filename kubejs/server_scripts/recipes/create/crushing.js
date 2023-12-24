onEvent('recipes', event => {
  new recipes(event)
    .setType('create:crushing')
    .setFunction(config =>
      event.recipes.createCrushing(config.output, config.input)
    )
    .removeInputs([
      '#minecraft:wool',
      'create:ochrum',
      'create:crimsite',
      '#create:stone_types/diorite',
      'minecraft:redstone_ore',
      'minecraft:deepslate_redstone_ore',
      'minecraft:deepslate_lapis_ore',
      'minecraft:emerald_ore',
      'minecraft:nether_quartz_ore',
      'minecraft:diamond_ore',
      'minecraft:deepslate_diamond_ore',
      'minecraft:lapis_ore',
      'minecraft:deepslate_emerald_ore',
      '#forge:ores/lead',
      '#forge:ores/uranium',
      '#forge:ores/aluminum',
      '#forge:ores/nickel',
      '#forge:ores/tin',
      '#forge:ores/copper',
      '#forge:ores/zinc',
      '#forge:ores/silver',
      '#forge:ores/iron',
      '#forge:ores/osmium',
      '#forge:ores/gold',
      'rankine:rice',
      '#create:stone_types/asurine',
      'minecraft:tuff',
      'minecraft:diorite',
      'create:asurine',
      'create:veridium',
      '#create:stone_types/tuff',
      '#create:stone_types/crimsite',
      '#create:stone_types/ochrum',
      '#create:stone_types/veridium',
    ])
    .modifyOutputs([
      {
        global: true,
        output: '2x malum:crushed_soulstone',
        input: 'malum:raw_soulstone',
      },
      {
        global: true,
        output: '2x malum:crushed_brilliance',
        input: 'malum:cluster_of_brilliance',
      },
      {
        global: true,
        output: 'delightful:matcha',
        input: 'farmersrespite:green_tea_leaves',
      },
      {
        global: true,
        output: '4x waystones:warp_dust',
        input: 'create:chromatic_compound',
      },
      {
        input: 'minecraft:ancient_debris',
        output: [
          '2x minecraft:netherite_scrap',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        global: true,
        input: 'rankine:bauxite',
        output: [
          '2x chemlib:aluminum_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        global: true,
        input: 'rankine:pentlandite',
        output: [
          '2x chemlib:nickel_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        global: true,
        input: 'rankine:uraninite',
        output: [
          '2x chemlib:uranium_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        global: true,
        input: 'rankine:galena',
        output: [
          '2x chemlib:lead_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        global: true,
        input: 'rankine:cassiterite',
        output: [
          '2x chemlib:tin_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        global: true,
        input: 'rankine:acanthite',
        output: [
          '2x chemlib:silver_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        global: true,
        input: 'rankine:sphalerite',
        output: [
          '2x chemlib:zinc_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        global: true,
        input: 'rankine:malachite',
        output: [
          '2x chemlib:copper_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        global: true,
        input: 'minecraft:raw_gold',
        output: [
          '2x chemlib:gold_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        global: true,
        input: 'rankine:hematite',
        output: [
          '2x chemlib:iron_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
    ])
    .add([
      {
        input: 'blue_skies:horizonite_ore',
        output: [
          '2x blue_skies:raw_horizonite',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:everdawn_moonstone_ore',
        output: [
          '2x blue_skies:moonstone_shard',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:everdawn_charoite_ore',
        output: [
          '2x blue_skies:raw_charoite',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:everdawn_aquite_ore',
        output: [
          '2x blue_skies:raw_aquite',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:everdawn_pyrope_ore',
        output: [
          '2x blue_skies:pyrope_gem',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:everdawn_diopside_ore',
        output: [
          '2x blue_skies:diopside_gem',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:ventium_ore',
        output: [
          '2x blue_skies:raw_ventium',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:falsite_ore',
        output: [
          '2x blue_skies:raw_falsite',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:everbright_moonstone_ore',
        output: [
          '2x blue_skies:moonstone_shard',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:everbright_charoite_ore',
        output: [
          '2x blue_skies:raw_charoite',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:everbright_aquite_ore',
        output: [
          '2x blue_skies:raw_aquite',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:everbright_pyrope_ore',
        output: [
          '2x blue_skies:pyrope_gem',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'blue_skies:everbright_diopside_ore',
        output: [
          '2x blue_skies:diopside_gem',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'occultism:iesnium_ore',
        output: [
          '2x occultism:iesnium_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'rankine:nether_quartz_ore',
        output: [
          '2x minecraft:quartz',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'rankine:plumbago_ore',
        output: [
          '2x rankine:graphite',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'rankine:native_sulfur_ore',
        output: [
          '6x rankine:sulfur_nugget',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'rankine:cinnabar_ore',
        output: [
          '12x minecraft:redstone',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'undergarden:shiverstone_regalium_ore',
        output: [
          '2x undergarden:regalium_crystal',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'undergarden:depthrock_regalium_ore',
        output: [
          '2x undergarden:regalium_crystal',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'undergarden:depthrock_utherium_ore',
        output: [
          '2x undergarden:utherium_crystal',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'undergarden:tremblecrust_utherium_ore',
        output: [
          '2x undergarden:utherium_crystal',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'undergarden:shiverstone_utherium_ore',
        output: [
          '2x undergarden:utherium_crystal',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'undergarden:shiverstone_froststeel_ore',
        output: [
          '2x undergarden:raw_froststeel',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'undergarden:shiverstone_cloggrum_ore',
        output: [
          '2x undergarden:raw_cloggrum',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'undergarden:depthrock_cloggrum_ore',
        output: [
          '2x undergarden:raw_cloggrum',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'undergarden:shiverstone_coal_ore',
        output: [
          '3x minecraft:coal',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'undergarden:depthrock_coal_ore',
        output: [
          '3x minecraft:coal',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'rankine:ilmenite',
        output: [
          '2x chemlib:titanium_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'rankine:cobaltite',
        output: [
          '2x chemlib:cobalt_dust',
          Item.of('create:experience_nugget').withChance(0.5),
        ],
      },
      {
        input: 'rankine:sulfur',
        output: 'chemlib:sulfur_dust',
      },
      {
        input: 'rankine:silicon',
        output: 'chemlib:silicon_dust',
      },
      {
        input: 'rankine:sodium_chloride',
        output: 'chemlib:sodium_dust',
      },
      {
        output: 'kubejs:soy_flakes',
        input: 'rankine:soybeans',
      },
      {
        output: 'kubejs:barley_flakes',
        input: 'rankine:barley',
      },
      {
        output: 'kubejs:rye_flakes',
        input: 'rankine:rye',
      },
      {
        output: 'kubejs:millet_flakes',
        input: 'rankine:millet',
      },
      {
        output: 'kubejs:sorghum_flakes',
        input: 'rankine:sorghum',
      },
      {
        output: 'kubejs:oat_flakes',
        input: 'rankine:oats',
      },
      {
        output: 'kubejs:corn_flakes',
        input: 'rankine:corn_ear',
      },
      {
        output: 'kubejs:wheat_flakes',
        input: 'kubejs:wheat',
      },
      {
        output: 'bloodmagic:coalsand',
        input: 'minecraft:coal',
      },
      {
        output: '9x bloodmagic:coalsand',
        input: 'minecraft:coal_block',
      },
      {
        output: 'butchercraft:beef_scraps',
        input: 'butchercraft:beef_ribs',
      },
      {
        output: 'butchercraft:beef_scraps',
        input: 'butchercraft:beef_roast',
      },
      {
        output: 'butchercraft:beef_scraps',
        input: 'butchercraft:beef_stewmeat',
      },
      {
        output: 'butchercraft:pork_scraps',
        input: 'butchercraft:pork_ribs',
      },
      {
        output: 'butchercraft:pork_scraps',
        input: 'butchercraft:pork_roast',
      },
      {
        output: 'butchercraft:pork_scraps',
        input: 'butchercraft:pork_stewmeat',
      },
      {
        output: 'butchercraft:lamb_scraps',
        input: 'butchercraft:lamb_ribs',
      },
      {
        output: 'butchercraft:lamb_scraps',
        input: 'butchercraft:lamb_roast',
      },
      {
        output: 'butchercraft:lamb_scraps',
        input: 'butchercraft:lamb_stewmeat',
      },
    ]);
});
