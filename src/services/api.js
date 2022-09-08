import axios from 'axios';

export const testAPI = async () => {
    try {
        const {data } = await axios.get ("https://jsonplaceholder.typicode.com/users")
        return data;
    }catch (e) {
        console.log("err in testAPI", e);
        return []
    }
}