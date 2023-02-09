function disableSortingButtons(){
    document.querySelector('#bubble-sort').disabled=true
   
}
function enableSortingButtons(){
    document.querySelector('#bubble-sort').disabled=false
   
}
function enableSizeSlider(){
    document.querySelector('#size_slider').disabled=false
   
}
function disableSizeSlider(){
    document.querySelector('#size_slider').disabled=true
   
}

function disableNewArrayBtn(){
    document.querySelector(".newarr_btn").disabled = true;
}


function enableNewArrayBtn(){
    document.querySelector(".newarr_btn").disabled = false;
}

// ^ disable and enable buttons functions
function swap(el1, el2) {
   
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}

function waitforme(time){
    return new Promise(resolve=>{
        setTimeout(()=>resolve(''),time)
    })
}
let time=260
let timeelement=document.querySelector('#timeinput')
timeelement.addEventListener('input',()=>{
    time=320-parseInt(timeelement.value)
})

let arrsize=document.querySelector('#size_slider');
console.log(arrsize.value)

arrsize.addEventListener('input',function(){
    console.log(arrsize.value);
     createNewArray(parseInt(arrsize.value))
})

let arr=[];
createNewArray()
function createNewArray(len=60){
    deleteChild()
    arr=[]
    for(i=0;i<len;i++){
        arr.push(Math.floor(Math.random()*250+1))
    }
    console.log(arr)
    const bars=document.querySelector('.bars');
    for(i=0;i<len;i++){
    const bar=document.createElement('div')
    bar.style.height=`${2*arr[i]}px`;
    bar.classList.add('bar')
    bar.classList.add(`bar[${i}]`)
    bars.appendChild(bar)
    }

   
}
function deleteChild(){
    const bars=document.querySelector('.bars')
    bars.innerHTML=''
}

const newarray=document.querySelector('.newarr_btn');
newarray.addEventListener('click',function(){
    console.log("working",arrsize.value);
    enableSortingButtons()
    enableSizeSlider
    createNewArray(arrsize.value)
})