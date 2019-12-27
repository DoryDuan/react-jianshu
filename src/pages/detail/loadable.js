import Loadable from 'react-loadable';
import React from 'react'

const LoadableComponent = Loadable({
  loader: () => import('./'),//需要异步加载的组件，当前目录下index.js文件
  loading (){//这是一个组件，加载组件的过程中临时显示的内容
    return <div>加载中</div>
  },
});

//导出一个组件
export default () =><LoadableComponent/>;
