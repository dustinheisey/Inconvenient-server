onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'stage_5_1', {
    icon: 'honeycomb',
    item: 'botania:mana_spreader',
    title: 'Age 5: Agriculture',
    description: 'Feed the world',
    background: 'minecraft:textures/block/honeycomb_block.png',
    children: [
      {
        item: 'botania:diluted_pool',
        title: 'Diluted Pool',
        description: 'Craft a diluted pool',
        frame: 'goal',
        children: [
          {
            item: 'botania:mana_pool',
            title: 'Mana Pool',
            description: 'Upgrade your diluted pool',
          },

          {
            item: 'botania:manasteel_ingot',
            title: 'Manasteel',
            description: 'Create a manasteel ingot',
            frame: 'goal',
            children: [
              {
                item: 'botania:spark',
                title: 'Spark',
                description: 'Craft a spark',
              },
              {
                item: 'botania:rune_earth',
                title: 'Earth Rune',
                description: 'Create a rune of earth in a runic altar',
                frame: 'goal',
                children: [
                  {
                    item: 'naturesaura:offering_table',
                    title: 'Offering Table',
                    description: 'Craft an offering table',
                    frame: 'goal',
                    children: [
                      {
                        item: 'naturesaura:token_euphoria',
                        title: 'Euphoria Token',
                        description: 'Craft a token of euphoria',
                        frame: 'goal',
                        children: [
                          {
                            item: 'botania:terrasteel_ingot',
                            title: 'Terrasteel',
                            description: 'Create a terrasteel ingot',
                            frame: 'goal',
                            children: [
                              {
                                item: 'butchercraft:butcher_knife',
                                title: 'Butcher Knife',
                                description: 'Craft a butcher knife',
                                children: [
                                  {
                                    item: 'butchercraft:lard',
                                    title: 'Lard',
                                    description: 'Make lard',
                                    children: [
                                      {
                                        item: 'butchercraft:fries',
                                        title: 'Fries',
                                        description: 'Make fries',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                item: 'botania:alfheim_portal',
                                title: 'Alfheim Portal',
                                description: 'Construct a portal to alfheim',
                                frame: 'goal',
                                children: [
                                  {
                                    item: 'immersiveengineering:seed',
                                    title: 'Hemp Seed',
                                    description:
                                      'Breed a hemp plant and collect its seeds',
                                    children: [
                                      {
                                        item: 'immersiveengineering:hemp_fabric',
                                        title: 'Hemp Fabric',
                                        description: 'Create some hemp fabric',
                                      },
                                    ],
                                  },
                                  {
                                    item: 'botania:elementium_ingot',
                                    title: 'Elementium',
                                    description:
                                      'Trade some manasteel with the elves',
                                    frame: 'goal',
                                    children: [
                                      {
                                        item: 'naturesaura:eye_improved',
                                        title: 'Ocular',
                                        description:
                                          'Upgrade your environmental eye into an environmental ocular',
                                      },
                                      {
                                        item: 'botania:rune_pride',
                                        title: 'Pride Rune',
                                        description: 'Create a rune of pride',
                                        frame: 'goal',
                                        children: [
                                          {
                                            item: 'botania:orechid_ignem',
                                            title: 'Orechid Ignem',
                                            description:
                                              'Create an orechid ignem in a petal apothecary',
                                            children: [
                                              {
                                                item: 'rankine:phosphorus',
                                                title: 'Phosphorus',
                                                description:
                                                  'Collect phosphorus from crushed komatiitic tuff',
                                                children: [
                                                  {
                                                    item: 'minecraft:wheat',
                                                    title: 'Feed Pellets',
                                                    description:
                                                      'Make some feed pellets to breed cattle',
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                          {
                                            id: 'bee_nest',
                                            item: 'bee_nest',
                                            title: 'Bee Nest',
                                            description:
                                              'Craft a bee nest. Find some way to enter it',
                                            frame: 'goal',
                                            reward: 'im:dimensions/bumblezone',
                                            children: [
                                              {
                                                item: 'minecraft:honeycomb',
                                                title: 'Honeycomb',
                                                parent: 'bee_nest',
                                                description:
                                                  'Harvest a honeycomb from a beehive',
                                                children: [
                                                  {
                                                    item: 'brewinandchewin:keg',
                                                    title: 'Keg',
                                                    description:
                                                      'Construct a fermenting keg',
                                                    children: [
                                                      {
                                                        item: 'brewinandchewin:pickled_pickles',
                                                        title: 'Pickles',
                                                        description:
                                                          'Ferment some pickles',
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                              {
                                                parent: 'bee_nest',
                                                item: 'minecraft:honey_bottle',
                                                title: 'Honey',
                                                description:
                                                  'Collect a bottle of honey inside the bee nest',
                                                frame: 'goal',
                                                children: [
                                                  {
                                                    item: 'productivebees:bee_cage',
                                                    title: 'Bee Cage',
                                                    description:
                                                      'Craft a bee cage',
                                                    children: [
                                                      {
                                                        item: 'productivebees:configurable_honeycomb',
                                                        nbt: '{EntityTag:{type:"productivebees:ender"}}',
                                                        title:
                                                          'Ender Honeycomb',
                                                        description:
                                                          'Breed bees together and collect an ender honeycomb',
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: 'pneumaticcraft:sourdough',
                                                    title: 'Sourdough',
                                                    description:
                                                      'Craft sourdough',
                                                    frame: 'goal',
                                                    children: [
                                                      {
                                                        item: 'pneumaticcraft:sourdough_bread',
                                                        title:
                                                          'Sourdough Bread',
                                                        description:
                                                          'Bake some sourdough bread',
                                                        frame: 'goal',
                                                        children: [
                                                          {
                                                            item: 'delightful:deluxe_cheeseburger',
                                                            title:
                                                              'Deluxe Cheeseburger',
                                                            id: 'progress',
                                                            description:
                                                              'Make a deluxe cheeseburger',
                                                            frame: 'challenge',
                                                            criteria: {
                                                              consume: {
                                                                trigger:
                                                                  'minecraft:consume_item',
                                                                conditions: {
                                                                  item: {
                                                                    items: [
                                                                      'delightful:deluxe_cheeseburger',
                                                                    ],
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
                                                parent: 'bee_nest',
                                                item: 'the_bumblezone:honey_crystal_shards',
                                                title: 'Honey Crystal Shards',
                                                description:
                                                  'Collect a honey crystal shard from inside the bee nest',
                                                children: [
                                                  {
                                                    item: 'productivebees:centrifuge',
                                                    title: 'Centrifuge',
                                                    description:
                                                      'Craft a centrifuge',
                                                    children: [
                                                      {
                                                        item: 'productivebees:powered_centrifuge',
                                                        title:
                                                          'Powered Centrifuge',
                                                        description:
                                                          'Craft a powered centrifuge',
                                                      },
                                                    ],
                                                  },
                                                  {
                                                    item: 'productivebees:bottler',
                                                    title: 'Bottler',
                                                    description:
                                                      'Craft a bottler',
                                                    children: [
                                                      {
                                                        item: 'productivebees:gene_bottle',
                                                        title: 'Gene Bottle',
                                                        description:
                                                          'Mash a bee into some bee material',
                                                        children: [
                                                          {
                                                            item: 'productivebees:gene',
                                                            title: 'Genes',
                                                            description:
                                                              'Collect a gene sample',
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
                                item: 'botania:terra_pick',
                                title: 'Terrasteel Pickaxe',
                                description: 'Craft a terrasteel pickaxe',
                              },
                            ],
                          },
                          {
                            id: 'cognitive_dissonance',
                            item: 'naturesaura:animal_spawner',
                            title: 'Birthing Altar',
                            description: 'Craft an altar of birthing',
                            children: [
                              {
                                parent: 'cognitive_dissonance',
                                icon: 'energeticsheep:white_energetic_wool',
                                tag: 'energeticsheep:wool_energetic',
                                title: 'Energetic Wool',
                                description: 'Collect some energetic wool',
                                children: [
                                  {
                                    item: 'energeticsheep:energetic_shears',
                                    title: 'Energetic Shears',
                                    description: 'Craft energetic shears',
                                  },
                                ],
                              },
                              {
                                parent: 'cognitive_dissonance',
                                item: 'butchercraft:cow_carcass',
                                title: 'Cow Carcass',
                                description: 'Butcher a cow',
                                children: [
                                  {
                                    item: 'butchercraft:ground_beef',
                                    title: 'Ground Beef',
                                    description: 'Make some ground beef',
                                    children: [
                                      {
                                        item: 'farmersdelight:beef_patty',
                                        title: 'Beef Patty',
                                        id: 'confusion',
                                        description: 'Make a beef patty',
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                parent: 'cognitive_dissonance',
                                item: 'productivebees:milk_bottle',
                                title: 'Milk',
                                description: 'Gather some milk from a cow',
                                children: [
                                  {
                                    item: 'brewinandchewin:unripe_scarlet_cheese_wheel',
                                    title: 'Scarlet Cheese',
                                    description:
                                      'Ferment the milk into scarlet cheese',
                                    children: [
                                      {
                                        item: 'brewinandchewin:scarlet_cheese_wedge',
                                        title: 'Aged Cheese',
                                        description: 'Allow the cheese to age',
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
                        item: 'naturesaura:token_rage',
                        title: 'Rage Token',
                        description: 'Create a token of rage',
                        children: [
                          {
                            item: 'naturesaura:conversion_catalyst',
                            title: 'Transmutation Catalyst',
                            description: 'Create a transmutation catalyst',
                            children: [
                              {
                                item: 'minecraft:dragon_breath',
                                title: 'Dragon Breath',
                                description:
                                  "Transform some otherworldy aura into dragon's breath",
                                children: [
                                  {
                                    item: 'minecraft:chorus_flower',
                                    title: 'Chorus Flower',
                                    description: 'Create a chorus flower',
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        item: 'naturesaura:sky_ingot',
                        title: 'Sky Ingot',
                        description: 'Collect sky ingot from the gods',
                        children: [
                          {
                            item: 'create:mechanical_plough',
                            title: 'Mechanical Plough',
                            description: 'Craft a mechanical plough',
                          },
                          {
                            item: 'create:mechanical_harvester',
                            title: 'Mechanical Harvester',
                            description: 'Craft a mechanical harvester',
                          },
                          {
                            item: 'sliceanddice:sprinkler',
                            title: 'Sprinkler',
                            description: 'Craft a sprinkler',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    item: 'naturesaura:calling_spirit',
                    title: 'Calling Spirit',
                    description: 'Craft a calling spirit',
                    frame: 'goal',
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
