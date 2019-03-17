function writeCode(prefix,code,fn){
    let codeContainer = document.querySelector('#code')
    let styleContainer = document.querySelector('#styleTag')
    let n=0
    let id = setInterval(()=>{
        n+=1
        codeContainer.innerHTML = prefix + code.slice(0,n)
        styleContainer.innerHTML = prefix + code.slice(0,n)
        codeContainer.scrollTop = codeContainer.scrollHeight
        if(n >= code.length){
            window.clearInterval(id)
            fn && fn.call()
        }    
    },40)
}

var result = `
/*
*开始画吧！
*先画一个鼻子吧
*/
.nose{
    width:0px;
    height:0px;
    border: 11px solid;
    border-width:10px 12px;
    border-color:black transparent transparent transparent;
    position:absolute;
    left:50%;
    top:28px;
    margin-left:-11px;
    border-radius:11px;
}
/*
*然后是皮的眼睛
*/
.eye{
    width:49px;
    height:49px;
    background:#2E2E2E;
    position:absolute;
    border-radius:50%;
    border:2x solid black;
}
.eye::before{
    content:'';
    display:block;
    height:24px;
    width:24px;
    background:white;
    position:absolute;
    border-radius:50%;
    left:7px;
    top:4px;
}
/*
*安放他躁动的左眼
*/

.eye.Left{
    right:50%;  
    margin-right:90px;
}
/*
*接着是右眼
*/
.eye.Right{
    left:50%; 
    margin-left:90px;
}
/*
*红嘟嘟的小脸蛋也安排上吧！
*/
.face{
    width:68px;
    height:68px;
    background:rgb(252,13,28);
    border-radius:50%;
    position:absolute;
}
/*
*右边开始画吧！
*/
.face.right{
    right:50%;
    border:2px solid black;
    margin-right:113px;
    margin-top:85px;
}
/*
*然后是左边
*/
.face.left{
    left:50%;
    border:2px solid black;
    margin-left:116px;
    margin-top:85px;
}

/*
*已经完成一大半了！
*接着画上嘴唇
*/
.upperLip{
    height:20px;
    width:80px;
    border:3px solid black;
    position:absolute;   
    background:rgb(254,228,51)
}
/*
*先画左边的小胡子吧！
*/
.upperLip.right{
    right:50%;
    margin-top:55px;
    border-bottom-left-radius:40px 25px;
    border-top:none;
    border-right:none;
    transform:rotate(-20deg);
}
/*
*然后是右边
*/
.upperLip.left{
    left:50%;
    margin-top:55px;
    border-bottom-right-radius:40px 25px;
    border-top:none;
    border-left:none;
    transform:rotate(20deg);  
}
/*
*最后一步了！
*嘴巴画出来就大功告成啦！
*/
.wrapper-lowerlip{
    position:absolute;
    bottom:0px;
    left:50%;
    transform:translateX(-50%); 
    height:106px;
    width:300px;
    overflow:hidden;
}
.lowerlip{
    width:140px;
    height:1000px;
    background:rgb(153,5,19);
    border-radius:70px /300px;
    border:2px solid black;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%); 
    overflow:hidden
}
.lowerlip::after{
    content:'';
    position:absolute;
    bottom:-20px;
    width:90px;
    height:100px;
    background:rgb(252,74,98);
    left:50%;
    transform:translate(-50%);
    border-radius:150px/118px
}
/*
*哈哈哈看到最后的盆友
*这只皮送给你啦！
*/`


writeCode('', result ,()=>{
    console.log(2)
})