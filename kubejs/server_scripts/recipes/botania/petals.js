onEvent('recipes', event => {
  new recipes(event)
    .setType('botania:petal_apothecary')
    .setFunction(config =>
      event.recipes.botania.petal_apothecary(config.output, config.inputs)
    )
    .modifyOutputs([
      {
        output: 'botania:pure_daisy',
        inputs: [
          {item: 'naturesaura:token_joy'},
          {item: 'naturesaura:token_fear'},
          {item: 'naturesaura:token_anger'},
          {item: 'naturesaura:token_sorrow'},
          {item: 'botania:white_petal'},
          {item: 'botania:white_petal'},
          {item: 'botania:white_petal'},
          {item: 'botania:white_petal'},
          {item: 'farmersdelight:squid_ink_pasta'},
          {item: 'farmersdelight:roast_chicken_block'},
          {item: 'farmersdelight:stuffed_pumpkin_block'},
          {item: 'farmersdelight:ratatouille'},
          {item: 'farmersdelight:grilled_salmon'},
        ],
        global: true,
      },
      {
        output: 'botania:kekimurus',
        inputs: [
          {item: 'botania:white_petal'},
          {item: 'botania:white_petal'},
          {item: 'botania:orange_petal'},
          {item: 'botania:orange_petal'},
          {item: 'botania:brown_petal'},
          {item: 'botania:brown_petal'},
          {item: 'botania:pixie_dust'},
          {item: 'botania:rune_pride'},
          {item: 'botania:rune_lust'},
        ],
        global: true,
      },
      {
        output: 'botania:gourmaryllis',
        inputs: [
          {item: 'botania:light_gray_petal'},
          {item: 'botania:light_gray_petal'},
          {item: 'botania:yellow_petal'},
          {item: 'botania:yellow_petal'},
          {item: 'botania:red_petal'},
          {item: 'botania:red_petal'},
          {item: 'botania:rune_greed'},
          {item: 'botania:rune_wrath'},
        ],
        global: true,
      },

      {
        output: 'botania:spectrolus',
        inputs: [
          {item: 'botania:white_petal'},
          {item: 'botania:white_petal'},
          {item: 'botania:red_petal'},
          {item: 'botania:red_petal'},
          {item: 'botania:green_petal'},
          {item: 'botania:green_petal'},
          {item: 'botania:blue_petal'},
          {item: 'botania:blue_petal'},
          {item: 'botania:pixie_dust'},
          {item: 'botania:rune_gluttony'},
          {item: 'botania:rune_sloth'},
        ],
        global: true,
      },
      {
        output: 'botania:marimorphosis',
        inputs: [
          {item: 'botania:gray_petal'},
          {item: 'botania:yellow_petal'},
          {item: 'botania:red_petal'},
          {item: 'botania:green_petal'},
          {item: 'botania:redstone_root'},
          {item: 'botania:rune_pride'},
        ],
        global: true,
      },
    ])
    .add([
      {
        output: 'botania:fertilizer',
        inputs: [
          {item: 'minecraft:bone_meal'},
          {tag: 'forge:dyes'},
          {tag: 'forge:dyes'},
          {tag: 'forge:dyes'},
          {tag: 'forge:dyes'},
        ],
      },
    ]);
});
