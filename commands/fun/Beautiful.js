module.exports = {
name: "beautiful",
code: `$author[美麗探測器;$userAvatar[$authorID]]
$description[<@$authorID>有 $random[0;100]% 是美女]
$color[$random[0;999999]]
$onlyIf[$message[]==;{execute:beautiful1}]
$onlyIf[$mentioned[1]==;{execute: beautiful}]`}