onEvent("server.datapack.high_priority", (event) => {
    addAdvancements(event, "stage_2", {
        icon: "naturesaura:gold_leaf",
        item: "cold_sweat:hearth",
        title: "Age 2: Occult",
        description: "Answer some questions",
        background: "occultism:textures/block/otherstone.png",
        children: [
            {
                item: "farmersdelight:stove",
                title: "Stove",
                description: "Craft a stove",
                children: [
                    {
                        item: "farmersdelight:cooking_pot",
                        title: "Cooking Pot",
                        description: "Craft a cooking pot to cook large meals",
                    },
                    {
                        item: "farmersrespite:kettle",
                        title: "Kettle",
                        description: "Craft a kettle to make tea",
                    },
                ],
            },
            {
                item: "rankine:mortar",
                title: "Mortar",
                description: "Mix some cement & craft some mortar",
                frame: "goal",
                children: [
                    {
                        item: "rankine:beehive_oven_pit",
                        title: "Beehive Oven",
                        description: "Construct a beehive oven",
                        frame: "goal",
                        children: [
                            {
                                item: "rankine:quicklime",
                                title: "Quicklime",
                                description: "Make some quicklime",
                            },
                            {
                                item: "rankine:bone_char",
                                title: "Bone Char",
                                description: "Fire some bone char",
                                frame: "goal",
                                children: [
                                    {
                                        item: "tconstruct:seared_brick",
                                        title: "Seared Brick",
                                        description: "Forge some seared bricks",
                                        frame: "goal",
                                        children: [
                                            {
                                                item: "tconstruct:seared_melter",
                                                title: "Melter",
                                                description:
                                                    "Craft a seared melter",
                                                frame: "goal",
                                                children: [
                                                    {
                                                        item: "tconstruct:smeltery_controller",
                                                        title: "Smeltery",
                                                        description:
                                                            "Craft a smeltery controller and use it to construct a smeltery",
                                                        frame: "goal",
                                                        children: [
                                                            {
                                                                item: "glass",
                                                                title: "Glass",
                                                                description:
                                                                    "Melt sand and create some glass",
                                                            },
                                                            {
                                                                item: "tconstruct:gem_cast",
                                                                title: "Gem Cast",
                                                                description:
                                                                    "Pour a gem cast",
                                                                children: [
                                                                    {
                                                                        item: "bucket",
                                                                        title: "Bucket",
                                                                        description:
                                                                            "Forge an iron bucket",
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                item: "tconstruct:ingot_cast",
                                                                title: "Ingot Cast",
                                                                description:
                                                                    "Craft an ingot cast in your smeltery",
                                                                frame: "goal",
                                                                children: [
                                                                    {
                                                                        item: "rankine:pewter_ingot",
                                                                        title: "Pewter",
                                                                        description:
                                                                            "Cast a pewter ingot",
                                                                        frame: "goal",
                                                                        children:
                                                                            [
                                                                                {
                                                                                    item: "hexerei:mixing_cauldron",
                                                                                    title: "Mixing Cauldron",
                                                                                    description:
                                                                                        "Craft a mixing cauldron",
                                                                                    frame: "goal",
                                                                                    children:
                                                                                        [
                                                                                            {
                                                                                                item: "hexerei:candle_dipper",
                                                                                                title: "Candle Dipper",
                                                                                                description:
                                                                                                    "Craft a candle dipper",
                                                                                                frame: "goal",
                                                                                                children:
                                                                                                    [
                                                                                                        {
                                                                                                            item: "blue_skies:bluebright_sapling",
                                                                                                            title: "",
                                                                                                            description:
                                                                                                                "Create a bluebright sapling",
                                                                                                        },
                                                                                                        {
                                                                                                            item: "blue_skies:turquoise_stone",
                                                                                                            title: "Turquoise stone",
                                                                                                            description:
                                                                                                                "Create some turquoise stone",
                                                                                                            frame: "goal",
                                                                                                            children:
                                                                                                                [
                                                                                                                    {
                                                                                                                        icon: "blue_skies:everbright_portal",
                                                                                                                        id: "everbright",
                                                                                                                        title: "Everbright",
                                                                                                                        description:
                                                                                                                            "Construct and light a portal to Everbright, then enter",
                                                                                                                        frame: "goal",
                                                                                                                        criteria:
                                                                                                                            {
                                                                                                                                dimension_change:
                                                                                                                                    {
                                                                                                                                        trigger:
                                                                                                                                            "minecraft:changed_dimension",
                                                                                                                                        conditions:
                                                                                                                                            {
                                                                                                                                                from: "minecraft:overworld",
                                                                                                                                                to: "blue_skies:everbright",
                                                                                                                                            },
                                                                                                                                    },
                                                                                                                            },
                                                                                                                        children:
                                                                                                                            [
                                                                                                                                {
                                                                                                                                    item: "kubejs:lost_story_everbright",
                                                                                                                                    title: "A Grandmother's Story",
                                                                                                                                    parent: "everbright",
                                                                                                                                    description:
                                                                                                                                        "Collect all of the lost pages from Everbright",
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    item: "rankine:mercury",
                                                                                                                                    title: "Mercury",
                                                                                                                                    parent: "everbright",
                                                                                                                                    description:
                                                                                                                                        "Crush some pyrope ore and collect mercury",
                                                                                                                                    children:
                                                                                                                                        [
                                                                                                                                            {
                                                                                                                                                item: "cold_sweat:thermometer",
                                                                                                                                                title: "Thermometer",
                                                                                                                                                description:
                                                                                                                                                    "Forge a thermometer",
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    item: "hexerei:animal_fat",
                                                                                                                                    title: "Animal Fat",
                                                                                                                                    parent: "everbright",
                                                                                                                                    description:
                                                                                                                                        "Collect some animal fat from the creatures in Everbright",
                                                                                                                                    children:
                                                                                                                                        [
                                                                                                                                            {
                                                                                                                                                item: "hexerei:tallow_bucket",
                                                                                                                                                title: "Tallow",
                                                                                                                                                description:
                                                                                                                                                    "Make some tallow",
                                                                                                                                                children:
                                                                                                                                                    [
                                                                                                                                                        {
                                                                                                                                                            item: "hexerei:candle",
                                                                                                                                                            title: "Candle",
                                                                                                                                                            description:
                                                                                                                                                                "Create some candles with the tallow",
                                                                                                                                                        },
                                                                                                                                                    ],
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    icon: "brewinandchewin:salty_folly",
                                                                                                                                    parent: "everbright",
                                                                                                                                    title: "Salty Folly",
                                                                                                                                    description:
                                                                                                                                        "Travel to an underwater city and drink a salty folly to breathe underwater",
                                                                                                                                    criteria:
                                                                                                                                        {
                                                                                                                                            consume:
                                                                                                                                                {
                                                                                                                                                    trigger:
                                                                                                                                                        "minecraft:consume_item",
                                                                                                                                                    conditions:
                                                                                                                                                        {
                                                                                                                                                            item: {
                                                                                                                                                                items: [
                                                                                                                                                                    "brewinandchewin:salty_folly",
                                                                                                                                                                ],
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                },
                                                                                                                                        },
                                                                                                                                    children:
                                                                                                                                        [
                                                                                                                                            {
                                                                                                                                                item: "minecraft:heart_of_the_sea",
                                                                                                                                                id: "ocean",
                                                                                                                                                title: "Heart of The Sea",
                                                                                                                                                description:
                                                                                                                                                    "Slay an elder guardian & collect its heart",
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    item: "blue_skies:nature_key",
                                                                                                                                    title: "Nature Key",
                                                                                                                                    parent: "everbright",
                                                                                                                                    description:
                                                                                                                                        "Find all 4 nature keys in a nature dungeon",
                                                                                                                                    frame: "goal",
                                                                                                                                    count: 4,
                                                                                                                                    children:
                                                                                                                                        [
                                                                                                                                            {
                                                                                                                                                item: "naturesaura:gold_fiber",
                                                                                                                                                title: "Gold Fiber",
                                                                                                                                                description:
                                                                                                                                                    "Apply brilliant fibers to tree leaves, and collect some gold fiber",
                                                                                                                                                frame: "goal",
                                                                                                                                                children:
                                                                                                                                                    [
                                                                                                                                                        {
                                                                                                                                                            item: "relics:researching_table",
                                                                                                                                                            title: "Research Table",
                                                                                                                                                            description:
                                                                                                                                                                "Craft an research table",
                                                                                                                                                        },
                                                                                                                                                        {
                                                                                                                                                            item: "naturesaura:wood_stand",
                                                                                                                                                            title: "Wood Stand",
                                                                                                                                                            description:
                                                                                                                                                                "Craft multiple wooden stands",
                                                                                                                                                            count: 4,
                                                                                                                                                            frame: "goal",
                                                                                                                                                            children:
                                                                                                                                                                [
                                                                                                                                                                    {
                                                                                                                                                                        item: "naturesaura:eye",
                                                                                                                                                                        title: "Environmental Eye",
                                                                                                                                                                        description:
                                                                                                                                                                            "Craft an environmental eye with a ritual of the forest",
                                                                                                                                                                        frame: "challenge",
                                                                                                                                                                        reward: "im:stages/stage_3",
                                                                                                                                                                    },
                                                                                                                                                                ],
                                                                                                                                                        },
                                                                                                                                                    ],
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    item: "rankine:steel_gold_pan",
                                                                                                                                    title: "Falsite Gold Pan",
                                                                                                                                    description:
                                                                                                                                        "Upgrade your gold pan",
                                                                                                                                    parent: "everbright",
                                                                                                                                    children:
                                                                                                                                        [
                                                                                                                                            {
                                                                                                                                                item: "occultism:datura",
                                                                                                                                                title: "Demon Fruit",
                                                                                                                                                description:
                                                                                                                                                    "Craft some demon dream seeds & grow them to obtain demon dream fruit",
                                                                                                                                                children:
                                                                                                                                                    [
                                                                                                                                                        {
                                                                                                                                                            item: "occultism:chalk_white",
                                                                                                                                                            title: "Chalk",
                                                                                                                                                            description:
                                                                                                                                                                "Craft white chalk",
                                                                                                                                                            children:
                                                                                                                                                                [
                                                                                                                                                                    {
                                                                                                                                                                        icon: "gateways:gate_pearl",
                                                                                                                                                                        id: "gateways",
                                                                                                                                                                        title: "Aquatic Gate",
                                                                                                                                                                        description:
                                                                                                                                                                            "Open a portal between Everbright and The Overworld",
                                                                                                                                                                        background:
                                                                                                                                                                            "blue_skies:textures/block/stone/turquoise_stone.png",
                                                                                                                                                                        nbt: '{gateway:"gateways:aquatic_gate"}',
                                                                                                                                                                        reward: "im:gateways/aquatic",
                                                                                                                                                                        frame: "challenge",
                                                                                                                                                                        criteria:
                                                                                                                                                                            {
                                                                                                                                                                                gateway:
                                                                                                                                                                                    {
                                                                                                                                                                                        trigger:
                                                                                                                                                                                            "minecraft:item_used_on_block",
                                                                                                                                                                                        conditions:
                                                                                                                                                                                            {
                                                                                                                                                                                                location:
                                                                                                                                                                                                    {
                                                                                                                                                                                                        dimension:
                                                                                                                                                                                                            "minecraft:overworld",
                                                                                                                                                                                                    },
                                                                                                                                                                                                item: {
                                                                                                                                                                                                    items: [
                                                                                                                                                                                                        "gateways:gate_pearl",
                                                                                                                                                                                                    ],
                                                                                                                                                                                                    nbt: '{gateway:"gateways:aquatic_gate"}',
                                                                                                                                                                                                },
                                                                                                                                                                                            },
                                                                                                                                                                                    },
                                                                                                                                                                            },
                                                                                                                                                                    },
                                                                                                                                                                ],
                                                                                                                                                        },
                                                                                                                                                    ],
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                },
                                                                                                                            ],
                                                                                                                    },
                                                                                                                ],
                                                                                                        },
                                                                                                    ],
                                                                                            },
                                                                                            {
                                                                                                item: "rankine:totem_of_cobbling",
                                                                                                title: "Totem of Cobbling",
                                                                                                description:
                                                                                                    "Craft a cobbling totem",
                                                                                            },
                                                                                            {
                                                                                                item: "blue_skies:zeal_lighter",
                                                                                                title: "Zeal Lighter",
                                                                                                description:
                                                                                                    "Craft a zeal lighter",
                                                                                                reward: "im:dimensions/everbright",
                                                                                            },
                                                                                        ],
                                                                                },
                                                                                {
                                                                                    item: "rankine:pewter_gold_pan",
                                                                                    title: "Gold Pan",
                                                                                    description:
                                                                                        "Craft a gold pan",
                                                                                    children:
                                                                                        [
                                                                                            {
                                                                                                icon: "strawgolem:straw_hat",
                                                                                                title: "Straw Golem",
                                                                                                description:
                                                                                                    "Create a straw golem with hay and a carved pumpkin",
                                                                                                criteria:
                                                                                                    {
                                                                                                        example:
                                                                                                            {
                                                                                                                trigger:
                                                                                                                    "minecraft:summoned_entity",
                                                                                                                conditions:
                                                                                                                    {
                                                                                                                        entity: {
                                                                                                                            type: "strawgolem:strawgolem",
                                                                                                                        },
                                                                                                                    },
                                                                                                            },
                                                                                                    },
                                                                                            },
                                                                                            {
                                                                                                item: "paragon_textiles:flax_seeds",
                                                                                                title: "Flax Seeds",
                                                                                                description:
                                                                                                    "Find some flax seeds in the soil",
                                                                                                children:
                                                                                                    [
                                                                                                        {
                                                                                                            item: "paragon_textiles:fabric_red",
                                                                                                            title: "Red Fabric",
                                                                                                            description:
                                                                                                                "Dye your fabric red",
                                                                                                            children:
                                                                                                                [
                                                                                                                    {
                                                                                                                        item: "cold_sweat:sewing_table",
                                                                                                                        id: "sewing_table",
                                                                                                                        title: "Sewing Table",
                                                                                                                        description:
                                                                                                                            "Craft a sewing table and insulate your armor",
                                                                                                                    },
                                                                                                                ],
                                                                                                        },
                                                                                                        {
                                                                                                            item: "paragon_textiles:fabric_plain",
                                                                                                            title: "Plain Fabric",
                                                                                                            description:
                                                                                                                "Craft some plain fabric",
                                                                                                            children:
                                                                                                                [
                                                                                                                    {
                                                                                                                        item: "ecofriendly:recycled_carrier_bag_ym",
                                                                                                                        title: "Recyled Carrier Bag",
                                                                                                                        description:
                                                                                                                            "Transform a plastic bag into a basic backpack",
                                                                                                                    },
                                                                                                                ],
                                                                                                        },
                                                                                                        {
                                                                                                            item: "paragon_textiles:wicker",
                                                                                                            title: "Wicker",
                                                                                                            description:
                                                                                                                "Collect some wicker",
                                                                                                            children:
                                                                                                                [
                                                                                                                    {
                                                                                                                        item: "paragon_textiles:basket",
                                                                                                                        title: "Basket",
                                                                                                                        description:
                                                                                                                            "Craft a basket",
                                                                                                                        children:
                                                                                                                            [
                                                                                                                                {
                                                                                                                                    item: "paragon_textiles:basket_sturdy",
                                                                                                                                    title: "Sturdy Basket",
                                                                                                                                    description:
                                                                                                                                        "Reinforce your basket",
                                                                                                                                },
                                                                                                                            ],
                                                                                                                    },
                                                                                                                ],
                                                                                                        },
                                                                                                    ],
                                                                                            },
                                                                                            {
                                                                                                item: "rankine:cotton",
                                                                                                title: "Cotton",
                                                                                                description:
                                                                                                    "Grow some cotton",
                                                                                                children:
                                                                                                    [
                                                                                                        {
                                                                                                            item: "paragon_textiles:silk",
                                                                                                            title: "Silk",
                                                                                                            description:
                                                                                                                "Craft some silk",
                                                                                                            children:
                                                                                                                [
                                                                                                                    {
                                                                                                                        item: "fishing_rod",
                                                                                                                        title: "Fishing",
                                                                                                                        description:
                                                                                                                            "Craft a fishing rod",
                                                                                                                    },
                                                                                                                    {
                                                                                                                        icon: "smallships:oak_cog",
                                                                                                                        tag: "im:cogs",
                                                                                                                        title: "Cog",
                                                                                                                        description:
                                                                                                                            "Upgrade a raft into a cog",
                                                                                                                    },
                                                                                                                ],
                                                                                                        },
                                                                                                        {
                                                                                                            item: "rankine:gun_cotton",
                                                                                                            title: "Gun Cotton",
                                                                                                            description:
                                                                                                                "Craft some gun cotton",
                                                                                                            children:
                                                                                                                [
                                                                                                                    {
                                                                                                                        icon: "minecraft:white_bed",
                                                                                                                        title: "Bed",
                                                                                                                        description:
                                                                                                                            "Craft a better bed",
                                                                                                                        tag: "minecraft:beds",
                                                                                                                    },
                                                                                                                ],
                                                                                                        },
                                                                                                    ],
                                                                                            },
                                                                                        ],
                                                                                },
                                                                            ],
                                                                    },
                                                                    {
                                                                        item: "rankine:sterling_silver_ingot",
                                                                        title: "Sterling Silver",
                                                                        description:
                                                                            "Forge a sterling silver ingot",
                                                                        children:
                                                                            [
                                                                                {
                                                                                    item: "rankine:tree_tap",
                                                                                    title: "Tree Tap",
                                                                                    description:
                                                                                        "Craft a tree tap",
                                                                                    children:
                                                                                        [
                                                                                            {
                                                                                                item: "kubejs:freezing_sap_bucket",
                                                                                                title: "Freezing Sap",
                                                                                                description:
                                                                                                    "Collect some freezing sap from a bluebright tree",
                                                                                                children:
                                                                                                    [
                                                                                                        {
                                                                                                            item: "rankine:snowflake_obsidian",
                                                                                                            title: "Snowflake Obsidian",
                                                                                                            description:
                                                                                                                "Cast freezing sap on a piece of obsidian",
                                                                                                        },
                                                                                                    ],
                                                                                            },
                                                                                            {
                                                                                                item: "rankine:resin_bucket",
                                                                                                title: "Resin",
                                                                                                description:
                                                                                                    "Collect resin, a more convenient tanning fluid",
                                                                                            },
                                                                                        ],
                                                                                },
                                                                            ],
                                                                    },
                                                                    {
                                                                        item: "tconstruct:amethyst_bronze_ingot",
                                                                        title: "Amethyst Bronze",
                                                                        description:
                                                                            "Forge an amethyst bronze ingot",
                                                                        children:
                                                                            [
                                                                                {
                                                                                    item: "rankine:ground_tap",
                                                                                    title: "Ground Tap",
                                                                                    description:
                                                                                        "Craft a ground tap and find water",
                                                                                },
                                                                                {
                                                                                    item: "rankine:sediment_fan",
                                                                                    title: "Sediment Fan",
                                                                                    description:
                                                                                        "Craft a sediment fan",
                                                                                },
                                                                            ],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                item: "tconstruct:pattern",
                title: "Pattern",
                description: "Craft a tool part pattern",
                children: [
                    {
                        item: "tconstruct:part_builder",
                        title: "Part Builder",
                        description: "Craft a part builder",
                        children: [
                            {
                                item: "tconstruct:tinker_station",
                                title: "Tinker's Station",
                                description: "Craft a tinker's station",
                            },
                        ],
                    },
                ],
            },
        ],
    });
});
