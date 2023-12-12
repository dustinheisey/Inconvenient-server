onEvent("server.datapack.high_priority", (event) => {
  // ? Functions
  function add_gate(config) {
    let json = {
      size: "large", // [Mandatory] || Gateway Size, one of "small", "medium", or "large"
      color: config.color, // [Mandatory] || The color of the Gateway
      completion_xp: config.xp, // [Mandatory] || Bonus XP dropped upon completion of the entire gateway.
      spawn_range: config.range, // [Mandatory] || Spawn range for entities spawned from this gateway.  If you're spawning many entities, you may want a larger value.
      leash_range: config.leash, // [Optional]  || The maximum distance that a Wave Entity may walk before failing the Gateway. Defaults to 32.
      player_damage_only: true, // [Optional]  || If Wave Entities may only be damaged by a real player. Defaults to false.
      waves: [
        // [Mandatory] || The list of waves for this Gateway.
      ],
      rewards: [
        // [Mandatory] || Rewards that will be granted upon completion of the entire gateway.
        {
          type: "command",
          command: config.command, // [Mandatory] || The command string, without leading slash. This will be executed as the gateway, with a permission level of 2.
          desc: "Bring some life back to the Overworld", // [Mandatory] || Lang Key (or english text) which will be used to display the reward in the tooltip.
        },
        // Reward,
      ],
      failures: [
        {
          type: "explosion",
          strength: 3.0, // [Mandatory] || Strength of the explosion. Creepers are 3, TNT is 4.
          fire: false, // [Mandatory] || If the explosion will cause fire to spawn.
          block_damage: true, // [Mandatory] || If the explosion will damage blocks.
        },
      ],
    };

    config.waves.forEach((wave) => {
      let config = {
        entities: [
          // [Mandatory] || A list of all entities that will be spawned this wave.
          // Entity
        ],
        modifiers: [
          // [Optional]  || A list of all modifiers to be applied to ALL wave enemies.
          // AttributeModifier
        ],
        rewards: [
          // [Mandatory] || A list of rewards for this wave.
          // Reward
        ],
        max_wave_time: wave.time, // [Mandatory] || The total time, in ticks, that this wave may be active for.
        setup_time: wave.setup, // [Mandatory] || The time, in ticks, before this wave starts, after the last wave ends.
      };

      wave.entities.forEach((entity) => {
        for (let i = 0; i < entity.count; i++) {
          config.entities.push({
            entity: entity.id, // [Mandatory] || Registry name of an entity type
          });
        }
      });

      if (wave.modifiers) {
        wave.modifiers.forEach((modifier) => {
          config.modifiers.push({
            attribute: modifier.attribute, // [Mandatory] || Registry name of the Attribute to use.
            operation: modifier.operation, // [Mandatory] || One of ADDITION, MULTIPLY_BASE, MULTIPLY_TOTAL.  See https://github.com/Shadows-of-Fire/Placebo/blob/1.18/src/main/java/shadows/placebo/util/AttributeHelper.java#L17-L28 (Addition is 0, multBase is 1, multTotal is 2)
            value: modifier.value, // [Mandatory] || Attribute modifier value. What the value means is operation-dependent, see above.
          });
        });
      }

      wave.rewards.forEach((reward) => {
        if (reward.type === "stack") {
          config.rewards.push({
            type: "stack",
            stack: {
              item: reward.id, // [Mandatory] || Registry Name of item to load.
              count: reward.count, // [Optional, defaults to 1] || Stack Size
            },
          });
        }
        if (reward.type === "chance") {
          config.rewards.push({
            type: "chanced",
            chance: reward.chance,
            reward: {
              type: "stack",
              stack: {
                item: reward.id, // [Mandatory] || Registry Name of item to load.
                count: reward.count, // [Optional, defaults to 1] || Stack Size
              },
            },
          });
        }
        if (reward.type === "list") {
          let list = {
            type: "stack_list",
            stacks: [],
          };

          reward.stacks.forEach((stack) => {
            list.stacks.push({
              item: stack.id, // [Mandatory] || Registry Name of item to load.
              count: stack.count, // [Optional, defaults to 1] || Stack Size
            });
          });

          config.rewards.push(list);
        }
        if (reward.type === "entity") {
          config.rewards.push({
            type: "entity_loot",
            entity: reward.id || wave.entities[0].id, // [Mandatory] || Registry name of the entity to use.
            rolls: reward.rolls || wave.entities[0].count, // [Mandatory] || The number of times the loot table will be rolled.
          });
        }
      });
      json.waves.push(config);
    });

    event.addJson(`gateways:gateways/${config.id}_gate.json`, json);
  }

  const remove_gate = (ids) => {
    ids.forEach((id) => {
      event.addJson(`gateways:gateways/${id}_small.json`, {
        type: "forge:conditional",
        recipes: [
          {
            conditions: [
              {
                type: "forge:false",
              },
            ],
          },
        ],
      });
      event.addJson(`gateways:gateways/${id}.json`, {
        type: "forge:conditional",
        recipes: [
          {
            conditions: [
              {
                type: "forge:false",
              },
            ],
          },
        ],
      });
      event.addJson(`gateways:gateways/${id}_large.json`, {
        type: "forge:conditional",
        recipes: [
          {
            conditions: [
              {
                type: "forge:false",
              },
            ],
          },
        ],
      });

      event.addJson(`gateways:recipes/${id}_small.json`, {
        type: "forge:conditional",
        recipes: [
          {
            conditions: [
              {
                type: "forge:false",
              },
            ],
          },
        ],
      });
      event.addJson(`gateways:recipes/${id}.json`, {
        type: "forge:conditional",
        recipes: [
          {
            conditions: [
              {
                type: "forge:false",
              },
            ],
          },
        ],
      });
      event.addJson(`gateways:recipes/${id}_large.json`, {
        type: "forge:conditional",
        recipes: [
          {
            conditions: [
              {
                type: "forge:false",
              },
            ],
          },
        ],
      });
    });
  };

  // end
  // "relics:chorus_inhibitor"
  // "relics:elytra_booster"
  // "relics:enders_hand"
  // "relics:midnight_robe"
  // "relics:reflection_necklace"
  // "relics:soul_devourer"
  // "relics:space_dissector"
  // "relics:spatial_sign"
  // "relics:stellar_catalyst"

  // bumblezone
  // "relics:fragrant_flower"

  add_gate({
    id: "aquatic",
    color: "#4FA7FF",
    xp: 5000,
    range: 10,
    leash: 100000,
    command: "gamestage add <summoner> gateway_aquatic",
    waves: [
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:artificial_golem", count: 3 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:armored_frost_spirit", count: 3 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:diophyde_prowler", count: 3 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:polargeist", count: 3 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:crynocerous", count: 3 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 600,
        entities: [{ id: "blue_skies:summoner", count: 1 }],
        rewards: [
          { type: "stack", id: "blue_skies:loot_bag_summoner", count: 2 },
        ],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:stonelet", count: 3 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:spewter", count: 3 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 600,
        entities: [{ id: "blue_skies:starlit_crusher", count: 1 }],
        rewards: [
          {
            type: "stack",
            id: "blue_skies:loot_bag_starlit_crusher",
            count: 2,
          },
        ],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "blue_skies:seclam", count: 3 },
          { id: "blue_skies:whistleshell_crab", count: 3 },
          { id: "minecraft:turtle", count: 3 },
          { id: "minecraft:skeleton", count: 3 },
        ],
        modifiers: [],
        rewards: [
          { type: "entity", id: "blue_skies:seclam", rolls: 5 },
          { type: "entity", id: "blue_skies:whistleshell_crab", rolls: 5 },
          { type: "entity", id: "minecraft:turtle", rolls: 5 },
          { type: "entity", id: "minecraft:skeleton", rolls: 5 },
          {
            type: "list",
            stacks: [
              { id: "minecraft:cod", count: 15 },
              { id: "minecraft:salmon", count: 15 },
              { id: "minecraft:tropical_fish", count: 15 },
              { id: "minecraft:pufferfish", count: 15 },
              { id: "blue_skies:municipal_monkfish", count: 15 },
              { id: "rankine:tuna", count: 15 },
            ],
          },

          { type: "chance", id: "relics:amphibian_boot", chance: 0.35 },
          { type: "chance", id: "relics:aqua_walker", chance: 0.35 },
          { type: "chance", id: "relics:drowned_belt", chance: 0.35 },
          { type: "chance", id: "relics:ice_breaker", chance: 0.35 },
          { type: "chance", id: "relics:ice_skates", chance: 0.35 },
          { type: "chance", id: "relics:jellyfish_necklace", chance: 0.35 },
          { type: "chance", id: "relics:solid_snowball", chance: 0.35 },
          { type: "chance", id: "relics:wool_mitten", chance: 0.35 },
        ],
      },
    ],
  });

  add_gate({
    id: "forgotten",
    color: "#00D7A2",
    xp: 5000,
    range: 10,
    leash: 100000,
    command: "gamestage add <summoner> gateway_forgotten",
    waves: [
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "undergarden:rotling", count: 5 }],
        rewards: [{ type: "entity", rolls: 15 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "undergarden:muncher", count: 5 }],
        rewards: [{ type: "entity", rolls: 15 }],
      },
      // {
      //   time: 2400,
      //   setup: 300,
      //   entities: [{ id: "undergarden:dweller", count: 5 }],
      //   rewards: [{ type: "entity", rolls: 15 }],
      // },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "undergarden:nargoyle", count: 5 }],
        rewards: [{ type: "stack", id: "undergarden:raw_cloggrum", count: 15 }],
      },
      // {
      //   time: 2400,
      //   setup: 300,
      //   entities: [{ id: "undergarden:brute", count: 5 }],
      //   rewards: [{ type: "entity", rolls: 15 }],
      // },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "undergarden:rotwalker", count: 5 }],
        rewards: [{ type: "entity", rolls: 15 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "undergarden:rotbeast", count: 3 }],
        rewards: [{ type: "entity", rolls: 15 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "undergarden:forgotten_guardian", count: 3 }],
        rewards: [{ type: "entity", rolls: 7 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [{ id: "undergarden:masticator", count: 1 }],
        rewards: [
          { type: "stack", id: "undergarden:masticator_scales", count: 10 },
        ],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "minecraft:slime", count: 3 },
          { id: "minecraft:creeper", count: 3 },
          { id: "undergarden:mog", count: 3 },
          { id: "undergarden:gloomper", count: 3 },
        ],
        rewards: [
          { type: "entity", id: "minecraft:slime", rolls: 25 },
          { type: "entity", id: "minecraft:creeper", rolls: 25 },
          { type: "entity", id: "undergarden:mog", rolls: 25 },
          { type: "entity", id: "undergarden:gloomper", rolls: 25 },
          { type: "stack", id: "relics:spore_sack", count: 1 },
        ],
      },
    ],
  });

  add_gate({
    id: "poisonous",
    color: "#FF6C55",
    xp: 5000,
    range: 12,
    leash: 100000,
    command: "gamestage add <summoner> gateway_poisonous",
    waves: [
      // {
      //   time: 2400,
      //   setup: 300,
      //   entities: [{ id: "blue_skies:crogre", count: 7 }],
      //   rewards: [{ type: "entity", rolls: 21 }],
      // },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:emberback", count: 7 }],
        rewards: [{ type: "entity", rolls: 21 }],
      },
      // {
      //   time: 2400,
      //   setup: 300,
      //   entities: [{ id: "blue_skies:shade_monitor", count: 7 }],
      //   rewards: [{ type: "entity", rolls: 21 }],
      // },
      {
        time: 4800,
        setup: 300,
        entities: [{ id: "blue_skies:alchemist", count: 1 }],
        rewards: [
          { type: "stack", id: "blue_skies:loot_bag_alchemist", count: 2 },
        ],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:nested_spider", count: 7 }],
        rewards: [{ type: "entity", rolls: 21 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:venom_spider", count: 7 }],
        rewards: [{ type: "entity", rolls: 21 }],
      },
      // {
      //   time: 2400,
      //   setup: 300,
      //   entities: [{ id: "blue_skies:nyctofly", count: 7 }],
      //   rewards: [{ type: "entity", rolls: 21 }],
      // },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "blue_skies:infested_swarmer", count: 7 }],
        rewards: [{ type: "entity", rolls: 21 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [{ id: "blue_skies:arachnarch", count: 1 }],
        rewards: [
          { type: "stack", id: "blue_skies:loot_bag_arachnarch", count: 2 },
        ],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          // { id: "minecraft:panda", count: 3 },
          // { id: "minecraft:parrot", count: 3 },
          { id: "minecraft:spider", count: 3 },
          { id: "minecraft:cave_spider", count: 3 },
          { id: "minecraft:fox", count: 3 },
          { id: "blue_skies:cosmic_fox", count: 3 },
        ],
        rewards: [
          // { type: "entity", id: "minecraft:panda", rolls: 25 },
          // { type: "entity", id: "minecraft:parrot", rolls: 25 },
          { type: "entity", id: "minecraft:spider", rolls: 25 },
          { type: "entity", id: "minecraft:cave_spider", rolls: 25 },
          { type: "entity", id: "minecraft:fox", rolls: 25 },
          { type: "entity", id: "blue_skies:cosmic_fox", rolls: 25 },
          { type: "stack", id: "relics:rage_glove", count: 1 },
        ],
      },
    ],
  });

  add_gate({
    id: "magical",
    color: "#D888FF",
    xp: 5000,
    range: 15,
    leash: 100000,
    command: "gamestage add <summoner> gateway_magical",
    waves: [
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "twilightforest:wraith", count: 3 },
          { id: "twilightforest:skeleton_druid", count: 3 },
          { id: "twilightforest:swarm_spider", count: 3 },
          { id: "twilightforest:king_spider", count: 3 },
          { id: "twilightforest:hedge_spider", count: 3 },
        ],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [{ id: "twilightforest:naga", count: 1 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "twilightforest:redcap", count: 3 },
          { id: "twilightforest:redcap_sapper", count: 3 },
          { id: "twilightforest:kobold", count: 3 },
        ],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [
          { id: "twilightforest:death_tome", count: 3 },
          { id: "twilightforest:lich", count: 1 },
        ],
        rewards: [{ type: "entity", id: "twilightforest:lich", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "twilightforest:fire_beetle", count: 3 },
          { id: "twilightforest:pinch_beetle", count: 3 },
          { id: "twilightforest:slime_beetle", count: 3 },
          { id: "twilightforest:maze_slime", count: 3 },
        ],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [
          { id: "twilightforest:minoshroom", count: 5 },
          { id: "twilightforest:minotaur", count: 1 },
        ],
        rewards: [{ type: "entity", id: "twilightforest:minotaur", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [
          { id: "twilightforest:hydra", count: 1 },
          { id: "twilightforest:mosquito_swarm", count: 5 },
        ],
        rewards: [{ type: "entity", id: "twilightforest:hydra", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "twilightforest:helmet_crab", count: 3 },
          { id: "twilightforest:blockchain_goblin", count: 3 },
          { id: "twilightforest:lower_goblin_knight", count: 3 },
          { id: "twilightforest:upper_goblin_knight", count: 3 },
        ],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [{ id: "twilightforest:knight_phantom", count: 1 }],
        rewards: [
          { type: "entity", id: "twilightforest:knight_phantom", rolls: 10 },
        ],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "twilightforest:carminite_broodling", count: 3 },
          { id: "twilightforest:carminite_ghastguard", count: 3 },
          { id: "twilightforest:carminite_ghastling", count: 3 },
          { id: "twilightforest:carminite_golem", count: 3 },
        ],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [{ id: "twilightforest:ur_ghast", count: 1 }],
        rewards: [{ type: "entity", id: "twilightforest:ur_ghast", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [
          { id: "twilightforest:yeti", count: 5 },
          { id: "twilightforest:alpha_yeti", count: 1 },
        ],
        rewards: [
          { type: "entity", id: "twilightforest:alpha_yeti", rolls: 10 },
        ],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "twilightforest:stable_ice_core", count: 3 },
          { id: "twilightforest:unstable_ice_core", count: 3 },
          { id: "twilightforest:ice_crystal", count: 3 },
          { id: "twilightforest:snow_guardian", count: 3 },
        ],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [{ id: "twilightforest:snow_queen", count: 1 }],
        rewards: [
          { type: "entity", id: "twilightforest:snow_queen", rolls: 10 },
        ],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "twilightforest:giant_miner", count: 1 },
          { id: "twilightforest:armored_giant", count: 1 },
          { id: "twilightforest:troll", count: 5 },
        ],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 6400,
        setup: 300,
        entities: [
          { id: "ecofriendly:oil_zombie", count: 5 },
          { id: "ecofriendly:pollutor_king_ym", count: 1 },
        ],
        rewards: [
          { type: "entity", id: "ecofriendly:pollutor_king_ym", rolls: 3 },
        ],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "minecraft:rabbit", count: 3 },
          { id: "twilightforest:dwarf_rabbit", count: 3 },
          { id: "minecraft:chicken", count: 3 },
          { id: "minecraft:wolf", count: 3 },
          { id: "twilightforest:mist_wolf", count: 3 },
          { id: "twilightforest:winter_wolf", count: 3 },
          { id: "twilightforest:hostile_wolf", count: 3 },
          { id: "totemic:bald_eagle", count: 3 },
        ],
        rewards: [
          { type: "entity", id: "minecraft:rabbit", rolls: 10 },
          { type: "entity", id: "twilightforest:dwarf_rabbit", rolls: 10 },
          { type: "entity", id: "minecraft:chicken", rolls: 10 },
          { type: "entity", id: "minecraft:wolf", rolls: 10 },
          { type: "entity", id: "twilightforest:mist_wolf", rolls: 10 },
          { type: "entity", id: "twilightforest:winter_wolf", rolls: 10 },
          { type: "entity", id: "twilightforest:hostile_wolf", rolls: 10 },
          { type: "entity", id: "totemic:bald_eagle", rolls: 10 },

          { type: "chance", id: "relics:arrow_quiver", chance: 0.35 },
          { type: "chance", id: "relics:leather_belt", chance: 0.35 },
          { type: "chance", id: "relics:magic_mirror", chance: 0.35 },
          { type: "chance", id: "relics:roller_skates", chance: 0.35 },
        ],
      },
    ],
  });

  add_gate({
    id: "hellish",
    color: "#D92C32",
    xp: 5000,
    range: 15,
    leash: 100000,
    command: "gamestage add <summoner> gateway_hellish",
    waves: [
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:magma_cube", count: 12 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:wither_skeleton", count: 12 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:ghast", count: 12 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 4800,
        setup: 300,
        entities: [{ id: "minecraft:wither", count: 1 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:blaze", count: 12 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 3200,
        setup: 300,
        entities: [{ id: "cataclysm:ignited_revenant", count: 3 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 6400,
        setup: 300,
        entities: [{ id: "cataclysm:ignis", count: 1 }],
        rewards: [{ type: "entity", rolls: 5 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "minecraft:hoglin", count: 6 },
          { id: "minecraft:zoglin", count: 6 },
        ],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:zombified_piglin", count: 12 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "minecraft:piglin", count: 6 },
          { id: "minecraft:piglin_brute", count: 6 },
        ],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 7200,
        setup: 300,
        entities: [{ id: "cataclysm:netherite_monstrosity", count: 1 }],
        rewards: [{ type: "entity", rolls: 5 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:pig", count: 15 }],
        rewards: [
          { type: "entity", rolls: 10 },

          { type: "chance", id: "relics:bastion_ring", chance: 0.35 },
          { type: "chance", id: "relics:blazing_flask", chance: 0.35 },
          { type: "chance", id: "relics:infinity_ham", chance: 0.35 },
          { type: "chance", id: "relics:magma_walker", chance: 0.05 },
        ],
      },
    ],
  });

  add_gate({
    id: "steampunk",
    color: "#006F74",
    xp: 5000,
    range: 20,
    leash: 100000,
    command: "gamestage add <summoner> gateway_steampunk",
    waves: [
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:skeleton_horse", count: 15 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:zombie_villager", count: 15 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:zombie_horse", count: 15 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:vex", count: 15 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:vindicator", count: 15 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:ravager", count: 12 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "minecraft:evoker", count: 15 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [{ id: "hem:militarybot", count: 15 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 6400,
        setup: 300,
        entities: [{ id: "hem:enemy_air_airship", count: 6 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 6400,
        setup: 300,
        entities: [{ id: "hem:ancient_one", count: 1 }],
        rewards: [{ type: "entity", rolls: 10 }],
      },
      {
        time: 2400,
        setup: 300,
        entities: [
          { id: "minecraft:mule", count: 5 },
          { id: "minecraft:donkey", count: 5 },
          { id: "minecraft:horse", count: 5 },
        ],
        rewards: [
          { type: "entity", id: "minecraft:mule", rolls: 10 },
          { type: "entity", id: "minecraft:donkey", rolls: 10 },
          { type: "entity", id: "minecraft:horse", rolls: 10 },

          { type: "chance", id: "relics:holy_locket", chance: 0.35 },
          { type: "chance", id: "relics:horse_flute", chance: 0.35 },
          { type: "chance", id: "relics:hunter_belt", chance: 0.35 },
          { type: "chance", id: "relics:lucky_horseshoe", chance: 0.35 },
        ],
      },
    ],
  });

  remove_gate([
    "blaze_gate",
    "creeper_gate",
    "enderman_gate",
    "ghast_gate",
    "magma_cube_gate",
    "shulker_gate",
    "skeleton_gate",
    "slime_gate",
    "spider_gate",
    "witch_gate",
    "zombie_gate",
  ]);
});

onEvent("recipes", (event) => {
  const gateway_recipes = (config) => {
    config.forEach((item) => {
      event.custom({
        type: "occultism:ritual",
        ritual_type: "occultism:craft",
        activation_item: {
          item: item.activation_item,
        },
        pentacle_id: item.pentacle_id,
        duration: 60,
        ritual_dummy: {
          item: "occultism:ritual_dummy/custom_ritual",
        },
        ingredients: item.inputs,
        result: item.output,
      });
    });
  };

  gateway_recipes([
    {
      activation_item: "blue_skies:soul_fragment",
      pentacle_id: "occultism:summon_foliot",
      inputs: [
        {
          item: "blue_skies:aquite",
        },
        {
          item: "blue_skies:aquite",
        },
        {
          item: "blue_skies:soul_fragment",
        },
        {
          item: "blue_skies:cryo_root",
        },
        {
          item: "blue_skies:winter_leaves",
        },
        {
          item: "blue_skies:municipal_monkfish",
        },
        {
          item: "blue_skies:grittle_flatfish",
        },
        {
          item: "rankine:white_marble",
        },
        {
          item: "rankine:white_marble",
        },
        {
          item: "blue_skies:starlit_sapling",
        },
        {
          item: "blue_skies:chilled_lily_pad",
        },
        {
          item: "blue_skies:azulfo_horn",
        },
      ],
      output: {
        item: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:aquatic_gate"}',
      },
    },
    {
      activation_item: "blue_skies:soul_fragment",
      pentacle_id: "occultism:craft_foliot",
      inputs: [
        {
          item: "undergarden:bloody_stew",
        },
        {
          item: "undergarden:inky_stew",
        },
        {
          item: "undergarden:indigo_stew",
        },
        {
          item: "undergarden:veiled_stew",
        },
        {
          item: "undergarden:utherium_crystal",
        },
        {
          item: "undergarden:forgotten_nugget",
        },
        {
          item: "undergarden:twistytwig",
        },
        {
          item: "undergarden:utherium_crystal",
        },
        {
          item: "undergarden:forgotten_nugget",
        },
        {
          item: "undergarden:twistytwig",
        },
        {
          item: "undergarden:rotten_blisterberry",
        },
        {
          item: "undergarden:brute_tusk",
        },
      ],
      output: {
        item: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:forgotten_gate"}',
      },
    },
    {
      activation_item: "blue_skies:soul_fragment",
      pentacle_id: "occultism:craft_djinni",
      inputs: [
        {
          item: "blue_skies:crescent_fruit",
        },
        {
          item: "blue_skies:monitor_tail",
        },
        {
          item: "blue_skies:charscale_moki",
        },
        {
          item: "blue_skies:horizofin_tunid",
        },
        {
          item: "blue_skies:fox_pelt",
        },
        {
          item: "blue_skies:bug_guts",
        },
        {
          item: "blue_skies:horizonite_ingot",
        },
        {
          item: "blue_skies:bug_guts",
        },
        {
          item: "blue_skies:horizonite_ingot",
        },
        {
          item: "blue_skies:venom_sac",
        },
        {
          item: "blue_skies:blaze_bud",
        },
        {
          item: "blue_skies:moonlit_water_lily",
        },
      ],
      output: {
        item: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:poisonous_gate"}',
      },
    },
    {
      activation_item: "blue_skies:soul_fragment",
      pentacle_id: "occultism:summon_wild_greater_spirit",
      inputs: [
        {
          item: "twilightforest:charm_of_keeping_2",
        },
        {
          item: "twilightforest:charm_of_keeping_2",
        },
        {
          item: "twilightforest:raw_ironwood",
        },
        {
          item: "twilightforest:experiment_115",
        },
        {
          item: "twilightforest:huge_water_lily",
        },
        {
          item: "twilightforest:transformation_powder",
        },
        {
          item: "twilightforest:transformation_powder",
        },
        {
          item: "twilightforest:carminite",
        },
        {
          item: "twilightforest:fiery_tears",
        },
        {
          item: "twilightforest:fiery_blood",
        },
        {
          item: "twilightforest:fiery_blood",
        },
        {
          item: "twilightforest:thorn_rose",
        },
      ],
      output: {
        item: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:magical_gate"}',
      },
    },
    {
      activation_item: "blue_skies:soul_fragment",
      pentacle_id: "occultism:summon_marid",
      inputs: [
        {
          item: "minecraft:wither_rose",
        },
        {
          item: "minecraft:crimson_fungus",
        },
        {
          item: "minecraft:warped_fungus",
        },
        {
          item: "minecraft:quartz",
        },
        {
          item: "minecraft:porkchop",
        },
        {
          item: "cataclysm:witherite_ingot",
        },
        {
          item: "rankine:carbon_dioxide_gas_bottle",
        },
        {
          item: "minecraft:porkchop",
        },
        {
          item: "cataclysm:witherite_ingot",
        },
        {
          item: "rankine:carbon_dioxide_gas_bottle",
        },
        {
          item: "occultism:iesnium_ingot",
        },
        {
          item: "minecraft:blaze_powder",
        },
      ],
      output: {
        item: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:hellish_gate"}',
      },
    },
    {
      activation_item: "blue_skies:soul_fragment",
      pentacle_id: "occultism:craft_marid",
      inputs: [
        {
          item: "hem:copparite",
        },
        {
          item: "rankine:vulcanized_rubber",
        },
        {
          item: "hem:lush_flower_1",
        },
        {
          item: "hem:shotgun_shell",
        },
        {
          item: "create:chromatic_compound",
        },
        {
          item: "hem:copparite",
        },
        {
          item: "rankine:vulcanized_rubber",
        },
        {
          item: "hem:lush_flower_1",
        },
        {
          item: "hem:shotgun_shell",
        },
        {
          item: "create:chromatic_compound",
        },
        {
          item: "rankine:steel_ingot",
        },
        {
          item: "rankine:steel_ingot",
        },
      ],
      output: {
        item: "gateways:gate_pearl",
        nbt: '{gateway:"gateways:steampunk_gate"}',
      },
    },
  ]);
});
