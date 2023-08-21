// priority: 204

onEvent("tags.items", (event) => {
  function stageTags(stage, tags) {
    tags.forEach((tag) => {
      event
        .get(tag)
        .getObjectIds()
        .forEach((id) => {
          stages.forEach((stage) => {
            event.remove(`im:${stage}`, id);
          });
        });
      event.add(`im:${stage}`, `#${tag}`);
    });
  }

  stageTags("stage_1", [
    "create:stone_types/calcite",
    "create:stone_types/deepslate",
    "create:stone_types/asurine",
    "create:stone_types/crimsite",
    "create:stone_types/ochrum",
    "create:stone_types/veridium",
    "create:stone_types/limestone",
  ]);

  stageTags("stage_3", [
    "create:stone_types/granite",
    "create:stone_types/diorite",
    "create:stone_types/andesite",
    "create:stone_types/dripstone",
    "create:stone_types/scoria",
    "create:stone_types/scorchia",
  ]);
  stageTags("stage_4", [
    "tconstruct:foundry",
    "botania:petals",
    "botania:mystical_flowers",
    "botania:double_mystical_flowers",
    "forge:amalgam_tools",
  ]);
  stageTags("stage_5_1", [
    "create:tuff",
    "botania:floating_flowers",
    "chipped:tuff",
    "create:stone_types/tuff",
    "chipped:waxed_copper_block",
    "chipped:waxed_exposed_copper",
    "chipped:waxed_oxidized_copper",
    "chipped:waxed_weathered_copper",
    "chipped:red_carpet",
    "chipped:red_wool",
    "chipped:orange_carpet",
    "chipped:orange_wool",
    "chipped:yellow_carpet",
    "chipped:yellow_wool",
    "chipped:green_carpet",
    "chipped:green_wool",
    "chipped:lime_carpet",
    "chipped:lime_wool",
    "chipped:cyan_carpet",
    "chipped:cyan_wool",
    "chipped:light_blue_carpet",
    "chipped:light_blue_wool",
    "chipped:blue_carpet",
    "chipped:blue_wool",
    "chipped:magenta_carpet",
    "chipped:magenta_wool",
    "chipped:purple_carpet",
    "chipped:purple_wool",
    "chipped:pink_carpet",
    "chipped:pink_wool",
    "chipped:white_carpet",
    "chipped:white_wool",
    "chipped:light_gray_carpet",
    "chipped:light_gray_wool",
    "chipped:gray_carpet",
    "chipped:gray_wool",
    "chipped:black_carpet",
    "chipped:black_wool",
    "chipped:brown_carpet",
    "chipped:brown_wool",
  ]);
  stageTags("stage_5_2", [
    "forge:titanium_alloy_tools",
    "forge:steel_tools",
    "forge:invar_tools",
    "forge:nickel_superalloy_tools",
    "rankine:leds",
  ]);
  stageTags("stage_7_1", [
    "forge:stainless_steel_tools",
    "forge:cobalt_superalloy_tools",
    "forge:tungsten_heavy_alloy_tools",
    "forge:mineral_wool",
    "forge:shulker_boxes",
    "forge:ender_amalgam_tools",
    "forge:osmiridium_tools",
  ]);
});
