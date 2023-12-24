onEvent('tags.items', event => {
  function stageArmorTiers(stage, tiers) {
    tiers.forEach(tier => {
      event
        .get(`im:armors/${tier}`)
        .getObjectIds()
        .forEach(id => {
          stages.forEach(stage => {
            event.remove(`im:${stage}`, id);
          });
        });
      event.add(`im:${stage}`, `#im:armors/${tier}`);
    });
  }

  stageArmorTiers('stage_1', ['leather', 'copper', 'bronze', 'iron']);
  stageArmorTiers('stage_2', ['charoite']);
  stageArmorTiers('stage_3', [
    'utherium',
    'horizonite',
    'soul_stained_steel',
    'fiery',
  ]);
  stageArmorTiers('stage_4', ['netherite', 'ignitium', 'engineers']);
  stageArmorTiers('stage_5_1', ['manasteel', 'sky', 'terrasteel']);
  stageArmorTiers('stage_5_2', ['brigandine', 'compressed_iron', 'orichalcum']);
  stageArmorTiers('stage_7_1', ['diamond', 'mekasuit']);
  stageArmorTiers('stage_7_2', ['pneumatic']);
});
