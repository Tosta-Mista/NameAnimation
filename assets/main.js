/**
 * Created by jgo on 02.01.14.
 */

/* init some variables */
var word = "ToXTa-MiXTa";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var colorPolicy = [purple, blue, green, orange, red];

drawName(word, colorPolicy);

if (10 < 3){
    bubbleShape = 'square';
}
else{
    bubbleShape = 'circle';
}

bounceBubbles();