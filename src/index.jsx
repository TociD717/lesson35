import '@babel/polyfill'
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import '@css/style.css'
import Post from '@model/post'
import json from '@assets/data'
import logo from '@assets/icon-square-big.png'
import * as $ from 'jquery'
import './less/style.less'
import './sass/style.scss'
import './sass/style.sass'
import '@model/lodash'

async function start() {
  return await new Promise((r) => setTimeout(() => r('Async done.'), 2000))
}

const App = () => (
<div className="container">
<h1>Webpack training</h1>
<div className="logo"></div>
<pre/>
<div className="less-demo">
    <h2>Less</h2>
</div>
<div className="scss-demo">
    <h2>Scss</h2>
</div>
<div className="sass-demo">
    <h2>Sass</h2>
</div>
</div>
)
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<App />)

start().then((res) => console.log(res))

console.log(logo)

const post = new Post('Webpack Post Title', logo)

console.log('Post to string:', post.toString())
console.log('JSON:', json)
$('pre').html(post.toString())
