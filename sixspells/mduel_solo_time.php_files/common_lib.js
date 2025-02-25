 
class Card {

  constructor(c_info,id,color) {

   //console.log(c_info,id,color);
   this.status=indeck;  //0=deck , 1=hand, 3=in play, 4=captured, 5=self-destroyed, 6=on the stack
   this.ab="";

   if ((color=="blue" && start_player==1) || (color=="red" && start_player==0)) {this.cover = 0;} else {this.cover = 1;}
   if (c_info.length==6) {
    	this.protect=0  //card is not protected
    	this.uid = parseInt(c_info[5]);

    	this.ctype="N";
    	this.ftype=""; //F for fractions
    	this.name=c_info[0]; //card name
    	this.special=0; 

    	this.base_value = parseFloat(c_info[4])
    	this.instructions=c_info[2]; //card instructions
    	this.message=c_info[3]; //card message to be displayed to the user
    	this.hydra=0;
    	this.cards=0;
    	this.secs=0;
 
    	if (c_info[1]=="hydra") {this.hydra=1;}
    	if (c_info[1]=="TOTAL") {this.total=2; this.max=0;}
    	else {
    		if (c_info[1]=="MAX") {this.max=2; this.total=0;}
    		else
    			{this.max=0; this.total=0;}
    	}

    	//current value
    	this.cvalue = this.base_value;

    	//fractions
    	if (this.name.indexOf("/")!=-1) 
    		{this.ftype="F"; 
    		 this.vf=this.name;
    		 this.numer= parseInt(this.name.split("/")[0]);
    		 this.denom= parseInt(this.name.split("/")[1]);
    		 this.cvalue = this.numer / this.denom;
    	 	 this.whole = Math.floor(this.numer / this.denom);
			 this.numer = this.numer -  this.whole * this.denom;
    		}  



    	//image
    	if (c_info[1] in ['princess.png','hostage.png'])
    		{this.image = c_info[1];this.special=1;}
    	else
    		{this.image = "empty_"+color+".png"};

    	//Id in the game
    	this.id= parseInt(id);

    }
    else
    {

    	this.name=c_info[0]; //card name
    	this.instructions=c_info[2]; //card instructions
    	this.message=c_info[3]; //card message to be displayed to the user
    	this.uid = parseInt(c_info[4]);

    	//card type (S=spell, I=instant)
    	console.log(c_info);
    	if (c_info[0].indexOf("Remove") !=-1)
    		{   this.ctype="S";}
    	else
    		{   this.ctype="I";}
    	this.base_value = parseInt(c_info[4]);

    	//image
    	this.image = c_info[1];

    	//Id in the game
    	this.id= id;

	}
  };

  get_abilities(){
  	this.ab="";
  	if (this.max>0) {this.ab = this.ab + "MAX"};
  	if (this.total>0) {
  		if (this.ab!="") {this.ab = this.ab + "/";}
  		this.ab = this.ab + "TOTAL"};
  	if (this.hydra>0) {
  		if (this.ab!="") {this.ab = this.ab + "/";}
  		this.ab = this.ab + "HYDRA"};
  	if (this.cards>0) {
  		if (this.ab!="") {this.ab = this.ab + "/";}
  		this.ab = this.ab + "+"+String(this.cards)+" Cards"};
  	if (this.secs>0) {
  		if (this.ab!="") {this.ab = this.ab + "/";}
  		this.ab = this.ab + "+"+String(this.secs)+" Secs"};
  	if (this.protect>0) {
  		this.ab = this.ab + "<br>PT"};
  	
  	return this.ab;
  }

  get_abilities_short(){
  	this.ab="";
  	if (this.max>0) {this.ab = this.ab + "M"};
  	if (this.total>0) {
  		if (this.ab!="") {this.ab = this.ab + "/";}
  		this.ab = this.ab + "T"};
  	if (this.hydra>0) {
  		if (this.ab!="") {this.ab = this.ab + "/";}
  		this.ab = this.ab + "HYDRA"};
  	if (this.cards>0) {
  		if (this.ab!="") {this.ab = this.ab + "/";}
  		this.ab = this.ab + "+"+String(this.cards)+" Cards"};
  	if (this.secs>0) {
  		if (this.ab!="") {this.ab = this.ab + "/";}
  		this.ab = this.ab + "+"+String(this.secs)+" Secs"};
  	if (this.protect>0) {
  		this.ab = this.ab + "<br>P"};
  	
  	return this.ab;
  }

  get_abilities_suggestions(){
  	this.ab="";
  	if (this.total>0 || this.max>0) {this.ab="|";}
  	if (this.total>0) {this.ab = this.ab + "t";}
  	if (this.max>0) {this.ab = this.ab + "m"};
  	
  	return this.ab;
  }


  get_info(){
  	this.info="";
  	this.info = this.cvalue+" ("+String(this.base_value)+") [";
  	if (this.max>0) {this.info = this.info + "M "};
  	if (this.total>0) {this.info = this.info + "T "};
  	if (this.protect>0) {this.info = this.info + "PT"};
  	this.info = this.info+"]";
  	return this.info;

  }

}


class Deck {
  constructor(player,id) {
  	this.player = player;
  	this.id=id;
  	this.num_cards = 0;
  	this.cards= new Array();
 	}
 	
 	addCard(card) {
 		this.cards.push(card);
 	};

 	countcards() {
 		return this.cards.length;
 	};
};

class Hand {
	constructor(id) {
		this.id=id;
		this.cards = new Array();
 		this.num_cards = 0;
	};
};

class Game {
	constructor(Deck1,Deck2){

		//points
		this.points= new Array();
		this.points.push(0);
		this.points.push(0);
		this.swipe= new Array();
		this.swipe.push(0);
		this.swipe.push(0);


		//turn and phases
		this.init_phase = 0;
		this.onetarget = 0;
		this.multitarget = 0;
		this.undo_active = 0;  //undo

		//decks
		this.decks = new Array();
		this.decks.push(Deck1);
		this.decks.push(Deck2);
		this.decks[0].num_cards = this.decks[0].countcards()
		this.decks[1].num_cards = this.decks[1].countcards()

		//empty hands
		this.hands= new Array();
		this.hands.push(new Hand(1));
		this.hands.push(new Hand(2));

		//empty inplay
		this.inplay= new Array();
		this.inplay.push(new Hand(1));
		this.inplay.push(new Hand(2));

		//turn
		this.turn=you;
		this.phase=0;
		this.priority=you;

		//stack - array of relationships, couple (card_id1, card_id2) where card_id2 is applied to card id1, to be cleaned when no other spells are casted
		this.stack= new Array();

		//attacks -> like a stack, attack relation among cards, to be cleaned at the end of each turn
		this.attacks= new Array();

		this.connections= new Array();


	}
}


var skin = "./skins/comic/"
//const tour_page = "solo_tria_tournament"
const tour_page = "hm_tournament"

const back_card = 'backCard.png';
var avatar_dir ="./avatars/";
//var skin = "/skins/basic"


var deck_cards_you = [];
var deck_cards_opp = [];

var sologame=0;
var pick_hand = new Hand(3);


//number of cards each draw

var num_cards_start = 9; //cards in hands at start 
var num_card_after_swipe = 2; //number of cards after swipe
var initial_number=2;  //number of cards at the beginning (+1 if it is not your turn)
var cards_per_turn = 3;  //number of cards at the beginninig of each turn
var extra_cards_inplay = 0 //number of additional cards in play if it is not your turn 
var max_cards = 10 //maximum number of cards in hand, if above cannot draw

var opp_swipe=0;
var you_swipe=0;

var belts = ['White','Yellow','Orange','Green','Blue','Blue II','Purple','Purple II','Red I','Red II','Red III','Brown','Brown II','Black','Black II','Black III','Black Ultra','Legendary'];
var	colors_belt = ['White','Yellow','Orange','Green','Blue','Darkblue','darkviolet','Purple','rgb(255, 77, 77)','Red','darkRed','Brown','darkBrown','Black','Black','Black','Black','gold'];
var	belt_level = ['Newbie','Beginner','Apprentice','Amateur','Student','Semi-Pro','Professional','Advanced','Expert','Champion','World Class','Assistant Master','Master','Master II','Master III','Grand Master','Legendary Master','Ultimate Master'];

var primes =[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,93];

//Points to WIN - FULL GAME
var towin = 75;
var bonus_swipe=10;
var swipe_towin=1;
var spell_attack=0;

var move_id = 0;

var computer_move=1;


//End permissions
function check_logged(){
  pl_name = $("#player").text().trim();
  console.log("LOGGED",pl_name,"ON");
  if (pl_name=='') {window.location.href = 'start.html';}
	return pl_name;
}


//picks
function cardpick(title,cards_topick){
	pick_hand.cards.length = 0;
	//create a hand
	$('#hand_pick').html(title);

	$('#hand_pick').append("<p style='font-size:1.7vw;color:black;margin-top:20%;'>Pick an extra Card</p>");
	for (i=0;i<cards_topick.length;i++)
	{
//		console.log(cards_topick[i],getCardTemplate(cards_topick[i]));
		new_id = new_card_id(you);
		new_card = new Card(getCardTemplate(cards_topick[i]),new_id,color_you);
		pick_hand.cards.push(new_card);
		//render card
		if (new_card.ctype=="N"){
			$('#hand_pick').append('<div id="pickcard_'+String(i)+'" class="pickcard"  style="background-image: url(\''+skin+String(new_card.image)+'\');"><div class="card_title">~'+new_card.base_value+"~ "+'</div><div class="card_number">'+new_card.cvalue+'</div><div class="card_abilities">'+new_card.get_abilities()+'</div></div>'); 
		} else
		{
			$('#hand_pick').append('<div id="pickcard_'+String(i)+'" class="pickcard"  style="background-image: url(\''+skin+String(new_card.image)+'\');"></div>');
		}
	}
	//display it 
	$('#overlay2').css('display','block');
	return 0;
}

function manage_cardpick(title, cards){
	cardpick(title,cards);
}

function select_pick(){
	card_id = this.id;
	$('#overlay2').css('display','none');
	var index = parseInt(card_id.split("_")[1])
	//add the card
	cards_you.push(pick_hand.cards[index].id);
	cards_ingame.push(pick_hand.cards[index].id);
	var card_temp = copy_card(pick_hand.cards[index]);
	if (card_temp.ctype=='N'){
		
		game.inplay[you].cards.push(card_temp);
	} else {
		game.hands[you].cards.push(card_temp);
	}
	update_move(card_temp.name,"pick_card");
	draw_all();
	disable_undo();
	save_game();
	
	//check if points are also reached if it was megamove

	console.log("--- select pick ")

	if (level==-2 && d_pts > megamove_pts && game.points[you] > milestone_pts)
		{	//megamove
			manage_cardpick('<p style="color:black;font-size:4vw;font-family:Bangers">ðŸ’Ž Points MILESTONE! ('+String(milestone_pts)+') ðŸ’Ž</p>',shuffle(power_cards).slice(0,4));
			milestone_pts = milestone_pts + milestone_gap;
		}
}
//end picks



function new_card_id(own_player){
	if ((own_player==you && start_player==1)|| (own_player==opponent && start_player==0)){
		card_id_seq[0] = card_id_seq[0] + 1; new_id = card_id_seq[0];}
	if ((own_player==you && start_player==0)|| (own_player==opponent && start_player==1)){
		o_player = (0 +1) % 2;
		card_id_seq[o_player] = card_id_seq[o_player] + 1; new_id = card_id_seq[o_player];}
	return new_id;
}




function show_swipe(text)
{
	if (fast_time==1){ return 0};
	$('#score_mes').html(text);
	$('#swipemes').css({'font-family':'Bangers'});
	$('#swipemes').fadeIn('slow', function(){
    $('#swipemes').delay(1500).fadeOut(); });
	index_msg=index_msg+1;
}

//Create_deck, Given a deck from deck.js, create a list of cards 
//by replicating the cards in the deck based on their occurrencies
function create_deck(deck_list){
	var std_deck=[];
	var num_cards=0;
	for(var i=0;i<deck_list.length;i++) { 
		num_cards = deck_list[i][2];
		if (level==-2) {num_cards = num_cards *3;}
		for(var j=0;j<num_cards;j++) { 
			std_deck.push(deck_list[i][0]); //add the name of the card 
		}
	}
	return std_deck;
}

function render_points()
{
	if (sologame==1)
		{if (level>0) {return 0}};
	if (game_type==5 || sologame==1){
		$("#you_score").text(String(game.points[you]));
		$("#opponent_score").text(String(game.points[opponent]));
	} else 
	{
		$("#you_score").text(String(game.points[you])+"/"+String(towin));
		$("#opponent_score").text(String(game.points[opponent])+"/"+String(towin));		
	}

	//color swipe
	color_swipe();
};

function renderCards(game,location)
{
	if (sologame==1) {
			for(var i=0;i<game.hands[0].cards.length;i++) { renderCard(game,game.hands[0].cards[i],"hand_you");}
			for(var i=0;i<game.inplay[0].cards.length;i++) { renderCard(game,game.inplay[0].cards[i],"inplay_you");}
			for(var i=0;i<game.inplay[1].cards.length;i++) { renderCard(game,game.inplay[1].cards[i],"inplay_opponent");}
		return 0;	
	}
	switch(location)
	{
		case "all":
			for(var i=0;i<game.hands[0].cards.length;i++) { renderCard(game,game.hands[0].cards[i],"hand_you");}
			for(var i=0;i<game.hands[1].cards.length;i++) { renderCard(game,game.hands[1].cards[i],"hand_opponent");}
			for(var i=0;i<game.inplay[0].cards.length;i++) { renderCard(game,game.inplay[0].cards[i],"inplay_you");}
			for(var i=0;i<game.inplay[1].cards.length;i++) { renderCard(game,game.inplay[1].cards[i],"inplay_opponent");}

	};
	//draw each card
}

//draw a card at the specific location - (hand, inplay) x (you,opponent)
function renderCard(game,card,location)
{
	
	//cover only to opponent in_hand

	if (card.ctype=='N'){
	if (card.cover==1 && location=="hand_opponent") //1
		{$('#'+location).append('<div id="'+String(card.id)+'" class="card"  style="background-image: url(\''+skin+back_card+'\');"></div>');  } 
	else
		{
			var stack_pos = get_stack_pos(card.id);
			if (card.ftype=="F")
			{
				if (stack_pos>0)  {$('#'+location).append('<div id="'+String(card.id)+'" class="card"  style="background-image: url(\''+skin+String(card.image)+'\');"><div class="stack_pos"># '+String(stack_pos)+'</div><div class="card_title">~'+card.base_value+"~ "+card_already_attack(card.id)+'</div><div class="card_number" style="padding-top:2%"><div style="float:left;margin-left:15%;margin-top:10%">'+get_whole(card)+'</div><div class="frac"><div class="numer">'+card.numer+'</div><div class="denom">'+card.denom+'</div></div></div><div class="card_abilities">'+card.get_abilities()+'</div></div>')}; 
				if (stack_pos==0) {$('#'+location).append('<div id="'+String(card.id)+'" class="card"  style="background-image: url(\''+skin+String(card.image)+'\');"><div class="card_title">~'+card.base_value+"~ "+card_already_attack(card.id)+'</div><div class="card_number" style="padding-top:2%"><div style="float:left;margin-left:15%;margin-top:10%">'+get_whole(card)+'</div><div class="frac"><div class="numer">'+card.numer+'</div><div class="denom">'+card.denom+'</div></div></div><div class="card_abilities">'+card.get_abilities()+'</div></div>')}; 

			}
			else
			{	
				if (stack_pos>0) {$('#'+location).append('<div id="'+String(card.id)+'" class="card"  style="background-image: url(\''+skin+String(card.image)+'\');"><div class="stack_pos"># '+String(stack_pos)+'</div><div class="card_title">~'+card.base_value+"~ "+card_already_attack(card.id)+'</div><div class="card_number">'+card.cvalue+'</div><div class="card_abilities">'+card.get_abilities()+'</div></div>')}; 
				if (stack_pos==0) {$('#'+location).append('<div id="'+String(card.id)+'" class="card"  style="background-image: url(\''+skin+String(card.image)+'\');"><div class="card_title">~'+card.base_value+"~ "+card_already_attack(card.id)+'</div><div class="card_number">'+card.cvalue+'</div><div class="card_abilities">'+card.get_abilities()+'</div></div>')}; 
			}

		}  

	} else
	//spell card
	{   
		if (location=="hand_you" || location=="hand_opponent") {
			if (card.cover==1)  //1
				{$('#'+location).append('<div id="'+String(card.id)+'" class="card"  style="background-image: url(\''+skin+back_card+'\');"></div>'); return 0; } 
			else
				{$('#'+location).append('<div id="'+String(card.id)+'" class="card"  style="background-image: url(\''+skin+String(card.image)+'\');"></div>'); return 0;  }

			}

		if (location=="inplay_you" || location=="inplay_opponent") {
			var stack_pos = get_stack_pos(card.id);
			$('#'+location).append('<div id="'+String(card.id)+'" class="card"  style="background-image: url(\''+skin+String(card.image)+'\');"><div class="stack_pos"># '+String(stack_pos)+'</div></div>'); return 0;  }

	}
}


function writeName(){
	$('#you_name').css('word-wrap', 'break-word');
	$('#opp_name').css('word-wrap', 'break-word');

	$('#you_name').text($('#pl_you').text());
	$('#opp_name').text($('#pl_opponent').text());
	$('#you_avatar').attr("src", avatar_dir+"face-"+$('#avatar_you').text());
	$('#opp_avatar').attr("src", avatar_dir+"face-"+$('#avatar_opp').text());
}
function update_permissions(player,permissions,new_belt,game_name){


	$.ajax({ url: 'update_permissions.php', type: 'post', data: { 'game_name': game_name, 'user': player , 'permissions':permissions, 'belt' : new_belt},

 		complete:function(data_in){
  			console.log("Permissions Changed",data_in);
  			}
	 });	

}

function get_cpu_pl_permissions(permissions){
	if (permissions=='all') {return 34;}
	return parseInt(permissions.split("|")[4]);
}

function get_cpu_pl_belt(permissions){
	var level = 0;
	if (permissions=='all') {return 9;}
	level =  permissions; //parseInt(permissions.split("|")[4]);
	if (level>=33) {return 9;} //only after beating the master!
	if (level>=29) {return 8;}
	if (level>=25) {return 7;}
	if (level>=21) {return 6;}
	if (level>=18) {return 5;}
	if (level>=13) {return 4;}
	if (level>=9) {return 3;}
	if (level>=5) {return 2;}
	if (level>=1) {return 1;}
	return level;
}

function get_cpu_level(game_name,user){
  $.ajax({ url: 'get_cpu_level.php', type: 'post', data: {'game_name': game_name, 'user': user },
   success: function(data){
      console.log("=== Menu",data);   //data = <tr><td>... </tr>
      cpu_rank = parseInt(data); //$('#Play_AI').css("border-color","#4CAF50")

    },
    complete:function(data){
      }
  });
}



function get_cpu_type_game(permissions){
	if (permissions=='all') {return 'all';}
	return permissions.split("|")[3];
}



function update_match(winner)
{
	pl_you = $('#pl_you').text();
	pl_opponent = $('#pl_opponent').text();
	home = parseInt($('#home').text());
	if (home == null) {home=-1;}
	t_name = $('#tournament').text().split("|")[0];
	game_index = parseInt($('#tournament').text().split("|")[1]);
	game_id = parseInt($('#game_id').text());

	if (timeout_move==1) 
		{game.points[you]=parseInt(towin/3);
			if (game.points[you]<towin)	{game.points[opponent]=towin};}
	if (timeout_move==2) 
		{game.points[opponent]=parseInt(towin/3);
			if (game.points[you]<towin)	{game.points[you]=towin};}


	console.log("Winner:",winner,pl_you,pl_opponent,game_id,home,game_type);

	$.ajax({ url: 'update_match.php', type: 'post', data: { 'point1':game.points[you]	, 'point2':game.points[opponent], 'swipe1':game.swipe[you], 'swipe2':game.swipe[opponent],'user1': pl_you , 'mid': game_id , 'user2': pl_opponent, 
		'winner': winner,'game_type':game_type, 't_name':t_name, 'game_index': game_index, 'home':home},

 		complete:function(data_in){
  			console.log("output",data_in);
			update_stats(pl_you);
			update_stats(pl_opponent);
  			}
	 });	
}


function update_match_app(total_score,level)
{
}


function update_match_solo(total_score,game_desc)
{
	//if (fast_time==1 || fast_points==1) {return 0;}
//	var game_desc="";


	t_name = $('#tournament').text();
	pl_you = $('#pl_you').text();
	home = parseInt($('#home').text());
	game_id = parseInt($('#game_id').text());
	console.log("STOP TIME",total_score, game_desc);
	//game_type 
//	clearTimeout(t); //stop time


	$.ajax({ url: 'update_match_solo.php', type: 'post', data: { 'home': home, 'g_id': game_id, 'level':level, 'point1':total_score,'user1': pl_you , 't_name':t_name, 'game_type':game_desc},
//	$.ajax({ url: 'update_match_solo.php', type: 'post', data: { 'home': home, 'g_id': game_id, 'level':level, 'point1':total_score,'user1': pl_you , 't_name':t_name},

 		success:function(data_in){
  			console.log("output",data_in);
  			pos_rank = parseInt(data_in.split("/")[0]);
  			tot_rank = parseInt(data_in.split("/")[1]);
  			perc_score = 100*(tot_rank - pos_rank) / tot_rank;
  			$('#rank_solo').html('Rank: '+String(pos_rank)+" ("+String(tot_rank)+")<br>");
  			var pos_solo = parseInt(String(data_in).trim());
  			if (pos_solo <= 10) {$('#winlost_mes').html("<br>Great Job, you are in the TOP 10!<span style='font-size:4vw'>&#x1F396;</span>");}
  			if (pos_solo <= 3) {$('#winlost_mes').html("<br>Impressive! 3rd place overall!<span style='font-size:4vw'>&#x1F949;</span>");}
  			if (pos_solo <= 2) {$('#winlost_mes').html("<br>Awesome! 2nd place overall!<span style='font-size:4vw'>&#x1f948;</span>");}  
  			if (pos_solo <= 1) {$('#winlost_mes').html("<br>WORLD RECORD!! You are the best!<span style='font-size:4vw'>&#x1f947;</span>");}
  			}
	 });	
}

function update_match_solo_fast_time(total_score)
{
	pl_you = $('#pl_you').text();
	game_id = parseInt($('#game_id').text());
	var game_desc="";

	$.ajax({ url: 'update_match_solo_fast_time.php', type: 'post', data: { 'user': pl_you, 'g_id': game_id, 'point':total_score, 'time_interval':target_time},

 		success:function(data_in){
  			console.log("output",data_in);
  			pos_rank = parseInt(data_in.split("/")[0]);
  			tot_rank = parseInt(data_in.split("/")[1]);
  			perc_score = 100*(tot_rank - pos_rank) / tot_rank;
  			$('#rank_solo').html('Rank: '+String(pos_rank)+" ("+String(tot_rank)+")<br>");
  			var pos_solo = parseInt(String(data_in).trim());
  			if (level<0){
  			if (pos_solo <= 10) {$('#winlost_mes').html("<br>Great Job, you are in the TOP 10!<span style='font-size:4vw'>&#x1F396;</span>");}
  			if (pos_solo <= 3) {$('#winlost_mes').html("<br>Impressive! 3rd place overall!<span style='font-size:4vw'>&#x1F949;</span>");}
  			if (pos_solo <= 2) {$('#winlost_mes').html("<br>Awesome! 2nd place overall!<span style='font-size:4vw'>&#x1f948;</span>");}  
  			if (pos_solo <= 1) {$('#winlost_mes').html("<br>WORLD RECORD!! You are the best!<span style='font-size:4vw'>&#x1f947;</span>");}
  			} else
  			{
//  			if (pos_solo <= 10) {$('#winlost_mes').append("<br>Great Job, you are in the TOP 10!<span style='font-size:4vw'>&#x1F396;</span>");}
//  			if (pos_solo <= 3) {$('#winlost_mes').append("<br>Impressive! 3rd place overall!<span style='font-size:4vw'>&#x1F949;</span>");}
//  			if (pos_solo <= 2) {$('#winlost_mes').append("<br>Awesome! 2nd place overall!<span style='font-size:4vw'>&#x1f948;</span>");}  
//  			if (pos_solo <= 1) {$('#winlost_mes').append("<br>WORLD RECORD!! You are the best!<span style='font-size:4vw'>&#x1f947;</span>");}  				
  			}
  			}
	 });	
}



function getcomp_level(username)
{

	console.log("Winner:",username);

	$.ajax({ url: 'get_computer_level.php', type: 'post', data: { 'user': username},

 		complete:function(level){
  			console.log("Level",level);
  			ai_level = parseInt(level);

  			return parseInt(level);
  			}
	 });	
}

function get_stack_pos(card_id)
{
	var reverse_stack = game.stack.slice().reverse();
	if (game_type==0 || game_type==5 ) {reverse_stack = game.stack.slice();}
	
	card_list = new Array();
	for(var i=0;i<reverse_stack.length;i++) 
		{ 
			if (card_list.indexOf(reverse_stack[i][0])==-1) {card_list.push(reverse_stack[i][0]);}  //add if new on the stack
		}
	return 1+card_list.indexOf(parseInt(card_id));
}

function update_move(game_move,move_type)
{
	game_desc=game_name;   //game_name;
	move_id = move_id +1;
	console.log("game_name",game_name)
	if (level==-10) {game_desc=game_name;}
	if (level==-2) {game_desc=game_name;}
	if (time_move==1) {game_desc="movetime";}
	if (fast_time==1) {game_desc=game_name;}

	//if (level>0) {game_desc="spellmaster";}
	if (level>0) {game_desc=game_name+"_"+String(ai_level)};

	pl_you = $('#pl_you').text();
	game_id = parseInt($('#game_id').text());

	//save to local storage
	var d = new Date();
	var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes()+ ":" + d.getSeconds();

	$.ajax({ url: 'update_moves.php', type: 'post', data: { 'move_type': move_type, 'm_id':move_id,'user':pl_you , 'game_type':game_desc , 'move': game_move, 'g_id':game_id },

 		complete:function(data_in){
  			console.log("output move",data_in.responseText);
  			}
	 });	

}


function update_browsing(action,game_move,move_type)
{
	//action = page / change profile
	//move_type = browsing / Change avatar
	//game_move = avatar
	game_desc=action;
	move_id = 0;

	pl_you = $('#username').text();
	game_id = 0;

	//save to local storage
	var d = new Date();
	var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
	localKey = "Moves|"+String(game_id)+"|"+String(move_id);
	localContent = String(datestring)+"|"+String(move_type)+"|"+String(pl_you)+"|"+String(game_desc)+"|"+String(game_move)
	window.localStorage.setItem(localKey, localContent);
	// END

	$.ajax({ url: 'update_moves.php', type: 'post', data: { 'move_type': move_type, 'm_id':move_id,'user':pl_you , 'game_type':game_desc , 'move': game_move, 'g_id':game_id },

 		complete:function(data_in){
  			console.log("output move",data_in.responseText);
  			}
	 });	

}


function change_id(old_id){

	for (var y = 0; y < game.inplay[0].cards.length; y++) 
			{if (game.inplay[0].cards[y].id==old_id) 
				{ console.log("change",game.inplay[0].cards[y].id,next_card_id("blue"))
					game.inplay[0].cards[y].id = next_card_id("blue")
					return 0}}
	for (var y = 0; y < game.hands[0].cards.length; y++) 
			{if (game.hands[0].cards[y].id==old_id) 
				{ console.log("change",game.hands[0].cards[y].id,next_card_id("blue"))
					game.hands[0].cards[y].id = next_card_id("blue")
					return 0}}

}

function check_ids(){
	//for the solo game check that the ids are correct
	//get lists ids
	console.log("+++ Checking IDS")
	ids = []
	for (var y = 0; y < game.inplay[0].cards.length; y++) {ids.push(game.inplay[0].cards[y].id)}
	for (var y = 0; y < game.hands[0].cards.length; y++) {ids.push(game.hands[0].cards[y].id)}

	//look for duplicates
	for (var y = 0; y < ids.length; y++)
			for (var x = y+1; x < ids.length; x++)
			{
					if (ids[x]==ids[y]) 
						{change_id(ids[x])
						  console.log("+++ Changed IDS!!",ids[x])
						  update_move(String(ids[x]),"change ids")}
			}
}

function next_card_id(color){
	if (color="blue") {
		next_id = 0 
	for (var y = 0; y < game.inplay[0].cards.length; y++) 
		{console.log(game.inplay[0].cards[y].id);if (game.inplay[0].cards[y].id>next_id) {next_id = game.inplay[0].cards[y].id + 1}}
	for (var y = 0; y < game.hands[0].cards.length; y++) 
		{console.log(game.hands[0].cards[y].id);if (game.hands[0].cards[y].id>next_id) {next_id = game.hands[0].cards[y].id + 1}}
	}
		if (card_id_seq[0]>next_id) {
			card_id_seq[0] = card_id_seq[0] + 1
			next_id = card_id_seq[0]
		}
		return next_id
}

function update_stats(player)
{
	console.log("Update stats:",player);

	$.ajax({ url: 'update_stats.php', type: 'post', data: { 'user':player},

 		complete:function(data_in){
  			console.log("output",data_in.responseText);
  			}
	 });	
}

function add_stack(a_ing,a_ed){

	for (var i = 0; i < game.stack.length; i++)
		{if (game.stack[i][0]==parseInt(a_ing) && game.stack[i][1]==parseInt(a_ed)) {return 0;}

		}
	game.stack.push([parseInt(a_ing),parseInt(a_ed)]);
	return 0;
}

function DrawRemove(num){
		if (cards_used<=0) {return 0;}
		if (cards_used<num) 
			{num = cards_used ; cards_used = 0;
				Draw(game,game.decks[you],num,you);} 
		else {
			Draw(game,game.decks[you],num,you);
			cards_used	= cards_used	- num;
			num_moves = num_moves + num;}
		$('#you_moves').text(String(num_moves));
		draw_all();
		show_card_used(cards_used);
}


function playCard(card_id)
{
		//play a spell card
		var card = getCard(card_id);
		card.cover=0; //uncover the card
		draw_all();
		addmessage(get_player_name(turn)+": "+card.name+ " played.");
		console.log("Card played:",card.name,game.onetarget);

		if (card.name.indexOf("Protect")!=-1 )  //protect card
		{
			game.onetarget=all_inplay;  //select 1 target
			console.log("protect",game.onetarget,all_inplay);
			hl_section();
			card_played = Object.assign(card); //save the card played
			modal_ok("<span style='color: black'>"+card_name(card.name)+":</span> target a Number cards inside the yellow rectangle to protect it until the end of the turn.");
			hl_card(card.id);
			addmessage(get_player_name(priority)+": target a Number card inside the yellow rectangle!");
			enable_undo();
			return 0;

		}

		if (card.name.indexOf("Give")!=-1 )  //give max or total
		{
			game.onetarget=all_inplay;  //select 1 target
			console.log("give max or total",game.onetarget,all_inplay);
			hl_section();
			card_played = Object.assign(card); //save the card played
			modal_ok("<span style='color: black'>"+card_name(card.name)+":</span> target a Number cards inside the yellow rectangle to give the ability it until the end of the turn.");
			hl_card(card.id);
			addmessage(get_player_name(priority)+": target a Number card inside the yellow rectangle!");
			enable_undo();
			return 0;

		}


		if (card.name.indexOf("Discard")!=-1 )  //look other player's card and discard
		{
			if (priority==you) {game.onetarget=op_hand;}
			if (priority==opponent) {game.onetarget=hand_you;}
			console.log("discard opponent hand",game.onetarget);
			look_discard = 1;
			cover_hand(0);  //uncover hand 
		//	game.onetarget = op_hand;
			hl_section();
			card_played = Object.assign(card); //save the card played
			addmessage(get_player_name(priority)+": target a Number card inside the yellow rectangle!");
			hl_card(card.id);
			modal_ok("<span style='color: black'>"+card_name(card.name)+":</span> select one of your opponent's cards. She/he discards that card.");
			disable_undo();  //if you look at other playe card, no more undo			
			action = 1;  //action done but not undo!
			set_tr_light();
			return 0;
		}

		if (card.name.indexOf("Look")!=-1 && card.name.indexOf("Discard")==-1)  //look other player's card 
		{
			console.log("look opponent hand",game.onetarget);
			if (priority==you) {game.onetarget = op_hand};
			if (priority==opponent) {game.onetarget = hand_you};
			nohl_section();
			hl_section();
			looking=card.id;
			modal_ok("<span style='color: black'>"+card_name(card.name)+":</span> look at other players Card. When you are done, click OK");
			addmessage(get_player_name(priority)+": Look at other player's card!");
			cover_hand(0);  //uncover hand 
			disable_undo(); //if you look at other player card, no more undo
			action = 1;  //action done but not undo!
			attack_status=select_attack;
			set_tr_light();
			return 0;
		}

		if (card.ctype=="N" && priority==turn)
		{
			console.log("number down");
			card_played = Object.assign(card); //save the card played
			game.multitarget=0;
			hl_card(card.id);
			put_spells_inplay(card_played.id);
			enable_undo();
			game.onetarget=0; //target deselected
//			skip();   // change priority
			return 0;

		}

		if (card.name.indexOf("+1 Turn")!=-1 )
			{ //extra turn
				console.log("+1 turn lucky");
			if (priority!=turn)
				{addmessage(get_player_name(priority)+": you can play this card only during your turn!");
				modal_ok(card.name+": you can play this card only during your turn! Cast another spell card or press PASS.");return 0;}
			if (priority==turn)
				{  
				if (extra_turn==0) {extra_turn=1;
						addmessage(get_player_name(priority)+": you will get another turn after this one!");
						hl_card(card.id);
						modal_ok(get_player_name(priority)+" <span style='color: black'>"+card.name+":</span> you will get another turn after this one! Press PASS or cast spells.")
						removeCardfromGame(card.id);
						disable_undo();			
						game.onetarget=0; //target deselected
						action = 1;  //action done but not undo!
						set_tr_light();
						return 0;
						}
				}	
			removeCardfromGame(card.id);
//			mess_after_move();
			//draw_all();
			op_mes = " Opponent played <span style='color: black'>"+card_name(String(card.name))+"</span>"
			game.onetarget=0; //target deselected
			return 0;
			}

		if (card.name.indexOf("Create")!=-1 )  //create card
		{
			//who is the owner?
			own_player = owner(card.id);
			var temp = card.name.split(" ");
			var num =  parseInt(temp[1]);
			console.log("card create",num);
			if (priority==opponent)
				{col = color_opponent;}
			else
				{col = color_you;}
			if ((own_player==you && start_player==1)|| (own_player==opponent && start_player==0)){
				card_id_seq[0] = card_id_seq[0] + 1; new_id = card_id_seq[0];}
			if ((own_player==you && start_player==0)|| (own_player==opponent && start_player==1)){
				o_player = (0 +1) % 2;
				card_id_seq[o_player] = card_id_seq[o_player] + 1; new_id = card_id_seq[o_player];}

			console.log(card_templates[num-1]);
			var new_card = new Card(card_templates[num-1],new_id,col);

			//add to the game
			if (priority==you) {cards_you.push(new_card.id);}
			if (priority==opponent) {cards_opponent.push(new_card.id);}
			cards_ingame.push(new_card);
			//add card to hand and play it
			game.inplay[priority].cards.push(new_card);
/*
			game.hands[priority].cards.push(new_card);
			get_cards_ingame();
			put_spells_inplay(new_card.id);
*/
			op_mes = " Opponent played <span style='color: black'>Create "+String(num)+"</span>"
			//remove card
			//hide_modal();
			hl_card(card.id);
			removeCardfromGame(card.id);
			//draw_all();
			enable_undo();
			game.onetarget=0; //target deselected
			//skip();   // change priority
			console.log("messaggio create")
			mess_after_move();
			return 0;
		};

		
		if (card.name.indexOf("Draw")!=-1 )  //draw
		{
			var temp = card.name.split(" ");
			var num_cards = temp[1];

			console.log("draw",temp,num_cards);
			Draw(game,game.decks[priority],num_cards,priority);
			addmessage(get_player_name(turn)+" "+String(num_cards)+ " new cards drawn from your deck.");
			//remove card
			hl_card(card.id);
			removeCardfromGame(card.id);
			//draw_all();
			disable_undo();
			action = 1; //action performed
			set_tr_light();
			
			game.onetarget=0; //target deselected
			save_game();  //new save point - after cards have been drawn no turning back
			return 0;
		};


		if (card.name.indexOf("Switch") !=-1)  //switch card
		{

			game.onetarget=all_inplay;  //select 1 target
			console.log("play",game.onetarget,all_inplay);
			modal_ok("<span style='color: black'>"+card.name+":</span> target a number card to change its color!");
			hl_card(card.id);
			hl_section();
			card_played = Object.assign(card); //save the card played
			addmessage(get_player_name(turn)+": target a Number card inside the yellow rectangle!");
			enable_undo();
			return 0;
		};

		if (card.name.indexOf("Add") !=-1 || card.name.indexOf("Subtract") !=-1 || card.name.indexOf("Divide") !=-1 || card.name.indexOf("Multiply") !=-1)  //add or subtract card
		{

			game.onetarget=all_inplay;  //select 1 target
			console.log("play",game.onetarget,all_inplay);
			modal_ok("<span style='color: black'>"+card.name+":</span> target a number card to modify its value.");
			hl_card(card.id);
			if (card.name.indexOf("Divide") !=-1)
			{
				modal_ok("Divide Card - Careful! The card wokrs only if the target number can be divided by "+String(card.name.split(" ")[1]))
			};			
			hl_section();
			card_played = Object.assign(card); //save the card played
			addmessage(get_player_name(turn)+": target a Number card inside the yellow rectangle!");
			enable_undo();
			return 0;
		};

		//create card

		//merge operation card
		if (card.name.indexOf("Merge") !=-1) //merge
		{
			if (merge_op==0)
			{
				//check if there are two cards
				if (game.inplay[priority].cards.length<2)
					{addmessage(get_player_name(turn)+": you must have at least 2 number cards in play to use the Merge spell.");
					modal_ok("<span style='color: black'>"+card.name+":</span> you must have at least 2 number cards in play to use the Merge spell.");
					spell_attack=0;
					console.log("METTILO A ZERO SPELL",spell_attack);
					cover_hand(1);
					return 0};

				if (priority==you) {game.onetarget=my_inplay;}  //select 1 target, only own cards are possible
				if (priority==opponent) {game.onetarget=op_inplay;}  //select 1 target, only own cards are possible
				console.log("Merge",game.onetarget,all_inplay,card.name);
				spell_attack=1;

				nohl_section();
				hl_section();
				card_played = Object.assign(card); //save the card played
				hl_card(card.id);
				merge1 = 0;
				merge2 = 0;	
				merge_op=1;		
				addmessage(get_player_name(turn)+": target 2 of your Number cards inside the yellow rectangle!");
				op_mes = " Opponent played <span style='color: black'>"+card_name(String(card.name))+"</span>"
				modal_ok("<span style='color: black'>"+card.name+":</span> target 2 of your Number cards inside the yellow rectangle.");
				hl_section();
				enable_undo();
				return 0;
			}
		}

		if (card.name.indexOf("Greatest") !=-1 || card.name.indexOf("Smallest") !=-1)  //remove greatest/smaller
		{
			//target=all_inplay;  //select 1 target 
			console.log("remove greatest/smallest",game.onetarget,all_inplay);
			//hl_section();
			card_played = Object.assign(card); //save the card played
			game.multitarget=0;
			//add to the stack
			hl_card(card.id);
			put_spells_inplay(card_played.id);
			//place on the stack
			add_stack(parseInt(card_played.id),allcards);
 //			game.stack.push([parseInt(card_played.id),allcards	]);  //-1 = allcards
			enable_undo();
			game.onetarget=0; //target deselected
			op_mes = " Opponent played <span style='color: black'>"+card_name(String(card.name))+"</span>"

//			skip();   // change priority
			return 0;

		}

		if (card.name.indexOf("Remove") !=-1 && card.name.indexOf("all") ==-1)  //remove single
		{
			game.onetarget=all_inplay;  //select 1 target
			console.log("play",game.onetarget,all_inplay);
			card_played = Object.assign(card); //save the card played
			game.multitarget=0;
			addmessage(get_player_name(turn)+": target a Number cards inside the yellow rectangle!");
			op_mes = " Opponent played <span style='color: black'>"+card_name(String(card.name))+"</span>"
			modal_ok("<span style='color: black'>"+card_name(card.name)+":</span> target a number card inside the yellow rectangle")
			hl_card(card.id);
			hl_section();
			enable_undo();
			return 0;
		};

		if (card.name.indexOf("Remove") !=-1 && card.name.indexOf("all") !=-1)  //remove all - including range
		{
			//target=all_inplay;  //select 1 target 
			console.log("remove all",game.onetarget,all_inplay);
			//hl_section();
			card_played = Object.assign(card); //save the card played
			game.multitarget=0;
			//add to the stack
			hl_card(card.id);
			put_spells_inplay(card_played.id);
			//place on the stack
			add_stack(parseInt(card_played.id),allcards);
			enable_undo();
			game.onetarget=0; //target deselected
			return 0;
		};
}  //end funciton playcard


function getCardTemplate(CardName)
{
	for (var i = 0; i < card_templates.length; i++) {if (card_templates[i][0]==CardName) return card_templates[i];}
	return 0;
}

function check_swipe()
{
	console.log(" _____________________CHECK swipe",game.inplay[you].cards.length,priority,you);

	//check if there is bonus swipe
	if (game.inplay[you].cards.length==0)
		{
			addmessage(get_player_name(player)+": Your numbers have been swiped! +"+String(5*game.swipe[opponent])+" Points for opponent!");
			return 1;
		}

	if (game.inplay[opponent].cards.length==0)
		{
			addmessage(get_player_name(player)+": Your opponent numbers have been swiped! +"+String(5*game.swipe[you])+" Points");
			
			return 1;
		}
		return 0;
}

function check_swipe_solo()
{
	console.log("SOLO swipe -->",game.inplay[opponent].cards.length,CountSpecials(),current_level.num_sp_cards)
	if (game.inplay[opponent].cards.length==CountSpecials()  && CountSpecials() == current_level.num_sp_cards)
		{
			return 1;
		}
		return 0;
}


function color_swipe()
{
	var html="";
	for (i=0;i<swipe_towin;i++){
		if (i<game.swipe[you]) {html = html +"<span style='color:yellow'>&#9733;</span>";}
		else {html = html +"<span style='color:white'>&#9733;</span>";}
	}
	$("#swipe_you").html(html);
	html="";
	for (i=0;i<swipe_towin;i++){
		if (i<game.swipe[opponent]) {html = html +"<span style='color:yellow'>&#9733;</span>";}
		else {html = html +"<span style='color:white'>&#9733;</span>";}
	}
	$("#swipe_opponent").html(html);

}



function check_winner_turns()
{

	if (num_turns % 2==0 && num_turns<19) return 0;
	console.log("turno", num_turns);
	//check if there is a winner
	score_you = parseInt($('#you_score').text());
	score_opp = parseInt($('#opponent_score').text());

	pl_you = $('#pl_you').text();
	pl_opponent = $('#pl_opponent').text();

	//create swipe
	swipe_you_text = "";
	swipe_opponent_text = "";

	for (var i = 0; i < game.swipe[you]; i++) {swipe_you_text = swipe_you_text +"&#9733; ";}
	for (var i = 0; i < game.swipe[opponent]; i++) {swipe_opponent_text = swipe_opponent_text +"&#9733; ";}


	if (num_turns<20 && game.swipe[you]<swipe_towin && game.swipe[opponent]<swipe_towin) {return 0};

	mes_result = String(pl_you)+" - "+String(pl_opponent)+"<br>"+String(score_you)+" ("+String(swipe_you_text)+")" +" - "+String(score_opp)+" ("+String(swipe_opponent_text)+")<br>";
	var end_match = 0;
	var winner=0;
	//draw
	if (num_turns<20 && game.swipe[you]>=swipe_towin) { mes_result = mes_result+"<span style='text-align: center;font-size:2vw'>("+String(pl_you)+ " won by number of swipes).</span>" }
	if (num_turns<20 && game.swipe[opponent]>=swipe_towin) { mes_result = mes_result+"<span style='text-align: center;font-size:2vw'>("+String(pl_opponent)+ " won by number of swipes).</span>" }

	if (score_you==score_opp || (game.swipe[you]>=swipe_towin && game.swipe[opponent]>=swipe_towin))
	{
		mes_winlost = "It is a draw!"; winner = 3;
	}
	else
		{ if (score_you>score_opp) {mes_winlost="You WON!!"; winner = 1;} else {mes_winlost="You have lost this time."; winner = 2;} }
		  if (game.swipe[you]>=swipe_towin) {mes_winlost="You WON!!"; winner = 1;} 
		  if (game.swipe[opponent]>=swipe_towin) {mes_winlost="You have lost this time."; winner = 2;}
		computer_move=0;
		$('#winlost_mes').text(mes_winlost);
		$('#winlost_result').html(mes_result);
		$('#winlost').css('display','block');  
		console.log("WINNER ==========================");
		update_match(winner);
}

function remove_maxtotal(player)
{
	for (var y = 0; y < game.inplay[player].cards.length; y++)
	{
		if (game.inplay[player].cards[y].get_abilities_short()=="M/T"){
			game.inplay[player].cards[y].total=0;  //remove the total power, only max stays
		}
	}

}

function describe_cards()
{
	var card_inplay_op="";
	for (var y = 0; y < game.inplay[opponent].cards.length; y++)
	{
		card_inplay_op = card_inplay_op + "|" + game.inplay[opponent].cards[y].cvalue + "("+ game.inplay[opponent].cards[y].base_value +","+game.inplay[opponent].cards[y].id+")"
	}
	//console.log("opponent inplay", card_inplay_op)
	card_inplay_you="";
	for (var y = 0; y < game.inplay[you].cards.length; y++)
	{
		card_inplay_you = card_inplay_you + "|" + game.inplay[you].cards[y].cvalue + "("+ game.inplay[you].cards[y].base_value +","+game.inplay[you].cards[y].id+game.inplay[you].cards[y].get_abilities_short()+")"
	}

	//console.log("your inplay", card_inplay_you)
	card_hand_you="";
	for (var y = 0; y < game.hands[you].cards.length; y++)
	{
		card_hand_you = card_hand_you + "|" + game.hands[you].cards[y].name + "("+ game.hands[you].cards[y].id +")"
	}
	//console.log("your hand", card_hand_you)
	return card_inplay_op+"+"+card_inplay_you+"+"+card_hand_you
}

function describe_stack()
{
	var stack_desc="";
	for (var y = 0; y < game.stack.length; y++)
	{
		stack_desc = stack_desc + "|" + game.stack[y]
	}
	console.log("insert stack",stack_desc);
	return stack_desc
}


//solve stack cards
function solve_stack()   //cards attacks
{
	points_bef = game.points[you];
	points_bef_opp = game.points[opponent];
	console.log("Solving STACK",game.stack.slice().reverse());
	game_status = describe_cards();
	game_status = game_status+"+"+describe_stack();
	explain_removal.length = 0;
	//describe_game();
	var arrayLength = game.stack.length;
	var reverse_stack = game.stack.slice().reverse();
	if (game_type==0 || game_type==5 ) {reverse_stack = game.stack.slice();}
	for (var i = 0; i < arrayLength; i++)
	{
			
	  	attacking_card = getCard(reverse_stack[i][0]); 
	  	if (CardinGame(reverse_stack[i][0])==1 && attacking_card.ctype=="N")
			{solve_number(reverse_stack[i][0]);}
		else
			{

			if (CardinGame(reverse_stack[i][0])==1 && reverse_stack[i][1]==-1) //allcards
				{applycard(getCard(reverse_stack[i][0]),-1);}
			else
			{

			if (CardinGame(reverse_stack[i][0])==1 && CardinGame(reverse_stack[i][1])==1){
				console.log("********** apply spell stack single");
				applycard(getCard(reverse_stack[i][0]),getCard(reverse_stack[i][1]));}
				else { console.log("no target for this card",getCard(reverse_stack[i][0]).name);
					//add_explain(getCard(reverse_stack[i][0]),-1);
					removeCardfromGame(reverse_stack[i][0]);}
			}
		}
	}
	game.stack.length=0;
	game.attacks.length=0;
	game.connections.length=0;
	$(".attackline").remove();  //cancel all the lines
	//console.log("explain",explain_removal);
	draw_all();
	disable_undo();
	points_after = game.points[you];
	points_after_opp = game.points[opponent];
	game_status = String(points_bef)+"+"+String(points_bef_opp)+"+"+String(points_after)+"+"+String(points_after_opp)+"+"+game_status+"+"+describe_cards();
	update_move(game_status,"stack");
}



function cut_hydra(card_played){
	if (card_played.cvalue==1) {return 0;}
	var val1 = 0; val2 = 0;
	val1 = Math.floor(card_played.cvalue/2);
	val2 = Math.ceil(card_played.cvalue/2);
	//create two cards
	card_info = ["","","","",1,1];
	console.log("hydra",card_played.cvalue,val1,val2);
	own_player = owner(card_played.id);

	new_id = new_card_id(own_player);
	card1 = new Card(card_info,new_id,color_opponent);

	new_id = new_card_id(own_player);
	card2 = new Card(card_info,new_id,color_opponent);

	card1.cvalue = val1;
	card2.cvalue = val2;
	card1.base_value = val1;
	card2.base_value = val2;

	card1.hydra = 1;
	card2.hydra = 1;

	card1.ctype="N";
	card2.ctype="N";
	card1.name="Card Number " + String(card1.base_value);
	card2.name="Card Number " + String(card2.base_value);
	cards_opponent.push(card1.id);
	cards_opponent.push(card2.id);
	cards_ingame.push(card1);
	cards_ingame.push(card2);
	game.inplay[opponent].cards.push(card1);
	game.inplay[opponent].cards.push(card2);
	console.log("hydra",card1,card2);
}

//capture cards
function solve_number(card_id)   //cards attacks
{
	console.log("== solving number ==",card_id)
	var arrayLength = game.stack.length;
	var attacked_cards = new Array()
	var points = 0;
	attacking = parseInt(card_id);
	//select all the attackers
	attacked_cards.length = 0;
	var sum_card=0;
  	attacking_card = getCard(card_id);
  	points = 0;

		for (var y = 0; y < arrayLength; y++)
			{
				if (game.stack[y][0]==attacking)  //collect all the attacking cards
					{
						if (CardinGame(attacking)==1 && CardinGame(game.stack[y][1])==1){
						 att_card = getCard(game.stack[y][1]);
						 if (att_card.protect==0){
							 attacked_cards.push(game.stack[y][1]);
						 	sum_card = sum_card + att_card.cvalue;
						 	points = points + att_card.base_value;
						 	console.log("attacked",att_card,name,att_card.cvale,sum_card,points);
							} else {console.log("Card protected!");}
						
						} else
						{console.log("Solve attacks, cards missing");}
					} 
			}
		//check the matching
		//owner of attacking card
		player = owner(attacking);
			//somma uguale o minore se la carta attaccante ha la max ability
			if (sum_card>0 && (sum_card==attacking_card.cvalue || (sum_card<=attacking_card.cvalue && attacking_card.max>0)) )
					{game.points[player]=game.points[player]+points;play(points);
					 
					 //remove cards from games
					 for (var y = 0; y < attacked_cards.length; y++) {
						removeCardfromGame(attacked_cards[y]);
						}
					 }
	 if (sologame==1) {removeCardfromGame(attacking_card.id);}
} 





//capture cards
function solve_attacks()   //cards attacks
{
	console.log("== solving attacks ==")
	var arrayLength = game.attacks.length;
	var attacked_cards = new Array()
	var points = 0;
	for (var i = 0; i < arrayLength; i++)
		{
			attacking = game.attacks[i][0];
			//select all the attackers
			attacked_cards.length = 0;
			var sum_card=0;
  		 	attacking_card = getCard(game.attacks[i][0]);
  		 	points = 0;
  		 	//console.log("attacking",attacking_card.name);

		for (var y = 0; y < arrayLength; y++)
			{
				if (game.attacks[y][0]==attacking)  //collect all the attacking cards
					{
						if (CardinGame(attacking)==1 && CardinGame(game.attacks[y][1])==1){
						 att_card = getCard(game.attacks[y][1]);
						 if (att_card.protect==0){
							 attacked_cards.push(game.attacks[y][1]);
						 	sum_card = sum_card + att_card.cvalue;
						 	points = points + att_card.base_value;
						 	console.log("attacked",att_card,name,att_card.cvale,sum_card,points);
							} else {console.log("Card protected!");}
						
						} else
						{console.log("Solve attacks, cards missing");}
					} 
			}
		//check the matching
		//owner of attacking card
		player = owner(attacking);
			//somma uguale o minore se la carta attaccante ha la max ability
			if (sum_card>0 && (sum_card==attacking_card.cvalue || (sum_card<=attacking_card.cvalue && attacking_card.max>0)) )
					{game.points[player]=game.points[player]+points;play(points);
					 
					 //remove cards from games
					 for (var y = 0; y < attacked_cards.length; y++)
						removeCardfromGame(attacked_cards[y]);
					 }
		} 
	//reset attacks
	game.attacks.length=0;
	game.connections.length=0;
	$(".attackline").remove();  //cancel all the lines

	disable_undo();
}

function hl_card(card_id){

		//if (priority==opponent){
		$(".inplay").css({'border':'0px'}); 
		$("#"+String(card_id)).css({'border':'3px solid red'}); 
		draw_lines();
		//}
};


function draw_lines()
{
	//cancel
	$(".attackline").remove();
	for (var i = 0; i < game.connections.length; i++)
		{if (CardinGame(game.connections[i][0])==1 && CardinGame(game.connections[i][1])==1)
			{con_div(game.connections[i][0],game.connections[i][1],game.connections[i][2]);}
		}
};


function hl_div(card_id){

		$("#"+String(card_id)).css({'border':'4px solid green'}); 
		draw_lines();
};


function nohl_div(card_id){

		$("#"+String(card_id)).css({'border':'0px solid green'}); 
};


function nohl_div_cards(){

		$("#inplay_opponent").children().css({'border':'0px solid green'}); 
};


function hl_section(){
	if (priority!=you) {nohl_section(); return 0;};
	if (game.onetarget==all_inplay) {
		$("#inplay_you").css({'box-sizing': 'border-box','border-bottom':'5px solid yellow','border-right':'5px solid yellow','border-left':'5px solid yellow'}); 
		$("#inplay_opponent").css({'box-sizing': 'border-box','border-top':'5px solid yellow','border-right':'5px solid yellow','border-left':'5px solid yellow'}); 
//		$("#inplay_you").css({'background-color': 'rgba(255, 255, 0, 0.2)'}); 
//		$("#inplay_opponent").css({'background-color': 'rgba(255, 255, 0, 0.2)'}); 
	}

	if (game.onetarget==my_inplay) {
		$("#inplay_you").css({'box-sizing': 'border-box','border':'5px solid yellow'}); 
	}
	
	if (game.onetarget==op_inplay) {
		$("#inplay_opponent").css({'box-sizing': 'border-box','border':'5px solid yellow'}); 
	}
	if (game.onetarget==op_hand) {
		$("#hand_opponent").css({'box-sizing': 'border-box','border':'5px solid blue'}); 
	}
	if (game.onetarget==hand_you) {
		$("#hand_you").css({'box-sizing': 'border-box','border':'5px solid white'}); 
	}

}

function nohl_section(){

		$("#inplay_opponent").css({'border':'0px'}); 
		$("#inplay_you").css({'border':'0px'}); 
		if (priority==you) {$(".inplay").css({'border':'0px'})}; 
		$("#hand_opponent").css({'border':'0px'}); 
		$("#hand_you").css({'border':'0px'}); 
}

function add_secs(num){
	seconds = seconds - num;
	if (seconds<0) {seconds=0};
	//show_bonus("+"+String(num)+" seconds!")
}

function add_cards(num){
	cards_used = cards_used + num;
	show_card_used(cards_used);
	//show_bonus("+"+String(num)+" cards!")
}

function removeCardfromGame(card_id)
{
	card = getCard(card_id);
	if (card.hydra==1) {cut_hydra(card);}
	if (card.secs>0) {add_secs(card.secs);}
	if (card.cards>0) {add_cards(card.cards);}	
	temp = getCardIndex(card_id);
	var player = temp[0];
	var location = temp[1];
	var index = temp[2];
	var card_type = temp[3];
	if (location==indeck) {game.decks[player].cards.splice(index,1);}
	if (location==inplay) {game.inplay[player].cards.splice(index,1);}
	if (location==inhand) {game.hands[player].cards.splice(index,1);}
	console.log("playing spell");play(solve_spell);
//    if (sologame==1) {automatic_draw();}
	//animation
    fade(card_id,500);

}

function fade(div_id,time)
{
	$("#"+String(div_id)).hide('slow', function(){ draw_all(); });
}

function draw_all()
{	
	check_ids()
	check_card_limits(); //is it okay to do it here?
	$(".card").remove();
	renderCards(game,"all");
	render_points();
	draw_lines();
	$("#priority").css({"background-color": color_player[priority] });
	if (priority==you) {
		$("#priority").text("Priority: You")};
	if (priority==opponent) {
		$("#priority").text("Priority: Opponent")};
}


function put_spells_inplay(card_id){

	//spell from hand to inplay
	play(cast_spell);
	temp = getCardIndex(card_id);
	var player = temp[0];
	var location = temp[1];
	var index = temp[2];
	var card_type = temp[3];
	player = owner(card_id);
	console.log("put spell",player,card_id);
	if (location==inhand)
	{
		//copy card
		card_temp = copy_card(game.hands[player].cards[index]);
		//remove from hand
		game.hands[player].cards.splice(index,1);
		//add to inplay
		game.inplay[player].cards.push(card_temp);
		//fade the card
		console.log("put it!!");
		modal_ok("Play Cards or press PASS to give priority to your opponent");
		nohl_section();
		fade(card_temp.id,500);
	}
};

function getCardName(card){
	var cname="";
	cname = String(card.base_value);
	if (card.total>1) {cname = cname +  " TOTAL";}
	if (card.max>1) {cname = cname +  " MAX";}
	return cname;
}

function card_name(cardname)
{
if (cardname=="Remove table 3") {return "Remove a multiple of 3";}
if (cardname=="Remove table 4") {return "Remove a multiple of 4";}
if (cardname=="Remove table 5") {return "Remove a multiple of 5";}
if (cardname=="Remove table 6") {return "Remove a multiple of 6";}
if (cardname=="Remove table 7") {return "Remove a multiple of 7";}

if (cardname=="Remove range 1,3") {return "Remove a number between 1 and 3";}
if (cardname=="Remove range 4,6") {return "Remove a number between 4 and 6";}
if (cardname=="Remove range 6,9") {return "Remove a number between 6 and 9";}
if (cardname=="Remove range 0,5") {return "Remove a number < 6";}
if (cardname=="Remove range 0,3") {return "Remove a number < 4";}
if (cardname=="Remove range 8,10000") {return "Remove a number > 8";}
if (cardname=="Remove range 12,10000") {return "Remove a number > 12";}

if (cardname=="Remove all range 1,3") {return "Remove all numbers between 1 and 3";}
if (cardname=="Remove all range 4,6") {return "Remove all numbers between 4 and 6";}
if (cardname=="Remove all range 6,9") {return "Remove all numbers between 6 and 9";}
if (cardname=="Remove all range 0,5") {return "Remove all numbers < 6";}
if (cardname=="Remove all range 0,3") {return "Remove all number < 4";}
if (cardname=="Remove all range 8,10000") {return "Remove all numbers > 8";}
if (cardname=="Remove all range 12,10000") {return "Remove all numbers > 12";}

if (cardname=="Remove all table 3") {return "Remove all multiples of 3";}
if (cardname=="Remove all table 4") {return "Remove all multiples of 4";}
if (cardname=="Remove all table 5") {return "Remove all multiples of 5";}
if (cardname=="Remove all table 6") {return "Remove all multiples of 6";}
if (cardname=="Remove all table 7") {return "Remove all multiples of 7";}

return cardname;
}

//stopwatch function
var tenth = 0, seconds = 0, minutes = 0, hours = 0, t,t_move,t_points,t_fast;
var ended = 0;
var timeout_move=0;
function reset_time(){
tenth = 0, seconds = 0, minutes = 0, hours = 0;

}



function check_win_time(minutes,seconds){
	if (seconds==0 && minutes==0) {return 0;}
	if (seconds % current_level.interval == 0)
		{//add a card
			DrawOpp(1);
		if (CountOppCards()>= current_level.max_opp_cards) {	  //too much red cards
			if (level==-4) {giveup();ended=1;return 0;}
			loss_message("Too much Red Cards! You have lost, "+String(pl_you)+"!")
			$('#next_level').css('display','none');
			return 1;
		}

		}
	if (seconds>=200 && level>=-2) {	  //time is UP
			loss_message("Time is UP! You have lost, "+String(pl_you)+"!");
			$('#next_level').css('display','none');
			return 1;
		}
}

function add() {
	if (ended==1) {return 0;}
	if (giveuptime==1) {return 0;}
    seconds++;
    if (level!=-1) {i = check_win_time(minutes,seconds); if (i==1) return 0;};
    if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (level==-4) {
            	if (current_level.interval>1) {
            		current_level.interval = current_level.interval -1;
            		//show_swipe("A card every "+String(current_level.interval)+" secs!");
            	} 
            }
        }

    var min_show = 50 - minutes;
    var sec_show = 60 - seconds;
    if (sec_show==60) {sec_show=0;}
    if (min_show<=-1 && sec_show<=0) {show_time(" Time UP");giveup_time();}

    if (level==-2) {show_time("-"+((min_show >9 ? min_show : "0" +min_show) + ":" + (sec_show > 9 ? sec_show : "0" + sec_show)));}
    else {
    show_time((minutes + ":" + (seconds > 9 ? seconds : "0" + seconds)+":"+tenth));
	}
    timer();
}

function add_app() {
    tenth++;
    if (tenth >= 10) {
        tenth = 0;
        seconds++;
        if (level!=-1) {i = check_win_time(minutes,seconds); if (i==1) return 0;};
    }
    show_time_left(seconds)
    timer_app();
}

function timer() {
    t = setTimeout(add, 1000);
}

function timer_move() {
    t_move = setTimeout(update_movetime, 1000);
}

function timer_solo() {
    t_move = setTimeout(move_solo_time, 1000);
}

function timer_app() {
    t = setTimeout(add_app, 100);
}

function timer_points() {
    t_points = setTimeout(solo_fast_points, 100);
}

function timer_fast() {
    t_fast = setTimeout(solo_fast_time, 1000);
}



function show_time(time){
	var color = "black"
	if (parseInt(time.split(":")[0])==0 && parseInt(time.split(":")[1])<=10){
		color = "red"
	}
	html = "<div style='display:block;width:100%;float:left;margin-left:3%;font-size:1.6vw;color:"+color+";'>â³ "+String(time)+"</div>"
	$('#time_left').html(html);
}

function show_time_1v1(time,player){
	html = "<div style='display:block;width:100%;float:left;margin-left:3%;font-size:1.5vw;'>"+String(time)+"</div>"
	$('#you_time').html(html);
}


function update_movetime(){
//	if (ended==1) {return 0;}
//	if (giveuptime==1) {return 0;}
    seconds++;
 //   if (level!=-1) {i = check_win_time(minutes,seconds); if (i==1) return 0;};
    if (seconds >= 60) {
            seconds = 0;
            minutes++;

        }

    var min_show = 19 - minutes;
    var sec_show = 10 - seconds;
    if (sec_show==60) {sec_show=0;}
    if (min_show<=-1 && sec_show<=0) {show_time_1v1(" Time UP",you);end_time_1v1();}

    if (level==-2) {show_time_1v1("-"+((min_show >9 ? min_show : "0" +min_show) + ":" + (sec_show > 9 ? sec_show : "0" + sec_show)),you);}
    else {
    show_time_1v1((min_show + ":" + (sec_show > 9 ? sec_show : "0" + sec_show)),you);
	}
    timer_move();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function time_penalty(){
	
	cards_used = cards_used -1;

	if (cards_used<=0){
		//no more cards in the deck, remove one on the table
		//get all the cards in play + inhand
		//end of the game
		console.log("STOP TIME NOW!!!")
		clearTimeout(t_move);
        giveuptime = 1
		update_move("","end");
        win_mes();
		
	}

	//reset the time
	seconds = 0+pen_time*num_pen;
	target_time  = 1+ parseInt(initial_target*0.75);
	//target_time = 46;
	num_pen = num_pen + 1;
	if (num_pen>max_penalty) {num_pen=5}
	show_card_used(cards_used);
		//draw_all();
		save_game();
}

function move_solo_time(){
    seconds++;
    if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

    min_tot = parseInt(Math.floor(target_time/60))
    sec_tot = parseInt(Math.floor(target_time%60))
    if (sec_tot==0) {sec_tot = 60}
    var min_show = min_tot - minutes;
    var sec_show = sec_tot - seconds;
    //if (sec_show==10) {sec_show=0;}
    if (min_show<=0 && sec_show<=0) {show_time((min_show + ":" + (sec_show > 9 ? sec_show : "0" + sec_show)),you);time_penalty();}

    if (level==-2) {show_time(""+((min_show >9 ? min_show : "0" +min_show) + ":" + (sec_show > 9 ? sec_show : "0" + sec_show)),you);}
    else {
    show_time((min_show + ":" + (sec_show > 9 ? sec_show : "0" + sec_show)),you);
	}
    if (giveuptime!=1) {timer_solo();}
}


function solo_fast_time(){
    seconds++;
    if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    min_tot = parseInt(Math.floor(target_time/60))-1
    var min_show = min_tot - minutes;
    var sec_show = 60 - seconds;
    if (sec_show==60) {sec_show=0;}
    console.log(sec_show,min_show,target_time);
    if (seconds+60*minutes>target_time) {show_time("00:00",you);end_time_game();return 0;}

    if (level==-2) {show_time(((min_show >9 ? min_show : "0" +min_show) + ":" + (sec_show > 9 ? sec_show : "0" + sec_show)),you);}
    else {
    show_time((min_show + ":" + (sec_show > 9 ? sec_show : "0" + sec_show)),you);
	}
    timer_fast();
}


function solo_fast_points() {
    tenth++;
    if (tenth >= 10) {
        tenth = 0;
        seconds++;
    }
    if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    show_time((minutes + ":" + (seconds > 9 ? seconds : "0" + seconds)+":"+tenth));
    timer_points();
}


///////////////////
// Suggestions
//////////////////

function convert_spellname(card) {
	console.log(card)
    card = card.trim()
    if (card.indexOf("Remove 3")!=-1 || card.indexOf("Remove 4")!=-1 || card.indexOf("Remove 5")!=-1 || card.indexOf("Remove 6")!=-1)
    	{card = card.replace('Remove ', 'Remove number ');}
    ca = card.replace('Subtract ', '-');
    ca = ca.replace('Add ', '+');
    ca = ca.replace('Multiply ', '*');
    ca = ca.replace('Divide ', '/');
    ca = ca.replace('Remove ', 'R ');
    return ca
}


function revert_spellname(card) {
	console.log(card)
    if (card[0]=='+') {return "Add "+card.slice(1)}
    if (card[0]=='*') {return "Multiply "+card.slice(1)}
    if (card[0]=='/') {return "Divide "+card.slice(1)}
    if (card[0]=='-') {return "Subtract "+card.slice(1)}
    if (card.indexOf("R number")!=-1) {
    	 return card.replace('R number ', 'Remove ');
    }
    if (card.indexOf("R ")!=-1) {
    	 return card.replace('R ', 'Remove ');
    }

    if (card.indexOf("|t")!=-1) {
    	 return card.substring(0,card.indexOf("|t"))+ ' total';
    	
    }

   if (card.indexOf("|m")!=-1) {
    	 return card.substring(0,card.indexOf("|m"))+ ' max';
    }

    return card
}


function extract_cards(player){

	var opp_player = (player +1)%2
	var card_inplay_op=[];
	console.log("==============>>",player, game.inplay[opp_player].cards.length)
	for (var y = 0; y < game.inplay[opp_player].cards.length; y++)
	{
		card_inplay_op.push([game.inplay[opp_player].cards[y].cvalue+game.inplay[opp_player].cards[y].get_abilities_suggestions(),parseInt(game.inplay[opp_player].cards[y].base_value),game.inplay[opp_player].cards[y].id])
	}
	//console.log("opponent inplay", card_inplay_op)
	card_inplay_you=[];
	for (var y = 0; y < game.inplay[player].cards.length; y++)
	{
		if (game.inplay[player].cards[y].ctype=='N'){
			card_inplay_you.push([game.inplay[player].cards[y].cvalue+game.inplay[player].cards[y].get_abilities_suggestions(),parseInt(game.inplay[player].cards[y].base_value),game.inplay[player].cards[y].id])
		} else
		{
			card_inplay_you.push([convert_spellname(game.inplay[player].cards[y].name),-1,game.inplay[player].cards[y].id])			
		}
	}

	for (var y = 0; y < game.hands[player].cards.length; y++)
	{
		if (game.hands[player].cards[y].ctype=='N'){
			card_inplay_you.push([game.hands[player].cards[y].cvalue+game.hands[player].cards[y].get_abilities_suggestions(),parseInt(game.hands[player].cards[y].base_value),game.hands[player].cards[y].id])
		} else
		{
			card_inplay_you.push([convert_spellname(game.hands[player].cards[y].name),-1,game.hands[player].cards[y].id])			
		}
	}

	return [card_inplay_op,card_inplay_you]
}

function change_suggested(){

	temp = extract_cards()
	console.log(temp)
	reds = temp[0]
	blues = temp[1]
	var fast = 1; var n = 50 //default values
	console.log("Blues",blues)
	console.log("Reds",reds)
	suggested_card = suggest_card(blues,reds,n,fast)
	console.log(suggested_card)
	return revert_spellname(suggested_card[0],suggested_card[1]) 

}

function create_gameid(){
    var d = new Date();
	var n = d.getTime();
  	game_id = n;
  	return n
}

function save_feelings(game_type){
	//get the values
	answers = [$('#Excited').is(":checked")|0,$('#Upset').is(":checked")|0,$('#Calm').is(":checked")|0,$('#Nervous').is(":checked")|0,$('#Smart').is(":checked")|0,$('#None').is(":checked")|0]
	console.log(answers)
	if (JSON.stringify(answers) == '[0,0,0,0,0,0]')
		{
			$('#finish').css('background-color','red');
			$('#finish').css('color','yellow');
			$('#finish').text('Answer the Master!');
			return 0;
		}
	game_id = parseInt($('#game_id').text());
	pl_you = $('#pl_you').text();


   $.ajax({ url: 'save_feelings.php', type: 'post', data: { 'player':pl_you,'game_id':game_id,'answers': answers.join(";")},

 		complete:function(data_in){
  			console.log("output move",data_in.responseText);
  			window.onbeforeunload = null;
  	//		if (game_type=="solo") {window.location.replace("solo_page.php")}
  			if (game_type=="ai") {window.location.replace("play_ai.php")}
  			return 1;
  			}
})

}

function ask_feelings(mes_result){
		mes_result = mes_result+"<span style='text-align: center;font-size:2vw'><b>How do you feel after this match?<br></span><span style='text-align: center;font-size:1vw'><b>Choose one or more<br></span>";

		$('#winlost_result').html(mes_result);

		$('#winlost').css('display','block');  
		$('#rank_solo').css('display','none'); 
		$('#finish').css('margin-left','53%');
		$('#finish').text('Done! >>');
		$('#finish').css('margin-top','3%');
		$('#finish').css('font-size','1.8vw');
		$('#finish').css('padding','0.8% 1.6%');
		$('#finish').css('background-color','#4a8ed0');
		$('#finish').css('border-color','white');
		$('#finish').css('color','white');

		emotions=['Excited','Upset','Calm','Nervous','Smart','None of these']
		ids=['Excited','Upset','Calm','Nervous','Smart','None']
		separators=['','<br>','','<br>','','']
		marg_left=['0%','3%','0%','3%','0%','3%']
		marg_top=['0%','2%','0%','2%','0%','2%']
		choices = "";
		for (var i = 0; i < emotions.length; i++) 
		{
			choices = choices + '<input type="checkbox" id="'+ids[i]+'" class="chk-btn" name="'+emotions[i]+'" value="'+emotions[i]+'"><label style="display:inline-block;width:27%;margin:0%;margin-left:'+marg_left[i]+';margin-top:'+marg_top[i]+'" id="label_'+ids[i]+'" for="'+emotions[i]+'">'+emotions[i]+'</label>'+separators[i]
		}
		console.log(choices)
		choices = "<div id='emotions_list' style='display:block;margin-left:28%;text-align: center;font-size:1.5vw'>"+choices+"</div>"
	$('#feelings').append(choices)

}