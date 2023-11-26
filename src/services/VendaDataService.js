
import http from "../http-common";

class VendaDataService {

    async get(id){

        console.log('VendaDataService.get: ', id);
        return await http.get('/comprador/'+id);
    }

    async list(){

        console.log('VendaDataService.list: ');
        return await http.get(`/comprador/list`);
    }

    async delete(id){

        console.log('VendaDataService.delete: ', id);
        return await http.delete(`/comprador/delete/`+id);
    }

    async update(data){

        console.log('VendaDataService.update: ', data);
        return await http.post(`/comprador/update`, data);
    }
    
    async create(data){

        console.log('VendaDataService.create: ', data);
        return await http.post(`/comprador/store`, data);
    }  

    
 
}

export default new VendaDataService();
