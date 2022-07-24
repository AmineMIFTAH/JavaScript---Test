/* Question 1 */

var to_verify = Array.from(Array(9), () => new Array(9));


/* Question 2 */

function F11() {
    for (var i = 0; i < 9; i++) {
        var split = array_number[i].split(' ')              /* Split rows to get position */
        for (var j = 0; j < 9; j++) {
            to_verify[i][j] = parseInt(split[j]);           /* parseInt for changing string to int */
        }
    }
    return (to_verify);
}

var to_verify = F11();




/* Question 3 */

function F12() {
    for (var i = 0; i < 9; i++) {
        var x = document.getElementById('myTable').insertRow(i);
        for (var j = 0; j < 9; j++) {
            var y = x.insertCell(j);
            y.innerHTML = to_verify[i][j];
        }
    }
}

F12();








