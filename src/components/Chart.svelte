<script>
  import { onMount } from 'svelte';
  import { nodesStore, edgesStore, optionsStore } from '../stores/dataStore';
  import { Network } from '../../node_modules/vis-network/peer';
  import { DataSet } from '../../node_modules/vis-data/peer';
  import "vis-network/styles/vis-network.css";


  const loadChart = () => {
    // create a network
    let container = document.getElementById('chart');

    // provide the data in the vis format
    let data = {
      nodes: new DataSet([...$nodesStore]),
      edges: new DataSet([...$edgesStore])
    };

    // This is not necessary atm
    $optionsStore.configure.container = document.querySelector('#test-container');

    let options = $optionsStore;

    // initialize your network!
    let network = new Network(container, data, options);
  }

  onMount(loadChart);
</script>


<!-- This part is necessary to import the visJS script and make the app use it from the already compiled html pages -->
<!-- <svelte:head>
  <script src="vis-network.js" on:load={visJSLoaded}></script>
</svelte:head> -->


<div>
  <h1>title</h1>
  <button on:click={loadChart}>RESET GRAPH</button>
</div>

<div id="chart">
  <!-- canvas will be loaded inside this component -->
</div>

<div id='test-container'></div>





<style>
  #chart {
    height: 100vh;
  }
</style>