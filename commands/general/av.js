module.exports = {
  name:"av",
  code:`$description[**<@$authorID>的頭像**]
$image[$userAvatar[$authorID]?size=4096]
$onlyIf[$message[]==;{execute:av}]`}
  
