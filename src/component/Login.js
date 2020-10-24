import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import '../css/login.css'
import userService from '../service/user'
import { observer} from 'mobx-react'
import { message } from 'antd'
import 'antd/lib/message/style'
import inject from '../inject'


// export default class Login extends React.Component{
//     render() {
//         return <_Login service={userService} />
//     }
// }

const service = userService

@inject({service})
@observer
export default class Login extends React.Component {
    handleClick(event){
        event.preventDefault();
        const fm = event.target.form
        let email = fm[0].value
        let pwd = fm[1].value

        this.props.service.login(email, pwd)
    }

    render() {
        if (this.props.service.succeed){
            return <Redirect to="" />
        }

        if (this.props.service.errMsg){
            message.error(this.props.service.errMsg, 1, () => {this.props.service.errMsg=""});
        }

        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text" placeholder="邮箱" />
                        <input type="password" placeholder="密码" />
                        <button onClick={this.handleClick.bind(this)}>登录</button>
                        <p className="message">还未注册？<Link to="/reg">请注册</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}