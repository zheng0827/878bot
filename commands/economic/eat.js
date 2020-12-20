module.exports = {
name:"eat",
code:`$setVar[money;$sub[$getVar[money;$authorID];$random[40;101]];$authorID]
$title[**吃飯** Eat Food]
$description[你今天在 $randomText[不知名西式餐廳 Unknown Western restaurant;不知名中式餐廳 Unknown Chinese restaurant;小食店 Snack Shop;麥當勞 McDonald's;肯德雞 KFC;家裏 home] 吃飯去了, 消費了\`$random[40;101]\`元

You eat food at $randomText[不知名西式餐廳 Unknown Western restaurant;不知名中式餐廳 Unknown Chinese restaurant;小食店 Snack Shop;麥當勞 McDonald's;肯德雞 KFC;家裏 home] and consumed \`$$random[40;101] \`]

$globalCooldown[6h;\`請等待 {time} Please wait {time}\`]
$color[$random[000000;999999]]
$onlyIf[$getVar[money;$authorID]=>100;\`你沒有足夠金錢 You don't have enough money\`]`}

