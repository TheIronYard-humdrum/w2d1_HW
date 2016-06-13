var minus = function(n) {
  if (n != -1) {
    console.log(n)
    n = n-1
    if (n != -1) {
      minus(n)
    }
  }
} 
minus(10)