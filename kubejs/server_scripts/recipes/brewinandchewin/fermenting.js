onEvent('recipes', event => {
  event.remove({
    id: 'brewinandchewin:fermenting/unripe_scarlet_cheese_wheel',
  });

  new recipes(event)
    .setType('brewinandchewin:fermenting')
    .setFunction(config =>
      event.custom({
        type: 'brewinandchewin:fermenting',
        ingredients: config.inputs,
        result: config.output,
        container: config.container,
        liquid: config.liquid,
        experience: config.experience,
        cookingtime: config.cooking_time,
        temperature: config.temperature,
      })
    )
    .modifyOutputs([
      {
        inputs: [
          {
            item: 'minecraft:potato',
          },
          {
            item: 'minecraft:potato',
          },
          {
            item: 'minecraft:potato',
          },
          {
            item: 'kubejs:wheat',
          },
        ],
        output: {
          item: 'brewinandchewin:vodka',
        },
        container: {
          item: 'brewinandchewin:tankard',
        },
        liquid: {
          item: 'minecraft:water_bucket',
        },
        experience: 0.6,
        cooking_time: 12000,
        temperature: 3,
      },
      {
        inputs: [
          {
            item: 'minecraft:crimson_fungus',
          },
          {
            item: 'minecraft:iron_ingot',
          },
          {
            item: 'minecraft:nether_wart',
          },
          {
            item: 'kubejs:wheat',
          },
        ],
        output: {
          item: 'brewinandchewin:steel_toe_stout',
        },
        container: {
          item: 'brewinandchewin:tankard',
        },
        liquid: {
          item: 'brewinandchewin:strongroot_ale',
        },
        experience: 0.6,
        cooking_time: 12000,
        temperature: 1,
      },
      {
        inputs: [
          {
            item: 'kubejs:wheat',
          },
          {
            item: 'kubejs:wheat',
          },
          {
            item: 'minecraft:sweet_berries',
          },
        ],
        output: {
          item: 'brewinandchewin:mead',
        },
        container: {
          item: 'brewinandchewin:tankard',
        },
        liquid: {
          item: 'minecraft:honey_bottle',
        },
        experience: 0.6,
        cooking_time: 12000,
        temperature: 3,
      },
      {
        inputs: [
          {
            item: 'kubejs:wheat',
          },
          {
            item: 'kubejs:wheat',
          },
          {
            item: 'kubejs:wheat',
          },
        ],
        output: {
          item: 'brewinandchewin:beer',
        },
        container: {
          item: 'brewinandchewin:tankard',
        },
        liquid: {
          item: 'minecraft:water_bucket',
        },
        experience: 0.6,
        cooking_time: 12000,
        temperature: 3,
      },
    ])
    .add([
      {
        inputs: [
          {
            item: 'minecraft:crimson_fungus',
          },
          {
            item: 'minecraft:crimson_fungus',
          },
          {
            item: 'minecraft:sugar',
          },
        ],
        output: {
          item: 'brewinandchewin:unripe_scarlet_cheese_wheel',
        },
        container: {
          item: 'productivebees:configurable_honeycomb',
          nbt: '{EntityTag:{type:"productivebees:ender"}}',
        },
        liquid: {
          item: 'minecraft:milk_bucket',
        },
        experience: 0.6,
        cookingtime: 12000,
        temperature: 4,
      },
      {
        inputs: [
          {
            item: 'rankine:rice',
          },
          {
            item: 'rankine:rice',
          },
          {
            item: 'rankine:rice',
          },
          {
            item: 'rankine:rice',
          },
        ],
        output: {
          item: 'brewinandchewin:rice_wine',
        },
        container: {
          item: 'brewinandchewin:tankard',
        },
        liquid: {
          item: 'minecraft:water_bucket',
        },
        experience: 0.6,
        cookingtime: 12000,
        temperature: 3,
      },
      {
        type: 'brewinandchewin:fermenting',
        inputs: [
          {
            item: 'minecraft:glowstone_dust',
          },
          {
            item: 'minecraft:glow_ink_sac',
          },
          {
            item: 'minecraft:glowstone_dust',
          },
          {
            item: 'minecraft:glowstone_dust',
          },
        ],
        output: {
          item: 'brewinandchewin:glittering_grenadine',
        },
        container: {
          item: 'brewinandchewin:tankard',
        },
        liquid: {
          item: 'minecraft:water_bucket',
        },
        experience: 0.6,
        cookingtime: 12000,
        temperature: 2,
      },
    ]);
});
