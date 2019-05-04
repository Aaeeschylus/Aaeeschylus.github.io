function findHeavyDolls(mp, am, ra, pa){
	var manpower = parseInt(mp);
	var ammo = parseInt(am);
	var rations = parseInt(ra);
	var parts = parseInt(pa);


	if(manpower < 1000 || manpower > 9999 || ammo < 1000 || ammo > 9999 || rations < 1000 || rations > 9999 || parts < 1000 || parts > 9999){
		alert("資材量が1000から9999の間にあるかを確認してください");
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
				S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSMG1[0][i][2] + "' target='_blank'>" + HSMG1[0][i][0] + "</a></span><span class='DollTime'>" + HSMG1[0][i][1] + "</span></li>");
			}
			S3 +="<div class='clear'></div>";
			for(i = 0; i < HSMG2[0].length; i++){
				S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSMG2[0][i][2] + "' target='_blank'>" + HSMG2[0][i][0] + "</a></span><span class='DollTime'>" + HSMG2[0][i][1] + "</span></li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < HSMG1[1].length; i++){
				S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSMG1[1][i][2] + "' target='_blank'>" + HSMG1[1][i][0] + "</a></span><span class='DollTime'>" + HSMG1[1][i][1] + "</span></li>");
			}
			S4 +="<div class='clear'></div>";
			for(i = 0; i < HSMG2[1].length; i++){
				S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSMG2[1][i][2] + "' target='_blank'>" + HSMG2[1][i][0] + "</a></span><span class='DollTime'>" + HSMG2[1][i][1] + "</span></li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < HSMG1[2].length; i++){
				S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSMG1[2][i][2] + "' target='_blank'>" + HSMG1[2][i][0] + "</a></span><span class='DollTime'>" + HSMG1[2][i][1] + "</span></li>");
			}
			S5 +="<div class='clear'></div>";
			for(i = 0; i < HSMG2[2].length; i++){
				S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSMG2[2][i][2] + "' target='_blank'>" + HSMG2[2][i][0] + "</a></span><span class='DollTime'>" + HSMG2[2][i][1] + "</span></li>");
			}
			S5 += "</ul>";
		}else{
			S3 += "<td><ul>";
			for(i = 0; i < HSMG1[0].length; i++){
				S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSMG1[0][i][2] + "' target='_blank'>" + HSMG1[0][i][0] + "</a></span><span class='DollTime'>" + HSMG1[0][i][1] + "</span></li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < HSMG1[1].length; i++){
				S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSMG1[1][i][2] + "' target='_blank'>" + HSMG1[1][i][0] + "</a></span><span class='DollTime'>" + HSMG1[1][i][1] + "</span></li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < HSMG1[2].length; i++){
				S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSMG1[2][i][2] + "' target='_blank'>" + HSMG1[2][i][0] + "</a></span><span class='DollTime'>" + HSMG1[2][i][1] + "</span></li>");
			}
			S5 += "</ul>";
		}


		//Checking AR
		if(rations >= 4000 && ammo >= 4000){
			S3 += "<td><ul>";
			for(i = 0; i < HAR1[0].length; i++){
				S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HAR1[0][i][2] + "' target='_blank'>" + HAR1[0][i][0] + "</a></span><span class='DollTime'>" + HAR1[0][i][1] + "</span></li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < HAR1[1].length; i++){
				S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HAR1[1][i][2] + "' target='_blank'>" + HAR1[1][i][0] + "</a></span><span class='DollTime'>" + HAR1[1][i][1] + "</span></li>");
			}
			S4 +="<div class='clear'></div>";
			for(i = 0; i < HAR2[0].length; i++){
				S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HAR2[0][i][2] + "' target='_blank'>" + HAR2[0][i][0] + "</a></span><span class='DollTime'>" + HAR2[0][i][1] + "</span></li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < HAR1[2].length; i++){
				S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HAR1[2][i][2] + "' target='_blank'>" + HAR1[2][i][0] + "</a></span><span class='DollTime'>" + HAR1[2][i][1] + "</span></li>");
			}
			S5 +="<div class='clear'></div>";
			for(i = 0; i < HAR2[1].length; i++){
				S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HAR2[1][i][2] + "' target='_blank'>" + HAR2[1][i][0] + "</a></span><span class='DollTime'>" + HAR2[1][i][1] + "</span></li>");
			}
			S5 += "</ul>";
		}else{
			S3 += "<td><ul>";
			for(i = 0; i < HAR1[0].length; i++){
				S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HAR1[0][i][2] + "' target='_blank'>" + HAR1[0][i][0] + "</a></span><span class='DollTime'>" + HAR1[0][i][1] + "</span></li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < HAR1[1].length; i++){
				S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HAR1[1][i][2] + "' target='_blank'>" + HAR1[1][i][0] + "</a></span><span class='DollTime'>" + HAR1[1][i][1] + "</span></li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < HAR1[2].length; i++){
				S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HAR1[2][i][2] + "' target='_blank'>" + HAR1[2][i][0] + "</a></span><span class='DollTime'>" + HAR1[2][i][1] + "</span></li>");
			}
			S5 += "</ul>";
		}

		//Checking RF
		if(manpower >= 3000 && rations >= 3000){
			if(manpower >= 4000 && rations >= 4000){
				S3 += "<td><ul>";
				for(i = 0; i < HRF1[0].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HRF1[0][i][2] + "' target='_blank'>" + HRF1[0][i][0] + "</a></span><span class='DollTime'>" + HRF1[0][i][1] + "</span></li>");
				}
				S3 +="<div class='clear'></div>";
				for(i = 0; i < HRF2[0].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HRF2[0][i][2] + "' target='_blank'>" + HRF2[0][i][0] + "</a></span><span class='DollTime'>" + HRF2[0][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HRF1[1].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HRF1[1][i][2] + "' target='_blank'>" + HRF1[1][i][0] + "</a></span><span class='DollTime'>" + HRF1[1][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < HRF2[1].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HRF2[1][i][2] + "' target='_blank'>" + HRF2[1][i][0] + "</a></span><span class='DollTime'>" + HRF2[1][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HRF1[2].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HRF1[2][i][2] + "' target='_blank'>" + HRF1[2][i][0] + "</a></span><span class='DollTime'>" + HRF1[2][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < HRF2[2].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HRF2[2][i][2] + "' target='_blank'>" + HRF2[2][i][0] + "</a></span><span class='DollTime'>" + HRF2[2][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S3 += "<td><ul>";
				for(i = 0; i < HRF1[0].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HRF1[0][i][2] + "' target='_blank'>" + HRF1[0][i][0] + "</a></span><span class='DollTime'>" + HRF1[0][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HRF1[1].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HRF1[1][i][2] + "' target='_blank'>" + HRF1[1][i][0] + "</a></span><span class='DollTime'>" + HRF1[1][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HRF1[2].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HRF1[2][i][2] + "' target='_blank'>" + HRF1[2][i][0] + "</a></span><span class='DollTime'>" + HRF1[2][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S3 += "<td class='none'>RF該当無し</td>";
			S4 += "<td><span class='highTierNone'>RF該当無し</span></td>";
			S5 += "<td></td>";
		}

		//Checking MG
		if(manpower >= 4000 && ammo >= 6000 && parts >= 3000){
			if(manpower >= 6000 && ammo >= 6000 && parts >= 4000){
				S3 += "<td><ul>";
				for(i = 0; i < HMG1[0].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HMG1[0][i][2] + "' target='_blank'>" + HMG1[0][i][0] + "</a></span><span class='DollTime'>" + HMG1[0][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HMG1[1].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HMG1[1][i][2] + "' target='_blank'>" + HMG1[1][i][0] + "</a></span><span class='DollTime'>" + HMG1[1][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < HMG2[0].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HMG2[0][i][2] + "' target='_blank'>" + HMG2[0][i][0] + "</a></span><span class='DollTime'>" + HMG2[0][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HMG1[2].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HMG1[2][i][2] + "' target='_blank'>" + HMG1[2][i][0] + "</a></span><span class='DollTime'>" + HMG1[2][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < HMG2[1].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HMG2[1][i][2] + "' target='_blank'>" + HMG2[1][i][0] + "</a></span><span class='DollTime'>" + HMG2[1][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S3 += "<td><ul>";
				for(i = 0; i < HMG1[0].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HMG1[0][i][2] + "' target='_blank'>" + HMG1[0][i][0] + "</a></span><span class='DollTime'>" + HMG1[0][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HMG1[1].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HMG1[1][i][2] + "' target='_blank'>" + HMG1[1][i][0] + "</a></span><span class='DollTime'>" + HMG1[1][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HMG1[2].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HMG1[2][i][2] + "' target='_blank'>" + HMG1[2][i][0] + "</a></span><span class='DollTime'>" + HMG1[2][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S3 += "<td class='none'>MG該当無し</td>";
			S4 += "<td><span class='highTierNone'>MG該当無し</span></td>";
			S5 += "<td></td>";
		}

		//Checking SG
		if(manpower >= 4000 && rations >= 6000 && parts >= 3000){
			if(manpower >= 6000 && rations >= 6000 && parts >= 4000){
				S3 += "<td><ul>";
				for(i = 0; i < HSG1[0].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSG1[0][i][2] + "' target='_blank'>" + HSG1[0][i][0] + "</a></span><span class='DollTime'>" + HSG1[0][i][1] + "</span></li>");
				}
				S3 +="<div class='clear'></div>";
				for(i = 0; i < HSG2[0].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSG2[0][i][2] + "' target='_blank'>" + HSG2[0][i][0] + "</a></span><span class='DollTime'>" + HSG2[0][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HSG1[1].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSG1[1][i][2] + "' target='_blank'>" + HSG1[1][i][0] + "</a></span><span class='DollTime'>" + HSG1[1][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < HSG2[1].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSG2[1][i][2] + "' target='_blank'>" + HSG2[1][i][0] + "</a></span><span class='DollTime'>" + HSG2[1][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HSG1[2].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSG1[2][i][2] + "' target='_blank'>" + HSG1[2][i][0] + "</a></span><span class='DollTime'>" + HSG1[2][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < HSG2[2].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSG2[2][i][2] + "' target='_blank'>" + HSG2[2][i][0] + "</a></span><span class='DollTime'>" + HSG2[2][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S3 += "<td><ul>";
				for(i = 0; i < HSG1[0].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSG1[0][i][2] + "' target='_blank'>" + HSG1[0][i][0] + "</a></span><span class='DollTime'>" + HSG1[0][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HSG1[1].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSG1[1][i][2] + "' target='_blank'>" + HSG1[1][i][0] + "</a></span><span class='DollTime'>" + HSG1[1][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HSG1[2].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HSG1[2][i][2] + "' target='_blank'>" + HSG1[2][i][0] + "</a></span><span class='DollTime'>" + HSG1[2][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S3 += "<td class='none'>SG該当無し</td>";
			S4 += "<td><span class='highTierNone'>SG該当無し</span></td>";
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