class DepthCalculator {
  
  calculateDepth(arr) { 
    if (!Array.isArray(arr)) return 0;
    
    const nestedArrays = arr.filter(item => Array.isArray(item)); 
    const arraysDepth = nestedArrays.map(item => this.calculateDepth(item)); 

    if (arraysDepth.lenth === 0 || nestedArrays.length === 0) return 1;

    const maxDepth = Math.max(...arraysDepth); 
    
    return 1 + maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
