import axios from "axios";

const url = '/api/qrs/';

class QrService {
    static getQr(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url + id, {
                    timeout: 30000
                });
                const data = res.data;
                resolve(data);

            }
            catch (err) {
                reject(err)
            }
        })
    }
    static getQrs() {
        return new Promise(async (resolve,reject) => {
            try {
                const res = await axios.get(url,{
                    timeout: 30000});
                const data = res.data;
                resolve(data);

            }
            catch(err) {
                reject(err)
            }
        })
    }
    static putQr() {
        return axios.post(url,user)
    }
}

export default QrService