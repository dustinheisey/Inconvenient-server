onEvent("recipes", (event) => {
  new recipes(event)
    .setFunction((config) => {
      event.shaped(
        `kubejs:lost_story_${config.dimension}`,
        ["abb", "bcc", "bcc"],
        {
          a: "paragon_textiles:silk",
          b: "minecraft:leather",
          c: `kubejs:lost_page_${config.dimension}`,
        }
      );
    })
    .add([
      {
        dimension: "everbright",
      },
      {
        dimension: "undergarden",
      },
      {
        dimension: "everdawn",
      },
      {
        dimension: "twilight",
      },
      {
        dimension: "nether",
      },
      {
        dimension: "blueleaf",
      },
    ]);
});

onEvent("item.right_click", (event) => {
  [
    "everbright",
    "undergarden",
    "everdawn",
    "twilight",
    "nether",
    "blueleaf",
  ].forEach((dimension) => {
    if (event.item.id == `kubejs:lost_story_${dimension}`) {
      event.item.count--;
      event.cancel();
    }
  });
});
