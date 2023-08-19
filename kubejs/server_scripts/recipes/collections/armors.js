// priority: 100

onEvent("recipes", (event) => {
    // ? functions
    const stage_armor_tier = (config) => {
        //  ? removals
        if (config.custom) {
            config.custom.pieces.forEach((piece) =>
                event.remove({ output: `${config.custom.tier}_${piece}` })
            );
        } else {
            ["helmet", "chestplate", "leggings", "boots"].forEach((piece) =>
                event.remove({ output: `${config.tier}_${piece}` })
            );
        }

        // ? recipes
        if (config.custom) {
            event
                .shaped(
                    `${config.custom.tier}_${config.custom.pieces[0]}`,
                    ["aaa", "aba"],
                    {
                        a: config.input_material,
                        b: `${config.custom.previous_tier}_${config.custom.previous_pieces[0]}`,
                    }
                )
                .stage(config.unlock_stage);

            if (config.master_stage)
                event
                    .shaped(
                        `${config.custom.tier}_${config.custom.pieces[0]}`,
                        ["aaa", "a a"],
                        {
                            a: config.input_material,
                        }
                    )
                    .stage(config.master_stage);

            event
                .shaped(
                    `${config.custom.tier}_${config.custom.pieces[1]}`,
                    ["aba", "aaa", "aaa"],
                    {
                        a: config.input_material,
                        b: `${config.custom.previous_tier}_${config.custom.previous_pieces[1]}`,
                    }
                )
                .stage(config.unlock_stage);

            if (config.master_stage)
                event
                    .shaped(
                        `${config.custom.tier}_${config.custom.pieces[1]}`,
                        ["a a", "aaa", "aaa"],
                        {
                            a: config.input_material,
                        }
                    )
                    .stage(config.master_stage);

            event
                .shaped(
                    `${config.custom.tier}_${config.custom.pieces[2]}`,
                    ["aaa", "aba", "a a"],
                    {
                        a: config.input_material,
                        b: `${config.custom.previous_tier}_${config.custom.previous_pieces[2]}`,
                    }
                )
                .stage(config.unlock_stage);

            if (config.master_stage)
                event
                    .shaped(
                        `${config.custom.tier}_${config.custom.pieces[2]}`,
                        ["aaa", "a a", "a a"],
                        {
                            a: config.input_material,
                        }
                    )
                    .stage(config.master_stage);

            event
                .shaped(
                    `${config.custom.tier}_${config.custom.pieces[3]}`,
                    ["aba", "a a"],
                    {
                        a: config.input_material,
                        b: `${config.custom.previous_tier}_${config.custom.previous_pieces[3]}`,
                    }
                )
                .stage(config.unlock_stage);

            if (config.master_stage)
                event
                    .shaped(
                        `${config.custom.tier}_${config.custom.pieces[3]}`,
                        ["a a", "a a"],
                        {
                            a: config.input_material,
                        }
                    )
                    .stage(config.master_stage);
        } else {
            event
                .shaped(`${config.tier}_helmet`, ["aaa", "aba"], {
                    a: config.input_material,
                    b: `${config.previous_tier}_helmet`,
                })
                .stage(config.unlock_stage);

            if (config.master_stage)
                event
                    .shaped(`${config.tier}_helmet`, ["aaa", "a a"], {
                        a: config.input_material,
                    })
                    .stage(config.master_stage);

            event
                .shaped(`${config.tier}_chestplate`, ["aba", "aaa", "aaa"], {
                    a: config.input_material,
                    b: `${config.previous_tier}_chestplate`,
                })
                .stage(config.unlock_stage);

            if (config.master_stage)
                event
                    .shaped(
                        `${config.tier}_chestplate`,
                        ["a a", "aaa", "aaa"],
                        {
                            a: config.input_material,
                        }
                    )
                    .stage(config.master_stage);

            event
                .shaped(`${config.tier}_leggings`, ["aaa", "aba", "a a"], {
                    a: config.input_material,
                    b: `${config.previous_tier}_leggings`,
                })
                .stage(config.unlock_stage);

            if (config.master_stage)
                event
                    .shaped(`${config.tier}_leggings`, ["aaa", "a a", "a a"], {
                        a: config.input_material,
                    })
                    .stage(config.master_stage);

            event
                .shaped(`${config.tier}_boots`, ["aba", "a a"], {
                    a: config.input_material,
                    b: `${config.previous_tier}_boots`,
                })
                .stage(config.unlock_stage);

            if (config.master_stage)
                event
                    .shaped(`${config.tier}_boots`, ["a a", "a a"], {
                        a: config.input_material,
                    })
                    .stage(config.master_stage);
        }
    };

    const stage_bee_armor = () => {
        [
            "the_bumblezone:stingless_bee_helmet_1",
            "the_bumblezone:honey_bee_leggings_1",
            "the_bumblezone:bumble_bee_chestplate_1",
            "the_bumblezone:carpenter_bee_boots_1",
        ].forEach((piece) => {
            event.remove({ output: piece });
        });

        event
            .shaped("the_bumblezone:stingless_bee_helmet_1", ["aaa", "aba"], {
                a: "productivebees:wax",
                b: "botania:elementium_helmet",
            })
            .stage("stage_5_1");

        event
            .shaped("the_bumblezone:stingless_bee_helmet_1", ["aaa", "a a"], {
                a: "productivebees:wax",
            })
            .stage("armor_bee");

        event
            .shaped(
                "the_bumblezone:bumble_bee_chestplate_1",
                ["aba", "aaa", "aaa"],
                {
                    a: "productivebees:wax",
                    b: "botania:elementium_chestplate",
                }
            )
            .stage("stage_5_1");

        event
            .shaped(
                "the_bumblezone:bumble_bee_chestplate_1",
                ["a a", "aaa", "aaa"],
                {
                    a: "productivebees:wax",
                }
            )
            .stage("armor_bee");

        event
            .shaped(
                "the_bumblezone:honey_bee_leggings_1",
                ["aaa", "aba", "a a"],
                {
                    a: "productivebees:wax",
                    b: "botania:elementium_leggings",
                }
            )
            .stage("stage_5_1");

        event
            .shaped(
                "the_bumblezone:honey_bee_leggings_1",
                ["aaa", "a a", "a a"],
                {
                    a: "productivebees:wax",
                }
            )
            .stage("armor_bee");

        event
            .shaped("the_bumblezone:carpenter_bee_boots_1", ["aba", "a a"], {
                a: "productivebees:wax",
                b: "botania:elementium_boots",
            })
            .stage("stage_5_1");

        event
            .shaped("the_bumblezone:carpenter_bee_boots_1", ["a a", "a a"], {
                a: "productivebees:wax",
            })
            .stage("armor_bee");
    };

    const stage_diamond_armor = () => {
        [
            "minecraft:diamond_helmet",
            "minecraft:diamond_chestplate",
            "minecraft:diamond_leggings",
            "minecraft:diamond_boots",
        ].forEach((piece) => {
            event.remove({ output: piece });
        });

        event
            .shaped("minecraft:diamond_helmet", ["aaa", "aba"], {
                a: "minecraft:diamond",
                b: "the_bumblezone:stingless_bee_helmet_1",
            })
            .stage("stage_7_1");

        event
            .shaped("minecraft:diamond_helmet", ["aaa", "a a"], {
                a: "minecraft:diamond",
            })
            .stage("armor_diamond");

        event
            .shaped("minecraft:diamond_chestplate", ["aba", "aaa", "aaa"], {
                a: "minecraft:diamond",
                b: "the_bumblezone:bumble_bee_chestplate_1",
            })
            .stage("stage_7_1");

        event
            .shaped("minecraft:diamond_chestplate", ["a a", "aaa", "aaa"], {
                a: "minecraft:diamond",
            })
            .stage("armor_diamond");

        event
            .shaped("minecraft:diamond_leggings", ["aaa", "aba", "a a"], {
                a: "minecraft:diamond",
                b: "the_bumblezone:honey_bee_leggings_1",
            })
            .stage("stage_7_1");

        event
            .shaped("minecraft:diamond_leggings", ["aaa", "a a", "a a"], {
                a: "minecraft:diamond",
            })
            .stage("armor_diamond");

        event
            .shaped("minecraft:diamond_boots", ["aba", "a a"], {
                a: "minecraft:diamond",
                b: "the_bumblezone:carpenter_bee_boots_1",
            })
            .stage("stage_7_1");

        event
            .shaped("minecraft:diamond_boots", ["a a", "a a"], {
                a: "minecraft:diamond",
            })
            .stage("armor_diamond");
    };

    // const stage_mekasuit_armor = () => {
    //     [
    //         "mekanism:mekasuit_helmet",
    //         "mekanism:mekasuit_bodyarmor",
    //         "mekanism:mekasuit_pants",
    //         "mekanism:mekanism_boots",
    //     ].forEach((piece) => event.remove({ output: piece }));

    //     event
    //         .shaped("mekanism:mekasuit_helmet", ["aba", "aca", "ded"], {
    //             a: "mekanism:hdpe_sheet",
    //             b: "mekanism:ultimate_control_circuit",
    //             c: "mythicbotany:alfsteel_helmet",
    //             d: "mekanism:pellet_polonium",
    //             e: "mekanism:basic_induction_cell",
    //         })
    //         .stage("stage_7_1");

    //     event
    //         .shaped("mekanism:mekasuit_bodyarmor", ["aba", "aca", "ded"], {
    //             a: "mekanism:hdpe_sheet",
    //             b: "mekanism:ultimate_control_circuit",
    //             c: "mythicbotany:alfsteel_chestplate",
    //             d: "mekanism:pellet_polonium",
    //             e: "mekanism:basic_induction_cell",
    //         })
    //         .stage("stage_7_1");

    //     event
    //         .shaped("mekanism:mekasuit_pants", ["aba", "aca", "ded"], {
    //             a: "mekanism:hdpe_sheet",
    //             b: "mekanism:ultimate_control_circuit",
    //             c: "mythicbotany:alfsteel_leggings",
    //             d: "mekanism:pellet_polonium",
    //             e: "mekanism:basic_induction_cell",
    //         })
    //         .stage("stage_7_1");

    //     event
    //         .shaped("mekanism:mekasuit_boots", ["aba", "aca", "ded"], {
    //             a: "mekanism:hdpe_sheet",
    //             b: "mekanism:ultimate_control_circuit",
    //             c: "mythicbotany:alfsteel_boots",
    //             d: "mekanism:pellet_polonium",
    //             e: "mekanism:basic_induction_cell",
    //         })
    //         .stage("stage_7_1");
    // };

    // const stage_pneumatic_armor = () => {
    //     [
    //         "pneumaticcraft:pneumatic_helmet",
    //         "pneumaticcraft:pneumatic_chestplate",
    //         "pneumaticcraft:pneumatic_leggings",
    //         "pneumaticcraft:pneumatic_boots",
    //     ].forEach((piece) => event.remove({ output: piece }));

    //     event
    //         .shaped("pneumaticcraft:pneumatic_helmet", ["aba", "aca", "aaa"], {
    //             a: "pneumaticcraft:air_canister",
    //             b: "pneumaticcraft:printed_circuit_board",
    //             c: "infectum:test_helmet",
    //         })
    //         .stage("stage_7_2");

    //     event
    //         .shaped(
    //             "pneumaticcraft:pneumatic_chestplate",
    //             ["aba", "aca", "aaa"],
    //             {
    //                 a: "pneumaticcraft:air_canister",
    //                 b: "pneumaticcraft:printed_circuit_board",
    //                 c: "infectum:test_chestplate",
    //             }
    //         )
    //         .stage("stage_7_2");

    //     event
    //         .shaped(
    //             "pneumaticcraft:pneumatic_leggings",
    //             ["aba", "aca", "aaa"],
    //             {
    //                 a: "pneumaticcraft:air_canister",
    //                 b: "pneumaticcraft:printed_circuit_board",
    //                 c: "infectum:test_leggings",
    //             }
    //         )
    //         .stage("stage_7_2");

    //     event
    //         .shaped("pneumaticcraft:pneumatic_boots", ["aba", "aca", "aaa"], {
    //             a: "pneumaticcraft:air_canister",
    //             b: "pneumaticcraft:printed_circuit_board",
    //             c: "infectum:test_boots",
    //         })
    //         .stage("stage_7_2");
    // };

    // copper
    stage_armor_tier({
        tier: "charcoal_pit:copper",
        previous_tier: "minecraft:leather",
        input_material: "minecraft:copper_ingot",
        unlock_stage: "stage_1",
        master_stage: "armor_copper",
    });

    // bronze
    stage_armor_tier({
        tier: "charcoal_pit:bronze",
        previous_tier: "charcoal_pit:copper",
        input_material: "rankine:bronze_ingot",
        unlock_stage: "stage_1",
    });

    // iron
    stage_armor_tier({
        tier: "minecraft:iron",
        previous_tier: "charcoal_pit:bronze",
        input_material: "minecraft:iron_ingot",
        unlock_stage: "stage_1",
        master_stage: "armor_iron",
    });

    // aquite
    stage_armor_tier({
        tier: "blue_skies:aquite",
        previous_tier: "minecraft:iron",
        input_material: "blue_skies:aquite",
        unlock_stage: "stage_2",
        master_stage: "armor_aquite",
    });

    // pyrope
    stage_armor_tier({
        tier: "blue_skies:pyrope",
        previous_tier: "blue_skies:aquite",
        input_material: "blue_skies:pyrope_gem",
        unlock_stage: "stage_2",
        master_stage: "armor_pyrope",
    });

    // diopside
    stage_armor_tier({
        tier: "blue_skies:diopside",
        previous_tier: "blue_skies:pyrope",
        input_material: "blue_skies:diopside_gem",
        unlock_stage: "stage_2",
        master_stage: "armor_diopside",
    });

    // charoite
    stage_armor_tier({
        tier: "blue_skies:charoite",
        previous_tier: "blue_skies:diopside",
        input_material: "blue_skies:charoite",
        unlock_stage: "stage_2",
        master_stage: "armor_charoite",
    });

    // infused iron
    stage_armor_tier({
        custom: {
            tier: "naturesaura:infused_iron",
            pieces: ["helmet", "chest", "pants", "shoes"],
            previous_tier: "blue_skies:charoite",
            previous_pieces: ["helmet", "chestplate", "leggings", "boots"],
        },
        input_material: "naturesaura:infused_iron",
        unlock_stage: "stage_3",
        master_stage: "armor_infused_iron",
    });

    // cloggrum
    stage_armor_tier({
        custom: {
            tier: "undergarden:cloggrum",
            pieces: ["helmet", "chestplate", "leggings", "boots"],
            previous_tier: "naturesaura:infused_iron",
            previous_pieces: ["helmet", "chest", "pants", "shoes"],
        },
        input_material: "undergarden:cloggrum_ingot",
        unlock_stage: "stage_3",
        master_stage: "armor_cloggrum",
    });

    // froststeel
    stage_armor_tier({
        tier: "undergarden:froststeel",
        previous_tier: "undergarden:cloggrum",
        input_material: "undergarden:froststeel_ingot",
        unlock_stage: "stage_3",
        master_stage: "armor_froststeel",
    });

    // utherium
    stage_armor_tier({
        tier: "undergarden:utherium",
        previous_tier: "undergarden:froststeel",
        input_material: "undergarden:utherium_crystal",
        unlock_stage: "stage_3",
        master_stage: "armor_utherium",
    });

    // horizonite
    stage_armor_tier({
        tier: "blue_skies:horizonite",
        previous_tier: "undergarden:utherium",
        input_material: "blue_skies:horizonite_ingot",
        unlock_stage: "stage_3",
        master_stage: "armor_horizonite",
    });

    // ironwood
    stage_armor_tier({
        tier: "twilightforest:ironwood",
        previous_tier: "blue_skies:horizonite",
        input_material: "twilightforest:ironwood_ingot",
        unlock_stage: "stage_3",
        master_stage: "armor_ironwood",
    });

    event.remove({
        output: Item.of("twilightforest:ironwood_helmet", "{Damage:0}").enchant(
            "minecraft:aqua_affinity",
            1
        ),
    });

    event.remove({
        output: Item.of(
            "twilightforest:ironwood_chestplate",
            "{Damage:0}"
        ).enchant("minecraft:protection", 1),
    });
    event.remove({
        output: Item.of(
            "twilightforest:ironwood_leggings",
            "{Damage:0}"
        ).enchant("minecraft:protection", 1),
    });
    event.remove({
        output: Item.of("twilightforest:ironwood_boots", "{Damage:0}").enchant(
            "minecraft:feather_falling",
            1
        ),
    });

    // arctic
    stage_armor_tier({
        tier: "twilightforest:arctic",
        previous_tier: "twilightforest:ironwood",
        input_material: "twilightforest:arctic_fur",
        unlock_stage: "stage_3",
        master_stage: "armor_arctic",
    });

    // yeti
    stage_armor_tier({
        tier: "twilightforest:yeti",
        previous_tier: "twilightforest:arctic",
        input_material: "twilightforest:alpha_yeti_fur",
        unlock_stage: "stage_3",
        master_stage: "armor_yeti",
    });

    event.remove({
        output: Item.of("twilightforest:yeti_helmet", "{Damage:0}").enchant(
            "minecraft:protection",
            2
        ),
    });
    event.remove({
        output: Item.of("twilightforest:yeti_leggings", "{Damage:0}").enchant(
            "minecraft:protection",
            2
        ),
    });
    event.remove({
        output: Item.of("twilightforest:yeti_boots", "{Damage:0}")
            .enchant("minecraft:protection", 2)
            .enchant("minecraft:feather_falling", 4),
    });
    event.remove({
        output: Item.of("twilightforest:yeti_chestplate", "{Damage:0}").enchant(
            "minecraft:protection",
            2
        ),
    });

    // steeleaf
    stage_armor_tier({
        tier: "twilightforest:steeleaf",
        previous_tier: "twilightforest:yeti",
        input_material: "twilightforest:steeleaf_ingot",
        unlock_stage: "stage_3",
        master_stage: "armor_steeleaf",
    });

    event.remove({
        output: Item.of("twilightforest:steeleaf_helmet", "{Damage:0}").enchant(
            "minecraft:protection",
            2
        ),
    });
    event.remove({
        output: Item.of(
            "twilightforest:steeleaf_chestplate",
            "{Damage:0}"
        ).enchant("minecraft:blast_protection", 2),
    });
    event.remove({
        output: Item.of(
            "twilightforest:steeleaf_leggings",
            "{Damage:0}"
        ).enchant("minecraft:fire_protection", 2),
    });
    event.remove({
        output: Item.of("twilightforest:steeleaf_boots", "{Damage:0}").enchant(
            "minecraft:feather_falling",
            2
        ),
    });

    // knightmetal
    stage_armor_tier({
        tier: "twilightforest:knightmetal",
        previous_tier: "twilightforest:steeleaf",
        input_material: "twilightforest:knightmetal_ingot",
        unlock_stage: "stage_3",
        master_stage: "armor_knightmetal",
    });

    // fiery
    stage_armor_tier({
        tier: "twilightforest:fiery",
        previous_tier: "twilightforest:knightmetal",
        input_material: "twilightforest:fiery_ingot",
        unlock_stage: "stage_3",
        master_stage: "armor_fiery",
    });

    // gold
    stage_armor_tier({
        tier: "minecraft:golden",
        previous_tier: "twilightforest:fiery",
        input_material: "minecraft:gold_ingot",
        unlock_stage: "stage_4",
        master_stage: "armor_gold",
    });

    // ignitium
    stage_armor_tier({
        tier: "cataclysm:ignitium",
        previous_tier: "minecraft:netherite",
        input_material: "cataclysm:ignitium_ingot",
        unlock_stage: "stage_4",
        master_stage: "armor_ignitium",
    });

    // engineers
    stage_armor_tier({
        tier: "hem:steampunkoutfit",
        previous_tier: "cataclysm:ignitium",
        input_material: "hem:copparite",
        unlock_stage: "stage_4",
        master_stage: "armor_engineers",
    });

    // orichalcum
    stage_armor_tier({
        tier: "charcoal_pit:orichalcum",
        previous_tier: "hem:steampunkoutfit",
        input_material: "charcoal_pit:alloy_orichalcum",
        unlock_stage: "stage_4",
        master_stage: "armor_orichalcum",
    });

    // brigandine
    stage_armor_tier({
        tier: "rankine:brigandine",
        previous_tier: "charcoal_pit:orichalcum",
        input_material: "rankine:steel_ingot",
        unlock_stage: "stage_5_2",
        master_stage: "armor_brigandine",
    });

    // compressed iron
    stage_armor_tier({
        tier: "pneumaticcraft:compressed_iron",
        previous_tier: "rankine:brigandine",
        input_material: "pneumaticcraft:ingot_iron_compressed",
        unlock_stage: "stage_5_2",
        master_stage: "armor_compressed_iron",
    });

    // infectious
    // stage_armor_tier({
    //     tier: "infectum:test",
    //     previous_tier: "pneumaticcraft:compressed_iron",
    //     input_material: "infectum:tentecleskin",
    //     unlock_stage: "stage_7_2",
    //     master_stage: "armor_infectious",
    // });

    // pneumatic
    // stage_pneumatic_armor();

    // manasteel
    stage_armor_tier({
        tier: "botania:manasteel",
        previous_tier: "charcoal_pit:orichalcum",
        input_material: "botania:manasteel_ingot",
        unlock_stage: "stage_5_1",
        master_stage: "armor_manasteel",
    });

    // sky
    stage_armor_tier({
        custom: {
            tier: "naturesaura:sky",
            pieces: ["helmet", "chest", "pants", "shoes"],
            previous_tier: "botania:manasteel",
            previous_pieces: ["helmet", "chestplate", "leggings", "boots"],
        },
        input_material: "naturesaura:sky_ingot",
        unlock_stage: "stage_5_1",
        master_stage: "armor_sky",
    });

    // terrasteel
    stage_armor_tier({
        custom: {
            tier: "botania:terrasteel",
            pieces: ["helmet", "chestplate", "leggings", "boots"],
            previous_tier: "naturesaura:sky",
            previous_pieces: ["helmet", "chest", "pants", "shoes"],
        },
        input_material: "botania:terrasteel_ingot",
        unlock_stage: "stage_5_1",
        master_stage: "armor_terrasteel",
    });

    // elementium
    stage_armor_tier({
        tier: "botania:elementium",
        previous_tier: "botania:terrasteel",
        input_material: "botania:elementium_ingot",
        unlock_stage: "stage_5_1",
        master_stage: "armor_elementium",
    });

    // bee
    stage_bee_armor();

    // diamond
    stage_diamond_armor();

    // alfsteel
    // stage_armor_tier({
    //     tier: "mythicbotany:alfsteel",
    //     previous_tier: "minecraft:diamond",
    //     input_material: "mythicbotany:alfsteel_ingot",
    //     unlock_stage: "stage_7_1",
    //     master_stage: "armor_alfsteel",
    // });

    // mekasuit
    // stage_mekasuit_armor();
});
