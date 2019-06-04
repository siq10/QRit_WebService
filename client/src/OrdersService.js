import axios from "axios";

const url = 'api/orders';

class OrdersService {
    static getOrders() {
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

export default OrdersService