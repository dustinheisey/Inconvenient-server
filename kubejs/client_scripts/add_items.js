onEvent('jei.add.items', event => {
  [
    'ceramicbucket:ceramic_bucket',
    'realistictorches:unlit_torch',
    'endrem:cryptic_eye',
  ].forEach(item => {
    event.add(item);
  });
});
