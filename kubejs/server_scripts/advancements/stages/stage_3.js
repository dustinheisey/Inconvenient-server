onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'stage_8', {
    icon: 'minecraft:spyglass',
    item: 'naturesaura:eye',
    title: 'Age 3: Exploration',
    description: 'Search for answers',
    background: 'undergarden:textures/block/depthrock.png',
    children: [
      {
        item: 'chest',
        title: 'Chest',
        description: 'Craft a chest',
      },
      {
        item: 'occultism:crushed_end_stone',
        title: 'Iron Hoe',
        description: 'Create an iron hoe',
        children: [
          {
            item: 'occultism:chalk_gold',
            title: 'Golden Chalk',
            description: 'Craft some golden chalk',
            children: [
              {
                item: 'wither_skeleton_skull',
                title: 'Wither Skull',
                description: 'Collect a wither skull from the wild hunt',
              },
            ],
          },
          {
            item: 'naturesaura:token_joy',
            title: 'Iron Hoe',
            description: 'Create an iron hoe',
            children: [
              {
                item: 'naturesaura:nature_altar',
                title: 'Iron Hoe',
                description: 'Create an iron hoe',
                children: [
                  {
                    item: 'rankine:shale',
                    title: 'Crushing Head',
                    description: 'Craft a basic crushing head',
                    children: [
                      {
                        item: 'naturesaura:infused_stone',
                        title: 'Crushing Head',
                        description: 'Craft a basic crushing head',
                      },
                    ],
                  },
                  {
                    item: 'naturesaura:infused_iron',
                    title: 'Iron Hoe',
                    description: 'Create an iron hoe',
                    children: [
                      {
                        item: 'undergarden:catalyst',
                        title: 'Iron Hoe',
                        description: 'Create an iron hoe',
                        children: [
                          {
                            item: 'undergarden:forgotten_nugget',
                            frame: 'challenge',
                            title: 'Iron Hoe',
                            description: 'Create an iron hoe',
                            children: [
                              {
                                item: 'malum:spirit_altar',
                                title: 'Iron Hoe',
                                description: 'Create an iron hoe',
                                children: [
                                  {
                                    item: 'malum:esoteric_spool',
                                    title: 'Crushing Head',
                                    description: 'Craft a basic crushing head',
                                  },
                                  {
                                    item: 'hexerei:blood_bottle',
                                    title: 'Iron Hoe',
                                    description: 'Create an iron hoe',
                                    children: [
                                      {
                                        icon: 'bloodmagic:sacrificialdagger',
                                        tag: 'im:crates',
                                        title: 'Crate',
                                        description: 'Upgrade your chest',
                                      },
                                      {
                                        item: 'bloodmagic:altar',
                                        title: 'Iron Hoe',
                                        description: 'Create an iron hoe',
                                        children: [
                                          {
                                            item: 'bloodmagic:blankslate',
                                            title: 'Blank Slate',
                                            description: 'Create a blank slate',
                                            reward: 'im:dimensions/undergarden',
                                          },
                                          {
                                            item: 'bloodmagic:weakbloodorb',
                                            title: 'Weak Blood Orb',
                                            description: 'Create a blood orb',
                                          },
                                          {
                                            item: 'bloodmagic:incensealtar',
                                            title: 'Incense Altar',
                                            description:
                                              'Craft an incense altar',
                                          },
                                          {
                                            item: 'rankine:blood_obsidian',
                                            title: 'Iron Hoe',
                                            description: 'Create an iron hoe',
                                            children: [
                                              {
                                                item: 'create:powdered_obsidian',
                                                title: 'Powdered Obsidian',
                                                description:
                                                  'Grind some blood obsidian in your millstone',
                                                frame: 'goal',
                                                children: [
                                                  {
                                                    item: 'occultism:satchel',
                                                    title:
                                                      'Substantial Satchel',
                                                    description:
                                                      'upgrade your bag into a substantial satchel',
                                                  },
                                                ],
                                              },
                                              {
                                                item: 'blue_skies:everdawn_portal',
                                                title: 'Iron Hoe',
                                                description:
                                                  'Create an iron hoe',
                                                children: [
                                                  {
                                                    item: 'blue_skies:horizonite_ingot',
                                                    title: 'Horizonite',
                                                    description:
                                                      'Forge a horizonite ingot',
                                                  },
                                                  {
                                                    item: 'blue_skies:loot_bag_alchemist',
                                                    title: 'Iron Hoe',
                                                    description:
                                                      'Create an iron hoe',
                                                    children: [
                                                      {
                                                        item: 'malum:cluster_of_brilliance',
                                                        title: 'Iron Hoe',
                                                        description:
                                                          'Create an iron hoe',
                                                        children: [
                                                          {
                                                            item: 'malum:brilliant_obelisk',
                                                            title: 'Iron Hoe',
                                                            description:
                                                              'Create an iron hoe',
                                                          },
                                                          {
                                                            item: 'occultism:chalk_purple',
                                                            title: 'Iron Hoe',
                                                            description:
                                                              'Create an iron hoe',
                                                            children: [
                                                              {
                                                                item: 'occultism:afrit_essence',
                                                                title:
                                                                  'Iron Hoe',
                                                                description:
                                                                  'Create an iron hoe',
                                                                children: [],
                                                              },
                                                              {
                                                                item: 'tconstruct:blazing_blood_bucket',
                                                                title: 'Crate',
                                                                description:
                                                                  'Upgrade your chest',
                                                                children: [
                                                                  {
                                                                    item: 'minecraft:torch',
                                                                    title:
                                                                      'Crate',
                                                                    description:
                                                                      'Upgrade your chest',
                                                                  },
                                                                ],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: 'minecraft:enchanting_table',
                                                        title: 'Iron Hoe',
                                                        description:
                                                          'Create an iron hoe',
                                                        children: [],
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: 'blue_skies:loot_bag_arachnarch',
                                                    title: 'Iron Hoe',
                                                    description:
                                                      'Create an iron hoe',
                                                    children: [
                                                      {
                                                        item: 'malum:raw_soulstone',
                                                        title: 'Iron Hoe',
                                                        description:
                                                          'Create an iron hoe',
                                                        children: [
                                                          {
                                                            item: 'malum:corrupted_resonance',
                                                            title: 'Iron Hoe',
                                                            description:
                                                              'Create an iron hoe',
                                                            children: [
                                                              {
                                                                item: 'twilightforest:twilight_portal_miniature_structure',
                                                                title:
                                                                  'Iron Hoe',
                                                                description:
                                                                  'Create an iron hoe',
                                                                children: [
                                                                  {
                                                                    item: 'twilightforest:carminite',
                                                                    title:
                                                                      'Carminite',
                                                                    description:
                                                                      'Collect some carminite',
                                                                    children: [
                                                                      {
                                                                        item: 'minecraft:piston',
                                                                        title:
                                                                          'Crushing Head',
                                                                        description:
                                                                          'Craft a basic crushing head',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'rankine:wood_tier_crushing_head',
                                                                              title:
                                                                                'Crushing Head',
                                                                              description:
                                                                                'Craft a basic crushing head',
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'ecofriendly:garbage_item_ym',
                                                                    title:
                                                                      'Iron Hoe',
                                                                    description:
                                                                      'Create an iron hoe',
                                                                    children: [
                                                                      {
                                                                        item: 'explorerscompass:explorerscompass',
                                                                        title:
                                                                          'Iron Hoe',
                                                                        description:
                                                                          'Create an iron hoe',
                                                                        children:
                                                                          [],
                                                                      },
                                                                      {
                                                                        item: 'create:andesite_alloy',
                                                                        title:
                                                                          'Iron Hoe',
                                                                        description:
                                                                          'Create an iron hoe',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'create:millstone',
                                                                              title:
                                                                                'Iron Hoe',
                                                                              description:
                                                                                'Create an iron hoe',
                                                                              children:
                                                                                [],
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'twilightforest:ironwood_ingot',
                                                                    title:
                                                                      'Iron Hoe',
                                                                    description:
                                                                      'Create an iron hoe',
                                                                    children: [
                                                                      {
                                                                        item: 'extendedcrafting:black_iron_ingot',
                                                                        title:
                                                                          'Iron Hoe',
                                                                        description:
                                                                          'Create an iron hoe',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'extendedcrafting:basic_table',
                                                                              title:
                                                                                'Iron Hoe',
                                                                              description:
                                                                                'Create an iron hoe',
                                                                              children:
                                                                                [],
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'minecraft:egg',
                                                                    title:
                                                                      'Iron Hoe',
                                                                    description:
                                                                      'Create an iron hoe',
                                                                    children: [
                                                                      {
                                                                        item: 'naturesaura:birth_spirit',
                                                                        title:
                                                                          'Iron Hoe',
                                                                        description:
                                                                          'Create an iron hoe',
                                                                        children:
                                                                          [],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'twilightforest:fiery_blood',
                                                                    title:
                                                                      'Iron Hoe',
                                                                    description:
                                                                      'Create an iron hoe',
                                                                    children: [
                                                                      {
                                                                        item: 'twilightforest:fiery_ingot',
                                                                        title:
                                                                          'Iron Hoe',
                                                                        description:
                                                                          'Create an iron hoe',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'create:cinder_flour',
                                                                              title:
                                                                                'Iron Hoe',
                                                                              frame:
                                                                                'challenge',
                                                                              description:
                                                                                'Create an iron hoe',
                                                                              children:
                                                                                [],
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
                                                            item: 'malum:soulwood_totem_base',
                                                            title: 'Iron Hoe',
                                                            description:
                                                              'Create an iron hoe',
                                                            children: [],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        item: 'blue_skies:venom_sac',
                                                        title: 'Iron Hoe',
                                                        description:
                                                          'Create an iron hoe',
                                                        children: [
                                                          {
                                                            item: 'bloodmagic:daggerofsacrifice',
                                                            frame: 'challenge',
                                                            title: 'Iron Hoe',
                                                            description:
                                                              'Create an iron hoe',
                                                            children: [],
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
                                            item: 'bloodmagic:basemonstersoul',
                                            title: 'Will',
                                            description:
                                              'Extract will using the soul snares',
                                            frame: 'goal',
                                            children: [
                                              {
                                                item: 'minecraft:soul_sand',
                                                title: 'Soul Sand',
                                                description:
                                                  'Cast some will onto sand',
                                                children: [
                                                  {
                                                    item: 'charcoal_pit:nether_shard',
                                                    title: 'Wither',
                                                    description:
                                                      'Summon & slay the wither',
                                                    children: [
                                                      {
                                                        item: 'chunkloaders:single_chunk_loader',
                                                        title: 'Chunk Loader',
                                                        description:
                                                          'Create your first chunk loader',
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
                            item: 'undergarden:regalium_crystal',
                            title: 'Regalium Crystal',
                            description: 'Collect some regalium crystals',
                          },
                          {
                            item: 'undergarden:grongle_log',
                            title: 'Grongle',
                            description: 'Collect a grongle log',
                            children: [
                              {
                                item: 'rankine:sawdust',
                                title: 'Sawdust',
                                description: 'Crush the log into sawdust',
                                children: [
                                  {
                                    icon: 'balanced_crates:oak_crate',
                                    tag: 'im:crates',
                                    title: 'Crate',
                                    description: 'Upgrade your chest',
                                  },
                                  {
                                    item: 'paper',
                                    title: 'Paper',
                                    description: 'Form a sheet of paper',
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            item: 'undergarden:mogmoss',
                            title: 'Arcane Ashes',
                            description:
                              'Ttransmute the mogmoss into arcane ashes',
                            children: [
                              {
                                item: 'bloodmagic:arcaneashes',
                                title: 'Arcane Ashes',
                                description:
                                  'Ttransmute the mogmoss into arcane ashes',
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
