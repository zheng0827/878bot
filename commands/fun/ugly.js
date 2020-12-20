module.exports = {

name: "ugly",

code: `$author[醜陋探測器;$userAvatar[$authorID]]

$description[<@$authorID> 有 $random[0;100]% 很醜]

$color[$random[0;999999]]

$onlyIf[$message[]==;{execute:ugly1}]

$onlyIf[$mentioned[1]==;{execute:ugly}]`}

