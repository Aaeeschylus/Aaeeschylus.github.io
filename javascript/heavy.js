$(document).on('click', '.Hmax', function(){
	$("#manpower").val("9999");
	$("#ammo").val("9999");
	$("#ration").val("9999");
	$("#part").val("9999");
	findHeavyDolls(9999, 9999, 9999, 9999);
});

$(document).on('click', '#HSMG1', function(){
	$("#manpower").val("1000");
	$("#ammo").val("1000");
	$("#ration").val("1000");
	$("#part").val("1000");
	findHeavyDolls(1000, 1000, 1000, 1000);
});

$(document).on('click', '#HSMG2', function(){
	$("#manpower").val("4000");
	$("#ammo").val("4000");
	$("#ration").val("1000");
	$("#part").val("1000");
	findHeavyDolls(4000, 4000, 1000, 1000);
});

$(document).on('click', '#HAR1', function(){
	$("#manpower").val("1000");
	$("#ammo").val("1000");
	$("#ration").val("1000");
	$("#part").val("1000");
	findHeavyDolls(1000, 1000, 1000, 1000);
});

$(document).on('click', '#HAR2', function(){
	$("#manpower").val("1000");
	$("#ammo").val("4000");
	$("#ration").val("4000");
	$("#part").val("1000");
	findHeavyDolls(1000, 4000, 4000, 1000);
});

$(document).on('click', '#HRF1', function(){
	$("#manpower").val("3000");
	$("#ammo").val("1000");
	$("#ration").val("3000");
	$("#part").val("1000");
	findHeavyDolls(3000, 1000, 3000, 1000);
});

$(document).on('click', '#HRF2', function(){
	$("#manpower").val("4000");
	$("#ammo").val("1000");
	$("#ration").val("4000");
	$("#part").val("1000");
	findHeavyDolls(4000, 1000, 4000, 1000);
});

$(document).on('click', '#HMG1', function(){
	$("#manpower").val("4000");
	$("#ammo").val("6000");
	$("#ration").val("1000");
	$("#part").val("3000");
	findHeavyDolls(4000, 6000, 1000, 3000);
});

$(document).on('click', '#HMG2', function(){
	$("#manpower").val("6000");
	$("#ammo").val("6000");
	$("#ration").val("1000");
	$("#part").val("4000");
	findHeavyDolls(6000, 6000, 1000, 4000);
});

$(document).on('click', '#HSG1', function(){
	$("#manpower").val("4000");
	$("#ammo").val("1000");
	$("#ration").val("6000");
	$("#part").val("3000");
	findHeavyDolls(4000, 1000, 6000, 3000);
});

$(document).on('click', '#HSG2', function(){
	$("#manpower").val("6000");
	$("#ammo").val("1000");
	$("#ration").val("6000");
	$("#part").val("4000");
	findHeavyDolls(6000, 1000, 6000, 4000);
});


var HSMG1 = [["F1 1:50:00", "MAC-10 2:00:00", "Skorpion 2:00:00", "Micro Uzi 2:00:00", "Z-62 2:05:00", "PPS-43 2:10:00"],
	["MP5 2:20:00"],
	["Thompson 2:30:00"]];

var HSMG2 = [["Sten MkII 1:40:00"],
	["UMP9 2:15:00", "UMP45 2:15:00", "<span class='unreleased'>Shipka 2:18:00</span>", "<span class='unreleased'>PP-19-01 2:18:00</span>", "<span class='unreleased'>PP-90 2:20:00</span>"],
	["Suomi 2:25:00", "G36C 2:30:00", "SR-3MP 2:33:00", "Vector 2:35:00", "Type 79 2:35:00"]];

var HAR1 = [["StG44 3:00:00", "OTs-12 3:10:00", "AK-47 3:20:00", "FNC 3:20:00"],
	["Type 56-1 3:25:00", "FAMAS 3:30:00", "AS Val 3:30:00", "9A-91 3:35:00"],
	["HK416 3:55:00", "<span class='unreleased'>G11 4:04:00</span>"]];

var HAR2 = [["TAR-21 3:30:00", "G36 3:40:00", "<span class='unreleased'>Ribeyrolles 3:40:00</span>"],
	["FAL 3:45:00", "<span class='unreleased'>T91 3:48:00</span>", "Type 95 3:50:00", "Type 97 3:50:00", "<span class='unreleased'>K2 3:52:00</span>", "<span class='unreleased'>RFB 3:58:00</spawn>", "G41 4:05:00", "<span class='unreleased'>Zas M21 4:05:00</span>", "<span class='unreleased'>AN-94 4:09:00</span>", "<span class='unreleased'>AK-12 4:12:00</span>"]];

var HRF1 = [["M14 3:40:00", "SV-98 3:40:00", "M1 Garand 4:00:00"],
	["Mosin-Nagant 4:10:00", "Springfield 4:25:00", "PTRD 4:30:00"],
	["NTW-20 4:45:00", "WA2000 4:50:00"]];

var HRF2 = [["Hanyang Type 88 3:50:00"],
	["<span class='unreleased'>T-5000 4:10:00</span>", "SVD 4:15:00", "PzB 39 4:30:00"],
	["<span class='unreleased'>Carcano M1891 4:38:00</span>", "Kar98k 4:40:00", "<span class='unreleased'>Carcano M91/38 4:42:00</span>", "<span class='unreleased'>IWS-2000 4:52:00</span>", "M99 4:55:00", "Lee-Enfield 5:00:00"]];

var HMG1 = [["Bren 5:20:00", "M1919A4 5:40:00", "MG42 5:50:00", "M2HB 6:10:00"],
	["M60 6:10:00", "M1918 6:25:00", "MG3 6:30:00"],
	["MG5 6:45:00"]];

var HMG2 = [["<span class='unreleased'>Mk48 6:20:00</span>", "<span class='unreleased'>AEK-999 6:20:00</span>", "<span class='unreleased'>Ameli 6:25:00</span>", "PK 6:30:00"],
	["Negev 6:35:00", "MG4 6:40:00", "<span class='unreleased'>PKP 6:50:00</span>"]];

var HSG1 = [["M500 7:20:00", "KS-23 7:25:00"],
	["M590 7:40:00", "<span class='unreleased'>SPAS-12 7:40:00</span>"],
	["KSG 8:00:00"]];

var HSG2 = [["<span class='unreleased'>NS2000 7:15:00</span>", "RMB-93 7:30:00", "<span class='unreleased'>M1897 7:30:00</span>"],
	["M37 7:45:00", "Super-Shorty 7:50:00", "<span class='unreleased'>USAS-12 7:55:00</span>"],
	["<span class='unreleased'>Saiga-12 8:05:00</span>", "<span class='unreleased'>S.A.T.8 8:10:00</span>"]];




function findHeavyDolls(mp, am, ra, pa){
	var manpower = parseInt(mp);
	var ammo = parseInt(am);
	var rations = parseInt(ra);
	var parts = parseInt(pa);


	if(manpower < 1000 || manpower > 9999 || ammo < 1000 || ammo > 9999 || rations < 1000 || rations > 9999 || parts < 1000 || parts > 9999){
		alert("Make sure the numbers are between 1000 and 9999");
	}else{
		var table = $(".results_table");
		var tbody = $("<tbody></tbody>");
		table.find('tbody').remove();

		var S3 = "<tr class='S3'>";
		var S4 = "<tr class='S4'>";
		var S5 = "<tr class='S5'>";

		var i;


		//Checking SMG
		if(manpower >= 4000 && ammo >= 4000){
			S3 += "<td><ul>";
			for(i = 0; i < HSMG1[0].length; i++){
				S3 += ("<li>" + HSMG1[0][i] + "</li>");
			}
			S3 +="<br>";
			for(i = 0; i < HSMG2[0].length; i++){
				S3 += ("<li>" + HSMG2[0][i] + "</li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < HSMG1[1].length; i++){
				S4 += ("<li>" + HSMG1[1][i] + "</li>");
			}
			S4 +="<br>";
			for(i = 0; i < HSMG2[1].length; i++){
				S4 += ("<li>" + HSMG2[1][i] + "</li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < HSMG1[2].length; i++){
				S5 += ("<li>" + HSMG1[2][i] + "</li>");
			}
			S5 +="<br>";
			for(i = 0; i < HSMG2[2].length; i++){
				S5 += ("<li>" + HSMG2[2][i] + "</li>");
			}
			S5 += "</ul>";
		}else{
			S3 += "<td><ul>";
			for(i = 0; i < HSMG1[0].length; i++){
				S3 += ("<li>" + HSMG1[0][i] + "</li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < HSMG1[1].length; i++){
				S4 += ("<li>" + HSMG1[1][i] + "</li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < HSMG1[2].length; i++){
				S5 += ("<li>" + HSMG1[2][i] + "</li>");
			}
			S5 += "</ul>";
		}


		//Checking AR
		if(rations >= 4000 && ammo >= 4000){
			S3 += "<td><ul>";
			for(i = 0; i < HAR1[0].length; i++){
				S3 += ("<li>" + HAR1[0][i] + "</li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < HAR1[1].length; i++){
				S4 += ("<li>" + HAR1[1][i] + "</li>");
			}
			S4 +="<br>";
			for(i = 0; i < HAR2[0].length; i++){
				S4 += ("<li>" + HAR2[0][i] + "</li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < HAR1[2].length; i++){
				S5 += ("<li>" + HAR1[2][i] + "</li>");
			}
			S5 +="<br>";
			for(i = 0; i < HAR2[1].length; i++){
				S5 += ("<li>" + HAR2[1][i] + "</li>");
			}
			S5 += "</ul>";
		}else{
			S3 += "<td><ul>";
			for(i = 0; i < HAR1[0].length; i++){
				S3 += ("<li>" + HAR1[0][i] + "</li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < HAR1[1].length; i++){
				S4 += ("<li>" + HAR1[1][i] + "</li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < HAR1[2].length; i++){
				S5 += ("<li>" + HAR1[2][i] + "</li>");
			}
			S5 += "</ul>";
		}

		//Checking RF
		if(manpower >= 3000 && rations >= 3000){
			if(manpower >= 4000 && rations >= 4000){
				S3 += "<td><ul>";
				for(i = 0; i < HRF1[0].length; i++){
					S3 += ("<li>" + HRF1[0][i] + "</li>");
				}
				S3 +="<br>";
				for(i = 0; i < HRF2[0].length; i++){
					S3 += ("<li>" + HRF2[0][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HRF1[1].length; i++){
					S4 += ("<li>" + HRF1[1][i] + "</li>");
				}
				S4 +="<br>";
				for(i = 0; i < HRF2[1].length; i++){
					S4 += ("<li>" + HRF2[1][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HRF1[2].length; i++){
					S5 += ("<li>" + HRF1[2][i] + "</li>");
				}
				S5 +="<br>";
				for(i = 0; i < HRF2[2].length; i++){
					S5 += ("<li>" + HRF2[2][i] + "</li>");
				}
				S5 += "</ul>";
			}else{
				S3 += "<td><ul>";
				for(i = 0; i < HRF1[0].length; i++){
					S3 += ("<li>" + HRF1[0][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HRF1[1].length; i++){
					S4 += ("<li>" + HRF1[1][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HRF1[2].length; i++){
					S5 += ("<li>" + HRF1[2][i] + "</li>");
				}
				S5 += "</ul>";
			}
		}else{
			S3 += "<td class='none'>No RF</td>";
			S4 += "<td><span class='highTierNone'>No RF</span></td>";
			S5 += "<td></td>";
		}

		//Checking MG
		if(manpower >= 4000 && ammo >= 6000 && parts >= 3000){
			if(manpower >= 6000 && ammo >= 6000 && parts >= 4000){
				S3 += "<td><ul>";
				for(i = 0; i < HMG1[0].length; i++){
					S3 += ("<li>" + HMG1[0][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HMG1[1].length; i++){
					S4 += ("<li>" + HMG1[1][i] + "</li>");
				}
				S4 +="<br>";
				for(i = 0; i < HMG2[0].length; i++){
					S4 += ("<li>" + HMG2[0][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HMG1[2].length; i++){
					S5 += ("<li>" + HMG1[2][i] + "</li>");
				}
				S5 +="<br>";
				for(i = 0; i < HMG2[1].length; i++){
					S5 += ("<li>" + HMG2[1][i] + "</li>");
				}
				S5 += "</ul>";
			}else{
				S3 += "<td><ul>";
				for(i = 0; i < HMG1[0].length; i++){
					S3 += ("<li>" + HMG1[0][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HMG1[1].length; i++){
					S4 += ("<li>" + HMG1[1][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HMG1[2].length; i++){
					S5 += ("<li>" + HMG1[2][i] + "</li>");
				}
				S5 += "</ul>";
			}
		}else{
			S3 += "<td class='none'>No MG</td>";
			S4 += "<td><span class='highTierNone'>No MG</span></td>";
			S5 += "<td></td>";
		}

		//Checking SG
		if(manpower >= 4000 && rations >= 6000 && parts >= 3000){
			if(manpower >= 6000 && rations >= 6000 && parts >= 4000){
				S3 += "<td><ul>";
				for(i = 0; i < HSG1[0].length; i++){
					S3 += ("<li>" + HSG1[0][i] + "</li>");
				}
				S3 +="<br>";
				for(i = 0; i < HSG2[0].length; i++){
					S3 += ("<li>" + HSG2[0][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HSG1[1].length; i++){
					S4 += ("<li>" + HSG1[1][i] + "</li>");
				}
				S4 +="<br>";
				for(i = 0; i < HSG2[1].length; i++){
					S4 += ("<li>" + HSG2[1][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HSG1[2].length; i++){
					S5 += ("<li>" + HSG1[2][i] + "</li>");
				}
				S5 +="<br>";
				for(i = 0; i < HSG2[2].length; i++){
					S5 += ("<li>" + HSG2[2][i] + "</li>");
				}
				S5 += "</ul>";
			}else{
				S3 += "<td><ul>";
				for(i = 0; i < HSG1[0].length; i++){
					S3 += ("<li>" + HSG1[0][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HSG1[1].length; i++){
					S4 += ("<li>" + HSG1[1][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HSG1[2].length; i++){
					S5 += ("<li>" + HSG1[2][i] + "</li>");
				}
				S5 += "</ul>";
			}
		}else{
			S3 += "<td class='none'>No SG</td>";
			S4 += "<td><span class='highTierNone'>No SG</span></td>";
			S5 += "<td></td>";
		}


		S3 += "</tr>";
		S4 += "</tr>";
		S5 += "</tr>";


		tbody.append(S3, S4, S5);

		table.append(tbody);
		checkboxClicked();
		tierRadioClicked();
	}
}