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
    let result = [];
    let letters = '';  
    let expression = expr.match(/.{1,10}/g);

    for (let i = 0; i < (expression.length); i++) {
        letters = expression[i].match(/.{1,2}/g);
        let newLetters = '';
            for (let j = 0; j < 5; j++) {
                newLetters += letters[j]
                .replace(new RegExp('10','g'), '.')
                .replace(new RegExp('11','g'), '-')
                .replace(new RegExp('00','g'), '');
            }
            result.push(MORSE_TABLE[newLetters]);
                if(newLetters === '**********') {
                    result.push(' ');
                }
    }
    return result.join('');
}

module.exports = {
    decode
}