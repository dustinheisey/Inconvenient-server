onEvent('recipes', event => {
  new recipes(event)
    .setType('minecraft:crafting_shapeless')
    .setStage('stage_5_1')
    .setFunction(config => event.shapeless(config.output, config.inputs))
    .modifyOutputs([
      {
        output: 'productivebees:bee_nest_diamond_helmet',
        inputs: ['minecraft:beehive', 'botania:terrasteel_helmet'],
      },
    ])
    .add([
      {
        output: 'kubejs:salted_hide',
        inputs: ['kubejs:stripped_hide', 'salt:salt'],
      },
      {
        output: 'bloodmagic:enhancedteleposerfocus',
        inputs: ['bloodmagic:teleposerfocus', 'bloodmagic:strong_tau'],
      },
    ]);

  event
    .shapeless('24x kubejs:stripped_hide', [
      'butchercraft:cow_hide',
      'butchercraft:skinning_knife',
    ])
    .damageIngredient(Item.of('minecraft:shears').ignoreNBT());
  event
    .shapeless('24x kubejs:stripped_hide', [
      'butchercraft:sheep_hide',
      'butchercraft:skinning_knife',
    ])
    .damageIngredient(Item.of('minecraft:shears').ignoreNBT());
  event
    .shapeless('24x kubejs:stripped_hide', [
      'butchercraft:pig_hide',
      'butchercraft:skinning_knife',
    ])
    .damageIngredient(Item.of('minecraft:shears').ignoreNBT());
});
