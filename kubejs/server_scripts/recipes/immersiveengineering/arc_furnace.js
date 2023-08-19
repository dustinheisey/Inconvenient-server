onEvent("recipes", (event) => {
    const { immersiveengineeringArcFurnace } = event.recipes;

    event.remove({
        input: [
            "minecraft:raw_gold_block",
            "rankine:bauxite_ore",
            "minecraft:ancient_debris",
            "rankine:sphalerite_ore",
            "rankine:pentlandite_ore",
            "rankine:acanthite_ore",
            "rankine:uraninite_ore",
            "rankine:galena_ore",
            "rankine:cobaltite_ore",
            "minecraft:raw_gold",
        ],
        type: "immersiveengineering:arc_furnace",
    });

    event.remove({
        output: "extendedcrafting:ender_ingot",
    });

    immersiveengineeringArcFurnace(
        "kubejs:catalyst",
        Item.of("minecraft:potion", '{Potion:"minecraft:water"}'),
        ["chemlib:chromium_oxide", "chemlib:silicon_dioxide"]
    );

    immersiveengineeringArcFurnace(
        "extendedcrafting:ender_ingot",
        "rankine:uranium_ingot",
        ["2x minecraft:ender_pearl"]
    );

    immersiveengineeringArcFurnace(
        "rankine:silicon_carbide",
        "rankine:silicon",
        ["4x rankine:carbon"]
    );

    immersiveengineeringArcFurnace(
        "3x minecraft:netherite_scrap",
        "minecraft:ancient_debris"
    );
    immersiveengineeringArcFurnace(
        "3x minecraft:iron_ingot",
        "rankine:hematite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x minecraft:copper_ingot",
        "rankine:malachite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:zinc_ingot",
        "rankine:sphalerite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:tin_ingot",
        "rankine:cassiterite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x minecraft:gold_ingot",
        "minecraft:gold_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:lead_ingot",
        "rankine:galena_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:silver_ingot",
        "rankine:acanthite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:aluminum_ingot",
        "rankine:bauxite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:cobalt_ingot",
        "rankine:cobaltite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:titanium_ingot",
        "rankine:ilmenite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:nickel_ingot",
        "rankine:pentlandite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:uranium_ingot",
        "rankine:uraninite_ore"
    );

    immersiveengineeringArcFurnace(
        "3x blue_skies:horizonite_ingot",
        "blue_skies:horizonite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:moonstone_shard",
        "blue_skies:everdawn_moonstone_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:charoite",
        "blue_skies:everdawn_charoite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:aquite",
        "blue_skies:everdawn_aquite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:pyrope_gem",
        "blue_skies:everdawn_pyrope_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:diopside_gem",
        "blue_skies:everdawn_diopside_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:ventium_ingot",
        "blue_skies:ventium_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:falsite_ingot",
        "blue_skies:falsite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:moonstone_shard",
        "blue_skies:everbright_moonstone_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:charoite",
        "blue_skies:everbright_charoite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:aquite",
        "blue_skies:everbright_aquite_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:pyrope_gem",
        "blue_skies:everbright_pyrope_ore"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:diopside_gem",
        "blue_skies:everbright_diopside_ore"
    );
    immersiveengineeringArcFurnace(
        "3x occultism:iesnium_ingot",
        "occultism:iesnium_ore"
    );
    immersiveengineeringArcFurnace(
        "6x minecraft:quartz",
        "rankine:nether_quartz_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:graphite",
        "rankine:plumbago_ore"
    );
    immersiveengineeringArcFurnace(
        "3x rankine:sulfur",
        "rankine:native_sulfur_ore"
    );
    immersiveengineeringArcFurnace(
        "16x minecraft:redstone",
        "rankine:cinnabar_ore"
    );
    immersiveengineeringArcFurnace(
        "3x undergarden:regalium_crystal",
        "undergarden:shiverstone_regalium_ore"
    );
    immersiveengineeringArcFurnace(
        "3x undergarden:regalium_crystal",
        "undergarden:depthrock_regalium_ore"
    );
    immersiveengineeringArcFurnace(
        "3x undergarden:utherium_crystal",
        "undergarden:depthrock_utherium_ore"
    );
    immersiveengineeringArcFurnace(
        "3x undergarden:utherium_crystal",
        "undergarden:tremblecrust_utherium_ore"
    );
    immersiveengineeringArcFurnace(
        "3x undergarden:utherium_crystal",
        "undergarden:shiverstone_utherium_ore"
    );
    immersiveengineeringArcFurnace(
        "3x undergarden:froststeel_ingot",
        "undergarden:shiverstone_froststeel_ore"
    );
    immersiveengineeringArcFurnace(
        "3x undergarden:cloggrum_ingot",
        "undergarden:shiverstone_cloggrum_ore"
    );
    immersiveengineeringArcFurnace(
        "3x undergarden:cloggrum_ingot",
        "undergarden:depthrock_cloggrum_ore"
    );
    immersiveengineeringArcFurnace(
        "5x minecraft:coal",
        "undergarden:shiverstone_coal_ore"
    );
    immersiveengineeringArcFurnace(
        "5x minecraft:coal",
        "undergarden:depthrock_coal_ore"
    );

    immersiveengineeringArcFurnace(
        "minecraft:copper_ingot",
        "chemlib:copper_dust"
    );
    immersiveengineeringArcFurnace("rankine:tin_ingot", "chemlib:tin_dust");
    immersiveengineeringArcFurnace(
        "rankine:titanium_ingot",
        "chemlib:titanium_dust"
    );

    immersiveengineeringArcFurnace(
        "2x blue_skies:horizonite_ingot",
        "blue_skies:raw_horizonite"
    );
    immersiveengineeringArcFurnace(
        "3x blue_skies:moonstone_shard",
        "blue_skies:everdawn_moonstone_ore"
    );
    immersiveengineeringArcFurnace(
        "2x blue_skies:charoite",
        "blue_skies:raw_charoite"
    );
    immersiveengineeringArcFurnace(
        "2x blue_skies:aquite",
        "blue_skies:raw_aquite"
    );
    immersiveengineeringArcFurnace(
        "2x blue_skies:ventium_ingot",
        "blue_skies:raw_ventium"
    );
    immersiveengineeringArcFurnace(
        "2x blue_skies:falsite_ingot",
        "blue_skies:raw_falsite"
    );
    immersiveengineeringArcFurnace(
        "2x blue_skies:charoite",
        "blue_skies:raw_charoite"
    );
    immersiveengineeringArcFurnace(
        "2x blue_skies:aquite",
        "blue_skies:raw_aquite"
    );
    immersiveengineeringArcFurnace(
        "occultism:iesnium_ingot",
        "occultism:iesnium_dust"
    );
    immersiveengineeringArcFurnace(
        "2x undergarden:froststeel_ingot",
        "undergarden:raw_froststeel"
    );
    immersiveengineeringArcFurnace(
        "2x undergarden:cloggrum_ingot",
        "undergarden:raw_cloggrum"
    );
    immersiveengineeringArcFurnace(
        "2x undergarden:cloggrum_ingot",
        "undergarden:raw_cloggrum"
    );
});
