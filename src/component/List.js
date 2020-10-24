import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import '../css/login.css'
import userService from '../service/user'
import {observer} from 'mobx-react'
import { message } from 'antd'
import 'antd/lib/message/style'
import inject from '../inject'
import {List} from 'antd'
import 'antd/lib/list/style'
import postService from '../service/post'

const service = postService;

@inject({service})  // Reg = inject(userService)(Reg)
@observer
export default class L extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.location)
        let params = new URLSearchParams(this.props.location.search)
        console.log(params)
        this.props.service.list(params.get('page', 1), params.get('size', 10))
    }


    render(){
        if (this.props.service.errMsg){
            message.error(this.props.service.errMsg, 3, () => { this.props.service.errMsg = "" })
        }

        const data = this.props.service.posts;
        if (data.length){
            return <List
            bordered
            dataSource={data}
            renderItem={item=>(<List.Item><Link to={'/post/' + item.id} >{item.title}</Link></List.Item>)}
            />
        }
        else {
            return <div> </div>
        }
    }
}