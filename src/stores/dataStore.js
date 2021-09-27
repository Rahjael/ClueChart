import { writable } from 'svelte/store';


export const nodesStore = writable([
  {id: 1, label: 'Solve crime'},
  {id: 2, label: 'Find blood stained knife'},
  {id: 3, label: 'Find footprints in the garden'},
  {id: 4, label: 'Discover relationship with victim'},
  {id: 5, label: 'Read victim\'s diary'},
  {id: 6, label: 'Explore scene of the crime'},
  {id: 7, label: 'Find diary in hidden drawer'},
  {id: 8, label: 'Talk to gardener'},
  {id: 9, label: 'Explore victim\'s room'}
]);

export const edgesStore = writable([
]);

export const optionsStore = writable(
  {
    autoResize: true,
    height: '100%',
    width: '100%',
    locale: 'en',
    // locales: locales,
    clickToUse: true,
    configure: {
      enabled: true,
      filter: true,
      container: undefined,
      showButton: true},    // defined in the configure module.
    edges: {},        // defined in the edges module.
    nodes: {},        // defined in the nodes module.
    groups: {},       // defined in the groups module.
    layout: {},       // defined in the layout module.
    interaction: {},  // defined in the interaction module.
    manipulation: {
      enabled: true,
      initiallyActive: true,
      addNode: true,
      addEdge: true,
      editNode: function test(nodeData, callback) {
        alert('ok');
        callback(nodeData);
      },
      editEdge: true,
      deleteNode: true,
      deleteEdge: true
    }, // defined in the manipulation module.
    physics: {},      // defined in the physics module.
  }

);
