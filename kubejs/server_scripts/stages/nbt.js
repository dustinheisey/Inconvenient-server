// // priority: 205

// onEvent("tags.items", (event) => {
//   function stageNBT(stage, items) {
//     items.forEach((item) => {
//       item.nbt.forEach((nbt) => {
//         event.add(`im:${stage}`, Item.of(item.id, nbt));
//       });
//     });
//   }

//   Item.of("minecraft:potion", '{Potion:"minecraft:water"}'),
//     stageNBT("stage_1", [
//       {
//         id: "patchouli:guide_book",
//         nbt: [
//           '{"patchouli:book":"patchouli:journal"}',
//           '{"patchouli:book":"rankine:rankine_journal"}',
//           '{"patchouli:book":"caupona:book"}',
//         ],
//       },
//     ]);
//   stageNBT("stage_2", [
//     {
//       id: "patchouli:guide_book",
//       nbt: [
//         '{"patchouli:book":"naturesaura:book"}',
//         '{"patchouli:book":"totemic:totempedia"}',
//       ],
//     },
//   ]);
//   stageNBT("stage_3", [
//     {
//       id: "patchouli:guide_book",
//       nbt: [
//         '{"patchouli:book":"bloodmagic:guide"}',
//         '{"patchouli:book":"extendedcrafting:guide"}',
//         '{"patchouli:book":"naturesaura:book"}',
//         '{"patchouli:book":"twilightforest:guide"}',
//       ],
//     },
//   ]);
//   stageNBT("stage_4", [
//     {
//       id: "patchouli:guide_book",
//       nbt: [],
//     },
//   ]);
//   stageNBT("stage_5_1", [
//     {
//       id: "patchouli:guide_book",
//       nbt: ['{"patchouli:book":"productivebees:guide"}'],
//     },
//   ]);
//   stageNBT("stage_5_2", [
//     {
//       id: "patchouli:guide_book",
//       nbt: ['{"patchouli:book":"pneumaticcraft:book"}'],
//     },
//   ]);
// });
