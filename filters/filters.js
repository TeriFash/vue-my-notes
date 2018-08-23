import escapeRegExp from 'lodash/escapeRegExp';

export const searchText = (words, query) => {
    if (!query) {
        return words;
    }
    return words.replace(new RegExp(escapeRegExp(query), 'g'), `<span class="highlight">${query}</span>`);
};
