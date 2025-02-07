function formatNames(name){
    let nLen = name.length;
    for (let i=0; i<nLen; i++){
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }

    return name;
}


console.log(formatNames(["alice", "bob", "charlie"]));