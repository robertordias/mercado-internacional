import api from "./api";

export const uploadFiles = async (files) => {
    let response;
    try{
        const config = { headers: { 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'} }
        response = await api.post('/api/files', files, config );
    }catch(e){
        response = e?.response;
    }

    return response;
}

export const getFiles = async () => {
    let response;
    try{
        const config = { headers: { 'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'} }
        response = await api.get('/api/files', config );
    }catch(e){
        response = e?.response;
    }

    return response;
}