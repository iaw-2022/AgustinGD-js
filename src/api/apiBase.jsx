import axios from "axios";

export default axios.create({
    baseURL: "https://api-granja-agustingd.herokuapp.com/api"
})