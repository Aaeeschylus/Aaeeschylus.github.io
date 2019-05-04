$(document).on('click', '.calculate_button', function(){
	var manpower = $("#manpower").val();
	var ammo = $("#ammo").val();
	var rations = $("#ration").val();
	var parts = $("#part").val();
	var value = $('input[name=production]:checked').val();
	if(value === "heavy"){
		findHeavyDolls(manpower, ammo, rations, parts);
	}else{
		findDolls(manpower, ammo, rations, parts);
	}
});

function init() {
	$("tr.recipes").children("td:not(.preset)").each(
		function (i, e) {
			e.onclick = recipe_onclick;
			$(e).hover(function() {
					$(this).addClass("recipe_highlight");
				    $(this).siblings("td").addClass("recipe_highlight");
				}, function() {
					$(this).removeClass("recipe_highlight");
				    $(this).siblings("td").removeClass("recipe_highlight");
				});
		}
	);
	$(".resource_input > input").each(
		function (i, e) {
			$(e).change(update_tot);
		});
}

function recipe_onclick() {
	var parent = $(this).parent();
	var ingreds = parent.children("td").map(function (i, e) { return parseFloat(e.textContent); });
	
	select_ingreds(ingreds[0], ingreds[1], ingreds[2], ingreds[3]);
}

function update_tot() {
	var tot = parseFloat($("#manpower").val()) + parseFloat($("#ammo").val()) + parseFloat($("#ration").val()) + parseFloat($("#part").val());
	$("#resource_tot").text(tot);
}

function select_ingreds(m,a,r,p) {
	$("#manpower").val(m);
	$("#ammo").val(a);
	$("#ration").val(r);
	$("#part").val(p);
	var value = $('input[name=production]:checked').val();
	update_tot();
	if(value === "heavy"){
		findHeavyDolls(m, a, r, p);
	}else{
		findDolls(m, a, r, p);
	}
}


function findDolls(mp, am, ra, pa){
	var manpower = parseInt(mp);
	var ammo = parseInt(am);
	var rations = parseInt(ra);
	var parts = parseInt(pa);
	var sum = manpower + ammo + rations + parts;

	if(manpower < 30 || manpower > 999 || ammo < 30 || ammo > 999 || rations < 30 || rations > 999 || parts < 30 || parts > 999){
		alert("資材量が30から999の間にあるかを確認してください");
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
					S2 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HG1[0][i][2] + "' target='_blank'>" +  HG1[0][i][0] + "</a></span><span class='DollTime'>" + HG1[0][i][1] + "</span></li>");	
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < HG1[1].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HG1[1][i][2] + "' target='_blank'>" + HG1[1][i][0] + "</a></span><span class='DollTime'>" + HG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HG1[2].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HG1[2][i][2] + "' target='_blank'>" + HG1[2][i][0] + "</a></span><span class='DollTime'>" + HG1[2][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < HG2[0].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HG2[0][i][2] + "' target='_blank'>" + HG2[0][i][0] + "</a></span><span class='DollTime'>" + HG2[0][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HG1[3].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HG1[3][i][2] + "' target='_blank'>" + HG1[3][i][0] + "</a></span><span class='DollTime'>" + HG1[3][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < HG2[1].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HG2[1][i][2] + "' target='_blank'>" + HG2[1][i][0] + "</a></span><span class='DollTime'>" + HG2[1][i][1] + "</span></li>");
				}
				S5 += "</ul>";

			}else{
				S2 += "<td><ul>";
				for(i = 0; i < HG1[0].length; i++){
					S2 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HG1[0][i][2] + "' target='_blank'>" + HG1[0][i][0] + "</a></span><span class='DollTime'>" + HG1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < HG1[1].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HG1[1][i][2] + "' target='_blank'>" + HG1[1][i][0] + "</a></span><span class='DollTime'>" + HG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < HG1[2].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HG1[2][i][2] + "' target='_blank'>" + HG1[2][i][0] + "</a></span><span class='DollTime'>" + HG1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < HG1[3].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + HG1[3][i][2] + "' target='_blank'>" + HG1[3][i][0] + "</a></span><span class='DollTime'>" + HG1[3][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S2 += "<td class='none'>HG該当無し</td>";
			S3 += "<td></td>";
			S4 += "<td></td>";
			S5 += "<td></td>";
		}

		//check SMG
		if(manpower >= 400 && ammo >= 400){
			S2 += "<td><ul>";
			for(i = 0; i < SMG1[0].length; i++){
				S2 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG1[0][i][2] + "' target='_blank'>" + SMG1[0][i][0] + "</a></span><span class='DollTime'>" + SMG1[0][i][1] + "</span></li>");
			}
			S2 += "</ul>";

			S3 += "<td><ul>";
			for(i = 0; i < SMG1[1].length; i++){
				S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG1[1][i][2] + "' target='_blank'>" + SMG1[1][i][0] + "</a></span><span class='DollTime'>" + SMG1[1][i][1] + "</span></li>");
			}
			S3 +="<div class='clear'></div>";
			for(i = 0; i < SMG2[0].length; i++){
				S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG2[0][i][2] + "' target='_blank'>" + SMG2[0][i][0] + "</a></span><span class='DollTime'>" + SMG2[0][i][1] + "</span></li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < SMG1[2].length; i++){
				S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG1[2][i][2] + "' target='_blank'>" + SMG1[2][i][0] + "</a></span><span class='DollTime'>" + SMG1[2][i][1] + "</span></li>");
			}
			S4 +="<div class='clear'></div>";
			for(i = 0; i < SMG2[1].length; i++){
				S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG2[1][i][2] + "' target='_blank'>" + SMG2[1][i][0] + "</a></span><span class='DollTime'>" + SMG2[1][i][1] + "</span></li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < SMG1[3].length; i++){
				S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG1[3][i][2] + "' target='_blank'>" + SMG1[3][i][0] + "</a></span><span class='DollTime'>" + SMG1[3][i][1] + "</span></li>");
			}
			S5 +="<div class='clear'></div>";
			for(i = 0; i < SMG2[2].length; i++){
				S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG2[2][i][2] + "' target='_blank'>" + SMG2[2][i][0] + "</a></span><span class='DollTime'>" + SMG2[2][i][1] + "</span></li>");
			}
			S5 += "</ul>";

		}else{
			S2 += "<td><ul>";
			for(i = 0; i < SMG1[0].length; i++){
				S2 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG1[0][i][2] + "' target='_blank'>" + SMG1[0][i][0] + "</a></span><span class='DollTime'>" + SMG1[0][i][1] + "</span></li>");
			}
			S2 += "</ul>";

			S3 += "<td><ul>";
			for(i = 0; i < SMG1[1].length; i++){
				S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG1[1][i][2] + "' target='_blank'>" + SMG1[1][i][0] + "</a></span><span class='DollTime'>" + SMG1[1][i][1] + "</span></li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>";
			for(i = 0; i < SMG1[2].length; i++){
				S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG1[2][i][2] + "' target='_blank'>" + SMG1[2][i][0] + "</a></span><span class='DollTime'>" + SMG1[2][i][1] + "</span></li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>";
			for(i = 0; i < SMG1[3].length; i++){
				S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + SMG1[3][i][2] + "' target='_blank'>" + SMG1[3][i][0] + "</a></span><span class='DollTime'>" + SMG1[3][i][1] + "</span></li>");
			}
			S5 += "</ul>";
		}

		//check AR
		if(sum >= 800){
			if(ammo >= 400 & rations >= 400){
				S2 += "<td><ul>";
				for(i = 0; i < AR1[0].length; i++){
					S2 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + AR1[0][i][2] + "' target='_blank'>" + AR1[0][i][0] + "</a></span><span class='DollTime'>" + AR1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < AR1[1].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + AR1[1][i][2] + "' target='_blank'>" + AR1[1][i][0] + "</a></span><span class='DollTime'>" + AR1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < AR1[2].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + AR1[2][i][2] + "' target='_blank'>" + AR1[2][i][0] + "</a></span><span class='DollTime'>" + AR1[2][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < AR2[0].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + AR2[0][i][2] + "' target='_blank'>" + AR2[0][i][0] + "</a></span><span class='DollTime'>" + AR2[0][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < AR1[3].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + AR1[3][i][2] + "' target='_blank'>" + AR1[3][i][0] + "</a></span><span class='DollTime'>" + AR1[3][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < AR2[1].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + AR2[1][i][2] + "' target='_blank'>" + AR2[1][i][0] + "</a></span><span class='DollTime'>" + AR2[1][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>";
				for(i = 0; i < AR1[0].length; i++){
					S2 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + AR1[0][i][2] + "' target='_blank'>" + AR1[0][i][0] + "</a></span><span class='DollTime'>" + AR1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < AR1[1].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + AR1[1][i][2] + "' target='_blank'>" + AR1[1][i][0] + "</a></span><span class='DollTime'>" + AR1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < AR1[2].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + AR1[2][i][2] + "' target='_blank'>" + AR1[2][i][0] + "</a></span><span class='DollTime'>" + AR1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < AR1[3].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + AR1[3][i][2] + "' target='_blank'>" + AR1[3][i][0] + "</a></span><span class='DollTime'>" + AR1[3][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S2 += "<td class='none'>AR該当無し</td>";
			S3 += "<td></td>";
			S4 += "<td></td>";
			S5 += "<td></td>";
		}

		//check RF
		if(manpower >= 300 && rations >= 300){
			if(manpower >= 400 && rations >= 400){
				S2 += "<td><ul>";
				for(i = 0; i < RF1[0].length; i++){
					S2 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF1[0][i][2] + "' target='_blank'>" + RF1[0][i][0] + "</a></span><span class='DollTime'>" + RF1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < RF1[1].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF1[1][i][2] + "' target='_blank'>" + RF1[1][i][0] + "</a></span><span class='DollTime'>" + RF1[1][i][1] + "</span></li>");
				}
				S3 +="<div class='clear'></div>";
				for(i = 0; i < RF2[0].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF2[0][i][2] + "' target='_blank'>" + RF2[0][i][0] + "</a></span><span class='DollTime'>" + RF2[0][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < RF1[2].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF1[2][i][2] + "' target='_blank'>" + RF1[2][i][0] + "</a></span><span class='DollTime'>" + RF1[2][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < RF2[1].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF2[1][i][2] + "' target='_blank'>" + RF2[1][i][0] + "</a></span><span class='DollTime'>" + RF2[1][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < RF1[3].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF1[3][i][2] + "' target='_blank'>" + RF1[3][i][0] + "</a></span><span class='DollTime'>" + RF1[3][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < RF2[2].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF2[2][i][2] + "' target='_blank'>" + RF2[2][i][0] + "</a></span><span class='DollTime'>" + RF2[2][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>";
				for(i = 0; i < RF1[0].length; i++){
					S2 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF1[0][i][2] + "' target='_blank'>" + RF1[0][i][0] + "</a></span><span class='DollTime'>" + RF1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < RF1[1].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF1[1][i][2] + "' target='_blank'>" + RF1[1][i][0] + "</a></span><span class='DollTime'>" + RF1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < RF1[2].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF1[2][i][2] + "' target='_blank'>" + RF1[2][i][0] + "</a></span><span class='DollTime'>" + RF1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < RF1[3].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + RF1[3][i][2] + "' target='_blank'>" + RF1[3][i][0] + "</a></span><span class='DollTime'>" + RF1[3][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S2 += "<td class='none'>RF該当無し</td>";
			S3 += "<td></td>";
			S4 += "<td></td>";
			S5 += "<td></td>";
		}

		//check MG
		if(manpower >= 400 && ammo >= 600 && parts >= 300){
			if(manpower >= 600 && rations >= 100 && parts >= 400){
				S2 += "<td><ul>";
				for(i = 0; i < MG1[0].length; i++){
					S2 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + MG1[0][i][2] + "' target='_blank'>" + MG1[0][i][0] + "</a></span><span class='DollTime'>" + MG1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < MG1[1].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + MG1[1][i][2] + "' target='_blank'>" + MG1[1][i][0] + "</a></span><span class='DollTime'>" + MG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < MG1[2].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + MG1[2][i][2] + "' target='_blank'>" + MG1[2][i][0] + "</a></span><span class='DollTime'>" + MG1[2][i][1] + "</span></li>");
				}
				S4 +="<div class='clear'></div>";
				for(i = 0; i < MG2[0].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + MG2[0][i][2] + "' target='_blank'>" + MG2[0][i][0] + "</a></span><span class='DollTime'>" + MG2[0][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < MG1[3].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + MG1[3][i][2] + "' target='_blank'>" + MG1[3][i][0] + "</a></span><span class='DollTime'>" + MG1[3][i][1] + "</span></li>");
				}
				S5 +="<div class='clear'></div>";
				for(i = 0; i < MG2[1].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + MG2[1][i][2] + "' target='_blank'>" + MG2[1][i][0] + "</a></span><span class='DollTime'>" + MG2[1][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>";
				for(i = 0; i < MG1[0].length; i++){
					S2 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + MG1[0][i][2] + "' target='_blank'>" + MG1[0][i][0] + "</a></span><span class='DollTime'>" + MG1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>";
				for(i = 0; i < MG1[1].length; i++){
					S3 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + MG1[1][i][2] + "' target='_blank'>" + MG1[1][i][0] + "</a></span><span class='DollTime'>" + MG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>";
				for(i = 0; i < MG1[2].length; i++){
					S4 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + MG1[2][i][2] + "' target='_blank'>" + MG1[2][i][0] + "</a></span><span class='DollTime'>" + MG1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>";
				for(i = 0; i < MG1[3].length; i++){
					S5 += ("<li><span class='DollName'><a class='dolls' href='https://wikiwiki.jp/dolls-fl/" + MG1[3][i][2] + "' target='_blank'>" + MG1[3][i][0] + "</a></span><span class='DollTime'>" + MG1[3][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}
		}else{
			S2 += "<td class='none'>MG該当無し</td>";
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
	var unrel = $('#unreleasedChecker');
	var uncraft = $('#uncraftChecker');
	if(unrel.is(':checked')){
		$('span.unreleased').hide();
	}else{
		$('span.unreleased').show();
	}

	if(uncraft.is(':checked')){
		$('span.uncraftable').hide();
	}else{
		$('span.uncraftable').show();
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
