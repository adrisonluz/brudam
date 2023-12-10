function performIntensiveCalculations() {
    let result = 0;
    const iterations = 100000000;
  
    for (let i = 0; i < iterations; i++) {
        result += Math.sqrt(i) * Math.pow(i, 2);
    }
  
    return result;
}
  
console.time('cpu-intensive');
performIntensiveCalculations();
console.timeEnd('cpu-intensive');