/* --------------------------------- */
const string = "1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028";
function getMinMax(string) {
    let b = string.replace(/[^-0-9" ".]/gim, "");
    let array = b.split(' ');
    let max = Math.max.apply(null, array)
    let min = Math.min.apply(null, array);

    let o = {
        max: max,
        min: min
    };
    return o;
}
console.log(getMinMax(string));


/* --------------------------------- */
const x = 8;
function fibonacciSimple(x) {
    return x <= 1 ? x : fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}
console.log(fibonacciSimple(x));


/* --------------------------------- */
const res = [0, 1]
function fibonacciWithCache(x) {
    if (x <= 1)
        return res[x];
    if (!res[x])
        res[x] = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);

    return res[x];
}
console.log(fibonacciWithCache(x));



/* --------------------------------- */
const num = 11;
const cols = 3;
function printNumbers(max, cols) {
    let number = 0;
    let string = '';
    let str = Math.ceil((max + 1) / cols);
    let gor = str - 1;
    let vert = cols - cols * str + max;

    for (let i = 0; i < str; i++)
    {
        for (let j = 0; j < cols; j++)
        {
            number = i + Math.min(j, vert + 1) * str + Math.max(0, j - vert - 1) * (str - 1);
            string += number + ' ';
            if (i === gor && j === vert)
            {
                return string;
            }
        }
        string += '\n';
    }
}
console.log(printNumbers(num, cols));



/* --------------------------------- */
function rle(input) {
    let count = 1, i, prev;
    let arri = [];

    for (i = 1, prev = input[0]; i < input.length; i++)
        if (input[i] === prev)
            count++;
        else
        {
            arri.push(prev, count);
            count = 1;
            prev = input[i];
        }

    if (count === 1)
        arri.push(prev)
    else
        arri.push(prev, count)
    arri = arri.join("");
    return arri;
}
console.log(rle("AAAB"));
