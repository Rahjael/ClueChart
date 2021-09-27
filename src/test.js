
  // create an array with nodes
  var nodes = new vis.DataSet([
    {id: 1, label: 'porcoddio'},
    {id: 2, label: 'porcamadonna'},
    {id: 3, label: 'diocane'},
    {id: 4, label: 'diobelva'},
    {id: 5, label: 'diolupo'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);


// create a network
var container = document.getElementById('chart-canvas');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
  physics: {enabled: false}
};

// initialize your network!
var network = new vis.Network(container, data, options);