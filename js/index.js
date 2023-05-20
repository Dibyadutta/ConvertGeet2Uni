function Copy() {
	copyText = document.getElementById("result");
	copyText.select();
	document.execCommand("copy");
	alert(copyText,value + "Copied")
}

function Result() {
	var str = document.getElementById("text_geetanjali").value;
	var ascii = (str.charCodeAt(1))
	var unicode = String.fromCharCode(ascii);
	alert(ascii + " | " + unicode);

	if (str == "") {
		alert('Please enter the text which is to be converted');
		return;
	}

	var result = str.replace(/”|\+/g,"ূ").replace(/Ÿ¬/g,"+").replace(/√|¬|Π|amp;|¡/g,"").replace(/°/g,"/").replace(/Î0/g,"ড°");

	//ৰেফ ঔ-কাৰ-১//ক-ক্ষ
	result = result.replace(/OEfl«±/g,"ৰ্কৌ").replace(/OE‡«±/g,"ৰ্খৌ").replace(/OE·«±/g,"ৰ্গৌ").replace(/OE‚«±/g,"ৰ্ঘৌ").replace(/OE„«±/g,"ৰ্ঙৌ")
		.replace(/OE2«±|OE‰«±/g,"ৰ্চৌ").replace(/OEÂ«±/g,"ৰ্ছৌ").replace(/OEÊ«±/g,"ৰ্জৌ").replace(/OEÁ«±/g,"ৰ্ঝৌ").replace(/OE¤û«±/g,"ৰ্ঞৌ")
		.replace(/OEÈ«±/g,"ৰ্টৌ").replace(/OEÍ«±/g,"ৰ্ঠৌ").replace(/OEÎˇ«±/g,"ৰ্ড়ৌ").replace(/OEÎ«±/g,"ৰ্ডৌ")
		.replace(/OEÏˇ«±|OEIˇ«±/g,"ৰ্ঢ়ৌ").replace(/OEÏ«±|OEI«±/g,"ৰ্ঢৌ").replace(/OEÌ«±/g,"ৰ্ণৌ")
		.replace(/OEÓ«±/g,"ৰ্তৌ").replace(/OEÔ«±/g,"ৰ্থৌ").replace(/OE«±/g,"ৰ্দৌ").replace(/OEÒ«±/g,"ৰ্ধৌ").replace(/OEÚ«±/g,"ৰ্নৌ")
		.replace(/OEÛ«±/g,"ৰ্পৌ").replace(/OEÙ«±/g,"ৰ্ফৌ").replace(/OEı«±/g,"ৰ্বৌ").replace(/OEˆ«±/g,"ৰ্ভৌ").replace(/OE˜«±/g,"ৰ্মৌ")
		.replace(/OE˚˛«±/g,"ৰ্য়ৌ").replace(/OE˚«±/g,"ৰ্যৌ").replace(/OE1«±/g,"ৰ্ৰৌ").replace(/OE˘«±/g,"ৰ্লৌ").replace(/OEª«±/g,"ৰ্ৱৌ")
		.replace(/OE˙«±/g,"ৰ্শৌ").replace(/OE¯«±/g,"ৰ্ষৌ").replace(/OE¸«±/g,"ৰ্সৌ").replace(/OE˝«±/g,"ৰ্হৌ")
		.replace(/OEé«±/g,"ৰ্ক্ষৌ");

	//ঔ-কাৰ-১//ক-ক্ষ
	result = result.replace(/OEflÃ/g,"কৌ").replace(/OE‡Ã/g,"খৌ").replace(/OE·Ã/g,"গৌ").replace(/OE‚Ã/g,"ঘৌ").replace(/OE„Ã/g,"ঙৌ")
		.replace(/OE2Ã|OE‰Ã/g,"চৌ").replace(/OEÂÃ/g,"ছৌ").replace(/OEÊÃ/g,"জৌ").replace(/OEÁÃ/g,"ঝৌ").replace(/OE¤ûÃ/g,"ঞৌ")
		.replace(/OEÈÃ/g,"টৌ").replace(/OEÍÃ/g,"ঠৌ").replace(/OEÎˇÃ/g,"ড়ৌ").replace(/OEÎÃ/g,"ডৌ")
		.replace(/OEÏˇÃ|OEIˇÃ/g,"ঢ়ৌ").replace(/OEÏÃ|OEIÃ/g,"ঢৌ").replace(/OEÌÃ/g,"ণৌ")
		.replace(/OEÓÃ/g,"তৌ").replace(/OEÔÃ/g,"থৌ").replace(/OEÃ/g,"দৌ").replace(/OEÒÃ/g,"ধৌ").replace(/OEÚÃ/g,"নৌ")
		.replace(/OEÛÃ/g,"পৌ").replace(/OEÙÃ/g,"ফৌ").replace(/OEıÃ/g,"বৌ").replace(/OEˆÃ/g,"ভৌ").replace(/OE˜Ã/g,"মৌ")
		.replace(/OE˚˛Ã/g,"য়ৌ").replace(/OE˚Ã/g,"যৌ").replace(/OE1Ã/g,"ৰৌ").replace(/OE˘Ã/g,"লৌ").replace(/OEªÃ/g,"ৱৌ")
		.replace(/OE˙Ã/g,"শৌ").replace(/OE¯Ã/g,"ষৌ").replace(/OE¸Ã/g,"সৌ").replace(/OE˝Ã/g,"হৌ")
		.replace(/OEéÃ/g,"ক্ষৌ");

	//ও-কাৰ-য-কাৰ-১//ক-ক্ষ
	result = result.replace(/Àfl…±/g,"ক্যো").replace(/À‡…±/g,"খ্যো").replace(/À·…±/g,"গ্যো").replace(/À‚…±/g,"ঘ্যো").replace(/À„…±/g,"ঙ্যো")
		.replace(/À2…±|À‰…±/g,"চ্যো").replace(/ÀÂ…±/g,"ছ্যো").replace(/ÀÊ…±/g,"জ্যো").replace(/ÀÁ…±/g,"ঝ্যো").replace(/À¤û…±/g,"ঞ্যো")
		.replace(/ÀÈ…±/g,"ট্যো").replace(/ÀÍ…±/g,"ঠ্যো").replace(/ÀÎˇ…±/g,"ড়্যো").replace(/ÀÎ…±/g,"ড্যো")
		.replace(/ÀÏˇ…±|ÀIˇ…±/g,"ঢ়্যো").replace(/ÀÏ…±|ÀI…±/g,"ঢ্যো").replace(/ÀÌ…±/g,"ণ্যো")
		.replace(/ÀÓ…±/g,"ত্যো").replace(/ÀÔ…±/g,"থ্যো").replace(/À…±/g,"দ্যো").replace(/ÀÒ…±/g,"ধ্যো").replace(/ÀÚ…±/g,"ন্যো")
		.replace(/ÀÛ…±/g,"প্যো").replace(/ÀÙ…±/gi,"ফ্যো").replace(/Àı…±/gi,"ব্যো").replace(/Àˆ…±/g,"ভ্যো").replace(/À˜…±/g,"ম্যো")
		.replace(/À˚˛…±/g,"য়্যো").replace(/À˚…±/g,"য্যো").replace(/À1…±/g,"ৰ্যো").replace(/À˘…±/g,"ল্যো").replace(/Àª…±/g,"ৱ্যো")
		.replace(/À˙…±/g,"শ্যো").replace(/À¯…±/g,"ষ্যো").replace(/À¸…±/gi,"স্যো").replace(/À˝…±/g,"হ্যো")
		.replace(/Àé…±/g,"ক্ষ্যো");
	
	//ৰেফ ও-কাৰ-১//ক-ক্ষ
	result = result.replace(/Àfl«±/g,"ৰ্কো").replace(/À‡«±/g,"ৰ্খো").replace(/À·«±/g,"ৰ্গো").replace(/À‚«±/g,"ৰ্ঘো").replace(/À„«±/g,"ৰ্ঙো")
		.replace(/À2«±|À‰«±/g,"ৰ্চো").replace(/ÀÂ«±/g,"ৰ্ছো").replace(/ÀÊ«±/g,"ৰ্জো").replace(/ÀÁ«±/g,"ৰ্ঝো").replace(/À¤û«±/g,"ৰ্ঞো")
		.replace(/ÀÈ«±/g,"ৰ্টো").replace(/ÀÍ«±/g,"ৰ্ঠো").replace(/ÀÎˇ«±/g,"ৰ্ড়ো").replace(/ÀÎ«±/g,"ৰ্ডো")
		.replace(/ÀÏˇ«±|ÀIˇ«±/g,"ৰ্ঢ়ো").replace(/ÀÏ«±|ÀI«±/g,"ৰ্ঢো").replace(/ÀÌ«±/g,"ৰ্ণো")
		.replace(/ÀÓ«±/g,"ৰ্তো").replace(/ÀÔ«±/g,"ৰ্থো").replace(/À«±/g,"ৰ্দো").replace(/ÀÒ«±/g,"ৰ্ধো").replace(/ÀÚ«±/g,"ৰ্নো")
		.replace(/ÀÛ«±/g,"ৰ্পো").replace(/ÀÙ«±/g,"ৰ্ফো").replace(/Àı«±/g,"ৰ্বো").replace(/Àˆ«±/g,"ৰ্ভো").replace(/À˜«±/g,"ৰ্মো")
		.replace(/À˚˛«±/g,"ৰ্য়ো").replace(/À˚«±/g,"ৰ্যো").replace(/À1«±/g,"ৰ্ৰো").replace(/À˘«±/g,"ৰ্লো").replace(/Àª«±/g,"ৰ্ৱো")
		.replace(/À˙«±/g,"ৰ্শো").replace(/À¯«±/g,"ৰ্ষো").replace(/À¸«±/g,"ৰ্সো").replace(/À˝«±/g,"ৰ্হো")
		.replace(/Àé«±/g,"ৰ্ক্ষো");
	
	//চন্দ্ৰবিন্দু-ও-কাৰ-১//ক-ক্ষ
	result = result.replace(/Àfl“±/g,"কোঁ").replace(/À‡“±/g,"খোঁ").replace(/À·“±/g,"গোঁ").replace(/À‚“±/g,"ঘোঁ").replace(/À„“±/g,"ঙোঁ")
		.replace(/À2“±|À‰“±/g,"চোঁ").replace(/ÀÂ“±/g,"ছোঁ").replace(/ÀÊ“±/g,"জোঁ").replace(/ÀÁ“±/g,"ঝোঁ").replace(/À¤û“±/g,"ঞোঁ")
		.replace(/ÀÈ“±/g,"টোঁ").replace(/ÀÍ“±/g,"ঠোঁ").replace(/ÀÎˇ“±/g,"ড়োঁ").replace(/ÀÎ“±/g,"ডোঁ")
		.replace(/ÀÏˇ“±|ÀIˇ“±/g,"ঢ়োঁ").replace(/ÀÏ“±|ÀI“±/g,"ঢোঁ").replace(/ÀÌ“±/g,"ণোঁ")
		.replace(/ÀÓ“±/g,"তোঁ").replace(/ÀÔ“±/g,"থোঁ").replace(/À“±/g,"দোঁ").replace(/ÀÒ“±/g,"ধোঁ").replace(/ÀÚ“±/g,"নোঁ")
		.replace(/ÀÛ“±/g,"পোঁ").replace(/ÀÙ“±/g,"ফোঁ").replace(/Àı“±/g,"বোঁ").replace(/Àˆ“±/g,"ভোঁ").replace(/À˜“±/g,"মোঁ")
		.replace(/À˚˛“±/g,"য়োঁ").replace(/À˚“±/g,"যোঁ").replace(/À1“±/g,"ৰোঁ").replace(/À˘“±/g,"লোঁ").replace(/Àª“±/g,"ৱোঁ")
		.replace(/À˙“±/g,"শোঁ").replace(/À¯“±/g,"ষোঁ").replace(/À¸“±/g,"সোঁ").replace(/À˝“±/g,"হোঁ")
		.replace(/Àé“±/g,"ক্ষোঁ");
	
	//ও-কাৰ-১//ক-ক্ষ
	result = result.replace(/Àfl±/g,"কো").replace(/À‡±/g,"খো").replace(/À·±/g,"গো").replace(/À‚±/g,"ঘো").replace(/À„±/g,"ঙো")
		.replace(/À2±|À‰±/g,"চো").replace(/ÀÂ±/g,"ছো").replace(/ÀÊ±/g,"জো").replace(/ÀÁ±/g,"ঝো").replace(/À¤û±/g,"ঞো")
		.replace(/ÀÈ±/g,"টো").replace(/ÀÍ±/g,"ঠো").replace(/ÀÎˇ±/g,"ড়ো").replace(/ÀÎ±/g,"ডো")
		.replace(/ÀÏˇ±|ÀIˇ±/g,"ঢ়ো").replace(/ÀÏ±|ÀI±/g,"ঢো").replace(/ÀÌ±/g,"ণো")
		.replace(/ÀÓ±/g,"তো").replace(/ÀÔ±/g,"থো").replace(/À±/g,"দো").replace(/ÀÒ±/g,"ধো").replace(/ÀÚ±/g,"নো")
		.replace(/ÀÛ±/g,"পো").replace(/ÀÙ±/g,"ফো").replace(/Àı±/g,"বো").replace(/Àˆ±/g,"ভো").replace(/À˜±/g,"মো")
		.replace(/À˚˛±/g,"য়ো").replace(/À˚±/g,"যো").replace(/À1±/g,"ৰো").replace(/À˘±/g,"লো").replace(/Àª±/g,"ৱো")
		.replace(/À˙±/g,"শো").replace(/À¯±/g,"ষো").replace(/À¸±/g,"সো").replace(/À˝±/g,"হো")
		.replace(/Àé±/g,"ক্ষো");
	
	//ও-কাৰ-য-কাৰ-২//ক-ক্ষ
	result = result.replace(/OEfl…±/g,"ক্যো").replace(/OE‡…±/g,"খ্যো").replace(/OE·…±/g,"গ্যো").replace(/OE‚…±/g,"ঘ্যো").replace(/OE„…±/g,"ঙ্যো")
		.replace(/OE2…±|OE‰…±/g,"চ্যো").replace(/OEÂ…±/g,"ছ্যো").replace(/OEÊ…±/g,"জ্যো").replace(/OEÁ…±/g,"ঝ্যো").replace(/OE¤û…±/g,"ঞ্যো")
		.replace(/OEÈ…±/g,"ট্যো").replace(/OEÍ…±/g,"ঠ্যো").replace(/OEÎˇ…±/g,"ড়্যো").replace(/OEÎ…±/g,"ড্যো")
		.replace(/OEÏˇ…±|OEIˇ…±/g,"ঢ়্যো").replace(/OEÏ…±|OEI…±/g,"ঢ্যো").replace(/OEÌ…±/g,"ণ্যো")
		.replace(/OEÓ…±/g,"ত্যো").replace(/OEÔ…±/g,"থ্যো").replace(/OE…±/g,"দ্যো").replace(/OEÒ…±/g,"ধ্যো").replace(/OEÚ…±/g,"ন্যো")
		.replace(/OEÛ…±/g,"প্যো").replace(/OEÙ…±/gi,"ফ্যো").replace(/OEı…±/gi,"ব্যো").replace(/OEˆ…±/g,"ভ্যো").replace(/OE˜…±/g,"ম্যো")
		.replace(/OE˚˛…±/g,"য়্যো").replace(/OE˚…±/g,"য্যো").replace(/OE1…±/g,"ৰ্যো").replace(/OE˘…±/g,"ল্যো").replace(/OEª…±/g,"ৱ্যো")
		.replace(/OE˙…±/g,"শ্যো").replace(/OE¯…±/g,"ষ্যো").replace(/OE¸…±/gi,"স্যো").replace(/OE˝…±/g,"হ্যো")
		.replace(/OEé…±/g,"ক্ষ্যো");
	
	//ৰেফ-ও-কাৰ-২//ক-ক্ষ
	result = result.replace(/OEfl«±/g,"ৰ্কো").replace(/OE‡«±/g,"ৰ্খো").replace(/OE·«±/g,"ৰ্গো").replace(/OE‚«±/g,"ৰ্ঘো").replace(/OE„«±/g,"ৰ্ঙো")
		.replace(/OE2«±|OE‰«±/g,"ৰ্চো").replace(/OEÂ«±/g,"ৰ্ছো").replace(/OEÊ«±/g,"ৰ্জো").replace(/OEÁ«±/g,"ৰ্ঝো").replace(/OE¤û«±/g,"ৰ্ঞো")
		.replace(/OEÈ«±/g,"ৰ্টো").replace(/OEÍ«±/g,"ৰ্ঠো").replace(/OEÎˇ«±/g,"ৰ্ড়ো").replace(/OEÎ«±/g,"ৰ্ডো")
		.replace(/OEÏˇ«±|OEIˇ«±/g,"ৰ্ঢ়ো").replace(/OEÏ«±|OEI«±/g,"ৰ্ঢো").replace(/OEÌ«±/g,"ৰ্ণো")
		.replace(/OEÓ«±/g,"ৰ্তো").replace(/OEÔ«±/g,"ৰ্থো").replace(/OE«±/g,"ৰ্দো").replace(/OEÒ«±/g,"ৰ্ধো").replace(/OEÚ«±/g,"ৰ্নো")
		.replace(/OEÛ«±/g,"ৰ্পো").replace(/OEÙ«±/g,"ৰ্ফো").replace(/OEı«±/g,"ৰ্বো").replace(/OEˆ«±/g,"ৰ্ভো").replace(/OE˜«±/g,"ৰ্মো")
		.replace(/OE˚˛«±/g,"ৰ্য়ো").replace(/OE˚«±/g,"ৰ্যো").replace(/OE1«±/g,"ৰ্ৰো").replace(/OE˘«±/g,"ৰ্লো").replace(/OEª«±/g,"ৰ্ৱো")
		.replace(/OE˙«±/g,"ৰ্শো").replace(/OE¯«±/g,"ৰ্ষো").replace(/OE¸«±/g,"ৰ্সো").replace(/OE˝«±/g,"ৰ্হো")
		.replace(/OEé«±/g,"ৰ্ক্ষো");

	//চন্দ্ৰবিন্দু-ও-কাৰ-২//ক-ক্ষ
	result = result.replace(/OEfl“±/g,"কোঁ").replace(/OE‡“±/g,"খোঁ").replace(/OE·“±/g,"গোঁ").replace(/OE‚“±/g,"ঘোঁ").replace(/OE„“±/g,"ঙোঁ")
		.replace(/OE2“±|OE‰“±/g,"চোঁ").replace(/OEÂ“±/g,"ছোঁ").replace(/OEÊ“±/g,"জোঁ").replace(/OEÁ“±/g,"ঝোঁ").replace(/OE¤û“±/g,"ঞোঁ")
		.replace(/OEÈ“±/g,"টোঁ").replace(/OEÍ“±/g,"ঠোঁ").replace(/OEÎˇ“±/g,"ড়োঁ").replace(/OEÎ“±/g,"ডোঁ")
		.replace(/OEÏˇ“±|OEIˇ“±/g,"ঢ়োঁ").replace(/OEÏ“±|OEI“±/g,"ঢোঁ").replace(/OEÌ“±/g,"ণোঁ")
		.replace(/OEÓ“±/g,"তোঁ").replace(/OEÔ“±/g,"থোঁ").replace(/OE“±/g,"দোঁ").replace(/OEÒ“±/g,"ধোঁ").replace(/OEÚ“±/g,"নোঁ")
		.replace(/OEÛ“±/g,"পোঁ").replace(/OEÙ“±/g,"ফোঁ").replace(/OEı“±/g,"বোঁ").replace(/OEˆ“±/g,"ভোঁ").replace(/OE˜“±/g,"মোঁ")
		.replace(/OE˚˛“±/g,"য়োঁ").replace(/OE˚“±/g,"যোঁ").replace(/OE1“±/g,"ৰোঁ").replace(/OE˘“±/g,"লোঁ").replace(/OEª“±/g,"ৱোঁ")
		.replace(/OE˙“±/g,"শোঁ").replace(/OE¯“±/g,"ষোঁ").replace(/OE¸“±/g,"সোঁ").replace(/OE˝“±/g,"হোঁ")
		.replace(/OEé“±/g,"ক্ষোঁ");

	//ও-কাৰ-২//ক-ক্ষ
	result = result.replace(/OEfl±/g,"কো").replace(/OE‡±/g,"খো").replace(/OE·±/g,"গো").replace(/OE‚±/g,"ঘো").replace(/OE„±/g,"ঙো")
		.replace(/OE2±|OE‰±/g,"চো").replace(/OEÂ±/g,"ছো").replace(/OEÊ±/g,"জো").replace(/OEÁ±/g,"ঝো").replace(/OE¤û±/g,"ঞো")
		.replace(/OEÈ±/g,"টো").replace(/OEÍ±/g,"ঠো").replace(/OEÎˇ±/g,"ড়ো").replace(/OEÎ±/g,"ডো")
		.replace(/OEÏˇ±|OEIˇ±/g,"ঢ়ো").replace(/OEÏ±|OEI±/g,"ঢো").replace(/OEÌ±/g,"ণো")
		.replace(/OEÓ±/g,"তো").replace(/OEÔ±/g,"থো").replace(/OE±/g,"দো").replace(/OEÒ±/g,"ধো").replace(/OEÚ±/g,"নো")
		.replace(/OEÛ±/g,"পো").replace(/OEÙ±/g,"ফো").replace(/OEı±/g,"বো").replace(/OEˆ±/g,"ভো").replace(/OE˜±/g,"মো")
		.replace(/OE˚˛±/g,"য়ো").replace(/OE˚±/g,"যো").replace(/OE1±/g,"ৰো").replace(/OE˘±/g,"লো").replace(/OEª±/g,"ৱো")
		.replace(/OE˙±/g,"শো").replace(/OE¯±/g,"ষো").replace(/OE¸±/g,"সো").replace(/OE˝±/g,"হো")
		.replace(/OEé±/g,"ক্ষো");
	
	//ও-কাৰ-য-কাৰ-৩//ক-ক্ষ
	result = result.replace(/Œfl…±/g,"ক্যো").replace(/Œ‡…±/g,"খ্যো").replace(/Œ·…±/g,"গ্যো").replace(/Œ‚…±/g,"ঘ্যো").replace(/Œ„…±/g,"ঙ্যো")
		.replace(/Œ2…±|Œ‰…±/g,"চ্যো").replace(/ŒÂ…±/g,"ছ্যো").replace(/ŒÊ…±/g,"জ্যো").replace(/ŒÁ…±/g,"ঝ্যো").replace(/Œ¤û…±/g,"ঞ্যো")
		.replace(/ŒÈ…±/g,"ট্যো").replace(/ŒÍ…±/g,"ঠ্যো").replace(/ŒÎˇ…±/g,"ড়্যো").replace(/ŒÎ…±/g,"ড্যো")
		.replace(/ŒÏˇ…±|ŒIˇ…±/g,"ঢ়্যো").replace(/ŒÏ…±|ŒI…±/g,"ঢ্যো").replace(/ŒÌ…±/g,"ণ্যো")
		.replace(/ŒÓ…±/g,"ত্যো").replace(/ŒÔ…±/g,"থ্যো").replace(/Œ…±/g,"দ্যো").replace(/ŒÒ…±/g,"ধ্যো").replace(/ŒÚ…±/g,"ন্যো")
		.replace(/ŒÛ…±/g,"প্যো").replace(/ŒÙ…±/gi,"ফ্যো").replace(/Œı…±/gi,"ব্যো").replace(/Œˆ…±/g,"ভ্যো").replace(/Œ˜…±/g,"ম্যো")
		.replace(/Œ˚˛…±/g,"য়্যো").replace(/Œ˚…±/g,"য্যো").replace(/Œ1…±/g,"ৰ্যো").replace(/Œ˘…±/g,"ল্যো").replace(/Œª…±/g,"ৱ্যো")
		.replace(/Œ˙…±/g,"শ্যো").replace(/Œ¯…±/g,"ষ্যো").replace(/Œ¸…±/gi,"স্যো").replace(/Œ˝…±/g,"হ্যো")
		.replace(/Œé…±/g,"ক্ষ্যো");

	//ৰেফ-ও-কাৰ-৩//ক-ক্ষ
	result = result.replace(/Œfl«±/g,"ৰ্কো").replace(/Œ‡«±/g,"ৰ্খো").replace(/Œ·«±/g,"ৰ্গো").replace(/Œ‚«±/g,"ৰ্ঘো").replace(/Œ„«±/g,"ৰ্ঙো")
		.replace(/Œ2«±|Œ‰«±/g,"ৰ্চো").replace(/ŒÂ«±/g,"ৰ্ছো").replace(/ŒÊ«±/g,"ৰ্জো").replace(/ŒÁ«±/g,"ৰ্ঝো").replace(/Œ¤û«±/g,"ৰ্ঞো")
		.replace(/ŒÈ«±/g,"ৰ্টো").replace(/ŒÍ«±/g,"ৰ্ঠো").replace(/ŒÎˇ«±/g,"ৰ্ড়ো").replace(/ŒÎ«±/g,"ৰ্ডো")
		.replace(/ŒÏˇ«±|ŒIˇ«±/g,"ৰ্ঢ়ো").replace(/ŒÏ«±|ŒI«±/g,"ৰ্ঢো").replace(/ŒÌ«±/g,"ৰ্ণো")
		.replace(/ŒÓ«±/g,"ৰ্তো").replace(/ŒÔ«±/g,"ৰ্থো").replace(/Œ«±/g,"ৰ্দো").replace(/ŒÒ«±/g,"ৰ্ধো").replace(/ŒÚ«±/g,"ৰ্নো")
		.replace(/ŒÛ«±/g,"ৰ্পো").replace(/ŒÙ«±/g,"ৰ্ফো").replace(/Œı«±/g,"ৰ্বো").replace(/Œˆ«±/g,"ৰ্ভো").replace(/Œ˜«±/g,"ৰ্মো")
		.replace(/Œ˚˛«±/g,"ৰ্য়ো").replace(/Œ˚«±/g,"ৰ্যো").replace(/Œ1«±/g,"ৰ্ৰো").replace(/Œ˘«±/g,"ৰ্লো").replace(/Œª«±/g,"ৰ্ৱো")
		.replace(/Œ˙«±/g,"ৰ্শো").replace(/Œ¯«±/g,"ৰ্ষো").replace(/Œ¸«±/g,"ৰ্সো").replace(/Œ˝«±/g,"ৰ্হো")
		.replace(/Œé«±/g,"ৰ্ক্ষো");

	//চন্দ্ৰবিন্দু-ও-কাৰ-৩//ক-ক্ষ
	result = result.replace(/Œfl“±/g,"কোঁ").replace(/Œ‡“±/g,"খোঁ").replace(/Œ·“±/g,"গোঁ").replace(/Œ‚“±/g,"ঘোঁ").replace(/Œ„“±/g,"ঙোঁ")
		.replace(/Œ2“±|Œ‰“±/g,"চোঁ").replace(/ŒÂ“±/g,"ছোঁ").replace(/ŒÊ“±/g,"জোঁ").replace(/ŒÁ“±/g,"ঝোঁ").replace(/Œ¤û“±/g,"ঞোঁ")
		.replace(/ŒÈ“±/g,"টোঁ").replace(/ŒÍ“±/g,"ঠোঁ").replace(/ŒÎˇ“±/g,"ড়োঁ").replace(/ŒÎ“±/g,"ডোঁ")
		.replace(/ŒÏˇ“±|ŒIˇ“±/g,"ঢ়োঁ").replace(/ŒÏ“±|ŒI“±/g,"ঢোঁ").replace(/ŒÌ“±/g,"ণোঁ")
		.replace(/ŒÓ“±/g,"তোঁ").replace(/ŒÔ“±/g,"থোঁ").replace(/Œ“±/g,"দোঁ").replace(/ŒÒ“±/g,"ধোঁ").replace(/ŒÚ“±/g,"নোঁ")
		.replace(/ŒÛ“±/g,"পোঁ").replace(/ŒÙ“±/g,"ফোঁ").replace(/Œı“±/g,"বোঁ").replace(/Œˆ“±/g,"ভোঁ").replace(/Œ˜“±/g,"মোঁ")
		.replace(/Œ˚˛“±/g,"য়োঁ").replace(/Œ˚“±/g,"যোঁ").replace(/Œ1“±/g,"ৰোঁ").replace(/Œ˘“±/g,"লোঁ").replace(/Œª“±/g,"ৱোঁ")
		.replace(/Œ˙“±/g,"শোঁ").replace(/Œ¯“±/g,"ষোঁ").replace(/Œ¸“±/g,"সোঁ").replace(/Œ˝“±/g,"হোঁ")
		.replace(/Œé“±/g,"ক্ষোঁ");

	//ও-কাৰ-৩//ক-ক্ষ
	result = result.replace(/Œfl±/g,"কো").replace(/Œ‡±/g,"খো").replace(/Œ·±/g,"গো").replace(/Œ‚±/g,"ঘো").replace(/Œ„±/g,"ঙো")
		.replace(/Œ2±|Œ‰±/g,"চো").replace(/ŒÂ±/g,"ছো").replace(/ŒÊ±/g,"জো").replace(/ŒÁ±/g,"ঝো").replace(/Œ¤û±/g,"ঞো")
		.replace(/ŒÈ±/g,"টো").replace(/ŒÍ±/g,"ঠো").replace(/ŒÎˇ±/g,"ড়ো").replace(/ŒÎ±/g,"ডো")
		.replace(/ŒÏˇ±|ŒIˇ±/g,"ঢ়ো").replace(/ŒÏ±|ŒI±/g,"ঢো").replace(/ŒÌ±/g,"ণো")
		.replace(/ŒÓ±/g,"তো").replace(/ŒÔ±/g,"থো").replace(/Œ±/g,"দো").replace(/ŒÒ±/g,"ধো").replace(/ŒÚ±/g,"নো")
		.replace(/ŒÛ±/g,"পো").replace(/ŒÙ±/g,"ফো").replace(/Œı±/g,"বো").replace(/Œˆ±/g,"ভো").replace(/Œ˜±/g,"মো")
		.replace(/Œ˚˛±/g,"য়ো").replace(/Œ˚±/g,"যো").replace(/Œ1±/g,"ৰো").replace(/Œ˘±/g,"লো").replace(/Œª±/g,"ৱো")
		.replace(/Œ˙±/g,"শো").replace(/Œ¯±/g,"ষো").replace(/Œ¸±/g,"সো").replace(/Œ˝±/g,"হো")
		.replace(/Œé±/g,"ক্ষো");

	//ৰেফ-ঐ-কাৰ-১//ক-ক্ষ
	result = result.replace(/Õfl«/g,"ৰ্কৈ").replace(/Õ‡«/g,"ৰ্খৈ").replace(/Õ·«/g,"ৰ্গৈ").replace(/Õ‚«/g,"ৰ্ঘৈ").replace(/Õ„«/g,"ৰ্ঙৈ")
		.replace(/Õ2«|Õ‰«/g,"ৰ্চৈ").replace(/ÕÂ«/g,"ৰ্ছৈ").replace(/ÕÊ«/g,"ৰ্জৈ").replace(/ÕÁ«/g,"ৰ্ঝৈ").replace(/Õ¤û«/g,"ৰ্ঞৈ")
		.replace(/ÕÈ«/g,"ৰ্টৈ").replace(/ÕÍ«/g,"ৰ্ঠৈ").replace(/ÕÎˇ«/g,"ৰ্ড়ৈ").replace(/ÕÎ«/g,"ৰ্ডৈ")
		.replace(/ÕÏˇ«|ÕIˇ«/g,"ৰ্ঢ়ৈ").replace(/ÕÏ«|ÕI«/g,"ৰ্ঢৈ").replace(/ÕÌ«/g,"ৰ্ণৈ")
		.replace(/ÕÓ«/g,"ৰ্তৈ").replace(/ÕÔ«/g,"ৰ্থৈ").replace(/Õ«/g,"ৰ্দৈ").replace(/ÕÒ«/g,"ৰ্ধৈ").replace(/ÕÚ«/g,"ৰ্নৈ")
		.replace(/ÕÛ«/g,"ৰ্পৈ").replace(/ÕÙ«/g,"ৰ্ফৈ").replace(/Õı«/g,"ৰ্বৈ").replace(/Õˆ«/g,"ৰ্ভৈ").replace(/Õ˜«/g,"ৰ্মৈ")
		.replace(/Õ˚˛«/g,"ৰ্য়ৈ").replace(/Õ˚«/g,"ৰ্যৈ").replace(/Õ1«/g,"ৰ্ৰৈ").replace(/Õ˘«/g,"ৰ্লৈ").replace(/Õª«/g,"ৰ্ৱৈ")
		.replace(/Õ˙«/g,"ৰ্শৈ").replace(/Õ¯«/g,"ৰ্ষৈ").replace(/Õ¸«/g,"ৰ্সৈ").replace(/Õ˝«/g,"ৰ্হৈ")
		.replace(/Õé«/g,"ৰ্ক্ষৈ");

	//ঐ-kar1//ক-ক্ষ
	result = result.replace(/Õfl/g,"কৈ").replace(/Õ‡/g,"খৈ").replace(/Õ·/g,"গৈ").replace(/Õ‚/g,"ঘৈ").replace(/Õ„/g,"ঙৈ")
		.replace(/Õ2|Õ‰/g,"চৈ").replace(/ÕÂ/g,"ছৈ").replace(/ÕÊ/g,"জৈ").replace(/ÕÁ/g,"ঝৈ").replace(/Õ¤û/g,"ঞৈ")
		.replace(/ÕÈ/g,"টৈ").replace(/ÕÍ/g,"ঠৈ").replace(/ÕÎˇ/g,"ড়ৈ").replace(/ÕÎ/g,"ডৈ")
		.replace(/ÕÏˇ|ÕIˇ/g,"ঢ়ৈ").replace(/ÕÏ|ÕI/g,"ঢৈ").replace(/ÕÌ/g,"ণৈ")
		.replace(/ÕÓ/g,"তৈ").replace(/ÕÔ/g,"থৈ").replace(/Õ/g,"দৈ").replace(/ÕÒ/g,"ধৈ").replace(/ÕÚ/g,"নৈ")
		.replace(/ÕÛ/g,"পৈ").replace(/ÕÙ/g,"ফৈ").replace(/Õı/g,"বৈ").replace(/Õˆ/g,"ভৈ").replace(/Õ˜/g,"মৈ")
		.replace(/Õ˚˛/g,"য়ৈ").replace(/Õ˚/g,"যৈ").replace(/Õ1/g,"ৰৈ").replace(/Õ˘/g,"লৈ").replace(/Õª/g,"ৱৈ")
		.replace(/Õ˙/g,"শৈ").replace(/Õ¯/g,"ষৈ").replace(/Õ¸/g,"সৈ").replace(/Õ˝/g,"হৈ")
		.replace(/Õé/g,"ক্ষৈ");

	//ৰেফ-ঐ-কাৰ-২//ক-ক্ষ
	result = result.replace(/Æfl«/g,"ৰ্কৈ").replace(/Æ‡«/g,"ৰ্খৈ").replace(/Æ·«/g,"ৰ্গৈ").replace(/Æ‚«/g,"ৰ্ঘৈ").replace(/Æ„«/g,"ৰ্ঙৈ")
		.replace(/Æ2«|Æ‰«/g,"ৰ্চৈ").replace(/ÆÂ«/g,"ৰ্ছৈ").replace(/ÆÊ«/g,"ৰ্জৈ").replace(/ÆÁ«/g,"ৰ্ঝৈ").replace(/Æ¤û«/g,"ৰ্ঞৈ")
		.replace(/ÆÈ«/g,"ৰ্টৈ").replace(/ÆÍ«/g,"ৰ্ঠৈ").replace(/ÆÎˇ«/g,"ৰ্ড়ৈ").replace(/ÆÎ«/g,"ৰ্ডৈ")
		.replace(/ÆÏˇ«|ÆIˇ«/g,"ৰ্ঢ়ৈ").replace(/ÆÏ«|ÆI«/g,"ৰ্ঢৈ").replace(/ÆÌ«/g,"ৰ্ণৈ")
		.replace(/ÆÓ«/g,"ৰ্তৈ").replace(/ÆÔ«/g,"ৰ্থৈ").replace(/Æ«/g,"ৰ্দৈ").replace(/ÆÒ«/g,"ৰ্ধৈ").replace(/ÆÚ«/g,"ৰ্নৈ")
		.replace(/ÆÛ«/g,"ৰ্পৈ").replace(/ÆÙ«/g,"ৰ্ফৈ").replace(/Æı«/g,"ৰ্বৈ").replace(/Æˆ«/g,"ৰ্ভৈ").replace(/Æ˜«/g,"ৰ্মৈ")
		.replace(/Æ˚˛«/g,"ৰ্য়ৈ").replace(/Æ˚«/g,"ৰ্যৈ").replace(/Æ1«/g,"ৰ্ৰৈ").replace(/Æ˘«/g,"ৰ্লৈ").replace(/Æª«/g,"ৰ্ৱৈ")
		.replace(/Æ˙«/g,"ৰ্শৈ").replace(/Æ¯«/g,"ৰ্ষৈ").replace(/Æ¸«/g,"ৰ্সৈ").replace(/Æ˝«/g,"ৰ্হৈ")
		.replace(/Æé«/g,"ৰ্ক্ষৈ");

	//ঐ-কাৰ-২//ক-ক্ষ
	result = result.replace(/Æfl/g,"কৈ").replace(/Æ‡/g,"খৈ").replace(/Æ·/g,"গৈ").replace(/Æ‚/g,"ঘৈ").replace(/Æ„/g,"ঙৈ")
		.replace(/Æ2|Æ‰/g,"চৈ").replace(/ÆÂ/g,"ছৈ").replace(/ÆÊ/g,"জৈ").replace(/ÆÁ/g,"ঝৈ").replace(/Æ¤û/g,"ঞৈ")
		.replace(/ÆÈ/g,"টৈ").replace(/ÆÍ/g,"ঠৈ").replace(/ÆÎˇ/g,"ড়ৈ").replace(/ÆÎ/g,"ডৈ")
		.replace(/ÆÏˇ|ÆIˇ/g,"ঢ়ৈ").replace(/ÆÏ|ÆI/g,"ঢৈ").replace(/ÆÌ/g,"ণৈ")
		.replace(/ÆÓ/g,"তৈ").replace(/ÆÔ/g,"থৈ").replace(/Æ/g,"দৈ").replace(/ÆÒ/g,"ধৈ").replace(/ÆÚ/g,"নৈ")
		.replace(/ÆÛ/g,"পৈ").replace(/ÆÙ/g,"ফৈ").replace(/Æı/g,"বৈ").replace(/Æˆ/g,"ভৈ").replace(/Æ˜/g,"মৈ")
		.replace(/Æ˚˛/g,"য়ৈ").replace(/Æ˚/g,"যৈ").replace(/Æ1/g,"ৰৈ").replace(/Æ˘/g,"লৈ").replace(/Æª/g,"ৱৈ")
		.replace(/Æ˙/g,"শৈ").replace(/Æ¯/g,"ষৈ").replace(/Æ¸/g,"সৈ").replace(/Æ˝/g,"হৈ")
		.replace(/Æé/g,"ক্ষৈ");

	//ৰেফ-এ-কাৰ-১//ক-ক্ষ
	result = result.replace(/OEfl«/g,"ৰ্কে").replace(/OE‡«/g,"ৰ্খে").replace(/OE·«/g,"ৰ্গে").replace(/OE‚«/g,"ৰ্ঘে").replace(/OE„«/g,"ৰ্ঙে")
		.replace(/OE2«|OE‰«/g,"ৰ্চে").replace(/OEÂ«/g,"ৰ্ছে").replace(/OEÊ«/g,"ৰ্জে").replace(/OEÁ«/g,"ৰ্ঝে").replace(/OE¤û«/g,"ৰ্ঞে")
		.replace(/OEÈ«/g,"ৰ্টে").replace(/OEÍ«/g,"ৰ্ঠে").replace(/OEÎˇ«/g,"ৰ্ড়ে").replace(/OEÎ«/g,"ৰ্ডে")
		.replace(/OEÏˇ«|OEIˇ«/g,"ৰ্ঢ়ে").replace(/OEÏ«|OEI«/g,"ৰ্ঢে").replace(/OEÌ«/g,"ৰ্ণে")
		.replace(/OEÓ«/g,"ৰ্তে").replace(/OEÔ«/g,"ৰ্থে").replace(/OE«/g,"ৰ্দে").replace(/OEÒ«/g,"ৰ্ধে").replace(/OEÚ«/g,"ৰ্নে")
		.replace(/OEÛ«/g,"ৰ্পে").replace(/OEÙ«/g,"ৰ্ফে").replace(/OEı«/g,"ৰ্বে").replace(/OEˆ«/g,"ৰ্ভে").replace(/OE˜«/g,"ৰ্মে")
		.replace(/OE˚˛«/g,"ৰ্য়ে").replace(/OE˚«/g,"ৰ্যে").replace(/OE1«/g,"ৰ্ৰে").replace(/OE˘«/g,"ৰ্লে").replace(/OEª«/g,"ৰ্ৱে")
		.replace(/OE˙«/g,"ৰ্শে").replace(/OE¯«/g,"ৰ্ষে").replace(/OE¸«/g,"ৰ্সে").replace(/OE˝«/g,"ৰ্হে")
		.replace(/OEé«/g,"ৰ্ক্ষে");

	//এ-কাৰ-য-কাৰ-১//ক-ক্ষ
	result = result.replace(/OEfl…/g,"ক্যে").replace(/OE‡…/g,"খ্যে").replace(/OE·…/g,"গ্যে").replace(/OE‚…/g,"ঘ্যে").replace(/OE„…/g,"ঙ্যে")
		.replace(/OE2…|OE‰…/g,"চ্যে").replace(/OEÂ…/g,"ছ্যে").replace(/OEÊ…/g,"জ্যে").replace(/OEÁ…/g,"ঝ্যে").replace(/OE¤û…/g,"ঞ্যে")
		.replace(/OEÈ…/g,"ট্যে").replace(/OEÍ…/g,"ঠ্যে").replace(/OEÎˇ…/g,"ড়্যে").replace(/OEÎ…/g,"ড্যে")
		.replace(/OEÏˇ…|OEIˇ…/g,"ঢ়্যে").replace(/OEÏ…|OEI…/g,"ঢ্যে").replace(/OEÌ…/g,"ণ্যে")
		.replace(/OEÓ…/g,"ত্যে").replace(/OEÔ…/g,"থ্যে").replace(/OE…/g,"দ্যে").replace(/OEÒ…/g,"ধ্যে").replace(/OEÚ…/g,"ন্যে")
		.replace(/OEÛ…/g,"প্যে").replace(/OEÙ…/gi,"ফ্যে").replace(/OEı…/gi,"ব্যে").replace(/OEˆ…/g,"ভ্যে").replace(/OE˜…/g,"ম্যে")
		.replace(/OE˚˛…/g,"য়্যে").replace(/OE˚…/g,"য্যে").replace(/OE1…/g,"ৰ্যে").replace(/OE˘…/g,"ল্যে").replace(/OEª…/g,"ৱ্যে")
		.replace(/OE˙…/g,"শ্যে").replace(/OE¯…/g,"ষ্যে").replace(/OE¸…/gi,"স্যে").replace(/OE˝…/g,"হ্যে")
		.replace(/OEé…/g,"ক্ষ্যে");

	//এ-কাৰ-১//ক-ক্ষ
	result = result.replace(/OEfl/g,"কে").replace(/OE‡/g,"খে").replace(/OE·/g,"গে").replace(/OE‚/g,"ঘে").replace(/OE„/g,"ঙে")
		.replace(/OE2|OE‰/g,"চে").replace(/OEÂ/g,"ছে").replace(/OEÊ/g,"জে").replace(/OEÁ/g,"ঝে").replace(/OE¤û/g,"ঞে")
		.replace(/OEÈ/g,"টে").replace(/OEÍ/g,"ঠে").replace(/OEÎˇ/g,"ড়ে").replace(/OEÎ/g,"ডে")
		.replace(/OEÏˇ|OEIˇ/g,"ঢ়ে").replace(/OEÏ|OEI/g,"ঢে").replace(/OEÌ/g,"ণে")
		.replace(/OEÓ/g,"তে").replace(/OEÔ/g,"থে").replace(/OE/g,"দে").replace(/OEÒ/g,"ধে").replace(/OEÚ/g,"নে")
		.replace(/OEÛ/g,"পে").replace(/OEÙ/g,"ফে").replace(/OEı/g,"বে").replace(/OEˆ/g,"ভে").replace(/OE˜/g,"মে")
		.replace(/OE˚˛/g,"য়ে").replace(/OE˚/g,"যে").replace(/OE1/g,"ৰে").replace(/OE˘/g,"লে").replace(/OEª/g,"ৱে")
		.replace(/OE˙/g,"শে").replace(/OE¯/g,"ষে").replace(/OE¸/g,"সে").replace(/OE˝/g,"হে")
		.replace(/OEé/g,"ক্ষে");

	//ৰেফ-এ-কাৰ-২//ক-ক্ষ
	result = result.replace(/Àfl«/g,"ৰ্কে").replace(/À‡«/g,"ৰ্খে").replace(/À·«/g,"ৰ্গে").replace(/À‚«/g,"ৰ্ঘে").replace(/À„«/g,"ৰ্ঙে")
		.replace(/À2«|À‰«/g,"ৰ্চে").replace(/ÀÂ«/g,"ৰ্ছে").replace(/ÀÊ«/g,"ৰ্জে").replace(/ÀÁ«/g,"ৰ্ঝে").replace(/À¤û«/g,"ৰ্ঞে")
		.replace(/ÀÈ«/g,"ৰ্টে").replace(/ÀÍ«/g,"ৰ্ঠে").replace(/ÀÎˇ«/g,"ৰ্ড়ে").replace(/ÀÎ«/g,"ৰ্ডে")
		.replace(/ÀÏˇ«|ÀIˇ«/g,"ৰ্ঢ়ে").replace(/ÀÏ«|ÀI«/g,"ৰ্ঢে").replace(/ÀÌ«/g,"ৰ্ণে")
		.replace(/ÀÓ«/g,"ৰ্তে").replace(/ÀÔ«/g,"ৰ্থে").replace(/À«/g,"ৰ্দে").replace(/ÀÒ«/g,"ৰ্ধে").replace(/ÀÚ«/g,"ৰ্নে")
		.replace(/ÀÛ«/g,"ৰ্পে").replace(/ÀÙ«/g,"ৰ্ফে").replace(/Àı«/g,"ৰ্বে").replace(/Àˆ«/g,"ৰ্ভে").replace(/À˜«/g,"ৰ্মে")
		.replace(/À˚˛«/g,"ৰ্য়ে").replace(/À˚«/g,"ৰ্যে").replace(/À1«/g,"ৰ্ৰে").replace(/À˘«/g,"ৰ্লে").replace(/Àª«/g,"ৰ্ৱে")
		.replace(/À˙«/g,"ৰ্শে").replace(/À¯«/g,"ৰ্ষে").replace(/À¸«/g,"ৰ্সে").replace(/À˝«/g,"ৰ্হে")
		.replace(/Àé«/g,"ৰ্ক্ষে");

	//এ-কাৰ-য-কাৰ-২//ক-ক্ষ
	result = result.replace(/Àfl…/g,"ক্যে").replace(/À‡…/g,"খ্যে").replace(/À·…/g,"গ্যে").replace(/À‚…/g,"ঘ্যে").replace(/À„…/g,"ঙ্যে")
		.replace(/À2…|À‰…/g,"চ্যে").replace(/ÀÂ…/g,"ছ্যে").replace(/ÀÊ…/g,"জ্যে").replace(/ÀÁ…/g,"ঝ্যে").replace(/À¤û…/g,"ঞ্যে")
		.replace(/ÀÈ…/g,"ট্যে").replace(/ÀÍ…/g,"ঠ্যে").replace(/ÀÎˇ…/g,"ড়্যে").replace(/ÀÎ…/g,"ড্যে")
		.replace(/ÀÏˇ…|ÀIˇ…/g,"ঢ়্যে").replace(/ÀÏ…|ÀI…/g,"ঢ্যে").replace(/ÀÌ…/g,"ণ্যে")
		.replace(/ÀÓ…/g,"ত্যে").replace(/ÀÔ…/g,"থ্যে").replace(/À…/g,"দ্যে").replace(/ÀÒ…/g,"ধ্যে").replace(/ÀÚ…/g,"ন্যে")
		.replace(/ÀÛ…/g,"প্যে").replace(/ÀÙ…/gi,"ফ্যে").replace(/Àı…/gi,"ব্যে").replace(/Àˆ…/g,"ভ্যে").replace(/À˜…/g,"ম্যে")
		.replace(/À˚˛…/g,"য়্যে").replace(/À˚…/g,"য্যে").replace(/À1…/g,"ৰ্যে").replace(/À˘…/g,"ল্যে").replace(/Àª…/g,"ৱ্যে")
		.replace(/À˙…/g,"শ্যে").replace(/À¯…/g,"ষ্যে").replace(/À¸…/gi,"স্যে").replace(/À˝…/g,"হ্যে")
		.replace(/Àé…/g,"ক্ষ্যে");

	//এ-কাৰ-২//ক-ক্ষ
	result = result.replace(/Àfl/g,"কে").replace(/À‡/g,"খে").replace(/À·/g,"গে").replace(/À‚/g,"ঘে").replace(/À„/g,"ঙে")
		.replace(/À2|À‰/g,"চে").replace(/ÀÂ/g,"ছে").replace(/ÀÊ/g,"জে").replace(/ÀÁ/g,"ঝে").replace(/À¤û/g,"ঞে")
		.replace(/ÀÈ/g,"টে").replace(/ÀÍ/g,"ঠে").replace(/ÀÎˇ/g,"ড়ে").replace(/ÀÎ/g,"ডে")
		.replace(/ÀÏˇ|ÀIˇ/g,"ঢ়ে").replace(/ÀÏ|ÀI/g,"ঢে").replace(/ÀÌ/g,"ণে")
		.replace(/ÀÓ/g,"তে").replace(/ÀÔ/g,"থে").replace(/À/g,"দে").replace(/ÀÒ/g,"ধে").replace(/ÀÚ/g,"নে")
		.replace(/ÀÛ/g,"পে").replace(/ÀÙ/g,"ফে").replace(/Àı/g,"বে").replace(/Àˆ/g,"ভে").replace(/À˜/g,"মে")
		.replace(/À˚˛/g,"য়ে").replace(/À˚/g,"যে").replace(/À1/g,"ৰে").replace(/À˘/g,"লে").replace(/Àª/g,"ৱে")
		.replace(/À˙/g,"শে").replace(/À¯/g,"ষে").replace(/À¸/g,"সে").replace(/À˝/g,"হে")
		.replace(/Àé/g,"ক্ষে");

	//ৰেফ-এ-কাৰ-৩//ক-ক্ষ
	result = result.replace(/Œfl«/g,"ৰ্কে").replace(/Œ‡«/g,"ৰ্খে").replace(/Œ·«/g,"ৰ্গে").replace(/Œ‚«/g,"ৰ্ঘে").replace(/Œ„«/g,"ৰ্ঙে")
		.replace(/Œ2«|Œ‰«/g,"ৰ্চে").replace(/ŒÂ«/g,"ৰ্ছে").replace(/ŒÊ«/g,"ৰ্জে").replace(/ŒÁ«/g,"ৰ্ঝে").replace(/Œ¤û«/g,"ৰ্ঞে")
		.replace(/ŒÈ«/g,"ৰ্টে").replace(/ŒÍ«/g,"ৰ্ঠে").replace(/ŒÎˇ«/g,"ৰ্ড়ে").replace(/ŒÎ«/g,"ৰ্ডে")
		.replace(/ŒÏˇ«|ŒIˇ«/g,"ৰ্ঢ়ে").replace(/ŒÏ«|ŒI«/g,"ৰ্ঢে").replace(/ŒÌ«/g,"ৰ্ণে")
		.replace(/ŒÓ«/g,"ৰ্তে").replace(/ŒÔ«/g,"ৰ্থে").replace(/Œ«/g,"ৰ্দে").replace(/ŒÒ«/g,"ৰ্ধে").replace(/ŒÚ«/g,"ৰ্নে")
		.replace(/ŒÛ«/g,"ৰ্পে").replace(/ŒÙ«/g,"ৰ্ফে").replace(/Œı«/g,"ৰ্বে").replace(/Œˆ«/g,"ৰ্ভে").replace(/Œ˜«/g,"ৰ্মে")
		.replace(/Œ˚˛«/g,"ৰ্য়ে").replace(/Œ˚«/g,"ৰ্যে").replace(/Œ1«/g,"ৰ্ৰে").replace(/Œ˘«/g,"ৰ্লে").replace(/Œª«/g,"ৰ্ৱে")
		.replace(/Œ˙«/g,"ৰ্শে").replace(/Œ¯«/g,"ৰ্ষে").replace(/Œ¸«/g,"ৰ্সে").replace(/Œ˝«/g,"ৰ্হে")
		.replace(/Œé«/g,"ৰ্ক্ষে");

	//এ-কাৰ-য-কাৰ-৩//ক-ক্ষ
	result = result.replace(/Œfl…/g,"ক্যে").replace(/Œ‡…/g,"খ্যে").replace(/Œ·…/g,"গ্যে").replace(/Œ‚…/g,"ঘ্যে").replace(/Œ„…/g,"ঙ্যে")
		.replace(/Œ2…|Œ‰…/g,"চ্যে").replace(/ŒÂ…/g,"ছ্যে").replace(/ŒÊ…/g,"জ্যে").replace(/ŒÁ…/g,"ঝ্যে").replace(/Œ¤û…/g,"ঞ্যে")
		.replace(/ŒÈ…/g,"ট্যে").replace(/ŒÍ…/g,"ঠ্যে").replace(/ŒÎˇ…/g,"ড়্যে").replace(/ŒÎ…/g,"ড্যে")
		.replace(/ŒÏˇ…|ŒIˇ…/g,"ঢ়্যে").replace(/ŒÏ…|ŒI…/g,"ঢ্যে").replace(/ŒÌ…/g,"ণ্যে")
		.replace(/ŒÓ…/g,"ত্যে").replace(/ŒÔ…/g,"থ্যে").replace(/Œ…/g,"দ্যে").replace(/ŒÒ…/g,"ধ্যে").replace(/ŒÚ…/g,"ন্যে")
		.replace(/ŒÛ…/g,"প্যে").replace(/ŒÙ…/gi,"ফ্যে").replace(/Œı…/gi,"ব্যে").replace(/Œˆ…/g,"ভ্যে").replace(/Œ˜…/g,"ম্যে")
		.replace(/Œ˚˛…/g,"য়্যে").replace(/Œ˚…/g,"য্যে").replace(/Œ1…/g,"ৰ্যে").replace(/Œ˘…/g,"ল্যে").replace(/Œª…/g,"ৱ্যে")
		.replace(/Œ˙…/g,"শ্যে").replace(/Œ¯…/g,"ষ্যে").replace(/Œ¸…/gi,"স্যে").replace(/Œ˝…/g,"হ্যে")
		.replace(/Œé…/g,"ক্ষ্যে");

	//এ-কাৰ-৩//ক-ক্ষ
	result = result.replace(/Œfl/g,"কে").replace(/Œ‡/g,"খে").replace(/Œ·/g,"গে").replace(/Œ‚/g,"ঘে").replace(/Œ„/g,"ঙে")
		.replace(/Œ2|Œ‰/g,"চে").replace(/ŒÂ/g,"ছে").replace(/ŒÊ/g,"জে").replace(/ŒÁ/g,"ঝে").replace(/Œ¤û/g,"ঞে")
		.replace(/ŒÈ/g,"টে").replace(/ŒÍ/g,"ঠে").replace(/ŒÎˇ/g,"ড়ে").replace(/ŒÎ/g,"ডে")
		.replace(/ŒÏˇ|ŒIˇ/g,"ঢ়ে").replace(/ŒÏ|ŒI/g,"ঢে").replace(/ŒÌ/g,"ণে")
		.replace(/ŒÓ/g,"তে").replace(/ŒÔ/g,"থে").replace(/Œ/g,"দে").replace(/ŒÒ/g,"ধে").replace(/ŒÚ/g,"নে")
		.replace(/ŒÛ/g,"পে").replace(/ŒÙ/g,"ফে").replace(/Œı/g,"বে").replace(/Œˆ/g,"ভে").replace(/Œ˜/g,"মে")
		.replace(/Œ˚˛/g,"য়ে").replace(/Œ˚/g,"যে").replace(/Œ1/g,"ৰে").replace(/Œ˘/g,"লে").replace(/Œª/g,"ৱে")
		.replace(/Œ˙/g,"শে").replace(/Œ¯/g,"ষে").replace(/Œ¸/g,"সে").replace(/Œ˝/g,"হে")
		.replace(/Œé/g,"ক্ষে");

	//ৰেফ-ই-কাৰ//ক-ক্ষ
	result = result.replace(/øfl«/g,"ৰ্কি").replace(/ø‡«/g,"ৰ্খি").replace(/ø·«/g,"ৰ্গি").replace(/ø‚«/g,"ৰ্ঘি").replace(/ø„«/g,"ৰ্ঙি")
		.replace(/ø2«|ø‰«/g,"ৰ্চি").replace(/øÂ«/g,"ৰ্ছি").replace(/øÊ«/g,"ৰ্জি").replace(/øÁ«/g,"ৰ্ঝি").replace(/ø¤û«/g,"ৰ্ঞি")
		.replace(/øÈ«/g,"ৰ্টি").replace(/øÍ«/g,"ৰ্ঠি").replace(/øÎˇ«/g,"ৰ্ড়ি").replace(/øÎ«/g,"ৰ্ডি")
		.replace(/øÏˇ«|øIˇ«/g,"ৰ্ঢ়ি").replace(/øÏ«|øI«/g,"ৰ্ঢি").replace(/øÌ«/g,"ৰ্ণি")
		.replace(/øÓ«/g,"ৰ্তি").replace(/øÔ«/g,"ৰ্থি").replace(/ø«/g,"ৰ্দি").replace(/øÒ«/g,"ৰ্ধি").replace(/øÚ«/g,"ৰ্নি")
		.replace(/øÛ«/g,"ৰ্পি").replace(/øÙ«/g,"ৰ্ফি").replace(/øı«/g,"ৰ্বি").replace(/øˆ«/g,"ৰ্ভি").replace(/ø˜«/g,"ৰ্মি")
		.replace(/ø˚˛«/g,"ৰ্য়ি").replace(/ø˚«/g,"ৰ্যি").replace(/ø1«/g,"ৰ্ৰি").replace(/ø˘«/g,"ৰ্লি").replace(/øª«/g,"ৰ্ৱি")
		.replace(/ø˙«/g,"ৰ্শি").replace(/ø¯«/g,"ৰ্ষি").replace(/ø¸«/g,"ৰ্সি").replace(/ø˝«/g,"ৰ্হি")
		.replace(/øé«/g,"ৰ্ক্ষি");

	//ই-কাৰ//ক-ক্ষ
	result = result.replace(/øfl/g,"কি").replace(/ø‡/g,"খি").replace(/ø·/g,"গি").replace(/ø‚/g,"ঘি").replace(/ø„/g,"ঙি")
		.replace(/ø2|ø‰/g,"চি").replace(/øÂ/g,"ছি").replace(/øÊ/g,"জি").replace(/øÁ/g,"ঝি").replace(/ø¤û/g,"ঞি")
		.replace(/øÈ/g,"টি").replace(/øÍ/g,"ঠি").replace(/øÎˇ/g,"ড়ি").replace(/øÎ/g,"ডি")
		.replace(/øÏˇ|øIˇ/g,"ঢ়ি").replace(/øÏ|øI/g,"ঢি").replace(/øÌ/g,"ণি")
		.replace(/øÓ/g,"তি").replace(/øÔ/g,"থি").replace(/ø/g,"দি").replace(/øÒ/g,"ধি").replace(/øÚ/g,"নি")
		.replace(/øÛ/g,"পি").replace(/øÙ/g,"ফি").replace(/øı/g,"বি").replace(/øˆ/g,"ভি").replace(/ø˜/g,"মি")
		.replace(/ø˚˛/g,"য়ি").replace(/ø˚/g,"যি").replace(/ø1/g,"ৰি").replace(/ø˘/g,"লি").replace(/øª/g,"ৱি")
		.replace(/ø˙/g,"শি").replace(/ø¯/g,"ষি").replace(/ø¸/g,"সি").replace(/ø˝/g,"হি")
		.replace(/øé/g,"ক্ষি");

	//ৰেফ//
	result = result.replace(/fl«/g,"ৰ্ক").replace(/‡«/g,"ৰ্খ").replace(/·«/g,"ৰ্গ").replace(/‚«/g,"ৰ্ঘ").replace(/„«/g,"ৰ্ঙ")
		.replace(/2«|‰«/g,"ৰ্চ").replace(/Â«/g,"ৰ্ছ").replace(/Ê«/g,"ৰ্জ").replace(/Á«/g,"ৰ্ঝ").replace(/¤û«/g,"ৰ্ঞ")
		.replace(/È«/g,"ৰ্ট").replace(/Í«/g,"ৰ্ঠ").replace(/Îˇ«/g,"ৰ্ড়").replace(/Î«/g,"ৰ্ড")
		.replace(/Ïˇ«|Iˇ«/g,"ৰ্ঢ়").replace(/Ï«|I«/g,"ৰ্ঢ").replace(/Ì«/g,"ৰ্ণ")
		.replace(/Ó«/g,"ৰ্ত").replace(/Ô«/g,"ৰ্থ").replace(/«/g,"ৰ্দ").replace(/Ò«/g,"ৰ্ধ").replace(/Ú«/g,"ৰ্ন")
		.replace(/Û«/g,"ৰ্প").replace(/Ù«/g,"ৰ্ফ").replace(/ı«/g,"ৰ্ব").replace(/ˆ«/g,"ৰ্ভ").replace(/˜«/g,"ৰ্ম")
		.replace(/˚˛«/g,"ৰ্য়").replace(/˚«/g,"ৰ্য").replace(/1«/g,"ৰ্ৰ").replace(/˘«/g,"ৰ্ল").replace(/ª«/g,"ৰ্ৱ")
		.replace(/˙«/g,"ৰ্শ").replace(/¯«/g,"ৰ্ষ").replace(/¸«/g,"ৰ্স").replace(/˝«/g,"ৰ্হ")
		.replace(/é«/g,"ৰ্ক্ষ");

	//ঋ-কাৰ//ক-ক্ষ
	result = result.replace(/fl‘/g,"কৃ").replace(/‡‘/g,"খৃ").replace(/·‘/g,"গৃ").replace(/‚‘/g,"ঘৃ").replace(/„‘/g,"ঙৃ")
		.replace(/2‘|‰‘/g,"চৃ").replace(/Â‘/g,"ছৃ").replace(/Ê‘/g,"জৃ").replace(/Á‘/g,"ঝৃ").replace(/¤û‘/g,"ঞৃ")
		.replace(/È‘/g,"টৃ").replace(/Í‘/g,"ঠৃ").replace(/Îˇ‘/g,"ড়ৃ").replace(/Î‘/g,"ডৃ")
		.replace(/Ïˇ‘|Iˇ‘/g,"ঢ়ৃ").replace(/Ï‘|I‘/g,"ঢৃ").replace(/Ì‘/g,"ণৃ")
		.replace(/Ó‘/g,"তৃ").replace(/Ô‘/g,"থৃ").replace(/‘/g,"দৃ").replace(/Ò‘/g,"ধৃ").replace(/Ú‘/g,"নৃ")
		.replace(/Û‘/g,"পৃ").replace(/Ù‘/g,"ফৃ").replace(/ı‘/g,"বৃ").replace(/ˆ‘/g,"ভৃ").replace(/˜‘/g,"মৃ")
		.replace(/˚˛‘/g,"য়ৃ").replace(/˚‘/g,"যৃ").replace(/1‘/g,"ৰৃ").replace(/˘‘/g,"লৃ").replace(/ª‘/g,"ৱৃ")
		.replace(/˙‘/g,"শৃ").replace(/¯‘/g,"ষৃ").replace(/¸‘/g,"সৃ").replace(/˝‘/g,"হৃ")
		.replace(/é‘/g,"ক্ষৃ");

	//ক-ক্ষ//
	result = result.replace(/»/g,"ৎ").replace(/—/g,"ং").replace(/–/g,"ঃ").replace(/“/g,"ঁ")
		.replace(/’/g,"অ").replace(/অ±/g,"আ").replace(/˝◊/g,"ই").replace(/÷/g,"ঈ")
		.replace(/ড◊|Î¬◊|Î◊/g,"উ").replace(/ÿ/g,"ঊ").replace(/Ÿ/g,"ঋ")
		.replace(/¤/g,"এ").replace(/‹/g,"ঐ").replace(/›/g,"ও").replace(/ﬁ/g,"ঔ")
		.replace(/fl/g,"ক").replace(/‡/g,"খ").replace(/·/g,"গ").replace(/‚/g,"ঘ").replace(/„/g,"ঙ")
		.replace(/2|‰/g,"চ").replace(/Â/g,"ছ").replace(/Ê/g,"জ").replace(/Á/g,"ঝ").replace(/¤û|এû/g,"ঞ")
		.replace(/È/g,"ট").replace(/Í/g,"ঠ").replace(/Îˇ/g,"ড়").replace(/Î/g,"ড").replace(/Ïˇ/g,"ঢ়").replace(/Ï|I/g,"ঢ").replace(/Ì/g,"ণ")
		.replace(/Ó/g,"ত").replace(/Ô/g,"থ").replace(/|√/g,"দ").replace(/Ò/g,"ধ").replace(/Ú/g,"ন")
		.replace(/Û/g,"প").replace(/Ù/g,"ফ").replace(/ı/g,"ব").replace(/ˆ/g,"ভ").replace(/˜/g,"ম")
		.replace(/˚˛/g,"য়").replace(/˚/g,"য").replace(/1/g,"ৰ").replace(/˘/g,"ল").replace(/ª/g,"ৱ")
		.replace(/˙/g,"শ").replace(/¯/g,"ষ").replace(/¸/g,"স").replace(/˝/g,"হ")
		.replace(/é\$|é/g,"ক্ষ");

	
	result = result.replace(/&/g,"গু").replace(/q/g,"শু").replace(/ৰn/g,"ৰু").replace(/U/g,"হু")
		.replace(/¿/g,"শ্ৰী").replace(/\|n/g,"শ্ৰু").replace(/\^n/g,"দ্ৰু").replace(/d/g,"স্তু").replace(/c/g,"ন্তু");
	
	//যুক্তাক্ষৰ-ঔ-কাৰ//
	result = result.replace(/OE=±/g,"ঞ্চৌ").replace(/OES±/g,"ত্ৰৌ").replace(/OEõ∂±/g,"প্ৰৌ").replace(/OE\?±/g,"ঞ্জৌ").replace(/OES±/g,"ত্ৰৌ")
		.replace(/OEõ∂±/g,"প্ৰৌ").replace(/OEMê±/g,"ক্তৌ").replace(/OEM±/g,"ত্তৌ").replace(/OEফü±/g,"শ্নৌ").replace(/OE¢∂±/g,"গ্ৰৌ")
		.replace(/OE\(±/g,"শ্চৌ").replace(/OE©Ü±/g,"ষ্টৌ").replace(/OEá±/g,"ষ্ঠৌ").replace(/OE~±/g,"ল্লৌ").replace(/OEô¶±/g,"স্তৌ")
		.replace(/OEX±/g,"দ্ধৌ").replace(/OEôL±/g,"ন্তৌ").replace(/OEä±/g,"ল্পৌ")
		.replace(/OER±/g,"ত্মৌ").replace(/OELö±/g,"ন্থৌ").replace(/OEs±/g,"ব্দৌ").replace(/OEত্ৰê±/g,"ক্ৰৌ").replace(/OEQ±/g,"ত্বৌ")
		.replace(/OE2‰±|OE২চ±/g,"চ্চৌ").replace(/OE\)±/g,"গ্গৌ").replace(/OEù´±|OEফ´±/g,"শ্বৌ").replace(/OEy±/g,"ম্ভৌ")
		.replace(/OE\|±/g,"শ্ৰৌ").replace(/OEij±/g,"ন্মৌ").replace(/OE¶a±/g,"স্ত্ৰৌ").replace(/OE\*±/g,"গ্ধৌ")
		.replace(/OEt±/g,"ব্ধৌ").replace(/OE¶ö±/g,"স্থৌ").replace(/OE"√±|OE"±/g,"ক্টৌ").replace(/OE•Û±|OE•প±/g,"ম্পৌ").replace(/OE:±/g,"জ্ঞৌ")
		.replace(/OE;±/g,"জ্বৌ").replace(/OE˝ê±|OEহê±/g,"হ্নৌ").replace(/OE¶Û±|OE¶প±/g,"স্পৌ").replace(/OEf±/g,"ন্দ্ৰৌ").replace(/OE¶§±/g,"স্বৌ")
		.replace(/OEe±/g,"ঙ্গৌ").replace(/OE¡Z±/g,"দ্বৌ").replace(/OEiß±/g,"ন্নৌ").replace(/OE26|২৬±/g,"চ্ছৌ").replace(/OEæ±/g,"দ্ভৌ")
		.replace(/OEG±/g,"ণ্ডৌ").replace(/OE¶®±/g,"স্কৌ").replace(/OE©®±/g,"ষ্কৌ").replace(/OEKI◊±/g,"ন্টৌ").replace(/OE\^±/g,"দ্ৰৌ")
		.replace(/OE¯û|ষû±/g,"ষ্ণৌ").replace(/OE!±/g,"ক্কৌ").replace(/OE#±/g,"ক্নৌ").replace(/OE%±/g,"ক্মৌ").replace(/OE'±/g,"স্কৌ")
		.replace(/OE০±/g,"ঙ্মৌ").replace(/OE৪±/g,"চ্ছ্ৰৌ").replace(/OE৫±/g,"প্তৌ").replace(/OE৭±/g,"জ্জৌ").replace(/OE৮±/g,"জ্বৌ")
		.replace(/OE৯±/g,"জ্ঝৌ").replace(/OEগুlব্ধজ্ব±/g,"জ্ৰৌ").replace(/OEগুgব্ধজ্ব±/g,"ঞ্ছৌ").replace(/OE@±/g,"ঞ্ঝৌ").replace(/OEA±/g,"ট্টৌ")
		.replace(/OEB±/g,"ট্বৌ").replace(/OEC±/g,"ট্ৰৌ").replace(/OED±/g,"ড্ডৌ").replace(/OEE±/g,"ড্ৰৌ").replace(/OEF±/g,"ণ্ঠৌ")
		.replace(/OEH±/g,"ণ্ড্ৰৌ").replace(/OEù≠±/g,"শ্লৌ").replace(/OEJ±/g,"ণ্ণৌ").replace(/OEN±/g,"ত্ত্বৌ").replace(/OEO±/g,"ত্থৌ")
		.replace(/OEP±/g,"ত্নৌ").replace(/OET±/g,"থ্বৌ").replace(/OEV±/g,"দ্দৌ").replace(/OEW±/g,"দ্দ্বৌ").replace(/OEY±/g,"দ্ধ্বৌ")
		.replace(/OEZ±/g,"দ্বৌ").replace(/OE\\±/g,"দ্ভ্ৰৌ").replace(/OE_±/g,"ন্ঠৌ").replace(/OE`±/g,"ন্ডৌ")
		.replace(/OEh±/g,"ন্ধ্ৰৌ").replace(/OEk±/g,"ন্সৌ").replace(/OEl±/g,"চ্ঞৌ").replace(/OEm±/g,"প্পৌ").replace(/OEo±/g,"প্সৌ")
		.replace(/OEp±/g,"হ্মৌ").replace(/OEr±/g,"ব্জৌ").replace(/OEu±/g,"ব্ভৌ").replace(/OEw±/g,"ভ্ৰৌ").replace(/OEx±/g,"প্ৰৌ")
		.replace(/OEz±/g,"ম্ভ্ৰৌ").replace(/OEµ±|OEμ±/g,"ন্দৌ").replace(/OE\$±/g,"ক্বৌ").replace(/OEÄ±/g,"স্লৌ").replace(/OEÅ±/g,"হ্ণৌ")
		.replace(/OEÇ±/g,"ঙ্কৌ").replace(/OEÉ±/g,"ষ্মৌ").replace(/OEÑ±/g,"ক্ষ্মৌ").replace(/OEÖ±/g,"স্খৌ").replace(/OEØ±/g,"হ্লৌ")
		.replace(/OEâ±/g,"ল্গৌ").replace(/OEã±/g,"ল্ডৌ").replace(/OEg±/g,"ন্ধৌ").replace(/OEõ≠±/g,"প্লৌ").replace(/OE¶ú±/g,"স্মৌ")
		.replace(/OE¶£±/g,"স্ফৌ").replace(/OEÙv±|OEফv±/g,"ফ্লৌ");

	 //যুক্তাক্ষৰ-ও-কাৰ-১//
	result = result.replace(/À=±/g,"ঞ্চো").replace(/ÀS±/g,"ত্ৰো").replace(/Àõ∂±/g,"প্ৰো").replace(/À\?±/g,"ঞ্জো").replace(/ÀS±/g,"ত্ৰো")
	.replace(/Àõ∂±/g,"প্ৰো").replace(/ÀMê±/g,"ক্তো").replace(/ÀM±/g,"ত্তো").replace(/Àফü±/g,"শ্নো").replace(/À¢∂±/g,"গ্ৰো")
	.replace(/À\(±/g,"শ্চো").replace(/À©Ü±/g,"ষ্টো").replace(/Àá±/g,"ষ্ঠো").replace(/À~±/g,"ল্লো").replace(/Àô¶±/g,"স্তো")
	.replace(/ÀX±/g,"দ্ধো").replace(/ÀôL±/g,"ন্তো").replace(/Àä±/g,"ল্পো")
	.replace(/ÀR±/g,"ত্মো").replace(/ÀLö±/g,"ন্থো").replace(/Às±/g,"ব্দো").replace(/Àত্ৰê±/g,"ক্ৰো").replace(/ÀQ±/g,"ত্বো")
	.replace(/À2‰±|À২চ±/g,"চ্চো").replace(/À\)±/g,"গ্গো").replace(/Àù´±|Àফ´±/g,"শ্বো").replace(/Ày±/g,"ম্ভো")
	.replace(/À\|±/g,"শ্ৰো").replace(/Àij±/g,"ন্মো").replace(/À¶a±/g,"স্ত্ৰো").replace(/À\*±/g,"গ্ধো")
	.replace(/Àt±/g,"ব্ধো").replace(/À¶ö±/g,"স্থো").replace(/À"√±|À"±/g,"ক্টো").replace(/À•Û±|À•প±/g,"ম্পো").replace(/À:±/g,"জ্ঞো")
	.replace(/À;±/g,"জ্বো").replace(/À˝ê±|Àহê±/g,"হ্নো").replace(/À¶Û±|À¶প±/g,"স্পো").replace(/Àf±/g,"ন্দ্ৰো").replace(/À¶§±/g,"স্বো")
	.replace(/Àe±/g,"ঙ্গো").replace(/À¡Z±/g,"দ্বো").replace(/Àiß±/g,"ন্নো").replace(/À26|২৬±/g,"চ্ছো").replace(/Àæ±/g,"দ্ভো")
	.replace(/ÀG±/g,"ণ্ডো").replace(/À¶®±/g,"স্কো").replace(/À©®±/g,"ষ্কো").replace(/ÀKI◊±/g,"ন্টো").replace(/À\^±/g,"দ্ৰো")
	.replace(/À¯û|ষû±/g,"ষ্ণো").replace(/À!±/g,"ক্কো").replace(/À#±/g,"ক্নো").replace(/À%±/g,"ক্মো").replace(/À'±/g,"স্কো")
	.replace(/À০±/g,"ঙ্মো").replace(/À৪±/g,"চ্ছ্ৰো").replace(/À৫±/g,"প্তো").replace(/À৭±/g,"জ্জো").replace(/À৮±/g,"জ্বো")
	.replace(/À৯±/g,"জ্ঝো").replace(/Àগুlব্ধজ্ব±/g,"জ্ৰো").replace(/Àগুgব্ধজ্ব±/g,"ঞ্ছো").replace(/À@±/g,"ঞ্ঝো").replace(/ÀA±/g,"ট্টো")
	.replace(/ÀB±/g,"ট্বো").replace(/ÀC±/g,"ট্ৰো").replace(/ÀD±/g,"ড্ডো").replace(/ÀE±/g,"ড্ৰো").replace(/ÀF±/g,"ণ্ঠো")
	.replace(/ÀH±/g,"ণ্ড্ৰো").replace(/Àù≠±/g,"শ্লো").replace(/ÀJ±/g,"ণ্ণো").replace(/ÀN±/g,"ত্ত্বো").replace(/ÀO±/g,"ত্থো")
	.replace(/ÀP±/g,"ত্নো").replace(/ÀT±/g,"থ্বো").replace(/ÀV±/g,"দ্দো").replace(/ÀW±/g,"দ্দ্বো").replace(/ÀY±/g,"দ্ধ্বো")
	.replace(/ÀZ±/g,"দ্বো").replace(/À\\±/g,"দ্ভ্ৰো").replace(/À_±/g,"ন্ঠো").replace(/À`±/g,"ন্ডো")
	.replace(/Àh±/g,"ন্ধ্ৰো").replace(/Àk±/g,"ন্সো").replace(/Àl±/g,"চ্ঞো").replace(/Àm±/g,"প্পো").replace(/Ào±/g,"প্সো")
	.replace(/Àp±/g,"হ্মো").replace(/Àr±/g,"ব্জো").replace(/Àu±/g,"ব্ভো").replace(/Àw±/g,"ভ্ৰো").replace(/Àx±/g,"প্ৰো")
	.replace(/Àz±/g,"ম্ভ্ৰো").replace(/Àµ±|Àμ±/g,"ন্দো").replace(/À\$±/g,"ক্বো").replace(/ÀÄ±/g,"স্লো").replace(/ÀÅ±/g,"হ্ণো")
	.replace(/ÀÇ±/g,"ঙ্কো").replace(/ÀÉ±/g,"ষ্মো").replace(/ÀÑ±/g,"ক্ষ্মো").replace(/ÀÖ±/g,"স্খো").replace(/ÀØ±/g,"হ্লো")
	.replace(/Àâ±/g,"ল্গো").replace(/Àã±/g,"ল্ডো").replace(/Àg±/g,"ন্ধো").replace(/Àõ≠±/g,"প্লো").replace(/À¶ú±/g,"স্মো")
	.replace(/À¶£±/g,"স্ফো").replace(/ÀÙv±|Àফv±/g,"ফ্লো");

	//যুক্তাক্ষৰ-ও-কাৰ-২//
	result = result.replace(/OE=±/g,"ঞ্চো").replace(/OES±/g,"ত্ৰো").replace(/OEõ∂±/g,"প্ৰো").replace(/OE\?±/g,"ঞ্জো").replace(/OES±/g,"ত্ৰো")
		.replace(/OEõ∂±/g,"প্ৰো").replace(/OEMê±/g,"ক্তো").replace(/OEM±/g,"ত্তো").replace(/OEফü±/g,"শ্নো").replace(/OE¢∂±/g,"গ্ৰো")
		.replace(/OE\(±/g,"শ্চো").replace(/OE©Ü±/g,"ষ্টো").replace(/OEá±/g,"ষ্ঠো").replace(/OE~±/g,"ল্লো").replace(/OEô¶±/g,"স্তো")
		.replace(/OEX±/g,"দ্ধো").replace(/OEôL±/g,"ন্তো").replace(/OEä±/g,"ল্পো")
		.replace(/OER±/g,"ত্মো").replace(/OELö±/g,"ন্থো").replace(/OEs±/g,"ব্দো").replace(/OEত্ৰê±/g,"ক্ৰো").replace(/OEQ±/g,"ত্বো")
		.replace(/OE2‰±|OE২চ±/g,"চ্চো").replace(/OE\)±/g,"গ্গো").replace(/OEù´±|OEফ´±/g,"শ্বো").replace(/OEy±/g,"ম্ভো")
		.replace(/OE\|±/g,"শ্ৰো").replace(/OEij±/g,"ন্মো").replace(/OE¶a±/g,"স্ত্ৰো").replace(/OE\*±/g,"গ্ধো")
		.replace(/OEt±/g,"ব্ধো").replace(/OE¶ö±/g,"স্থো").replace(/OE"√±|OE"±/g,"ক্টো").replace(/OE•Û±|OE•প±/g,"ম্পো").replace(/OE:±/g,"জ্ঞো")
		.replace(/OE;±/g,"জ্বো").replace(/OE˝ê±|OEহê±/g,"হ্নো").replace(/OE¶Û±|OE¶প±/g,"স্পো").replace(/OEf±/g,"ন্দ্ৰো").replace(/OE¶§±/g,"স্বো")
		.replace(/OEe±/g,"ঙ্গো").replace(/OE¡Z±/g,"দ্বো").replace(/OEiß±/g,"ন্নো").replace(/OE26|২৬±/g,"চ্ছো").replace(/OEæ±/g,"দ্ভো")
		.replace(/OEG±/g,"ণ্ডো").replace(/OE¶®±/g,"স্কো").replace(/OE©®±/g,"ষ্কো").replace(/OEKI◊±/g,"ন্টো").replace(/OE\^±/g,"দ্ৰো")
		.replace(/OE¯û|ষû±/g,"ষ্ণো").replace(/OE!±/g,"ক্কো").replace(/OE#±/g,"ক্নো").replace(/OE%±/g,"ক্মো").replace(/OE'±/g,"স্কো")
		.replace(/OE০±/g,"ঙ্মো").replace(/OE৪±/g,"চ্ছ্ৰো").replace(/OE৫±/g,"প্তো").replace(/OE৭±/g,"জ্জো").replace(/OE৮±/g,"জ্বো")
		.replace(/OE৯±/g,"জ্ঝো").replace(/OEগুlব্ধজ্ব±/g,"জ্ৰো").replace(/OEগুgব্ধজ্ব±/g,"ঞ্ছো").replace(/OE@±/g,"ঞ্ঝো").replace(/OEA±/g,"ট্টো")
		.replace(/OEB±/g,"ট্বো").replace(/OEC±/g,"ট্ৰো").replace(/OED±/g,"ড্ডো").replace(/OEE±/g,"ড্ৰো").replace(/OEF±/g,"ণ্ঠো")
		.replace(/OEH±/g,"ণ্ড্ৰো").replace(/OEù≠±/g,"শ্লো").replace(/OEJ±/g,"ণ্ণো").replace(/OEN±/g,"ত্ত্বো").replace(/OEO±/g,"ত্থো")
		.replace(/OEP±/g,"ত্নো").replace(/OET±/g,"থ্বো").replace(/OEV±/g,"দ্দো").replace(/OEW±/g,"দ্দ্বো").replace(/OEY±/g,"দ্ধ্বো")
		.replace(/OEZ±/g,"দ্বো").replace(/OE\\±/g,"দ্ভ্ৰো").replace(/OE_±/g,"ন্ঠো").replace(/OE`±/g,"ন্ডো")
		.replace(/OEh±/g,"ন্ধ্ৰো").replace(/OEk±/g,"ন্সো").replace(/OEl±/g,"চ্ঞো").replace(/OEm±/g,"প্পো").replace(/OEo±/g,"প্সো")
		.replace(/OEp±/g,"হ্মো").replace(/OEr±/g,"ব্জো").replace(/OEu±/g,"ব্ভো").replace(/OEw±/g,"ভ্ৰো").replace(/OEx±/g,"প্ৰো")
		.replace(/OEz±/g,"ম্ভ্ৰো").replace(/OEµ±|OEμ±/g,"ন্দো").replace(/OE\$±/g,"ক্বো").replace(/OEÄ±/g,"স্লো").replace(/OEÅ±/g,"হ্ণো")
		.replace(/OEÇ±/g,"ঙ্কো").replace(/OEÉ±/g,"ষ্মো").replace(/OEÑ±/g,"ক্ষ্মো").replace(/OEÖ±/g,"স্খো").replace(/OEØ±/g,"হ্লো")
		.replace(/OEâ±/g,"ল্গো").replace(/OEã±/g,"ল্ডো").replace(/OEg±/g,"ন্ধো").replace(/OEõ≠±/g,"প্লো").replace(/OE¶ú±/g,"স্মো")
		.replace(/OE¶£±/g,"স্ফো").replace(/OEÙv±|OEফv±/g,"ফ্লো");

	//যুক্তাক্ষৰ-ও-কাৰ-৩//
	result = result.replace(/Œ=±/g,"ঞ্চো").replace(/ŒS±/g,"ত্ৰো").replace(/Œõ∂±/g,"প্ৰো").replace(/Œ\?±/g,"ঞ্জো").replace(/ŒS±/g,"ত্ৰো")
		.replace(/Œõ∂±/g,"প্ৰো").replace(/ŒMê±/g,"ক্তো").replace(/ŒM±/g,"ত্তো").replace(/Œফü±/g,"শ্নো").replace(/Œ¢∂±/g,"গ্ৰো")
		.replace(/Œ\(±/g,"শ্চো").replace(/Œ©Ü±/g,"ষ্টো").replace(/Œá±/g,"ষ্ঠো").replace(/Œ~±/g,"ল্লো").replace(/Œô¶±/g,"স্তো")
		.replace(/ŒX±/g,"দ্ধো").replace(/ŒôL±/g,"ন্তো").replace(/Œä±/g,"ল্পো")
		.replace(/ŒR±/g,"ত্মো").replace(/ŒLö±/g,"ন্থো").replace(/Œs±/g,"ব্দো").replace(/Œত্ৰê±/g,"ক্ৰো").replace(/ŒQ±/g,"ত্বো")
		.replace(/Œ2‰±|Œ২চ±/g,"চ্চো").replace(/Œ\)±/g,"গ্গো").replace(/Œù´±|Œফ´±/g,"শ্বো").replace(/Œy±/g,"ম্ভো")
		.replace(/Œ\|±/g,"শ্ৰো").replace(/Œij±/g,"ন্মো").replace(/Œ¶a±/g,"স্ত্ৰো").replace(/Œ\*±/g,"গ্ধো")
		.replace(/Œt±/g,"ব্ধো").replace(/Œ¶ö±/g,"স্থো").replace(/Œ"√±|Œ"±/g,"ক্টো").replace(/Œ•Û±|Œ•প±/g,"ম্পো").replace(/Œ:±/g,"জ্ঞো")
		.replace(/Œ;±/g,"জ্বো").replace(/Œ˝ê±|Œহê±/g,"হ্নো").replace(/Œ¶Û±|Œ¶প±/g,"স্পো").replace(/Œf±/g,"ন্দ্ৰো").replace(/Œ¶§±/g,"স্বো")
		.replace(/Œe±/g,"ঙ্গো").replace(/Œ¡Z±/g,"দ্বো").replace(/Œiß±/g,"ন্নো").replace(/Œ26|২৬±/g,"চ্ছো").replace(/Œæ±/g,"দ্ভো")
		.replace(/G±/g,"ণ্ডো").replace(/Œ¶®±/g,"স্কো").replace(/Œ©®±/g,"ষ্কো").replace(/ŒKI◊±/g,"ন্টো").replace(/Œ\^±/g,"দ্ৰো")
		.replace(/Œ¯û|ষû±/g,"ষ্ণো").replace(/Œ!±/g,"ক্কো").replace(/Œ#±/g,"ক্নো").replace(/Œ%±/g,"ক্মো").replace(/Œ'±/g,"স্কো")
		.replace(/Œ০±/g,"ঙ্মো").replace(/Œ৪±/g,"চ্ছ্ৰো").replace(/Œ৫±/g,"প্তো").replace(/Œ৭±/g,"জ্জো").replace(/Œ৮±/g,"জ্বো")
		.replace(/Œ৯±/g,"জ্ঝো").replace(/Œগুlব্ধজ্ব±/g,"জ্ৰো").replace(/Œগুgব্ধজ্ব±/g,"ঞ্ছো").replace(/Œ@±/g,"ঞ্ঝো").replace(/ŒA±/g,"ট্টো")
		.replace(/ŒB±/g,"ট্বো").replace(/ŒC±/g,"ট্ৰো").replace(/ŒD±/g,"ড্ডো").replace(/ŒE±/g,"ড্ৰো").replace(/ŒF±/g,"ণ্ঠো")
		.replace(/ŒH±/g,"ণ্ড্ৰো").replace(/Œù≠±/g,"শ্লো").replace(/ŒJ±/g,"ণ্ণো").replace(/ŒN±/g,"ত্ত্বো").replace(/ŒO±/g,"ত্থো")
		.replace(/ŒP±/g,"ত্নো").replace(/ŒT±/g,"থ্বো").replace(/ŒV±/g,"দ্দো").replace(/ŒW±/g,"দ্দ্বো").replace(/ŒY±/g,"দ্ধ্বো")
		.replace(/ŒZ±/g,"দ্বো").replace(/Œ\\±/g,"দ্ভ্ৰো").replace(/Œ_±/g,"ন্ঠো").replace(/Œ`±/g,"ন্ডো")
		.replace(/Œh±/g,"ন্ধ্ৰো").replace(/Œk±/g,"ন্সো").replace(/Œl±/g,"চ্ঞো").replace(/Œm±/g,"প্পো").replace(/Œo±/g,"প্সো")
		.replace(/Œp±/g,"হ্মো").replace(/Œr±/g,"ব্জো").replace(/Œu±/g,"ব্ভো").replace(/Œw±/g,"ভ্ৰো").replace(/Œx±/g,"প্ৰো")
		.replace(/Œz±/g,"ম্ভ্ৰো").replace(/Œµ±|Œμ±/g,"ন্দো").replace(/Œ\$±/g,"ক্বো").replace(/ŒÄ±/g,"স্লো").replace(/ŒÅ±/g,"হ্ণো")
		.replace(/ŒÇ±/g,"ঙ্কো").replace(/ŒÉ±/g,"ষ্মো").replace(/ŒÑ±/g,"ক্ষ্মো").replace(/ŒÖ±/g,"স্খো").replace(/ŒØ±/g,"হ্লো")
		.replace(/Œâ±/g,"ল্গো").replace(/Œã±/g,"ল্ডো").replace(/Œg±/g,"ন্ধো").replace(/Œõ≠±/g,"প্লো").replace(/Œ¶ú±/g,"স্মো")
		.replace(/Œ¶£±/g,"স্ফো").replace(/ŒÙv±|Œফv±/g,"ফ্লো");

	//যুক্তাক্ষৰ-এ-কাৰ-১//
	result = result.replace(/Õ=/g,"ঞ্চৈ").replace(/ÕS/g,"ত্ৰৈ").replace(/Õõ∂/g,"প্ৰৈ").replace(/Õ\?/g,"ঞ্জৈ").replace(/ÕS/g,"ত্ৰৈ")
		.replace(/Õõ∂/g,"প্ৰৈ").replace(/ÕMê/g,"ক্তৈ").replace(/ÕM/g,"ত্তৈ").replace(/Õফü/g,"শ্নৈ").replace(/Õ¢∂/g,"গ্ৰৈ")
		.replace(/Õ\(/g,"শ্চৈ").replace(/Õ©Ü/g,"ষ্টৈ").replace(/Õá/g,"ষ্ঠৈ").replace(/Õ~/g,"ল্লৈ").replace(/Õô¶/g,"স্তৈ")
		.replace(/ÕX/g,"দ্ধৈ").replace(/ÕôL/g,"ন্তৈ").replace(/Õä/g,"ল্পৈ")
		.replace(/ÕR/g,"ত্মৈ").replace(/ÕLö/g,"ন্থৈ").replace(/Õs/g,"ব্দৈ").replace(/Õত্ৰê/g,"ক্ৰৈ").replace(/ÕQ/g,"ত্বৈ")
		.replace(/Õ2‰|Õ২চ/g,"চ্চৈ").replace(/Õ\)/g,"গ্গৈ").replace(/Õù´|Õফ´/g,"শ্বৈ").replace(/Õy/g,"ম্ভৈ").replace(/Õ\|/g,"শ্ৰৈ")
		.replace(/Õij/g,"ন্মৈ").replace(/Õ¶a/g,"স্ত্ৰৈ").replace(/Õ\*/g,"গ্ধৈ")
		.replace(/Õt/g,"ব্ধৈ").replace(/Õ¶ö/g,"স্থৈ").replace(/Õ"√|Õ"/g,"ক্টৈ").replace(/Õ•Û|Õ•প/g,"ম্পৈ").replace(/Õ:/g,"জ্ঞৈ")
		.replace(/Õ;/g,"জ্বৈ").replace(/Õ˝ê|Õহê/g,"হ্নৈ").replace(/Õ¶Û|Õ¶প/g,"স্পৈ").replace(/Õf/g,"ন্দ্ৰৈ").replace(/Õ¶§/g,"স্বৈ")
		.replace(/Õe/g,"ঙ্গৈ").replace(/Õ¡Z/g,"দ্বৈ").replace(/Õiß/g,"ন্নৈ").replace(/Õ26|২৬/g,"চ্ছৈ").replace(/Õæ/g,"দ্ভৈ")
		.replace(/ÕG/g,"ণ্ডৈ").replace(/Õ¶®/g,"স্কৈ").replace(/Õ©®/g,"ষ্কৈ").replace(/ÕKI◊/g,"ন্টৈ").replace(/Õ\^/g,"দ্ৰৈ")
		.replace(/Õ¯û|ষû/g,"ষ্ণৈ").replace(/Õ!/g,"ক্কৈ").replace(/Õ#/g,"ক্নৈ").replace(/Õ%/g,"ক্মৈ").replace(/Õ'/g,"স্কৈ")
		.replace(/Õ০/g,"ঙ্মৈ").replace(/Õ৪/g,"চ্ছ্ৰৈ").replace(/Õ৫/g,"প্তৈ").replace(/Õ৭/g,"জ্জৈ").replace(/Õ৮/g,"জ্বৈ")
		.replace(/Õ৯/g,"জ্ঝৈ").replace(/Õগুlব্ধজ্ব/g,"জ্ৰৈ").replace(/Õগুgব্ধজ্ব/g,"ঞ্ছৈ").replace(/Õ@/g,"ঞ্ঝৈ").replace(/ÕA/g,"ট্টৈ")
		.replace(/ÕB/g,"ট্বৈ").replace(/ÕC/g,"ট্ৰৈ").replace(/ÕD/g,"ড্ডৈ").replace(/ÕE/g,"ড্ৰৈ").replace(/ÕF/g,"ণ্ঠৈ")
		.replace(/ÕH/g,"ণ্ড্ৰৈ").replace(/Õù≠/g,"শ্লৈ").replace(/ÕJ/g,"ণ্ণৈ").replace(/ÕN/g,"ত্ত্বৈ").replace(/ÕO/g,"ত্থৈ")
		.replace(/ÕP/g,"ত্নৈ").replace(/ÕT/g,"থ্বৈ").replace(/ÕV/g,"দ্দৈ").replace(/ÕW/g,"দ্দ্বৈ").replace(/ÕY/g,"দ্ধ্বৈ")
		.replace(/ÕZ/g,"দ্বৈ").replace(/Õ\\/g,"দ্ভ্ৰৈ").replace(/Õ_/g,"ন্ঠৈ").replace(/Õ`/g,"ন্ডৈ")
		.replace(/Õh/g,"ন্ধ্ৰৈ").replace(/Õk/g,"ন্সৈ").replace(/Õl/g,"চ্ঞৈ").replace(/Õm/g,"প্পৈ").replace(/Õo/g,"প্সৈ")
		.replace(/Õp/g,"হ্মৈ").replace(/Õr/g,"ব্জৈ").replace(/Õu/g,"ব্ভৈ").replace(/Õw/g,"ভ্ৰৈ").replace(/Õx/g,"প্ৰৈ")
		.replace(/Õz/g,"ম্ভ্ৰৈ").replace(/Õµ|Õμ/g,"ন্দৈ").replace(/Õ\$/g,"ক্বৈ").replace(/ÕÄ/g,"স্লৈ").replace(/ÕÅ/g,"হ্ণৈ")
		.replace(/ÕÇ/g,"ঙ্কৈ").replace(/ÕÉ/g,"ষ্মৈ").replace(/ÕÑ/g,"ক্ষ্মৈ").replace(/ÕÖ/g,"স্খৈ").replace(/ÕØ/g,"হ্লৈ")
		.replace(/Õâ/g,"ল্গৈ").replace(/Õã/g,"ল্ডৈ").replace(/Õg/g,"ন্ধৈ").replace(/Õõ≠/g,"প্লৈ").replace(/Õ¶ú/g,"স্মৈ")
		.replace(/Õ¶£/g,"স্ফৈ").replace(/ÕÙv|Õফv/g,"ফ্লৈ");

	//যুক্তাক্ষৰ-এ-কাৰ-২//
	result = result.replace(/Æ=/g,"ঞ্চৈ").replace(/ÆS/g,"ত্ৰৈ").replace(/ÆÆ∂/g,"প্ৰৈ").replace(/Æ\?/g,"ঞ্জৈ").replace(/ÆS/g,"ত্ৰৈ")
		.replace(/ÆÆ∂/g,"প্ৰৈ").replace(/ÆMê/g,"ক্তৈ").replace(/ÆM/g,"ত্তৈ").replace(/Æফü/g,"শ্নৈ").replace(/Æ¢∂/g,"গ্ৰৈ")
		.replace(/Æ\(/g,"শ্চৈ").replace(/Æ©Ü/g,"ষ্টৈ").replace(/Æá/g,"ষ্ঠৈ").replace(/Æ~/g,"ল্লৈ").replace(/Æô¶/g,"স্তৈ")
		.replace(/ÆX/g,"দ্ধৈ").replace(/ÆôL/g,"ন্তৈ").replace(/Æä/g,"ল্পৈ")
		.replace(/ÆR/g,"ত্মৈ").replace(/ÆLö/g,"ন্থৈ").replace(/Æs/g,"ব্দৈ").replace(/Æত্ৰê/g,"ক্ৰৈ").replace(/ÆQ/g,"ত্বৈ")
		.replace(/Æ2‰|Æ২চ/g,"চ্চৈ").replace(/Æ\)/g,"গ্গৈ").replace(/Æù´|Æফ´/g,"শ্বৈ").replace(/Æy/g,"ম্ভৈ").replace(/Æ\|/g,"শ্ৰৈ")
		.replace(/Æij/g,"ন্মৈ").replace(/Æ¶a/g,"স্ত্ৰৈ").replace(/Æ\*/g,"গ্ধৈ")
		.replace(/Æt/g,"ব্ধৈ").replace(/Æ¶ö/g,"স্থৈ").replace(/Æ"√|Æ"/g,"ক্টৈ").replace(/Æ•Û|Æ•প/g,"ম্পৈ").replace(/Æ:/g,"জ্ঞৈ")
		.replace(/Æ;/g,"জ্বৈ").replace(/Æ˝ê|Æহê/g,"হ্নৈ").replace(/Æ¶Û|Æ¶প/g,"স্পৈ").replace(/Æf/g,"ন্দ্ৰৈ").replace(/Æ¶§/g,"স্বৈ")
		.replace(/Æe/g,"ঙ্গৈ").replace(/Æ¡Z/g,"দ্বৈ").replace(/Æiß/g,"ন্নৈ").replace(/Æ26|২৬/g,"চ্ছৈ").replace(/Ææ/g,"দ্ভৈ")
		.replace(/ÆG/g,"ণ্ডৈ").replace(/Æ¶®/g,"স্কৈ").replace(/Æ©®/g,"ষ্কৈ").replace(/ÆKI◊/g,"ন্টৈ").replace(/Æ\^/g,"দ্ৰৈ")
		.replace(/Æ¯û|ষû/g,"ষ্ণৈ").replace(/Æ!/g,"ক্কৈ").replace(/Æ#/g,"ক্নৈ").replace(/Æ%/g,"ক্মৈ").replace(/Æ'/g,"স্কৈ")
		.replace(/Æ০/g,"ঙ্মৈ").replace(/Æ৪/g,"চ্ছ্ৰৈ").replace(/Æ৫/g,"প্তৈ").replace(/Æ৭/g,"জ্জৈ").replace(/Æ৮/g,"জ্বৈ")
		.replace(/Æ৯/g,"জ্ঝৈ").replace(/Æগুlব্ধজ্ব/g,"জ্ৰৈ").replace(/Æগুgব্ধজ্ব/g,"ঞ্ছৈ").replace(/Æ@/g,"ঞ্ঝৈ").replace(/ÆA/g,"ট্টৈ")
		.replace(/ÆB/g,"ট্বৈ").replace(/ÆC/g,"ট্ৰৈ").replace(/ÆD/g,"ড্ডৈ").replace(/ÆE/g,"ড্ৰৈ").replace(/ÆF/g,"ণ্ঠৈ")
		.replace(/ÆH/g,"ণ্ড্ৰৈ").replace(/Æù≠/g,"শ্লৈ").replace(/ÆJ/g,"ণ্ণৈ").replace(/ÆN/g,"ত্ত্বৈ").replace(/ÆO/g,"ত্থৈ")
		.replace(/ÆP/g,"ত্নৈ").replace(/ÆT/g,"থ্বৈ").replace(/ÆV/g,"দ্দৈ").replace(/ÆW/g,"দ্দ্বৈ").replace(/ÆY/g,"দ্ধ্বৈ")
		.replace(/ÆZ/g,"দ্বৈ").replace(/Æ\\/g,"দ্ভ্ৰৈ").replace(/Æ_/g,"ন্ঠৈ").replace(/Æ`/g,"ন্ডৈ")
		.replace(/Æh/g,"ন্ধ্ৰৈ").replace(/Æk/g,"ন্সৈ").replace(/Æl/g,"চ্ঞৈ").replace(/Æm/g,"প্পৈ").replace(/Æo/g,"প্সৈ")
		.replace(/Æp/g,"হ্মৈ").replace(/Ær/g,"ব্জৈ").replace(/Æu/g,"ব্ভৈ").replace(/Æw/g,"ভ্ৰৈ").replace(/Æx/g,"প্ৰৈ")
		.replace(/Æz/g,"ম্ভ্ৰৈ").replace(/Æµ|Æμ/g,"ন্দৈ").replace(/Æ\$/g,"ক্বৈ").replace(/ÆÄ/g,"স্লৈ").replace(/ÆÅ/g,"হ্ণৈ")
		.replace(/ÆÇ/g,"ঙ্কৈ").replace(/ÆÉ/g,"ষ্মৈ").replace(/ÆÑ/g,"ক্ষ্মৈ").replace(/ÆÖ/g,"স্খৈ").replace(/ÆØ/g,"হ্লৈ")
		.replace(/Æâ/g,"ল্গৈ").replace(/Æã/g,"ল্ডৈ").replace(/Æg/g,"ন্ধৈ").replace(/ÆÆ≠/g,"প্লৈ").replace(/Æ¶ú/g,"স্মৈ")
		.replace(/Æ¶£/g,"স্ফৈ").replace(/ÆÙv|Æফv/g,"ফ্লৈ");

	//যুক্তাক্ষৰ-এ-কাৰ-১//
	result = result.replace(/À=/g,"ঞ্চে").replace(/ÀS/g,"ত্ৰে").replace(/Àõ∂/g,"প্ৰে").replace(/À\?/g,"ঞ্জে").replace(/ÀS/g,"ত্ৰে")
		.replace(/Àõ∂/g,"প্ৰে").replace(/ÀMê/g,"ক্তে").replace(/ÀM/g,"ত্তে").replace(/Àফü/g,"শ্নে").replace(/À¢∂/g,"গ্ৰে")
		.replace(/À\(/g,"শ্চে").replace(/À©Ü/g,"ষ্টে").replace(/Àá/g,"ষ্ঠে").replace(/À~/g,"ল্লে").replace(/Àô¶/g,"স্তে")
		.replace(/ÀX/g,"দ্ধে").replace(/ÀôL/g,"ন্তে").replace(/Àä/g,"ল্পে")
		.replace(/ÀR/g,"ত্মে").replace(/ÀLö/g,"ন্থে").replace(/Às/g,"ব্দে").replace(/Àত্ৰê/g,"ক্ৰে").replace(/ÀQ/g,"ত্বে")
		.replace(/À2‰|À২চ/g,"চ্চে").replace(/À\)/g,"গ্গে").replace(/Àù´|Àফ´/g,"শ্বে").replace(/Ày/g,"ম্ভে")
		.replace(/À\|/g,"শ্ৰে").replace(/Àij/g,"ন্মে").replace(/À¶a/g,"স্ত্ৰে").replace(/À\*/g,"গ্ধে")
		.replace(/Àt/g,"ব্ধে").replace(/À¶ö/g,"স্থে").replace(/À"√|À"/g,"ক্টে").replace(/À•Û|À•প/g,"ম্পে").replace(/À:/g,"জ্ঞে")
		.replace(/À;/g,"জ্বে").replace(/À˝ê|Àহê/g,"হ্নে").replace(/À¶Û|À¶প/g,"স্পে").replace(/Àf/g,"ন্দ্ৰে").replace(/À¶§/g,"স্বে")
		.replace(/Àe/g,"ঙ্গে").replace(/À¡Z/g,"দ্বে").replace(/Àiß/g,"ন্নে").replace(/À26|২৬/g,"চ্ছে").replace(/Àæ/g,"দ্ভে")
		.replace(/G/g,"ণ্ডে").replace(/À¶®/g,"স্কে").replace(/À©®/g,"ষ্কে").replace(/ÀKI◊/g,"ন্টে").replace(/À\^/g,"দ্ৰে")
		.replace(/À¯û|ষû/g,"ষ্ণে").replace(/À!/g,"ক্কে").replace(/À#/g,"ক্নে").replace(/À%/g,"ক্মে").replace(/À'/g,"স্কে")
		.replace(/À০/g,"ঙ্মে").replace(/À৪/g,"চ্ছ্ৰে").replace(/À৫/g,"প্তে").replace(/À৭/g,"জ্জে").replace(/À৮/g,"জ্বে")
		.replace(/À৯/g,"জ্ঝে").replace(/Àগুlব্ধজ্ব/g,"জ্ৰে").replace(/Àগুgব্ধজ্ব/g,"ঞ্ছে").replace(/À@/g,"ঞ্ঝে").replace(/ÀA/g,"ট্টে")
		.replace(/ÀB/g,"ট্বে").replace(/ÀC/g,"ট্ৰে").replace(/ÀD/g,"ড্ডে").replace(/ÀE/g,"ড্ৰে").replace(/ÀF/g,"ণ্ঠে")
		.replace(/ÀH/g,"ণ্ড্ৰে").replace(/Àù≠/g,"শ্লে").replace(/ÀJ/g,"ণ্ণে").replace(/ÀN/g,"ত্ত্বে").replace(/ÀO/g,"ত্থে")
		.replace(/ÀP/g,"ত্নে").replace(/ÀT/g,"থ্বে").replace(/ÀV/g,"দ্দে").replace(/ÀW/g,"দ্দ্বে").replace(/ÀY/g,"দ্ধ্বে")
		.replace(/ÀZ/g,"দ্বে").replace(/À\\/g,"দ্ভ্ৰে").replace(/À_/g,"ন্ঠে").replace(/À`/g,"ন্ডে")
		.replace(/Àh/g,"ন্ধ্ৰে").replace(/Àk/g,"ন্সে").replace(/Àl/g,"চ্ঞে").replace(/Àm/g,"প্পে").replace(/Ào/g,"প্সে")
		.replace(/Àp/g,"হ্মে").replace(/Àr/g,"ব্জে").replace(/Àu/g,"ব্ভে").replace(/Àw/g,"ভ্ৰে").replace(/Àx/g,"প্ৰে")
		.replace(/Àz/g,"ম্ভ্ৰে").replace(/Àµ|Àμ/g,"ন্দে").replace(/À\$/g,"ক্বে").replace(/ÀÄ/g,"স্লে").replace(/ÀÅ/g,"হ্ণে")
		.replace(/ÀÇ/g,"ঙ্কে").replace(/ÀÉ/g,"ষ্মে").replace(/ÀÑ/g,"ক্ষ্মে").replace(/ÀÖ/g,"স্খে").replace(/ÀØ/g,"হ্লে")
		.replace(/Àâ/g,"ল্গে").replace(/Àã/g,"ল্ডে").replace(/Àg/g,"ন্ধে").replace(/Àõ≠/g,"প্লে").replace(/À¶ú/g,"স্মে")
		.replace(/À¶£/g,"স্ফে").replace(/ÀÙv|Àফv/g,"ফ্লে");

	//যুক্তাক্ষৰ-এ-কাৰ-২//
	result = result.replace(/OE=/g,"ঞ্চে").replace(/OES/g,"ত্ৰে").replace(/OEõ∂/g,"প্ৰে").replace(/OE\?/g,"ঞ্জে").replace(/OES/g,"ত্ৰে")
		.replace(/OEõ∂/g,"প্ৰে").replace(/OEMê/g,"ক্তে").replace(/OEM/g,"ত্তে").replace(/OEফü/g,"শ্নে").replace(/OE¢∂/g,"গ্ৰে")
		.replace(/OE\(/g,"শ্চে").replace(/OE©Ü/g,"ষ্টে").replace(/OEá/g,"ষ্ঠে").replace(/OE~/g,"ল্লে").replace(/OEô¶/g,"স্তে")
		.replace(/OEX/g,"দ্ধে").replace(/OEôL/g,"ন্তে").replace(/OEä/g,"ল্পে")
		.replace(/OER/g,"ত্মে").replace(/OELö/g,"ন্থে").replace(/OEs/g,"ব্দে").replace(/OEত্ৰê/g,"ক্ৰে").replace(/OEQ/g,"ত্বে")
		.replace(/OE2‰|OE২চ/g,"চ্চে").replace(/OE\)/g,"গ্গে").replace(/OEù´|OEফ´/g,"শ্বে").replace(/OEy/g,"ম্ভে").replace(/OE\|/g,"শ্ৰে")
		.replace(/OEij/g,"ন্মে").replace(/OE¶a/g,"স্ত্ৰে").replace(/OE\*/g,"গ্ধে")
		.replace(/OEt/g,"ব্ধে").replace(/OE¶ö/g,"স্থে").replace(/OE"√|OE"/g,"ক্টে").replace(/OE•Û|OE•প/g,"ম্পে").replace(/OE:/g,"জ্ঞে")
		.replace(/OE;/g,"জ্বে").replace(/OE˝ê|OEহê/g,"হ্নে").replace(/OE¶Û|OE¶প/g,"স্পে").replace(/OEf/g,"ন্দ্ৰে").replace(/OE¶§/g,"স্বে")
		.replace(/OEe/g,"ঙ্গে").replace(/OE¡Z/g,"দ্বে").replace(/OEiß/g,"ন্নে").replace(/OE26|২৬/g,"চ্ছে").replace(/OEæ/g,"দ্ভে")
		.replace(/OEG/g,"ণ্ডে").replace(/OE¶®/g,"স্কে").replace(/OE©®/g,"ষ্কে").replace(/OEKI◊/g,"ন্টে").replace(/OE\^/g,"দ্ৰে")
		.replace(/OE¯û|ষû/g,"ষ্ণে").replace(/OE!/g,"ক্কে").replace(/OE#/g,"ক্নে").replace(/OE%/g,"ক্মে").replace(/OE'/g,"স্কে")
		.replace(/OE০/g,"ঙ্মে").replace(/OE৪/g,"চ্ছ্ৰে").replace(/OE৫/g,"প্তে").replace(/OE৭/g,"জ্জে").replace(/OE৮/g,"জ্বে")
		.replace(/OE৯/g,"জ্ঝে").replace(/OEগুlব্ধজ্ব/g,"জ্ৰে").replace(/OEগুgব্ধজ্ব/g,"ঞ্ছে").replace(/OE@/g,"ঞ্ঝে").replace(/OEA/g,"ট্টে")
		.replace(/OEB/g,"ট্বে").replace(/OEC/g,"ট্ৰে").replace(/OED/g,"ড্ডে").replace(/OEE/g,"ড্ৰে").replace(/OEF/g,"ণ্ঠে")
		.replace(/OEH/g,"ণ্ড্ৰে").replace(/OEù≠/g,"শ্লে").replace(/OEJ/g,"ণ্ণে").replace(/OEN/g,"ত্ত্বে").replace(/OEO/g,"ত্থে")
		.replace(/OEP/g,"ত্নে").replace(/OET/g,"থ্বে").replace(/OEV/g,"দ্দে").replace(/OEW/g,"দ্দ্বে").replace(/OEY/g,"দ্ধ্বে")
		.replace(/OEZ/g,"দ্বে").replace(/OE\\/g,"দ্ভ্ৰে").replace(/OE_/g,"ন্ঠে").replace(/OE`/g,"ন্ডে")
		.replace(/OEh/g,"ন্ধ্ৰে").replace(/OEk/g,"ন্সে").replace(/OEl/g,"চ্ঞে").replace(/OEm/g,"প্পে").replace(/OEo/g,"প্সে")
		.replace(/OEp/g,"হ্মে").replace(/OEr/g,"ব্জে").replace(/OEu/g,"ব্ভে").replace(/OEw/g,"ভ্ৰে").replace(/OEx/g,"প্ৰে")
		.replace(/OEz/g,"ম্ভ্ৰে").replace(/OEµ|OEμ/g,"ন্দে").replace(/OE\$/g,"ক্বে").replace(/OEÄ/g,"স্লে").replace(/OEÅ/g,"হ্ণে")
		.replace(/OEÇ/g,"ঙ্কে").replace(/OEÉ/g,"ষ্মে").replace(/OEÑ/g,"ক্ষ্মে").replace(/OEÖ/g,"স্খে").replace(/OEØ/g,"হ্লে")
		.replace(/OEâ/g,"ল্গে").replace(/OEã/g,"ল্ডে").replace(/OEg/g,"ন্ধে").replace(/OEõ≠/g,"প্লে").replace(/OE¶ú/g,"স্মে")
		.replace(/OE¶£/g,"স্ফে").replace(/OEÙv|OEফv/g,"ফ্লে");

	//যুক্তাক্ষৰ-ই-কাৰ//
	result = result.replace(/ø=/g,"ঞ্চি").replace(/øø∂/g,"প্ৰি").replace(/ø\?/g,"ঞ্জি")
		.replace(/øø∂/g,"প্ৰি").replace(/øMê/g,"ক্তি").replace(/øM/g,"ত্তি").replace(/øফü/g,"শ্নি").replace(/ø¢∂/g,"গ্ৰি")
		.replace(/ø\(/g,"শ্চি").replace(/ø©Ü/g,"ষ্টি").replace(/øá/g,"ষ্ঠি").replace(/ø~/g,"ল্লি").replace(/øô¶/g,"স্তি")
		.replace(/øX/g,"দ্ধি").replace(/øôL/g,"ন্তি").replace(/øä/g,"ল্পি")
		.replace(/øR/g,"ত্মি").replace(/øLö/g,"ন্থি").replace(/øs/g,"ব্দি").replace(/øSê/g,"ক্ৰি").replace(/øS/g,"ত্ৰি").replace(/øQ/g,"ত্বি")
		.replace(/ø2‰|ø২চ/g,"চ্চি").replace(/ø\)/g,"গ্গি").replace(/øù´|øফ´/g,"শ্বি").replace(/øy/g,"ম্ভি").replace(/ø\|/g,"শ্ৰি")
		.replace(/øij/g,"ন্মি").replace(/ø¶a/g,"স্ত্ৰি").replace(/ø\*/g,"গ্ধি")
		.replace(/øt/g,"ব্ধি").replace(/ø¶ö/g,"স্থি").replace(/ø"√|ø"/g,"ক্টি").replace(/ø•Û|ø•প/g,"ম্পি").replace(/ø:/g,"জ্ঞি")
		.replace(/ø;/g,"জ্বি").replace(/ø˝ê|øহê/g,"হ্নি").replace(/ø¶Û|ø¶প/g,"স্পি").replace(/øf/g,"ন্দ্ৰি").replace(/ø¶§/g,"স্বি")
		.replace(/øe/g,"ঙ্গি").replace(/ø¡Z/g,"দ্বি").replace(/øiß/g,"ন্নি").replace(/ø26|২৬/g,"চ্ছি").replace(/øø/g,"দ্ভি")
		.replace(/øG/g,"ণ্ডি").replace(/ø¶®/g,"স্কি").replace(/ø©®/g,"ষ্কি").replace(/øKI◊/g,"ন্টি").replace(/ø\^/g,"দ্ৰি")
		.replace(/ø¯û|ষû/g,"ষ্ণি").replace(/ø!/g,"ক্কি").replace(/ø#/g,"ক্নি").replace(/ø%/g,"ক্মি").replace(/ø'/g,"স্কি")
		.replace(/ø০/g,"ঙ্মি").replace(/ø৪/g,"চ্ছ্ৰি").replace(/ø৫/g,"প্তি").replace(/ø৭/g,"জ্জি").replace(/ø৮/g,"জ্বি")
		.replace(/ø৯/g,"জ্ঝি").replace(/øগুlব্ধজ্ব/g,"জ্ৰি").replace(/øগুgব্ধজ্ব/g,"ঞ্ছি").replace(/ø@/g,"ঞ্ঝি").replace(/øA/g,"ট্টি")
		.replace(/øB/g,"ট্বি").replace(/øC/g,"ট্ৰি").replace(/øD/g,"ড্ডি").replace(/øE/g,"ড্ৰি").replace(/øF/g,"ণ্ঠি")
		.replace(/øH/g,"ণ্ড্ৰি").replace(/øù≠/g,"শ্লি").replace(/øJ/g,"ণ্ণি").replace(/øN/g,"ত্ত্বি").replace(/øO/g,"ত্থি")
		.replace(/øP/g,"ত্নি").replace(/øT/g,"থ্বি").replace(/øV/g,"দ্দি").replace(/øW/g,"দ্দ্বি").replace(/øY/g,"দ্ধ্বি")
		.replace(/øZ/g,"দ্বি").replace(/ø\\/g,"দ্ভ্ৰি").replace(/ø_/g,"ন্ঠি").replace(/ø`/g,"ন্ডি")
		.replace(/øh/g,"ন্ধ্ৰি").replace(/øk/g,"ন্সি").replace(/øl/g,"চ্ঞি").replace(/øm/g,"প্পি").replace(/øo/g,"প্সি")
		.replace(/øp/g,"হ্মি").replace(/ør/g,"ব্জি").replace(/øu/g,"ব্ভি").replace(/øw/g,"ভ্ৰি").replace(/øx/g,"প্ৰি")
		.replace(/øz/g,"ম্ভ্ৰি").replace(/øµ|øμ/g,"ন্দি").replace(/ø\$/g,"ক্বি").replace(/øÄ/g,"স্লি").replace(/øÅ/g,"হ্ণি")
		.replace(/øÇ/g,"ঙ্কি").replace(/øÉ/g,"ষ্মি").replace(/øÑ/g,"ক্ষ্মি").replace(/øÖ/g,"স্খি").replace(/øØ/g,"হ্লি")
		.replace(/øâ/g,"ল্গি").replace(/øã/g,"ল্ডি").replace(/øg/g,"ন্ধি").replace(/øø≠/g,"প্লি").replace(/ø¶ú/g,"স্মি")
		.replace(/ø¶£/g,"স্ফি").replace(/øÙv|øফv/g,"ফ্লি");

	//যুক্তাক্ষৰ-ঋ-কাৰ//
	result = result.replace(/=‘/g,"ঞ্চৃ").replace(/S‘/g,"ত্ৰৃ").replace(/õ∂‘/g,"প্ৰৃ").replace(/\?‘/g,"ঞ্জৃ").replace(/S‘/g,"ত্ৰৃ")
		.replace(/õ∂‘/g,"প্ৰৃ").replace(/Mê‘/g,"ক্তৃ").replace(/M‘/g,"ত্তৃ").replace(/ফü‘/g,"শ্নৃ").replace(/¢∂‘/g,"গ্ৰৃ")
		.replace(/\(‘/g,"শ্চৃ").replace(/©Ü‘/g,"ষ্টৃ").replace(/á‘/g,"ষ্ঠৃ").replace(/~‘/g,"ল্লৃ").replace(/ô¶‘/g,"স্তৃ")
		.replace(/X‘/g,"দ্ধৃ").replace(/ôL‘/g,"ন্তৃ").replace(/ä‘/g,"ল্পৃ")
		.replace(/R‘/g,"ত্মৃ").replace(/Lö‘/g,"ন্থৃ").replace(/s‘/g,"ব্দৃ").replace(/ত্ৰê‘/g,"ক্ৰৃ").replace(/Q‘/g,"ত্বৃ")
		.replace(/2‰‘|OE২চ‘/g,"চ্চৃ").replace(/\)‘/g,"গ্গৃ").replace(/ù´‘|OEফ´‘/g,"শ্বৃ").replace(/y‘/g,"ম্ভৃ")
		.replace(/\|‘/g,"শ্ৰৃ").replace(/ij‘/g,"ন্মৃ").replace(/¶a‘/g,"স্ত্ৰৃ").replace(/\*‘/g,"গ্ধৃ")
		.replace(/t‘/g,"ব্ধৃ").replace(/¶ö‘/g,"স্থৃ").replace(/"√‘|OE"‘/g,"ক্টৃ").replace(/•Û‘|OE•প‘/g,"ম্পৃ").replace(/:‘/g,"জ্ঞৃ")
		.replace(/;‘/g,"জ্বৃ").replace(/˝ê‘|OEহê‘/g,"হ্নৃ").replace(/¶Û‘|OE¶প‘/g,"স্পৃ").replace(/f‘/g,"ন্দ্ৰৃ").replace(/¶§‘/g,"স্বৃ")
		.replace(/e‘/g,"ঙ্গৃ").replace(/¡Z‘/g,"দ্বৃ").replace(/iß‘/g,"ন্নৃ").replace(/26|২৬‘/g,"চ্ছৃ").replace(/æ‘/g,"দ্ভৃ")
		.replace(/G‘/g,"ণ্ডৃ").replace(/¶®‘/g,"স্কৃ").replace(/©®‘/g,"ষ্কৃ").replace(/KI◊‘/g,"ন্টৃ").replace(/\^‘/g,"দ্ৰৃ")
		.replace(/¯û|ষû‘/g,"ষ্ণৃ").replace(/!‘/g,"ক্কৃ").replace(/#‘/g,"ক্নৃ").replace(/%‘/g,"ক্মৃ").replace(/'‘/g,"স্কৃ")
		.replace(/০‘/g,"ঙ্মৃ").replace(/৪‘/g,"চ্ছ্ৰৃ").replace(/৫‘/g,"প্তৃ").replace(/৭‘/g,"জ্জৃ").replace(/৮‘/g,"জ্বৃ")
		.replace(/৯‘/g,"জ্ঝৃ").replace(/গুlব্ধজ্ব‘/g,"জ্ৰৃ").replace(/গুgব্ধজ্ব‘/g,"ঞ্ছৃ").replace(/@‘/g,"ঞ্ঝৃ").replace(/A‘/g,"ট্টৃ")
		.replace(/B‘/g,"ট্বৃ").replace(/C‘/g,"ট্ৰৃ").replace(/D‘/g,"ড্ডৃ").replace(/E‘/g,"ড্ৰৃ").replace(/F‘/g,"ণ্ঠৃ")
		.replace(/H‘/g,"ণ্ড্ৰৃ").replace(/ù≠‘/g,"শ্লৃ").replace(/J‘/g,"ণ্ণৃ").replace(/N‘/g,"ত্ত্বৃ").replace(/O‘/g,"ত্থৃ")
		.replace(/P‘/g,"ত্নৃ").replace(/T‘/g,"থ্বৃ").replace(/V‘/g,"দ্দৃ").replace(/W‘/g,"দ্দ্বৃ").replace(/Y‘/g,"দ্ধ্বৃ")
		.replace(/Z‘/g,"দ্বৃ").replace(/\\‘/g,"দ্ভ্ৰৃ").replace(/_‘/g,"ন্ঠৃ").replace(/`‘/g,"ন্ডৃ")
		.replace(/h‘/g,"ন্ধ্ৰৃ").replace(/k‘/g,"ন্সৃ").replace(/l‘/g,"চ্ঞৃ").replace(/m‘/g,"প্পৃ").replace(/o‘/g,"প্সৃ")
		.replace(/p‘/g,"হ্মৃ").replace(/r‘/g,"ব্জৃ").replace(/u‘/g,"ব্ভৃ").replace(/w‘/g,"ভ্ৰৃ").replace(/x‘/g,"প্ৰৃ")
		.replace(/z‘/g,"ম্ভ্ৰৃ").replace(/µ‘|OEμ‘/g,"ন্দৃ").replace(/\$‘/g,"ক্বৃ").replace(/Ä‘/g,"স্লৃ").replace(/Å‘/g,"হ্ণৃ")
		.replace(/Ç‘/g,"ঙ্কৃ").replace(/É‘/g,"ষ্মৃ").replace(/Ñ‘/g,"ক্ষ্মৃ").replace(/Ö‘/g,"স্খৃ").replace(/Ø‘/g,"হ্লৃ")
		.replace(/â‘/g,"ল্গৃ").replace(/ã‘/g,"ল্ডৃ").replace(/g‘/g,"ন্ধৃ").replace(/õ≠‘/g,"প্লৃ").replace(/¶ú‘/g,"স্মৃ")
		.replace(/¶£‘/g,"স্ফৃ").replace(/Ùv‘|OEফv‘/g,"ফ্লৃ");
	
	result = result.replace(/=/g,"ঞ্চ").replace(/S/g,"ত্ৰ").replace(/õ∂/g,"প্ৰ").replace(/\?/g,"ঞ্জ").replace(/S/g,"ত্ৰ")
		.replace(/õ∂/g,"প্ৰ").replace(/Mê/g,"ক্ত").replace(/M/g,"ত্ত").replace(/ফü/g,"শ্ন").replace(/¢∂/g,"গ্ৰ")
		.replace(/\(/g,"শ্চ").replace(/©Ü/g,"ষ্ট").replace(/á/g,"ষ্ঠ").replace(/~/g,"ল্ল").replace(/ô¶/g,"স্ত")
		.replace(/X/g,"দ্ধ").replace(/ôL/g,"ন্ত").replace(/ä/g,"ল্প")
		.replace(/R/g,"ত্ম").replace(/Lö/g,"ন্থ").replace(/s/g,"ব্দ").replace(/ত্ৰê/g,"ক্ৰ").replace(/Q/g,"ত্ব")
		.replace(/2‰|২চ/g,"চ্চ").replace(/\)/g,"গ্গ").replace(/ù´|ফ´/g,"শ্ব").replace(/y/g,"ম্ভ")
		.replace(/\|/g,"শ্ৰ").replace(/ij/g,"ন্ম").replace(/¶a/g,"স্ত্ৰ").replace(/\*/g,"গ্ধ")
		.replace(/t/g,"ব্ধ").replace(/¶ö/g,"স্থ").replace(/"√|"/g,"ক্ট").replace(/•Û|•প/g,"ম্প").replace(/:/g,"জ্ঞ")
		.replace(/;/g,"জ্ব").replace(/˝ê|হê/g,"হ্ন").replace(/¶Û|¶প/g,"স্প").replace(/f/g,"ন্দ্ৰ").replace(/¶§/g,"স্ব")
		.replace(/e/g,"ঙ্গ").replace(/¡Z/g,"দ্ব").replace(/iß/g,"ন্ন").replace(/26|২৬/g,"চ্ছ").replace(/æ/g,"দ্ভ")
		.replace(/G/g,"ণ্ড").replace(/¶®/g,"স্ক").replace(/©®/g,"ষ্ক").replace(/KI◊/g,"ন্ট").replace(/\^/g,"দ্ৰ")
		.replace(/¯û|ষû/g,"ষ্ণ").replace(/!/g,"ক্ক").replace(/#/g,"ক্ন").replace(/%/g,"ক্ম").replace(/'/g,"স্ক")
		.replace(/০/g,"ঙ্ম").replace(/৪/g,"চ্ছ্ৰ").replace(/৫/g,"প্ত").replace(/৭/g,"জ্জ").replace(/৮/g,"জ্ব")
		.replace(/৯/g,"জ্ঝ").replace(/গুlব্ধজ্ব/g,"জ্ৰ").replace(/গুgব্ধজ্ব/g,"ঞ্ছ").replace(/@/g,"ঞ্ঝ").replace(/A/g,"ট্ট")
		.replace(/B/g,"ট্ব").replace(/C/g,"ট্ৰ").replace(/D/g,"ড্ড").replace(/E/g,"ড্ৰ").replace(/F/g,"ণ্ঠ")
		.replace(/H/g,"ণ্ড্ৰ").replace(/ù≠/g,"শ্ল").replace(/J/g,"ণ্ণ").replace(/N/g,"ত্ত্ব").replace(/O/g,"ত্থ")
		.replace(/P/g,"ত্ন").replace(/T/g,"থ্ব").replace(/V/g,"দ্দ").replace(/W/g,"দ্দ্ব").replace(/Y/g,"দ্ধ্ব")
		.replace(/Z/g,"দ্ব").replace(/\\/g,"দ্ভ্ৰ").replace(/_/g,"ন্ঠ").replace(/`/g,"ন্ড")
		.replace(/h/g,"ন্ধ্ৰ").replace(/k/g,"ন্স").replace(/l/g,"চ্ঞ").replace(/m/g,"প্প").replace(/o/g,"প্স")
		.replace(/p/g,"হ্ম").replace(/r/g,"ব্জ").replace(/u/g,"ব্ভ").replace(/w/g,"ভ্ৰ").replace(/x/g,"প্ৰ")
		.replace(/z/g,"ম্ভ্ৰ").replace(/µ|μ/g,"ন্দ").replace(/\$/g,"ক্ব").replace(/Ä/g,"স্ল").replace(/Å/g,"হ্ণ")
		.replace(/Ç/g,"ঙ্ক").replace(/É/g,"ষ্ম").replace(/Ñ/g,"ক্ষ্ম").replace(/Ö/g,"স্খ").replace(/Ø/g,"হ্ল")
		.replace(/â/g,"ল্গ").replace(/ã/g,"ল্ড").replace(/g/g,"ন্ধ").replace(/õ≠/g,"প্ল").replace(/¶ú/g,"স্ম")
		.replace(/¶£/g,"স্ফ").replace(/Ùv|ফv/g,"ফ্ল");

	//চিহ্ন//
	result = result.replace(/º/gi,"।").replace(/‘/g,"=").replace(/ð/g,"→").replace(/Σ/g,"?").replace(/,/g,";")
		.replace(/í/g,"’").replace(/ë/g,"‘").replace(/\[/g,"(").replace(/\]/g,")").replace(/ñ/g,"—").replace(/±/gi,"া")
		.replace(/oe/g,"ী").replace(/≈/gi,"ু").replace(/…/g,"্য").replace(/ƒ/g,"্").replace(/«/g,"ৰ্").replace(/∂/g,"ৰ-কাৰ")

	//last//
	result = result.replace(/অসময়া/g,"অসমীয়া").replace(/োজড◊িত/g,"জেউতি").replace(/োজানা/g,"জোনা")
		.replace(/নিবি«শেষে/g,"নিৰ্বিশেষে").replace(/নিিশ্চত/g,"নিশ্চিত").replace(/ডায়েি˛ৰ/g,"ডায়েৰি").replace(/২ঙ্মঙ্মপ্ত/g,"২০০৫").replace(/শ্চণ্ডব্জঙ্গম্ভ ট্টব্জঙ্গaগ্গ/g,"(Grey Area)")
		.replace(/ন্ঠন্ঠন্ঠ/g,"__").replace(/ন্ঠন্ঠ/g,"__")
		.replace(/iব্দ/g,"is").replace(/ত্থপ্সন্সa/g,"Ooka").replace(/চ্ঞanস্তু/g,"land").replace(/ন্তুপ্সপ্প/g,"com")
		.replace(/inন্ধ/g,"ing").replace(/ব্জঙ্গaস্তু/g,"read").replace(/ন্দ্ৰপ্সব্জ/g,"for").replace(/ব্দন্ধ্ৰiহ্ম/g,"ship")
		.replace(/হ্মaব্জব্ধnঙ্গব্জ/g,"partner").replace(/ন্ধপ্সv/g,"gov").replace(/niন্দ্ৰব্ধ/g,"nift").replace(/ভ্ৰভ্ৰভ্ৰ/g,"www")
		.replace(/১ঙ্ম/g,"১০").replace(/ঙ্মঙ্মঙ্ম/g,"০০০").replace(/ঙ্মঙ্ম/g,"০০").replace(/১০ঙ্ম/g,"১০০")
		.replace(/১জ্ব/g,"১৮").replace(/২ঙ্ম/g,"২০").replace(/২০১জ্জ/g,"২০১৭").replace(/১০০০০ঙ্ম/g,"১০০০০০")
		.replace(/ৰৰৰ/g,"১১১").replace(/১১১ৰ/g,"১১১১").replace(/১১১১ৰ/g,"১১১১১").replace(/১১১১১ৰ/g,"১১১১১১")
		.replace(/চঙ্ম|চ০/g,"২০").replace(/চচ|চ২/g,"২২").replace(/২২চ/g,"২২২").replace(/২২২চ/g,"২২২২").replace(/২২২২চ/g,"২২২২২")
		.replace(/৩ঙ্ম/g,"৩০")
		.replace(/চ্ছ্ৰঙ্ম|চ্ছ্ৰ০/g,"৪০").replace(/চ্ছ্ৰচ্ছ্ৰ/g,"৪৪").replace(/৪৪চ্ছ্ৰ/g,"৪৪৪").replace(/৪৪৪চ্ছ্ৰ/g,"৪৪৪৪").replace(/৪৪৪৪চ্ছ্ৰ/g,"৪৪৪৪৪")
		.replace(/প্তঙ্ম|প্ত০/g,"৫০").replace(/প্তপ্ত/g,"৫৫").replace(/৫৫প্ত/g,"৫৫৫").replace(/৫৫৫প্ত/g,"৫৫৫৫").replace(/৫৫৫৫প্ত/g,"৫৫৫৫৫")
		.replace(/৬ঙ্ম/g,"৬০")
		.replace(/জ্জঙ্ম|জ্জ০/g,"৭০").replace(/জ্জজ্জ/g,"৭৭").replace(/৭৭জ্জ/g,"৭৭৭").replace(/৭৭৭জ্জ/g,"৭৭৭৭").replace(/৭৭৭৭জ্জ/g,"৭৭৭৭৭")
		.replace(/জ্বঙ্ম|জ্ব০/g,"৮০").replace(/জ্বজ্ব/g,"৮৮").replace(/৮৮জ্ব/g,"৮৮৮").replace(/৮৮৮জ্ব/g,"৮৮৮৮").replace(/৮৮৮৮জ্ব/g,"৮৮৮৮৮")
		.replace(/জ্ঝঙ্ম|জ্ঝ০/g,"৯০").replace(/জ্ঝজ্ঝ/g,"৯৯").replace(/৯৯জ্ঝ/g,"৯৯৯").replace(/৯৯৯জ্ঝ/g,"৯৯৯৯").replace(/৯৯৯৯জ্ঝ/g,"৯৯৯৯৯")
		.replace(/১চ|ৰ২/g,"১২").replace(/ৰ৩/g,"১৩").replace(/ৰচ্ছ্ৰ/g,"১৪").replace(/ৰপ্ত/g,"১৫").replace(/ৰ৬/g,"১৬").replace(/ৰজ্জ/g,"১৭").replace(/ৰজ্ব/g,"১৮").replace(/ৰজ্ঝ/g,"১৯")
		.replace(/২ৰ|চ১/g,"২১").replace(/চ৩/g,"২৩").replace(/চপ্ত|২প্ত|চ৫/g,"২৫").replace(/চজ্জ|২জ্জ|চ৭/g,"২৭").replace(/চজ্ব|২জ্ব|চ৮/g,"২৮").replace(/চজ্ঝ|২জ্ঝ|চ৯/g,"২৯")
		.replace(/৩ৰ/g,"৩১").replace(/৩চ/g,"৩২").replace(/৩চ্ছ্ৰ/g,"৩৪").replace(/৩প্ত/g,"৩৫").replace(/৩জ্জ/g,"৩৭").replace(/৩জ্ব/g,"৩৮").replace(/৩জ্ঝ/g,"৩৯")
		.replace(/চ্ছ্ৰৰ|৪ৰ/g,"৪১").replace(/চ্ছ্ৰচ|৪চ/g,"৪২")
		.replace(/প্তৰ|৫ৰ/g,"৫১").replace(/প্তচ|৫চ|প্ত২/g,"৫২").replace(/প্ত৩/g,"৫৩").replace(/প্তচ্ছ্ৰ|৫চ্ছ্ৰ/g,"৫৪").replace(/প্ত৬/g,"৫৬").replace(/প্তজ্জ|৫জ্জ/g,"৫৭").replace(/প্তজ্ব|৫জ্ব/g,"৫৮").replace(/প্তজ্ঝ|৫জ্ঝ/g,"৫৯")
		.replace(/৬ৰ/g,"৬১").replace(/৬চ/g,"৬২").replace(/৬চ্ছ্ৰ/g,"৬৪").replace(/৬প্ত/g,"৬৫").replace(/৬জ্জ/g,"৬৭").replace(/৬জ্ব/g,"৬৮").replace(/৬জ্ঝ/g,"৬৯")
		.replace(/জ্জৰ|৭ৰ/g,"৭১").replace(/জ্জচ|৭চ/g,"৭২").replace(/জ্জ৩/g,"৭৩").replace(/জ্জচ্ছ্ৰ|৭চ্ছ্ৰ/g,"৭৪").replace(/৭প্ত|জ্জপ্ত/g,"৭৫").replace(/জ্জ৬/g,"৭৬").replace(/জ্জজ্ব|৭জ্ব/g,"৭৮").replace(/জ্জজ্ঝ|৭জ্ঝ/g,"৭৯")
		.replace(/৮ৰ/g,"৮১").replace(/জ্বচ|৮চ/g,"৮২").replace(/জ্ব৩/g,"৮৩").replace(/জ্বচ্ছ্ৰ|৮চ্ছ্ৰ/g,"৮৪").replace(/৮প্ত|জ্বপ্ত/g,"৮৫").replace(/জ্ব৬/g,"৮৬").replace(/জ্বজ্জ|৮জ্জ/g,"৮৭").replace(/জ্বজ্ঝ|৮জ্ঝ/g,"৮৯")
		.replace(/জ্ঝৰ|৯ৰ/g,"৯১").replace(/জ্ঝচ|৯চ/g,"৯২").replace(/জ্ঝ৩/g,"৯৩").replace(/জ্ঝচ্ছ্ৰ|৯চ্ছ্ৰ/g,"৯৪").replace(/৯প্ত|জ্ঝপ্ত/g,"৯৫").replace(/জ্ঝ৬/g,"৯৬").replace(/জ্ঝজ্জ|৯জ্জ/g,"৯৭").replace(/জ্ঝজ্ব|৯জ্ব/g,"৯৮")
		.replace(/ৰৰচ/g,"১১২").replace(/ৰৰ3/g,"১১৩").replace(/ৰৰচ্ছ্ৰ/g,"১১৪").replace(/ৰৰপ্ত/g,"১১৫").replace(/ৰৰ৬/g,"১১৬").replace(/ৰৰজ্জ/g,"১১৭")
		.replace(/ৰৰজ্ব/g,"১১৮").replace(/ৰৰজ্ঝ/g,"১১৯").replace(/ৰ১০/g,"১১০")
		.replace(/ঙ্মৰ|০ৰ|ঙ্ম১/g,"০১").replace(/ঙ্মচ|০চ|ঙ্ম২/g,"০২").replace(/ঙ্ম৩/g,"০৩").replace(/ঙ্মচ্ছ্ৰ|০চ্ছ্ৰ|ঙ্ম৪/g,"০৪").replace(/ঙ্মপ্ত|০প্ত|ঙ্ম৫/g,"০৫")
		.replace(/ঙ্ম৬/g,"০৬").replace(/ঙ্মজ্জ|০জ্জ|ঙ্ম৭/g,"০৭").replace(/ঙ্মজ্ব|০জ্ব|ঙ্ম৮/g,"০৮").replace(/ঙ্মজ্ঝ|০জ্ঝ|ঙ্ম৯/g,"০৯").replace(/ৰচ্ছ/g,"১২৬")
		.replace(/০ঙ্ম/g,"০০").replace(/চ্ছ্ৰৰ|৪ৰ/g,"৪১").replace(/চ্ছ্ৰচ|৪চ/g,"৪২").replace(/২ৰ|চ১/g,"২১").replace(/৪ৰ/g,"৪১").replace(/৪চ/g,"৪২")
		.replace(/চ্ছচ্ছ/g,"২৬২৬").replace(/‰/g,"চ").replace(/গ্ধগ্ধগ্ধ/g,"***").replace(/œ/g,"ী").replace(/গ্ধগ্ধ/g,"**").replace(/\*গ্ধ/g,"**")
		.replace(/২্ছ্১|২্ছ্ৰ|২৬্১/g,"৪").replace(/২্ছ্ৰচ/g,"৪২").replace(/∏/g,"").replace(/¶≥®/g,"স্কু").replace(/•ß/g,"জ").replace(/¶ß/g,"স্ন").replace(/Ω/g,"দ্ম").replace(/¬ıË/g,"ব্ৰ").replace(/•/g,"ম্").replace(/ù¨/g,"শ্মি")
		.replace(/গঁাৱ/g,"গাঁও").replace(/তৰািi§ত/g,"তৰান্বিত").replace(/∆হ/g,"হৈ").replace(/বিশ্ববËহ্মাণ্ডেৰ/g,"বিশ্বব্ৰহ্মাণ্ডেৰে").replace(/∆জ/g,"জৈ").replace(/∆ল/g,"লৈ")
		.replace(/Œশ্ৰ/g,"শ্ৰে").replace(/মৃতু্য/g,"মৃত্যু").replace(/Œস্প/g,"স্পে").replace(/∆গ/g,"গৈ").replace(/∆ব/g,"বৈ").replace(/হঁা/g,"হাঁ").replace(/ষû/g,"ষ্ণ").replace(/∆ক/g,"কৈ").replace(/যLa/g,"যন্ত্ৰ").replace(/øপ্ৰ/g,"প্ৰি");

	document.getElementById("text_unicode").innerHTML = result;
}
