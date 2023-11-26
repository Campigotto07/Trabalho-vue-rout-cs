<template>
    <div class="submit-form">
      <div v-if="!submitted">   

        <!-- Input ID -->
        <div class="form-group">
            <label for="inputId">ID:</label>
            <input type="number" v-model="venda.id" class="form-control" id="inputId" disabled>
        </div> 

        <!-- Input Valor -->
        <div class="form-group">
                <label for="inputValor">Valor:</label>
                <input type="number" v-model="venda.valor" class="form-control" id="inputValor">
        </div>

        <!-- Input Data Venda -->
        <div class="form-group">
            <label for="inputDt_venda">Data Venda:</label>
            <input type="number" v-model="venda.data_venda" class="form-control" id="inputDt_venda" disabled>
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
            <select v-model="venda.forma_pagamento" class="form-control" id="selectForma_Pagamento" multiple>                                
                <option value="pix">Pix</option>
                <option value="cartaoCredito">Cartão no Credito</option>
                <option value="cartaoDebito">Cartão no Débito</option>
                <option value="cheque">Cheque</option>
            </select>    
        </div> 

        <!-- CPF Comprador -->
        <div class="form-group">
            <label for="inputCpf_comprador">CPF Comprador:</label>
            <input type="text" v-model="venda.cpf_comprador" class="form-control" id="inputCpf_comprador">
        </div>

        <!-- CPF Vendedor -->
        <div class="form-group">
            <label for="inputCpf_vendedor">CPF Vendedor:</label>
            <input type="text" v-model="venda.endereco" class="form-control" id="inputCpf_vendedor">
        </div>

        <!-- Select de Veiculos -->
        <div class="form-group">
            <label for="selectVeiculo">Veiculos:</label>
            <select v-model="venda.veiculos" class="form-control" id="selectVeiculo" multiple>                                
                <option v-for="v in veiculos" :key ="v.codigo" v-bind:value="v">
                    {{ v.modelo }}
                    </option>
            </select>
            
        </div>     
  
        <button @click="saveVenda" class="btn btn-success">Salvar</button>
        <router-link to="/vendas" class="btn btn-success">Voltar</router-link>                

      </div>
  
      <div v-else>
        <h4>Dados enviados com sucesso !</h4>
        <button class="btn btn-success" @click="newVenda">Novo</button>
        <router-link to="/vendas" class="btn btn-success">Voltar</router-link>
      </div>
    </div>
  </template>

<script>

    import CompradorDataService from '../../services/CompradorDataService'
    import VendedorDataService from '../../services/VendedorDataService'
    import VendaDataService from '../../services/VendaDataService'
    import VeiculoDataService from '../../services/VeiculoDataService'

    export default {
        name: "addVenda",
        data(){
            return {
                venda: {indice: '', 
                                    id: '', 
                                    valor: '',
                                    forma_pagamento: [],
                                    //data_venda: '', 
                                    cpf_comprador: '',                                                                        
                                    cpf_vendedor: '',  
                                    veiculos: []},
                submitted: false,
                veiculos: []
            }            
        },
        methods: {

            saveVenda(){
                

                var vend = jQuery.extend({}, this.venda);//clona o this.novo_venda e armazena na variavel venda. dessa forma alteracoes em this.novo_venda nao irao refletir em venda.
                var veic = jQuery.extend({}, this.venda.veiculo);//clona o this.novo_venda.veiculo                        
                vend.veiculo = veic;                                                

                if (vend.valor.trim().length > 0 &&  vend.cpf_comprador.trim().length > 0 && 
                vend.cpf_vendedor.trim().length > 0 ) {
                
                    VendaDataService.create(vend)
                    .then(response => {
                        
                        this.submitted = true;
                    })
                    .catch(e => {                        
                        alert("Erro ao tentar cadastrar venda. !!! " + e.message);

                    })

                }else{
                    alert('Formulário incompleto !!!');
                }

            },
            newVenda(){

                this.submitted = false;
                this.venda = {};
            },
            listVeiculos(){

                VeiculoDataService.list().then(response =>{

                console.log("Retorno do seviço VeiculoDataService.list", response.status);

                for(let v of response.data){

                    this.veiculos.push(v);
                }                  

                }).catch(response => {

                // error callback
                alert('Não conectou no serviço VeiculoDataService.list');
                console.log(response);
                });               
            }
        },
        mounted() {                        
            this.listVeiculos();
            
         }

    }

</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>