module.exports = {
name:"afk",
code:`
$setVar[afk;$message[];$authorID]
你把你的上線@提醒設置為\`$message[]\`
$onlyIf[$message[]!=;不能為空]`}