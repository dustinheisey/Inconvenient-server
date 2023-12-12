onEvent("recipes", (event) => {
  event.remove([
    {
      id: [
        "rankine:brass_ingot_from_brass_block",
        "rankine:brass_ingot_from_brass_nugget",
        "rankine:brass_block",
        "rankine:brass_nugget",
        "rankine:steel_ingot_from_steel_block",
        "rankine:steel_ingot_from_steel_nugget",
        "rankine:steel_block",
        "rankine:steel_nugget",
        "minecraft:iron_nugget",
      ],
    },
    {
      output: [
        Item.of("rankine:lead_nugget").ignoreNBT(),
        Item.of("rankine:tin_nugget").ignoreNBT(),
        Item.of("rankine:silver_nugget").ignoreNBT(),
        Item.of("rankine:copper_nugget").ignoreNBT(),
        Item.of("rankine:bronze_nugget").ignoreNBT(),
        Item.of("minecraft:iron_ingot").ignoreNBT(),
        Item.of("minecraft:copper_ingot").ignoreNBT(),
        Item.of("rankine:bronze_ingot").ignoreNBT(),
        Item.of("rankine:silver_ingot").ignoreNBT(),
        Item.of("rankine:tin_ingot").ignoreNBT(),
        Item.of("rankine:lead_ingot").ignoreNBT(),
        Item.of("minecraft:iron_block").ignoreNBT(),
        Item.of("minecraft:copper_block").ignoreNBT(),
        Item.of("rankine:bronze_block").ignoreNBT(),
        Item.of("rankine:silver_block").ignoreNBT(),
        Item.of("rankine:tin_block").ignoreNBT(),
        Item.of("rankine:lead_block").ignoreNBT(),
        Item.of("rankine:brass_nugget").ignoreNBT(),
        Item.of("rankine:brass_block").ignoreNBT(),
        Item.of("rankine:uranium_nugget").ignoreNBT(),
        Item.of("rankine:nickel_nugget").ignoreNBT(),
        Item.of("rankine:steel_ingot").ignoreNBT(),
        Item.of("rankine:uranium_ingot").ignoreNBT(),
        Item.of("rankine:nickel_ingot").ignoreNBT(),
        Item.of("rankine:brass_ingot").ignoreNBT(),
      ],
      or: [
        { type: "minecraft:crafting_shaped" },
        { type: "minecraft:crafting_shapeless" },
      ],
    },
  ]);

  [
    "rankine:lead",
    "rankine:tin",
    "rankine:silver",
    "rankine:bronze",
    "minecraft:iron",
    "rankine:uranium",
    "rankine:nickel",
    "rankine:steel",
    "rankine:brass",
  ].forEach((metal) => {
    event.shapeless(`9x ${metal}_nugget`, [`${metal}_ingot`]);
    event.shapeless(`9x ${metal}_ingot`, [`${metal}_block`]);
    event.shapeless(`${metal}_block`, [
      `${metal}_ingot`,
      `${metal}_ingot`,
      `${metal}_ingot`,
      `${metal}_ingot`,
      `${metal}_ingot`,
      `${metal}_ingot`,
      `${metal}_ingot`,
      `${metal}_ingot`,
      `${metal}_ingot`,
    ]);
    event.shapeless(`${metal}_ingot`, [
      `${metal}_nugget`,
      `${metal}_nugget`,
      `${metal}_nugget`,
      `${metal}_nugget`,
      `${metal}_nugget`,
      `${metal}_nugget`,
      `${metal}_nugget`,
      `${metal}_nugget`,
      `${metal}_nugget`,
    ]);
  });

  [
    {
      nugget: "rankine:copper_nugget",
      ingot: "minecraft:copper_ingot",
      block: "minecraft:copper_block",
    },
  ].forEach((metal) => {
    event.shapeless(`9x ${metal.nugget}`, [metal.ingot]);
    event.shapeless(`9x ${metal.ingot}`, [metal.block]);
    event.shapeless(metal.block, [
      metal.ingot,
      metal.ingot,
      metal.ingot,
      metal.ingot,
      metal.ingot,
      metal.ingot,
      metal.ingot,
      metal.ingot,
      metal.ingot,
    ]);
    event.shapeless(metal.ingot, [
      metal.nugget,
      metal.nugget,
      metal.nugget,
      metal.nugget,
      metal.nugget,
      metal.nugget,
      metal.nugget,
      metal.nugget,
      metal.nugget,
    ]);
  });
});
