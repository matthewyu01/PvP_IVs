var boxRewrd = [144,145,146,150,243,244,245,249,250,377,378,379,380,381,382,383,384,486,488];
/*480,481,482 are wild-spawning legendaries and 808,809 are wild-spawning mythicals*/
var raidOnly = [483,484,485,487,638,639,640,641,642,643,644,645,646,716,717,718,772,773,785,786,787,788,789,790,791,792,800,888,889,890,891,892,894,895,896,897,898];
var boxMyth = [151,251,385,489,490,492,493,494,647,648,719,720,721,801,802,807,893];
var raidMyth = [386,491,649];

var pokeList = [
  {
    'label': 'Bulbasaur',
    'value': '1b,118,111,128,2,3&!mega,3&mega'
  },
  {
    'label': 'Ivysaur',
    'value': '2,151,143,155,1b,3&!mega,3&mega'
  },
  {
    'label': 'Venusaur',
    'value': '3&!mega,198,189,190,1b,2,3&mega'
  },
  {
    'label': 'Mega_Venusaur',
    'value': '3&mega,241,246,190,1b,2,3&!mega'
  },
  {
    'label': 'Charmander',
    'value': '4b,116,93,118,5,6&!mega,6&megaX,6&megaY'
  },
  {
    'label': 'Charmeleon',
    'value': '5,158,126,151,4b,6&!mega,6&megaX,6&megaY'
  },
  {
    'label': 'Charizard',
    'value': '6&!mega,223,173,186,4b,5,6&megaX,6&megaY'
  },
  {
    'label': 'Mega_Charizard_X',
    'value': '6&megaX,273,213,186,4b,5,6&!mega,6&megaY'
  },
  {
    'label': 'Mega_Charizard_Y',
    'value': '6&megaY,319,212,186,4b,5,6&!mega,6&megaX'
  },
  {
    'label': 'Squirtle',
    'value': '7b,94,121,127,8,9&!mega,9&mega'
  },
  {
    'label': 'Wartortle',
    'value': '8,126,155,153,7b,9&!mega,9&mega'
  },
  {
    'label': 'Blastoise',
    'value': '9&!mega,171,207,188,7b,8,9&mega'
  },
  {
    'label': 'Mega_Blastoise',
    'value': '9&mega,264,237,188,7b,8,9&!mega'
  },
  {
    'label': 'Caterpie',
    'value': '10b,55,55,128,11,12'
  },
  {
    'label': 'Metapod',
    'value': '11,45,80,137,10b,12'
  },
  {
    'label': 'Butterfree',
    'value': '12,167,137,155,10b,11'
  },
  {
    'label': 'Weedle',
    'value': '13b,63,50,120,14,15&!mega,15&mega'
  },
  {
    'label': 'Kakuna',
    'value': '14,46,75,128,13b,15&!mega,15&mega'
  },
  {
    'label': 'Beedrill',
    'value': '15&!mega,169,130,163,13b,14,15&mega'
  },
  {
    'label': 'Mega_Beedrill',
    'value': '15&mega,303,148,163,13b,14,15&!mega'
  },
  {
    'label': 'Pidgey',
    'value': '16b,85,73,120,17,18&!mega,18&mega'
  },
  {
    'label': 'Pidgeotto',
    'value': '17,117,105,160,16b,18&!mega,18&mega'
  },
  {
    'label': 'Pidgeot',
    'value': '18&!mega,166,154,195,16b,17,18&mega'
  },
  {
    'label': 'Mega_Pidgeot',
    'value': '18&mega,280,175,195,16b,17,18&!mega'
  },
  {
    'label': 'Rattata',
    'value': '19b&!alola,103,70,102,20&!alola'
  },
  {
    'label': 'Rattata_Alola',
    'value': '19b&alola,103,70,102,20&alola'
  },
  {
    'label': 'Raticate',
    'value': '20&!alola,161,139,146,19b&!alola'
  },
  {
    'label': 'Raticate_Alola',
    'value': '20&alola,135,154,181,19b&alola'
  },
  {
    'label': 'Spearow',
    'value': '21b,112,60,120,22'
  },
  {
    'label': 'Fearow',
    'value': '22,182,133,163,21b'
  },
  {
    'label': 'Ekans',
    'value': '23b,110,97,111,24'
  },
  {
    'label': 'Arbok',
    'value': '24,167,153,155,23b'
  },
  {
    'label': 'Pikachu',
    'value': '25b,112,96,111,26&!alola,172&eggsonly'
  },
  {
    'label': 'Raichu',
    'value': '26&!alola,193,151,155,25b,172&eggsonly'
  },
  {
    'label': 'Raichu_Alola',
    'value': '26b&alola,201,154,155'
  },
  {
    'label': 'Sandshrew',
    'value': '27b&!alola,126,120,137,28&!alola'
  },
  {
    'label': 'Sandshrew_Alola',
    'value': '27b&alola,125,129,137,28&alola'
  },
  {
    'label': 'Sandslash',
    'value': '28&!alola,182,175,181,27b&!alola'
  },
  {
    'label': 'Sandslash_Alola',
    'value': '28&alola,177,195,181,27b&alola'
  },
  {
    'label': 'Nidoran_Female',
    'value': '29b,86,89,146,30,31'
  },
  {
    'label': 'Nidorina',
    'value': '30,117,120,172,29b,31'
  },
  {
    'label': 'Nidoqueen',
    'value': '31,180,173,207,29b,30'
  },
  {
    'label': 'Nidoran_Male',
    'value': '32b,105,76,130,33,34'
  },
  {
    'label': 'Nidorino',
    'value': '33,137,111,156,32b,34'
  },
  {
    'label': 'Nidoking',
    'value': '34,204,156,191,32b,33'
  },
  {
    'label': 'Clefairy',
    'value': '35b,107,108,172,36,173&eggsonly'
  },
  {
    'label': 'Clefable',
    'value': '36,178,162,216,35b,173&eggsonly'
  },
  {
    'label': 'Vulpix',
    'value': '37b&!alola,96,109,116,38&!alola'
  },
  {
    'label': 'Vulpix_Alola',
    'value': '37b&alola,96,109,116,38&alola'
  },
  {
    'label': 'Ninetales',
    'value': '38&!alola,169,190,177,37b&!alola'
  },
  {
    'label': 'Ninetales_Alola',
    'value': '38&alola,170,193,177,37b&alola'
  },
  {
    'label': 'Jigglypuff',
    'value': '39b,80,41,251,40,174&eggsonly'
  },
  {
    'label': 'Wigglytuff',
    'value': '40,156,90,295,39b,174&eggsonly'
  },
  {
    'label': 'Zubat',
    'value': '41b,83,73,120,42,169'
  },
  {
    'label': 'Golbat',
    'value': '42,161,150,181,41b,169'
  },
  {
    'label': 'Oddish',
    'value': '43b,131,112,128,44,45,182'
  },
  {
    'label': 'Gloom',
    'value': '44,153,136,155,43b,45,182'
  },
  {
    'label': 'Vileplume',
    'value': '45,202,167,181,43b,44,182'
  },
  {
    'label': 'Paras',
    'value': '46b,121,99,111,47'
  },
  {
    'label': 'Parasect',
    'value': '47,165,146,155,46b'
  },
  {
    'label': 'Venonat',
    'value': '48b,100,100,155,49'
  },
  {
    'label': 'Venomoth',
    'value': '49,179,143,172,48b'
  },
  {
    'label': 'Diglett',
    'value': '50b&!alola,109,78,67,51&!alola'
  },
  {
    'label': 'Diglett_Alola',
    'value': '50b&alola,108,81,67,51&alola'
  },
  {
    'label': 'Dugtrio',
    'value': '51&!alola,167,136,111,50b&!alola'
  },
  {
    'label': 'Dugtrio_Alola',
    'value': '51&alola,201,142,111,50b&alola'
  },
  {
    'label': 'Meowth',
    'value': '52b&!alola&!galar,92,78,120,53&!alola'
  },
  {
    'label': 'Meowth_Alola',
    'value': '52b&alola&!galar,99,78,120,53&alola'
  },
  {
    'label': 'Meowth_Galarian',
    'value': '52b&!alola&galar,115,92,137,863'
  },
  {
    'label': 'Persian',
    'value': '53&!alola,150,136,163,52b&!alola&!galar'
  },
  {
    'label': 'Persian_Alola',
    'value': '53&alola,158,136,163,52b&alola&!galar'
  },
  {
    'label': 'Psyduck',
    'value': '54b,122,95,137,55'
  },
  {
    'label': 'Golduck',
    'value': '55,191,162,190,54b'
  },
  {
    'label': 'Mankey',
    'value': '56b,148,82,120,57'
  },
  {
    'label': 'Primeape',
    'value': '57,207,138,163,56b'
  },
  {
    'label': 'Growlithe',
    'value': '58b,136,93,146,59'
  },
  {
    'label': 'Arcanine',
    'value': '59,227,166,207,58b'
  },
  {
    'label': 'Poliwag',
    'value': '60b,101,82,120,61,62,186'
  },
  {
    'label': 'Poliwhirl',
    'value': '61,130,123,163,60b,62,186'
  },
  {
    'label': 'Poliwrath',
    'value': '62,182,184,207,60b,61,186'
  },
  {
    'label': 'Abra',
    'value': '63b,195,82,93,64,65&!mega,65&mega'
  },
  {
    'label': 'Kadabra',
    'value': '64,232,117,120,63b,65&!mega,65&mega'
  },
  {
    'label': 'Alakazam',
    'value': '65&!mega,271,167,146,63b,64,65&mega'
  },
  {
    'label': 'Mega_Alakazam',
    'value': '65&mega,367,207,146,63b,64,65&!mega'
  },
  {
    'label': 'Machop',
    'value': '66b,137,82,172,67,68'
  },
  {
    'label': 'Machoke',
    'value': '67,177,125,190,66b,68'
  },
  {
    'label': 'Machamp',
    'value': '68,234,159,207,66b,67'
  },
  {
    'label': 'Bellsprout',
    'value': '69b,139,61,137,70,71'
  },
  {
    'label': 'Weepinbell',
    'value': '70,172,92,163,69b,71'
  },
  {
    'label': 'Victreebel',
    'value': '71,207,135,190,69b,70'
  },
  {
    'label': 'Tentacool',
    'value': '72b,97,149,120,73'
  },
  {
    'label': 'Tentacruel',
    'value': '73,166,209,190,72b'
  },
  {
    'label': 'Geodude',
    'value': '74b&!alola,132,132,120,75&!alola,76&!alola'
  },
  {
    'label': 'Geodude_Alola',
    'value': '74b&alola,132,132,120,75&alola,76&alola'
  },
  {
    'label': 'Graveler',
    'value': '75&!alola,164,164,146,74b&!alola,76&!alola'
  },
  {
    'label': 'Graveler_Alola',
    'value': '75&alola,164,164,146,74b&alola,76&alola'
  },
  {
    'label': 'Golem',
    'value': '76&!alola,211,198,190,74b&!alola,75&!alola'
  },
  {
    'label': 'Golem_Alola',
    'value': '76&alola,211,198,190,74b&alola,75&alola'
  },
  {
    'label': 'Ponyta',
    'value': '77b&!galar,170,127,137,78&!galar'
  },
  {
    'label': 'Ponyta_Galarian',
    'value': '77b&galar,170,127,137,78&galar'
  },
  {
    'label': 'Rapidash',
    'value': '78&!galar,207,162,163,77b&!galar'
  },
  {
    'label': 'Rapidash_Galarian',
    'value': '78&galar,207,162,163,77b&galar'
  },
  {
    'label': 'Slowpoke',
    'value': '79b&!galar,109,98,207,80&mega,80&!mega&!galar,199&!galar'
  },
  {
    'label': 'Slowpoke_Galarian',
    'value': '79b&galar,109,98,207,80&!mega&galar,199&galar'
  },
  {
    'label': 'Slowbro',
    'value': '80&!mega&!galar,177,180,216,79b&!galar,80&mega,199&!galar'
  },
  {
    'label': 'Slowbro_Galarian',
    'value': '80&!mega&galar,182,156,216,79b&galar,199&galar'
  },
  {
    'label': 'Mega_Slowbro',
    'value': '80&mega,224,259,216,79b&!galar,80&!mega&!galar'
  },
  {
    'label': 'Magnemite',
    'value': '81b,165,121,93,82,462'
  },
  {
    'label': 'Magneton',
    'value': '82,223,169,137,81b,462'
  },
  {
    'label': 'Farfetchd',
    'value': '83b&!galar,124,115,141'
  },
  {
    'label': 'Farfetchd_Galarian',
    'value': '83b&galar,174,114,141,865'
  },
  {
    'label': 'Doduo',
    'value': '84b,158,83,111,85'
  },
  {
    'label': 'Dodrio',
    'value': '85,218,140,155,84b'
  },
  {
    'label': 'Seel',
    'value': '86b,85,121,163,87'
  },
  {
    'label': 'Dewgong',
    'value': '87,139,177,207,86b'
  },
  {
    'label': 'Grimer',
    'value': '88b&!alola,135,90,190,89&!alola'
  },
  {
    'label': 'Grimer_Alola',
    'value': '88b&alola,135,90,190,89&alola'
  },
  {
    'label': 'Muk',
    'value': '89&!alola,190,172,233,88b&!alola'
  },
  {
    'label': 'Muk_Alola',
    'value': '89&alola,190,172,233,88b&alola'
  },
  {
    'label': 'Shellder',
    'value': '90b,116,134,102,91'
  },
  {
    'label': 'Cloyster',
    'value': '91,186,256,137,90b'
  },
  {
    'label': 'Gastly',
    'value': '92b,186,67,102,93,94&!mega,94&mega'
  },
  {
    'label': 'Haunter',
    'value': '93,223,107,128,92b,94&!mega,94&mega'
  },
  {
    'label': 'Gengar',
    'value': '94&!mega,261,149,155,92b,93,94&mega'
  },
  {
    'label': 'Mega_Gengar',
    'value': '94&mega,349,199,155,92b,93,94&!mega'
  },
  {
    'label': 'Onix',
    'value': '95b,85,232,111,208&!mega,208&mega'
  },
  {
    'label': 'Drowzee',
    'value': '96b,89,136,155,97'
  },
  {
    'label': 'Hypno',
    'value': '97,144,193,198,96b'
  },
  {
    'label': 'Krabby',
    'value': '98b,181,124,102,99'
  },
  {
    'label': 'Kingler',
    'value': '99,240,181,146,98b'
  },
  {
    'label': 'Voltorb',
    'value': '100b,109,111,120,101'
  },
  {
    'label': 'Electrode',
    'value': '101,173,173,155,100b'
  },
  {
    'label': 'Exeggcute',
    'value': '102b,107,125,155,103&!alola'
  },
  {
    'label': 'Exeggutor',
    'value': '103&!alola,233,149,216,102b'
  },
  {
    'label': 'Exeggutor_Alola',
    'value': '103b&alola,230,153,216'
  },
  {
    'label': 'Cubone',
    'value': '104b,90,144,137,105&!alola'
  },
  {
    'label': 'Marowak',
    'value': '105&!alola,144,186,155,104b'
  },
  {
    'label': 'Marowak_Alola',
    'value': '105b&alola,144,186,155'
  },
  {
    'label': 'Hitmonlee',
    'value': '106b,224,181,137,107b,236&eggsonly,237b'
  },
  {
    'label': 'Hitmonchan',
    'value': '107b,193,197,137,106b,236&eggsonly,237b'
  },
  {
    'label': 'Lickitung',
    'value': '108b,108,137,207,463'
  },
  {
    'label': 'Koffing',
    'value': '109b&!galar,119,141,120,110&!galar'
  },
  {
    'label': 'Weezing',
    'value': '110&!galar,174,197,163,109b&!galar'
  },
  {
    'label': 'Weezing_Galarian',
    'value': '110b&galar,174,197,163'
  },
  {
    'label': 'Rhyhorn',
    'value': '111b,140,127,190,112,464'
  },
  {
    'label': 'Rhydon',
    'value': '112,222,171,233,111b,464'
  },
  {
    'label': 'Chansey',
    'value': '113b,60,128,487,242,440&eggsonly'
  },
  {
    'label': 'Tangela',
    'value': '114b,183,169,163,465'
  },
  {
    'label': 'Kangaskhan',
    'value': '115b&!mega,181,165,233,115&mega'
  },
  {
    'label': 'Mega_Kangaskhan_SPECULATIVE',
    'value': '115&mega,246,210,233,115b&!mega'
  },
  {
    'label': 'Horsea',
    'value': '116b,129,103,102,117,230'
  },
  {
    'label': 'Seadra',
    'value': '117,187,156,146,116b,230'
  },
  {
    'label': 'Goldeen',
    'value': '118b,123,110,128,119'
  },
  {
    'label': 'Seaking',
    'value': '119,175,147,190,118b'
  },
  {
    'label': 'Staryu',
    'value': '120b,137,112,102,121'
  },
  {
    'label': 'Starmie',
    'value': '121,210,184,155,120b'
  },
  {
    'label': 'Mr_Mime',
    'value': '122b&!galar,192,205,120,439&eggsonly'
  },
  {
    'label': 'Mr_Mime_Galarian',
    'value': '122b&galar,183,169,137,866'
  },
  {
    'label': 'Scyther',
    'value': '123b,218,170,172,212&!mega,212&mega'
  },
  {
    'label': 'Jynx',
    'value': '124b,223,151,163,238&eggsonly'
  },
  {
    'label': 'Electabuzz',
    'value': '125b,198,158,163,239&eggsonly,466'
  },
  {
    'label': 'Magmar',
    'value': '126b,206,154,163,240&eggsonly,467'
  },
  {
    'label': 'Pinsir',
    'value': '127b&!mega,238,182,163,127&mega'
  },
  {
    'label': 'Mega_Pinsir_SPECULATIVE',
    'value': '127&mega,305,231,163,127b&!mega'
  },
  {
    'label': 'Tauros',
    'value': '128b,198,183,181'
  },
  {
    'label': 'Magikarp',
    'value': '129b,29,85,85,130&!mega,130&mega'
  },
  {
    'label': 'Gyarados',
    'value': '130&!mega,237,186,216,129b,130&mega'
  },
  {
    'label': 'Mega_Gyarados',
    'value': '130&mega,292,247,216,129b,130&!mega'
  },
  {
    'label': 'Lapras',
    'value': '131b,165,174,277'
  },
  {
    'label': 'Ditto',
    'value': '132b,91,91,134'
  },
  {
    'label': 'Eevee',
    'value': '133b,104,114,146,134,135,136,196,197,470,471,700'
  },
  {
    'label': 'Vaporeon',
    'value': '134,205,161,277,133b,135,136,196,197,470,471,700'
  },
  {
    'label': 'Jolteon',
    'value': '135,232,182,163,133b,134,136,196,197,470,471,700'
  },
  {
    'label': 'Flareon',
    'value': '136,246,179,163,133b,134,135,196,197,470,471,700'
  },
  {
    'label': 'Porygon',
    'value': '137b,153,136,163,233,474'
  },
  {
    'label': 'Omanyte',
    'value': '138b,155,153,111,139'
  },
  {
    'label': 'Omastar',
    'value': '139,207,201,172,138b'
  },
  {
    'label': 'Kabuto',
    'value': '140b,148,140,102,141'
  },
  {
    'label': 'Kabutops',
    'value': '141,220,186,155,140b'
  },
  {
    'label': 'Aerodactyl',
    'value': '142b&!mega,221,159,190,142&mega'
  },
  {
    'label': 'Mega_Aerodactyl_SPECULATIVE',
    'value': '142&mega,292,210,190,142b&!mega'
  },
  {
    'label': 'Snorlax',
    'value': '143b,190,169,330,446&eggsonly'
  },
  {
    'label': 'Articuno',
    'value': '144b,192,236,207'
  },
  {
    'label': 'Zapdos',
    'value': '145b,253,185,207'
  },
  {
    'label': 'Moltres',
    'value': '146b,251,181,207'
  },
  {
    'label': 'Dratini',
    'value': '147b,119,91,121,148,149'
  },
  {
    'label': 'Dragonair',
    'value': '148,163,135,156,147b,149'
  },
  {
    'label': 'Dragonite',
    'value': '149,263,198,209,147b,148'
  },
  {
    'label': 'Mewtwo',
    'value': '150b&!mega,300,182,214,150&megaX,150&megaY'
  },
  {
    'label': 'Mewtwo_A',
    'value': '150b,182,278,214'
  },
  {
    'label': 'Mega_Mewtwo_X_SPECULATIVE',
    'value': '150&megaX,375,202,214,150b&!mega,150&megaY'
  },
  {
    'label': 'Mega_Mewtwo_Y_SPECULATIVE',
    'value': '150&megaY,387,208,214,150b&!mega,150&megaX'
  },
  {
    'label': 'Mew',
    'value': '151b,210,210,225'
  },
  {
    'label': 'Chikorita',
    'value': '152b,92,122,128,153,154'
  },
  {
    'label': 'Bayleef',
    'value': '153,122,155,155,152b,154'
  },
  {
    'label': 'Meganium',
    'value': '154,168,202,190,152b,153'
  },
  {
    'label': 'Cyndaquil',
    'value': '155b,116,93,118,156,157'
  },
  {
    'label': 'Quilava',
    'value': '156,158,126,151,155b,157'
  },
  {
    'label': 'Typhlosion',
    'value': '157,223,173,186,155b,156'
  },
  {
    'label': 'Totodile',
    'value': '158b,117,109,137,159,160'
  },
  {
    'label': 'Croconaw',
    'value': '159,150,142,163,158b,160'
  },
  {
    'label': 'Feraligatr',
    'value': '160,205,188,198,158b,159'
  },
  {
    'label': 'Sentret',
    'value': '161b,79,73,111,162'
  },
  {
    'label': 'Furret',
    'value': '162,148,125,198,161b'
  },
  {
    'label': 'Hoothoot',
    'value': '163b,67,88,155,164'
  },
  {
    'label': 'Noctowl',
    'value': '164,145,156,225,163b'
  },
  {
    'label': 'Ledyba',
    'value': '165b,72,118,120,166'
  },
  {
    'label': 'Ledian',
    'value': '166,107,179,146,165b'
  },
  {
    'label': 'Spinarak',
    'value': '167b,105,73,120,168'
  },
  {
    'label': 'Ariados',
    'value': '168,161,124,172,167b'
  },
  {
    'label': 'Crobat',
    'value': '169,194,178,198,41b,42'
  },
  {
    'label': 'Chinchou',
    'value': '170b,106,97,181,171'
  },
  {
    'label': 'Lanturn',
    'value': '171,146,137,268,170b'
  },
  {
    'label': 'Pichu',
    'value': '172&eggsonly,77,53,85,25b,26&!alola'
  },
  {
    'label': 'Cleffa',
    'value': '173&eggsonly,75,79,137,35b,36'
  },
  {
    'label': 'Igglybuff',
    'value': '174&eggsonly,69,32,207,39b,40'
  },
  {
    'label': 'Togepi',
    'value': '175&eggsonly,67,116,111,176b,468'
  },
  {
    'label': 'Togetic',
    'value': '176b,139,181,146,175&eggsonly,468'
  },
  {
    'label': 'Natu',
    'value': '177b,134,89,120,178'
  },
  {
    'label': 'Xatu',
    'value': '178,192,146,163,177b'
  },
  {
    'label': 'Mareep',
    'value': '179b,114,79,146,180,181&!mega,181&mega'
  },
  {
    'label': 'Flaaffy',
    'value': '180,145,109,172,179b,181&!mega,181&mega'
  },
  {
    'label': 'Ampharos',
    'value': '181&!mega,211,169,207,179b,180,181&mega'
  },
  {
    'label': 'Mega_Ampharos',
    'value': '181&mega,294,203,207,179b,180,181&!mega'
  },
  {
    'label': 'Bellossom',
    'value': '182,169,186,181,43b,44,45'
  },
  {
    'label': 'Marill',
    'value': '183b,37,93,172,184,298&eggsonly'
  },
  {
    'label': 'Azumarill',
    'value': '184,112,152,225,183b,298&eggsonly'
  },
  {
    'label': 'Sudowoodo',
    'value': '185b,167,176,172,438&eggsonly'
  },
  {
    'label': 'Politoed',
    'value': '186,174,179,207,60b,61,62'
  },
  {
    'label': 'Hoppip',
    'value': '187b,67,94,111,188,189'
  },
  {
    'label': 'Skiploom',
    'value': '188,91,120,146,187b,189'
  },
  {
    'label': 'Jumpluff',
    'value': '189,118,183,181,187b,188'
  },
  {
    'label': 'Aipom',
    'value': '190b,136,112,146,424'
  },
  {
    'label': 'Sunkern',
    'value': '191b,55,55,102,192'
  },
  {
    'label': 'Sunflora',
    'value': '192,185,135,181,191b'
  },
  {
    'label': 'Yanma',
    'value': '193b,154,94,163,469'
  },
  {
    'label': 'Wooper',
    'value': '194b,75,66,146,195'
  },
  {
    'label': 'Quagsire',
    'value': '195,152,143,216,194b'
  },
  {
    'label': 'Espeon',
    'value': '196,261,175,163,133b,134,135,136,197,470,471,700'
  },
  {
    'label': 'Umbreon',
    'value': '197,126,240,216,133b,134,135,136,196,470,471,700'
  },
  {
    'label': 'Murkrow',
    'value': '198b,175,87,155,430'
  },
  {
    'label': 'Slowking',
    'value': '199&!galar,177,180,216,79b&!galar,80&!mega&!galar'
  },
  {
    'label': 'Slowking_Galarian',
    'value': '199&galar,190,180,216,79b&galar,80&!mega&galar'
  },
  {
    'label': 'Misdreavus',
    'value': '200b,167,154,155,429'
  },
  {
    'label': 'Unown',
    'value': '201b,136,91,134'
  },
  {
    'label': 'Wobbuffet',
    'value': '202b,60,106,382,360&eggsonly'
  },
  {
    'label': 'Girafarig',
    'value': '203b,182,133,172'
  },
  {
    'label': 'Pineco',
    'value': '204b,108,122,137,205'
  },
  {
    'label': 'Forretress',
    'value': '205,161,205,181,204b'
  },
  {
    'label': 'Dunsparce',
    'value': '206b,131,128,225'
  },
  {
    'label': 'Gligar',
    'value': '207b,143,184,163,472'
  },
  {
    'label': 'Steelix',
    'value': '208&!mega,148,272,181,95b,208&mega'
  },
  {
    'label': 'Mega_Steelix_SPECULATIVE',
    'value': '208&mega,212,327,181,95b,208&!mega'
  },
  {
    'label': 'Snubbull',
    'value': '209b,137,85,155,210'
  },
  {
    'label': 'Granbull',
    'value': '210,212,131,207,209b'
  },
  {
    'label': 'Qwilfish',
    'value': '211b,184,138,163'
  },
  {
    'label': 'Scizor',
    'value': '212&!mega,236,181,172,123b,212&mega'
  },
  {
    'label': 'Mega_Scizor_SPECULATIVE',
    'value': '212&mega,279,250,172,123b,212&!mega'
  },
  {
    'label': 'Shuckle',
    'value': '213b,17,396,85'
  },
  {
    'label': 'Heracross',
    'value': '214b&!mega,234,179,190,214&mega'
  },
  {
    'label': 'Mega_Heracross_SPECULATIVE',
    'value': '214&mega,334,223,190,214b&!mega'
  },
  {
    'label': 'Sneasel',
    'value': '215b,189,146,146,461'
  },
  {
    'label': 'Teddiursa',
    'value': '216b,142,93,155,217'
  },
  {
    'label': 'Ursaring',
    'value': '217,236,144,207,216b'
  },
  {
    'label': 'Slugma',
    'value': '218b,118,71,120,219'
  },
  {
    'label': 'Magcargo',
    'value': '219,139,191,137,218b'
  },
  {
    'label': 'Swinub',
    'value': '220b,90,69,137,221,473'
  },
  {
    'label': 'Piloswine',
    'value': '221,181,138,225,220b,473'
  },
  {
    'label': 'Corsola',
    'value': '222b&!galar,118,156,146'
  },
  {
    'label': 'Corsola_Galarian',
    'value': '222b&galar,118,156,146,864'
  },
  {
    'label': 'Remoraid',
    'value': '223b,127,69,111,224'
  },
  {
    'label': 'Octillery',
    'value': '224,197,141,181,223b'
  },
  {
    'label': 'Delibird',
    'value': '225b,128,90,128'
  },
  {
    'label': 'Mantine',
    'value': '226b,148,226,163,458&eggsonly'
  },
  {
    'label': 'Skarmory',
    'value': '227b,148,226,163'
  },
  {
    'label': 'Houndour',
    'value': '228b,152,83,128,229&!mega,229&mega'
  },
  {
    'label': 'Houndoom',
    'value': '229&!mega,224,144,181,228b,229&mega'
  },
  {
    'label': 'Mega_Houndoom',
    'value': '229&mega,289,194,181,228b,229&!mega'
  },
  {
    'label': 'Kingdra',
    'value': '230,194,194,181,116b,117'
  },
  {
    'label': 'Phanpy',
    'value': '231b,107,98,207,232'
  },
  {
    'label': 'Donphan',
    'value': '232,214,185,207,231b'
  },
  {
    'label': 'Porygon2',
    'value': '233,198,180,198,137b,474'
  },
  {
    'label': 'Stantler',
    'value': '234b,192,131,177'
  },
  {
    'label': 'Smeargle',
    'value': '235b,40,83,146'
  },
  {
    'label': 'Tyrogue',
    'value': '236&eggsonly,64,64,111,106b,107b,237b'
  },
  {
    'label': 'Hitmontop',
    'value': '237b,173,207,137,106b,107b,236&eggsonly'
  },
  {
    'label': 'Smoochum',
    'value': '238&eggsonly,153,91,128,124b'
  },
  {
    'label': 'Elekid',
    'value': '239&eggsonly,135,101,128,125b,466'
  },
  {
    'label': 'Magby',
    'value': '240&eggsonly,151,99,128,126b,467'
  },
  {
    'label': 'Miltank',
    'value': '241b,157,193,216'
  },
  {
    'label': 'Blissey',
    'value': '242,129,169,496,113b,440&eggsonly'
  },
  {
    'label': 'Raikou',
    'value': '243b,241,195,207'
  },
  {
    'label': 'Entei',
    'value': '244b,235,171,251'
  },
  {
    'label': 'Suicune',
    'value': '245b,180,235,225'
  },
  {
    'label': 'Larvitar',
    'value': '246b,115,93,137,247,248&!mega,248&mega'
  },
  {
    'label': 'Pupitar',
    'value': '247,155,133,172,246b,248&!mega,248&mega'
  },
  {
    'label': 'Tyranitar',
    'value': '248&!mega,251,207,225,246b,247,248&!mega,248&mega'
  },
  {
    'label': 'Mega_Tyranitar_SPECULATIVE',
    'value': '248&mega,309,276,225,246b,247,248&!mega'
  },
  {
    'label': 'Lugia',
    'value': '249b,193,310,235'
  },
  {
    'label': 'Ho_Oh',
    'value': '250b,239,244,214'
  },
  {
    'label': 'Celebi',
    'value': '251b,210,210,225'
  },
  {
    'label': 'Treecko',
    'value': '252b,124,94,120,253,254&!mega,254&mega'
  },
  {
    'label': 'Grovyle',
    'value': '253,172,120,137,252b,254&!mega,254&mega'
  },
  {
    'label': 'Sceptile',
    'value': '254&!mega,223,169,172,252b,253,254&mega'
  },
  {
    'label': 'Mega_Sceptile_SPECULATIVE',
    'value': '254&mega,320,186,172,252b,253,254&!mega'
  },
  {
    'label': 'Torchic',
    'value': '255b,130,87,128,256,257&!mega,257&mega'
  },
  {
    'label': 'Combusken',
    'value': '256,163,115,155,255b,257&!mega,257&mega'
  },
  {
    'label': 'Blaziken',
    'value': '257&!mega,240,141,190,255b,256,257&!mega,257&mega'
  },
  {
    'label': 'Mega_Blaziken_SPECULATIVE',
    'value': '257&mega,329,168,190,255b,256,257&!mega'
  },
  {
    'label': 'Mudkip',
    'value': '258b,126,93,137,259,260&!mega,260&mega'
  },
  {
    'label': 'Marshtomp',
    'value': '259,156,133,172,258b,260&!mega,260&mega'
  },
  {
    'label': 'Swampert',
    'value': '260&!mega,208,175,225,258b,259,260&mega'
  },
  {
    'label': 'Mega_Swampert_SPECULATIVE',
    'value': '260&mega,283,218,225,258b,259,260&mega'
  },
  {
    'label': 'Poochyena',
    'value': '261b,96,61,111,262'
  },
  {
    'label': 'Mightyena',
    'value': '262,171,132,172,261b'
  },
  {
    'label': 'Zigzagoon',
    'value': '263b&!galar,58,80,116,264&!galar'
  },
  {
    'label': 'Zigzagoon_Galarian',
    'value': '263b&galar,58,80,116,264&galar,862'
  },
  {
    'label': 'Linoone',
    'value': '264&!galar,142,128,186,263b&!galar'
  },
  {
    'label': 'Linoone_Galarian',
    'value': '264&galar,142,128,186,263b&galar,862'
  },
  {
    'label': 'Wurmple',
    'value': '265b,75,59,128,266,267,268,269'
  },
  {
    'label': 'Silcoon',
    'value': '266,60,77,137,265b,267,268,269'
  },
  {
    'label': 'Beautifly',
    'value': '267,189,98,155,265b,266,268,269'
  },
  {
    'label': 'Cascoon',
    'value': '268,60,77,137,265b,266,267,269'
  },
  {
    'label': 'Dustox',
    'value': '269,98,162,155,265b,266,267,268'
  },
  {
    'label': 'Lotad',
    'value': '270b,71,77,120,271,272'
  },
  {
    'label': 'Lombre',
    'value': '271,112,119,155,270b,272'
  },
  {
    'label': 'Ludicolo',
    'value': '272,173,176,190,270b,271'
  },
  {
    'label': 'Seedot',
    'value': '273b,71,77,120,274,275'
  },
  {
    'label': 'Nuzleaf',
    'value': '274,134,78,172,273b,275'
  },
  {
    'label': 'Shiftry',
    'value': '275,200,121,207,273b,274'
  },
  {
    'label': 'Taillow',
    'value': '276b,106,61,120,277'
  },
  {
    'label': 'Swellow',
    'value': '277,185,124,155,276b'
  },
  {
    'label': 'Wingull',
    'value': '278b,106,61,120,279'
  },
  {
    'label': 'Pelipper',
    'value': '279,175,174,155,278b'
  },
  {
    'label': 'Ralts',
    'value': '280b,79,59,99,281,282&!mega,282&mega,475&!mega,475&mega'
  },
  {
    'label': 'Kirlia',
    'value': '281,117,90,116,280b,282&!mega,282&mega,475&!mega,475&mega'
  },
  {
    'label': 'Gardevoir',
    'value': '282&!mega,237,195,169,280b,281,282&mega,475&!mega,475&mega'
  },
  {
    'label': 'Mega_Gardevoir_SPECULATIVE',
    'value': '282&mega,326,229,169,280b,281,282&!mega,475&!mega,475&mega'
  },
  {
    'label': 'Surskit',
    'value': '283b,93,87,120,284'
  },
  {
    'label': 'Masquerain',
    'value': '284,192,150,172,283b'
  },
  {
    'label': 'Shroomish',
    'value': '285b,74,110,155,286'
  },
  {
    'label': 'Breloom',
    'value': '286,241,144,155,285b'
  },
  {
    'label': 'Slakoth',
    'value': '287b,104,92,155,288,289'
  },
  {
    'label': 'Vigoroth',
    'value': '288,159,145,190,287b,289'
  },
  {
    'label': 'Slaking',
    'value': '289,290,166,284,287b,288'
  },
  {
    'label': 'Nincada',
    'value': '290b,80,126,104,291'
  },
  {
    'label': 'Ninjask',
    'value': '291,199,112,156,290b'
  },
  {
    'label': 'Shedinja',
    'value': '292b,153,73,1'
  },
  {
    'label': 'Whismur',
    'value': '293b,92,42,162,294,295'
  },
  {
    'label': 'Loudred',
    'value': '294,134,81,197,293b,295'
  },
  {
    'label': 'Exploud',
    'value': '295,179,137,232,293b,294'
  },
  {
    'label': 'Makuhita',
    'value': '296b,99,54,176,297'
  },
  {
    'label': 'Hariyama',
    'value': '297,209,114,302,296b'
  },
  {
    'label': 'Azurill',
    'value': '298&eggsonly,36,71,137,183b,184'
  },
  {
    'label': 'Nosepass',
    'value': '299b,82,215,102,476'
  },
  {
    'label': 'Skitty',
    'value': '300b,84,79,137,301'
  },
  {
    'label': 'Delcatty',
    'value': '301,132,127,172,300b'
  },
  {
    'label': 'Sableye',
    'value': '302b&!mega,141,136,137,302&mega'
  },
  {
    'label': 'Mega_Sableye_SPECULATIVE',
    'value': '302&mega,151,216,137,302b&!mega'
  },
  {
    'label': 'Mawile',
    'value': '303b&!mega,155,141,137,303&mega'
  },
  {
    'label': 'Mega_Mawile_SPECULATIVE',
    'value': '303&mega,188,217,137,303b&!mega'
  },
  {
    'label': 'Aron',
    'value': '304b,121,141,137,305,306&!mega,306&mega'
  },
  {
    'label': 'Lairon',
    'value': '305,158,198,155,304b,306&!mega,306&mega'
  },
  {
    'label': 'Aggron',
    'value': '306&!mega,198,257,172,304b,305,306&mega'
  },
  {
    'label': 'Mega_Aggron_SPECULATIVE',
    'value': '306&mega,247,331,172,304b,305,306&!mega'
  },
  {
    'label': 'Meditite',
    'value': '307b,78,107,102,308&mega,308&!mega'
  },
  {
    'label': 'Medicham',
    'value': '308&!mega,121,152,155,307b,308&mega'
  },
  {
    'label': 'Mega_Medicham_SPECULATIVE',
    'value': '308&mega,205,179,155,307b,308&!mega'
  },
  {
    'label': 'Electrike',
    'value': '309b,123,78,120,310&!mega,310&mega'
  },
  {
    'label': 'Manectric',
    'value': '310&!mega,215,127,172,309b,310&mega'
  },
  {
    'label': 'Mega_Manectric',
    'value': '310&mega,286,179,172,309b,310&!mega'
  },
  {
    'label': 'Plusle',
    'value': '311b,167,129,155'
  },
  {
    'label': 'Minun',
    'value': '312b,147,150,155'
  },
  {
    'label': 'Volbeat',
    'value': '313b,143,166,163'
  },
  {
    'label': 'Illumise',
    'value': '314b,143,166,163'
  },
  {
    'label': 'Roselia',
    'value': '315b,186,131,137,406&eggsonly,407'
  },
  {
    'label': 'Gulpin',
    'value': '316b,80,99,172,317'
  },
  {
    'label': 'Swalot',
    'value': '317,140,159,225,316b'
  },
  {
    'label': 'Carvanha',
    'value': '318b,171,39,128,319&!mega,319&mega'
  },
  {
    'label': 'Sharpedo',
    'value': '319&!mega,243,83,172,318b,319&!mega,319&mega'
  },
  {
    'label': 'Mega_Sharpedo_SPECULATIVE',
    'value': '319&mega,289,144,172,318b,319&!mega'
  },
  {
    'label': 'Wailmer',
    'value': '320b,136,68,277,321'
  },
  {
    'label': 'Wailord',
    'value': '321,175,87,347,320b'
  },
  {
    'label': 'Numel',
    'value': '322b,119,79,155,323&!mega,323&mega'
  },
  {
    'label': 'Camerupt',
    'value': '323&!mega,194,136,172,322b,323&mega'
  },
  {
    'label': 'Mega_Camerupt_SPECULATIVE',
    'value': '323&mega,253,183,172,322b,323&!mega'
  },
  {
    'label': 'Torkoal',
    'value': '324b,151,203,172'
  },
  {
    'label': 'Spoink',
    'value': '325b,125,122,155,326'
  },
  {
    'label': 'Grumpig',
    'value': '326,171,188,190,325b'
  },
  {
    'label': 'Spinda',
    'value': '327b,116,116,155'
  },
  {
    'label': 'Trapinch',
    'value': '328b,162,78,128,329,330'
  },
  {
    'label': 'Vibrava',
    'value': '329,134,99,137,328b,330'
  },
  {
    'label': 'Flygon',
    'value': '330,205,168,190,328b,329'
  },
  {
    'label': 'Cacnea',
    'value': '331b,156,74,137,332'
  },
  {
    'label': 'Cacturne',
    'value': '332,221,115,172,331b'
  },
  {
    'label': 'Swablu',
    'value': '333b,76,132,128,334&mega,334&!mega'
  },
  {
    'label': 'Altaria',
    'value': '334&!mega,141,201,181,333b,334&mega'
  },
  {
    'label': 'Mega_Altaria',
    'value': '334&mega,222,218,181,333b,334&!mega'
  },
  {
    'label': 'Zangoose',
    'value': '335b,222,124,177'
  },
  {
    'label': 'Seviper',
    'value': '336b,196,118,177'
  },
  {
    'label': 'Lunatone',
    'value': '337b,178,153,207'
  },
  {
    'label': 'Solrock',
    'value': '338b,178,153,207'
  },
  {
    'label': 'Barboach',
    'value': '339b,93,82,137,340'
  },
  {
    'label': 'Whiscash',
    'value': '340,151,141,242,339b'
  },
  {
    'label': 'Corphish',
    'value': '341b,141,99,125,342'
  },
  {
    'label': 'Crawdaunt',
    'value': '342,224,142,160,341b'
  },
  {
    'label': 'Baltoy',
    'value': '343b,77,124,120,344'
  },
  {
    'label': 'Claydol',
    'value': '344,140,229,155,343b'
  },
  {
    'label': 'Lileep',
    'value': '345b,105,150,165,346'
  },
  {
    'label': 'Cradily',
    'value': '346,152,194,200,345b'
  },
  {
    'label': 'Anorith',
    'value': '347b,176,100,128,348'
  },
  {
    'label': 'Armaldo',
    'value': '348,222,174,181,347b'
  },
  {
    'label': 'Feebas',
    'value': '349b,29,85,85,350'
  },
  {
    'label': 'Milotic',
    'value': '350,192,219,216,349b'
  },
  {
    'label': 'Castform',
    'value': '351b,139,139,172'
  },
  {
    'label': 'Kecleon',
    'value': '352b,161,189,155'
  },
  {
    'label': 'Shuppet',
    'value': '353b,138,65,127,354&!mega,354&mega'
  },
  {
    'label': 'Banette',
    'value': '354&!mega,218,126,162,353b,354&mega'
  },
  {
    'label': 'Mega_Banette_SPECULATIVE',
    'value': '354&mega,312,160,162,353b,354&!mega'
  },
  {
    'label': 'Duskull',
    'value': '355b,70,162,85,356,477'
  },
  {
    'label': 'Dusclops',
    'value': '356,124,234,120,355b,477'
  },
  {
    'label': 'Tropius',
    'value': '357b,136,163,223'
  },
  {
    'label': 'Chimecho',
    'value': '358b,175,170,181,433&eggsonly'
  },
  {
    'label': 'Absol',
    'value': '359b&!mega,246,120,163,359&mega'
  },
  {
    'label': 'Mega_Absol_SPECULATIVE',
    'value': '359&mega,314,130,163,359b&!mega'
  },
  {
    'label': 'Wynaut',
    'value': '360&eggsonly,41,86,216,202b'
  },
  {
    'label': 'Snorunt',
    'value': '361b,95,95,137,362,478,362&!mega,362&mega'
  },
  {
    'label': 'Glalie',
    'value': '362&!mega,162,162,190,361b,362&mega,478'
  },
  {
    'label': 'Mega_Glalie_SPECULATIVE',
    'value': '362&mega,252,168,190,361b,362&!mega'
  },
  {
    'label': 'Spheal',
    'value': '363b,95,90,172,364,365'
  },
  {
    'label': 'Sealeo',
    'value': '364,137,132,207,363b,365'
  },
  {
    'label': 'Walrein',
    'value': '365,182,176,242,363b,364'
  },
  {
    'label': 'Clamperl',
    'value': '366b,133,135,111,367,368'
  },
  {
    'label': 'Huntail',
    'value': '367,197,179,146,366b,368'
  },
  {
    'label': 'Gorebyss',
    'value': '368,211,179,146,366b,367'
  },
  {
    'label': 'Relicanth',
    'value': '369b,162,203,225'
  },
  {
    'label': 'Luvdisc',
    'value': '370b,81,128,125'
  },
  {
    'label': 'Bagon',
    'value': '371b,134,93,128,372,373&!mega,373&mega'
  },
  {
    'label': 'Shelgon',
    'value': '372,172,155,163,371b,373&!mega,373&mega'
  },
  {
    'label': 'Salamence',
    'value': '373&!mega,277,168,216,371b,372,373&mega'
  },
  {
    'label': 'Mega_Salamence_SPECULATIVE',
    'value': '373&mega,310,251,216,371b,372,373&!mega'
  },
  {
    'label': 'Beldum',
    'value': '374b,96,132,120,375,376&mega,376&!mega'
  },
  {
    'label': 'Metang',
    'value': '375,138,176,155,374b,376&mega,376&!mega'
  },
  {
    'label': 'Metagross',
    'value': '376&!mega,257,228,190,374b,375,376&mega'
  },
  {
    'label': 'Mega_Metagross_SPECULATIVE',
    'value': '376&mega,300,289,190,374b,375,376&!mega'
  },
  {
    'label': 'Regirock',
    'value': '377b,179,309,190'
  },
  {
    'label': 'Regice',
    'value': '378b,179,309,190'
  },
  {
    'label': 'Registeel',
    'value': '379b,143,285,190'
  },
  {
    'label': 'Latias',
    'value': '380b&!mega,228,246,190,380&mega'
  },
  {
    'label': 'Mega_Latias_SPECULATIVE',
    'value': '380&mega,289,297,190,380b&!mega'
  },
  {
    'label': 'Latios',
    'value': '381b&!mega,268,212,190,381&mega'
  },
  {
    'label': 'Mega_Latios_SPECULATIVE',
    'value': '381&mega,335,241,190,381b&!mega'
  },
  {
    'label': 'Kyogre',
    'value': '382b,270,228,205'
  },
  {
    'label': 'Groudon',
    'value': '383b,270,228,205'
  },
  {
    'label': 'Rayquaza',
    'value': '384b&!mega,284,170,213,384&mega'
  },
  {
    'label': 'Mega_Rayquaza_SPECULATIVE',
    'value': '384&mega,354,196,213,384b&!mega'
  },
  {
    'label': 'Jirachi',
    'value': '385b,210,210,225'
  },
  {
    'label': 'Deoxys',
    'value': '386b,345,115,137'
  },
  {
    'label': 'Deoxys_Attack',
    'value': '386b,414,46,137'
  },
  {
    'label': 'Deoxys_Defense',
    'value': '386b,144,330,137'
  },
  {
    'label': 'Deoxys_Speed',
    'value': '386b,230,218,137'
  },
  {
    'label': 'Turtwig',
    'value': '387b,119,110,146,388,389'
  },
  {
    'label': 'Grotle',
    'value': '388,157,143,181,387b,389'
  },
  {
    'label': 'Torterra',
    'value': '389,202,188,216,387b,388'
  },
  {
    'label': 'Chimchar',
    'value': '390b,113,86,127,391,392'
  },
  {
    'label': 'Monferno',
    'value': '391,158,105,162,390b,392'
  },
  {
    'label': 'Infernape',
    'value': '392,222,151,183,390b,391'
  },
  {
    'label': 'Piplup',
    'value': '393b,112,102,142,394,395'
  },
  {
    'label': 'Prinplup',
    'value': '394,150,139,162,393b,395'
  },
  {
    'label': 'Empoleon',
    'value': '395,210,186,197,393b,394'
  },
  {
    'label': 'Starly',
    'value': '396b,101,58,120,397,398'
  },
  {
    'label': 'Staravia',
    'value': '397,142,94,146,396b,398'
  },
  {
    'label': 'Staraptor',
    'value': '398,234,140,198,396b,397'
  },
  {
    'label': 'Bidoof',
    'value': '399b,80,73,153,400'
  },
  {
    'label': 'Bibarel',
    'value': '400,162,119,188,399b'
  },
  {
    'label': 'Kricketot',
    'value': '401b,45,74,114,402'
  },
  {
    'label': 'Kricketune',
    'value': '402,160,100,184,401b'
  },
  {
    'label': 'Shinx',
    'value': '403b,117,64,128,404,405'
  },
  {
    'label': 'Luxio',
    'value': '404,159,95,155,403b,405'
  },
  {
    'label': 'Luxray',
    'value': '405,232,156,190,403b,404'
  },
  {
    'label': 'Budew',
    'value': '406&eggsonly,91,109,120,315b,407'
  },
  {
    'label': 'Roserade',
    'value': '407,243,185,155,315b,406&eggsonly'
  },
  {
    'label': 'Cranidos',
    'value': '408b,218,71,167,409'
  },
  {
    'label': 'Rampardos',
    'value': '409,295,109,219,408b'
  },
  {
    'label': 'Shieldon',
    'value': '410b,76,195,102,411'
  },
  {
    'label': 'Bastiodon',
    'value': '411,94,286,155,410b'
  },
  {
    'label': 'Burmy',
    'value': '412b,53,83,120,413&Grass,413&Ground,413&Steel,414'
  },
  {
    'label': 'Wormadam_Plant',
    'value': '413&Grass,141,180,155,412b,413&Ground,413&Steel,414'
  },
  {
    'label': 'Wormadam_Sandy',
    'value': '413&Ground,141,180,155,412b,413&Grass,413&Steel,414'
  },
  {
    'label': 'Wormadam_Trash',
    'value': '413&Steel,127,175,155,412b,413&Grass,413&Ground,414'
  },
  {
    'label': 'Mothim',
    'value': '414,185,98,172,412b,413&Grass,413&Ground,413&Steel'
  },
  {
    'label': 'Combee',
    'value': '415b,59,83,102,416'
  },
  {
    'label': 'Vespiquen',
    'value': '416,149,190,172,415b'
  },
  {
    'label': 'Pachirisu',
    'value': '417b,94,172,155'
  },
  {
    'label': 'Buizel',
    'value': '418b,132,67,146,419'
  },
  {
    'label': 'Floatzel',
    'value': '419,221,114,198,418b'
  },
  {
    'label': 'Cherubi',
    'value': '420b,108,92,128,421'
  },
  {
    'label': 'Cherrim',
    'value': '421,170,153,172,420b'
  },
  {
    'label': 'Shellos',
    'value': '422b,103,105,183,423'
  },
  {
    'label': 'Gastrodon',
    'value': '423,169,143,244,422b'
  },
  {
    'label': 'Ambipom',
    'value': '424,205,143,181,190b'
  },
  {
    'label': 'Drifloon',
    'value': '425b,117,80,207,426'
  },
  {
    'label': 'Drifblim',
    'value': '426,180,102,312,425b'
  },
  {
    'label': 'Buneary',
    'value': '427b,130,105,146,428&!mega,428&mega'
  },
  {
    'label': 'Lopunny',
    'value': '428&!mega,156,194,163,427b,428&mega'
  },
  {
    'label': 'Mega_Lopunny',
    'value': '428&mega,282,214,163,427b,428&!mega'
  },
  {
    'label': 'Mismagius',
    'value': '429,211,187,155,200b'
  },
  {
    'label': 'Honchkrow',
    'value': '430,243,103,225,198b'
  },
  {
    'label': 'Glameow',
    'value': '431b,109,82,135,432'
  },
  {
    'label': 'Purugly',
    'value': '432,172,133,174,431b'
  },
  {
    'label': 'Chingling',
    'value': '433&eggsonly,114,94,128,358b'
  },
  {
    'label': 'Stunky',
    'value': '434b,121,90,160,435'
  },
  {
    'label': 'Skuntank',
    'value': '435,184,132,230,434b'
  },
  {
    'label': 'Bronzor',
    'value': '436b,43,154,149,437'
  },
  {
    'label': 'Bronzong',
    'value': '437,161,213,167,436b'
  },
  {
    'label': 'Bonsly',
    'value': '438&eggsonly,124,133,137,185b'
  },
  {
    'label': 'Mime_Jr',
    'value': '439&eggsonly,125,142,85,122b&!galar'
  },
  {
    'label': 'Happiny',
    'value': '440&eggsonly,25,77,225,113b,242'
  },
  {
    'label': 'Chatot',
    'value': '441b,183,91,183'
  },
  {
    'label': 'Spiritomb',
    'value': '442b,169,199,137'
  },
  {
    'label': 'Gible',
    'value': '443b,124,84,151,444,445&!mega,445&mega'
  },
  {
    'label': 'Gabite',
    'value': '444,172,125,169,443b,445&!mega,445&mega'
  },
  {
    'label': 'Garchomp',
    'value': '445&!mega,261,193,239,443b,444,445&mega'
  },
  {
    'label': 'Mega_Garchomp_SPECULATIVE',
    'value': '445&mega,339,222,239,443b,444,445&!mega'
  },
  {
    'label': 'Munchlax',
    'value': '446&eggsonly,137,117,286,143b'
  },
  {
    'label': 'Riolu',
    'value': '447&eggsonly,127,78,120,448b&!mega,448&mega'
  },
  {
    'label': 'Lucario',
    'value': '448b&!mega,236,144,172,447&eggsonly,448&mega'
  },
  {
    'label': 'Mega_Lucario_SPECULATIVE',
    'value': '448&mega,310,175,172,447&eggsonly,448b&!mega'
  },
  {
    'label': 'Hippopotas',
    'value': '449b,124,118,169,450'
  },
  {
    'label': 'Hippowdon',
    'value': '450,201,191,239,449b'
  },
  {
    'label': 'Skorupi',
    'value': '451b,93,151,120,452'
  },
  {
    'label': 'Drapion',
    'value': '452,180,202,172,451b'
  },
  {
    'label': 'Croagunk',
    'value': '453b,116,76,134,454'
  },
  {
    'label': 'Toxicroak',
    'value': '454,211,133,195,453b'
  },
  {
    'label': 'Carnivine',
    'value': '455b,187,136,179'
  },
  {
    'label': 'Finneon',
    'value': '456b,96,116,135,457'
  },
  {
    'label': 'Lumineon',
    'value': '457,142,170,170,456b'
  },
  {
    'label': 'Mantyke',
    'value': '458&eggsonly,105,179,128,226b'
  },
  {
    'label': 'Snover',
    'value': '459b,115,105,155,460&!mega,460&mega'
  },
  {
    'label': 'Abomasnow',
    'value': '460&!mega,178,158,207,459b,460&mega'
  },
  {
    'label': 'Mega_Abomasnow',
    'value': '460&mega,240,191,207,459b,460&!mega'
  },
  {
    'label': 'Weavile',
    'value': '461,243,171,172,215b'
  },
  {
    'label': 'Magnezone',
    'value': '462,238,205,172,81b,82'
  },
  {
    'label': 'Lickilicky',
    'value': '463,161,181,242,108b'
  },
  {
    'label': 'Rhyperior',
    'value': '464,241,190,251,111b,112'
  },
  {
    'label': 'Tangrowth',
    'value': '465,207,184,225,114b'
  },
  {
    'label': 'Electivire',
    'value': '466,249,163,181,125b,239&eggsonly'
  },
  {
    'label': 'Magmortar',
    'value': '467,247,172,181,126b,240&eggsonly'
  },
  {
    'label': 'Togekiss',
    'value': '468,225,217,198,175&eggsonly,176b'
  },
  {
    'label': 'Yanmega',
    'value': '469,231,156,200,193b'
  },
  {
    'label': 'Leafeon',
    'value': '470,216,219,163,133b,134,135,136,196,197,471,700'
  },
  {
    'label': 'Glaceon',
    'value': '471,238,205,163,133b,134,135,136,196,197,470,700'
  },
  {
    'label': 'Gliscor',
    'value': '472,185,222,181,207b'
  },
  {
    'label': 'Mamoswine',
    'value': '473,247,146,242,220b,221'
  },
  {
    'label': 'Porygon_Z',
    'value': '474,264,150,198,137b,233'
  },
  {
    'label': 'Gallade',
    'value': '475&!mega,237,195,169,280b,281,282&!mega,282&mega,475&mega'
  },
  {
    'label': 'Mega_Gallade_SPECULATIVE',
    'value': '475&mega,326,230,169,280b,281,282&!mega,282&mega,475&!mega'
  },
  {
    'label': 'Probopass',
    'value': '476,135,275,155,299b'
  },
  {
    'label': 'Dusknoir',
    'value': '477,180,254,128,355b,356'
  },
  {
    'label': 'Froslass',
    'value': '478,171,150,172,361b,362&mega,362&!mega'
  },
  {
    'label': 'Rotom',
    'value': '479b,185,159,137'
  },
  {
    'label': 'Rotom_Fan',
    'value': '479b,204,219,137'
  },
  {
    'label': 'Rotom_Frost',
    'value': '479b,204,219,137'
  },
  {
    'label': 'Rotom_Heat',
    'value': '479b,204,219,137'
  },
  {
    'label': 'Rotom_Mow',
    'value': '479b,204,219,137'
  },
  {
    'label': 'Rotom_Wash',
    'value': '479b,204,219,137'
  },
  {
    'label': 'Uxie',
    'value': '480b,156,270,181'
  },
  {
    'label': 'Mesprit',
    'value': '481b,212,212,190'
  },
  {
    'label': 'Azelf',
    'value': '482b,270,151,181'
  },
  {
    'label': 'Dialga',
    'value': '483b,275,211,205'
  },
  {
    'label': 'Palkia',
    'value': '484b,280,215,189'
  },
  {
    'label': 'Heatran',
    'value': '485b,251,213,209'
  },
  {
    'label': 'Regigigas',
    'value': '486b,287,210,221'
  },
  {
    'label': 'Giratina_Altered',
    'value': '487b,187,225,284'
  },
  {
    'label': 'Giratina_Origin',
    'value': '487b,225,187,284'
  },
  {
    'label': 'Cresselia',
    'value': '488b,152,258,260'
  },
  {
    'label': 'Phione',
    'value': '489b,162,162,190'
  },
  {
    'label': 'Manaphy',
    'value': '490b,210,210,225'
  },
  {
    'label': 'Darkrai',
    'value': '491b,285,198,172'
  },
  {
    'label': 'Shaymin_Land',
    'value': '492b,210,210,225'
  },
  {
    'label': 'Shaymin_Sky',
    'value': '492b,261,166,225'
  },
  {
    'label': 'Arceus',
    'value': '493b,238,238,237'
  },
  {
    'label': 'Victini',
    'value': '494b,210,210,225'
  },
  {
    'label': 'Snivy',
    'value': '495b,88,107,128,496,497'
  },
  {
    'label': 'Servine',
    'value': '496,122,152,155,495b,497'
  },
  {
    'label': 'Serperior',
    'value': '497,161,204,181,495b,496'
  },
  {
    'label': 'Tepig',
    'value': '498b,115,85,163,499,500'
  },
  {
    'label': 'Pignite',
    'value': '499,173,106,207,498b,500'
  },
  {
    'label': 'Emboar',
    'value': '500,235,127,242,498b,499'
  },
  {
    'label': 'Oshawott',
    'value': '501b,117,85,146,502,503'
  },
  {
    'label': 'Dewott',
    'value': '502,159,116,181,501b,503'
  },
  {
    'label': 'Samurott',
    'value': '503,212,157,216,501b,502'
  },
  {
    'label': 'Patrat',
    'value': '504b,98,73,128,505'
  },
  {
    'label': 'Watchog',
    'value': '505,165,139,155,504b'
  },
  {
    'label': 'Lillipup',
    'value': '506b,107,86,128,507,508'
  },
  {
    'label': 'Herdier',
    'value': '507,145,126,163,506b,508'
  },
  {
    'label': 'Stoutland',
    'value': '508,206,182,198,506b,507'
  },
  {
    'label': 'Purrloin',
    'value': '509b,98,73,121,510'
  },
  {
    'label': 'Liepard',
    'value': '510,187,106,162,509b'
  },
  {
    'label': 'Pansage',
    'value': '511b,104,94,137,512'
  },
  {
    'label': 'Simisage',
    'value': '512,206,133,181,511b'
  },
  {
    'label': 'Pansear',
    'value': '513b,104,94,137,514'
  },
  {
    'label': 'Simisear',
    'value': '514,206,133,181,513b'
  },
  {
    'label': 'Panpour',
    'value': '515b,104,94,137,516'
  },
  {
    'label': 'Simipour',
    'value': '516,206,133,181,515b'
  },
  {
    'label': 'Munna',
    'value': '517b,111,92,183,518'
  },
  {
    'label': 'Musharna',
    'value': '518,183,166,253,517b'
  },
  {
    'label': 'Pidove',
    'value': '519b,98,80,137,520,521'
  },
  {
    'label': 'Tranquill',
    'value': '520,144,107,158,519b,521'
  },
  {
    'label': 'Unfezant',
    'value': '521,226,146,190,519b,520'
  },
  {
    'label': 'Blitzle',
    'value': '522b,118,64,128,523'
  },
  {
    'label': 'Zebstrika',
    'value': '523,211,136,181,522b'
  },
  {
    'label': 'Roggenrola',
    'value': '524b,121,110,146,525,526'
  },
  {
    'label': 'Boldore',
    'value': '525,174,143,172,524b,526'
  },
  {
    'label': 'Gigalith',
    'value': '526,226,201,198,524b,525'
  },
  {
    'label': 'Woobat',
    'value': '527b,107,85,163,528'
  },
  {
    'label': 'Swoobat',
    'value': '528,161,119,167,527b'
  },
  {
    'label': 'Drilbur',
    'value': '529b,154,85,155,530'
  },
  {
    'label': 'Excadrill',
    'value': '530,255,129,242,529b'
  },
  {
    'label': 'Audino',
    'value': '531b&!mega,114,163,230,531&mega'
  },
  {
    'label': 'Mega_Audino_SPECULATIVE',
    'value': '531&mega,147,239,230,531b&!mega'
  },
  {
    'label': 'Timburr',
    'value': '532b,134,87,181,533,534'
  },
  {
    'label': 'Gurdurr',
    'value': '533,180,134,198,532b,534'
  },
  {
    'label': 'Conkeldurr',
    'value': '534,243,158,233,532b,533'
  },
  {
    'label': 'Tympole',
    'value': '535b,98,78,137,536,537'
  },
  {
    'label': 'Palpitoad',
    'value': '536,128,109,181,535b,537'
  },
  {
    'label': 'Seismitoad',
    'value': '537,188,150,233,535b,536'
  },
  {
    'label': 'Throh',
    'value': '538b,172,160,260'
  },
  {
    'label': 'Sawk',
    'value': '539b,231,153,181'
  },
  {
    'label': 'Sewaddle',
    'value': '540b,96,124,128,541,542'
  },
  {
    'label': 'Swadloon',
    'value': '541,115,162,146,540b,542'
  },
  {
    'label': 'Leavanny',
    'value': '542,205,165,181,540b,541'
  },
  {
    'label': 'Venipede',
    'value': '543b,83,99,102,544,545'
  },
  {
    'label': 'Whirlipede',
    'value': '544,100,173,120,543b,545'
  },
  {
    'label': 'Scolipede',
    'value': '545,203,175,155,543b,544'
  },
  {
    'label': 'Cottonee',
    'value': '546b,71,111,120,547'
  },
  {
    'label': 'Whimsicott',
    'value': '547,164,176,155,546b'
  },
  {
    'label': 'Petilil',
    'value': '548b,119,91,128,549'
  },
  {
    'label': 'Lilligant',
    'value': '549,214,155,172,548b'
  },
  {
    'label': 'Basculin',
    'value': '550b,189,129,172'
  },
  {
    'label': 'Sandile',
    'value': '551b,132,69,137,552,553'
  },
  {
    'label': 'Krokorok',
    'value': '552,155,90,155,551b,553'
  },
  {
    'label': 'Krookodile',
    'value': '553,229,158,216,551b,552'
  },
  {
    'label': 'Darumaka',
    'value': '554b&!galar,153,86,172,555&!galar&!psychic'
  },
  {
    'label': 'Darumaka_Galarian',
    'value': '554b&galar,153,86,172,555&galar&!fire'
  },
  {
    'label': 'Darmanitan_Galarian_Standard',
    'value': '555&galar&!fire,263,114,233,554b&galar'
  },
  {
    'label': 'Darmanitan_Galarian_Zen',
    'value': '555&galar&fire,323,123,233,554b&galar,555&galar&!fire'
  },
  {
    'label': 'Darmanitan_Standard',
    'value': '555&!galar&!psychic,263,114,233,554b&!galar'
  },
  {
    'label': 'Darmanitan_Zen',
    'value': '555&!galar&psychic,243,202,233,554b&!galar,555&!galar&!psychic'
  },
  {
    'label': 'Maractus',
    'value': '556b,201,130,181'
  },
  {
    'label': 'Dwebble',
    'value': '557b,118,128,137,558'
  },
  {
    'label': 'Crustle',
    'value': '558,188,200,172,557b'
  },
  {
    'label': 'Scraggy',
    'value': '559b,132,132,137,560'
  },
  {
    'label': 'Scrafty',
    'value': '560,163,222,163,559b'
  },
  {
    'label': 'Sigilyph',
    'value': '561b,204,167,176'
  },
  {
    'label': 'Yamask',
    'value': '562b,95,141,116,563'
  },
  {
    'label': 'Yamask_Galarian',
    'value': '562b,95,141,116,867'
  },
  {
    'label': 'Cofagrigus',
    'value': '563,163,237,151,562b'
  },
  {
    'label': 'Tirtouga',
    'value': '564b,134,146,144,565'
  },
  {
    'label': 'Carracosta',
    'value': '565,192,197,179,564b'
  },
  {
    'label': 'Archen',
    'value': '566b,213,89,146,567'
  },
  {
    'label': 'Archeops',
    'value': '567,292,139,181,566b'
  },
  {
    'label': 'Trubbish',
    'value': '568b,96,122,137,569'
  },
  {
    'label': 'Garbodor',
    'value': '569,181,164,190,568b'
  },
  {
    'label': 'Zorua',
    'value': '570b,153,78,120,571'
  },
  {
    'label': 'Zoroark',
    'value': '571,250,127,155,570b'
  },
  {
    'label': 'Minccino',
    'value': '572b,98,80,146,573'
  },
  {
    'label': 'Cinccino',
    'value': '573,198,130,181,572b'
  },
  {
    'label': 'Gothita',
    'value': '574b,98,112,128,575,576'
  },
  {
    'label': 'Gothorita',
    'value': '575,137,153,155,574b,576'
  },
  {
    'label': 'Gothitelle',
    'value': '576,176,205,172,574b,575'
  },
  {
    'label': 'Solosis',
    'value': '577b,170,83,128,578,579'
  },
  {
    'label': 'Duosion',
    'value': '578,208,103,163,577b,579'
  },
  {
    'label': 'Reuniclus',
    'value': '579,214,148,242,577b,578'
  },
  {
    'label': 'Ducklett',
    'value': '580b,84,96,158,581'
  },
  {
    'label': 'Swanna',
    'value': '581,182,132,181,580b'
  },
  {
    'label': 'Vanillite',
    'value': '582b,118,106,113,583,584'
  },
  {
    'label': 'Vanillish',
    'value': '583,151,138,139,582b,584'
  },
  {
    'label': 'Vanilluxe',
    'value': '584,218,184,174,582b,583'
  },
  {
    'label': 'Deerling',
    'value': '585b,115,100,155,586'
  },
  {
    'label': 'Sawsbuck',
    'value': '586,198,146,190,585b'
  },
  {
    'label': 'Emolga',
    'value': '587b,158,127,146'
  },
  {
    'label': 'Karrablast',
    'value': '588b,137,87,137,589'
  },
  {
    'label': 'Escavalier',
    'value': '589,223,187,172,588b'
  },
  {
    'label': 'Foongus',
    'value': '590b,97,91,170,591'
  },
  {
    'label': 'Amoonguss',
    'value': '591,155,139,249,590b'
  },
  {
    'label': 'Frillish',
    'value': '592b,115,134,146,593'
  },
  {
    'label': 'Jellicent',
    'value': '593,159,178,225,592b'
  },
  {
    'label': 'Alomomola',
    'value': '594b,138,131,338'
  },
  {
    'label': 'Joltik',
    'value': '595b,110,98,137,596'
  },
  {
    'label': 'Galvantula',
    'value': '596,201,128,172,595b'
  },
  {
    'label': 'Ferroseed',
    'value': '597b,82,155,127,598'
  },
  {
    'label': 'Ferrothorn',
    'value': '598,158,223,179,597b'
  },
  {
    'label': 'Klink',
    'value': '599b,98,121,120,600,601'
  },
  {
    'label': 'Klang',
    'value': '600,150,174,155,599b,601'
  },
  {
    'label': 'Klinklang',
    'value': '601,199,214,155,599b,600'
  },
  {
    'label': 'Tynamo',
    'value': '602b,105,78,111,603,604'
  },
  {
    'label': 'Eelektrik',
    'value': '603,156,130,163,602b,604'
  },
  {
    'label': 'Eelektross',
    'value': '604,217,152,198,602b,603'
  },
  {
    'label': 'Elgyem',
    'value': '605b,148,100,146,606'
  },
  {
    'label': 'Beheeyem',
    'value': '606,221,163,181,605b'
  },
  {
    'label': 'Litwick',
    'value': '607b,108,98,137,608,609'
  },
  {
    'label': 'Lampent',
    'value': '608,169,115,155,607b,609'
  },
  {
    'label': 'Chandelure',
    'value': '609,271,182,155,607b,608'
  },
  {
    'label': 'Axew',
    'value': '610b,154,101,130,611,612'
  },
  {
    'label': 'Fraxure',
    'value': '611,212,123,165,610b,612'
  },
  {
    'label': 'Haxorus',
    'value': '612,284,172,183,610b,611'
  },
  {
    'label': 'Cubchoo',
    'value': '613b,128,74,146,614'
  },
  {
    'label': 'Beartic',
    'value': '614,233,152,216,613b'
  },
  {
    'label': 'Cryogonal',
    'value': '615b,190,218,190'
  },
  {
    'label': 'Shelmet',
    'value': '616b,72,140,137,617'
  },
  {
    'label': 'Accelgor',
    'value': '617,220,120,190,616b'
  },
  {
    'label': 'Stunfisk',
    'value': '618b&!galar,144,171,240'
  },
  {
    'label': 'Stunfisk_Galarian',
    'value': '618b&galar,144,171,240'
  },
  {
    'label': 'Mienfoo',
    'value': '619b,160,98,128,620'
  },
  {
    'label': 'Mienshao',
    'value': '620,258,127,163,619b'
  },
  {
    'label': 'Druddigon',
    'value': '621b,213,170,184'
  },
  {
    'label': 'Golett',
    'value': '622b,127,92,153,623'
  },
  {
    'label': 'Golurk',
    'value': '623,222,154,205,622b'
  },
  {
    'label': 'Pawniard',
    'value': '624b,154,114,128,625'
  },
  {
    'label': 'Bisharp',
    'value': '625,232,176,163,624b'
  },
  {
    'label': 'Bouffalant',
    'value': '626b,195,182,216'
  },
  {
    'label': 'Rufflet',
    'value': '627b,150,97,172,628'
  },
  {
    'label': 'Braviary',
    'value': '628,232,152,225,627b'
  },
  {
    'label': 'Vullaby',
    'value': '629b,105,139,172,630'
  },
  {
    'label': 'Mandibuzz',
    'value': '630,129,205,242,629b'
  },
  {
    'label': 'Heatmor',
    'value': '631b,204,129,198'
  },
  {
    'label': 'Durant',
    'value': '632b,217,188,151'
  },
  {
    'label': 'Deino',
    'value': '633b,116,93,141,634,635'
  },
  {
    'label': 'Zweilous',
    'value': '634,159,135,176,633b,635'
  },
  {
    'label': 'Hydreigon',
    'value': '635,256,188,211,633b,634'
  },
  {
    'label': 'Larvesta',
    'value': '636b,156,107,146,637'
  },
  {
    'label': 'Volcarona',
    'value': '637,264,189,198,636b'
  },
  {
    'label': 'Cobalion',
    'value': '638b,192,229,209'
  },
  {
    'label': 'Terrakion',
    'value': '639b,260,192,209'
  },
  {
    'label': 'Virizion',
    'value': '640b,192,229,209'
  },
  {
    'label': 'Tornadus',
    'value': '641b,266,164,188'
  },
  {
    'label': 'Tornadus_Incarnate',
    'value': '641b,266,164,188'
  },
  {
    'label': 'Tornadus_Therian',
    'value': '641b,238,189,188'
  },
  {
    'label': 'Thundurus',
    'value': '642b,266,164,188'
  },
  {
    'label': 'Thundurus_Incarnate',
    'value': '642b,266,164,188'
  },
  {
    'label': 'Thundurus_Therian',
    'value': '642b,295,161,188'
  },
  {
    'label': 'Reshiram',
    'value': '643b,275,211,205'
  },
  {
    'label': 'Zekrom',
    'value': '644b,275,211,205'
  },
  {
    'label': 'Landorus',
    'value': '645b,261,182,205'
  },
  {
    'label': 'Landorus_Incarnate',
    'value': '645b,261,182,205'
  },
  {
    'label': 'Landorus_Therian',
    'value': '645b,289,179,205'
  },
  {
    'label': 'Kyurem',
    'value': '646b,246,170,245'
  },
  {
    'label': 'Kyurem_Black',
    'value': '646b,310,183,245'
  },
  {
    'label': 'Kyurem_White',
    'value': '646b,310,183,245'
  },
  {
    'label': 'Keldeo',
    'value': '647b,260,192,209'
  },
  {
    'label': 'Meloetta_Aria',
    'value': '648b,250,225,225'
  },
  {
    'label': 'Meloetta_Pirouette',
    'value': '648b,269,188,225'
  },
  {
    'label': 'Genesect',
    'value': '649b,252,199,174'
  },
  {
    'label': 'Chespin',
    'value': '650b,110,106,148,651,652'
  },
  {
    'label': 'Quilladin',
    'value': '651,146,156,156,650b,652'
  },
  {
    'label': 'Chesnaught',
    'value': '652,201,204,204,650b,651'
  },
  {
    'label': 'Fennekin',
    'value': '653b,116,102,120,654,655'
  },
  {
    'label': 'Braixen',
    'value': '654,171,130,153,653b,655'
  },
  {
    'label': 'Delphox',
    'value': '655,230,189,181,653b,654'
  },
  {
    'label': 'Froakie',
    'value': '656b,122,84,121,657,658'
  },
  {
    'label': 'Frogadier',
    'value': '657,168,114,144,656b,658'
  },
  {
    'label': 'Greninja',
    'value': '658,223,152,176,656b,657'
  },
  {
    'label': 'Bunnelby',
    'value': '659b,68,72,116,660'
  },
  {
    'label': 'Diggersby',
    'value': '660,112,155,198,659b'
  },
  {
    'label': 'Fletchling',
    'value': '661b,95,80,128,662,663'
  },
  {
    'label': 'Fletchinder',
    'value': '662,145,110,158,661b,663'
  },
  {
    'label': 'Talonflame',
    'value': '663,176,155,186,661b,662'
  },
  {
    'label': 'Scatterbug',
    'value': '664b,63,63,116,665,666'
  },
  {
    'label': 'Spewpa',
    'value': '665,48,89,128,664b,666'
  },
  {
    'label': 'Vivillon',
    'value': '666,176,103,190,664b,665'
  },
  {
    'label': 'Litleo',
    'value': '667b,139,112,158,668'
  },
  {
    'label': 'Pyroar',
    'value': '668,221,149,200,667b'
  },
  {
    'label': 'Flabebe',
    'value': '669b,108,120,127,670,671'
  },
  {
    'label': 'Floette',
    'value': '670,136,151,144,669b,671'
  },
  {
    'label': 'Florges',
    'value': '671,212,244,186,669b,670'
  },
  {
    'label': 'Skiddo',
    'value': '672b,123,102,165,673'
  },
  {
    'label': 'Gogoat',
    'value': '673,196,146,265,672b'
  },
  {
    'label': 'Pancham',
    'value': '674b,145,107,167,675'
  },
  {
    'label': 'Pangoro',
    'value': '675,226,146,216,674b'
  },
  {
    'label': 'Furfrou',
    'value': '676b,164,167,181'
  },
  {
    'label': 'Espurr',
    'value': '677b,120,114,158,678'
  },
  {
    'label': 'Meowstic',
    'value': '678,166,167,179,677b'
  },
  {
    'label': 'Honedge_SPECULATIVE',
    'value': '679b,135,139,128,680'
  },
  {
    'label': 'Doublade_SPECULATIVE',
    'value': '680,188,206,153,679b'
  },
  {
    'label': 'Aegislash_PLACEHOLDER',
    'value': '681b,1,1,1'
  },
  {
    'label': 'Spritzee',
    'value': '682b,110,113,186,683'
  },
  {
    'label': 'Aromatisse',
    'value': '683,173,150,226,682b'
  },
  {
    'label': 'Swirlix',
    'value': '684b,109,119,158,685'
  },
  {
    'label': 'Slurpuff',
    'value': '685,168,163,193,684b'
  },
  {
    'label': 'Inkay',
    'value': '686b,98,95,142,687'
  },
  {
    'label': 'Malamar',
    'value': '687,177,165,200,686b'
  },
  {
    'label': 'Binacle',
    'value': '688b,96,120,123,689'
  },
  {
    'label': 'Barbaracle',
    'value': '689,194,205,176,688b'
  },
  {
    'label': 'Skrelp',
    'value': '690b,109,109,137,691'
  },
  {
    'label': 'Dragalge',
    'value': '691,177,207,163,690b'
  },
  {
    'label': 'Clauncher',
    'value': '692b,108,117,137,693'
  },
  {
    'label': 'Clawitzer',
    'value': '693,221,171,174,692b'
  },
  {
    'label': 'Helioptile',
    'value': '694b,115,78,127,695'
  },
  {
    'label': 'Heliolisk',
    'value': '695,219,168,158,694b'
  },
  {
    'label': 'Tyrunt',
    'value': '696b,158,123,151,697'
  },
  {
    'label': 'Tyrantrum',
    'value': '697,227,191,193,696b'
  },
  {
    'label': 'Amaura',
    'value': '698b,124,109,184,699'
  },
  {
    'label': 'Aurorus',
    'value': '699,186,163,265,698b'
  },
  {
    'label': 'Sylveon',
    'value': '700,203,205,216,133b,134,135,136,196,197,470,471'
  },
  {
    'label': 'Hawlucha',
    'value': '701b,195,153,186'
  },
  {
    'label': 'Dedenne',
    'value': '702b,164,134,167'
  },
  {
    'label': 'Carbink',
    'value': '703b,95,285,137'
  },
  {
    'label': 'Goomy',
    'value': '704b,101,112,128,705,706'
  },
  {
    'label': 'Sliggoo',
    'value': '705,159,176,169,704b,706'
  },
  {
    'label': 'Goodra',
    'value': '706,220,242,207,704b,705'
  },
  {
    'label': 'Klefki',
    'value': '707b,160,179,149'
  },
  {
    'label': 'Phantump',
    'value': '708b,125,103,125,709'
  },
  {
    'label': 'Trevenant',
    'value': '709,201,154,198,708b'
  },
  {
    'label': 'Pumpkaboo_Average',
    'value': '710b&!xs&!xl&!xxl,121,123,135,711&!xs&!xl&!xxl'
  },
  {
    'label': 'Pumpkaboo_Large',
    'value': '710b&xl,120,122,144,711&xl'
  },
  {
    'label': 'Pumpkaboo_Small',
    'value': '710b&xs,122,124,127,711&xs'
  },
  {
    'label': 'Pumpkaboo_Super',
    'value': '710b&xxl,118,120,153,711&xxl'
  },
  {
    'label': 'Gourgeist_Average',
    'value': '711&!xs&!xl&!xxl,175,213,163,710b&!xs&!xl&!xxl'
  },
  {
    'label': 'Gourgeist_Large',
    'value': '711&xl,179,206,181,710b&xl'
  },
  {
    'label': 'Gourgeist_Small',
    'value': '711&xs,171,219,146,710b&xs'
  },
  {
    'label': 'Gourgeist_Super',
    'value': '711&xxl,182,200,198,710b&xxl'
  },
  {
    'label': 'Bergmite',
    'value': '712b,117,120,146,713'
  },
  {
    'label': 'Avalugg',
    'value': '713,196,240,216,712b'
  },
  {
    'label': 'Noibat',
    'value': '714b,83,73,120,715'
  },
  {
    'label': 'Noivern',
    'value': '715,205,175,198,714b'
  },
  {
    'label': 'Xerneas',
    'value': '716b,250,185,246'
  },
  {
    'label': 'Yveltal',
    'value': '717b,250,185,246'
  },
  {
    'label': 'Zygarde_SPECULATIVE',
    'value': '718b,185,211,389'
  },
  {
    'label': 'Diancie',
    'value': '719b&!mega,190,285,137'
  },
  {
    'label': 'Mega_Diancie_PLACEHOLDER',
    'value': '719b&mega,1,1,1'
  },
  {
    'label': 'Hoopa_Confined',
    'value': '720,261,187,173'
  },
  {
    'label': 'Hoopa_Unbound',
    'value': '720,311,191,173'
  },
  {
    'label': 'Volcanion',
    'value': '721,252,216,190'
  },
  {
    'label': 'Rowlet_PLACEHOLDER',
    'value': '722b,1,1,1,723,724'
  },
  {
    'label': 'Dartrix_PLACEHOLDER',
    'value': '723,1,1,1,722b,724'
  },
  {
    'label': 'Decidueye_PLACEHOLDER',
    'value': '724,1,1,1,722b,723'
  },
  {
    'label': 'Litten_PLACEHOLDER',
    'value': '725b,1,1,1,726,727'
  },
  {
    'label': 'Torracat_PLACEHOLDER',
    'value': '726,1,1,1,725b,727'
  },
  {
    'label': 'Incineroar_PLACEHOLDER',
    'value': '727,1,1,1,725b,726'
  },
  {
    'label': 'Popplio_PLACEHOLDER',
    'value': '728b,1,1,1,729,730'
  },
  {
    'label': 'Brionne_PLACEHOLDER',
    'value': '729,1,1,1,728b,730'
  },
  {
    'label': 'Primarina_PLACEHOLDER',
    'value': '730,1,1,1,728b,729'
  },
  {
    'label': 'Pikipek_PLACEHOLDER',
    'value': '731b,1,1,1,732,733'
  },
  {
    'label': 'Trumbeak_PLACEHOLDER',
    'value': '732,1,1,1,731b,733'
  },
  {
    'label': 'Toucannon_PLACEHOLDER',
    'value': '733,1,1,1,731b,732'
  },
  {
    'label': 'Yungoos_PLACEHOLDER',
    'value': '734b,1,1,1,735'
  },
  {
    'label': 'Gumshoos_PLACEHOLDER',
    'value': '735,1,1,1,734b'
  },
  {
    'label': 'Grubbin_PLACEHOLDER',
    'value': '736b,1,1,1,737,738'
  },
  {
    'label': 'Charjabug_PLACEHOLDER',
    'value': '737,1,1,1,736b,738'
  },
  {
    'label': 'Vikavolt_PLACEHOLDER',
    'value': '738,1,1,1,736b,737'
  },
  {
    'label': 'Crabrawler_PLACEHOLDER',
    'value': '739b,1,1,1,740'
  },
  {
    'label': 'Crabominable_PLACEHOLDER',
    'value': '740,1,1,1,739b'
  },
  {
    'label': 'Oricorio_PLACEHOLDER',
    'value': '741b,1,1,1'
  },
  {
    'label': 'Cutiefly_PLACEHOLDER',
    'value': '742b,1,1,1,743'
  },
  {
    'label': 'Ribombee_PLACEHOLDER',
    'value': '743,1,1,1,742b'
  },
  {
    'label': 'Rockruff_PLACEHOLDER',
    'value': '744b,1,1,1,745'
  },
  {
    'label': 'Lycanroc_Midday_PLACEHOLDER',
    'value': '745,1,1,1,744b'
  },
  {
    'label': 'Lycanroc_Midnight_PLACEHOLDER',
    'value': '745,1,1,1,744b'
  },
  {
    'label': 'Lycanroc_Dusk_PLACEHOLDER',
    'value': '745,1,1,1,744b'
  },
  {
    'label': 'Wishiwashi_Solo_PLACEHOLDER',
    'value': '746b,1,1,1'
  },
  {
    'label': 'Wishiwashi_School_PLACEHOLDER',
    'value': '746b,1,1,1'
  },
  {
    'label': 'Mareanie_PLACEHOLDER',
    'value': '747b,1,1,1,748'
  },
  {
    'label': 'Toxapex_PLACEHOLDER',
    'value': '748,1,1,1,747b'
  },
  {
    'label': 'Mudbray_PLACEHOLDER',
    'value': '749b,1,1,1,750'
  },
  {
    'label': 'Mudsdale_PLACEHOLDER',
    'value': '750,1,1,1,749b'
  },
  {
    'label': 'Dewpider_PLACEHOLDER',
    'value': '751b,1,1,1,752'
  },
  {
    'label': 'Araquanid_PLACEHOLDER',
    'value': '752,1,1,1,751b'
  },
  {
    'label': 'Fomantis_PLACEHOLDER',
    'value': '753b,1,1,1,754'
  },
  {
    'label': 'Lurantis_PLACEHOLDER',
    'value': '754,1,1,1,753b'
  },
  {
    'label': 'Morelull_PLACEHOLDER',
    'value': '755b,1,1,1,756'
  },
  {
    'label': 'Shiinotic_PLACEHOLDER',
    'value': '756,1,1,1,755b'
  },
  {
    'label': 'Salandit_PLACEHOLDER',
    'value': '757b,1,1,1,758'
  },
  {
    'label': 'Salazzle_PLACEHOLDER',
    'value': '758,1,1,1,757b'
  },
  {
    'label': 'Stufful_PLACEHOLDER',
    'value': '759b,1,1,1,760'
  },
  {
    'label': 'Bewear_PLACEHOLDER',
    'value': '760,1,1,1,759b'
  },
  {
    'label': 'Bounsweet_PLACEHOLDER',
    'value': '761b,1,1,1,762,763'
  },
  {
    'label': 'Steenee_PLACEHOLDER',
    'value': '762,1,1,1,761b,763'
  },
  {
    'label': 'Tsareena_PLACEHOLDER',
    'value': '763,1,1,1,761b,762'
  },
  {
    'label': 'Comfey_PLACEHOLDER',
    'value': '764b,1,1,1'
  },
  {
    'label': 'Oranguru_PLACEHOLDER',
    'value': '765b,1,1,1'
  },
  {
    'label': 'Passimian_PLACEHOLDER',
    'value': '766b,1,1,1'
  },
  {
    'label': 'Wimpod_PLACEHOLDER',
    'value': '767b,1,1,1,768'
  },
  {
    'label': 'Golisopod_PLACEHOLDER',
    'value': '768,1,1,1,767b'
  },
  {
    'label': 'Sandygast_PLACEHOLDER',
    'value': '769b,1,1,1,770'
  },
  {
    'label': 'Palossand_PLACEHOLDER',
    'value': '770,1,1,1,769b'
  },
  {
    'label': 'Pyukumuku_PLACEHOLDER',
    'value': '771b,1,1,1'
  },
  {
    'label': 'Type_Null_PLACEHOLDER',
    'value': '772b,1,1,1,773'
  },
  {
    'label': 'Silvally_PLACEHOLDER',
    'value': '773,1,1,1,772b'
  },
  {
    'label': 'Minior_Meteor_PLACEHOLDER',
    'value': '774b,1,1,1'
  },
  {
    'label': 'Minior_Core_PLACEHOLDER',
    'value': '774b,1,1,1'
  },
  {
    'label': 'Komala_PLACEHOLDER',
    'value': '775b,1,1,1'
  },
  {
    'label': 'Turtonator_PLACEHOLDER',
    'value': '776b,1,1,1'
  },
  {
    'label': 'Togedemaru_PLACEHOLDER',
    'value': '777b,1,1,1'
  },
  {
    'label': 'Mimikyu_PLACEHOLDER',
    'value': '778b,1,1,1'
  },
  {
    'label': 'Bruxish_PLACEHOLDER',
    'value': '779b,1,1,1'
  },
  {
    'label': 'Drampa_PLACEHOLDER',
    'value': '780b,1,1,1'
  },
  {
    'label': 'Dhelmise_PLACEHOLDER',
    'value': '781b,1,1,1'
  },
  {
    'label': 'Jangmo_O_PLACEHOLDER',
    'value': '782b,1,1,1,783,784'
  },
  {
    'label': 'Hakamo_O_PLACEHOLDER',
    'value': '783,1,1,1,782b,784'
  },
  {
    'label': 'Kommo_O_PLACEHOLDER',
    'value': '784,1,1,1,782b,783'
  },
  {
    'label': 'Tapu_Koko_PLACEHOLDER',
    'value': '785b,1,1,1'
  },
  {
    'label': 'Tapu_Lele_PLACEHOLDER',
    'value': '786b,1,1,1'
  },
  {
    'label': 'Tapu_Bulu_PLACEHOLDER',
    'value': '787b,1,1,1'
  },
  {
    'label': 'Tapu_Fini_PLACEHOLDER',
    'value': '788b,1,1,1'
  },
  {
    'label': 'Cosmog_PLACEHOLDER',
    'value': '789b,1,1,1,790,791,792'
  },
  {
    'label': 'Cosmoem_PLACEHOLDER',
    'value': '790,1,1,1,789b,791,792'
  },
  {
    'label': 'Solgaleo_PLACEHOLDER',
    'value': '791,1,1,1,789b,790'
  },
  {
    'label': 'Lunala_PLACEHOLDER',
    'value': '792,1,1,1,789b,790'
  },
  {
    'label': 'Nihilego_PLACEHOLDER',
    'value': '793b,1,1,1'
  },
  {
    'label': 'Buzzwole_PLACEHOLDER',
    'value': '794b,1,1,1'
  },
  {
    'label': 'Pheromosa_PLACEHOLDER',
    'value': '795b,1,1,1'
  },
  {
    'label': 'Xurkitree_PLACEHOLDER',
    'value': '796b,1,1,1'
  },
  {
    'label': 'Celesteela_PLACEHOLDER',
    'value': '797b,1,1,1'
  },
  {
    'label': 'Kartana_PLACEHOLDER',
    'value': '798b,1,1,1'
  },
  {
    'label': 'Guzzlord_PLACEHOLDER',
    'value': '799b,1,1,1'
  },
  {
    'label': 'Necrozma_PLACEHOLDER',
    'value': '800b,1,1,1'
  },
  {
    'label': 'Necrozma_Dusk_Mane_PLACEHOLDER',
    'value': '800b,1,1,1'
  },
  {
    'label': 'Necrozma_Dawn_Wings_PLACEHOLDER',
    'value': '800b,1,1,1'
  },
  {
    'label': 'Ultra_Necrozma_PLACEHOLDER',
    'value': '800b,1,1,1'
  },
  {
    'label': 'Magearna_PLACEHOLDER',
    'value': '801b,1,1,1'
  },
  {
    'label': 'Marshadow_PLACEHOLDER',
    'value': '802b,1,1,1'
  },
  {
    'label': 'Poipole_PLACEHOLDER',
    'value': '803b,1,1,1,804'
  },
  {
    'label': 'Naganadel_PLACEHOLDER',
    'value': '804,1,1,1,803b'
  },
  {
    'label': 'Stakataka_PLACEHOLDER',
    'value': '805b,1,1,1'
  },
  {
    'label': 'Blacephalon_PLACEHOLDER',
    'value': '806b,1,1,1'
  },
  {
    'label': 'Zeraora_PLACEHOLDER',
    'value': '807b,1,1,1'
  },
  {
    'label': 'Meltan',
    'value': '808b,118,99,130,809'
  },
  {
    'label': 'Melmetal',
    'value': '809,226,190,264,808b'
  },
  {
    'label': 'Grookey',
    'value': '810b,122,91,137,811,812'
  },
  {
    'label': 'Thwackey',
    'value': '811,165,134,172,810b,812'
  },
  {
    'label': 'Rillaboom',
    'value': '812,239,168,225,810b,811'
  },
  {
    'label': 'Scorbunny',
    'value': '813b,132,79,137,814,815'
  },
  {
    'label': 'Raboot',
    'value': '814,170,125,163,813b,815'
  },
  {
    'label': 'Cinderace',
    'value': '815,238,163,190,813b,814'
  },
  {
    'label': 'Sobble',
    'value': '816b,132,79,137,817,818'
  },
  {
    'label': 'Drizzile',
    'value': '817,186,113,163,816b,818'
  },
  {
    'label': 'Inteleon',
    'value': '818,262,142,172,816b,817'
  },
  {
    'label': 'Skwovet',
    'value': '819b,95,86,172,820'
  },
  {
    'label': 'Greedent',
    'value': '820,160,156,260,819b'
  },
  {
    'label': 'Rookidee',
    'value': '821b,88,67,116,822,823'
  },
  {
    'label': 'Corvisquire',
    'value': '822,129,110,169,821b,823'
  },
  {
    'label': 'Corviknight',
    'value': '823,163,192,221,821b,822'
  },
  {
    'label': 'Blipbug',
    'value': '824b,46,67,93,825,826'
  },
  {
    'label': 'Dottler',
    'value': '825,87,157,137,824b,826'
  },
  {
    'label': 'Orbeetle',
    'value': '826,156,240,155,824b,825'
  },
  {
    'label': 'Nickit',
    'value': '827b,85,82,120,828'
  },
  {
    'label': 'Thievul',
    'value': '828,172,164,172,827b'
  },
  {
    'label': 'Gossifleur',
    'value': '829b,70,104,120,830'
  },
  {
    'label': 'Eldegoss',
    'value': '830,148,211,155,829b'
  },
  {
    'label': 'Wooloo',
    'value': '831b,76,97,123,832'
  },
  {
    'label': 'Dubwool',
    'value': '832,159,198,176,831b'
  },
  {
    'label': 'Chewtle',
    'value': '833b,114,85,137,834'
  },
  {
    'label': 'Drednaw',
    'value': '834,213,164,207,833b'
  },
  {
    'label': 'Yamper',
    'value': '835b,80,90,153,836'
  },
  {
    'label': 'Boltund',
    'value': '836,197,131,170,835b'
  },
  {
    'label': 'Rolycoly',
    'value': '837b,73,91,102,838,839'
  },
  {
    'label': 'Carkol',
    'value': '838,114,157,190,837b,839'
  },
  {
    'label': 'Coalossal',
    'value': '839,146,198,242,837b,838'
  },
  {
    'label': 'Applin',
    'value': '840b,71,116,120,841,842'
  },
  {
    'label': 'Flapple',
    'value': '841,214,144,172,840b'
  },
  {
    'label': 'Appletun',
    'value': '842,214,144,172,840b'
  },
  {
    'label': 'Silicobra',
    'value': '843b,103,123,141,844'
  },
  {
    'label': 'Sandaconda',
    'value': '844,202,207,176,843b'
  },
  {
    'label': 'Cramorant',
    'value': '845b,173,163,172'
  },
  {
    'label': 'Arrokuda',
    'value': '846b,118,72,121,847'
  },
  {
    'label': 'Barraskewda',
    'value': '847,258,127,156,846b'
  },
  {
    'label': 'Toxel',
    'value': '848b,97,65,120,849'
  },
  {
    'label': 'Toxtricity',
    'value': '849,224,140,181,848b'
  },
  {
    'label': 'Sizzlipede',
    'value': '850b,118,90,137,851'
  },
  {
    'label': 'Centiskorch',
    'value': '851,220,158,225,850b'
  },
  {
    'label': 'Clobbopus',
    'value': '852b,121,103,137,853'
  },
  {
    'label': 'Grapploct',
    'value': '853,209,162,190,852b'
  },
  {
    'label': 'Sinistea',
    'value': '854b,134,96,120,855'
  },
  {
    'label': 'Polteageist',
    'value': '855,248,189,155,854b'
  },
  {
    'label': 'Hatenna',
    'value': '856b,98,93,123,857,858'
  },
  {
    'label': 'Hattrem',
    'value': '857,153,133,149,856b,858'
  },
  {
    'label': 'Hatterene',
    'value': '858,237,182,149,856b,857'
  },
  {
    'label': 'Impidimp',
    'value': '859b,103,69,128,860,861'
  },
  {
    'label': 'Morgrem',
    'value': '860,145,102,163,859b,861'
  },
  {
    'label': 'Grimmsnarl',
    'value': '861,227,139,216,859b,860'
  },
  {
    'label': 'Obstagoon',
    'value': '862,180,194,212,263b&galar,264&galar'
  },
  {
    'label': 'Perrserker',
    'value': '863,195,162,172,52b&!alola&galar'
  },
  {
    'label': 'Cursola',
    'value': '864,253,182,155,222b&galar'
  },
  {
    'label': 'Sirfetchd',
    'value': '865,248,176,158,83b&galar'
  },
  {
    'label': 'Mr_Rime',
    'value': '866,212,179,190,122b&galar'
  },
  {
    'label': 'Runerigus',
    'value': '867,163,237,151,562b'
  },
  {
    'label': 'Milcery',
    'value': '868b,90,97,128,869'
  },
  {
    'label': 'Alcremie',
    'value': '869,203,203,163,868b'
  },
  {
    'label': 'Falinks',
    'value': '870b,193,170,163'
  },
  {
    'label': 'Pincurchin',
    'value': '871b,176,161,134'
  },
  {
    'label': 'Snom',
    'value': '872b,76,59,102,873'
  },
  {
    'label': 'Frosmoth',
    'value': '873,230,155,172,872b'
  },
  {
    'label': 'Stonjourner',
    'value': '874b,222,182,225'
  },
  {
    'label': 'Eiscue_Ice_Face',
    'value': '875b,148,195,181'
  },
  {
    'label': 'Eiscue_Noice_Face',
    'value': '875b,173,139,181'
  },
  {
    'label': 'Indeedee',
    'value': '876b,208,166,155'
  },
  {
    'label': 'Morpeko',
    'value': '877b,192,121,151'
  },
  {
    'label': 'Cufant',
    'value': '878b,140,91,176,879'
  },
  {
    'label': 'Copperajah',
    'value': '879,226,126,263,878b'
  },
  {
    'label': 'Dracozolt',
    'value': '880b,195,165,207'
  },
  {
    'label': 'Arctozolt',
    'value': '881b,190,166,207'
  },
  {
    'label': 'Dracovish',
    'value': '882b,175,185,207'
  },
  {
    'label': 'Arctovish',
    'value': '883b,171,185,207'
  },
  {
    'label': 'Duraludon',
    'value': '884b,239,185,172'
  },
  {
    'label': 'Dreepy',
    'value': '885b,117,61,99,886,887'
  },
  {
    'label': 'Drakloak',
    'value': '886,163,105,169,885b,887'
  },
  {
    'label': 'Dragapult',
    'value': '887,266,170,204,885b,886'
  },
  {
    'label': 'Zacian_Hero_of_Many_Battles',
    'value': '888b,254,236,192'
  },
  {
    'label': 'Zacian_Crowned_Sword',
    'value': '888b,332,240,192'
  },
  {
    'label': 'Zamazenta_Hero_of_Many_Battles',
    'value': '889b,254,236,192'
  },
  {
    'label': 'Zamazenta_Crowned_Sword',
    'value': '889b,250,292,192'
  },
  {
    'label': 'Eternatus',
    'value': '890b,278,192,268'
  },
  {
    'label': 'Kubfu',
    'value': '891b,170,112,155,892'
  },
  {
    'label': 'Urshifu',
    'value': '892,231,162,205,891b'
  },
  {
    'label': 'Zarude',
    'value': '893b,242,215,233'
  },
  {
    'label': 'Regieleki',
    'value': '894b,228,114,173'
  },
  {
    'label': 'Regidrago',
    'value': '895b,184,92,364'
  },
  {
    'label': 'Glastrier',
    'value': '896b,224,203,205'
  },
  {
    'label': 'Spectrier',
    'value': '897b,273,146,205'
  },
  {
    'label': 'Calyrex',
    'value': '898b,147,147,205'
  },
  {
    'label': 'Ice_Rider_Calyrex',
    'value': '898b,268,246,205'
  },
  {
    'label': 'Shadow_Rider_Calyrex',
    'value': '898b,324,194,205'
  }
];