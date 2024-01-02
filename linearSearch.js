const linearSearch = (num, list) => {
    for(let i = 0; i < list.length; i++){
        if(list[i] == num){
            return num;
        }
    }
}

console.log(linearSearch(5,[1,2,3,4,5,6]), 'is present in list' );