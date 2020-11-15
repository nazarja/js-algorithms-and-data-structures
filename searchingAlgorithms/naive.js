
function naive(value, term) {
    let matches = 0;

    for (let i = 0; i < value.length; i++) {
        if (value[i] === term[0]) {
            for (let j = 0; j < term.length; j++) {
                if (term[j] !== value[i+j]) break;

                if (j === term.length  -1) matches++;
            }
        }
    }

    return matches;
}

console.log(
    naive('wowomgfromghdzomg', 'omg')
);