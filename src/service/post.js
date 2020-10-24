import axios from 'axios';
import store from 'store'
import { observable } from 'mobx'

class PostService {
    @observable posts=[]
    @observable pagination={page:1,size:20,count:0,pagecount:0}
    @observable post = {}

    list(page=1, size=20){
        console.log(page, size, '===============')
        axios.get('/api/post/'+'?page='+page+'&size='+size)
        .then(response =>{
            console.log(response)
            this.posts = response.data.posts;
            this.pagination = response.data.pagination
        })
        .catch(error =>{
            console.log("~~~~~~~~~~~~", error)
            this.errMsg = "异常"
        })
    }

    get(post_id) {
        // 判断 post_id
        axios.get('/api/post/'+post_id)
        .then(response =>{
            console.log(response)
            this.posts = response.data.posts;
        })
        .catch(error =>{
            console.log("~~~~~~~~~~~~", error)
            this.errMsg = "异常"
        })
    }



}

const postService = new PostService()
export default postService;