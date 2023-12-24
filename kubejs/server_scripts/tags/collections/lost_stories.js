onEvent('tags.items', event => {
  new tags(event)
    .addItems('im:lost_stories', [
      'kubejs:lost_story_everbright',
      'kubejs:lost_story_undergarden',
      'kubejs:lost_story_everdawn',
      'kubejs:lost_story_twilight',
      'kubejs:lost_story_nether',
      'kubejs:lost_story_blueleaf',
      'kubejs:lost_story_bumblezone',
    ])
    .addItems('im:lost_pages', [
      'kubejs:lost_page_everbright',
      'kubejs:lost_page_undergarden',
      'kubejs:lost_page_everdawn',
      'kubejs:lost_page_twilight',
      'kubejs:lost_page_nether',
      'kubejs:lost_page_blueleaf',
      'kubejs:lost_page_bumblezone',
    ]);
});
