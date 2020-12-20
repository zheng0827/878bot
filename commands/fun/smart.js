module.exports = {
name: "smart",
code: `$author[智商探測器 ;$userAvatar[$authorID]]
$description[<@$authorID>的智商是 $random[0;100]]
$color[$random[0;999999]]
$onlyIf[$message[]==;{execute:smart1}]
$onlyIf[$mentioned[1]==;{execute:smart}]`}