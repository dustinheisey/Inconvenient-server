onEvent("recipes", (event) => {
    let modify_config = [
        {
            input: "minecraft:diorite",
            outputs: [
                {
                    id: "rankine:light_gravel",
                },
                {
                    id: "rankine:dolomite",
                    tier: "minecraft:diamond",
                },
            ],
        },
        {
            input: "rankine:hematite_ore",
            outputs: [
                {
                    id: "rankine:hematite",
                    tier: "minecraft:iron",
                },
                {
                    id: "rankine:hematite",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:uraninite_ore",
            outputs: [
                {
                    id: "rankine:uraninite",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:ilmenite_ore",
            outputs: [
                {
                    id: "rankine:ilmenite",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:pentlandite_ore",
            outputs: [
                {
                    id: "rankine:pentlandite",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:bituminous_ore",
            outputs: [
                {
                    id: "rankine:bituminous_coal",
                    tier: "minecraft:iron",
                },
                {
                    id: "rankine:bituminous_coal",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:subbituminous_ore",
            outputs: [
                {
                    id: "rankine:subbituminous_coal",
                    tier: "minecraft:iron",
                },
                {
                    id: "rankine:subbituminous_coal",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:acanthite_ore",
            outputs: [
                {
                    id: "rankine:acanthite",
                    tier: "minecraft:iron",
                },
                {
                    id: "rankine:acanthite",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:bauxite_ore",
            outputs: [
                {
                    id: "rankine:bauxite",
                    tier: "minecraft:diamond",
                },
                {
                    id: "rankine:bauxite",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:cassiterite_ore",
            outputs: [
                { id: "rankine:cassiterite" },
                {
                    id: "rankine:cassiterite",
                    tier: "minecraft:diamond",
                },
            ],
        },
        {
            input: "rankine:cobaltite_ore",
            outputs: [
                {
                    id: "rankine:cobaltite",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:galena_ore",
            outputs: [
                {
                    id: "rankine:galena",
                    tier: "minecraft:iron",
                },
                {
                    id: "rankine:galena",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:lazurite_ore",
            outputs: [
                {
                    id: "minecraft:lapis_lazuli",
                    tier: "minecraft:diamond",
                },
                {
                    id: "minecraft:lapis_lazuli",
                    count: 2,
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:native_sulfur_ore",
            outputs: [
                {
                    id: "rankine:sulfur_nugget",
                    tier: "minecraft:iron",
                    count: 3,
                },
            ],
        },
        {
            input: "rankine:nether_gold_ore",
            outputs: [
                {
                    id: "minecraft:gold_nugget",
                    tier: "minecraft:iron",
                    count: 3,
                },
            ],
        },
        {
            input: "rankine:plumbago_ore",
            outputs: [
                { id: "rankine:graphite", tier: "minecraft:iron" },
                {
                    id: "rankine:graphite",
                    tier: "minecraft:diamond",
                },
            ],
        },
        {
            input: "rankine:pentlandite_ore",
            outputs: [
                {
                    id: "rankine:pentlandite",
                    tier: "minecraft:iron",
                },
                {
                    id: "rankine:pentlandite",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:nether_quartz_ore",
            outputs: [
                {
                    id: "minecraft:quartz",
                    tier: "minecraft:iron",
                },
                {
                    id: "minecraft:quartz",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:sphalerite_ore",
            outputs: [
                {
                    id: "rankine:sphalerite",
                    tier: "minecraft:iron",
                },
                {
                    id: "rankine:sphalerite",
                    tier: "minecraft:iron",
                },
            ],
        },
        {
            input: "minecraft:gold_ore",
            outputs: [
                {
                    id: "minecraft:raw_gold",
                    tier: "minecraft:netherite",
                },
            ],
        },
        {
            input: "rankine:malachite_ore",
            outputs: [
                { id: "rankine:malachite" },
                {
                    id: "rankine:malachite",
                    count: 2,
                    tier: "minecraft:diamond",
                },
            ],
        },
        {
            input: "rankine:cinnabar_ore",
            outputs: [
                {
                    id: "minecraft:redstone",
                    tier: "minecraft:iron",
                },
                {
                    id: "minecraft:redstone",
                    tier: "minecraft:netherite",
                    count: 3,
                },
            ],
        },
    ];

    let stones = {
        "minecraft:cobblestone": [
            "rankine:graywacke",
            "rankine:honeystone",
            "rankine:wadsleyone",
            "rankine:troctolite",
            "minecraft:stone",
            "rankine:sommanite",
            "rankine:shonkinite",
            "rankine:ringwoodine",
            "rankine:rhyolite",
            "rankine:red_porphyry",
            "rankine:meteorite",
            "rankine:nepheline_syenite",
            "minecraft:netherrack",
            "rankine:norite",
            "rankine:pegmatite",
            "rankine:phonolite",
            "rankine:post_perovskite",
            "rankine:purple_porphyry",
            "rankine:red_dacite",
            "rankine:hornblende_andesite",
            "rankine:gray_granite",
            "rankine:granodiorite",
            "minecraft:granite",
            "rankine:frozen_meteorite",
            "rankine:episyenite",
            "rankine:enstatite_chondrite",
            "rankine:comendite",
            "minecraft:andesite",
            "rankine:anorthosite",
            "rankine:black_dacite",
            "rankine:bridgmanham",
        ],
        "minecraft:gravel": [
            "minecraft:stone",
            "minecraft:cobblestone",
            "rankine:nitric_dripstone_block",
            "rankine:gypsic_dripstone_block",
            "rankine:graywacke",
            "rankine:ferric_dripstone_block",
            "minecraft:dripstone_block",
        ],
        "minecraft:obsidian": [
            "rankine:snowflake_obsidian",
            "rankine:blood_obsidian",
            "minecraft:crying_obsidian",
        ],
        "rankine:light_gravel": [
            "minecraft:end_stone",
            "rankine:breccia",
            "rankine:zirconic_dripstone_block",
            "rankine:sylvinite",
            "rankine:pumice",
            "rankine:phosphorite",
            "rankine:halitic_dripstone_block",
            "rankine:dolostone",
            "rankine:chalk",
            "rankine:boracitic_dripstone_block",
        ],
        "rankine:dark_gravel": [
            "rankine:skarn",
            "minecraft:gilded_blackstone",
            "minecraft:cobbled_deepslate",
            "minecraft:blackstone",
            "rankine:shale",
            "rankine:magnesitic_dripstone_block",
        ],
        "minecraft:sand": ["minecraft:sandstone", "rankine:limestone"],
        "minecraft:red_sand": ["minecraft:red_sandstone", "rankine:arkose"],
        "rankine:white_sand": [
            "rankine:white_sandstone",
            "rankine:marlstone",
            "rankine:quartzite",
        ],
        "rankine:desert_sand": [
            "rankine:desert_sandstone",
            "rankine:siltstone",
            "rankine:itacolumite",
            "rankine:mudstone",
        ],
        "rankine:black_sand": ["rankine:black_sandstone"],
        "minecraft:blackstone": [
            "rankine:scoria",
            "rankine:wehrlite",
            "rankine:tholeiitic_basalt",
            "rankine:pyroxenite",
            "rankine:lherzolite",
            "rankine:komatiite",
            "rankine:kimberlite",
            "rankine:harzburgite",
            "rankine:gabbro",
            "rankine:dunite",
            "rankine:diabase",
            "minecraft:basalt",
            "minecraft:obsidian",
        ],
        "minecraft:cobbled_deepslate": ["minecraft:deepslate"],
        "rankine:skarn": [
            "rankine:whiteschist",
            "rankine:white_marble",
            "rankine:soapstone",
            "rankine:slate",
            "rankine:serpentinite",
            "rankine:rose_marble",
            "rankine:phyllite",
            "rankine:mica_schist",
            "rankine:mariposite",
            "rankine:greenschist",
            "rankine:gray_marble",
            "rankine:gneiss",
            "rankine:eclogite",
            "rankine:blueschist",
            "rankine:black_marble",
        ],
        "minecraft:soul_sand": ["rankine:soul_sandstone"],
    };

    Object.keys(stones).forEach((key) => {
        stones[key].forEach((id) => {
            modify_config.push({ input: id, outputs: [{ id: key }] });
        });
    });

    new recipes(event)
        .setType("rankine:crushing")
        .setFunction((config) => {
            let json = {
                type: "rankine:crushing",
                input: {
                    item: config.input,
                },
                guaranteed: [],
            };

            config.outputs.forEach((item) =>
                json.guaranteed.push({
                    item: item.id,
                    count: item.count || 1,
                    weight: item.weight,
                    tier: item.tier || "minecraft:stone",
                })
            );

            event.custom(json);
        })
        .removeInputs([
            "minecraft:tuff",
            "rankine:rhyolitic_tuff",
            "rankine:copper_ore",
            "rankine:nether_gold_ore",
            "rankine:native_arsenic_ore",
            "rankine:komatiitic_tuff",
            "rankine:kimberlitic_tuff",
            "rankine:basaltic_tuff",
            "rankine:andesitic_tuff",
            "rankine:sphalerite_ore",
            "create:veridium",
            "create:scoria",
            "create:ochrum",
            "create:limestone",
            "rankine:sphalerite_ore",
            "create:crimsite",
            "create:asurine",
            "create:zinc_ore",
            "create:deepslate_zinc_ore",
            "minecraft:hay_block",
            "rankine:millet_bale",
            "rankine:sorghum_bale",
            "rankine:rye_bale",
            "rankine:oat_bale",
            "rankine:barley_bale",
            "rankine:zircon_block",
            "rankine:xenotime_ore",
            "rankine:wolframite_ore",
            "rankine:uraninite_ore",
            "rankine:tetrataenite_ore",
            "rankine:taenite_ore",
            "rankine:stibnite_ore",
            "rankine:sperrylite_ore",
            "rankine:native_selenium_ore",
            "rankine:native_lead_ore",
            "rankine:rheniite_ore",
            "rankine:native_silver_ore",
            "rankine:native_tellurium_ore",
            "rankine:native_tin_ore",
            "rankine:petalite_ore",
            "rankine:porphyry_copper",
            "rankine:pyrite_ore",
            "rankine:pyrolusite_ore",
            "rankine:native_indium_ore",
            "rankine:native_gallium_ore",
            "rankine:native_bismuth_ore",
            "rankine:monazite_ore",
            "rankine:molybdenite_ore",
            "rankine:magnetite_ore",
            "rankine:magnesite_ore",
            "rankine:kamacite_ore",
            "rankine:chromite_ore",
            "rankine:coltan_ore",
            "rankine:cryolite_ore",
            "rankine:fumarole_deposit",
            "rankine:greenockite_ore",
            "rankine:hematite_ore",
            "rankine:ilmenite_ore",
            "rankine:interspinifex_ore",
            "rankine:ironstone",
            "rankine:chalcopyrite_block",
            "rankine:chalcocite_ore",
            "rankine:celestine_ore",
            "rankine:bog_iron",
            "rankine:bismuthinite_ore",
            "rankine:beryl_ore",
            "rankine:banded_iron_formation",
            "rankine:baddeleyite_ore",
            "rankine:antitaenite_ore",
            "minecraft:copper_ore",
            "rankine:malachite_ore",
            "rankine:redstone_ore",
            "rankine:lapis_ore",
            "rankine:gold_ore",
            "rankine:iron_ore",
        ])
        .modifyInputs(modify_config)
        .add([
            {
                input: "tconstruct:seared_stone",
                outputs: [{ id: "tconstruct:seared_cobble" }],
            },
            { input: "minecraft:gravel", outputs: [{ id: "minecraft:sand" }] },
            {
                input: "rankine:light_gravel",
                outputs: [{ id: "rankine:white_sand" }],
            },
            {
                input: "occultism:iesnium_ore",
                outputs: [
                    {
                        id: "occultism:raw_iesnium",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "blue_skies:everbright_diopside_ore",
                outputs: [
                    {
                        id: "blue_skies:diopside_gem",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:diopside_gem",
                        tier: "minecraft:diamond",
                    },
                ],
            },
            {
                input: "blue_skies:everbright_pyrope_ore",
                outputs: [
                    {
                        id: "blue_skies:pyrope_gem",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:pyrope_gem",
                        tier: "minecraft:diamond",
                    },
                    {
                        id: "rankine:mercury",
                        tier: "minecraft:diamond",
                        weight: 5,
                    },
                ],
            },
            {
                input: "blue_skies:everbright_aquite_ore",
                outputs: [
                    {
                        id: "blue_skies:raw_aquite",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:raw_aquite",
                        tier: "minecraft:diamond",
                    },
                ],
            },
            {
                input: "blue_skies:everbright_charoite_ore",
                outputs: [
                    {
                        id: "blue_skies:raw_charoite",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:raw_charoite",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "blue_skies:everbright_moonstone_ore",
                outputs: [
                    {
                        id: "blue_skies:moonstone_shard",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:moonstone_shard",
                        tier: "minecraft:diamond",
                        count: 3,
                    },
                ],
            },
            {
                input: "blue_skies:falsite_ore",
                outputs: [
                    {
                        id: "blue_skies:raw_falsite",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:raw_falsite",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "blue_skies:ventium_ore",
                outputs: [
                    {
                        id: "blue_skies:raw_ventium",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:raw_ventium",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "undergarden:grongle_log",
                outputs: [
                    { id: "rankine:sawdust", tier: "minecraft:diamond" },
                    {
                        id: "rankine:sawdust",
                        tier: "minecraft:netherite",
                        count: 7,
                    },
                ],
            },
            {
                input: "blue_skies:everdawn_diopside_ore",
                outputs: [
                    {
                        id: "blue_skies:diopside_gem",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:diopside_gem",
                        tier: "minecraft:iron",
                    },
                ],
            },
            {
                input: "blue_skies:everdawn_pyrope_ore",
                outputs: [
                    {
                        id: "blue_skies:pyrope_gem",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:pyrope_gem",
                        tier: "minecraft:diamond",
                    },
                    {
                        id: "rankine:mercury",
                        tier: "minecraft:diamond",
                    },
                ],
            },
            {
                input: "blue_skies:everdawn_aquite_ore",
                outputs: [
                    {
                        id: "blue_skies:raw_aquite",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:raw_aquite",
                        tier: "minecraft:diamond",
                    },
                ],
            },
            {
                input: "blue_skies:everdawn_charoite_ore",
                outputs: [
                    {
                        id: "blue_skies:raw_charoite",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:raw_charoite",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "blue_skies:everdawn_moonstone_ore",
                outputs: [
                    {
                        id: "blue_skies:moonstone_shard",
                        tier: "minecraft:iron",
                    },
                    {
                        id: "blue_skies:moonstone_shard",
                        count: 2,
                        tier: "minecraft:diamond",
                    },
                ],
            },
            {
                input: "blue_skies:horizonite_ore",
                outputs: [
                    {
                        id: "blue_skies:raw_horizonite",
                        tier: "minecraft:diamond",
                    },
                    {
                        id: "blue_skies:raw_horizonite",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "undergarden:shiverstone_regalium_ore",
                outputs: [
                    {
                        id: "undergarden:regalium_crystal",
                        tier: "minecraft:diamond",
                    },
                    {
                        id: "undergarden:regalium_crystal",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "undergarden:depthrock_regalium_ore",
                outputs: [
                    {
                        id: "undergarden:regalium_crystal",
                        tier: "minecraft:diamond",
                    },
                    {
                        id: "undergarden:regalium_crystal",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "undergarden:shiverstone_utherium_ore",
                outputs: [
                    {
                        id: "undergarden:utheric_shard",
                        tier: "minecraft:diamond",
                    },
                    {
                        id: "undergarden:utherium_crystal",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "undergarden:tremblecrust_utherium_ore",
                outputs: [
                    {
                        id: "undergarden:utheric_shard",
                        tier: "minecraft:diamond",
                    },
                    {
                        id: "undergarden:utherium_crystal",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "minecraft:ancient_debris",
                outputs: [
                    {
                        id: "minecraft:netherite_scrap",
                        tier: "minecraft:diamond",
                    },
                ],
            },
            {
                input: "undergarden:depthrock_coal_ore",
                outputs: [
                    { id: "minecraft:coal", tier: "minecraft:iron" },
                    {
                        id: "minecraft:coal",
                        tier: "minecraft:diamond",
                    },
                ],
            },
            {
                input: "undergarden:shiverstone_coal_ore",
                outputs: [
                    { id: "minecraft:coal", tier: "minecraft:iron" },
                    {
                        id: "minecraft:coal",
                        tier: "minecraft:diamond",
                    },
                ],
            },
            {
                input: "undergarden:depthrock_cloggrum_ore",
                outputs: [
                    { id: "undergarden:raw_cloggrum", tier: "minecraft:iron" },
                    {
                        id: "undergarden:raw_cloggrum",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "undergarden:shiverstone_cloggrum_ore",
                outputs: [
                    { id: "undergarden:raw_cloggrum", tier: "minecraft:iron" },
                    {
                        id: "undergarden:raw_cloggrum",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "undergarden:shiverstone_froststeel_ore",
                outputs: [
                    {
                        id: "undergarden:raw_froststeel",
                        tier: "minecraft:diamond",
                    },
                    {
                        id: "undergarden:raw_froststeel",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "undergarden:depthrock_utherium_ore",
                outputs: [
                    {
                        id: "undergarden:utheric_shard",
                        tier: "minecraft:diamond",
                    },
                    {
                        id: "undergarden:utherium_crystal",
                        tier: "minecraft:netherite",
                    },
                ],
            },
            {
                input: "rankine:lazurite_ore",
                outputs: [
                    {
                        id: "minecraft:lapis_lazuli",
                        tier: "minecraft:diamond",
                    },
                    {
                        id: "minecraft:lapis_lazuli",
                        tier: "minecraft:netherite",
                        count: 2,
                    },
                ],
            },
        ]);

    // event.custom({
    //     type: "rankine:crushing",
    //     input: {
    //         item: "rankine:andesitic_tuff",
    //     },
    //     outputs: [
    //         {
    //             weight: 20,
    //             remove: false,
    //         },
    //         {
    //             item: "minecraft:andesite",
    //             weight: 80,
    //         },
    //         {
    //             item: "rankine:hornblende_andesite",
    //             weight: 80,
    //         },
    //         {
    //             item: "rankine:calcite",
    //             weight: 10,
    //             remove: false,
    //         },
    //         {
    //             item: "minecraft:quartz",
    //             weight: 8,
    //             remove: false,
    //         },
    //         {
    //             item: "rankine:chlorite",
    //             weight: 2,
    //             remove: false,
    //         },
    //     ],
    // });

    // event.custom({
    //     type: "rankine:crushing",
    //     input: {
    //         item: "rankine:basaltic_tuff",
    //     },
    //     outputs: [
    //         {
    //             weight: 20,
    //             remove: false,
    //         },
    //         {
    //             item: "minecraft:basalt",
    //             weight: 80,
    //         },
    //         {
    //             item: "rankine:tholeiitic_basalt",
    //             weight: 80,
    //         },
    //         {
    //             item: "rankine:pyroxene",
    //             weight: 10,
    //             remove: false,
    //         },
    //         {
    //             item: "rankine:plagioclase_feldspar",
    //             weight: 8,
    //             remove: false,
    //         },
    //         {
    //             item: "minecraft:quartz",
    //             weight: 2,
    //             remove: false,
    //         },
    //     ],
    // });

    // event.custom({
    //     type: "rankine:crushing",
    //     input: {
    //         item: "rankine:kimberlitic_tuff",
    //     },
    //     outputs: [
    //         {
    //             weight: 20,
    //             remove: false,
    //         },
    //         {
    //             item: "rankine:kimberlite",
    //             weight: 80,
    //         },
    //         {
    //             item: "rankine:serpentinite",
    //             weight: 80,
    //         },
    //         {
    //             item: "rankine:forsterite",
    //             weight: 10,
    //             remove: false,
    //         },
    //         {
    //             item: "rankine:calcite",
    //             weight: 8,
    //             remove: false,
    //         },
    //         {
    //             item: "rankine:amphibole",
    //             weight: 2,
    //             remove: false,
    //         },
    //     ],
    // });

    event.custom({
        type: "rankine:crushing",
        input: {
            item: "rankine:komatiitic_tuff",
        },
        outputs: [
            {
                weight: 20,
                remove: false,
            },
            {
                item: "rankine:komatiite",
                weight: 80,
            },
            {
                item: "rankine:greenschist",
                weight: 80,
            },
            {
                item: "rankine:phosphorus",
                weight: 10,
                remove: false,
            },
        ],
    });

    // event.custom({
    //     type: "rankine:crushing",
    //     input: {
    //         item: "rankine:rhyolitic_tuff",
    //     },
    //     outputs: [
    //         {
    //             weight: 20,
    //             remove: false,
    //         },
    //         {
    //             item: "rankine:rhyolite",
    //             weight: 80,
    //         },
    //         {
    //             item: "rankine:comendite",
    //             weight: 80,
    //         },
    //         {
    //             item: "rankine:sanidine",
    //             weight: 10,
    //             remove: false,
    //         },
    //         {
    //             item: "minecraft:quartz",
    //             weight: 8,
    //             remove: false,
    //         },
    //         {
    //             item: "rankine:biotite",
    //             weight: 2,
    //             remove: false,
    //         },
    //     ],
    // });

    event.custom({
        type: "rankine:crushing",
        input: {
            item: "minecraft:tuff",
        },
        outputs: [
            {
                weight: 20,
                remove: false,
            },
            {
                item: "minecraft:cobblestone",
                weight: 80,
            },
            {
                item: "minecraft:cobbled_deepslate",
                weight: 80,
            },
            {
                item: "rankine:calcium_chloride",
                weight: 10,
                remove: false,
            },
            {
                item: "rankine:calcite",
                weight: 8,
                remove: false,
            },
            {
                item: "minecraft:quartz",
                weight: 2,
                remove: false,
            },
        ],
    });
});
