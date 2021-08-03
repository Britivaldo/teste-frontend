<template>
  <div id="app">
    <h1>Dashboard</h1>
    <label>Linhas</label>
    <select class="linha-select" v-model="linha" @change="buscaparadas()">
      <option value="" disabled selected>Selecione uma linha</option>
      <option :value="posicao" v-for="(posicao, i) in posicoes" :key="i">{{posicao.cl}}</option>
    </select>
    <div id="container">

      <div id="posicao">
        <label>Posições dos veiculos</label>
         <MapaVeiculos :marcadores="posicoesVeiculos"></MapaVeiculos> 
      </div>

      <div id="paradas">
        <label>Parada da linha {{linha.cl}}</label>
        <MapaVeiculos :marcadores="paradasLinhas"></MapaVeiculos> 
      </div>

      <div id="linhas">
        <label>Todas as linhas</label>
        <ListaLinhas></ListaLinhas>
      </div>

      <div id="previsao">
        <label>Previsão de Chegada</label>
        <select class="linha-select" v-model="codigoParada" @change="previsaoHorario()">
          <option disabled selected>Selecione um ponto de parada</option>
          <option :value="paradaLinha.cp" v-for="(paradaLinha, i) in paradasLinhas" :key="i">{{paradaLinha.np}}</option>
        </select>
        <PrevisaoChegada :previsoes="previsoesChegada" ></PrevisaoChegada>
      </div>
      
    </div>
  </div>
</template>

<script>
import MapaVeiculos from './components/MapaVeiculos.vue';
import ListaLinhas from './components/ListaLinhas.vue';
import PrevisaoChegada from './components/PrevisaoChegada.vue';
import axios from 'axios';

export default {
    data() {
        return {
            linha: [],
            codigoParada: null,
            posicoes: [],
            posicoesVeiculos: [], 
            paradasLinhas: [],
            previsoesChegada: 0
        };
    },
    methods: {
      filterLinha() {
        const posicoesLinha = this.posicoes.filter( posicao => posicao.cl === this.id);
        console.log(posicoesLinha);
        return posicoesLinha;
      },
      async buscaparadas(){
        this.posicoesVeiculos = this.linha.vs;
        await axios.get(`https://aiko-olhovivo-proxy.aikodigital.io/Parada/BuscarParadasPorLinha?codigoLinha=${this.linha.cl}`)
        .then( response => this.paradasLinhas = response.data)
      },
      async previsaoHorario(){
        await axios.get(`https://aiko-olhovivo-proxy.aikodigital.io/Previsao?codigoParada=${this.codigoParada}&codigoLinha=${this.linha.cl}`)
        .then( response => this.previsoesChegada = response.data.p)
      }
      
    },
    components: {
      MapaVeiculos,
      ListaLinhas,
      PrevisaoChegada
    },

    async mounted(){
      await axios.post('https://aiko-olhovivo-proxy.aikodigital.io/Login/Autenticar?token=c1d48dbd98b78fe885415acd81e8d21c8d55a88769e1f88677fedd419101a560')
      .then(response => console.log(response));
      await axios.get('https://aiko-olhovivo-proxy.aikodigital.io/Posicao')
      .then(response => this.posicoes = response.data.l);
    }

}
</script>

<style>
*{
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
   color: #aed2a0;
}

label {
  font-size: 20px;
  color: #555;
}

#app{
  padding: 20px;
}

#container {
  display: grid;
  width: 100%;
  height: 500px;
  grid-gap: 20px;
  grid-template-areas: "po pd"
                       "linhas posicao";
  grid-template-rows:  1fr 1fr;
  grid-template-columns: 1fr 1fr;

}

#posicao {
  padding: 20px;
  border-radius: 8px;
  grid-area: po;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
#paradas {
  
  padding: 20px;
  border-radius: 8px;
  grid-area: pd;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
#linhas {
  overflow: auto;
  height: 500px;
  padding: 20px;
  border-radius: 8px;
  grid-area: linhas;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
#previsao {
  grid-area: posicao;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
} 
.linha-select{
  margin: 15px 0 15px 0;
  border: none;
  color: #555;
  font-size: 19px;
  background: #aed2a0;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
::-webkit-scrollbar-thumb {
  background: #888; 
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>