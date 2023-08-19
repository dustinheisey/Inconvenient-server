onEvent("recipes", (event) => {
    new recipes(event)
        .setType("create:mixing")
        .setFunction((config) => {
            if (config.heated)
                event.recipes
                    .createMixing(config.output, config.inputs)
                    .heated();
            else if (config.superheated)
                event.recipes
                    .createMixing(config.output, config.inputs)
                    .superheated();
            else event.recipes.createMixing(config.output, config.inputs);
        })
        .removeInputs(["createaddition:biomass"])
        .removeOutputs([
            "immersiveengineering:ingot_electrum",
            "immersiveengineering:ingot_constantan",
            "rankine:zinc_nugget",
            "rankine:cupronickel_ingot",
        ])
        .modifyOutputs([
            {
                output: "farmersdelight:pie_crust",
                inputs: ["#forge:flour", Fluid.of("minecraft:milk", 1000)],
                global: true,
            },
            {
                output: "create:shadow_steel",
                inputs: [
                    "naturesaura:token_fear",
                    "naturesaura:token_sorrow",
                    "bloodmagic:corrupted_dust",
                    "cataclysm:witherite_ingot",
                    "create:chromatic_compound",
                    Fluid.of("kubejs:crystallized_sap", 1000),
                ],
                superheated: true,
                global: true,
            },
            {
                output: "create:refined_radiance",
                inputs: [
                    "naturesaura:token_joy",
                    "naturesaura:token_anger",
                    "bloodmagic:corrupted_dust",
                    "cataclysm:ignitium_ingot",
                    "create:chromatic_compound",
                    Fluid.of("kubejs:crystallized_sap", 1000),
                ],
                superheated: true,
                global: true,
            },
            {
                output: "chemlib:chromium_oxide",
                inputs: [
                    "rankine:chromium_nugget",
                    "3x rankine:oxygen_gas_bottle",
                ],
                superheated: true,
                global: true,
            },
            {
                output: "chemlib:silicon_dioxide",
                inputs: [
                    "chemlib:silicon_dust",
                    "2x rankine:oxygen_gas_bottle",
                ],
                superheated: true,
                global: true,
            },
            {
                output: "create:chromatic_compound",
                inputs: [
                    "2x rankine:dry_rubber",
                    "2x create:experience_nugget",
                    "2x rankine:carbon_dioxide_gas_bottle",
                    "2x create:polished_rose_quartz",
                    Fluid.of("kubejs:crystallized_sap", 1000),
                ],
                global: true,
            },
            {
                output: "pneumaticcraft:sourdough",
                inputs: [
                    "3x #forge:flour",
                    Fluid.of("pneumaticcraft:yeast_culture", 1000),
                ],
                global: true,
            },
            {
                output: "create:dough",
                inputs: ["3x #forge:flour", Fluid.of("minecraft:water", 1000)],
                global: true,
            },
            {
                output: "8x minecraft:cookie",
                inputs: ["create:dough", "minecraft:cocoa_beans"],
                heated: true,
                global: true,
            },
            {
                output: "botania:fertilizer",
                inputs: [
                    "create:refined_radiance",
                    "tconstruct:pig_iron_ingot",
                    "hem:copparite",
                    "4x rankine:bone_char",
                ],
                superheated: true,
                global: true,
            },
            {
                output: "3x rankine:vulcanized_rubber",
                inputs: [
                    "rankine:dry_rubber",
                    "rankine:dry_rubber",
                    "rankine:dry_rubber",
                    Fluid.of("immersivepetroleum:crudeoil", 1000),
                ],
                superheated: true,
                global: true,
            },
            {
                output: "extendedcrafting:redstone_ingot",
                inputs: [
                    "minecraft:iron_ingot",
                    Fluid.of("immersiveengineering:redstone_acid", 250),
                ],
                superheated: true,
                global: true,
            },
            {
                output: "tconstruct:pig_iron_ingot",
                inputs: [
                    "minecraft:iron_ingot",
                    "farmersdelight:ham",
                    "minecraft:clay_ball",
                ],
                heated: true,
                global: true,
            },
            {
                output: "hem:rose_copper_ingot",
                inputs: ["minecraft:copper_ingot", "rankine:rose_gold_ingot"],
                heated: true,
                global: true,
            },
            {
                output: "hem:bronze_ingot",
                inputs: ["rankine:bronze_ingot", "rankine:rose_gold_ingot"],
                heated: true,
                global: true,
            },
            {
                output: "rankine:rose_gold_ingot",
                inputs: [
                    "rankine:green_gold_ingot",
                    "rankine:white_gold_ingot",
                    "rankine:blue_gold_ingot",
                    "rankine:purple_gold_ingot",
                    "rankine:black_gold_ingot",
                ],
                heated: true,
                global: true,
            },
            {
                output: "hem:copparite",
                inputs: [
                    "hem:bronze_ingot",
                    "hem:bronze_ingot",
                    "hem:bronze_ingot",
                    "hem:bronze_ingot",
                    "hem:rose_copper_ingot",
                    "hem:rose_copper_ingot",
                    "hem:rose_copper_ingot",
                    "hem:rose_copper_ingot",
                ],
                heated: true,
                global: true,
            },
            {
                output: "delightful:ender_nectar",
                inputs: [
                    "2x minecraft:sugar",
                    "minecraft:ender_eye",
                    "delightful:berry_matcha_latte",
                ],
                superheated: true,
                global: true,
            },
            {
                output: "delightful:ender_nectar",
                inputs: [
                    "2x minecraft:sugar",
                    "minecraft:ender_eye",
                    "delightful:berry_matcha_latte",
                ],
                superheated: true,
                global: true,
            },
            {
                output: "delightful:berry_matcha_latte",
                inputs: [
                    "delightful:matcha",
                    "#forge:berries",
                    Fluid.of("create:honey", 1000),
                    Fluid.of("minecraft:milk", 1000),
                ],
                heated: true,
                global: true,
            },
            {
                output: "delightful:matcha_latte",
                inputs: [
                    "delightful:matcha",
                    Fluid.of("create:honey", 1000),
                    Fluid.of("minecraft:milk", 1000),
                ],
                heated: true,
                global: true,
            },
        ])
        .add([
            {
                output: "rankine:maple_syrup",
                inputs: [
                    Fluid.of("rankine:maple_sap", 1000),
                    "minecraft:glass_bottle",
                ],
                heated: true,
            },
            {
                output: "rankine:pancake_batter",
                inputs: [
                    Fluid.of("minecraft:milk", 1000),
                    "minecraft:sugar",
                    "#forge:flour",
                    "minecraft:egg",
                    "#forge:salt",
                ],
            },
            {
                output: "minecraft:netherite_ingot",
                inputs: ["minecraft:gold_ingot", "minecraft:netherite_scrap"],
            },
            // {
            //     output: "2x rankine:brass_ingot",
            //     inputs: ["minecraft:copper_ingot", "rankine:zinc_ingot"],
            // },
            {
                output: "kubejs:feed_mix",
                inputs: [
                    "kubejs:wheat_flakes",
                    "kubejs:corn_flakes",
                    "kubejs:oat_flakes",
                    "kubejs:sorghum_flakes",
                    "kubejs:millet_flakes",
                    "kubejs:rye_flakes",
                    "kubejs:barley_flakes",
                    "kubejs:soy_flakes",
                    "kubejs:pre_mix",
                ],
            },
            {
                output: "kubejs:pre_mix",
                inputs: [
                    "rankine:phosphorus",
                    "rankine:calcium_chloride",
                    Fluid.of("kubejs:antibiotics", 250),
                ],
            },
            {
                output: "cataclysm:witherite_ingot",
                inputs: [
                    "minecraft:netherite_ingot",
                    "charcoal_pit:nether_shard",
                ],
                heated: true,
            },
            {
                output: "rankine:promethium_ingot",
                inputs: [
                    "tconstruct:pig_iron_ingot",
                    "cataclysm:ignitium_ingot",
                    "cataclysm:witherite_ingot",
                ],
                superheated: true,
            },
        ]);
});
