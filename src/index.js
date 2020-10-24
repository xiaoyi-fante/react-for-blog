import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './component/Login'
import Reg from './component/Reg';
import L from './component/List'
import { Post } from "./component/Post";
import { Menu, Icon } from 'antd'
import 'antd/lib/menu/style'

// 组件
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const App = () => (
  <Router>
    <div className="dropdownmenu">
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/"><Icon type="home" />主页</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">登录</Link>
        </Menu.Item>
        <Menu.Item key="reg">
          <Link to="/reg">注册</Link>
        </Menu.Item>
        <Menu.Item key="post">
          <Link to="/post">文章列表</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">关于</Link>
        </Menu.Item>
      </Menu>

      {/* <ul>
        <li><Link to="/">主页</Link></li>
        <li><Link to="/login">登录</Link></li>
        <li><Link to="/reg">注册</Link></li>
        <li><Link to="/post">文章列表</Link></li>
        <li><Link to="/about">关于</Link></li>
      </ul> */}
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/reg" component={Reg} />
      <Route exact path="/post" component={L} />
      <Route path="/post/:id" component={Post} />
    </div>
  </Router>
);

ReactDom.render(<App />, document.getElementById('root'))