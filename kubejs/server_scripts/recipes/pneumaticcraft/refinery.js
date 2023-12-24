onEvent('server.datapack.high_priority', event => {
  ['oil_2', 'oil_3', 'oil_4'].forEach(id => {
    event.addJson(`pneumaticcraft:recipes/refinery/${id}.json`, {});
  });
});

onEvent('recipes', event => {
  event.custom({
    type: 'pneumaticcraft:refinery',
    input: {
      type: 'pneumaticcraft:fluid',
      amount: 10,
      fluid: 'immersivepetroleum:crudeoil',
    },
    results: [
      {
        amount: 4,
        fluid: 'pneumaticcraft:diesel',
      },
      {
        amount: 4,
        fluid: 'pneumaticcraft:kerosene',
      },
    ],
    temperature: {
      min_temp: 373,
    },
  });
  event.custom({
    type: 'pneumaticcraft:refinery',
    input: {
      type: 'pneumaticcraft:fluid',
      amount: 10,
      fluid: 'immersivepetroleum:crudeoil',
    },
    results: [
      {
        amount: 2,
        fluid: 'pneumaticcraft:diesel',
      },
      {
        amount: 3,
        fluid: 'pneumaticcraft:kerosene',
      },
      {
        amount: 3,
        fluid: 'pneumaticcraft:gasoline',
      },
    ],
    temperature: {
      min_temp: 373,
    },
  });
  event.custom({
    type: 'pneumaticcraft:refinery',
    input: {
      type: 'pneumaticcraft:fluid',
      amount: 10,
      fluid: 'immersivepetroleum:crudeoil',
    },
    results: [
      {
        amount: 2,
        fluid: 'pneumaticcraft:diesel',
      },
      {
        amount: 3,
        fluid: 'pneumaticcraft:kerosene',
      },
      {
        amount: 3,
        fluid: 'pneumaticcraft:gasoline',
      },
      {
        amount: 2,
        fluid: 'immersivepetroleum:naphtha',
      },
    ],
    temperature: {
      min_temp: 373,
    },
  });
});
