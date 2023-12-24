onEvent('recipes', event => {
  [
    // "nitinol",
    // "steel",
    'alnico',
    'cast_iron',
    'cupronickel',
    'invar',
    'maraging_steel',
    'nickel_silver',
    'permalloy',
    'titanium_alloy',
  ].forEach(id => event.remove({id: `rankine:alloying/${id}_alloying`}));

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 10,
    color: 5805717,
    input1: {
      element: 'rankine:elements/neptunium',
      min: 0.1,
      max: 0.25,
      required: true,
    },
    input2: {
      element: 'rankine:elements/aluminum',
      min: 0.25,
      max: 0.75,
    },
    input3: {
      element: 'rankine:elements/palladium',
      min: 0.25,
      max: 0.75,
    },
    input4: {
      element: 'rankine:elements/tin',
      min: 0.25,
      max: 0.75,
    },
    input5: {
      element: 'rankine:elements/uranium',
      min: 0.25,
      max: 0.75,
    },
    input6: {
      element: 'rankine:elements/americium',
      min: 0.25,
      max: 0.75,
    },
    input7: {
      element: 'rankine:elements/plutonium',
      min: 0.25,
      max: 0.75,
    },
    input8: {
      element: 'rankine:elements/zirconium',
      min: 0.25,
      max: 0.75,
    },
    input9: {
      element: 'rankine:elements/iron',
      min: 0.25,
      max: 0.75,
    },
    input10: {
      element: 'rankine:elements/germanium',
      min: 0.25,
      max: 0.75,
    },
    result: 'rankine:neptunium_alloy_ingot',
  });

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 8,
    color: 16730178,
    input1: {
      element: 'rankine:elements/iron',
      min: 0.3,
      max: 0.5,
      required: true,
    },
    input2: {
      element: 'rankine:elements/nickel',
      min: 0.13,
      max: 0.26,
      required: true,
    },
    input3: {
      element: 'rankine:elements/cobalt',
      min: 0.05,
      max: 0.35,
      required: true,
    },
    input4: {
      element: 'rankine:elements/aluminum',
      min: 0.08,
      max: 0.12,
      required: true,
    },
    input5: {
      element: 'rankine:elements/copper',
      min: 0.0,
      max: 0.12,
    },
    input6: {
      element: 'rankine:elements/titanium',
      min: 0.0,
      max: 0.12,
    },
    input7: {
      element: 'rankine:elements/niobium',
      min: 0.0,
      max: 0.12,
    },
    input8: {
      element: 'rankine:elements/hafnium',
      min: 0.0,
      max: 0.12,
    },
    result: 'rankine:alnico_ingot',
  });

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 12,
    color: 2236962,
    input1: {
      element: 'rankine:elements/iron',
      min: 0.85,
      max: 0.97,
      required: true,
    },
    input2: {
      element: 'rankine:elements/carbon',
      min: 0.03,
      max: 0.05,
      required: true,
    },
    input3: {
      element: 'rankine:elements/manganese',
      min: 0.0,
      max: 0.1,
    },
    input4: {
      element: 'rankine:elements/nickel',
      min: 0.0,
      max: 0.1,
    },
    input5: {
      element: 'rankine:elements/chromium',
      min: 0.0,
      max: 0.1,
    },
    input6: {
      element: 'rankine:elements/molybdenum',
      min: 0.0,
      max: 0.1,
    },
    input7: {
      element: 'rankine:elements/titanium',
      min: 0.0,
      max: 0.1,
    },
    input8: {
      element: 'rankine:elements/vanadium',
      min: 0.0,
      max: 0.1,
    },
    input9: {
      element: 'rankine:elements/tellurium',
      min: 0.0,
      max: 0.1,
    },
    input10: {
      element: 'rankine:elements/barium',
      min: 0.0,
      max: 0.1,
    },
    input11: {
      element: 'rankine:elements/silicon',
      min: 0.0,
      max: 0.1,
    },
    input12: {
      element: 'rankine:elements/phosphorus',
      min: 0.0,
      max: 0.1,
    },
    result: 'rankine:cast_iron_ingot',
  });

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 16,
    color: 11946807,
    input1: {
      element: 'rankine:elements/copper',
      min: 0.7,
      max: 0.9,
      required: true,
    },
    input2: {
      element: 'rankine:elements/nickel',
      min: 0.1,
      max: 0.3,
      required: true,
    },
    input3: {
      element: 'rankine:elements/iron',
      min: 0.0,
      max: 0.05,
    },
    input4: {
      element: 'rankine:elements/manganese',
      min: 0.0,
      max: 0.05,
    },
    input5: {
      element: 'rankine:elements/tin',
      min: 0.0,
      max: 0.05,
    },
    input6: {
      element: 'rankine:elements/niobium',
      min: 0.0,
      max: 0.05,
    },
    input7: {
      element: 'rankine:elements/tantalum',
      min: 0.0,
      max: 0.05,
    },
    input8: {
      element: 'rankine:elements/titanium',
      min: 0.0,
      max: 0.05,
    },
    input9: {
      element: 'rankine:elements/lead',
      min: 0.0,
      max: 0.05,
    },
    input10: {
      element: 'rankine:elements/chromium',
      min: 0.0,
      max: 0.05,
    },
    input11: {
      element: 'rankine:elements/aluminum',
      min: 0.0,
      max: 0.05,
    },
    input12: {
      element: 'rankine:elements/bismuth',
      min: 0.0,
      max: 0.05,
    },
    input13: {
      element: 'rankine:elements/beryllium',
      min: 0.0,
      max: 0.05,
    },
    input14: {
      element: 'rankine:elements/silicon',
      min: 0.0,
      max: 0.05,
    },
    input15: {
      element: 'rankine:elements/phosphorus',
      min: 0.0,
      max: 0.05,
    },
    input16: {
      element: 'rankine:elements/chlorine',
      min: 0,
      max: 0.05,
    },
    result: 'rankine:cupronickel_ingot',
  });

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 4,
    color: 13028546,
    input1: {
      element: 'rankine:elements/nickel',
      min: 0.75,
      max: 0.9,
      required: true,
    },
    input2: {
      element: 'rankine:elements/iron',
      min: 0.1,
      max: 0.25,
      required: true,
    },
    input3: {
      element: 'rankine:elements/molybdenum',
      min: 0.0,
      max: 0.1,
    },
    input4: {
      element: 'rankine:elements/fluorine',
      min: 0.0,
      max: 0.05,
    },
    result: 'rankine:invar_ingot',
    durability: -100,
    miningSpeed: -2.0,
    damage: 0.5,
    heatresist: 0.25,
  });

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 5,
    color: 9608841,
    input1: {
      element: 'rankine:elements/copper',
      min: 0.5,
      max: 0.7,
      required: true,
    },
    input2: {
      element: 'rankine:elements/nickel',
      min: 0.15,
      max: 0.25,
      required: true,
    },
    input3: {
      element: 'rankine:elements/zinc',
      min: 0.15,
      max: 0.25,
      required: true,
    },
    input4: {
      element: 'rankine:elements/iron',
      min: 0.0,
      max: 0.05,
    },
    input5: {
      element: 'rankine:elements/manganese',
      min: 0.0,
      max: 0.05,
    },
    result: 'rankine:nickel_silver_ingot',
  });

  event.custom({
    type: 'rankine:alloying',
    tier: 2,
    total: 22,
    color: 13750746,
    input1: {
      element: 'rankine:elements/titanium',
      min: 0.55,
      max: 0.95,
      required: true,
    },
    input2: {
      element: 'rankine:elements/niobium',
      min: 0.0,
      max: 0.45,
    },
    input3: {
      element: 'rankine:elements/tantalum',
      min: 0.0,
      max: 0.45,
    },
    input4: {
      element: 'rankine:elements/molybdenum',
      min: 0.0,
      max: 0.15,
    },
    input5: {
      element: 'rankine:elements/aluminum',
      min: 0.0,
      max: 0.1,
    },
    input6: {
      element: 'rankine:elements/vanadium',
      min: 0.0,
      max: 0.1,
    },
    input7: {
      element: 'rankine:elements/chromium',
      min: 0.0,
      max: 0.1,
    },
    input8: {
      element: 'rankine:elements/scandium',
      min: 0.0,
      max: 0.1,
    },
    input9: {
      element: 'rankine:elements/zirconium',
      min: 0.0,
      max: 0.1,
    },
    input10: {
      element: 'rankine:elements/copper',
      min: 0.0,
      max: 0.05,
    },
    input11: {
      element: 'rankine:elements/tin',
      min: 0.0,
      max: 0.05,
    },
    input12: {
      element: 'rankine:elements/nickel',
      min: 0.0,
      max: 0.05,
    },
    input13: {
      element: 'rankine:elements/iron',
      min: 0.0,
      max: 0.05,
    },
    input14: {
      element: 'rankine:elements/cobalt',
      min: 0.0,
      max: 0.05,
    },
    input15: {
      element: 'rankine:elements/ruthenium',
      min: 0.0,
      max: 0.05,
    },
    input16: {
      element: 'rankine:elements/palladium',
      min: 0.0,
      max: 0.05,
    },
    input17: {
      element: 'rankine:elements/germanium',
      min: 0.0,
      max: 0.05,
    },
    input18: {
      element: 'rankine:elements/gallium',
      min: 0.0,
      max: 0.05,
    },
    input19: {
      element: 'rankine:elements/iridium',
      min: 0.0,
      max: 0.05,
    },
    input20: {
      element: 'rankine:elements/carbon',
      min: 0.0,
      max: 0.02,
    },
    input21: {
      element: 'rankine:elements/silicon',
      min: 0.0,
      max: 0.02,
    },
    input22: {
      element: 'rankine:elements/oxygen',
      min: 0.0,
      max: 0.02,
    },
    result: 'rankine:titanium_alloy_ingot',
    enchantments: ['minecraft:projectile_protection'],
    enchantmentTypes: ['ARMOR'],
  });
});
