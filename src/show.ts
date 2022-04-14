import axios from 'axios'
import renderTVShowDetails from './components/TVShowDetails'

import { API_URL } from './config'
import { getTvShow } from './modules/TVShow'
import './style.css'

const $ = document.querySelector.bind(document)

const searchTVShow = async (id: string) => {
    const http = axios.create({
        baseURL: API_URL,
    })

    const response = await http.get(`/shows/${id}`)
    if(response.status == 200){
        const { data } = response
        const show = getTvShow(data)
        const app = <HTMLDivElement>$('#app')
        renderTVShowDetails(show, app)
    } else {
            
    }
}

const params = new URLSearchParams(document.location.search)
const id = params.get('id')
if(id){
    searchTVShow(id)
}