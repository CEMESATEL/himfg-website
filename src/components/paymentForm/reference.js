export const reference = (id) => { 
    const baseString = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let random = `HIMFGCURSOS${id}`;
    for (let i = 0; i < 10; i++) {
        random += baseString.charAt(Math.random() * baseString.length);
    }
    return random;
};