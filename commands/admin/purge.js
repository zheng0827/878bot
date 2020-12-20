module.exports = {
 name: "purge",
aliases: ["clear"],
 code: `$clear[$message[]]
$description[
你刪除了\`$message[]\` 個訊息
you deleted \`$message[]\` message(s)
將會在3秒後刪除/Will be deleted in 3 seconds]
$deleteIn[3s]
$onlyIf[$message[]<=100;最大值為100/Maximum is 100]
$onlyIf[$isNumber[$message[]]==true;{title:請輸入1到100/Please enter 1 to 100}]
$color[99fuck]
$onlyAdmin[$randomText[\`你不是管理員/You are not an administrator\`;\`請叫管理員設置/Please call the administrator to set\`;\`你沒有權限使用/You don't have permission to use\`]]`}

