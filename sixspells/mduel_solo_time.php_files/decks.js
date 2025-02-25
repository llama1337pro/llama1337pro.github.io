

//simple number
var card_templates=[
	["1","","Card Number 1","Chose target card",1,1],
	["2","","Card Number 2","Chose target card",2,2],
	["3","","Card Number 3","Chose target card",3,3],
	["4","","Card Number 4","Chose target card",4,4],
	["5","","Card Number 5","Chose target card",5,5],
	["6","","Card Number 6","Chose target card",6,6],
	["7","","Card Number 7","Chose target card",7,7],
	["8","","Card Number 8","Chose target card",8,8],
	["9","","Card Number 9","Chose target card",9,9],
	["10","","Card Number 10","Chose target card",10,10],
	["11","","Card Number 11","Chose target card",11,11],
	["12","","Card Number 12","Chose target card",12,12],
	["13","","Card Number 13","Chose target card",13,13],
	["14","","Card Number 14","Chose target card",14,14],
	["15","","Card Number 15","Chose target card",15,15],
	//total number
	["5 total","TOTAL","Card Number 5 Total - the card can remove 1 or more red cards that toghter make 5","Chose target card(s) and press OK",5,16],
	["6 total","TOTAL","Card Number 6 Total - the card can remove 1 or more cards adding up to its value","Chose target card(s) and press OK",6,17],
	["7 total","TOTAL","Card Number 7 Total - the card can remove 1 or more cards adding up to its value","Chose target card(s) and press OK",7,18],
	["8 total","TOTAL","Card Number 8 Total - the card can remove 1 or more cards adding up to its value","Chose target card(s) and press OK",8,19],
	["9 total","TOTAL","Card Number 9 Total - the card can remove 1 or more cards adding up to its value","Chose target card(s) and press OK",9,20],
	["10 total","TOTAL","Card Number 10 Total - the card can remove 1 or more cards adding up to its value","Chose target card(s) and press OK",10,21],
	["11 total","TOTAL","Card Number 11 Total - the card can remove 1 or more cards adding up to its value","Chose target card(s) and press OK",11,22],
	["12 total","TOTAL","Card Number 12 Total - the card can remove 1 or more cards adding up to its value","Chose target card(s) and press OK",12,23],
	//max number]
	["4 max","MAX","4 MAX - remvoe one card smaller or equal than 4","Chose target card",4,24],
	["5 max","MAX","5 MAX - remvoe one card smaller or equal than 5","Chose target card",5,25],
	["6 max","MAX","6 MAX - the card can remove a number card with value equal or smaller than the value of this card","Chose target card",6,26],
	["7 max","MAX","7 MAX - the card can remove a number card with value equal or smaller than the value of this card","Chose target card",7,27],


	//SPELLS

	["+1 Turn","1_turn.png","Take another turn after this one","",28],
	["Look","look.png","Look at other's player hand","",29],
	["Look & Discard","discard.png","Look at other's player hand. Chose one. The opponent discards that card","",30],

	["Protect","protect.png","Protect Card","Protect - Select a card. Until the end of turn target card cannot be removed from the board and cards that would modify its value have no effect",31],

	//subrtact
	["Subtract 1","sub1.png","Subtract 1 to a target card. If the value of the new card is 0 or less, its value is set to 1","Select target card",32],
	["Subtract 2","sub2.png","Subtract 2 to a target card. If the value of the new card is 0 or less, its value is set to 1","Select target card",33],
	["Subtract 3","sub3.png","Subtract 3 to a target card. If the value of the new card is 0 or less, its value is set to 1","Select target card",34],
	["Subtract 4","sub4.png","Subtract 4 to a target card. If the value of the new card is 0 or less, its value is set to 1","Select target card",35],
	["Subtract 5","sub5.png","Subtract 5 to a target card. If the value of the new card is 0 or less, its value is set to 1","Select target card",36],

	//Add
	["Add 1","add_1.png","ADD 1 to a target card","Select target card",37],
	["Add 2","add_2.png","ADD 2 to a target card","Select target card",38],
	["Add 3","add_3.png","ADD 3 to a target card","Select target card",39],
	["Add 4","add_4.png","ADD 4 to a target card","Select target card",40],

	//multiply
	//	["Multiply 2","x2.png","Multiply by 2 a target card","Select target card",41],
	["Multiply 2","double.png","Multiply by 2 a target card","Select target card",41],
	["Multiply 3","triple.png","Multiply by 2 a target card","Select target card",42],

	//divide
	["Divide 2","div2.png","Divide by 2 a card. It does not work if the card cannot be divided by 2!","Select target card",43],
	["Divide 3","div3.png","Divide by 3 a card. It does not work if the card cannot be divided by 3!","Select target card",44],

	//Merge
	["Merge +","merge +.png","Select two of your numbers to add them up into one","Select two of your numbers to add them up into one.",45],
	["Merge x","merge x.png","Select two of your numbers to multiply them up into one.","Select two of your numbers to multiply them up into one.",46],


	//Smallest - Greatest
	["Remove Smallest","smallest.png","Remove the smallest card on the board","",47],
	["Remove Greatest","greatest.png","Remove the greatest card on the board","",48],

	//Remove - single
	["Remove range 10,10000","rem10to1000_1.png","Remove a number card with value more than 10","Select target card",49],
	["Remove 3","rem3.png","Remove a card with value = 3","Select target card",50],
	["Remove 4","rem4.png","Remove a card with value = 4","Select target card",51],
	["Remove 5","rem5.png","Remove a card with value = 5","Select target card",52],
	
	["Remove table 3","remove_table3.png","Remove a card number multiple of 3","Select target card",53],
	["Remove table 4","remove_table4.png","Remove a card number multiple of 4","Select target card",54],
	["Remove table 5","remove_table5.png","Remove a card number multiple of 5","Select target card",55],
	["Remove table 6","remove_table6.png","Remove a card number multiple of 6","Select target card",56],
	["Remove table 7","remove_table7.png","Remove a card number multiple of 7","Select target card",57],

	["Remove range 1,3","rem1to3_1.png","Remove a number from 1 to 3 included","Select target card",58],
	["Remove range 4,6","rem4to6_1.png","Remove a number from 4 to 6 included","Select target card",59],
	["Remove range 6,9","rem6to9_1.png","Remove a number from 6 to 9 included","Select target card",60],
	["Remove range 0,5","rem0to5_1.png","Remove a number smaller than 6","Select target card",61],
	["Remove range 0,3","rem0to3_1.png","Remove a number smaller than 4","Select target card",62],
	["Remove range 8,10000","rem8to1000_1.png","Remove all the numbers greater than 8","Select target card",63],
	["Remove range 12,10000","rem12to1000_1.png","Remove all the numbers greater than 12","Select target card",64],
	["Remove odd","rem_odd.png","Remove an odd number","",65],
	["Remove even","rem_even.png","Remove an even number","",66],



	//Remove all
	["Remove all odd","rem_all_odd.png","Remove all the odd numbers on the board (including yours!)","",67],
	["Remove all even","rem_all_even.png","Remove all the even numbers on the board (including yours!)","",68],
	

	//Remove interval
	["Remove all range 1,3","rem1to3.png","Remove all the numbers from 1 to 3 included (including yours!)","",69],
	["Remove all range 4,6","rem4to6.png","Remove all the numbers from 4 to 6 included (including yours!)","",70],
	["Remove all range 6,9","rem6to9.png","Remove all the numbers from 6 to 9 included (including yours!)","",71],
	["Remove all range 0,5","rem0to5.png","Remove all the numbers smaller than 6 (including yours!)","",72],
	["Remove all range 0,3","rem0to3.png","Remove all the numbers smaller than 4 (including yours!)","",73],
	["Remove all range 8,10000","rem8to1000.png","Remove all the numbers greater than 8 (including yours!)","",74],
	["Remove all range 12,10000","rem12to1000.png","Remove all the numbers greater than 12 (including yours!)","",75],
	
	//Draw
	["Draw 3","Draw3.png","Draw 3 cards from your deck","",76],
	["Draw 2","Draw2.png","Draw 2 cards from your deck","",77],
	["Draw 1","Draw1.png","Draw 1 card from your deck","",78],


	//Table
	["Remove all table 3","table3.png","Remove all the numbers on the board in the table of 3 (including yours!)","",79],
	["Remove all table 4","table4.png","Remove all the numbers on the board in the table of 4 (including yours!)","",80],
	["Remove all table 5","table5.png","Remove all the numbers on the board in the table of 5 (including yours!)","",81],
	["Remove all table 6","table6.png","Remove all the numbers on the board in the table of 6 (including yours!)","",82],
	["Remove all table 7","table7.png","Remove all the numbers on the board in the table of 7 (including yours!)","",83],

	//Give power
	["Give Total","give_total.png","Give the total ability to a number for one turn","Select target card",84],
	["Give Max","give_max.png","Give the max ability -to a number card for one turn","Select target card",85],

	//Create
	["Create 3","create 3.png","Create a number 3 card","",86],
	["Create 4","create 4.png","Create a number 4 card","",87],
	["Create 5","create 5.png","Create a number 5 card","",88],
	["Create 6","create 6.png","Create a number 6 card","",89],

	//Fractions
	["1/2","","Card Number one half","Chose target card",1,90],
	["1/3","","Card Number one third","Chose target card",1,91],
	["1/4","","Card Number one quarter","Chose target card",1,92],
	["1/5","","Card Number one fifth","Chose target card",1,93],
	["1/10","","Card Number one tenth","Chose target card",1,94],
	["5/2","","Card Number two and a half","Chose target card",2,95],

	["0.25","","twenty-five cents","Chose target card",0.25,96],
	["0.5","","fifty cents","Chose target card",0.5,97],
	["0.75","","seventy-five cents","Chose target card",0.75,98],
	["1.5","","one and a half","Chose target card",1.5,99],
	["2.5","","two and a half","Chose target card",2.5,100],
	["0.1","","ten cents","Chose target card",0.1,101],

	//Princess
	["Princess","princess.png","Princess","",7,102],
	["H20","hydra","Card Number 20","Chose target card",20,103],
	["5 (+1 card)","1 cards","Card Number 20","Chose target card",5,104],
	["5 (+10 seconds)","10 secs","Card Number 20","Chose target card",5,105],
	["8 (+2 cards)","2 cards","Card Number 20","Chose target card",8,106],
	["8 (+10 seconds)","10 secs","Card Number 20","Chose target card",8,107],
	["11 (+3 cards)","3 cards","Card Number 20","Chose target card",11,108],
	["10 (+10 seconds)","10 secs","Card Number 20","Chose target card",10,109],
	["10 max","MAX","Card Number 10 MAX - the card can remove a number card with value equal or smaller than the value of this card","Chose target card",10,110],
	["3 total","TOTAL","Card Number 3 Total (the card can remove 1 or more cards adding up to its value)","Chose target card(s) and press OK",3,111],
	["4 total","TOTAL","Card Number 4 Total (the card can remove 1 or more cards adding up to its value)","Chose target card(s) and press OK",4,112],

	//remove prime
	["Remove prime","prime.png","Remove a prime number","",113],

	//numbers down
	["Numbers Down","numbersDown.png","Put all your number cards in play","",114],
	["Switch","switchColours.png","Target a number card in play. That card change color (and owner)","",115],

	["Add 5","add_5.png","ADD 5 to a target card","Select target card",116],
	["Add 6","add_6.png","ADD 6 to a target card","Select target card",117],
	["Add 7","add_7.png","ADD 7 to a target card","Select target card",118],
	["Add 8","add_8.png","ADD 8 to a target card","Select target card",119],
	["Add 9","add_9.png","ADD 9 to a target card","Select target card",120],

	["Subtract 6","sub6.png","Subtract 6 to a target card. If the value of the new card is 0 or less, its value is set to 1","Select target card",121],
	["Subtract 7","sub7.png","Subtract 7 to a target card. If the value of the new card is 0 or less, its value is set to 1","Select target card",122],
	["Subtract 8","sub8.png","Subtract 8 to a target card. If the value of the new card is 0 or less, its value is set to 1","Select target card",123],
	["Subtract 9","sub9.png","Subtract 9 to a target card. If the value of the new card is 0 or less, its value is set to 1","Select target card",124],

	["Multiply 2","double.png","Multiply by 2 a number card","Select target card",125],

	["16","","Card Number 16","Chose target card",16,126],
	["17","","Card Number 17","Chose target card",17,127],
	["18","","Card Number 18","Chose target card",18,128],
	["19","","Card Number 19","Chose target card",19,129],
	["20","","Card Number 20","Chose target card",20,130],
	["21","","Card Number 21","Chose target card",21,131],
	["22","","Card Number 22","Chose target card",21,132],
	["23","","Card Number 23","Chose target card",21,133],
	["24","","Card Number 24","Chose target card",21,134],
	["25","","Card Number 25","Chose target card",21,135],

	["Multiply 4","x4.png","Multiply by 4 a number card","Select target card",136],
	["Multiply 5","x5.png","Multiply by 5 a number card","Select target card",137],
	["Multiply 6","x6.png","Multiply by 6 a number card","Select target card",138],
	["Multiply 7","x7.png","Multiply by 7 a number card","Select target card",139],
	["Multiply 8","x8.png","Multiply by 8 a number card","Select target card",140],
	["Multiply 9","x9.png","Multiply by 9 a number card","Select target card",141],

	//second first class
	["Half","half.png","Divide a number card by two.It does not work if the card cannot be divided in two equal halves!","Select target card",142],

];

// Cards rankings
var card_rank =[
	"Merge x",
	"Remove all odd",
	"Remove all even",
	"Merge +",
	"Switch",
	"Remove all range 8,10000",
	"Remove all range 12,10000",
	"Remove all table 3",
	"Remove all table 4",
	"Remove all range 6,9",
	"Remove all range 0,5",
	"Remove all table 5",
	"Remove all range 0,3",
	"Remove all table 6",
	"Remove all table 7",
	"Remove all range 4,6",
	"Remove all range 1,3",

	"Look & Discard",

	"Draw 3", "Draw 2",
	"Remove odd",
	"Remove even",
	"Remove prime",
	"Remove range 8,10000",
	"Remove range 12,10000",
	"Remove table 3",
	"Remove table 4",
	"Remove > 10",
	"Remove range 6,9",
	"Remove table 5",
	"Remove range 0,5",
	"Remove range 0,3",
	"Remove table 6",
	"Remove table 7",
	"Remove range 4,6",
	"Remove range 1,3",
	"Remove 5",
	"Remove 4",
	"Remove 3",

	"Remove Greatest",
	"Give Max",
	"Give Total",
	"7 max","6 max","5 max","4 max",
	"12 total","11 total","10 total","9 total","8 total","7 total","6 total","5 total",
	"Remove Smallest",
	"Multiply 3","Multiply 2",
	"Subtract 5","Subtract 4","Subtract 3","Subtract 2","Subtract 1",
	"Divide 2","Divide 3",
	"Add 4","Add 3","Add 2","Add 1",
	"Create 6",
	"Create 5",
	"Create 4",
	"Create 3",

	"15","14","13","12","11","10","9","8","7","6","5","4","3","2","1",
	"Look","Protect"
];
///////////////////////

///////////////////////
//Deck for solo game //

//opponent numbers
var deck_num_solo = [
	["1",1,9],
	["2",2,9],
	["3",3,9],
	["4",4,9],
	["5",5,9],
	["6",6,9],
	["7",7,9],
	["8",8,9],
	["9",9,9],
	["10",10,6],
	["11",11,6],
	["12",12,6],
	["13",13,6],
	["14",14,6],
	["15",15,6]
]

// 3+ class
var deck_solo = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,6],
	["5",5,6],
	["6",6,5],
	["7",7,5],
	["8",8,5],
	["9",9,5],
	["10",10,5],
	["11",11,5],
	["12",12,5],
	["13",13,5],
	["14",14,5],
	["15",15,5],

	["5 total",16,6],
	["6 total",17,6],
	["7 total",18,6],
	["8 total",19,6],
	["9 total",20,7],
	["10 total",21,7],
	["11 total",22,7],
	["12 total",23,7],

	["4 max",24,6],
	["5 max",25,6],
	["6 max",26,6],
	["7 max",27,6],

	["Subtract 1",32,5],
	["Subtract 2",33,5],
	["Subtract 3",34,5],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Add 1",37,4],
	["Add 2",38,4],
	["Add 3",39,4],
	["Add 4",40,4],
	["Add 5",116,4],

	["Multiply 2",41,6],
	["Multiply 3",42,6],

	["Divide 2",43,4],
	["Divide 3",44,4],

	["Merge +",45,5],
	["Merge x",46,5],

	["Switch",115,4],


	["Remove Smallest",47,2],
	["Remove Greatest",48,2],

	["Remove range 12,10000",49,0],
	["Remove 3",50,3],
	["Remove 4",51,3],
	["Remove 5",52,3],
		
	["Remove table 3",53,2],
	["Remove table 4",54,2],
	["Remove table 5",55,2],
	["Remove table 6",56,2],
	["Remove table 7",57,2],

	["Remove prime",115,4],

	["Remove range 1,3",58,2],
	["Remove range 4,6",59,2],
	["Remove range 6,9",60,2],
	["Remove range 0,5",61,2],
	["Remove range 0,3",62,2],
	["Remove range 8,10000",63,2],
	["Remove range 12,10000",64,2],

	["Remove odd",65,3],
	["Remove even",66,3],

	//	["Remove all odd",67,2],
	["Remove all even",68,2],
		
	["Remove all range 1,3",69,2],
	["Remove all range 4,6",70,2],
	["Remove all range 6,9",71,2],
	["Remove all range 0,5",72,2],
	["Remove all range 0,3",73,2],
	//	["Remove all range 8,10000",74,0],
	["Remove all range 12,10000",75,2],
		
	["Remove all table 3",79,2],
	["Remove all table 4",80,2],
	["Remove all table 5",81,2],
	["Remove all table 6",82,2],
	["Remove all table 7",83,2],

	["Give Total",84,5],
	["Give Max",85,5],

	["Create 3",86,2],
	["Create 4",87,2],
	["Create 5",88,2],
	["Create 6",89,2]
];

//2 class
var deck_solo_2nd = [
	["1",1,7],
	["2",2,7],
	["3",3,7],
	["4",4,7],
	["5",5,7],
	["6",6,7],
	["7",7,7],
	["8",8,7],
	["9",9,7],
	["10",10,7],
	["11",11,7],
	["12",12,6],
	["13",13,7],
	["14",14,7],
	["15",15,7],
	["20",130,6],

	["5 total",16,7],
	["6 total",17,7],
	["7 total",18,7],
	["8 total",19,7],
	["9 total",20,8],
	["10 total",21,8],
	["11 total",22,8],
	["12 total",23,8],

	["4 max",24,7],
	["5 max",25,7],
	["6 max",26,7],
	["7 max",27,7],

	["Subtract 1",32,5],
	["Subtract 2",33,5],
	["Subtract 3",34,5],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Subtract 6",121,3],
	["Subtract 7",122,3],
	["Subtract 8",123,2],
	["Subtract 9",124,2],

	["Add 1",37,4],
	["Add 2",38,4],
	["Add 3",39,4],
	["Add 4",40,4],
	["Add 5",116,4],

	["Add 6",117,3],
	["Add 7",118,3],
	["Add 8",119,2],
	["Add 9",120,2],


	["Multiply 2",41,7],
	["Multiply 3",42,7],

	["Divide 2",43,6],
	//	["Divide 3",44,4],

	["Merge +",45,10],

	["Switch",115,7],

	["Remove Smallest",47,3],
	["Remove Greatest",48,3],

	["Remove 3",50,2],
	["Remove 4",51,2],
	["Remove 5",52,2],
			
	//	["Remove table 3",53,2],
	//	["Remove table 4",54,2],
	//	["Remove table 5",55,2],
	//	["Remove table 6",56,2],
	//	["Remove table 7",57,2],

	//	["Remove prime",115,4],

	["Remove range 1,3",58,3],
	["Remove range 4,6",59,3],
	["Remove range 6,9",60,3],
	["Remove range 0,5",61,3],
	["Remove range 0,3",62,3],
	["Remove range 8,10000",63,3],
	["Remove range 12,10000",64,3],

	["Remove odd",65,4],
	["Remove even",66,4],

	["Remove all odd",67,3],
	["Remove all even",68,3],
		
	["Remove all range 1,3",69,3],
	["Remove all range 4,6",70,3],
	["Remove all range 6,9",71,3],
	["Remove all range 0,5",72,3],
	["Remove all range 0,3",73,3],
	//	["Remove all range 8,10000",74,0],
	["Remove all range 12,10000",75,3],
		
	//	["Remove all table 3",79,2],
	//	["Remove all table 4",80,2],
	//	["Remove all table 5",81,2],
	//	["Remove all table 6",82,2],
	//	["Remove all table 7",83,2],

	["Give Total",84,6],
	["Give Max",85,6],

	["Create 3",86,3],
	["Create 4",87,3],
	["Create 5",88,3],
	["Create 6",89,3]
];

///////////////////////////////


///////////////////////
//standard deck for solo 1vs1
var deck_card = [
	["1",1,5],
	["2",2,5],
	["3",3,5],
	["4",4,5],
	["5",5,5],
	["6",6,5],
	["7",7,5],
	["8",8,5],
	["9",9,5],
	["10",10,5],
	["11",11,5],
	["12",12,4],
	["13",13,4],
	["14",14,4],
	["15",15,4],

	["5 total",16,4],
	["6 total",17,4],
	["7 total",18,4],
	["8 total",19,4],
	["9 total",20,4],
	["10 total",21,4],
	["11 total",22,4],
	["12 total",23,3],

	["4 max",24,5],
	["5 max",25,5],
	["6 max",26,5],
	["7 max",27,4],

	["Look & Discard",30,4],

	["Switch",115,3],


	["Subtract 1",32,6],
	["Subtract 2",33,6],
	["Subtract 3",34,6],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Add 1",37,6],
	["Add 2",38,6],
	["Add 3",39,6],
	["Add 4",40,6],

	["Multiply 2",41,3],
	["Multiply 3",42,3],
	//	["Multiply 4",136,2],
	//	["Multiply 5",137,2],

	["Divide 2",43,3],
	["Divide 3",44,3],

	["Merge +",45,3],
	["Merge x",46,3],

	["Remove Smallest",47,2],
	["Remove Greatest",48,2],

	["Remove range 12,10000",49,2],
	["Remove 3",50,3],
	["Remove 4",51,3],
	["Remove 5",52,3],
		
	["Remove table 3",53,2],
	["Remove table 4",54,2],
	["Remove table 5",55,2],
	["Remove table 6",56,2],
	["Remove table 7",57,2],

	["Remove prime",115,3],

	["Remove range 1,3",58,2],
	["Remove range 4,6",59,2],
	["Remove range 6,9",60,2],
	["Remove range 0,5",61,2],
	["Remove range 0,3",62,2],
	["Remove range 8,10000",63,2],
	["Remove range 12,10000",64,2],

	["Remove odd",65,3],
	["Remove even",66,3],

	["Remove all odd",67,2],
	["Remove all even",68,2],
		
	["Remove all range 1,3",69,2],
	["Remove all range 4,6",70,2],
	["Remove all range 6,9",71,2],
	["Remove all range 0,5",72,2],
	["Remove all range 0,3",73,2],
	["Remove all range 8,10000",74,2],
	["Remove all range 12,10000",75,2],
		
		
	["Draw 3",76,4],
	["Draw 2",77,4],
	//	["Draw 1",78,4],

	["Remove all table 3",79,1],
	["Remove all table 4",80,1],
	["Remove all table 5",81,2],
	["Remove all table 6",82,2],
	["Remove all table 7",83,2],

	["Give Total",84,4],
	["Give Max",85,4],

	["Create 3",86,3],
	["Create 4",87,3],
	["Create 5",88,3],
	["Create 6",89,3]
];

var deck_card_2nd = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,6],
	["5",5,6],
	["6",6,5],
	["7",7,5],
	["8",8,5],
	["9",9,5],
	["10",10,4],
	["11",11,4],
	["12",12,4],
	["13",13,5],
	["14",14,5],
	["15",15,5],

	["5 total",16,7],
	["6 total",17,7],
	["7 total",18,7],
	["8 total",19,7],
	["9 total",20,8],
	["10 total",21,7],
	["11 total",22,7],
	["12 total",23,7],

	["4 max",24,7],
	["5 max",25,7],
	["6 max",26,7],
	["7 max",27,7],

	["Subtract 1",32,6],
	["Subtract 2",33,6],
	["Subtract 3",34,6],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Subtract 6",121,4],
	["Subtract 7",122,4],

	["Add 1",37,4],
	["Add 2",38,4],
	["Add 3",39,4],
	["Add 4",40,4],
	["Add 5",116,4],

	["Add 6",117,3],
	["Add 7",118,3],
	["Add 8",119,2],
	["Add 9",120,2],


	["Multiply 2",41,7],
	["Multiply 3",42,7],

	["Divide 2",43,6],
	//	["Divide 3",44,4],

	["Draw 3",76,4],
	["Draw 2",77,4],

	["Merge +",45,10],

	["Look & Discard",30,4],
	["Switch",115,7],

	["Remove Smallest",47,3],
	["Remove Greatest",48,3],

	["Remove 3",50,2],
	["Remove 4",51,2],
	["Remove 5",52,2],
		
	["Remove range 1,3",58,3],
	["Remove range 4,6",59,3],
	["Remove range 6,9",60,3],
	["Remove range 0,5",61,3],
	["Remove range 0,3",62,3],
	["Remove range 8,10000",63,3],
	["Remove range 12,10000",64,3],

	["Remove odd",65,4],
	["Remove even",66,4],

	["Remove all odd",67,3],
	["Remove all even",68,3],
		
	["Remove all range 1,3",69,3],
	["Remove all range 4,6",70,3],
	["Remove all range 6,9",71,3],
	["Remove all range 0,5",72,3],
	["Remove all range 0,3",73,3],
	["Remove all range 12,10000",75,3],

	["Give Total",84,6],
	["Give Max",85,6],

	["Create 3",86,3],
	["Create 4",87,3],
	["Create 5",88,3],
	["Create 6",89,3]
];

////////////////////////////////



//deck with only numbers
var deck_num = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,6],
	["5",5,6],
	["6",6,5],
	["7",7,5],
	["8",8,5],
	["9",9,5],
	["10",10,4],
	["11",11,4],
	["12",12,4],
	["13",13,4],
	["14",14,4],
	["15",15,4],

	["5 total",16,4],
	["6 total",17,4],
	["7 total",18,4],
	["8 total",19,4],
	["9 total",20,3],
	["10 total",21,3],
	["11 total",22,3],
	["12 total",23,3],

	["4 max",24,5],
	["5 max",25,5],
	["6 max",26,4],
	["7 max",27,4]
];



var deck_card2 = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,6],
	["5",5,6],
	["6",6,5],
	["7",7,5],
	["8",8,5],
	["9",9,5],
	["10",10,5],
	["11",11,5],
	["12",12,4],
	["13",13,4],
	["14",14,4],
	["15",15,4],

	["5 total",16,4],
	["6 total",17,4],
	["7 total",18,4],
	["8 total",19,4],
	["9 total",20,4],
	["10 total",21,4],
	["11 total",22,4],
	["12 total",23,3],

	["4 max",24,5],
	["5 max",25,5],
	["6 max",26,5],
	["7 max",27,4],


	//	["+1 Turn",28,2],
	//	["Look",29,3],
	["Look & Discard",30,4],
	//	["Protect",31,2],

	["Switch",115,3],


	["Subtract 1",32,5],
	["Subtract 2",33,5],
	["Subtract 3",34,5],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Add 1",37,5],
	["Add 2",38,5],
	["Add 3",39,5],
	["Add 4",40,5],

	["Multiply 2",41,3],
	["Multiply 3",42,3],
	//	["Multiply 4",136,2],
	//	["Multiply 5",137,2],

	["Divide 2",43,3],
	["Divide 3",44,3],

	["Merge +",45,3],
	["Merge x",46,3],

	["Remove Smallest",47,2],
	["Remove Greatest",48,2],

	["Remove range 12,10000",49,2],
	["Remove 3",50,3],
	["Remove 4",51,3],
	["Remove 5",52,3],
		
	["Remove table 3",53,2],
	["Remove table 4",54,2],
	["Remove table 5",55,2],
	["Remove table 6",56,2],
	["Remove table 7",57,2],

	["Remove prime",115,3],

	["Remove range 1,3",58,2],
	["Remove range 4,6",59,2],
	["Remove range 6,9",60,2],
	["Remove range 0,5",61,2],
	["Remove range 0,3",62,2],
	["Remove range 8,10000",63,2],
	["Remove range 12,10000",64,2],

	["Remove odd",65,3],
	["Remove even",66,3],

	["Remove all odd",67,2],
	["Remove all even",68,2],
		
	["Remove all range 1,3",69,2],
	["Remove all range 4,6",70,2],
	["Remove all range 6,9",71,2],
	["Remove all range 0,5",72,2],
	["Remove all range 0,3",73,2],
	["Remove all range 8,10000",74,2],
	["Remove all range 12,10000",75,2],
		
		
	["Draw 3",76,4],
	["Draw 2",77,4],
	//	["Draw 1",78,4],

	["Remove all table 3",79,1],
	["Remove all table 4",80,1],
	["Remove all table 5",81,2],
	["Remove all table 6",82,2],
	["Remove all table 7",83,2],

	["Give Total",84,3],
	["Give Max",85,3],

	["Create 3",86,4],
	["Create 4",87,4],
	["Create 5",88,4],
	["Create 6",89,4]
];



var deck_card_low_level = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,7],
	["5",5,8],
	["6",6,7],
	["7",7,7],
	["8",8,6],
	["9",9,6],
	["10",10,5],
	["11",11,5],
	["12",12,5],
	["13",13,4],
	["14",14,4],
	["15",15,4],

	["5 total",16,3],
	["6 total",17,3],
	["7 total",18,3],
	["8 total",19,3],
	["9 total",20,2],
	["10 total",21,2],
	["11 total",22,2],
	["12 total",23,2],

	["4 max",24,4],
	["5 max",25,4],
	["6 max",26,3],
	["7 max",27,3],

	//	["+1 Turn",28,2],
	["Look",29,3],
	["Look & Discard",30,3],
	//	["Protect",31,2],

	["Subtract 1",32,5],
	["Subtract 2",33,5],
	["Subtract 3",34,5],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Add 1",37,5],
	["Add 2",38,5],
	["Add 3",39,5],
	["Add 4",40,5],

	["Multiply 2",41,3],
	["Multiply 3",42,3],

	["Divide 2",43,3],
	["Divide 3",44,3],

	["Merge +",45,2],
	["Merge x",46,2],

	["Remove Smallest",47,2],
	["Remove Greatest",48,2],

	["Remove range 12,10000",49,0],
	["Remove 3",50,4],
	["Remove 4",51,4],
	["Remove 5",52,3],
		
	["Remove table 3",53,2],
	["Remove table 4",54,2],
	["Remove table 5",55,2],
	["Remove table 6",56,2],
	["Remove table 7",57,2],


	["Remove range 1,3",58,2],
	["Remove range 4,6",59,3],
	["Remove range 6,9",60,3],
	["Remove range 0,5",61,3],
	["Remove range 0,3",62,3],
	["Remove range 8,10000",63,2],
	["Remove range 12,10000",64,2],

	["Remove odd",65,5],
	["Remove even",66,5],

	["Remove all odd",67,0],
	["Remove all even",68,0],
		
	["Remove all range 1,3",69,2],
	["Remove all range 4,6",70,2],
	["Remove all range 6,9",71,2],
	["Remove all range 0,5",72,2],
	["Remove all range 0,3",73,2],
	["Remove all range 8,10000",74,0],
	["Remove all range 12,10000",75,0],
		
		
	["Draw 3",76,0],
	["Draw 2",77,8],
	//	["Draw 1",78,4],

	["Remove all table 3",79,1],
	["Remove all table 4",80,1],
	["Remove all table 5",81,1],
	["Remove all table 6",82,1],
	["Remove all table 7",83,1],

	["Give Total",84,2],
	["Give Max",85,2],

	["Create 3",86,4],
	["Create 4",87,4],
	["Create 5",88,4],
	["Create 6",89,4]
];


var deck_nospell = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,5],
	["5",5,4],
	["6",6,3],
	["7",7,3],
	["8",8,4],
	["9",9,4],
	["10",10,3],
	["11",11,3],
	["12",12,3],
	["13",13,4],
	["14",14,4],
	["15",15,4],

	["5 total",16,5],
	["6 total",17,5],
	["7 total",18,5],
	["8 total",19,5],
	["9 total",20,4],
	["10 total",21,4],
	["11 total",22,4],
	["12 total",23,4],

	["4 max",24,6],
	["5 max",25,6],
	["6 max",26,5],
	["7 max",27,5],

	["Look",29,2],
	["Look & Discard",30,4],
	//	["Protect",31,2],

	["Subtract 1",32,5],
	["Subtract 2",33,5],
	["Subtract 3",34,5],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Add 1",37,5],
	["Add 2",38,5],
	["Add 3",39,5],
	["Add 4",40,5],

	["Multiply 2",41,3],
	["Multiply 3",42,3],

	["Divide 2",43,3],
	["Divide 3",44,3],
				
	["Draw 3",76,4],
	["Draw 2",77,4],

	["Give Total",84,5],
	["Give Max",85,5]

];

var deck_nospell_top = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,5],
	["5",5,4],
	["6",6,3],
	["7",7,3],
	["8",8,4],
	["9",9,4],
	["10",10,3],
	["11",11,3],
	["12",12,3],
	["13",13,4],
	["14",14,4],
	["15",15,4],

	["5 total",16,5],
	["6 total",17,5],
	["7 total",18,5],
	["8 total",19,5],
	["9 total",20,4],
	["10 total",21,4],
	["11 total",22,4],
	["12 total",23,4],

	["4 max",24,6],
	["5 max",25,6],
	["6 max",26,5],
	["7 max",27,5],

	["Look",29,2],
	["Look & Discard",30,4],
	//	["Protect",31,2],

	["Subtract 1",32,5],
	["Subtract 2",33,5],
	["Subtract 3",34,5],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Add 1",37,5],
	["Add 2",38,5],
	["Add 3",39,5],
	["Add 4",40,5],

	["Multiply 2",41,3],
	["Multiply 3",42,3],

	["Divide 2",43,3],
	["Divide 3",44,3],
				
	["Draw 3",76,4],
	["Draw 2",77,4],

	["Give Total",84,5],
	["Give Max",85,5],

	["Merge +",45,3],
	["Merge x",46,3],

	["Remove range 12,10000",64,3]

];


var deck_level2 = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,5],
	["5",5,4],
	["6",6,3],
	["7",7,3],
	["8",8,4],
	["9",9,4],
	["10",10,3],
	["11",11,3],
	["12",12,3],
	["13",13,4],
	["14",14,4],
	["15",15,4],

	["5 total",16,5],
	["6 total",17,5],
	["7 total",18,5],
	["8 total",19,5],
	["9 total",20,4],
	["10 total",21,4],
	["11 total",22,4],
	["12 total",23,4],

	["4 max",24,6],
	["5 max",25,6],
	["6 max",26,5],
	["7 max",27,5],

	["Look",29,2],
	["Look & Discard",30,4],
	//	["Protect",31,2],

	["Subtract 1",32,5],
	["Subtract 2",33,5],
	["Subtract 3",34,5],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Add 1",37,5],
	["Add 2",38,5],
	["Add 3",39,5],
	["Add 4",40,5],

	["Multiply 2",41,3],
	["Multiply 3",42,3],

	["Divide 2",43,3],
	["Divide 3",44,3],

	["Merge +",45,6],
	["Merge x",46,5],

	["Remove Smallest",47,2],
	["Remove Greatest",48,2],

	["Remove range 12,10000",64,2],
	["Remove 3",50,3],
	["Remove 4",51,3],
	["Remove 5",52,3],
		
	["Remove table 3",53,2],
	["Remove table 4",54,2],
	["Remove table 5",55,2],
	["Remove table 6",56,2],
	["Remove table 7",57,2],


	["Remove range 1,3",58,2],
	["Remove range 4,6",59,2],
	["Remove range 6,9",60,2],
	["Remove range 0,5",61,2],
	["Remove range 0,3",62,2],
	["Remove range 8,10000",63,2],
	["Remove range 12,10000",64,2],

	["Remove odd",65,3],
	["Remove even",66,3],

	["Remove all odd",67,2],
	["Remove all even",68,2],
		
	["Remove all range 1,3",69,2],
	["Remove all range 4,6",70,2],
	["Remove all range 6,9",71,2],
	["Remove all range 0,5",72,2],
	["Remove all range 0,3",73,2],
	["Remove all range 8,10000",74,2],
	["Remove all range 12,10000",75,2],
		
		
	["Draw 3",76,8],
	//	["Draw 2",77,4],
	//	["Draw 1",78,4],

	["Remove all table 3",79,1],
	["Remove all table 4",80,1],
	["Remove all table 5",81,1],
	["Remove all table 6",82,1],
	["Remove all table 7",83,1],

	["Give Total",84,5],
	["Give Max",85,5],

	["Create 3",86,4],
	["Create 4",87,4],
	["Create 5",88,4],
	["Create 6",89,4]
];


var deck_senior_infant = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,6],
	["5",5,6],
	["6",6,5],
	["7",7,5],
	["8",8,5],
	["9",9,5],
	["10",10,4],
	["11",11,4],
	["12",12,4],
	["13",13,4],
	["14",13,4],
	["15",13,4],

	["5 total",16,4],
	["6 total",17,4],
	["7 total",18,4],
	["8 total",19,4],
	["9 total",20,3],
	["10 total",21,3],
	["11 total",22,3],
	["12 total",23,3],

	["4 max",24,5],
	["5 max",25,5],
	["6 max",26,4],
	["7 max",27,4],

	["Look",29,3],
	["Look & Discard",30,3],

	["Subtract 1",32,5],
	["Subtract 2",33,5],
	["Subtract 3",34,5],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Add 1",37,5],
	["Add 2",38,5],
	["Add 3",39,5],
	["Add 4",40,5],


	["Merge +",45,3],


	["Remove 3",50,3],
	["Remove 4",51,3],
	["Remove 5",52,3],


	["Remove range 1,3",58,2],
	["Remove range 4,6",59,2],
	["Remove range 6,9",60,2],
	["Remove range 0,5",61,2],
	["Remove range 0,3",62,2],
	["Remove range 8,10000",63,2],
	["Remove range 12,10000",64,2],

		
	["Draw 3",76,4],
	["Draw 2",77,4],

	["Give Total",84,3],
	["Give Max",85,3],

	["Create 3",86,4],
	["Create 4",87,4],
	["Create 5",88,4],
	["Create 6",89,4]

];

var fract_deck = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,6],
	["5",5,6],
	["6",6,5],
	["7",7,5],
	["8",8,5],
	["9",9,5],
	["10",10,4],
	["1/2",90,4],
	["5/2",95,20],
	["1/3",91,4],
	["1/4",92,4],
	["1/5",93,4],
	["1/10",94,4],
	//	["0.25",96,4],
	//	["0.5",97,4],
	["1.5",99,4],
	["2.5",100,20],
	//	["0.75",98,4],
	//	["0.1",101,4],



	["Subtract 1",32,5],
	["Subtract 2",33,5],
	["Subtract 3",34,5],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Add 1",37,5],
	["Add 2",38,5],
	["Add 3",39,5],
	["Add 4",40,5],

	["Multiply 2",41,3],
	["Multiply 3",42,3],

	["Divide 2",43,3],
	["Divide 3",44,3]
];

var decks = [deck_card_low_level,deck_card_low_level,deck_card,deck_level2,deck_nospell,deck_nospell_top];


var deck_num_solo_5000 = [
	["1",1,9],
	["2",2,9],
	["3",3,9],
	["4",4,9],
	["5",5,9],
	["6",6,9],
	["7",7,9],
	["8",8,9],
	["9",9,9],
	["10",10,6],
	["11",11,6],
	["12",12,6],
	["13",13,6],
	["14",14,6],
	["15",15,6],
	["16",126,6],
	["17",127,6],
	["18",128,6],
	["19",129,6],
	["20",130,6],
	["21",131,6],
	["22",132,6],
	["23",133,6]

]



var deck_num_solo_first = [
	["1",1,9],
	["2",2,9],
	["3",3,9],
	["4",4,9],
	["5",5,9],
	["6",6,9],
	["7",7,9],
	["8",8,9],
	["9",9,7],
	["10",10,5],
	["11",11,3],
	["12",12,5],
	["13",13,3],
	["14",14,2],
	["15",15,2]
]

var deck_num_solo9 = [
	["1",1,8],
	["2",2,8],
	["3",3,8],
	["4",4,8],
	["5",5,8],
	["6",6,8],
	["7",7,8],
	["8",8,8],
	["9",9,8]
]

var deck_num_solo12 = [
	["1",1,12],
	["2",2,12],
	["3",3,12],
	["4",4,12],
	["5",5,12],
	["6",6,12],
	["7",7,12],
	["8",8,10],
	["9",9,10],
	["10",10,8],
	["11",11,8],
	["12",12,8]
]

var deck_hydra = [
	["20",103,10]
]


// Tutorial Decks
var tut1_you = [
	["3",3,1],
	["5",5,2],
	["6",6,1],
	["8",8,1],
	["10",10,1],
	["11",11,1],
	["Subtract 2",33,1],

	["Add 1",37,1],
	["Add 3",39,1],

	["Multiply 2",41,1]
]

var tut2_you = [
	["3",3,2],
	["5",5,2],
	["6",6,1],
	["8",8,1],
	["11",11,1],
	["Remove even",66,1],

	["Add 1",37,1],
	["Add 3",39,1],

	["Multiply 2",41,1]
]

var tut4_you = [
	["3",3,1],
	["4",4,1],
	["5",5,1],
	["6",6,1],
	["8",8,1],
	["11",11,1],
	["Remove all table 4",80,1],
	["Remove even",66,1],

	["Add 1",37,1],
	["Add 3",39,1],

	["Multiply 2",41,1]
]


var tut3_you = [
	["3",3,2],
	["5",5,2],
	["6",6,1],
	["8",8,1],
	["11",11,1],
	["Remove all table 3",79,1],

	["Add 1",37,1],
	["Add 3",39,1],

	["Multiply 2",41,1]
]


var tut1_opp = [
	["2",2,1],
	["3",3,1],
	["5",5,1],
	["6",6,1],
	["8",8,1],
	["9",9,1],
	["10",10,1],
	["12",12,1],
]

var tut2_opp = [
	["3",3,1],
	["7",5,1],
	["6",6,1],
	["8",8,1],
	["10",10,1],
	["12",12,1],
]

// AI PLAER DECKS
var deck_card_low_level = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,7],
	["5",5,8],
	["6",6,7],
	["7",7,7],
	["8",8,6],
	["9",9,6],
	["10",10,5],
	["11",11,5],
	["12",12,5],
	["13",13,4],
	["14",14,4],
	["15",15,4],

	["5 total",16,3],
	["6 total",17,3],
	["7 total",18,3],
	["8 total",19,3],
	["9 total",20,2],
	["10 total",21,2],
	["11 total",22,2],
	["12 total",23,2],

	["4 max",24,4],
	["5 max",25,4],
	["6 max",26,3],
	["7 max",27,3],

	//	["+1 Turn",28,2],
	["Look",29,3],
	["Look & Discard",30,3],
	//	["Protect",31,2],

	["Subtract 1",32,5],
	["Subtract 2",33,5],
	["Subtract 3",34,5],
	["Subtract 4",35,5],
	["Subtract 5",36,5],

	["Add 1",37,5],
	["Add 2",38,5],
	["Add 3",39,5],
	["Add 4",40,5],

	["Multiply 2",41,3],
	["Multiply 3",42,3],

	["Divide 2",43,3],
	["Divide 3",44,3],

	["Merge +",45,2],
	["Merge x",46,2],

	["Remove Smallest",47,2],
	["Remove Greatest",48,2],

	["Remove range 12,10000",49,0],
	["Remove 3",50,4],
	["Remove 4",51,4],
	["Remove 5",52,3],
		
	["Remove table 3",53,2],
	["Remove table 4",54,2],
	["Remove table 5",55,2],
	["Remove table 6",56,2],
	["Remove table 7",57,2],


	["Remove range 1,3",58,2],
	["Remove range 4,6",59,3],
	["Remove range 6,9",60,3],
	["Remove range 0,5",61,3],
	["Remove range 0,3",62,3],
	["Remove range 8,10000",63,2],
	["Remove range 12,10000",64,2],

	["Remove odd",65,5],
	["Remove even",66,5],

	["Remove all odd",67,0],
	["Remove all even",68,0],
		
	["Remove all range 1,3",69,2],
	["Remove all range 4,6",70,2],
	["Remove all range 6,9",71,2],
	["Remove all range 0,5",72,2],
	["Remove all range 0,3",73,2],
	["Remove all range 8,10000",74,0],
	["Remove all range 12,10000",75,0],
		
		
	["Draw 3",76,0],
	["Draw 2",77,8],
	//	["Draw 1",78,4],

	["Remove all table 3",79,1],
	["Remove all table 4",80,1],
	["Remove all table 5",81,1],
	["Remove all table 6",82,1],
	["Remove all table 7",83,1],

	["Give Total",84,2],
	["Give Max",85,2],

	["Create 3",86,4],
	["Create 4",87,4],
	["Create 5",88,4],
	["Create 6",89,4]
];


var deck_solo_first = [
	["1",1,6],
	["2",2,6],
	["3",3,6],
	["4",4,6],
	["5",5,6],
	["6",6,5],
	["7",7,5],
	["8",8,5],
	["9",9,5],
	["10",10,5],
	["11",11,5],
	["12",12,5],
	["13",13,5],
	["14",14,5],
	["15",15,5],

	["5 total",16,6],
	["6 total",17,6],
	["7 total",18,6],
	["8 total",19,6],
	["9 total",20,7],
	["10 total",21,7],
	["11 total",22,7],
	["12 total",23,7],

	["4 max",24,6],
	["5 max",25,6],
	["6 max",26,6],
	["7 max",27,6],

	["Subtract 1",32,7],
	["Subtract 2",33,7],
	["Subtract 3",34,6],
	["Subtract 4",35,6],
	["Subtract 5",36,5],
	["Subtract 6",121,3],
	["Subtract 7",122,3],
//	["Subtract 8",123,5],
//	["Subtract 9",124,5],

	["Add 1",37,7],
	["Add 2",38,7],
	["Add 3",39,6],
	["Add 4",40,6],
	["Add 5",116,5],
	["Add 6",117,4],
	["Add 7",118,3],
//	["Add 8",119,5],
//	["Add 9",120,5],

	["Multiply 2",125,7],

	["Merge +",45,6],

	["Switch",115,9],


	["Remove range 12,10000",49,0],
	["Remove 3",50,3],
	["Remove 4",51,3],
	["Remove 5",52,3],
		
	["Remove range 1,3",58,3],
	["Remove range 4,6",59,3],
	["Remove range 6,9",60,3],
	["Remove range 0,5",61,3],
	["Remove range 0,3",62,3],
	["Remove range 8,10000",63,3],
	["Remove range 12,10000",64,3],

	["Remove odd",65,4],
	["Remove even",66,3],


		
	["Give Total",84,5],
	["Give Max",85,5],

	["Create 3",86,2],
	["Create 4",87,2],
	["Create 5",88,2],
	["Create 6",89,2]
];



function set_decks(level){
	if (level=="40cards_2nd" || level=='5mins_2nd') {
		deck_solo = JSON.parse(JSON.stringify(deck_solo_2nd)); 
	}

}

function set_powercards(level){
	if (level=='40cards_2nd' || level=='5mins_2nd') 
	{
		power_cards = ['Merge +','12 total','10 max','Remove odd','Remove even','Remove range 8,10000','Remove range 0,5','13','Remove all even','Remove all odd','Switch','11 total','10 total','7 max']
	}
	if (level=='40cards' || level=='5mins') 
	{
		power_cards = ['Merge x','12 total','Remove all table 3',"7 max",'Remove all range 1,3','Remove all range 12,10000','10 max','15',
'Remove all even','Remove all table 4','Remove all table 5','Remove table 3','13','Merge +','Switch','11 total','7 max']
	}
}


function deck_ai(){

}