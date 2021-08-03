<template>
   <div id="map">
     <l-map v-if="showMap" :zoom="zoom" :center="center" >
         <l-tile-layer :url="url"></l-tile-layer>
         <div v-for="(marcador, i) in marcadores" :key="i">
             <l-marker :lat-lng="[marcador.py, marcador.px]" ></l-marker>
         </div>
     </l-map>    
   </div>
</template>

<script>
import { latLng, Icon} from "leaflet";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import axios from 'axios';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
    name: 'MyAwesomeMap',
    props: ['marcadores'],
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    computed: {
        posicoes:function(){
            let posicoes = [];
            for(let i = 0; i < this.pontos.length; i++){
                for(let j = 0; j < this.pontos[i].vs.length; j++){
                    let latLog = [this.pontos[i].vs[j].py, this.pontos[i].vs[j].px];
                    posicoes.push(latLog);
                }
            }
            return posicoes;
        }
    },
    data() {
        return {
            pontos: [],
            zoom: 13,
            center: latLng(-23.6574164,-46.8258203),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            showMap: true,
            markerLatLng: [-23.494194, -46.400918]
        }
    },
    methods: {
        showLongText() {
            console.log(this.posicoes);
        },
    },
    async mounted() {
      
      await axios.get('https://aiko-olhovivo-proxy.aikodigital.io/Posicao')
      .then(response =>{ this.pontos = response.data.l;  console.log(response.data.l)});
    }
};

</script>

<style>

#map {
    width: 100%;
    height: 500px;
    margin: 15px 0 15px 0;
}

</style>