function commonEnd(a, b) {
    if (!a || a.length === 0 || !b || b.length === 0) {
        return false;
    }

    f1 = a[0];
    f2 = b[0];

    if (f1 == f2) {
        return true;
    }


    l1 = a.slice(-1)[0];
    l2 = b.slice(-1)[0];

    if (l1 == l2) {
        return true;
    }

    return false;

}

function endsMeet(values, n) {

    if (!values || values.length === 0) {
        return [];
    }

    if (n <= 0) {
        return [];
    }

    if (values.length < n) {
        return [];
    }

    let a1 = values.slice(0, n);
    let a2 = values.slice(-n);
    return a1.concat(a2);
}

function difference(numbers) {

    if (!numbers || numbers.length === 0) {
        return undefined;
    }

    var largest = numbers[0];
    var smallest = numbers[0];

    for (i = 0; i < numbers.length; i++) {

        if (isNaN(numbers[i])) {
            return undefined;
        }
        if (largest < numbers[i]) {
            largest = numbers[i];
        }

        if (smallest > numbers[i]) {
            smallest = numbers[i];
        }
    }

    return largest - smallest;

}

function max(number) {
    if (!number || number.length === 0) {
        return undefined;
    }

    var length = number.length;

    if (length < 3) {
        return undefined;
    }

    if (length % 2 == 0) {
        return undefined;
    }

    var middle = parseInt(length / 2);

    var largest = number[0];

    for (i = 0; i < length; i++) {

        if (isNaN(number[i])) {
            return undefined;
        }

        if (i == 0 || i == middle || i == (length - 1)) {

            if (largest < number[i]) {
                largest = number[i];
            }
        }
    }

    return largest;
}


function middle(values) {
    let array = []
    if (!values || values.length < 3 || values.length % 2 == 0) {
        return [];
    }
    let index = (values.length / 2) - 1 + 0.5
    let two_middle = values[index]
    let one_middle = values[index - 1]
    let three_middle = values[index + 1]
    array.push(one_middle);
    array.push(two_middle);
    array.push(three_middle);
    return array;

}


function increasing(numbers) {
    let flag = 0;
    if (!numbers || numbers.length < 3 || numbers.some(isNaN) || numbers.some(Number.isInteger) === false) {
        return false;
    } else {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < numbers[i + 1] && numbers[i + 1] < numbers[i + 2]) {
                flag = 1;
                return true;
            }
        }
        if (flag === 0) {
            return false;
        }
    }
}


function everywhere(values, x) {
    let flag = 1;
    if (!values || values.length < 1 || x === undefined) {
        return false;
    } else {

        for (let i = 0; i < values.length - 1; i++) {
            if (values[i] === x) {
                flag = 0;
            } else if (values[i - 1] === x || values[i + 1] === x) {
                flag = 0;
            } else {
                flag = 1;
                return false;
            }
        }
    }
    if (flag === 0) {
        return true;
    }

}

function consecutive(numbers) {
    if (!numbers || numbers.length === 0) {
        return false;
    }

    var length = numbers.length;

    if (length < 3) {
        return false;
    }


    for (i = 0; i < length; i++) {
        if (isNaN(numbers[i])) {
            return false;
        }
    }

    for (i = 0; i < numbers.length - 2; i++) { 
        if ((numbers[i] % 2 == 0) && (numbers[i + 1] % 2 == 0) && (numbers[i + 2] % 2 == 0)) {

            return true;
        }
        if ((numbers[i] % 2 != 0) && (numbers[i + 1] % 2 != 0) && (numbers[i + 2] % 2 != 0)) {

            return true;
        }
    }

    return false;
}


function balance(numbers) {
    if (!numbers || numbers.length === 0) {
        return false;
    }

    var length = numbers.length;

    if (length < 2) {
        return false;
    }

    let lSum = 0;

    for (i = 0; i < length; i++) {
        if (isNaN(numbers[i])) {
            return false;
        }
        lSum += numbers[i];

    }
    let rSum = 0;
    for (i = length - 1; i >= 0; i--) {
        rSum += numbers[i];
        lSum -= numbers[i];
        if (lSum == rSum) {
            return true;
        }
    }
    return false;
}



function clumps(values) {
    if (!values) {
        return -1;
    }
    let temp = "";
    let result = 0;
    let last = "";

    for (i = 0; i < values.length; i++) {

        if (values[i] == temp) {

            if (last.length == 0) {

                result++;

                last = values[i];

            }
        } else {
            last = '';
        }
        temp = values[i];
    }
    return result;
}


/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */ 

module.exports = {
    commonEnd,
    endsMeet,
    difference,
    max,
    middle,
    increasing,
    everywhere,
    consecutive,
    balance,
    clumps
};
