module.exports = {
name:"take",
code:`$setVar[money;$sum[$getVar[money;$authorID];$replaceText[$noMentionMessage;all;$getVar[money;$authorID];1]];$authorID]
$setVar[bank;$sub[$getVar[bank;$authorID];$replaceText[$noMentionMessage;all;$getVar[bank;$authorID];1]];$authorID]
你成功拿取\`$message[]\`元在銀行!
You successfully got \`$$message[]\` in the bank!
$onlyIf[$getVar[bank;$authorID]=>$message[];\`你的金錢不夠 You don't have enough money\`]
$onlyIf[$message[]!=0;不能輸入0/can't enter 0] 
$onlyIf[$message[]!=;不能為空白/Cannot be blank]`}