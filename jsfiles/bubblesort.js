async function bubble_sort(){
    const ele=document.querySelectorAll('.bar')
    for(let i=0;i<ele.length-1;i++){
       for(let j=0;j<ele.length-i-1;j++){
           ele[j].style.background='blue'
           ele[j+1].style.background='blue'
           if(parseInt(ele[j].style.height)>parseInt(ele[j+1].style.height)){
               await waitforme(time)
               swap(ele[j],ele[j+1])
           }
           ele[j].style.background='blueviolet'
           ele[j+1].style.background='blueviolet'
       }
       ele[ele.length-1-i].style.background = 'green';
      
    }
    ele[0].style.background = 'green';
}
const bubblesortbtn=document.querySelector('#bubble-sort')
bubblesortbtn.addEventListener('click',async function(){
    disableSortingButtons()
    disableSizeSlider()
    disableNewArrayBtn()
    await bubble_sort()
    enableNewArrayBtn()
    enableSizeSlider()
    enableSortingButtons()
})