onEvent('recipes', event => {
  let modify_outputs = [
    {
      output: 'farmersdelight:yellow_canvas_sign',
      inputs: ['#farmersdelight:canvas_signs', 'minecraft:yellow_dye'],
    },
    {
      output: 'rankine:yellow_fiber_block',
      inputs: ['rankine:fiber_block', 'minecraft:yellow_dye'],
    },
    {
      output: 'rankine:yellow_fiber_mat',
      inputs: ['rankine:fiber_mat', 'minecraft:yellow_dye'],
    },
    {
      output: 'create:yellow_seat',
      inputs: ['#create:seats', 'minecraft:yellow_dye'],
    },
    {
      output: '3x paragon_textiles:silk_wisps',
      inputs: ['blue_skies:spider_webbing'],
    },
    {
      output: 'malum:lesbian_prideweave',
      inputs: ['malum:esoteric_spool', 'minecraft:magenta_dye'],
    },
    {
      output: 'malum:intersex_prideweave',
      inputs: ['malum:esoteric_spool', 'minecraft:orange_dye'],
    },
    {
      output: 'malum:enby_prideweave',
      inputs: ['malum:esoteric_spool', 'minecraft:yellow_dye'],
    },
    {
      output: 'malum:demigirl_prideweave',
      inputs: ['malum:esoteric_spool', 'minecraft:pink_dye'],
    },
    {
      output: 'malum:ace_prideweave',
      inputs: ['malum:esoteric_spool', 'minecraft:gray_dye'],
    },
    {
      output: 'malum:trans_prideweave',
      inputs: ['malum:esoteric_spool', 'minecraft:light_blue_dye'],
    },
    {
      output: 'malum:gay_prideweave',
      inputs: ['malum:esoteric_spool', 'minecraft:cyan_dye'],
    },
    {
      output: '2x twilightforest:raw_ironwood',
      inputs: [
        'twilightforest:liveroot',
        'rankine:hematite',
        'blue_skies:horizonite_ingot',
      ],
    },
  ];

  colors.forEach(color => {
    if (color !== 'red') {
      modify_outputs.push({
        output: `comforts:sleeping_bag_${color}`,
        inputs: ['#im:sleeping_bags', `minecraft:${color}_dye`],
      });
      modify_outputs.push({
        output: `paragon_textiles:fabric_${color}`,
        inputs: ['paragon_textiles:fabric_plain', `minecraft:${color}_dye`],
      });
    }
  });

  new recipes(event)
    .setType('minecraft:crafting_shapeless')
    .setStage('stage_3')
    .setFunction(config => {
      return event.shapeless(config.output, config.inputs);
    })
    .modifyOutputs(modify_outputs);
});
