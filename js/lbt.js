function move(dom,prop,start,end,fn){
      
    var speed = 5;
     if(start > end){
         speed *= -1 ;
     }
     var val = start ;
 var t = setInterval(function(){
     val += speed;
    dom.style[prop] = val +'px';
    if(speed > 0 && val >= end || speed < 0 && val <= end){
        clearInterval(t);
        dom.style[prop] = end +"px";
        if(typeof(fn)== 'function'){
        fn();
    }
    }
   
 },10)
}
 var pictor = 1;
 var lbt = document.getElementById('lbt');
 var lbtn = document.getElementById('lbtn');
 var rbtn = document.getElementById('rbtn');
 var lbtwrp = document.getElementById('lbt-wrp');
 var activeDio = document.getElementsByClassName('active')[0];
 var dot = document.getElementsByClassName('dot');

 var flage =false;
 lbt.style.left = 0 +'px'
 lbtn.onclick = function(){
     if(flage == true){
         return
     }
     flage = true;
     var pevpictor = pictor ;
     if(pictor <5){
         pictor ++;
         move(lbt,'left',-(pevpictor - 1)*700,-(pictor-1)*700,function(){
            var t =setTimeout(function(){flage = false;},500)
         });
     
     }
     else{
         pictor = 1;
         move(lbt,'left',-4*700,-5*700,function(){
            var t =setTimeout(function(){flage = false;},500)
         });
     }
     activeDio.className = 'dot';
     activeDio = dot[pictor -1];
     activeDio.className = 'dot active'

 }
 rbtn.onclick = function(){
    
   if(flage == true){
       return
   }
   var pevpictor = pictor ;
   flage = true;
     if(pictor >1){
         pictor --;
         move(lbt,'left',-(pevpictor - 1)*700,-(pictor-1)*700,function(){
             var t = setTimeout(function(){
                 flage = false
             })
         }
         );
         
     }
     else{
         pictor = 5;
         move(lbt,'left',-5*700,-4*700,function(){
             var t = setTimeout(function(){
                 flage = false;
             },500)
         });
         
     }
     activeDio.className = 'dot';
     activeDio = dot[pictor -1];
     activeDio.className = 'dot active';
 }
 // dot[0].onclick = function(){
 //     lbt.style.left = 0 + 'px'
 //     pictor = 1;
 //     activeDio.className = 'dot'
 //     activeDio = dot[0];
 //     activeDio.className = 'dot active'
 // }
 // dot[1].onclick = function(){
 //     lbt.style.left = -700 + 'px'
 //     pictor = 2;
 //     activeDio.className = 'dot'
 //     activeDio = dot[1];
 //     activeDio.className = 'dot active'
 // }
 // dot[2].onclick = function(){
 //     lbt.style.left = -1400 + 'px'
 //     pictor = 3;
 //     activeDio.className = 'dot'
 //     activeDio = dot[2];
 //     activeDio.className = 'dot active'
 // }
 function fn(i){
     (function(i){
         lbt.style.left = -i*700 + 'px' 
          pictor = i;
       activeDio.className = 'dot'
       activeDio = dot[i];
       activeDio.className = 'dot active'
     }(i))
 }
 function fn(dom,i){
     dom.onclick = function(){
         lbt.style.left = -i*700 + 'px' 
          pictor = i+1;
       activeDio.className = 'dot'
       activeDio = dot[i];
       activeDio.className = 'dot active'
     }
 }
 for(var i = 0;i<dot.length;i++){
     fn(dot[i],i);
 }
 
 var client =null;
 //自动浏览
 client = setInterval(function(){
     lbtn.click();
 },3000)
 //当鼠标移进目标，取消自动浏览
 lbtwrp.onmouseenter = function(){
     clearInterval(client);
 }
 //当鼠标移出目标，开启自动浏览。
 lbtwrp.onmouseleave = function(){
     client = setInterval(function(){
         lbtn.click();
     },3000)
 }