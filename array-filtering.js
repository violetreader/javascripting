var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = numbers.filter(function(oddNumbers){
  return (oddNumbers % 2 === 0);
});

console.log(filtered);

