onEvent("fluid.registry", (event) => {
    function fluid(id, color, thin) {
        if (thin)
            event
                .create(id)
                .thinTexture(color)
                .bucketColor(color)
                .displayName(global.toTitleCase(id));
        else
            event
                .create(id)
                .thickTexture(color)
                .bucketColor(color)
                .displayName(global.toTitleCase(id));
    }

    fluid("tanning_fluid", 0xe6c83d, true);
    fluid("molten_ventium", 0xe78c8e);
    fluid("molten_falsite", 0xb188cb);
    fluid("molten_charoite", 0xc9add6);
    fluid("molten_aquite", 0xa0def0);
    fluid("molten_froststeel", 0xcbdcef);
    fluid("molten_cloggrum", 0xad9f9a);
    fluid("molten_regalium", 0xe2b388);
    fluid("molten_utherium", 0xeb99192);
    fluid("molten_redstone", 0xee08184);
    fluid("antibiotics", 0xa091b3, true);
    fluid("crystallized_sap", 0xb994b7, true);
    fluid("molten_iesnium", 0x9fd3dd);
    fluid("molten_forgotten_metal", 0x95f2d7);
    fluid("molten_ironwood", 0xc0b9b9);
    fluid("molten_steeleaf", 0x95b08e);
    fluid("molten_horizonite", 0xffc395);
    fluid("freezing_sap", 0xbaddff, true);
    fluid("molten_sterling_silver", 0xfefefe);
    fluid("molten_crystal_glass", 0xb2b4c0);
    fluid("molten_midnight_glass", 0x878c94);
});
