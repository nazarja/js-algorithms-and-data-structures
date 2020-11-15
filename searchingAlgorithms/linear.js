const states = [
    'alaska', 'alabama', 'arkansas', 'american samoa', 'arizona', 'california', 'colorado', 'connecticut', 'district of columbia', 'delaware', 'florida', 'georgia', 'guam', 'hawaii', 'iowa', 'idaho', 'illinois', 'indiana', 'kansas', 'kentucky', 'louisiana', 'massachusetts', 'maryland', 'maine', 'michigan', 'minnesota', 'missouri', 'mississippi', 'montana', 'north carolina', 'north dakota', 'nebraska', 'new hampshire', 'new jersey', 'new mexico', 'nevada', 'new york', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'puerto rico', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'virginia', 'virgin islands', 'vermont', 'washington', 'wisconsin', 'west virginia', 'wyoming'
];

function linear(states, state) {
    for (let i = 0; i < states.length; i++) {
        if (states[i] === state) return i;
    }

    return -1;
}

console.log(
    linear(states, 'maryland')
);
