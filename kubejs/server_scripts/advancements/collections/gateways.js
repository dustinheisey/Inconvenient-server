onEvent("server.datapack.high_priority", (event) => {
  addAdvancements(event, "gateways", {
    item: "gateways:gate_pearl",
    title: "Collection: Gateways",
    background: "architects_palette:textures/block/onyx.png",
    children: [
      {
        icon: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:forgotten_gate"}',
        id: "forgotten",
        title: "Forgotten Gateway",
        description: "Bring life back from The Undergarden.",
        criteria: {
          gateway: {
            trigger: "minecraft:item_used_on_block",
            conditions: {
              location: {
                dimension: "minecraft:overworld",
              },
              item: {
                items: ["gateways:gate_pearl"],
                nbt: '{gateway:"gateways:forgotten_gate"}',
              },
            },
          },
        },
      },
      {
        id: "aquatic",
        title: "Aquatic Gateway",
        description: "Bring life back from Everbright.",
        icon: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:aquatic_gate"}',
        criteria: {
          gateway: {
            trigger: "minecraft:item_used_on_block",
            conditions: {
              location: {
                dimension: "minecraft:overworld",
              },
              item: {
                items: ["gateways:gate_pearl"],
                nbt: '{gateway:"gateways:aquatic_gate"}',
              },
            },
          },
        },
      },
      {
        icon: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:poisonous_gate"}',
        id: "poisonous",
        title: "Poisonous Gateway",
        description: "Bring life back from Everdawn.",
        criteria: {
          gateway: {
            trigger: "minecraft:item_used_on_block",
            conditions: {
              location: {
                dimension: "minecraft:overworld",
              },
              item: {
                items: ["gateways:gate_pearl"],
                nbt: '{gateway:"gateways:poisonous_gate"}',
              },
            },
          },
        },
      },
      {
        icon: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:magical_gate"}',
        id: "magical",
        title: "Magical Gateway",
        description: "Bring life back from The Twilight Forest.",
        criteria: {
          gateway: {
            trigger: "minecraft:item_used_on_block",
            conditions: {
              location: {
                dimension: "minecraft:overworld",
              },
              item: {
                items: ["gateways:gate_pearl"],
                nbt: '{gateway:"gateways:magical_gate"}',
              },
            },
          },
        },
      },
      {
        icon: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:hellish_gate"}',
        id: "hellish",
        title: "Hellish Gateway",
        description: "Bring life back from The Nether.",
        criteria: {
          gateway: {
            trigger: "minecraft:item_used_on_block",
            conditions: {
              location: {
                dimension: "minecraft:overworld",
              },
              item: {
                items: ["gateways:gate_pearl"],
                nbt: '{gateway:"gateways:hellish_gate"}',
              },
            },
          },
        },
      },
      {
        icon: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:steampunk_gate"}',
        id: "steampunk",
        title: "Steampunk Gateway",
        description: "Bring life back from Blueleaf.",
        criteria: {
          gateway: {
            trigger: "minecraft:item_used_on_block",
            conditions: {
              location: {
                dimension: "minecraft:overworld",
              },
              item: {
                items: ["gateways:gate_pearl"],
                nbt: '{gateway:"gateways:steampunk_gate"}',
              },
            },
          },
        },
      },
    ],
  });
});
