onEvent('recipes', event => {
  new recipes(event)
    .setFunction(config => {
      event.remove({output: `endrem:${config.id}_eye`});

      event
        .shaped(`endrem:${config.id}_eye`, ['aba', 'bcb', 'aba'], {
          a: config.inputs[0],
          b: config.inputs[1],
          c: config.inputs[2],
        })
        .stage(`eye_${config.id}`);
    })
    .modifyOutputs([
      {
        id: 'cold',
        inputs: [
          'minecraft:packed_ice',
          'minecraft:leather',
          'minecraft:iron_ingot',
        ],
      },
      {
        id: 'guardian',
        inputs: [
          'blue_skies:moonstone',
          'occultism:otherworld_ashes',
          'occultism:purified_ink',
        ],
      },
      {
        id: 'exotic',
        inputs: [
          'blue_skies:diopside_gem',
          'naturesaura:gold_powder',
          'blue_skies:starlit_sapling',
        ],
      },
      {
        id: 'undead',
        inputs: [
          'naturesaura:infused_iron',
          'endrem:undead_soul',
          'undergarden:forgotten_nugget',
        ],
      },
      {
        id: 'corrupted',
        inputs: [
          'blue_skies:horizonite_ingot',
          'malum:processed_soulstone',
          'bloodmagic:infusedslate',
        ],
      },
      {
        id: 'magical',
        inputs: [
          'create:andesite_alloy',
          'create:cinder_flour',
          'twilightforest:carminite',
        ],
      },

      {
        id: 'wither',
        inputs: [
          'tconstruct:pig_iron_ingot',
          'minecraft:blaze_powder',
          'bloodmagic:weakbloodshard',
        ],
      },
      {
        id: 'black',
        inputs: [
          'cataclysm:witherite_ingot',
          'hem:circuit_board',
          'create:shadow_steel',
        ],
      },
      {
        id: 'cursed',
        inputs: [
          'naturesaura:tainted_gold',
          'botania:pixie_dust',
          'farmersdelight:hamburger',
        ],
      },
      {
        id: 'lost',
        inputs: [
          'pneumaticcraft:ingot_iron_compressed',
          'coinsje:iron_coin',
          'create:precision_mechanism',
        ],
      },
      {
        id: 'nether',
        inputs: ['chemlib:oganesson', 'chemlib:oganesson', 'chemlib:oganesson'],
      },
      {
        id: 'evil',
        inputs: ['chemlib:oganesson', 'chemlib:oganesson', 'chemlib:oganesson'],
      },
      {
        id: 'rogue',
        inputs: ['chemlib:oganesson', 'chemlib:oganesson', 'chemlib:oganesson'],
      },
      {
        id: 'witch',
        inputs: ['chemlib:oganesson', 'chemlib:oganesson', 'chemlib:oganesson'],
      },
      {
        id: 'old',
        inputs: ['chemlib:oganesson', 'chemlib:oganesson', 'chemlib:oganesson'],
      },
      {
        id: 'cryptic',
        inputs: ['chemlib:oganesson', 'chemlib:oganesson', 'chemlib:oganesson'],
      },
    ]);
});
