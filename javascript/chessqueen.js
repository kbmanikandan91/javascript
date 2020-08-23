<!DOCTYPE html>
<html>
<title>Web Page Design</title>
<head>
<script>
let queen = {
    direction: 'S',
    x_coords: 3,
    y_coords: 3,
    //position=new Array[queen['x_coords'],queen['y_coords']];
   //let position = ['e8']
};

positionLog =[["a8","b8","c8","d8","e8","f8","g8","h8"],

 		   ["a7","b7","c7","d7","e7","f7","g7","h7"],

           ["a6","b6","c6","d6","e6","f6","g6","h6"],

           ["a5","b5","c5","d5","e5","f5","g5","h5"],

           ["a4","b4","c4","d4","e4","f4","g4","h4"],

           ["a3","b3","c3","d3","e3","f3","g3","h3"],

           ["a2","b2","c2","d2","e2","f2","g2","h2"],

           ["a1","b1","c1","d1","e1","f1","g1","h1"]];
//let position=new Array[,];
function changedirection(directions) {
    switch (directions) {
        case "E": 
            //document.write("The queen HAS TO MOVE TOWARDS EAST");
            queen['direction'] = 'E';
            //document.write(queen['direction']);
            moveForward("E");
            //queen['x_coords'] = queen['x_coords']+ 1;
            //queen['y_coords'] = queen['y_coords'];
            //document.write(queen['x_coords'],queen['y_coords']);
            
            break;
        
        case "W": 
            document.write("The queen HAS TO MOVE TOWARDS WEST");
            queen['direction'] = 'W';
            document.write(queen['direction']);
            moveForward("W");
            break;
            
        case "N": 
            document.write("The queen HAS TO MOVE TOWARDS NORTH");
            queen['direction'] = 'N';
            document.write(queen['direction']);
            moveForward("N");
            break;
            
        case "S": 
            document.write("The queen HAS TO MOVE TOWARDS SOUTH");
            queen['direction'] = 'S';
            document.write(queen['direction']);
            moveForward("E");
            break;
            
        case "NE": 
            document.write("The queen HAS TO MOVE TOWARDS NORTHEAST");
            queen['direction'] = 'NE';
            document.write(queen['direction']);
            moveForward("NE");
            break;
            
        case "NW": 
            document.write("The queen HAS TO MOVE TOWARDS NORTHWEST");
            queen['direction'] = 'NW';
            document.write(queen['direction']);
            moveForward("NW");
            break;
            
        case "SE": 
            document.write("The queen HAS TO MOVE TOWARDS SOUTHEAST");
            queen['direction'] = 'SE';
            document.write(queen['direction']);
            moveForward("SE");
            break;
            
        case "SW": 
            document.write("The queen HAS TO MOVE TOWARDS SOUTHWEST");
            queen['direction'] = 'SW';
            document.write(queen['direction']);
            moveForward("SW");
            break;
            
        default:      
            document.write("S");
    }

}

function moveForward(directions)
{   switch (directions) {
        case "E": 
        if (queen['direction'] == "E" && (queen['x_coords']<'7')) {
        queen['x_coords'] = queen['x_coords']+ 1;
        queen['y_coords'] = queen['y_coords'];
        document.write(queen['x_coords'],queen['y_coords']);
        }
        else 
        {
        document.write('MOVEMENT NOT POSSIBLE');
        }
        break;
        
        case "W": 
        if (queen['direction'] == "W" && (queen['x_coords']>'0')) {
        queen['x_coords'] = queen['x_coords']+ 1;
        queen['y_coords'] = queen['y_coords'];
        document.write(queen['x_coords'],queen['y_coords']);
        }
        else 
        {
        document.write('MOVEMENT NOT POSSIBLE');
        }
        break;
        
        case "N": 
        if (queen['direction'] == "N" && (queen['y_coords']>'0')) {
        queen['x_coords'] = queen['x_coords']+ 1;
        queen['y_coords'] = queen['y_coords'];
        document.write(queen['x_coords'],queen['y_coords']);
        }
        else 
        {
        document.write('MOVEMENT NOT POSSIBLE');
        }
        break;
        
        case "S": 
        if (queen['direction'] == "S" && (queen['y_coords']<'7')) {
        queen['x_coords'] = queen['x_coords']+ 1;
        queen['y_coords'] = queen['y_coords'];
        document.write(queen['x_coords'],queen['y_coords']);
        }
        else 
        {
        document.write('MOVEMENT NOT POSSIBLE');
        }
        break;
        
        case "SE": 
        if (queen['direction'] == "SE" && (queen['x_coords']<'7') && (queen['y_coords']>'0')) {
        queen['x_coords'] = queen['x_coords']+ 1;
        queen['y_coords'] = queen['y_coords']+ 1;
        document.write(queen['x_coords'],queen['y_coords']);
        }
        else 
        {
        document.write('MOVEMENT NOT POSSIBLE');
        }
        break;
        
        case "SW": 
        if (queen['direction'] == "SW" && (queen['x_coords']<'7')) {
        queen['x_coords'] = queen['x_coords']+ 1;
        queen['y_coords'] = queen['y_coords']-1;
        document.write(queen['x_coords'],queen['y_coords']);
        }
        else 
        {
        document.write('MOVEMENT NOT POSSIBLE');
        }
        break;
        
        case "NE": 
        if (queen['direction'] == "NE" && (queen['x_coords']<'7')) {
        queen['x_coords'] = queen['x_coords']-1;
        queen['y_coords'] = queen['y_coords']+1;
        document.write(queen['x_coords'],queen['y_coords']);
        
        document.write("NORTH EAST");
        }
        
        else 
        {
        document.write('MOVEMENT NOT POSSIBLENORTH EAST');
        }
        break;
        
        case "NW": 
        if (queen['direction'] == "NW" && (queen['x_coords']<'7')) {
        queen['x_coords'] = queen['x_coords']- 1;
        queen['y_coords'] = queen['y_coords']- 1;
        document.write(queen['x_coords'],queen['y_coords']);
        }
        else 
        {
        document.write('MOVEMENT NOT POSSIBLE');
        }
        break;
        
        default: 
        document.write('hi this is default');
        
    }


} 

let whereabouts = new Array()

//let positionLoging =["a8"]

function posi(){
   let x=queen['x_coords'];
   let y=queen['y_coords'];
   document.write(positionLog[x][y]);
   /* for(i=0;i<=10;i++)
    {
        document.write(avengers[i]);
    }*/
}



function chess() {
   //document.write("ORIGINAL POSITION OF THE QUEEN ::");
   //document.write(queen.direction);
   //positionlog[position.x_coords][queen,position.y_coords]
   
   var moves=prompt("Please enter your moves", "<MOVES goes here>");
   
   if(moves==1)
   {
       var dir = prompt("Please enter your DIRECTION", "<DIRECTION goes here>");
   changedirection(dir);
   }
   else{
       jumpmoveforward()
   }
   
   //posi();
   whereabouts.push(posi());
   }
   
   function jumpmoveforward()
   {
      for(i=1;i<=moves;i++)
   {
   var dir = prompt("Please enter your DIRECTION", "<DIRECTION goes here>");
   changedirection(dir); 
   }
   for(i=1;i<=avengers.length;i++)
   {
       document.write(whereabouts[i]);
   }
}
chess();
</script>
</head>
<body>
</body>
</html>
