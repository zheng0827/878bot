module.exports = {
name: "luck",
code: `
$author[幸運探測器;$userAvatar[$authorID]]
$description[<@$authorID> 的幸運指數是$random[0;100]]
$color[$random[0;999999]]
$onlyIf[$message[]==;{execute:luck1}]
$onlyIf[$mentioned[1]==;{execute:luck}]`}