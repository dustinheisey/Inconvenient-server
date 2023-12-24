onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'restorations', {
    icon: 'twilightforest:charm_of_life_1',
    item: 'gateways:gate_pearl',
    nbt: '{gateway:"gateways:aquatic_gate"}',
    title: 'Restoration Progress',
    background: 'chipped:textures/block/moss_block/moss_block_2.png',
    children: [
      {
        icon: 'minecraft:beehive',
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:buzzing_gate"}',
        title: 'Buzzing Gateway',
        description: 'Bring life back from the Bumblezone.',
        children: [
          {
            title: 'Bees',
            description: 'Bring bees back from the Bumblezone.',
            icon: 'minecraft:bee_spawn_egg',
            item: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:buzzing_gate"}',
          },
        ],
      },
      {
        icon: 'hem:steam_engine',
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:sooty_gate"}',
        title: 'Sooty Gateway',
        description: 'Bring life back from Blueleaf.',
        children: [
          {
            title: 'Villagers',
            description: 'Bring villagers back from Blueleaf.',
            icon: 'minecraft:villager_spawn_egg',
            item: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:sooty_gate"}',
            children: [
              {
                title: 'LLamas',
                description: 'Bring llamas back from Blueleaf.',
                icon: 'minecraft:llama_spawn_egg',
                item: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:sooty_gate"}',
                children: [
                  {
                    title: 'Donkeys',
                    description: 'Bring donkeys back from Blueleaf.',
                    icon: 'minecraft:donkey_spawn_egg',
                    item: 'gateways:gate_pearl',
                    nbt: '{gateway:"gateways:sooty_gate"}',
                    children: [
                      {
                        title: 'Horses',
                        description: 'Bring horses back from Blueleaf.',
                        icon: 'minecraft:horse_spawn_egg',
                        item: 'gateways:gate_pearl',
                        nbt: '{gateway:"gateways:sooty_gate"}',
                        children: [
                          {
                            title: 'Goats',
                            description: 'Bring goats back from Blueleaf.',
                            icon: 'minecraft:goat_spawn_egg',
                            item: 'gateways:gate_pearl',
                            nbt: '{gateway:"gateways:sooty_gate"}',
                            children: [
                              {
                                title: 'Angry Villagers',
                                description:
                                  'Bring angry villagers back from Blueleaf.',
                                icon: 'minecraft:pillager_spawn_egg',
                                item: 'gateways:gate_pearl',
                                nbt: '{gateway:"gateways:sooty_gate"}',
                                children: [
                                  {
                                    title: 'Skeleton Horses',
                                    description:
                                      'Bring skeleton horses back from Blueleaf.',
                                    icon: 'minecraft:skeleton_horse_spawn_egg',
                                    item: 'gateways:gate_pearl',
                                    nbt: '{gateway:"gateways:sooty_gate"}',
                                    children: [
                                      {
                                        title: 'Strays',
                                        description:
                                          'Bring strays back from Blueleaf.',
                                        icon: 'minecraft:stray_spawn_egg',
                                        item: 'gateways:gate_pearl',
                                        nbt: '{gateway:"gateways:sooty_gate"}',
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
        title: 'Aquatic Gateway',
        description: 'Bring life back from Everbright.',
        icon: 'blue_skies:everbright_portal',
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:aquatic_gate"}',
        children: [
          {
            title: 'Fish',
            description: 'Bring fish back from Everbright.',
            icon: 'minecraft:salmon_spawn_egg',
            item: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:aquatic_gate"}',
            children: [
              {
                title: 'Axolotls',
                description: 'Bring axolotls back from Everbright.',
                icon: 'minecraft:axolotl_spawn_egg',
                item: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:aquatic_gate"}',
                children: [
                  {
                    title: 'Dolphins',
                    description: 'Bring dolphins back from Everbright.',
                    icon: 'minecraft:dolphin_spawn_egg',
                    item: 'gateways:gate_pearl',
                    nbt: '{gateway:"gateways:aquatic_gate"}',
                    children: [
                      {
                        title: 'Squids',
                        description: 'Bring squids back from Everbright.',
                        icon: 'minecraft:squid_spawn_egg',
                        item: 'gateways:gate_pearl',
                        nbt: '{gateway:"gateways:aquatic_gate"}',
                        children: [
                          {
                            title: 'Glow Squids',
                            description:
                              'Bring glow squids back from Everbright.',
                            icon: 'minecraft:glow_squid_spawn_egg',
                            item: 'gateways:gate_pearl',
                            nbt: '{gateway:"gateways:aquatic_gate"}',
                            children: [
                              {
                                title: 'Turtles',
                                description:
                                  'Bring turtles back from Everbright.',
                                icon: 'minecraft:turtle_spawn_egg',
                                item: 'gateways:gate_pearl',
                                nbt: '{gateway:"gateways:aquatic_gate"}',
                                children: [
                                  {
                                    title: 'Polar Bears',
                                    description:
                                      'Bring polar bears back from Everbright.',
                                    icon: 'minecraft:polar_bear_spawn_egg',
                                    item: 'gateways:gate_pearl',
                                    nbt: '{gateway:"gateways:aquatic_gate"}',
                                    children: [
                                      {
                                        title: 'Drowned',
                                        description:
                                          'Bring the drowned back from Everbright.',
                                        icon: 'minecraft:drowned_spawn_egg',
                                        item: 'gateways:gate_pearl',
                                        nbt: '{gateway:"gateways:aquatic_gate"}',
                                        children: [
                                          {
                                            title: 'Skeletons',
                                            description:
                                              'Bring skeletons back from Everbright.',
                                            icon: 'minecraft:skeleton_spawn_egg',
                                            item: 'gateways:gate_pearl',
                                            nbt: '{gateway:"gateways:aquatic_gate"}',
                                            children: [
                                              {
                                                title: 'Witches',
                                                description:
                                                  'Bring witches back from Everbright.',
                                                icon: 'minecraft:witch_spawn_egg',
                                                item: 'gateways:gate_pearl',
                                                nbt: '{gateway:"gateways:aquatic_gate"}',
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
      },
      {
        icon: 'undergarden:catalyst',
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:forgotten_gate"}',
        title: 'Forgotten Gateway',
        description: 'Bring life back from Everdawn.',
        children: [
          {
            title: 'Bats',
            description: 'Bring bats back from the Undergarden.',
            icon: 'minecraft:bat_spawn_egg',
            item: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:forgotten_gate"}',
            children: [
              {
                title: 'Chameleons',
                description: 'Bring chameleons back from the Undergarden.',
                icon: 'cold_sweat:chameleon_spawn_egg',
                item: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:forgotten_gate"}',
                children: [
                  {
                    title: 'Slimes',
                    description: 'Bring slimes back from the Undergarden.',
                    icon: 'minecraft:slime_spawn_egg',
                    item: 'gateways:gate_pearl',
                    nbt: '{gateway:"gateways:forgotten_gate"}',
                    children: [
                      {
                        title: 'Creepers',
                        description:
                          'Bring creepers back from the Undergarden.',
                        icon: 'minecraft:creeper_spawn_egg',
                        item: 'gateways:gate_pearl',
                        nbt: '{gateway:"gateways:forgotten_gate"}',
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
        icon: 'blue_skies:everdawn_portal',
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:poisonous_gate"}',
        title: 'Poisonous Gateway',
        description: 'Bring life back from Everdawn.',
        children: [
          {
            title: 'Foxes',
            description: 'Bring foxes back from Everdawn.',
            icon: 'minecraft:fox_spawn_egg',
            item: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:poisonous_gate"}',
            children: [
              {
                title: 'Ocelots',
                description: 'Bring ocelots back from Everdawn.',
                icon: 'minecraft:ocelot_spawn_egg',
                item: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:poisonous_gate"}',
                children: [
                  {
                    title: 'Pandas',
                    description: 'Bring pandas back from Everdawn.',
                    icon: 'minecraft:panda_spawn_egg',
                    item: 'gateways:gate_pearl',
                    nbt: '{gateway:"gateways:poisonous_gate"}',
                    children: [
                      {
                        title: 'Parrots',
                        description: 'Bring parrots back from Everdawn.',
                        icon: 'minecraft:parrot_spawn_egg',
                        item: 'gateways:gate_pearl',
                        nbt: '{gateway:"gateways:poisonous_gate"}',
                        children: [
                          {
                            title: 'Spiders',
                            description: 'Bring spiders back from Everdawn.',
                            icon: 'minecraft:spider_spawn_egg',
                            item: 'gateways:gate_pearl',
                            nbt: '{gateway:"gateways:poisonous_gate"}',
                            children: [
                              {
                                title: 'Cave Spiders',
                                description:
                                  'Bring cave spiders back from Everdawn.',
                                icon: 'minecraft:cave_spider_spawn_egg',
                                item: 'gateways:gate_pearl',
                                nbt: '{gateway:"gateways:poisonous_gate"}',
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
        icon: 'twilightforest:twilight_portal_miniature_structure',
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:magical_gate"}',
        title: 'Magical Gateway',
        description: 'Bring life back from The Twilight Forest.',
        children: [
          {
            title: 'Chickens',
            description: 'Bring chickens back from the Twilight Forest.',
            icon: 'minecraft:chicken_spawn_egg',
            item: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:magical_gate"}',
            children: [
              {
                title: 'Rabbits',
                description: 'Bring rabbits back from the Twilight Forest.',
                icon: 'minecraft:rabbit_spawn_egg',
                item: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:magical_gate"}',
                children: [
                  {
                    title: 'Wolfs',
                    description: 'Bring wolfs back from the Twilight Forest.',
                    icon: 'minecraft:wolf_spawn_egg',
                    item: 'gateways:gate_pearl',
                    nbt: '{gateway:"gateways:magical_gate"}',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        icon: 'minecraft:netherrack',
        item: 'gateways:gate_pearl',
        nbt: '{gateway:"gateways:hellish_gate"}',
        title: 'Hellish Gateway',
        description: 'Bring life back from The Nether.',
        children: [
          {
            title: 'Pigs',
            description: 'Bring pigs back from the Nether.',
            icon: 'minecraft:pig_spawn_egg',
            item: 'gateways:gate_pearl',
            nbt: '{gateway:"gateways:hellish_gate"}',
            children: [
              {
                title: 'Zombified Piglins',
                description: 'Bring Zombified Piglins from the Nether.',
                icon: 'minecraft:zombified_piglin_spawn_egg',
                item: 'gateways:gate_pearl',
                nbt: '{gateway:"gateways:hellish_gate"}',
              },
            ],
          },
        ],
      },
    ],
  });
});
