//topnav开始
var topnavyiji=$(".topnav-yiji"); 
var topnaverji=$(".topnav-erji");
var t2=$(".t1");
for(var i=0;i<topnavyiji.length;i++){
	topnavyiji[i].index=i;
	topnavyiji[i].onmouseover=function(){	
		topnaverji[this.index].style.display="block";
		topnaverji[this.index].style.color="#fff";
		topnavyiji[this.index].style.background="#fff";
		topnavyiji[this.index].style.color="#25b2fe";
		t2[this.index].style.color="#25b2fe";
	}
	topnavyiji[i].onmouseout=function(){

		topnaverji[this.index].style.display="none";
		topnaverji[this.index].style.color="";
		topnavyiji[this.index].style.background="";
		topnavyiji[this.index].style.color="";
		t2[this.index].style.color="";
	}
}
//topnav结束
//srk开始
var srk=$('.srk')[0];
	srk.onfocus=function(){
		if(this.value=="包月流量包"){
			this.value="";
			srk.style.boxShadow="1px 1px 2px #25b2fe"; 
		}
	}
	srk.onblur=function(){
		if(this.value==""){
			this.value="包月流量包";
			srk.style.boxShadow="";
		}
	}

//srk结束
//Phone开始
var Pnumber=$('.Pnumber')[0];
	Pnumber.onfocus=function(){
		if(this.value=="请输入手机号码"){
			this.value="";
		}
	}
	Pnumber.onblur=function(){
		if(this.value==""){
			this.value="请输入手机号码";
		}
	}


//Phone结束
//nav开始
var nav=$(".nav")[0];
var dh2=$(".dh2",nav);
var dh1=$(".dh1",nav);
var erji=$(".erji",nav);
for(var i=0;i<dh2.length;i++){
	dh2[i].index=i;
	dh2[i].onmouseover=function(){
		dh2[this.index].style.background="#f3f3f3";
		dh2[this.index].style.color="#0085d0";
		dh1[this.index].style.background="#f3f3f3";
		dh1[this.index].style.color="#0085d0";
		erji[this.index].style.display="block";
	};
    dh2[i].onmouseout=function(){
    	dh2[this.index].style.background="";
		dh2[this.index].style.color="";
		dh1[this.index].style.background="";
		dh1[this.index].style.color="";
		erji[this.index].style.display="none";
    }
}

//nav结束
//banner开始
var win=$(".banner")[0];
var img=$("a",win);
var left=$(".btn_left")[0];
var right=$(".btn_right")[0];
var bottom=$(".bottom")[0];
var box=$(".box",bottom);
var num=0;
var next=0;
var flag=true;
var widths=parseInt(getStyle(img[0],"width"));
	for (var i = 0; i < img.length; i++) {
		if(i==0){
	         continue;
		}
		img[i].style.left=740+"px";
	};
	var t=setInterval(move,2000)
	  function move(){
	     next++;
	     if(next==img.length){
	     	next=0;
	     }
	     box[num].style.background="#ccc";
	     box[next].style.background="#e22386"
	     img[next].style.left=740+"px";
	     animate(img[num],{left:-740});
	     animate(img[next],{left:0},function(){
	     	flag=true;
	     });
	     num=next;
	  }
	function moveL(){
		 next--;
	     if(next<0){
	     	next=img.length-1;
	     }
	     img[next].style.left=-740+"px";
	     box[num].style.background="#ccc";
	     box[next].style.background="#e22386";
	     animate(img[num],{left:740});
	     animate(img[next],{left:0},function(){
	     	flag=true;
	     });
	     num=next;
	}
	win.onmouseover=function(){
		clearInterval(t)
	}
    win.onmouseout=function(){
   	    t=setInterval(move,2000);
   }
  left.onclick=function(){
  	if(flag){
  		flag=false;
  		moveL()
  	}
  }
  right.onclick=function(){
  	if(flag){
      flag=false;
      move();
    }
  }

for (var i = 0; i < box.length; i++) {
     box[i].index=i;
     box[i].onclick=function(){
        if(num==this.index){
          return;
        }
        img[this.index].style.left=740+"px";
        box[num].style.background="#ccc";
        box[this.index].style.background="#e22386";
        animate(img[num],{left:-740})
        animate(img[this.index],{left:0})
        next=this.index;
        num=this.index;
     }
};
//banner结束

var win=$(".win")[0];
var imgbox=$(".imgbox")[0];
var as=$(".imgbox_box");
var flag=true;
var left=$(".btnl",win)[0];
var right=$(".btnr",win)[0];
var wins=parseInt(getStyle(as[0],"width"))+10;
    imgbox.style.width=wins*as.length+"px";
var q=setInterval(moveQ,2000)
function moveQ(){
	animate(imgbox,{left:-wins},function(){
		var first=getFirst(imgbox);
        imgbox.appendChild(first);
        imgbox.style.left=0;
        flag=true;
	})
}
 function moveW(){
 	    var last=getLast(imgbox);
        beforeChild(imgbox,last);
        imgbox.style.left=-wins+"px";
        animate(imgbox,{left:0},function(){
        	flag=true;
        })
 }
win.onmouseover=function(){
       clearInterval(q)
 }
win.onmouseout=function(){
 	   q=setInterval(moveQ,2000)
 }
left.onclick=function(){
	if(flag){
      flag=false;
      moveW()
	}
}
right.onclick=function(){
	if(flag){
		flag=false;
		moveQ()
	}
}



//固定定位开始
var gddw=$(".gddw")[0];
var kflogo=$(".kflogo");
for(var i=0;i<kflogo.length;i++){
	kflogo[i].index=i;
	kflogo[i].onmouseover=function(){
        animate(kflogo[this.index],{right:32},200,Tween.Linear);
	};
	kflogo[i].onmouseout=function(){
		animate(kflogo[this.index],{right:-30},200,Tween.Linear);
	}
}
//固定定位结束
// //按需加载
var foot1=$(".foot1");
document.onscroll=function(){
var tops=document.body.scrollTop||document.documentElement.scrollTop;
var ch=document.documentElement.clientHeight;
	for(var i=0;i<foot1.length;i++){
		if(foot1[i].offsetTop<=tops+ch){
			var imgs=$("img",foot1[i]);
			for(var j=0;j<imgs.length;j++){
				var src=imgs[j].getAttribute("data-src");
				imgs[j].src=src;
			}
		}
	}
}







