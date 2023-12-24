// priority: 100

onEvent('recipes', event => {
  // ? functions
  const stageArmorTier = config => {
    //  ? removals
    if (config.custom) {
      config.custom.pieces.forEach(piece =>
        event.remove({output: `${config.custom.tier}_${piece}`})
      );
    } else {
      ['helmet', 'chestplate', 'leggings', 'boots'].forEach(piece =>
        event.remove({output: `${config.tier}_${piece}`})
      );
    }

    // ? recipes
    if (config.custom) {
      event
        .shaped(
          `${config.custom.tier}_${config.custom.pieces[0]}`,
          ['aaa', 'aba'],
          {
            a: config.input_material,
            b: `${config.custom.previous_tier}_${config.custom.previous_pieces[0]}`,
          }
        )
        .stage(config.unlock_stage);

      if (config.master_stage)
        event
          .shaped(
            `${config.custom.tier}_${config.custom.pieces[0]}`,
            ['aaa', 'a a'],
            {
              a: config.input_material,
            }
          )
          .stage(`${config.master_stage}_helmet`);

      event
        .shaped(
          `${config.custom.tier}_${config.custom.pieces[1]}`,
          ['aba', 'aaa', 'aaa'],
          {
            a: config.input_material,
            b: `${config.custom.previous_tier}_${config.custom.previous_pieces[1]}`,
          }
        )
        .stage(config.unlock_stage);

      if (config.master_stage)
        event
          .shaped(
            `${config.custom.tier}_${config.custom.pieces[1]}`,
            ['a a', 'aaa', 'aaa'],
            {
              a: config.input_material,
            }
          )
          .stage(`${config.master_stage}_chestplate`);

      event
        .shaped(
          `${config.custom.tier}_${config.custom.pieces[2]}`,
          ['aaa', 'aba', 'a a'],
          {
            a: config.input_material,
            b: `${config.custom.previous_tier}_${config.custom.previous_pieces[2]}`,
          }
        )
        .stage(config.unlock_stage);

      if (config.master_stage)
        event
          .shaped(
            `${config.custom.tier}_${config.custom.pieces[2]}`,
            ['aaa', 'a a', 'a a'],
            {
              a: config.input_material,
            }
          )
          .stage(`${config.master_stage}_leggings`);

      event
        .shaped(
          `${config.custom.tier}_${config.custom.pieces[3]}`,
          ['aba', 'a a'],
          {
            a: config.input_material,
            b: `${config.custom.previous_tier}_${config.custom.previous_pieces[3]}`,
          }
        )
        .stage(config.unlock_stage);

      if (config.master_stage)
        event
          .shaped(
            `${config.custom.tier}_${config.custom.pieces[3]}`,
            ['a a', 'a a'],
            {
              a: config.input_material,
            }
          )
          .stage(`${config.master_stage}_boots`);
    } else {
      event
        .shaped(`${config.tier}_helmet`, ['aaa', 'aba'], {
          a: config.input_material,
          b: `${config.previous_tier}_helmet`,
        })
        .stage(config.unlock_stage);

      if (config.master_stage)
        event
          .shaped(`${config.tier}_helmet`, ['aaa', 'a a'], {
            a: config.input_material,
          })
          .stage(`${config.master_stage}_helmet`);

      event
        .shaped(`${config.tier}_chestplate`, ['aba', 'aaa', 'aaa'], {
          a: config.input_material,
          b: `${config.previous_tier}_chestplate`,
        })
        .stage(config.unlock_stage);

      if (config.master_stage)
        event
          .shaped(`${config.tier}_chestplate`, ['a a', 'aaa', 'aaa'], {
            a: config.input_material,
          })
          .stage(`${config.master_stage}_chestplate`);

      event
        .shaped(`${config.tier}_leggings`, ['aaa', 'aba', 'a a'], {
          a: config.input_material,
          b: `${config.previous_tier}_leggings`,
        })
        .stage(config.unlock_stage);

      if (config.master_stage)
        event
          .shaped(`${config.tier}_leggings`, ['aaa', 'a a', 'a a'], {
            a: config.input_material,
          })
          .stage(`${config.master_stage}_leggings`);

      event
        .shaped(`${config.tier}_boots`, ['aba', 'a a'], {
          a: config.input_material,
          b: `${config.previous_tier}_boots`,
        })
        .stage(config.unlock_stage);

      if (config.master_stage)
        event
          .shaped(`${config.tier}_boots`, ['a a', 'a a'], {
            a: config.input_material,
          })
          .stage(`${config.master_stage}_boots`);
    }
  };

  // const stage_bee_armor = () => {
  //   [
  //     'the_bumblezone:stingless_bee_helmet_1',
  //     'the_bumblezone:honey_bee_leggings_1',
  //     'the_bumblezone:bumble_bee_chestplate_1',
  //     'the_bumblezone:carpenter_bee_boots_1',
  //   ].forEach(piece => {
  //     event.remove({output: piece});
  //   });

  //   event
  //     .shaped('the_bumblezone:stingless_bee_helmet_1', ['aaa', 'aba'], {
  //       a: 'productivebees:wax',
  //       b: 'botania:elementium_helmet',
  //     })
  //     .stage('stage_5_1');

  //   event
  //     .shaped('the_bumblezone:stingless_bee_helmet_1', ['aaa', 'a a'], {
  //       a: 'productivebees:wax',
  //     })
  //     .stage('armor_bee');

  //   event
  //     .shaped('the_bumblezone:bumble_bee_chestplate_1', ['aba', 'aaa', 'aaa'], {
  //       a: 'productivebees:wax',
  //       b: 'botania:elementium_chestplate',
  //     })
  //     .stage('stage_5_1');

  //   event
  //     .shaped('the_bumblezone:bumble_bee_chestplate_1', ['a a', 'aaa', 'aaa'], {
  //       a: 'productivebees:wax',
  //     })
  //     .stage('armor_bee');

  //   event
  //     .shaped('the_bumblezone:honey_bee_leggings_1', ['aaa', 'aba', 'a a'], {
  //       a: 'productivebees:wax',
  //       b: 'botania:elementium_leggings',
  //     })
  //     .stage('stage_5_1');

  //   event
  //     .shaped('the_bumblezone:honey_bee_leggings_1', ['aaa', 'a a', 'a a'], {
  //       a: 'productivebees:wax',
  //     })
  //     .stage('armor_bee');

  //   event
  //     .shaped('the_bumblezone:carpenter_bee_boots_1', ['aba', 'a a'], {
  //       a: 'productivebees:wax',
  //       b: 'botania:elementium_boots',
  //     })
  //     .stage('stage_5_1');

  //   event
  //     .shaped('the_bumblezone:carpenter_bee_boots_1', ['a a', 'a a'], {
  //       a: 'productivebees:wax',
  //     })
  //     .stage('armor_bee');
  // };

  // const stage_diamond_armor = () => {
  //   [
  //     'minecraft:diamond_helmet',
  //     'minecraft:diamond_chestplate',
  //     'minecraft:diamond_leggings',
  //     'minecraft:diamond_boots',
  //   ].forEach(piece => {
  //     event.remove({output: piece});
  //   });

  //   event
  //     .shaped('minecraft:diamond_helmet', ['aaa', 'aba'], {
  //       a: 'minecraft:diamond',
  //       b: 'the_bumblezone:stingless_bee_helmet_1',
  //     })
  //     .stage('stage_7_1');

  //   event
  //     .shaped('minecraft:diamond_helmet', ['aaa', 'a a'], {
  //       a: 'minecraft:diamond',
  //     })
  //     .stage('armor_diamond');

  //   event
  //     .shaped('minecraft:diamond_chestplate', ['aba', 'aaa', 'aaa'], {
  //       a: 'minecraft:diamond',
  //       b: 'the_bumblezone:bumble_bee_chestplate_1',
  //     })
  //     .stage('stage_7_1');

  //   event
  //     .shaped('minecraft:diamond_chestplate', ['a a', 'aaa', 'aaa'], {
  //       a: 'minecraft:diamond',
  //     })
  //     .stage('armor_diamond');

  //   event
  //     .shaped('minecraft:diamond_leggings', ['aaa', 'aba', 'a a'], {
  //       a: 'minecraft:diamond',
  //       b: 'the_bumblezone:honey_bee_leggings_1',
  //     })
  //     .stage('stage_7_1');

  //   event
  //     .shaped('minecraft:diamond_leggings', ['aaa', 'a a', 'a a'], {
  //       a: 'minecraft:diamond',
  //     })
  //     .stage('armor_diamond');

  //   event
  //     .shaped('minecraft:diamond_boots', ['aba', 'a a'], {
  //       a: 'minecraft:diamond',
  //       b: 'the_bumblezone:carpenter_bee_boots_1',
  //     })
  //     .stage('stage_7_1');

  //   event
  //     .shaped('minecraft:diamond_boots', ['a a', 'a a'], {
  //       a: 'minecraft:diamond',
  //     })
  //     .stage('armor_diamond');
  // };

  // const stage_mekasuit_armor = () => {
  //     [
  //         "mekanism:mekasuit_helmet",
  //         "mekanism:mekasuit_bodyarmor",
  //         "mekanism:mekasuit_pants",
  //         "mekanism:mekanism_boots",
  //     ].forEach((piece) => event.remove({ output: piece }));

  //     event
  //         .shaped("mekanism:mekasuit_helmet", ["aba", "aca", "ded"], {
  //             a: "mekanism:hdpe_sheet",
  //             b: "mekanism:ultimate_control_circuit",
  //             c: "mythicbotany:alfsteel_helmet",
  //             d: "mekanism:pellet_polonium",
  //             e: "mekanism:basic_induction_cell",
  //         })
  //         .stage("stage_7_1");

  //     event
  //         .shaped("mekanism:mekasuit_bodyarmor", ["aba", "aca", "ded"], {
  //             a: "mekanism:hdpe_sheet",
  //             b: "mekanism:ultimate_control_circuit",
  //             c: "mythicbotany:alfsteel_chestplate",
  //             d: "mekanism:pellet_polonium",
  //             e: "mekanism:basic_induction_cell",
  //         })
  //         .stage("stage_7_1");

  //     event
  //         .shaped("mekanism:mekasuit_pants", ["aba", "aca", "ded"], {
  //             a: "mekanism:hdpe_sheet",
  //             b: "mekanism:ultimate_control_circuit",
  //             c: "mythicbotany:alfsteel_leggings",
  //             d: "mekanism:pellet_polonium",
  //             e: "mekanism:basic_induction_cell",
  //         })
  //         .stage("stage_7_1");

  //     event
  //         .shaped("mekanism:mekasuit_boots", ["aba", "aca", "ded"], {
  //             a: "mekanism:hdpe_sheet",
  //             b: "mekanism:ultimate_control_circuit",
  //             c: "mythicbotany:alfsteel_boots",
  //             d: "mekanism:pellet_polonium",
  //             e: "mekanism:basic_induction_cell",
  //         })
  //         .stage("stage_7_1");
  // };

  // const stage_pneumatic_armor = () => {
  //     [
  //         "pneumaticcraft:pneumatic_helmet",
  //         "pneumaticcraft:pneumatic_chestplate",
  //         "pneumaticcraft:pneumatic_leggings",
  //         "pneumaticcraft:pneumatic_boots",
  //     ].forEach((piece) => event.remove({ output: piece }));

  //     event
  //         .shaped("pneumaticcraft:pneumatic_helmet", ["aba", "aca", "aaa"], {
  //             a: "pneumaticcraft:air_canister",
  //             b: "pneumaticcraft:printed_circuit_board",
  //             c: "infectum:test_helmet",
  //         })
  //         .stage("stage_7_2");

  //     event
  //         .shaped(
  //             "pneumaticcraft:pneumatic_chestplate",
  //             ["aba", "aca", "aaa"],
  //             {
  //                 a: "pneumaticcraft:air_canister",
  //                 b: "pneumaticcraft:printed_circuit_board",
  //                 c: "infectum:test_chestplate",
  //             }
  //         )
  //         .stage("stage_7_2");

  //     event
  //         .shaped(
  //             "pneumaticcraft:pneumatic_leggings",
  //             ["aba", "aca", "aaa"],
  //             {
  //                 a: "pneumaticcraft:air_canister",
  //                 b: "pneumaticcraft:printed_circuit_board",
  //                 c: "infectum:test_leggings",
  //             }
  //         )
  //         .stage("stage_7_2");

  //     event
  //         .shaped("pneumaticcraft:pneumatic_boots", ["aba", "aca", "aaa"], {
  //             a: "pneumaticcraft:air_canister",
  //             b: "pneumaticcraft:printed_circuit_board",
  //             c: "infectum:test_boots",
  //         })
  //         .stage("stage_7_2");
  // };

  // copper
  stageArmorTier({
    tier: 'charcoal_pit:copper',
    previous_tier: 'minecraft:leather',
    input_material: 'minecraft:copper_ingot',
    unlock_stage: 'stage_1',
    master_stage: 'armor_copper',
  });

  // bronze
  stageArmorTier({
    tier: 'charcoal_pit:bronze',
    previous_tier: 'charcoal_pit:copper',
    input_material: 'rankine:bronze_ingot',
    unlock_stage: 'stage_1',
    master_stage: 'armor_bronze',
  });

  // iron
  stageArmorTier({
    tier: 'minecraft:iron',
    previous_tier: 'charcoal_pit:bronze',
    input_material: 'minecraft:iron_ingot',
    unlock_stage: 'stage_1',
    master_stage: 'armor_iron',
  });

  // charoite
  stageArmorTier({
    tier: 'blue_skies:charoite',
    previous_tier: 'minecraft:iron',
    input_material: 'blue_skies:charoite',
    unlock_stage: 'stage_2',
    master_stage: 'armor_charoite',
  });

  // utherium
  stageArmorTier({
    tier: 'undergarden:utherium',
    previous_tier: 'blue_skies:charoite',
    input_material: 'undergarden:utherium_crystal',
    unlock_stage: 'stage_3',
    master_stage: 'armor_utherium',
  });

  // horizonite
  stageArmorTier({
    tier: 'blue_skies:horizonite',
    previous_tier: 'undergarden:utherium',
    input_material: 'blue_skies:horizonite_ingot',
    unlock_stage: 'stage_3',
    master_stage: 'armor_horizonite',
  });

  // fiery
  stageArmorTier({
    tier: 'twilightforest:fiery',
    previous_tier: 'malum:soul_stained_steel',
    input_material: 'twilightforest:fiery_ingot',
    unlock_stage: 'stage_3',
    master_stage: 'armor_fiery',
  });

  // ignitium
  stageArmorTier({
    tier: 'cataclysm:ignitium',
    previous_tier: 'minecraft:netherite',
    input_material: 'cataclysm:ignitium_ingot',
    unlock_stage: 'stage_4',
    master_stage: 'armor_ignitium',
  });

  // engineers
  stageArmorTier({
    tier: 'hem:steampunkoutfit',
    previous_tier: 'cataclysm:ignitium',
    input_material: 'hem:copparite',
    unlock_stage: 'stage_4',
    master_stage: 'armor_engineers',
  });

  // manasteel
  stageArmorTier({
    tier: 'botania:manasteel',
    previous_tier: 'hem:steampunkoutfit',
    input_material: 'botania:manasteel_ingot',
    unlock_stage: 'stage_5_1',
    master_stage: 'armor_manasteel',
  });

  // sky
  stageArmorTier({
    custom: {
      tier: 'naturesaura:sky',
      pieces: ['helmet', 'chest', 'pants', 'shoes'],
      previous_tier: 'botania:manasteel',
      previous_pieces: ['helmet', 'chestplate', 'leggings', 'boots'],
    },
    input_material: 'naturesaura:sky_ingot',
    unlock_stage: 'stage_5_1',
    master_stage: 'armor_sky',
  });

  // terrasteel
  stageArmorTier({
    custom: {
      tier: 'botania:terrasteel',
      pieces: ['helmet', 'chestplate', 'leggings', 'boots'],
      previous_tier: 'naturesaura:sky',
      previous_pieces: ['helmet', 'chest', 'pants', 'shoes'],
    },
    input_material: 'botania:terrasteel_ingot',
    unlock_stage: 'stage_5_1',
    master_stage: 'armor_terrasteel',
  });

  // brigandine
  stageArmorTier({
    tier: 'rankine:brigandine',
    previous_tier: 'hem:steampunkoutfit',
    input_material: 'rankine:steel_ingot',
    unlock_stage: 'stage_5_2',
    master_stage: 'armor_brigandine',
  });

  // compressed iron
  stageArmorTier({
    tier: 'pneumaticcraft:compressed_iron',
    previous_tier: 'rankine:brigandine',
    input_material: 'pneumaticcraft:ingot_iron_compressed',
    unlock_stage: 'stage_5_2',
    master_stage: 'armor_compressed_iron',
  });

  // orichalcum
  stageArmorTier({
    tier: 'charcoal_pit:orichalcum',
    previous_tier: 'pneumaticcraft:compressed_iron',
    input_material: 'charcoal_pit:alloy_orichalcum',
    unlock_stage: 'stage_4',
    master_stage: 'armor_orichalcum',
  });
});
