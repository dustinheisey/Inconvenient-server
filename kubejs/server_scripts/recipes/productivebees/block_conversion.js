onEvent('recipes', event => {
  new recipes(event)
    .setType('productivebees:block_conversion')
    .setFunction(config =>
      event.custom({
        type: 'productivebees:block_conversion',
        bee: config.bee,
        from: {
          Name: config.from,
        },
        to: {
          Name: config.to,
        },
        chance: config.chance,
        conditions: [
          {
            type: 'productivebees:bee_exists',
            bee: config.bee,
          },
        ],
      })
    )
    .add([
      {
        bee: 'productivebees:pure',
        from: 'botania:dreamwood_log',
        to: 'naturesaura:ancient_log',
        chance: 0.25,
      },
    ]);
});
