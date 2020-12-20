module.exports = {
name:"pay",
code:`
$setVar[money;$sub[$getVar[money;$authorID];$noMentionMessage[]];$authorID]
$setVar[money;$sum[$getVar[money;$authorID];$noMentionMessage[]];$mentioned[1]]
$title[**給予金錢** Pay money]
$description[給予: <@$mentioned[1]>
給予者: <@$authorID>
金錢: \`$noMentionMessage[]\`

Give: <@$mentioned[1]>
Giver: <@$authorID>
money: \`$noMentionMessage[]\`]
$onlyIf[$mentioned[1]!=$authorID;\`你不能給予自己金錢 You can't give yourself money\`]
$onlyIf[$noMentionMessage[]>0;\`你不能給他0元 You can't give $0\`]
$color[$random[1;999999]]
$onlyIf[$getVar[money;$authorID]>$noMentionMessage[];\`你的金錢不夠 You don't have enough money\`]`}

