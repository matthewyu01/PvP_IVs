function calculate(baseatk, basedef, basesta, floor, minLvl, maxLvl, invalid, league, mon) {
  if (perfTiming) {
    var calculateT0 = performance.now();
    if (!(mon)) { mon = "";}
  }
  /* returns sorted list of all (up to 4096) combinations indexed by statProd + CP */
  /*console.log("calculate: Received: baseatk="+baseatk+" basedef="+basedef+" basesta="+basesta+" league="+league+" floor="+floor+" minLvl="+minLvl);*/
  /* Each item stored by statProd.CP */
  /* Rank definition: { "12613615.1500": { "IVs": {"A":14, "D":14, "S":14, "star": "3*"}, "base": {"A":145, "D":105, "S":115}, "battle": {"A":145, "D":105, "S":115}, "L":25}, */
  var ranks = [], invalids = [];
  var maxAtk = {value:0,aIV:0,dIV:0,sIV:0,sp:0};
  var maxDef = {value:0,aIV:0,dIV:0,sIV:0,sp:0};
  var maxHP = {value:0,aIV:0,dIV:0,sIV:0,sp:0};
  var minAtk = {value:1000,aIV:0,dIV:0,sIV:0,sp:0};
  var minDef = {value:1000,aIV:0,dIV:0,sIV:0,sp:0};
  var minHP = {value:1000,aIV:0,dIV:0,sIV:0,sp:0};
  var minRankLvl = 100;
  var maxRankLvl = 0;
  var numRanks = 0;
  
  /* account for half-level CPMs (40-1)*2 = 78 */
  minLvl = Math.max(0, (minLvl - 1) * 2); /* use half-levels */
  maxLvl = Math.max(0, (maxLvl - 1) * 2); /* use half-levels */
  
  for(var atk=floor/1;atk<=15;atk++){
    for(var def=floor/1;def<=15;def++){
      for(var sta=floor/1;sta<=15;sta++){
        for( var level = maxLvl; level >= minLvl; level-- ) {
          var cp = Math.max(10, Math.floor((baseatk + atk) * Math.sqrt(basedef + def) * Math.sqrt(basesta + sta) * cpm[level] * cpm[level] / 10));
    		  if ((league) && (cp > league)) {
    		    if ((level == minLvl) && (invalid)) {
    		      invalids.push({"A":atk, "D":def, "S":sta, "cp":cp});
    		    }
    		    continue; /* keep searching for level */
    		  }
    		  
    		  var aSt = (baseatk + atk)*cpm[level];
    		  var dSt = (basedef + def)*cpm[level];
    		  var sSt = Math.floor((basesta + sta)*cpm[level]);
    		  var statProd = Math.round(aSt * dSt * sSt);
    		  /* update maxStats if necessary */
    		  if ((maxAtk.value < aSt) || ((maxAtk.sp < statProd) && (maxAtk.value <= aSt))) {
    		    maxAtk.value = aSt;maxAtk.aIV = atk;maxAtk.dIV = def;maxAtk.sIV = sta;maxAtk.sp = statProd;}
    		  if ((maxDef.value < dSt) || ((maxDef.sp < statProd) && (maxDef.value <= dSt))) {
    		    maxDef.value = dSt;maxDef.aIV = atk;maxDef.dIV = def;maxDef.sIV = sta;maxDef.sp = statProd;}
    		  if ((maxHP.value < sSt) || ((maxHP.sp < statProd) && (maxHP.value <= sSt))) {
    		    maxHP.value = sSt;maxHP.aIV = atk;maxHP.dIV = def;maxHP.sIV = sta;maxHP.sp = statProd;}
    		  if (level/1 > maxRankLvl/1) {maxRankLvl = level;}
    		  /* update minStats if necessary */
    		  if ((minAtk.value > aSt) || ((minAtk.sp < statProd) && (minAtk.value >= aSt))) {
    		    minAtk.value = aSt;minAtk.aIV = atk;minAtk.dIV = def;minAtk.sIV = sta;minAtk.sp = statProd;}
    		  if ((minDef.value > dSt) || ((minDef.sp < statProd) && (minDef.value >= dSt))) {
    		    minDef.value = dSt;minDef.aIV = atk;minDef.dIV = def;minDef.sIV = sta;minDef.sp = statProd;}
    		  if ((minHP.value > sSt) || ((minHP.sp < statProd) && (minHP.value >= sSt))) {
    		    minHP.value = sSt;minHP.aIV = atk;minHP.dIV = def;minHP.sIV = sta;minHP.sp = statProd;}
    		  if (level/1 < minRankLvl/1) {minRankLvl = level;}
    		  
    		  var IVsum = atk/1 + def/1 + sta/1;
    		  var Star = "NA";
          if (IVsum<23){Star="0*";}else if(IVsum<30){Star="1*";}else if (IVsum<37){Star="2*";}else if(IVsum<45){Star="3*";}else{Star="4*";}
    		  level = level/2 + 1;
    		  
    		  /* store as arrays to prevent hash collisions from dropping entires */
    		  /* Tie Breaking Order: 1)StatProd -> 2)AtkStat -> 3)HPval -> 4)finalCP -> 5)StaIV -> 6)ERROR */
    		  var newIndex = statProd+"."+Math.round(100000*aSt);
    		  if (!(newIndex in ranks)) {
    		    ranks[newIndex] = [{ "IVs": {"A":atk, "D":def, "S":sta, "star":Star}, "battle":{"A":aSt, "D":dSt, "S":sSt}, "L":level, "CP":cp}];
    		  } else {
    		    var i;
    		    var ranksLen = ranks[newIndex].length;
    		    for (i=0; i<ranksLen; i++) {
    		      if (sSt > ranks[newIndex][i].battle.S) {
    		        break;
    		      } else if (sSt == ranks[newIndex][i].battle.S) {
    		        if (cp > ranks[newIndex][i].CP) {
    		          break;
    		        } else if (cp == ranks[newIndex][i].CP) {
    		          if (sta > ranks[newIndex][i].IVs.S) {
    		            /*console.log("Used 5th tie breaker (Stamina IV) for newIndex("+newIndex+"):"+JSON.stringify(ranks[newIndex]));*/
    		            break;
    		          } else if (sta == ranks[newIndex][i].IVs.S) {
    		            console.log("Need 6th tie breaker for newIndex("+newIndex+"):"+JSON.stringify(ranks[newIndex]));
    		          }
    		        }
    		      }
    		    }
    		    ranks[newIndex].splice(i, 0, { "IVs": {"A":atk, "D":def, "S":sta, "star":Star}, "battle":{"A":aSt, "D":dSt, "S":sSt}, "L":level, "CP":cp});
    		  }
    		  numRanks = numRanks + 1;
    		  break; /* stop evaluating this IV combination */
        }
      }
    }
  }
  
  /* sort by statProd+CP before returning */
  if (perfTiming) {var calculateTb = performance.now();/*console.log("calculate: Building took "+(calculateTb-calculateT0).toFixed(1)+"ms");*/}
  const sorted = {};
  Object.keys(ranks).sort(function(a, b){return b-a;}).forEach(function(key) {sorted[key] = ranks[key];});
  if (perfTiming) {var calculateTs = performance.now();/*console.log("calculate: Sorting took "+(calculateTs-calculateTb).toFixed(1)+"ms");*/}
  
  /* add max stats to object */
  sorted.maxAtk = maxAtk;
  sorted.maxDef = maxDef;
  sorted.maxHP = maxHP;
  sorted.minAtk = minAtk;
  sorted.minDef = minDef;
  sorted.minHP = minHP;
  sorted.minLvl = 1+(minRankLvl/2);
  sorted.maxLvl = 1+(maxRankLvl/2);
  sorted.numRanks = numRanks;
  sorted.invalids = invalids;
  
  /* console.log("calculate output:"+JSON.stringify(sorted, null, 2)); */
  if (perfTiming) {var calculateT1 = performance.now();
  console.log(mon+" calculate: "+(calculateT1-calculateT0).toFixed(1)+"ms (Build "+(calculateTb-calculateT0).toFixed(1)+"ms + Sort "+(calculateTs-calculateTb).toFixed(1)+"ms) for "+numRanks+" ranks.");}
  return sorted;
}