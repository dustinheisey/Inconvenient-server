// onEvent("rei.group", (event) => {
//     function groupNBT(ids) {
//         ids.forEach((id) => {
//             const item = Item.of(id);
//             const { namespace, path } = Utils.id(item.id);
//             event.groupSameItem(
//                 groupId(`${namespace}/${path}`),
//                 item.getName(),
//                 item
//             );
//         });
//     }

//     function groupNBTWithName(id, name) {
//         const item = Item.of(id);
//         const { namespace, path } = Utils.id(item.id);
//         event.groupSameItem(groupId(`${namespace}/${path}`), name, item);
//     }

//     groupNBTWithName("potion", "Potion");
//     groupNBTWithName("lingering_potion", "Lingering Potion");
//     groupNBTWithName("splash_potion", "Splash Potion");
//     groupNBTWithName("tipped_arrow", "Tipped Arrow");
//     groupNBTWithName("tconstruct:potion_bucket", "Potion Bucket");
//     groupNBTWithName("immersiveengineering:potion_bucket", "Potion Bucket");
//     groupNBTWithName("botania:brew_flask", "Brew Flask");
//     groupNBTWithName("botania:brew_vial", "Brew Vial");
//     groupNBTWithName("tconstruct:scorched_anvil", "Scorched Anvil");
//     groupNBTWithName("tconstruct:slime_helmet", "Slimeskull");

//     groupNBT([
//         "productivebees:stone_chip",
//         "productivebees:wood_chip",
//         "tconstruct:modifier_worktable",
//         "productivebees:configurable_honeycomb",
//         "blue_skies:loot_bag",
//         "blue_skies:loot_bag_summoner",
//         "blue_skies:loot_bag_alchemist",
//         "blue_skies:loot_bag_starlit_crusher",
//         "blue_skies:loot_bag_arachnarch",
//         "blue_skies:nature_arc",
//         "blue_skies:poison_arc",
//         "blue_skies:dusk_arc",
//         "blue_skies:ethereal_arc",
//         "blue_skies:summoner_trophy",
//         "blue_skies:alchemist_trophy",
//         "blue_skies:starlit_crusher_trophy",
//         "blue_skies:arachnarch_trophy",
//         "tconstruct:crafting_station",
//         "tconstruct:tinker_station",
//         "tconstruct:part_builder",
//         "enchanted_book",
//         "bloodmagic:upgradetome",
//         "immersiveengineering:shader",
//         "ceramicbucket:ceramic_bucket",
//         "botania:incense_stick",
//         "tconstruct:seared_drain",
//         "tconstruct:seared_duct",
//         "tconstruct:seared_chute",
//         "tconstruct:scorched_drain",
//         "tconstruct:scorched_duct",
//         "tconstruct:scorched_chute",
//         "tconstruct:smeltery_controller",
//         "tconstruct:foundry_controller",
//         "tconstruct:tinkers_anvil",
//         "tconstruct:repair_kit",
//         "tconstruct:pick_head",
//         "tconstruct:hammer_head",
//         "tconstruct:small_axe_head",
//         "tconstruct:broad_axe_head",
//         "tconstruct:small_blade",
//         "tconstruct:broad_blade",
//         "tconstruct:round_plate",
//         "tconstruct:large_plate",
//         "tconstruct:tough_handle",
//         "tconstruct:tool_binding",
//         "tconstruct:tool_handle",
//         "tconstruct:bow_limb",
//         "tconstruct:bow_grip",
//         "tconstruct:bowstring",
//         "tconstruct:crossbow",
//         "tconstruct:longbow",
//         "tconstruct:pickaxe",
//         "tconstruct:sledge_hammer",
//         "tconstruct:vein_hammer",
//         "tconstruct:mattock",
//         "tconstruct:pickadze",
//         "tconstruct:excavator",
//         "tconstruct:hand_axe",
//         "tconstruct:broad_axe",
//         "tconstruct:kama",
//         "tconstruct:scythe",
//         "tconstruct:dagger",
//         "tconstruct:sword",
//         "tconstruct:cleaver",
//         "extendedcrafting:singularity",
//         "gateways:gate_pearl",
//         "twilightforest:shader",
//         "botania:blood_pendant",
//         "botania:dreamwood_wand",
//         "botania:twig_wand",
//         "botania:laputa_shard",
//         "botania:flight_tiara",
//         "immersiveengineering:blueprint",
//         "productivebees:gene",
//         "relics:spatial_sign",
//         "relics:reflection_necklace",
//         "relics:magma_walker",
//         "relics:aqua_walker",
//         "relics:midnight_robe",
//         "relics:drowned_belt",
//         "relics:jellyfish_necklace",
//         "relics:hunter_belt",
//         "relics:rage_glove",
//         "relics:ice_skates",
//         "relics:bastion_ring",
//         "relics:chorus_inhibitor",
//         "relics:arrow_quiver",
//         "relics:holy_locket",
//         "relics:enders_hand",
//         "relics:elytra_booster",
//         "relics:magic_mirror",
//         "relics:ice_breaker",
//         "relics:blazing_flask",
//         "relics:spore_sack",
//         "relics:roller_skates",
//         "relics:leather_belt",
//         "relics:horse_flute",
//         "relics:wool_mitten",
//         "relics:amphibian_boot",
//     ]);
// });
