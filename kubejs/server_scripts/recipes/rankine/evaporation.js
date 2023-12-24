onEvent('recipes', event => {
  new recipes(event)
    .setType('rankine:evaporation')
    .setFunction(config => {
      event.custom({
        type: 'rankine:evaporation',
        processTime: 12000,
        input: {
          fluid: config.fluid,
        },
        outputs: config.outputs,
      });
    })
    .add([
      {
        fluid: 'immersivepetroleum:crudeoil',
        outputs: [
          {
            item: 'minecraft:soul_sand',
            weight: 100,
          },
          {
            item: 'rankine:silicon_nugget',
            weight: 5,
          },
          {
            item: 'rankine:carbon_nugget',
            weight: 10,
          },
        ],
      },
      {
        fluid: 'minecraft:lava',
        outputs: [
          {
            item: 'minecraft:soul_sand',
            weight: 100,
          },
          {
            item: 'rankine:dry_rubber',
            weight: 5,
          },
        ],
      },
      {
        fluid: 'immersivepetroleum:benzene',
        outputs: [
          {
            item: 'minecraft:sand',
            weight: 30,
          },
          {
            item: 'rankine:silt',
            weight: 50,
          },
          {
            item: 'rankine:silicon_nugget',
            weight: 5,
          },
          {
            item: 'rankine:carbon',
            weight: 10,
          },
          {
            item: 'rankine:chromium_nugget',
            weight: 5,
          },
        ],
      },
    ]);
});
