module.exports = {

name:"work",

code:`$title[工作 Work]

$setVar[money;$sum[$getVar[money;$authorID];$random[100;230]];$authorID]

$description[

$username 完成了\`$randomText[做苦工;賣身🔞;當YouTuber;殯葬社董事長;保母;抬棺材;Tailor裁縫;Farmer農夫;Teacher老師;Cook廚師;Aircraft Division飛機師;Police警察;Fireman裁縫;Fireman消防員;Ambulance救護員]\` 工作, 獲得了 \`$random[100;250]\` 元

$username completed the \`$randomText[做苦工;賣身🔞;當YouTuber;殯葬社董事長;保母;抬棺材;Tailor裁縫;Farmer農夫;Teacher老師;Cook廚師;Aircraft Division飛機師;Police警察;Fireman裁縫;Fireman消防員;Ambulance救護員]\` work, and get \`$$random[100;250]\`]

$color[$random[000000;999999]]

$cooldown[20m;\`請再等 {time} 分鐘 Please wait {time} \`]`}

