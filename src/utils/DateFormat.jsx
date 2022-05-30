var longOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const dateFormat = (date) => {
    var formatedDate = new Date(date);
    return formatedDate.toLocaleDateString("es-ES", longOptions)
}