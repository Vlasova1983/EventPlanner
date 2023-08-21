export const onClear = (event) => {   
  const inputList = document.querySelectorAll('input');
  
  for (let i = 0; i < inputList.length; i++){

    if (event.target.id === inputList[i].id) {
      inputList[i].value=''
    }    
  }     
}