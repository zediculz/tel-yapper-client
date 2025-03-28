
const baseUrl = "https://tel-yapper-81.deno.dev"
const headersList = {
  "Accept": "*/*",
  "User-Agent": "Tel Yapper Client",
  "Content-Type": "application/x-www-form-urlencoded"
}


async function handleCheck(type, chat) {

  const bodyContent = `type=${type}&chat=${chat}`;

  const response = await fetch(`${baseUrl}/check`, {
    method: "POST",
    body: bodyContent,
    headers: headersList
  });

  const data = await response.json();
  return data
}

 async function handleSend(id, mode, message) {

  let bodyContent = `mode=${mode}&id=${id}&message=${message}`;

  let response = await fetch(`${baseUrl}/bot`, {
    method: "POST",
    body: bodyContent,
    headers: headersList
  });

  let data = await response.json();
  return data
}

async function handleDirect(type, chat, mode, message) {

  let bodyContent = `type=${type}&chat=${chat}&mode=${mode}&message=${message}`

  let response = await fetch(`${baseUrl}/botd`, {
    method: "POST",
    body: bodyContent,
    headers: headersList
  });

  let data = await response.json()
  return data
}



class TeleYapper {

  /**@param type the type of chat your choose, eg channel or group. @param chat the name of your group or channel. */
  async check(type, chat) {
    const res = await handleCheck(type, chat)
    return res
  }

  //check, check bots id @done
  //log, send message
  //direct, send message with other option

  /** @param message the message your want send. @param id your chat id. @param mode the mode your want log eg basic, order, error, info and warn, empty mode is the same as basic. */
  async send(message, args) {
    const { id, mode } = args
    const m = mode === undefined || mode === "" ? 'basic' : mode
    const res = await handleSend(id, m, message)
    return res
  }

  /** @param message the message your want send. @param id your chat id. @param mode the mode your want log eg basic, order, error, info and warn, empty mode is the same as basic. */
  async direct(message, args) {
    const { mode, type, chat } = args
    const m = mode === undefined || mode === "" ? 'basic' : mode
    const res = await handleDirect(type, chat, m, message)
    return res
  }
}

export default TeleYapper