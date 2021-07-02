let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (array[i]%2 !== 0){
        array.splice(i, 1);
    }
}

console.log(array)
for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
        console.log(array[i]);
}
