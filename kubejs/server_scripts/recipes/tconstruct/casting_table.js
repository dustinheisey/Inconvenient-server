onEvent("recipes", (event) => {
  new recipes(event)
    .setType("tconstruct:casting_table")
    .setFunction((config) => {
      if (config.cast)
        event.recipes.tconstruct
          .casting_table(config.output, config.fluid, config.amount || 90)
          .cast(config.cast)
          .consumeCast();
      else if (config.multiCast)
        event.recipes.tconstruct
          .casting_table(config.output, config.fluid, config.amount || 90)
          .cast(config.multiCast);
      else
        event.recipes.tconstruct.casting_table(
          config.output,
          config.fluid,
          config.amount || 90
        );
    })
    .removeInputs(["minecraft:stone_button"])
    .removeOutputs([
      "twilightforest:fiery_pickaxe",
      "twilightforest:fiery_sword",
      "minecraft:blaze_rod",
      "minecraft:magma_cream",
      "createaddition:zinc_sheet",
      "immersiveengineering:plate_uranium",
      "immersiveengineering:plate_steel",
      "immersiveengineering:plate_silver",
      "immersiveengineering:plate_lead",
      "create:iron_sheet",
      "create:golden_sheet",
      "immersiveengineering:plate_electrum",
      "create:copper_sheet",
      "immersiveengineering:plate_constantan",
      "immersiveengineering:plate_aluminum",
      "immersiveengineering:stick_aluminum",
      "immersiveengineering:wire_aluminum",
      "createaddition:brass_rod",
      "createaddition:copper_rod",
      "immersiveengineering:wire_copper",
      "immersiveengineering:wire_electrum",
      "industrialforegoing:gold_gear",
      "createaddition:gold_rod",
      "createaddition:gold_wire",
      "industrialforegoing:iron_gear",
      "immersiveengineering:stick_iron",
      "createaddition:iron_wire",
      "immersiveengineering:wire_lead",
      "immersiveengineering:stick_steel",
      "immersiveengineering:wire_steel",
      "tconstruct:molten_pig_iron_bucket",
      "tconstruct:pig_iron_ingot",
      "tconstruct:pig_iron_nugget",
      "createaddition:zinc_sheet",
      "immersiveengineering:plate_uranium",
      "immersiveengineering:plate_steel",
      "immersiveengineering:plate_silver",
      "immersiveengineering:plate_nickel",
      "immersiveengineering:plate_lead",
      "create:iron_sheet",
      "create:golden_sheet",
      "immersiveengineering:plate_electrum",
      "create:copper_sheet",
      "immersiveengineering:plate_constantan",
      "immersiveengineering:plate_aluminum",
    ])
    .modifyOutputs([
      {
        global: true,
        fluid: "kubejs:molten_redstone",
        amount: 810,
        cast: "minecraft:quartz",
        output: "create:rose_quartz",
      },
      {
        global: true,
        fluid: "tconstruct:blazing_blood",
        cast: "minecraft:coal",
        amount: 10,
        output: "realistictorches:glowstone_crystal",
      },
      {
        fluid: "tconstruct:seared_stone",
        amount: 250,
        cast: "farmersdelight:canvas",
        output: "tconstruct:mighty_smelting",
      },
      {
        global: true,
        fluid: "pneumaticcraft:plastic",
        amount: 1000,
        output: "pneumaticcraft:plastic",
      },
      {
        fluid: "rankine:liquid_mercury",
        amount: 810,
        cast: "blue_skies:aquite",
        output: "cold_sweat:thermometer",
      },
      {
        fluid: "kubejs:molten_falsite",
        amount: 810,
        cast: "rankine:pewter_gold_pan",
        output: "rankine:steel_gold_pan",
      },
    ])
    .add([
      {
        fluid: "tconstruct:molten_iron",
        amount: 270,
        cast: "ceramicbucket:ceramic_bucket",
        output: "minecraft:bucket",
      },
      {
        fluid: "twilightforest:molten_fiery",
        amount: 270,
        cast: "twilightforest:knightmetal_pickaxe",
        output: "twilightforest:fiery_pickaxe",
      },
      {
        fluid: "twilightforest:molten_fiery",
        amount: 180,
        cast: "twilightforest:knightmetal_sword",
        output: "twilightforest:fiery_sword",
      },
      {
        fluid: "tconstruct:molten_obsidian",
        amount: 250,
        cast: "minecraft:iron_ingot",
        output: "extendedcrafting:black_iron_ingot",
      },
      {
        fluid: "kubejs:molten_sterling_silver",
        amount: 90,
        multiCast: "tconstruct:ingot_cast",
        output: "rankine:sterling_silver_ingot",
      },
      {
        fluid: "kubejs:molten_sterling_silver",
        amount: 10,
        multiCast: "tconstruct:nugget_cast",
        output: "rankine:sterling_silver_nugget",
      },

      {
        output: "blue_skies:aquite",
        fluid: "kubejs:molten_aquite",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },

      {
        output: "blue_skies:charoite",
        fluid: "kubejs:molten_charoite",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },

      {
        output: "blue_skies:falsite_ingot",
        fluid: "kubejs:molten_falsite",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },
      {
        output: "blue_skies:falsite_nugget",
        fluid: "kubejs:molten_falsite",
        multiCast: "tconstruct:nugget_cast",
        amount: 10,
      },
      {
        output: "occultism:iesnium_nugget",
        fluid: "kubejs:molten_iesnium",
        multiCast: "tconstruct:nugget_cast",
        amount: 10,
      },

      {
        output: "blue_skies:ventium_ingot",
        fluid: "kubejs:molten_ventium",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },
      {
        output: "occultism:iesnium_ingot",
        fluid: "kubejs:molten_iesnium",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },
      {
        output: "blue_skies:ventium_nugget",
        fluid: "kubejs:molten_ventium",
        multiCast: "tconstruct:nugget_cast",
        amount: 10,
      },

      {
        output: "rankine:mercury",
        fluid: "rankine:liquid_mercury",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },
      {
        output: "rankine:mercury_nugget",
        fluid: "rankine:liquid_mercury",
        multiCast: "tconstruct:nugget_cast",
        amount: 10,
      },

      {
        output: "undergarden:froststeel_nugget",
        fluid: "kubejs:molten_froststeel",
        multiCast: "tconstruct:nugget_cast",
        amount: 10,
      },
      {
        output: "undergarden:froststeel_ingot",
        fluid: "kubejs:molten_froststeel",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },

      {
        output: "undergarden:cloggrum_nugget",
        fluid: "kubejs:molten_cloggrum",
        multiCast: "tconstruct:nugget_cast",
        amount: 10,
      },
      {
        output: "undergarden:cloggrum_ingot",
        fluid: "kubejs:molten_cloggrum",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },

      {
        output: "undergarden:regalium_crystal",
        fluid: "kubejs:molten_regalium",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },

      {
        output: "undergarden:forgotten_nugget",
        fluid: "kubejs:molten_forgotten_metal",
        multiCast: "tconstruct:nugget_cast",
        amount: 10,
      },
      {
        output: "undergarden:forgotten_ingot",
        fluid: "kubejs:molten_forgotten_metal",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },

      {
        output: "undergarden:utherium_crystal",
        fluid: "kubejs:molten_utherium",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },
      {
        output: "undergarden:utheric_shard",
        fluid: "kubejs:molten_utherium",
        multiCast: "tconstruct:nugget_cast",
        amount: 10,
      },

      {
        output: "blue_skies:horizonite_nugget",
        fluid: "kubejs:molten_horizonite",
        multiCast: "tconstruct:nugget_cast",
        amount: 10,
      },
      {
        output: "blue_skies:horizonite_ingot",
        fluid: "kubejs:molten_horizonite",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },

      {
        output: "twilightforest:ironwood_ingot",
        fluid: "kubejs:molten_ironwood",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },

      {
        output: "twilightforest:steeleaf_ingot",
        fluid: "kubejs:molten_steeleaf",
        multiCast: "tconstruct:ingot_cast",
        amount: 90,
      },
    ]);
});
