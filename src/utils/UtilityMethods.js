/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export const shuffle = (a) => {
    const copy = a.slice();
    let j;
    let x;
    let i;
    for (i = copy.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = copy[i];
        copy[i] = copy[j];
        copy[j] = x;
    }
    return copy;
};

