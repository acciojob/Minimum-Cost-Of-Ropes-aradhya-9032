function calculateMinCost() {
  var res = 0;
  var cost = 0;
  var inputArray = document.getElementById("rope-lengths").value;

  inputArray = inputArray.split(',').map(Number);
  
  while (inputArray.length > 1) {
    // Find the two smallest elements
    inputArray.sort((a, b) => a - b);
    
    // Get the sum of the two smallest elements
    res = inputArray.shift() + inputArray.shift();
    
    // Add the sum to the cost
    cost += res;
    
    // Add the sum back to the array
    inputArray.push(res);
  }

  document.getElementById("result").innerHTML = cost;
}
