onEvent("lootjs", (event) => {
    function removeChestLoot(items) {
        event
            .addLootTypeModifier(
                LootType.CHEST,
                LootType.GIFT,
                LootType.FISHING
            )
            .removeLoot(items);
    }

    function addChestLoot(dimension, configs) {
        configs.forEach((config) => {
            if (config.tables) {
                config.tables.forEach((table) => {
                    event
                        .addLootTableModifier(table)
                        .anyDimension(dimension)
                        .randomChance(config.rarity || 1)
                        .addLoot(Item.of(config.id, config.count || 1));
                });
            } else {
                event
                    .addLootTypeModifier(LootType.CHEST)
                    .anyDimension(dimension)
                    .randomChance(config.rarity || 1)
                    .addLoot(Item.of(config.id, config.count || 1));
            }
        });
    }

    removeChestLoot([
        "minecraft:gunpowder",
        "minecraft:wheat",
        "minecraft:blaze_rod",
        "minecraft:milk_bucket",
        "productivebees:sturdy_bee_cage",
        "charcoal_pit:decorative_sapling",
        "minecraft:enchanted_book",
        "minecraft:bread",
        "minecraft:pumpkin_seeds",
        "minecraft:melon_seeds",
        "1minecraft:coal",
        "minecraft:name_tag",
        "minecraft:golden_apple",
        "minecraft:beetroot_seeds",
        "1minecraft:glow_berries",
        "#im:eyes",
        "endrem:witch_pupil",
        "endrem:undead_soul",
        "minecraft:iron_ingot",
        "minecraft:gold_ingot",
        "minecraft:redstone",
        "minecraft:diamond",
        "minecraft:emerald",
        "minecraft:ender_pearl",
        "minecraft:saddle",
        "minecraft:tripwire_hook",
        "minecraft:compass",
        "minecraft:book",
        "minecraft:map",
        "minecraft:arrow",
        "minecraft:black_dye",
        "minecraft:string",
        "minecraft:red_wool",
        "minecraft:orange_wool",
        "minecraft:yellow_wool",
        "minecraft:lime_wool",
        "minecraft:green_wool",
        "minecraft:light_blue_wool",
        "minecraft:cyan_wool",
        "minecraft:blue_wool",
        "minecraft:magenta_wool",
        "minecraft:purple_wool",
        "minecraft:pink_wool",
        "minecraft:white_wool",
        "minecraft:light_gray_wool",
        "minecraft:gray_wool",
        "minecraft:brown_wool",
        "minecraft:black_wool",
        "minecraft:paper",
        "minecraft:gold_nugget",
        "minecraft:porkchop",
        "minecraft:beef",
        "minecraft:mutton",
        "minecraft:feather",
        "minecraft:egg",
        "minecraft:leather",
        "minecraft:lapis_lazuli",
        "minecraft:obsidian",
        "minecraft:rail",
        "minecraft:powered_rail",
        "minecraft:detector_rail",
        "minecraft:activator_rail",
        "minecraft:cooked_porkchop",
        "minecraft:tnt",
        "seeker_compass:seeker_compass",
        "minecraft:gold_block",
        "tconstruct:earth_slime_sapling",
        "tconstruct:sky_slime_sapling",
        "tconstruct:ender_slime_sapling",
        "tconstruct:blood_slime_sapling",
        "tconstruct:earth_slime_grass_seeds",
        "tconstruct:sky_slime_grass_seeds",
        "tconstruct:ender_slime_grass_seeds",
        "tconstruct:blood_slime_grass_seeds",
        "minecraft:bucket",
        "botania:black_lotus",
        "botania:overgrowth_seed",
        "botania:manasteel_ingot",
        "botania:lexicon",
        "botania:mana_bottle",
        "minecraft:chicken",
        "minecraft:rabbit_hide",
        "minecraft:rabbit_foot",
        "minecraft:phantom_membrane",
        "minecraft:cooked_rabbit",
        "minecraft:cooked_chicken",
        "minecraft:cooked_beef",
        "minecraft:cooked_mutton",
        "minecraft:blaze_powder",
        "charcoal_pit:random_sapling",
        "minecraft:coal",
        "minecraft:enchanted_golden_apple",
        Item.of("minecraft:golden_horse_armor").ignoreNBT(),
        Item.of("minecraft:iron_horse_armor").ignoreNBT(),
        Item.of("minecraft:diamond_horse_armor").ignoreNBT(),
        Item.of("minecraft:diamond_helmet").ignoreNBT(),
        Item.of("minecraft:diamond_chestplate").ignoreNBT(),
        Item.of("minecraft:diamond_leggings").ignoreNBT(),
        Item.of("minecraft:diamond_boots").ignoreNBT(),
        Item.of("minecraft:golden_helmet").ignoreNBT(),
        Item.of("minecraft:golden_chestplate").ignoreNBT(),
        Item.of("minecraft:golden_leggings").ignoreNBT(),
        Item.of("minecraft:golden_boots").ignoreNBT(),
        Item.of("minecraft:wooden_sword").ignoreNBT(),
        Item.of("minecraft:wooden_shovel").ignoreNBT(),
        Item.of("minecraft:wooden_pickaxe").ignoreNBT(),
        Item.of("minecraft:wooden_axe").ignoreNBT(),
        Item.of("minecraft:wooden_hoe").ignoreNBT(),
        Item.of("minecraft:golden_sword").ignoreNBT(),
        Item.of("minecraft:golden_shovel").ignoreNBT(),
        Item.of("minecraft:golden_pickaxe").ignoreNBT(),
        Item.of("minecraft:golden_axe").ignoreNBT(),
        Item.of("minecraft:golden_hoe").ignoreNBT(),
        Item.of("minecraft:diamond_sword").ignoreNBT(),
        Item.of("minecraft:diamond_shovel").ignoreNBT(),
        Item.of("minecraft:diamond_pickaxe").ignoreNBT(),
        Item.of("minecraft:diamond_axe").ignoreNBT(),
        Item.of("minecraft:diamond_hoe").ignoreNBT(),
        Item.of("relics:infinity_ham").ignoreNBT(),
        Item.of("relics:chorus_inhibitor").ignoreNBT(),
        Item.of("relics:enders_hand").ignoreNBT(),
        Item.of("relics:elytra_booster").ignoreNBT(),
        Item.of("relics:magic_mirror").ignoreNBT(),
        Item.of("relics:shadow_glaive").ignoreNBT(),
        Item.of("relics:spatial_sign").ignoreNBT(),
        Item.of("relics:reflection_necklace").ignoreNBT(),
        Item.of("relics:magma_walker").ignoreNBT(),
        Item.of("relics:aqua_walker").ignoreNBT(),
        Item.of("relics:midnight_robe").ignoreNBT(),
        Item.of("relics:scarab_talisman").ignoreNBT(),
        Item.of("relics:stellar_catalyst").ignoreNBT(),
        Item.of("relics:drowned_belt").ignoreNBT(),
        Item.of("relics:jellyfish_necklace").ignoreNBT(),
        Item.of("relics:hunter_belt").ignoreNBT(),
        Item.of("relics:hunter_belt").ignoreNBT(),
        Item.of("relics:rage_glove").ignoreNBT(),
        Item.of("relics:ice_skates").ignoreNBT(),
        Item.of("relics:camouflage_ring").ignoreNBT(),
        Item.of("relics:delay_ring").ignoreNBT(),
        Item.of("relics:bastion_ring").ignoreNBT(),
        Item.of("relics:arrow_quiver").ignoreNBT(),
        Item.of("relics:lucky_horseshoe").ignoreNBT(),
        Item.of("relics:space_dissector").ignoreNBT(),
        Item.of("relics:soul_devourer").ignoreNBT(),
        Item.of("relics:holy_locket").ignoreNBT(),
        Item.of("relics:fragrant_flower").ignoreNBT(),
        Item.of("relics:ice_breaker").ignoreNBT(),
        Item.of("relics:blazing_flask").ignoreNBT(),
        Item.of("relics:spider_necklace").ignoreNBT(),
        Item.of("relics:spore_sack").ignoreNBT(),
        Item.of("relics:roller_skates").ignoreNBT(),
        Item.of("relics:old_boot").ignoreNBT(),
        Item.of("relics:leather_belt").ignoreNBT(),
        Item.of("relics:horse_flute").ignoreNBT(),
        Item.of("relics:wool_mitten").ignoreNBT(),
        Item.of("relics:ghost_skin_talisman").ignoreNBT(),
        Item.of("relics:amphibian_boot").ignoreNBT(),
        Item.of("relics:amphibian_boot").ignoreNBT(),
        Item.of("relics:slime_heart").ignoreNBT(),
    ]);

    addChestLoot("blue_skies:everbright", [
        {
            rarity: 0.2,
            id: "kubejs:lost_page_everbright",
        },
        { rarity: 0.3, id: "brewinandchewin:salty_folly" },
        { rarity: 0.07, id: "relics:ice_skates" },
        { rarity: 0.07, id: "relics:drowned_belt" },
        { rarity: 0.07, id: "relics:jellyfish_necklace" },
        { rarity: 0.07, id: "relics:old_boot" },
        { rarity: 0.07, id: "relics:aqua_walker" },
    ]);

    addChestLoot("undergarden:undergarden", [
        {
            rarity: 0.2,
            id: "kubejs:lost_page_undergarden",
        },
        { rarity: 0.07, id: "relics:amphibian_boot" },
        { rarity: 0.07, id: "relics:spore_sack" },
        { rarity: 0.07, id: "relics:slime_heart" },
    ]);

    addChestLoot("blue_skies:everdawn", [
        {
            rarity: 0.2,
            id: "kubejs:lost_page_everdawn",
        },
        { rarity: 0.07, id: "relics:magic_mirror" },
        { rarity: 0.07, id: "relics:scarab_talisman" },
        { rarity: 0.07, id: "relics:spider_necklace" },
    ]);

    addChestLoot("twilightforest:twilight_forest", [
        {
            rarity: 0.2,
            id: "kubejs:lost_page_twilight",
        },
        { rarity: 0.07, id: "relics:leather_belt" },
        { rarity: 0.07, id: "relics:hunter_belt" },
        { rarity: 0.07, id: "relics:arrow_quiver" },
        { rarity: 0.07, id: "relics:lucky_horseshoe" },
        { rarity: 0.07, id: "relics:roller_skates" },
        { rarity: 0.07, id: "relics:ice_breaker" },
    ]);

    addChestLoot("minecraft:nether", [
        {
            rarity: 0.2,
            id: "kubejs:lost_page_nether",
        },
        { rarity: 0.07, id: "relics:magma_walker" },
        { rarity: 0.07, id: "relics:rage_glove" },
        { rarity: 0.07, id: "relics:bastion_ring" },
        { rarity: 0.07, id: "relics:blazing_flask" },
        { rarity: 0.07, id: "relics:spatial_sign" },
    ]);

    addChestLoot("hem:blueleaf", [
        {
            rarity: 0.2,
            id: "kubejs:lost_page_blueleaf",
        },
        { rarity: 0.07, id: "relics:holy_locket" },
        { rarity: 0.07, id: "relics:fragrant_flower" },
        { rarity: 0.07, id: "relics:horse_flute" },
        { rarity: 0.07, id: "relics:wool_mitten" },
        { rarity: 0.07, id: "relics:camouflage_ring" },
        { rarity: 0.07, id: "relics:ghost_skin_talisman" },
        { rarity: 0.07, id: "relics:delay_ring" },
    ]);

    addChestLoot("minecraft:end", [
        { rarity: 0.07, id: "relics:chorus_inhibitor" },
        { rarity: 0.07, id: "relics:enders_hand" },
        { rarity: 0.07, id: "relics:elytra_booster" },
        { rarity: 0.07, id: "relics:shadow_glaive" },
        { rarity: 0.07, id: "relics:reflection_necklace" },
        { rarity: 0.07, id: "relics:midnight_robe" },
        { rarity: 0.07, id: "relics:stellar_catalyst" },
        { rarity: 0.07, id: "relics:space_dissector" },
        { rarity: 0.07, id: "relics:soul_devourer" },
    ]);
});