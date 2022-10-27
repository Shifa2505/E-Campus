a=[{name:"Manav",age:20},{name:"Shifa",age:21},{name:"Om",age:19}]
// function sortByKey(array, key) {
//     return array.sort(function(a, b) {
//         var x = a[key]; var y = b[key];
//         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
//     });
// }
a.sort(function (a,b){
    return (a["age"]<b["age"] ? -1 : (a["age"]>b["age"] ? 1 : 0))
})

console.log(a)
// console.log(x)