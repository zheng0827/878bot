module.exports = {
name:"beg",
code:`$title[你乞求嗎?/are you begging?]
$description[您已乞求 \`$randomText[PewDiePie;Markiplier;EnderBoy;Me;Poke;Ant;SeeDang]\` 並賺了 \`$$random[1;21]\` !

You've begged \`$randomText[PewDiePie;Markiplier;EnderBoy;Me;Poke;Ant;SeeDang]\` and earned \`$$random[1;21]\` !]
$setVar[money;$sum[$getVar[money;$authorID];$random[1;21]];$authorID]
$color[$random[000000;999999]]
$globalCooldown[30s;\`您需要等待 {time}！you need wait {time}!\`]
$onlyIf[$getVar[premium;$authorID]==1;\`你需要高級版才能使用這個指令! You need the premium version to use this command!\`]`}

