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
				S2 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < HG1[0].length; i++){
					S2 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + HG1[0][i][2] + "' target='_blank'>" +  HG1[0][i][0] + "</a></span><span class='DollTime'>" + HG1[0][i][1] + "</span></li>");	
				}
				S2 += "</ul>";

				S3 += "<td><ul>"; 
				S3 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < HG1[1].length; i++){
					S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + HG1[1][i][2] + "' target='_blank'>" + HG1[1][i][0] + "</a></span><span class='DollTime'>" + HG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>"; 
				S4 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < HG1[2].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + HG1[2][i][2] + "' target='_blank'>" + HG1[2][i][0] + "</a></span><span class='DollTime'>" + HG1[2][i][1] + "</span></li>");
				}
				S4 +="";
				S4 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
				for(i = 0; i < HG2[0].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + HG2[0][i][2] + "' target='_blank'>" + HG2[0][i][0] + "</a></span><span class='DollTime'>" + HG2[0][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>"; 
				S5 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < HG1[3].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + HG1[3][i][2] + "' target='_blank'>" + HG1[3][i][0] + "</a></span><span class='DollTime'>" + HG1[3][i][1] + "</span></li>");
				}
				S5 +="";
				S5 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
				for(i = 0; i < HG2[1].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + HG2[1][i][2] + "' target='_blank'>" + HG2[1][i][0] + "</a></span><span class='DollTime'>" + HG2[1][i][1] + "</span></li>");
				}
				S5 += "</ul>";

			}else{
				S2 += "<td><ul>"; 
				S2 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < HG1[0].length; i++){
					S2 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + HG1[0][i][2] + "' target='_blank'>" + HG1[0][i][0] + "</a></span><span class='DollTime'>" + HG1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>"; 
				S3 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < HG1[1].length; i++){
					S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + HG1[1][i][2] + "' target='_blank'>" + HG1[1][i][0] + "</a></span><span class='DollTime'>" + HG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>"; 
				S4 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < HG1[2].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + HG1[2][i][2] + "' target='_blank'>" + HG1[2][i][0] + "</a></span><span class='DollTime'>" + HG1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>"; 
				S5 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < HG1[3].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + HG1[3][i][2] + "' target='_blank'>" + HG1[3][i][0] + "</a></span><span class='DollTime'>" + HG1[3][i][1] + "</span></li>");
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
				S2 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
			for(i = 0; i < SMG1[0].length; i++){
				S2 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG1[0][i][2] + "' target='_blank'>" + SMG1[0][i][0] + "</a></span><span class='DollTime'>" + SMG1[0][i][1] + "</span></li>");
			}
			S2 += "</ul>";

			S3 += "<td><ul>"; 
				S3 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
			for(i = 0; i < SMG1[1].length; i++){
				S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG1[1][i][2] + "' target='_blank'>" + SMG1[1][i][0] + "</a></span><span class='DollTime'>" + SMG1[1][i][1] + "</span></li>");
			}
			S3 +="";
				S3 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
			for(i = 0; i < SMG2[0].length; i++){
				S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG2[0][i][2] + "' target='_blank'>" + SMG2[0][i][0] + "</a></span><span class='DollTime'>" + SMG2[0][i][1] + "</span></li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>"; 
				S4 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
			for(i = 0; i < SMG1[2].length; i++){
				S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG1[2][i][2] + "' target='_blank'>" + SMG1[2][i][0] + "</a></span><span class='DollTime'>" + SMG1[2][i][1] + "</span></li>");
			}
			S4 +="";
				S4 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
			for(i = 0; i < SMG2[1].length; i++){
				S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG2[1][i][2] + "' target='_blank'>" + SMG2[1][i][0] + "</a></span><span class='DollTime'>" + SMG2[1][i][1] + "</span></li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>"; 
				S5 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
			for(i = 0; i < SMG1[3].length; i++){
				S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG1[3][i][2] + "' target='_blank'>" + SMG1[3][i][0] + "</a></span><span class='DollTime'>" + SMG1[3][i][1] + "</span></li>");
			}
			S5 +="";
				S5 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
			for(i = 0; i < SMG2[2].length; i++){
				S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG2[2][i][2] + "' target='_blank'>" + SMG2[2][i][0] + "</a></span><span class='DollTime'>" + SMG2[2][i][1] + "</span></li>");
			}
			S5 += "</ul>";

		}else{
			S2 += "<td><ul>"; 
				S2 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
			for(i = 0; i < SMG1[0].length; i++){
				S2 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG1[0][i][2] + "' target='_blank'>" + SMG1[0][i][0] + "</a></span><span class='DollTime'>" + SMG1[0][i][1] + "</span></li>");
			}
			S2 += "</ul>";

			S3 += "<td><ul>"; 
				S3 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
			for(i = 0; i < SMG1[1].length; i++){
				S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG1[1][i][2] + "' target='_blank'>" + SMG1[1][i][0] + "</a></span><span class='DollTime'>" + SMG1[1][i][1] + "</span></li>");
			}
			S3 += "</ul>";

			S4 += "<td><ul>"; 
				S4 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
			for(i = 0; i < SMG1[2].length; i++){
				S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG1[2][i][2] + "' target='_blank'>" + SMG1[2][i][0] + "</a></span><span class='DollTime'>" + SMG1[2][i][1] + "</span></li>");
			}
			S4 += "</ul>";

			S5 += "<td><ul>"; 
				S5 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
			for(i = 0; i < SMG1[3].length; i++){
				S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + SMG1[3][i][2] + "' target='_blank'>" + SMG1[3][i][0] + "</a></span><span class='DollTime'>" + SMG1[3][i][1] + "</span></li>");
			}
			S5 += "</ul>";
		}

		//check AR
		if(sum >= 800){
			if(ammo >= 400 & rations >= 400){
				S2 += "<td><ul>"; 
				S2 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < AR1[0].length; i++){
					S2 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + AR1[0][i][2] + "' target='_blank'>" + AR1[0][i][0] + "</a></span><span class='DollTime'>" + AR1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>"; 
				S3 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < AR1[1].length; i++){
					S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + AR1[1][i][2] + "' target='_blank'>" + AR1[1][i][0] + "</a></span><span class='DollTime'>" + AR1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>"; 
				S4 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < AR1[2].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + AR1[2][i][2] + "' target='_blank'>" + AR1[2][i][0] + "</a></span><span class='DollTime'>" + AR1[2][i][1] + "</span></li>");
				}
				S4 +="";
				S4 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
				for(i = 0; i < AR2[0].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + AR2[0][i][2] + "' target='_blank'>" + AR2[0][i][0] + "</a></span><span class='DollTime'>" + AR2[0][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>"; 
				S5 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < AR1[3].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + AR1[3][i][2] + "' target='_blank'>" + AR1[3][i][0] + "</a></span><span class='DollTime'>" + AR1[3][i][1] + "</span></li>");
				}
				S5 +="";
				S5 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
				for(i = 0; i < AR2[1].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + AR2[1][i][2] + "' target='_blank'>" + AR2[1][i][0] + "</a></span><span class='DollTime'>" + AR2[1][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>"; 
				S2 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < AR1[0].length; i++){
					S2 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + AR1[0][i][2] + "' target='_blank'>" + AR1[0][i][0] + "</a></span><span class='DollTime'>" + AR1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>"; 
				S3 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < AR1[1].length; i++){
					S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + AR1[1][i][2] + "' target='_blank'>" + AR1[1][i][0] + "</a></span><span class='DollTime'>" + AR1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>"; 
				S4 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < AR1[2].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + AR1[2][i][2] + "' target='_blank'>" + AR1[2][i][0] + "</a></span><span class='DollTime'>" + AR1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>"; 
				S5 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < AR1[3].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + AR1[3][i][2] + "' target='_blank'>" + AR1[3][i][0] + "</a></span><span class='DollTime'>" + AR1[3][i][1] + "</span></li>");
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
				S2 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < RF1[0].length; i++){
					S2 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF1[0][i][2] + "' target='_blank'>" + RF1[0][i][0] + "</a></span><span class='DollTime'>" + RF1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>"; 
				S3 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < RF1[1].length; i++){
					S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF1[1][i][2] + "' target='_blank'>" + RF1[1][i][0] + "</a></span><span class='DollTime'>" + RF1[1][i][1] + "</span></li>");
				}
				S3 +="";
				S3 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
				for(i = 0; i < RF2[0].length; i++){
					S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF2[0][i][2] + "' target='_blank'>" + RF2[0][i][0] + "</a></span><span class='DollTime'>" + RF2[0][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>"; 
				S4 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < RF1[2].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF1[2][i][2] + "' target='_blank'>" + RF1[2][i][0] + "</a></span><span class='DollTime'>" + RF1[2][i][1] + "</span></li>");
				}
				S4 +="";
				S4 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
				for(i = 0; i < RF2[1].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF2[1][i][2] + "' target='_blank'>" + RF2[1][i][0] + "</a></span><span class='DollTime'>" + RF2[1][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>"; 
				S5 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < RF1[3].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF1[3][i][2] + "' target='_blank'>" + RF1[3][i][0] + "</a></span><span class='DollTime'>" + RF1[3][i][1] + "</span></li>");
				}
				S5 +="";
				S5 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
				for(i = 0; i < RF2[2].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF2[2][i][2] + "' target='_blank'>" + RF2[2][i][0] + "</a></span><span class='DollTime'>" + RF2[2][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>"; 
				S2 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < RF1[0].length; i++){
					S2 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF1[0][i][2] + "' target='_blank'>" + RF1[0][i][0] + "</a></span><span class='DollTime'>" + RF1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>"; 
				S3 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < RF1[1].length; i++){
					S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF1[1][i][2] + "' target='_blank'>" + RF1[1][i][0] + "</a></span><span class='DollTime'>" + RF1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>"; 
				S4 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < RF1[2].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF1[2][i][2] + "' target='_blank'>" + RF1[2][i][0] + "</a></span><span class='DollTime'>" + RF1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>"; 
				S5 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < RF1[3].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + RF1[3][i][2] + "' target='_blank'>" + RF1[3][i][0] + "</a></span><span class='DollTime'>" + RF1[3][i][1] + "</span></li>");
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
				S2 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < MG1[0].length; i++){
					S2 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + MG1[0][i][2] + "' target='_blank'>" + MG1[0][i][0] + "</a></span><span class='DollTime'>" + MG1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>"; 
				S3 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < MG1[1].length; i++){
					S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + MG1[1][i][2] + "' target='_blank'>" + MG1[1][i][0] + "</a></span><span class='DollTime'>" + MG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>"; 
				S4 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < MG1[2].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + MG1[2][i][2] + "' target='_blank'>" + MG1[2][i][0] + "</a></span><span class='DollTime'>" + MG1[2][i][1] + "</span></li>");
				}
				S4 +="";
				S4 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
				for(i = 0; i < MG2[0].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + MG2[0][i][2] + "' target='_blank'>" + MG2[0][i][0] + "</a></span><span class='DollTime'>" + MG2[0][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>"; 
				S5 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < MG1[3].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + MG1[3][i][2] + "' target='_blank'>" + MG1[3][i][0] + "</a></span><span class='DollTime'>" + MG1[3][i][1] + "</span></li>");
				}
				S5 +="";
				S5 += "<li class='setTitle'><span class='setTitle'>Set 2</span></li>";
				for(i = 0; i < MG2[1].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + MG2[1][i][2] + "' target='_blank'>" + MG2[1][i][0] + "</a></span><span class='DollTime'>" + MG2[1][i][1] + "</span></li>");
				}
				S5 += "</ul>";
			}else{
				S2 += "<td><ul>"; 
				S2 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < MG1[0].length; i++){
					S2 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + MG1[0][i][2] + "' target='_blank'>" + MG1[0][i][0] + "</a></span><span class='DollTime'>" + MG1[0][i][1] + "</span></li>");
				}
				S2 += "</ul>";

				S3 += "<td><ul>"; 
				S3 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < MG1[1].length; i++){
					S3 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + MG1[1][i][2] + "' target='_blank'>" + MG1[1][i][0] + "</a></span><span class='DollTime'>" + MG1[1][i][1] + "</span></li>");
				}
				S3 += "</ul>";

				S4 += "<td><ul>"; 
				S4 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < MG1[2].length; i++){
					S4 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + MG1[2][i][2] + "' target='_blank'>" + MG1[2][i][0] + "</a></span><span class='DollTime'>" + MG1[2][i][1] + "</span></li>");
				}
				S4 += "</ul>";

				S5 += "<td><ul>"; 
				S5 += "<li class='setTitle'><span class='setTitle'>Set 1</span></li>";
				for(i = 0; i < MG1[3].length; i++){
					S5 += ("<li><span class='DollName'><a href='https://en.gfwiki.com/wiki/" + MG1[3][i][2] + "' target='_blank'>" + MG1[3][i][0] + "</a></span><span class='DollTime'>" + MG1[3][i][1] + "</span></li>");
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
