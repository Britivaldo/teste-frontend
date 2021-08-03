<template>
    <div class="linhas">
      <table>
        <tr>
          <th>Código</th>
          <th>Destino</th>
          <th>Origem</th>
        </tr>
        <tr v-for="(posicao, i) in this.posicoes" :key="i">
          <td>{{posicao.cl}}</td>
          <td>{{posicao.lt0}}</td>
          <td>{{posicao.lt1}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            posicoes: [],
        }
    },
    async mounted(){
        console.log(1);
        await axios.get('https://aiko-olhovivo-proxy.aikodigital.io/Posicao')
        .then(response => this.posicoes = response.data.l);
    }
    
}


</script>

<style>

table {
  margin: 15px 0 15px 0;
}
table td, th {
    border: 1px solid #ddd;
    padding: 8px;
    color: #71756f;
}

table tr:nth-child(even){background-color: #f2f2f2;}

table tr:hover {background-color: #ddd;}

table th {
  font-size: 18px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #aed2a0;
  color: #555;
}

</style>