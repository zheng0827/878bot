module.exports = {
name:"rob",
code:`$setVar[money;$sum[$getVar[money;$authorID];$random[0;$getVar[money;$mentioned[1]]]];$authorID]
$setVar[money;$sub[$getVar[money;$mentioned[1]];$random[0;$getVar[money;$mentioned[1]]]];$mentioned[1]]
$title[Rob]
$color[$random[1;999999]]
$description[<@$authorID> 成功搶劫 <@$mentioned[1]> 並獲得 $$random[1;$getVar[money;$mentioned[1]]]
<@$authorID> Successfully robbed  and get $$random[1;$getVar[money;$mentioned[1]]] <@$mentioned[1]>]
$globalCooldown[1d;\`請等待 {time} Please wait {time}\`]
$onlyIf[$getVar[money;$authorID]=>499;\`你太窮了 You are too poor\`]
$onlyIf[$mentioned[1]!=$authorID;\`你不能搶劫自己 You can't rob yourself\`]
$onlyIf[$mentioned[1]!=;\`沒有名稱 No name\`]
$onlyIf[$getVar[money;$mentioned[1]]=>499;\`他太窮了 He is too poor\`]`}

