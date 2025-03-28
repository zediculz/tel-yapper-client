var f = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var y = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
};
var o = (n, e, t) => (f(n, e, "access private method"), t);
const w = "https://tel-yapper-81.deno.dev", m = {
  Accept: "*/*",
  "User-Agent": "Tel Yapper Client",
  "Content-Type": "application/x-www-form-urlencoded"
};
async function p(n, e) {
  const t = `${w}${n}`;
  return await (await fetch(t, {
    method: "POST",
    body: e,
    headers: m
  })).json();
}
async function b(n, e) {
  const t = `type=${n}&chat=${e}`;
  return p("/check", t);
}
async function $(n, e, t) {
  let s = `mode=${e}&id=${n}&message=${t}`;
  return await p("/bot", s);
}
async function k(n, e, t, s) {
  let a = `type=${n}&chat=${e}&mode=${t}&message=${s}`;
  return await p("/botd", a);
}
var r, h;
class C {
  constructor() {
    /**@param private */
    y(this, r);
    this.logs = [];
  }
  /**@param type the type of chat your choose, eg channel or group. @param chat the name of your group or channel. */
  async check(e, t) {
    return await b(e, t);
  }
  //check, check bots id @done
  //log, send message
  //direct, send message with other option
  /** @param message the message your want send. @param id your chat id. @param mode the mode your want log eg basic, order, error, info and warn, empty mode is the same as basic. */
  async send(e, t) {
    var d;
    const { id: s, mode: a } = t, c = await $(s, a === void 0 || a === "" ? "basic" : a, e);
    return (d = o(this, r, h).call(this)) == null || d.add(e, c == null ? void 0 : c.ok, "send", t), c;
  }
  /** @param message the message your want send. @param id your chat id. @param mode the mode your want log eg basic, order, error, info and warn, empty mode is the same as basic. */
  async direct(e, t) {
    var u;
    const { mode: s, type: a, chat: i } = t, d = await k(a, i, s === void 0 || s === "" ? "basic" : s, e);
    return (u = o(this, r, h).call(this)) == null || u.add(e, d == null ? void 0 : d.ok, "direct", t), d;
  }
  /**@pram flush make sure all logs are sent  */
  flush() {
    o(this, r, h).call(this).flush();
  }
}
r = new WeakSet(), h = function() {
  return {
    add: (t, s, a, i) => {
      if (s === !1) {
        const c = { id: Math.floor(Math.random() * 9999999), text: t, type: a, args: i };
        this.logs.push(c);
      }
    },
    flush: () => {
      this.logs.length > 0 && this.logs.map(async (t, s) => {
        if ((t == null ? void 0 : t.type) === "direct") {
          await this.direct(t == null ? void 0 : t.text, t == null ? void 0 : t.args);
          return;
        } else
          (t == null ? void 0 : t.type) === "send" && await this.send(t == null ? void 0 : t.text, t == null ? void 0 : t.args);
      });
    }
  };
};
window.TeleYapper = C;
export {
  C as default
};
