import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {observer} from 'mobx-react'
import { message } from 'antd'
import 'antd/lib/message/style'
import inject from '../inject'
import {Card} from 'antd'
import 'antd/lib/card/style'
import postService from '../service/post'
import Post from '../service/post'

const service = postService;

@inject({service})  // Reg = inject(userService)(Reg)
@observer
export default class L extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.match.params.id)
        this.props.service.get(this.props.match.params.id)
    }


    render(){
        if (this.props.service.errMsg){
            message.error(this.props.service.errMsg, 3, () => { this.props.service.errMsg = "" })
            return <div></div>
        }

        let post = this.props.service.post;
        return <Card title={post.title}>
            <p>{post.author} {post.postdate}</p>
            <p>{post.content}</p>
            <p></p>
        </Card>
    }
}