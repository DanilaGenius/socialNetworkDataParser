import translit from "./translit";

export default function collectFilters(filters) {
    let result = {};
    filters.forEach(e => {
        const id = translit(e)
        const checkBoxElem = document.querySelector(`#${id}`)
        const checkBoxElemValue = checkBoxElem.checked
        const checkBoxElemId = checkBoxElem.id
        result[checkBoxElemId] = checkBoxElemValue
    })
    
    return result
}