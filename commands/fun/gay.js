module.exports = {
name: "gay",
code: `
$author[同性戀探測器; $userAvatar[$authorID]]
$description[<@$authorID> $random[0;100]% 是同性戀]
$color[$random[0;999999]]
$onlyIf[$message[]==;{execute:gay1}]
$onlyIf[$mentioned[1]==;{execute:gay}]`}