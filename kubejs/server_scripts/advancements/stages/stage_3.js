onEvent("server.datapack.high_priority", (event) => {
  addAdvancements(event, "stage_3", {
    icon: "minecraft:spyglass",
    item: "naturesaura:eye",
    title: "Age 3: Exploration",
    description: "Follow the stories & your nightmares",
    background: "twilightforest:textures/block/mossy_towerwood.png",
    children: [
      {
        item: "chest",
        title: "Chest",
        description: "Craft a chest",
        children: [
          {
            item: "druidcraftrg:crate",
            title: "Crate",
            description: "Upgrade your chest",
          },
        ],
      },
      {
        item: "naturesaura:aura_bottle",
        nbt: '{stored_type:"naturesaura:overworld"}',
        title: "Aura Collection",
        description: "Collect some aura from the overworld",
        frame: "goal",
        children: [
          {
            item: "naturesaura:token_joy",
            title: "Joy Token",
            description: "Create a token of joy",
            frame: "goal",
            children: [
              {
                item: "naturesaura:nature_altar",
                title: "Nature Altar",
                description: "Craft a natural altar",
                frame: "goal",
                children: [
                  {
                    item: "bloodmagic:sacrificialdagger",
                    title: "Sacrificial Knife",
                    description: "Create a sacrificial knife",
                  },
                  {
                    item: "naturesaura:infused_iron",
                    title: "Infused Iron",
                    description: "Infuse some aura into iron",
                    frame: "goal",
                    children: [
                      {
                        item: "hexerei:blood_bottle",
                        title: "Blood",
                        id: "blood",
                        description: "Collect some of your own blood",
                        frame: "goal",
                        children: [
                          {
                            parent: "blood",
                            item: "bloodmagic:altar",
                            title: "Blood Altar",
                            description:
                              "Transform your natural altar with the blood you collected",
                            frame: "goal",
                            children: [
                              {
                                item: "bloodmagic:basemonstersoul",
                                title: "Will",
                                description:
                                  "Extract will using the soul snares",
                                frame: "goal",
                                children: [
                                  {
                                    item: "minecraft:soul_sand",
                                    title: "Soul Sand",
                                    description: "Cast some will onto sand",
                                    children: [
                                      {
                                        item: "minecraft:nether_star",
                                        title: "Wither",
                                        description: "Summon & slay the wither",
                                        children: [
                                          {
                                            item: "chunkloaders:single_chunk_loader",
                                            title: "Chunk Loader",
                                            description:
                                              "Create your first chunk loader",
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    icon: "undergarden:catalyst",
                                    title: "Catalyst",
                                    description:
                                      "Create a catalyst and use it to enter The Undergarden",
                                    frame: "goal",
                                    criteria: {
                                      dimension_change: {
                                        trigger: "minecraft:changed_dimension",
                                        conditions: {
                                          from: "minecraft:overworld",
                                          to: "undergarden:undergarden",
                                        },
                                      },
                                    },
                                    children: [
                                      {
                                        item: "undergarden:regalium_crystal",
                                        title: "Regalium Crystal",
                                        description:
                                          "Collect some regalium crystals",
                                      },
                                      {
                                        item: "undergarden:mogmoss",
                                        title: "Mogmoss",
                                        description: "Collect some mogmoss",
                                        children: [
                                          {
                                            item: "bloodmagic:arcaneashes",
                                            title: "Arcane Ashes",
                                            description:
                                              "Ttransmute the mogmoss into arcane ashes",
                                          },
                                        ],
                                      },
                                      {
                                        item: "undergarden:stripped_grongle_log",
                                        title: "Grongle",
                                        description: "Strip a grongle log",
                                        children: [
                                          {
                                            item: "rankine:sawdust",
                                            title: "Sawdust",
                                            description:
                                              "Crush the log into sawdust",
                                            children: [
                                              {
                                                item: "paper",
                                                title: "Paper",
                                                description:
                                                  "Form a sheet of paper",
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      {
                                        item: "undergarden:forgotten_nugget",
                                        title: "Forgotten Metal",
                                        description:
                                          "Collect some forgotten nuggets",
                                        frame: "challenge",
                                        children: [
                                          {
                                            item: "occultism:satchel",
                                            title: "Substantial Satchel",
                                            description:
                                              "upgrade your bag into a substantial satchel",
                                          },
                                          {
                                            item: "create:andesite_alloy",
                                            title: "Andesite Alloy",
                                            description:
                                              "Cast an andesite alloy",
                                            frame: "goal",
                                            children: [
                                              {
                                                item: "create:millstone",
                                                title: "Millstone",
                                                description:
                                                  "Craft a millstone",
                                                frame: "goal",
                                                children: [
                                                  {
                                                    icon: "rankine:wheat_grain",
                                                    tag: "forge:flour",
                                                    title: "Flour",
                                                    description:
                                                      "Grind some grain in your millstone",
                                                  },
                                                  {
                                                    item: "create:powdered_obsidian",
                                                    title: "Powdered Obsidian",
                                                    description:
                                                      "Grind some blood obsidian in your millstone",
                                                    frame: "goal",
                                                    children: [
                                                      {
                                                        item: "occultism:chalk_purple",
                                                        title: "Purple Chalk",
                                                        description:
                                                          "Craft purple chalk",
                                                        children: [
                                                          {
                                                            item: "occultism:afrit_essence",
                                                            title:
                                                              "Afrit Essence",
                                                            description:
                                                              "Summon an afrit demon an collect it's essence",
                                                          },
                                                          {
                                                            item: "tconstruct:blazing_blood_bucket",
                                                            title:
                                                              "Blazing blood",
                                                            description:
                                                              "Melt some blaze",
                                                          },
                                                        ],
                                                      },

                                                      {
                                                        item: "extendedcrafting:black_iron_ingot",
                                                        title: "Black Iron",
                                                        description:
                                                          "forge a black iron ingot",
                                                        children: [
                                                          {
                                                            item: "extendedcrafting:basic_table",
                                                            title:
                                                              "Basic Table",
                                                            description:
                                                              "Craft a basic table",
                                                            children: [
                                                              {
                                                                item: "piston",
                                                                title: "Piston",
                                                                description:
                                                                  "Craft a piston",
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },

                                                      {
                                                        icon: "blue_skies:everdawn_portal",
                                                        title: "Everdawn",
                                                        description:
                                                          "Construct a portal and enter Everdawn",
                                                        frame: "goal",
                                                        criteria: {
                                                          dimension_change: {
                                                            trigger:
                                                              "minecraft:changed_dimension",
                                                            conditions: {
                                                              from: "minecraft:overworld",
                                                              to: "blue_skies:everdawn",
                                                            },
                                                          },
                                                        },
                                                        children: [
                                                          {
                                                            item: "blue_skies:poison_key",
                                                            title: "Poison Key",
                                                            count: 4,
                                                            description:
                                                              "Collect all 4 poison keys in a poison dungeon",
                                                            children: [
                                                              {
                                                                item: "blue_skies:venom_sac",
                                                                title:
                                                                  "Venom Sac",
                                                                description:
                                                                  "Slay the arachnarch and collect a venom sac",
                                                                children: [
                                                                  {
                                                                    id: "sacrifice",
                                                                    item: "bloodmagic:daggerofsacrifice",
                                                                    title:
                                                                      "Dagger of Sacrifice",
                                                                    description:
                                                                      "Craft a dagger of sacrifice",
                                                                    frame:
                                                                      "challenge",
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                          {
                                                            item: "blue_skies:horizonite_ingot",
                                                            title: "Horizonite",
                                                            description:
                                                              "Forge a horizonite ingot",
                                                            frame: "goal",
                                                            children: [
                                                              {
                                                                item: "bloodmagic:lavacrystal",
                                                                title:
                                                                  "Lava Crystal",
                                                                description:
                                                                  "Craft a lava crystal.",
                                                                frame: "goal",
                                                                reward:
                                                                  "im:dimensions/twilight",
                                                                children: [
                                                                  {
                                                                    icon: "twilightforest:twilight_portal_miniature_structure",
                                                                    title:
                                                                      "Twilight Forest",
                                                                    frame:
                                                                      "goal",
                                                                    description:
                                                                      "Ignite a portal with the lava crystal and enter The Twilight Forest",
                                                                    criteria: {
                                                                      dimension_change:
                                                                        {
                                                                          trigger:
                                                                            "minecraft:changed_dimension",
                                                                          conditions:
                                                                            {
                                                                              from: "minecraft:overworld",
                                                                              to: "twilightforest:twilightforest",
                                                                            },
                                                                        },
                                                                    },
                                                                    children: [
                                                                      {
                                                                        item: "twilightforest:carminite",
                                                                        title:
                                                                          "Carminite",
                                                                        description:
                                                                          "Collect some carminite",
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: "rankine:wood_tier_crushing_head",
                                                                              title:
                                                                                "Crushing Head",
                                                                              description:
                                                                                "Craft a basic crushing head",
                                                                            },
                                                                          ],
                                                                      },
                                                                      {
                                                                        item: "twilightforest:thorn_rose",
                                                                        title:
                                                                          "Final Castle",
                                                                        description:
                                                                          "Find the final castle",
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: "explorerscompass:explorerscompass",
                                                                              title:
                                                                                "Explorers Compass",
                                                                              description:
                                                                                "Slay the final boss & collect an explorer's compass",
                                                                            },
                                                                          ],
                                                                      },
                                                                      {
                                                                        item: "twilightforest:maze_map_focus",
                                                                        title:
                                                                          "Maze Map Focus",
                                                                        description:
                                                                          "Find a maze map focus",
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: "twilightforest:uncrafting_table",
                                                                              title:
                                                                                "Uncrafting",
                                                                              description:
                                                                                "Craft an uncrafting table",
                                                                            },
                                                                          ],
                                                                      },
                                                                      {
                                                                        item: "egg",
                                                                        title:
                                                                          "Egg",
                                                                        description:
                                                                          "Collect an egg from a chicken",
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: "naturesaura:birth_spirit",
                                                                              title:
                                                                                "Birthing Spirit",
                                                                              description:
                                                                                "Collect a birthing spirit by breeding 2 animals",
                                                                            },
                                                                          ],
                                                                      },

                                                                      {
                                                                        item: "twilightforest:fiery_ingot",
                                                                        title:
                                                                          "Fiery Metal",
                                                                        description:
                                                                          "Slay a hydra and forge a fiery ingot",
                                                                        frame:
                                                                          "goal",
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: "create:cinder_flour",
                                                                              title:
                                                                                "Cinder Flour",
                                                                              description:
                                                                                "Grind a fiery ingot into cinder flour",
                                                                              frame:
                                                                                "challenge",
                                                                              reward:
                                                                                "im:stages/stage_4",
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
                                                            item: "blue_skies:blinding_key",
                                                            title:
                                                              "Alchemist Tower",
                                                            description:
                                                              "Obtain all 4 blinding keys in an alchemist towers",
                                                            children: [
                                                              {
                                                                item: "enchanting_table",
                                                                title:
                                                                  "Enchanting Table",
                                                                description:
                                                                  "Find an enchanting table",
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
                              {
                                item: "bloodmagic:incensealtar",
                                title: "Incense Altar",
                                description: "Craft an incense altar",
                              },
                              {
                                item: "rankine:blood_obsidian",
                                title: "Blood Obsidian",
                                description:
                                  "Infuse some snowflake obsidian with blood",
                              },
                              {
                                item: "bloodmagic:blankslate",
                                title: "Blank Slate",
                                description: "Create a blank slate",
                                reward: "im:dimensions/undergarden",
                              },
                              {
                                item: "bloodmagic:weakbloodorb",
                                title: "Weak Blood Orb",
                                description: "Create a blood orb",
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
            item: "occultism:crushed_end_stone",
            title: "Crushed End Stone",
            description: "Collect & crush some end stone",
            children: [
              {
                item: "occultism:chalk_gold",
                title: "Golden Chalk",
                description: "Craft some golden chalk",
                children: [
                  {
                    item: "wither_skeleton_skull",
                    title: "Wither Skull",
                    description: "Collect a wither skull from the wild hunt",
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
