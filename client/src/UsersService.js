import axios from "axios";

const url = 'api/users';

class UsersService {
    static getUsers() {
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

export default UsersService