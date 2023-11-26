
import http from "../http-common";

class VeiculoDataService {

    async list(){

        console.log('VeiculoDataService.list: ');
        return await http.get(`/veiculo/list`);
    }

    async update(data){

        console.log('VeiculoDataService.update: ');
        return await http.post(`/veiculo/update`);
    }

    async get(cpf){

        console.log('VeiculoDataService.get: ', id);
        return await http.get('/veiculo/'+id);
    }

    
    async delete(id){

        console.log('VeiculoDataService.delete: ', id);
        return await http.delete(`/veiculo/delete/`+id);
    }

    async create(data){

        console.log('VeiculoDataService.create: ', data);
        return await http.post(`/veiculo/store`, data);
    }  


 


}

export default new VeiculoDataService();