function tampilkan(name, delay){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (name);
        }, delay);
    });
}

tampilkan("John", 1500)
    .then(result => {
        console.log(result);
        return tampilkan("Ed", 2000)
    })
    .then(result => {
        console.log(result);
        return tampilkan("jane", 500);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Error: ", error);
    });

(async () => {
    try {
        const result1 = await tampilkan("John", 1500);
        console.log(result1);
        const result2 = await tampilkan("Ed", 2000);
        console.log(result2);
        const result3 = await tampilkan("Jane", 500);
        console.log(result3);
    } catch (error) {
        console.log("Error: ", error);
    }
}

)()