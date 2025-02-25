class CLevel {
  constructor(id,name) {
  	this.id = id;
  	this.name=name;
  	this.bck_image = "";
  	this.instructions = "";
  	this.cards_after_timer = 0;  //at the end of the interval, add new cards
  	this.cards_after_move = 0;  //att the of each move, add new cards
  	this.max_cards = 50;  //max cards in deck
  	this.max_time = 216000;  //60 hours
  	this.swipe = 1;  //max cards in deck
  	this.interval = 216000;  //interval to generate new cards
  	this.special_cards = []; //special cards to be protected
  	this.num_sp_cards=0;
  	this.max_opp_cards = 100; //opponents cards to lose
  	this.max_points = 3600;
  	this.ko_mes = "You have lost";
  	this.ok_mes = "Good job!";  //level complete
  	this.world_intro = "Welcome to this new world";
  	this.level_intro = "Welcome to this new level";
  	this.level_tutorial ="";
  	this.reset =0; //don't reset time and cards
  	this.start_points = 0;

 	}
 	

 	Setstartpts(points) {
 		this.start_points = points;
 	};
		

 	set_max_points(max_points) {
 		this.max_points = max_points;
 	};

 	set_ko_mes(ko_mes) {
 		this.ko_mes = ko_mes;
 	};

 	set_ok_mes(ok_mes) {
 		this.ok_mes = ok_mes;
 	};

	SetInstructions(instructions) {
 		this.instructions = instructions;
 	};

 	SetBck_image(image) {
 		this.bck_image = image;
 	};


 	Setswipe(swipe) {
 		this.swipe = swipe;
 	};

 	Set_oppcards(num_cards) {
 		this.oppcards = num_cards;  //initial opponent
 	};

 	Set_mycards(num_cards) {
 		this.mycards = num_cards;
 	};

 	mydeck(deck) {
 		this.mydeck = deck;
 	};

 	oppdeck(deck) {
 		this.oppdeck = deck; 
 	};

 	set_max_time(secs) {
 		this.max_time = secs;
 	};

 	set_max_cards(num) {
 		this.max_cards = num;
 	};

 	set_interval(secs) {
 		this.interval = secs;
 	};

 	set_cards_timer(num){
		this.cards_after_timer = num;}

 	set_cards_move(num){
		this.cards_after_move = num;}

	set_max_opp_cards(num){
		this.max_opp_cards = num;}
	
	set_special_cards(cards){
		this.num_sp_cards = cards.length;
		for (var i=0; i<cards.length; i++)
			{this.special_cards.push(cards[i]);}
	}

};

function display_level(level){
	$('#level_instructions').html(level.instructions);
}

function create_arcade(){


}

function create_levels(){
	//level 1: one  line of enemies , no time
	var level1 = new CLevel(1,"level 1/10");

	level1.mydeck(deck_solo);
	level1.oppdeck(deck_num_solo);
	level1.SetInstructions('<center><span style="font-size:2.5vw; color:green; ">'+level1.name+'</span><br><p>Capture all the red cards using your blue number cards and spells.</p><p>You can use a maximum of 50 cards.</p><p>Good Luck!</p><div class="btn_turn" id="deck_you" style="text-align:center;border: 2px solid black;padding:4px" >Click here to Start!</div>');
	level1.Set_oppcards(11);  //11 cards for the opponent
	level1.Set_mycards(9);  //10 cards for me
	level1.set_max_points(3600);
	//all the rest defaul, no cards for timer or 

	//level 2: two  lines of enemies , no time
	level2 = new CLevel(2,"level 2/10");

	level2.mydeck(deck_solo);
	level2.oppdeck(deck_num_solo);
	level2.SetInstructions('<center><span style="font-size:2.5vw; color:green; ">'+level2.name+'</span><br><p>Capture 2 lines of red cards using your blue number cards and spells.</p><p>You can use a maximum of 50 cards.</p><p>Good Luck!</p><div class="btn_turn" id="deck_you" style="text-align:center;border: 2px solid black;padding:4px" >Click here to Start!</div>');
	level2.Set_oppcards(22);  //11 cards for the opponent
	level2.Set_mycards(9);  //10 cards for me
	level2.set_max_points(4200);
	//all the rest defaul, no cards for timer or 


	//level 3: two  lines of enemies , 90 seconds
	level3 = new CLevel(3,"level 3/10");

	level3.mydeck(deck_solo);
	level3.oppdeck(deck_num_solo);
	level3.SetInstructions('<center><span style="font-size:2.5vw; color:green; ">'+level3.name+'</span><br><p>Capture all the red cards using your blue number cards and spells.</p><p>You have only 100 seconds to do it!</p><p>You can use a maximum of 50 cards.</p><p>Good Luck!</p><div class="btn_turn" id="deck_you" style="text-align:center;border: 2px solid black;padding:4px" >Click here to Start!</div>');
	level3.Set_oppcards(22);  //11 cards for the opponent
	level3.Set_mycards(9);  //10 cards for me
	level3.set_max_time(100);  //90 seconds max time
	level3.set_max_points(5000);

	//all the rest defaul, no cards for timer or 

	//level 3: red cards every 5 seconds
	level4 = new CLevel(4,"level 4/10");

	level4.mydeck(deck_solo);
	level4.oppdeck(deck_num_solo);
	level4.SetInstructions('<center><span style="font-size:2.5vw; color:green; ">'+level4.name+'</span><br><p>Capture all the red cards using your blue number cards and spells.</p><p>But... every 6 seconds a new red card will be added! If three lines of red cards are completed, you lose!<p>Good Luck!</p><div class="btn_turn" id="deck_you" style="text-align:center;border: 2px solid black;padding:4px" >Click here to Start!</div>');
	level4.Set_oppcards(22);  //11 cards for the opponent
	level4.Set_mycards(9);  //10 cards for me
	level4.set_interval(6);  //5 secs interval
	level4.set_max_cards(200);
	level4.set_max_opp_cards(33);
	level4.set_max_time(6000);  //90 seconds max time
	level4.set_max_points(6000);
	
	//princess
	level5 = new CLevel(5,"level 6/10");

	level5.mydeck(deck_solo);
	level5.oppdeck(deck_num_solo);
	level5.SetInstructions('<center><span style="font-size:2.5vw; color:green; ">'+level5.name+'</span><br><p>Save the Princess! Capture all the red cards using your blue number cards and spells.</p><p>But... do not harm the Princess!!</p><p>You can use a maximum of 50 cards.</p><p>Good Luck!</p><div class="btn_turn" id="deck_you" style="text-align:center;border: 2px solid black;padding:4px" >Click here to Start!</div>');
	level5.Set_oppcards(21);  //11 cards for the opponent
	level5.Set_mycards(9);  //10 cards for me
	level5.set_max_time(6000);  //90 seconds max time
	level5.set_max_points(6000);
	level5.set_special_cards(['Princess']);

	//3 lines
	level6 = new CLevel(6,"level 5/10");

	level6.mydeck(deck_solo);
	level6.oppdeck(deck_num_solo);
	level6.SetInstructions('<center><span style="font-size:2.5vw; color:green; ">'+level6.name+'</span><br><p>Capture all the red cards using your blue number cards and spells.</p><p>You can use a maximum of 50 cards.</p><p>Good Luck!</p><div class="btn_turn" id="deck_you" style="text-align:center;border: 2px solid black;padding:4px" >Click here to Start!</div>');
	level6.Set_oppcards(33);  //11 cards for the opponent
	level6.Set_mycards(9);  //10 cards for me
	level6.set_max_time(6000);  
	level6.set_max_points(6000);

	//3 lines in 2 minutes
	level7 = new CLevel(4,"level 7/10");

	level7.mydeck(deck_solo);
	level7.oppdeck(deck_num_solo);
	level7.SetInstructions('<center><span style="font-size:2.5vw; color:green; ">'+level7.name+'</span><br><p>Capture all the red cards using your blue number cards and spells.</p>You have 2:30 minutes to do it!<p>Good Luck!</p><div class="btn_turn" id="deck_you" style="text-align:center;border: 2px solid black;padding:4px" >Click here to Start!</div>');
	level7.Set_oppcards(33);  //11 cards for the opponent
	level7.Set_mycards(9);  //10 cards for me
	level7.set_max_time(150);  //90 seconds max time
	level7.set_max_cards(200);
	level7.set_max_points(6000);

	//princess
	level8 = new CLevel(4,"level 8/10");

	level8.mydeck(deck_solo);
	level8.oppdeck(deck_num_solo);
	level8.SetInstructions('<center><span style="font-size:2.5vw; color:green; ">'+level5.name+'</span><br><p>Save the Princess! Every 5 seconds a new red card will be added!</p><p>And remember... do not harm the Princess!!<p>Good Luck!</p><div class="btn_turn" id="deck_you" style="text-align:center;border: 2px solid black;padding:4px" >Click here to Start!</div>');
	level8.Set_oppcards(21);  //11 cards for the opponent
	level8.Set_mycards(9);  //10 cards for me
	level8.set_special_cards(['Princess']);
	level8.set_interval(5);  //5 secs interval
	level8.set_max_cards(200);
	level8.set_max_opp_cards(33);
	level8.set_max_time(6000);  //90 seconds max time
	level8.set_max_points(6000);
	level8.set_ko_mes("Nooo! You killed the Princess!");
	level8.set_ok_mes("Thank you my hero!");

	//level 3: red cards every 5 seconds
	level9 = new CLevel(9,"level 9/10");

	level9.mydeck(deck_solo);
	level9.oppdeck(deck_num_solo);
	level9.SetInstructions('<center><span style="font-size:2.5vw; color:green; ">'+level9.name+'</span><br><p>Capture all the red cards using your blue number cards and spells.</p><p>But... every 4 (!!) seconds a new red card will be added! If three lines of red cards are completed, you lose!</p><p>You can use up to 200 cards</p><p>Good Luck!</p><div class="btn_turn" id="deck_you" style="text-align:center;border: 2px solid black;padding:4px" >Click here to Start!</div>');
	level9.Set_oppcards(22);  //11 cards for the opponent
	level9.Set_mycards(9);  //10 cards for me
	level9.set_interval(4);  //5 secs interval
	level9.set_max_cards(200);
	level9.set_max_opp_cards(33);
	level9.set_max_time(10000);  //90 seconds max time
	level9.set_max_points(10000);

	//level 3: red cards every 3 seconds
	level10 = new CLevel(10,"level 10/10");

	level10.mydeck(deck_solo);
	level10.oppdeck(deck_num_solo);
	level10.SetInstructions('<center><span style="font-size:2.5vw; color:green; ">'+level10.name+'</span><br><p>Capture all the red cards using your blue number cards and spells.</p><p>But... every 3 (!!) seconds a new red card will be added! If three lines of red cards are completed, you lose!</p><p>You can use up to 200 cards</p><p>Good Luck!</p><div class="btn_turn" id="deck_you" style="text-align:center;border: 2px solid black;padding:4px" >Click here to Start!</div>');
	level10.Set_oppcards(22);  //11 cards for the opponent
	level10.Set_mycards(9);  //10 cards for me
	level10.set_interval(3);  //5 secs interval
	level10.set_max_cards(200);
	level10.set_max_opp_cards(33);
	level10.set_max_time(10000);  //90 seconds max time
	level10.set_max_points(10000);


	return [level1,level2,level3,level4,level6,level5,level7,level8,level9,level10];  //level5
}

function setupCardsLevel(level){
	num_card_after_swipe = level.oppcards; //number of cards after swipe
	initial_opponent=num_card_after_swipe;

	num_cards_start = level.mycards;
	max_cards = level.mycards;
	cards_per_turn = level.mycards;
}

//var glevels = create_levels();