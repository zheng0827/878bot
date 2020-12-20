module.exports = {
name:"embedsay",
code:`
$author[$username[$authorID]說了一些東西;$userAvatar[$authorID]]
$description[$message[]]
$color[$random[001122;991817]]
$onlyIf[$message[]!=;
{author:$username[$authorID]你沒有輸入文字/you didn't enter some word}
{description: 你可以使用/you can use \`$getServerVar[prefix]say \`來說一些東西/to say something

\`$getServerVar[prefix]sayto\`對某人說一些東西/say something to someone}
{color:ff0000}]`}

