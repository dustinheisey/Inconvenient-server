onEvent("recipes", (event) => {
    // event.remove({ output: Item.of("naturesaura:effect_powder").ignoreNBT() });

    new recipes(event)
        .setType("naturesaura:tree_ritual")
        .setFunction((config) => {
            event.custom({
                type: "naturesaura:tree_ritual",
                ingredients: config.inputs,
                sapling: config.sapling,
                output: config.output,
                time: 250,
            });
        })
        .modifyOutputs([
            {
                sapling: { item: "blue_skies:bluebright_sapling" },
                inputs: [
                    { item: "minecraft:stone" },
                    { item: "minecraft:stone" },
                    { item: "minecraft:stone" },
                    { item: "rankine:sterling_silver_ingot" },
                    { item: "rankine:pewter_ingot" },
                    { item: "naturesaura:gold_leaf" },
                    { item: "naturesaura:token_joy" },
                ],
                output: { item: "naturesaura:nature_altar" },
            },
            {
                sapling: { item: "architects_palette:twisted_sapling" },
                inputs: [
                    { item: "minecraft:gunpowder" },
                    { item: "minecraft:magma_block" },
                    { item: "minecraft:netherite_scrap" },
                    { item: "minecraft:blaze_rod" },
                    { item: "naturesaura:gold_leaf" },
                    {
                        type: "forge:nbt",
                        item: "naturesaura:aura_bottle",
                        count: 1,
                        nbt: '{stored_type:"naturesaura:nether"}',
                    },
                ],
                output: { item: "naturesaura:token_anger" },
            },
            {
                sapling: { item: "architects_palette:twisted_sapling" },
                inputs: [
                    { item: "minecraft:bone" },
                    { item: "minecraft:rotten_flesh" },
                    { item: "minecraft:netherite_scrap" },
                    { item: "minecraft:soul_sand" },
                    { item: "naturesaura:gold_leaf" },
                    {
                        type: "forge:nbt",
                        item: "naturesaura:aura_bottle",
                        count: 1,
                        nbt: '{stored_type:"naturesaura:nether"}',
                    },
                ],
                output: { item: "naturesaura:token_fear" },
            },
            {
                sapling: { item: "minecraft:oak_sapling" },
                inputs: [
                    { item: "occultism:crushed_end_stone" },
                    { item: "minecraft:cod" },
                    { item: "rankine:sterling_silver_ingot" },
                    { item: "naturesaura:gold_leaf" },
                    {
                        type: "forge:nbt",
                        item: "naturesaura:aura_bottle",
                        count: 1,
                        nbt: '{stored_type:"naturesaura:overworld"}',
                    },
                ],
                output: { item: "naturesaura:token_joy" },
            },
            {
                sapling: { item: "undergarden:smogstem_sapling" },
                inputs: [
                    { item: "minecraft:ghast_tear" },
                    { item: "minecraft:glass" },
                    { item: "minecraft:chicken" },
                    { item: "blue_skies:charscale_moki" },
                    { item: "naturesaura:gold_leaf" },
                    {
                        type: "forge:nbt",
                        item: "naturesaura:aura_bottle",
                        count: 1,
                        nbt: '{stored_type:"naturesaura:nether"}',
                    },
                ],
                output: { item: "naturesaura:token_sorrow" },
            },
            {
                sapling: { item: "blue_skies:starlit_sapling" },
                inputs: [
                    { item: "hexerei:selenite_shard" },
                    { item: "blue_skies:aquite" },
                    { item: "minecraft:heart_of_the_sea" },
                    { item: "rankine:white_marble" },
                    { item: "naturesaura:gold_powder" },
                    { item: "naturesaura:gold_powder" },
                    { item: "naturesaura:gold_powder" },
                    { item: "rankine:white_marble" },
                ],
                output: { item: "naturesaura:eye" },
            },
            {
                sapling: { item: "hexerei:mahogany_sapling" },
                inputs: [
                    { item: "botania:rune_gluttony" },
                    { item: "botania:rune_greed" },
                    { item: "naturesaura:sky_ingot" },
                    { item: "naturesaura:sky_ingot" },
                    { item: "naturesaura:gold_powder" },
                    { item: "naturesaura:gold_powder" },
                    { item: "naturesaura:eye" },
                    { item: "botania:rune_pride" },
                ],
                output: { item: "naturesaura:eye_improved" },
            },
        ]);
});
