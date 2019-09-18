import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './index.less'

const routeList = [
  { path: '/', label: '首页' },
  { path: '/getstart', label: '新手入门' },
  { path: '/api', label: 'API' },
  { path: '/about', label: '关于' },
  { path: '/login', label: '登录' },
];

const Header = () => (
  
  <div className="navbar">
    <Link to="/" className="brand">
      <img src={ logo } className="logo" alt="logo" />
    </Link>
    <form className="search-form" action="https://www.baidu.com/?wd=">
      <input type="text" name="q" className="search-query"/>
    </form>
    <ul className="nav-list">
      {
        routeList.map(route => {
          return (
            <li key={ route.path }>
              <Link to={ route.path }>{ route.label }</Link>
            </li>
          )
        })
      }
    </ul>
  </div>
  
)

export default Header;
