var random_guy = 1;
var one_step = 2;  //discard closest number if no perfect match / do not use 
const from_hand = 1;
const from_inplay = 0;
var cards_moves =[];


class AI_player {
	constructor(name,ai_level,player,version){
		this.name=name;
		this.level=ai_level;  //just randomlevels
		this.mycards=[];
		this.targets_list=[];
		this.version= version;

		//assign level features

		//sort 
		if (this.level>16) {this.sort=1} else {this.sort=0;}
		
		//number of moves
		this.max_moves = 1;
		if (this.level>1) {this.max_moves = 2;}
		if (this.level>5) {this.max_moves = 3;}
		if (this.level>13) {this.max_moves = 3;}
		if (this.level>20) {this.max_moves = 4;}
		if (this.level>26) {this.max_moves = 4;}
		if (this.level>30) {this.max_moves = 10;}

		//randomness
		//it decides the number of moves and the sort
		this.random_level = 0.2 + this.level*0.022;
		console.log("AI PLAYER == ",version);

		//deck selection - normal or first class
		if (this.version!=1){
			if (this.level==1) {this.deck = deck_card_level_1;}
			if (this.level==2 || this.level==3 ) {this.deck = deck_card_level_2;}
			if (this.level==4 || this.level==5 ) {this.deck = deck_card_level_3;}
			if (this.level==6 || this.level==7 ) {this.deck = deck_card_level_4;}
			if (this.level==8 || this.level==9 || this.level==10 ) {this.deck = deck_card_level_5;}
			if (this.level==11 || this.level==12 || this.level==13 ) {this.deck = deck_card_level_6;}
			if (this.level==14 || this.level==15 || this.level==16 ) {this.deck = deck_card_level_7;}
			if (this.level==17 || this.level==18 || this.level==19 ) {this.deck = deck_card_level_8;}
			if (this.level==20 || this.level==21 || this.level==22 ) {this.deck = deck_card_level_9;}
			if (this.level==23 || this.level==24 || this.level==25 ) {this.deck = deck_card_level_10;}
			if (this.level==26 || this.level==27 || this.level==28 ) {this.deck = deck_card_level_11;}
			if (this.level==29 || this.level==30 || this.level==31 ) {this.deck = deck_card_level_12;}
			if (this.level==32 || this.level==32 || this.level==33 ) {this.deck = deck_card_level_black;}
			if (this.level==34) {this.deck = deck_card_level_high;}
			if (this.level==35) {this.deck = deck_card_level_highest;}
		} else
		{
			if (this.level==1) {this.deck = deck_solo_first_1;}
			if (this.level==2 || this.level==3 ) {this.deck = deck_solo_first_1;}
			if (this.level==4 || this.level==5 ) {this.deck = deck_solo_first_1;}
			if (this.level==6 || this.level==7 ) {this.deck = deck_solo_first_2;}
			if (this.level==8 || this.level==9 || this.level==10 ) {this.deck = deck_solo_first_2;}
			if (this.level==11 || this.level==12 || this.level==13 ) {this.deck = deck_solo_first_2;}
			if (this.level==14 || this.level==15 || this.level==16 ) {this.deck = deck_solo_first_3;}
			if (this.level==17 || this.level==18 || this.level==19 ) {this.deck = deck_solo_first_3;}
			if (this.level==20 || this.level==21 || this.level==22 ) {this.deck = deck_solo_first_3;}
			if (this.level==23 || this.level==24 || this.level==25 ) {this.deck = deck_solo_first_4;}
			if (this.level==26 || this.level==27 || this.level==28 ) {this.deck = deck_solo_first_4;}
			if (this.level==29 || this.level==30 || this.level==31 ) {this.deck = deck_solo_first_4;}
			if (this.level==32 || this.level==32 || this.level==33 ) {this.deck = deck_solo_first_5;}
			if (this.level==34) {this.deck = deck_solo_first_5;}
			if (this.level==35) {this.deck = deck_solo_first_5;}

		}
	//		console.log(this.name,this.level,this.sort,this.random_level,this.max_moves);

	}

	rand_action(){  //execute an action or not
		var i = Math.random();
		if (i<this.random_level) {return 1}  
		return 0;
	}

	match_num_dist(hand,opp_inplay)
	{
			distance=100000;
			card_index = -1;
			for (var i = 0; i < hand.cards.arrayLength; i++)
			{
				for (var j = 0; j  < opp_inplay.cards.arrayLength; j++)
				{
					if (Maths.abs(hand.cards[i].cvalue-opp_inplay.cards[j].cvalue)<distance)
					{
						card_index=i;
					}
				}
	
			}
			return card_index;
	}

	discard_card(strategy){
		//strategy: smaller / random / highest
	}

	spell_moves(loc,card,opp_inplay,my_inplay){
		//check spells that can be used

	}

	select_card_to_discard(){
		var rank_card = -1;
		var min_rank = 20000;
		var target_card = 0;
		var min_card_pos = -1;
		for (var j = 0; j < game.hands[you].cards.length; j++){
				console.log("Discard",game.hands[you].cards[j].name,card_rank.indexOf(game.hands[you].cards[j].name));
				rank_card = card_rank.indexOf(game.hands[you].cards[j].name);
				if (rank_card>=0 && rank_card<min_rank) {min_rank=rank_card;min_card_pos=j;}  
			}
		if (min_card_pos==-1) {game.hands[you].cards[0].id;}
		return game.hands[you].cards[min_card_pos].id;
	}

	card_moves(loc,card,opp_inplay){
		var moves=[];
		var points=0;
		var targets_card=[card.id];
		var discard_id	=0;
		console.log("CARTA: ",card.name);

		if (card.name.indexOf("Turn")!=-1){ moves.push([card.id,0]);return moves; }
		if (card.name.indexOf("Discard")!=-1){ 
			return moves; }


		if (card.name.indexOf("Remove")!=-1 && card.name.indexOf("all")!=-1){  //remove all
			if (card.name.indexOf("odd") !=-1){
				for (var j = 0; j < opp_inplay.cards.length; j++){
					if (opp_inplay.cards[j].cvalue % 2==1){ 
					points = points + opp_inplay.cards[j].base_value;
					targets_card.push(opp_inplay.cards[j].id);
				}}
				if (points==0) {return [];}
				this.targets_list.push(targets_card);
				moves.push([card.id,-1*points]);  //negative for all targets
				return moves; 				
			}
			if (card.name.indexOf("even") !=-1){
				for (var j = 0; j < opp_inplay.cards.length; j++){
					if (opp_inplay.cards[j].cvalue % 2==0){ 
					points = points + opp_inplay.cards[j].base_value;
					targets_card.push(opp_inplay.cards[j].id);
				}}
				if (points==0) {return [];}
				this.targets_list.push(targets_card);
				moves.push([card.id,-1*points]);  //negative for all targets
				return moves;				
			}
			if (card.name.indexOf("table") !=-1){
				var target_value = parseInt(card.name.split(" ")[3]);
				for (var j = 0; j < opp_inplay.cards.length; j++){
					if (opp_inplay.cards[j].cvalue % target_value==0){ 
					points = points + opp_inplay.cards[j].base_value;
					targets_card.push(opp_inplay.cards[j].id);
				}}
				if (points==0) {return [];}
				this.targets_list.push(targets_card);
				moves.push([card.id,-1*points]);  //negative for all targets
				return moves;				
			}

			if (card.name.indexOf("range") !=-1){
				var temp = card.name.split(" ");
				var temp2 = temp[temp.length - 1].split(",");
				var num_from = parseInt(temp2[0]);
				var num_to = parseInt(temp2[1]);
				if (num_to==10000) {num_from = num_from+1}
				for (var j = 0; j < opp_inplay.cards.length; j++){
					if (opp_inplay.cards[j].cvalue>=num_from &&  opp_inplay.cards[j].cvalue<=num_to){  //right card
						points = points + opp_inplay.cards[j].base_value;
 						targets_card.push(opp_inplay.cards[j].id)};
				}
				if (points==0) {return [];}
				this.targets_list.push(targets_card);
				moves.push([card.id,-1*points]);  //negative for all targets
				return moves;				
			}
		

		};


		if (card.name.indexOf("Remove")!=-1 && card.name.indexOf("all")==-1){  //remove partial
			//remove odd
			if (card.name.indexOf("odd") !=-1)
			{
				for (var j = 0; j < opp_inplay.cards.length; j++){
				if (opp_inplay.cards[j].cvalue % 2==1){
						moves.push([card.id,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);}
				} return moves;} 
			
			//remove prime
			if (primes.indexOf(card.cvalue)!=-1)
			{
				for (var j = 0; j < opp_inplay.cards.length; j++){
				if (primes.indexOf(opp_inplay.cards[j].cvalue)!=-1){
						moves.push([card.id,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);}
				} return moves;} 


			//remove even
			if (card.name.indexOf("even") !=-1)
			{
				for (var j = 0; j < opp_inplay.cards.length; j++){
				if (opp_inplay.cards[j].cvalue % 2==0){
						moves.push([card.id,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);}
				} return moves;}

			//remove greatest/smallest
			if (card.name.indexOf("Greatest") !=-1 || card.name.indexOf("Smallest") !=-1)  
			{
				return moves;
				var greatest = 0;
				if (card.name.indexOf("Greatest") !=-1) {greatest=1};
				//find the maximum card
				//console.log("greatest=",greatest)
				if (greatest==1) {var list_max = get_max_card();}
				if (greatest==0) {var list_max = get_min_card();}
				//console.log("greatest card=",list_max);
				//check the card
				mycards=this.mycards;
				//points
				for (var j = 0; j < list_max.length; j++){ points = points + getCard(list_max[j]).base_value;}
				if (this.newAttack(list_max,mycards)==1)  //none of my cards are in the max list
					{moves.push([card.id,points]);}
			return moves;
			}


			//remove single
			if (card.name.split(" ").length==2 && card.name.indexOf("Greatest")==-1 && card.name.indexOf("Smallest")==-1)
			{
				var target_value = parseInt(card.name.split(" ")[1]);
				for (var j = 0; j < opp_inplay.cards.length; j++){
				//same number
				if (target_value==opp_inplay.cards[j].cvalue){
						moves.push([card.id,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);}
				}}	
			//remove table
			if (card.name.indexOf("table")!=-1)
			{
				var target_value = parseInt(card.name.split(" ")[2]);
				for (var j = 0; j < opp_inplay.cards.length; j++){
				//same number
				if (opp_inplay.cards[j].cvalue % target_value==0){
						moves.push([card.id,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);}
				} return moves;}	
		
			//remove range
			if (card.name.indexOf("range")!=-1)
			{
				var temp = card.name.split(" ");
				var temp2 = temp[temp.length - 1].split(",");
				var num_from = parseInt(temp2[0]);
				var num_to = parseInt(temp2[1]);
				if (num_to==10000) {num_from = num_from+1}
				for (var j = 0; j < opp_inplay.cards.length; j++){
					if (opp_inplay.cards[j].cvalue>=num_from &&  opp_inplay.cards[j].cvalue<=num_to){  //right card
						moves.push([card.id,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);}
				}
				return moves;}	

			} //end remove
		if (card.total>0)
		{
			for (var j = 0; j < opp_inplay.cards.length; j++){
				for (var k = 0; k < opp_inplay.cards.length; k++){
					if (j!=k){
						if (card.cvalue==opp_inplay.cards[j].cvalue+opp_inplay.cards[k].cvalue){
						points = opp_inplay.cards[j].base_value+opp_inplay.cards[k].base_value;
						if (loc==from_inplay) {
							moves.push([card.id,opp_inplay.cards[j].id,opp_inplay.cards[k].id,points]);} else
							{moves.push([card.id,card.id,opp_inplay.cards[j].id,opp_inplay.cards[k].id,points]);}
						}
					}
				}
			}
		}


		if (card.total>0)  //triple
		{
			for (var j = 0; j < opp_inplay.cards.length; j++){
				for (var k = 0; k < opp_inplay.cards.length; k++){
					for (var h = 0; h < opp_inplay.cards.length; h++){
						if (j!=k && j!=h && k!=h){
							if (card.cvalue==opp_inplay.cards[j].cvalue+opp_inplay.cards[k].cvalue+opp_inplay.cards[h].cvalue){
								points = opp_inplay.cards[j].base_value+opp_inplay.cards[k].base_value+opp_inplay.cards[h].base_value;
							if (loc==from_inplay) {
								moves.push([card.id,opp_inplay.cards[j].id,opp_inplay.cards[k].id,opp_inplay.cards[h].id,points]);} else
								{moves.push([card.id,card.id,opp_inplay.cards[j].id,opp_inplay.cards[k].id,opp_inplay.cards[h].id,points]);}
							}
						}
					}
				}
			}
		}


		if (card.total>0)  //quadruple
		{
			for (var r = 0; r < opp_inplay.cards.length; r++){			
				for (var j = 0; j < opp_inplay.cards.length; j++){
					for (var k = 0; k < opp_inplay.cards.length; k++){
						for (var h = 0; h < opp_inplay.cards.length; h++){
							if (j!=k && j!=h && k!=h && k!=r && j!=r && h!=r){
								if (card.cvalue==opp_inplay.cards[r].cvalue+opp_inplay.cards[j].cvalue+opp_inplay.cards[k].cvalue+opp_inplay.cards[h].cvalue){
									points = opp_inplay.cards[r].cvalue+opp_inplay.cards[j].base_value+opp_inplay.cards[k].base_value+opp_inplay.cards[h].base_value;
								if (loc==from_inplay) {
									moves.push([card.id,opp_inplay.cards[r].id,opp_inplay.cards[j].id,opp_inplay.cards[k].id,opp_inplay.cards[h].id,points]);} else
									{moves.push([card.id,card.id,opp_inplay.cards[r].id,opp_inplay.cards[j].id,opp_inplay.cards[k].id,opp_inplay.cards[h].id,points]);}
								}
							}
						}
					}
				}
			}
		}


		//TOTAL + MAX
		if (card.total>0 && card.max>0)
		{
			var targets=[]; var total=0;
			if (loc==from_inplay) {
					targets.push(card.id);} else
					{targets.push(card.id,card.id);}
			for (var j = 0; j < opp_inplay.cards.length; j++)
				{  var merge_value = card.cvalue;
					if (opp_inplay.cards[j].ctype=="N" && opp_inplay.cards[j].cvalue+total<=merge_value)
					{
						total = total + opp_inplay.cards[j].cvalue;
						//console.log("TARGETS,",total,opp_inplay.cards[j].cvalue)
						targets.push(opp_inplay.cards[j].id);
					}
				}
				//console.log("MAX TOTAL",moves,targets,total)
				targets.push(total);
				if (total>3) {moves.push(targets)};
				//console.log("MAX TOTAL",moves);
		}

		for (var j = 0; j < opp_inplay.cards.length; j++){
			//same number
			if (card.cvalue==opp_inplay.cards[j].cvalue && card.max==0){
					if (loc==from_inplay) {
						moves.push([card.id,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);} else
						{moves.push([card.id,card.id,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);}
					//	console.log("loop",j,card);
					//	console.log("partial move",moves);
				}
			//max
			if (card.cvalue>=opp_inplay.cards[j].cvalue && card.max>0){
					if (loc==from_inplay) {
						moves.push([card.id,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);} else
						{moves.push([card.id,card.id,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);}
			}
	}
		return moves;
	}
	
	arrayContainsAnotherArray(needle, haystack){
	  for(var i = 0; i < needle.length; i++){
	    if(haystack.indexOf(needle[i]) === -1)
	       return -1;
	  }
	  return 1;
	}

	newAttack(needle, haystack){
	  console.log("NEEDLE",needle,haystack)
	  for(var i = 0; i < needle.length; i++){
	    if(haystack.indexOf(needle[i]) != -1){
	       return -1;}
	  }
	  return 1;
	}

	modify_value(card,target_card){
		var gap = parseInt(card.name.split(" ")[1]);
		var new_value;
		if (card.name.split(" ")[0]=="Add") {new_value = target_card.cvalue + gap;}
		if (card.name.split(" ")[0]=="Subtract") {new_value = target_card.cvalue - gap; if (new_value<=0) {new_value=1;}}
		if (card.name.split(" ")[0]=="Multiply") {new_value = target_card.cvalue * gap;}
		if (card.name.split(" ")[0]=="Divide") {if (target_card.cvalue % gap ==0) {new_value = target_card.cvalue / gap;} else {new_value=target_card.cvalue};}
		if (new_value<=0) {new_value=1;}
		if (new_value>=100) {new_value=99;}

		return new_value;
	}


	number_combination(addcards,card,opp_inplay,my_inplay,hand){
		var moves=[];
		var new_value=1;
		var old_value=1;
		var card_name = card.name;
		//console.log("----->>",card.name);
		var gap=0;

		for (var i = 0; i < hand.cards.length; i++)
			{	if (hand.cards[i].ctype=="N"){
					new_value = this.modify_value(card,hand.cards[i]);
					old_value = hand.cards[i].cvalue;hand.cards[i].cvalue = new_value;
					var cardmoves=[];
					cardmoves = cardmoves.concat(this.card_moves(from_hand,hand.cards[i],opp_inplay));
					for (var j = 0; j < cardmoves.length; j++) {cardmoves[j].splice( 0, 0, cardmoves[j][0]);cardmoves[j].splice( 1, 0, card.id);}							
					moves = moves.concat(cardmoves);
					hand.cards[i].cvalue = old_value;
				}
			}

		for (var i = 0; i < my_inplay.cards.length; i++)
			{	if (my_inplay.cards[i].ctype=="N"){
					new_value = this.modify_value(card,my_inplay.cards[i]);
					old_value = my_inplay.cards[i].cvalue;
					my_inplay.cards[i].cvalue = new_value;
					var cardmoves=[];

					cardmoves = cardmoves.concat(this.card_moves(from_inplay,my_inplay.cards[i],opp_inplay));
					for (var j = 0; j < cardmoves.length; j++) {cardmoves[j].splice( 0, 0, cardmoves[j][0]);cardmoves[j].splice( 0, 0, card.id);}							
					moves = moves.concat(cardmoves);
					my_inplay.cards[i].cvalue = old_value;
				}
			}

		//opponent + my_inplay
		for (var i = 0; i < opp_inplay.cards.length; i++)
			{	if (opp_inplay.cards[i].ctype=="N"){
					new_value = this.modify_value(card,opp_inplay.cards[i]);
					old_value = opp_inplay.cards[i].cvalue;opp_inplay.cards[i].cvalue = new_value;
					var cardmoves=[];
					for (var j = 0; j < my_inplay.cards.length; j++)
					{
						var temp=[];
						temp = this.card_moves(from_inplay,my_inplay.cards[j],opp_inplay);
						for (var h = 0; h < temp.length; h++)
							{
								if (temp[h].indexOf(opp_inplay.cards[i].id)!=-1) {
										cardmoves.push(temp[h])};}
						console.log("TARGET ->",opp_inplay.cards[i].name,my_inplay.cards[j].name,my_inplay.cards[j].cvalue,cardmoves);
						var c_temp;
					}
					for (var k = 0; k < cardmoves.length; k++) {cardmoves[k].splice( 0, 0, card.id);cardmoves[k].splice( 1, 0, opp_inplay.cards[i].id);}


						moves = moves.concat(cardmoves);
					opp_inplay.cards[i].cvalue = old_value;
				}
			}
			//opponent + hand
		for (var i = 0; i < opp_inplay.cards.length; i++)
			{	if (opp_inplay.cards[i].ctype=="N"){
					new_value = this.modify_value(card,opp_inplay.cards[i]);
					old_value = opp_inplay.cards[i].cvalue;opp_inplay.cards[i].cvalue = new_value;
					var cardmoves=[];
					for (var j = 0; j < hand.cards.length; j++)
					{
						var temp=[];
						temp = this.card_moves(from_hand,hand.cards[j],opp_inplay);
						for (var h = 0; h < temp.length; h++)
							{
								if (temp[h].indexOf(opp_inplay.cards[i].id)!=-1) {
								cardmoves.push(temp[h])};}
	
						var c_temp;
					}		
					for (var k = 0; k < cardmoves.length; k++) {cardmoves[k].splice( 0, 0, card.id);cardmoves[k].splice( 1, 0, opp_inplay.cards[i].id);}


					moves = moves.concat(cardmoves);
					opp_inplay.cards[i].cvalue = old_value;
				}
			}
		return moves;
	}

	manage_create(card,opp_inplay)  //create a card spell and check if it is possible to attack
	{
		var number = parseInt(card.name.split(" ")[1]);
		var move=[];
		console.log("CREATE VALUE",number)
		for (var j = 0; j < opp_inplay.cards.length; j++){
		if (number==opp_inplay.cards[j].cvalue){
				move.push([card.id,-1,opp_inplay.cards[j].id,opp_inplay.cards[j].base_value]);
				return move;
				}
		}
		return [[card.id,0]];
	}


	get_attacked_cards(opp_inplay,my_inplay){

	}

	defense_move(loc,card,opp_inplay,my_inplay,hand,usedcards){
		var moves=[];

	}

	instant_moves(loc,card,opp_inplay,my_inplay,hand,usedcards){
		var moves=[];
		var new_value=1;
		var old_value=1;
		var card_name = card.name;
		//console.log("-----",card.name);
		var gap=0;
		switch (card_name)
		{
		case "Add 1":
		case "Add 2":
		case "Add 3":
		case "Add 4":
		case "Add 5":
		case "Subtract 1":
		case "Subtract 2":
		case "Subtract 3":
		case "Subtract 4":
		case "Subtract 5":
		case "Divide 2":
		case "Divide 3":
		case "Divide 4":
		case "Divide 5":
		case "Multiply 2":
		case "Multiply 3":
		case "Multiply 4":
		case "Multiply 5":   //handle all modifying spell (single card)

			gap = parseInt(card_name.split(" ")[1]);
			console.log("=====",card.name,gap);
			//single spell
			moves = this.number_combination([],card,opp_inplay,my_inplay,hand);
			console.log("=== ADD MOVES,",card.name,moves);

			//check another spell (on my_inplay)

			for (var i = 0; i < my_inplay.cards.length; i++)
				{	if (my_inplay.cards[i].ctype=="N"){
						new_value = this.modify_value(card,my_inplay.cards[i]);
						old_value = my_inplay.cards[i].cvalue;my_inplay.cards[i].cvalue = new_value;
						for (var p = 0; p < hand.cards.length; p++)
							{
								if (hand.cards[p].ctype=="I" && hand.cards[p].id!=card.id && usedcards==0)
								{
									var cardmoves=[];
									console.log("== second move =>",card.name,my_inplay.cards[i].name,hand.cards[p].name,cardmoves);
									cardmoves = cardmoves.concat(this.instant_moves(from_hand,hand.cards[p],opp_inplay,my_inplay,hand,1));
									console.log("== end second move =>",card.name,my_inplay.cards[i].name,hand.cards[p].name,cardmoves);
									for (var j = 0; j < cardmoves.length; j++) {cardmoves[j].splice(0, 0, my_inplay.cards[i].id);cardmoves[j].splice(0, 0, card.id);}
									for (var j = 0; j < cardmoves.length; j++)
									{
										if (cardmoves[j].indexOf(my_inplay.cards[i].id)!=-1 && cardmoves[j].indexOf(hand.cards[p].id)!=-1)
											{moves.push(cardmoves[j]);} else {console.log("Scartata!",cardmoves[j])}
									}
									//moves = moves.concat(cardmoves);		
								};
							}
						my_inplay.cards[i].cvalue=old_value;
					}
				}
			console.log("=== ADD MOVES,",moves);
			return moves;	
		
		case "Give Total":   
		case "Give Max":   
		case "Protect":  

			for (var i = 0; i < hand.cards.length; i++)
				{	if (hand.cards[i].ctype=="N"){
						if (card_name=="Give Total") {old_value = hand.cards[i].total; hand.cards[i].total=1};
						if (card_name=="Give Max") {old_value = hand.cards[i].max; hand.cards[i].max=1};
						if (card_name=="Protect") {old_value = hand.cards[i].protect; hand.cards[i].protect=1};
						var cardmoves=[];
						console.log("mossa",gap,hand.cards[i].cvalue);
						cardmoves = cardmoves.concat(this.card_moves(from_hand,hand.cards[i],opp_inplay));
						console.log("mossa",cardmoves);
						for (var j = 0; j < cardmoves.length; j++) {cardmoves[j].splice( 0, 0, cardmoves[j][0]);cardmoves[j].splice( 1, 0, card.id);}
						moves = moves.concat(cardmoves);
						if (card_name=="Give Total") {hand.cards[i].total=old_value};
						if (card_name=="Give Max") {hand.cards[i].max=old_value};
						if (card_name=="Protect") {hand.cards[i].protect=old_value};
						}
				}

			for (var i = 0; i < my_inplay.cards.length; i++)
				{	if (my_inplay.cards[i].ctype=="N"){
						if (card_name=="Give Total") {old_value = my_inplay.cards[i].total; my_inplay.cards[i].total=1};
						if (card_name=="Give Max") {old_value = my_inplay.cards[i].max; my_inplay.cards[i].max=1};
						if (card_name=="Protect") {old_value = my_inplay.cards[i].protect; my_inplay.cards[i].protect=1};
						var cardmoves=[];
						console.log("mossa",gap,my_inplay.cards[i].cvalue);
						cardmoves = cardmoves.concat(this.card_moves(from_inplay,my_inplay.cards[i],opp_inplay));
						console.log("mossa",cardmoves);
						for (var j = 0; j < cardmoves.length; j++) {cardmoves[j].splice( 0, 0, cardmoves[j][0]);cardmoves[j].splice( 0, 0, card.id);}
						moves = moves.concat(cardmoves);
						if (card_name=="Give Total") {my_inplay.cards[i].total=old_value};
						if (card_name=="Give Max") {my_inplay.cards[i].max=old_value};
						if (card_name=="Protect") {my_inplay.cards[i].protect=old_value};
					}
				}
			return moves;

		case "Create 3":   
		case "Create 4":   
		case "Create 5":   
		case "Create 6":   
			cardmoves=this.manage_create(card,opp_inplay); //[[card.id,0]];
			moves = moves.concat(cardmoves);			
			return moves;

		case "Merge +":   
		case "Merge x":  
			return moves.concat([this.get_merge_move(card,my_inplay,hand,opp_inplay)]);


		case "Look & Discard":   
			var discard_id = this.select_card_to_discard();
			moves.push([card.id,discard_id,0]);
			//select a card to discard
			return moves; 



		} //end switch

		return moves;
	}

	get_cards_set(ctype,my_inplay,hand){
		cardset=[];
		//cards in play can only be number
		if (ctype=="N"){
		for (var i = 0; i < my_inplay.cards.length; i++)
			{if (my_inplay.cards[i].ctype==ctype) cardset.push(my_inplay.cards[i].id);}
		}
		
		for (var i = 0; i < hand.cards.length; i++)
			{if (hand.cards[i].ctype==ctype) cardset.push(hand.cards[i].id);}

		return cardset;
	}

	get_mycards(my_inplay,hand){
		//return my cards ids
		var mycards=[];
		for (var i = 0; i < my_inplay.cards.length; i++)
			{mycards.push(my_inplay.cards[i].id);}
		
		for (var i = 0; i < hand.cards.length; i++)
			{ mycards.push(hand.cards[i].id);}
		this.mycards=mycards;
		return mycards;
	}


	get_merge_move(merge_card,my_inplay,hand,opp_inplay){
//		var max=-1;
//		var max_id=-1;
		var max_max=-1;
		var max_id_max=-1;
		var max_total=-1;
		var max_id_total=-1;
		var loc_max;
		var loc_max_max;
		var loc_max_total;
		for (var i = 0; i < hand.cards.length; i++){
//			if (hand.cards[i].ctype=="N" && max<hand.cards[i].cvalue) {max=hand.cards[i].cvalue;max_id=hand.cards[i].id;loc_max=0}
			if (hand.cards[i].ctype=="N" && hand.cards[i].total>0 && max_total<hand.cards[i].cvalue) {max_total=hand.cards[i].cvalue;max_id_total=hand.cards[i].id;loc_max_total=0;}
			if (hand.cards[i].ctype=="N" && hand.cards[i].max>0 && max_max<hand.cards[i].cvalue) {max_max=hand.cards[i].cvalue;max_id_max=hand.cards[i].id;loc_max_max=0;}
		}
		for (var i = 0; i < my_inplay.cards.length; i++){
//			if (my_inplay.cards[i].ctype=="N" && max<my_inplay.cards[i].cvalue) {max=my_inplay.cards[i].cvalue;max_id=my_inplay.cards[i].id;loc_max=1}
			if (my_inplay.cards[i].ctype=="N" && my_inplay.cards[i].total>0 && max_total<my_inplay.cards[i].cvalue) {max_total=my_inplay.cards[i].cvalue;max_id_total=my_inplay.cards[i].id;loc_max_total=1;}
			if (my_inplay.cards[i].ctype=="N" && my_inplay.cards[i].max>0 && max_max<my_inplay.cards[i].cvalue) {max_max=my_inplay.cards[i].cvalue;max_id_max=my_inplay.cards[i].id;loc_max_max=1;}
		}
		//create card
		
		var move=[];
		if (max_id_max==max_id_total) {return []};
		//usa i moltiplicatori!
		if (max_max>1)
		{
			if (max_total>1)
				{ //monster card!
					if (loc_max_max==0 && loc_max_total==0) {move.push(max_id_max,max_id_total,merge_card.id,max_id_max,max_id_total)}
					if (loc_max_max==1 && loc_max_total==0) {move.push(max_id_total,merge_card.id,max_id_max,max_id_total)}
					if (loc_max_max==0 && loc_max_total==1) {move.push(max_id_max,merge_card.id,max_id_max,max_id_total)}
					if (loc_max_max==1 && loc_max_total==1) {move.push(merge_card.id,max_id_max,max_id_total)}
				}
		}
		console.log("DOPO MAX,",move,max_max,max_total);
		if (max_max<1 || max_total <1) {return []};
		//get the id of the new card
		var new_id = -1; //card_id_seq[1]+1;
		move.push(new_id);
		var merge_value = 0;
		if (merge_card.name.indexOf("+")!=-1) {merge_value = max_total + max_max} else {merge_value = max_total * max_max};

		console.log("MERGE VALUE,",merge_value);
		//attack the opponent!
		var total=0;
		for (var i = 0; i < opp_inplay.cards.length; i++)
		{
			if (opp_inplay.cards[i].cvalue+total<=merge_value)
			{
				total = total + opp_inplay.cards[i].cvalue;
				console.log("TARGETS,",total,opp_inplay.cards[i].cvalue)
				move.push(opp_inplay.cards[i].id);
			}
		}
		move.push(total);
		console.log("MONSTER",move);
	    add_chat_text("|"+pl_you,"I am going yo build a nice present for you...")

		return move;

	}
	get_moves(turn,opp_inplay,my_inplay,hand){  //compute the possible moves

		var moves=[];
		var numbers=[];
		this.targets_list=[];

		//check if we can draw a card
		for (var i = 0; i < hand.cards.length; i++)
		{
			if (hand.cards[i].name.indexOf("Draw")!=-1)
			{
	   		    add_chat_text("|"+pl_you,"Hum, let me draw some cards...")
 				ai_click(hand.cards[i].id);
				break;
			}
		}

		var mycards=[];
		mycards=this.get_mycards(my_inplay,hand);


		//spells - on the stack
		for (var i = 0; i < hand.cards.length; i++)
			{	
				if (hand.cards[i].ctype=="S")
					{moves = moves.concat(this.card_moves(from_hand,hand.cards[i],opp_inplay))};					
			}

		//numbers, only if cpu has priority
		if (turn==opponent) {
		for (var i = 0; i < my_inplay.cards.length; i++)
			{	
				if (my_inplay.cards[i].ctype=="N")
					{moves = moves.concat(this.card_moves(from_inplay,my_inplay.cards[i],opp_inplay));}					
			}

		for (var i = 0; i < hand.cards.length; i++)
			{	
				if (hand.cards[i].ctype=="N")
					{moves = moves.concat(this.card_moves(from_hand,hand.cards[i],opp_inplay));}					
			}


		//spells - instants	
		for (var i = 0; i < hand.cards.length; i++)
			{	
				if (hand.cards[i].ctype=="I")
					{moves = moves.concat(this.instant_moves(from_hand,hand.cards[i],opp_inplay,my_inplay,hand,0));}
			}
		} 
		else {}
		//defense - priority opponent
		//simplify moves
		var already_used=[];
		var already_attacked=[];
		var final_moves=[];

		//sort moves by points
		var act = this.rand_action();
		if (this.sort==1 || act==1) {moves = this.bubbleSort(moves);}		
		
		//limit the number of moves
		if (act==0 || this.level<3) {moves = moves.slice(0, this.max_moves);console.log("moves cut",moves);}
		console.log("== MOVES ==",act,this.sort,this.max_moves,this.random_level,moves);

		for (var i = 0; i < moves.length; i++)
		{
			//check if the card has been already used to attack
			//separate my cards and opponents card from the move
			if (moves[i].length>0){
			var my_card = [];
			var attacked_cards = [];

			for (var j = 0; j < moves[i].length-1; j++){  //last elements are the points!
				if (mycards.indexOf(moves[i][j])!=-1)
				{
					my_card.push(moves[i][j]);
				} else
				{
					attacked_cards.push(moves[i][j]);
				}
			}
			//remove all - compute targets 
			if (moves[i][moves[i].length-1] <0) {
				//look for the card used
				for (var h = 0; h < this.targets_list.length; h++){
					if (moves[i].indexOf(this.targets_list[h][0])!=-1)
					{
						attacked_cards = attacked_cards.concat(this.targets_list[h].slice(1));
						console.log("==== ATTACKED CARDS ==",getCard(this.targets_list[h][0]),attacked_cards,this.targets_list[h],this.targets_list);
						break;
					}	
				}

			}
			//console.log("===>",moves[i],mycards,my_card,attacked_cards);
			//check if one of my card have been already used in a previous move
			if (this.newAttack(my_card,already_used)==1)
			{
				//check if the card has been already attacked
				//console.log("attack pass", moves[i],already_used,attacked_cards,already_attacked);

		//		if (this.arrayContainsAnotherArray(attacked_cards,already_attacked)==-1)
				if (this.newAttack(attacked_cards,already_attacked)==1)
					{	
						//already_used.push(moves[i][0]);
						already_used = already_used.concat(my_card);
						already_attacked = already_attacked.concat(attacked_cards)
						final_moves.push(moves[i].slice(0, -1));
					}
			}
		}
		}
		//console.log(" CLICCA ECCOLE", moves,final_moves);
	    //add_chat_text("|"+pl_you,"Ok, I have "+String(final_moves.length)+" little moves to teach you, human....")
		return final_moves;
	}


	discard_number(hand,opp_inplay) //should get the game status
	{
		if (hand.cards.length==0) {return 0};
		if (rand_action==1)
		{
			var i = Math.floor((Math.random() * 100) + 1);
			var card_index = i%hand.cards.length;
			return hand.cards[card_index].id; //to be used with movecard
  		}
  		//strategy
  		if (this.level==2)  //discard closest if no perfect match
  		{  		}

	}
	play_spell()  //should get the game status
	{

	}

	is_inhand(card_id,in_hand){
			for (var y = 0; y < in_hand.length; y++)
			{
				if (card_id==in_hand[y]) {return y}
			}
			return -1
		}


	
	find_optimal()
	{
		
		var reds = []; var blues=[];
		[reds,blues] = extract_cards(1)
		blues = remove_card_temp(blues)
		console.log(reds,blues)
		var temp = optimal(blues,reds,blues.length,1000);
        var max_pts = temp[0]; var pts_distr = temp[1]; var max_move=temp[2];
        
        //
        var move_list = gen_ids(1,max_move)
        return move_list

	}

	execute_move(move)
	{
		var num_moves = move.length-1;
		var index=-1;
	    var moveTimer = setInterval(function(){
	   		index++;
	   		console.log("SUBMOVE",index,move[index]);
	   		console.log("click",move[index]);
	   		ai_click(move[index]);
	   		if(parseInt(index)+1 >=move.length)  
	   		{  //start the game!!
			    console.log("moves finished");
				save_local_state(); //save into web storage 	
		        clearInterval(moveTimer);
	   		}
    	},1150);

	}

	click_moves(move)
	{
		var num_moves = move.length;
		if (num_moves==0) return 0;
		var index=-1;
		console.log("MOVES",move)
	    var moveTimer = setInterval(function(){
	   		index++;
	   		console.log("SUBMOVE",index,move[index],num_moves);
			if (index % 3 ==0) {add_chat_text("|"+pl_you,"That's good....");}
	   		console.log("click MOVE ===>",move[index]);

	   		ai_click(move[index]);
	   		//replace the -1 with the new card
	   		if(parseInt(index)+1 >=move.length)  
	   		{  //start the game!!
			    console.log("moves finished");
				save_local_state(); //save into web storage 	
		        clearInterval(moveTimer);
	   		}
    	},2600);

	}

	execute_all_move(move_list)
	{
		var move = [];
		var created_card_id=card_id_seq[1];
  		//check if the move creates new cards
  		console.log("MOVES LIST BEFORE ",move_list);
		for (var j = 0; j < move_list.length; j++)
		{
	   		if (move_list[j].indexOf(-1)!=-1) {created_card_id=created_card_id+1;console.log("New card",created_card_id)}
			for (var w = 0; w < move_list[j].length; w++)
			{
				if (move_list[j][w]==-1)  {move_list[j][w]=created_card_id;}
			}

		}
  		console.log("MOVES LIST AFTER ",move_list);


		for (var j = 0; j < move_list.length; j++)
		{
			for (var k = 0; k < move_list[j].length; k++)
				{move.push(move_list[j][k]);}
		}

		this.click_moves(move)		
	}



	bubbleSort(a) {
	    var swapped;
	    do {
	        swapped = false;
	        for (var i=0; i < a.length-1; i++) {
	            if (Math.abs(a[i][a[i].length-1]) < Math.abs(a[i+1][a[i+1].length-1])) {
	                var temp = a[i];
	                a[i] = a[i+1];
	                a[i+1] = temp;
	                swapped = true;
	            }
	            if ((Math.abs(a[i][a[i].length-1]) == Math.abs(a[i+1][a[i+1].length-1])) && (a[i].length > a[i+1].length)) {
	                var temp = a[i];
	                a[i] = a[i+1];
	                a[i+1] = temp;
	                swapped = true;
	            }

	        }
	    } while (swapped);
		return a;
	}

	findcards_attacked(){
		my_attacked=0;

		for (var i = 0; i < my_inplay.cards.length; i++)
		{	
			if (my_inplay.cards[i].ctype=="N")
				{if (num_attacked.indexOf(my_inplay.cards[i].id)!=0) {my_attacked.push(my_inplay.cards[i].id);}}					
		}
		return my_attacked;
	}


	check_maxtotal(hand,opp_inplay) {
		console.log("opponent in play",opp_inplay);
		console.log("hand cpu",hand);
		for (var i = 0; i < opp_inplay.cards.length; i++)
		{	
			//only for top 3 cancel max total  
			if (opp_inplay.cards[i].total>0 && opp_inplay.cards[i].max>0 && opp_inplay.cards[i].cvalue>12 && this.level>=32)
		//	if (opp_inplay.cards[i].total==1 && opp_inplay.cards[i].max==1)
			{
				console.log("hand cpu MAX TOTAL!")
				//add remove >12 to your hand
				//remove a random card
				game.hands[opponent].cards.pop();
				console.log("hand cpu",game.hands[opponent]);
				//remove >12
				game.hands[opponent].cards.push(CreateCard("Remove range 12,10000","red"));
				console.log("hand cpu",game.hands[opponent]);
				return 0;

			}					
		}
		return 0;


	}

	//get the defensive moves when priority is not yours
	defend(turn,opp_inplay,my_inplay,hand){

	}


}
