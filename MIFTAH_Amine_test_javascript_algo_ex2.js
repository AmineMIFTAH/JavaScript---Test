/* Question 1 */

var A = Array(9);

function F21(A) { };


/* Question 2 */

function F21(A) {
    if (A.length != 9) return false;
    for (var i = 0; i < 9; i++)
        for (var j = i + 1; j < 9; j++)
            if (A[i] == A[j] || A[j] > 9 || A[j] < 1)
                return (false);
    return (true);
}