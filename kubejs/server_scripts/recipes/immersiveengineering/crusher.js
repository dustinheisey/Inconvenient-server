onEvent("recipes", (event) => {
    const { immersiveengineeringCrusher } = event.recipes;

    event.remove({
        input: [
            "rankine:ilmenite",
            "rankine:bauxite_ore",
            "rankine:bauxite_block",
            "rankine:acanthite_block",
            "rankine:acanthite_ore",
            "rankine:acanthite",
            "rankine:bauxite",
            "rankine:cobaltite_ore",
            "rankine:cobaltite",
            "rankine:cobaltite_block",
        ],
        type: "immersiveengineering:crusher",
    });

    immersiveengineeringCrusher(
        "3x minecraft:netherite_scrap",
        "minecraft:ancient_debris"
    );
    immersiveengineeringCrusher("3x chemlib:iron_dust", "rankine:hematite");
    immersiveengineeringCrusher("3x chemlib:copper_dust", "rankine:malachite");
    immersiveengineeringCrusher("3x chemlib:sulfur_dust", "rankine:sulfur");
    immersiveengineeringCrusher("chemlib:silicon_dust", "rankine:silicon");
    immersiveengineeringCrusher("3x chemlib:zinc_dust", "rankine:sphalerite");
    immersiveengineeringCrusher("3x chemlib:tin_dust", "rankine:cassiterite");
    immersiveengineeringCrusher("3x chemlib:gold_dust", "minecraft:raw_gold");
    immersiveengineeringCrusher("3x chemlib:lead_dust", "rankine:galena");
    immersiveengineeringCrusher("3x chemlib:silver_dust", "rankine:acanthite");
    immersiveengineeringCrusher("3x chemlib:aluminum_dust", "rankine:bauxite");
    immersiveengineeringCrusher("3x chemlib:cobalt_dust", "rankine:cobaltite");
    immersiveengineeringCrusher(
        "chemlib:sodium_dust",
        "rankine:sodium_chloride"
    );
    immersiveengineeringCrusher("3x chemlib:titanium_dust", "rankine:ilmenite");
    immersiveengineeringCrusher(
        "3x chemlib:nickel_dust",
        "rankine:pentlandite"
    );
    immersiveengineeringCrusher("3x chemlib:uranium_dust", "rankine:uraninite");

    immersiveengineeringCrusher("chemlib:iron_dust", "minecraft:iron_ingot");
    immersiveengineeringCrusher(
        "chemlib:copper_dust",
        "minecraft:copper_ingot"
    );
    immersiveengineeringCrusher("chemlib:zinc_dust", "rankine:zinc_ingot");
    immersiveengineeringCrusher("chemlib:tin_dust", "rankine:tin_ingot");
    immersiveengineeringCrusher("chemlib:gold_dust", "minecraft:gold_ingot");
    immersiveengineeringCrusher("chemlib:lead_dust", "rankine:lead_ingot");
    immersiveengineeringCrusher(
        "chemlib:titanium_dust",
        "rankine:titanium_ingot"
    );
    immersiveengineeringCrusher("chemlib:nickel_dust", "rankine:nickel_ingot");
    immersiveengineeringCrusher(
        "chemlib:uranium_dust",
        "rankine:uranium_ingot"
    );

    immersiveengineeringCrusher(
        "3x blue_skies:raw_horizonite",
        "blue_skies:horizonite_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:moonstone_shard",
        "blue_skies:everdawn_moonstone_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:raw_charoite",
        "blue_skies:everdawn_charoite_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:raw_aquite",
        "blue_skies:everdawn_aquite_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:pyrope_gem",
        "blue_skies:everdawn_pyrope_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:diopside_gem",
        "blue_skies:everdawn_diopside_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:raw_ventium",
        "blue_skies:ventium_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:raw_falsite",
        "blue_skies:falsite_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:moonstone_shard",
        "blue_skies:everbright_moonstone_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:raw_charoite",
        "blue_skies:everbright_charoite_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:raw_aquite",
        "blue_skies:everbright_aquite_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:pyrope_gem",
        "blue_skies:everbright_pyrope_ore"
    );
    immersiveengineeringCrusher(
        "3x blue_skies:diopside_gem",
        "blue_skies:everbright_diopside_ore"
    );
    immersiveengineeringCrusher(
        "3x occultism:iesnium_dust",
        "occultism:iesnium_ore"
    );
    immersiveengineeringCrusher(
        "6x minecraft:quartz",
        "rankine:nether_quartz_ore"
    );
    immersiveengineeringCrusher("3x rankine:graphite", "rankine:plumbago_ore");
    immersiveengineeringCrusher(
        "3x rankine:sulfur",
        "rankine:native_sulfur_ore"
    );
    immersiveengineeringCrusher(
        "16x minecraft:redstone",
        "rankine:cinnabar_ore"
    );
    immersiveengineeringCrusher(
        "3x undergarden:regalium_crystal",
        "undergarden:shiverstone_regalium_ore"
    );
    immersiveengineeringCrusher(
        "3x undergarden:regalium_crystal",
        "undergarden:depthrock_regalium_ore"
    );
    immersiveengineeringCrusher(
        "3x undergarden:utherium_crystal",
        "undergarden:depthrock_utherium_ore"
    );
    immersiveengineeringCrusher(
        "3x undergarden:utherium_crystal",
        "undergarden:tremblecrust_utherium_ore"
    );
    immersiveengineeringCrusher(
        "3x undergarden:utherium_crystal",
        "undergarden:shiverstone_utherium_ore"
    );
    immersiveengineeringCrusher(
        "3x undergarden:raw_froststeel",
        "undergarden:shiverstone_froststeel_ore"
    );
    immersiveengineeringCrusher(
        "3x undergarden:raw_cloggrum",
        "undergarden:shiverstone_cloggrum_ore"
    );
    immersiveengineeringCrusher(
        "3x undergarden:raw_cloggrum",
        "undergarden:depthrock_cloggrum_ore"
    );
    immersiveengineeringCrusher(
        "5x minecraft:coal",
        "undergarden:shiverstone_coal_ore"
    );
    immersiveengineeringCrusher(
        "5x minecraft:coal",
        "undergarden:depthrock_coal_ore"
    );
});
