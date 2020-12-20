module.exports = {
name: "handsome",
code: `
$author[帥哥探測器;$userAvatar[$authorID]]
$description[<@$authorID> $random[0;100]% 是帥哥]
$color[$random[0;999999]]
$onlyIf[$message[]==;{execute:handsome1}]
$onlyIf[$mentioned[1]==;{execute:handsome}]`}
