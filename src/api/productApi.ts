import axios from "axios";

const API_URL = 'https://api.storerestapi.com'

export const getProducts = () => {
	return axios.get(`${API_URL}/products`).then(res => {
		console.log(res.data.data);
		return res.data.data
	})
}