DiagramManager = (() => {
    const $ = go.GraphObject.make;

    const init = () => {
        const diagram = $(go.Diagram, 'diagram');

        TemplateProvider.provideNodeTemplatesForWeatherGraph(diagram);

        diagram.model = new go.GraphLinksModel([{key: 'axisX', category: 'AxisX'}]);
    };

    return {
        init,
    };
})();

// todo: method will be used later
function saveImageCallback(blob) {
    const url = window.URL.createObjectURL(blob);
    const filename = 'diagram.jpg';
    const a = document.createElement('a');
    a.style = 'display: none';
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    requestAnimationFrame(function () {
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
}
