![](./1.png)
浏览器默认60fps

layout -> paint -> composite：三步 必经  
layout -> paint -> composite：三步 非必经  
也有情况：不经过 paint 之间跳到 composite  

relayout 重排  repaint 重绘  
bgc, box-shadow, color, 只会触发重排  
width , height，display[none/block]  
bgc, box-shadow, color, 只会触发重绘  
width , height，display[none/block]  重排  

https://csstriggers.com/

故当我们绘制时，尽量避免修改layout  
如果元素在一个独立的图层上面，transform cursor 他们非常优秀 直接到达 最后一步composite  
css 动画的时候尽量考虑 transform

