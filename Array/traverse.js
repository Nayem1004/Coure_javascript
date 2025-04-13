var arr = [4, 5, 6, 8, 1, 3, 40]

// array er index guloke 2 kore briddhikorbo

for (var i = 0; i < arr.length; i ++){
    arr[i]=arr[i]+2
}
console.log(arr)

// array-er sum kora

var sum = 0
for( var i = 0; i<arr.length; i++){
    sum += arr[i]
}
console.log(sum)