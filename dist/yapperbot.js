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
const m = "https://tel-yapper-81.deno.dev", w = {
  Accept: "*/*",
  "User-Agent": "Tel Yapper Client",
  "Content-Type": "application/x-www-form-urlencoded"
};
async function p(n, e) {
  const t = `${m}${n}`;
  return await (await fetch(t, {
    method: "POST",
    body: e,
    headers: w
  })).json();
}
async function b(n, e) {
  const t = `type=${n}&chat=${e}`;
  return await p("/check", t);
}
async function $(n, e, t) {
  let s = `mode=${e}&id=${n}&message=${t}`;
  return await p("/bot", s);
}
async function k(n, e, t, s) {
  let a = `type=${n}&chat=${e}&mode=${t}&message=${s}`;
  return await p("/botd", a);
}
var i, h;
class x {
  constructor() {
    /**@param private */
    y(this, i);
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
    return (d = o(this, i, h).call(this)) == null || d.add(e, c == null ? void 0 : c.ok, "send", t), c;
  }
  /** @param message the message your want send. @param id your chat id. @param mode the mode your want log eg basic, order, error, info and warn, empty mode is the same as basic. */
  async direct(e, t) {
    var u;
    const { mode: s, type: a, chat: r } = t, d = await k(a, r, s === void 0 || s === "" ? "basic" : s, e);
    return (u = o(this, i, h).call(this)) == null || u.add(e, d == null ? void 0 : d.ok, "direct", t), d;
  }
  /**@pram flush make sure all logs are sent  */
  flush() {
    o(this, i, h).call(this).flush();
  }
}
i = new WeakSet(), h = function() {
  return {
    add: (t, s, a, r) => {
      if (s === !1) {
        const c = { id: Math.floor(Math.random() * 9999999), text: t, type: a, args: r };
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
export {
  x as default
};
