module.exports = {
  name:"checkwarns",
  code:`$title[**警告數Warns**]
$addTimestamp
$description[<@$authorID>有 \` $getUserVar[warn;$authorID]\`  次警告.

<@$authorID> has \` $getUserVar[warn;$authorID]\`  warnings.]
$color[0000ff]

$onlyIf[$message[]==;{execute:checkwarns}]`}

