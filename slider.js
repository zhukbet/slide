const but_left=document.querySelector(".left")
const but_right=document.querySelector(".right")
const img=document.querySelector("img")
const conteiner=document.querySelector(".container")


let newId = 0
const id = () => newId + 'id_img_count' + ++newId

const obj = [{
    name: 'Oatmeal',
    _id: id(),
    type: '1',
    text: 'strawberry, milk',
    src: './imgObj/im1.jpg',
    text: "arr"
},
{
    name: 'Оmelet',
    _id: id(),
    type: '2',
    text: 'carrot, eggs',
    src: './imgObj/im2.jpg',
    text: "brr"
},
{
    name: 'breakfast',
    _id: id(),
    type: '3',
    text: 'juice, roll',
    src: './imgObj/im3.jpg',
    text: "crr"
},
{
    name: 'pumpkin soup',
    _id: id(),
    type: '1',
    text: 'pumpkin',
    src: './imgObj/im4.jpg',
    text: "drr"
},
{
    name: 'syrniki',
    _id: id(),
    type: '1',
    text: 'cottage cheese, milk',
    src: './imgObj/im5.jpg',
    text: "err"
},
{
    name: 'soup with nuts',
    _id: id(),
    type: '2',
    text: 'nuts',
    src: './imgObj/im6.jpg',
    text: "wrr",
},
{
    name: 'bouillon',
    _id: id(),
    type: '3',
    text: 'meat, potatoe',
    src: './imgObj/im7.jpg',
    text: "qrr"
},
{
    name: 'borsch',
    _id: id(),
    type: '1',
    text: 'red water, meat',
    src: './imgObj/im8.jpg',
    text: "rrr"
},
{
    name: 'soup',
    _id: id(),
    type: '2',
    text: 'meat, spice',
    src: './imgObj/im9.jpg',
    text: "hrr"
},
{
    name: 'bone soup',
    _id: id(),
    type: '2',
    text: 'bone, water',
    src: './imgObj/im10.jpg',
    text: "arr"
},
{
    name: 'french fries',
    _id: id(),
    type: '3',
    text: 'hot potatoe',
    src: './imgObj/im11.jpg',
    text: "arr"
},
{
    name: 'zucchini',
    _id: id(),
    type: '3',
    text: 'zucchini',
    src: './imgObj/im12.jpg',
    text: "arr"
}
]


 let count=1

conteiner.addEventListener('click',(e)=>{
  
  switch(e.target.className){
      case "right":
        ++count
        count>obj.length-1&&(count= 0)
        painfooter()
          break;
        case "left":
            --count
        count<0&&(count= obj.length-1)
        painfooter()
        break;
  }
  
img.src= obj[count].src

})
const footer=document.querySelector(".container_footer")
const count_minus = ()=>{

    if(count-1<0){
     return obj.length-1
    }else{
       return count-1 
    }
   

   
}

const count_plusMy=()=>{
    if(count+1>obj.length-1){
        return 0
    }else{
        return count+1 
    }
}




const count_plus=(num)=>{

    if(count+1>obj.length-1){
        return 0
    }else {
        return count+1 
    }
    
}

const count_plusS=(num)=>{
   switch(count+num){
       case obj.length: return 0
       case obj.length+1: return 1
   }
   return count+num
}

console.log(count_minus())
const painfooter=()=>{
footer.innerHTML=`
<img src=${obj[count_minus()].src}>
<img src=${obj[count].src}>
<img src=${obj[count_plusS(1)].src}>
<img src=${obj[count_plusS(2)].src}>
`


}
painfooter()





























