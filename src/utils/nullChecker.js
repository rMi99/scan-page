/**
 * 
 * @param {Object|Array} array 
 * @param {String} element 
 * @param {*} falseValue 
 * @returns {*}
 */
export default function nullCheck(array,element,falseValue=''){
    return array[element] ? array[element] : falseValue
}