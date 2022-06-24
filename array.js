arr.push(5)
arr.push(88)

console.log(arr[0] + arr[1])
console.log('tes')

arr.forEach(getar)
function getar(item, index){
  console.log(+index+':'+item)
}
