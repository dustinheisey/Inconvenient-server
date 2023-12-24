// priority: 203

onEvent('tags.items', event => {
  function stageLostStories(stage, dimensions) {
    dimensions.forEach(dimension => {
      stages.forEach(stage => {
        event.remove(`im:${stage}`, `kubejs:lost_page_${dimension}`);
        event.remove(`im:${stage}`, `kubejs:lost_story_${dimension}`);
      });
      event.add(`im:${stage}`, `kubejs:lost_page_${dimension}`);
      event.add(`im:${stage}`, `kubejs:lost_story_${dimension}`);
    });
  }

  stageLostStories('stage_2', ['everbright']);
  stageLostStories('stage_3', ['undergarden', 'everdawn', 'twilight']);
  stageLostStories('stage_4', ['nether', 'blueleaf']);
  stageLostStories('stage_5_1', ['bumblezone']);
});
