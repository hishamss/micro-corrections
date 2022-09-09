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

export const login = async () => {
    let jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    return jwt;
}