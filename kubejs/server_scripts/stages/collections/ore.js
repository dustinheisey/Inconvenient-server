// priority: 203

onEvent('tags.items', event => {
  function stageOres(stage, ores) {
    ores.forEach(ore => {
      stages.forEach(stage => {
        event.remove(`im:${stage}`, ore);
      });
      event.add(`im:${stage}`, ore);
    });
  }

  stageOres('stage_1', [
    'rankine:plumbago_ore',
    'rankine:malachite_ore',
    'rankine:cassiterite_ore',
    'rankine:galena_ore',
    'rankine:acanthite_ore',
    'salt:rock_salt_ore',
    'salt:deepslate_rock_salt_ore',
  ]);
  stageOres('stage_2', [
    'blue_skies:everbright_diopside_ore',
    'blue_skies:everbright_pyrope_ore',
    'blue_skies:everbright_aquite_ore',
    'blue_skies:everbright_charoite_ore',
    'blue_skies:everbright_moonstone_ore',
    'blue_skies:falsite_ore',
    'blue_skies:ventium_ore',
  ]);
  stageOres('stage_3', [
    'rankine:hematite_ore',
    'blue_skies:everdawn_diopside_ore',
    'blue_skies:everdawn_pyrope_ore',
    'blue_skies:everdawn_aquite_ore',
    'blue_skies:everdawn_charoite_ore',
    'blue_skies:everdawn_moonstone_ore',
    'blue_skies:horizonite_ore',
    'undergarden:depthrock_coal_ore',
    'undergarden:shiverstone_coal_ore',
    'undergarden:depthrock_cloggrum_ore',
    'undergarden:shiverstone_cloggrum_ore',
    'undergarden:shiverstone_froststeel_ore',
    'undergarden:depthrock_utherium_ore',
    'undergarden:shiverstone_utherium_ore',
    'undergarden:tremblecrust_utherium_ore',
    'undergarden:depthrock_regalium_ore',
    'undergarden:shiverstone_regalium_ore',
    'rankine:lazurite_ore',
    'rankine:cinnabar_ore',
  ]);
  stageOres('stage_4', [
    'occultism:iesnium_ore',
    'minecraft:ancient_debris',
    'minecraft:gilded_blackstone',
    'rankine:sphalerite_ore',
    'rankine:nether_quartz_ore',
    'rankine:nether_gold_ore',
    'rankine:native_sulfur_ore',
    'rankine:cobaltite_ore',
    'rankine:bauxite_ore',
    'malum:blazing_quartz_ore',
    'rankine:gold_ore',
  ]);
  stageOres('stage_5_2', [
    'rankine:bituminous_ore',
    'rankine:ilmenite_ore',
    'rankine:pentlandite_ore',
    'rankine:subbituminous_ore',
    'rankine:uraninite_ore',
  ]);
  stageOres('stage_7_1', [
    'mekanism:osmium_ore',
    'mekanism:fluorite_ore',
    'mekanism:deepslate_fluorite_ore',
  ]);
  stageOres('stage_7_2', ['bloodmagic:dungeon_ore', 'rankine:beryl_ore']);
});
