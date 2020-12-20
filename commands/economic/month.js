module.exports = {
name:"month",
code:`$setVar[money;$sum[$getVar[money;$authorID];9500];$authorID]
$title[每月獎勵]
$description[
:tada: 你本月獲得 $9500/you get \`9500\` this month]
$onlyIf[$month!=$getVar[month;$authorID];\`請等待1個月 Please wait a month\`]
$setVar[month;$month;$authorID]
$onlyIf[$getVar[premium;$authorID]==1;\`你需要高級版才能使用這個指令! You need the premium version to use this command!\`]`})