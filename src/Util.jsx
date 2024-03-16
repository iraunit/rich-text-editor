
function getSavedCode(tag){
    return localStorage.getItem([tag]) || ""
}

function saveCode(tag,code){
    localStorage.setItem([tag], code);
}

export { getSavedCode, saveCode };
