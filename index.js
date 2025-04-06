import TeleYapper from "https://esm.sh/yapper-bot@0.1.0"
//const tele = new TeleYapper()


//import TeleYapper from "./lib/main.js"
//import TeleYapper from "yapper-bot"

const tele = new TeleYapper()

//let r = await tele.check("group", "LogYapper Test")
//let rr = await tele.check("channel", "Logyapper ch")


const s = await tele.send('message [ggg] with esm.sh', {
    id: -1002623552220,
    mode: "warn"
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


const obj = {
    "ok": true,
    "data": "[{\"name\":\"john doe\",\"address\":\"lagos state, lagos nigeria, lagos, State.\",\"dob\":\"1-3-1958\",\"school\":\"nn - 9999\",\"phone\":\"07067873549\",\"email\":\"johndoe@gmail.com\",\"resume\":\"johndoe.com\",\"idlink\":\"https://echostock.net/api/v1/uploads/elliott-engelmann-DjlKxYFJlTc-unsplash.jpg\"},{\"name\":\"johnson doey\",\"address\":\"lagos state, lagos nigeria, lagos, State.\",\"dob\":\"11-3-1995\",\"school\":\"nnbbbb - 9999\",\"phone\":\"07067873549\",\"email\":\"johndoe@gmail.com\",\"resume\":\"johnsonndoe.com\",\"idlink\":\"https://echostock.net/api/v1/uploads/ab67616100005174d99b2fe4040de9fb407959cc.jpeg\"},{\"name\":\"son doe\",\"address\":\"lagos state, lagos nigeria, lagos, State.\",\"dob\":\"11-14-1958\",\"school\":\"nnbbbb - 9998\",\"phone\":\"07067873549\",\"email\":\"johndoe@gmail.com\",\"resume\":\"jjjjjjjjjj\",\"idlink\":\"https://echostock.net/api/v1/uploads/Omah+Image+2.jpg\"}]"
}

const d = JSON.parse(obj?.data)
const wrap = document.getElementById("wrap")
wrap.innerHTML = ``


d?.flatMap((dd, i) => {
    console.log(dd)
    const temp = ` <div class="wrap-block">
        ${dd?.name} view more
      </div>`
    wrap.innerHTML += `${temp}`
})