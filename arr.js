const arr = [
    { value: 30, name: 'Pen' },
    { value: 60, name: 'Dog' },
    { value: 135, name: 'Laptop' },
    { value: 590, name: 'Car' },
    ];

    let arrSum = arr.reduce(function(accumlator,item){
        return accumlator+item.value
    },0);

    console.log(arrSum)