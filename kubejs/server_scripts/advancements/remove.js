onEvent("server.datapack.high_priority", (event) => {
    function removeAdvancement(id) {
        let [mod, path] = id.split(":");
        event.addJson(`${mod}:advancements/${path}.json`, {
            criteria: {
                impossible: {
                    trigger: "minecraft:impossible",
                },
            },
        });
    }

    removeAdvancement("immersivepetroleum:main/root");
    removeAdvancement("biomancy:biomancy/root");
    removeAdvancement("architects_palette:main/root");
    removeAdvancement("lootr:root");
    removeAdvancement("butchercraft:root");
    removeAdvancement("botania:challenge/root");
    removeAdvancement("botania:main/root");
    removeAdvancement("charcoal_pit:charcoal_pit/root");
    removeAdvancement("create:root");
    removeAdvancement("dungeons_arise:wda_root");
    removeAdvancement("endrem:main/root");
    removeAdvancement("minecraft:adventure/root");
    removeAdvancement("minecraft:biomancy/root");
    removeAdvancement("minecraft:end/root");
    removeAdvancement("minecraft:husbandry/root");
    removeAdvancement("minecraft:nether/root");
    removeAdvancement("minecraft:recipes/root");
    removeAdvancement("minecraft:story/root");
    removeAdvancement("naturesaura:root");
    removeAdvancement("occultism:occultism/familiar/root");
    removeAdvancement("paraglider:root");
    removeAdvancement("pneumaticcraft:root");
    removeAdvancement("rankine:challenges/rankine_challenges");
    removeAdvancement("rankine:story/root");
    removeAdvancement("relics:obtain/root");
    removeAdvancement("tconstruct:tools/materials_and_you");
    removeAdvancement("trashcans:trash_can");
    removeAdvancement("the_bumblezone:the_bumblezone/root");
    removeAdvancement("compactmachines:root");
    removeAdvancement("hem:meltedsteelanvancement");
    removeAdvancement("hem:cracked_stone");
    removeAdvancement("ecofriendly:welcome_to_ecofreindly");
    removeAdvancement("trajanscore:parts/trajanstanks");
    removeAdvancement("undergarden:undergarden/root");
    removeAdvancement("immersiveengineering:tools/tools_root");
    removeAdvancement("immersiveengineering:multiblocks/multiblocks_root");
    removeAdvancement("immersiveengineering:main/main_root");
    removeAdvancement("viescraftmachines:root");
    removeAdvancement("crockpot:root");
    removeAdvancement("energeticsheep:root");
    removeAdvancement("blue_skies:root");
    removeAdvancement("twilightforest:root");
    removeAdvancement("farmersdelight:main/root");
    removeAdvancement("minerslung:root");
    removeAdvancement("cataclysm:root");
});
