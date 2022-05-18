export const titleFormat = (title) =>{
    const result = title.toString().toLowerCase()
    return capitalize(result)
}

const capitalize = (title) => {
    return title.charAt(0).toUpperCase() + title.slice(1); 
}
