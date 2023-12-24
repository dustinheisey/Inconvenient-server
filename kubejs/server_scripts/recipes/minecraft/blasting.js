onEvent('recipes', event => {
  new recipes(event)
    .setType('minecraft:blasting')
    .setFunction(config => event.blasting(config.output, config.input))
    .removeOutputs([
      'ecofriendly:smelted_iron_can_ym',
      '#forge:ingots',
      '#forge:gems',
      '#forge:dusts',
      '#forge:slimeballs',
      '@coinsje',
      '#minecraft:coals',
      '#forge:glass',
      '#forge:gunpowder',
      'rankine:zirconia',
      'hem:rose_copper_ingot',
      'hem:bronze_ingot',
      'pneumaticcraft:empty_pcb',
      'rankine:magnesia',
      'immersiveengineering:ingot_hop_graphite',
      'rankine:sodium_carbonate',
      'blue_skies:moonstone',
      'occultism:iesnium_ingot',
    ])
    .add([
      {
        input: '#forge:sand',
        output: 'minecraft:glass',
      },
      {
        input: 'chemlib:aluminum_dust',
        output: 'rankine:aluminum_ingot',
      },
      {
        input: 'chemlib:titanium_dust',
        output: 'rankine:titanium_ingot',
      },
      {input: 'chemlib:iron_dust', output: 'minecraft:iron_ingot'},
      {input: 'chemlib:nickel_dust', output: 'rankine:nickel_ingot'},
      {input: 'chemlib:copper_dust', output: 'minecraft:copper_ingot'},
      {input: 'chemlib:tin_dust', output: 'rankine:tin_ingot'},
      {input: 'chemlib:silver_dust', output: 'rankine:silver_ingot'},
      {input: 'chemlib:gold_dust', output: 'minecraft:gold_ingot'},
      {
        input: 'chemlib:platinum_dust',
        output: 'rankine:platinum_ingot',
      },
      {
        input: 'chemlib:tungsten_dust',
        output: 'rankine:tungsten_ingot',
      },
      {input: 'chemlib:lead_dust', output: 'rankine:lead_ingot'},
      {input: 'chemlib:bismuth_dust', output: 'rankine:bismuth_ingot'},
      {input: 'chemlib:uranium_dust', output: 'rankine:uranium_ingot'},
      {
        input: 'create:crushed_raw_iron',
        output: 'minecraft:iron_ingot',
      },
      {
        input: 'create:crushed_raw_gold',
        output: 'minecraft:gold_ingot',
      },
      {
        input: 'create:crushed_raw_copper',
        output: 'minecraft:copper_ingot',
      },
      {input: 'create:crushed_raw_zinc', output: 'rankine:zinc_ingot'},
      {
        input: 'create:crushed_raw_osmium',
        output: 'rankine:osmium_ingot',
      },
      {
        input: 'create:crushed_raw_platinum',
        output: 'rankine:platinum_ingot',
      },
      {
        input: 'create:crushed_raw_silver',
        output: 'rankine:silver_ingot',
      },
      {input: 'create:crushed_raw_tin', output: 'rankine:tin_ingot'},
      {input: 'create:crushed_raw_lead', output: 'rankine:lead_ingot'},
      {
        input: 'create:crushed_raw_aluminum',
        output: 'rankine:aluminum_ingot',
      },
      {
        input: 'chemlib:uranium_dust',
        output: 'rankine:uranium_ingot',
      },
      {
        input: 'chemlib:nickel_dust',
        output: 'rankine:nickel_ingot',
      },
      {
        input: 'immersiveengineering:dust_hop_graphite',
        output: 'immersiveengineering:ingot_hop_graphite',
      },
    ]);
});
