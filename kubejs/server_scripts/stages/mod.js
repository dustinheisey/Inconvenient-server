// priority: 205

onEvent("tags.items", (event) => {
  function stageMods(stage, mods) {
    mods.forEach((mod) => {
      event.add(`im:${stage}`, `@${mod}`);
    });
  }

  stageMods("stage_1", [
    "thirst",
    "charcoal_pit",
    "naturescompass",
    "paraglider",
    "rankine",
    "ceramicbucket",
    "minecraft",
    "realistictorches",
    "justaraftmod",
    "antiqueatlas",
    "kubejs",
    "rocks",
    "death_compass",
    "gravestone",
  ]);
  stageMods("stage_2", [
    "farmersdelight",
    "strawgolem",
    "cold_sweat",
    "blue_skies",
    "smallships",
    "tconstruct",
    "gateways",
    "paragon_textiles",
    "farmersrespite",
    "modonomicon",
    "theurgy",
  ]);
  stageMods("stage_3", [
    "comforts",
    "balanced_crates",
    "hexerei",
    "akashictome",
    "twilightforest",
    "explorerscompass",
    "occultism",
    "undergarden",
    "twilighttweaks",
  ]);
  stageMods("stage_4", [
    "immersive_aircraft",
    "relics",
    "bloodmagic",
    "create",
    "constructionwand",
    "chunkloaders",
    "framedblocks",
    "adchimneys",
    "hem",
    "waystones",
    "createaddition",
    "architects_palette",
    "chipped",
  ]);
  stageMods("stage_5_1", [
    "sliceanddice",
    "delightful",
    "butchercraft",
    "energeticsheep",
    "productivebees",
    "botania",
    "the_bumblezone",
    "brewinandchewin",
    "farmingforblockheads",
    "measurements",
  ]);
  stageMods("stage_5_2", [
    "simplylight",
    "morphtool",
    "compactmachines",
    "compactcrafting",
    "immersiveengineering",
    "pneumaticcraft",
    "coinsje",
    "compressedcreativity",
    "immersivepetroleum",
  ]);
  stageMods("stage_7_1", [
    "chemlib",
    "adpother",
    // "wirelesschargers",
    "extendedcrafting",
    "cataclysm",
    "ecofriendly",
    // "mythicbotany",
    "mekanismgenerators",
    "mekanism",
    "naturesaura",
    "endrem",
  ]);
  stageMods("stage_7_2", [
    "bloodsmeltery",
    "infectum",
    "industrialforegoing",
    "biomancy",
  ]);
});
