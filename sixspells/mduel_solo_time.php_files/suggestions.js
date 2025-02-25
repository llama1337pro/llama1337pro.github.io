/*
JAVASCRIPT VERSION
Created on Wed Sep 28 11:48:22 2022

@author: Pierpaolo Dondio
*/


//inputs 
//RED Bef [['15', '15', '10350'], ['12', '12', '10288'], ['13', '13', '10304'], ['15', '15', '10344'], ['3', '3', '10054'], ['9', '9', '10221'], ['1', '1', '10023'], ['2', '2', '10035'], ['7', '7', '10166'], ['4', '4', '10099'], ['10', '10', '10256']]
//BLUE Bef [['5', '5', '422M'], ['8', '4', '403M'], ['7', '7', '465M'], ['Remove prime', -1, '778']]
//yellow Bef [['Subtract 5', -1, '537'], ['Remove range 12,10000', -1, '823'], ['Give Total', -1, '924'], ['Remove all table 7', -1, '915'], ['Remove range 1,3', -1, '787'], ['Remove all table 4', -1, '900']]

var nopoints_card=['Switch','+1','+2','+3','+4','-1','-2','-3','-4','*2','*3','/2','/3','Give Max','Give Total','Create']

var operators =['+1','+2','+3','+4','+5','-1','-2','-3','-4','-5','*2','*3','/2','/3']

var instants =['+1','+2','+3','+4','+5','-1','-2','-3','-4','-5','*2','*3','/2','/3','Give Max','Give Total']

//Deck base
opp_deck = [
	["1",6],
	["2",6],
	["3",6],
	["4",6],
	["5",5],
	["6",5],
	["7",5],
	["8",5],
	["9",5],
	["10",4],
	["11",4],
	["12",4],
	["13",4],
	["14",4],
	["15",4]
]

deck_solo = [
	["1",6],
	["2",6],
	["3",6],
	["4",6],
	["5",5],
	["6",5],
	["7",5],
	["8",5],
	["9",5],
	["10",4],
	["11",4],
	["12",4],
	["13",5],
	["14",5],
	["15",5],

	["5|t",6],
	["6|t",6],
	["7|t",6],
	["8|t",6],
	["9|t",6],
	["10|t",7],
	["11|t",7],
	["12|t",7],

	["4|m",6],
	["5|m",6],
	["6|m",6],
	["7|m",6],

	["-1",3],
	["-2",2],
	["-3",2],
	["-4",2],
	["-5",2],
//	["-6",1],
//	["-7",1],

	["+1",4],
	["+2",4],
	["+3",3],
	["+4",3],
	["+5",3],
//	["+6",2],
//	["+7",2],
//	["+8",2],
//	["+9",1],


	["*2",3],
	["*3",3],
//	["*4",2],
//	["*5",2],
//	["*6",2],
//	["*7",2],
//	["*8",2],
//	["*9",2],

	["/2",4],
	["/3",4],

	["Merge +",6],
	["Merge x",6],

	["R Smallest",2],
	["R Greatest",2],

	["R range 12,10000",0],
	["R number 3",3],
	["R number 4",3],
	["R number 5",3],
		
	["R table 3",2],
	["R table 4",2],
	["R table 5",2],
	["R table 6",2],
	["R table 7",2],


	["R range 1,3",2],
	["R range 4,6",2],
	["R range 6,9",2],
	["R range 0,5",2],
	["R range 0,3",2],
	["R range 9,10000",2],
	["R range 13,10000",2],

	["R odd",3],
	["R even",3],

	["R all odd",2],
	["R all even",2],
		
	["R all range 1,3",2],
	["R all range 4,6",2],
	["R all range 6,9",2],
	["R all range 0,5",2],
	["R all range 0,3",2],
	["R all range 8,10000",2],
	["R all range 12,10000",2],
		
	["R all table 3",2],
	["R all table 4",2],
	["R all table 5",2],
	["R all table 6",2],
	["R all table 7",2],

	["R prime",4],
	["Switch",4],



	["Give Total",5],
	["Give Max",5],

	["Create 3",2],
	["Create 4",2],
	["Create 5",2],
	["Create 6",2]]

cards_list = [
	//	["1",1],
	["2",2],
	["3",3],
	["4",4],
	["5",5],
	["6",6],
	["7",7],
	["8",8],
	["9",9],
	["10",10],
	["11",11],
	["12",12],
	["13",13],
	["14",14],
	["15",15],

	["5|t",5],
	["6|t",6],
	["7|t",7],
	["8|t",8],
	["9|t",9],
	["10|t",10],
	["11|t",11],
	["12|t",12],

	["4|m",4],
	["5|m",5],
	["6|m",6],
	["7|m",6],

	["-1",-1],
	["-2",-1],
	["-3",-1],
	["-4",-1],
//	["-5",-1],
//	["-6",-1],
//	["-7",-1],

	["+1",-1],
	["+2",-1],
	["+3",-1],
	["+4",-1],
//	["+5",-1],
//	["+6",-1],
//	["+7",-1],
//	["+8",-1],
//	["+9",-1],


	["*2",-1],
	["*3",-1],
//	["*4",-1],
//	["*5",-1],
//	["*6",-1],
//	["*7",-1],
//	["*8",-1],
//	["*9",-1],

	["/2",-1],
	["/3",-1],

	["Merge +",-1],
	["Merge x",-1],

	["R Smallest",-1],
	["R Greatest",-1],

	["R number 3",-1],
	["R number 4",-1],
	["R number 5",-1],
		
	["R table 3",-1],
	["R table 4",-1],
	["R table 5",-1],
	["R table 6",-1],
	["R table 7",-1],


	["R range 1,3",-1],
	["R range 4,6",-1],
	["R range 6,9",-1],
	["R range 0,5",-1],
	["R range 0,3",-1],
	["R range 8,10000",-1],
	["R range 12,10000",-1],

	["R odd",-1],
	["R even",-1],

	["R all odd",-1],
	["R all even",-1],
		
		//	["R all range 1,3",-1],
	["R all range 4,6",-1],
	["R all range 6,9",-1],
	["R all range 0,5",-1],
	["R all range 0,3",-1],
	["R all range 8,10000",-1],
	["R all range 12,10000",-1],
		
	["R all table 3",-1],
	["R all table 4",-1],
	["R all table 5",-1],
	["R all table 6",-1],
	["R all table 7",-1],

	["R prime",-1],
	["Switch",-1],



	["Give Total",-1],
	["Give Max",-1],

	["Create 3",-1],
	["Create 4",-1],
	["Create 5",-1],
	["Create 6",-1]]

deck_nospell = [
	["1",6],
	["2",6],
	["3",6],
	["4",6],
	["5",5],
	["6",5],
	["7",5],
	["8",5],
	["9",5],
	["10",4],
	["11",4],
	["12",4],
	["13",5],
	["14",5],
	["15",5],

	["5|t",6],
	["6|t",6],
	["7|t",6],
	["8|t",6],
	["9|t",6],
	["10|t",7],
	["11|t",7],
	["12|t",7],

	["4|m",6],
	["5|m",6],
	["6|m",6],
	["7|m",6],

	["-1",5],
	["-2",5],
	["-3",5],
	["-4",5],
	["-5",5],

	["+1",5],
	["+2",5],
	["+3",5],
	["+4",5],


	["*2",6],
	["*3",6],
	["*4",6],
	["*5",6],

	["/2",4],
	["/3",4],
	["/4",4],
	["/5",4],

	["Merge +",4],
	["Merge x",4],

	["Give Total",5],
	["Give Max",5],
	]


var nums = []
for (var j = 1; j < 101; j++) {nums.push(String(j))}
var max_num = 15;
var new_card_id_move = 0;

const cpu_player =1
const human_player =0

var player_move = cpu_player


n=100
fast = 0 //1=stop at the first card, 0= never stop

//sample cards
//reds = [['6',6],['10',11],['8',8],['4',5]]
//blues = [['5',5],['3|m',11],['7',7],['R Prime',-1]]

function inset(value,arr){
   for (var k = 0; k < arr.length;k++){
          if (eq(arr[k],value)) {return true;}}
	return false	
}

function eq(o1,o2){
    return JSON.stringify(o1)==JSON.stringify(o2);
    }

function deepcopy(obj){
    return JSON.parse(JSON.stringify(obj))
}

function remove_card_temp(blues){
		filtered_cards = []
		blues.forEach((s) => {
			if (s[0].indexOf("Draw")==-1 && s[0].indexOf("Look")==-1) {filtered_cards.push(deepcopy(s))}
			})
	return filtered_cards
}

function suggest(blues,reds,n,fast) {
    var super_move = [];
    var super_max = 0;
    var card_max = [];
    var max_pts = 0;   
    var max_move = []; 
    var pts_distr = 0;
    var useful_cards = [];
    var shuffled_cards = pick_card(cards_list);
    exit_flag = 0;
    shuffled_cards.forEach((s) => {
        if (exit_flag==0){
        blues_new = deepcopy(blues);
        blues_new.push(s);  
        temp = optimal(blues_new,reds,blues_new.length,n);
        max_pts = temp[0]; pts_distr = temp[1]; max_move=temp[2];
        if (max_pts > 0) {
            useful_cards.push([s,max_pts]);}
        if (max_pts > super_max) {
            super_move = deepcopy(max_move);
            super_max = max_pts;
            card_max = deepcopy(s);}
        if ((fast==1) && (useful_cards.length==0)) {exit_flag=1;}
    	}
    	})
    return [useful_cards,super_move,card_max,super_max];
}

function random_choice(data){
    return deepcopy(data[Math.floor(Math.random()*data.length)]);
    }


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function random_randint(lower,upper){
    return lower + Math.floor(Math.random() * (upper+1-lower));
    }

function test_card(card,reds,blues) {
    card = random_choice(blues);
    blues = removeItemOnce(blues,card);
    return use_card(card,blues,reds);
}

function pick_card(sh_cards) {
   //       sh_cards =[x for (x in cards_list[:-4]];
        var sh_cards = shuffle(sh_cards);
        return sh_cards ;
}

/*
function generate_random_cards(n_blue,n_red) {
    //n_blue = number of blue cards;
    //n_red = number of red cards;
    var reds = [];
    var ids = 1;
    for (var i = 0; i < n_red; i++) {
        n = random_randint(1,20);
        reds.push([String(n),n]);}
    var blues = [];
    for (var i = 0; i < n_blue; i++) {
        n = random_randint(0,deck_solo.length-1);
        blues.push(deck_solo[n]);}
    new_nums = get_nums(blues);
    blues.forEach((card) => {
        if (inset(card,new_nums)) {
            card[1] = Number(card[0].split('|')[0]);
        } else {
            card[1]=-1;}
            })
    return [blues,reds];
}

                          


function convert_cards(red_bef,blue_bef,yellow_bef,stack) {

    var reds = [];
    var values = [];
    var new_stack = [];
    var blues = [];
    var blues_values = [];
    //reds;
    for (c in red_bef) {
        reds.push(c[0]);
        values.push([c[0],parseInt(c[1])]);}
    //blue;
    blue_bef.forEach((c) =>  {
        if (c[1]==-1) {
            ca = convert_spellname(c[0]);
            blues.push(ca);
            blues_values.push([ca,parseInt(c[1])]) }
        else {
            card = c[0];
            if (c[2].indexOf('M')==-1 &&  c[2].indexOf('T')==-1) {
                blues.push(c[1]);}
            if (c[2].indexOf('M')!=-1 &&  c[2].indexOf('T')==-1) {
                blues.push(c[1]+'|m');}
            if (c[2].indexOf('M')!=-1 &&  c[2].indexOf('T')!=-1) {
                blues.push(c[1]+'|tm');}
            if (c[2].indexOf('M')==-1 &&  c[2].indexOf('T')!=-1) {
                blues.push(c[1]+'|t');}
            blues_values.push([c[1]+'|t',parseInt(c[1])]);
            }
        })
    
    //add spells to blue;
    yellow_bef.forEach((c) =>  {
        ca = convert_spellname(c[0]);
        blues.push(ca);
        blues_values.push([ca,parseInt(c[1])]);})
    //stack;
    stack.forEach((c) =>  {
        new_stack.push([convert_spellname(c[0]),c.slice(1)]);})

    return [reds,values,blues,new_stack,blues_values];
}
*/


function find_indexes(arr,card){
    var indexes = [];
	for (var index = 0; index < arr.length; index++) {
  		if (eq(arr[index],card)) {indexes.push(index);}
  	}
    return indexes
}

function filter_special(cards){
	new_card=[]
	for (var j = 0; j < cards.length; j++) {
		if (cards[j][0].indexOf("Draw")==-1 && cards[j][0].indexOf("Look")==-1)
		{new_card.push(cards[j])}
	}
    return new_card
}

function get_optimal(blue_cards,red_cards,tot_cards,n){

	//unique card id
	var card_id_seq = new Array();
	card_id_seq.push(1);
	card_id_seq.push(10000);
	blue_cards=filter_special(blue_cards)
	red_cards=filter_special(red_cards)
	tot_cards = blue_cards.length	
    new_card_id_move = card_id_seq[1];
	pts = 0;
    max_move = [];
    max_pts=0;
    pts_distr=[];
    b_orig = deepcopy(blue_cards);
    for (var j = 0; j < n; j++) {
        blue_cards = []
		b_orig = shuffle(b_orig);
        for (var k = 0; k < tot_cards; k++) {blue_cards.push(b_orig[k]);}
        r = deepcopy(red_cards);
        b = deepcopy(blue_cards);
        [out, moves] = gen_moves(r,b);
        pts = comp_points2(blue_cards,red_cards,moves);
        pts_distr.push(pts);

       if (pts> max_pts) {  

            
            if (validate_move(moves)==1){max_move = deepcopy(moves);max_pts = pts;}
        		} else {
            if (pts==max_pts) {
                if (moves.length<max_move.length) {
                    
		            if (validate_move(moves)==1){max_move = deepcopy(moves);max_pts = pts;}
                	}
        		}    
               }
           }
    return [max_pts,pts_distr,max_move];

}

function optimal(blue_cards,red_cards,tot_cards,n) {
    
    new_card_id_move = card_id_seq[1];
	pts = 0;
    max_move = [];
    max_pts=0;
    pts_distr=[];
    b_orig = deepcopy(blue_cards);
    for (var j = 0; j < n; j++) {
        blue_cards = []
		b_orig = shuffle(b_orig);
        for (var k = 0; k < tot_cards; k++) {blue_cards.push(b_orig[k]);}
        r = deepcopy(red_cards);
        b = deepcopy(blue_cards);
        [out, moves] = gen_moves(r,b);
 //       console.log("Mossao",moves)
        pts = comp_points2(blue_cards,red_cards,moves);
        pts_distr.push(pts);

      //  if ((pts> max_pts) && (max_move[max_move.length - 1][2].length!=0)) {  //avoid self-swipe
       if (pts> max_pts) {  

            
            if (validate_move(moves)==1){max_move = deepcopy(moves);max_pts = pts;}
        		} else {
            if (pts==max_pts) {
                if (moves.length<max_move.length) {
                    
		            if (validate_move(moves)==1){max_move = deepcopy(moves);max_pts = pts;}
                	}
        		}    
               }
           }
    return [max_pts,pts_distr,max_move];
}
                

function isprime(num) {
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    if (primes.indexOf(num)!=-1) { return true;}
    return false;
}


function operation(card,blues,reds) {
    [tgt, color] = get_num(blues,reds)
   // console.log(tgt)

    if (card[0].indexOf("+")!=-1) { 
        if (color=='B') { 
  		    for (var k = 0; k < blues.length; k++) {
                if (eq(blues[k],tgt)) { 
                    if (blues[k][0].indexOf("|")!=-1) { 
                        if (parseInt(blues[k][0].split("|")[0])+parseInt(card[0].slice(1)) <=99){
                            blues[k][0]=String(parseInt(blues[k][0].split("|")[0])+parseInt(card[0].slice(1)))+"|"+blues[k][0].split("|")[1]
                        }
                        else{ blues[k][0]='99'+"|"+blues[k][0].split("|")[1]}
                    } else {
                        blues[k][0]=String(parseInt(blues[k][0])+parseInt(card[0].slice(1)))
                        if (parseInt(blues[k][0])>99) { blues[k][0]='99'}}
                    return [[card,[String(tgt[0])+color,parseInt(tgt[1]),tgt[2]]] , blues, reds]
                	
            	}
        	}
        }
        if (color=='R') {
  		    for (var k = 0; k < reds.length; k++) {
                 if (eq(reds[k],tgt)) { 
                    if (reds[k][0].indexOf("|")!=-1){ 
                        if (parseInt(reds[k][0].split("|")[0])+parseInt(card[0].slice(1)) <=99) {
                            reds[k][0]=String(parseInt(reds[k][0].split("|")[0])+parseInt(card[0].slice(1)))+"|"+reds[k][0].split("|")[1]
                        }
                        else {reds[k][0]='99'+"|"+reds[k][0].split("|")[1]}
                    } else {
                        reds[k][0]=String(parseInt(reds[k][0])+parseInt(card[0].slice(1)))
                        if (parseInt(reds[k][0])>99) {reds[k][0]='99'}}
                    return [[card,[String(tgt[0])+color,parseInt(tgt[1]),tgt[2]]] , blues, reds]
            		
        }
    	}}
    } // +


    if (card[0].indexOf("-")!=-1) { 
        if (color=='B') { 
  		    for (var k = 0; k < blues.length; k++) {
                if (eq(blues[k],tgt)) { 
                    if (blues[k][0].indexOf("|")!=-1) { 
                        if (parseInt(blues[k][0].split("|")[0])-parseInt(card[0].slice(1)) >0){
                            blues[k][0]=String(parseInt(blues[k][0].split("|")[0])-parseInt(card[0].slice(1)))+"|"+blues[k][0].split("|")[1]
                        }
                        else { blues[k][0]='1'+"|"+blues[k][0].split("|")[1]}
                    } else {
                        blues[k][0]=String(parseInt(blues[k][0])-parseInt(card[0].slice(1)))
                        if (parseInt(blues[k][0])<1) { blues[k][0]='1'}}
                    return [[card,[String(tgt[0])+color,parseInt(tgt[1]),tgt[2]]] , blues, reds]
                	
            	}
            }
        }
        if (color=='R') {
  		    for (var k = 0; k < reds.length; k++) {
                 if (eq(reds[k],tgt)) { 
                    if (reds[k][0].indexOf("|")!=-1){ 
                        if (parseInt(reds[k][0].split("|")[0])-parseInt(card[0].slice(1)) >0) {
                            reds[k][0]=String(parseInt(reds[k][0].split("|")[0])-parseInt(card[0].slice(1)))+"|"+reds[k][0].split("|")[1]
                        }
                        else {reds[k][0]='1'+"|"+reds[k][0].split("|")[1]}
                    } else {
                        reds[k][0]=String(parseInt(reds[k][0])-parseInt(card[0].slice(1)))
                        if (parseInt(reds[k][0])<1) {reds[k][0]='1'}}
                    return [[card,[String(tgt[0])+color,parseInt(tgt[1]),tgt[2]]] , blues, reds]
            		
        }
    	}
    	}
    } // -


    if (card[0].indexOf("*")!=-1) { 
        if (color=='B') { 
  		    for (var k = 0; k < blues.length; k++) {
                if (eq(blues[k],tgt)) { 
                    if (blues[k][0].indexOf("|")!=-1) { 
                        if (parseInt(blues[k][0].split("|")[0])*parseInt(card[0].slice(1)) <=99){
                            blues[k][0]=String(parseInt(blues[k][0].split("|")[0])*parseInt(card[0].slice(1)))+"|"+blues[k][0].split("|")[1]
                        }
                        else{ blues[k][0]='99'+"|"+blues[k][0].split("|")[1]}
                    } else {
                        blues[k][0]=String(parseInt(blues[k][0])*parseInt(card[0].slice(1)))
                        if (parseInt(blues[k][0])>99) { blues[k][0]='99'}}
                    return [[card,[String(tgt[0])+color,parseInt(tgt[1]),tgt[2]]] , blues, reds]
                	
            	}
            }
        }
        if (color=='R') {
  		    for (var k = 0; k < reds.length; k++) {
                 if (eq(reds[k],tgt)) { 
                    if (reds[k][0].indexOf("|")!=-1){ 
                        if (parseInt(reds[k][0].split("|")[0])*parseInt(card[0].slice(1)) <=99) {
                            reds[k][0]=String(parseInt(reds[k][0].split("|")[0])*parseInt(card[0].slice(1)))+"|"+reds[k][0].split("|")[1]
                        }
                        else { reds[k][0]='99'+"|"+reds[k][0].split("|")[1]}
                    } else {
                        reds[k][0]=String(parseInt(reds[k][0])*parseInt(card[0].slice(1)))
                        if (parseInt(reds[k][0])>99) {reds[k][0]='99'}}
                    return [[card,[String(tgt[0])+color,parseInt(tgt[1]),tgt[2]]] , blues, reds]
            		
        	}
        }
    	}
    } // *


    if (card[0].indexOf("/")!=-1) { 
        if ((parseInt(tgt[0].split("|")[0]) % parseInt(card[0].slice(1)))!=0) { return  [[card,"NA"] , blues, reds]}
        if (color=='B'){
  		    for (var k = 0; k < blues.length; k++) {
                if (eq(blues[k],tgt)) { 
                    if (blues[k][0].indexOf("|")!=-1){ blues[k][0]=String(parseInt(parseInt(blues[k][0].split("|")[0])/parseInt(card[0].slice(1))))+"|"+blues[k][0].split("|")[1]}
                    else { blues[k][0]=String(parseInt(parseInt(blues[k][0])/parseInt(card[0].slice(1))))}
                    return [[card,[String(tgt[0])+color,parseInt(tgt[1]),tgt[2]]] , blues, reds]
            	}
        }
    	}
        if (color=='R'){
  		    for (var k = 0; k < reds.length; k++) {
                if (eq(reds[k],tgt)) { 
                    if (reds[k][0].indexOf("|")!=-1) { reds[k][0]=String(parseInt(parseInt(reds[k][0].split("|")[0])/parseInt(card[0].slice(1))))+"|"+reds[k][0].split("|")[1] }
                    else {reds[k][0]=String(parseInt(parseInt(reds[k][0])/parseInt(card[0].slice(1))))}
                    return [[card,[String(tgt[0])+color,parseInt(tgt[1]),tgt[2]]] , blues, reds]
            }
        }
	    }
    } // /

    return  [[card,"NA"] , blues, reds]
}


function single_num(card,blues,reds){
    card_value = parseInt(card[0].split("|")[0])
    var card_to_remove = "NA"
    reds.forEach((r) => {
        if (card_value==parseInt(r[0].split("|")[0])){
        	if (card_to_remove=='NA'){
        		reds = removeItemOnce(reds,r)
            	card_to_remove = r}
        }
    })
//    console.log("single num 1",card,card_value,card_to_remove)
    if (card_to_remove=='NA') {return [[card,'NA'] , blues, reds]}
//    console.log("singl num",[[card,card_to_remove] , blues, reds])
    return [[card,card_to_remove] , blues, reds]
}

function num_max(card,blues,reds){
    var max_v = parseInt(card[0].split("|")[0])
    var reds_num = []
    reds.forEach((x) => {
    	if (parseInt(x[0].split("|")[0])<=max_v) {reds_num.push(x)}
	})
    if (reds_num.length>0){
        var card_picked = random_choice(reds_num)
        reds = removeItemOnce(reds,card_picked)
        return [[card,card_picked] , blues, reds]
    	}
    return [[card,"NA"] , blues, reds]
}

function compare( a, b ) {
  if ( parseInt(a[0].split("|")[0]) < parseInt(b[0].split("|")[0])) {
    return -1;
  }
  if ( parseInt(a[0].split("|")[0]) > parseInt(b[0].split("|")[0])) {
    return 1;
  }
  return 0;
}

function num_max_total(card,blues,reds){
    var max_v = parseInt(card[0].split("|")[0])
    var reds_num = []
    reds.forEach((x) => {
    	if (parseInt(x[0].split("|")[0])<=max_v) {reds_num.push(x)}
	})
	
    b = deepcopy(reds)
    var total=0
    var nums_m=[]
    var moves=[]
    //sort b by first element
    reds_num.sort (compare)
   // console.log(b)
    reds_num.forEach((j) => {
        total = total +parseInt(j[0].split("|")[0])
        	//console.log(total,max_v)
        if (total<=max_v) {
            nums_m.push(j)
            b = removeItemOnce(b,j)}
    })
    if (eq(nums_m,'[]')) { return [[card,"NA"] , blues, reds]}
	    return [[card].concat(nums_m) , blues, b]
}

  
function findComb2(lst, total,size){ 
      
	
	const getAllSubsets = 
	      theArray => theArray.reduce(
	        (subsets, value) => subsets.concat(
	         subsets.map(set => [value,...set])
	        ),
	        [[]]
	      );
	combo = []
	subsets = getAllSubsets(lst)
	subsets.forEach((s) =>
		{if ((s.reduce((partialSum, a) => partialSum + parseInt(a[0].split("|")[0]), 0))==total) {combo.push(s)} }
	)
	return combo
}

function new_num_total(card,blues,reds){
    total = parseInt(card[0].split("|")[0])
    reds_num = []
    reds.forEach((x) => {
    	if (parseInt(x[0].split("|")[0])<=total) {reds_num.push(x)}
	})
    moves = []
    //console.log("Good cards",reds_num,total)

    //all the combo
    j=0
    comb = findComb2(reds_num,total,j)
//    console.log(comb)

    if (comb.length==0) {
    	return [[card,"NA"] , blues, reds] }


   for (var k = 0; k < comb.length;k++){
            b = deepcopy(reds)
            ca=[]
 	
		   for (var j = 0; j < comb[k].length;j++){
		   	ca.push(comb[k][j])
		   	b = removeItemOnce(b,comb[k][j]) 
		   	}
		   	if (eq(b,'[]')){ return [[card].concat(ca) , blues, b]}
            moves.push([[card].concat(ca) , blues, b])
 	}


   for (var k = 0; k < moves.length;k++){
   		if (eq(moves[k][2],'[]')) {return moves[k]}
   		}
   for (var k = 0; k < moves.length;k++){
   		if (moves[k][2].length==1) {return moves[k]}
   		}
 

    if (eq(moves,'[]')) { return [[card,"NA"] , blues, reds]}
	//chose a move
    return random_choice(moves)
}

function merge_rand(card,blues,reds){
    op = card[0].split(" ")[1]
    blue_nums = get_nums(blues)

    if (blue_nums.length<2){ return [[card,"NA"] , blues, reds]}
	
	//get the total card and the max card
    max_card = ""
    tot_card = ""
    max_value = 0
    tot_value = 0
	
    blue_nums.forEach((j) => {
        if (j[0].indexOf("|m")!=-1) {
            if (parseInt(j[0].split("|")[0])>max_value) {
                max_value = parseInt(j[0].split("|")[0])
                max_card = j}
        }
        if (j[0].indexOf("|t")!=-1 && j[0].indexOf("|tm")==-1){  //only total , not max total
            if (parseInt(j[0].split("|")[0])>tot_value) {
                    tot_value = parseInt(j[0].split("|")[0])
                    tot_card = j}
         }
    })
    if (max_value>0 && tot_value>0){
        blues = removeItemOnce(blues,max_card)
        blues = removeItemOnce(blues,tot_card)
        if (op=="x"){ merge_card = max_value * tot_value}
        if (op=="+"){ merge_card = max_value + tot_value}
        if (merge_card>99) {merge_card=99}
        new_card_id_move = new_card_id_move+1;

        return [[card,max_card,tot_card], [[String(merge_card)+"|tm",max_card[1]+tot_card[1],new_card_id_move]].concat(blues), reds]
    }
    else{
		
        
        tot_red = 0
        reds.forEach((x) => {tot_red = tot_red + parseInt(x[0].split("|")[0])  })

    }
    if (max_value>0){  //no total card
			//remove the max cards to the simple nums and chose one
            blue_nums = removeItemOnce(blue_nums,max_card)
            second_card = random_choice(blue_nums)
            if (op=="x") {new_value = max_value*parseInt(second_card[0].split("|")[0])}
            if (op=="+") {new_value = max_value+parseInt(second_card[0].split("|")[0])}
            if (new_value>99){ new_value=99}
			//console.log(max_card,second_card,new_value)
            blues = removeItemOnce(blues,second_card)
            blues = removeItemOnce(blues,max_card)
		    new_card_id_move = new_card_id_move+1;

            return [[card,second_card,max_card], [[String(new_value)+"|m",max_card[1]+second_card[1],new_card_id_move]].concat(blues), reds]
    }
//    if (tot_value>0){  // total card
//			//remove the max cards to the simple nums and chose one
//            blue_nums = removeItemOnce(blue_nums,tot_card)
//            second_card = random_choice(blue_nums)
//            if (op=="x") {new_value = tot_value*parseInt(second_card[0].split("|")[0])}
//            if (op=="+") {new_value = tot_value+parseInt(second_card[0].split("|")[0])}
//            if (new_value>99){ new_value=99}
//            blues = removeItemOnce(blues,second_card)
//            blues = removeItemOnce(blues,tot_card)

//            return [[card,second_card,tot_card], [[String(new_value)+"|t",tot_card[1]+second_card[1]]].concat(blues), reds]
//    }
	
	//all the combinations of 2 numbers
    if (blue_nums.length>1){

    	first_card = random_choice(blue_nums)
    	blue_nums = removeItemOnce(blue_nums,first_card)
    	second_card = random_choice(blue_nums)
        c1 = parseInt(first_card[0].split("|")[0])
        c2 = parseInt(second_card[0].split("|")[0])
        if (op=="x") {merge_card = c1 * c2}
        if (op=="+") {merge_card = c1 + c2}
        if (merge_card>99) {merge_card=99}
        var ab = ""; var max = ""; var tot="";
    	if (first_card[0].indexOf("|t")!=-1 || second_card[0].indexOf("|t")!=-1) {ab="|t"}    		
    	if (first_card[0].indexOf("|m")!=-1 || second_card[0].indexOf("|m")!=-1) 
    		{if (ab=="|t") {ab="|tm"} else {ab="|m"}}
    	if (first_card[0].indexOf("|tm")!=-1 || second_card[0].indexOf("|tm")!=-1) {ab="|tm"}    		

        blues = removeItemOnce(blues,second_card)
        blues = removeItemOnce(blues,first_card)
        new_card_id_move = new_card_id_move+1;

        return [[card,first_card,second_card], [[String(merge_card)+ab,first_card[1] + second_card[1],new_card_id_move]].concat(blues), reds]
	}

    return [[card,"NA"] , blues, reds]
}

function rem_small(card,blues,reds){
	//get the  smallest
	min_value = 1000000
    reds.forEach((j) => {
        if (parseInt(j[0].split("|")[0])<=min_value) {
            min_value = parseInt(j[0].split("|")[0])
        }
    })
    blue_nums = get_nums(blues)
    blue_nums.forEach((j) => {
        if (parseInt(j[0].split("|")[0])<=min_value) {
            min_value = parseInt(j[0].split("|")[0])
        }
    })
	
	var to_remove = []
	//cancel all the minimum cards
    reds.forEach((j) => {
        if (parseInt(j[0].split("|")[0])==min_value){
            to_remove.push(deepcopy(j))
            reds = removeItemOnce(reds,j)
        }})
    blue_nums.forEach((j) => {
        if (parseInt(j[0].split("|")[0])==min_value){
            to_remove.push(deepcopy(j))
            blues = removeItemOnce(blues,j)
        }})

    return [[card].concat(to_remove), blues, reds]
}


function rem_great(card,blues,reds){
	//get the largest

    max_value = -100000
    reds.forEach((j) => {
        if (parseInt(j[0].split("|")[0])>=max_value) {
            max_value = parseInt(j[0].split("|")[0])
        }
    })
    blue_nums = get_nums(blues)
    blue_nums.forEach((j) => {
        if (parseInt(j[0].split("|")[0])>=max_value) {
            max_value = parseInt(j[0].split("|")[0])
        }
    })
	
	//cancel all the minimum cards
    var to_remove = []
    reds.forEach((j) => {
        if (parseInt(j[0].split("|")[0])==max_value){
            to_remove.push(deepcopy(j))
            reds = removeItemOnce(reds,j)
        }})
    blue_nums.forEach((j) => {
        if (parseInt(j[0].split("|")[0])==max_value){
            to_remove.push(deepcopy(j))
            blues = removeItemOnce(blues,j)
        }})

    return [[card].concat(to_remove), blues, reds]
}


function rem_num(card,blues,reds){
	//only reds
    card_value = card[0].split("|")[0].split(" ")[2]
    card_to_remove = 'NA'
    reds.forEach((r) => {
        if (card_to_remove=='NA' && r[0]==card_value){
            reds = removeItemOnce(reds,r)
            card_to_remove=deepcopy(r)}
    })
    return [[card,card_to_remove] , blues, reds]
}

function rem_table_all(card,blues,reds){
	seed = parseInt(card[0].split(" ")[3])
	var to_remove=[]
	//number to be removed
	reds.forEach((j) => {
		if (parseInt(j[0].split("|")[0]) % seed ==0) {
			reds = removeItemOnce(reds,j)
			to_remove.push(deepcopy(j))
		}
	})

	blue_nums = get_nums(blues)
	blue_nums.forEach((j) => {
		if (parseInt(j[0].split("|")[0]) % seed ==0) {
			blues = removeItemOnce(blues,j)
			to_remove.push(deepcopy(j))
		}
	})
 return [[card].concat(to_remove), blues, reds]
}

function rem_table(card,blues,reds){
	seed = parseInt(card[0].split(" ")[2])
	//numbers to be removed
    num_reds = []
    reds.forEach ((x) => { if ((parseInt(x[0].split("|")[0]) % seed) == 0) {num_reds.push(x)}})      
	num_reds = shuffle(num_reds)
	card_to_remove = 'NA'
    num_reds.forEach((r) => {
        if (card_to_remove=='NA'){
            reds = removeItemOnce(reds,r)
            card_to_remove=r}
    })
    return [[card,card_to_remove] , blues, reds]
}

function rem_range_all(card,blues,reds){
	int_min = parseInt(card[0].split(" ").slice(-1)[0].split(",")[0])
	int_max = parseInt(card[0].split(" ").slice(-1)[0].split(",")[1])
	if (int_max == 10000) {int_min = int_min + 1}
	removed = []
	reds.forEach((j) => {
		if ((parseInt(j[0].split("|")[0])>=int_min) && (parseInt(j[0].split("|")[0])<=int_max)){
			reds = removeItemOnce(reds,j)
			removed.push(deepcopy(j))
		}
	})

	blue_nums = get_nums(blues)
	blue_nums.forEach((j) => {
		if ((parseInt(j[0].split("|")[0])>=int_min) && (parseInt(j[0].split("|")[0])<=int_max)){
			blues = removeItemOnce(blues,j)
			removed.push(deepcopy(j))
		}
	})
	return [[card].concat(removed),blues,reds]
}

function rem_range(card,blues,reds){
	int_min = parseInt(card[0].split(" ").slice(-1)[0].split(",")[0])
	int_max = parseInt(card[0].split(" ").slice(-1)[0].split(",")[1])
	if (int_max == 10000) {int_min = int_min + 1}

	//number that are removed
    num_reds = []
    reds.forEach ((x) => { if ((parseInt(x[0].split("|")[0]) >=int_min) && (parseInt(x[0].split("|")[0])<=int_max)) {num_reds.push(x)}})      
	num_reds = shuffle(num_reds)
//	console.log(num_reds,int_min,int_max)
	if (num_reds.length>0){
		reds = removeItemOnce(reds,num_reds[0])
		return [[card,num_reds[0]],blues,reds]}
		else {return [[card,"NA"],blues,reds]}
}

function rem_oddeven_all(card,blues,reds){
	seed = 2
	remainder = 0
	if (card[0].indexOf("all odd")!=-1) {remainder = 1}
	removed = []
	reds.forEach((j) => {
		if (parseInt(j[0].split("|")[0]) % seed ==remainder){
			reds = removeItemOnce(reds,j)
			removed.push(deepcopy(j))
		}
	})
	
	blue_nums = get_nums(blues)
	blue_nums.forEach((j) => {
		if (parseInt(j[0].split("|")[0]) % seed ==remainder){
			blues = removeItemOnce(blues,j)
			removed.push(deepcopy(j))
		}
	})
	return [[card].concat(removed),blues,reds]
}

function rem_oddeven(card,blues,reds){
	seed = 2
	remainder = 0
	if (card[0].indexOf("odd")!=-1) {remainder = 1}

	num_reds = []
    reds.forEach ((x) => { if ((parseInt(x[0].split("|")[0]) % seed) == remainder) {num_reds.push(x)}})      
	
	num_reds = shuffle(num_reds)
	if (num_reds.length==0) {return [[card,"NA"],blues,reds]}
	reds = removeItemOnce(reds,num_reds[0])
		return [[card,num_reds[0]],blues,reds]
}

function rem_prime(card,blues,reds) {
	primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

	num_primes = []
    reds.forEach ((x) => { if (inset(parseInt(x[0].split("|")[0]),primes)) {num_primes.push(x)}})      

	num_primes = shuffle(num_primes)
	if (num_primes.length==0) {return [[card,'NA'],blues,reds]}
	reds = removeItemOnce(reds,num_primes[0])
	return [[card,num_primes[0]],blues,reds]
}

function give_abilities(card,blues,reds){
    ability = card[0].split(" ")[1]

	blue_nums = []
    blues.forEach ((x) => { if (inset(x[0].split("|")[0],nums)) {blue_nums.push(x)}})      

    if (blue_nums.length==0){ return [[card,"NA"], blues, reds]}
    
    card_abilities = random_choice(blue_nums)
    if (ability=="Max"){
        if (card_abilities[0].indexOf("|t")!=-1){
            blues.push([card_abilities[0].split("|")[0]+"|tm",parseInt(card_abilities[1]),card_abilities[2]])
        }
        if (card_abilities[0].indexOf("|t")==-1){
            blues.push([card_abilities[0].split("|")[0]+"|m",parseInt(card_abilities[1]),card_abilities[2]])
        }
    }

    if (ability=="Total"){ 
        if (card_abilities[0].indexOf("|m")!=-1){
            blues.push([card_abilities[0].split("|")[0]+"|tm",parseInt(card_abilities[1]),card_abilities[2]])
        }
        if (card_abilities[0].indexOf("|m")==-1){
            blues.push([card_abilities[0].split("|")[0]+"|t",parseInt(card_abilities[1]),card_abilities[2]])
        }
    }
    blues = removeItemOnce(blues,card_abilities)
    return [[card,card_abilities], blues, reds]
}

function switch_num(card,blues,reds){
    blue_nums = []
    red_nums=[]
    card_color=''
    var card_switched=""
    blues.forEach((x) => {if ((inset(x[0].split("|")[0],nums))) {blue_nums.push(x)}})
    reds.forEach((x) => {if ((inset(x[0].split("|")[0],nums))) {red_nums.push(x)}})
    if ((blue_nums.length==0) && (red_nums.length==0)){ 
        return [[card,"NA"], blues, reds]}
    choice=['b','r']
    if (blue_nums.length==0) {card_color='r'}
    if (red_nums.length==0) {card_color='b'}
    if ((blue_nums.length>0) && (red_nums.length>0)) {card_color = String(random_choice(choice))}
    if (card_color=="b"){ 
        card_switched = random_choice(blue_nums)
        blues = removeItemOnce(blues,card_switched)
        reds.push(card_switched)}
    if (card_color=="r"){ 
        card_switched = random_choice(red_nums)
        reds = removeItemOnce(reds,card_switched)
        blues.push(card_switched)}

    return [[card,[card_switched[0]+card_color,card_switched[1],,card_switched[2]]], blues, reds]
}

function use_card(card,blues,reds){
    //console.log("=== APPLY",card)
    if (card[0].indexOf("Give")!=-1){
        return give_abilities(card,blues, reds)}
    if (card[0].indexOf("Create")!=-1){
    	new_card_id_move = new_card_id_move+1;
        return [[card, [card[0].split(" ")[1],parseInt(card[0].split(" ")[1]),new_card_id_move]], blues.concat([[card[0].split(" ")[1],parseInt(card[0].split(" ")[1]),new_card_id_move]]), reds]}	
    if (card[0].indexOf("all even")!=-1){
        return rem_oddeven_all(card,blues, reds)}	
    if (card[0].indexOf("all odd")!=-1){
        return rem_oddeven_all(card,blues, reds)}	
    if (card[0].indexOf("prime")!=-1){
        return rem_prime(card,blues, reds)}	
    if (card[0].indexOf("even")!=-1){
        return rem_oddeven(card,blues, reds)}	
    if (card[0].indexOf("odd")!=-1){
        return rem_oddeven(card,blues, reds)}	
    if (card[0].indexOf("all range")!=-1){
        return rem_range_all(card,blues, reds)}	
    if (card[0].indexOf("range")!=-1){
        return rem_range(card,blues, reds)}	
    if (card[0].indexOf("all table")!=-1){
        return rem_table_all(card,blues, reds)}	
    if (card[0].indexOf("table")!=-1){
        return rem_table(card,blues, reds)}	
    if (card[0].indexOf("Switch")!=-1){
        return switch_num(card,blues, reds)}	
    if (card[0].indexOf("R number")!=-1){
        return rem_num(card,blues, reds)}	
    if (card[0].indexOf("Greatest")!=-1){
        return rem_great(card,blues, reds)}	
    if (card[0].indexOf("Smallest")!=-1){
        return rem_small(card,blues, reds)}	
    if (card[0].indexOf("Merge")!=-1){
        return merge_rand(card,blues, reds)}	
    if (card[0].indexOf("|tm")!=-1){
        return num_max_total(card,blues, reds)}	
    if (card[0].indexOf("|t")!=-1){
        return new_num_total(card,blues, reds)}	
    if (card[0].indexOf("|m")!=-1){
        return num_max(card,blues, reds)}	
    if ((card[0].indexOf("+")!=-1) || (card[0].indexOf("-")!=-1) || (card[0].indexOf("/")!=-1) || (card[0].indexOf("*")!=-1)){
        return operation(card,blues,reds)}
    if (card[0] in nums){
    	//console.log("Single!")
    	return single_num(card,blues, reds)}
}

function get_nums(blues){
    t=[]
    blues.forEach((j) => {
    	if (inset(j[0].split("|")[0],nums)){
            t.push(j)} 
    })
    return t
}

function get_num(blues,reds){
	blue_nums = get_nums(blues)  //get all the number cards
	ind = random_randint(0,blue_nums.length+reds.length-1)
	//console.log(ind,blue_nums.length+reds.length)
	if (ind<blue_nums.length){ return [deepcopy(blue_nums[ind]), "B"]}
	if (ind>=blue_nums.length){ return [deepcopy(reds[ind-blue_nums.length]), "R"]}
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

function gen_moves(reds,blues){
    var moves = []
    while (blues.length>0){
        move = []
        card = blues[0]
        blues = removeItemOnce(blues,card)
        t = use_card(card,blues,reds)
        move = t[0]; blues = t[1]; reds = t[2]
        moves.push([move, deepcopy(blues), deepcopy(reds)])
        if (reds.length==0){ 
            return [1,moves]}
        if (blues.length==0){ 
            return [-1, moves]}
        }
}

function del_elements(el,indexes){
    a=[]
    for (var j = 0; j < el.length; j++) {
        if (!(j in indexes)) {
            a.push(el[j])}
    }
    return a
}
    
function npoints_card(card_name){
    for (var j = 0; j < nopoints_card.length; j++) {
        if (card_name==nopoints_card[j]) {
            return true
    }}
    return false
}

function comp_points2(blues,reds,moves){
    
    var points = 0
    for (var j = 0; j < moves.length; j++) {
        r_aft = moves[j][2]
        if (j==0){
            r_bef = reds}
        else{
            r_bef = moves[j-1][2]}
        //var to_del=[]
        card_used = moves[j][0][0]

        //cards that change the values of the points
        //switch / operations / merge
        
        if (npoints_card(card_used[0])==false) {            
            if (!(eq(r_aft,r_bef))) {
                //get the new cards
                //missing cards
                del_cards = []
                r_bef.forEach((c) => {
                    if (!(inset(c,r_aft))) {del_cards.push(c)}
                })  
                del_cards.forEach((c) =>{
                    //get the position and points
                    p=0
                    ind=-1
                    for (var k = 0; k < r_bef.length;k++) {
                        if (eq(r_bef[k],c)) {
                            if (r_bef[k][1]>p){
                                ind = k
                                p=r_bef[k][1]}}}
                    points = points + p
                    //cancel the card
                   // to_del.push(ind)
               })
                    }
          //  reds = del_elements(reds,to_del)
    	}
    }

    return points        
}

function suggest_card(blues,reds,n,fast){

	sug_cards = suggest(blues,reds,n,fast)
	useful_cards = sug_cards[0]
	sug_card = shuffle(useful_cards)[0]
	console.log(sug_card)
	return sug_card
} 

function validate_move(move){
		return 1
   for (var k = 0; k < move.length;k++) {
   	 if (move[k][0][1]=='NA') {
   	 	return 0
   	 }	
	}
	return 1
}

function show_move(move){
   for (var k = 0; k < move.length;k++) {
 		console.log("======================")  	
 		console.log("MOVE",move[k][0])  	
 		console.log("reds",move[k][1])  	
 		console.log("blues",move[k][2])  	

}
}

function suggest_fast(blues,reds,fast){

    var card_max = [];
    var max_pts = 0; var super_max = 0;  
    var max_move = []; 
    var useful_cards = [];
    var shuffled_cards = pick_card(cards_list);
    blues_orig = deepcopy(blues)
    reds_orig = deepcopy(reds)
  // 	console.log(blues,reds)

    exit_flag = 0;
    shuffled_cards.forEach((s) => {
        if (exit_flag==0 && s[0]!="Switch"){
	    blues_orig = deepcopy(blues)
	    reds_orig = deepcopy(reds)
    //	console.log(s,blues,reds)
       	t = use_card(s,blues_orig,reds_orig)
        var bl = t[1]; var r_aft = t[2]
    //	console.log(s,blues,reds)
        var points = 0
        if (!(eq(r_aft,reds))) {
                del_cards = []
                reds.forEach((c) => {
                    if (!(inset(c,r_aft))) {del_cards.push(c)}  })  
                del_cards.forEach((c) =>{
                    //get the position
                    p=0
                    ind=-1
                    for (var k = 0; k < reds.length;k++) {
                        if (eq(reds[k],c)) {
                            if (reds[k][1]>p){
                                ind = k
                                p=reds[k][1]}}}
                    points = points + p
                    })
                   }
        if (points > 0) {
            useful_cards.push([s,points]);}
        if (points > super_max) {
            super_max = points;
            card_max = deepcopy(s);}
        if ((fast==1) && (useful_cards.length>0)) {exit_flag=1;}
    	}
    	})
    //	console.log(blues,reds)
    	//console.log(blues_orig,reds_orig)
    	useful_cards.concat(use_operation(blues_orig,reds_orig))
    //	console.log("useful cards",useful_cards	)
    return shuffle(useful_cards)[0]   //[useful_cards,card_max,super_max];
}

function use_operation(blues,reds){
	
	function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }

	//sum and subtractions
	var blue_nums = get_nums(blues)
	var deltas = []
    var useful_cards = []
    for (var k = 0; k < reds.length;k++) {
	    for (var j = 0; j < blue_nums.length;j++) {
	    	deltas.push(Math.abs(parseInt(reds[k][0].split("|")[0])-parseInt(blue_nums[j][0].split("|")[0])))
	    }
    }
    deltas = removeDuplicates(deltas)
    for (var k = 0; k < deltas.length;k++) {
    	if (Math.abs(deltas[k])>0 && Math.abs(deltas[k])<6) { 
    		var s = "Add "+String(Math.abs(deltas[k])); useful_cards.push([s,-1])
    		var s = "Subtract "+String(Math.abs(deltas[k])); useful_cards.push([s,-1])

    	}
    }
    console.log("Deltas",deltas)
	var deltas = []
    for (var k = 0; k < reds.length;k++) {
	    for (var j = 0; j < blue_nums.length;j++) {

	    	if ((parseInt(reds[k][0].split("|")[0]) % parseInt(blue_nums[j][0].split("|")[0])) ==0) {
	    	deltas.push(Math.abs(parseInt(reds[k][0].split("|")[0])/parseInt(blue_nums[j][0].split("|")[0])))}
	
	    	if ((parseInt(blue_nums[j][0].split("|")[0]) % parseInt(reds[k][0].split("|")[0])) ==0) {
	    	deltas.push(Math.abs(parseInt(blue_nums[j][0].split("|")[0])/parseInt(reds[k][0].split("|")[0])))}
	    }
    }
    deltas = removeDuplicates(deltas)
    for (var k = 0; k < deltas.length;k++) {
    	if (Math.abs(deltas[k])>1 && Math.abs(deltas[k])<4) { 
    		var s = "Multiply "+String(Math.abs(deltas[k])); useful_cards.push([s,-1])
    		var s = "Divide "+String(Math.abs(deltas[k])); useful_cards.push([s,-1])

    	}
    }

    console.log("Deltas",deltas,useful_cards)
    return useful_cards
}

function check_operations(max_move){
	//check if an instant +/-* was used on a card but the card was not used
	//if not used remove from the move
	var id_op = 0
	var used = false
	var to_remove = []
   	for (var j = 0; j < max_move.length; j++){
		if (operators.indexOf(max_move[j][0][0][0])!=-1){
			//get the card
			console.log(max_move[j][0][0][0])
			if (max_move[j][0][1]!="NA"){
				id_op = max_move[j][0][1][2]
				used = false
				console.log("used on",id_op)

				//ckeck if the id_op is used. The card was used or was the target of a merge or switch
				//check if was used as a regular number
				for (k = j+1; k < max_move.length; k++){
					console.log(max_move[k][0][0][2],id_op)
					if (max_move[k][0][0][2]==id_op) {used = true}
				}
				if (used==false){
					//add the move to the list of removed
					to_remove.push(j)
				}
			}

		}

}
		return to_remove
}

function move_all_spells(move){
	new_move = []
   	for (var j = 0; j < max_move.length; j++){
   		if ((max_move[j][0][0][0].indexOf("all")==-1)) //all spells
   		{
   				new_move.push(max_move[j])
   		}
   	}
   	for (var j = 0; j < max_move.length; j++){
   		if ((max_move[j][0][0][0].indexOf("all")!=-1)) //all spells
   		{
   				new_move.push(max_move[j])
   		}
   	}
   	return new_move	
}


function adjust_new_cards(move_list){

    new_card_id_move = card_id_seq[1];
   	for (var j = 0; j < move_list.length; j++){
    		if (move_list[j]>new_card_id_move) {
    			new_card_id_move = new_card_id_move+ 1
    			move_list = move_list.map(function(item) { return item == move_list[j] ? new_card_id_move : item; });	
    		}
    }
    return move_list
}


function get_mistakes(){
	//get stack representation

}


function gen_ids(player,max_move){
    var move_list=[]

    function is_inhand(card_id,in_hand){
			for (var y = 0; y < in_hand.length; y++)
			{
				if (card_id==in_hand[y]) {return y}
			}
			return -1
	}

	max_move = move_all_spells(max_move)
	var in_hand = []
	for (var y = 0; y < game.hands[opponent].cards.length; y++)
	{
		in_hand.push(game.hands[opponent].cards[y].id)
	}

    //put down all the numebr cards needed
   	for (var j = 0; j < max_move.length; j++){
		for (var k = 0; k < max_move[j][0].length; k++){
   			if (max_move[j][0][1]!="NA") 
   				{	
   				if (is_inhand(max_move[j][0][k][2],in_hand)>-1 && max_move[j][0][k][1]!=-1) {  
   					//card in hand, put down
   				if (move_list.indexOf(max_move[j][0][k][2])==-1) {move_list.push(max_move[j][0][k][2])}
   				console.log("From hand",max_move[j][0][k],in_hand,move_list)}
   				}}}
    console.log("max",max_move)
   	for (var j = 0; j < max_move.length; j++){
   		if ((max_move[j][0][1]!="NA") && ((max_move[j][0][0][0].indexOf("all")!=-1) || (max_move[j][0][0][0].indexOf("Create")!=-1))) //all spells
   			{move_list.push(max_move[j][0][0][2])}		   		
   		for (var k = 0; k < max_move[j][0].length; k++){
	  			console.log("Check move",max_move[j][0][1],max_move[j][0][k][2])
   			if ((max_move[j][0][1]!="NA") && ((max_move[j][0][0][0].indexOf("all")==-1) && (max_move[j][0][0][0].indexOf("Create")==-1)))
   						{	
   							move_list.push(max_move[j][0][k][2])}	
   						}
   							console.log("new move list",move_list)
   					}
    move_list = adjust_new_cards(move_list)
    return move_list

}

//compute points given a stack
function points_stack(stack,blues,reds){

	function check_valid(ids,cards){
		for (var j = 0; j < cards.length; j++) {if (ids.indexOf(cards[j])==-1) {return 0}}
		return 1}

	function get_ids(cards){
		ids=[]
		for (var j = 0; j < cards.length; j++) {ids.push(cards[j])}
		return ids}


	//collect all the active cards cards
	active_ids = get_ids(blues).concat(get_ids(reds))
 	points = 0 
   	//for each attack check if it is valid
   	for (var j = 0; j < stack.length; j++){
   			if (check_valid(stack[j])){
   				if (stack[j][0][1]==-1) {
   					//spells
   				} else
   				{
   					//numbers
   				}
   			}
   	}


}


module.exports = { get_optimal }

//reds and blue cards (blue includes also the yellow ones)
//first is the name of the card, then the value (points) of each card

// suggest function
//suggest returns the list of cards that can score points
//INPUTS: 
//red and blue cards(blue include yellow as well)
//n = number of tries for each card
//fast (boolean) = if the computation ends when the first useful card is found
//OUTPUTS:
//useful_cards = list of all the suggested cards that can score points. Every element of the list is [card,points]
//super_move = the move that generates the highest amount of points
//card_max = the best cards (highest points)

//[blues,reds] = generate_random_cards(random_randint(1,8),random_randint(1,11))
//[useful_cards,super_move,card_max,super_max] = suggest(blues,reds,n,fast)