import './styles/main.css'
import './styles/main.styl'
import './styles/font.css'
console.log('HiChenCC')

let $body = document.querySelector('body')

let $fontTitle = document.createElement('h1')
$fontTitle.innerHTML = 'hichencc.com'
$body.append($fontTitle)

let $fontWrapper = document.createElement('div')

let $font = document.createElement('i')
$font.className = 'iconfont'
$font.innerHTML = '&#xe609;'

$fontWrapper.append($font)
$body.append($fontWrapper)