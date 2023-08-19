onEvent("lootjs", (event) => {
    function removeLoot(item, mob) {
        if (mob) {
            event
                .addEntityLootModifier(mob)
                .removeLoot(Item.of(item).ignoreNBT());
        } else {
            event.addLootTypeModifier(LootType.ENTITY).removeLoot(item);
        }
    }

    removeLoot("minecraft:redstone", "minecraft:witch");
    removeLoot("minecraft:glowstone", "minecraft:witch");
    removeLoot("minecraft:gunpowder", "minecraft:witch");
    removeLoot("minecraft:sugar", "minecraft:witch");
    removeLoot("minecraft:spider_eye", "minecraft:witch");
    removeLoot("minecraft:tnt");
    removeLoot("minecraft:honeycomb");
    removeLoot("minecraft:ender_pearl");
    removeLoot("minecraft:carrot");
    removeLoot("minecraft:iron_ingot");
    removeLoot("minecraft:gold_ingot");
    removeLoot("minecraft:iron_nugget");
    removeLoot("minecraft:gold_nugget");
    removeLoot("minecraft:lapis_lazuli");
    removeLoot("minecraft:iron_ore");
    removeLoot("minecraft:gold_ore");
    removeLoot("minecraft:diamond");
    removeLoot("minecraft:coal");
    removeLoot("minecraft:feather", "blue_skies:snow_owl");
    removeLoot("minecraft:charcoal");
    removeLoot("minecraft:paper");
    removeLoot("minecraft:glowstone_dust");
    removeLoot("charcoal_pit:calamari");
    removeLoot("minecraft:golden_apple");
    removeLoot("minecraft:enchanted_golden_apple");
    removeLoot("minecraft:golden_boots");
    removeLoot("minecraft:golden_chestplate");
    removeLoot("minecraft:golden_helmet");
    removeLoot("minecraft:golden_leggings");
    removeLoot("minecraft:potato");
    removeLoot("biomancy:mob_sinew");
    removeLoot("biomancy:mob_gland");
    removeLoot("biomancy:flesh_bits");
    removeLoot("biomancy:volatile_gland");
    removeLoot("biomancy:toxin_gland");
    removeLoot("biomancy:withered_mob_marrow");
    removeLoot("biomancy:mob_marrow");
    removeLoot("biomancy:mob_claw");
    removeLoot("biomancy:mob_fang");
    removeLoot("biomancy:stone_powder");
    removeLoot("biomancy:bio_minerals");
    removeLoot("biomancy:exotic_dust");
    removeLoot("biomancy:bio_lumens");
    removeLoot("biomancy:organic_matter");
    removeLoot("biomancy:nutrients");
    removeLoot("biomancy:gem_fragments");
    removeLoot("biomancy:mineral_fragment");
    removeLoot("biomancy:elastic_fibers");
    removeLoot("biomancy:tough_fibers");
    removeLoot("biomancy:bone_fragments");
    removeLoot("minecraft:ender_pearl", "twilightforest:lich");
    removeLoot("minecraft:ender_pearl", "occultism:possessed_enderman");
    removeLoot("minecraft:mutton", "blue_skies:stardust_ram");
    removeLoot("minecraft:mutton", "twilightforest:bighorn_sheep");

    colors.forEach((color) => {
        removeLoot(`minecraft:${color}_wool`, "blue_skies:stardust_ram");
        removeLoot(`minecraft:${color}_wool`, "twilightforest:bighorn_sheep");
    });
    event
        .addEntityLootModifier("minecraft:cow")
        .matchMainHand(Item.of("butchercraft:butcher_knife").ignoreNBT())
        .addLoot("butchercraft:beef_ribs")
        .addLoot("butchercraft:beef_roast")
        .addLoot("butchercraft:beef_stewmeat");

    event
        .addEntityLootModifier("minecraft:sheep")
        .matchMainHand(Item.of("butchercraft:butcher_knife").ignoreNBT())
        .addLoot("butchercraft:lamb_ribs")
        .addLoot("butchercraft:lamb_roast")
        .addLoot("butchercraft:lamb_stewmeat");

    event
        .addEntityLootModifier("minecraft:pig")
        .matchMainHand(Item.of("butchercraft:butcher_knife").ignoreNBT())
        .addLoot("butchercraft:pork_ribs")
        .addLoot("butchercraft:pork_roast")
        .addLoot("butchercraft:pork_stewmeat");

    event
        .addEntityLootModifier("blue_skies:alchemist")
        .addLoot("minecraft:enchanting_table");

    event
        .addEntityLootModifier("ecofriendly:polluttor_phase_2_ym")
        .removeLoot("minecraft:enchanted_golden_apple")
        .addLoot("explorerscompass:explorerscompass");

    event
        .addEntityLootModifier("occultism:afrit_wild")
        .addLoot("occultism:afrit_essence");
    event
        .addEntityLootModifier("blue_skies:nyctofly")
        .addLoot("tconstruct:sky_slime_ball");
    event
        .addEntityLootModifier("blue_skies:firefly")
        .addLoot("tconstruct:sky_slime_ball");
    event
        .addEntityLootModifier("blue_skies:arachnarch")
        .addLoot("blue_skies:venom_sac");
    event
        .addEntityLootModifier("blue_skies:emberback")
        .addLoot("minecraft:slime_ball");
    event
        .addEntityLootModifier("blue_skies:infested_swarmer")
        .addLoot("minecraft:slime_ball");
    event
        .addEntityLootModifier("blue_skies:venom_spider")
        .addLoot("minecraft:slime_ball");
    event
        .addEntityLootModifier("blue_skies:arachnarch")
        .addLoot("minecraft:slime_ball");
    event
        .addEntityLootModifier("blue_skies:seclam")
        .addLoot("blue_skies:pearl");

    event
        .addEntityLootModifier("minecraft:zombie")
        .randomChance(0.1)
        .addLoot("butchercraft:brain");
    event
        .addEntityLootModifier("biomancy:flesh_blob")
        .randomChance(0.1)
        .addLoot("butchercraft:brain");
    event
        .addEntityLootModifier("minecraft:husk")
        .randomChance(0.1)
        .addLoot("butchercraft:brain");
    event
        .addEntityLootModifier("minecraft:zombie")
        .randomChance(0.5)
        .addLoot("minecraft:bone");
    event
        .addEntityLootModifier("minecraft:husk")
        .randomChance(0.5)
        .addLoot("minecraft:bone");
    event
        .addEntityLootModifier("biomancy:flesh_blob")
        .randomChance(0.1)
        .addLoot("endrem:undead_soul");
    event
        .addEntityLootModifier("blue_skies:artificial_golem")
        .randomChance(0.5)
        .addLoot("blue_skies:soul_fragment");

    event
        .addEntityLootModifier("blue_skies:azulfo")
        .randomChance(0.5)
        .addLoot("hexerei:animal_fat");
    event
        .addEntityLootModifier("blue_skies:stardust_ram")
        .randomChance(0.5)
        .addLoot("hexerei:animal_fat");
    event
        .addEntityLootModifier("twilightforest:bighorn_sheep")
        .randomChance(0.5)
        .addLoot("hexerei:animal_fat");
    event
        .addEntityLootModifier("blue_skies:reindeer")
        .randomChance(0.5)
        .addLoot("hexerei:animal_fat");

    event
        .addEntityLootModifier("cataclysm:ignited_revenant")
        .addLoot("3x cataclysm:burning_ashes");

    event
        .addEntityLootModifier("cataclysm:ignis")
        .addLoot("24x cataclysm:ignitium_ingot");
});
