const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10))
    }
    for (let i = 0; i < arr.length; i++) {
        while (arr[i].includes('10')) {
            arr[i] = arr[i].replace('10', '.')
        }
        while (arr[i].includes('11')) {
            arr[i] = arr[i].replace('11', '-')
        }
        while (arr[i].includes('0')) {
            arr[i] = arr[i].replace('0', '')
        }
    }
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < Object.keys(MORSE_TABLE).length; j++) {
            if (arr[i] === Object.keys(MORSE_TABLE)[j]) {
                res += Object.values(MORSE_TABLE)[j]
            }
        }
        if (arr[i] === '**********') {
            res += ' '
        }
    }
    return res;
}

module.exports = {
    decode
}
