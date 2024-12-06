function maiorouigual (n1, n2){
    if(typeof n1 != typeof n2 ) return false
        return n1 >= n2
}

console.log(maiorouigual(0, 0))
console.log(maiorouigual(0,'0'))
console.log(maiorouigual(5, 1))