onEvent("recipes", (event) => {
    event.recipes
        .createSequencedAssembly(
            [Item.of("rankine:pancake_breakfast")],
            "rankine:pancake",
            [
                event.recipes.createDeploying("rankine:pancake", [
                    "rankine:pancake",
                    "rankine:pancake",
                ]),
                event.recipes.createDeploying("rankine:pancake", [
                    "rankine:pancake",
                    "rankine:pancake",
                ]),
                event.recipes.createDeploying("rankine:pancake", [
                    "rankine:pancake",
                    "rankine:maple_syrup",
                ]),
                event.recipes.createDeploying("rankine:pancake", [
                    "rankine:pancake",
                    "#forge:berries",
                ]),
            ]
        )
        .transitionalItem("rankine:pancake")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            [
                Item.of("create:precision_mechanism").withChance(75.0), // have this item be an output with a certain chance
                Item.of("2x immersiveengineering:wire_copper").withChance(25.0), // have this item be an output with a certain chance
            ],
            "immersiveengineering:electron_tube",
            [
                event.recipes.createDeploying(
                    "create:incomplete_precision_mechanism",
                    ["create:incomplete_precision_mechanism", "create:cogwheel"]
                ),
                event.recipes.createDeploying(
                    "create:incomplete_precision_mechanism",
                    [
                        "create:incomplete_precision_mechanism",
                        "create:large_cogwheel",
                    ]
                ),
                event.recipes.createDeploying(
                    "create:incomplete_precision_mechanism",
                    [
                        "create:incomplete_precision_mechanism",
                        "extendedcrafting:redstone_nugget",
                    ]
                ),
            ]
        )
        .transitionalItem("create:incomplete_precision_mechanism")
        .loops(5);

    event.recipes
        .createSequencedAssembly(
            [Item.of("farmersdelight:hamburger")],
            "pneumaticcraft:sourdough_bread",
            [
                event.recipes.createDeploying(
                    "pneumaticcraft:sourdough_bread",
                    [
                        "pneumaticcraft:sourdough_bread",
                        "farmersdelight:cabbage_leaf",
                    ]
                ),
                event.recipes.createDeploying(
                    "pneumaticcraft:sourdough_bread",
                    ["pneumaticcraft:sourdough_bread", "farmersdelight:tomato"]
                ),
                event.recipes.createDeploying(
                    "pneumaticcraft:sourdough_bread",
                    [
                        "pneumaticcraft:sourdough_bread",
                        "farmersdelight:beef_patty",
                    ]
                ),
                event.recipes.createDeploying(
                    "pneumaticcraft:sourdough_bread",
                    [
                        "pneumaticcraft:sourdough_bread",
                        "brewinandchewin:pickled_pickles",
                    ]
                ),
                event.recipes.createDeploying(
                    "pneumaticcraft:sourdough_bread",
                    [
                        "pneumaticcraft:sourdough_bread",
                        "pneumaticcraft:sourdough_bread",
                    ]
                ),
            ]
        )
        .transitionalItem("pneumaticcraft:sourdough_bread")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            [Item.of("delightful:cheeseburger")],
            "farmersdelight:hamburger",
            [
                event.recipes.createDeploying("farmersdelight:hamburger", [
                    "farmersdelight:hamburger",
                    "brewinandchewin:scarlet_cheese_wedge",
                ]),
                event.recipes.createDeploying("farmersdelight:hamburger", [
                    "farmersdelight:hamburger",
                    "butchercraft:cooked_bacon",
                ]),
                event.recipes.createDeploying("farmersdelight:hamburger", [
                    "farmersdelight:hamburger",
                    "butchercraft:bbq_jar_item",
                ]),
            ]
        )
        .transitionalItem("farmersdelight:hamburger")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            [Item.of("delightful:deluxe_cheeseburger")],
            "delightful:cheeseburger",
            [
                event.recipes.createDeploying("delightful:cheeseburger", [
                    "delightful:cheeseburger",
                    "butchercraft:fries",
                ]),
                event.recipes.createDeploying("delightful:cheeseburger", [
                    "delightful:cheeseburger",
                    "delightful:ender_nectar",
                ]),
            ]
        )
        .transitionalItem("delightful:cheeseburger")
        .loops(1);
});
