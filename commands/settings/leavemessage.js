module.exports = {
  name:"leavemessage",
aliases:["lm"],
  code:`
$deleteIn[3s]
***已把離開訊息設置為/The leave message has been set to*** $message[]

這個訊息***將會在3秒後刪除***/this message ***will be deleted in 3 seconds***
$setServerVar[lm;$message[]] 
$onlyIf[$message[]!=;{title:不能為空白/Cannot be blank}
{description:
可以使用\`$getServerVar[prefix]serverprofile\`尋找設定類指令的簡指令
You can use \`$getServerVar[prefix]serverprofile\` to find a simple command for setting class commands\`\`\`❌ | 用法/usage:
$getServerVar[prefix]leavemessage (訊息/message)\`\`\`}]
$onlyAdmin[$randomText[\`你不是管理員/You are not an administrator\`;\`請叫管理員設置/Please call the administrator to set\`;\`你沒有權限使用/You don't have permission to use\`]] 
$deletecommand[0.1s]`}

