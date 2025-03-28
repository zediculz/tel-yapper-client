
import TeleYapper  from './lib/main.js'


const tele = new TeleYapper()

//let res = await tele.check("channel", "Logyapper ch")

const s = await tele.send('message example', {
    id: 12345,
    mode: "order"
})

//console.log(s)


const ss = await tele.direct("direct msg example", {
    type: "channel",
    chat: "Logyapperch"
})

console.log(ss)
console.log(tele)