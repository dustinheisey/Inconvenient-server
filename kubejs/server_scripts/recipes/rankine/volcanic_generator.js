onEvent('recipes', event => {
  new recipes(event)
    .setType('rankine:rock_generator')
    .setFunction(config => {
      let json = {
        type: 'rankine:rock_generator',
        genType: 'volcanic',
        input1: {item: config.input},
        result: {
          block: config.output,
        },
      };

      config.inputs.forEach((id, index) => {
        json[`input${index + 1}`] = {
          item: id,
        };
      });

      event.custom(json);
    })
    .removeOutputs([
      'rankine:blood_obsidian',
      'rankine:pumice',
      'rankine:komatiitic_tuff',
      'rankine:andesitic_tuff',
      'rankine:basaltic_tuff',
      'rankine:rhyolitic_tuff',
    ])
    .modifyOutputs([
      {
        output: 'minecraft:crying_obsidian',
        inputs: ['minecraft:obsidian'],
      },
      // {
      //     output: "rankine:andesitic_tuff",
      //     inputs: ["occultism:otherstone"],
      // },
      // {
      //     output: "rankine:basaltic_tuff",
      //     inputs: ["minecraft:gilded_blackstone"],
      // },
      // {
      //     output: "rankine:komatiitic_tuff",
      //     inputs: ["bloodmagic:largebloodstonebrick"],
      // },
      // {
      //     output: "rankine:rhyolitic_tuff",
      //     inputs: ["tconstruct:pig_iron_block"],
      // },
      {
        output: 'rankine:snowflake_obsidian',
        inputs: ['undergarden:forgotten_block'],
      },
    ]);
});
