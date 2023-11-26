<template>
    <div id="tab_aut">
     
       <div v-if="currentVenda" class="edit-form">
            <h3>Venda</h3>
            <form>
                <!-- Input ID -->
                <div class="form-group">
                    <label for="inputId">ID:</label>
                    <input type="number" v-model="currentVenda.venda.id" class="form-control" id="inputId" disabled>
                </div> 

                <!-- Input Valor -->
                <div class="form-group">
                        <label for="inputValor">Valor:</label>
                        <input type="number" v-model="currentVenda.venda.valor" class="form-control" id="inputValor">
                </div>

                <!-- Input Data Venda -->
                <div class="form-group">
                    <label for="inputDt_venda">Data Venda:</label>
                    <input type="number" v-model="currentVenda.venda.data_venda" class="form-control" id="inputDt_venda" disabled>
                </div>


                <!-- Input Forma Pagamento -->
                <!-- 
                <div class="form-group">
                    <label for="inputFormaPagamento">Forma Pagamento:</label>
                    <input type="text" v-model="venda.forma_pagamento" class="form-control" id="inputFormaPagamento" >
                </div>    
                -->

                <div class="form-group">
                    <label for="selectForma_Pagamento">Forma Pagamento:</label>
                    <select v-model="currentVenda.venda.forma_pagamento" class="form-control" id="selectForma_Pagamento" multiple>                                
                        <option value="pix">Pix</option>
                        <option value="cartaoCredito">Cartão no Credito</option>
                        <option value="cartaoDebito">Cartão no Débito</option>
                        <option value="cheque">Cheque</option>
                    </select>    
                </div> 

                <!-- CPF Comprador -->
                <div class="form-group">
                    <label for="inputCpf_comprador">CPF Comprador:</label>
                    <input type="text" v-model="currentVenda.venda.cpf_comprador" class="form-control" id="inputCpf_comprador">
                </div>

                <!-- CPF Vendedor -->
                <div class="form-group">
                    <label for="inputCpf_vendedor">CPF Vendedor:</label>
                    <input type="text" v-model="currentVenda.venda.endereco" class="form-control" id="inputCpf_vendedor">
                </div>

                <!-- Select de Veiculos -->
                <div class="form-group">
                    <label for="selectVeiculo">Veiculos:</label>
                    <select v-model="currentVenda.veiculos" class="form-control" id="selectVeiculo" multiple>                                
                        <option v-for="v in veiculos" :key ="v.codigo" v-bind:value="v">
                            {{ v.modelo }}
                            </option>
                    </select>
                    
                </div>                      
            </form>
            <button class="badge badge-success" @click="updateVenda">Salvar</button>
            <button class="badge badge-danger mr-2" @click="deleteVenda">Delete</button>
            <button class="badge badge-danger mr-2" @click="voltar">Voltar</button>

            
            <p>{{ message }}</p>
       </div>
       <div v-else>
            <br />
            <p>Por favor clique em uma Venda...</p>
        </div>

                                          
    </div>
 </template>
 <script>
 
     import VendaDataService from '../../services/VendaDataService'
     import VeiculoDataService from '../../services/VeiculoDataService'
 
     export default{
      name:'editVendas',
      data() {
             return {                
                 currentVenda: null,
                 message: '',
                 veiculos: []
             }
         },
         methods: {

            getVenda(id){

                VendaDataService.get(id)
                .then(response => {
                    console.log(response.data);
                    this.currentVenda = response.data;
                    
                })
                .catch(e=> {
                    console.log(e);
                })
            },
            listVeiculos(){
                console.log("Entrou list Venda (edit.vue)");

                VeiculoDataService.list().then(response =>{

                    console.log("Retorno do seviço VeiculoDataService.list", response.status);

                    this.veiculos = response.data;                                  

                }).catch(response => {

                // error callback
                alert('Não conectou no serviço VeiculoDataService.list');
                console.log(response);
                });               
            },
            updateVenda(){
                console.log("Entrou update Venda (edit.vue)");
                VendaDataService.update(this.currentVenda)
                .then(response => {
                    console.log('VendaDataService.update');
                    this.message = 'Venda alterado com sucesso !';
                })
                .catch(e =>{
                    console.log(e);
                })
            },
            deleteVenda(){
                console.log("Entrou delete Venda (edit.vue)");
                VendaDataService.delete(this.currentTutorial.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "vendas-list" });
                })
                .catch(e => {
                console.log(e);
                });
            },
            voltar(){
                this.$router.push({ name: "vendas-list" });
            }
         },
         mounted() {
            
            this.message = '';
            this.listVeiculos();
            this.getVenda(this.$route.params.id);
         }
     }
 </script>
    
 <style scoped>

    .edit-form {
    max-width: 300px;
    margin: auto;
    }
     
 </style>