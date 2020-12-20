module.exports = {
name:"bankrob",
code:`$setVar[bank;$sum[$getVar[bank;$authorID];$random[0;$getVar[bank;$mentioned[1]]]];$authorID]
$setVar[bank;$sub[$getVar[bank;$mentioned[1]];$random[0;$getVar[bank;$mentioned[1]]]];$mentioned[1]]
$title[BankRob]
$description[
$username robbed <@$mentioned[1]> bank and get$$random[0;$getVar[bank;$mentioned[1]]]
$username 搶劫了 <@$mentioned[1]> 銀行並獲得 $$random[0;$getVar[bank;$mentioned[1]]]]

$globalCooldown[3d;\`請等待{time} Please wait {time}\`]
$onlyIf[$getVar[money;$authorID]=>999;\`你太窮了 you are too poor\`]
$onlyIf[$getVar[premium;$authorID]==1;\`你需要高級版才能使用這個指令! You need the premium version to use this command!\`]
$onlyIf[$mentioned[1]!=;\`沒有名稱 No name\`]
$onlyIf[$mentioned[1]!=$authorID;\`你不能搶劫自己 You can't rob yourself\`]`}

