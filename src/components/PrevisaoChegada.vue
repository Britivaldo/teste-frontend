<template>
    <div>
        <div v-if="previsoes == null" > 
            <p>Olá! infelizmente não encontramos nenhuma previsão :/</p>
        </div>
        <div v-else-if="previsoes == 0"></div>
        <div v-else>
            <table>
            <tr>
                <th>linha</th>
                <th>horario</th>
            </tr>
            <tr v-for="(previsao, i) in previsoes.l" :key="i">
                <td>{{previsao.cl}}</td>
                <td>
                    <div v-for="(horario, j) in previsao.vs" :key="j">
                        {{horario.t}}
                    </div>
                </td>
                
            </tr>
            </table>
        </div> 
    </div>
</template>

<script>
export default {
    props: ['previsoes'],
    methods: {
        teste(){
            console.log(this.previsoes);
        }
    }

}
</script>

<style>
table {
  margin: 15px 0 15px 0;
}

p{
    text-align: center;
}
</style>