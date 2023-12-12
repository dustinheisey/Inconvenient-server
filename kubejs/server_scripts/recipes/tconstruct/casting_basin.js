onEvent("recipes", (event) => {
  new recipes(event)
    .setType("tconstruct:casting_basin")
    .setFunction((config) => {
      const { casting_basin } = event.recipes.tconstruct;
      if (config.cast)
        casting_basin(config.output, config.fluid, config.amount || 810)
          .cast(config.cast)
          .consumeCast();
      else
        casting_basin(
          config.output,
          config.fluid,
          config.amount || 810
        ).noCast();
    })
    .removeInputs(["#forge:stone"])
    .removeOutputs([
      "create:andesite_alloy",
      "minecraft:ender_chest",
      "tconstruct:pig_iron_block",
      "tconstruct:polished_scorched_stone",
      "minecraft:soul_soil",
    ])
    .modifyOutputs([
      {
        fluid: "tconstruct:blazing_blood",
        cast: "tconstruct:scorched_bricks",
        amount: 40,
        output: "tconstruct:foundry_controller",
      },
    ])
    .add([
      {
        fluid: "kubejs:freezing_sap",
        cast: "minecraft:obsidian",
        amount: 250,
        output: "rankine:snowflake_obsidian",
      },
      {
        fluid: "kubejs:molten_sterling_silver",
        output: "rankine:sterling_silver_block",
      },
      {
        fluid: "kubejs:molten_crystal_glass",
        amount: 1000,
        output: "blue_skies:crystal_glass",
      },
      {
        fluid: "kubejs:molten_midnight_glass",
        amount: 1000,
        output: "blue_skies:midnight_glass",
      },

      {
        output: "blue_skies:aquite_block",
        fluid: "kubejs:molten_aquite",
      },

      {
        output: "blue_skies:charoite_block",
        fluid: "kubejs:molten_charoite",
      },

      {
        output: "blue_skies:falsite_block",
        fluid: "kubejs:molten_falsite",
      },
      {
        output: "occultism:iesnium_block",
        fluid: "kubejs:molten_iesnium",
      },

      {
        output: "blue_skies:ventium_block",
        fluid: "kubejs:molten_ventium",
      },

      {
        output: "rankine:mercury_block",
        fluid: "rankine:liquid_mercury",
      },

      {
        output: "undergarden:froststeel_block",
        fluid: "kubejs:molten_froststeel",
      },

      {
        output: "undergarden:cloggrum_block",
        fluid: "kubejs:molten_cloggrum",
      },

      {
        output: "undergarden:regalium_block",
        fluid: "kubejs:molten_regalium",
      },

      {
        output: "undergarden:forgotten_block",
        fluid: "kubejs:molten_forgotten_metal",
      },

      {
        output: "undergarden:utherium_block",
        fluid: "kubejs:molten_utherium",
      },

      {
        output: "blue_skies:horizonite_block",
        fluid: "kubejs:molten_horizonite",
      },

      {
        output: "twilightforest:ironwood_block",
        fluid: "kubejs:molten_ironwood",
      },

      {
        output: "twilightforest:steeleaf_block",
        fluid: "kubejs:molten_steeleaf",
      },
    ]);
});
