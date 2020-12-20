module.exports = {
name: "cute",
code: `$author[可愛探測器;$userAvatar[$authorID]]
$description[<@$authorID> $random[0;100]% 很可愛]
$color[$random[0;999999]]
$onlyIf[$message[]==;{execute:cute1}]
$onlyIf[$mentioned[1]==;{execute:cute}]`}