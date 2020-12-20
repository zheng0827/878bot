module.exports = {
  name:"prefix",
  code:`
<@$authorID>,把我的前綴設置為\`$message[]\`
<@$authorID>, set my prefix to \`$message[]\`
$setServerVar[prefix;$message[]]
$setNickname[698375522039758858;$replaceText[$nickname[698375522039758858];$getServerVar[prefix];$message[]]]
$onlyIf[$message[]!=$getServerVar[prefix];不能和原本的一樣/Not the same as the original]
$onlyIf[$message[]!=;不能為空白/Cannot be blank]
$onlyAdmin[$randomText[\`你不是管理員/You are not an administrator\`;\`請叫管理員設置/Please call the administrator to set\`;\`你沒有權限使用/You don't have permission to use\`]]`}

