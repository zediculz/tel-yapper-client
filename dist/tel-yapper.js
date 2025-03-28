const c = "https://tel-yapper-81.deno.dev", d = {
  Accept: "*/*",
  "User-Agent": "Tel Yapper Client",
  "Content-Type": "application/x-www-form-urlencoded"
};
async function i(s, e) {
  const t = `type=${s}&chat=${e}`;
  return await (await fetch(`${c}/check`, {
    method: "POST",
    body: t,
    headers: d
  })).json();
}
async function p(s, e, t) {
  let n = `mode=${e}&id=${s}&message=${t}`;
  return await (await fetch(`${c}/bot`, {
    method: "POST",
    body: n,
    headers: d
  })).json();
}
async function h(s, e, t, n) {
  let a = `type=${s}&chat=${e}&mode=${t}&message=${n}`;
  return await (await fetch(`${c}/botd`, {
    method: "POST",
    body: a,
    headers: d
  })).json();
}
class y {
  /**@param type the type of chat your choose, eg channel or group. @param chat the name of your group or channel. */
  async check(e, t) {
    return await i(e, t);
  }
  //check, check bots id @done
  //log, send message
  //direct, send message with other option
  /** @param message the message your want send. @param id your chat id. @param mode the mode your want log eg basic, order, error, info and warn, empty mode is the same as basic. */
  async send(e, t) {
    const { id: n, mode: a } = t;
    return await p(n, a === void 0 || a === "" ? "basic" : a, e);
  }
  /** @param message the message your want send. @param id your chat id. @param mode the mode your want log eg basic, order, error, info and warn, empty mode is the same as basic. */
  async direct(e, t) {
    const { mode: n, type: a, chat: o } = t;
    return await h(a, o, n === void 0 || n === "" ? "basic" : n, e);
  }
}
export {
  y as default
};
