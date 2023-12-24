onEvent('recipes', event => {
  new recipes(event)
    .setType('malum:spirit_infusion')
    .setFunction(config =>
      event.custom({
        type: 'malum:spirit_infusion',
        input: config.input,
        output: config.output,
        spirits: config.spirits,
        extra_items: config.extra_items || [],
      })
    )
    .modifyOutputs([
      {
        global: true,
        input: {item: 'undergarden:masticator_scales'},
        output: {item: 'hexerei:blood_sigil'},
        extra_items: [
          {
            item: 'rankine:shale',
            count: 5,
          },
          {
            item: 'undergarden:utherium_crystal',
            count: 8,
          },
        ],
        spirits: [
          {
            type: 'wicked',
            count: 4,
          },
          {
            type: 'earthen',
            count: 4,
          },
          {
            type: 'arcane',
            count: 4,
          },
        ],
      },
      {
        input: {item: 'occultism:book_of_binding_foliot'},
        output: {item: 'occultism:book_of_binding_djinni'},
        spirits: [
          {
            type: 'wicked',
            count: 4,
          },
        ],
      },
      {
        global: true,
        input: {item: 'blue_skies:horizonite_helmet'},
        output: {item: 'malum:soul_stained_steel_helmet'},
        extra_items: [
          {
            item: 'malum:soul_stained_steel_ingot',
            count: 4,
          },
          {
            item: 'malum:hex_ash',
            count: 1,
          },
          {
            item: 'malum:processed_soulstone',
            count: 2,
          },
          {
            item: 'malum:twisted_rock',
            count: 8,
          },
        ],
        spirits: [
          {
            type: 'earthen',
            count: 8,
          },
          {
            type: 'wicked',
            count: 4,
          },
          {
            type: 'arcane',
            count: 2,
          },
        ],
      },
      {
        global: true,
        input: {item: 'blue_skies:horizonite_chestplate'},
        output: {item: 'malum:soul_stained_steel_chestplate'},
        extra_items: [
          {
            item: 'malum:soul_stained_steel_ingot',
            count: 4,
          },
          {
            item: 'malum:hex_ash',
            count: 1,
          },
          {
            item: 'malum:processed_soulstone',
            count: 2,
          },
          {
            item: 'malum:twisted_rock',
            count: 8,
          },
        ],
        spirits: [
          {
            type: 'earthen',
            count: 8,
          },
          {
            type: 'wicked',
            count: 4,
          },
          {
            type: 'arcane',
            count: 2,
          },
        ],
      },
      {
        global: true,
        input: {item: 'blue_skies:horizonite_leggings'},
        output: {item: 'malum:soul_stained_steel_leggings'},
        extra_items: [
          {
            item: 'malum:soul_stained_steel_ingot',
            count: 4,
          },
          {
            item: 'malum:hex_ash',
            count: 1,
          },
          {
            item: 'malum:processed_soulstone',
            count: 2,
          },
          {
            item: 'malum:twisted_rock',
            count: 8,
          },
        ],
        spirits: [
          {
            type: 'earthen',
            count: 8,
          },
          {
            type: 'wicked',
            count: 4,
          },
          {
            type: 'arcane',
            count: 2,
          },
        ],
      },
      {
        global: true,
        input: {item: 'blue_skies:horizonite_boots'},
        output: {item: 'malum:soul_stained_steel_boots'},
        extra_items: [
          {
            item: 'malum:soul_stained_steel_ingot',
            count: 4,
          },
          {
            item: 'malum:hex_ash',
            count: 1,
          },
          {
            item: 'malum:processed_soulstone',
            count: 2,
          },
          {
            item: 'malum:twisted_rock',
            count: 8,
          },
        ],
        spirits: [
          {
            type: 'earthen',
            count: 8,
          },
          {
            type: 'wicked',
            count: 4,
          },
          {
            type: 'arcane',
            count: 2,
          },
        ],
      },
      {
        global: true,
        input: {item: 'rankine:shale', count: 16},
        output: {item: 'malum:twisted_rock', count: 16},
        spirits: [
          {
            type: 'wicked',
            count: 1,
          },
          {
            type: 'arcane',
            count: 1,
          },
        ],
      },
      {
        global: true,
        input: {item: 'rankine:rose_marble', count: 16},
        output: {item: 'malum:tainted_rock', count: 16},
        spirits: [
          {
            type: 'sacred',
            count: 1,
          },
          {
            type: 'arcane',
            count: 1,
          },
        ],
      },
      {
        global: true,
        input: {item: 'malum:rotting_essence'},
        output: {item: 'malum:hex_ash'},
        spirits: [
          {
            type: 'arcane',
            count: 1,
          },
        ],
      },
      {
        input: {item: 'blue_skies:horizonite_ingot'},
        output: {item: 'malum:soul_stained_steel_ingot'},
        extra_items: [{item: 'malum:processed_soulstone', count: 4}],
        spirits: [
          {
            type: 'arcane',
            count: 1,
          },
          {
            type: 'wicked',
            count: 3,
          },
          {type: 'earthen', count: 1},
        ],
      },
      {
        input: {item: 'malum:alchemical_calx', count: 8},
        output: {item: 'malum:alchemical_impetus'},
        extra_items: [
          {item: 'malum:processed_soulstone', count: 3},
          {item: 'minecraft:gunpowder', count: 2},
          {item: 'malum:hex_ash', count: 1},
        ],
        spirits: [
          {
            type: 'arcane',
            count: 4,
          },
          {type: 'earthen', count: 4},
        ],
      },
      {
        input: {item: 'minecraft:glowstone_dust', count: 4},
        output: {item: 'malum:ether', count: 4},
        extra_items: [
          {item: 'realistictorches:glowstone_crystal', count: 1},
          {item: 'minecraft:blaze_powder', count: 1},
        ],
        spirits: [
          {
            type: 'arcane',
            count: 1,
          },
          {type: 'infernal', count: 2},
        ],
      },
      {
        input: {item: 'rankine:gun_cotton', count: 2},
        output: {item: 'malum:spirit_fabric', count: 4},
        extra_items: [
          {item: 'blue_skies:spider_webbing', count: 2},
          {item: 'malum:hex_ash', count: 1},
        ],
        spirits: [
          {
            type: 'wicked',
            count: 2,
          },
          {type: 'earthen', count: 1},
          {type: 'aerial', count: 1},
        ],
      },
      {
        input: {item: 'malum:processed_soulstone', count: 16},
        output: {item: 'malum:corrupted_resonance'},
        extra_items: [
          {item: 'malum:chunk_of_brilliance', count: 32},
          {item: 'minecraft:lapis_lazuli', count: 32},
          {item: 'minecraft:glowstone_dust', count: 32},
          {item: 'minecraft:redstone', count: 32},
          {item: 'malum:hex_ash', count: 32},
        ],
        spirits: [
          {
            type: 'arcane',
            count: 32,
          },
          {type: 'wicked', count: 32},
          {type: 'infernal', count: 32},
          {type: 'aerial', count: 32},
          {type: 'earthen', count: 32},
          {type: 'aqueous', count: 32},
        ],
      },
    ]);
});
