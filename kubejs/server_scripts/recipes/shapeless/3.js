onEvent("recipes", (event) => {
  let modify_outputs = [
    {
      output: "farmersdelight:yellow_canvas_sign",
      inputs: ["#farmersdelight:canvas_signs", "minecraft:yellow_dye"],
    },
    {
      output: "rankine:yellow_fiber_block",
      inputs: ["rankine:fiber_block", "minecraft:yellow_dye"],
    },
    {
      output: "rankine:yellow_fiber_mat",
      inputs: ["rankine:fiber_mat", "minecraft:yellow_dye"],
    },
    {
      output: "create:yellow_seat",
      inputs: ["#create:seats", "minecraft:yellow_dye"],
    },
    {
      output: "3x paragon_textiles:silk_wisps",
      inputs: ["blue_skies:spider_webbing"],
    },
  ];

  colors.forEach((color) => {
    if (color !== "red") {
      modify_outputs.push({
        output: `comforts:sleeping_bag_${color}`,
        inputs: ["#im:sleeping_bags", `minecraft:${color}_dye`],
      });
      modify_outputs.push({
        output: `paragon_textiles:fabric_${color}`,
        inputs: ["paragon_textiles:fabric_plain", `minecraft:${color}_dye`],
      });
    }
  });

  new recipes(event)
    .setType("minecraft:crafting_shapeless")
    .setStage("stage_3")
    .setFunction((config) => {
      return event.shapeless(config.output, config.inputs);
    })
    .modifyOutputs(modify_outputs);
});
