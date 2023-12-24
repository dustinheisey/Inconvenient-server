onEvent('recipes', event => {
  new recipes(event)
    .setType('minecraft:crafting_shapeless')
    .setStage('stage_2')
    .setFunction(config => {
      return event.shapeless(config.output, config.inputs);
    })
    .modifyOutputs([
      {
        output: 'farmersdelight:organic_compost',
        inputs: [
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
          'rankine:compost',
        ],
      },
      {
        output: 'minecraft:flint_and_steel',
        inputs: ['minecraft:iron_ingot', 'minecraft:flint'],
      },
      {
        output: 'cold_sweat:insulated_minecart',
        inputs: ['cold_sweat:minecart_insulation', 'minecraft:minecart'],
      },
      {
        output: 'tconstruct:materials_and_you',
        inputs: ['farmersdelight:canvas', 'tconstruct:pattern'],
      },
      {
        output: 'tconstruct:puny_smelting',
        inputs: ['farmersdelight:canvas', 'tconstruct:grout'],
      },
      {
        output: 'tconstruct:grout',
        inputs: ['occultism:burnt_otherstone', '#forge:sand', '#forge:gravel'],
      },
      {
        output: 'paragon_textiles:fabric_red',
        inputs: ['paragon_textiles:fabric_plain', 'minecraft:red_dye'],
      },
      {
        output: 'comforts:sleeping_bag_red',
        inputs: ['comforts:sleeping_bag_white', 'minecraft:red_dye'],
      },
      {
        output: 'minecraft:glass',
        inputs: ['tconstruct:clear_glass'],
      },
      {
        output: 'comforts:rope_and_nail',
        inputs: ['farmersdelight:rope', 'minecraft:iron_ingot'],
      },
    ]);
});
