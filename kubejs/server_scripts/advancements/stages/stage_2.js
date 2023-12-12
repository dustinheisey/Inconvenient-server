onEvent("server.datapack.high_priority", (event) => {
  addAdvancements(event, "stage_2", {
    icon: "naturesaura:gold_leaf",
    item: "cold_sweat:hearth",
    title: "Age 2: Occult",
    description: "Answer some questions",
    background: "occultism:textures/block/otherstone.png",
    children: [
      {
        item: "minecraft:iron_hoe",
        title: "Iron Hoe",
        description: "Create an iron hoe",
        children: [
          {
            item: "astikorcarts:plow",
            title: "Plow",
            description: "Craft a plow",
          },
        ],
      },
      {
        item: "rankine:wooden_gold_pan",
        title: "Wooden Gold Pan",
        description: "Craft a wooden gold pan",
        children: [
          {
            item: "rankine:jute",
            title: "Jute",
            description: "Grow some jute",
            children: [
              {
                item: "tconstruct:pattern",
                title: "Pattern",
                description: "Craft a pattern",
                children: [
                  {
                    item: "tconstruct:tinker_station",
                    title: "Tinker Station",
                    description: "Craft a tinker station",
                  },
                ],
              },
            ],
          },
          {
            item: "rankine:compost",
            title: "Compost",
            description: "Collect some compost",
            children: [
              {
                item: "farmersdelight:organic_compost",
                title: "Organic Compost",
                description: "Craft some organic compost",
                children: [
                  {
                    item: "farmersdelight:rich_soil_farmland",
                    title: "Rich Soil Farmland",
                    description: "Develop some rich farmland",
                  },
                ],
              },
            ],
          },
          {
            item: "occultism:datura",
            title: "Demon Dream Fruit",
            description: "Grow some demon dream fruit",
            children: [
              {
                item: "occultism:burnt_otherstone",
                title: "Burnt Otherstone",
                description: "Create some burnt otherstone",
                children: [
                  {
                    item: "tconstruct:seared_bricks",
                    title: "Seared Bricks",
                    description: "Craft some seared bricks",
                    children: [
                      {
                        item: "tconstruct:seared_melter",
                        title: "Seared Melter",
                        description: "Craft a seared melter",
                        children: [
                          {
                            item: "tconstruct:smeltery_controller",
                            title: "Smeltery Controller",
                            description: "Craft a smeltery controller",
                            children: [
                              {
                                item: "glass",
                                title: "Glass",
                                description: "Melt sand and create some glass",
                              },
                              {
                                item: "bucket",
                                title: "Bucket",
                                description: "Craft a bucket",
                              },
                              {
                                item: "tconstruct:ingot_cast",
                                title: "Ingot Cast",
                                description:
                                  "Craft an ingot cast in your smeltery",
                                frame: "goal",
                                children: [
                                  {
                                    item: "rankine:pewter_ingot",
                                    title: "Pewter",
                                    description: "Craft a pewter ingot",
                                    children: [
                                      {
                                        item: "farmersdelight:stove",
                                        title: "Stove",
                                        description: "Craft a stove",
                                        children: [
                                          {
                                            item: "farmersdelight:cooking_pot",
                                            title: "Cooking Pot",
                                            description: "Craft a cooking pot",
                                            children: [
                                              {
                                                item: "farmersdelight:rice_roll_medley_block",
                                                title: "Rice Roll Medley",
                                                description:
                                                  "Make a fish feast",
                                              },
                                            ],
                                          },
                                          {
                                            item: "farmersrespite:kettle",
                                            title: "Kettle",
                                            description: "Craft a kettle",
                                            children: [
                                              {
                                                item: "farmersrespite:coffee",
                                                title: "Coffee",
                                                description:
                                                  "Finally make a cup of coffee",
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        item: "rankine:pewter_gold_pan",
                                        title: "Pewter Gold Pan",
                                        description: "Craft a better gold pan",
                                        children: [
                                          {
                                            item: "kubejs:wheat",
                                            title: "Wheat",
                                            description: "Grow some wheat",
                                            children: [
                                              {
                                                icon: "strawgolem:straw_hat",
                                                title: "Straw Golem",
                                                description:
                                                  "Create a straw golem with hay and a carved pumpkin",
                                                criteria: {
                                                  example: {
                                                    trigger:
                                                      "minecraft:summoned_entity",
                                                    conditions: {
                                                      entity: {
                                                        type: "strawgolem:strawgolem",
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            ],
                                          },
                                          {
                                            item: "paragon_textiles:flax_seeds",
                                            title: "Flax Seeds",
                                            description:
                                              "Find some flax seeds in the soil",
                                            children: [
                                              {
                                                item: "paragon_textiles:wicker",
                                                title: "Wicker",
                                                description:
                                                  "Collect some wicker",
                                                children: [
                                                  {
                                                    item: "paragon_textiles:basket",
                                                    title: "Basket",
                                                    description:
                                                      "Craft a basket",
                                                    children: [
                                                      {
                                                        item: "paragon_textiles:basket_sturdy",
                                                        title: "Sturdy Basket",
                                                        description:
                                                          "Reinforce your basket",
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                item: "paragon_textiles:fabric_red",
                                                title: "Red Fabric",
                                                description:
                                                  "Dye your fabric red",
                                                children: [
                                                  {
                                                    item: "cold_sweat:sewing_table",
                                                    id: "sewing_table",
                                                    title: "Sewing Table",
                                                    description:
                                                      "Craft a sewing table and insulate your armor",
                                                  },
                                                ],
                                              },
                                              {
                                                item: "paragon_textiles:fabric_plain",
                                                title: "Plain Fabric",
                                                description:
                                                  "Craft some plain fabric",
                                                children: [
                                                  {
                                                    item: "ecofriendly:recycled_carrier_bag_ym",
                                                    title:
                                                      "Recyled Carrier Bag",
                                                    description:
                                                      "Transform a plastic bag into a basic backpack",
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: "tconstruct:amethyst_bronze_ingot",
                                    title: "Amethyst Bronze",
                                    description:
                                      "Craft an amethyst bronze ingot",
                                    children: [
                                      {
                                        item: "hexerei:mixing_cauldron",
                                        title: "Mixing Cauldron",
                                        description: "Craft a mixing cauldron",
                                        frame: "goal",
                                        children: [
                                          {
                                            item: "hexerei:candle_dipper",
                                            title: "Candle Dipper",
                                            description:
                                              "Craft a candle dipper",
                                            frame: "goal",
                                            children: [
                                              {
                                                item: "blue_skies:bluebright_sapling",
                                                title: "Bluebright Sapling",
                                                description:
                                                  "Create a bluebright sapling",
                                              },
                                              {
                                                item: "blue_skies:turquoise_stone",
                                                title: "Turquoise stone",
                                                description:
                                                  "Create some turquoise stone",
                                                frame: "goal",
                                                children: [
                                                  {
                                                    icon: "blue_skies:everbright_portal",
                                                    id: "everbright",
                                                    title: "Everbright",
                                                    description:
                                                      "Construct and light a portal to Everbright, then enter",
                                                    frame: "goal",
                                                    criteria: {
                                                      dimension_change: {
                                                        trigger:
                                                          "minecraft:changed_dimension",
                                                        conditions: {
                                                          from: "minecraft:overworld",
                                                          to: "blue_skies:everbright",
                                                        },
                                                      },
                                                    },
                                                    children: [
                                                      {
                                                        item: "blue_skies:loot_bag_summoner",
                                                        title: "Summoner",
                                                        parent: "everbright",
                                                        description:
                                                          "Kill the Summoner",
                                                        children: [
                                                          {
                                                            item: "totemic:medicine_bag",
                                                            title:
                                                              "Medicine Bag",
                                                            description:
                                                              "Collect a medicine bag from the summoner",
                                                          },
                                                          {
                                                            item: "malum:crude_scythe",
                                                            title:
                                                              "Crude Scythe",
                                                            description:
                                                              "Create some candles with the tallow",
                                                            children: [
                                                              {
                                                                item: "malum:sacred_spirit",
                                                                title:
                                                                  "Sacred Spirit",
                                                                description:
                                                                  "Craft a fishing rod",
                                                                children: [
                                                                  {
                                                                    item: "relics:researching_table",
                                                                    title:
                                                                      "Research Table",
                                                                    description:
                                                                      "Craft an research table",
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                item: "hexerei:tallow_bucket",
                                                                title: "Tallow",
                                                                description:
                                                                  "Make some tallow",
                                                                children: [
                                                                  {
                                                                    item: "hexerei:candle",
                                                                    title:
                                                                      "Candle",
                                                                    description:
                                                                      "Create some candles with the tallow",
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: "blue_skies:loot_bag_starlit_crusher",
                                                        title:
                                                          "Starlit Crusher",
                                                        parent: "everbright",
                                                        description:
                                                          "Kill the starlit crusher",
                                                        frame: "goal",
                                                        children: [
                                                          {
                                                            item: "malum:runewood_sapling",
                                                            title:
                                                              "Runewood Sapling",
                                                            description:
                                                              "Collect a runewood sapling from the starlit crusher",
                                                            children: [
                                                              {
                                                                item: "occultism:otherworld_ashes",
                                                                title:
                                                                  "Otherworld Ashes",
                                                                description:
                                                                  "Craft some otherworld ashes",
                                                                children: [
                                                                  {
                                                                    item: "occultism:chalk_white",
                                                                    title:
                                                                      "Chalk",
                                                                    description:
                                                                      "Craft white chalk",
                                                                    children: [
                                                                      {
                                                                        icon: "gateways:gate_pearl",
                                                                        id: "gateways",
                                                                        title:
                                                                          "Aquatic Gate",
                                                                        description:
                                                                          "Open a portal between Everbright and The Overworld",
                                                                        background:
                                                                          "blue_skies:textures/block/stone/turquoise_stone.png",
                                                                        nbt: '{gateway:"gateways:aquatic_gate"}',
                                                                        frame:
                                                                          "challenge",
                                                                        criteria:
                                                                          {
                                                                            gateway:
                                                                              {
                                                                                trigger:
                                                                                  "minecraft:item_used_on_block",
                                                                                conditions:
                                                                                  {
                                                                                    location:
                                                                                      {
                                                                                        dimension:
                                                                                          "minecraft:overworld",
                                                                                      },
                                                                                    item: {
                                                                                      items:
                                                                                        [
                                                                                          "gateways:gate_pearl",
                                                                                        ],
                                                                                      nbt: '{gateway:"gateways:aquatic_gate"}',
                                                                                    },
                                                                                  },
                                                                              },
                                                                          },
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            item: "totemic:totem_whittling_knife",
                                                            title:
                                                              "Totem Whittling Knife",
                                                            frame: "goal",
                                                            description:
                                                              "Collect a totem whittling knife from the starlit crusher",
                                                            children: [
                                                              {
                                                                item: "totemic:cedar_sapling",
                                                                title:
                                                                  "Cedar Sapling",
                                                                frame: "goal",
                                                                description:
                                                                  "Create a cedar sapling",
                                                                children: [
                                                                  {
                                                                    item: "naturesaura:gold_fiber",
                                                                    title:
                                                                      "Gold Fiber",
                                                                    description:
                                                                      "Apply brilliant fibers to tree leaves, and collect some gold fiber",
                                                                    frame:
                                                                      "goal",
                                                                    children: [
                                                                      {
                                                                        item: "naturesaura:wood_stand",
                                                                        title:
                                                                          "Wood Stand",
                                                                        description:
                                                                          "Craft multiple wooden stands",
                                                                        count: 4,
                                                                        frame:
                                                                          "goal",
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: "naturesaura:eye",
                                                                              title:
                                                                                "Environmental Eye",
                                                                              description:
                                                                                "Craft an environmental eye with a ritual of the forest",
                                                                              frame:
                                                                                "challenge",
                                                                              reward:
                                                                                "im:stages/stage_3",
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: "minecraft:heart_of_the_sea",
                                                        parent: "everbright",
                                                        id: "ocean",
                                                        title:
                                                          "Heart of The Sea",
                                                        description:
                                                          "Slay an elder guardian & collect its heart",
                                                      },
                                                      {
                                                        item: "rankine:mercury",
                                                        title: "Mercury",
                                                        parent: "everbright",
                                                        description:
                                                          "Crush some pyrope ore and collect mercury",
                                                        children: [
                                                          {
                                                            item: "cold_sweat:thermometer",
                                                            title:
                                                              "Thermometer",
                                                            description:
                                                              "Forge a thermometer",
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        title: "Lost Page",
                                                        description:
                                                          "Find a page from a lost story",
                                                        parent: "everbright",
                                                        item: "kubejs:lost_page_everbright",
                                                        children: [
                                                          {
                                                            title:
                                                              "A Grandmother's Story",
                                                            frame: "challenge",
                                                            description:
                                                              "Remake the lost story from Everbright",
                                                            item: "kubejs:lost_story_everbright",
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: "rankine:steel_gold_pan",
                                                        title:
                                                          "Falsite Gold Pan",
                                                        description:
                                                          "Upgrade your gold pan",
                                                        parent: "everbright",
                                                        children: [
                                                          {
                                                            item: "rankine:cotton",
                                                            title: "Cotton",
                                                            description:
                                                              "Grow some cotton",
                                                            children: [
                                                              {
                                                                item: "paragon_textiles:silk",
                                                                title: "Silk",
                                                                description:
                                                                  "Craft some silk",
                                                                children: [
                                                                  {
                                                                    item: "fishing_rod",
                                                                    title:
                                                                      "Fishing",
                                                                    description:
                                                                      "Craft a fishing rod",
                                                                  },
                                                                  {
                                                                    icon: "smallships:oak_cog",
                                                                    tag: "im:cogs",
                                                                    title:
                                                                      "Cog",
                                                                    description:
                                                                      "Upgrade a raft into a cog",
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                item: "rankine:gun_cotton",
                                                                title:
                                                                  "Gun Cotton",
                                                                description:
                                                                  "Craft some gun cotton",
                                                                children: [
                                                                  {
                                                                    icon: "totemic:tipi",
                                                                    title:
                                                                      "Bed",
                                                                    description:
                                                                      "Craft a better bed",
                                                                    tag: "minecraft:beds",
                                                                  },
                                                                  {
                                                                    item: "totemic:drum",
                                                                    title:
                                                                      "Drum",
                                                                    description:
                                                                      "Craft a drum",
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            item: "blue_skies:zeal_lighter",
                                            title: "Zeal Lighter",
                                            description: "Craft a zeal lighter",
                                            reward: "im:dimensions/everbright",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: "rankine:sterling_silver_ingot",
                                    title: "Sterling Silver",
                                    description:
                                      "Forge a sterling silver ingot",
                                    children: [
                                      {
                                        item: "rankine:tree_tap",
                                        title: "Tree Tap",
                                        description: "Craft a tree tap",
                                        children: [
                                          {
                                            item: "kubejs:freezing_sap_bucket",
                                            title: "Freezing Sap",
                                            description:
                                              "Collect some freezing sap from a bluebright tree",
                                            children: [
                                              {
                                                item: "rankine:snowflake_obsidian",
                                                title: "Snowflake Obsidian",
                                                description:
                                                  "Cast freezing sap on a piece of obsidian",
                                              },
                                            ],
                                          },
                                          {
                                            item: "rankine:resin_bucket",
                                            title: "Resin",
                                            description:
                                              "Collect resin, a more convenient tanning fluid",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
});
