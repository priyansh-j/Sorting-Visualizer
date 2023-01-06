async function insertion_sort(){
    const ele=document.querySelectorAll('.bar')
    for(let i=1;i<ele.length;i++){
        const key=ele[i].style.height
        let j=i-1;
        await waitforme(time)
        while(j>=0 && parseInt(key)<parseInt(ele[j].style.height)){
           
            ele[j].style.background='blue'
            ele[j+1].style.height=ele[j].style.height
            await waitforme(time)

            ele[j].style.background='blueviolet'
            j--;
            await waitforme(time)
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
           
        }
        ele[j+1].style.height=key;
        
    }
}

const insertionsortbtn=document.querySelector('#insertion-sort')
insertionsortbtn.addEventListener('click',async function(){
  
    disableSortingButtons()
    disableSizeSlider()
    disableNewArrayBtn()
    await insertion_sort()
    enableNewArrayBtn()
    enableSizeSlider()
    enableSortingButtons()
})