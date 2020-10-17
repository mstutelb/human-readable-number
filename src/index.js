module.exports = function toReadable(number) {
    if (number === 0) return "zero";

    const less20 = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const dozens = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let rest = number % 100;
    number = (number - rest) / 100;

    let result = [];

    if (number) result.push(`${less20[number]} hundred`);

    if (rest < 20) {
        if (rest) result.push(`${less20[rest]}`);
    } else {
        number = rest;
        rest = rest % 10;
        number = (number - rest) / 10;

        if (number) result.push(`${dozens[number]}`);
        if (rest) result.push(`${less20[rest]}`);
    }

    return result.join(" ");
};
