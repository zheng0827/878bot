module.exports = {
name:"day",
code:`$setVar[money;$sum[$getVar[money;$authorID];250;$membersCount[]];$authorID]
$title[每日獎勵/Daily reward]
$description[你今日獲得\`$sum[$membersCount[];250]\`元
You get $\`$sum[$membersCount[];250]\` today]
$setVar[day;$day;$authorID]
$onlyIf[$day!=$getVar[day;$authorID];\`請在明天使用!/ Please use it tomorrow!\`]`}