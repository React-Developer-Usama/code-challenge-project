import axios from "axios";

const baseURL = "https://swapi.dev/api/";

const http = axios.create({ baseURL: `${baseURL}` });


function get(url: string) {
    return http.get(url)
}
export default { get };