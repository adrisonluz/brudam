function performDataManipulation() {
    const data = Array.from({ length: 1000000 }, (_, index) => index);
  
    const filteredData = data.filter(num => num % 2 === 0);
  
    return filteredData;
}

console.time('nodejs-data-manipulation');
performDataManipulation();
console.timeEnd('nodejs-data-manipulation');