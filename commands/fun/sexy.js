module.exports = {
name: "sexy",
code: `$author[性感探測器 ;$userAvatar[$authorID]]
$description[<@$authorID> 有 $random[0;100]% 很性感]
$color[$random[0;999999]]
$onlyIf[$message[]==;{execute:sexy1}]
$onlyIf[$mentioned[1]==;{execute:sexy}]`}