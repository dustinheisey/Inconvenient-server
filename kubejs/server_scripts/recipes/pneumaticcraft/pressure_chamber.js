onEvent('recipes', event => {
  new recipes(event)
    .setType('pneumaticcraft:pressure_chamber')
    .setFunction(config =>
      event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: config.inputs,
        pressure: config.pressure,
        results: config.outputs,
      })
    )
    .modifyOutputs([
      {
        outputs: [
          {
            item: 'pneumaticcraft:empty_pcb',
          },
        ],
        inputs: [
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'extendedcrafting:ender_ingot',
            count: 2,
          },
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'rankine:rose_gold_nugget',
            count: 3,
          },
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'pneumaticcraft:plastic',
            count: 8,
          },
        ],
        pressure: 1.5,
      },
      {
        outputs: [{item: 'pneumaticcraft:pcb_blueprint'}],
        inputs: [
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'rankine:titanium_ingot',
            count: 8,
          },
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'rankine:rose_gold_nugget',
            count: 3,
          },
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'pneumaticcraft:plastic',
            count: 8,
          },
        ],
        pressure: 3,
      },
      {
        outputs: [{item: 'pneumaticcraft:etching_acid_bucket'}],
        inputs: [
          {item: 'butchercraft:tripe'},
          {item: 'butchercraft:stomache'},
          {item: 'butchercraft:lung'},
          {item: 'butchercraft:liver'},
          {item: 'butchercraft:kidney'},
          {item: 'butchercraft:heart'},
          {item: 'butchercraft:brain'},
          {item: 'minecraft:bucket'},
          {
            type: 'pneumaticcraft:stacked_item',
            item: 'minecraft:gunpowder',
            count: 3,
          },
        ],
        pressure: 1,
      },
      {
        inputs: [
          {
            type: 'pneumaticcraft:stacked_item',
            count: 3,
            tag: 'forge:nuggets/cast_iron',
          },
          {
            tag: 'forge:dusts/redstone',
          },
          {
            item: 'pneumaticcraft:plastic',
          },
        ],
        pressure: 1.0,
        outputs: [
          {
            item: 'pneumaticcraft:transistor',
          },
        ],
      },
      {
        inputs: [
          {
            type: 'pneumaticcraft:stacked_item',
            count: 2,
            tag: 'forge:nuggets/titanium',
          },
          {
            tag: 'forge:slimeballs',
          },
          {
            item: 'pneumaticcraft:plastic',
          },
        ],
        pressure: 1.0,
        outputs: [
          {
            item: 'pneumaticcraft:capacitor',
          },
        ],
      },
    ]);
});
