function preloadData(key, value){
    const oldData = localStorage.getItem(key);
    if (!oldData){
        localStorage.setItem(key, value)
    }
}

function setData(key, value){
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
}

function getData(key){
    const data = JSON.parse(localStorage.getItem(key));
    return data;
}


export {
    preloadData,
    setData,
    getData
};