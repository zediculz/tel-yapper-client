
const baseUrl = "https://tel-yapper-81.deno.dev"
const headersList = {
  "Accept": "*/*",
  "User-Agent": "Tel Yapper Client",
  "Content-Type": "application/x-www-form-urlencoded"
}


/**@param {string} url  */
/**@param body  */
/**@function net */
async function net(url, body) {
  const link = `${baseUrl}${url}`
  const response = await fetch(link, {
    method: "POST",
    body: body,
    headers: headersList
  });

  const data = await response.json();
  return data
}

/**@param type, @param chat   */
async function handleCheck(type, chat) {
  const bodyContent = `type=${type}&chat=${chat}`;
  const res = await net("/check", bodyContent)
  return res
}


/**@param id, @param mode , @param message  */
 async function handleSend(id, mode, message) {

   let bodyContent = `mode=${mode}&id=${id}&message=${message}`;
   const res = await net("/bot", bodyContent)
   return res
}

/**@param type, @param chat, @param mode , @param message.  */
async function handleDirect(type, chat, mode, message) {

  let bodyContent = `type=${type}&chat=${chat}&mode=${mode}&message=${message}`
  let response = await net("/botd", bodyContent)
  return response
}


/**@param TeleYapper is a telegram bot thats use for logging message to telegram channel or group from app */
/**@class TeleYapper */
class TeleYapper {

  constructor() {
    this.logs = []
  }

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
    this.#manageLogs()?.add(message, res?.ok, "send", args)
    return res
  }

  /** @param message the message your want send. @param id your chat id. @param mode the mode your want log eg basic, order, error, info and warn, empty mode is the same as basic. */
  async direct(message, args) {
    const { mode, type, chat } = args
    const m = mode === undefined || mode === "" ? 'basic' : mode
    const res = await handleDirect(type, chat, m, message)
    this.#manageLogs()?.add(message, res?.ok, "direct", args)
    return res
  }

  /**@pram flush make sure all logs are sent  */
  flush() {
    this.#manageLogs().flush()
  }

  /**@param private */
  #manageLogs() {
    const obj = {
      add: (text, res, type, args) => {
        if (res === false) {
          const o = { id: Math.floor(Math.random() * 9999999), text, type, args }
          this.logs.push(o)
        }
      },

      flush: () => {
        if (this.logs.length > 0) {
          this.logs.map(async(log, i) => {
            if (log?.type === "direct") {
              await this.direct(log?.text, log?.args)
              return
            } else if (log?.type === "send") {
              await this.send(log?.text, log?.args)
            }
          })
        }
      }
    }

    return obj
  }
}

export default TeleYapper