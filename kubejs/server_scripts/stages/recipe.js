// priority: 201

onEvent("recipes", (event) => {
  function stageRecipes(stage, targets) {
    targets.forEach((target) => {
      event.forEachRecipe(target, (recipe) => {
        recipe.stage(stage);
        recipe.save();
      });
    });
  }

  stages.forEach((stage) => {
    event.forEachRecipe(
      {
        output: `#im:${stage}`,
        or: [
          {
            type: "minecraft:crafting_shaped",
          },
          {
            type: "minecraft:crafting_shapeless",
          },
        ],
      },
      (recipe) => {
        recipe.stage(stage);
      }
    );
  });

  stageRecipes("stage_2", [
    {
      input: [
        "paraglider:deku_leaf",
        "minecraft:bone_meal",
        "farmersdelight:safety_net",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
    {
      output: [
        "minecraft:red_terracotta",
        "paraglider:deku_leaf",
        "minecraft:stone_bricks",
        "minecraft:mossy_stone_bricks",
        "smallships:sail",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
  ]);

  stageRecipes("stage_3", [
    {
      input: [
        "hexerei:herb_drying_rack_full",
        "paragon_textiles:silk_wisps",
        "create:powdered_obsidian",
        "#create:seats",
        "minecraft:black_dye",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
    {
      output: [
        "#forge:bookshelves",
        "blue_skies:glowing_nature_stone",
        "blue_skies:glowing_blinding_stone",
        "minecraft:terracotta",
        "minecraft:white_terracotta",
        "minecraft:orange_terracotta",
        "minecraft:magenta_terracotta",
        "minecraft:light_blue_terracotta",
        "minecraft:lime_terracotta",
        "minecraft:gray_terracotta",
        "minecraft:light_gray_terracotta",
        "minecraft:cyan_terracotta",
        "minecraft:yellow_terracotta",
        "minecraft:black_terracotta",
        "minecraft:pink_terracotta",
        "minecraft:green_terracotta",
        "minecraft:brown_terracotta",
        "minecraft:blue_terracotta",
        "minecraft:purple_terracotta",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
    {
      output: [
        "minecraft:dark_oak_pressure_plate",
        "minecraft:acacia_pressure_plate",
        "minecraft:jungle_pressure_plate",
        "minecraft:birch_pressure_plate",
        "minecraft:spruce_pressure_plate",
        "minecraft:oak_pressure_plate",
        "minecraft:dark_oak_button",
        "minecraft:acacia_button",
        "minecraft:jungle_button",
        "minecraft:birch_button",
        "minecraft:spruce_button",
        "minecraft:oak_button",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
  ]);

  stageRecipes("stage_4", [
    {
      input: [
        "tconstruct:necrotic_bone",
        "create:furnace_minecart_contraption",
        "paragon_textiles:wood_bleach",
        "paragon_textiles:wood_stain",
        "rankine:aluminum_nugget",
        "create:andesite_alloy",
        "minecraft:golden_apple",
        "realistictorches:glowstone_crystal",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
    {
      output: [
        "create:hand_crank",
        "minecraft:smoker",
        "minecraft:fletching_table",
        "minecraft:stonecutter",
        "create:shaft",
        "create:cogwheel",
        "minecraft:blast_furnace",
        "minecraft:grindstone",
        "create:large_cogwheel",
        "create:millstone",
        "minecraft:cartography_table",
        "minecraft:piston",
        "architects_palette:plating_block",
        "architects_palette:pipe",
        "cataclysm:ignitium_block",
        "cataclysm:witherite_block",
        "rankine:aluminum_sheetmetal",
        "rankine:iron_sheetmetal",
        "rankine:copper_sheetmetal",
        "rankine:lead_sheetmetal",
        "minecraft:smooth_quartz",
        "minecraft:smooth_quartz_stairs",
        "create:andesite_alloy",
        "minecraft:magma_block",
        "naturesaura:crimson_meal",
        "minecraft:enchanted_golden_apple",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
  ]);

  stageRecipes("stage_5_1", [
    {
      input: [
        "minecraft:waxed_copper_block",
        "#minecraft:wool",
        "botania:mana_string",
        "minecraft:ender_pearl",
        "naturesaura:token_euphoria",
        "naturesaura:token_terror",
        "naturesaura:token_rage",
        "naturesaura:token_grief",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
    {
      output: ["blue_skies:trough", "#minecraft:wool", "minecraft:black_bed"],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
    {
      input: Item.of("productivebees:stone_chip").ignoreNBT(),
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
    {
      input: Item.of("productivebees:wood_chip").ignoreNBT(),
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
    {
      input: "@productivebees",
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
  ]);

  stageRecipes("stage_5_2", [
    { id: "rankine:crafting/tree_tap" },
    { id: "immersiveengineering:crafting/torch" },
    {
      output: [
        "pneumaticcraft:wall_lamp_inverted_white",
        "pneumaticcraft:display_table",
        "create:display_board",
        "create:display_link",
        "pneumaticcraft:aerial_interface",
        "create:mechanical_arm",
        "createaddition:rolling_mill",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
    {
      input: [
        "rankine:steel_nugget",
        "rankine:subbituminous_coal",
        "rankine:lignite",
        "rankine:coke",
        "rankine:bituminous_coal",
        "rankine:anthracite_coal",
        "immersiveengineering:creosote_bucket",
        "rankine:graphite_electrode",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
  ]);

  stageRecipes("stage_7", [
    {
      input: [
        "rankine:perlite",
        "rankine:saltpeter",
        "rankine:stainless_steel",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
  ]);

  stageRecipes("stage_7_1", [
    {
      input: [
        "ecofriendly:garbage_item_ym",
        "rankine:pumice_soap",
        "rankine:cadmium_telluride_cell",
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
    {
      output: ["ecofriendly:oil_drum_ym"],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
  ]);

  stageRecipes("stage_7_2", [
    {
      input: "@biomancy",
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
  ]);
});
