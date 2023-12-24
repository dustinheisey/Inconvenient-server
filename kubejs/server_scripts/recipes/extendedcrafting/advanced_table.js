onEvent('recipes', event => {
  new recipes(event)
    .setType('extendedcrafting:shaped_table')
    .setFunction(config =>
      event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: config.pattern,
        key: config.key,
        result: {
          item: config.output,
        },
      })
    )
    .modifyOutputs([
      {
        global: true,
        output: 'immersive_aircraft:quadrocopter',
        pattern: ['aba', 'bcb', 'aba'],
        key: {
          a: 'immersive_aircraft:hull',
          b: 'immersive_aircraft:propeller',
          c: 'immersive_aircraft:engine',
        },
      },
      {
        global: true,
        output: 'immersive_aircraft:biplane',
        pattern: ['   a ', 'abbac', 'ab dc', 'abbac', '   a '],
        key: {
          a: 'immersive_aircraft:hull',
          b: 'rankine:aluminum_sheetmetal',
          c: 'immersive_aircraft:propeller',
          d: 'immersive_aircraft:engine',
        },
      },
      {
        global: true,
        output: 'immersive_aircraft:gyrodyne',
        pattern: ['  a  ', ' bcb ', 'acdca', ' bcb ', '  a  '],
        key: {
          a: 'immersive_aircraft:hull',
          b: 'rankine:aluminum_sheetmetal',
          c: 'immersive_aircraft:propeller',
          d: 'immersive_aircraft:engine',
        },
      },
      {
        global: true,
        output: 'immersive_aircraft:airship',
        pattern: ['aaaaa', 'abbba', 'aaaaa', 'cd ef', 'cdddc'],
        key: {
          a: 'immersive_aircraft:sail',
          b: 'rankine:carbon_dioxide_gas_bottle',
          c: 'immersive_aircraft:hull',
          d: 'rankine:aluminum_sheetmetal',
          e: 'immersive_aircraft:engine',
          f: 'immersive_aircraft:propeller',
        },
      },
      {
        global: true,
        output: 'immersive_aircraft:engine',
        pattern: ['a a a', 'bbcbb', 'fdgdf', 'fdgdf', 'eeeee'],
        key: {
          a: 'bloodmagic:demonslate',
          b: 'rankine:vulcanized_rubber',
          c: 'hem:teir_one_computer',
          d: 'rankine:carbon',
          e: 'create:sturdy_sheet',
          f: 'create:shadow_steel_casing',
          g: 'create:electron_tube',
        },
      },

      {
        global: true,
        output: 'extendedcrafting:elite_table',
        pattern: ['aba', 'ded', 'aca'],
        key: {
          a: 'extendedcrafting:elite_component',
          b: 'extendedcrafting:elite_catalyst',
          c: 'extendedcrafting:black_iron_slate',
          d: 'extendedcrafting:advanced_table',
          e: 'immersiveengineering:component_electronic_adv',
        },
      },
    ]);
});
