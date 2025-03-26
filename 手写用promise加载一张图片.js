function loadImg(src) {
    const p = new Promise(
         ( resolve , reject ) => {
            const img = document.createElement('img')
             img.onload = () => {
                resolve(img)
             }
             img.onerror = () => {
                 reject(new Error(`图片加载失败${src}`))
             }
             img.src = src
         }
     )
     return p
 }

 const url = 'xxx'
 loadImg(url).then( img => {
     console.log(img.width)
     return img
 } ).then( img => {
     console.log(img.height)
 } ).catch( ex => console.error(ex) )
