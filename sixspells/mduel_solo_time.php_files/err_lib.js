/*
JAVASCRIPT VERSION
Created on Wed Sep 28 11:48:22 2022

@author: Pierpaolo Dondio
*/

// COMPUTE THE ERRORS

//inputs 
//RED Bef [['15', '15', '10350'], ['12', '12', '10288'], ['13', '13', '10304'], ['15', '15', '10344'], ['3', '3', '10054'], ['9', '9', '10221'], ['1', '1', '10023'], ['2', '2', '10035'], ['7', '7', '10166'], ['4', '4', '10099'], ['10', '10', '10256']]
//BLUE Bef [['5', '5', '422M'], ['8', '4', '403M'], ['7', '7', '465M'], ['Remove prime', -1, '778']]
//yellow Bef [['Subtract 5', -1, '537'], ['Remove range 12,10000', -1, '823'], ['Give Total', -1, '924'], ['Remove all table 7', -1, '915'], ['Remove range 1,3', -1, '787'], ['Remove all table 4', -1, '900']]


//if you use records form the stack tables (game logs) do first:
//[reds,blues,stack] = translate_move(move) where move form a DB

//inside the game do:
//[reds,blues] = extract_cards(0) (or player)
//and get the stack with translate_stack  convert_stack

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

//get name of card from numeric stack
function get_name(){}

function translate_stack(reds,blues,stack){
   	cards = []
   	attacks = []
   	for (var j = 0; j < stack.length; j++){
   			if (cards.indexOf(stack[j][0])==-1){
   				attacks.push(stack[j])
   			} else
   			{

   			}

    }
    return 0

}



reds = [['13', '13', '10309'], ['2', '2', '10032'], ['10', '9', '10229'], ['9', '9', '10235'], ['9', '9', '10218'], ['14', '14', '10329'], ['12', '12', '10295'], ['4', '4', '10094'], ['10', '10', '10245'], ['10', '1', '10017'], ['13', '13', '10311']]
blues =	[['15', '12', '378T'], ['5', '5', '423M'], ['5', '5', '427M'], ['6', '6', '268T'], ['13', '13', '978'], ['Remove table 3', -1, '893'], ['Remove Smallest', -1, '903'], ['Remove all table 4', -1, '896']]	
stack = [['Remove 4', -1, '732'], ['Remove 5', -1, '744']]	[['15/t', '14', '1'], ['5/m', '4'], ['5/m', '2'], ['13', '13'], ['Remove all table 3', -1], ['Remove all table 5', -1], ['Remove all table 4', -1]]
full_stack = [[['15', '12', '378T'], ['14', '14', '10329'], ['10', '1', '10017']], [['5', '5', '427M'], ['4', '4', '10094']], [['5', '5', '423M'], ['2', '2', '10032']], [['13', '13', '978'], ['13', '13', '10309']], [['Remove table 3', -1, '893'], ['10', '9', '10229']], [['Remove Smallest', -1, '903']], [['Remove all table 4', -1, '896']]]

//full_stack = [[['15', '12', '378T'], ['14', '14', '10329'], ['2', '1', '10017']], [['5', '5', '427M'], ['4', '4', '10094']], [['5', '5', '423M'], ['2', '2', '10032']], [['13', '13', '978'], ['13', '13', '10309']], [['Remove table 3', -1, '893']], [['Remove all table 5', -1, '903']], [['Remove all table 4', -1, '896']]]


//library
var nums = []
for (var j = 1; j < 101; j++) {nums.push(String(j))}

function get_nums(blues){
    t=[]
    blues.forEach((j) => {
    	if (inset(j[0].split("|")[0],nums)){
            t.push(j)} 
    })
    return t
}

function removeItemOnce(arr, value) {
  
   var index = -1
   for (var k = 0; k < arr.length;k++){
          if (eq(arr[k],value)) {index = k}}
   
  if (index > -1) {
    arr2 = deepcopy(arr)
    arr2.splice(index, 1);
	return arr2;
  }
  else {return arr};
}

function eq(o1,o2){
    return JSON.stringify(o1)==JSON.stringify(o2);
    }

function deepcopy(obj){
    return JSON.parse(JSON.stringify(obj))
}

function inset(value,arr){
   for (var k = 0; k < arr.length;k++){
          if (eq(arr[k],value)) {return true;}}
	return false	
}

//////////////////

function convert_spellname(card) {
    card = card.trim()
    if (card.indexOf("Remove 3")!=-1 || card.indexOf("Remove 4")!=-1 || card.indexOf("Remove 5")!=-1 || card.indexOf("Remove 6")!=-1)
    	{card = card.replace('Remove ', 'Remove number ');}
    ca = card.replace('Subtract ', '-');
    ca = ca.replace('Add ', '+');
    ca = ca.replace('Multiply ', '*');
    ca = ca.replace('Divide ', '/');
    ca = ca.replace('Remove ', 'R ');
    ca = ca.replace('Merge &', 'Merge +');
    return ca
}

function convert_str_arr(data){
 //input = [[1,2,4],[5,6,7]]
  cards = new Array();
  card = []
  var ctype=""

  for (var y = 0; y < data.length; y++){
      token = data[y]
      if (token.length>2) 
      {
          if (parseInt(token[1])==-1) { ctype="I"} else {ctype="N"}
 
          if (ctype=="N"){  
            card = []
            var ab = ""
            if (token[2].indexOf("M/T")!=-1) {ab="|tm"}
            if (token[2].indexOf("M")!=-1 & token[2].indexOf("T")==-1) {ab="|m"}
            if (token[2].indexOf("T")!=-1 & token[2].indexOf("M")==-1) {ab="|t"}

            card.push(String(token[0]).trim()+ab)
            card.push(parseInt(token[1]))
            card.push(token[2])
            cards.push(card)
          }
          else
          {
            card = []
            card.push(convert_spellname(String(token[0])).trim())
            card.push(parseInt(token[1]))
            card.push((token[2]))
            cards.push(card)
           }
      }
  }

  return(cards)
}

function get_name(reds,blues,card){
 
 for (var y = 0; y < reds.length; y++){
   if (reds[y][2]==card) return reds[y]
 }

 for (var y = 0; y < blues.length; y++){
   if (blues[y][2]==card) return blues[y]
 }

 return (['NA',0,0])

}

function convert_stack(reds,blues,stack){

 temp_stack	=  []
 ids = []
 for (var y = 0; y < stack.length; y++){
 		if (ids.indexOf(stack[y][0])==-1){
 				temp_stack.push([stack[y][0]])
 				ids.push(stack[y][0])
 			}
 		}

 for (var y = 0; y < stack.length; y++){
 		for (var i = 0; i < temp_stack.length; i++){
 			if (temp_stack[i][0]==stack[y][0]) {
 					temp_stack[i].push(stack[y][1])
 			}
 		}
 }

 new_stack = []
 	for (var i = 0; i < temp_stack.length; i++){
 		move = []
		for (var j = 0; j < temp_stack[i].length; j++){
			move.push(get_name(reds,blues,temp_stack[i][j]))
		}
		new_stack.push(move)
	} 
 return new_stack
}


function convert_str_arr3(reds,blues,data){
  new_stack = []
  cards = new Array();
  card = []
  data = data.slice(1,data.length-1)
  data = data.replace(/\[/g, "")
  data = data.replace(/\]\]/g, "}")
  data = data.replace(/\],/g, ",")
  data = data.replace(/'/g, "")
  //data = data.replace(/,/g, "")
  data = data.split("}")
  new_stack = []
//  console.log(data)

  for (var y = 0; y < data.length; y++){
  	move_str = data[y].trim().split(", ")
	move = []
//	console.log("move",move_str,data[y])
	if (move_str.length % 3 !=0) {move_str.shift()}
//	console.log(" dopo move",move_str,data[y])
	for (var i = 2; i < move_str.length; i=i+3){
			move.push(get_name(reds,blues,parseInt(move_str[i])))
		}
		if (move.length>0) {new_stack.push(move)}
  }
 return new_stack
}

function convert_str_arr2(data){
//input = [[1,2,4],[5,6,7]]
  cards = new Array();
  card = []
  data = data.slice(1,data.length-1)
  data = data.replace(/\[/g, "")
  data = data.replace(/\]\]/g, "}")
  data = data.replace(/\],/g, "}")
  data = data.replace(/'/g, "")
  data = data.split("}")
  var ctype=""

  for (var y = 0; y < data.length; y++){
      token = data[y].split(", ")
      if (token.length>2) 
      {
          if (parseInt(token[1])==-1) { ctype="I"} else {ctype="N"}
 
          if (ctype=="N"){  
            card = []
            var ab = ""
            if (token[2].indexOf("M")!=-1 & token[2].indexOf("T")==-1) {ab="|m"}
            if (token[2].indexOf("T")!=-1 & token[2].indexOf("M")==-1) {ab="|t"}
            if (token[2].indexOf("M/T")!=-1) {ab="|tm"}

            card.push(String(token[0]).trim()+ab)
            card.push(parseInt(token[1]))
            card.push(parseInt(token[2]))
            cards.push(card)
          }
          else
          {
            card = []
            card.push(convert_spellname(String(token[0])).trim())
            card.push(parseInt(token[1]))
            card.push(parseInt(token[2]))
            cards.push(card)
           }
      }
  }
  return(cards)
}


function translate_move(reds,blues,yellow,stack){
  reds = convert_str_arr2(reds);
//  console.log("Reds",reds)
  blues = convert_str_arr2(blues);
  yellow = convert_str_arr2(yellow);
  blues = blues.concat(yellow)
//  console.log("Blues",blues)
  stack = convert_str_arr3(reds,blues,stack);
//  console.log("stack ==>",stack)
//  stack = convert_stack(reds,blues,stack);
//  console.log("Stack2:",stack)
  return [reds,blues,stack]
}


function translate_move_game(reds,blues,stack){
  reds = convert_str_arr(reds);
  blues = convert_str_arr(blues);
  stack = convert_stack(reds,blues,full_stack);
  return [reds,blues,stack]
}



function compute_errors(reds,blues,stack){
		//compute points and errors of a moves
	
	return 0
}


//function to process each move

//total
function check_total(move,blues, reds){
    total = 0
    points = 0
    message = ""
    //console.log("total",move)
	if (exist_card(reds,blues,move[0])==0){
		message = "Target invalid! The card you wanted to use was already removed from the game!"
	} 

    for (var i = 1; i < move.length; i++){
    	//console.log("test",move[i],exist_card(reds,blues,move[i]))
  		if (exist_card(reds,blues,move[i])!=0){
  		total = total + parseInt(move[i][0].split("|")[0])}
    }



    if (total==parseInt(move[0][0].split("|")[0]))
    	{
    		for (var i = 1; i < move.length; i++) 
    			{
		  	    	//console.log("test",move[i],exist_card(reds,blues,move[i]))
    				if (exist_card(reds,blues,move[i])!=0){
    				points = points + move[i][1]
    				blues = removeItemOnce(blues,move[i]);
    				reds = removeItemOnce(reds,card[i]);}
		 		}
    	} else
    	{
    		    message = "The total of the reds is "+String(total) + ", that is not equal to " +String(parseInt(move[0][0].split("|")[0]))
    	}
    blues = removeItemOnce(blues,move[0]);
   // console.log("End total")
    return [points,reds,blues,message]
}

function check_max_total(move,blues, reds){
    total = 0
    points = 0
    message = ""

	if (exist_card(reds,blues,move[0])==0){
		message = "Target invalid! The card you wanted to use was already removed from the game!"
	} 

    for (var i = 1; i < move.length; i++){
    	//console.log(move[i])
  		if (exist_card(reds,blues,move[i])!=0){
  		total = total + parseInt(move[i][0].split("|")[0])}
    }



    if (total<=parseInt(move[0][0].split("|")[0]))
    	{
    		for (var i = 1; i < move.length; i++) 
    			{
    				if (exist_card(reds,blues,move[i])!=0){
    				points = points + move[i][1]
    				blues = removeItemOnce(blues,move[i]);
    				reds = removeItemOnce(reds,card[i]);}
		 		}
    	} else
    	{
    		    message = "The total of the reds is "+String(total) + ", that is greater than " +String(parseInt(move[0][0].split("|")[0]))
    	}
    blues = removeItemOnce(blues,move[0]);
    return [points,reds,blues,message]
}

function check_range_all(move,blues,reds){
//	console.log("remove all range")
	message= ""
	points = 0
	int_min = parseInt(String(move[0]).split(" ").slice(-1)[0].split(",")[0])
	int_max = parseInt(String(move[0]).split(" ").slice(-1)[0].split(",")[1])

	blues = removeItemOnce(blues,move[0])
	if (int_max == 10000) {int_min = int_min + 1}
	reds.forEach((j) => {
		if ((parseInt(String(j[0]).split("|")[0])>=int_min) && (parseInt(String(j[0]).split("|")[0])<=int_max)){
			reds = removeItemOnce(reds,j)
	        points  = points + parseInt(String(j[1]).split("|")[0])
		}
	})

	blue_nums = get_nums(blues)
	blue_nums.forEach((j) => {
		if ((parseInt(String(j[0]).split("|")[0])>=int_min) && (parseInt(String(j[0]).split("|")[0])<=int_max)){
			blues = removeItemOnce(blues,j)
    		{message= "(Warning! You have removed some of your cards!)"}
		}
	})
	if (points == 0) {message = "There are no numbers between "+String(int_min)+ " and "+String(int_max) + " "+message}
    return [points,reds,blues,message]
}

function check_range(move,blues,reds){
	//check if card exist
	message= ""
	points = 0
	int_min = parseInt(String(move[0]).split(" ").slice(-1)[0].split(",")[0])
	int_max = parseInt(String(move[0]).split(" ").slice(-1)[0].split(",")[1])
	if (int_max == 10000) {int_min = int_min + 1}
	blues = removeItemOnce(blues,move[0])

	if (exist_card(reds,blues,move[1])==0){
		message = "Target invalid! The card you wanted to remove was already removed from the game!"
	} 
	else {
		if ((parseInt(String(move[1][0]).split("|")[0])>=int_min) && (parseInt(String(move[1][0]).split("|")[0])<=int_max)){
			if (inset(move[1],reds)){
					reds = removeItemOnce(reds,move[1])
            		points  = points + parseInt(String(move[1][1]).split("|")[0])}
		 	else {
					blues = removeItemOnce(blues,move[1])
					message = "Warning! You removed one of your card!"
			}

		} else 
		{	//not in range
				message = "Number "+String(move[1][0]).split("|")[0]+" is not between "+String(int_min)+ " and "+String(int_max)}
	}
    return [points,reds,blues,message]
}

function check_table_all(move,blues,reds){
//	console.log("card",move)
	seed = parseInt(String(move[0]).split(" ")[3])	
	points=0
	message=""
 	blues = removeItemOnce(blues,move[0])

	//number to be removed
	reds.forEach((j) => {
		if (parseInt(String(j[0]).split("|")[0]) % seed ==0) {
			reds = removeItemOnce(reds,j)
            points  = points + parseInt(String(j[1]).split("|")[0])
		}
	})

	blue_nums = get_nums(blues)
	blue_nums.forEach((j) => {
		if (parseInt(String(j[0]).split("|")[0]) % seed ==0) {
			blues = removeItemOnce(blues,j)
	   		{message= "(Warning! You have removed some of your cards!)"}
 		}
	})

	if (points == 0) {message = "There are no multiples of "+String(seed)+ " "+message}
    return [points,reds,blues,message]
}

function check_table(move,blues,reds){
	//check if card exist
	points=0
	message=""
	blues = removeItemOnce(blues,move[0])
	if (exist_card(reds,blues,move[1])==0){
		message = "Target invalid! The card you wanted to remove was already removed from the game!"
	} 
	else {
		seed = parseInt(String(move[0]).split(" ")[2])
//		console.log(seed)	
		if (parseInt(String(move[1][0]).split("|")[0]) % seed ==0) {
			if (inset(move[1],reds)){
					reds = removeItemOnce(reds,move[1])
            		points  = points + parseInt(String(move[1][1]).split("|")[0])}
		 	else {
					blues = removeItemOnce(blues,move[1])
					message = "Warning! You removed one of your card!"
			}

		} else 
		{	//not a multiple
			message = "Number " + String(move[1][0]).split("|")[0] + " is not a multiple of "+String(seed)
		}
	}
    return [points,reds,blues,message]
}

function check_rem_num(move,blues,reds){
	//check if card exist
	points=0
	message=""
	blues = removeItemOnce(blues,move[0])
	if (exist_card(reds,blues,move[1])==0){
		message = "Target invalid! The card you wanted to remove was already removed from the game!"
	} 
	else {
		seed = parseInt(String(move[0]).split(" ")[2])	
		if (parseInt(String(move[1][0]).split("|")[0]) == seed) {
			if (inset(move[1],reds)){
					reds = removeItemOnce(reds,move[1])
            		points  = points + parseInt(String(move[1][1]).split("|")[0])}
		 	else {
					blues = removeItemOnce(blues,move[1])
					message = "Number " + String(move[1][0]).split("|")[0] + "is not equal to "+String(seed)
			}
		}
	}
    return [points,reds,blues,message]
}

function check_prime(move,blues,reds){
	//check if card exist
//	console.log("prime....",parseInt(String(move[1][0]).split("|")[0]),move[1],inset(move[1],reds))
	points=0
	message=""
	primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
	blues = removeItemOnce(blues,move[0])
	if (exist_card(reds,blues,move[1])==0){
		message = "Target invalid! The card you wanted to remove was already removed from the game!"
	} 
	else {
		if (primes.indexOf(parseInt(String(move[1][0]).split("|")[0])) !=-1) {
			if (inset(move[1],reds)){
					reds = removeItemOnce(reds,move[1])
            		points  = points + parseInt(String(move[1][1]).split("|")[0])}
            	else {
            			//blue card
						message = "You captured your own number! " + String(move[1][0]).split("|")[0] + "is not a prime number "
						blues = removeItemOnce(blues,move[1])
            			}
            	}
		 	else {
					message = "Number " + String(move[1][0]).split("|")[0] + " is not a prime number "
					if (inset(move[1],blues)) {message = "You captured your own number! " + String(move[1][0]).split("|")[0] + "is not a prime number "} 
					blues = removeItemOnce(blues,move[1])
				}
		
	}
    return [points,reds,blues,message]
}



function check_small(card,blues,reds){
	//get the  smallest
//	console.log("============= SMALLEST")
	min_red = 1000000
	min_blue = 1000000
	points=0
	message=""
	blues = removeItemOnce(blues,card[0]);
    reds.forEach((j) => {
        if (parseInt(j[0].split("|")[0])<=min_red) {
            min_red = parseInt(String(j[0]).split("|")[0])
        }
    })
    blue_nums = get_nums(blues)
    blue_nums.forEach((j) => {
        if (parseInt(j[0].split("|")[0])<=min_blue) {
            min_blue = parseInt(String(j[0]).split("|")[0])
        }
    })
//    console.log(min_blue,min_red)
    if (min_blue<min_red) 
    	{
    		points=0
    		message= "The card with the minimum value was yours! (Card number "+String(min_blue)+")"
    	}
    min_value = min_red;
    if (min_blue<min_red) {min_value=min_blue}
	
	//cancel all the minimum cards
    reds.forEach((j) => {
        if (parseInt(String(j[0]).split("|")[0])==min_value){
            points  = points + parseInt(String(j[1]).split("|")[0])
            reds = removeItemOnce(reds,j)
        }})
    blue_nums.forEach((j) => {
        if (parseInt(j[0].split("|")[0])==min_value){
        	if (message=="") {message = "Warning! You also removed at least one of your card with value "+String(min_blue)}
            blues = removeItemOnce(blues,j)
        }})

    return [points,reds,blues,message]
}

function check_great(card,blues,reds){
	//get the  smallest
	max_red = 0
	max_blue = 0
	points=0
	message=""
	blues = removeItemOnce(blues,card[0]);
    reds.forEach((j) => {
        if (parseInt(j[0].split("|")[0])>=max_red) {
            max_red = parseInt(String(j[0]).split("|")[0])
        }
    })
    blue_nums = get_nums(blues)
    blue_nums.forEach((j) => {
        if (parseInt(j[0].split("|")[0])>=max_blue) {
            max_blue = parseInt(String(j[0]).split("|")[0])
        }
    })

    if (max_blue>max_red) 
    	{
    		points=0
    		message= "The card with the maximum value was yours! (Card number "+String(max_blue)+")"
    	}
    max_value = max_red;
    if (max_blue>max_red) {max_value=max_blue}
	
	//cancel all the minimum cards
    reds.forEach((j) => {
        if (parseInt(String(j[0]).split("|")[0])==max_value){
            points  = points + parseInt(String(j[1]).split("|")[0])
            reds = removeItemOnce(reds,j)
        }})
    blue_nums.forEach((j) => {
        if (parseInt(j[0].split("|")[0])==max_value){
        	if (message=="") {message = "Warning! You also removed at least one of your card with value "+String(max_value)}            
        		blues = removeItemOnce(blues,j)
        }})

    return [points,reds,blues,message]
}


function check_num_max(card,blues, reds){
    points = 0
    message = ""
	if (exist_card(reds,blues,card[0])==0){
		message = "Your card was already removed from the game by a previous move of yours!"
    	return [0,reds,blues,message]
	} 
	if (exist_card(reds,blues,card[1])==0){
		message = "Target invalid! The card you wanted to remove was already removed from the game!"
    	return [0,reds,blues,message]
	} 

	blues = removeItemOnce(blues,card[0]);
    if (parseInt(card[0][0].split("|")[0])>=parseInt(card[1][0].split("|")[0]))
    	{
    			points = card[1][1]
    			reds = removeItemOnce(reds,card[1]);
    	} else
    	{
    		    message = "Number "+String(parseInt(card[0][0].split("|")[0])) + " is not greater or equal than " +String(parseInt(card[1][0].split("|")[0]))
    	}
    return [points,reds,blues,message]
}

function check_oddeven(move,blues,reds){
	//check if card exist
	points=0
	message=""
	seed = 2
	remainder = 0
	if (move[0].indexOf("odd")!=-1) {remainder = 1}
	blues = removeItemOnce(blues,move[0])
	if (exist_card(reds,blues,move[1])==0){
		message = "Target invalid! The card you wanted to remove was already removed from the game!"
	} 
	else {
		if (parseInt(String(move[1][0]).split("|")[0]) % seed ==remainder) {
			if (inset(move[1],reds)){
					reds = removeItemOnce(reds,move[1])
            		points  = points + parseInt(String(move[1][1]).split("|")[0])}
		 	else {
					blues = removeItemOnce(blues,move[1])
					message = "Warning! You removed one of your card!"
			}

		} else 
		{	//not a multiple
			if (remainder==0){message = "Number " + String(move[1][0]).split("|")[0] + " is not even!" }
			if (remainder==1){message = "Number " + String(move[1][0]).split("|")[0] + " is not odd! "}

		}
	}
    return [points,reds,blues,message]
}

function check_oddeven_all(move,blues,reds){
	seed = 2	
	points=0
	message=""
	remainder = 0
	if (move[0].indexOf("odd")!=-1) {remainder = 1}
	blues = removeItemOnce(blues,move[0])

	//number to be removed
	reds.forEach((j) => {
		if (parseInt(String(j[0]).split("|")[0]) % seed ==remainder) {
			reds = removeItemOnce(reds,j)
            points  = points + parseInt(String(j[1]).split("|")[0])
		}
	})

	blue_nums = get_nums(blues)
//  console.log("first blue",blue_nums)
	blue_nums.forEach((j) => {
		if (parseInt(String(j[0]).split("|")[0]) % seed ==remainder) {
			blues = removeItemOnce(blues,j)
	   		{message= "(Warning! You have removed some of your cards!)"}
 		}
	})

	if (points == 0) {
    if (remainder==0){message = "No even Numbers to capture! "+message }
    if (remainder==1){message = "No odd Numbers to capture! "+message }
	}

    return [points,reds,blues,message]
}



function check_attack(reds,blues,move){
	card= move[0]

//	   console.log("=== APPLY",card)
    if (card[0].indexOf("all even")!=-1){
        return check_oddeven_all(move,blues, reds)}	
    if (card[0].indexOf("all odd")!=-1){
        return check_oddeven_all(move,blues, reds)}	
    if (card[0].indexOf("prime")!=-1){
        return check_prime(move,blues, reds)}	
    if (card[0].indexOf("even")!=-1){
        return check_oddeven(move,blues, reds)}	
    if (card[0].indexOf("odd")!=-1){
        return check_oddeven(move,blues, reds)}	
    if (card[0].indexOf("all range")!=-1){
        return check_range_all(move,blues, reds)}	
    if (card[0].indexOf("range")!=-1){
        return check_range(move,blues, reds)}	
    if (card[0].indexOf("all table")!=-1){
        return check_table_all(move,blues, reds)}	
    if (card[0].indexOf("table")!=-1){
        return check_table(move,blues, reds)}	
    if (card[0].indexOf("R number")!=-1){
        return check_rem_num(move,blues, reds)}	
    if (card[0].indexOf("Greatest")!=-1){
        return check_great(move,blues, reds)}	
    if (card[0].indexOf("Smallest")!=-1){
        return check_small(move,blues, reds)}	
    if (card[0].indexOf("|tm")!=-1){
        return check_max_total(move,blues, reds)}	 
    if (card[0].indexOf("|m")!=-1){
        return check_num_max(move,blues, reds)}	
    if (card[0].indexOf("|t")!=-1){
        return check_total(move,blues, reds)}	
    if (card[0] in nums){
    	return check_total(move,blues, reds)}
}

function check_id(reds,blues,id){
	//console.log("IDS",id)
    for (var i = 0; i < reds.length; i++){
    	if (id==reds[i][2]) {return 1}
	}	
    for (var i = 0; i < blues.length; i++){
    	if (id==blues[i][2]) {return 1}
	}	
	return 0
}

function exist_card(reds,blues,move){
	if (move[0]=="NA") return 1
//  console.log("exist",move)
//    for (var i = 0; i < move.length; i++){
    	if (check_id(reds,blues,move[2])==1) return 1
//	}	
	return 0
}

function check_move(reds,blues,stack){

	messages = []
	errors = 0
    reds_left = deepcopy(reds)
    blues_left = deepcopy(blues)
    points = 0
    warning = 0
    stack_size = stack.length
    for (var i = 0; i < stack.length; i++){ //outer loop, all the moves
    	
    //check if the cards in the move exist
    card_removed = 0
		for (var j = 0; j < stack[i].length; j++){
    	
 
    	if (exist_card(reds_left,blues_left,stack[i][j])==0)
    	{
    		warning =1
        card_removed = card_removed + 1
    		messages.push("Move "+String(i)+" - "+" Warning! Some cards were removed by previous moves")
    	}
      }

      //if all the cards were removed it is not an error
      if (card_removed==stack[i].length) {
        messages.push("Move "+String(i)+" - "+" All cards removed by previous moves, no mistake")
        //all cards removed        message.p
      }  else {  
    	//spells always exists, check number
  		[points,reds_left,blues_left,message] = check_attack(reds_left,blues_left,stack[i])
  		if (points==0){
  			errors = errors + 1

  		}
    	if (points>0) {message = "Good! "+String(points)+ " points scored! "+message}
    	messages.push("Move "+String(i+1)+" - "+" - " + message)
    }
    }

//   console.log(messages)
   return [errors,stack_size,messages]
}


function check_maths(reds,blues,stack){

  messages = []
  errors = 0
    reds_left = deepcopy(reds)
    blues_left = deepcopy(blues)
    points = 0
    warning = 0
    stack_size = stack.length
    for (var i = 0; i < stack.length; i++){ //outer loop, all the moves
    
    reds_left = deepcopy(reds)
    blues_left = deepcopy(blues)


    //check if the cards in the move exist
    card_removed = 0
    for (var j = 0; j < stack[i].length; j++){
      
 
      if (exist_card(reds_left,blues_left,stack[i][j])==0)
      {
        warning =1
        card_removed = card_removed + 1
        messages.push("Move Maths"+String(i)+" - "+" Warning! Some cards were removed by previous moves")
      }
      }

      //if all the cards were removed it is not an error
      if (card_removed==stack[i].length) {
        messages.push("Move Maths"+String(i)+" - "+" All cards removed by previous moves, no mistake")
        //all cards removed        message.p
      }  else {  
      //spells always exists, check number
      [points,reds_left,blues_left,message] = check_attack(reds_left,blues_left,stack[i])
      if (points==0){
        errors = errors + 1

      }
      if (points>0) {message = "Good! "+String(points)+ " points scored! "+message}
      messages.push("Move Maths"+String(i+1)+" - "+" - " + message)
    }
    }

//   console.log(messages)
   return [errors,stack_size,messages]
}



//[reds,blues,stack] = translate_move(reds,blues,full_stack)
//check_move(reds,blues,stack)

module.exports = { check_move,translate_move,check_maths }
