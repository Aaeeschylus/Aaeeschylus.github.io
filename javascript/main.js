$(document).on('click', '.calculate_button', function(){
	var manpower = $("#manpower").val();
	var ammo = $("#ammo").val();
	var rations = $("#ration").val();
	var parts = $("#part").val();
	var value = $('input[name=production]:checked').val();
	if(value == "heavy"){
		findHeavyDolls(manpower, ammo, rations, parts);
	}else{
		findDolls(manpower, ammo, rations, parts);
	}
});

$(document).on('click', '.max', function(){
	$("#manpower").val("999");
	$("#ammo").val("999");
	$("#ration").val("999");
	$("#part").val("999");
	findDolls(999, 999, 999, 999);
});

$(document).on('click', '#maxHG', function(){
	$("#manpower").val("230");
	$("#ammo").val("230");
	$("#ration").val("230");
	$("#part").val("230");
	findDolls(230, 230, 230, 230);
});

$(document).on('click', '#HG1', function(){
	$("#manpower").val("30");
	$("#ammo").val("30");
	$("#ration").val("30");
	$("#part").val("30");
	findDolls(30, 30, 30, 30);
});

$(document).on('click', '#HG2', function(){
	$("#manpower").val("130");
	$("#ammo").val("130");
	$("#ration").val("130");
	$("#part").val("30");
	findDolls(130, 130, 130, 30);
});

$(document).on('click', '#SMG1', function(){
	$("#manpower").val("30");
	$("#ammo").val("30");
	$("#ration").val("30");
	$("#part").val("30");
	findDolls(30, 30, 30, 30);
});

$(document).on('click', '#SMG2', function(){
	$("#manpower").val("400");
	$("#ammo").val("400");
	$("#ration").val("30");
	$("#part").val("30");
	findDolls(400, 400, 30, 30);
});

$(document).on('click', '#AR1', function(){
	$("#manpower").val("200");
	$("#ammo").val("200");
	$("#ration").val("200");
	$("#part").val("200");
	findDolls(200, 200, 200, 200);
});

$(document).on('click', '#AR2', function(){
	$("#manpower").val("30");
	$("#ammo").val("400");
	$("#ration").val("400");
	$("#part").val("30");
	findDolls(30, 400, 400, 30);
});

$(document).on('click', '#RF1', function(){
	$("#manpower").val("300");
	$("#ammo").val("30");
	$("#ration").val("300");
	$("#part").val("30");
	findDolls(300, 30, 300, 30);
});

$(document).on('click', '#RF2', function(){
	$("#manpower").val("400");
	$("#ammo").val("30");
	$("#ration").val("400");
	$("#part").val("30");
	findDolls(400, 30, 400, 30);
});

$(document).on('click', '#MG1', function(){
	$("#manpower").val("400");
	$("#ammo").val("600");
	$("#ration").val("30");
	$("#part").val("300");
	findDolls(400, 600, 30, 300);
});

$(document).on('click', '#MG2', function(){
	$("#manpower").val("600");
	$("#ammo").val("600");
	$("#ration").val("100");
	$("#part").val("400");
	findDolls(600, 600, 100, 400);
});

//Recipes
var HG1 = [[[["M1911"], ["0:20:00"]], [["Nagant Revolver"], ["0:20:00"]], [["P38"], ["0:20:00"]], [["PPK"], ["0:22:00"]], [["FNP-9"], ["0:25:00"]], [["MP-446"], ["0:25:00"]], [["<span class='unreleased'>USP Compact</span>"], ["<span class='unreleased'>0:28:00</span>"]], [["<span class='unreleased'>Bren Ten</span>"], ["<span class='unreleased'>0:28:00</span>"]]],
		[[["P08"], ["0:30:00"]], [["C96"], ["0:30:00"]], [["Type 92"], ["0:35:00"]], [["<span class='unreleased'>P99</span>"], ["<span class='unreleased'>0:35:00</span>"]], [["M9"], ["0:40:00"]], [["Astra Revolver"], ["0:40:00"]], [["Makarov"], ["0:40:00"]], [["Tokarev"], ["0:45:00"]]],
		[[["Colt Revolver"], ["0:50:00"]], [["Mk23"], ["0:50:00"]], [["P7"], ["0:55:00"]]],
		[[["Grizzly MkV"], ["1:10:00"]]]];

var HG2 = [[[["<span class='unreleased'>Spitfire</span>"], ["<span class='unreleased'>0:52:00</span>"]], [["Stechkin"], ["0:55:00"]]],
		[[["Welrod MkII"], ["1:00:00"]], [["<span class='unreleased'>Contender</span>"], ["<span class='unreleased'>1:02:00</span>"]], [["M950A"], ["1:05:00"]]]];

var SMG1 = [[[["IDW"], ["1:10:00"]], [["PP-2000"], ["1:10:00"]], [["m45"], ["1:20:00"]], [["Spectre M4"], ["1:20:00"]], [["Type 64"], ["1:25:00"]], [["MP40"], ["1:30:00"]], [["Beretta M38"], ["1:30:00"]], [["M3"], ["1:30:00"]], [["PPSh-41"], ["1:50:00"]]],
	[[["MAC-10"], ["2:00:00"]], [["Skorpion"], ["2:00:00"]], [["Micro Uzi"], ["2:00:00"]], [["Z-62"], ["2:05:00"]], [["PPS-43"], ["2:10:00"]]],
	[[["MP5"], ["2:20:00"]]],
	[[["Thompson"], ["2:30:00"]]]];

var SMG2 = [[[["Sten MkII"], ["1:40:00"]]],
	[[["UMP9"], ["2:15:00"]], [["UMP45"], ["2:15:00"]], [["<span class='unreleased'>Shipka</span>"], ["<span class='unreleased'>2:18:00</span>"]], [["<span class='unreleased'>PP-19-01</span>"], ["<span class='unreleased'>2:18:00</span>"]], [["<span class='unreleased'>PP-90</span>"], ["<span class='unreleased'>2:20:00</span>"]]],
	[[["Suomi"], ["2:25:00"]], [["G36C"], ["2:30:00"]], [["SR-3MP"], ["2:33:00"]], [["Vector"], ["2:35:00"]], [["<span class='unreleased'>Type 79</span>"], ["<span class='unreleased'>2:35:00</span>"]]]];

var AR1 = [[[["Galil"], ["2:40:00"]], [["SIG-510"], ["2:40:00"]], [["F2000"], ["2:45:00"]], [["L85A1"], ["2:50:00"]], [["G3"], ["2:50:00"]]],
	[[["StG44"], ["3:00:00"]], [["OTs-12"], ["3:10:00"]], [["AK-47"], ["3:20:00"]], [["FNC"], ["3:20:00"]]],
	[[["Type 56-1"], ["3:25:00"]], [["FAMAS"], ["3:30:00"]], [["AS Val"], ["3:30:00"]], [["9A-91"], ["3:35:00"]]],
	[[["HK416"], ["3:55:00"]], [["<span class='unreleased'>G11</span>"], ["<span class='unreleased'>4:04:00</span>"]]]];

var AR2 = [[[["TAR-21"], ["3:30:00"]], [["G36"], ["3:40:00"]], [["<span class='unreleased'>Ribeyrolles</span>"], ["<span class='unreleased'>3:40:00</span>"]]],
	[[["FAL"], ["3:45:00"]], [["<span class='unreleased'>T91</span>"], ["<span class='unreleased'>3:48:00</span>"]], [["Type 95"], ["3:50:00"]], [["Type 97"], ["3:50:00"]], [["<span class='unreleased'>K2</span>"], ["<span class='unreleased'>3:52:00</span>"]], [["<span class='unreleased'>RFB</span>"], ["<span class='unreleased'>3:58:00</span>"]], [["G41"], ["4:05:00"]], [["<span class='unreleased'>Zas M21</span>"], ["<span class='unreleased'>4:05:00</span>"]], [["<span class='unreleased'>AN-94</span>"], ["<span class='unreleased'>4:09:00</span>"]], [["<span class='unreleased'>AK-12</span>"], ["<span class='unreleased'>4:12:00</span>"]]]];

var RF1 = [[[["G43"], ["3:10:00"]], [["FN-49"], ["3:10:00"]], [["BM59"], ["3:20:00"]], [["Simonov"], ["3:30:00"]], [["SVT-38"], ["3:30:00"]]],
	[[["M14"], ["3:40:00"]], [["SV-98"], ["3:40:00"]], [["M1 Garand"], ["4:00:00"]]],
	[[["Mosin-Nagant"], ["4:10:00"]], [["Springfield"], ["4:25:00"]], [["PTRD"], ["4:30:00"]]],
	[[["NTW-20"], ["4:45:00"]], [["WA2000"], ["4:50:00"]]]];

var RF2 = [[[["Hanyang T88"], ["3:50:00"]]],
	[[["<span class='unreleased'>T-5000</span>"], ["<span class='unreleased'>4:10:00</span>"]], [["SVD"], ["4:15:00"]]],
	[[["<span class='unreleased'>Carcano M1891</span>"], ["<span class='unreleased'>4:38:00</span>"]], [["Kar98k"], ["4:40:00"]], [["<span class='unreleased'>Carcano M91/38</span>"], ["<span class='unreleased'>4:42:00</span>"]], [["<span class='unreleased'>IWS-2000</span>"], ["<span class='unreleased'>4:52:00</span>"]], [["M99"], ["4:55:00"]], [["Lee-Enfield"], ["5:00:00"]]]];

var MG1 = [[[["AAT-52"], ["4:50:00"]], [["FG42"], ["4:50:00"]], [["MG34"], ["5:00:00"]], [["DP28"], ["5:00:00"]], [["LWMMG"], ["5:10:00"]]],
	[[["Bren"], ["5:20:00"]], [["M1919A4"], ["5:40:00"]], [["MG42"], ["5:50:00"]], [["M2HB"], ["6:10:00"]]],
	[[["M60"], ["6:10:00"]], [["<span class='unreleased'>Mk48</span>"], ["<span class='unreleased'>6:20:00</span>"]], [["M1918"], ["6:25:00"]], [["MG3"], ["6:30:00"]]],
	[[["MG5"], ["6:45:00"]]]];

var MG2 = [[[["<span class='unreleased'>Ameli</span>"], ["<span class='unreleased'>6:25:00</span>"]], [["PK"], ["6:30:00"]]],
	[[["Negev"], ["6:35:00"]], [["MG4"], ["6:40:00"]], [["<span class='unreleased'>PKP</span>"], ["<span class='unreleased'>6:50:00</span>"]]]];







function findDolls(mp, am, ra, pa){
	var manpower = parseInt(mp);
	var ammo = parseInt(am);
	var rations = parseInt(ra);
	var parts = parseInt(pa);
	var sum = manpower + ammo + rations + parts;

	if(manpower < 30 || manpower > 999 || ammo < 30 || ammo > 999 || rations < 30 || rations > 999 || parts < 30 || parts > 999){
		alert("Make sure the numbers are between 30 and 999");
	}else{
		var table = $(".results_table");
		var tbody = $("<tbody></tbody>");
		table.find('tbody').remove();

		var S2 = "<tr class='S2'>";
		var S3 = "<tr class='S3'>";
		var S4 = "<tr class='S4'>";
		var S5 = "<tr class='S5'>";

		var i;

		//check HG
		if(sum <= 920){
			//recent fix here
			if(manpower >= 130 && ammo >= 130 && rations >= 130){
				S2 += "<td><ul>";
				for(i = 0; i < HG1[0].length; i++){
					S2 += ("<li><span class='DollName'>" + HG1[0][i][0] + "</span><span class='DollTime'>" + HG1[0][i][1] + "</span></li>");	
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < HG1[1].length; i++){
					S3 += ("<li><span class='DollName'>" + HG1[1][i][0] + "</span><span class='DollTime'>" + HG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HG1[2].length; i++){
					S4 += ("<li><span class='DollName'>" + HG1[2][i][0] + "</span><span class='DollTime'>" + HG1[2][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < HG2[0].length; i++){
					S4 += ("<li><span class='DollName'>" + HG2[0][i][0] + "</span><span class='DollTime'>" + HG2[0][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HG1[3].length; i++){
					S5 += ("<li><span class='DollName'>" + HG1[3][i][0] + "</span><span class='DollTime'>" + HG1[3][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < HG2[1].length; i++){
					S5 += ("<li><span class='DollName'>" + HG2[1][i][0] + "</span><span class='DollTime'>" + HG2[1][i][1] + "</span></li>");
				}
				S5 += "</ul>";

			}else{
				S2 += "<td><ul>";
				for(i = 0; i < HG1[0].length; i++){
					S2 += ("<li><span class='DollName'>" + HG1[0][i][0] + "</span><span class='DollTime'>" + HG1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < HG1[1].length; i++){
					S3 += ("<li><span class='DollName'>" + HG1[1][i][0] + "</span><span class='DollTime'>" + HG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HG1[2].length; i++){
					S4 += ("<li><span class='DollName'>" + HG1[2][i][0] + "</span><span class='DollTime'>" + HG1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HG1[3].length; i++){
					S5 += ("<li><span class='DollName'>" + HG1[3][i][0] + "</span><span class='DollTime'>" + HG1[3][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S2 += "<td class='none'>No HG</td>";
			S3 += "<td></td>";
			S4 += "<td></td>";
			S5 += "<td></td>";
		}

		//check SMG
		if(manpower >= 400 && ammo >= 400){
			S2 += "<td><ul>";
			for(i = 0; i < SMG1[0].length; i++){
				S2 += ("<li><span class='DollName'>" + SMG1[0][i][0] + "</span><span class='DollTime'>" + SMG1[0][i][1] + "</span></li>");
			}
			S2 += "</ul>";

			S3 += "<td><ul>";
			for(i = 0; i < SMG1[1].length; i++){
				S3 += ("<li><span class='DollName'>" + SMG1[1][i][0] + "</span><span class='DollTime'>" + SMG1[1][i][1] + "</span></li>");
			}
			S3 +="<div class='clear'></div>";
			for(i = 0; i < SMG2[0].length; i++){
				S3 += ("<li><span class='DollName'>" + SMG2[0][i][0] + "</span><span class='DollTime'>" + SMG2[0][i][1] + "</span></li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < SMG1[2].length; i++){
				S4 += ("<li><span class='DollName'>" + SMG1[2][i][0] + "</span><span class='DollTime'>" + SMG1[2][i][1] + "</span></li>");
			}
			S4 +="<div class='clear'></div>";
			for(i = 0; i < SMG2[1].length; i++){
				S4 += ("<li><span class='DollName'>" + SMG2[1][i][0] + "</span><span class='DollTime'>" + SMG2[1][i][1] + "</span></li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < SMG1[3].length; i++){
				S5 += ("<li><span class='DollName'>" + SMG1[3][i][0] + "</span><span class='DollTime'>" + SMG1[3][i][1] + "</span></li>");
			}
			S5 +="<div class='clear'></div>";
			for(i = 0; i < SMG2[2].length; i++){
				S5 += ("<li><span class='DollName'>" + SMG2[2][i][0] + "</span><span class='DollTime'>" + SMG2[2][i][1] + "</span></li>");
			}
			S5 += "</ul>";

		}else{
			S2 += "<td><ul>";
			for(i = 0; i < SMG1[0].length; i++){
				S2 += ("<li><span class='DollName'>" + SMG1[0][i][0] + "</span><span class='DollTime'>" + SMG1[0][i][1] + "</span></li>");
			}
			S2 += "</ul>";

			S3 += "<td><ul>";
			for(i = 0; i < SMG1[1].length; i++){
				S3 += ("<li><span class='DollName'>" + SMG1[1][i][0] + "</span><span class='DollTime'>" + SMG1[1][i][1] + "</span></li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < SMG1[2].length; i++){
				S4 += ("<li><span class='DollName'>" + SMG1[2][i][0] + "</span><span class='DollTime'>" + SMG1[2][i][1] + "</span></li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < SMG1[3].length; i++){
				S5 += ("<li><span class='DollName'>" + SMG1[3][i][0] + "</span><span class='DollTime'>" + SMG1[3][i][1] + "</span></li>");
			}
			S5 += "</ul>";
		}

		//check AR
		if(sum >= 800){
			if(ammo >= 400 & rations >= 400){
				S2 += "<td><ul>";
				for(i = 0; i < AR1[0].length; i++){
					S2 += ("<li><span class='DollName'>" + AR1[0][i][0] + "</span><span class='DollTime'>" + AR1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < AR1[1].length; i++){
					S3 += ("<li><span class='DollName'>" + AR1[1][i][0] + "</span><span class='DollTime'>" + AR1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < AR1[2].length; i++){
					S4 += ("<li><span class='DollName'>" + AR1[2][i][0] + "</span><span class='DollTime'>" + AR1[2][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < AR2[0].length; i++){
					S4 += ("<li><span class='DollName'>" + AR2[0][i][0] + "</span><span class='DollTime'>" + AR2[0][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < AR1[3].length; i++){
					S5 += ("<li><span class='DollName'>" + AR1[3][i][0] + "</span><span class='DollTime'>" + AR1[3][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < AR2[1].length; i++){
					S5 += ("<li><span class='DollName'>" + AR2[1][i][0] + "</span><span class='DollTime'>" + AR2[1][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>";
				for(i = 0; i < AR1[0].length; i++){
					S2 += ("<li><span class='DollName'>" + AR1[0][i][0] + "</span><span class='DollTime'>" + AR1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < AR1[1].length; i++){
					S3 += ("<li><span class='DollName'>" + AR1[1][i][0] + "</span><span class='DollTime'>" + AR1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < AR1[2].length; i++){
					S4 += ("<li><span class='DollName'>" + AR1[2][i][0] + "</span><span class='DollTime'>" + AR1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < AR1[3].length; i++){
					S5 += ("<li><span class='DollName'>" + AR1[3][i][0] + "</span><span class='DollTime'>" + AR1[3][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S2 += "<td class='none'>No AR</td>";
			S3 += "<td></td>";
			S4 += "<td></td>";
			S5 += "<td></td>";
		}

		//check RF
		if(manpower >= 300 && rations >= 300){
			if(manpower >= 400 && rations >= 400){
				S2 += "<td><ul>";
				for(i = 0; i < RF1[0].length; i++){
					S2 += ("<li><span class='DollName'>" + RF1[0][i][0] + "</span><span class='DollTime'>" + RF1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < RF1[1].length; i++){
					S3 += ("<li><span class='DollName'>" + RF1[1][i][0] + "</span><span class='DollTime'>" + RF1[1][i][1] + "</span></li>");
				}
				S3 +="<div class='clear'></div>";
				for(i = 0; i < RF2[0].length; i++){
					S3 += ("<li><span class='DollName'>" + RF2[0][i][0] + "</span><span class='DollTime'>" + RF2[0][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < RF1[2].length; i++){
					S4 += ("<li><span class='DollName'>" + RF1[2][i][0] + "</span><span class='DollTime'>" + RF1[2][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < RF2[1].length; i++){
					S4 += ("<li><span class='DollName'>" + RF2[1][i][0] + "</span><span class='DollTime'>" + RF2[1][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < RF1[3].length; i++){
					S5 += ("<li><span class='DollName'>" + RF1[3][i][0] + "</span><span class='DollTime'>" + RF1[3][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < RF2[2].length; i++){
					S5 += ("<li><span class='DollName'>" + RF2[2][i][0] + "</span><span class='DollTime'>" + RF2[2][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>";
				for(i = 0; i < RF1[0].length; i++){
					S2 += ("<li><span class='DollName'>" + RF1[0][i][0] + "</span><span class='DollTime'>" + RF1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < RF1[1].length; i++){
					S3 += ("<li><span class='DollName'>" + RF1[1][i][0] + "</span><span class='DollTime'>" + RF1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < RF1[2].length; i++){
					S4 += ("<li><span class='DollName'>" + RF1[2][i][0] + "</span><span class='DollTime'>" + RF1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < RF1[3].length; i++){
					S5 += ("<li><span class='DollName'>" + RF1[3][i][0] + "</span><span class='DollTime'>" + RF1[3][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S2 += "<td class='none'>No RF</td>";
			S3 += "<td></td>";
			S4 += "<td></td>";
			S5 += "<td></td>";
		}

		//check MG
		if(manpower >= 400 && ammo >= 600 && parts >= 300){
			if(manpower >= 600 && rations >= 100 && parts >= 400){
				S2 += "<td><ul>";
				for(i = 0; i < MG1[0].length; i++){
					S2 += ("<li><span class='DollName'>" + MG1[0][i][0] + "</span><span class='DollTime'>" + MG1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < MG1[1].length; i++){
					S3 += ("<li><span class='DollName'>" + MG1[1][i][0] + "</span><span class='DollTime'>" + MG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < MG1[2].length; i++){
					S4 += ("<li><span class='DollName'>" + MG1[2][i][0] + "</span><span class='DollTime'>" + MG1[2][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < MG2[0].length; i++){
					S4 += ("<li><span class='DollName'>" + MG2[0][i][0] + "</span><span class='DollTime'>" + MG2[0][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < MG1[3].length; i++){
					S5 += ("<li><span class='DollName'>" + MG1[3][i][0] + "</span><span class='DollTime'>" + MG1[3][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < MG2[1].length; i++){
					S5 += ("<li><span class='DollName'>" + MG2[1][i][0] + "</span><span class='DollTime'>" + MG2[1][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>";
				for(i = 0; i < MG1[0].length; i++){
					S2 += ("<li><span class='DollName'>" + MG1[0][i][0] + "</span><span class='DollTime'>" + MG1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < MG1[1].length; i++){
					S3 += ("<li><span class='DollName'>" + MG1[1][i][0] + "</span><span class='DollTime'>" + MG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < MG1[2].length; i++){
					S4 += ("<li><span class='DollName'>" + MG1[2][i][0] + "</span><span class='DollTime'>" + MG1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < MG1[3].length; i++){
					S5 += ("<li><span class='DollName'>" + MG1[3][i][0] + "</span><span class='DollTime'>" + MG1[3][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S2 += "<td class='none'>No MG</td>";
			S3 += "<td></td>";
			S4 += "<td></td>";
			S5 += "<td></td>";
		}

		S2 += "</tr>";
		S3 += "</tr>";
		S4 += "</tr>";
		S5 += "</tr>";


		tbody.append(S2, S3, S4, S5);

		table.append(tbody);
		checkboxClicked();
	}
}

function checkboxClicked(){
	var check = $('#checker');
	if(check.is(':checked')){
		$('span.unreleased').hide();
	}else{
		$('span.unreleased').show();
	}
}

function prodRadioClicked(){
	var value = $('input[name=production]:checked').val();
	if(value == "heavy"){
		$('div.sub_selection.radio_box.radio_tier').css('display', 'inline-block');
		$('input[name=resourceInput]').attr({"max":9999, "min":1000, "step":1000}).val("1000");
		$('div.standard_button').hide();
		$('div.heavy_button').show();
		$('tr#standardRow').hide();
		$('tr#heavyRow').show();
		$('table#standard_rules_table').hide();
		$('table#heavy_rules_table').show();
		findHeavyDolls(1000, 1000, 1000, 1000);
	}else{
		$('div.sub_selection.radio_box.radio_tier').hide();
		$('input[name=resourceInput]').attr({"max":999, "min":30, "step":10}).val("30");
		$('div.standard_button').show();
		$('div.heavy_button').hide();
		$('tr#standardRow').show();
		$('tr#heavyRow').hide();
		$('table#standard_rules_table').show();
		$('table#heavy_rules_table').hide();
		findDolls(30, 30, 30, 30);
	}
}

function tierRadioClicked() {
	var value = $('input[name=tier]:checked').val();
	if(value == "high"){
		$('tr.S3').hide();
		$('span.highTierNone').show();
	}else{
		$('tr.S3').show();
		$('span.highTierNone').hide();
	}
}
