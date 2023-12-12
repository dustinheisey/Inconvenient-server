onEvent("server.datapack.high_priority", (event) => {
  addAdvancements(event, "armor", {
    icon: "minecraft:armor_stand",
    title: "Collection: Armor",
    tag: "im:leather_armor",
    background: "architects_palette:textures/block/myonite.png",
    children: [
      {
        title: "Leather Boots",
        description: "Craft leather boots",
        item: "minecraft:leather_boots",
        reward: "im:armor/leather/boots",
        children: [
          {
            title: "Copper Boots",
            description: "upgrade to copper boots",
            item: "charcoal_pit:copper_boots",
            reward: "im:armor/copper/boots",
            children: [
              {
                title: "Bronze Boots",
                description: "upgrade to bronze boots",
                item: "charcoal_pit:bronze_boots",
                reward: "im:armor/bronze/boots",
                children: [
                  {
                    title: "Iron Boots",
                    description: "upgrade to iron boots",
                    item: "minecraft:iron_boots",
                    reward: "im:armor/iron/boots",
                    children: [
                      {
                        title: "Charoite Boots",
                        description: "upgrade to charoite boots",
                        item: "blue_skies:charoite_boots",
                        reward: "im:armor/charoite/boots",
                        children: [
                          {
                            title: "Utherium Boots",
                            description: "upgrade to utherium boots",
                            item: "undergarden:utherium_boots",
                            reward: "im:armor/utherium/boots",
                            children: [
                              {
                                title: "Horizonite Boots",
                                description: "upgrade to horizonite boots",
                                item: "blue_skies:horizonite_boots",
                                reward: "im:armor/horizonite/boots",
                                children: [
                                  {
                                    title: "Fiery Boots",
                                    description: "upgrade to fiery boots",
                                    item: "twilightforest:fiery_boots",
                                    reward: "im:armor/fiery/boots",
                                    children: [
                                      {
                                        title: "Soul Stained Steel Boots",
                                        description:
                                          "upgrade to soul stained steel boots",
                                        item: "malum:soul_stained_steel_boots",
                                        reward:
                                          "im:armor/soul_stained_steel/boots",
                                        children: [
                                          {
                                            title: "Netherite Boots",
                                            description:
                                              "upgrade to netherite boots",
                                            item: "minecraft:netherite_boots",
                                            reward: "im:armor/netherite/boots",
                                            children: [
                                              {
                                                title: "Ignitium Boots",
                                                description:
                                                  "upgrade to ignitium boots",
                                                item: "cataclysm:ignitium_boots",
                                                reward:
                                                  "im:armor/ignitium/boots",
                                                children: [
                                                  {
                                                    title: "Engineers Boots",
                                                    description:
                                                      "upgrade to engineers boots",
                                                    item: "hem:steampunkoutfit_boots",
                                                    reward:
                                                      "im:armor/engineers/boots",
                                                    children: [
                                                      {
                                                        title:
                                                          "Brigandine Boots",
                                                        description:
                                                          "upgrade to brigandine boots",
                                                        item: "rankine:brigandine_boots",
                                                        reward:
                                                          "im:armor/brigandine/boots",
                                                        children: [
                                                          {
                                                            title:
                                                              "Compressed Iron Boots",
                                                            description:
                                                              "upgrade to compressed iron boots",
                                                            item: "pneumaticcraft:compressed_iron_boots",
                                                            reward:
                                                              "im:armor/compressed_iron/boots",
                                                            children: [
                                                              {
                                                                title:
                                                                  "Orichalcum Boots",
                                                                description:
                                                                  "upgrade to orichalcum boots",
                                                                item: "charcoal_pit:orichalcum_boots",
                                                                reward:
                                                                  "im:armor/orichalcum/boots",
                                                                children: [],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        title:
                                                          "Manasteel Boots",
                                                        description:
                                                          "upgrade to manasteel boots",
                                                        item: "botania:manasteel_boots",
                                                        reward:
                                                          "im:armor/manasteel/boots",
                                                        children: [
                                                          {
                                                            title: "Sky Boots",
                                                            description:
                                                              "upgrade to sky boots",
                                                            item: "naturesaura:sky_shoes",
                                                            reward:
                                                              "im:armor/sky/boots",
                                                            children: [
                                                              {
                                                                title:
                                                                  "Terrasteel Boots",
                                                                description:
                                                                  "upgrade to terrasteel boots",
                                                                item: "botania:terrasteel_boots",
                                                                reward:
                                                                  "im:armor/terrasteel/boots",
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
        title: "Leather Chestplate",
        description: "Craft leather chestplate",
        item: "minecraft:leather_chestplate",
        reward: "im:armor/leather/chestplate",
        children: [
          {
            title: "Copper Chestplate",
            description: "upgrade to copper chestplate",
            item: "charcoal_pit:copper_chestplate",
            reward: "im:armor/copper/chestplate",
            children: [
              {
                title: "Bronze Chestplate",
                description: "upgrade to bronze chestplate",
                item: "charcoal_pit:bronze_chestplate",
                reward: "im:armor/bronze/chestplate",
                children: [
                  {
                    title: "Iron Chestplate",
                    description: "upgrade to iron chestplate",
                    item: "minecraft:iron_chestplate",
                    reward: "im:armor/iron/chestplate",
                    children: [
                      {
                        title: "Charoite Chestplate",
                        description: "upgrade to charoite chestplate",
                        item: "blue_skies:charoite_chestplate",
                        reward: "im:armor/charoite/chestplate",
                        children: [
                          {
                            title: "Utherium Chestplate",
                            description: "upgrade to utherium chestplate",
                            item: "undergarden:utherium_chestplate",
                            reward: "im:armor/utherium/chestplate",
                            children: [
                              {
                                title: "Horizonite Chestplate",
                                description: "upgrade to horizonite chestplate",
                                item: "blue_skies:horizonite_chestplate",
                                reward: "im:armor/horizonite/chestplate",
                                children: [
                                  {
                                    title: "Fiery Chestplate",
                                    description: "upgrade to fiery chestplate",
                                    item: "twilightforest:fiery_chestplate",
                                    reward: "im:armor/fiery/chestplate",
                                    children: [
                                      {
                                        title: "Soul Stained Steel Chestplate",
                                        description:
                                          "upgrade to soul stained steel chestplate",
                                        item: "malum:soul_stained_steel_chestplate",
                                        reward:
                                          "im:armor/soul_stained_steel/chestplate",
                                        children: [
                                          {
                                            title: "Netherite Chestplate",
                                            description:
                                              "upgrade to netherite chestplate",
                                            item: "minecraft:netherite_chestplate",
                                            reward:
                                              "im:armor/netherite/chestplate",
                                            children: [
                                              {
                                                title: "Ignitium Chestplate",
                                                description:
                                                  "upgrade to ignitium chestplate",
                                                item: "cataclysm:ignitium_chestplate",
                                                reward:
                                                  "im:armor/ignitium/chestplate",
                                                children: [
                                                  {
                                                    title:
                                                      "Engineers Chestplate",
                                                    description:
                                                      "upgrade to engineers chestplate",
                                                    item: "hem:steampunkoutfit_chestplate",
                                                    reward:
                                                      "im:armor/engineers/chestplate",
                                                    children: [
                                                      {
                                                        title:
                                                          "Manasteel Chestplate",
                                                        description:
                                                          "upgrade to manasteel chestplate",
                                                        item: "botania:manasteel_chestplate",
                                                        reward:
                                                          "im:armor/manasteel/chestplate",
                                                        children: [
                                                          {
                                                            title:
                                                              "Sky Chestplate",
                                                            description:
                                                              "upgrade to sky chestplate",
                                                            item: "naturesaura:sky_chest",
                                                            reward:
                                                              "im:armor/sky/chestplate",
                                                            children: [
                                                              {
                                                                title:
                                                                  "Terrasteel Chestplate",
                                                                description:
                                                                  "upgrade to terrasteel chestplate",
                                                                item: "botania:terrasteel_chestplate",
                                                                reward:
                                                                  "im:armor/terrasteel/chestplate",
                                                                children: [],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        title:
                                                          "Brigandine Chestplate",
                                                        description:
                                                          "upgrade to brigandine chestplate",
                                                        item: "rankine:brigandine_chestplate",
                                                        reward:
                                                          "im:armor/brigandine/chestplate",
                                                        children: [
                                                          {
                                                            title:
                                                              "Compressed Iron Chestplate",
                                                            description:
                                                              "upgrade to compressed iron chestplate",
                                                            item: "pneumaticcraft:compressed_iron_chestplate",
                                                            reward:
                                                              "im:armor/compressed_iron/chestplate",
                                                            children: [
                                                              {
                                                                title:
                                                                  "Orichalcum Chestplate",
                                                                description:
                                                                  "upgrade to orichalcum chestplate",
                                                                item: "charcoal_pit:orichalcum_chestplate",
                                                                reward:
                                                                  "im:armor/orichalcum/chestplate",
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
        title: "Leather Leggings",
        description: "Craft leather leggings",
        item: "minecraft:leather_leggings",
        reward: "im:armor/leather/leggings",
        children: [
          {
            title: "Copper Leggings",
            description: "upgrade to copper leggings",
            item: "charcoal_pit:copper_leggings",
            reward: "im:armor/copper/leggings",
            children: [
              {
                title: "Bronze Leggings",
                description: "upgrade to bronze leggings",
                item: "charcoal_pit:bronze_leggings",
                reward: "im:armor/bronze/leggings",
                children: [
                  {
                    title: "Iron Leggings",
                    description: "upgrade to iron leggings",
                    item: "minecraft:iron_leggings",
                    reward: "im:armor/iron/leggings",
                    children: [
                      {
                        title: "Charoite Leggings",
                        description: "upgrade to charoite leggings",
                        item: "blue_skies:charoite_leggings",
                        reward: "im:armor/charoite/leggings",
                        children: [
                          {
                            title: "Utherium Leggings",
                            description: "upgrade to utherium leggings",
                            item: "undergarden:utherium_leggings",
                            reward: "im:armor/utherium/leggings",
                            children: [
                              {
                                title: "horizonite Leggings",
                                description: "upgrade to horizonite leggings",
                                item: "blue_skies:horizonite_leggings",
                                reward: "im:armor/horizonite/leggings",
                                children: [
                                  {
                                    title: "Fiery Leggings",
                                    description: "upgrade to fiery leggings",
                                    item: "twilightforest:fiery_leggings",
                                    reward: "im:armor/fiery/leggings",
                                    children: [
                                      {
                                        title: "Soul Stained Steel Leggings",
                                        description:
                                          "upgrade to soul stained steel leggings",
                                        item: "malum:soul_stained_steel_leggings",
                                        reward:
                                          "im:armor/soul_stained_steel/leggings",
                                        children: [
                                          {
                                            title: "Netherite Leggings",
                                            description:
                                              "upgrade to netherite leggings",
                                            item: "minecraft:netherite_leggings",
                                            reward:
                                              "im:armor/netherite/leggings",
                                            children: [
                                              {
                                                title: "Ignitium Leggings",
                                                description:
                                                  "upgrade to ignitium leggings",
                                                item: "cataclysm:ignitium_leggings",
                                                reward:
                                                  "im:armor/ignitium/leggings",
                                                children: [
                                                  {
                                                    title: "Engineers Leggings",
                                                    description:
                                                      "upgrade to engineers leggings",
                                                    item: "hem:steampunkoutfit_leggings",
                                                    reward:
                                                      "im:armor/engineers/leggings",
                                                    children: [
                                                      {
                                                        title:
                                                          "Brigandine Leggings",
                                                        description:
                                                          "upgrade to brigandine leggings",
                                                        item: "rankine:brigandine_leggings",
                                                        reward:
                                                          "im:armor/brigandine/leggings",
                                                        children: [
                                                          {
                                                            title:
                                                              "Compressed Iron Leggings",
                                                            description:
                                                              "upgrade to compressed iron leggings",
                                                            item: "pneumaticcraft:compressed_iron_leggings",
                                                            reward:
                                                              "im:armor/compressed_iron/leggings",
                                                            children: [
                                                              {
                                                                title:
                                                                  "Orichalcum Leggings",
                                                                description:
                                                                  "upgrade to orichalcum leggings",
                                                                item: "charcoal_pit:orichalcum_leggings",
                                                                reward:
                                                                  "im:armor/orichalcum/leggings",
                                                                children: [],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        title:
                                                          "Manasteel Leggings",
                                                        description:
                                                          "upgrade to manasteel leggings",
                                                        item: "botania:manasteel_leggings",
                                                        reward:
                                                          "im:armor/manasteel/leggings",
                                                        children: [
                                                          {
                                                            title:
                                                              "Sky Leggings",
                                                            description:
                                                              "upgrade to sky leggings",
                                                            item: "naturesaura:sky_pants",
                                                            reward:
                                                              "im:armor/sky/leggings",
                                                            children: [
                                                              {
                                                                title:
                                                                  "Terrasteel Leggings",
                                                                description:
                                                                  "upgrade to terrasteel leggings",
                                                                item: "botania:terrasteel_leggings",
                                                                reward:
                                                                  "im:armor/terrasteel/leggings",
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
        title: "Leather Helmet",
        description: "Craft leather helmet",
        item: "minecraft:leather_helmet",
        reward: "im:armor/leather/helmet",
        children: [
          {
            title: "Copper Helmet",
            description: "upgrade to copper helmet",
            item: "charcoal_pit:copper_helmet",
            reward: "im:armor/copper/helmet",
            children: [
              {
                title: "Bronze Helmet",
                description: "upgrade to bronze helmet",
                item: "charcoal_pit:bronze_helmet",
                reward: "im:armor/bronze/helmet",
                children: [
                  {
                    title: "Iron Helmet",
                    description: "upgrade to iron helmet",
                    item: "minecraft:iron_helmet",
                    reward: "im:armor/iron/helmet",
                    children: [
                      {
                        title: "Charoite Helmet",
                        description: "upgrade to charoite helmet",
                        item: "blue_skies:charoite_helmet",
                        reward: "im:armor/charoite/helmet",
                        children: [
                          {
                            title: "Utherium Helmet",
                            description: "upgrade to utherium helmet",
                            item: "undergarden:utherium_helmet",
                            reward: "im:armor/utherium/helmet",
                            children: [
                              {
                                title: "Horizonite Helmet",
                                description: "upgrade to horizonite helmet",
                                item: "blue_skies:horizonite_helmet",
                                reward: "im:armor/horizonite/helmet",
                                children: [
                                  {
                                    title: "Fiery Helmet",
                                    description: "upgrade to fiery helmet",
                                    item: "twilightforest:fiery_helmet",
                                    reward: "im:armor/fiery/helmet",
                                    children: [
                                      {
                                        title: "Soul Stained Steel Helmet",
                                        description:
                                          "upgrade to soul stained steel helmet",
                                        item: "malum:soul_stained_steel_helmet",
                                        reward:
                                          "im:armor/soul_stained_steel/helmet",
                                        children: [
                                          {
                                            title: "Netherite Helmet",
                                            description:
                                              "upgrade to netherite helmet",
                                            item: "minecraft:netherite_helmet",
                                            reward: "im:armor/netherite/helmet",
                                            children: [
                                              {
                                                title: "Ignitium Helmet",
                                                description:
                                                  "upgrade to ignitium helmet",
                                                item: "cataclysm:ignitium_helmet",
                                                reward:
                                                  "im:armor/ignitium/helmet",
                                                children: [
                                                  {
                                                    title: "Engineers Helmet",
                                                    description:
                                                      "upgrade to engineers helmet",
                                                    item: "hem:steampunkoutfit_helmet",
                                                    reward:
                                                      "im:armor/engineers/helmet",
                                                    children: [
                                                      {
                                                        title:
                                                          "Brigandine Helmet",
                                                        description:
                                                          "upgrade to brigandine helmet",
                                                        item: "rankine:brigandine_helmet",
                                                        reward:
                                                          "im:armor/brigandine/helmet",
                                                        children: [
                                                          {
                                                            title:
                                                              "Compressed Iron Helmet",
                                                            description:
                                                              "upgrade to compressed iron helmet",
                                                            item: "pneumaticcraft:compressed_iron_helmet",
                                                            reward:
                                                              "im:armor/compressed_iron/helmet",
                                                            children: [
                                                              {
                                                                title:
                                                                  "Orichalcum Helmet",
                                                                description:
                                                                  "upgrade to orichalcum helmet",
                                                                item: "charcoal_pit:orichalcum_helmet",
                                                                reward:
                                                                  "im:armor/orichalcum/helmet",
                                                                children: [],
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                      {
                                                        title:
                                                          "Manasteel Helmet",
                                                        description:
                                                          "upgrade to manasteel helmet",
                                                        item: "botania:manasteel_helmet",
                                                        reward:
                                                          "im:armor/manasteel/helmet",
                                                        children: [
                                                          {
                                                            title: "Sky Helmet",
                                                            description:
                                                              "upgrade to sky helmet",
                                                            item: "naturesaura:sky_helmet",
                                                            reward:
                                                              "im:armor/sky/helmet",
                                                            children: [
                                                              {
                                                                title:
                                                                  "Terrasteel Helmet",
                                                                description:
                                                                  "upgrade to terrasteel helmet",
                                                                item: "botania:terrasteel_helmet",
                                                                reward:
                                                                  "im:armor/terrasteel/helmet",
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
      // {
      //   title: "Leather Armor",
      //   description: "Craft all 4 pieces of leather armor",
      //   icon: "minecraft:leather_chestplate",
      //   items: [
      //     "minecraft:leather_helmet",
      //     "minecraft:leather_chestplate",
      //     "minecraft:leather_leggings",
      //     "minecraft:leather_boots",
      //   ],
      //   reward: "im:armor/leather",
      //   children: [
      //     {
      //       title: "Copper Armor",
      //       description: "Craft all 4 pieces of copper armor",
      //       icon: "charcoal_pit:copper_chestplate",
      //       items: [
      //         "charcoal_pit:copper_helmet",
      //         "charcoal_pit:copper_chestplate",
      //         "charcoal_pit:copper_leggings",
      //         "charcoal_pit:copper_boots",
      //       ],
      //       reward: "im:armor/copper",
      //       children: [
      //         {
      //           title: "Bronze Armor",
      //           description: "Craft all 4 pieces of bronze armor",
      //           icon: "charcoal_pit:bronze_chestplate",
      //           items: [
      //             "charcoal_pit:bronze_helmet",
      //             "charcoal_pit:bronze_chestplate",
      //             "charcoal_pit:bronze_leggings",
      //             "charcoal_pit:bronze_boots",
      //           ],
      //           children: [
      //             {
      //               title: "Iron Armor",
      //               description: "Craft all 4 pieces of iron armor",
      //               icon: "minecraft:iron_chestplate",
      //               items: [
      //                 "minecraft:iron_helmet",
      //                 "minecraft:iron_chestplate",
      //                 "minecraft:iron_leggings",
      //                 "minecraft:iron_boots",
      //               ],
      //               reward: "im:armor/iron",
      //               children: [
      //                 {
      //                   title: "Aquite Armor",
      //                   description: "Craft all 4 pieces of aquite armor",
      //                   icon: "blue_skies:aquite_chestplate",
      //                   items: [
      //                     "blue_skies:aquite_helmet",
      //                     "blue_skies:aquite_chestplate",
      //                     "blue_skies:aquite_leggings",
      //                     "blue_skies:aquite_boots",
      //                   ],
      //                   children: [
      //                     {
      //                       title: "Pyrope Armor",
      //                       description: "Craft all 4 pieces of pyrope armor",
      //                       icon: "blue_skies:pyrope_chestplate",
      //                       items: [
      //                         "blue_skies:pyrope_helmet",
      //                         "blue_skies:pyrope_chestplate",
      //                         "blue_skies:pyrope_leggings",
      //                         "blue_skies:pyrope_boots",
      //                       ],
      //                       children: [
      //                         {
      //                           title: "Diopside Armor",
      //                           description:
      //                             "Craft all 4 pieces of diopside armor",
      //                           icon: "blue_skies:diopside_chestplate",
      //                           items: [
      //                             "blue_skies:diopside_helmet",
      //                             "blue_skies:diopside_chestplate",
      //                             "blue_skies:diopside_leggings",
      //                             "blue_skies:diopside_boots",
      //                           ],
      //                           children: [
      //                             {
      //                               title: "Charoite Armor",
      //                               description:
      //                                 "Craft all 4 pieces of charoite armor",
      //                               icon: "blue_skies:charoite_chestplate",
      //                               items: [
      //                                 "blue_skies:charoite_helmet",
      //                                 "blue_skies:charoite_chestplate",
      //                                 "blue_skies:charoite_leggings",
      //                                 "blue_skies:charoite_boots",
      //                               ],
      //                               reward: "im:armor/charoite",
      //                               children: [
      //                                 {
      //                                   title: "Sylvan Armor",
      //                                   description:
      //                                     "Craft all 4 pieces of infussed iron armor",
      //                                   icon: "naturesaura:infused_iron_chest",
      //                                   items: [
      //                                     "naturesaura:infused_iron_helmet",
      //                                     "naturesaura:infused_iron_chest",
      //                                     "naturesaura:infused_iron_pants",
      //                                     "naturesaura:infused_iron_shoes",
      //                                   ],
      //                                   reward: "im:armor/infused",
      //                                   children: [
      //                                     {
      //                                       title: "Cloggrum Armor",
      //                                       description:
      //                                         "Craft all 4 pieces of cloggrum armor",
      //                                       icon: "undergarden:cloggrum_chestplate",
      //                                       items: [
      //                                         "undergarden:cloggrum_helmet",
      //                                         "undergarden:cloggrum_chestplate",
      //                                         "undergarden:cloggrum_leggings",
      //                                         "undergarden:cloggrum_boots",
      //                                       ],
      //                                       children: [
      //                                         {
      //                                           title: "Froststeel Armor",
      //                                           description:
      //                                             "Craft all 4 pieces of froststeel armor",
      //                                           icon: "undergarden:froststeel_chestplate",
      //                                           items: [
      //                                             "undergarden:froststeel_helmet",
      //                                             "undergarden:froststeel_chestplate",
      //                                             "undergarden:froststeel_leggings",
      //                                             "undergarden:froststeel_boots",
      //                                           ],
      //                                           children: [
      //                                             {
      //                                               title: "Utherium Armor",
      //                                               description:
      //                                                 "Craft all 4 pieces of utherium armor",
      //                                               icon: "undergarden:utherium_chestplate",
      //                                               items: [
      //                                                 "undergarden:utherium_helmet",
      //                                                 "undergarden:utherium_chestplate",
      //                                                 "undergarden:utherium_leggings",
      //                                                 "undergarden:utherium_boots",
      //                                               ],
      //                                               reward: "im:armor/utherium",
      //                                               children: [
      //                                                 {
      //                                                   title:
      //                                                     "Horizonite Armor",
      //                                                   description:
      //                                                     "Craft all 4 pieces of horizonite armor",
      //                                                   icon: "blue_skies:horizonite_chestplate",
      //                                                   items: [
      //                                                     "blue_skies:horizonite_helmet",
      //                                                     "blue_skies:horizonite_chestplate",
      //                                                     "blue_skies:horizonite_leggings",
      //                                                     "blue_skies:horizonite_boots",
      //                                                   ],
      //                                                   reward:
      //                                                     "im:armor/horizonite",
      //                                                   children: [
      //                                                     {
      //                                                       title:
      //                                                         "Ironwood Armor",
      //                                                       description:
      //                                                         "Craft all 4 pieces of ironwood armor",
      //                                                       icon: "twilightforest:ironwood_chestplate",
      //                                                       items: [
      //                                                         "twilightforest:ironwood_helmet",
      //                                                         "twilightforest:ironwood_chestplate",
      //                                                         "twilightforest:ironwood_leggings",
      //                                                         "twilightforest:ironwood_boots",
      //                                                       ],
      //                                                       children: [
      //                                                         {
      //                                                           title:
      //                                                             "Arctic Armor",
      //                                                           description:
      //                                                             "Craft all 4 pieces of arctic armor",
      //                                                           icon: "twilightforest:arctic_chestplate",
      //                                                           items: [
      //                                                             "twilightforest:arctic_helmet",
      //                                                             "twilightforest:arctic_chestplate",
      //                                                             "twilightforest:arctic_leggings",
      //                                                             "twilightforest:arctic_boots",
      //                                                           ],
      //                                                           children: [
      //                                                             {
      //                                                               title:
      //                                                                 "Yeti Armor",
      //                                                               description:
      //                                                                 "Craft all 4 pieces of yeti armor",
      //                                                               icon: "twilightforest:yeti_chestplate",
      //                                                               items: [
      //                                                                 "twilightforest:yeti_helmet",
      //                                                                 "twilightforest:yeti_chestplate",
      //                                                                 "twilightforest:yeti_leggings",
      //                                                                 "twilightforest:yeti_boots",
      //                                                               ],
      //                                                               children: [
      //                                                                 {
      //                                                                   title:
      //                                                                     "Steeleaf Armor",
      //                                                                   description:
      //                                                                     "Craft all 4 pieces of Steeleaf armor",
      //                                                                   icon: "twilightforest:steeleaf_chestplate",
      //                                                                   items: [
      //                                                                     "twilightforest:steeleaf_helmet",
      //                                                                     "twilightforest:steeleaf_chestplate",
      //                                                                     "twilightforest:steeleaf_leggings",
      //                                                                     "twilightforest:steeleaf_boots",
      //                                                                   ],
      //                                                                   children:
      //                                                                     [
      //                                                                       {
      //                                                                         title:
      //                                                                           "Knightmetal Armor",
      //                                                                         description:
      //                                                                           "Craft all 4 pieces of knightmetal armor",
      //                                                                         icon: "twilightforest:knightmetal_chestplate",
      //                                                                         items:
      //                                                                           [
      //                                                                             "twilightforest:knightmetal_helmet",
      //                                                                             "twilightforest:knightmetal_chestplate",
      //                                                                             "twilightforest:knightmetal_leggings",
      //                                                                             "twilightforest:knightmetal_boots",
      //                                                                           ],
      //                                                                         reward:
      //                                                                           "im:armor/knightmetal",
      //                                                                         children:
      //                                                                           [
      //                                                                             {
      //                                                                               title:
      //                                                                                 "Fiery Armor",
      //                                                                               description:
      //                                                                                 "Craft all 4 pieces of fiery armor",
      //                                                                               icon: "twilightforest:fiery_chestplate",
      //                                                                               items:
      //                                                                                 [
      //                                                                                   "twilightforest:fiery_helmet",
      //                                                                                   "twilightforest:fiery_chestplate",
      //                                                                                   "twilightforest:fiery_leggings",
      //                                                                                   "twilightforest:fiery_boots",
      //                                                                                 ],

      //                                                                               children:
      //                                                                                 [
      //                                                                                   {
      //                                                                                     title:
      //                                                                                       "Netherite Armor",
      //                                                                                     description:
      //                                                                                       "Craft all 4 pieces of netherite armor",
      //                                                                                     icon: "minecraft:netherite_chestplate",
      //                                                                                     items:
      //                                                                                       [
      //                                                                                         "minecraft:netherite_helmet",
      //                                                                                         "minecraft:netherite_chestplate",
      //                                                                                         "minecraft:netherite_leggings",
      //                                                                                         "minecraft:netherite_boots",
      //                                                                                       ],
      //                                                                                     children:
      //                                                                                       [
      //                                                                                         {
      //                                                                                           title:
      //                                                                                             "Ignitium Armor",
      //                                                                                           description:
      //                                                                                             "Craft all 4 pieces of ignitium armor",
      //                                                                                           icon: "cataclysm:ignitium_chestplate",
      //                                                                                           items:
      //                                                                                             [
      //                                                                                               "cataclysm:ignitium_helmet",
      //                                                                                               "cataclysm:ignitium_chestplate",
      //                                                                                               "cataclysm:ignitium_leggings",
      //                                                                                               "cataclysm:ignitium_boots",
      //                                                                                             ],

      //                                                                                           children:
      //                                                                                             [
      //                                                                                               {
      //                                                                                                 title:
      //                                                                                                   "Steampunk Armor",
      //                                                                                                 description:
      //                                                                                                   "Craft all 4 pieces of steampunk armor",
      //                                                                                                 icon: "hem:steampunkoutfit_chestplate",
      //                                                                                                 items:
      //                                                                                                   [
      //                                                                                                     "hem:steampunkoutfit_helmet",
      //                                                                                                     "hem:steampunkoutfit_chestplate",
      //                                                                                                     "hem:steampunkoutfit_leggings",
      //                                                                                                     "hem:steampunkoutfit_boots",
      //                                                                                                   ],

      //                                                                                                 children:
      //                                                                                                   [
      //                                                                                                     {
      //                                                                                                       title:
      //                                                                                                         "Orichalcum Armor",
      //                                                                                                       description:
      //                                                                                                         "Craft all 4 pieces of orichalcum armor",
      //                                                                                                       icon: "charcoal_pit:orichalcum_chestplate",
      //                                                                                                       items:
      //                                                                                                         [
      //                                                                                                           "charcoal_pit:orichalcum_helmet",
      //                                                                                                           "charcoal_pit:orichalcum_chestplate",
      //                                                                                                           "charcoal_pit:orichalcum_leggings",
      //                                                                                                           "charcoal_pit:orichalcum_boots",
      //                                                                                                         ],

      //                                                                                                       children:
      //                                                                                                         [
      //                                                                                                           {
      //                                                                                                             title:
      //                                                                                                               "Brigandine Armor",
      //                                                                                                             description:
      //                                                                                                               "Craft all 4 pieces of bridgandine armor",
      //                                                                                                             icon: "rankine:brigandine_chestplate",
      //                                                                                                             items:
      //                                                                                                               [
      //                                                                                                                 "rankine:brigandine_helmet",
      //                                                                                                                 "rankine:brigandine_chestplate",
      //                                                                                                                 "rankine:brigandine_leggings",
      //                                                                                                                 "rankine:brigandine_boots",
      //                                                                                                               ],
      //                                                                                                             children:
      //                                                                                                               [
      //                                                                                                                 {
      //                                                                                                                   title:
      //                                                                                                                     "Compressed Iron Armor",
      //                                                                                                                   description:
      //                                                                                                                     "Craft all 4 pieces of compressed iron armor",
      //                                                                                                                   icon: "pneumaticcraft:compressed_iron_chestplate",
      //                                                                                                                   items:
      //                                                                                                                     [
      //                                                                                                                       "pneumaticcraft:compressed_iron_helmet",
      //                                                                                                                       "pneumaticcraft:compressed_iron_chestplate",
      //                                                                                                                       "pneumaticcraft:compressed_iron_leggings",
      //                                                                                                                       "pneumaticcraft:compressed_iron_boots",
      //                                                                                                                     ],
      //                                                                                                                   children:
      //                                                                                                                     [],
      //                                                                                                                   reward:
      //                                                                                                                     "im:armor/compressed_iron",
      //                                                                                                                 },
      //                                                                                                               ],
      //                                                                                                             reward:
      //                                                                                                               "im:armor/brigandine",
      //                                                                                                           },
      //                                                                                                           {
      //                                                                                                             title:
      //                                                                                                               "Manasteel Armor",
      //                                                                                                             description:
      //                                                                                                               "Craft all 4 pieces of manasteel armor",
      //                                                                                                             icon: "botania:manasteel_chestplate",
      //                                                                                                             items:
      //                                                                                                               [
      //                                                                                                                 "botania:manasteel_helmet",
      //                                                                                                                 "botania:manasteel_chestplate",
      //                                                                                                                 "botania:manasteel_leggings",
      //                                                                                                                 "botania:manasteel_boots",
      //                                                                                                               ],
      //                                                                                                             children:
      //                                                                                                               [
      //                                                                                                                 {
      //                                                                                                                   title:
      //                                                                                                                     "Sky Armor",
      //                                                                                                                   description:
      //                                                                                                                     "Craft all 4 pieces of sky armor",
      //                                                                                                                   icon: "naturesaura:sky_chest",
      //                                                                                                                   items:
      //                                                                                                                     [
      //                                                                                                                       "naturesaura:sky_helmet",
      //                                                                                                                       "naturesaura:sky_chest",
      //                                                                                                                       "naturesaura:sky_pants",
      //                                                                                                                       "naturesaura:sky_shoes",
      //                                                                                                                     ],
      //                                                                                                                   children:
      //                                                                                                                     [
      //                                                                                                                       {
      //                                                                                                                         title:
      //                                                                                                                           "Terrasteel Armor",
      //                                                                                                                         description:
      //                                                                                                                           "Craft all 4 pieces of terrasteel armor",
      //                                                                                                                         icon: "botania:terrasteel_chestplate",
      //                                                                                                                         items:
      //                                                                                                                           [
      //                                                                                                                             "botania:terrasteel_helmet",
      //                                                                                                                             "botania:terrasteel_chestplate",
      //                                                                                                                             "botania:terrasteel_leggings",
      //                                                                                                                             "botania:terrasteel_boots",
      //                                                                                                                           ],
      //                                                                                                                         children:
      //                                                                                                                           [
      //                                                                                                                             {
      //                                                                                                                               title:
      //                                                                                                                                 "Elementium Armor",
      //                                                                                                                               description:
      //                                                                                                                                 "Craft all 4 pieces of elementium armor",
      //                                                                                                                               icon: "botania:elementium_chestplate",
      //                                                                                                                               items:
      //                                                                                                                                 [
      //                                                                                                                                   "botania:elementium_helmet",
      //                                                                                                                                   "botania:elementium_chestplate",
      //                                                                                                                                   "botania:elementium_leggings",
      //                                                                                                                                   "botania:elementium_boots",
      //                                                                                                                                 ],
      //                                                                                                                               children:
      //                                                                                                                                 [
      //                                                                                                                                   {
      //                                                                                                                                     title:
      //                                                                                                                                       "Bee Armor",
      //                                                                                                                                     description:
      //                                                                                                                                       "Craft all 4 pieces of bee armor",
      //                                                                                                                                     icon: "the_bumblezone:bumble_bee_chestplate_1",
      //                                                                                                                                     items:
      //                                                                                                                                       [
      //                                                                                                                                         "the_bumblezone:stingless_bee_helmet_1",
      //                                                                                                                                         "the_bumblezone:bumble_bee_chestplate_1",
      //                                                                                                                                         "the_bumblezone:honey_bee_leggings_1",
      //                                                                                                                                         "the_bumblezone:carpenter_bee_boots_1",
      //                                                                                                                                       ],
      //                                                                                                                                     children:
      //                                                                                                                                       [
      //                                                                                                                                         {
      //                                                                                                                                           title:
      //                                                                                                                                             "Diamond Armor",
      //                                                                                                                                           description:
      //                                                                                                                                             "Craft all 4 pieces of diamond armor",
      //                                                                                                                                           icon: "minecraft:diamond_chestplate",
      //                                                                                                                                           items:
      //                                                                                                                                             [
      //                                                                                                                                               "minecraft:diamond_helmet",
      //                                                                                                                                               "minecraft:diamond_chestplate",
      //                                                                                                                                               "minecraft:diamond_leggings",
      //                                                                                                                                               "minecraft:diamond_boots",
      //                                                                                                                                             ],

      //                                                                                                                                           children:
      //                                                                                                                                             [],
      //                                                                                                                                           reward:
      //                                                                                                                                             "im:armor/diamond",
      //                                                                                                                                         },
      //                                                                                                                                       ],
      //                                                                                                                                     reward:
      //                                                                                                                                       "im:armor/bee",
      //                                                                                                                                   },
      //                                                                                                                                 ],
      //                                                                                                                               reward:
      //                                                                                                                                 "im:armor/elementium",
      //                                                                                                                             },
      //                                                                                                                           ],
      //                                                                                                                         reward:
      //                                                                                                                           "im:armor/terrasteel",
      //                                                                                                                       },
      //                                                                                                                     ],
      //                                                                                                                   reward:
      //                                                                                                                     "im:armor/sky",
      //                                                                                                                 },
      //                                                                                                               ],
      //                                                                                                             reward:
      //                                                                                                               "im:armor/manasteel",
      //                                                                                                           },
      //                                                                                                         ],
      //                                                                                                       reward:
      //                                                                                                         "im:armor/orichalcum",
      //                                                                                                     },
      //                                                                                                   ],
      //                                                                                                 reward:
      //                                                                                                   "im:armor/engineers",
      //                                                                                               },
      //                                                                                             ],
      //                                                                                           reward:
      //                                                                                             "im:armor/ignitium",
      //                                                                                         },
      //                                                                                       ],
      //                                                                                     reward:
      //                                                                                       "im:armor/netherite",
      //                                                                                   },
      //                                                                                 ],
      //                                                                               reward:
      //                                                                                 "im:armor/fiery",
      //                                                                             },
      //                                                                           ],
      //                                                                       },
      //                                                                     ],
      //                                                                   reward:
      //                                                                     "im:armor/steeleaf",
      //                                                                 },
      //                                                               ],
      //                                                               reward:
      //                                                                 "im:armor/yeti",
      //                                                             },
      //                                                           ],
      //                                                           reward:
      //                                                             "im:armor/arctic",
      //                                                         },
      //                                                       ],
      //                                                       reward:
      //                                                         "im:armor/ironwood",
      //                                                     },
      //                                                   ],
      //                                                 },
      //                                               ],
      //                                             },
      //                                           ],
      //                                           reward: "im:armor/froststeel",
      //                                         },
      //                                       ],
      //                                       reward: "im:armor/cloggrum",
      //                                     },
      //                                   ],
      //                                 },
      //                               ],
      //                             },
      //                           ],
      //                           reward: "im:armor/diopside",
      //                         },
      //                       ],
      //                       reward: "im:armor/pyrope",
      //                     },
      //                   ],
      //                   reward: "im:armor/aquite",
      //                 },
      //               ],
      //             },
      //           ],
      //           reward: "im:armor/bronze",
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  });
});
