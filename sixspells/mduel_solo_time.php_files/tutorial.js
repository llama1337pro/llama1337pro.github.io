
var tut_index = 20; //page of the tutorial
var tut_active = 0;
var current_tutorial = [];
var tut_div = "";
//coordinates of the box / text / text of extra button / target divs / arrow or not

//put grey
//swipe
tut_1 = []
/*
tut_1 = [
	[[45,20,60,-1],"<p>Hello apprentice. Welcome to Seven Spells.</p><p>I am Li Wang, Master of the Seven Spells. I will be your mentor</p>","",[''],'N'],
	[[45,10,25,-1],"<p>Aim of the game is to capture the Red number cards...</p>","",['inplay_opponent'],'N'],
	[[45,3,25,-1],"You cards are divided in number cards (blue) and spells (yellow)","",['inplay_you','hand_you'],'N'],
	[[45,3,25,-1],"<p>Let's forget about spells for now...</p>","",['hand_you'],'H'],
	[[45,3,25,-1],"<p>Basic Rule: a card with a value captures a card with the same value. <br>So 3 captues 3, 6 captures 6 and so on</p>","next",['1','10001','4','10003'],'Y'],
	[[35,3,25,-1],"<p>Let's try to capture the 3 red card with our 3 blue card. First click on the blue 3... <p>","none",['1'],'U'],
	[[35,3,25,-1],"<p>then click on the 3 red card... <p>","none",['10001'],'U'],
	[[35,3,25,-1],"<p>Very well... now click on GO! to execute your move!<p>","none",['skip'],'U'],
	[[35,3,25,-1],"<p>BOOM! 3 Points for you!</p>","next",['you_score'],'N'],
	[[35,3,25,-1],"<p>Note how both the cards have been removed from the board</p>","next",[],'N'],
	[[35,3,25,-1],"<p>Remember... you can also perform multiple attacks and press GO!</p>","next",[],'Y'],
	[[35,3,25,-1],"<p>Now, try to capture some red cards!</p>","try",[],'Y'],
	['move','points','hand_you',[],'',[tut1_you,tut1_opp]],
	[[35,3,25,-1],"<p>Well done!</p>","next",[],'Y'],
	[[35,3,25,-1],"<p>Let's see the spell cards, the yellow ones.</p>","next",['hand_you'],'V'],
	[[35,3,25,-1],"<p>Spells can modify the value of number cards, or capture one or more cards directly</p>","next",['hand_you'],'N'],
	[[30,3,25,-1],"<p>There are some examples of spells that modifies the value of a number card.</p>","",["hand_you"],'N'],
	['reset','points','reset',[],'',[tut1_you,tut1_opp]],
	[[35,3,25,-1],"<p>Let's try a spell. Click on the subtract 2 spell...","none",['8'],'U'],
	[[35,3,25,-1],"<p>.. and now click on the blue card 10 to transform it into an 8</p>","none",['6'],'U'],
	[[35,3,25,-1],"<p>Good job! We are ready to capture the red number 8..</p>","next",[''],'N'],
	[[35,3,25,-1],"<p>As we did before, first click on your number 8</p>","none",['6'],'U'],
	[[35,3,25,-1],"<p>.. and now the red number 8 </p>","none",['10004'],'U'],
	[[35,3,25,-1],"<p>.. and GO!<p>","none",['skip'],'U'],
	[[35,3,25,-1],"<p>BOOM! 8 more points for you!</p>","next",['you_score'],'N'],
	[[35,3,25,-1],"<p>Now, try to capture some red cards using spells!</p>","try",[],'Y'],
	[[35,3,25,-1],"<p>Well done! There are plenty of spells. Some of them, like the one we saw, are applied to a single card</p>","next",[],'Y'],
	[[35,3,25,-1],"<p>Some of them can capture a card directly. Here some examples: </p><img style='width:25%;margin:1%' src='./skins/comic/rem6.png' alt='Remove Number 6'><img style='width:25%;margin:1%' src='./skins/comic/remove_table4.png' alt='Remove Number 6'><img style='width:25%;margin:1%' src='./skins/comic/rem_even.png' alt='Remove Number 6'><p>Let's try the remove even spell</p>","next",[],'Y'],
	['reset','points','reset',[],'',[tut2_you,tut1_opp]],
	[[35,3,25,-1],"<p>Click on the Remove Even number spell...","none",['8'],'U'],
	[[35,3,25,-1],"<p>.. and now click on the red card 12</p>","none",['10007'],'U'],
	[[35,3,25,-1],"<p>.. and GO!<p>","none",['skip'],'U'],
	[[35,3,25,-1],"<p>BOOM! 12 more points for you!</p>","next",['you_score'],'N'],
	[[35,3,25,-1],"<p>We could have target any even cards, including our cards. However, you don't get points to capture your own cards..</p>","next",['you_score'],'N'],
	[[35,3,25,-1],"<p>What happens if we target an odd cards instead of even?</p>","next",['you_score'],'N'],
	[[35,3,25,-1],"<p>The spell is wasted, no cards is removed and no points are assigned.</p>","next",['you_score'],'N'],
	[[35,3,25,-1],"<p>Let's see more spells...","next",['you_score'],'N'],
	[[30,3,30,-1],"<p>Some spells apply to more then one card at the same time. Here some examples: </p><img style='width:22%;margin:1%' src='./skins/comic/rem1to3.png' alt='Remove Number 6'><img style='width:22%;margin:1%' src='./skins/comic/table3.png' alt='Remove Number 6'><img style='width:22%;margin:1%' src='./skins/comic/rem_all_odd.png' alt='Remove Number 6'><p>The spell remove Table 3 will remove automatically all the numbers in the table of 3 (3,6,9,...). Let's try</p>","next",[],'Y'],
	['reset','points','reset',[],'',[tut3_you,tut1_opp]],
	[[35,3,25,-1],"<p>Click on the Remove Table of 3 spell...","none",['8'],'U'],
	[[47,3,25,-1],"<p>There is no need to target cards. The spell will automatically apply to all the numbers in the table of 3...</p>","next",[],'N'],
	[[47,3,25,-1],"<p>All of these cards will be removed!.</p>","next",['10007','10003','10005','10001','2','5','1'],'N'],
	[[47,3,25,-1],"<p>So, what is it going to happen when you press go?</p>","next",['10007','10003','10005','10001','2','5','1'],'N'],
	[[47,3,25,-1],"<p>You score points for the red cards, for a total of 12+6+9+3 = 30!!</p>","next",['10007','10003','10005','10001'],'N'],
	[[47,3,25,-1],"<p>You also remove from the board your number cards 6, 3, 3 but you do not score points for them</p>","next",['2','5','1'],'N'],
	[[47,3,25,-1],"<p>Let's press GO!<p>","none",['skip'],'U'],
	[[47,3,25,-1],"<p>BOOM! 30 more points for you! What a spell!</p>","next",['you_score'],'N'],

	[[35,3,25,-1],"<p>Now prove me you can become the Master of Seven Spells</p>","next",[],'Y'],
	['reset','points','reset',[],'',[tut4_you,tut2_opp]],
	[[35,3,25,-1],"<p>Capture all the red cards!</p><p>If you are stuck, press RESTART</p>","restart",[],'Y'],
	['move','swipe','hand_you',[],'',[tut4_you,tut2_opp]],
	[[25,20,60,-1],"<p>Good job! When you clear the board of red cards, you score a SWIPE ⭐.</p><p> It will give you points and bonuses.</p>","next",[],'Y'],
	[[25,20,60,-1],"<p>Enough for today. Rest, tomorrow is going to be harder.</p>","end",[],'Y'],
]
*/

function showbox(td,pg_index,pg){
	//box
	//$(".attackline").remove();  //cancel all the lines


	if (td[pg_index][2]=='restart') {
	}

	//need to reset the board?
	if (td[pg_index][0]=='reset') {
		console.log("RESETTONE");
	if (pg_index>0){
		for (var y = 0; y < td[pg_index-1][3].length; y++)
		{
			if (td[pg_index-1][4]!='U')  {$('#'+td[pg_index-1][3][y]).css('border','0px solid yellow')}
				else
				{$('#'+td[pg_index-1][3][y]).css('border','4px solid yellow')}	;		
		}
	}	

		reset_board(td[pg_index][5][0],td[pg_index][5][1]);
		return -1;
	}

	text = td[pg_index][1];
	$('#tutorial_card').css('position','absolute');
	$('#tutorial_card').css('top',String(td[pg_index][0][0])+"%");
	$('#tutorial_card').css('left',String(td[pg_index][0][1])+"%");
	$('#tutorial_card').css('width',String(td[pg_index][0][2])+"%");
	$('#tutorial_card').css('border-radius','5px');

	//positioning the master
	$('#master_pic').css('position','absolute');
	$('#master_pic').css('z-index',"2");

	if (td[pg_index][0][0]>25) {  //on top centered
		$('#master_pic').css('width',"10%");
		$('#master_pic').css('left',String(td[pg_index][0][1]+(td[pg_index][0][2]-10)/2)+"%");
		$('#master_pic').css('bottom',String(99-td[pg_index][0][0])+"%");
	} else
	{  //bottom centered
		$('#master_pic').css('width',"10%");
		$('#master_pic').css('left',String(td[pg_index][0][1]-10)+"%");
		$('#master_pic').css('top',String(td[pg_index][0][0]-5)+"%");
	}

	$('#master_pic').attr('src','face_master.png');



	if (td[pg_index][0][3]!="-1"){
		$('#tutorial_card').css('height',String(td[pg_index][0][3])+"%");
	} else
	{
		$('#tutorial_card').css('height',"auto");		
	}
	//buttons
//	text = "<p>"+text+"</p>";
//	if (pg!=0) {text = text + '<div class="btn_turn" id="tut_back" style="text-align:center;border: 2px solid black;margin:1%;padding:10px" >Back</div>'};
	if (td[pg_index][2]=='try'){
	text = text + '<div class="btn_turn" id="tut_next" style="text-align:center;border: 2px solid black;margin:1%;padding:10px" >Try</div>';
	} else {

		if (td[pg_index][2]=='end'){
		text = text + '<div class="btn_turn" id="tut_next" style="text-align:center;border: 2px solid black;margin:1%;padding:10px" >The END</div>';
		} else {
		if (td[pg_index][2]!='none'){
		text = text + '<div class="btn_turn" id="tut_exit" style="text-align:center;border: 2px solid black;margin:1%;padding:10px" >Exit</div>'
		if (pg!=-1) {text = text + '<div class="btn_turn" id="tut_next" style="text-align:center;border: 2px solid black;margin:1%;padding:10px" >Next</div>'};
		} }}
	$('#tutorial_text').html(text);
	$('#overlay_tutorial').css('display','block');

	
	//border over div
	if (pg_index>0){
		for (var y = 0; y < td[pg_index-1][3].length; y++)
		{
			if (td[pg_index-1][4]!='U')  {$('#'+td[pg_index-1][3][y]).css('border','0px solid yellow')}
				else
				{$('#'+td[pg_index-1][3][y]).css('border','4px solid yellow')}	;		
		}
	}	

	// remove the two cards and add points

	for (var y = 0; y < td[pg_index][3].length/2; y++)
	{
		if (td[pg_index][4]=='Y') 
			{	console.log("CON =>",td[pg_index][3][2*y],td[pg_index][3][2*y+1])
				con_div(parseInt(td[pg_index][3][2*y]),parseInt(td[pg_index][3][2*y+1]))
			};
	}

	for (var y = 0; y < td[pg_index][3].length; y++)
	{
		if (td[pg_index][4]=='C') {CardClick(parseInt(td[pg_index][3][y]))};
	}

	for (var y = 0; y < td[pg_index][3].length; y++)
	{
		$('#'+td[pg_index][3][y]).css('border','4px solid yellow');		
		if (td[pg_index][4]=='H') {$('#'+td[pg_index][3][y]).css('visibility','hidden')};		
		if (td[pg_index][4]=='V') {$('#'+td[pg_index][3][y]).css('visibility','visible')};		
	}

	
	tut_div="";
	console.log("TUT DIV",td[pg_index][4]);
	if (td[pg_index][4]=='U'){
		tut_div = td[pg_index][3][0];
		console.log("TUT DIV",tut_div);
		tut_active=0;
		draw_all();
		$('#'+td[pg_index][3][0]).css('border','4px solid yellow');
		$('#grey_back').css("display","none");

		//$('#'+td[pg_index][3][0]).addClass("borderBlink");		
		return 0;
	} else
	{
		$('#grey_back').css("display","block");

	}

}

function show_tutorial(td,pg_index){
	var buttons = 0;
	console.log("TUTORIAL",pg_index,td);
	if (pg_index == td.length) {buttons=-1} else {buttons = pg_index;}

//	showbox(td[pg_index][0],td[pg_index][1],td[pg_index][3],td[pg_index][4],buttons);
	var i = showbox(td,pg_index,buttons);
	if (i==-1) {
		pg_index = pg_index +1;tut_index = tut_index +1;
		if  (td[tut_index][0]=='move') {tut_active=0;$('#overlay_tutorial').css('display','none');console.log("ATTIVI");} else {
			showbox(td,pg_index,buttons)};
		}
}


function restart(deck_you,deck_opp){
	
	card_id_seq = new Array();
	card_id_seq.push(1);
	card_id_seq.push(10000);
	deck_cards_you = deck_you;
	deck_cards_opp = deck_opp;
	deck1 = CreateDeckfromList(deck_cards_you,you,"blue");
	deck2 = CreateDeckfromList(deck_cards_opp,opponent,"red");
	var points = game.points[you];
	game = new Game(deck1,deck2);
	undo_game = new Game(deck1,deck2);
	game.points[you] = points;
	num_attacked = [];
	Draw_first_hand();
	draw_all();
}

function reset_board(deck_you,deck_opp){
	
	console.log("RESET",deck_you,deck_opp);
	card_id_seq = new Array();
	card_id_seq.push(1);
	card_id_seq.push(10000);	
	deck_cards_you = create_deck(deck_you);
	deck_cards_opp = create_deck(deck_opp); 
	deck1 = CreateDeckfromList(deck_cards_you,you,"blue");
	deck2 = CreateDeckfromList(deck_cards_opp,opponent,"red");
	var points = game.points[you]
	game = new Game(deck1,deck2);
	undo_game = new Game(deck1,deck2);
	game.points[you] = points;
	Draw_first_hand();
	draw_all();
}