onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'relics', {
    icon: 'relics:researching_table',
    tag: 'im:relics',
    title: 'Collection: Relics',
    // background: 'architects_palette:textures/block/onyx.png',
    background: 'malum:textures/block/runewood/runewood_beam.png',
    children: [
      {
        title: 'Everbright Relics',
        description: 'Collect a relic from Everbright.',
        icon: 'blue_skies:everbright_portal',
        tag: 'im:relics/everbright',
        children: [
          {
            title: 'Amphibian Boot',
            description: 'Collect an amphibian boot from an aquatic gateway',
            item: 'relics:amphibian_boot',
            children: [
              {
                title: 'Aqua Walker',
                description: 'Collect an aqua walker from an aquatic gateway',
                item: 'relics:aqua_walker',
                children: [
                  {
                    title: 'Drowned Belt',
                    description:
                      'Collect a drowned belt from an aquatic gateway',
                    item: 'relics:drowned_belt',
                    children: [
                      {
                        title: 'Ice Breaker',
                        description:
                          'Collect an ice breaker from an aquatic gateway',
                        item: 'relics:ice_breaker',
                        children: [
                          {
                            title: 'Ice Skates',
                            description:
                              'Collect ice skates from an aquatic gateway',
                            item: 'relics:ice_skates',
                            children: [
                              {
                                title: 'Jellyfish Necklace',
                                description:
                                  'Collect a jellyfish necklace from an aquatic gateway',
                                item: 'relics:jellyfish_necklace',
                                children: [
                                  {
                                    title: 'Wool Mitten',
                                    description:
                                      'Collect a wool mitten from an aquatic gateway',
                                    item: 'relics:wool_mitten',
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
        title: 'Undergarden Relics',
        description: 'Collect a relic from the Undergarden.',
        tag: 'im:relics/undergarden',
        children: [
          {
            title: 'Spore Sack',
            description: 'Collect a spore sack from a forgotten gateway',
            item: 'relics:spore_sack',
          },
        ],
      },
      {
        icon: 'minecraft:netherrack',
        title: 'Nether Relics',
        description: 'Collect a relic from the Nether.',
        tag: 'im:relics/nether',
        children: [
          {
            title: 'Magma Walker',
            description: 'Collect a magma walker from a hellish gateway',
            item: 'relics:magma_walker',
            children: [
              {
                title: 'Infinity Ham',
                description: 'Collect an infinity ham from a hellish gateway',
                item: 'relics:infinity_ham',
                children: [
                  {
                    title: 'Blazing Flask',
                    description:
                      'Collect a blazing flask from a hellish gateway',
                    item: 'relics:blazing_flask',
                    children: [
                      {
                        title: 'Bastion Ring',
                        description:
                          'Collect a bastion ring from a hellish gateway',
                        item: 'relics:bastion_ring',
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
        icon: 'hem:steam_engine',
        title: 'Blueleaf Relics',
        description: 'Collect a relic from Blueleaf.',
        tag: 'im:relics/blueleaf',
        children: [
          {
            title: 'Lucky Horseshoe',
            description: 'Collect a lucky horseshoe from a sooty gateway',
            item: 'relics:lucky_horseshoe',
            children: [
              {
                title: 'Hunter Belt',
                description: 'Collect a hunter belt from a sooty gateway',
                item: 'relics:hunter_belt',
                children: [
                  {
                    title: 'Holy Locket',
                    description: 'Collect a holy locket from a sooty gateway',
                    item: 'relics:holy_locket',
                    children: [
                      {
                        title: 'Horse Flute',
                        description:
                          'Collect a horse flute from a sooty gateway',
                        item: 'relics:horse_flute',
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
        title: 'Everdawn Relics',
        description: 'Collect a relic from Everdawn.',
        tag: 'im:relics/everdawn',
        children: [
          {
            title: 'Rage Glove',
            description: 'Collect a rage glove from a poisonous gateway',
            item: 'relics:rage_glove',
          },
        ],
      },
      {
        icon: 'twilightforest:twilight_portal_miniature_structure',
        title: 'Twilight Forest relics',
        description: 'Collect a relic from the Twilight Forest.',
        tag: 'im:relics/twilight',
        children: [
          {
            title: 'Roller Skates',
            description: 'Collect roller skates from a magical gateway',
            item: 'relics:roller_skates',
            children: [
              {
                title: 'Magic Mirror',
                description: 'Collect a magic mirror from a magical gateway',
                item: 'relics:magic_mirror',
                children: [
                  {
                    title: 'Arrow Quiver',
                    description:
                      'Collect an arrow quiver from a magical gateway',
                    item: 'relics:arrow_quiver',
                    children: [
                      {
                        title: 'Leather Belt',
                        description:
                          'Collect a leather belt from a magical gateway',
                        item: 'relics:leather_belt',
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
        icon: 'minecraft:beehive',
        title: 'Bumblezone relics',
        description: 'Collect a relic from the Bumblezone.',
        tag: 'im:relics/bumblezone',
        children: [],
      },
    ],
  });
});
