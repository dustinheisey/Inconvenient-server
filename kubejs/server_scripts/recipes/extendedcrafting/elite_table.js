onEvent('recipes', event => {
  new recipes(event)
    .setType('extendedcrafting:shaped_table')
    .setFunction(config =>
      event.custom({
        type: 'extendedcrafting:shaped_table',
        pattern: config.pattern,
        key: config.key,
        result: {
          item: config.output,
        },
      })
    )
    .modifyOutputs([
      {
        global: true,
        output: 'pneumaticcraft:amadron_tablet',
        pattern: [
          'aaaaaaa',
          'abcccba',
          'abcdcba',
          'abcecba',
          'abcfcba',
          'abcccba',
          'aaaaaaa',
        ],
        key: {
          a: 'extendedcrafting:ender_ingot',
          b: 'immersiveengineering:plate_duroplast',
          c: 'pneumaticcraft:plastic',
          d: 'pneumaticcraft:gps_tool',
          e: 'immersiveengineering:component_electronic_adv',
          f: 'pneumaticcraft:air_canister',
        },
      },
      {
        global: true,
        output: 'adpother:aerometer',
        pattern: [
          'ab   ba',
          'aacccaa',
          'bc d cb',
          'bcdfdcb',
          'bcccccb',
          '  aea  ',
          '  aea  ',
        ],
        key: {
          a: 'pneumaticcraft:plastic',
          b: 'chemlib:titanium_plate',
          c: 'immersiveengineering:plate_duroplast',
          d: 'chemlib:uranium_plate',
          e: 'pneumaticcraft:ingot_iron_compressed',
          f: 'immersiveengineering:component_electronic_adv',
        },
      },
    ]);
});
