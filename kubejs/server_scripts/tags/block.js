// priority: 302
onEvent("tags.blocks", (event) => {
  // Define the function to add a tag to all items of another tag
  function addTagToItemsOfAnotherTag(oldTag, newTag) {
    // Get all items of the specified old tag
    const items = event
      .get(oldTag)
      .getObjectIds()
      .forEach((id) => {
        event.add(newTag, id);
      });
  }

  function setMiningLevels(type, ores) {
    ores.forEach((ore) => {
      ["stone", "iron", "diamond"].forEach((type) => {
        event.remove(`minecraft:needs_${type}_tool`, ore);
      });

      event.add(`minecraft:needs_${type}_tool`, ore);
    });
  }

  setMiningLevels("stone", [
    "rankine:malachite_ore",
    "rankine:cassiterite_ore",
    "rankine:native_sulfur_ore",
  ]);

  setMiningLevels("iron", [
    "rankine:plumbago_ore",
    "rankine:acanthite_ore",
    "rankine:sphalerite_ore",
    "rankine:nether_quartz_ore",
    "rankine:bauxite_ore",
    "rankine:galena_ore",
  ]);

  setMiningLevels("diamond", [
    "minecraft:amethyst_cluster",
    "minecraft:large_amethyst_bud",
    "minecraft:medium_amethyst_bud",
    "minecraft:small_amethyst_bud",
    "minecraft:budding_amethyst",
    "minecraft:amethyst_block",
    "blue_skies:horizonite_ore",
    "undergarden:depthrock_regalium_ore",
    "undergarden:shiverstone_regalium_ore",
    "rankine:bauxite_ore",
    "rankine:pentlandite_ore",
    "bloodmagic:dungeon_ore",
    "occultism:iesnium_ore",
  ]);

  event.add("minecraft:base_stone_overworld", "blue_skies:turquoise_stone");
});
