import axios from "axios";

const url = 'api/auths';

class AuthService {
    //post

    static postAuth(credentials) {
        return axios.post(url,credentials).catch((error) => {
            if(error.response)
            {
                return error.response
            }
            else {
                return {"Error":error.message}
            }
        })
    }

}

export default AuthService