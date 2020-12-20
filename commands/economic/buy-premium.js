module.exports = {
name:"buypremium",
code:`$color[$random[1;999999]]
$setVar[money;$sub[$getVar[money;$authorID];6666];$authorID]
$title[購買高級版/buy premium]
$description[你成功花了6666元購買高級版(不含音樂)/You successfully spent 6666 yuan to purchase the premium version (not including music)]
$setVar[premium;1;$authorID]
$onlyIf[$getVar[money;$authorID]>6666;\`你的金錢不夠 You don't have enough money\`]`}