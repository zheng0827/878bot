module.exports = {
  name:"serverinfo",
  code:`
$thumbnail[$serverIcon]
$title[伺服器信息 Server info]
$description[
伺服器ID server ID:\`$guildID\`

伺服器名稱 Server name: 
\`$serverName[]\` 

擁有者 Owner: \`$username[$ownerID]#$discriminator[$ownerID]\` 

伺服器所在地 Server location : \`$region\` 

成員人數 Number of members:\`$membersCount[]\`

頻道數量 Number of channels: \` $channelCount\`

身份組數量 Number of identity groups: \`$roleCount\` 
$addTimestamp]
$color[cd1a8c]`}

