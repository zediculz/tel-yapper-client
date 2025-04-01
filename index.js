
import TeleYapper from "./lib/main.js"

const tele = new TeleYapper()

//let r = await tele.check("group", "LogYapper Test")
//let rr = await tele.check("channel", "Logyapper ch")


const s = await tele.send('message ggg example', {
    id: -1002623552220,
    mode: "error"
})

console.log(s)

/*
const ss = await tele.direct("direct example", {
    type: "group",
    chat: "LogYapper Test",
    mode: "order"
})

console.log(ss)
*/
