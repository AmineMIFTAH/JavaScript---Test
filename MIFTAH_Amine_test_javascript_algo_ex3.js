/* Question 1 */

var line_table_Anomaly = -1;
var compteur_error = 0;             /* count number of errors to display table is correct*/

function F31() {
    for (var i = 0; i < 9; i++) {

        var error = F21(to_verify[i])
        if (!error) {
            compteur_error++;
            console.log(`Anomaly in line ${i + 1}`)

            /* question 4 */
            line_table_Anomaly++;
            var x = document.getElementById('myTable_anomaly').insertRow(line_table_Anomaly);
            var y = x.insertCell(0);
            y.innerHTML = `Line ${i + 1} incorrect`;

            for (var j = 0; j < 9; j++) {
                var y = x.insertCell(j + 1);
                y.innerHTML = to_verify[i][j];
            }
        }
    }
}

F31();



/* Question 2 */


const arrayColumn = (arr, n) => arr.map(x => x[n]);


function F32() {
    for (var i = 0; i < 9; i++) {
        var error = F21(arrayColumn(to_verify, i));
        if (!error) {
            compteur_error++;
            console.log(`Anomaly in column ${i + 1}`);

            /* question 4 */
            line_table_Anomaly++;
            var x = document.getElementById('myTable_anomaly').insertRow(line_table_Anomaly);
            var y = x.insertCell(0);
            y.innerHTML = `Column ${i + 1} incorrect`;

            for (var j = 0; j < 9; j++) {
                var y = x.insertCell(j + 1);
                y.innerHTML = to_verify[j][i];
            }
        }
    }
}

F32();



/* Question 3 */

var region_number = 1;

function F33() {
    for (var i = 1; i <= 7; i = i + 3)
        for (var j = 1; j <= 7; j = j + 3) {
            var region = [];
            for (var ri = i - 1; ri <= i + 1; ri++)
                for (var rj = j - 1; rj <= j + 1; rj++) {
                    region.push(to_verify[ri][rj]);
                }

            if (!F21(region)) {
                compteur_error++;
                console.log(`region ${region_number} incorrect`);

                /* question 4 */
                line_table_Anomaly++;
                var x = document.getElementById('myTable_anomaly').insertRow(line_table_Anomaly);
                var y = x.insertCell(0);
                y.innerHTML = `Region ${region_number} incorrect`;

                for (var k = 0; k < 9; k++) {
                    var y = x.insertCell(k + 1);
                    y.innerHTML = region[k];
                }
            }
            region_number++;
        }
}

F33();


/* Display example expected otherwise */
if (!compteur_error) {
    document.getElementById("correct").innerHTML = "=> the table is correct"
}

