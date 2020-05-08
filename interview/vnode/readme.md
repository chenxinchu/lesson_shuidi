```js
<div id="root">
  <span class="demo">This is a span.</span>
  <p>DOM</p>
</div>
```

DOM结构
```js
      div
      /  \
    span  p
     |    |
'This is 'DOM'
 a span.'
```

虚拟DOM 
```js
{
  tag:'div',
  attrs:{id:'root'},
  children:[
    {
      tag:'span',
      attrs:{className:'demo'},
      // 难点，把text内容看作子节点
      children:{
        tag:'undefined',
        text:'This is a span.'
      }
    },
    {
      tag:'p',
      attrs:{},
      children:{
        tag:'undefined',
        text:'DOM'
      }
    }
  ],
}
```