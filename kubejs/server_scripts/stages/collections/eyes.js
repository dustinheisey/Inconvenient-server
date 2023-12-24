// priority: 203

onEvent('tags.items', event => {
  function stageEyes(stage, eyes) {
    eyes.forEach(eye => {
      stages.forEach(stage => {
        event.remove(`im:${stage}`, `endrem:${eye}`);
      });
      event.add(`im:${stage}`, `endrem:${eye}`);
    });
  }

  stageEyes('stage_1', ['cold_eye', 'undead_soul']);
  stageEyes('stage_2', ['guardian_eye', 'exotic_eye']);
  stageEyes('stage_3', ['undead_eye', 'corrupted_eye', 'magical_eye']);
  stageEyes('stage_4', ['wither_eye', 'black_eye']);
  stageEyes('stage_5_1', ['cursed_eye']);
  stageEyes('stage_5_2', ['lost_eye']);
  stageEyes('stage_6', ['nether_eye']);
  stageEyes('stage_7_1', [
    'old_eye',
    'witch_eye',
    'witch_pupil',
    'rogue_eye',
    'cryptic_eye',
  ]);
  stageEyes('stage_7_2', ['evil_eye']);
});
