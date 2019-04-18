import axios from 'axios'

const urls = {
    urlProducts: 'https://desafio.mobfiq.com.br'
}

const api = axios.create({
    baseURL: urls.urlProducts,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api