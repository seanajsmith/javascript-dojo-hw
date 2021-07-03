//predicated 10 out of 15 correctly

function a(){
    return 35;
}
// console.log(a()) 
// console: 35


//
function a(){
    return 4;
}
// console.log(a()+a());
// //console: 8


//
function a(b){
    return b;
}
// console.log(a(2)+a(4));
//console: 6


// //
function a(b){
        console.log(b);
        return b*3;
    }
// console.log(a(3));
//console: 9


    //
    function a(b){
        return b*4;
        console.log(b);
     }
    //  console.log(a(10));
//console: 40


     //
     function a(b){
        if(b<10) {
            return 2;
        }
        else     {
            return 4;
        }
        console.log(b);
    }
    // console.log(a(15));
    // console: 4



//     //
    function a(b,c){
        return b*c;
    }
    // console.log(10,3);
    // console.log( a(3,10) );
    console: (10,3), 30


//     //
    function a(b){
        for(var i=0; i<10; i++){
            console.log(i);
        }
        return i;
    }
    // console.log(3);
    // console.log(4);
    // console: 3,4


//     //
    function a(){
        for(var i=0; i<10; i++){
            i = i +2;
            console.log(i);
        }
    }
    a();
//      console: 2,5,8,11


//     //
    function a(b,c){
        for(var i=b; i<c; i++) {
           console.log(i);
       }
       return b*c;
    }
    a(0,10);
    // console.log(a(0,10));
    // console logs 0-9,0-9,0 - last 0 is from return value




     //????
    function a(){
        for(var i=0; i<10; i++){
           for(var j=0; j<10; j++){
               console.log(j);
           }
           console.log(i);
        }
    }
//     //???

//????
    function a(){
        for(var i=0; i<10; i++){
            for(var j=0; j<10; j++){
                console.log(i,j);
            }
            console.log(j,i);
        }
    }


    //
    var z = 10;
    function a(){
    var z = 15;
    console.log(z);
}
// console.log(z);


//
var z = 10;
function a(){
    var z = 15;
    // console.log(z);
}
a();
// console.log(z);



// //
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

//added comment

