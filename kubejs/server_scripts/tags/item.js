// priority: 301

onEvent("tags.items", (event) => {
  function removeTag(tag, item) {
    event.remove(tag, item);
  }

  function removeTags(tags, item) {
    tags.forEach((tag) => event.remove(tag, item));
  }

  function removeItems(tag, items) {
    items.forEach((item) => event.remove(tag, item));
  }

  function addTag(tag, item) {
    event.add(tag, item);
  }

  function addItems(tag, items) {
    items.forEach((item) => event.add(tag, item));
  }

  function replaceTag(tag, item) {
    event.removeAll(tag);
    event.add(tag, item);
  }

  function replaceTags(tags, item) {
    tags.forEach((tag) => {
      event.removeAll(tag);
      event.add(tag, item);
    });
  }

  // Define the function to add a tag to all items of another tag
  function addTagToItemsOfAnotherTag(oldTag, newTag) {
    // Get all items of the specified old tag
    const items = event
      .get(oldTag)
      .getObjectIds()
      .forEach((id) => {
        event.add(newTag, id);
      });
  }

  // Call the function, specifying the old tag and the new tag
  // addTagToItemsOfAnotherTag("balm:stones", "salt:salt_cluster_growables");

  removeTag("forge:ingots/electrum", "rankine:green_gold_ingot");
  removeTag("forge:nuggets/electrum", "rankine:green_gold_nugget");
  removeTag("forge:storage_blocks/electrum", "rankine:green_gold_block");
  removeTag("forge:ingots/netherite", "cataclysm:witherite_ingot");

  removeTags(["minecraft:wool", "forge:wool"], `paragon_textiles:fabric_plain`);

  colors.forEach((color) => {
    removeTags(
      [
        "minecraft:wool",
        "forge:wool",
        `minecraft:wool/${color}`,
        `forge:wool/${color}`,
      ],
      `paragon_textiles:fabric_${color}`
    );
  });

  removeItems("minecraft:carpets", [
    "farmersdelight:half_tatami_mat",
    "farmersdelight:full_tatami_mat",
  ]);

  [
    "uranium",
    "protactinium",
    "thorium",
    "actinium",
    "radium",
    "francium",
    "polonium",
    "lead",
    "bismuth",
    "thallium",
    "platinum",
    "iridium",
    "osmium",
    "rhenium",
    "tungsten",
    "tantalum",
    "hafnium",
    "lutetium",
    "ytterbium",
    "thulium",
    "erbium",
    "holmium",
    "dysprosium",
    "terbium",
    "gadolinium",
    "europium",
    "samarium",
    "neodymium",
    "praseodymium",
    "lanthanum",
    "cerium",
    "barium",
    "cesium",
    "tin",
    "indium",
    "cadmium",
    "silver",
    "palladium",
    "rhodium",
    "ruthenium",
    "molybdenum",
    "niobium",
    "zirconium",
    "yttrium",
    "strontium",
    "rubidium",
    "gallium",
    "zinc",
    "nickel",
    "cobalt",
    "manganese",
    "chromium",
    "vanadium",
    "titanium",
    "scandium",
    "calcium",
    "potassium",
    "aluminum",
    "magnesium",
    "sodium",
    "beryllium",
    "lithium",
  ].forEach((element) =>
    addTag(`forge:storage_blocks/${element}`, `chemlib:${element}_metal_block`)
  );

  ["helium", "neon", "argon", "krypton", "xenon", "radon"].forEach(
    (element) => {
      addTag(
        `forge:storage_blocks/${element}`,
        `chemlib:${element}_lamp_block`
      );
    }
  );

  const terracottaIndexes = 67;

  for (let i = 1; i < terracottaIndexes; i++) {
    addTag("chipped:terracotta", `chipped:terracotta_${i}`);
  }

  //   addTag("forge:storage_blocks/salt", "rankine:sodium_chloride_block");
  addTag("forge:storage_blocks/salt", "rankine:pink_salt_block");
  addTag("forge:bitumen", "rankine:bitumen");
  addTag("forge:raw_materials/iron", "rankine:hematite");
  addTag("forge:raw_materials/tin", "rankine:cassiterite");
  addTag("forge:raw_materials/lead", "rankine:galena");
  addTag("forge:raw_materials/silver", "rankine:acanthite");
  addTag("forge:raw_materials/zinc", "rankine:sphalerite");
  addTag("forge:raw_materials/aluminum", "rankine:bauxite");
  addTag("forge:raw_materials/uranium", "rankine:uraninite");
  addTag("forge:raw_materials/nickel", "rankine:pentlandite");
  addTag("forge:raw_materials/cobalt", "rankine:cobaltite");
  addTag("chipped:raw_iron_block", "rankine:hematite_block");
  addTag("chipped:raw_copper_block", "rankine:malachite_block");
  addTag("forge:storage_blocks/raw_iron", "rankine:hematite_block");
  addTag("forge:storage_blocks/raw_copper", "rankine:malachite_block");
  addTag("forge:storage_blocks/raw_tin", "rankine:cassiterite_block");
  addTag("forge:storage_blocks/raw_lead", "rankine:galena_block");
  addTag("forge:storage_blocks/raw_silver", "rankine:acanthite_block");
  addTag("forge:storage_blocks/raw_zinc", "rankine:sphalerite_block");
  addTag("forge:storage_blocks/raw_aluminum", "rankine:bauxite_block");
  addTag("forge:storage_blocks/raw_uranium", "rankine:uraninite_block");
  addTag("forge:storage_blocks/raw_nickel", "rankine:pentlandite_block");
  addTag("forge:storage_blocks/raw_cobalt", "rankine:cobaltite_block");

  addItems("im:eyes", [
    "endrem:black_eye",
    "endrem:cold_eye",
    "endrem:corrupted_eye",
    "endrem:cryptic_eye",
    "endrem:cursed_eye",
    "endrem:exotic_eye",
    "endrem:guardian_eye",
    "endrem:lost_eye",
    "endrem:nether_eye",
    "endrem:undead_eye",
    "endrem:rogue_eye",
    "endrem:wither_eye",
  ]);
  addItems("im:leather_armor", [
    "minecraft:leather_helmet",
    "minecraft:leather_chestplate",
    "minecraft:leather_leggings",
    "minecraft:leather_boots",
  ]);
  addItems("im:cogs", [
    "smallships:oak_cog",
    "smallships:spruce_cog",
    "smallships:birch_cog",
    "smallships:jungle_cog",
    "smallships:acacia_cog",
    "smallships:dark_oak_cog",
  ]);
  addItems("im:rafts", [
    "justaraftmod:oak_raft",
    "justaraftmod:spruce_raft",
    "justaraftmod:birch_raft",
    "justaraftmod:jungle_raft",
    "justaraftmod:acacia_raft",
    "justaraftmod:dark_oak_raft",
    "justaraftmod:bamboo_raft",
  ]);
  addItems("im:briggs", [
    "smallships:oak_brigg",
    "smallships:spruce_brigg",
    "smallships:birch_brigg",
    "smallships:jungle_brigg",
    "smallships:acacia_brigg",
    "smallships:dark_oak_brigg",
  ]);
  addItems("im:sleeping_bags", [
    "comforts:sleeping_bag_white",
    "comforts:sleeping_bag_orange",
    "comforts:sleeping_bag_magenta",
    "comforts:sleeping_bag_light_blue",
    "comforts:sleeping_bag_yellow",
    "comforts:sleeping_bag_lime",
    "comforts:sleeping_bag_pink",
    "comforts:sleeping_bag_gray",
    "comforts:sleeping_bag_light_gray",
    "comforts:sleeping_bag_cyan",
    "comforts:sleeping_bag_purple",
    "comforts:sleeping_bag_blue",
    "comforts:sleeping_bag_brown",
    "comforts:sleeping_bag_green",
    "comforts:sleeping_bag_red",
    "comforts:sleeping_bag_black",
  ]);

  replaceTag("twilightforest:portal/activator", "bloodmagic:lavacrystal");
  replaceTags(
    [
      "forge:grain",
      "forge:grain/wheat",
      "forge:crops",
      "forge:crops/wheat",
      "hexerei:herbs",
    ],
    "kubejs:wheat"
  );
});
