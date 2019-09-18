import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { Link } from 'react-router-dom'
import './index.less'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      tagType: ''
    }
  }

  componentWillMount() {

  }

  getPostData(type) {
    return axios.get('https://cnodejs.org/api/v1/topics',{
      params: {
        tab: type
      }
    })
  }

  tabTypes(post) {
    const tab = post.tab
    const map = {
      'top': '置顶',
      'share': '分享',
      'good': '精华',
      'ask': '问答',
      'job': '招聘',
    }
    if(post.top) {
      return map['top']
    }else if (post.good){
      return map['good']
    }else{
      return map[tab];
    }
  }

  

}

export default Home;