onEvent("recipes", (event) => {
  new recipes(event)
    .setType("charcoal_pit:blooming")
    .setFunction((config) =>
      event.custom({
        type: "charcoal_pit:blooming",
        ingredient: {
          item: config.input,
        },
        result: config.output,
        experience: 0.7,
        cookingtime: 200,
      })
    )
    .removeInputs([
      "minecraft:iron_ore",
      "minecraft:deepslate_iron_ore",
      "minecraft:raw_iron",
    ])
    .add([
      {
        input: "ecofriendly:smelted_iron_can_ym",
        output: "minecraft:iron_nugget",
      },
    ]);
});
