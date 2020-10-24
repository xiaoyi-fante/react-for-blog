import axios from 'axios';
import store from 'store'
import { observable } from 'mobx'


class UserService {
    @observable succeed = false;
    @observable errMsg = "";

    login(email, pwd) {
        console.log("userservice", email, pwd);
        axios.post('/api/user/login', {
            email: email,
            password: pwd
        })
            .then(response => { // 2xx
                console.log(response)
                store.get('token', response.data.token, new Date().getTime() + (8 * 3600 * 1000)); // token持久化
                this.succeed = true;
            })
            .catch(error => {
                console.log('~~~~~~~~~~~~~',error)
                this.errMsg = "登录错误，请检查用户名、密码"
            });
    }

    reg(name, email, pwd) {
        console.log("userservice", name, email, pwd);
        axios.post('/api/user/reg', {
            name: name,
            email: email,
            password: pwd
        })
            .then(response => { // 2xx
                console.log(response)
                store.get('token', response.data.token, new Date().getTime() + (8 * 3600 * 1000)); // token持久化
                this.succeed = true;
            })
            .catch(error => {
                console.log(error)               
                this.errMsg = "注册失败，请稍后再试"
            });
    }
}
// 解决单一实例的问题，也就是login和reg中应该共用同一个UserService
const userService = new UserService()
export default userService
