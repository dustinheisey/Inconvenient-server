onEvent('recipes', event => {
  event.remove({
    output: ['rankine:invar_ingot'],
    type: 'immersiveengineering:alloy',
  });
});
