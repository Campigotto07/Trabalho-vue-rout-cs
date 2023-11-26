<template>
    <div id="tab_aut">
     

        <div class="col-md-6">
            <h4>Listagem de Veiculos</h4>
            <table class="table table-striped" >
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Placa</th>
                    <th scope="col">Ano</th>
                    <th scope="col">Cor</th>
                    <th scope="col">Qtd_passageiros</th>
                    <th scope="col">Modelo</th>
                    <th scope="col">Marca</th>
                    <th scope="col">Combustivel</th>
                    <th scope="col">Preco</th>
                    <th scope="col">Status</th>
                    <th scope="col">Tipo</th> 

                    <th scope="col">Alterar</th>
                    <th scope="col">Remover</th>
                </tr>                     
                <tbody>
                    <tr v-for="(v, indice) in veiculos" :key ="v.id" :class="{ active: indice == currentIndex }">
                            <td>{{v.id}}</td>
                            <td>{{v.placa}}</td>
                            <td>{{v.ano}}</td>
                            <td>{{v.cor}}</td>
                            <td>{{v.qtd_passageiros}}</td>
                            <td>{{v.modelo}}</td>
                            <td>{{v.marca}}</td>
                            <td>{{v.combustivel}}</td>
                            <td>{{v.preco}}</td>
                            <td>{{v.status}}</td>
                            <td>{{v.tipo.descricao}}</td>

                                                
                            <td><button v-on:click="setCurrentVeiculo(v, indice)" class="btn" type="button">Alterar</button></td>
                            <td><button v-on:click="remVeiculo(v, indice)" class="btn" type="button">Remover</button></td>
                    </tr>
                </tbody>
            </table>
     
        </div>

        <div class="col-md-6">
            <div v-if="currentVeiculos">
                    <h4>Veiculos</h4>
                    <div>
                    <label><strong>id:</strong></label> {{ currentVeiculos.id }}
                    </div>
                    <div>
                    <label><strong>Placa:</strong></label> {{ currentVeiculos.placa}}
                    </div>
                    <div>
                        <label><strong>Ano:</strong></label> {{ currentVeiculos.ano}}
                    </div>
                    <div>
                        <label><strong>Cor:</strong></label> {{ currentVeiculos.cor }}
                    </div>
                    <div>
                        <label><strong>Qtd_passageiros:</strong></label> {{ currentVeiculos.qtd_passageiros }}
                    </div>
                    <div>
                        <label><strong>Modelo:</strong></label> {{ currentVeiculos.modelo }}
                    </div>
                    <div>
                        <label><strong>Marca:</strong></label> {{ currentVeiculos.marca }}
                    </div>
                    <div>
                        <label><strong>Combustivel:</strong></label> {{ currentVeiculos.combustivel }}
                    </div>
                    <div>
                        <label><strong>Preco:</strong></label> {{ currentVeiculos.preco }}
                    </div>
                    <div>
                        <label><strong>Status:</strong></label> {{ currentVeiculos.status }}
                    </div>
                    <div>
                        <label><strong>Tipo:</strong></label> {{ currentVeiculos.tipo }}
                    </div>


                    <a class="badge badge-warning"
                    :href="'/veiculos/' + currentVeiculos.id"
                    >
                    Edit
                    </a>
            </div>
            <div v-else>
                <br />
                <p>Por favor clique em um Veiculo...</p>
                <router-link to="/addVeiculo" class="badge badge-success">Novo</router-link>                

            </div>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import VeiculoDataService from '../../services/VeiculoDataService'    
 
     export default{
      name:'listVeiculo',
      data() {
             return {
                veiculos: [],
                 currentVeiculos: null,
                 currentIndex: -1
             }
         },
         methods: {
            listarVeiculos(){

                VeiculoDataService.list().then(response =>{

                    console.log("Retorno do seviço list Veiculos", response.status);

                   this.veiculos = response.data;

                }).catch(response => {

                    // error callback
                    alert('Não conectou no serviço listVeiculos');
                    console.log(response);
                });
            },
            setCurrentVeiculo(veiculo, index){

                this.currentVeiculo = veiculo;
                this.currentIndex = index;
            },
            remVeiculo(veiculo, index){

                VeiculoDataService.delete(veiculo.id)
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });

            },
            refreshList() {
                this.listarVeiculos();
                this.currentTutorial = null;
                this.currentIndex = -1;
            }

         },
         mounted() {
            this.listarVeiculos();
         }
 
     }
 </script>
    
 <style scoped>

    .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
    }

     
 </style>