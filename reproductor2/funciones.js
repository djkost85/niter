var subs;
//var embed_url = "http://embed_url.com/video";
var the_permalink = "";
try{
	the_permalink = top.location.href;
}catch(e){}
var backimg = "";


var t;
var OpcionSel = 0;
var METHODJAVA = 1;
var METHODGK = 3;
var METHODIFRAME = 4;
var METHODPK = 5;
var sourceSelected = -1;
var ESTADO_NONE = -1;
var ESTADO_INIT = 0;
var ESTADO_COUNTDOWN = 1;
var ESTADO_CAPTCHA = 3;
var ESTADO_PLAYING = 4;
var ESTADO_SHOWINGIFRAME = 5;
var ESTADO_SHOWINGERROR = 6;
var estado = -1;
var reg = /(.*)\/.+?php\?/;
var actualPath = "/reproductor2/";
var pkPath = actualPath + "/pk";
isoLangs = {
	"aa": ["Afar", "Afar"],
	"ab": ["Abkhazian", "Аҧсуа"],
	"af": ["Afrikaans", "Afrikaans"],
	"ak": ["Akan", "Akana"],
	"am": ["Amharic", "አማርኛ"],
	"an": ["Aragonese", "Aragonés"],
	"ar": ["Arabic", "العربية"],
	"as": ["Assamese", "অসমীয়া"],
	"av": ["Avar", "Авар"],
	"ay": ["Aymara", "Aymar"],
	"az": ["Azerbaijani", "Azərbaycanca / آذربايجان"],
	"ba": ["Bashkir", "Башҡорт"],
	"be": ["Belarusian", "Беларуская"],
	"bg": ["Bulgarian", "Български"],
	"bh": ["Bihari", "भोजपुरी"],
	"bi": ["Bislama", "Bislama"],
	"bm": ["Bambara", "Bamanankan"],
	"bn": ["Bengali", "বাংলা"],
	"bo": ["Tibetan", "བོད་ཡིག / Bod skad"],
	"br": ["Breton", "Brezhoneg"],
	"bs": ["Bosnian", "Bosanski"],
	"ca": ["Catalan", "Català"],
	"ce": ["Chechen", "Нохчийн"],
	"ch": ["Chamorro", "Chamoru"],
	"co": ["Corsican", "Corsu"],
	"cr": ["Cree", "Nehiyaw"],
	"cs": ["Czech", "Česky"],
	"cu": ["Old Church Slavonic / Old Bulgarian", "словѣньскъ / slověnĭskŭ"],
	"cv": ["Chuvash", "Чăваш"],
	"cy": ["Welsh", "Cymraeg"],
	"da": ["Danish", "Dansk"],
	"de": ["German", "Deutsch"],
	"dv": ["Divehi", "ދިވެހިބަސް"],
	"dz": ["Dzongkha", "ཇོང་ཁ"],
	"ee": ["Ewe", "Ɛʋɛ"],
	"el": ["Greek", "Ελληνικά"],
	"en": ["English", "English"],
	"eo": ["Esperanto", "Esperanto"],
	"es": ["Spanish", "Español"],
	"et": ["Estonian", "Eesti"],
	"eu": ["Basque", "Euskara"],
	"fa": ["Persian", "فارسی"],
	"ff": ["Peul", "Fulfulde"],
	"fi": ["Finnish", "Suomi"],
	"fj": ["Fijian", "Na Vosa Vakaviti"],
	"fo": ["Faroese", "Føroyskt"],
	"fr": ["French", "Français"],
	"fy": ["West Frisian", "Frysk"],
	"ga": ["Irish", "Gaeilge"],
	"gd": ["Scottish Gaelic", "Gàidhlig"],
	"gl": ["Galician", "Galego"],
	"gn": ["Guarani", "Avañe'ẽ"],
	"gu": ["Gujarati", "ગુજરાતી"],
	"gv": ["Manx", "Gaelg"],
	"ha": ["Hausa", "هَوُسَ"],
	"he": ["Hebrew", "עברית"],
	"hi": ["Hindi", "हिन्दी"],
	"ho": ["Hiri Motu", "Hiri Motu"],
	"hr": ["Croatian", "Hrvatski"],
	"ht": ["Haitian", "Krèyol ayisyen"],
	"hu": ["Hungarian", "Magyar"],
	"hy": ["Armenian", "Հայերեն"],
	"hz": ["Herero", "Otsiherero"],
	"ia": ["Interlingua", "Interlingua"],
	"id": ["Indonesian", "Bahasa Indonesia"],
	"ie": ["Interlingue", "Interlingue"],
	"ig": ["Igbo", "Igbo"],
	"ii": ["Sichuan Yi", "ꆇꉙ / 四川彝语"],
	"ik": ["Inupiak", "Iñupiak"],
	"io": ["Ido", "Ido"],
	"is": ["Icelandic", "Íslenska"],
	"it": ["Italian", "Italiano"],
	"iu": ["Inuktitut", "ᐃᓄᒃᑎᑐᑦ"],
	"ja": ["Japanese", "日本語"],
	"jv": ["Javanese", "Basa Jawa"],
	"ka": ["Georgian", "ქართული"],
	"kg": ["Kongo", "KiKongo"],
	"ki": ["Kikuyu", "Gĩkũyũ"],
	"kj": ["Kuanyama", "Kuanyama"],
	"kk": ["Kazakh", "Қазақша"],
	"kl": ["Greenlandic", "Kalaallisut"],
	"km": ["Cambodian", "ភាសាខ្មែរ"],
	"kn": ["Kannada", "ಕನ್ನಡ"],
	"ko": ["Korean", "한국어"],
	"kr": ["Kanuri", "Kanuri"],
	"ks": ["Kashmiri", "कश्मीरी / كشميري"],
	"ku": ["Kurdish", "Kurdî / كوردی"],
	"kv": ["Komi", "Коми"],
	"kw": ["Cornish", "Kernewek"],
	"ky": ["Kirghiz", "Kırgızca / Кыргызча"],
	"la": ["Latin", "Latina"],
	"lb": ["Luxembourgish", "Lëtzebuergesch"],
	"lg": ["Ganda", "Luganda"],
	"li": ["Limburgian", "Limburgs"],
	"ln": ["Lingala", "Lingála"],
	"lo": ["Laotian", "ລາວ / Pha xa lao"],
	"lt": ["Lithuanian", "Lietuvių"],
	"lv": ["Latvian", "Latviešu"],
	"mg": ["Malagasy", "Malagasy"],
	"mh": ["Marshallese", "Kajin Majel / Ebon"],
	"mi": ["Maori", "Māori"],
	"mk": ["Macedonian", "Македонски"],
	"ml": ["Malayalam", "മലയാളം"],
	"mn": ["Mongolian", "Монгол"],
	"mo": ["Moldovan", "Moldovenească"],
	"mr": ["Marathi", "मराठी"],
	"ms": ["Malay", "Bahasa Melayu"],
	"mt": ["Maltese", "bil-Malti"],
	"my": ["Burmese", "Myanmasa"],
	"na": ["Nauruan", "Dorerin Naoero"],
	"nd": ["North Ndebele", "Sindebele"],
	"ne": ["Nepali", "नेपाली"],
	"ng": ["Ndonga", "Oshiwambo"],
	"nl": ["Dutch", "Nederlands"],
	"nn": ["Norwegian Nynorsk", "Norsk (nynorsk)"],
	"no": ["Norwegian", "Norsk (bokmål / riksmål)"],
	"nr": ["South Ndebele", "isiNdebele"],
	"nv": ["Navajo", "Diné bizaad"],
	"ny": ["Chichewa", "Chi-Chewa"],
	"oc": ["Occitan", "Occitan"],
	"oj": ["Ojibwa", "ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"],
	"om": ["Oromo", "Oromoo"],
	"or": ["Oriya", "ଓଡ଼ିଆ"],
	"os": ["Ossetian / Ossetic", "Иронау"],
	"pa": ["Panjabi / Punjabi", "ਪੰਜਾਬੀ / पंजाबी / پنجابي"],
	"pi": ["Pali", "Pāli / पाऴि"],
	"pl": ["Polish", "Polski"],
	"ps": ["Pashto", "پښتو"],
	"pt": ["Portuguese", "Português"],
	"qu": ["Quechua", "Runa Simi"],
	"rm": ["Raeto Romance", "Rumantsch"],
	"rn": ["Kirundi", "Kirundi"],
	"ro": ["Romanian", "Română"],
	"ru": ["Russian", "Русский"],
	"rw": ["Rwandi", "Kinyarwandi"],
	"sa": ["Sanskrit", "संस्कृतम्"],
	"sc": ["Sardinian", "Sardu"],
	"sd": ["Sindhi", "सिनधि"],
	"se": ["Northern Sami", "Sámegiella"],
	"sg": ["Sango", "Sängö"],
	"sh": ["Serbo-Croatian", "Srpskohrvatski / Српскохрватски"],
	"si": ["Sinhalese", "සිංහල"],
	"sk": ["Slovak", "Slovenčina"],
	"sl": ["Slovenian", "Slovenščina"],
	"sm": ["Samoan", "Gagana Samoa"],
	"sn": ["Shona", "chiShona"],
	"so": ["Somalia", "Soomaaliga"],
	"sq": ["Albanian", "Shqip"],
	"sr": ["Serbian", "Српски"],
	"ss": ["Swati", "SiSwati"],
	"st": ["Southern Sotho", "Sesotho"],
	"su": ["Sundanese", "Basa Sunda"],
	"sv": ["Swedish", "Svenska"],
	"sw": ["Swahili", "Kiswahili"],
	"ta": ["Tamil", "தமிழ்"],
	"te": ["Telugu", "తెలుగు"],
	"tg": ["Tajik", "Тоҷикӣ"],
	"th": ["Thai", "ไทย / Phasa Thai"],
	"ti": ["Tigrinya", "ትግርኛ"],
	"tk": ["Turkmen", "Туркмен / تركمن"],
	"tl": ["Tagalog / Filipino", "Tagalog"],
	"tn": ["Tswana", "Setswana"],
	"to": ["Tonga", "Lea Faka-Tonga"],
	"tr": ["Turkish", "Türkçe"],
	"ts": ["Tsonga", "Xitsonga"],
	"tt": ["Tatar", "Tatarça"],
	"tw": ["Twi", "Twi"],
	"ty": ["Tahitian", "Reo Mā`ohi"],
	"ug": ["Uyghur", "Uyƣurqə / ئۇيغۇرچە"],
	"uk": ["Ukrainian", "Українська"],
	"ur": ["Urdu", "اردو"],
	"uz": ["Uzbek", "Ўзбек"],
	"ve": ["Venda", "Tshivenḓa"],
	"vi": ["Vietnamese", "Tiếng Việt"],
	"vo": ["Volapük", "Volapük"],
	"wa": ["Walloon", "Walon"],
	"wo": ["Wolof", "Wollof"],
	"xh": ["Xhosa", "isiXhosa"],
	"yi": ["Yiddish", "ייִדיש"],
	"yo": ["Yoruba", "Yorùbá"],
	"za": ["Zhuang", "Cuengh / Tôô / 壮语"],
	"zh": ["Chinese", "中文"],
	"zu": ["Zulu", "isiZulu"]
};
labelsMethod = {
	"java": "Java",
	"gk": "Flash",
	"gkjar": "Java",
	"pk": "Flash",
	"download": "Download",
	"iframe": "Flash",
	"dir": "Flash",
	"swf": "Flash",
	"php": "Easy"
}

prioridad = ["pic", "doc", "bit", "bs", "up", "vb", "fk", "vk1", "vk2", "bill", "mig", "upa", "dp", "ifvm", "bf", "dv", "fb"];

sourcesConfig = {
	 "fdr": {
		"label": "Firedrive",
		"image": "",
		"method": "swf",
		"config": ""
	},
	"embfd":{
	"label":"Firedrive",
	"image":"",
	"method":"iframe",
	"config":"",
	"pre":"http://www.firedrive.com/embed/"
	},
	"embnv":{
	  "label":"Nowvideo",
	  "image":"",
	  "method":"iframe",
	  "config":"",
	  "pre":"http://embed.nowvideo.sx/embed.php?v="
	},
	"embyx":{
	  "label":"Yandex",
	  "image":"",
	  "method":"iframe",
	  "config":"",
	  "pre":"http://video.yandex.ru/iframe/"
	},
	"embsk":{
	  "label":"Sockshare",
	  "image":"",
	  "method":"iframe",
	  "config":"",
	  "pre":"http://www.sockshare.com/embed/"
	},
	"emb":{
	  "label":"External",
	  "image":"",
	  "method":"iframe",
	  "config":"",
	  "pre":"",
	  "post":""
	},
	"pow": {
		"label": "Powvideo",
		"image": "http://www.seriespepito.com/uploads/servidores/130-41048.jpg",
		"method": "swf",
		"config": ".net|param_start"
	},
	"pla": {
		"label": "played.to",
		"image": "http://lh6.googleusercontent.com/-_SB0oOoY0N0/UWhnvlnPe8I/AAAAAAAABiA/bDNZr2k2fNU/s80/PLAYEDTO.png",
		"method": "swf",
		"config": "extnada|param_start"
	},
	"gor": {
		"label": "gorillavid",
		"image": "http://gorillavid.in/favicon.ico",
		"method": "swf",
		"config": ".in|param_start|noflv"
	},
	"moo": {
		"label": "mooshare",
		"image": "http://mooshare.biz/favicon.ico",
		"method": "swf",
		"config": ".biz|param_start"
	},
	"vzed": {
		"label": "videozed",
		"image": "http://oi42.tinypic.com/2yn0zld.jpg",
		"method": "swf",
		"config": "html5",
	"pre" : "http://videozed.net/"
	},
	"upa": {
		"label": "upafile",
		"image": "http://upafile.com/images/logo.png",
		"method": "swf",
	"pre": "http://upafile.com/",
		"config": ""
	},
	"bill": {
		"label": "billionuploads",
		"image": "http://xtrem-stream.com/links/icon/BillionUploads.jpg",
		"method": "swf",
	"pre": "http://billionuploads.com/",
		"config": "html5"
	},
	"epic": {
		"label": "epicshare",
		"image": "http://epicshare.net/img/logo.png",
		"method": "gk",
	"pre": "http://epicshare.net/",
		"config": ""
	},
	"mig": {
		"label": "mightyupload",
		"image": "http://mightyupload.com/images/logo.png",
		"method": "gk",
	"pre": "http://mightyupload.com/",
		"config": ""
	},
	"megr": {
		"label": "megarelease",
		"image": "http://megarelease.org/images/logo2.png",
		"method": "gk",
	"pre": "http://megarelease.org/",
		"config": ""
	},
	"mov": {
		"label": "movreel",
		"image": "http://movreel.com/images/logo_new.gif",
		"method": "gk",
	"pre": "http://movreel.com/",
		"config": ""
	},
	"mf": {
		"label": "mediafire",
		"image": "images/mediafire.jpg",
		"method": "java",
	"pre": "http://www.mediafire.com/?",
		"config": ""
	},
	"jb": {
		"label": "jumbofiles",
		"image": "images/jumbofiles.jpg",
		"method": "java",
	"pre": "http://www.jumbofiles.com/",
		"config": ""
	},
	"vb": {
		"label": "Mirror 3",
		"image": "images/vidbux.png",
		"method": "swf",
	"pre": "http://www.vidbux.com/",
		"config": "param_start"
	},
	"up": {
		"label": "Mirror 2",
		"image": "images/uptobox.jpg",
		"method": "swf",
	"pre": "http://www.uptobox.com/",
	"post": ".html?",
		"config": "html5"
	},
	"bs": {
		"label": "Mirror 1",
		"image": "images/bitshare.jpg",
		"method": "swf",
	"pre": "http://bitshare.com/?f=",
		"config": ""
	},
	"fk": {
		"label": "freakshare",
		"image": "images/freakshare.jpg",
		"method": "java",
	"pre": "http://www.freakshare.com/files/",
		"config": ""
	},
	"vk1": {
		"label": "vk",
		"image": "images/vk.png",
		"method": "gkjar",
	"pre": "http://vk.com/video_ext.php?",
		"config": ""
	},
	"bf": {
		"label": "bayfiles",
		"image": "images/bayfiles.jpg",
		"method": "java",
	"pre": "http://www.bayfiles.net/file/",
		"config": ""
	},
	"ra": {
		"label": "rapidgator",
		"image": "images/rapidgator.jpg",
		"method": "java",
	"pre": "http://www.rapidgator.net/file/",
		"config": ""
	},
	"dp": {
		"label": "depositefiles",
		"image": "images/depositfiles.jpg",
		"method": "java",
	"pre": "http://www.depositfiles.com/files/",
		"config": ""
	},
	"dv": {
		"label": "donevideo",
		"image": "images/donevideo.png",
		"method": "java|swf",
	"pre": "http://www.donevideo.com/",
		"config": "html5"
	},
	"za": {
		"label": "zalaa",
		"image": "images/zalaa.jpg",
		"method": "java|gk",
	"pre": "http://www.zalaa.com/",
		"config": "deshabilitar"
	},
	"pt": {
		"label": "putlocker",
		"image": "images/putlocker.png",
		"method": "java|gkjar",
	"pre": "http://www.putlocker.com/file/",
		"config": ""
	},
	"cra": {
		"label": "cramit",
		"image": "images/cramit.jpg",
		"method": "java|gk",
	"pre": "http://www.cramit.in/",
		"config": ""
	},
	"hk": {
		"label": "hulkshare",
		"image": "images/hulkshare.jpg",
		"method": "java",
	"pre": "http://www.hulkshare.com/",
		"config": ""
	},
	"180": {
		"label": "180upload",
		"image": "images/180upload.jpg",
		"method": "java",
	"pre": "http://www.180upload.com/",
		"config": ""
	},
	"ff": {
		"label": "filefactory",
		"image": "images/filefactory.jpg",
		"method": "java",
	"pre": "http://www.filefactory.com/file/",
		"config": ""
	},
	"hf": {
		"label": "hotfile",
		"image": "images/hotfile.jpg",
		"method": "java",
	"pre": "http://hotfile.com/dl/",
		"config": ""
	},
	"vk2": {
		"label": "vk2",
		"image": "images/latino.jpg",
		"method": "java",
	"pre": "http://vk.com/video_ext.php?",
		"config": ""
	},
	"dir": {
		"label": "dir",
		"image": "images/ingles.jpg",
		"method": "dir",
	"pre": "",
		"config": ""
	},
	"dir1": {
		"label": "dir1",
		"image": "images/latino.jpg",
		"method": "dir",
	"pre": "",
		"config": ""
	},
	"uc": {
		"label": "uploadcore",
		"image": "images/uploadcore.png",
		"method": "java",
	"pre": "http://www.uploadcore.com/",
		"config": ""
	},
	"vd": {
		"label": "vidbull",
		"image": "images/vidbull.png",
		"method": "java",
	"pre": "http://www.vidbull.com/",
		"config": ""
	},
	"vz": {
		"label": "videozed",
		"image": "images/videozed.png",
		"method": "java",
	"pre": "http://videozed.net/",
		"config": ""
	},
	"fb": {
		"label": "filebox",
		"image": "images/filebox.jpg",
		"method": "java",
	"pre": "http://www.filebox.com/",
		"config": ""
	},
	"ifvm": {
		"label": "videomega",
		"image": "images/ifvm.png",
		"method": "gkjar",
	"pre": "http://videomega.tv/iframe.php?ref=",
	"post": "&width=970&height=200",
		"config": ""
	},
	"pic": {
		"label": "Watch Full Movie Option 1",
		"image": "images/ifvm.png",
		"method": "php",
	"pre": "",
		"config": ""
	},
	"bit": {
		"label": "Option 2",
		"image": "https://si0.twimg.com/profile_images/2145725688/dock_icon.png",
		"method": "pk",
	"pre": "https://portal.bitcasa.com/send/",
		"config": ""
	},
	"doc": {
		"label": "Option 3",
		"image": "images/ifvm.png",
		"method": "php",
	"pre": "",
		"config": ""
	}
};

function getLink(URLparam, valor) {
	if (typeof sourcesConfig[URLparam]['pre'] != "undefined"){
		if (typeof sourcesConfig[URLparam]['post'] != "undefined"){
			return sourcesConfig[URLparam]['pre'] + valor + sourcesConfig[URLparam]['post']
		}else{
			return sourcesConfig[URLparam]['pre'] + valor
		}
	}
	if (sourcesConfig[URLparam]['config'].indexOf(".net") != -1) {
		return 'http://www.' + sourcesConfig[URLparam].label.toLowerCase() + '.net/' + valor;
	} else if (sourcesConfig[URLparam]['config'].indexOf("extnada") != -1) {
		return 'http://www.' + sourcesConfig[URLparam].label.toLowerCase() + '/' + valor;
	} else if (sourcesConfig[URLparam]['config'].indexOf(".in") != -1) {
		return 'http://www.' + sourcesConfig[URLparam].label.toLowerCase() + '.in/' + valor;
	} else if (sourcesConfig[URLparam]['config'].indexOf(".biz") != -1) {
		return 'http://www.' + sourcesConfig[URLparam].label.toLowerCase() + '.biz/' + valor;
	} else {
		return 'http://www.' + sourcesConfig[URLparam].label.toLowerCase() + '.com/' + valor;
	}
}

function get_vars(site, param, valor) {
	var ret = new Object();
	var linkTo = param;
	var paramId = valor;
	var paramSite = site.replace("1_hd", "")
		.replace("2_hd", "");
	paramSite = paramSite.replace("_hd", "");
	switch (site) {
	case "vb":
		paramId = param.split("m/")[1].split("/")[0].split("?")[0].replace(/\.html/, '');
		break;
	case "dv":
		paramId = param.split("m/")[1].split("/")[0].split("?")[0].replace(/\.html/, '');
		break;
	case "vz":
		paramId = param.split("m/")[1].split("/")[0].split("?")[0].replace(/\.html/, '');
		break;
	case "up":
		paramId = param.split("m/")[1].split("/")[0].split("?")[0].replace(/\.html/, '');
		break;
	case "uc":
		paramId = param.split("m/")[1].split("/")[0].split("&")[0];
		break;
	case "vd":
		paramId = param.match(/(?:(?=.....-([a-zA-Z0-9]*)-)|(?=\....\/([^-]{6}[a-zA-Z0-9]*))|(?=(^[^/]*$)))/).join("");
		break;
	case "bs":
		paramId = param.split("/?f=")[1].split("/")[0].split("&")[0];
		break;
	case "ff":
		paramId = param.split("file/")[1].split("/")[0].split("&")[0];
		break;
	case "dp":
		paramId = param.split("files/")[1].split("/")[0].split("&")[0];
		break;
	case "bf":
		paramId = param.split("file/")[1];
		break;
	case "fb":
		paramId = param.split("m/")[1];
		break;
	case "mf":
		paramId = param.split("?")[1].split("/")[0].split("&")[0];
		break;
	case "ra":
		paramId = param.split("file/")[1].split("/")[0].split("&")[0];
		break;
	case "180":
		paramId = param.split("m/")[1].split("/")[0].split("&")[0];
		break;
	case "fk":
		paramId = valor;
		break;
	case "za":
		paramId = param.split("m/")[1].split("/")[0].split("&")[0];
		break;
	case "cra":
		paramId = param.split("n/")[1].split("/")[0].split("&")[0];
		break;
	case "vk1":
		paramId = param.split("?")[1];
		paramSite = "vk";
		break;
	case "vk2":
		paramId = param.split("?")[1];
		paramSite = "vk";
		break;
	case "pt":
		paramId = param.split("file/")[1].split("/")[0].split("&")[0];
		break;
	case "dir":
		linkTo = "getVideo.php?v=" + encodeURIComponent(param);
		break;
	case "dir1":
		linkTo = "getVideo.php?v=" + encodeURIComponent(param);
		break;
	case "jb":
		paramId = param.split("m/")[1].split("/")[0].split("&")[0];
		break;
	case "hk":
		paramId = param.split("m/")[1].split("/")[0].split("&")[0];
		break;
	case "hf":
		paramId = param.split("dl/")[1].split("/").slice(0, 2).join("/");
		break;
	}
	ret['linkTo'] = linkTo;
	ret['paramSite'] = paramSite;
	ret['paramId'] = paramId;
	return ret;
}

function escribirApplet() {
	var agentVar = navigator.userAgent;
	var principio = '<applet code="myPackage.Main.class" archive="' + actualPath + 'myPackage.jar?v=945567" name="javaplayer" height="1" width="1" align="center" mayscript="" >';
	var fin = '</applet>';
	var aux = '<param id="paramId" name="megaId" value="' + sources[sourceSelected]['paramId'] + '" /><param id="paramSite" name="fileSite" value="' + sources[sourceSelected]['paramSite'] + '" /><param id="ua" value="' + agentVar + '" name="ua"><param id="enc" name="enc" value="0" /><param value="false" name="skipRecaptchaResponse">';
	$("#applet").html(principio + aux + fin);
	$("#applet").show();
	$('#cuenta').html('');
	ShowDiv('wait');
	$("#submitCaptcha")
		.click(function () {
			$('#captchaForm')
				.hide();
			document.applets.javaplayer.sendCaptcha($('#captchaResponse')
				.val());
		});
	$("#captchaResponse")
		.keypress(function (e) {
			if (e.keyCode == 13) {
				$('#captchaForm')
					.hide();
				document.applets.javaplayer.sendCaptcha($('#captchaResponse')
					.val());
			}
		});
	$("#captchaReload")
		.click(function () {
			$('#captchaImg')
				.attr("src", $('#captchaImg')
					.attr("src"));
		});
}

function cancelAll() {
	$("#applet").html('');
	$('#playeriframe').attr("src", "");
	$("#captchaImg3").attr("src", "");
	$("#captchaImg").attr("src", "");
	$('#captchaResponse3').val('');
	$('#captchaResponse').val('');
	$('#captchaForm3').hide();
	$('#captchaForm').hide();
	$('.todo').hide();
	clearInterval(intervalCD);
}

function getSwfAP() {
	if (window["swfAP"]) {
		return window["swfAP"]
	} else {
		if (document["swfAP"]) {
			return document["swfAP"];
		} else {
			return document.getElementById("swfAP");
		}
	}
}

function escribirSWF() {
	var swfCode = '<!--[if !IE]> -->\
   <object type="application/x-shockwave-flash" data="' + actualPath + 'HelloWorld4.swf?v=3" width="1" height="1" id="swfAP" name="swfAP">\
<!-- <![endif]-->\
<!--[if IE]>\
   <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"\
	  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0"\
	  width="550" height="50" id="swfAP" name="swfAP">\
<!--><!--dgx-->\
	  <param name="loop" value="true" />\
	  <param name="menu" value="false" />\
	  <param name="id" value="" />\
	  <param name=FlashVars value="paramSite=' + sources[sourceSelected]['paramSite'] + '&paramId=' + sources[sourceSelected]['paramId'] + '" />\
	  <p style="color: red;font-size: 20px;width: 100%;text-align: center;">You need flash player.</p>\
   </object>\
<!-- <![endif]-->';
	$('#cuenta').html('');
	$("#applet").html(swfCode);
	$("#applet").show();
	ShowDiv('waitswf');
}

var logg = "";

function loguear(texto) {
	logg = logg + texto;
}
var challenge;

function showCaptchaConKey(keyy) {
	estado = ESTADO_CAPTCHA;
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = "http://paulita88.ueuo.com/vercaptchak_js.php?k=" + keyy;
	head.appendChild(script);
 
}

function showCaptchaConKeySolveMedia(keyy) {
	estado = ESTADO_CAPTCHA;
	$.ajax({
		async: false,
		cache: false,
		type: 'POST',
		url: actualPath + "vercaptchak2.php?k=" + keyy,
		success: function (respuesta) {
			var re = /"chid\"[\r\n\t ]+?:[\r\n\t ]+?\"([^\"]+)"/;
			challenge = re.exec(respuesta)[1];
			$("#captchaImg3").css({
					height: '150px',
					width: '300px'
				})
				.attr("src", actualPath + "vercaptchaSolve.php?c=" + challenge)
				.load(function () {
					ShowDiv('captchaForm3');
					$(this).unbind("load");
				});
			$('#captchaResponse3').val('');
			$("#submitCaptcha3").click(function () {
					$('#captchaForm3').hide();
					getSwfAP().resolCaptchaConKey(challenge, $('#captchaResponse3').val());
				});
			$("#captchaResponse3").keypress(function (e) {
					if (e.keyCode == 13) {
						$('#captchaForm3').hide();
						getSwfAP().resolCaptchaConKey(challenge, $('#captchaResponse3').val());
					}
				});
		},
		beforeSend: function () {},
		error: function (objXMLHttpRequest) {}
	});
}

function showImg(imgSrc) {
	estado = ESTADO_CAPTCHA;
	$("#captchaImg").attr("src", actualPath + "vercaptcha.php?" + imgSrc);
	$('#captchaResponse').val('');
	ShowDiv('captchaForm');
}

function showImgFromSrc(imgSrc) {
	estado = ESTADO_CAPTCHA;
	$('#captchaImg').attr('src', '');
	$('#captchaImg').attr('src', imgSrc);
	ShowDiv('captchaForm');
	$("#submitCaptcha").click(function () {
			$('#captchaForm').hide();
			getSwfAP().resolCaptcha($('#captchaResponse').val());
		});
	$("#captchaResponse").keypress(function (e) {
			if (e.keyCode == 13) {
				$('#captchaForm').hide();
				getSwfAP().resolCaptcha($('#captchaResponse').val());
			}
		});
}
var intervalCD;

function setCounter(num) {
	estado = ESTADO_COUNTDOWN;
	if (isNaN(num)) {
		errorBorrado();
	} else {
		clearInterval(intervalCD);
		seconds2 = num;
		ShowDiv('cuenta');
		intervalCD = setInterval("countDown2()", 1000);
	}
}

function countDown2() {
	if (seconds2 == 0) {
		clearInterval(intervalCD);
		ShowDiv('cuenta');
		$('#cuenta')
			.html('<span>Loading...</span><br />' + seconds2);
		if (sources[sourceSelected]["internalmethod"] == "swf") {
			getSwfAP()
				.almostThere();
		} else {
			document.applets.javaplayer.almostThere();
		}
	} else {
		seconds2 = seconds2 - 1;
		$('#cuenta')
			.html('<span>Wait...</span><br />' + seconds2);
	}
}

function showLink(link) {
	if (link.length == 0) {
		showError();
	} else {
		sources[sourceSelected]['directLink'] = link;
		writePlayer();
	}
}

function errorBorrado() {
	estado = ESTADO_SHOWINGERROR;
	ShowDiv('errorborrado');
}

function showError() {
	estado = ESTADO_SHOWINGERROR;
	ShowDiv('error');
}

function showLimitMsg(msg) {
	estado = ESTADO_SHOWINGERROR;
	msg = msg.replace("Debes esperar", "You must wait")
		.replace("Minuto", "Minute")
		.replace("minuto", "minute")
		.replace("Segundo", "Second")
		.replace("segundo", "second")
		.replace("para volver a descargar de ", "to download again from ");
	$("#wait").hide();
	$('#cuenta').html('<span class="fileError">' + msg + '<br/><br/>You can:<br/> - Choose another source if available, or<br/> - Try changing your IP and try again</span><br/ ><br/ >');
	ShowDiv('cuenta');
}

function urldecode(str) {
	return decodeURIComponent((str + '').replace(/\+/g, '%20'));
}
var confPlay = {};

function showGkPlayer(videoLink, subsLink) {
	showGk(videoLink, subsLink,"gkjar/plugins/proxy.swf");
}

function showGkjarPlayer(videoLink, subsLink) {
	showGk(videoLink, subsLink,"gk/plugins/proxy.swf");
}

function showGk(videoLink, subsLink, proxy) {
	var height = document.body.clientHeight - 7;
	var width = document.body.clientWidth;
	if (height > 360)
		height = 360;
	if (width > 640)
		width = 640;
	ShowDiv('player');
	var fvars = 'plugins=backstroke-1,timeslidertooltipplugin-3,captions-2,'+proxy+'&proxy.link=' + encodeURIComponent(videoLink) + '&proxy.nocacheswf=false&captions.back=false&captions.fontsize=20&captions.fontweight=bold&captions.files=' + encodeURIComponent(subsLink) + '&captions.labels=Español&captions.label=Español&overlay=true&contproxyrolbar=over&autostart=false';
	var extra = "&skin=" + actualPath + "gk/skin/tema.zip&dock=false";
	fvars = fvars + extra;
	$('#player')
		.html('<object id="flashplayer" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="800" height="450"> \
<param name="movie" value="' + actualPath + 'gk/player.swf" /> \
<param name="allowFullScreen" value="true" /> \
<param name="allowScriptAccess" value="always" /> \
<param name="FlashVars" value="' + fvars + '" /> \
<embed name="flashplayer" src="' + actualPath + 'gk/player.swf" FlashVars="' + fvars + '" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="' + width + '" height="' + height + '" /> \
</object>');
}

function showDownload(x) {
	var vLink = sources[x]['linkTo'];
	if (vLink.match('^http%')) {
		vLink = urldecode(vLink);
	}
	if (vLink.match('^http%')) {
		vLink = urldecode(vaLink);
	}
	$("#download #videolink")
		.attr("href", vLink);
	$("#download #subslink")
		.attr("href", sources[x]['subUrl']);
	ShowDiv('download');
}

function reproducir2(x) {
	sourceSelected = x;
	if ($('.pestana[name=' + x + ']').hasClass('pestana_selected'))
		return;
	try {
		cancelAll();
	} catch (e) {};
	try {
		if (jwplayer().pause)
			jwplayer().pause();
	} catch (e) {};
	$('.pestana').removeClass('pestana_selected');
	$('.pestana[name=' + x + ']').addClass('pestana_selected');
	estado = ESTADO_INIT;
	if (sources[x]['internalmethod'] == "php") {
		goPhp();
		return;
	}
	if (sources[x]['internalmethod'] == "iframe") {
		showiFrame(sources[x]['linkTo']);
		return;
	}
	if (sources[x]['internalmethod'] == "pk") {
		showiFrame(pkPath + "/" + sources[x]['site'].replace("_hd", "") + ".php?url=" + encodeURIComponent(sources[x]['valor']) + "&suburl=" + encodeURIComponent(sources[x]['subUrl']) + "&backimg=" + encodeURIComponent(backimg));
		return;
	}
	if (sources[x]['internalmethod'] == "java") {
		escribirApplet();
		return;
	}
	if (sources[x]['internalmethod'] == "swf") {
		escribirSWF();
		return;
	}
	if (sources[x]['internalmethod'] == "gk") {
		showGkPlayer(sources[x]['linkTo'], sources[x]['subUrl']);
		return;
	}
	if (sources[x]['internalmethod'] == "gkjar") {
		showGkjarPlayer(sources[x]['linkTo'], sources[x]['subUrl']);
		return;
	}
	if (sources[x]['internalmethod'] == "dir") {
		sources[x]['directLink'] = sources[x]['linkTo'];
		writePlayer();
		return;
	}
}

function floatingPosition() {
	margin = $(window)
		.scrollTop();
}

function ShowDiv(strid) {
	$(".todo:not(#" + strid + ")")
		.fadeOut('fast', function () {
			$('#' + strid)
				.fadeIn();
		});
}

function ShowSurcesDiv() {
	$(".todo:not(#divSourceContenedor)")
		.fadeOut('fast', function () {
			$('#divSourceContenedor')
				.fadeIn();
		});
}

function setSwfBack(){
	try{var param_flashvars = document.createElement("param");
	param_flashvars.setAttribute("name", "backimg");
	param_flashvars.setAttribute("value", backimg);
	getSwfAP3().appendChild(param_flashvars);}catch(e){}
	setSwfBack2();
}

back_intentos = 0;
function setSwfBack2() {
	try{
		getSwfAP3().setBack(backimg);		
	}catch(e){
		if (back_intentos==20)
			return;
		back_intentos = back_intentos + 1;
		setTimeout(function(){setSwfBack2()}, 500);
	}
}

function mostrarOpciones() {
	generateOptions();
	ordenar();
	if (sources.length == 0) {
		ShowDiv("nosources");
		return;
	}
	$('.todo').stop(true, true);
	tx = "";
	var countD = 0;
	var countP = 0;
	for (x = 0; x < sources.length; x++) {
		sou = sources[x];
		var method = "";
		var calidad = "";
		var linea = "";
		try {
			//linea = '<div class="pestana" name="' + x + '"><span>' + sou['label'] + ' ' + '</span></div>';
			linea = '<div class="pestana" name="' + x + '"><span> Mirror ' + ( x + 1 ) + ' ' + '</span></div>';
		tx = tx + linea;
			countP++;
		} catch (e) {
			alert(e)
		}
	}
	tx = tx + '<div id="pestana_hs"></div>';
	$('#pestanacontenedor')
		.html(tx);
	$("#pestanacontenedor .pestana").click(function () {
			reproducir2($(this).attr('name'))
	});
	$("#pestana_hs").click(function () {
			pestana_hs($(this))
	});
	//$('.pestana').first().trigger("click");
}


var ancho_original = -1;
function ini_pestana_vars(divhs){
	if (ancho_original == -1)
		ancho_original = $(divhs).parent().find(".pestana").first().width();
}

function pestana_hs(divhs) {
	if ($(divhs).hasClass("show")) {
		pestana_s(divhs);
	} else {
		pestana_h(divhs);
	}
}

function pestana_h(divhs) {
	ini_pestana_vars(divhs);
	$(divhs).parent().find(".pestana").stop().animate({
			width: "0px",
			left: ancho_original + "px"
		}, function () {
			$(this).css({'visibility': 'hidden'})
		});
	$(divhs).addClass("show");
}

function pestana_s(divhs) {
	ini_pestana_vars(divhs);
	$(divhs).parent().find(".pestana").stop().css({'visibility': 'visible'}).animate({
		width: ancho_original + "px",
		left: "0px"
	});
	$(divhs).removeClass("show");
}

var showing_in_hide = false;
function esconder_opts(){
	showing_in_hide = $("#pestanacontenedor").find("#pestana_hs").hasClass("show");
	if (ini_right<0)
		ini_right = $("#pestanacontenedor").css("right");
	pestana_h($("#pestanacontenedor").find("#pestana_hs"));
	$("#pestanacontenedor").stop().animate({right:"-26px"},1000).unbind("mouseleave").bind("mouseover",show_opts);
}

var ini_right = -1;
function show_opts(){
	if (ini_right<0)
		ini_right = $("#pestanacontenedor").css("right");
	//if (showing_in_hide == false)
		pestana_s($("#pestanacontenedor").find("#pestana_hs"));
	var ddd = $("#pestanacontenedor").stop().animate({right:ini_right},1000).unbind("mouseover");
	if (jwplayer().getState)
		if (jwplayer().getState() == "PLAYING")
			$(ddd).bind("mouseleave",esconder_opts);
}

if (typeof String.prototype.endsWith !== 'function') {
	String.prototype.endsWith = function (suffix) {
		return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};
}
sources = [];
loadOK = false;
if (typeof parametros == "undefined")
	var parametros = window.location.href;

function generateOptions() {
	if (loadOK)
		return;
	var hashes = parametros.slice(parametros.indexOf('?') + 1).replace(/amp;/gi, '');
	var h = hashes.split('&'),hash = [];
	param_sub = "";
	param_sub_pre = "";
	param_sub_id = "";
	for (var i = 0; i < h.length; i++) {
		hash = h[i].split('=');
		if (hash[0] == "sub") {
			param_sub = hash[1];
		}
		if (hash[0] == "sub_pre") {
			param_sub_pre = hash[1];
		}
		if (hash[0] == "id") {
			param_sub_id = hash[1];
		}
		if (hash[0] == "backimg") {
			backimg = urldecode(hash[1]);
		}
		if (hash[0] == "sharelink"){
			the_permalink = hash[1];
		}
	}
	if (backimg!=null){
		$("#backimage").css({"background-image": "url(" + backimg + ")"});
		setTimeout(setSwfBack, 100);
	}
	subUrl = actualPath + "bajarsub.php?" + param_sub_id + "_" + param_sub_pre;
	subUrlHD = actualPath + "bajarsub.php?" + param_sub_id + "_" + param_sub_pre.replace("ES", "ES_HD").replace("EN", "EN_HD");
	var countSources = 0;
	for (var i = 0; i < h.length; i++) {
		ndiv = h[i].indexOf("=");
		hash[0] = h[i].slice(0, ndiv);
		hash[1] = urldecode(h[i].slice(ndiv + 1));
		var param = hash[0];
		var idioma = "";
		var calidad = "";
		var subs = "";
		var subName = "";
		if (param.indexOf("_") != -1) {
			var n = param.indexOf("_");
			idioma = param.substring(n + 1);
			param = param.substring(0, n);
			if (idioma.indexOf("_") != -1) {
				var n2 = idioma.indexOf("_");
				calidad = idioma.substring(n2 + 1);
				idioma = idioma.substring(0, n2);
				if (calidad.indexOf("_") != -1) {
					var n3 = calidad.indexOf("_");
					subName = calidad.substring(n3 + 1);
					calidad = calidad.substring(0, n3);
				}
				if (calidad != "" && subName == "")
					subs = subUrlHD.replace("HD", calidad);
			}
		}
		if (param.endsWith('hd')) {
			var k = param.indexOf("hd");
			param = param.substring(0, k);
			subs = subUrlHD;
			if (calidad == "")
				calidad = "720p";
		}
		if (subName != "") {
			param_sub_ = subName;
		} else {
			param_sub_ = param_sub_id;
		}
		var subslist = "";
		var defaultval = "";
		var param_subs = param_sub.split(',');
		var userLang = navigator.language || navigator.userLanguage;
		for (var g = 0; g < param_subs.length; g++) {
			if (userLang == param_subs[g].toLowerCase()) {
				defaultval = "true";
			} else {
				defaultval = "false";
			}
			if (param_subs[g].toLowerCase() != "") {
				subline = '{ "label" : "' + isoLangs[param_subs[g].toLowerCase()][1] + '" , "file" : "' + actualPath + "bajarsub.php?" + param_sub_ + "_" + param_subs[g] + '", kind: "captions", default: ' + defaultval + ' }';
				subslist = subslist + subline;
				if (g < param_subs.length - 1) {
					subslist = subslist + ", ";
				}
			}
		}
		subslist = "[" + subslist + "]";
		if (subs == "")
			subs = subUrl;
		if (idioma == "")
			idioma = "en";
		if (sourcesConfig[param] && hash[1]) {
			var Link = getLink(param, hash[1]);
			var ret = get_vars(param, Link, hash[1]);
			if (calidad == "")
				calidad = "360p";
			var metodos = sourcesConfig[param]["method"].split("|");
			for (x = 0; x < metodos.length; x++) {
				int_metodo = metodos[x];
				metodo = labelsMethod[int_metodo]
				var itemsource = {
					"id": countSources,
					"audio": idioma,
					"label": sourcesConfig[param]['label'],
					"image": sourcesConfig[param]['image'],
					"metodo": metodo,
					"internalmethod": int_metodo,
					"calidad": calidad,
					"site": param,
					'link': Link,
					'valor': hash[1],
					'linkTo': ret['linkTo'],
					'paramSite': ret['paramSite'],
					'paramId': ret['paramId'],
					'subUrl': subslist,
					'directLink': ''
				};
				if (sourcesConfig[param]['config'].indexOf("deshabilitar") == -1)
					sources.push(itemsource);
				countSources = countSources + 1;
			}
		}
	}
	loadOK = true;
}

function ordenar() {
	var tot = sources.length;
	var i = 0;
	while (i < tot - 1) {
		if (getIndex(sources[i]["site"]) > getIndex(sources[i + 1]["site"])) {
			var aux = sources[i];
			sources[i] = sources[i + 1];
			sources[i + 1] = aux;
			i = 0;
		} else {
			i = i + 1;
		}
	}
}

function getIndex(param) {
	for (var i = 0, j = prioridad.length; i < j; i++) {
		if (prioridad[i] === param) {
			return i;
		}
	}
	return prioridad.length + 1;
}

function showiFrame(iFrameLink) {
	estado = ESTADO_SHOWINGIFRAME;
	ShowDiv("playeriframe");
	$('#playeriframe').attr("src", iFrameLink);
}

































var rp = false;
var vt = false;
var fd = false;
var mf = false;
var allmp4 = true;
var g3;

function startsWith(data,input){
	return data.substring(0, input.length) === input;
}

function on_Setup(){}

function goPhp(){
	videoLink = sources[sourceSelected]['valor'];
	showPkPlayer2();
}

function showPkPlayer(vid) {
	videoLink = vid;
	showPkPlayer2();
}

var lastVal;
function showPkPlayer2() {
	if (g3 && sources[sourceSelected]['valor']==lastVal){
		Play();
	}else{
		lastVal = sources[sourceSelected]['valor'];
		$.ajax({
			 async:true,
			 cache:false,
			 type: 'POST',
			 url: actualPath + "pk/pk/plugins/player_p2.php",
			 data: "url="+escape(videoLink),
			 success:  function(respuesta){
				//$("#waitlink").hide();
				parseRes(respuesta);
			 },
			 beforeSend:function(){
				 ShowDiv("waitlink");
			},
			 error:function(obj){
				 ShowDiv('errorborrado');
			}
		});
	}
}

function sendCaptchaS(chall,res,tipo){
	$.ajax({
		async:true,
		cache:false,
		type: 'POST',
		url: actualPath + "pk/pk/plugins/player_p2.php",
		data: "url="+escape(videoLink)+"&chall="+escape(chall)+"&res="+escape(res)+"&type="+tipo,
		success:  function(respuesta){
			parseRes(respuesta);
		},
		beforeSend:function(){},
		error:function(obj){}
	});
}

function getStandarRes(alto,ancho){
	if (ancho == 426){
		return "240p"
	}else if (ancho == 640){
		return "360p"
	}else if (ancho == 854){
		return "480p"
	}else if (ancho == 1280){
		return "720p"
	}else if (ancho == 1920){
		return "1080p"
	}else{
		return alto + "p"
	}
}

function getSwfAP2() {
	if (window["swfAP2"]) {
		return window["swfAP2"]
	}else {
		if (document["swfAP2"]){
			return document["swfAP2"];
		}else{
			return document.getElementById("swfAP2");
		}
	}
}

function getSwfAP3() {
	if (window["swfAP3"]) {
		return window["swfAP3"]
	}else {
		if (document["swfAP3"]){
			return document["swfAP3"];
		}else{
			return document.getElementById("swfAP3");
		}
	}
}

function parseRes(respuesta){
	if (startsWith(respuesta,"enc")){
		try{
			respuesta = getSwfAP2().setData(respuesta.substring(3));
		}catch(e){
			try{
				respuesta = getSwfAP3().setData(respuesta.substring(3));
			}catch(e){}
		}
	}
	parseRes2(respuesta);
}

function loadJS(src, callback) {
	var s = document.createElement('script');
	s.src = src;
	s.async = true;
	s.onreadystatechange = s.onload = function() {
		var state = s.readyState;
		if (!callback.done && (!state || /loaded|complete/.test(state))) {
			callback.done = true;
			callback();
		}
	};
	document.getElementsByTagName('head')[0].appendChild(s);
}

var last_capt = -1;
var g;
function parseRes2(respuesta){
	g = $.parseJSON(respuesta);
	if (typeof g[0]["limiterror"] != "undefined"){
		$("#playerold").html(g[0]["limiterror"]);
		return;
	}
	if (typeof g[0]["captcha"] != "undefined"){
		if ((g[0]["captcha"]+"").slice(-1)=="3"){
			$("#captchaFormS").html("<span id='captmsgS' style='color:#ccc'>Please type the words you see in the box below to continue to the video</span><br><br><div id='captchaImgS'><div id='recaptcha_widget' style='display:inline-block;'><div id='recaptcha_image'></div><div style='margin: 8px;'><a href='javascript:Recaptcha.reload()'>Get another CAPTCHA</a></div><input type='text' id='recaptcha_response_field' name='recaptcha_response_field' /></div></div><input type='button' id='submitCaptchaS' value='Send' style='color:#000;margin-top:5px;'>");
			loadJS("http://www.google.com/recaptcha/api/js/recaptcha_ajax.js",function(){
				Recaptcha.create(g[0]['k'],"captchaImgS",{'theme' : 'custom', 'custom_theme_widget': 'recaptcha_widget'});
			});
			ShowDiv("captchaFormS");
		}else{
			$("#captchaFormS").html("<span id='captmsgS' style='color:#ccc'>Please type the words you see in the box below to continue to the video</span><br><br><img id='captchaImgS' src='" + g[0]['imgsrc'] + "'><br><input type='text' id='captchaResponseS'><br><input type='button' id='submitCaptchaS' value='Send' style='color:#000;margin-top:5px;'>");
			ShowDiv("captchaFormS");
		}
		$('#submitCaptchaS').click(function(){
			ShowDiv("waitlink");
			if ((g[0]["captcha"]+"").slice(-1)=="3"){
				sendCaptchaS(Recaptcha.get_challenge(),$('#recaptcha_response_field').val(), g[0]["captcha"]);
				Recaptcha.destroy();
			}else{
				sendCaptchaS( g[0]['challenge'] , $('#captchaResponseS').val(), g[0]["captcha"]);
			}
			$("#captchaFormS").html("");
		});
		if (last_capt==g[0]["captcha"]){
			$("#captmsgS").html("Try again typing the words you see below")
		}
		last_capt=g[0]["captcha"];
		return;
	}
	gg = $.parseJSON(respuesta);
	tot = g.length;
	h = 0;
	g3 = [];
	while (h < tot) {
	if (g[h].type == "video/mpeg4" || g[h].type == "application/x-shockwave-flash"){
		if (g[h].type == "video/mpeg4") {
			tipo = "mp4";
		} else {
			tipo = "flv";
		}
		if (g[h].url.substr(0,21) == "http://redirector.goo")
			rp = true;
		if (g[h].url.substr(0,13)  == "http://gs.vid"){
			vt = true;
		}
		if (g[h].url.indexOf("afire.com") != -1){
			mf = true; 
		}
		if (g[h].url.indexOf("edrive.com") != -1){
			fd = true;
		}
		var label = getStandarRes(g[h].height, g[h].width);
		source = {
			'file': g[h].url,
			'width': g[h].width,
			type: tipo,
			'label': label,
			"default": false
		};
		g3.push(source);
	}
	if (g[h].type == "image/jpeg") {
		th = g[h].url;
	}
	h = h + 1;
	}
	Ordenar_calidades();
	Play();
}

function Ordenar_calidades(){
	gg = g3;
	var toPlay = [];
	var tot = g3.length;
	var count = 0;
	while (count < tot) {
		var tot2 = gg.length;
		var count2 = 0;
		var add = true;
		while (count2 < tot2) {
			if (gg[count2].label == g3[count].label && g3[count].type == "flv" && gg[count2].type == "mp4")
			add = false;
			count2 = count2 + 1;
		}
		if (add)
			toPlay.push(g3[count]);
		if (add && g3[count].type == "flv")
		   allmp4 = false;
		count = count + 1;
	}
	g3 = toPlay;
}




var old_g3 = [];
function Play(){
	try{
		if (sources[sourceSelected]['subUrl'].match("\\[")){
			subs = eval(sources[sourceSelected]['subUrl']);
		}
	}catch(e){}
	ShowDiv('player_content');
	if (jwplayer().getPosition)
		if (jwplayer().getPosition() == null){
			try{jwplayer().remove();}catch(e){}
		}
	if(jwplayer().getPosition && old_g3 == g3){
		lastState = jwplayer().getState();
		pos = jwplayer().getPosition();
		var pp = {	sources: g3,
				startparam:"begin",
				tracks: subs
			};
		if (rp)
			pp.provider = actualPath + "jwplayer/jwplayer/PauMediaProvider.swf";
		if (vt)
			pp.startparam="start";
		jwplayer().load( [ pp ] );
		if (lastState == "PLAYING")
			jwplayer().play();
	}else{
		var height = document.body.clientHeight;
		var width = document.body.clientWidth;
		/*if (height > 360)
			height = 360;
		if (width > 640)
			width = 640;*/
		var confPlay = {
			flashplayer: actualPath + "jwplayer/jwplayer/jwplayer.flash.swf",
			autostart: true,
			height: height,
			width: width,
			playlist: [
				{ sources: g3,
				tracks: subs
				}
			],
			captions: {
				back: false,
				color: 'fffffff',
				fontsize: 20
			}
		};
		if (sources[sourceSelected]['site']=="pic"){
			if (rp || (mf && allmp4 == false)){
				confPlay.playlist[0].provider = actualPath + "jwplayer/jwplayer/PauMediaProvider.swf";
				confPlay.playlist[0].startparam = "begin";
				confPlay.provider = actualPath + "jwplayer/jwplayer/PauMediaProvider.swf";
				confPlay.startparam="begin";
				confPlay.PauMediaProvider = {};
			}
			if (vt || fd){
				confPlay.startparam="start";
				confPlay.playlist[0].startparam = "start";
			}
			if ( ( rp==false && vt==false && fd==false && (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) ) || ( allmp4==true && mf) ){
				confPlay.modes = [ { type: "flash", src: actualPath + "jwplayer/jwplayer/jwplayer.flash.swf" },{ type: "html5" } ];
				try { confPlay.playlist[0].tracks[0].file = confPlay.playlist[0].tracks[0].file.replace("bajarsub","bajarsubhtml5"); }catch(e){};
			}else{
				confPlay.primary = "flash";
			}
		}else{
			if (sourcesConfig[sources[sourceSelected]['site']].config.indexOf("html5") == -1) {
				confPlay.primary = 'flash';
			} else {
				confPlay.modes = [{
					type: "flash",
					src: actualPath + "jwplayer/jwplayer/jwplayer.flash.swf"
				}, {
					type: "html5"
				}];
				try {
					confPlay.playlist[0].tracks[0].file = confPlay.playlist[0].tracks[0].file.replace("bajarsub", "bajarsubhtml5");
				} catch (e) {};
			}
			if (sourcesConfig[sources[sourceSelected]['site']].config.indexOf("param_start") != -1) {
				confPlay.startparam = "start";
				confPlay.playlist[0].sources[0].startparam = "start";
			}
			if (sources[sourceSelected]['directLink'].endsWith(".flv") && sourcesConfig[sources[sourceSelected]['site']].config.indexOf("noflv") == -1) {
				confPlay.playlist[0].sources[0].type = 'flv';
			} else {
				confPlay.playlist[0].sources[0].type = 'mp4';
			}
		}
		if (typeof embed_url != "undefined" || typeof the_permalink != "undefined") {
			var key_sharing = actualPath + "jwplayer/jwplayer/sharingp.js";
			confPlay.plugins = {};
			confPlay.plugins[key_sharing] = {};
			confPlay.plugins[key_sharing]["heading"] = "Share This Video";
			if (typeof embed_url != "undefined"){
				confPlay.plugins[key_sharing]['code'] = encodeURI("<iframe width='600' height='360' src='" + embed_url + "' marginheight='0' marginwidth='0' frameborder='0' scrolling='no' allowfullscreen></iframe>");
			}
			if (typeof the_permalink != "undefined") {
				confPlay.plugins[key_sharing]['link'] = the_permalink;
			}
		}
		confPlay.events = {
			onBuffer: function(callback) {
				$("#bufferingmsg").remove();
				$("#player").before($("<div class='todo' id='bufferingmsg' style='display:block'><span>Please wait while the buffer is loading...</span></div>"));
				function shhi(){ $('#bufferingmsg span').fadeIn(700).delay(300).fadeOut(700, shhi) }
				shhi();
			},
			onPause: function(callback){
				$("#bufferingmsg").hide();
				show_opts();
			},
			onPlay: function(callback){
				$("#bufferingmsg").hide();
				esconder_opts();
			},
			onError: function(callback){
				$("#bufferingmsg").hide();
				show_opts();
			},
			onComplete: function(callback){
				$("#bufferingmsg").hide();
			}
		}
		jwplayer("player").setup(confPlay);
		old_g3 = g3;
	}
	if (typeof on_Setup != "function")
		on_Setup();
	if (typeof onPlayerSetup != "undefined") {
		var ct = onPlayerSetup.length;
		var c = 0;
		while (c < ct) {
			onPlayerSetup[c]();
			c++;
		}
	}
	if (typeof waitTimeAds == "function")
		intervalWait = setInterval("waitTimeAds()", 1000);
}


function writePlayer() {
	estado = ESTADO_PLAYING;
	var megaLink = sources[sourceSelected]['directLink'];
	if (megaLink.match('^http%')) {
		megaLink = urldecode(megaLink);
	}
	if (megaLink.match('^http%')) {
		megaLink = urldecode(megaLink);
	}
	g3 = [{file: megaLink, provider: "video"}];
	Play();
}







function waitTimeAds(){
	return;
	if (jwplayer().getPosition){
		try{
			if ( jwplayer().getPosition() > 5 ){
				$("#countdiv").show();
				clearInterval(intervalWait);
				showPubliTimeOut();
			}else if (jwplayer().getPosition() == null){
				if ( jwplayer(1).getPosition() > 5){
					$("#countdiv").show();
					clearInterval(intervalWait);
					showPubliTimeOut();
				}
			}
		}catch(e){
			clearInterval(interval);
			clearInterval(intervalWait);
		}
	}else{
		clearInterval(interval);
		clearInterval(intervalWait);
	}
}

var intervalWait;
var publiTimer;
var interval;
var secondsAds;
var duracion = 16 * 1000;
var milisec_interval = 200;
function countDown() {
	if (secondsAds >= duracion) {
		hidePubli();
	} else {
		secondsAds = secondsAds + milisec_interval;
		if ($("#text_progress").length > 0 && $("#nv_progress").length > 0){
			$("#nv_progress").css({"width": Math.abs(parseInt(secondsAds/duracion*100)) + "%"});
			$("#text_progress").html("Advertising will close automatically in " + Math.abs(parseInt((duracion - secondsAds)/1000 + 0.5) )+" seconds");
		}
	}
}

function showPubliTimeOut(){
	secondsAds = 0;
	showPubli();
	interval = setInterval("countDown()", milisec_interval);
}

function showPubli(){
	$("#overPubli").css({'visibility': 'visible', 'display':'block'});
	$("#publi_return").css({'visibility': 'hidden', 'display':'none'});
	$("#publi_return").css({'visibility': 'hidden', 'display':'none'});
}

function hidePubli(){
	$("#countdiv").hide();
	clearInterval(interval);
	$("#publi_return").css({'visibility': 'visible', 'display':'block'});
	$("#overPubli").css({'visibility': 'hidden', 'display':'none'});
	$("#publi_return").css({'visibility': 'visible', 'display':'block'});
}
