//Exercise 5
//Model a reasonably simplified airstrip, and put there your aircraft model.

// AIRSTRIP 
	airstripL = 50;
	var grassR = SIMPLEX_GRID ([[0,airstripL],[0,2],[0,4]]);
	DRAW ( COLOR ([65/255,110/255,50/255]) (T ([0,1,2])([-20,0,-15])(grassR) ) );
	var airstrip = SIMPLEX_GRID ([[0,airstripL],[0,0.05],[-4,22]]);
	DRAW ( COLOR ([122/255,124/255,122/255]) (T ([0,1,2])([-20,0,-15])(airstrip) ) );
	var grassL = SIMPLEX_GRID ([[0,airstripL],[0,2],[-26,4]]);
	DRAW ( COLOR ([65/255,110/255,50/255]) (T ([0,1,2])([-20,0,-15])(grassL) ) );
	var dashedLine = SIMPLEX_GRID ([[0,1],[-0.05,0.05],[-16,0.3]]);
	for (var i = 0; i < airstripL/2; i++) {
		DRAW ( COLOR ([1,1,1]) (T ([0,1,2])([-(20-i*(2)),0,-15])(dashedLine) ) );
		};


var drawAirplane = function (){
// FUSELAGE
  // Part 1
	// fuselage part1 structure
		var fuselage_controls1 = [[4,2.5,0],[4,2.5,-1],[4,5,-5],[4,7.5,-1],[4,7.5,0]];
		var fuselage_c1 = BEZIER(S0)(fuselage_controls1);

		var fuselage_controls2 = [[4,2.5,0],[4,2.5,1],[4,5,5],[4,7.5,1],[4,7.5,0]];
		var fuselage_c2 = BEZIER(S0)(fuselage_controls2);

		var fuselage_controls3 = fuselage_controls1.map(function(p){return [p[0]+4, p[1]-1, p[2]]});
		var fuselage_c3 = BEZIER(S0)(fuselage_controls3);

		var fuselage_controls4 = fuselage_controls2.map(function(p){return [p[0]+4, p[1]-1, p[2]]});
		var fuselage_c4 = BEZIER(S0)(fuselage_controls4);

		var fuselage_controls5 = [[14,2,0],[14,2,-0.2],[14,2.5,-0.5],[14,3,-0.2],[14,2.5,0]];
		var fuselage_c5 = BEZIER(S0)(fuselage_controls5);

		var fuselage_controls6 = [[14,2,0],[14,2,0.2],[14,2.5,0.5],[14,3,0.2],[14,2.5,0]];
		var fuselage_c6 = BEZIER(S0)(fuselage_controls6);

	// fuselage part1 surface
		var fuselage_s1 = BEZIER(S1)([fuselage_c1, fuselage_c3, fuselage_c5]);
		var fuselage_s2 = BEZIER(S1)([fuselage_c2, fuselage_c4, fuselage_c6]);

	// fuselage part1 volume
		var fuselage_domain3 = DOMAIN([[0,1],[0,1],[0,1]])([8,15,15]);
		var fuselage_v = BEZIER(S2)([fuselage_s1, fuselage_s2]);
		var fuselage_volume = MAP(fuselage_v)(fuselage_domain3);
		DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_volume));


  // Part 2
	// fuselage part2 structure ---> space for pilot
		var fuselage_controls201 = [[3,2.75,0],[3,2.75,-1],[3,5.25,-5],[3,7.75,-1],[3,7.75,0]];
		var fuselage_c201 = BEZIER(S0)(fuselage_controls201);
	
		var fuselage_controls202 = [[3,2.75,0],[3,2.75,1],[3,5.25,5],[3,7.75,1],[3,7.75,0]];
		var fuselage_c202 = BEZIER(S0)(fuselage_controls202);

		var fuselage_controls203 = fuselage_controls201.map(function(p){return [p[0]+0.3, p[1]-0.3/4, p[2]]});
		var fuselage_c203 = BEZIER(S0)(fuselage_controls203);

		var fuselage_controls204 = fuselage_controls202.map(function(p){return [p[0]+0.3, p[1]-0.3/4, p[2]]});
		var fuselage_c204 = BEZIER(S0)(fuselage_controls204);

		var fuselage_controls205 = fuselage_controls201.map(function(p){return [p[0]+0.7, p[1]-0.7/4, p[2]]});
		var fuselage_c205 = BEZIER(S0)(fuselage_controls205);

		var fuselage_controls206 = fuselage_controls202.map(function(p){return [p[0]+0.7, p[1]-0.7/4, p[2]]});
		var fuselage_c206 = BEZIER(S0)(fuselage_controls206);

		var fuselage_controls207 = fuselage_controls201.map(function(p){return [p[0]+1, p[1]-1/4, p[2]]});
		var fuselage_c207 = BEZIER(S0)(fuselage_controls207);

		var fuselage_controls208 = fuselage_controls202.map(function(p){return [p[0]+1, p[1]-1/4, p[2]]});
		var fuselage_c208 = BEZIER(S0)(fuselage_controls208);

		var fuselage_controls209 = [[3.3,2.75-0.3/4,0],[3.3,2.75-0.3/4,-1],[3.3,5.25-0.3/4,-5],[3.3,7.75-0.3/4,-1],[3.3,7.5-0.3/4,-0.3]];
		var fuselage_c209 = BEZIER(S0)(fuselage_controls209);

		var fuselage_controls210 = [[3.3,2.75-0.3/4,0],[3.3,2.75-0.3/4,1],[3.3,5.25-0.3/4,5],[3.3,7.75-0.3/4,1],[3.3,7.5-0.3/4-0.3/4,0.3]];
		var fuselage_c210 = BEZIER(S0)(fuselage_controls210);

		var fuselage_controls211 = fuselage_controls209.map(function(p){return [p[0]+0.4, p[1]-0.4/4, p[2]]});
		var fuselage_c211 = BEZIER(S0)(fuselage_controls211);

		var fuselage_controls212 = fuselage_controls210.map(function(p){return [p[0]+0.4, p[1]-0.4/4, p[2]]});
		var fuselage_c212 = BEZIER(S0)(fuselage_controls212);

	// fuselage part2 surface
		var fuselage_domain2 = DOMAIN([[0,1],[0,1]])([8,20]);
		var fuselage_s21 = BEZIER(S1)([fuselage_c201, fuselage_c203]);
		var fuselage_s22 = BEZIER(S1)([fuselage_c202, fuselage_c204]);
		var fuselage_s23 = BEZIER(S1)([fuselage_c205, fuselage_c207]);
		var fuselage_s24 = BEZIER(S1)([fuselage_c206, fuselage_c208]);
		var fuselage_s25 = BEZIER(S1)([fuselage_c209, fuselage_c211]);
		var fuselage_s26 = BEZIER(S1)([fuselage_c210, fuselage_c212]);
		var fuselage_surf25 = MAP(fuselage_s25)(fuselage_domain2);
		var fuselage_surf26 = MAP(fuselage_s26)(fuselage_domain2);

		DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf25));
		DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_surf26));

	// fuselage part2 volume
		var fuselage_domain3 = DOMAIN([[0,1],[0,1],[0,1]])([8,15,15]);
		var fuselage_v21 = BEZIER(S2)([fuselage_s21, fuselage_s22]);
		var fuselage_v22 = BEZIER(S2)([fuselage_s23, fuselage_s24]);
		var fuselage_volume21 = MAP(fuselage_v21)(fuselage_domain3);
		var fuselage_volume22 = MAP(fuselage_v22)(fuselage_domain3);
		DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_volume21));
		DRAW (COLOR ([91/255, 51/255, 45/255]) (fuselage_volume22));


  // Part 3
	// fuselage part3 structure ---> space for engine
		var fuselage_controls31 = [[2.1,2.75+0.9/4,0],[2.1,2.75+0.9/4,-1],[2.1,5.25+0.9/4,-5],[2.1,7.75+0.9/4,-1],[2.1,7.75+0.9/4,0]];
		var fuselage_c31 = BEZIER(S0)(fuselage_controls31);

		var fuselage_controls32 = [[2.1,2.75+0.9/4,0],[2.1,2.75+0.9/4,1],[2.1,5.25+0.9/4,5],[2.1,7.75+0.9/4,1],[2.1,7.75+0.9/4,0]];
		var fuselage_c32 = BEZIER(S0)(fuselage_controls32);

		var fuselage_controls33 = fuselage_controls31.map(function(p){return [p[0]+0.9, p[1]-0.9/4, p[2]]});
		var fuselage_c33 = BEZIER(S0)(fuselage_controls33);

		var fuselage_controls34 = fuselage_controls32.map(function(p){return [p[0]+0.9, p[1]-0.9/4, p[2]]});
		var fuselage_c34 = BEZIER(S0)(fuselage_controls34);

		var fuselage_controls35 = [[2,3.25,0],[2,3.25,-1],[2,5.5,-4.5],[2,7.75,-1],[2,7.75,0]];
		var fuselage_c35 = BEZIER(S0)(fuselage_controls35);

		var fuselage_controls36 = [[2,3.25,0],[2,3.25,1],[2,5.5,4.5],[2,7.75,1],[2,7.75,0]];
		var fuselage_c36 = BEZIER(S0)(fuselage_controls36);

	// fuselage part3 surface
		var fuselage_s31 = BEZIER(S1)([fuselage_c35, fuselage_c31, fuselage_c33]);
		var fuselage_s32 = BEZIER(S1)([fuselage_c36, fuselage_c32, fuselage_c34]);

	// fuselage part3 volume
		var fuselage_domain3 = DOMAIN([[0,1],[0,1],[0,1]])([30,10,10]);
		var fuselage_v3 = BEZIER(S2)([fuselage_s31, fuselage_s32]);
		var fuselage_volume3 = MAP(fuselage_v3)(fuselage_domain3);
		DRAW (COLOR ([146/255, 142/255, 140/255]) (fuselage_volume3));


  // Part 4
	// fuselage part4 structure ---> space for engine2
		var fuselage_controls41 = [[1.1,3.25+0.9/4,0],[1.1,3.25+0.9/4,-1],[1.1,5.5+0.9/4,-4.5],[1.1,7.75+0.9/4,-1],[1.1,7.75+0.9/4,0]];
		var fuselage_c41 = BEZIER(S0)(fuselage_controls41);

		var fuselage_controls42 = [[1.1,3.25+0.9/4,0],[1.1,3.25+0.9/4,1],[1.1,5.5+0.9/4,4.5],[1.1,7.75+0.9/4,1],[1.1,7.75+0.9/4,0]];
		var fuselage_c42 = BEZIER(S0)(fuselage_controls42);

		var fuselage_controls43 = fuselage_controls41.map(function(p){return [p[0]+0.9, p[1]-0.9/4, p[2]]});
		var fuselage_c43 = BEZIER(S0)(fuselage_controls43);

		var fuselage_controls44 = fuselage_controls42.map(function(p){return [p[0]+0.9, p[1]-0.9/4, p[2]]});
		var fuselage_c44 = BEZIER(S0)(fuselage_controls44);

		var fuselage_controls45 = [[1,3.75,0],[1,3.75,-1],[1,5.75,-4],[1,7.75,-1],[1,7.75,0]];
		var fuselage_c45 = BEZIER(S0)(fuselage_controls45);

		var fuselage_controls46 = [[1,3.75,0],[1,3.75,1],[1,5.75,4],[1,7.75,1],[1,7.75,0]];
		var fuselage_c46 = BEZIER(S0)(fuselage_controls46);

	// fuselage part4 surface
		var fuselage_s41 = BEZIER(S1)([fuselage_c45, fuselage_c41, fuselage_c43]);
		var fuselage_s42 = BEZIER(S1)([fuselage_c46, fuselage_c42, fuselage_c44]);

	// fuselage part4 volume
		var fuselage_domain4 = DOMAIN([[0,1],[0,1],[0,1]])([20,10,10]);
		var fuselage_v4 = BEZIER(S2)([fuselage_s41, fuselage_s42]);
		var fuselage_volume4 = MAP(fuselage_v4)(fuselage_domain4);
		DRAW (COLOR ([146/255, 142/255, 140/255]) (fuselage_volume4));
  

  // Front
  	// Front structure		
  		var front_controls1 = [[0,5.7,0],[0,5.7,-0.03],[0,5.75,-0.1],[0,5.8,-0.03],[0,5.8,0]];
		var front_c1 = BEZIER(S0)(front_controls1);

		var front_controls2 = [[0,5.7,0],[0,5.7,0.03],[0,5.75,0.1],[0,5.8,0.03],[0,5.8,0]];
		var front_c2 = BEZIER(S0)(front_controls2);

		var front_controls3 = [[0.9,3.7,0],[0.9,3.7,-1],[0.9,5.75,-4.5],[0.9,7.8,-1],[0.9,7.8,0]];
		var front_c3 = BEZIER(S0)(front_controls3);

		var front_controls4 = [[0.9,3.7,0],[0.9,3.7,1],[0.9,5.75,4.5],[0.9,7.8,1],[0.9,7.8,0]];
		var front_c4 = BEZIER(S0)(front_controls4);

		var front_controls5 = [[1,4.7,0],[1,4.7,-0.7],[1,5.75,-2.1],[1,6.8,-0.7],[1,6.8,0]];
		var front_c5 = BEZIER(S0)(front_controls5);

		var front_controls6 = [[1,4.7,0],[1,4.7,0.7],[1,5.75,2.1],[1,6.8,0.7],[1,6.8,0]];
		var front_c6 = BEZIER(S0)(front_controls6);

	// front surface
		var front_s1 = BEZIER(S1)([front_c1, front_c3, front_c5]);
		var front_s2 = BEZIER(S1)([front_c2, front_c4, front_c6]);

	// front volume
		var front_domain = DOMAIN([[0,1],[0,1],[0,1]])([20,10,10]);
		var front_v = BEZIER(S2)([front_s1, front_s2]);
		var front_volume = MAP(front_v)(front_domain);
		DRAW (COLOR ([146/255, 142/255, 140/255]) (front_volume));


  // Elix
  	//right elix
		var r_elix_controls1 = [[0.4,6,0],[0.2,4.7,-4.5],[0.6,6.3,-4.5],[0.4,5.4,0]];
		var r_elix_c1 = BEZIER(S0)(r_elix_controls1);

		var r_elix_controls2 = [[0.4,6,0],[0.4,5.4,0]];
		var r_elix_c2 = BEZIER(S0)(r_elix_controls2);

		var r_elix_controls3 = [[0.5,6,0],[0.3,4.7,-4.5],[0.7,6.3,-4.5],[0.5,5.4,0]];
		var r_elix_c3 = BEZIER(S0)(r_elix_controls3);

		var r_elix_controls4 = [[0.5,6,0],[0.5,5.4,0]];
		var r_elix_c4 = BEZIER(S0)(r_elix_controls4);

		var r_elix_s1 = BEZIER(S1)([r_elix_c1, r_elix_c2]);
		var r_elix_s2 = BEZIER(S1)([r_elix_c3, r_elix_c4]);
		
		var r_elix_domain = DOMAIN([[0,1],[0,1],[0,1]])([10,10,10]);
		var r_elix_v = BEZIER(S2)([r_elix_s1, r_elix_s2]);
		var r_elix_volume = MAP(r_elix_v)(r_elix_domain);
		DRAW (COLOR ([146/255, 142/255, 140/255]) (r_elix_volume));
		
	//left elix
		var l_elix_controls1 = [[0.4,6,0],[0.2,4.7,4.5],[0.6,6.3,4.5],[0.4,5.4,0]];
		var l_elix_c1 = BEZIER(S0)(l_elix_controls1);

		var l_elix_controls2 = [[0.4,6,0],[0.4,5.4,0]];
		var l_elix_c2 = BEZIER(S0)(l_elix_controls2);

		var l_elix_controls3 = [[0.5,6,0],[0.3,4.7,4.5],[0.7,6.3,4.5],[0.5,5.4,0]];
		var l_elix_c3 = BEZIER(S0)(l_elix_controls3);

		var l_elix_controls4 = [[0.5,6,0],[0.5,5.4,0]];
		var l_elix_c4 = BEZIER(S0)(l_elix_controls4);

		var l_elix_s1 = BEZIER(S1)([l_elix_c1, l_elix_c2]);
		var l_elix_s2 = BEZIER(S1)([l_elix_c3, l_elix_c4]);
		
		var l_elix_domain = DOMAIN([[0,1],[0,1],[0,1]])([10,10,10]);
		var l_elix_v = BEZIER(S2)([l_elix_s1, l_elix_s2]);
		var l_elix_volume = MAP(l_elix_v)(l_elix_domain);
		DRAW (COLOR ([146/255, 142/255, 140/255]) (l_elix_volume));	


// WINGS	
	var wing_domain = INTERVALS(1)(30);
	var wing_pCont0 = [[1.8,1,0],[0.4,1.4,0],[4,2.8,0],[6,0.85,0],[6.5,0.9,0],[6.7,1,0],[1.8,1,0]];
	var wing_pCont1 = [[1.2,1,0],[0.2,1.5,0],[4,2.8,0],[6,0.85,0],[6.5,0.9,0],[6.9,1,0],[7,1,0],[1.2,1,0]];
	var wing_pContCenter = [[1,1,0],[0,1.5,0],[4,2.8,0],[6,0.85,0],[6.5,0.9,0],[6.9,1,0],[7,1,0],[1,1,0]];
	var wing_pCont5 = [[1.2,1,0],[0.2,1.4,0],[4,2.5,0],[6,0.85,0],[6.5,0.9,0],[6.9,1,0],[7,1,0],[1.2,1,0]];
	var wing_pCont6 = [[1.4,1,0],[0.4,1.3,0],[4,2,0],[6,0.85,0],[6.5,0.9,0],[6.9,1,0],[7,1,0],[1.4,1,0]];
	var wing_pCont7 = [[1.6,1,0],[0.6,1.2,0],[4,1.5,0],[6,0.85,0],[6.5,0.9,0],[6.9,1,0],[7,1,0],[1.6,1,0]];
	var wing_pCont8 = [[1.9,1,0],[0.9,1.1,0],[4,1.3,0],[6,1,0],[6.5,1,0],[6.9,1,0],[7,1,0],[1.9,1,0]];
	var wing_pCont9 = [[2.3,1,0],[2,1.05,0],[4,1.2,0],[6,1,0],[8.5,1,0],[2.3,1,0]];
	var wing_pCont10 = [[2.8,1,0],[2,1.05,0],[4,1.1,0],[6,1,0],[7.3,1,0],[2.8,1,0]];
	var wing_pCont11 = [[3.5,1,0],[2,1.05,0],[8,1,0],[3.3,1,0]];
	var wing_pContEnd = [[4.3,1,0],[4.31,1,0]];

	// left wing structure
		var l_wing_p1 = wing_pCont1.map(function(p){return [p[0], p[1]+0.1, p[2]+1]});
		var l_wing_p2 = wing_pContCenter.map(function(p){return [p[0], p[1]+0.2, p[2]+2]});
		var l_wing_p3 = wing_pContCenter.map(function(p){return [p[0], p[1]+0.4, p[2]+4]});
		var l_wing_p4 = wing_pContCenter.map(function(p){return [p[0], p[1]+0.6, p[2]+6]});
		var l_wing_p5 = wing_pCont5.map(function(p){return [p[0], p[1]+0.7, p[2]+7]});
		var l_wing_p6 = wing_pCont6.map(function(p){return [p[0], p[1]+0.8, p[2]+8]});
		var l_wing_p7 = wing_pCont7.map(function(p){return [p[0], p[1]+0.9, p[2]+9]});
		var l_wing_p8 = wing_pCont8.map(function(p){return [p[0], p[1]+0.95, p[2]+9.5]});
		var l_wing_p9 = wing_pCont9.map(function(p){return [p[0], p[1]+1, p[2]+10]});
		var l_wing_p10 = wing_pCont10.map(function(p){return [p[0], p[1]+1.03, p[2]+10.3]});
		var l_wing_p11 = wing_pCont11.map(function(p){return [p[0], p[1]+1.06, p[2]+10.6]});
		var l_wing_pEnd = wing_pContEnd.map(function(p){return [p[0], p[1]+1.063, p[2]+10.63]});
	
		var l_wing_c = AA( BEZIER(S0)) ([wing_pCont0, l_wing_p1, l_wing_p2, l_wing_p3, l_wing_p4, l_wing_p5, l_wing_p6, l_wing_p7, l_wing_p8, l_wing_p9, l_wing_p10, l_wing_p11, l_wing_pEnd]);	

	// left wing surface
		var l_wing_domain2 = DOMAIN([[0,1],[0,1]])([50,50]);
		var l_wing_ps1 = [[1.8,1,0],[0.4,1.4,0],[4,2.8,0],[6,0.85,0],[6.5,0.9,0],[6.7,1,0],[1.8,1,0]];
		var l_wing_ps2 = [[1.8,1,0],[6.7,1,0],[1.8,1,0]];
		var l_wing_cs1 = BEZIER(S0)(l_wing_ps1);
		var l_wing_cs2 = BEZIER(S0)(l_wing_ps2);
		var l_wing_ts = BEZIER(S1)([l_wing_cs1, l_wing_cs2]);
		var l_wing_tsurf = MAP(l_wing_ts)(l_wing_domain2);
		//DRAW (COLOR ([91/255, 48/255, 43/255]) (l_wing_tsurf));
		var l_wing_s = BEZIER(S1)(l_wing_c);
		var l_wing_surf = MAP(l_wing_s)(l_wing_domain2);
		//DRAW (COLOR ([91/255, 51/255, 45/255]) (l_wing_surf));

	// Right wing structure
		var r_wing_p1 = wing_pCont1.map(function(p){return [p[0], p[1]+0.1, p[2]-1]});
		var r_wing_p2 = wing_pContCenter.map(function(p){return [p[0], p[1]+0.2, p[2]-2]});
		var r_wing_p3 = wing_pContCenter.map(function(p){return [p[0], p[1]+0.4, p[2]-4]});
		var r_wing_p4 = wing_pContCenter.map(function(p){return [p[0], p[1]+0.6, p[2]-6]});
		var r_wing_p5 = wing_pCont5.map(function(p){return [p[0], p[1]+0.7, p[2]-7]});
		var r_wing_p6 = wing_pCont6.map(function(p){return [p[0], p[1]+0.8, p[2]-8]});
		var r_wing_p7 = wing_pCont7.map(function(p){return [p[0], p[1]+0.9, p[2]-9]});
		var r_wing_p8 = wing_pCont8.map(function(p){return [p[0], p[1]+0.95, p[2]-9.5]});
		var r_wing_p9 = wing_pCont9.map(function(p){return [p[0], p[1]+1, p[2]-10]});
		var r_wing_p10 = wing_pCont10.map(function(p){return [p[0], p[1]+1.03, p[2]-10.3]});
		var r_wing_p11 = wing_pCont11.map(function(p){return [p[0], p[1]+1.06, p[2]-10.6]});
		var r_wing_pEnd = wing_pContEnd.map(function(p){return [p[0], p[1]+1.063, p[2]-10.63]});
	
		var r_wing_c = AA( BEZIER(S0)) ([wing_pCont0, r_wing_p1, r_wing_p2, r_wing_p3, r_wing_p4, r_wing_p5, r_wing_p6, r_wing_p7, r_wing_p8, r_wing_p9, r_wing_p10, r_wing_p11, r_wing_pEnd]);	

	// Right wing surface
		var r_wing_domain2 = DOMAIN([[0,1],[0,1]])([50,50]);
		var r_wing_ps1 = [[1.8,1,0],[0.4,1.4,0],[4,2.8,0],[6,0.85,0],[6.5,0.9,0],[6.7,1,0],[1.8,1,0]];
		var r_wing_ps2 = [[1.8,1,0],[6.7,1,0],[1.8,1,0]];
		var r_wing_cs1 = BEZIER(S0)(r_wing_ps1);
		var r_wing_cs2 = BEZIER(S0)(r_wing_ps2);
		var r_wing_ts = BEZIER(S1)([r_wing_cs1, r_wing_cs2]);
		var r_wing_tsurf = MAP(r_wing_ts)(r_wing_domain2);
		//DRAW (COLOR ([91/255, 48/255, 43/255]) (r_wing_tsurf));
		var r_wing_s = BEZIER(S1)(r_wing_c);
		var r_wing_surf = MAP(r_wing_s)(r_wing_domain2);
		//DRAW (COLOR ([91/255, 51/255, 45/255]) (r_wing_surf));

  // Placing wings
  	DRAW (COLOR ([91/255, 48/255, 43/255]) (T([0,1,2])([0.8,4,2])(l_wing_tsurf) ));
  	DRAW (COLOR ([91/255, 48/255, 43/255]) (T([0,1,2])([0.8,4,2])(l_wing_surf) ));
  	DRAW (COLOR ([91/255, 48/255, 43/255]) (T([0,1,2])([0.8,4,-2])(r_wing_tsurf) ));
  	DRAW (COLOR ([91/255, 48/255, 43/255]) (T([0,1,2])([0.8,4,-2])(r_wing_surf) ));


// STABILIZERS
  var posAirplane = 14.5;
  var hAirplane = 2.5;
  // Horizontal stabilizers
	// horizontal stabilizers structure
		var hStab_base0 = [[posAirplane,hAirplane,-2],[posAirplane-4,hAirplane+0.05,-2],[posAirplane-3,hAirplane+0.05,-2],[posAirplane-3,hAirplane+0.05,2],[posAirplane-4,hAirplane+0.05,2],[posAirplane,hAirplane,2]];
		var hStab_b0 = BEZIER(S0)(hStab_base0);
	
		var hStab_base1 = [[posAirplane,hAirplane,-2],[posAirplane,hAirplane,2]];
		var hStab_b1 = BEZIER(S0)(hStab_base1);

		var hStab_base2 = [[posAirplane+0.05,hAirplane,0],[posAirplane+2,hAirplane-0.3,0],[posAirplane+1,hAirplane-0.3,0],[posAirplane+1,hAirplane-0.3,2],[posAirplane+2,hAirplane-0.3,2],[posAirplane+0.05,hAirplane,2]];
		var hStab_b2 = BEZIER(S0)(hStab_base2);

		var hStab_base3 = [[posAirplane+0.05,hAirplane,0],[posAirplane+0.05,hAirplane,2]];
		var hStab_b3 = BEZIER(S0)(hStab_base3);

		var hStab_base4 = [[posAirplane+0.05,hAirplane,-2],[posAirplane+2,hAirplane-0.3,-2],[posAirplane+1,hAirplane-0.3,-2],[posAirplane+1,hAirplane-0.3,0],[posAirplane+2,hAirplane-0.3,0],[posAirplane+0.05,hAirplane,0]];
		var hStab_b4 = BEZIER(S0)(hStab_base4);

		var hStab_base5 = [[posAirplane+0.05,hAirplane,-2],[posAirplane+0.05,hAirplane,0]];
		var hStab_b5 = BEZIER(S0)(hStab_base5);


	// horizontal stabilizers surface
		var hStab_domain2 = DOMAIN([[0,1],[0,1]])([20,20]);
		var hStab_s1 = BEZIER(S1)([hStab_b0, hStab_b1]);
		var hStab_s2 = BEZIER(S1)([hStab_b2, hStab_b3]);
		var hStab_s3 = BEZIER(S1)([hStab_b4, hStab_b5]);
		var hStab_surf1 = MAP(hStab_s1)(hStab_domain2);
		var hStab_surf2 = MAP(hStab_s2)(hStab_domain2);
		var hStab_surf3 = MAP(hStab_s3)(hStab_domain2);
		DRAW (COLOR ([91/255, 51/255, 45/255]) (hStab_surf1));
		DRAW (COLOR ([91/255, 51/255, 45/255]) (hStab_surf2));
		DRAW (COLOR ([91/255, 51/255, 45/255]) (hStab_surf3));

  // Vertical stabilizers
	// vertical stabilizers structure
		var vStab_base0 = [[posAirplane,hAirplane+1.5,0],[posAirplane-3,hAirplane+1.5,0],[posAirplane-3,hAirplane-0.5,0],[posAirplane-3,hAirplane,0],[posAirplane,hAirplane,0]];
		var vStab_b0 = BEZIER(S0)(vStab_base0);

		var vStab_base1 = [[posAirplane,hAirplane+1.5,0],[posAirplane,hAirplane,0]];
		var vStab_b1 = BEZIER(S0)(vStab_base1);

		var vStab_base2 = [[posAirplane+0.05,hAirplane+1.5,0],[posAirplane+1.5,hAirplane+0.75,-0.5],[posAirplane+0.05,hAirplane,0]];
		var vStab_b2 = BEZIER(S0)(vStab_base2);

		var vStab_base3 = [[posAirplane+0.05,hAirplane+1.5,0],[posAirplane+0.05,hAirplane,0]];
		var vStab_b3 = BEZIER(S0)(vStab_base3);

	// vertical stabilizers surface
		var vStab_domain2 = DOMAIN([[0,1],[0,1]])([20,20]);
		var vStab_s1 = BEZIER(S1)([vStab_b0, vStab_b1]);
		var vStab_s2 = BEZIER(S1)([vStab_b2, vStab_b3]);
		var vStab_surf1 = MAP(vStab_s1)(vStab_domain2);
		var vStab_surf2 = MAP(vStab_s2)(vStab_domain2);
		DRAW (COLOR ([91/255, 51/255, 45/255]) (vStab_surf1));
		DRAW (COLOR ([0/255, 69/255, 121/255]) (vStab_surf2));


// Wheels
	var wheel_controls1 = [[0.2,1,-1.4],[0.3,0.2,-1.4],[1.6,1,-1.4],[0.3,1.8,-1.4],[0.2,1,-1.4]];
	var wheel_c1 = BEZIER(S0)(wheel_controls1);

	var wheel_controls2 = [[0.1,1,-1.5],[0.2,0,-1.5],[2,1,-1.5],[0.2,2,-1.5],[0.1,1,-1.5]];
	var wheel_c2 = BEZIER(S0)(wheel_controls2);

	var wheel_controls3 = [[0.1,1,-1.6],[0.2,0,-1.6],[2,1,-1.6],[0.2,2,-1.6],[0.1,1,-1.6]];
	var wheel_c3 = BEZIER(S0)(wheel_controls3);

	var wheel_controls4 = [[0.2,1,-1.7],[0.3,0.2,-1.7],[1.6,1,-1.7],[0.3,1.8,-1.7],[0.2,1,-1.7]];
	var wheel_c4 = BEZIER(S0)(wheel_controls4);

	var wheel_domain2 = DOMAIN([[0,1],[0,1]])([20,20]);
	var wheel_s = BEZIER(S1)([wheel_c1, wheel_c2, wheel_c3, wheel_c4]);
	var wheel_surf = MAP(wheel_s)(wheel_domain2);
	DRAW (COLOR ([0, 0, 0]) (T([0,1,2])([1.5,0.5,0])( wheel_surf) ));

	DRAW( T([0,1,2])([0.48+1.5,1+0.5,-1.42])(DISK(0.29)(20)));
	DRAW( T([0,1,2])([0.48+1.5,1+0.5,-1.68])(DISK(0.29)(20)));

	var wheel2_surf = S([2])([-1])(wheel_surf);
	DRAW (COLOR ([0, 0, 0]) (T([0,1,2])([1.5,0.5,0])(wheel2_surf)));
	DRAW( T([0,1,2])([0.48+1.5,1+0.5,1.42])(DISK(0.29)(20)));
	DRAW( T([0,1,2])([0.48+1.5,1+0.5,1.68])(DISK(0.29)(20)));

	var linkWheels = SIMPLEX_GRID ([[-0.48-1.5,0.05],[-1-0.5,0.05],[0,3]]);
	DRAW (T([0,1,2])([0,0,-1.5])(linkWheels));

	var linkWheelsAirplane = SIMPLEX_GRID ([[-0.48-1.5,0.05],[-1-0.5,4],[-0.5,0.05]]);
	DRAW (T([0,1,2])([0,0,-1.5])(linkWheelsAirplane));

	var linkWheelsAirplane2 = SIMPLEX_GRID ([[-0.48-1.5,0.05],[-1-0.5,4],[-2.5,0.05]]);
	DRAW (T([0,1,2])([0,0,-1.5])(linkWheelsAirplane2));

};

drawAirplane();