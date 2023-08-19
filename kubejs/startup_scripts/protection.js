onEvent("item.modification", (event) => {
    const setProtection = (id, protection, pieces, separator) => {
        if (!pieces) pieces = ["helmet", "chestplate", "leggings", "boots"];

        pieces.forEach((piece, index) => {
            event.modify(`${id}${separator || "_"}${piece}`, (modification) => {
                modification.setArmorProtection(protection[index]);
            });
        });
    };

    setProtection("minecraft:leather", [1, 2, 1, 1]);
    setProtection("charcoal_pit:copper", [1, 2, 2, 1]);
    setProtection("charcoal_pit:bronze", [1, 3, 2, 1]);
    setProtection("minecraft:iron", [1, 3, 2, 2]);

    setProtection("blue_skies:aquite", [1, 5, 2, 2]);
    setProtection("blue_skies:pyrope", [2, 5, 2, 2]);
    setProtection("blue_skies:diopside", [2, 5, 2, 2]);
    setProtection("blue_skies:charoite", [2, 5, 3, 2]);

    setProtection(
        "naturesaura:infused_iron",
        [2, 6, 5, 2],
        ["helmet", "chest", "pants", "boots"]
    );
    setProtection("undergarden:cloggrum", [2, 6, 5, 3]);
    setProtection("undergarden:froststeel", [3, 7, 5, 3]);
    setProtection("undergarden:utherium", [3, 7, 5, 3]);
    setProtection("blue_skies:horizonite", [3, 8, 6, 3]);
    setProtection("twilightforest:ironwood", [3, 9, 6, 3]);
    setProtection("twilightforest:arctic", [3, 9, 6, 3]);
    setProtection("twilightforest:yeti", [4, 9, 6, 3]);
    setProtection("twilightforest:steeleaf", [4, 9, 7, 3]);
    setProtection("twilightforest:fiery", [5, 9, 7, 4]);
    setProtection("twilightforest:knightmetal", [5, 10, 7, 4]);

    setProtection("minecraft:netherite", [6, 11, 7, 5]);
    setProtection("cataclysm:ignitium", [7, 11, 7, 5]);
    setProtection("hem:steampunkoutfit", [7, 11, 7, 5]);
    setProtection("charcoal_pit:orichalcum", [7, 12, 7, 5]);

    setProtection("botania:manasteel", [8, 12, 7, 6]);
    setProtection(
        "naturesaura:sky",
        [8, 12, 9, 6],
        ["helmet", "chest", "pants", "boots"]
    );
    setProtection("botania:terrasteel", [8, 13, 10, 7]);
    setProtection("botania:elementium", [8, 13, 11, 7]);
    setProtection(
        "the_bumblezone",
        [8, 13, 11, 8],
        [
            "stingless_bee_helmet_1",
            "bumble_bee_chestplate_1",
            "honey_bee_leggings_1",
            "carpenter_bee_boots_1",
        ],
        ":"
    );
    setProtection(
        "the_bumblezone",
        [8, 13, 11, 8],
        [
            "stingless_bee_helmet_2",
            "bumble_bee_chestplate_2",
            "honey_bee_leggings_2",
            "carpenter_bee_boots_2",
        ],
        ":"
    );

    setProtection("rankine:brigandine", [8, 12, 7, 6]);
    setProtection("penumaticcraft:compressed_iron", [9, 15, 8, 6]);

    event.modify(
        "the_bumblezone:bumble_bee_chestplate_trans_1",
        (modification) => {
            modification.setArmorProtection(13);
        }
    );

    event.modify(
        "the_bumblezone:bumble_bee_chestplate_trans_2",
        (modification) => {
            modification.setArmorProtection(13);
        }
    );

    // stage 7.1
    // setProtection({
    //     id: "minecraft:diamond",
    //     protection: [9, 14, 12, 8],
    // });

    // setProtection({
    //     id: "mythicbotany:alfsteel",
    //     protection: [9, 15, 14, 9],
    // });

    // stage 7.2
    // setProtection({
    //     id: "infectum:test",
    //     protection: [10, 16, 13, 9],
    // });
});
