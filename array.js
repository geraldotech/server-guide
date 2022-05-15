arr.push(5)
arr.push(15)

console.log(arr[0] + arr[1])


arr.forEach(getar)
function getar(item, index){
  console.log(+index+':'+item)
}
