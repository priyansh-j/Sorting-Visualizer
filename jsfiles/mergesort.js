
async function merge(ele, low, mid, high){
    console.log('In merge()');
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
     
        await waitforme(time);
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
       
        await waitforme(time);
        ele[mid + 1 + i].style.background = 'cyan';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitforme(time);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
       
        await waitforme(time);
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lightgreen';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
       
        await waitforme(time);
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
       
        await waitforme(time);
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function merge_sort(ele, l, r){
    if(l >= r){
      
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await merge_sort(ele, l, m);
    await merge_sort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector("#merge-sort");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingButtons()
    disableSizeSlider()
    disableNewArrayBtn()
    await merge_sort(ele,l,r);
  
    enableNewArrayBtn()
    enableSizeSlider()
    enableSortingButtons()
});