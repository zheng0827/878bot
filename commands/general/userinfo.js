module.exports = {
name:"userinfo",
code:`
$thumbnail[$userAvatar[$authorID]]
$title[$username[$authorID]'s information]
$description[
名字/name
\`$username[$authorID]\`

tag
\`$discriminator[$authorID]\`

ID
\`$authorID\`

是機器人嗎？/Is it a bot?
\`$replaceText[$replaceText[$isBot[$authorID];false;不是/false];true;是/true]\`

創建帳號的時間/Time to create account
\`$creationDate[$authorID;user]($creationTime[$authorID;user])\`

加入此群的時間/Time to join this group
\`$creationDate[$authorID;member]($creationTime[$authorID;member])\`

有管理員權限嗎？/have admin rights?
\`$replaceText[$replaceText[$hasPerm[$authorID;admin];true;有/have];false;沒有/haven't]\`

有的身份組(排序為低到高)/has roles(Sort low to high)
\`\`\`$memberRoles[$authorID]\`\`\`]
$footer[In $serverName[$guildID];$serverIcon]
$color[ff$discriminator[$authorID]]
$onlyIf[$message[]==;{execute:userinfo}]`}

