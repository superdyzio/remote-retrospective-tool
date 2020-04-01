TemplateProvider = (() => {
    const $ = go.GraphObject.make;

    const weatherGraphAxesNodeTemplates = [
        {
            category: 'AxisX',
            template: $(
                go.Node,
                go.Panel.Spot,
                $(go.Shape, 'PlusLine', { stroke: 'blue', width: 1000, height: 1000 }),
            ),
        },
    ];

    const provideNodeTemplatesForWeatherDiagram = (obj) => {
        weatherGraphAxesNodeTemplates.forEach(nodeTemplate => {
            obj.nodeTemplateMap.add(nodeTemplate.category, nodeTemplate.template);
        });
    };

    return {
        provideNodeTemplatesForWeatherGraph: provideNodeTemplatesForWeatherDiagram,
    };
})();
