import axios from 'axios'

//const BASE_URL='https://jsonplaceholder.typicode.com'

const BASE_URL='https://picsum.photos'

//const getPost=axios.get(BASE_URL+'/posts')
const getPost=axios.get(BASE_URL+'/v2/list?page=9&limit=6')

const getPostById=(id)=>axios.get(BASE_URL+'/id/'+id+'/info')

const getPostPhoto=axios.get(BASE_URL+'/photos')

export default{
       getPost,getPostPhoto,getPostById
}