onEvent("server.datapack.high_priority", (event) => {
  addAdvancements(event, "stories", {
    icon: "kubejs:lost_page_everbright",
    item: "kubejs:lost_story_everbright",
    title: "Collection: Lost Stories",
    background: "blue_skies:textures/block/wood/starlit_planks.png",
    children: [
      {
        id: "blueleaf",
        title: "Welcome to Blueleaf",
        description: "Gather all lost pages in Blueleaf",
        item: "kubejs:lost_story_blueleaf",
      },
      {
        id: "nether",
        title: "A Dire Warning",
        description: "Gather all lost pages in The Nether",
        item: "kubejs:lost_story_nether",
      },
      {
        id: "twilight",
        description: "Gather all lost pages in The Twilight Forest",
        item: "kubejs:lost_story_twilight",
        title: "The Rise of A Dictator",
      },
      {
        id: "everdawn",
        title: "Climate Chaos",
        description: "Gather all lost pages in Everdawn",
        item: "kubejs:lost_story_everdawn",
      },
      {
        id: "everbright",
        title: "A Grandmother's Story",
        description: "Gather all lost pages in Everbright",
        item: "kubejs:lost_story_everbright",
      },
      {
        id: "undergarden",
        title: "A Virus",
        description: "Gather all lost pages in The Undergarden",
        item: "kubejs:lost_story_undergarden",
      },
    ],
  });
});
