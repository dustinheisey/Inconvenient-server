onEvent("recipes", (event) => {
  new recipes(event)
    .setType("occultism:spirit_fire")
    .setFunction((config) =>
      event.custom({
        type: "occultism:spirit_fire",
        ingredient: {
          item: config.input,
        },
        result: {
          item: config.output,
        },
      })
    )
    .modifyOutputs([
      {
        input: "malum:block_of_arcane_charcoal",
        output: "occultism:otherworld_ashes",
      },
      {
        input: "minecraft:ink_sac",
        output: "occultism:purified_ink",
      },
      {
        input: "blue_skies:charoite",
        output: "occultism:spirit_attuned_gem",
      },
      {
        input: "blue_skies:crescent_fruit_sapling",
        output: "hexerei:willow_sapling",
      },
      {
        input: "minecraft:crimson_fungus",
        output: "hexerei:mahogany_sapling",
      },
      {
        input: "twilightforest:torchberries",
        output: "hexerei:yellow_dock_leaves",
      },
      {
        input: "hexerei:yellow_dock_leaves",
        output: "hexerei:yellow_dock_flowers",
      },
      {
        input: "hexerei:mandrake_root",
        output: "hexerei:mandrake_flowers",
      },
      {
        input: "minecraft:cocoa_beans",
        output: "hexerei:mugwort_leaves",
      },
      {
        input: "hexerei:mugwort_leaves",
        output: "hexerei:mugwort_flowers",
      },
      {
        input: "undergarden:gloomgourd_seeds",
        output: "hexerei:belladonna_flowers",
      },
      {
        input: "hexerei:belladonna_flowers",
        output: "hexerei:belladonna_berries",
      },
    ]);
});
