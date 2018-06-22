$(document).on('click', '.calculate_button', function(){
	var manpower = $("#manpower").val();
	var ammo = $("#ammo").val();
	var rations = $("#ration").val();
	var parts = $("#part").val();
	findDolls(manpower, ammo, rations, parts);
});




var HG1 = [["PPK 0:22:00", "M1911 0:20:00", "Nagant Revolver 0:20:00", "P38 0:20:00", "FNP-9 0:25:00", "MP-446 0:25:00", "USP Compact 0:28:00", "Bren Ten 0:28:00"],
		["Tokarev 0:45:00", "Astra Revolver 0:40:00", "P08 0:30:00", "M9 0:40:00", "C96 0:30:00", "Makarov 0:40:00", "Type 92 0:35:00", "P99 0:35:00"],
		["Colt Revolver 0:50:00", "Mk23 0:50:00", "P7 0:55:00"],
		["Grizzly MkV 1:10:00"]];

var HG2 = [["Stechkin 0:55:00", "Spitfire 0:52:00"],
		["M950A 1:05:00", "Welrod MkII 1:00:00", "Contender 1:02:00"]];

var SMG1 = [["MP40 1:30:00", "Beretta Model 38 1:30:00", "PPSh-41 1:50:00", "M3 1:30:00", "Spectre M4 1:20:00", "IDW 1:10:00", "Type 64 1:25:00", "m45 1:20:00", "PP-2000 1:10:00"],
	["MAC-10 2:00:00", "Skorpion 2:00:00", "PPS-43 2:10:00", "Micro Uzi 2:00:00", "Z-62 2:05:00"],
	["MP5 2:20:00"],
	["Thompson 2:30:00"]];

var SMG2 = [["Sten MkII 1:40:00"],
	["UMP9 2:15:00", "UMP45 2:15:00", "PP-90 2:20:00", "Shipka 2:18:00", "PP-19-01 2:18:00"],
	["Vector 2:35:00", "Suomi 2:25:00", "G36C 2:30:00", "Type 79 2:35:00", "SR-3MP 2:33:00"]];

var AR1 = [["L85A1 2:50:00", "G3 2:50:00", "Galil 2:40:00", "SIG-510 2:40:00", "F2000 2:45:00"],
	["AK-47 3:20:00", "FNC 3:20:00", "StG44 3:00:00", "OTs-12 3:10:00"],
	["AS Val 3:30:00", "Type 56-1 3:25:00", "FAMAS 3:30:00", "9A-91 3:35:00"],
	["HK416 3:55:00", "G11 4:04:00"]];

var AR2 = [["G36 3:40:00", "TAR-21 3:30:00", "Ribeyrolles 3:40:00"],
	["G41 4:05:00", "FAL 3:45:00", "Type 95 3:50:00", "Type 97 3:50:00", "RFB 3:58:00", "T91 3:48:00", "K2 3:52:00", "Zas M21 4:05:00", "AN-94 4:09:00", "AK-12 4:12:00"]];

var RF1 = [["SVT-38 3:30:00", "G43 3:10:00", "FN-49 3:10:00", "Simonov 3:30:00", "BM59 3:20:00"],
	["M1 Garand 4:00:00", "M14 3:40:00", "SV-98 3:40:00"],
	["Springfield 4:25:00", "Mosin-Nagant 4:10:00", "PTRD 4:30:00"],
	["WA2000 4:50:00", "NTW-20 4:45:00"]];

var RF2 = [["Hanyang Type 88 3:50:00"],
	["SVD 4:15:00", "T-5000 4:10:00"],
	["Kar98k 4:40:00", "Lee-Enfield 5:00:00", "M99 4:55:00", "IWS-2000 4:52:00", "Carcano M1891 4:38:00", "Carcano M91/38 4:42:00"]];

var MG1 = [["MG34 5:00:00", "DP28 5:00:00", "AAT-52 4:50:00", "LWMMG 5:10:00", "FG42 4:50:00"],
	["M1919A4 5:40:00", "MG42 5:50:00", "M2HB 6:10:00", "Bren 5:20:00"],
	["MG3 6:30:00", "M1918 6:25:00", "M60 6:10:00", "Mk48 6:20:00"],
	["MG5 6:45:00"]];

var MG2 = [["PK 6:30:00", "Ameli 6:25:00"],
	["Negev 6:35:00", "MG4 6:40:00", "PKP 6:50:00"]];






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
			if(manpower >= 130 && ammo >= 130 && rations >= 130){
				S2 += "<td><ul>";
				for(i = 0; i < HG1[0].length; i++){
					S2 += ("<li>" + HG1[0][i] + "</li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < HG1[1].length; i++){
					S3 += ("<li>" + HG1[1][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HG1[2].length; i++){
					S4 += ("<li>" + HG1[2][i] + "</li>");
				}
				for(i = 0; i < HG2[0].length; i++){
					S4 += ("<li>" + HG2[0][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HG1[3].length; i++){
					S5 += ("<li>" + HG1[3][i] + "</li>");
				}
				for(i = 0; i < HG2[1].length; i++){
					S5 += ("<li>" + HG2[1][i] + "</li>");
				}
				S5 += "</ul>";

			}else{
				S2 += "<td><ul>";
				for(i = 0; i < HG1[0].length; i++){
					S2 += ("<li>" + HG1[0][i] + "</li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < HG1[1].length; i++){
					S3 += ("<li>" + HG1[1][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HG1[2].length; i++){
					S4 += ("<li>" + HG1[2][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HG1[3].length; i++){
					S5 += ("<li>" + HG1[3][i] + "</li>");
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
				S2 += ("<li>" + SMG1[0][i] + "</li>");
			}
			S2 += "</ul>";

			S3 += "<td><ul>";
			for(i = 0; i < SMG1[1].length; i++){
				S3 += ("<li>" + SMG1[1][i] + "</li>");
			}
			for(i = 0; i < SMG2[0].length; i++){
				S3 += ("<li>" + SMG2[0][i] + "</li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < SMG1[2].length; i++){
				S4 += ("<li>" + SMG1[2][i] + "</li>");
			}
			for(i = 0; i < SMG2[1].length; i++){
				S4 += ("<li>" + SMG2[1][i] + "</li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < SMG1[3].length; i++){
				S5 += ("<li>" + SMG1[3][i] + "</li>");
			}
			for(i = 0; i < SMG2[2].length; i++){
				S5 += ("<li>" + SMG2[2][i] + "</li>");
			}
			S5 += "</ul>";

		}else{
			S2 += "<td><ul>";
			for(i = 0; i < SMG1[0].length; i++){
				S2 += ("<li>" + SMG1[0][i] + "</li>");
			}
			S2 += "</ul>";

			S3 += "<td><ul>";
			for(i = 0; i < SMG1[1].length; i++){
				S3 += ("<li>" + SMG1[1][i] + "</li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < SMG1[2].length; i++){
				S4 += ("<li>" + SMG1[2][i] + "</li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < SMG1[3].length; i++){
				S5 += ("<li>" + SMG1[3][i] + "</li>");
			}
			S5 += "</ul>";
		}

		//check AR
		if(sum >= 800){
			if(ammo >= 400 & rations >= 400){
				S2 += "<td><ul>";
				for(i = 0; i < AR1[0].length; i++){
					S2 += ("<li>" + AR1[0][i] + "</li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < AR1[1].length; i++){
					S3 += ("<li>" + AR1[1][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < AR1[2].length; i++){
					S4 += ("<li>" + AR1[2][i] + "</li>");
				}
				for(i = 0; i < AR2[0].length; i++){
					S4 += ("<li>" + AR2[0][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < AR1[3].length; i++){
					S5 += ("<li>" + AR1[3][i] + "</li>");
				}
				for(i = 0; i < AR2[1].length; i++){
					S5 += ("<li>" + AR2[1][i] + "</li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>";
				for(i = 0; i < AR1[0].length; i++){
					S2 += ("<li>" + AR1[0][i] + "</li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < AR1[1].length; i++){
					S3 += ("<li>" + AR1[1][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < AR1[2].length; i++){
					S4 += ("<li>" + AR1[2][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < AR1[3].length; i++){
					S5 += ("<li>" + AR1[3][i] + "</li>");
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
					S2 += ("<li>" + RF1[0][i] + "</li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < RF1[1].length; i++){
					S3 += ("<li>" + RF1[1][i] + "</li>");
				}
				for(i = 0; i < RF2[0].length; i++){
					S3 += ("<li>" + RF2[0][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < RF1[2].length; i++){
					S4 += ("<li>" + RF1[2][i] + "</li>");
				}
				for(i = 0; i < RF2[1].length; i++){
					S4 += ("<li>" + RF2[1][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < RF1[3].length; i++){
					S5 += ("<li>" + RF1[3][i] + "</li>");
				}
				for(i = 0; i < RF2[2].length; i++){
					S5 += ("<li>" + RF2[2][i] + "</li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>";
				for(i = 0; i < RF1[0].length; i++){
					S2 += ("<li>" + RF1[0][i] + "</li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < RF1[1].length; i++){
					S3 += ("<li>" + RF1[1][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < RF1[2].length; i++){
					S4 += ("<li>" + RF1[2][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < RF1[3].length; i++){
					S5 += ("<li>" + RF1[3][i] + "</li>");
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
					S2 += ("<li>" + MG1[0][i] + "</li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < MG1[1].length; i++){
					S3 += ("<li>" + MG1[1][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < MG1[2].length; i++){
					S4 += ("<li>" + MG1[2][i] + "</li>");
				}
				for(i = 0; i < MG2[0].length; i++){
					S4 += ("<li>" + MG2[0][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < MG1[3].length; i++){
					S5 += ("<li>" + MG1[3][i] + "</li>");
				}
				for(i = 0; i < MG2[1].length; i++){
					S5 += ("<li>" + MG2[1][i] + "</li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>";
				for(i = 0; i < MG1[0].length; i++){
					S2 += ("<li>" + MG1[0][i] + "</li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < MG1[1].length; i++){
					S3 += ("<li>" + MG1[1][i] + "</li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < MG1[2].length; i++){
					S4 += ("<li>" + MG1[2][i] + "</li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < MG1[3].length; i++){
					S5 += ("<li>" + MG1[3][i] + "</li>");
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
	}
}