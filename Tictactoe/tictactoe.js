 spaces = [
    [0,1,2],
    [0,1,2],
    [0,1,2]
 ];
x = 0;

//Checks the array to see if the game has been won.
function wincheck(){

    for(i = 0;i<3; i++){
        if(spaces[i][0] == 3 && spaces[i][1]== 3 && spaces[i][2]== 3){
            winner(0);
         reset();
        }

        }

        for( j = 0;j<3; j++){
            if(spaces[0][j] == 3 && spaces[1][j]== 3 && spaces[2][j]== 3){
                winner(0);
                reset();
            }
    
            }
           
            if(spaces[0][0] == 3 && spaces[1][1]== 3 && spaces[2][2]== 3){
                    winner(0);
                    reset();
                }

                if(spaces[0][2] == 3 && spaces[1][1] == 3 && spaces[2][0] == 3){
                
                winner(0);
                reset();
                
            }

            for(b = 0;b<3; b++){
                if(spaces[b][0] == 4 && spaces[b][1]== 4 && spaces[b][2]== 4){
                    winner(1);
                    reset();
                }
        
                }
        
                for( c = 0;c<3; c++){
                    if(spaces[0][c] == 4 && spaces[1][c]== 4 && spaces[2][c]== 4){
                        winner(1);
                        reset();
                    }
            
                    }


                     
            if(spaces[0][0] == 4 && spaces[1][1]== 4 && spaces[2][2]== 4){
                winner(1);
                reset();
            }

            if(spaces[0][2] == 4 && spaces[1][1] && spaces[2][0] == 4){
            
            winner(1);
            reset();
            
        }
     
    }




//takes the postion parameter and checks if it X or Y turn.It then puts  X or Y to that location,and adds a 3 or 4  to that location in the Array.Three is Xs and four is Ys.
function checkxy(postion){


if(x == 0){
    console.log("in if statment 0 ");
    x= x + 1;
    if(postion == 0){
        //document.getElementById("myBtn").disabled = true;
        let e = document.getElementById("tttbuttons1");
        
        e.innerHTML = "<h5>X</h5>";
        
        spaces[0][0] = 3;
        console.log(spaces[0][0]);
        wincheck();
    }

    if(postion == 1){
        let e = document.getElementById("tttbuttons2");
            e.innerHTML = "<h5>X</h5>";
            spaces[0][1]= 3;
            console.log(spaces[0][1]);
            wincheck();
    
        }

        if(postion == 2){
            let e = document.getElementById("tttbuttons3");
                e.innerHTML = "<h5>X</h5>";
                spaces[0][2]= 3;
                console.log(spaces[0][2]);
                wincheck();
        
            }

            if(postion == 3){
                let e = document.getElementById("tttbuttons4");
                    e.innerHTML = "<h5>X</h5>";
                    spaces[1][0] = 3;
                    console.log(spaces[1][0]);
                    wincheck();
            
                }

                if(postion == 4){
                    let e = document.getElementById("tttbuttons5");
                        e.innerHTML = "<h5>X</h5>";
                        spaces[1][1]= 3;
                        console.log(spaces[1][1]);
                        wincheck();
                
                
                    }

                    if(postion == 5){
                        let e = document.getElementById("tttbuttons6");
                            e.innerHTML = "<h5>X</h5>";
                            spaces[1][2]= 3;
                            console.log(spaces[1][2]);
                            wincheck();
                    
                        }

                        if(postion == 6){
                            let e = document.getElementById("tttbuttons7");
                                e.innerHTML = "<h5>X</h5>";
                                spaces[2][0]= 3;
                                console.log(spaces[2][0]);
                                wincheck();
                        
                            }

                            if(postion == 7){
                               
                                    let e = document.getElementById("tttbuttons8");
                                    e.innerHTML = "<h5>X</h5>";
                                    spaces[2][1] = 3;
                                    console.log(spaces[2][1]);
                                    wincheck();
                            
                                }

                                if(postion == 8){
                                  
                                        let e = document.getElementById("tttbuttons9");
                                        e.innerHTML = "<h5>X</h5>";
                                        spaces[2][2] = 3;
                                        console.log(spaces[2][2]);
                                        wincheck();
                                
                                    }
    return;
    
}

if(x == 1){
    console.log("in if statment 1 ");
    x = 0;

    if(postion == 0){
     
            let e = document.getElementById("tttbuttons1");
            e.innerHTML = "<h5>O</h5>";
            spaces[0][0] = 4;
            wincheck();
    
    
        }
    
        if(postion == 1){
            
                let e = document.getElementById("tttbuttons2");
                e.innerHTML = "<h5>O</h5>";
                spaces[0][1] = 4;
                wincheck();
        
            }
    
            if(postion == 2){
                    let e = document.getElementById("tttbuttons3");
                    e.innerHTML = "<h5>O</h5>";
                    spaces[0][2] = 4;
                    wincheck();
            
                }
    
                if(postion == 3){
                        let e = document.getElementById("tttbuttons4");
                        e.innerHTML = "<h5>O</h5>";
                        spaces[1][0] = 4;
                        wincheck();
                
                    }
    
                    if(postion == 4){
                            let e = document.getElementById("tttbuttons5");
                            e.innerHTML = "<h5>O</h5>";
                            spaces[1][1] = 4;
                            wincheck();
                    
                        }
    
                        if(postion == 5){
                            
                                let e = document.getElementById("tttbuttons6");
                                e.innerHTML = "<h5>O</h5>";
                                spaces[1][2] = 4;
                                wincheck();
                        
                            }
    
                            if(postion == 6){
                                
                                    let e = document.getElementById("tttbuttons7");
                                    e.innerHTML = "<h5>O</h5>";
                                    spaces[2][0] = 4;
                                    wincheck();
                            
                                }
    
                                if(postion == 7){
                                    
                                        let e = document.getElementById("tttbuttons8");
                                        e.innerHTML = "<h5>O</h5>";
                                        spaces[2][1] = 4;
                                        wincheck();
                                
                                    }
    
                                    if(postion == 8){
                                  
                                            let e = document.getElementById("tttbuttons9");
                                            e.innerHTML = "<h5>O</h5>";
                                            spaces[2][2] = 4;
                                            wincheck();
                                        }



    return;
}



}
//Simple function that is called when a win condition is met, and alerts which side won.
function winner(win){
        if(win == 0){
    alert("X has won");
    }

    if(win == 1){
        alert("O has won");
        }
  }

//Saves the board to Firebase
  function save(){
       


    setData(DB_PATH + DEFAULT_TODO, spaces);
}

var flag = false;

function load(){

if(!flag){
flag = true;
watchData(DB_PATH + DEFAULT_TODO,data => {
    if(data != null){

        spaces = data;
//	display();
    }
       display();

});

}



}
//Displays the board.It is used with the load function.
function display(){
pos = 0;
   
    for(k = 0; k< 3; k++){
        for(l = 0; l < 3; l++){

            if(spaces[k][l] == 3){
                x = 0
                checkxy(pos)
                }
                if(spaces[k][l]  == 4){
                    x = 1;
                    checkxy(pos);
                }
                pos++;
        }
    }
}
//Resets the board to original condition 
function reset(){


    spaces = [
        [0,1,2],
        [0,1,2],
        [0,1,2]
     ];
     pos = 0;
     for(i = 0; i < 9; i++){
        document.getElementById("tttbuttons1").style.display = "inline";
        document.getElementById("tttbuttons2").style.display = "inline";
        document.getElementById("tttbuttons3").style.display = "inline";
        document.getElementById("tttbuttons4").style.display = "inline";
        document.getElementById("tttbuttons5").style.display = "inline";
        document.getElementById("tttbuttons6").style.display = "inline";
        document.getElementById("tttbuttons7").style.display = "inline";
        document.getElementById("tttbuttons8").style.display = "inline";
        document.getElementById("tttbuttons9").style.display = "inline";
        
        e = document.getElementById("tttbuttons1");
        e.innerHTML = "<h1></h1>";
        e = document.getElementById("tttbuttons2");
        e.innerHTML = "<h1></h1>";
        e = document.getElementById("tttbuttons3");
        e.innerHTML = "<h1></h1>";
        e = document.getElementById("tttbuttons4");
        e.innerHTML = "<h1></h1>";
        e = document.getElementById("tttbuttons5");
        e.innerHTML = "<h1></h1>";
        e = document.getElementById("tttbuttons6");
        e.innerHTML = "<h1></h1>";
        e = document.getElementById("tttbuttons7");
        e.innerHTML = "<h1></h1>";
        e = document.getElementById("tttbuttons8");
        e.innerHTML = "<h1></h1>";
        e = document.getElementById("tttbuttons9");
        e.innerHTML = "<h1></h1>";
        x = 0;
     }
    }
