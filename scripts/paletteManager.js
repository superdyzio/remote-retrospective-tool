PaletteManager = (() => {
    const $ = go.GraphObject.make;

    const init = () => {
        const palette = $(go.Palette, 'palette');
    };

    return {
        init,
    };
})();
