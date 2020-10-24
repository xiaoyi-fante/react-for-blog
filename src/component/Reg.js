import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import '../css/login.css'
import userService from '../service/user'
import {observer} from 'mobx-react'
import { message } from 'antd'
import 'antd/lib/message/style'
import inject from '../inject'
// export default class Reg extends React.Component{
//     render() {
//         return <_Reg service={userService} />
//     }
// }

// 无状态组件
// function reg(props) {
//     return <>;
// }

const service = userService;

@inject({service})  // Reg = inject(userService)(Reg)
@observer
export default class Reg extends React.Component {
    handleClick(event){
        event.preventDefault();
        const fm = event.target.form
        let name = fm[0].value
        let email = fm[1].value
        let pwd = fm[2].value

        this.props.service.reg(name, email, pwd)
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
                        <input type="text" placeholder="姓名" />
                        <input type="text" placeholder="邮箱" />
                        <input type="password" placeholder="密码" />
                        <input type="password" placeholder="确认密码" />
                        <button onClick={this.handleClick.bind(this)}>注册</button>
                        <p className="message">如果已经注册 <Link to="/login">请登录</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}