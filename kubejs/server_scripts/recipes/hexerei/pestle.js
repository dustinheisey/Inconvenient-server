onEvent("recipes", (event) => {
  new recipes(event)
    .setType("hexerei:pestle_and_mortar")
    .setFunction((config) => {
      let json = {
        type: "hexerei:pestle_and_mortar",
        ingredients: [],
        output: config.output,
        grindingTime: 300,
      };

      config.inputs.forEach((id) => {
        json.ingredients.push({
          item: id,
        });
      });

      event.custom(json);
    })
    .modifyOutputs([
      {
        output: { item: "naturesaura:gold_powder" },
        inputs: ["naturesaura:gold_leaf"],
        global: true,
      },
      {
        output: { item: "charcoal_pit:nether_shard", count: 3 },
        inputs: ["minecraft:nether_star"],
        global: true,
      },
      {
        output: { item: "naturesaura:gold_fiber" },
        inputs: [
          "blue_skies:winter_leaves",
          "blue_skies:snowbloom",
          "blue_skies:brumble_vine_top",
          "totemic:cedar_leaves",
          "blue_skies:snowcap_pinhead",
        ],
        global: true,
      },
    ]);
});
