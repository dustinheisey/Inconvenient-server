onEvent("recipes", (event) => {
    new recipes(event)
        .setType("create:mechanical_crafting")
        .setFunction((config) =>
            event.recipes.createMechanicalCrafting(
                config.output,
                config.pattern,
                config.key
            )
        )
        .modifyOutputs([
            {
                global: true,
                output: "pneumaticcraft:refinery",
                pattern: ["ada", "bcb", "ada"],
                key: {
                    a: "pneumaticcraft:reinforced_stone_slab",
                    b: "extendedcrafting:redstone_ingot",
                    c: "pneumaticcraft:small_tank",
                    d: "pneumaticcraft:plastic",
                },
            },
            {
                global: true,
                output: "pneumaticcraft:refinery_output",
                pattern: ["ada", "bcb", "ada"],
                key: {
                    a: "pneumaticcraft:reinforced_stone_slab",
                    b: "#forge:glass",
                    c: "rankine:titanium_ingot",
                    d: "pneumaticcraft:plastic",
                },
            },
            {
                global: true,
                output: "pneumaticcraft:thermopneumatic_processing_plant",
                pattern: ["ada", "bcb", "ada"],
                key: {
                    a: "pneumaticcraft:reinforced_stone_slab",
                    b: "pneumaticcraft:small_tank",
                    c: "pneumaticcraft:pressure_tube",
                    d: "pneumaticcraft:plastic",
                },
            },
            {
                global: true,
                output: `pneumaticcraft:fluid_mixer`,
                pattern: ["aba", "cdc", "beb"],
                key: {
                    a: "pneumaticcraft:plastic",
                    b: "pneumaticcraft:small_tank",
                    c: "pneumaticcraft:reinforced_brick_wall",
                    d: "pneumaticcraft:turbine_rotor",
                    e: "pneumaticcraft:pressure_tube",
                },
            },
            {
                global: true,
                output: "immersiveengineering:sample_drill",
                pattern: ["aba", "aba", "cdc"],
                key: {
                    a: "immersiveengineering:steel_scaffolding_standard",
                    b: "immersiveengineering:steel_fence",
                    c: "immersiveengineering:light_engineering",
                    d: "create:precision_mechanism",
                },
            },
            {
                global: true,
                output: "pneumaticcraft:printed_circuit_board",
                pattern: [" a ", "bcb", " a "],
                key: {
                    a: "pneumaticcraft:transistor",
                    b: "pneumaticcraft:capacitor",
                    c: "pneumaticcraft:unassembled_pcb",
                },
            },
            {
                global: true,
                output: "2x create:crushing_wheel",
                pattern: [" aaa ", "aabaa", "abcba", "aabaa", " aaa "],
                key: {
                    a: "create:andesite_alloy",
                    b: "rankine:promethium_ingot",
                    c: "rankine:rose_marble",
                },
            },
            {
                global: true,
                output: "compactmachines:personal_shrinking_device",
                pattern: [" a ", "bcb", " d "],
                key: {
                    a: "#forge:glass_panes",
                    b: "minecraft:ender_eye",
                    c: "minecraft:book",
                    d: "rankine:cast_iron_ingot",
                },
            },
            {
                global: true,
                output: "naturesaura:offering_table",
                pattern: ["aa aa", " aaa ", " bcd ", " efe ", "eegee"],
                key: {
                    a: "naturesaura:infused_stone",
                    b: "naturesaura:token_joy",
                    c: "naturesaura:token_sorrow",
                    d: "naturesaura:token_fear",
                    e: "naturesaura:tainted_gold",
                    f: "naturesaura:token_anger",
                    g: "botania:rune_earth",
                },
            },
            {
                global: true,
                output: "naturesaura:animal_spawner",
                pattern: [
                    "abcbcba",
                    "bdddddb",
                    "cdeeedc",
                    "bdefedb",
                    "cdeeedc",
                    "bdddddb",
                    "abcbcba",
                ],
                key: {
                    a: "naturesaura:sky_ingot",
                    b: "naturesaura:tainted_gold",
                    c: "naturesaura:ancient_planks",
                    d: "#botania:runes",
                    e: "#rankine:bales",
                    f: "naturesaura:token_euphoria",
                },
            },
            {
                global: true,
                output: "4x compactcrafting:base",
                pattern: [" a ", "bcb", "ddd"],
                key: {
                    a: "minecraft:redstone_torch",
                    b: "rankine:titanium_ingot",
                    c: "minecraft:stone_slab",
                    d: "immersiveengineering:ingot_hop_graphite",
                },
            },
            {
                global: true,
                output: "botania:mana_spreader",
                pattern: ["aaaaa", "bccc ", "bd   ", "bccc ", "aaaaa"],
                key: {
                    a: "botania:livingwood",
                    b: "rankine:rose_gold_ingot",
                    c: "create:refined_radiance",
                    d: "#botania:petals",
                },
            },
            {
                global: true,
                output: "createaddition:alternator",
                pattern: ["  a  ", " bcb ", "bcdcb", " beb "],
                key: {
                    a: "create:andesite_alloy",
                    b: "chemlib:iron_plate",
                    c: "hem:circuit_board",
                    d: "immersive_aircraft:engine",
                    e: "create:electron_tube",
                },
            },
            {
                global: true,
                output: "botania:apothecary_forest",
                pattern: ["aba", " c ", "aaa"],
                key: {
                    a: "botania:metamorphic_forest_cobblestone",
                    b: "#botania:petals",
                    c: "create:refined_radiance_casing",
                },
            },
            {
                global: true,
                output: "botania:apothecary_plains",
                pattern: ["aba", " c ", "aaa"],
                key: {
                    a: "botania:metamorphic_plains_cobblestone",
                    b: "#botania:petals",
                    c: "create:refined_radiance_casing",
                },
            },
            {
                global: true,
                output: "botania:apothecary_mountain",
                pattern: ["aba", " c ", "aaa"],
                key: {
                    a: "botania:metamorphic_mountain_cobblestone",
                    b: "#botania:petals",
                    c: "create:refined_radiance_casing",
                },
            },
            {
                global: true,
                output: "botania:apothecary_fungal",
                pattern: ["aba", " c ", "aaa"],
                key: {
                    a: "botania:metamorphic_fungal_cobblestone",
                    b: "#botania:petals",
                    c: "create:refined_radiance_casing",
                },
            },
            {
                global: true,
                output: "botania:apothecary_swamp",
                pattern: ["aba", " c ", "aaa"],
                key: {
                    a: "botania:metamorphic_swamp_cobblestone",
                    b: "#botania:petals",
                    c: "create:refined_radiance_casing",
                },
            },
            {
                global: true,
                output: "botania:apothecary_desert",
                pattern: ["aba", " c ", "aaa"],
                key: {
                    a: "botania:metamorphic_desert_cobblestone",
                    b: "#botania:petals",
                    c: "create:refined_radiance_casing",
                },
            },
            {
                global: true,
                output: "botania:apothecary_taiga",
                pattern: ["aba", " c ", "aaa"],
                key: {
                    a: "botania:metamorphic_taiga_cobblestone",
                    b: "#botania:petals",
                    c: "create:refined_radiance_casing",
                },
            },
            {
                global: true,
                output: "botania:apothecary_mesa",
                pattern: ["aba", " c ", "aaa"],
                key: {
                    a: "botania:metamorphic_mesa_cobblestone",
                    b: "#botania:petals",
                    c: "create:refined_radiance_casing",
                },
            },
            {
                global: true,
                output: "botania:apothecary_mossy",
                pattern: ["aba", " c ", "aaa"],
                key: {
                    a: "minecraft:mossy_cobblestone",
                    b: "#botania:petals",
                    c: "create:refined_radiance_casing",
                },
            },
            {
                global: true,
                output: "botania:apothecary_default",
                pattern: ["aba", " c ", "aaa"],
                key: {
                    a: "minecraft:cobblestone",
                    b: "#botania:petals",
                    c: "create:refined_radiance_casing",
                },
            },
            {
                global: true,
                output: "hem:circuit_board",
                pattern: ["aba", "cdc", "ada"],
                key: {
                    a: "hem:copparite",
                    b: "create:electron_tube",
                    c: "hem:bronze_ingot",
                    d: "minecraft:redstone",
                },
            },
            {
                global: true,
                output: "immersive_aircraft:boiler",
                pattern: ["aaa", "aba", "cbd"],
                key: {
                    a: "hem:copparite",
                    b: "tconstruct:molten_pig_iron_bucket",
                    c: "minecraft:gunpowder",
                    d: "tconstruct:blazing_blood_bucket",
                },
            },
            {
                global: true,
                output: "hem:teir_one_computer",
                pattern: ["aaaaa", "abbba", "abcba", "accca", "aaaaa"],
                key: {
                    a: "hem:copparite",
                    b: "create:electron_tube",
                    c: "hem:circuit_board",
                },
            },
            {
                global: true,
                output: "hem:steam_engine",
                pattern: ["aaa", "aba", "cbc"],
                key: {
                    a: "hem:copparite",
                    b: "immersive_aircraft:boiler",
                    c: "hem:generator_piping",
                },
            },
            {
                global: true,
                output: "hem:generator_piping",
                pattern: ["aba", "   ", "aba"],
                key: {
                    a: "hem:copparite",
                    b: "hem:rose_copper_ingot",
                },
            },
            {
                global: true,
                output: "hem:transporter_top",
                pattern: ["aaa", "aba", "cdd"],
                key: {
                    a: "hem:copparite",
                    b: "hem:teir_one_computer",
                    c: "immersive_aircraft:boiler",
                    d: "hem:generator_piping",
                },
            },
            {
                global: true,
                output: "hem:transporter_bottom",
                pattern: ["aba", "cdc", "ccc"],
                key: {
                    a: "hem:generator_piping",
                    b: "create:electron_tube",
                    c: "hem:copparite",
                    d: "immersive_aircraft:boiler",
                },
            },
            // {
            //     global: true,
            //     output: "hem:hot_air_balloon_item",
            //     pattern: ["aaa", "aba", "cdc"],
            //     key: {
            //         a: "rankine:gun_cotton",
            //         b: "hem:rose_copper_ingot",
            //         c: "hem:bluleaf_planks",
            //         d: "minecraft:soul_campfire",
            //     },
            // },
            {
                global: true,
                output: "hem:shotgun",
                pattern: ["ab ", "cda", "e  "],
                key: {
                    a: "hem:rose_copper_ingot",
                    b: "tconstruct:blazing_blood_bucket",
                    c: "minecraft:gunpowder",
                    d: "hem:copparite",
                    e: "hem:bluleaf_planks",
                },
            },
            {
                global: true,
                output: "rankine:diamond_tier_crushing_head",
                pattern: [" a ", "aba", "cdc"],
                key: {
                    a: "rankine:titanium_alloy_ingot",
                    b: "create:precision_mechanism",
                    c: "minecraft:piston",
                    d: "rankine:titanium_alloy_block",
                },
            },
            {
                global: true,
                output: "rankine:netherite_tier_crushing_head",
                pattern: [" a ", "aba", "cdc"],
                key: {
                    a: "rankine:nitinol_ingot",
                    b: "create:precision_mechanism",
                    c: "minecraft:piston",
                    d: "rankine:nitinol_block",
                },
            },
            {
                global: true,
                output: "rankine:induction_furnace",
                pattern: ["abbba", "bcdcb", "bdedb", "bcccb", "afffa"],
                key: {
                    a: "rankine:steel_block",
                    b: "rankine:steel_ingot",
                    c: "rankine:ultra_high_refractory_bricks",
                    d: Item.of(
                        "rankine:alloy_wire",
                        '{Elements:[{id:"rankine:elements/nickel",percent:15s},{id:"rankine:elements/copper",percent:85s}],StoredAlloy:{comp:"85Cu-15Ni",recipe:"rankine:alloying/cupronickel_alloying"},color:11946807,nameOverride:"item.rankine.cupronickel_alloying"}'
                    ),
                    e: "rankine:alloy_furnace",
                    f: "rankine:simple_electromagnet",
                },
            },
            {
                global: true,
                output: "rankine:iron_tier_crushing_head",
                pattern: [" a ", "aba", "cdc"],
                key: {
                    a: "rankine:steel_ingot",
                    b: "create:precision_mechanism",
                    c: "minecraft:piston",
                    d: "rankine:steel_block",
                },
            },
            {
                global: true,
                output: "rankine:stone_tier_crushing_head",
                pattern: [" a ", "aba", "cdc"],
                key: {
                    a: "rankine:brass_block",
                    b: "create:electron_tube",
                    c: "minecraft:piston",
                    d: "rankine:brass_block",
                },
            },
            {
                global: true,
                output: "create:mechanical_plough",
                pattern: ["aaa", "bbb", " c "],
                key: {
                    a: "naturesaura:sky_ingot",
                    b: "create:andesite_alloy",
                    c: "create:andesite_casing",
                },
            },
            {
                global: true,
                output: "create:mechanical_harvester",
                pattern: ["bab", "bab", " c "],
                key: {
                    a: "naturesaura:sky_ingot",
                    b: "create:andesite_alloy",
                    c: "create:andesite_casing",
                },
            },
            {
                global: true,
                output: "minecraft:bee_nest",
                pattern: ["aaaaa", "abcda", "aefga", "ahija", "aaaaa"],
                key: {
                    a: "create:refined_radiance_casing",
                    b: "botania:rune_envy",
                    c: "botania:rune_pride",
                    d: "botania:rune_sloth",
                    e: "botania:rune_wrath",
                    f: "minecraft:dragon_breath",
                    g: "botania:rune_gluttony",
                    h: "botania:rune_greed",
                    i: "botania:rune_mana",
                    j: "botania:rune_lust",
                },
            },
            {
                global: true,
                output: "botania:alchemy_catalyst",
                pattern: ["aba", "cdc", "aba"],
                key: {
                    a: "botania:livingrock",
                    b: "rankine:rose_gold_ingot",
                    c: "minecraft:brewing_stand",
                    d: "minecraft:honeycomb",
                },
            },
            {
                global: true,
                output: "create:mechanical_saw",
                pattern: [" a ", "aba", " c "],
                key: {
                    a: "chemlib:iron_plate",
                    b: "cataclysm:witherite_ingot",
                    c: "create:andesite_casing",
                },
            },
            {
                global: true,
                output: "botania:mana_tablet",
                pattern: ["aaa", "aba", "aaa"],
                key: {
                    a: "botania:livingrock",
                    b: "botania:mana_pearl",
                },
            },
            {
                global: true,
                output: "botania:runic_altar",
                pattern: ["aaa", "aba"],
                key: {
                    a: "botania:livingrock",
                    b: "botania:manasteel_ingot",
                },
            },
            {
                global: true,
                output: "create:mechanical_drill",
                pattern: [" b ", "bab", " c "],
                key: {
                    a: "cataclysm:ignitium_ingot",
                    b: "create:andesite_alloy",
                    c: "create:andesite_casing",
                },
            },
            {
                global: true,
                output: "productivebees:advanced_crimson_beehive",
                pattern: ["aaaaa", "abbba", "acdca", "aebfa", "aaaaa"],
                key: {
                    a: "botania:metamorphic_fungal_stone",
                    b: "minecraft:crimson_planks",
                    c: "#forge:honeycombs",
                    d: "minecraft:beehive",
                    e: "the_bumblezone:honey_crystal_shards",
                    f: "#forge:shears",
                },
            },
            {
                global: true,
                output: "butchercraft:skinning_knife",
                pattern: [" ac", "b  "],
                key: {
                    a: "botania:terrasteel_ingot",
                    b: "#forge:rods/wooden",
                    c: "botania:terrasteel_nugget",
                },
            },
            {
                global: true,
                output: "butchercraft:bone_saw",
                pattern: ["acb", "ccb"],
                key: {
                    a: "botania:terrasteel_ingot",
                    b: "#forge:rods/wooden",
                    c: "botania:terrasteel_nugget",
                },
            },
            {
                global: true,
                output: "butchercraft:gut_knife",
                pattern: ["a  ", " c ", " b "],
                key: {
                    a: "botania:terrasteel_ingot",
                    b: "#forge:rods/wooden",
                    c: "botania:terrasteel_nugget",
                },
            },
            {
                global: true,
                output: "butchercraft:butcher_knife",
                pattern: [" ac", " cc", "b  "],
                key: {
                    a: "botania:terrasteel_ingot",
                    b: "#forge:rods/wooden",
                    c: "botania:terrasteel_nugget",
                },
            },
            {
                global: true,
                output: "butchercraft:beef_block_item",
                pattern: [
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                ],
                key: {
                    a: "butchercraft:cubed_beef",
                },
            },
            {
                global: true,
                output: "butchercraft:lamb_block_item",
                pattern: [
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                ],
                key: {
                    a: "butchercraft:cubed_lamb",
                },
            },
            {
                global: true,
                output: "butchercraft:pork_block_item",
                pattern: [
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                ],
                key: {
                    a: "butchercraft:cubed_pork",
                },
            },
            {
                global: true,
                output: "butchercraft:meat_hook_item",
                pattern: ["aaa", "bcb", "bbb"],
                key: {
                    a: "botania:terrasteel_ingot",
                    b: "botania:terrasteel_nugget",
                    c: "minecraft:chain",
                },
            },
            {
                global: true,
                output: "botania:terra_plate",
                pattern: ["aaa", "bcd", "efg"],
                key: {
                    a: "tconstruct:pig_iron_block",
                    b: "botania:rune_water",
                    c: "botania:manasteel_block",
                    d: "botania:rune_fire",
                    e: "botania:rune_earth",
                    f: "botania:rune_mana",
                    g: "botania:rune_air",
                },
            },
            {
                global: true,
                output: "brewinandchewin:keg",
                pattern: ["ababa", "abcba", "ababa", "a   a"],
                key: {
                    a: "botania:dreamwood_planks",
                    b: "naturesaura:sky_ingot",
                    c: "#forge:honeycombs",
                },
            },
            {
                global: true,
                output: "create:steam_engine",
                pattern: ["  abb", "  b  ", " cdc ", " cdc ", "c   c"],
                key: {
                    a: "create:brass_sheet",
                    b: "immersiveengineering:plate_steel",
                    c: "minecraft:waxed_copper_block",
                    d: "create:andesite_alloy",
                },
            },
            {
                global: true,
                output: "productivebees:advanced_snake_block_beehive",
                pattern: ["aaaaa", "abbba", "acdca", "aebfa", "aaaaa"],
                key: {
                    a: "botania:metamorphic_forest_stone",
                    b: "minecraft:dark_prismarine",
                    c: "#forge:honeycombs",
                    d: "minecraft:beehive",
                    e: "the_bumblezone:honey_crystal_shards",
                    f: "#forge:shears",
                },
            },
            {
                global: true,
                output: "productivebees:advanced_warped_beehive",
                pattern: ["aaaaa", "abbba", "acdca", "aebfa", "aaaaa"],
                key: {
                    a: "botania:metamorphic_forest_stone",
                    b: "minecraft:warped_planks",
                    c: "#forge:honeycombs",
                    d: "minecraft:beehive",
                    e: "the_bumblezone:honey_crystal_shards",
                    f: "#forge:shears",
                },
            },
            {
                global: true,
                output: "productivebees:advanced_birch_beehive",
                pattern: ["aaaaa", "abbba", "acdca", "aebfa", "aaaaa"],
                key: {
                    a: "botania:metamorphic_plains_stone",
                    b: "minecraft:birch_planks",
                    c: "#forge:honeycombs",
                    d: "minecraft:beehive",
                    e: "the_bumblezone:honey_crystal_shards",
                    f: "#forge:shears",
                },
            },
            {
                global: true,
                output: "productivebees:advanced_spruce_beehive",
                pattern: ["aaaaa", "abbba", "acdca", "aebfa", "aaaaa"],
                key: {
                    a: "botania:metamorphic_swamp_stone",
                    b: "minecraft:spruce_planks",
                    c: "#forge:honeycombs",
                    d: "minecraft:beehive",
                    e: "the_bumblezone:honey_crystal_shards",
                    f: "#forge:shears",
                },
            },
            {
                global: true,
                output: "productivebees:advanced_dark_oak_beehive",
                pattern: ["aaaaa", "abbba", "acdca", "aebfa", "aaaaa"],
                key: {
                    a: "botania:metamorphic_taiga_stone",
                    b: "minecraft:dark_oak_planks",
                    c: "#forge:honeycombs",
                    d: "minecraft:beehive",
                    e: "the_bumblezone:honey_crystal_shards",
                    f: "#forge:shears",
                },
            },
            {
                global: true,
                output: "productivebees:advanced_oak_beehive",
                pattern: ["aaaaa", "abbba", "acdca", "aebfa", "aaaaa"],
                key: {
                    a: "botania:metamorphic_mountain_stone",
                    b: "minecraft:oak_planks",
                    c: "#forge:honeycombs",
                    d: "minecraft:beehive",
                    e: "the_bumblezone:honey_crystal_shards",
                    f: "#forge:shears",
                },
            },
            {
                global: true,
                output: "productivebees:advanced_jungle_beehive",
                pattern: ["aaaaa", "abbba", "acdca", "aebfa", "aaaaa"],
                key: {
                    a: "botania:metamorphic_mesa_stone",
                    b: "minecraft:jungle_planks",
                    c: "#forge:honeycombs",
                    d: "minecraft:beehive",
                    e: "the_bumblezone:honey_crystal_shards",
                    f: "#forge:shears",
                },
            },
            {
                global: true,
                output: "productivebees:advanced_acacia_beehive",
                pattern: ["aaaaa", "abbba", "acdca", "aebfa", "aaaaa"],
                key: {
                    a: "botania:metamorphic_desert_stone",
                    b: "minecraft:acacia_planks",
                    c: "#forge:honeycombs",
                    d: "minecraft:beehive",
                    e: "the_bumblezone:honey_crystal_shards",
                    f: "#forge:shears",
                },
            },
            {
                global: true,
                output: "coinsje:copper_coin_pile",
                pattern: [
                    "  aaaaa  ",
                    " aaaaaaa ",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    " aaaaaaa ",
                    "  aaaaa  ",
                ],
                key: {
                    a: `coinsje:copper_coin`,
                },
            },
            {
                global: true,
                output: "coinsje:iron_coin",
                pattern: [
                    "  aaaaa  ",
                    " aaaaaaa ",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    " aaaaaaa ",
                    "  aaaaa  ",
                ],
                key: {
                    a: `coinsje:copper_coin_pile`,
                },
            },
            {
                global: true,
                output: "coinsje:iron_coin_pile",
                pattern: [
                    "  aaaaa  ",
                    " aaaaaaa ",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    "aaaaaaaaa",
                    " aaaaaaa ",
                    "  aaaaa  ",
                ],
                key: {
                    a: `coinsje:iron_coin`,
                },
            },
        ]);
});