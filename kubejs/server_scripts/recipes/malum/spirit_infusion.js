onEvent("recipes", (event) => {
  new recipes(event)
    .setType("malum:spirit_infusion")
    .setFunction((config) =>
      event.custom({
        type: "malum:spirit_infusion",
        input: {
          item: config.input,
          count: 1,
        },
        output: {
          item: config.output,
        },
        extra_items: config.extra_items,
        spirits: config.spirits,
      })
    )
    .modifyOutputs([
      {
        input: "twilightforest:fiery_helmet",
        output: "malum:soul_stained_steel_helmet",
        extra_items: [
          {
            item: "malum:soul_stained_steel_ingot",
            count: 4,
          },
          {
            item: "malum:hex_ash",
            count: 1,
          },
          {
            item: "malum:processed_soulstone",
            count: 2,
          },
          {
            item: "malum:twisted_rock",
            count: 8,
          },
          {
            item: "malum:hallowed_gold_ingot",
            count: 4,
          },
        ],
        spirits: [
          {
            type: "earthen",
            count: 8,
          },
          {
            type: "wicked",
            count: 4,
          },
          {
            type: "arcane",
            count: 2,
          },
        ],
      },
      {
        input: "twilightforest:fiery_chestplate",
        output: "malum:soul_stained_steel_chestplate",
        extra_items: [
          {
            item: "malum:soul_stained_steel_ingot",
            count: 4,
          },
          {
            item: "malum:hex_ash",
            count: 1,
          },
          {
            item: "malum:processed_soulstone",
            count: 2,
          },
          {
            item: "malum:twisted_rock",
            count: 8,
          },
          {
            item: "malum:hallowed_gold_ingot",
            count: 4,
          },
        ],
        spirits: [
          {
            type: "earthen",
            count: 8,
          },
          {
            type: "wicked",
            count: 4,
          },
          {
            type: "arcane",
            count: 2,
          },
        ],
      },
      {
        input: "twilightforest:fiery_leggings",
        output: "malum:soul_stained_steel_leggings",
        extra_items: [
          {
            item: "malum:soul_stained_steel_ingot",
            count: 4,
          },
          {
            item: "malum:hex_ash",
            count: 1,
          },
          {
            item: "malum:processed_soulstone",
            count: 2,
          },
          {
            item: "malum:twisted_rock",
            count: 8,
          },
          {
            item: "malum:hallowed_gold_ingot",
            count: 4,
          },
        ],
        spirits: [
          {
            type: "earthen",
            count: 8,
          },
          {
            type: "wicked",
            count: 4,
          },
          {
            type: "arcane",
            count: 2,
          },
        ],
      },
      {
        input: "twilightforest:fiery_boots",
        output: "malum:soul_stained_steel_boots",
        extra_items: [
          {
            item: "malum:soul_stained_steel_ingot",
            count: 4,
          },
          {
            item: "malum:hex_ash",
            count: 1,
          },
          {
            item: "malum:processed_soulstone",
            count: 2,
          },
          {
            item: "malum:twisted_rock",
            count: 8,
          },
          {
            item: "malum:hallowed_gold_ingot",
            count: 4,
          },
        ],
        spirits: [
          {
            type: "earthen",
            count: 8,
          },
          {
            type: "wicked",
            count: 4,
          },
          {
            type: "arcane",
            count: 2,
          },
        ],
      },
    ]);
});
