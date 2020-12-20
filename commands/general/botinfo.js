module.exports = {
    name:"botinfo",
    code:`$title[878 bot info]
$description[
name#tag: \`($getServerVar[prefix])878 bot#8251\`

ID : \`698375522039758858\`

creation date : \`2020/3/17(實際上)\`

up time:\`$replaceText[$replaceText[$replaceText[$replaceText[$uptime;d;天];h;小時];m;分鐘];s;秒] \`

invite ink : {hyper:878 bot:https://discord.com/oauth2/authorize?client_id=698375522039758858&scope=bot&permissions=2147483647}

support server: {hyper:support server:https://discord.gg/S4jMCtK}

server: \`$serverCount servers\`

members: \`$allMembersCount members\`

ping: \`$ping\`ms

version: \`$getVar[version;670194432657588234]\`] $color[19aa08]`}

