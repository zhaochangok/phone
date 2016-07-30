// 解决ie无法获取类名的兼容函数：
  // getClass("one")：获取指定class名的元素的集合
  // one：指定的class名
  // 思路：1，判断浏览器是否支持类名的获取。document.getElementsByClassName
           function getClass(classname,father){
              var father=father||document;
              //var father=father?father:document;
           	if(document.getElementsByClassName){
           		return father.getElementsByClassName(classname)
             	}else{
                var all=father.getElementsByTagName('*')
                var arr=[];
                for (var i = 0; i < all.length; i++) {
                	if(checkClass(all[i].className,classname)){
                		arr.push(all[i]);
                	}
                }
                return arr;
           	 }
           }
           function checkClass(str,classname){
               var arr=str.split(" ");
               for (var i = 0; i < arr.length; i++) {
                if(arr[i]==classname){
                    return true;
                  }
               }
               return false;
           }



// 解决获取或设置元素的文本的兼容函数
  // getContent(obj,[val])
  // 思路：1，判断浏览器
  //       2，判断val参数是否存在
  //       3，获取文本或设置文本
  function getContent(obj,val){
     if(obj.textContent){
          if(val){
                obj.textContent=val;
          }else{
                obj.textContent;
          }
       }else{
          if(val){
                obj.innerText=val;
          }else{
                obj.innerText;
          }
     }
  }


// getStyle(obj,attr)
// 解决样式获取的兼容函数
// 思路：1，判断浏览器;
//       2，ie6-8 ：obj.currentStyle[attr];
//       3，w3c:getComputedStyle(obj,null)[attr];


function getStyle(obj,attr){
  if(obj.currentStyle){
          return obj.currentStyle[attr] 
  }else{
          return getComputedStyle(obj,null)[attr] 
  }
}

 //获取元素的兼容函数
    // $(".box")：类名。
    // $("#box")：ID名。document.getElementById();
    // $("li")：标签名。
    // $("<div>")：创建div
    // 函数   window.onload=function(){}
    //selector：表示选择器，与css的选择器一样。
    //father：父容器。
// 思路：1，判断参数的第一个字符 str.charAt(0)
//       2，根据字符执行相应的分支
//       3，返回相应的元素
   function $(select,content){
    if(typeof select=="string"){
          var content=content?content:document;
          var first=select.charAt(0);
          if(first=="."){
                return getClass(select.substring(1),content)
          }else if(first=="#"){
                return content.getElementById(select.substring(1))
          }else if(/^[a-z][a-z1-6]{0,8}$/.test(select)){
                return content.getElementsByTagName(select)
          }else if(/^<[a-z][a-z1-6]{0,8}>$/.test(select)){
                return document.createElement(select.slice(1,-1))
           }
      }else if(typeof select=="function"){
            window.onload=function(){
              select();
            }
      }
   }

function getChild(obj,type){
  type=type==undefined?true:type;
   var child=obj.childNodes;
   var arr=[];
   if(type){
    for (var i = 0; i < child.length; i++) {
      if(child[i].nodeType==1){
        arr.push(child[i])
      }
    };
    return arr;
   }else{
    for (var i = 0; i < child.length; i++) {
      if(child[i].nodeType==1||(child[i].nodeType==3&&child[i].nodeValue.replace(/^\s+|\s+$/g,""))){
        arr.push(child[i])
      }
    };
    return arr;
   }
}

// 获取子节点中的第一个：
   function getFirst(obj,type){
    return getChild(obj,type)[0];
   }

// 获取子节点中的最后一个：
   function getLast(obj,type){
    return getChild(obj,type)[getChild(obj,type).length-1];
   }
// 通过下标获取子节点中的一个：
   function getNum(obj,type,num){
    return getChild(obj,type)[num]
   }






  function beforeChild(obj,child){
     var first=getFirst(obj);
     obj.insertBefore(child,first)
  }

// insertAfter(obj,div,type)
// obj:要插入的一个位置
// ele：要插入的元素
// type:true:忽略文本
//      false：不能忽略文本。
//  思路：1，是否有下一个兄弟节点  ，若有.往下一个兄弟节点的前面插入元素。
//        2，没有兄弟节点 ，直接往父元素后边插入。

function insertAfter(obj,ele,type){
  type=type==undefined?true:type;
    var next=getNext(obj,type);
    var parent=obj.parentNode;
    if(next){
       parent.insertBefore(ele,next)
    }else{
      parent.appendChild(ele);
    }
}







  function checkHover (e,target) {if(getEvent(e).type=="mouseover"){
  return!contains(target,getEvent(e).relatedTarget ||
  getEvent(e).fromElement)&&!((getEvent(e).relatedTarget ||
  getEvent(e).fromElement)===target) }else{ return
  !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
  !((getEvent(e).relatedTarget || getEvent(e).toElement)===target) } }


function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }



 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }




   