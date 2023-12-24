onEvent('server.datapack.high_priority', event => {
  [
    'apple',
    'beetroot',
    'glow_berries',
    'melon_slice',
    'potato',
    'sugar_cane',
    'sweet_berries',
  ].forEach(id =>
    event.addJson(`immersiveengineering:recipes/fermenter/${id}.json`, {})
  );

  event.addJson(
    'farmersdelight:recipes/integration/immersiveengineering/fermenter/tomato',
    {}
  );
});

onEvent('recipes', event => {
  event.custom({
    type: 'immersiveengineering:fermenter',
    fluid: {
      fluid: 'kubejs:antibiotics',
      amount: 250,
    },
    input: {
      tag: 'forge:mushrooms',
    },
    energy: 6400,
  });
});
