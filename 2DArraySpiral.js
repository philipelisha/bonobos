// Create a function that iterates through a 2D array in a spiral fashion and prints out each
// cell

//[[ 1 2 3],
// [4 5 6],
// [7 8 9]]

// [[1 2 3 4 5],
// [5 6 7 8 9],
// [1 2 3 4 5],
// [6 3 4 2 3],
// [7 8 9 2 3]]

// complexity: O(N*M) where N is width, M is height
// ex: 1 2 3 6 9 8 7 4 5

function spiral(arr) {
    var completeArray, loopLength = arr.length * arr[0].length,
        x = 0, y = -1, direction = 0, xBounds = 0, yBounds = 0;

    for ( var i = 0; i < loopLength ; i++ ) {

        if (direction === 0) {
            y++;
            var leftToRightValue = arr[x][y];
            completeArray.push(leftToRightValue);
            if ( y >= 2 ) {
                direction = 1;
            }
        } else if ( direction === 1 ) {
            x++;
            var upToDownValue = arr[x][y];
            completeArray.push(upToDownValue);

            if ( x >= 2 ) {
                direction = 2;
            }
        } else if ( direction === 2 ) {
            y--;
            var rightToLeftValue =  arr[x][y];
            completeArray.push(rightToLeftValue);

            if ( y <= 1 ) {
                direction = 3;
            }
        } else if ( direction === 3 ) {
            x--;
            var downToUpValue = arr[x][y];
            completeArray.push(downToUpValue);

            if ( x <= 1 ) {
                direction = 0;
            }
        }
    }

    return completeArray; // [1,2,3,4,5,6,7,8,9]
}