import axios from "axios";

const url = 'api/places';

class PlacesService {
    static getPlace(placeid) {
        return axios.get(url,{params:{placeid: placeid}}).catch((error) => {
            if(error.response)
            {
                return error.response
            }
            else {
                return {"Error":error.message}
            }
        })
    }


    static getPlaces() {
        return new Promise(async (resolve,reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data);

            }
            catch(err) {
                reject(err)
            }
        })
    }
}

export default PlacesService