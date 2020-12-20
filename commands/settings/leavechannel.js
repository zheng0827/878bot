module.exports = {
  name:"leavechannel",
aliases:["lc"],
  code:`離開訊息的頻道為/The channel of the leave message is <#$channelID[]> 
$deleteIn[3s]
這個訊息***將會在3秒後刪除***/this message ***will be deleted in 3 seconds***
$setServerVar[lc;$channelID[]] 
$onlyAdmin[$randomText[\`你不是管理員/You are not an administrator\`;\`請叫管理員設置/Please call the administrator to set\`;\`你沒有權限使用/You don't have permission to use\`]] 
$deletecommand[0.1s]`}

