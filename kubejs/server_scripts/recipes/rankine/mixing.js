onEvent("recipes", (event) => {
  new recipes(event)
    .setType("rankine:mixing")
    .setFunction((config) => {
      let json = {
        type: "rankine:mixing",
        mixTime: 100,
        ingredientTotal: config.inputs.length,
        matScale: 1,
        fluidInput: {
          fluid: config.fluid_input.id,
          amount: config.fluid_input.amount || 1000,
        },
        result: {
          item: config.output,
        },
      };

      config.inputs.forEach((input, index) => {
        let input_json = {
          required: true,
          min: input.min,
          max: input.max,
        };

        if (input.id) input_json.item = input.id;
        else if (input.tag) input_json.tag = input.tag;

        json[`input${index + 1}`] = input_json;
      });

      event.custom(json);
    })
    .removeOutputs([
      "rankine:unaged_cheese",
      "rankine:tofu",
      "rankine:pumice_soap",
      "rankine:pancake_batter",
      "rankine:fire_clay_ball",
      "rankine:beta_alumina_solid_electrolyte",
      "rankine:dough",
      "rankine:bitumen",
      "rankine:mariposite",
    ])
    .modifyOutputs([
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 50,
        },
        inputs: [
          {
            tag: "minecraft:dirt",
            min: 0.4,
            max: 0.6,
          },
          {
            tag: "minecraft:sand",
            min: 0.4,
            max: 0.6,
          },
          {
            id: "paragon_textiles:plant_fibers",
            min: 0.05,
            max: 0.25,
          },
        ],
        output: "rankine:cob",
      },
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 50,
        },
        inputs: [
          {
            tag: "minecraft:sand",
            min: 0.6,
            max: 0.75,
          },
          {
            id: "rankine:fire_clay_ball",
            min: 0.05,
            max: 0.2,
          },
          {
            id: "paragon_textiles:plant_fibers",
            min: 0.2,
            max: 0.5,
          },
        ],
        output: "rankine:refined_cob",
      },
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 50,
        },
        inputs: [
          {
            id: "blue_skies:crystal_sand",
            min: 0.05,
            max: 0.2,
          },
          {
            id: "blue_skies:taratite",
            min: 0.3,
            max: 0.5,
          },
          {
            id: "blue_skies:moonstone",
            min: 0.1,
            max: 0.2,
          },
          {
            id: "rankine:cement_mix",
            min: 0.3,
            max: 0.5,
          },
        ],
        output: "rankine:roman_concrete",
      },
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 50,
        },
        inputs: [
          {
            tag: "forge:clay_balls",
            min: 0.2,
            max: 0.4,
          },
          {
            tag: "minecraft:sand",
            min: 0.2,
            max: 0.4,
          },
          {
            id: "rankine:galena",
            min: 0.2,
            max: 0.4,
          },
        ],
        output: "rankine:cement_mix",
      },
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 25,
        },
        inputs: [
          {
            id: "rankine:kaolinite",
            min: 0.2,
            max: 0.4,
          },
          {
            id: "blue_skies:crystal_sand",
            min: 0.2,
            max: 0.4,
          },
          {
            id: "blue_skies:aquite",
            min: 0.2,
            max: 0.4,
          },
        ],
        output: "rankine:porcelain_clay_ball",
      },
      {
        fluid_input: {
          id: "minecraft:lava",
          amount: 25,
        },
        inputs: [
          {
            id: "minecraft:clay_ball",
            min: 0.2,
            max: 0.4,
          },
          {
            id: "endrem:undead_soul",
            min: 0.2,
            max: 0.4,
          },
          {
            id: "rankine:smouldering_tinder_conk",
            min: 0.2,
            max: 0.4,
          },
        ],
        output: "rankine:fire_clay_ball",
      },
    ])
    .add([
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 50,
        },
        inputs: [
          {
            tag: "forge:gravel",
            min: 0.4,
            max: 0.6,
          },
          {
            tag: "forge:sand",
            min: 0.2,
            max: 0.3,
          },
          {
            tag: "forge:bitumen",
            min: 0.1,
            max: 0.2,
          },
        ],
        output: "rankine:asphalt",
      },
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 50,
        },
        inputs: [
          {
            tag: "forge:gravel",
            min: 0.4,
            max: 0.6,
          },
          {
            tag: "forge:sand",
            min: 0.2,
            max: 0.3,
          },
          {
            tag: "forge:bitumen",
            min: 0.1,
            max: 0.2,
          },
          {
            id: "rankine:black_dacite",
            min: 0.1,
            max: 0.2,
          },
        ],
        output: "rankine:blue_asphalt",
      },
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 50,
        },
        inputs: [
          {
            tag: "forge:gravel",
            min: 0.4,
            max: 0.6,
          },
          {
            tag: "forge:sand",
            min: 0.2,
            max: 0.3,
          },
          {
            tag: "forge:bitumen",
            min: 0.1,
            max: 0.2,
          },
          {
            id: "rankine:black_marble",
            min: 0.1,
            max: 0.2,
          },
        ],
        output: "rankine:dark_gray_asphalt",
      },
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 50,
        },
        inputs: [
          {
            tag: "forge:gravel",
            min: 0.4,
            max: 0.6,
          },
          {
            tag: "forge:sand",
            min: 0.2,
            max: 0.3,
          },
          {
            tag: "forge:bitumen",
            min: 0.1,
            max: 0.2,
          },
          {
            tag: "forge:stones/andesite",
            min: 0.1,
            max: 0.2,
          },
        ],
        output: "rankine:gray_asphalt",
      },
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 50,
        },
        inputs: [
          {
            tag: "forge:gravel",
            min: 0.4,
            max: 0.6,
          },
          {
            tag: "forge:sand",
            min: 0.2,
            max: 0.3,
          },
          {
            tag: "forge:bitumen",
            min: 0.1,
            max: 0.2,
          },
          {
            tag: "forge:stones/peridotite",
            min: 0.1,
            max: 0.2,
          },
        ],
        output: "rankine:green_asphalt",
      },
      {
        fluid_input: {
          id: "minecraft:water",
          amount: 50,
        },
        inputs: [
          {
            tag: "forge:gravel",
            min: 0.4,
            max: 0.6,
          },
          {
            tag: "forge:sand",
            min: 0.2,
            max: 0.3,
          },
          {
            tag: "forge:bitumen",
            min: 0.1,
            max: 0.2,
          },
          {
            tag: "forge:stones/granite",
            min: 0.1,
            max: 0.2,
          },
        ],
        output: "rankine:red_asphalt",
      },
      {
        fluid_input: { id: "minecraft:water", amount: 20 },
        inputs: [
          { tag: "forge:stones/pumice", min: 0.9, max: 0.95 },
          { tag: "rankine:alkali_hydroxides", min: 0.05, max: 0.1 },
        ],
        output: "rankine:pumice_soap",
      },
      {
        fluid_input: {
          id: "kubejs:tanning_fluid",
          amount: 250,
        },
        inputs: [
          {
            id: "kubejs:dried_hide",
            required: true,
            min: 1.0,
            max: 1.0,
          },
        ],
        output: "kubejs:wet_tanned_hide",
      },
      {
        fluid_input: {
          id: "rankine:resin",
          amount: 250,
        },
        inputs: [
          {
            id: "kubejs:dried_hide",
            required: true,
            min: 1.0,
            max: 1.0,
          },
        ],
        output: "kubejs:wet_tanned_hide",
      },
    ]);
});
