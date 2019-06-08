import axios from "axios";

const url = 'api/menus';

class MenusService {
    //post

    static getMenu(placeid) {
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

}

export default MenusService