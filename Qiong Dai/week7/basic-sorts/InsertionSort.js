function insertionSort (items) {
    const len = items.length;
    if (len <= 1) return

    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1; 
        current = items[i]; 
        while (preIndex >= 0 && items[preIndex] > current) {
            items[preIndex + 1] = items[preIndex]; 
            preIndex--; 
        }
        if (preIndex + 1 != i) {
            items[preIndex + 1] = current; 
            console.log('items :', items);
        }
    }
  return items;
}

module.exports = insertionSort;
