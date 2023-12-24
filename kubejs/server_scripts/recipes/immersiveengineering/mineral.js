onEvent('server.datapack.high_priority', event => {
  [
    'beryl',
    'bituminous_coal',
    'cooperite',
    'uraninite',
    'pentlandite',
    'wolframite',
    'laterite',
  ].forEach(id =>
    event.addJson(`immersiveengineering:recipes/mineral/${id}.json`, {})
  );

  event.addJson('immersiveengineering:recipes/mineral/bituminous_coal.json', {
    type: 'immersiveengineering:mineral_mix',
    ores: [
      {
        chance: 0.8,
        output: {
          item: 'rankine:bituminous_ore',
        },
      },
      {
        chance: 0.2,
        output: {
          item: 'rankine:subbituminous_ore',
        },
      },
      {
        chance: 0.1,
        output: {
          item: 'rankine:sulfur',
        },
      },
    ],
    spoils: [
      {
        chance: 0.2,
        output: {
          item: 'minecraft:gravel',
        },
      },
      {
        chance: 0.5,
        output: {
          item: 'minecraft:cobblestone',
        },
      },
      {
        chance: 0.3,
        output: {
          item: 'minecraft:cobbled_deepslate',
        },
      },
    ],
    dimensions: ['hem:blueleaf'],
    weight: 25,
    fail_chance: 0.05,
  });

  event.addJson('immersiveengineering:recipes/mineral/uranium.json', {
    type: 'immersiveengineering:mineral_mix',
    ores: [
      {
        chance: 0.7,
        output: {
          tag: 'forge:ores/uranium',
        },
      },
      {
        chance: 0.3,
        output: {
          tag: 'forge:ores/lead',
        },
      },
    ],
    spoils: [
      {
        chance: 0.2,
        output: {
          item: 'minecraft:gravel',
        },
      },
      {
        chance: 0.5,
        output: {
          item: 'minecraft:cobblestone',
        },
      },
      {
        chance: 0.3,
        output: {
          item: 'minecraft:cobbled_deepslate',
        },
      },
    ],
    dimensions: ['hem:blueleaf'],
    weight: 10,
    fail_chance: 0.15,
  });

  event.addJson('immersiveengineering:recipes/mineral/ilmenite.json', {
    type: 'immersiveengineering:mineral_mix',
    ores: [
      {
        chance: 0.7,
        output: {
          item: 'rankine:bauxite_ore',
        },
      },
      {
        chance: 0.1,
        output: {
          item: 'rankine:ilmenite_ore',
        },
      },
    ],
    spoils: [
      {
        chance: 0.2,
        output: {
          item: 'minecraft:gravel',
        },
      },
      {
        chance: 0.5,
        output: {
          item: 'minecraft:cobblestone',
        },
      },
      {
        chance: 0.3,
        output: {
          item: 'minecraft:cobbled_deepslate',
        },
      },
    ],
    dimensions: ['hem:blueleaf'],
    weight: 20,
    fail_chance: 0.05,
  });

  event.addJson('immersiveengineering:recipes/mineral/pentlandite.json', {
    type: 'immersiveengineering:mineral_mix',
    ores: [
      {
        chance: 0.35,
        output: {
          item: 'rankine:pentlandite_ore',
        },
      },
      {
        chance: 0.3,
        output: {
          tag: 'forge:dusts/sulfur',
        },
      },
    ],
    spoils: [
      {
        chance: 0.2,
        output: {
          item: 'minecraft:gravel',
        },
      },
      {
        chance: 0.5,
        output: {
          item: 'minecraft:cobblestone',
        },
      },
      {
        chance: 0.3,
        output: {
          item: 'minecraft:cobbled_deepslate',
        },
      },
    ],
    dimensions: ['hem:blueleaf'],
    weight: 25,
    fail_chance: 0.05,
  });
});
