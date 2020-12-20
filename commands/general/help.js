module.exports = {
	name: "help",
	code: `
$title[welcome use 878 bot]
$thumbnail[https://cdn.discordapp.com/attachments/714459896950816779/716647645518626856/20200531_214110.png]
$description[
Hi~ I am 878bot.
My creater is \`$username[670194432657588234]\`.
My prefix is\`$getServerVar[prefix]\`.

$getVar[update;670194432657588234]
--------------------------------
一般 general \`$getServerVar[prefix]help 1\`
管理員 admin  \`$getServerVar[prefix]help 2\`
物品 item \`$getServerVar[prefix]help 3\`
娛樂 fun \`$getServerVar[prefix]help 4\`
音樂 music \`$getServerVar[prefix]help 5\`
878專屬only 878\`$getServerVar[prefix]help 6\`
$addTimestamp] $footer[Page no page] $color[$random[0;999999]] 

$onlyIf[$message[]==;{execute:help$message[]}]
$onlyIf[$message[]<=$getVar[helppage;670194432657588234];沒有第$message[]頁/I haven't page$message[]]
$onlyIf[$isNumber[$message[]]==true;你輸入的不是數字/you entered is not a number]`}