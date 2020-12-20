module.exports = {
name: "mp",
code: `$author[變態探測器;$userAvatar[$authorID]]
$description[<@$authorID> 有 $random[0;100]% 是變態]
$color[$random[0;999999]]
$onlyIf[$message[]==;{execute:mp1}]
$onlyIf[$mentioned[1]==;{execute:mp}]`}