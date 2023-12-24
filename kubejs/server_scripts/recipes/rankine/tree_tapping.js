onEvent('recipes', event => {
  new recipes(event)
    .setType('rankine:treetapping')
    .setFunction(config =>
      event.custom({
        type: 'rankine:treetapping',
        tapTime: 400,
        input: {
          item: config.input,
        },
        result: {
          fluid: config.output,
          amount: 200,
        },
      })
    )
    .modifyInputs([
      {
        input: 'rankine:sharinga_log',
        output: 'rankine:resin',
      },
    ])
    .add([
      {
        input: 'blue_skies:bluebright_log',
        output: 'kubejs:freezing_sap',
      },
      {
        input: 'hem:crystalized_log',
        output: 'kubejs:crystallized_sap',
      },
    ]);
});
