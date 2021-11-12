const capitalizeString = (string) => {
    const capitalLetter = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalLetter;
}

module.exports = capitalizeString;