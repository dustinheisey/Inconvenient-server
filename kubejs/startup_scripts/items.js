onEvent('item.registry', event => {
  let item = (id, name, duration) => {
    if (duration)
      event
        .create(id)
        .displayName(name || global.toTitleCase(id))
        .useDuration(itemstack => duration)
        .use((level, player, hand) => true);
    else event.create(id).displayName(name || global.toTitleCase(id));
  };

  item('stitched_hide');
  item('stripped_hide');
  item('salted_hide');
  item('dried_hide');
  item('wet_tanned_hide');

  item('lost_page_everbright', 'Frigid Lost Page', 64);
  item('lost_page_undergarden', 'Slimy Lost Page', 64);
  item('lost_page_everdawn', 'Tattered Lost Page', 64);
  item('lost_page_twilight', 'Magical Lost Page', 64);
  item('lost_page_nether', 'Burnt Lost Page', 64);
  item('lost_page_blueleaf', 'Sooty Lost Page', 64);
  item('lost_page_bumblezone', 'Sticky Lost Page', 64);

  item('lost_story_everbright', "A Grandmother's Story");
  item('lost_story_undergarden', 'A Virus');
  item('lost_story_everdawn', 'Climate Chaos');
  item('lost_story_twilight', 'The Rise of a Dictator');
  item('lost_story_nether', 'A Dire Warning');
  item('lost_story_blueleaf', 'Welcome to Blueleaf');
  item('lost_story_bumblezone', 'The Last Flower');

  item('wheat');
  item('wheat_flakes');
  item('corn_flakes');
  item('oat_flakes');
  item('sorghum_flakes');
  item('millet_flakes');
  item('rye_flakes');
  item('barley_flakes');
  item('soy_flakes');
  item('pre_mix');
  item('feed_mix');

  item('catalyst');
});
