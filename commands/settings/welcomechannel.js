module.exports = {
  name:"welcomechannel",
aliases:["wc"],
  code:`
歡迎訊息的頻道為： <#$channelID[]> 
請使用$getServerVar[prefix]welcomemessage 設置歡迎訊息
使用$getServerVar[prefix]autorole設置自動身份組(一定要，不然不會顯示)
---------------------------------------------------------
The channel of the welcome message is: <#$channelID[]>
Please use $getServerVar[prefix]welcomemessage to set the welcome message
Use $getServerVar[prefix]autorole to set an automatic identity group (must be, otherwise it will not be displayed)
---------------------------------------------------------
$deleteIn[3s]
這個訊息***將會在3秒後刪除***/this message ***will be deleted in 3 seconds***
$setServerVar[wc;$channelID[]] 
$onlyAdmin[$randomText[\`你不是管理員/You are not an administrator\`;\`請叫管理員設置/Please call the administrator to set\`;\`你沒有權限使用/You don't have permission to use\`]] 
$deletecommand[0.1s]`}

