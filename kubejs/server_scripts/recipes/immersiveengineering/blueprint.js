onEvent('recipes', event => {
  new recipes(event)
    .setType('immersiveengineering:blueprint')
    .setFunction(config =>
      event.custom({
        type: 'immersiveengineering:blueprint',
        inputs: config.inputs,
        category: 'components',
        result: config.output,
      })
    )
    .modifyOutputs([
      {
        global: true,
        output: {
          item: 'immersiveengineering:component_electronic_adv',
        },
        inputs: [
          {item: 'immersiveengineering:plate_duroplast'},
          {
            count: 2,
            base_ingredient: {
              item: 'immersiveengineering:electron_tube',
            },
          },
          {item: 'pneumaticcraft:printed_circuit_board'},
          {item: 'immersiveengineering:component_electronic'},
        ],
      },
    ]);
});
