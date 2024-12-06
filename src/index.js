import '@css/style.css'
import Post from '@model/post'
import json from '@assets/data'
import logo from '@assets/icon-square-big.png'
import * as $ from 'jquery'

console.log(logo)

const post = new Post('Webpack Post Title', logo)

console.log('Post to string:', post.toString())
console.log('JSON:', json)
$('pre').html(post.toString())
