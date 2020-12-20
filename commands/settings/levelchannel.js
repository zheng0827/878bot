module.exports = {
  name:"levelchannel",
aliases:["lvch"],
  code:`設置level訊息的頻道/Set the channel for level messages<#$channelID[]>
$setServerVar[lvch;$channelID[]]
$onlyAdmin[$randomText[\`你不是管理員/You are not an administrator\`;\`請叫管理員設置/Please call the administrator to set\`;\`你沒有權限使用/You don't have permission to use\`]]`}

