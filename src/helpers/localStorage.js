export const setItem=(key, value)=>{
    localStorage.setItem(key, JSON.stringify(value))
}

export const getItem=(key)=>{
    let value = JSON.parse(localStorage.getItem(key))
    return value
}

export const removeItem=(key)=>{
    localStorage.removeItem(key)
}