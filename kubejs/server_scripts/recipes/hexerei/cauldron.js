onEvent('recipes', event => {
  new recipes(event)
    .setType('hexerei:mixingcauldron')
    .setFunction(config => {
      let json = {
        type: 'hexerei:mixingcauldron',
        liquid: {
          fluid: config.input_fluid || config.fluid,
        },
        ingredients: [],
        output: {
          item: config.output,
          count: config.output_count || 1,
        },
        liquidOutput: {
          fluid: config.output_fluid || config.fluid,
        },
        fluidLevelsConsumed: config.fluid_consumed,
      };

      config.inputs.forEach(id => {
        json.ingredients.push({
          item: id,
        });
      });

      event.custom(json);
    })
    .modifyOutputs([
      {
        inputs: [
          'minecraft:conduit',
          'minecraft:dark_prismarine',
          'minecraft:prismarine_shard',
          'minecraft:dark_prismarine',
          'blue_skies:lunar_stone',
          'minecraft:dark_prismarine',
          'minecraft:prismarine_shard',
          'minecraft:dark_prismarine',
        ],
        output: 'hexerei:broom_waterproof_tip',
        fluid: 'minecraft:water',
        fluid_consumed: 2000,
      },
      {
        inputs: [
          'hexerei:blood_bottle',
          'hexerei:willow_log',
          'undergarden:regalium_block',
          'kubejs:wheat',
          'hexerei:mandrake_root',
          'kubejs:wheat',
          'undergarden:regalium_block',
          'hexerei:willow_log',
        ],
        output: 'hexerei:willow_broom',
        fluid: 'minecraft:water',
        fluid_consumed: 1000,
      },
      {
        inputs: [
          'undergarden:regalium_crystal',
          'undergarden:regalium_crystal',
          'undergarden:regalium_crystal',
          'undergarden:regalium_crystal',
          'undergarden:regalium_crystal',
          'undergarden:regalium_crystal',
          'undergarden:regalium_crystal',
          'undergarden:regalium_crystal',
        ],
        output: 'hexerei:sage_burning_plate',
        fluid: 'minecraft:lava',
        fluid_consumed: 1500,
      },
      {
        inputs: [
          'minecraft:netherite_ingot',
          'minecraft:gold_ingot',
          'minecraft:iron_ingot',
          'hexerei:mahogany_planks',
          'hexerei:mahogany_planks',
          'hexerei:mahogany_planks',
          'minecraft:iron_ingot',
          'minecraft:gold_ingot',
        ],
        output: 'hexerei:warhammer',
        fluid: 'minecraft:lava',
        fluid_consumed: 1500,
      },
      {
        inputs: [
          'tconstruct:amethyst_bronze_ingot',
          'tconstruct:amethyst_bronze_ingot',
          'tconstruct:amethyst_bronze_ingot',
          'tconstruct:amethyst_bronze_nugget',
          'tconstruct:amethyst_bronze_nugget',
          'tconstruct:amethyst_bronze_nugget',
          'tconstruct:amethyst_bronze_ingot',
          'tconstruct:amethyst_bronze_ingot',
        ],
        output: 'hexerei:candle_dipper',
        fluid: 'minecraft:lava',
        fluid_consumed: 333,
      },
      {
        fluid: 'minecraft:water',
        inputs: [
          'occultism:purified_ink',
          'minecraft:leather',
          'paragon_textiles:silk',
          'minecraft:leather',
          'occultism:purified_ink',
          'minecraft:leather',
          'paragon_textiles:silk',
          'minecraft:leather',
        ],
        output: 'hexerei:infused_fabric',
        fluid_consumed: 500,
      },
      {
        fluid: 'minecraft:water',
        inputs: [
          'blue_skies:soul_fragment',
          'tconstruct:amethyst_bronze_ingot',
          'rankine:sterling_silver_ingot',
          'tconstruct:amethyst_bronze_ingot',
          'rankine:sterling_silver_ingot',
          'tconstruct:amethyst_bronze_ingot',
          'rankine:sterling_silver_ingot',
          'tconstruct:amethyst_bronze_ingot',
        ],
        output: 'rankine:sediment_fan',
        fluid_consumed: 1000,
      },
      {
        input_fluid: 'minecraft:water',
        inputs: [
          'hexerei:animal_fat',
          'hexerei:animal_fat',
          'blue_skies:cryo_root',
          'hexerei:animal_fat',
          'hexerei:animal_fat',
          'hexerei:animal_fat',
          'blue_skies:cryo_root',
          'hexerei:animal_fat',
        ],
        output: 'hexerei:tallow_impurity',
        output_fluid: 'hexerei:tallow_fluid',
        fluid_consumed: 0,
      },
      {
        fluid: 'minecraft:water',
        inputs: [
          'minecraft:chain',
          'hexerei:candle',
          'hexerei:candle',
          'rankine:pewter_ingot',
          'rankine:pewter_ingot',
          'rankine:pewter_ingot',
          'hexerei:candle',
          'hexerei:candle',
        ],
        output: 'hexerei:candelabra',
        fluid_consumed: 2000,
      },
      {
        inputs: [
          'rankine:pewter_ingot',
          'minecraft:glass_pane',
          'rankine:pewter_ingot',
          'rankine:pewter_ingot',
          'minecraft:spyglass',
          'rankine:pewter_ingot',
          'rankine:pewter_ingot',
          'minecraft:glass_pane',
        ],
        output: 'hexerei:reading_glasses',
        fluid: 'minecraft:lava',
        fluid_consumed: 333,
      },
      {
        inputs: [
          'rankine:sterling_silver_ingot',
          'rankine:pewter_ingot',
          'minecraft:stone',
          'minecraft:stone',
          'minecraft:stone',
          'minecraft:stone',
          'minecraft:stone',
          'rankine:pewter_ingot',
        ],
        output: 'hexerei:pestle_and_mortar',
        fluid: 'minecraft:lava',
        fluid_consumed: 333,
      },
      {
        fluid: 'minecraft:lava',
        inputs: [
          'rankine:pewter_hammer',
          'minecraft:cobblestone',
          'tconstruct:amethyst_bronze_ingot',
          'tconstruct:amethyst_bronze_ingot',
          'tconstruct:amethyst_bronze_ingot',
          'tconstruct:amethyst_bronze_ingot',
          'tconstruct:amethyst_bronze_ingot',
          'minecraft:cobblestone',
        ],
        output: 'rankine:totem_of_cobbling',
        fluid_consumed: 2000,
        global: true,
      },
      {
        fluid: 'minecraft:water',
        inputs: [
          'rankine:snowflake_obsidian',
          'rankine:snowflake_obsidian',
          'tconstruct:amethyst_bronze_ingot',
          'tconstruct:amethyst_bronze_ingot',
          'tconstruct:amethyst_bronze_ingot',
          'rankine:snowflake_obsidian',
          'rankine:snowflake_obsidian',
          'rankine:snowflake_obsidian',
        ],
        output: 'blue_skies:zeal_lighter',
        fluid_consumed: 1000,
        global: true,
      },
    ])
    .add([
      {
        fluid: 'minecraft:water',
        inputs: [
          'minecraft:beetroot',
          'minecraft:beetroot',
          'minecraft:beetroot',
          'minecraft:beetroot',
          'minecraft:beetroot',
          'minecraft:beetroot',
          'minecraft:beetroot',
          'minecraft:beetroot',
        ],
        output: 'minecraft:red_dye',
        output_count: 3,
        fluid_consumed: 500,
      },
      {
        fluid: 'minecraft:water',
        inputs: [
          'rankine:fire_clay_ball',
          'rankine:sawdust',
          'rankine:sawdust',
          'rankine:sawdust',
          'rankine:sawdust',
          'rankine:sawdust',
          'rankine:sawdust',
          'rankine:sawdust',
        ],
        output: 'rankine:pulp',
        output_count: 2,
        fluid_consumed: 2000,
      },
    ]);
});
