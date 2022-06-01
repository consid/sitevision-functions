export const sortArraysOnDate = (items) => {
    if (items && items.length > 0) {
        items = items.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });
    }
    return items;
}

export const getNumberOfArrays = (items, maxItems) => {
    if (items && items.length > 0) {
        items = items.slice(0, maxItems);
    }
    return items;
}

