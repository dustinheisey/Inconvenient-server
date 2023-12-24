onEvent('recipes', event => {
  event.remove({
    output: Item.of(
      'productivebees:spawn_egg_configurable_bee',
      '{EntityTag:{type:"productivebees:manasteel"}}'
    ),
  });

  event.custom({
    type: 'botania:mana_infusion',
    input: {
      type: 'forge:nbt',
      item: 'productivebees:spawn_egg_configurable_bee',
      nbt: '{EntityTag:{type:"productivebees:rose_gold"}}',
    },
    output: {
      type: 'forge:nbt',
      item: 'productivebees:spawn_egg_configurable_bee',
      nbt: '{EntityTag:{type:"productivebees:manasteel"}}',
    },
    mana: 10000,
  });

  new recipes(event)
    .setType('botania:mana_infusion')
    .setFunction(config =>
      event.recipes.botania.mana_infusion(
        config.output,
        config.input,
        config.mana
      )
    )
    .removeOutputs(['minecraft:ender_pearl', 'minecraft:tuff'])
    .modifyOutputs([
      {
        global: true,
        output: 'botania:lexicon',
        input: 'minecraft:book',
        mana: 500,
      },
      {
        output: 'botania:manasteel_ingot',
        input: 'tconstruct:pig_iron_ingot',
        mana: 2000,
      },
      {
        output: 'botania:manasteel_block',
        input: 'tconstruct:pig_iron_block',
        mana: 18000,
      },
    ]);
});
