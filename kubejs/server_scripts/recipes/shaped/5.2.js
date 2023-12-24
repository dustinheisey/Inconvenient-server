onEvent('recipes', event => {
  event.shaped(
    Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'),
    [' a ', 'bbb', 'ccc'],
    {
      a: 'immersiveengineering:graphite_electrode',
      b: 'minecraft:black_dye',
      c: 'minecraft:paper',
    }
  );

  event.shaped(
    Item.of('immersiveengineering:blueprint', '{blueprint:"specialBullet"}'),
    [' a ', 'bbb', 'ccc'],
    {
      a: 'immersiveengineering:empty_casing',
      b: 'minecraft:orange_dye',
      c: 'minecraft:paper',
    }
  );

  new recipes(event)
    .setType('minecraft:crafting_shaped')
    .setStage('stage_5_2')
    .setFunction(config =>
      event.shaped(config.output, config.pattern, config.key)
    )
    .modifyOutputs([
      {
        output: 'pneumaticcraft:compressed_bricks',
        pattern: ['ab', 'ba'],
        key: {
          a: 'pneumaticcraft:compressed_stone',
          b: 'rankine:mortar',
        },
      },
      {
        output: 'pneumaticcraft:reinforced_bricks',
        pattern: ['ab', 'ba'],
        key: {
          a: 'pneumaticcraft:reinforced_stone',
          b: 'rankine:mortar',
        },
      },
      {
        global: true,
        output: 'rankine:simple_magnet',
        pattern: ['a a', 'aaa'],
        key: {
          a: 'rankine:nickel_ingot',
        },
      },
      {
        global: true,
        output: `2x rankine:cast_iron_sheetmetal`,
        pattern: ['aba', 'aba', 'aba'],
        key: {
          a: `rankine:cast_iron_nugget`,
          b: `rankine:cast_iron_ingot`,
        },
      },
      {
        global: true,
        output: `2x rankine:invar_sheetmetal`,
        pattern: ['aba', 'aba', 'aba'],
        key: {
          a: `rankine:invar_nugget`,
          b: `rankine:invar_ingot`,
        },
      },
      {
        global: true,
        output: `2x rankine:cupronickel_sheetmetal`,
        pattern: ['aba', 'aba', 'aba'],
        key: {
          a: `rankine:cupronickel_nugget`,
          b: `rankine:cupronickel_ingot`,
        },
      },
      {
        global: true,
        output: `2x rankine:nickel_silver_sheetmetal`,
        pattern: ['aba', 'aba', 'aba'],
        key: {
          a: `rankine:nickel_silver_nugget`,
          b: `rankine:nickel_silver_ingot`,
        },
      },
      {
        global: true,
        output: `2x rankine:titanium_alloy_sheetmetal`,
        pattern: ['aba', 'aba', 'aba'],
        key: {
          a: `rankine:titanium_alloy_nugget`,
          b: `rankine:titanium_alloy_ingot`,
        },
      },
      {
        global: true,
        output: `2x rankine:nitinol_sheetmetal`,
        pattern: ['aba', 'aba', 'aba'],
        key: {
          a: `rankine:nitinol_nugget`,
          b: `rankine:nitinol_ingot`,
        },
      },
      {
        global: true,
        output: `2x rankine:alnico_sheetmetal`,
        pattern: ['aba', 'aba', 'aba'],
        key: {
          a: `rankine:alnico_nugget`,
          b: `rankine:alnico_ingot`,
        },
      },
      {
        global: true,
        output: `pneumaticcraft:turbine_blade`,
        pattern: [' ab', 'ab ', 'a  '],
        key: {
          a: 'pneumaticcraft:ingot_iron_compressed',
          b: 'chemlib:copper_plate',
        },
      },
      {
        global: true,
        output: `2x rankine:nickel_superalloy_sheetmetal`,
        pattern: ['aba', 'aba', 'aba'],
        key: {
          a: `rankine:nickel_superalloy_nugget`,
          b: `rankine:nickel_superalloy_ingot`,
        },
      },
      {
        global: true,
        output: `2x rankine:titanium_sheetmetal`,
        pattern: ['aba', 'aba', 'aba'],
        key: {
          a: `rankine:titanium_nugget`,
          b: `rankine:titanium_ingot`,
        },
      },
      {
        global: true,
        output: `2x rankine:nickel_sheetmetal`,
        pattern: ['aba', 'aba', 'aba'],
        key: {
          a: `rankine:nickel_nugget`,
          b: `rankine:nickel_ingot`,
        },
      },
      {
        global: true,
        output: 'rankine:silver_zinc_battery',
        pattern: ['aba', 'cdc', 'aea'],
        key: {
          a: `rankine:vulcanized_rubber`,
          b: `rankine:silver_ingot`,
          c: 'minecraft:redstone',
          d: 'rankine:graphite_electrode',
          e: 'rankine:zinc_ingot',
        },
      },
      {
        global: true,
        output: 'rankine:lead_acid_battery',
        pattern: ['aba', 'cdc', 'aba'],
        key: {
          a: `rankine:vulcanized_rubber`,
          b: `rankine:lead_ingot`,
          c: 'minecraft:redstone',
          d: 'immersiveengineering:redstone_acid_bucket',
        },
      },
      {
        global: true,
        output: `rankine:magnetometer`,
        pattern: [' a ', 'bcb', ' a '],
        key: {
          a: 'rankine:cupronickel_ingot',
          b: 'extendedcrafting:redstone_ingot',
          c: 'extendedcrafting:ender_ingot',
        },
      },
    ])
    .add([
      // {
      //     output: "createaddition:alternator",
      //     pattern: ["aba", "aca", "ada"],
      //     key: {
      //         a: "create:iron_sheet",
      //         b: "create:andesite_alloy",
      //         c: "create:electron_tube",
      //         d: "createaddition:capacitor",
      //     },
      // },
    ]);
});

onEvent('server.datapack.high_priority', event => {
  event.addJson('immersiveengineering:recipes/crafting/redstone_acid.json', {});
});
