onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'stage_4', {
    icon: 'create:brass_hand',
    item: 'create:cinder_flour',
    title: 'Age 4: Engineering',
    description: 'Understand what happened',
    background: 'chipped:textures/block/nether_bricks/nether_bricks_9.png',
    children: [
      {
        item: 'create:mechanical_mixer',
        title: 'Mechanical Mixer',
        description: 'Craft a mechanical mixer',
        children: [
          {
            item: 'create:dough',
            title: 'Dough',
            description: 'Mix some dough',
            children: [
              {
                item: 'minecraft:bread',
                title: 'Bread',
                description: 'Make your first piece of bread',
              },
            ],
          },
        ],
      },
      {
        item: 'create:encased_fan',
        title: 'Encased Fan',
        description: 'Crraft an encased fan',
        children: [
          {
            item: 'minecraft:soul_torch',
            title: 'Soul Torch',
            description: 'Create a soul torch',
            children: [
              {
                item: 'cold_sweat:soulspring_lamp',
                title: 'Soulspring Lamp',
                id: 'soulspring_lamp',
                description:
                  'Craft a soulspring lamp to stay cool in the nether',
              },
            ],
          },
        ],
      },
      {
        item: 'create:mechanical_press',
        title: 'Mechanical Press',
        description: 'Craft a mechanical press',
        frame: 'goal',
        children: [
          {
            item: 'create:blaze_cake_base',
            title: 'Blaze Cake Base',
            description: 'Create a blaze cake base',

            children: [
              {
                item: 'create:blaze_cake',
                title: 'Blaze Cake',
                description: 'Fill the cake base with lava',
              },
            ],
          },
          {
            item: 'create:sturdy_sheet',
            title: 'Sturdy Sheet',
            description: 'Press powdered obsidian into a sturdy sheet',
            frame: 'goal',
            children: [
              {
                item: 'bloodmagic:ritualdiviner',
                title: 'Ritual Diviner',
                description: 'Create a ritual diviner',
                frame: 'goal',
                children: [
                  {
                    item: 'bloodmagic:strong_tau',
                    title: 'Strong Tau Fruit',
                    description:
                      'Enter the dungeon dimension and collect strong tau fruit',
                    frame: 'goal',
                    children: [
                      {
                        item: 'bloodmagic:weakbloodshard',
                        title: 'Weak Blood Shard',
                        description: 'Create a weak blood shard',
                        frame: 'challenge',
                        children: [
                          {
                            item: 'occultism:chalk_red',
                            title: 'Red Chalk',
                            description: 'Craft some red chalk',
                            children: [
                              {
                                item: 'occultism:infused_pickaxe',
                                title: 'Infused Pickaxe',
                                description: 'Craft an infused pickaxe',
                              },
                            ],
                          },
                          {
                            item: 'bloodmagic:masterbloodorb',
                            title: "Magician's Blood Orb",
                            description: "Create a magician's blood orb",
                          },
                          {
                            icon: 'farmersrespite:purulent_tea',
                            title: 'Purulent Tea',
                            description: 'Brew & drink some Purulent Tea',
                            frame: 'goal',
                            reward: 'im:dimensions/nether',
                            criteria: {
                              consume: {
                                trigger: 'minecraft:consume_item',
                                conditions: {
                                  item: {
                                    items: ['farmersrespite:purulent_tea'],
                                  },
                                },
                              },
                            },
                            children: [
                              {
                                icon: 'netherrack',
                                title: 'Nether',
                                criteria: {
                                  dimension_change: {
                                    trigger: 'minecraft:changed_dimension',
                                    conditions: {
                                      from: 'minecraft:overworld',
                                      to: 'minecraft:the_nether',
                                    },
                                  },
                                },
                                description: 'Enter the nether',
                                frame: 'goal',
                                children: [
                                  {
                                    item: 'occultism:iesnium_ingot',
                                    title: 'Iesnium Ingot',
                                    description: 'Forge an iesnium ingot',
                                    children: [
                                      {
                                        item: 'occultism:storage_controller',
                                        title: 'Dimensional Storage',
                                        description:
                                          'Craft a Dimensional Storage Actuator',
                                      },
                                      {
                                        item: 'occultism:soul_gem',
                                        title: 'Soul Gem',
                                        description: 'Create a soul gem',
                                        children: [
                                          {
                                            item: 'occultism:familiar_ring',
                                            title: 'Familiar Ring',
                                            description:
                                              'Create a familiar ring',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: 'rankine:sulfur',
                                    title: 'Sulfur',
                                    description: 'Mine some sulfur',
                                    children: [
                                      {
                                        item: 'minecraft:gunpowder',
                                        title: 'Gunpowder',
                                        description: 'Create gunpowder',
                                      },
                                    ],
                                  },
                                  {
                                    item: 'minecraft:netherite_ingot',
                                    title: 'Netherite',
                                    description: 'Forge a netherite ingot',
                                    children: [
                                      {
                                        item: 'cataclysm:witherite_ingot',
                                        title: 'Witherite',
                                        description:
                                          'Infuse the netherite with the essence of a wither',
                                      },
                                    ],
                                  },
                                  {
                                    item: 'minecraft:gold_ingot',
                                    title: 'Gold',
                                    description: 'Forge a gold ingot',
                                    children: [
                                      {
                                        item: 'rankine:rose_gold_ingot',
                                        title: 'Rose Gold',
                                        description: 'Create a rose gold ingot',
                                        children: [
                                          {
                                            item: 'naturesaura:tainted_gold',
                                            title: 'Tainted Gold',
                                            description:
                                              'Collect a tainted gold ingot from a crimson altar',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: 'cataclysm:ignitium_ingot',
                                    title: 'Ignitium',
                                    description:
                                      'Collect or forge an ignitium ingot',
                                    children: [
                                      {
                                        item: 'rankine:evaporation_tower',
                                        title: 'Evaporation Tower',
                                        description:
                                          'Construct an evaporation tower',
                                        children: [
                                          {
                                            item: 'rankine:vulcanized_rubber',
                                            title: 'Vulcanized Rubber',
                                            description:
                                              'Collect some vulcanized rubber',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: 'tconstruct:cobalt_ingot',
                                    title: 'Cobalt',
                                    description: 'Forge a cobalt ingot',
                                    children: [
                                      {
                                        item: 'tconstruct:manyullyn_ingot',
                                        title: 'Manyullyn',
                                        description: 'Forge a manyullyn ingot',
                                        children: [
                                          {
                                            item: 'waystones:warp_stone',
                                            title: 'Warp Stone',
                                            description: 'Create a warp stone',
                                            children: [
                                              {
                                                item: 'waystones:waystone',
                                                title: 'Waystone',
                                                description: 'Craft a waystone',
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: 'farmersdelight:ham',
                                    title: 'Ham',
                                    description:
                                      'Collect some ham from a slaughtered pig',
                                    frame: 'goal',
                                    children: [
                                      {
                                        item: 'tconstruct:pig_iron_ingot',
                                        title: 'Pig Iron',
                                        description: 'Forge a pig iron ingot',
                                        frame: 'goal',

                                        children: [
                                          {
                                            item: 'rankine:promethium_ingot',
                                            title: 'Promethium',
                                            description:
                                              'Create a promethium ingot',
                                            frame: 'goal',
                                            children: [
                                              {
                                                item: 'create:electron_tube',
                                                title: 'Electron Tube',
                                                description:
                                                  'Craft some electron tubes',
                                                count: 2,
                                                frame: 'goal',
                                                children: [
                                                  {
                                                    item: 'create:mechanical_crafter',
                                                    title: 'Mechanical Crafter',
                                                    description:
                                                      'Craft a mechanical crafter',
                                                    frame: 'goal',
                                                    children: [
                                                      {
                                                        item: 'create:crushing_wheel',
                                                        title: 'Crushing Wheel',
                                                        description:
                                                          'Craft some crushing wheels',
                                                        count: 2,
                                                      },
                                                      {
                                                        item: 'hem:teir_one_computer',
                                                        title: 'Computer',
                                                        description:
                                                          'Craft a computer',
                                                        reward:
                                                          'im:dimension/blueleaf',
                                                        frame: 'goal',
                                                        children: [
                                                          {
                                                            icon: 'hem:transporter_top',
                                                            title: 'Blueleaf',
                                                            description:
                                                              'Craft an steam engine and use it to enter Blueleaf',
                                                            frame: 'goal',
                                                            id: 'potential',
                                                            criteria: {
                                                              dimension_change:
                                                                {
                                                                  trigger:
                                                                    'minecraft:changed_dimension',
                                                                  conditions: {
                                                                    from: 'minecraft:overworld',
                                                                    to: 'hem:blueleaf',
                                                                  },
                                                                },
                                                            },
                                                            children: [
                                                              {
                                                                item: 'pneumaticcraft:oil_bucket',
                                                                title: 'Oil',
                                                                parent:
                                                                  'potential',
                                                                description:
                                                                  'Craft a bucket of oil',
                                                                frame:
                                                                  'challenge',
                                                                children: [
                                                                  {
                                                                    item: 'rankine:carbon',
                                                                    title:
                                                                      'Carbon Powder',
                                                                    description:
                                                                      'Collect some carbon powder',
                                                                  },
                                                                  {
                                                                    item: 'rankine:silicon',
                                                                    title:
                                                                      'Silicon',
                                                                    description:
                                                                      'Collect some silicon',
                                                                  },
                                                                ],
                                                              },
                                                              {
                                                                item: 'create:chromatic_compound',
                                                                title:
                                                                  'Chromatic Compound',
                                                                id: 'choice',
                                                                parent:
                                                                  'potential',
                                                                description:
                                                                  'Create a chromatic compound',
                                                                frame: 'goal',
                                                                children: [
                                                                  {
                                                                    item: 'create:refined_radiance',
                                                                    title:
                                                                      'Refined Radiance',
                                                                    parent:
                                                                      'choice',
                                                                    description:
                                                                      'Transform the compound into refined radiance',
                                                                    frame:
                                                                      'goal',
                                                                    children: [
                                                                      {
                                                                        item: 'botania:apothecary_default',
                                                                        title:
                                                                          'Apothecary',
                                                                        description:
                                                                          'Craft an apothecary',
                                                                        frame:
                                                                          'goal',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'botania:pure_daisy',
                                                                              title:
                                                                                'Pure Daisy',
                                                                              description:
                                                                                'Make a pure daisy',
                                                                              frame:
                                                                                'goal',
                                                                              children:
                                                                                [
                                                                                  {
                                                                                    item: 'botania:mana_spreader',
                                                                                    title:
                                                                                      'Mana Spreader',
                                                                                    description:
                                                                                      'Craft a mana spreader',
                                                                                    frame:
                                                                                      'challenge',
                                                                                    reward:
                                                                                      'im:stages/stage_5_1',
                                                                                  },
                                                                                ],
                                                                            },
                                                                          ],
                                                                      },
                                                                    ],
                                                                  },
                                                                  {
                                                                    item: 'create:shadow_steel',
                                                                    title:
                                                                      'Shadow Steel',
                                                                    parent:
                                                                      'choice',
                                                                    description:
                                                                      'Transform the compound into shadow steel',
                                                                    frame:
                                                                      'goal',
                                                                    children: [
                                                                      {
                                                                        item: 'extendedcrafting:advanced_table',
                                                                        title:
                                                                          'Advanced Table',
                                                                        description:
                                                                          'Craft an advanced table',
                                                                        frame:
                                                                          'goal',
                                                                        children:
                                                                          [
                                                                            {
                                                                              item: 'immersive_aircraft:engine',
                                                                              title:
                                                                                'Engine',
                                                                              description:
                                                                                'Craft an engine',
                                                                              frame:
                                                                                'goal',
                                                                              children:
                                                                                [
                                                                                  {
                                                                                    item: 'createaddition:alternator',
                                                                                    title:
                                                                                      'Alternator',
                                                                                    description:
                                                                                      'Craft an alternator',
                                                                                    frame:
                                                                                      'challenge',
                                                                                    reward:
                                                                                      'im:stages/stage_5_2',
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
                                    ],
                                  },
                                  {
                                    item: 'rankine:aluminum_ingot',
                                    title: 'Aluminum',
                                    description: 'Forge an aluminum ingot',
                                    children: [
                                      {
                                        item: 'rankine:distillation_tower',
                                        title: 'Distillation Tower',
                                        description:
                                          'Construct a distillation tower',
                                        children: [
                                          {
                                            item: 'rankine:carbon_dioxide_gas_bottle',
                                            title: 'Carbon Dioxide',
                                            description:
                                              'Collect a bottle of carbon dioxide from the nether',
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    item: 'rankine:zinc_ingot',
                                    title: 'Zinc',
                                    description: 'Forge a zinc ingot',
                                    children: [
                                      {
                                        item: 'rankine:brass_ingot',
                                        title: 'Brass',
                                        description: 'Forge a brass ingot',
                                        children: [
                                          {
                                            item: 'rankine:alloy_furnace',
                                            title: 'Alloy Furnace',
                                            description:
                                              'Craft an alloy furnace',
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
                item: 'bloodmagic:soulforge',
                title: 'Hellfire Forge',
                description: 'Create a hellfire forge',
                children: [
                  {
                    item: 'bloodmagic:simplekey',
                    title: 'Simple Dungeon Key',
                    description: 'Craft some keys for the dungeon dimension',
                  },
                  {
                    item: 'bloodmagic:sanguinereverter',
                    title: 'Sanguine Reverter',
                    description: 'Create a sanguine reverter',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        item: 'adchimneys:wooden_paintbrush',
        title: 'Paintbrush',
        description: 'Craft a wooden paintbrush',
        children: [
          {
            item: 'adchimneys:metal_chimney',
            title: 'Chimney',
            description: 'Craft a metal chimney',
            children: [
              {
                item: 'adchimneys:metal_vent',
                title: 'Vent',
                description: 'Craft a metal vent',
                children: [
                  {
                    item: 'adchimneys:metal_pump',
                    title: 'Pump',
                    description: 'Craft a metal pump',
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
