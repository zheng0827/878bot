module.exports = {

name:"sayto",

code:`$deletecommand[1ms]

$author[給$username[$mentioned[1]];$userAvatar[$mentioned[1]]]

$description[$username[$authorID]想對你說：$noMentionMessage[]]

$color[$random[001122;991817]]

$onlyIf[$noMentionMessage[]!=;

{author:$username[$authorID]你沒有輸入文字/you didn't enter some word}

{description: 你可以使用/you can use

\`$getServerVar[prefix]say \`來說一些東西/to say something

\`$getServerVar[prefix]embedsay\`用embed說一些東西/say something in embed

-------------------------------------------------------

此指令使用方法為下

\`$getServerVar[prefix]sayto (@某人/someone) (訊息/message)\`}

{color:ff0000}]

$onlyIf[$mentioned[1]!=;{author:$username[$authorID]你沒有@某人/you didn't @someome}

{description: 你可以使用/you can use

\`$getServerVar[prefix]say \`來說一些東西/to say something

\`$getServerVar[prefix]embedsay\`用embed說一些東西/say something in embed

-------------------------------------------------------

此指令使用方法為下

\`$getServerVar[prefix]sayto (@某人/someone) (訊息/message)\`}

{color:ff0000}]`}

