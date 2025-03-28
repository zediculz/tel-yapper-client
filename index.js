
import TeleYapper  from './lib/main.js'


const tele = new TeleYapper()

let res = await tele.check("channel", "Logyapper ch")
//console.log(res)

const s = await tele.send('message example', {
    id: 12345,
    mode: "order"
})

//console.log(s)


const ss = await tele.direct("direct msg example", {
    type: "channel",
    chat: "Logyapperch",
    mode: "order"
})

tele.flush()
//console.log(ss)
console.log(tele)