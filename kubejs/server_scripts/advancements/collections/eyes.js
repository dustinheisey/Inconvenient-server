onEvent('server.datapack.high_priority', event => {
  addAdvancements(event, 'eyes', {
    icon: 'endrem:ancient_portal_frame',
    tag: 'im:eyes',
    title: 'Collection: Ender Eyes',
    description: 'Collect mysterious tokens from a long lost society',
    background: 'minecraft:textures/block/end_stone.png',
    children: [
      {
        item: 'endrem:cold_eye',
        title: 'Cold Eye',
        description: 'Acquire a cold eye',
        children: [
          {
            item: 'endrem:guardian_eye',
            title: 'Guardian Eye',
            description: 'Acquire a guardian eye',
            children: [
              {
                item: 'endrem:exotic_eye',
                title: 'Exotic Eye',
                description: 'Acquire an exotic eye',
                children: [
                  {
                    item: 'endrem:undead_eye',
                    title: 'Undead Eye',
                    description: 'Acquire an undead eye',
                    children: [
                      {
                        item: 'endrem:corrupted_eye',
                        title: 'Corrupted Eye',
                        description: 'Acquire a corrupted eye',
                        children: [
                          {
                            item: 'endrem:magical_eye',
                            title: 'Magical Eye',
                            description: 'Acquire a magical eye',
                            children: [
                              {
                                item: 'endrem:wither_eye',
                                title: 'Wither Eye',
                                description: 'Acquire a wither eye',
                                children: [
                                  {
                                    item: 'endrem:black_eye',
                                    title: 'Black Eye',
                                    description: 'Acquire a black eye',
                                    children: [
                                      {
                                        item: 'endrem:cursed_eye',
                                        title: 'Cursed Eye',
                                        description: 'Acquire a cursed eye',
                                      },
                                      {
                                        item: 'endrem:nether_eye',
                                        title: 'Nether Eye',
                                        description: 'Acquire a nether eye',
                                        children: [
                                          {
                                            item: 'endrem:evil_eye',
                                            title: 'Evil Eye',
                                            description: 'Acquire an evil eye',
                                          },
                                          {
                                            item: 'endrem:rogue_eye',
                                            title: 'Rogue Eye',
                                            description: 'Acquire a rogue eye',
                                            children: [
                                              {
                                                item: 'minecraft:end_crystal',
                                                title: 'The End',
                                                description:
                                                  'Use your eyes to travel to the end',
                                                children: [
                                                  {
                                                    item: 'endrem:witch_eye',
                                                    title: 'Witch Eye',
                                                    description:
                                                      'Acquire a witch eye',
                                                    children: [
                                                      {
                                                        item: 'endrem:old_eye',
                                                        title: 'Old Eye',
                                                        description:
                                                          'Acquire an old eye',
                                                        children: [
                                                          {
                                                            item: 'endrem:cryptic_eye',
                                                            title:
                                                              'Cryptic Eye',
                                                            frame: 'challenge',
                                                            description:
                                                              'Acquire a cryptic eye',
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
                                        item: 'endrem:lost_eye',
                                        title: 'Lost Eye',
                                        description: 'Acquire a lost eye',
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
        hide: true,
        id: 'cold',
        criteria: {
          collect: {
            trigger: 'minecraft:inventory_changed',
            conditions: {
              items: [
                {
                  items: ['cold_sweat:hearth'],
                },
              ],
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/cold',
      },
      {
        hide: true,
        id: 'guardian',
        criteria: {
          collect: {
            trigger: 'minecraft:inventory_changed',
            conditions: {
              items: [
                {
                  items: ['gateways:gate_pearl'],
                },
              ],
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/guardian',
      },
      {
        hide: true,
        id: 'exotic',
        criteria: {
          collect: {
            trigger: 'minecraft:inventory_changed',
            conditions: {
              items: [
                {
                  items: ['naturesaura:eye'],
                },
              ],
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/exotic',
      },
      {
        hide: true,
        id: 'undead',
        criteria: {
          collect: {
            trigger: 'minecraft:inventory_changed',
            conditions: {
              items: [
                {
                  items: ['undergarden:forgotten_nugget'],
                },
              ],
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/undead',
      },
      {
        hide: true,
        id: 'corrupted',
        criteria: {
          collect: {
            trigger: 'minecraft:inventory_changed',
            conditions: {
              items: [
                {
                  items: ['bloodmagic:daggerofsacrifice'],
                },
              ],
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/corrupted',
      },
      {
        hide: true,
        id: 'magical',
        criteria: {
          collect: {
            trigger: 'minecraft:inventory_changed',
            conditions: {
              items: [
                {
                  items: ['create:cinder_flour'],
                },
              ],
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/magical',
      },
      {
        hide: true,
        id: 'wither',
        criteria: {
          collect: {
            trigger: 'minecraft:inventory_changed',
            conditions: {
              items: [
                {
                  items: ['bloodmagic:weakbloodshard'],
                },
              ],
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/wither',
      },
      {
        hide: true,
        id: 'black',
        criteria: {
          collect: {
            trigger: 'minecraft:inventory_changed',
            conditions: {
              items: [
                {
                  items: ['immersivepetroleum:crudeoil_bucket'],
                },
              ],
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/black',
      },
      {
        hide: true,
        id: 'cursed',
        criteria: {
          collect: {
            trigger: 'minecraft:inventory_changed',
            conditions: {
              items: [
                {
                  items: ['delightful:deluxe_cheeseburger'],
                },
              ],
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/cursed',
      },
      {
        hide: true,
        id: 'lost',
        criteria: {
          collect: {
            trigger: 'minecraft:inventory_changed',
            conditions: {
              items: [
                {
                  items: ['coinsje:iron_coin_pile'],
                },
              ],
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/lost',
      },
      {
        hide: true,
        id: 'nether',
        criteria: {
          criteria: {
            impossible: {
              trigger: 'minecraft:impossible',
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/nether',
      },
      {
        hide: true,
        id: 'evil',
        criteria: {
          criteria: {
            impossible: {
              trigger: 'minecraft:impossible',
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/evil',
      },
      {
        hide: true,
        id: 'rogue',
        criteria: {
          criteria: {
            impossible: {
              trigger: 'minecraft:impossible',
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/rogue',
      },
      {
        hide: true,
        id: 'witch',
        criteria: {
          criteria: {
            impossible: {
              trigger: 'minecraft:impossible',
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/witch',
      },
      {
        hide: true,
        id: 'old',
        criteria: {
          criteria: {
            impossible: {
              trigger: 'minecraft:impossible',
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/old',
      },
      {
        hide: true,
        id: 'cryptic',
        criteria: {
          criteria: {
            impossible: {
              trigger: 'minecraft:impossible',
            },
          },
          sleep: {
            trigger: 'minecraft:slept_in_bed',
          },
        },
        reward: 'im:eyes/cryptic',
      },
    ],
  });
});
