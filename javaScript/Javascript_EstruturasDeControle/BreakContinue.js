const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(x in nums) {
    if(x ==5) break// break não age no IF apenas for/while/switch mais proximo
    console.log("X =" + nums[x])
}

for (y in nums) {
    if (y==5) continue
    console.log( "Y ="+ nums[y])

}

externo: for (let a of nums) {
    for (let b of nums) {
        if (a == 2 && b == 3) break externo
        console.log('par =', a, b)
    }
}