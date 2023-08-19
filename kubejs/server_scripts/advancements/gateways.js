onEvent("server.datapack.high_priority", (event) => {
    addAdvancements(event, "gateways", {
        item: "gateways:gate_pearl",
        hide: true,
        children: [
            {
                id: "aquatic",
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
                hide: true,
            },
            {
                id: "forgotten",
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
                hide: true,
            },
            {
                id: "poisonous",
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
                hide: true,
            },
            {
                id: "magical",
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
                hide: true,
            },
            {
                id: "hellish",
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
                hide: true,
            },
            {
                id: "steampunk",
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
                hide: true,
            },
        ],
    });
});
