onEvent('recipes', event => {
  new recipes(event)
    .setType('botania:orchid_ignem')
    .setFunction(config =>
      event.recipes.botania.orechid_ignem(
        config.output,
        config.input,
        config.count || 1
      )
    )
    .add([{input: 'rankine:red_asphalt', output: 'rankine:komatiitic_tuff'}]);
});
