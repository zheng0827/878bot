module.exports = {
name:"week",
code:`$setVar[money;$sum[$getVar[money;$authorID];750];$authorID]
$title[每周獎勵]
$description[:tada: 你本周獲得750元!
You get $750 this week!]
$globalCooldown[7d;\`請等待{time}/please wait {time}\`]`}
