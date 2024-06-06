const strings = ["hello", "world"];
function upper(array) {
    const upperresult = [];
    for (let i = 0; i < array.length; i++) {
        upperresult.push(array[i].toUpperCase());
    }
    return upperresult;
}
const upperstrings = upper(strings);
console.log(upperstrings); 






