onEvent('recipes', event => {
  event.forEachRecipe(
    {
      output: 'minecraft:stick',
      input: '#minecraft:planks',
    },
    recipe => {
      event.remove({
        input: '#minecraft:planks',
        output: recipe.outputItems[0].id,
      });

      event.shaped(`2x ${recipe.outputItems[0].id}`, ['a', 'a'], {
        a: recipe.inputItems[0],
      });
    }
  );
});
