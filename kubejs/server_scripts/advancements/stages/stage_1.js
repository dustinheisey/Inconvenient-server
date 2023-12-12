onEvent("server.datapack.high_priority", (event) => {
  addAdvancements(event, "stage_1", {
    icon: "paragon_textiles:plant_fibers",
    title: "Age 1: Survival",
    description: "Find food and a stable temperature",
    background: "rankine:textures/block/humus_mud.png",
    criteria: {
      spawn: {
        trigger: "minecraft:location",
        orb: false,
        conditions: {
          dimension: "overworld",
        },
      },
    },
    reward: "im:stages/stage_1",
    children: [
      {
        id: "first_night",
        hide: true,
        orb: false,
        criteria: {
          night: {
            trigger: "minecraft:tick",
            conditions: {
              player: [
                {
                  condition: "minecraft:time_check",
                  value: {
                    min: 500,
                  },
                },
              ],
            },
          },
        },
      },
      {
        hide: true,
        id: "zombies",
        criteria: {
          kill: {
            trigger: "minecraft:player_killed_entity",
            conditions: {
              entity: {
                type: "minecraft:zombie",
              },
            },
          },
        },
      },
      {
        item: "ecofriendly:iron_can_ym",
        id: "trash",
        title: "Trash",
        description: "Gather some debris from the ground",
      },
      {
        item: "flint",
        title: "Flint",
        description: "Find some flint",
        frame: "goal",
        children: [
          {
            item: "rankine:flint_knife",
            title: "Flint Knife",
            description: "Craft a crude flint knife",
            frame: "goal",
            children: [
              {
                item: "farmersdelight:rope",
                title: "Rope",
                description: "Collect plant fiber and craft a rope",
                frame: "goal",
                children: [
                  {
                    item: "rankine:flint_spear",
                    title: "Flint Spear",
                    description: "Craft a crude flint spear",
                    children: [
                      {
                        item: "minecraft:rotten_flesh",
                        title: "Living Flesh",
                        description: "Gather some rotten flesh from the undead",
                        children: [
                          {
                            item: "kubejs:stitched_hide",
                            title: "Stitched Hide",
                            description: "Stitch the flesh together",
                            children: [
                              {
                                item: "kubejs:salted_hide",
                                title: "Salted Hide",
                                description: "Salt the hide",
                                children: [
                                  {
                                    item: "kubejs:dried_hide",
                                    title: "Dried Hide",
                                    description: "Dry the salted hide",
                                    children: [
                                      {
                                        item: "kubejs:wet_tanned_hide",
                                        title: "Wet Tanned Hide",
                                        description: "Tan the dried hide",
                                        children: [
                                          {
                                            item: "minecraft:leather",
                                            title: "Leather",
                                            description:
                                              "Dry the tanned hide and collect the finished leather",
                                            children: [
                                              {
                                                item: "paraglider:paraglider",
                                                title: "Paraglider",
                                                description:
                                                  "Craft a paraglider",
                                              },
                                              {
                                                item: "charcoal_pit:bellows",
                                                title: "Bellows",
                                                description:
                                                  "Craft some bellows",
                                              },
                                              {
                                                item: "comforts:sleeping_bag_white",
                                                title: "Sleeping Bag",
                                                description:
                                                  "Craft a sleeping bag",
                                              },
                                              {
                                                icon: "leather_helmet",
                                                title: "Leather Armor",
                                                frame: "challenge",
                                                description:
                                                  "Craft your first piece of armor",
                                                tag: "im:leather_armor",
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
                        item: "butchercraft:brain",
                        title: "Rotten Brain",
                        description: "Collect a rotten brain from the undead",
                        children: [
                          {
                            item: "ceramicbucket:ceramic_bucket",
                            nbt: '{Fluid:{Amount:1000,FluidName:"kubejs:tanning_fluid"}}',
                            title: "Tanning Fluid",
                            description: "Brew tanning fluid from the brain",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    item: "rankine:prospecting_stick",
                    title: "Prospecting Stick",
                    description:
                      "Craft a prospecting stick to help you find ores",
                  },
                  {
                    item: "rankine:flint_pickaxe",
                    title: "Flint Pickaxe",
                    description: "Create a crude flint pickaxe",
                    children: [
                      {
                        item: "salt:raw_rock_salt",
                        title: "Rock Salt",
                        description:
                          "Find some rock salt underground in a dripstone cave, ocean or beach",
                        children: [
                          {
                            item: "salt:salt",
                            title: "Salt",
                            description:
                              "Collect some salt from the raw rock salt",
                          },
                        ],
                      },
                      {
                        item: "rankine:stone_hammer",
                        title: "Stone hammer",
                        description: "Construct a stone hammer",
                        children: [
                          {
                            item: "rankine:malachite",
                            title: "Malachite",
                            description:
                              "Collect a chunk of malachite from a swamp",
                            children: [
                              {
                                item: "minecraft:copper_ingot",
                                title: "Copper Ingot",
                                description:
                                  "Process the malachite into copper",
                                children: [
                                  {
                                    item: "depthmeter:depthmeter",
                                    title: "Depthmeter",
                                    description:
                                      "Craft a depthmeter to help you find ores underground",
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            item: "rankine:cassiterite",
                            title: "Cassiterite",
                            description:
                              "Collect a chunk of cassiterite from a taiga",
                            children: [
                              {
                                item: "rankine:tin_ingot",
                                title: "Tin Ingot",
                                description: "Process the cassiterite into tin",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    item: "rankine:flint_axe",
                    title: "Flint Axe",
                    description: "Create a crude flint axe",
                    frame: "goal",
                    children: [
                      {
                        icon: "oak_log",
                        title: "Log",
                        description: "Chop down a tree",
                        tag: "minecraft:logs",
                        frame: "goal",
                        children: [
                          {
                            item: "charcoal_pit:log_pile",
                            title: "Charcoal Pit",
                            description:
                              "Create a log pile, bury it, and start a fire",
                            frame: "goal",
                            children: [
                              {
                                item: "charcoal",
                                title: "Charcoal",
                                description: "Collect some charcoal",
                                frame: "goal",
                                children: [
                                  {
                                    item: "campfire",
                                    title: "Campfire",
                                    description: "Craft a campfire",
                                    frame: "goal",
                                    children: [
                                      {
                                        item: "furnace",
                                        title: "Furnace",
                                        description: "Craft a furnace",
                                        frame: "goal",
                                        children: [
                                          {
                                            item: "charcoal_pit:alloy_mold",
                                            title: "Alloy Mold",
                                            description: "Craft an alloy mold",
                                            frame: "goal",
                                            children: [
                                              {
                                                item: "rankine:bronze_ingot",
                                                title: "Bronze",
                                                description:
                                                  "Forge a bronze ingot",
                                                frame: "goal",
                                                children: [
                                                  {
                                                    item: "charcoal_pit:bloomeryy",
                                                    title: "Bloomery",
                                                    frame: "goal",
                                                    description:
                                                      "Create a bloomery",
                                                    children: [
                                                      {
                                                        item: "iron_ingot",
                                                        title: "Iron",
                                                        frame: "goal",
                                                        description:
                                                          "Forge an iron ingot",
                                                        children: [
                                                          {
                                                            item: "minecraft:cauldron",
                                                            title: "Cauldron",
                                                            description:
                                                              "Craft a cauldron to make salt easier",
                                                          },
                                                          {
                                                            item: "cold_sweat:hearth",
                                                            id: "hearth",
                                                            title: "Hearth",
                                                            description:
                                                              "Craft a hearth",
                                                            frame: "challenge",
                                                            reward:
                                                              "im:stages/stage_2",
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: "rankine:bronze_hammer",
                                                    title: "Bronze Hammer",
                                                    description:
                                                      "Craft a bronze hammer",
                                                    children: [
                                                      {
                                                        item: "hexerei:selenite_shard",
                                                        title: "Selenite",
                                                        description:
                                                          "Find a geode deep under a jungle or swamp & collect some selenite shards",
                                                      },
                                                      {
                                                        item: "rankine:graphite",
                                                        title: "Graphite",
                                                        description:
                                                          "Find plumbago in an extreme hills and collect a piece of graphite",
                                                        children: [
                                                          {
                                                            item: "paraglider:goddess_statue",
                                                            id: "goddess_statue",
                                                            title:
                                                              "Goddess Statue",
                                                            description:
                                                              "Construct a goddess statue",
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: "rankine:galena",
                                                        title: "Galena",
                                                        description:
                                                          "Collect a chunk of galena from the bottom of a swamp",
                                                        children: [
                                                          {
                                                            item: "rankine:lead_ingot",
                                                            title: "Lead Ingot",
                                                            description:
                                                              "Process the galena into lead",
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: "rankine:acanthite",
                                                        title: "Acanthite",
                                                        description:
                                                          "Collect a chunk of acanthite from the bottom of a desert",
                                                        children: [
                                                          {
                                                            item: "rankine:silver_ingot",
                                                            title:
                                                              "Silver Ingot",
                                                            description:
                                                              "Process the acanthite into silver",
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: "minecraft:amethyst_shard",
                                                        title: "Amethyst",
                                                        description:
                                                          "Find a geode deep underground & collect some amethyst shards",
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            icon: "charcoal_pit:ceramic_pot",
                                            title: "Ceramic Vessel",
                                            description:
                                              "Craft a ceramic vessel",
                                            tag: "charcoal_pit:ceramic_pots",
                                          },
                                          {
                                            item: "rankine:refractory_brick",
                                            title: "Refractory Brick",
                                            description:
                                              "Fire a refractory brick",
                                            children: [
                                              {
                                                item: "rankine:refractory_bricks",
                                                title: "Refractory Bricks",
                                                description:
                                                  "Craft some refractory bricks",
                                                children: [
                                                  {
                                                    item: "rankine:beehive_oven_pit",
                                                    title: "Beehive Oven",
                                                    description:
                                                      "Create a beehive oven",
                                                    children: [
                                                      {
                                                        item: "rankine:bone_char",
                                                        title: "Bone Char",
                                                        description:
                                                          "Cook some bones in a beehive oven",
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: "rankine:ultra_high_refractory_bricks",
                                                    title:
                                                      "Ultra High Refractory Bricks",
                                                    description:
                                                      "Craft some ultra high refractory bricks",
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            icon: "ceramicbucket:ceramic_bucket",
                                            title: "Ceramic Vessel",
                                            description:
                                              "Craft a ceramic vessel",
                                            tag: "charcoal_pit:ceramic_pots",
                                          },
                                          {
                                            item: "thirst:terracotta_water_bowl",
                                            nbt: "{Purity:3}",
                                            title: "Pure Water",
                                            description:
                                              "Collect some water and purify it fully",
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
                            item: "crafting_table",
                            title: "Crafting Table",
                            description: "Craft a crafting table",
                            children: [
                              {
                                icon: "justaraftmod:oak_raft",
                                tag: "im:rafts",
                                title: "Raft",
                                description: "Craft a basic raft",
                              },
                              {
                                item: "hexerei:herb_drying_rack",
                                title: "Drying Rack",
                                description: "Craft a drying rack",
                                children: [
                                  {
                                    item: "cold_sweat:waterskin",
                                    id: "waterskin",
                                    title: "Waterskin",
                                    description: "Craft a few waterskins",
                                  },
                                  {
                                    item: "realistictorches:matchbox",
                                    title: "Matchbox",
                                    description: "Craft a matchbox",
                                    children: [
                                      {
                                        title: "Torch",
                                        description:
                                          "Craft a torch and light it on fire",
                                        icon: "realistictorches:lit_torch",
                                        criteria: {
                                          matchbox: {
                                            trigger:
                                              "minecraft:item_used_on_block",
                                            conditions: {
                                              item: {
                                                items: [
                                                  "realistictorches:matchbox",
                                                ],
                                              },
                                              location: {
                                                block: {
                                                  item: "realistictorches:unlit_torch",
                                                },
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
                        ],
                      },
                      {
                        item: "rankine:cork",
                        title: "Cork",
                        description: "Collect some cork from a cork oak tree",
                        children: [
                          {
                            item: "charcoal_pit:barrel",
                            title: "Brewing Barrel",
                            description: "Craft a brewing barrel",
                            children: [
                              {
                                item: "rankine:mixing_barrel",
                                title: "Mixing Barrel",
                                description: "Craft a mixing barrel",
                                children: [
                                  {
                                    item: "rankine:mortar",
                                    title: "Mortar",
                                    description: "Mix some mortar",
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
                    item: "hexerei:dowsing_rod",
                    title: "Dowsing Rod",
                    description:
                      "Create a dowsing rod & use it to find a swamp",
                    children: [
                      {
                        item: "naturescompass:naturescompass",
                        title: "Nature's Compass",
                        description:
                          "Craft a nature's compass & use it to find a badlands",
                        children: [
                          {
                            id: "city",
                            item: "endrem:undead_soul",
                            title: "Undead Soul",
                            description:
                              "Collect a soul from a flesh blob in the lost city",
                            children: [
                              {
                                parent: "city",
                                item: "antiqueatlas:empty_antique_atlas",
                                title: "Antique Atlas",
                                description:
                                  "Craft an Antique Atlas with the undead soul",
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
