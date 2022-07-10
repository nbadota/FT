console.log(isRotation('45123','12345'))

function isRotation(a,b) {
    const b2 = b+b;
    return b2.indexOf(a) !== -1;
}