onEvent("server.datapack.high_priority", (event) => {
    // ? Functions
    const add_gates = (config) => {
        config.forEach((item) => {
            event.addJson(`gateways:gateways/${item.id}_gate.json`, {
                size: item.size || "medium",
                color: item.color,
                waves: [
                    {
                        entities: [
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                        ],
                        rewards: [
                            {
                                type: "entity_loot",
                                entity: item.mob,
                                rolls: 5,
                            },
                        ],
                        max_wave_time: 750,
                        setup_time: 150,
                    },
                    {
                        entities: [
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                        ],
                        modifiers: [
                            {
                                attribute: "generic.max_health",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.33,
                            },
                            {
                                attribute: "generic.armor",
                                operation: "ADDITION",
                                value: 2.5,
                            },
                            {
                                attribute: "generic.attack_damage",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.33,
                            },
                            {
                                attribute: "generic.knockback_resistance",
                                operation: "ADDITION",
                                value: 0.05,
                            },
                            {
                                attribute: "generic.movement_speed",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.05,
                            },
                        ],
                        rewards: [
                            {
                                type: "entity_loot",
                                entity: item.mob,
                                rolls: 10,
                            },
                        ],
                        max_wave_time: 750,
                        setup_time: 150,
                    },
                    {
                        entities: [
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                        ],
                        modifiers: [
                            {
                                attribute: "generic.max_health",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.66,
                            },
                            {
                                attribute: "generic.armor",
                                operation: "ADDITION",
                                value: 4,
                            },
                            {
                                attribute: "generic.attack_damage",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.5,
                            },
                            {
                                attribute: "generic.knockback_resistance",
                                operation: "ADDITION",
                                value: 0.1,
                            },
                            {
                                attribute: "generic.movement_speed",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.1,
                            },
                        ],
                        rewards: [
                            {
                                type: "entity_loot",
                                entity: item.mob,
                                rolls: 15,
                            },
                        ],
                        max_wave_time: 750,
                        setup_time: 150,
                    },
                    {
                        entities: [
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                        ],
                        modifiers: [
                            {
                                attribute: "generic.max_health",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.85,
                            },
                            {
                                attribute: "generic.armor",
                                operation: "ADDITION",
                                value: 5,
                            },
                            {
                                attribute: "generic.attack_damage",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.66,
                            },
                            {
                                attribute: "generic.knockback_resistance",
                                operation: "ADDITION",
                                value: 0.15,
                            },
                            {
                                attribute: "generic.movement_speed",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.15,
                            },
                        ],
                        rewards: [
                            {
                                type: "entity_loot",
                                entity: item.mob,
                                rolls: 20,
                            },
                        ],
                        max_wave_time: 750,
                        setup_time: 150,
                    },
                    {
                        entities: [
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                            {
                                entity: item.mob,
                            },
                        ],
                        modifiers: [
                            {
                                attribute: "generic.max_health",
                                operation: "MULTIPLY_TOTAL",
                                value: 1.25,
                            },
                            {
                                attribute: "generic.armor",
                                operation: "ADDITION",
                                value: 6,
                            },
                            {
                                attribute: "generic.attack_damage",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.85,
                            },
                            {
                                attribute: "generic.knockback_resistance",
                                operation: "ADDITION",
                                value: 0.2,
                            },
                            {
                                attribute: "generic.movement_speed",
                                operation: "MULTIPLY_TOTAL",
                                value: 0.2,
                            },
                        ],
                        rewards: [
                            {
                                type: "entity_loot",
                                entity: item.mob,
                                rolls: 25,
                            },
                        ],
                        max_wave_time: 750,
                        setup_time: 150,
                    },
                ],
                rewards: [
                    {
                        type: "entity_loot",
                        entity: item.mob,
                        rolls: 60,
                    },
                ],
                completion_xp: 500,
                spawn_range: 7,
            });
        });
    };

    const remove_gate = (ids) => {
        ids.forEach((id) => {
            event.addJson(`gateways:gateways/${id}_small.json`, {
                type: "forge:conditional",
                recipes: [
                    {
                        conditions: [
                            {
                                type: "forge:false",
                            },
                        ],
                    },
                ],
            });
            event.addJson(`gateways:gateways/${id}.json`, {
                type: "forge:conditional",
                recipes: [
                    {
                        conditions: [
                            {
                                type: "forge:false",
                            },
                        ],
                    },
                ],
            });
            event.addJson(`gateways:gateways/${id}_large.json`, {
                type: "forge:conditional",
                recipes: [
                    {
                        conditions: [
                            {
                                type: "forge:false",
                            },
                        ],
                    },
                ],
            });

            event.addJson(`gateways:recipes/${id}_small.json`, {
                type: "forge:conditional",
                recipes: [
                    {
                        conditions: [
                            {
                                type: "forge:false",
                            },
                        ],
                    },
                ],
            });
            event.addJson(`gateways:recipes/${id}.json`, {
                type: "forge:conditional",
                recipes: [
                    {
                        conditions: [
                            {
                                type: "forge:false",
                            },
                        ],
                    },
                ],
            });
            event.addJson(`gateways:recipes/${id}_large.json`, {
                type: "forge:conditional",
                recipes: [
                    {
                        conditions: [
                            {
                                type: "forge:false",
                            },
                        ],
                    },
                ],
            });
        });
    };

    // ? gateways
    // age 2
    add_gates([
        {
            id: "aquatic",
            color: "#4FA7FF",
            mob: "blue_skies:artificial_golem",
        },
        {
            id: "forgotten",
            color: "#00D7A2",
            mob: "undergarden:forgotten_guardian",
        },
        {
            id: "poisonous",
            color: "#FF6C55",
            mob: "blue_skies:venom_spider",
        },
        {
            id: "magical",
            color: "#D888FF",
            mob: "twilightforest:carminite_golem",
        },
        {
            id: "hellish",
            color: "#D92C32",
            mob: "minecraft:zoglin",
        },
        {
            id: "steampunk",
            color: "#006F74",
            mob: "hem:militarybot",
        },
    ]);

    remove_gate([
        "blaze_gate",
        "creeper_gate",
        "enderman_gate",
        "ghast_gate",
        "magma_cube_gate",
        "shulker_gate",
        "skeleton_gate",
        "slime_gate",
        "spider_gate",
        "witch_gate",
        "zombie_gate",
    ]);
});

onEvent("recipes", (event) => {
    const gateway_recipes = (config) => {
        config.forEach((item) => {
            event.custom({
                type: "occultism:ritual",
                ritual_type: "occultism:craft",
                activation_item: {
                    item: item.activation_item,
                },
                pentacle_id: item.pentacle_id,
                duration: 60,
                ritual_dummy: {
                    item: "occultism:ritual_dummy/custom_ritual",
                },
                ingredients: item.inputs,
                result: item.output,
            });
        });
    };

    gateway_recipes([
        {
            activation_item: "blue_skies:soul_fragment",
            pentacle_id: "occultism:summon_foliot",
            inputs: [
                {
                    item: "blue_skies:aquite",
                },
                {
                    item: "blue_skies:aquite",
                },
                {
                    item: "blue_skies:soul_fragment",
                },
                {
                    item: "blue_skies:cryo_root",
                },
                {
                    item: "blue_skies:winter_leaves",
                },
                {
                    item: "blue_skies:municipal_monkfish",
                },
                {
                    item: "blue_skies:grittle_flatfish",
                },
                {
                    item: "rankine:white_marble",
                },
                {
                    item: "rankine:white_marble",
                },
                {
                    item: "blue_skies:starlit_sapling",
                },
                {
                    item: "blue_skies:chilled_lily_pad",
                },
                {
                    item: "blue_skies:azulfo_horn",
                },
            ],
            output: {
                item: "gateways:gate_pearl",
                nbt: '{gateway:"gateways:aquatic_gate"}',
            },
        },
        {
            activation_item: "blue_skies:soul_fragment",
            pentacle_id: "occultism:craft_foliot",
            inputs: [
                {
                    item: "undergarden:bloody_stew",
                },
                {
                    item: "undergarden:inky_stew",
                },
                {
                    item: "undergarden:indigo_stew",
                },
                {
                    item: "undergarden:veiled_stew",
                },
                {
                    item: "undergarden:utherium_crystal",
                },
                {
                    item: "undergarden:forgotten_nugget",
                },
                {
                    item: "undergarden:twistytwig",
                },
                {
                    item: "undergarden:utherium_crystal",
                },
                {
                    item: "undergarden:forgotten_nugget",
                },
                {
                    item: "undergarden:twistytwig",
                },
                {
                    item: "undergarden:rotten_blisterberry",
                },
                {
                    item: "undergarden:brute_tusk",
                },
            ],
            output: {
                item: "gateways:gate_pearl",
                nbt: '{gateway:"gateways:forgotten_gate"}',
            },
        },
        {
            activation_item: "blue_skies:soul_fragment",
            pentacle_id: "occultism:craft_djinni",
            inputs: [
                {
                    item: "blue_skies:crescent_fruit",
                },
                {
                    item: "blue_skies:monitor_tail",
                },
                {
                    item: "blue_skies:charscale_moki",
                },
                {
                    item: "blue_skies:horizofin_tunid",
                },
                {
                    item: "blue_skies:fox_pelt",
                },
                {
                    item: "blue_skies:bug_guts",
                },
                {
                    item: "blue_skies:horizonite_ingot",
                },
                {
                    item: "blue_skies:bug_guts",
                },
                {
                    item: "blue_skies:horizonite_ingot",
                },
                {
                    item: "blue_skies:venom_sac",
                },
                {
                    item: "blue_skies:blaze_bud",
                },
                {
                    item: "blue_skies:moonlit_water_lily",
                },
            ],
            output: {
                item: "gateways:gate_pearl",
                nbt: '{gateway:"gateways:poisonous_gate"}',
            },
        },
        {
            activation_item: "blue_skies:soul_fragment",
            pentacle_id: "occultism:summon_wild_greater_spirit",
            inputs: [
                {
                    item: "twilightforest:charm_of_keeping_2",
                },
                {
                    item: "twilightforest:charm_of_keeping_2",
                },
                {
                    item: "twilightforest:raw_ironwood",
                },
                {
                    item: "twilightforest:experiment_115",
                },
                {
                    item: "twilightforest:huge_water_lily",
                },
                {
                    item: "twilightforest:transformation_powder",
                },
                {
                    item: "twilightforest:transformation_powder",
                },
                {
                    item: "twilightforest:carminite",
                },
                {
                    item: "twilightforest:fiery_tears",
                },
                {
                    item: "twilightforest:fiery_blood",
                },
                {
                    item: "twilightforest:fiery_blood",
                },
                {
                    item: "twilightforest:thorn_rose",
                },
            ],
            output: {
                item: "gateways:gate_pearl",
                nbt: '{gateway:"gateways:magical_gate"}',
            },
        },
        {
            activation_item: "blue_skies:soul_fragment",
            pentacle_id: "occultism:summon_marid",
            inputs: [
                {
                    item: "minecraft:wither_rose",
                },
                {
                    item: "minecraft:crimson_fungus",
                },
                {
                    item: "minecraft:warped_fungus",
                },
                {
                    item: "minecraft:quartz",
                },
                {
                    item: "minecraft:porkchop",
                },
                {
                    item: "cataclysm:witherite_ingot",
                },
                {
                    item: "rankine:carbon_dioxide_gas_bottle",
                },
                {
                    item: "minecraft:porkchop",
                },
                {
                    item: "cataclysm:witherite_ingot",
                },
                {
                    item: "rankine:carbon_dioxide_gas_bottle",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "minecraft:blaze_powder",
                },
            ],
            output: {
                item: "gateways:gate_pearl",
                nbt: '{gateway:"gateways:hellish_gate"}',
            },
        },
        {
            activation_item: "blue_skies:soul_fragment",
            pentacle_id: "occultism:craft_marid",
            inputs: [
                {
                    item: "hem:copparite",
                },
                {
                    item: "rankine:vulcanized_rubber",
                },
                {
                    item: "hem:lush_flower_1",
                },
                {
                    item: "hem:shotgun_shell",
                },
                {
                    item: "create:chromatic_compound",
                },
                {
                    item: "hem:copparite",
                },
                {
                    item: "rankine:vulcanized_rubber",
                },
                {
                    item: "hem:lush_flower_1",
                },
                {
                    item: "hem:shotgun_shell",
                },
                {
                    item: "create:chromatic_compound",
                },
                {
                    item: "rankine:steel_ingot",
                },
                {
                    item: "rankine:steel_ingot",
                },
            ],
            output: {
                item: "gateways:gate_pearl",
                nbt: '{gateway:"gateways:steampunk_gate"}',
            },
        },
    ]);
});
