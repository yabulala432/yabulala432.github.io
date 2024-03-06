function JS(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const o in n)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(n, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => n[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = r(o);
    fetch(o.href, i);
  }
})();
var Ua =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function cf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Kg = { exports: {} },
  Bl = {},
  Yg = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ka = Symbol.for("react.element"),
  e2 = Symbol.for("react.portal"),
  t2 = Symbol.for("react.fragment"),
  r2 = Symbol.for("react.strict_mode"),
  n2 = Symbol.for("react.profiler"),
  o2 = Symbol.for("react.provider"),
  i2 = Symbol.for("react.context"),
  a2 = Symbol.for("react.forward_ref"),
  s2 = Symbol.for("react.suspense"),
  l2 = Symbol.for("react.memo"),
  u2 = Symbol.for("react.lazy"),
  xh = Symbol.iterator;
function c2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xh && e[xh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Qg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xg = Object.assign,
  qg = {};
function Qo(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = qg),
    (this.updater = r || Qg);
}
Qo.prototype.isReactComponent = {};
Qo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zg() {}
Zg.prototype = Qo.prototype;
function df(e, t, r) {
  (this.props = e),
    (this.context = t),
    (this.refs = qg),
    (this.updater = r || Qg);
}
var ff = (df.prototype = new Zg());
ff.constructor = df;
Xg(ff, Qo.prototype);
ff.isPureReactComponent = !0;
var bh = Array.isArray,
  Jg = Object.prototype.hasOwnProperty,
  pf = { current: null },
  ev = { key: !0, ref: !0, __self: !0, __source: !0 };
function tv(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (n in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Jg.call(t, n) && !ev.hasOwnProperty(n) && (o[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) o.children = r;
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (n in ((s = e.defaultProps), s)) o[n] === void 0 && (o[n] = s[n]);
  return {
    $$typeof: ka,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: pf.current,
  };
}
function d2(e, t) {
  return {
    $$typeof: ka,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ka;
}
function f2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Sh = /\/+/g;
function Vu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? f2("" + e.key)
    : t.toString(36);
}
function Ss(e, t, r, n, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ka:
          case e2:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = n === "" ? "." + Vu(a, 0) : n),
      bh(o)
        ? ((r = ""),
          e != null && (r = e.replace(Sh, "$&/") + "/"),
          Ss(o, t, r, "", function (u) {
            return u;
          }))
        : o != null &&
          (hf(o) &&
            (o = d2(
              o,
              r +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Sh, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (n = n === "" ? "." : n + ":"), bh(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var l = n + Vu(i, s);
      a += Ss(i, t, r, l, o);
    }
  else if (((l = c2(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (l = n + Vu(i, s++)), (a += Ss(i, t, r, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Ha(e, t, r) {
  if (e == null) return e;
  var n = [],
    o = 0;
  return (
    Ss(e, n, "", "", function (i) {
      return t.call(r, i, o++);
    }),
    n
  );
}
function p2(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var rt = { current: null },
  ws = { transition: null },
  h2 = {
    ReactCurrentDispatcher: rt,
    ReactCurrentBatchConfig: ws,
    ReactCurrentOwner: pf,
  };
W.Children = {
  map: Ha,
  forEach: function (e, t, r) {
    Ha(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ha(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ha(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
W.Component = Qo;
W.Fragment = t2;
W.Profiler = n2;
W.PureComponent = df;
W.StrictMode = r2;
W.Suspense = s2;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h2;
W.cloneElement = function (e, t, r) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var n = Xg({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = pf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      Jg.call(t, l) &&
        !ev.hasOwnProperty(l) &&
        (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    s = Array(l);
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: ka, type: e.type, key: o, ref: i, props: n, _owner: a };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: i2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: o2, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = tv;
W.createFactory = function (e) {
  var t = tv.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: a2, render: e };
};
W.isValidElement = hf;
W.lazy = function (e) {
  return { $$typeof: u2, _payload: { _status: -1, _result: e }, _init: p2 };
};
W.memo = function (e, t) {
  return { $$typeof: l2, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = ws.transition;
  ws.transition = {};
  try {
    e();
  } finally {
    ws.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return rt.current.useCallback(e, t);
};
W.useContext = function (e) {
  return rt.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return rt.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return rt.current.useEffect(e, t);
};
W.useId = function () {
  return rt.current.useId();
};
W.useImperativeHandle = function (e, t, r) {
  return rt.current.useImperativeHandle(e, t, r);
};
W.useInsertionEffect = function (e, t) {
  return rt.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return rt.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return rt.current.useMemo(e, t);
};
W.useReducer = function (e, t, r) {
  return rt.current.useReducer(e, t, r);
};
W.useRef = function (e) {
  return rt.current.useRef(e);
};
W.useState = function (e) {
  return rt.current.useState(e);
};
W.useSyncExternalStore = function (e, t, r) {
  return rt.current.useSyncExternalStore(e, t, r);
};
W.useTransition = function () {
  return rt.current.useTransition();
};
W.version = "18.2.0";
Yg.exports = W;
var C = Yg.exports;
const jt = cf(C),
  wh = JS({ __proto__: null, default: jt }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var m2 = C,
  g2 = Symbol.for("react.element"),
  v2 = Symbol.for("react.fragment"),
  y2 = Object.prototype.hasOwnProperty,
  x2 = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  b2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function rv(e, t, r) {
  var n,
    o = {},
    i = null,
    a = null;
  r !== void 0 && (i = "" + r),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (n in t) y2.call(t, n) && !b2.hasOwnProperty(n) && (o[n] = t[n]);
  if (e && e.defaultProps)
    for (n in ((t = e.defaultProps), t)) o[n] === void 0 && (o[n] = t[n]);
  return {
    $$typeof: g2,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: x2.current,
  };
}
Bl.Fragment = v2;
Bl.jsx = rv;
Bl.jsxs = rv;
Kg.exports = Bl;
var b = Kg.exports;
function S2(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function w2(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var k2 = (function () {
    function e(r) {
      var n = this;
      (this._insertTag = function (o) {
        var i;
        n.tags.length === 0
          ? n.insertionPoint
            ? (i = n.insertionPoint.nextSibling)
            : n.prepend
            ? (i = n.container.firstChild)
            : (i = n.before)
          : (i = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(o, i),
          n.tags.push(o);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(w2(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = S2(o);
          try {
            i.insertRule(n, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ke = "-ms-",
  Qs = "-moz-",
  X = "-webkit-",
  nv = "comm",
  mf = "rule",
  gf = "decl",
  C2 = "@import",
  ov = "@keyframes",
  _2 = "@layer",
  T2 = Math.abs,
  Vl = String.fromCharCode,
  P2 = Object.assign;
function E2(e, t) {
  return Ne(e, 0) ^ 45
    ? (((((((t << 2) ^ Ne(e, 0)) << 2) ^ Ne(e, 1)) << 2) ^ Ne(e, 2)) << 2) ^
        Ne(e, 3)
    : 0;
}
function iv(e) {
  return e.trim();
}
function $2(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function q(e, t, r) {
  return e.replace(t, r);
}
function Wc(e, t) {
  return e.indexOf(t);
}
function Ne(e, t) {
  return e.charCodeAt(t) | 0;
}
function Qi(e, t, r) {
  return e.slice(t, r);
}
function or(e) {
  return e.length;
}
function vf(e) {
  return e.length;
}
function Ga(e, t) {
  return t.push(e), e;
}
function z2(e, t) {
  return e.map(t).join("");
}
var Ol = 1,
  Lo = 1,
  av = 0,
  ft = 0,
  Pe = 0,
  Xo = "";
function Nl(e, t, r, n, o, i, a) {
  return {
    value: e,
    root: t,
    parent: r,
    type: n,
    props: o,
    children: i,
    line: Ol,
    column: Lo,
    length: a,
    return: "",
  };
}
function ii(e, t) {
  return P2(Nl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function A2() {
  return Pe;
}
function R2() {
  return (
    (Pe = ft > 0 ? Ne(Xo, --ft) : 0), Lo--, Pe === 10 && ((Lo = 1), Ol--), Pe
  );
}
function yt() {
  return (
    (Pe = ft < av ? Ne(Xo, ft++) : 0), Lo++, Pe === 10 && ((Lo = 1), Ol++), Pe
  );
}
function lr() {
  return Ne(Xo, ft);
}
function ks() {
  return ft;
}
function Ca(e, t) {
  return Qi(Xo, e, t);
}
function Xi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function sv(e) {
  return (Ol = Lo = 1), (av = or((Xo = e))), (ft = 0), [];
}
function lv(e) {
  return (Xo = ""), e;
}
function Cs(e) {
  return iv(Ca(ft - 1, Uc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function M2(e) {
  for (; (Pe = lr()) && Pe < 33; ) yt();
  return Xi(e) > 2 || Xi(Pe) > 3 ? "" : " ";
}
function j2(e, t) {
  for (
    ;
    --t &&
    yt() &&
    !(Pe < 48 || Pe > 102 || (Pe > 57 && Pe < 65) || (Pe > 70 && Pe < 97));

  );
  return Ca(e, ks() + (t < 6 && lr() == 32 && yt() == 32));
}
function Uc(e) {
  for (; yt(); )
    switch (Pe) {
      case e:
        return ft;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Uc(Pe);
        break;
      case 40:
        e === 41 && Uc(e);
        break;
      case 92:
        yt();
        break;
    }
  return ft;
}
function F2(e, t) {
  for (; yt() && e + Pe !== 57; ) if (e + Pe === 84 && lr() === 47) break;
  return "/*" + Ca(t, ft - 1) + "*" + Vl(e === 47 ? e : yt());
}
function L2(e) {
  for (; !Xi(lr()); ) yt();
  return Ca(e, ft);
}
function I2(e) {
  return lv(_s("", null, null, null, [""], (e = sv(e)), 0, [0], e));
}
function _s(e, t, r, n, o, i, a, s, l) {
  for (
    var u = 0,
      c = 0,
      d = a,
      f = 0,
      h = 0,
      y = 0,
      x = 1,
      _ = 1,
      g = 1,
      p = 0,
      m = "",
      k = o,
      P = i,
      $ = n,
      E = m;
    _;

  )
    switch (((y = p), (p = yt()))) {
      case 40:
        if (y != 108 && Ne(E, d - 1) == 58) {
          Wc((E += q(Cs(p), "&", "&\f")), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Cs(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += M2(y);
        break;
      case 92:
        E += j2(ks() - 1, 7);
        continue;
      case 47:
        switch (lr()) {
          case 42:
          case 47:
            Ga(D2(F2(yt(), ks()), t, r), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * x:
        s[u++] = or(E) * g;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            _ = 0;
          case 59 + c:
            g == -1 && (E = q(E, /\f/g, "")),
              h > 0 &&
                or(E) - d &&
                Ga(
                  h > 32
                    ? Ch(E + ";", n, r, d - 1)
                    : Ch(q(E, " ", "") + ";", n, r, d - 2),
                  l
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (Ga(($ = kh(E, t, r, u, c, o, s, m, (k = []), (P = []), d)), i),
              p === 123)
            )
              if (c === 0) _s(E, t, $, $, k, i, d, s, P);
              else
                switch (f === 99 && Ne(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _s(
                      e,
                      $,
                      $,
                      n && Ga(kh(e, $, $, 0, 0, o, s, m, o, (k = []), d), P),
                      o,
                      P,
                      d,
                      s,
                      n ? k : P
                    );
                    break;
                  default:
                    _s(E, $, $, $, [""], P, 0, s, P);
                }
        }
        (u = c = h = 0), (x = g = 1), (m = E = ""), (d = a);
        break;
      case 58:
        (d = 1 + or(E)), (h = y);
      default:
        if (x < 1) {
          if (p == 123) --x;
          else if (p == 125 && x++ == 0 && R2() == 125) continue;
        }
        switch (((E += Vl(p)), p * x)) {
          case 38:
            g = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (s[u++] = (or(E) - 1) * g), (g = 1);
            break;
          case 64:
            lr() === 45 && (E += Cs(yt())),
              (f = lr()),
              (c = d = or((m = E += L2(ks())))),
              p++;
            break;
          case 45:
            y === 45 && or(E) == 2 && (x = 0);
        }
    }
  return i;
}
function kh(e, t, r, n, o, i, a, s, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], h = vf(f), y = 0, x = 0, _ = 0;
    y < n;
    ++y
  )
    for (var g = 0, p = Qi(e, d + 1, (d = T2((x = a[y])))), m = e; g < h; ++g)
      (m = iv(x > 0 ? f[g] + " " + p : q(p, /&\f/g, f[g]))) && (l[_++] = m);
  return Nl(e, t, r, o === 0 ? mf : s, l, u, c);
}
function D2(e, t, r) {
  return Nl(e, t, r, nv, Vl(A2()), Qi(e, 2, -2), 0);
}
function Ch(e, t, r, n) {
  return Nl(e, t, r, gf, Qi(e, 0, n), Qi(e, n + 1, -1), n);
}
function _o(e, t) {
  for (var r = "", n = vf(e), o = 0; o < n; o++) r += t(e[o], o, e, t) || "";
  return r;
}
function B2(e, t, r, n) {
  switch (e.type) {
    case _2:
      if (e.children.length) break;
    case C2:
    case gf:
      return (e.return = e.return || e.value);
    case nv:
      return "";
    case ov:
      return (e.return = e.value + "{" + _o(e.children, n) + "}");
    case mf:
      e.value = e.props.join(",");
  }
  return or((r = _o(e.children, n)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function V2(e) {
  var t = vf(e);
  return function (r, n, o, i) {
    for (var a = "", s = 0; s < t; s++) a += e[s](r, n, o, i) || "";
    return a;
  };
}
function O2(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var _h = function (t) {
  var r = new WeakMap();
  return function (n) {
    if (r.has(n)) return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function uv(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var N2 = function (t, r, n) {
    for (
      var o = 0, i = 0;
      (o = i), (i = lr()), o === 38 && i === 12 && (r[n] = 1), !Xi(i);

    )
      yt();
    return Ca(t, ft);
  },
  W2 = function (t, r) {
    var n = -1,
      o = 44;
    do
      switch (Xi(o)) {
        case 0:
          o === 38 && lr() === 12 && (r[n] = 1), (t[n] += N2(ft - 1, r, n));
          break;
        case 2:
          t[n] += Cs(o);
          break;
        case 4:
          if (o === 44) {
            (t[++n] = lr() === 58 ? "&\f" : ""), (r[n] = t[n].length);
            break;
          }
        default:
          t[n] += Vl(o);
      }
    while ((o = yt()));
    return t;
  },
  U2 = function (t, r) {
    return lv(W2(sv(t), r));
  },
  Th = new WeakMap(),
  H2 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          n = t.parent,
          o = t.column === n.column && t.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Th.get(n)) &&
        !o
      ) {
        Th.set(t, !0);
        for (
          var i = [], a = U2(r, i), s = n.props, l = 0, u = 0;
          l < a.length;
          l++
        )
          for (var c = 0; c < s.length; c++, u++)
            t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
      }
    }
  },
  G2 = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function cv(e, t) {
  switch (E2(e, t)) {
    case 5103:
      return X + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return X + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + Qs + e + Ke + e + e;
    case 6828:
    case 4268:
      return X + e + Ke + e + e;
    case 6165:
      return X + e + Ke + "flex-" + e + e;
    case 5187:
      return (
        X + e + q(e, /(\w+).+(:[^]+)/, X + "box-$1$2" + Ke + "flex-$1$2") + e
      );
    case 5443:
      return X + e + Ke + "flex-item-" + q(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        X +
        e +
        Ke +
        "flex-line-pack" +
        q(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return X + e + Ke + q(e, "shrink", "negative") + e;
    case 5292:
      return X + e + Ke + q(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        X +
        "box-" +
        q(e, "-grow", "") +
        X +
        e +
        Ke +
        q(e, "grow", "positive") +
        e
      );
    case 4554:
      return X + q(e, /([^-])(transform)/g, "$1" + X + "$2") + e;
    case 6187:
      return (
        q(q(q(e, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return q(e, /(image-set\([^]*)/, X + "$1$`$1");
    case 4968:
      return (
        q(
          q(e, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + Ke + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        X +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return q(e, /(.+)-inline(.+)/, X + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (or(e) - 1 - t > 6)
        switch (Ne(e, t + 1)) {
          case 109:
            if (Ne(e, t + 4) !== 45) break;
          case 102:
            return (
              q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  X +
                  "$2-$3$1" +
                  Qs +
                  (Ne(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Wc(e, "stretch")
              ? cv(q(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ne(e, t + 1) !== 115) break;
    case 6444:
      switch (Ne(e, or(e) - 3 - (~Wc(e, "!important") && 10))) {
        case 107:
          return q(e, ":", ":" + X) + e;
        case 101:
          return (
            q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                X +
                (Ne(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                X +
                "$2$3$1" +
                Ke +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ne(e, t + 11)) {
        case 114:
          return X + e + Ke + q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return X + e + Ke + q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return X + e + Ke + q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return X + e + Ke + e + e;
  }
  return e;
}
var K2 = function (t, r, n, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case gf:
          t.return = cv(t.value, t.length);
          break;
        case ov:
          return _o([ii(t, { value: q(t.value, "@", "@" + X) })], o);
        case mf:
          if (t.length)
            return z2(t.props, function (i) {
              switch ($2(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return _o(
                    [ii(t, { props: [q(i, /:(read-\w+)/, ":" + Qs + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return _o(
                    [
                      ii(t, {
                        props: [q(i, /:(plac\w+)/, ":" + X + "input-$1")],
                      }),
                      ii(t, { props: [q(i, /:(plac\w+)/, ":" + Qs + "$1")] }),
                      ii(t, { props: [q(i, /:(plac\w+)/, Ke + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  Y2 = [K2],
  Q2 = function (t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (x) {
        var _ = x.getAttribute("data-emotion");
        _.indexOf(" ") !== -1 &&
          (document.head.appendChild(x), x.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Y2,
      i = {},
      a,
      s = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (x) {
          for (
            var _ = x.getAttribute("data-emotion").split(" "), g = 1;
            g < _.length;
            g++
          )
            i[_[g]] = !0;
          s.push(x);
        }
      );
    var l,
      u = [H2, G2];
    {
      var c,
        d = [
          B2,
          O2(function (x) {
            c.insert(x);
          }),
        ],
        f = V2(u.concat(o, d)),
        h = function (_) {
          return _o(I2(_), f);
        };
      l = function (_, g, p, m) {
        (c = p),
          h(_ ? _ + "{" + g.styles + "}" : g.styles),
          m && (y.inserted[g.name] = !0);
      };
    }
    var y = {
      key: r,
      sheet: new k2({
        key: r,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return y.sheet.hydrate(s), y;
  };
function Xs() {
  return (
    (Xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Xs.apply(this, arguments)
  );
}
var dv = { exports: {} },
  re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ie = typeof Symbol == "function" && Symbol.for,
  yf = Ie ? Symbol.for("react.element") : 60103,
  xf = Ie ? Symbol.for("react.portal") : 60106,
  Wl = Ie ? Symbol.for("react.fragment") : 60107,
  Ul = Ie ? Symbol.for("react.strict_mode") : 60108,
  Hl = Ie ? Symbol.for("react.profiler") : 60114,
  Gl = Ie ? Symbol.for("react.provider") : 60109,
  Kl = Ie ? Symbol.for("react.context") : 60110,
  bf = Ie ? Symbol.for("react.async_mode") : 60111,
  Yl = Ie ? Symbol.for("react.concurrent_mode") : 60111,
  Ql = Ie ? Symbol.for("react.forward_ref") : 60112,
  Xl = Ie ? Symbol.for("react.suspense") : 60113,
  X2 = Ie ? Symbol.for("react.suspense_list") : 60120,
  ql = Ie ? Symbol.for("react.memo") : 60115,
  Zl = Ie ? Symbol.for("react.lazy") : 60116,
  q2 = Ie ? Symbol.for("react.block") : 60121,
  Z2 = Ie ? Symbol.for("react.fundamental") : 60117,
  J2 = Ie ? Symbol.for("react.responder") : 60118,
  ew = Ie ? Symbol.for("react.scope") : 60119;
function kt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case yf:
        switch (((e = e.type), e)) {
          case bf:
          case Yl:
          case Wl:
          case Hl:
          case Ul:
          case Xl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Kl:
              case Ql:
              case Zl:
              case ql:
              case Gl:
                return e;
              default:
                return t;
            }
        }
      case xf:
        return t;
    }
  }
}
function fv(e) {
  return kt(e) === Yl;
}
re.AsyncMode = bf;
re.ConcurrentMode = Yl;
re.ContextConsumer = Kl;
re.ContextProvider = Gl;
re.Element = yf;
re.ForwardRef = Ql;
re.Fragment = Wl;
re.Lazy = Zl;
re.Memo = ql;
re.Portal = xf;
re.Profiler = Hl;
re.StrictMode = Ul;
re.Suspense = Xl;
re.isAsyncMode = function (e) {
  return fv(e) || kt(e) === bf;
};
re.isConcurrentMode = fv;
re.isContextConsumer = function (e) {
  return kt(e) === Kl;
};
re.isContextProvider = function (e) {
  return kt(e) === Gl;
};
re.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === yf;
};
re.isForwardRef = function (e) {
  return kt(e) === Ql;
};
re.isFragment = function (e) {
  return kt(e) === Wl;
};
re.isLazy = function (e) {
  return kt(e) === Zl;
};
re.isMemo = function (e) {
  return kt(e) === ql;
};
re.isPortal = function (e) {
  return kt(e) === xf;
};
re.isProfiler = function (e) {
  return kt(e) === Hl;
};
re.isStrictMode = function (e) {
  return kt(e) === Ul;
};
re.isSuspense = function (e) {
  return kt(e) === Xl;
};
re.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Wl ||
    e === Yl ||
    e === Hl ||
    e === Ul ||
    e === Xl ||
    e === X2 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Zl ||
        e.$$typeof === ql ||
        e.$$typeof === Gl ||
        e.$$typeof === Kl ||
        e.$$typeof === Ql ||
        e.$$typeof === Z2 ||
        e.$$typeof === J2 ||
        e.$$typeof === ew ||
        e.$$typeof === q2))
  );
};
re.typeOf = kt;
dv.exports = re;
var tw = dv.exports,
  pv = tw,
  rw = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  nw = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  hv = {};
hv[pv.ForwardRef] = rw;
hv[pv.Memo] = nw;
var ow = !0;
function iw(e, t, r) {
  var n = "";
  return (
    r.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (n += o + " ");
    }),
    n
  );
}
var mv = function (t, r, n) {
    var o = t.key + "-" + r.name;
    (n === !1 || ow === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = r.styles);
  },
  gv = function (t, r, n) {
    mv(t, r, n);
    var o = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do t.insert(r === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function aw(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    (r =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(n) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var sw = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  lw = /[A-Z]|^ms/g,
  uw = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  vv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ph = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ou = uv(function (e) {
    return vv(e) ? e : e.replace(lw, "-$&").toLowerCase();
  }),
  Eh = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(uw, function (n, o, i) {
            return (ir = { name: o, styles: i, next: ir }), o;
          });
    }
    return sw[t] !== 1 && !vv(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function qi(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (ir = { name: r.name, styles: r.styles, next: ir }), r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (ir = { name: n.name, styles: n.styles, next: ir }), (n = n.next);
        var o = r.styles + ";";
        return o;
      }
      return cw(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = ir,
          a = r(e);
        return (ir = i), qi(e, t, a);
      }
      break;
    }
  }
  if (t == null) return r;
  var s = t[r];
  return s !== void 0 ? s : r;
}
function cw(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++) n += qi(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (n += i + "{" + t[a] + "}")
          : Ph(a) && (n += Ou(i) + ":" + Eh(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var s = 0; s < a.length; s++)
          Ph(a[s]) && (n += Ou(i) + ":" + Eh(i, a[s]) + ";");
      else {
        var l = qi(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Ou(i) + ":" + l + ";";
            break;
          }
          default:
            n += i + "{" + l + "}";
        }
      }
    }
  return n;
}
var $h = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  ir,
  Sf = function (t, r, n) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    ir = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += qi(n, r, a)))
      : (i += a[0]);
    for (var s = 1; s < t.length; s++) (i += qi(n, r, t[s])), o && (i += a[s]);
    $h.lastIndex = 0;
    for (var l = "", u; (u = $h.exec(i)) !== null; ) l += "-" + u[1];
    var c = aw(i) + l;
    return { name: c, styles: i, next: ir };
  },
  dw = function (t) {
    return t();
  },
  yv = wh.useInsertionEffect ? wh.useInsertionEffect : !1,
  fw = yv || dw,
  zh = yv || C.useLayoutEffect,
  xv = C.createContext(typeof HTMLElement < "u" ? Q2({ key: "css" }) : null);
xv.Provider;
var bv = function (t) {
    return C.forwardRef(function (r, n) {
      var o = C.useContext(xv);
      return t(r, o, n);
    });
  },
  Zi = C.createContext({}),
  pw = function (t, r) {
    if (typeof r == "function") {
      var n = r(t);
      return n;
    }
    return Xs({}, t, r);
  },
  hw = _h(function (e) {
    return _h(function (t) {
      return pw(e, t);
    });
  }),
  mw = function (t) {
    var r = C.useContext(Zi);
    return (
      t.theme !== r && (r = hw(r)(t.theme)),
      C.createElement(Zi.Provider, { value: r }, t.children)
    );
  },
  Jl = bv(function (e, t) {
    var r = e.styles,
      n = Sf([r], void 0, C.useContext(Zi)),
      o = C.useRef();
    return (
      zh(
        function () {
          var i = t.key + "-global",
            a = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            s = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + n.name + '"]'
            );
          return (
            t.sheet.tags.length && (a.before = t.sheet.tags[0]),
            l !== null &&
              ((s = !0), l.setAttribute("data-emotion", i), a.hydrate([l])),
            (o.current = [a, s]),
            function () {
              a.flush();
            }
          );
        },
        [t]
      ),
      zh(
        function () {
          var i = o.current,
            a = i[0],
            s = i[1];
          if (s) {
            i[1] = !1;
            return;
          }
          if ((n.next !== void 0 && gv(t, n.next, !0), a.tags.length)) {
            var l = a.tags[a.tags.length - 1].nextElementSibling;
            (a.before = l), a.flush();
          }
          t.insert("", n, a, !1);
        },
        [t, n.name]
      ),
      null
    );
  });
function gw() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Sf(t);
}
var vw = function () {
    var t = gw.apply(void 0, arguments),
      r = "animation-" + t.name;
    return {
      name: r,
      styles: "@keyframes " + r + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  Sv = String.raw,
  wv = Sv`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  yw = () => b.jsx(Jl, { styles: wv }),
  xw = ({ scope: e = "" }) =>
    b.jsx(Jl, {
      styles: Sv`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${wv}
    `,
    });
function bw(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function qo(e = {}) {
  const {
      name: t,
      strict: r = !0,
      hookName: n = "useContext",
      providerName: o = "Provider",
      errorMessage: i,
      defaultValue: a,
    } = e,
    s = C.createContext(a);
  s.displayName = t;
  function l() {
    var u;
    const c = C.useContext(s);
    if (!c && r) {
      const d = new Error(i ?? bw(n, o));
      throw (
        ((d.name = "ContextError"),
        (u = Error.captureStackTrace) == null || u.call(Error, d, l),
        d)
      );
    }
    return c;
  }
  return [s.Provider, l, s];
}
var [Sw, ww] = qo({ strict: !1, name: "PortalManagerContext" });
function kv(e) {
  const { children: t, zIndex: r } = e;
  return b.jsx(Sw, { value: { zIndex: r }, children: t });
}
kv.displayName = "PortalManager";
var Io =
    globalThis != null && globalThis.document ? C.useLayoutEffect : C.useEffect,
  Cv = { exports: {} },
  Ct = {},
  _v = { exports: {} },
  Tv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, B) {
    var N = R.length;
    R.push(B);
    e: for (; 0 < N; ) {
      var O = (N - 1) >>> 1,
        ie = R[O];
      if (0 < o(ie, B)) (R[O] = B), (R[N] = ie), (N = O);
      else break e;
    }
  }
  function r(R) {
    return R.length === 0 ? null : R[0];
  }
  function n(R) {
    if (R.length === 0) return null;
    var B = R[0],
      N = R.pop();
    if (N !== B) {
      R[0] = N;
      e: for (var O = 0, ie = R.length, K = ie >>> 1; O < K; ) {
        var ht = 2 * (O + 1) - 1,
          Lr = R[ht],
          Ae = ht + 1,
          Zt = R[Ae];
        if (0 > o(Lr, N))
          Ae < ie && 0 > o(Zt, Lr)
            ? ((R[O] = Zt), (R[Ae] = N), (O = Ae))
            : ((R[O] = Lr), (R[ht] = N), (O = ht));
        else if (Ae < ie && 0 > o(Zt, N)) (R[O] = Zt), (R[Ae] = N), (O = Ae);
        else break e;
      }
    }
    return B;
  }
  function o(R, B) {
    var N = R.sortIndex - B.sortIndex;
    return N !== 0 ? N : R.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      s = a.now();
    e.unstable_now = function () {
      return a.now() - s;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    y = !1,
    x = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(R) {
    for (var B = r(u); B !== null; ) {
      if (B.callback === null) n(u);
      else if (B.startTime <= R)
        n(u), (B.sortIndex = B.expirationTime), t(l, B);
      else break;
      B = r(u);
    }
  }
  function k(R) {
    if (((x = !1), m(R), !y))
      if (r(l) !== null) (y = !0), me(P);
      else {
        var B = r(u);
        B !== null && it(k, B.startTime - R);
      }
  }
  function P(R, B) {
    (y = !1), x && ((x = !1), g(z), (z = -1)), (h = !0);
    var N = f;
    try {
      for (
        m(B), d = r(l);
        d !== null && (!(d.expirationTime > B) || (R && !be()));

      ) {
        var O = d.callback;
        if (typeof O == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var ie = O(d.expirationTime <= B);
          (B = e.unstable_now()),
            typeof ie == "function" ? (d.callback = ie) : d === r(l) && n(l),
            m(B);
        } else n(l);
        d = r(l);
      }
      if (d !== null) var K = !0;
      else {
        var ht = r(u);
        ht !== null && it(k, ht.startTime - B), (K = !1);
      }
      return K;
    } finally {
      (d = null), (f = N), (h = !1);
    }
  }
  var $ = !1,
    E = null,
    z = -1,
    F = 5,
    L = -1;
  function be() {
    return !(e.unstable_now() - L < F);
  }
  function ze() {
    if (E !== null) {
      var R = e.unstable_now();
      L = R;
      var B = !0;
      try {
        B = E(!0, R);
      } finally {
        B ? De() : (($ = !1), (E = null));
      }
    } else $ = !1;
  }
  var De;
  if (typeof p == "function")
    De = function () {
      p(ze);
    };
  else if (typeof MessageChannel < "u") {
    var Te = new MessageChannel(),
      qt = Te.port2;
    (Te.port1.onmessage = ze),
      (De = function () {
        qt.postMessage(null);
      });
  } else
    De = function () {
      _(ze, 0);
    };
  function me(R) {
    (E = R), $ || (($ = !0), De());
  }
  function it(R, B) {
    z = _(function () {
      R(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || h || ((y = !0), me(P));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (e.unstable_next = function (R) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = f;
      }
      var N = f;
      f = B;
      try {
        return R();
      } finally {
        f = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, B) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var N = f;
      f = R;
      try {
        return B();
      } finally {
        f = N;
      }
    }),
    (e.unstable_scheduleCallback = function (R, B, N) {
      var O = e.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? O + N : O))
          : (N = O),
        R)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = N + ie),
        (R = {
          id: c++,
          callback: B,
          priorityLevel: R,
          startTime: N,
          expirationTime: ie,
          sortIndex: -1,
        }),
        N > O
          ? ((R.sortIndex = N),
            t(u, R),
            r(l) === null &&
              R === r(u) &&
              (x ? (g(z), (z = -1)) : (x = !0), it(k, N - O)))
          : ((R.sortIndex = ie), t(l, R), y || h || ((y = !0), me(P))),
        R
      );
    }),
    (e.unstable_shouldYield = be),
    (e.unstable_wrapCallback = function (R) {
      var B = f;
      return function () {
        var N = f;
        f = B;
        try {
          return R.apply(this, arguments);
        } finally {
          f = N;
        }
      };
    });
})(Tv);
_v.exports = Tv;
var kw = _v.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pv = C,
  St = kw;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1;
    r < arguments.length;
    r++
  )
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ev = new Set(),
  Ji = {};
function Kn(e, t) {
  Do(e, t), Do(e + "Capture", t);
}
function Do(e, t) {
  for (Ji[e] = t, e = 0; e < t.length; e++) Ev.add(t[e]);
}
var $r = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Hc = Object.prototype.hasOwnProperty,
  Cw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ah = {},
  Rh = {};
function _w(e) {
  return Hc.call(Rh, e)
    ? !0
    : Hc.call(Ah, e)
    ? !1
    : Cw.test(e)
    ? (Rh[e] = !0)
    : ((Ah[e] = !0), !1);
}
function Tw(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Pw(e, t, r, n) {
  if (t === null || typeof t > "u" || Tw(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function nt(e, t, r, n, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = n),
    (this.attributeNamespace = o),
    (this.mustUseProperty = r),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new nt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ue[t] = new nt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ue[e] = new nt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ue[e] = new nt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new nt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ue[e] = new nt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ue[e] = new nt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ue[e] = new nt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ue[e] = new nt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wf = /[\-:]([a-z])/g;
function kf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wf, kf);
    Ue[t] = new nt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(wf, kf);
    Ue[t] = new nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(wf, kf);
  Ue[t] = new nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ue[e] = new nt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ue.xlinkHref = new nt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ue[e] = new nt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cf(e, t, r, n) {
  var o = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (o !== null
    ? o.type !== 0
    : n ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Pw(t, r, o, n) && (r = null),
    n || o === null
      ? _w(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
      : o.mustUseProperty
      ? (e[o.propertyName] = r === null ? (o.type === 3 ? !1 : "") : r)
      : ((t = o.attributeName),
        (n = o.attributeNamespace),
        r === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (r = o === 3 || (o === 4 && r === !0) ? "" : "" + r),
            n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var Fr = Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ka = Symbol.for("react.element"),
  ro = Symbol.for("react.portal"),
  no = Symbol.for("react.fragment"),
  _f = Symbol.for("react.strict_mode"),
  Gc = Symbol.for("react.profiler"),
  $v = Symbol.for("react.provider"),
  zv = Symbol.for("react.context"),
  Tf = Symbol.for("react.forward_ref"),
  Kc = Symbol.for("react.suspense"),
  Yc = Symbol.for("react.suspense_list"),
  Pf = Symbol.for("react.memo"),
  Wr = Symbol.for("react.lazy"),
  Av = Symbol.for("react.offscreen"),
  Mh = Symbol.iterator;
function ai(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mh && e[Mh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xe = Object.assign,
  Nu;
function xi(e) {
  if (Nu === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Nu = (t && t[1]) || "";
    }
  return (
    `
` +
    Nu +
    e
  );
}
var Wu = !1;
function Uu(e, t) {
  if (!e || Wu) return "";
  Wu = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = n.stack.split(`
`),
          a = o.length - 1,
          s = i.length - 1;
        1 <= a && 0 <= s && o[a] !== i[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (o[a] !== i[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || o[a] !== i[s])) {
                var l =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (Wu = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? xi(e) : "";
}
function Ew(e) {
  switch (e.tag) {
    case 5:
      return xi(e.type);
    case 16:
      return xi("Lazy");
    case 13:
      return xi("Suspense");
    case 19:
      return xi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Uu(e.type, !1)), e;
    case 11:
      return (e = Uu(e.type.render, !1)), e;
    case 1:
      return (e = Uu(e.type, !0)), e;
    default:
      return "";
  }
}
function Qc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case no:
      return "Fragment";
    case ro:
      return "Portal";
    case Gc:
      return "Profiler";
    case _f:
      return "StrictMode";
    case Kc:
      return "Suspense";
    case Yc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case zv:
        return (e.displayName || "Context") + ".Consumer";
      case $v:
        return (e._context.displayName || "Context") + ".Provider";
      case Tf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Pf:
        return (
          (t = e.displayName || null), t !== null ? t : Qc(e.type) || "Memo"
        );
      case Wr:
        (t = e._payload), (e = e._init);
        try {
          return Qc(e(t));
        } catch {}
    }
  return null;
}
function $w(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qc(t);
    case 8:
      return t === _f ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Rv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function zw(e) {
  var t = Rv(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var o = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (n = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (a) {
          n = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ya(e) {
  e._valueTracker || (e._valueTracker = zw(e));
}
function Mv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return (
    e && (n = Rv(e) ? (e.checked ? "true" : "false") : e.value),
    (e = n),
    e !== r ? (t.setValue(e), !0) : !1
  );
}
function qs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xc(e, t) {
  var r = t.checked;
  return xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? e._wrapperState.initialChecked,
  });
}
function jh(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = ln(t.value != null ? t.value : r)),
    (e._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function jv(e, t) {
  (t = t.checked), t != null && Cf(e, "checked", t, !1);
}
function qc(e, t) {
  jv(e, t);
  var r = ln(t.value),
    n = t.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
      : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zc(e, t.type, r)
    : t.hasOwnProperty("defaultValue") && Zc(e, t.type, ln(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Fh(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      r || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (r = e.name),
    r !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    r !== "" && (e.name = r);
}
function Zc(e, t, r) {
  (t !== "number" || qs(e.ownerDocument) !== e) &&
    (r == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var bi = Array.isArray;
function To(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
    for (r = 0; r < e.length; r++)
      (o = t.hasOwnProperty("$" + e[r].value)),
        e[r].selected !== o && (e[r].selected = o),
        o && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + ln(r), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === r) {
        (e[o].selected = !0), n && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Jc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Lh(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(A(92));
      if (bi(r)) {
        if (1 < r.length) throw Error(A(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: ln(r) };
}
function Fv(e, t) {
  var r = ln(t.value),
    n = ln(t.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== e.value && (e.value = r),
    t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
    n != null && (e.defaultValue = "" + n);
}
function Ih(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lv(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ed(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Lv(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Qa,
  Iv = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Qa = Qa || document.createElement("div"),
          Qa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Qa.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ea(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var $i = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Aw = ["Webkit", "ms", "Moz", "O"];
Object.keys($i).forEach(function (e) {
  Aw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($i[t] = $i[e]);
  });
});
function Dv(e, t, r) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : r || typeof t != "number" || t === 0 || ($i.hasOwnProperty(e) && $i[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bv(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        o = Dv(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, o) : (e[r] = o);
    }
}
var Rw = xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function td(e, t) {
  if (t) {
    if (Rw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function rd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var nd = null;
function Ef(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var od = null,
  Po = null,
  Eo = null;
function Dh(e) {
  if ((e = Pa(e))) {
    if (typeof od != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = ou(t)), od(e.stateNode, e.type, t));
  }
}
function Vv(e) {
  Po ? (Eo ? Eo.push(e) : (Eo = [e])) : (Po = e);
}
function Ov() {
  if (Po) {
    var e = Po,
      t = Eo;
    if (((Eo = Po = null), Dh(e), t)) for (e = 0; e < t.length; e++) Dh(t[e]);
  }
}
function Nv(e, t) {
  return e(t);
}
function Wv() {}
var Hu = !1;
function Uv(e, t, r) {
  if (Hu) return e(t, r);
  Hu = !0;
  try {
    return Nv(e, t, r);
  } finally {
    (Hu = !1), (Po !== null || Eo !== null) && (Wv(), Ov());
  }
}
function ta(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ou(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((e = e.type),
        (n = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(A(231, t, typeof r));
  return r;
}
var id = !1;
if ($r)
  try {
    var si = {};
    Object.defineProperty(si, "passive", {
      get: function () {
        id = !0;
      },
    }),
      window.addEventListener("test", si, si),
      window.removeEventListener("test", si, si);
  } catch {
    id = !1;
  }
function Mw(e, t, r, n, o, i, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var zi = !1,
  Zs = null,
  Js = !1,
  ad = null,
  jw = {
    onError: function (e) {
      (zi = !0), (Zs = e);
    },
  };
function Fw(e, t, r, n, o, i, a, s, l) {
  (zi = !1), (Zs = null), Mw.apply(jw, arguments);
}
function Lw(e, t, r, n, o, i, a, s, l) {
  if ((Fw.apply(this, arguments), zi)) {
    if (zi) {
      var u = Zs;
      (zi = !1), (Zs = null);
    } else throw Error(A(198));
    Js || ((Js = !0), (ad = u));
  }
}
function Yn(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function Hv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Bh(e) {
  if (Yn(e) !== e) throw Error(A(188));
}
function Iw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Yn(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var o = r.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((n = o.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === r) return Bh(o), e;
        if (i === n) return Bh(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (r.return !== n.return) (r = o), (n = i);
    else {
      for (var a = !1, s = o.child; s; ) {
        if (s === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        if (s === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = i.child; s; ) {
          if (s === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          if (s === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(A(189));
      }
    }
    if (r.alternate !== n) throw Error(A(190));
  }
  if (r.tag !== 3) throw Error(A(188));
  return r.stateNode.current === r ? e : t;
}
function Gv(e) {
  return (e = Iw(e)), e !== null ? Kv(e) : null;
}
function Kv(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Kv(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Yv = St.unstable_scheduleCallback,
  Vh = St.unstable_cancelCallback,
  Dw = St.unstable_shouldYield,
  Bw = St.unstable_requestPaint,
  ke = St.unstable_now,
  Vw = St.unstable_getCurrentPriorityLevel,
  $f = St.unstable_ImmediatePriority,
  Qv = St.unstable_UserBlockingPriority,
  el = St.unstable_NormalPriority,
  Ow = St.unstable_LowPriority,
  Xv = St.unstable_IdlePriority,
  eu = null,
  ur = null;
function Nw(e) {
  if (ur && typeof ur.onCommitFiberRoot == "function")
    try {
      ur.onCommitFiberRoot(eu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Gt = Math.clz32 ? Math.clz32 : Hw,
  Ww = Math.log,
  Uw = Math.LN2;
function Hw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ww(e) / Uw) | 0)) | 0;
}
var Xa = 64,
  qa = 4194304;
function Si(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function tl(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = r & 268435455;
  if (a !== 0) {
    var s = a & ~o;
    s !== 0 ? (n = Si(s)) : ((i &= a), i !== 0 && (n = Si(i)));
  } else (a = r & ~o), a !== 0 ? (n = Si(a)) : i !== 0 && (n = Si(i));
  if (n === 0) return 0;
  if (
    t !== 0 &&
    t !== n &&
    !(t & o) &&
    ((o = n & -n), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= n; 0 < t; )
      (r = 31 - Gt(t)), (o = 1 << r), (n |= e[r]), (t &= ~o);
  return n;
}
function Gw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kw(e, t) {
  for (
    var r = e.suspendedLanes,
      n = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Gt(i),
      s = 1 << a,
      l = o[a];
    l === -1
      ? (!(s & r) || s & n) && (o[a] = Gw(s, t))
      : l <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function sd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qv() {
  var e = Xa;
  return (Xa <<= 1), !(Xa & 4194240) && (Xa = 64), e;
}
function Gu(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function _a(e, t, r) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Gt(t)),
    (e[t] = r);
}
function Yw(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var o = 31 - Gt(r),
      i = 1 << o;
    (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~i);
  }
}
function zf(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - Gt(r),
      o = 1 << n;
    (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
  }
}
var te = 0;
function Zv(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jv,
  Af,
  ey,
  ty,
  ry,
  ld = !1,
  Za = [],
  Zr = null,
  Jr = null,
  en = null,
  ra = new Map(),
  na = new Map(),
  Gr = [],
  Qw =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Oh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zr = null;
      break;
    case "dragenter":
    case "dragleave":
      Jr = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      ra.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      na.delete(t.pointerId);
  }
}
function li(e, t, r, n, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Pa(t)), t !== null && Af(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Xw(e, t, r, n, o) {
  switch (t) {
    case "focusin":
      return (Zr = li(Zr, e, t, r, n, o)), !0;
    case "dragenter":
      return (Jr = li(Jr, e, t, r, n, o)), !0;
    case "mouseover":
      return (en = li(en, e, t, r, n, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return ra.set(i, li(ra.get(i) || null, e, t, r, n, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), na.set(i, li(na.get(i) || null, e, t, r, n, o)), !0
      );
  }
  return !1;
}
function ny(e) {
  var t = En(e.target);
  if (t !== null) {
    var r = Yn(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = Hv(r)), t !== null)) {
          (e.blockedOn = t),
            ry(e.priority, function () {
              ey(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ts(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = ud(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (nd = n), r.target.dispatchEvent(n), (nd = null);
    } else return (t = Pa(r)), t !== null && Af(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function Nh(e, t, r) {
  Ts(e) && r.delete(t);
}
function qw() {
  (ld = !1),
    Zr !== null && Ts(Zr) && (Zr = null),
    Jr !== null && Ts(Jr) && (Jr = null),
    en !== null && Ts(en) && (en = null),
    ra.forEach(Nh),
    na.forEach(Nh);
}
function ui(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ld ||
      ((ld = !0),
      St.unstable_scheduleCallback(St.unstable_NormalPriority, qw)));
}
function oa(e) {
  function t(o) {
    return ui(o, e);
  }
  if (0 < Za.length) {
    ui(Za[0], e);
    for (var r = 1; r < Za.length; r++) {
      var n = Za[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (
    Zr !== null && ui(Zr, e),
      Jr !== null && ui(Jr, e),
      en !== null && ui(en, e),
      ra.forEach(t),
      na.forEach(t),
      r = 0;
    r < Gr.length;
    r++
  )
    (n = Gr[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < Gr.length && ((r = Gr[0]), r.blockedOn === null); )
    ny(r), r.blockedOn === null && Gr.shift();
}
var $o = Fr.ReactCurrentBatchConfig,
  rl = !0;
function Zw(e, t, r, n) {
  var o = te,
    i = $o.transition;
  $o.transition = null;
  try {
    (te = 1), Rf(e, t, r, n);
  } finally {
    (te = o), ($o.transition = i);
  }
}
function Jw(e, t, r, n) {
  var o = te,
    i = $o.transition;
  $o.transition = null;
  try {
    (te = 4), Rf(e, t, r, n);
  } finally {
    (te = o), ($o.transition = i);
  }
}
function Rf(e, t, r, n) {
  if (rl) {
    var o = ud(e, t, r, n);
    if (o === null) rc(e, t, n, nl, r), Oh(e, n);
    else if (Xw(o, e, t, r, n)) n.stopPropagation();
    else if ((Oh(e, n), t & 4 && -1 < Qw.indexOf(e))) {
      for (; o !== null; ) {
        var i = Pa(o);
        if (
          (i !== null && Jv(i),
          (i = ud(e, t, r, n)),
          i === null && rc(e, t, n, nl, r),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && n.stopPropagation();
    } else rc(e, t, n, null, r);
  }
}
var nl = null;
function ud(e, t, r, n) {
  if (((nl = null), (e = Ef(n)), (e = En(e)), e !== null))
    if (((t = Yn(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = Hv(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (nl = e), null;
}
function oy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vw()) {
        case $f:
          return 1;
        case Qv:
          return 4;
        case el:
        case Ow:
          return 16;
        case Xv:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qr = null,
  Mf = null,
  Ps = null;
function iy() {
  if (Ps) return Ps;
  var e,
    t = Mf,
    r = t.length,
    n,
    o = "value" in Qr ? Qr.value : Qr.textContent,
    i = o.length;
  for (e = 0; e < r && t[e] === o[e]; e++);
  var a = r - e;
  for (n = 1; n <= a && t[r - n] === o[i - n]; n++);
  return (Ps = o.slice(e, 1 < n ? 1 - n : void 0));
}
function Es(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ja() {
  return !0;
}
function Wh() {
  return !1;
}
function _t(e) {
  function t(r, n, o, i, a) {
    (this._reactName = r),
      (this._targetInst = o),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ja
        : Wh),
      (this.isPropagationStopped = Wh),
      this
    );
  }
  return (
    xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Ja));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Ja));
      },
      persist: function () {},
      isPersistent: Ja,
    }),
    t
  );
}
var Zo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  jf = _t(Zo),
  Ta = xe({}, Zo, { view: 0, detail: 0 }),
  ek = _t(Ta),
  Ku,
  Yu,
  ci,
  tu = xe({}, Ta, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ff,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ci &&
            (ci && e.type === "mousemove"
              ? ((Ku = e.screenX - ci.screenX), (Yu = e.screenY - ci.screenY))
              : (Yu = Ku = 0),
            (ci = e)),
          Ku);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yu;
    },
  }),
  Uh = _t(tu),
  tk = xe({}, tu, { dataTransfer: 0 }),
  rk = _t(tk),
  nk = xe({}, Ta, { relatedTarget: 0 }),
  Qu = _t(nk),
  ok = xe({}, Zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ik = _t(ok),
  ak = xe({}, Zo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sk = _t(ak),
  lk = xe({}, Zo, { data: 0 }),
  Hh = _t(lk),
  uk = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ck = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dk = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fk(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dk[e]) ? !!t[e] : !1;
}
function Ff() {
  return fk;
}
var pk = xe({}, Ta, {
    key: function (e) {
      if (e.key) {
        var t = uk[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Es(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ck[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ff,
    charCode: function (e) {
      return e.type === "keypress" ? Es(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Es(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  hk = _t(pk),
  mk = xe({}, tu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gh = _t(mk),
  gk = xe({}, Ta, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ff,
  }),
  vk = _t(gk),
  yk = xe({}, Zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xk = _t(yk),
  bk = xe({}, tu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Sk = _t(bk),
  wk = [9, 13, 27, 32],
  Lf = $r && "CompositionEvent" in window,
  Ai = null;
$r && "documentMode" in document && (Ai = document.documentMode);
var kk = $r && "TextEvent" in window && !Ai,
  ay = $r && (!Lf || (Ai && 8 < Ai && 11 >= Ai)),
  Kh = " ",
  Yh = !1;
function sy(e, t) {
  switch (e) {
    case "keyup":
      return wk.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ly(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var oo = !1;
function Ck(e, t) {
  switch (e) {
    case "compositionend":
      return ly(t);
    case "keypress":
      return t.which !== 32 ? null : ((Yh = !0), Kh);
    case "textInput":
      return (e = t.data), e === Kh && Yh ? null : e;
    default:
      return null;
  }
}
function _k(e, t) {
  if (oo)
    return e === "compositionend" || (!Lf && sy(e, t))
      ? ((e = iy()), (Ps = Mf = Qr = null), (oo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ay && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Tk = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Qh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Tk[e.type] : t === "textarea";
}
function uy(e, t, r, n) {
  Vv(n),
    (t = ol(t, "onChange")),
    0 < t.length &&
      ((r = new jf("onChange", "change", null, r, n)),
      e.push({ event: r, listeners: t }));
}
var Ri = null,
  ia = null;
function Pk(e) {
  by(e, 0);
}
function ru(e) {
  var t = so(e);
  if (Mv(t)) return e;
}
function Ek(e, t) {
  if (e === "change") return t;
}
var cy = !1;
if ($r) {
  var Xu;
  if ($r) {
    var qu = "oninput" in document;
    if (!qu) {
      var Xh = document.createElement("div");
      Xh.setAttribute("oninput", "return;"),
        (qu = typeof Xh.oninput == "function");
    }
    Xu = qu;
  } else Xu = !1;
  cy = Xu && (!document.documentMode || 9 < document.documentMode);
}
function qh() {
  Ri && (Ri.detachEvent("onpropertychange", dy), (ia = Ri = null));
}
function dy(e) {
  if (e.propertyName === "value" && ru(ia)) {
    var t = [];
    uy(t, ia, e, Ef(e)), Uv(Pk, t);
  }
}
function $k(e, t, r) {
  e === "focusin"
    ? (qh(), (Ri = t), (ia = r), Ri.attachEvent("onpropertychange", dy))
    : e === "focusout" && qh();
}
function zk(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ru(ia);
}
function Ak(e, t) {
  if (e === "click") return ru(t);
}
function Rk(e, t) {
  if (e === "input" || e === "change") return ru(t);
}
function Mk(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Xt = typeof Object.is == "function" ? Object.is : Mk;
function aa(e, t) {
  if (Xt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var o = r[n];
    if (!Hc.call(t, o) || !Xt(e[o], t[o])) return !1;
  }
  return !0;
}
function Zh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jh(e, t) {
  var r = Zh(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t))
        return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Zh(r);
  }
}
function fy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? fy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function py() {
  for (var e = window, t = qs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = qs(e.document);
  }
  return t;
}
function If(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function jk(e) {
  var t = py(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (
    t !== r &&
    r &&
    r.ownerDocument &&
    fy(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && If(r)) {
      if (
        ((t = n.start),
        (e = n.end),
        e === void 0 && (e = t),
        "selectionStart" in r)
      )
        (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (
        ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = r.textContent.length,
          i = Math.min(n.start, o);
        (n = n.end === void 0 ? i : Math.min(n.end, o)),
          !e.extend && i > n && ((o = n), (n = i), (i = o)),
          (o = Jh(r, i));
        var a = Jh(r, n);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > n
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
      (e = t[r]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Fk = $r && "documentMode" in document && 11 >= document.documentMode,
  io = null,
  cd = null,
  Mi = null,
  dd = !1;
function em(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  dd ||
    io == null ||
    io !== qs(n) ||
    ((n = io),
    "selectionStart" in n && If(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Mi && aa(Mi, n)) ||
      ((Mi = n),
      (n = ol(cd, "onSelect")),
      0 < n.length &&
        ((t = new jf("onSelect", "select", null, t, r)),
        e.push({ event: t, listeners: n }),
        (t.target = io))));
}
function es(e, t) {
  var r = {};
  return (
    (r[e.toLowerCase()] = t.toLowerCase()),
    (r["Webkit" + e] = "webkit" + t),
    (r["Moz" + e] = "moz" + t),
    r
  );
}
var ao = {
    animationend: es("Animation", "AnimationEnd"),
    animationiteration: es("Animation", "AnimationIteration"),
    animationstart: es("Animation", "AnimationStart"),
    transitionend: es("Transition", "TransitionEnd"),
  },
  Zu = {},
  hy = {};
$r &&
  ((hy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ao.animationend.animation,
    delete ao.animationiteration.animation,
    delete ao.animationstart.animation),
  "TransitionEvent" in window || delete ao.transitionend.transition);
function nu(e) {
  if (Zu[e]) return Zu[e];
  if (!ao[e]) return e;
  var t = ao[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in hy) return (Zu[e] = t[r]);
  return e;
}
var my = nu("animationend"),
  gy = nu("animationiteration"),
  vy = nu("animationstart"),
  yy = nu("transitionend"),
  xy = new Map(),
  tm =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function fn(e, t) {
  xy.set(e, t), Kn(t, [e]);
}
for (var Ju = 0; Ju < tm.length; Ju++) {
  var ec = tm[Ju],
    Lk = ec.toLowerCase(),
    Ik = ec[0].toUpperCase() + ec.slice(1);
  fn(Lk, "on" + Ik);
}
fn(my, "onAnimationEnd");
fn(gy, "onAnimationIteration");
fn(vy, "onAnimationStart");
fn("dblclick", "onDoubleClick");
fn("focusin", "onFocus");
fn("focusout", "onBlur");
fn(yy, "onTransitionEnd");
Do("onMouseEnter", ["mouseout", "mouseover"]);
Do("onMouseLeave", ["mouseout", "mouseover"]);
Do("onPointerEnter", ["pointerout", "pointerover"]);
Do("onPointerLeave", ["pointerout", "pointerover"]);
Kn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Kn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Kn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Kn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var wi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Dk = new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));
function rm(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), Lw(n, t, void 0, e), (e.currentTarget = null);
}
function by(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      o = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = n.length - 1; 0 <= a; a--) {
          var s = n[a],
            l = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), l !== i && o.isPropagationStopped())) break e;
          rm(o, s, u), (i = l);
        }
      else
        for (a = 0; a < n.length; a++) {
          if (
            ((s = n[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          rm(o, s, u), (i = l);
        }
    }
  }
  if (Js) throw ((e = ad), (Js = !1), (ad = null), e);
}
function le(e, t) {
  var r = t[gd];
  r === void 0 && (r = t[gd] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Sy(t, e, 2, !1), r.add(n));
}
function tc(e, t, r) {
  var n = 0;
  t && (n |= 4), Sy(r, e, n, t);
}
var ts = "_reactListening" + Math.random().toString(36).slice(2);
function sa(e) {
  if (!e[ts]) {
    (e[ts] = !0),
      Ev.forEach(function (r) {
        r !== "selectionchange" && (Dk.has(r) || tc(r, !1, e), tc(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ts] || ((t[ts] = !0), tc("selectionchange", !1, t));
  }
}
function Sy(e, t, r, n) {
  switch (oy(t)) {
    case 1:
      var o = Zw;
      break;
    case 4:
      o = Jw;
      break;
    default:
      o = Rf;
  }
  (r = o.bind(null, t, r, e)),
    (o = void 0),
    !id ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    n
      ? o !== void 0
        ? e.addEventListener(t, r, { capture: !0, passive: o })
        : e.addEventListener(t, r, !0)
      : o !== void 0
      ? e.addEventListener(t, r, { passive: o })
      : e.addEventListener(t, r, !1);
}
function rc(e, t, r, n, o) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var a = n.tag;
      if (a === 3 || a === 4) {
        var s = n.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (a === 4)
          for (a = n.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = En(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            n = i = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      n = n.return;
    }
  Uv(function () {
    var u = i,
      c = Ef(r),
      d = [];
    e: {
      var f = xy.get(e);
      if (f !== void 0) {
        var h = jf,
          y = e;
        switch (e) {
          case "keypress":
            if (Es(r) === 0) break e;
          case "keydown":
          case "keyup":
            h = hk;
            break;
          case "focusin":
            (y = "focus"), (h = Qu);
            break;
          case "focusout":
            (y = "blur"), (h = Qu);
            break;
          case "beforeblur":
          case "afterblur":
            h = Qu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Uh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = rk;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = vk;
            break;
          case my:
          case gy:
          case vy:
            h = ik;
            break;
          case yy:
            h = xk;
            break;
          case "scroll":
            h = ek;
            break;
          case "wheel":
            h = Sk;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = sk;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Gh;
        }
        var x = (t & 4) !== 0,
          _ = !x && e === "scroll",
          g = x ? (f !== null ? f + "Capture" : null) : f;
        x = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              g !== null && ((k = ta(p, g)), k != null && x.push(la(p, k, m)))),
            _)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((f = new h(f, y, null, r, c)), d.push({ event: f, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            r !== nd &&
            (y = r.relatedTarget || r.fromElement) &&
            (En(y) || y[zr]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((y = r.relatedTarget || r.toElement),
              (h = u),
              (y = y ? En(y) : null),
              y !== null &&
                ((_ = Yn(y)), y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = u)),
          h !== y)
        ) {
          if (
            ((x = Uh),
            (k = "onMouseLeave"),
            (g = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Gh),
              (k = "onPointerLeave"),
              (g = "onPointerEnter"),
              (p = "pointer")),
            (_ = h == null ? f : so(h)),
            (m = y == null ? f : so(y)),
            (f = new x(k, p + "leave", h, r, c)),
            (f.target = _),
            (f.relatedTarget = m),
            (k = null),
            En(c) === u &&
              ((x = new x(g, p + "enter", y, r, c)),
              (x.target = m),
              (x.relatedTarget = _),
              (k = x)),
            (_ = k),
            h && y)
          )
            t: {
              for (x = h, g = y, p = 0, m = x; m; m = eo(m)) p++;
              for (m = 0, k = g; k; k = eo(k)) m++;
              for (; 0 < p - m; ) (x = eo(x)), p--;
              for (; 0 < m - p; ) (g = eo(g)), m--;
              for (; p--; ) {
                if (x === g || (g !== null && x === g.alternate)) break t;
                (x = eo(x)), (g = eo(g));
              }
              x = null;
            }
          else x = null;
          h !== null && nm(d, f, h, x, !1),
            y !== null && _ !== null && nm(d, _, y, x, !0);
        }
      }
      e: {
        if (
          ((f = u ? so(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var P = Ek;
        else if (Qh(f))
          if (cy) P = Rk;
          else {
            P = zk;
            var $ = $k;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (P = Ak);
        if (P && (P = P(e, u))) {
          uy(d, P, r, c);
          break e;
        }
        $ && $(e, f, u),
          e === "focusout" &&
            ($ = f._wrapperState) &&
            $.controlled &&
            f.type === "number" &&
            Zc(f, "number", f.value);
      }
      switch ((($ = u ? so(u) : window), e)) {
        case "focusin":
          (Qh($) || $.contentEditable === "true") &&
            ((io = $), (cd = u), (Mi = null));
          break;
        case "focusout":
          Mi = cd = io = null;
          break;
        case "mousedown":
          dd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (dd = !1), em(d, r, c);
          break;
        case "selectionchange":
          if (Fk) break;
        case "keydown":
        case "keyup":
          em(d, r, c);
      }
      var E;
      if (Lf)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        oo
          ? sy(e, r) && (z = "onCompositionEnd")
          : e === "keydown" && r.keyCode === 229 && (z = "onCompositionStart");
      z &&
        (ay &&
          r.locale !== "ko" &&
          (oo || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && oo && (E = iy())
            : ((Qr = c),
              (Mf = "value" in Qr ? Qr.value : Qr.textContent),
              (oo = !0))),
        ($ = ol(u, z)),
        0 < $.length &&
          ((z = new Hh(z, e, null, r, c)),
          d.push({ event: z, listeners: $ }),
          E ? (z.data = E) : ((E = ly(r)), E !== null && (z.data = E)))),
        (E = kk ? Ck(e, r) : _k(e, r)) &&
          ((u = ol(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Hh("onBeforeInput", "beforeinput", null, r, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    by(d, t);
  });
}
function la(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function ol(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ta(e, r)),
      i != null && n.unshift(la(e, i, o)),
      (i = ta(e, t)),
      i != null && n.push(la(e, i, o))),
      (e = e.return);
  }
  return n;
}
function eo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function nm(e, t, r, n, o) {
  for (var i = t._reactName, a = []; r !== null && r !== n; ) {
    var s = r,
      l = s.alternate,
      u = s.stateNode;
    if (l !== null && l === n) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((l = ta(r, i)), l != null && a.unshift(la(r, l, s)))
        : o || ((l = ta(r, i)), l != null && a.push(la(r, l, s)))),
      (r = r.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Bk = /\r\n?/g,
  Vk = /\u0000|\uFFFD/g;
function om(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Bk,
      `
`
    )
    .replace(Vk, "");
}
function rs(e, t, r) {
  if (((t = om(t)), om(e) !== t && r)) throw Error(A(425));
}
function il() {}
var fd = null,
  pd = null;
function hd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var md = typeof setTimeout == "function" ? setTimeout : void 0,
  Ok = typeof clearTimeout == "function" ? clearTimeout : void 0,
  im = typeof Promise == "function" ? Promise : void 0,
  Nk =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof im < "u"
      ? function (e) {
          return im.resolve(null).then(e).catch(Wk);
        }
      : md;
function Wk(e) {
  setTimeout(function () {
    throw e;
  });
}
function nc(e, t) {
  var r = t,
    n = 0;
  do {
    var o = r.nextSibling;
    if ((e.removeChild(r), o && o.nodeType === 8))
      if (((r = o.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(o), oa(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = o;
  } while (r);
  oa(t);
}
function tn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function am(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Jo = Math.random().toString(36).slice(2),
  ar = "__reactFiber$" + Jo,
  ua = "__reactProps$" + Jo,
  zr = "__reactContainer$" + Jo,
  gd = "__reactEvents$" + Jo,
  Uk = "__reactListeners$" + Jo,
  Hk = "__reactHandles$" + Jo;
function En(e) {
  var t = e[ar];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[zr] || r[ar])) {
      if (
        ((r = t.alternate),
        t.child !== null || (r !== null && r.child !== null))
      )
        for (e = am(e); e !== null; ) {
          if ((r = e[ar])) return r;
          e = am(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Pa(e) {
  return (
    (e = e[ar] || e[zr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function so(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function ou(e) {
  return e[ua] || null;
}
var vd = [],
  lo = -1;
function pn(e) {
  return { current: e };
}
function ce(e) {
  0 > lo || ((e.current = vd[lo]), (vd[lo] = null), lo--);
}
function ae(e, t) {
  lo++, (vd[lo] = e.current), (e.current = t);
}
var un = {},
  Xe = pn(un),
  ut = pn(!1),
  Vn = un;
function Bo(e, t) {
  var r = e.type.contextTypes;
  if (!r) return un;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
    return n.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in r) o[i] = t[i];
  return (
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ct(e) {
  return (e = e.childContextTypes), e != null;
}
function al() {
  ce(ut), ce(Xe);
}
function sm(e, t, r) {
  if (Xe.current !== un) throw Error(A(168));
  ae(Xe, t), ae(ut, r);
}
function wy(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var o in n) if (!(o in t)) throw Error(A(108, $w(e) || "Unknown", o));
  return xe({}, r, n);
}
function sl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
    (Vn = Xe.current),
    ae(Xe, e),
    ae(ut, ut.current),
    !0
  );
}
function lm(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(A(169));
  r
    ? ((e = wy(e, t, Vn)),
      (n.__reactInternalMemoizedMergedChildContext = e),
      ce(ut),
      ce(Xe),
      ae(Xe, e))
    : ce(ut),
    ae(ut, r);
}
var vr = null,
  iu = !1,
  oc = !1;
function ky(e) {
  vr === null ? (vr = [e]) : vr.push(e);
}
function Gk(e) {
  (iu = !0), ky(e);
}
function hn() {
  if (!oc && vr !== null) {
    oc = !0;
    var e = 0,
      t = te;
    try {
      var r = vr;
      for (te = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (vr = null), (iu = !1);
    } catch (o) {
      throw (vr !== null && (vr = vr.slice(e + 1)), Yv($f, hn), o);
    } finally {
      (te = t), (oc = !1);
    }
  }
  return null;
}
var uo = [],
  co = 0,
  ll = null,
  ul = 0,
  At = [],
  Rt = 0,
  On = null,
  br = 1,
  Sr = "";
function Sn(e, t) {
  (uo[co++] = ul), (uo[co++] = ll), (ll = e), (ul = t);
}
function Cy(e, t, r) {
  (At[Rt++] = br), (At[Rt++] = Sr), (At[Rt++] = On), (On = e);
  var n = br;
  e = Sr;
  var o = 32 - Gt(n) - 1;
  (n &= ~(1 << o)), (r += 1);
  var i = 32 - Gt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (n & ((1 << a) - 1)).toString(32)),
      (n >>= a),
      (o -= a),
      (br = (1 << (32 - Gt(t) + o)) | (r << o) | n),
      (Sr = i + e);
  } else (br = (1 << i) | (r << o) | n), (Sr = e);
}
function Df(e) {
  e.return !== null && (Sn(e, 1), Cy(e, 1, 0));
}
function Bf(e) {
  for (; e === ll; )
    (ll = uo[--co]), (uo[co] = null), (ul = uo[--co]), (uo[co] = null);
  for (; e === On; )
    (On = At[--Rt]),
      (At[Rt] = null),
      (Sr = At[--Rt]),
      (At[Rt] = null),
      (br = At[--Rt]),
      (At[Rt] = null);
}
var xt = null,
  vt = null,
  pe = !1,
  Wt = null;
function _y(e, t) {
  var r = Mt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = t),
    (r.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function um(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (
        (t =
          t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xt = e), (vt = tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xt = e), (vt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((r = On !== null ? { id: br, overflow: Sr } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Mt(18, null, null, 0)),
            (r.stateNode = t),
            (r.return = e),
            (e.child = r),
            (xt = e),
            (vt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function yd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xd(e) {
  if (pe) {
    var t = vt;
    if (t) {
      var r = t;
      if (!um(e, t)) {
        if (yd(e)) throw Error(A(418));
        t = tn(r.nextSibling);
        var n = xt;
        t && um(e, t)
          ? _y(n, r)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (xt = e));
      }
    } else {
      if (yd(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (xt = e);
    }
  }
}
function cm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xt = e;
}
function ns(e) {
  if (e !== xt) return !1;
  if (!pe) return cm(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hd(e.type, e.memoizedProps))),
    t && (t = vt))
  ) {
    if (yd(e)) throw (Ty(), Error(A(418)));
    for (; t; ) _y(e, t), (t = tn(t.nextSibling));
  }
  if ((cm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              vt = tn(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      vt = null;
    }
  } else vt = xt ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ty() {
  for (var e = vt; e; ) e = tn(e.nextSibling);
}
function Vo() {
  (vt = xt = null), (pe = !1);
}
function Vf(e) {
  Wt === null ? (Wt = [e]) : Wt.push(e);
}
var Kk = Fr.ReactCurrentBatchConfig;
function Ot(e, t) {
  if (e && e.defaultProps) {
    (t = xe({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var cl = pn(null),
  dl = null,
  fo = null,
  Of = null;
function Nf() {
  Of = fo = dl = null;
}
function Wf(e) {
  var t = cl.current;
  ce(cl), (e._currentValue = t);
}
function bd(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === r)
    )
      break;
    e = e.return;
  }
}
function zo(e, t) {
  (dl = e),
    (Of = fo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (lt = !0), (e.firstContext = null));
}
function Lt(e) {
  var t = e._currentValue;
  if (Of !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), fo === null)) {
      if (dl === null) throw Error(A(308));
      (fo = e), (dl.dependencies = { lanes: 0, firstContext: e });
    } else fo = fo.next = e;
  return t;
}
var $n = null;
function Uf(e) {
  $n === null ? ($n = [e]) : $n.push(e);
}
function Py(e, t, r, n) {
  var o = t.interleaved;
  return (
    o === null ? ((r.next = r), Uf(t)) : ((r.next = o.next), (o.next = r)),
    (t.interleaved = r),
    Ar(e, n)
  );
}
function Ar(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (r = e.alternate),
      r !== null && (r.childLanes |= t),
      (r = e),
      (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var Ur = !1;
function Hf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ey(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Cr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function rn(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), Y & 2)) {
    var o = n.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (n.pending = t),
      Ar(e, r)
    );
  }
  return (
    (o = n.interleaved),
    o === null ? ((t.next = t), Uf(n)) : ((t.next = o.next), (o.next = t)),
    (n.interleaved = t),
    Ar(e, r)
  );
}
function $s(e, t, r) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
  ) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), zf(e, r);
  }
}
function dm(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var o = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var a = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (r = r.next);
      } while (r !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate),
    e === null ? (r.firstBaseUpdate = t) : (e.next = t),
    (r.lastBaseUpdate = t);
}
function fl(e, t, r, n) {
  var o = e.updateQueue;
  Ur = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var l = s,
      u = l.next;
    (l.next = null), a === null ? (i = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = l = null), (s = i);
    do {
      var f = s.lane,
        h = s.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            x = s;
          switch (((f = t), (h = r), x.tag)) {
            case 1:
              if (((y = x.payload), typeof y == "function")) {
                d = y.call(h, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = x.payload),
                (f = typeof y == "function" ? y.call(h, d, f) : y),
                f == null)
              )
                break e;
              d = xe({}, d, f);
              break e;
            case 2:
              Ur = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (a |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Wn |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function fm(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        o = n.callback;
      if (o !== null) {
        if (((n.callback = null), (n = r), typeof o != "function"))
          throw Error(A(191, o));
        o.call(n);
      }
    }
}
var $y = new Pv.Component().refs;
function Sd(e, t, r, n) {
  (t = e.memoizedState),
    (r = r(n, t)),
    (r = r == null ? t : xe({}, t, r)),
    (e.memoizedState = r),
    e.lanes === 0 && (e.updateQueue.baseState = r);
}
var au = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = Je(),
      o = on(e),
      i = Cr(n, o);
    (i.payload = t),
      r != null && (i.callback = r),
      (t = rn(e, i, o)),
      t !== null && (Kt(t, e, o, n), $s(t, e, o));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = Je(),
      o = on(e),
      i = Cr(n, o);
    (i.tag = 1),
      (i.payload = t),
      r != null && (i.callback = r),
      (t = rn(e, i, o)),
      t !== null && (Kt(t, e, o, n), $s(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = Je(),
      n = on(e),
      o = Cr(r, n);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = rn(e, o, n)),
      t !== null && (Kt(t, e, n, r), $s(t, e, n));
  },
};
function pm(e, t, r, n, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(n, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !aa(r, n) || !aa(o, i)
      : !0
  );
}
function zy(e, t, r) {
  var n = !1,
    o = un,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Lt(i))
      : ((o = ct(t) ? Vn : Xe.current),
        (n = t.contextTypes),
        (i = (n = n != null) ? Bo(e, o) : un)),
    (t = new t(r, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = au),
    (e.stateNode = t),
    (t._reactInternals = e),
    n &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function hm(e, t, r, n) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(r, n),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(r, n),
    t.state !== e && au.enqueueReplaceState(t, t.state, null);
}
function wd(e, t, r, n) {
  var o = e.stateNode;
  (o.props = r), (o.state = e.memoizedState), (o.refs = $y), Hf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Lt(i))
    : ((i = ct(t) ? Vn : Xe.current), (o.context = Bo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Sd(e, t, i, r), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && au.enqueueReplaceState(o, o.state, null),
      fl(e, r, o, n),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function di(e, t, r) {
  if (
    ((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(A(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(A(147, e));
      var o = n,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var s = o.refs;
            s === $y && (s = o.refs = {}),
              a === null ? delete s[i] : (s[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!r._owner) throw Error(A(290, e));
  }
  return e;
}
function os(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function mm(e) {
  var t = e._init;
  return t(e._payload);
}
function Ay(e) {
  function t(g, p) {
    if (e) {
      var m = g.deletions;
      m === null ? ((g.deletions = [p]), (g.flags |= 16)) : m.push(p);
    }
  }
  function r(g, p) {
    if (!e) return null;
    for (; p !== null; ) t(g, p), (p = p.sibling);
    return null;
  }
  function n(g, p) {
    for (g = new Map(); p !== null; )
      p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
    return g;
  }
  function o(g, p) {
    return (g = an(g, p)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, p, m) {
    return (
      (g.index = m),
      e
        ? ((m = g.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((g.flags |= 2), p) : m)
            : ((g.flags |= 2), p))
        : ((g.flags |= 1048576), p)
    );
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function s(g, p, m, k) {
    return p === null || p.tag !== 6
      ? ((p = dc(m, g.mode, k)), (p.return = g), p)
      : ((p = o(p, m)), (p.return = g), p);
  }
  function l(g, p, m, k) {
    var P = m.type;
    return P === no
      ? c(g, p, m.props.children, k, m.key)
      : p !== null &&
        (p.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === Wr &&
            mm(P) === p.type))
      ? ((k = o(p, m.props)), (k.ref = di(g, p, m)), (k.return = g), k)
      : ((k = Fs(m.type, m.key, m.props, null, g.mode, k)),
        (k.ref = di(g, p, m)),
        (k.return = g),
        k);
  }
  function u(g, p, m, k) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = fc(m, g.mode, k)), (p.return = g), p)
      : ((p = o(p, m.children || [])), (p.return = g), p);
  }
  function c(g, p, m, k, P) {
    return p === null || p.tag !== 7
      ? ((p = jn(m, g.mode, k, P)), (p.return = g), p)
      : ((p = o(p, m)), (p.return = g), p);
  }
  function d(g, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = dc("" + p, g.mode, m)), (p.return = g), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ka:
          return (
            (m = Fs(p.type, p.key, p.props, null, g.mode, m)),
            (m.ref = di(g, null, p)),
            (m.return = g),
            m
          );
        case ro:
          return (p = fc(p, g.mode, m)), (p.return = g), p;
        case Wr:
          var k = p._init;
          return d(g, k(p._payload), m);
      }
      if (bi(p) || ai(p))
        return (p = jn(p, g.mode, m, null)), (p.return = g), p;
      os(g, p);
    }
    return null;
  }
  function f(g, p, m, k) {
    var P = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : s(g, p, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ka:
          return m.key === P ? l(g, p, m, k) : null;
        case ro:
          return m.key === P ? u(g, p, m, k) : null;
        case Wr:
          return (P = m._init), f(g, p, P(m._payload), k);
      }
      if (bi(m) || ai(m)) return P !== null ? null : c(g, p, m, k, null);
      os(g, m);
    }
    return null;
  }
  function h(g, p, m, k, P) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (g = g.get(m) || null), s(p, g, "" + k, P);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case Ka:
          return (g = g.get(k.key === null ? m : k.key) || null), l(p, g, k, P);
        case ro:
          return (g = g.get(k.key === null ? m : k.key) || null), u(p, g, k, P);
        case Wr:
          var $ = k._init;
          return h(g, p, m, $(k._payload), P);
      }
      if (bi(k) || ai(k)) return (g = g.get(m) || null), c(p, g, k, P, null);
      os(p, k);
    }
    return null;
  }
  function y(g, p, m, k) {
    for (
      var P = null, $ = null, E = p, z = (p = 0), F = null;
      E !== null && z < m.length;
      z++
    ) {
      E.index > z ? ((F = E), (E = null)) : (F = E.sibling);
      var L = f(g, E, m[z], k);
      if (L === null) {
        E === null && (E = F);
        break;
      }
      e && E && L.alternate === null && t(g, E),
        (p = i(L, p, z)),
        $ === null ? (P = L) : ($.sibling = L),
        ($ = L),
        (E = F);
    }
    if (z === m.length) return r(g, E), pe && Sn(g, z), P;
    if (E === null) {
      for (; z < m.length; z++)
        (E = d(g, m[z], k)),
          E !== null &&
            ((p = i(E, p, z)), $ === null ? (P = E) : ($.sibling = E), ($ = E));
      return pe && Sn(g, z), P;
    }
    for (E = n(g, E); z < m.length; z++)
      (F = h(E, g, z, m[z], k)),
        F !== null &&
          (e && F.alternate !== null && E.delete(F.key === null ? z : F.key),
          (p = i(F, p, z)),
          $ === null ? (P = F) : ($.sibling = F),
          ($ = F));
    return (
      e &&
        E.forEach(function (be) {
          return t(g, be);
        }),
      pe && Sn(g, z),
      P
    );
  }
  function x(g, p, m, k) {
    var P = ai(m);
    if (typeof P != "function") throw Error(A(150));
    if (((m = P.call(m)), m == null)) throw Error(A(151));
    for (
      var $ = (P = null), E = p, z = (p = 0), F = null, L = m.next();
      E !== null && !L.done;
      z++, L = m.next()
    ) {
      E.index > z ? ((F = E), (E = null)) : (F = E.sibling);
      var be = f(g, E, L.value, k);
      if (be === null) {
        E === null && (E = F);
        break;
      }
      e && E && be.alternate === null && t(g, E),
        (p = i(be, p, z)),
        $ === null ? (P = be) : ($.sibling = be),
        ($ = be),
        (E = F);
    }
    if (L.done) return r(g, E), pe && Sn(g, z), P;
    if (E === null) {
      for (; !L.done; z++, L = m.next())
        (L = d(g, L.value, k)),
          L !== null &&
            ((p = i(L, p, z)), $ === null ? (P = L) : ($.sibling = L), ($ = L));
      return pe && Sn(g, z), P;
    }
    for (E = n(g, E); !L.done; z++, L = m.next())
      (L = h(E, g, z, L.value, k)),
        L !== null &&
          (e && L.alternate !== null && E.delete(L.key === null ? z : L.key),
          (p = i(L, p, z)),
          $ === null ? (P = L) : ($.sibling = L),
          ($ = L));
    return (
      e &&
        E.forEach(function (ze) {
          return t(g, ze);
        }),
      pe && Sn(g, z),
      P
    );
  }
  function _(g, p, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === no &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ka:
          e: {
            for (var P = m.key, $ = p; $ !== null; ) {
              if ($.key === P) {
                if (((P = m.type), P === no)) {
                  if ($.tag === 7) {
                    r(g, $.sibling),
                      (p = o($, m.props.children)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                } else if (
                  $.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === Wr &&
                    mm(P) === $.type)
                ) {
                  r(g, $.sibling),
                    (p = o($, m.props)),
                    (p.ref = di(g, $, m)),
                    (p.return = g),
                    (g = p);
                  break e;
                }
                r(g, $);
                break;
              } else t(g, $);
              $ = $.sibling;
            }
            m.type === no
              ? ((p = jn(m.props.children, g.mode, k, m.key)),
                (p.return = g),
                (g = p))
              : ((k = Fs(m.type, m.key, m.props, null, g.mode, k)),
                (k.ref = di(g, p, m)),
                (k.return = g),
                (g = k));
          }
          return a(g);
        case ro:
          e: {
            for ($ = m.key; p !== null; ) {
              if (p.key === $)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  r(g, p.sibling),
                    (p = o(p, m.children || [])),
                    (p.return = g),
                    (g = p);
                  break e;
                } else {
                  r(g, p);
                  break;
                }
              else t(g, p);
              p = p.sibling;
            }
            (p = fc(m, g.mode, k)), (p.return = g), (g = p);
          }
          return a(g);
        case Wr:
          return ($ = m._init), _(g, p, $(m._payload), k);
      }
      if (bi(m)) return y(g, p, m, k);
      if (ai(m)) return x(g, p, m, k);
      os(g, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (r(g, p.sibling), (p = o(p, m)), (p.return = g), (g = p))
          : (r(g, p), (p = dc(m, g.mode, k)), (p.return = g), (g = p)),
        a(g))
      : r(g, p);
  }
  return _;
}
var Oo = Ay(!0),
  Ry = Ay(!1),
  Ea = {},
  cr = pn(Ea),
  ca = pn(Ea),
  da = pn(Ea);
function zn(e) {
  if (e === Ea) throw Error(A(174));
  return e;
}
function Gf(e, t) {
  switch ((ae(da, t), ae(ca, e), ae(cr, Ea), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ed(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ed(t, e));
  }
  ce(cr), ae(cr, t);
}
function No() {
  ce(cr), ce(ca), ce(da);
}
function My(e) {
  zn(da.current);
  var t = zn(cr.current),
    r = ed(t, e.type);
  t !== r && (ae(ca, e), ae(cr, r));
}
function Kf(e) {
  ca.current === e && (ce(cr), ce(ca));
}
var ge = pn(0);
function pl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ic = [];
function Yf() {
  for (var e = 0; e < ic.length; e++)
    ic[e]._workInProgressVersionPrimary = null;
  ic.length = 0;
}
var zs = Fr.ReactCurrentDispatcher,
  ac = Fr.ReactCurrentBatchConfig,
  Nn = 0,
  ye = null,
  Re = null,
  Fe = null,
  hl = !1,
  ji = !1,
  fa = 0,
  Yk = 0;
function He() {
  throw Error(A(321));
}
function Qf(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++)
    if (!Xt(e[r], t[r])) return !1;
  return !0;
}
function Xf(e, t, r, n, o, i) {
  if (
    ((Nn = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zs.current = e === null || e.memoizedState === null ? Zk : Jk),
    (e = r(n, o)),
    ji)
  ) {
    i = 0;
    do {
      if (((ji = !1), (fa = 0), 25 <= i)) throw Error(A(301));
      (i += 1),
        (Fe = Re = null),
        (t.updateQueue = null),
        (zs.current = eC),
        (e = r(n, o));
    } while (ji);
  }
  if (
    ((zs.current = ml),
    (t = Re !== null && Re.next !== null),
    (Nn = 0),
    (Fe = Re = ye = null),
    (hl = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function qf() {
  var e = fa !== 0;
  return (fa = 0), e;
}
function rr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Fe === null ? (ye.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
}
function It() {
  if (Re === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = Fe === null ? ye.memoizedState : Fe.next;
  if (t !== null) (Fe = t), (Re = e);
  else {
    if (e === null) throw Error(A(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      Fe === null ? (ye.memoizedState = Fe = e) : (Fe = Fe.next = e);
  }
  return Fe;
}
function pa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sc(e) {
  var t = It(),
    r = t.queue;
  if (r === null) throw Error(A(311));
  r.lastRenderedReducer = e;
  var n = Re,
    o = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (n.baseQueue = o = i), (r.pending = null);
  }
  if (o !== null) {
    (i = o.next), (n = n.baseState);
    var s = (a = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Nn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((s = l = d), (a = n)) : (l = l.next = d),
          (ye.lanes |= c),
          (Wn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (a = n) : (l.next = s),
      Xt(n, t.memoizedState) || (lt = !0),
      (t.memoizedState = n),
      (t.baseState = a),
      (t.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ye.lanes |= i), (Wn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function lc(e) {
  var t = It(),
    r = t.queue;
  if (r === null) throw Error(A(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    o = r.pending,
    i = t.memoizedState;
  if (o !== null) {
    r.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Xt(i, t.memoizedState) || (lt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function jy() {}
function Fy(e, t) {
  var r = ye,
    n = It(),
    o = t(),
    i = !Xt(n.memoizedState, o);
  if (
    (i && ((n.memoizedState = o), (lt = !0)),
    (n = n.queue),
    Zf(Dy.bind(null, r, n, e), [e]),
    n.getSnapshot !== t || i || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      ha(9, Iy.bind(null, r, n, o, t), void 0, null),
      Le === null)
    )
      throw Error(A(349));
    Nn & 30 || Ly(r, t, o);
  }
  return o;
}
function Ly(e, t, r) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: r }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function Iy(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), By(t) && Vy(e);
}
function Dy(e, t, r) {
  return r(function () {
    By(t) && Vy(e);
  });
}
function By(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Xt(e, r);
  } catch {
    return !0;
  }
}
function Vy(e) {
  var t = Ar(e, 1);
  t !== null && Kt(t, e, 1, -1);
}
function gm(e) {
  var t = rr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qk.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function ha(e, t, r, n) {
  return (
    (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((r = t.lastEffect),
        r === null
          ? (t.lastEffect = e.next = e)
          : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
    e
  );
}
function Oy() {
  return It().memoizedState;
}
function As(e, t, r, n) {
  var o = rr();
  (ye.flags |= e),
    (o.memoizedState = ha(1 | t, r, void 0, n === void 0 ? null : n));
}
function su(e, t, r, n) {
  var o = It();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (Re !== null) {
    var a = Re.memoizedState;
    if (((i = a.destroy), n !== null && Qf(n, a.deps))) {
      o.memoizedState = ha(t, r, i, n);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = ha(1 | t, r, i, n));
}
function vm(e, t) {
  return As(8390656, 8, e, t);
}
function Zf(e, t) {
  return su(2048, 8, e, t);
}
function Ny(e, t) {
  return su(4, 2, e, t);
}
function Wy(e, t) {
  return su(4, 4, e, t);
}
function Uy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Hy(e, t, r) {
  return (
    (r = r != null ? r.concat([e]) : null), su(4, 4, Uy.bind(null, t, e), r)
  );
}
function Jf() {}
function Gy(e, t) {
  var r = It();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Qf(t, n[1])
    ? n[0]
    : ((r.memoizedState = [e, t]), e);
}
function Ky(e, t) {
  var r = It();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && Qf(t, n[1])
    ? n[0]
    : ((e = e()), (r.memoizedState = [e, t]), e);
}
function Yy(e, t, r) {
  return Nn & 21
    ? (Xt(r, t) || ((r = qv()), (ye.lanes |= r), (Wn |= r), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = r));
}
function Qk(e, t) {
  var r = te;
  (te = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = ac.transition;
  ac.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = r), (ac.transition = n);
  }
}
function Qy() {
  return It().memoizedState;
}
function Xk(e, t, r) {
  var n = on(e);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xy(e))
  )
    qy(t, r);
  else if (((r = Py(e, t, r, n)), r !== null)) {
    var o = Je();
    Kt(r, e, n, o), Zy(r, t, n);
  }
}
function qk(e, t, r) {
  var n = on(e),
    o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Xy(e)) qy(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = i(a, r);
        if (((o.hasEagerState = !0), (o.eagerState = s), Xt(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), Uf(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (r = Py(e, t, o, n)),
      r !== null && ((o = Je()), Kt(r, e, n, o), Zy(r, t, n));
  }
}
function Xy(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function qy(e, t) {
  ji = hl = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
    (e.pending = t);
}
function Zy(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), zf(e, r);
  }
}
var ml = {
    readContext: Lt,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useInsertionEffect: He,
    useLayoutEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useMutableSource: He,
    useSyncExternalStore: He,
    useId: He,
    unstable_isNewReconciler: !1,
  },
  Zk = {
    readContext: Lt,
    useCallback: function (e, t) {
      return (rr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Lt,
    useEffect: vm,
    useImperativeHandle: function (e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        As(4194308, 4, Uy.bind(null, t, e), r)
      );
    },
    useLayoutEffect: function (e, t) {
      return As(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return As(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = rr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, r) {
      var n = rr();
      return (
        (t = r !== void 0 ? r(t) : t),
        (n.memoizedState = n.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (n.queue = e),
        (e = e.dispatch = Xk.bind(null, ye, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = rr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: gm,
    useDebugValue: Jf,
    useDeferredValue: function (e) {
      return (rr().memoizedState = e);
    },
    useTransition: function () {
      var e = gm(!1),
        t = e[0];
      return (e = Qk.bind(null, e[1])), (rr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = ye,
        o = rr();
      if (pe) {
        if (r === void 0) throw Error(A(407));
        r = r();
      } else {
        if (((r = t()), Le === null)) throw Error(A(349));
        Nn & 30 || Ly(n, t, r);
      }
      o.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (
        (o.queue = i),
        vm(Dy.bind(null, n, i, e), [e]),
        (n.flags |= 2048),
        ha(9, Iy.bind(null, n, i, r, t), void 0, null),
        r
      );
    },
    useId: function () {
      var e = rr(),
        t = Le.identifierPrefix;
      if (pe) {
        var r = Sr,
          n = br;
        (r = (n & ~(1 << (32 - Gt(n) - 1))).toString(32) + r),
          (t = ":" + t + "R" + r),
          (r = fa++),
          0 < r && (t += "H" + r.toString(32)),
          (t += ":");
      } else (r = Yk++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jk = {
    readContext: Lt,
    useCallback: Gy,
    useContext: Lt,
    useEffect: Zf,
    useImperativeHandle: Hy,
    useInsertionEffect: Ny,
    useLayoutEffect: Wy,
    useMemo: Ky,
    useReducer: sc,
    useRef: Oy,
    useState: function () {
      return sc(pa);
    },
    useDebugValue: Jf,
    useDeferredValue: function (e) {
      var t = It();
      return Yy(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = sc(pa)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: jy,
    useSyncExternalStore: Fy,
    useId: Qy,
    unstable_isNewReconciler: !1,
  },
  eC = {
    readContext: Lt,
    useCallback: Gy,
    useContext: Lt,
    useEffect: Zf,
    useImperativeHandle: Hy,
    useInsertionEffect: Ny,
    useLayoutEffect: Wy,
    useMemo: Ky,
    useReducer: lc,
    useRef: Oy,
    useState: function () {
      return lc(pa);
    },
    useDebugValue: Jf,
    useDeferredValue: function (e) {
      var t = It();
      return Re === null ? (t.memoizedState = e) : Yy(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = lc(pa)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: jy,
    useSyncExternalStore: Fy,
    useId: Qy,
    unstable_isNewReconciler: !1,
  };
function Wo(e, t) {
  try {
    var r = "",
      n = t;
    do (r += Ew(n)), (n = n.return);
    while (n);
    var o = r;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function uc(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function kd(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var tC = typeof WeakMap == "function" ? WeakMap : Map;
function Jy(e, t, r) {
  (r = Cr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      vl || ((vl = !0), (Md = n)), kd(e, t);
    }),
    r
  );
}
function e1(e, t, r) {
  (r = Cr(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var o = t.value;
    (r.payload = function () {
      return n(o);
    }),
      (r.callback = function () {
        kd(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        kd(e, t),
          typeof n != "function" &&
            (nn === null ? (nn = new Set([this])) : nn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    r
  );
}
function ym(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new tC();
    var o = new Set();
    n.set(t, o);
  } else (o = n.get(t)), o === void 0 && ((o = new Set()), n.set(t, o));
  o.has(r) || (o.add(r), (e = mC.bind(null, e, t, r)), t.then(e, e));
}
function xm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bm(e, t, r, n, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((t = Cr(-1, 1)), (t.tag = 2), rn(r, t, 1))),
          (r.lanes |= 1)),
      e);
}
var rC = Fr.ReactCurrentOwner,
  lt = !1;
function qe(e, t, r, n) {
  t.child = e === null ? Ry(t, null, r, n) : Oo(t, e.child, r, n);
}
function Sm(e, t, r, n, o) {
  r = r.render;
  var i = t.ref;
  return (
    zo(t, o),
    (n = Xf(e, t, r, n, i, o)),
    (r = qf()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Rr(e, t, o))
      : (pe && r && Df(t), (t.flags |= 1), qe(e, t, n, o), t.child)
  );
}
function wm(e, t, r, n, o) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" &&
      !sp(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), t1(e, t, i, n, o))
      : ((e = Fs(r.type, null, n, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : aa), r(a, n) && e.ref === t.ref)
    )
      return Rr(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = an(i, n)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function t1(e, t, r, n, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (aa(i, n) && e.ref === t.ref)
      if (((lt = !1), (t.pendingProps = n = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (lt = !0);
      else return (t.lanes = e.lanes), Rr(e, t, o);
  }
  return Cd(e, t, r, n, o);
}
function r1(e, t, r) {
  var n = t.pendingProps,
    o = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(ho, gt),
        (gt |= r);
    else {
      if (!(r & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | r : r),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(ho, gt),
          (gt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        ae(ho, gt),
        (gt |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r),
      ae(ho, gt),
      (gt |= n);
  return qe(e, t, o, r), t.child;
}
function n1(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Cd(e, t, r, n, o) {
  var i = ct(r) ? Vn : Xe.current;
  return (
    (i = Bo(t, i)),
    zo(t, o),
    (r = Xf(e, t, r, n, i, o)),
    (n = qf()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Rr(e, t, o))
      : (pe && n && Df(t), (t.flags |= 1), qe(e, t, r, o), t.child)
  );
}
function km(e, t, r, n, o) {
  if (ct(r)) {
    var i = !0;
    sl(t);
  } else i = !1;
  if ((zo(t, o), t.stateNode === null))
    Rs(e, t), zy(t, r, n), wd(t, r, n, o), (n = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Lt(u))
      : ((u = ct(r) ? Vn : Xe.current), (u = Bo(t, u)));
    var c = r.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== n || l !== u) && hm(t, a, n, u)),
      (Ur = !1);
    var f = t.memoizedState;
    (a.state = f),
      fl(t, n, a, o),
      (l = t.memoizedState),
      s !== n || f !== l || ut.current || Ur
        ? (typeof c == "function" && (Sd(t, r, c, n), (l = t.memoizedState)),
          (s = Ur || pm(t, r, s, n, f, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = l)),
          (a.props = n),
          (a.state = l),
          (a.context = u),
          (n = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !1));
  } else {
    (a = t.stateNode),
      Ey(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Ot(t.type, s)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = Lt(l))
        : ((l = ct(r) ? Vn : Xe.current), (l = Bo(t, l)));
    var h = r.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== d || f !== l) && hm(t, a, n, l)),
      (Ur = !1),
      (f = t.memoizedState),
      (a.state = f),
      fl(t, n, a, o);
    var y = t.memoizedState;
    s !== d || f !== y || ut.current || Ur
      ? (typeof h == "function" && (Sd(t, r, h, n), (y = t.memoizedState)),
        (u = Ur || pm(t, r, u, n, f, y, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(n, y, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(n, y, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = y)),
        (a.props = n),
        (a.state = y),
        (a.context = l),
        (n = u))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return _d(e, t, r, n, i, o);
}
function _d(e, t, r, n, o, i) {
  n1(e, t);
  var a = (t.flags & 128) !== 0;
  if (!n && !a) return o && lm(t, r, !1), Rr(e, t, i);
  (n = t.stateNode), (rC.current = t);
  var s =
    a && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Oo(t, e.child, null, i)), (t.child = Oo(t, null, s, i)))
      : qe(e, t, s, i),
    (t.memoizedState = n.state),
    o && lm(t, r, !0),
    t.child
  );
}
function o1(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sm(e, t.context, !1),
    Gf(e, t.containerInfo);
}
function Cm(e, t, r, n, o) {
  return Vo(), Vf(o), (t.flags |= 256), qe(e, t, r, n), t.child;
}
var Td = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function i1(e, t, r) {
  var n = t.pendingProps,
    o = ge.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    s;
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ae(ge, o & 1),
    e === null)
  )
    return (
      xd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = n.children),
          (e = n.fallback),
          i
            ? ((n = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = cu(a, n, 0, null)),
              (e = jn(e, n, r, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Pd(r)),
              (t.memoizedState = Td),
              e)
            : ep(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return nC(e, t, a, n, s, o, r);
  if (i) {
    (i = n.fallback), (a = t.mode), (o = e.child), (s = o.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(a & 1) && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (t.deletions = null))
        : ((n = an(o, l)), (n.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = an(s, i)) : ((i = jn(i, a, r, null)), (i.flags |= 2)),
      (i.return = t),
      (n.return = t),
      (n.sibling = i),
      (t.child = n),
      (n = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Pd(r)
          : {
              baseLanes: a.baseLanes | r,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~r),
      (t.memoizedState = Td),
      n
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (n = an(i, { mode: "visible", children: n.children })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n),
    (t.memoizedState = null),
    n
  );
}
function ep(e, t) {
  return (
    (t = cu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function is(e, t, r, n) {
  return (
    n !== null && Vf(n),
    Oo(t, e.child, null, r),
    (e = ep(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function nC(e, t, r, n, o, i, a) {
  if (r)
    return t.flags & 256
      ? ((t.flags &= -257), (n = uc(Error(A(422)))), is(e, t, a, n))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = n.fallback),
        (o = t.mode),
        (n = cu({ mode: "visible", children: n.children }, o, 0, null)),
        (i = jn(i, o, a, null)),
        (i.flags |= 2),
        (n.return = t),
        (i.return = t),
        (n.sibling = i),
        (t.child = n),
        t.mode & 1 && Oo(t, e.child, null, a),
        (t.child.memoizedState = Pd(a)),
        (t.memoizedState = Td),
        i);
  if (!(t.mode & 1)) return is(e, t, a, null);
  if (o.data === "$!") {
    if (((n = o.nextSibling && o.nextSibling.dataset), n)) var s = n.dgst;
    return (n = s), (i = Error(A(419))), (n = uc(i, n, void 0)), is(e, t, a, n);
  }
  if (((s = (a & e.childLanes) !== 0), lt || s)) {
    if (((n = Le), n !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (n.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Ar(e, o), Kt(n, e, o, -1));
    }
    return ap(), (n = uc(Error(A(421)))), is(e, t, a, n);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = gC.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (vt = tn(o.nextSibling)),
      (xt = t),
      (pe = !0),
      (Wt = null),
      e !== null &&
        ((At[Rt++] = br),
        (At[Rt++] = Sr),
        (At[Rt++] = On),
        (br = e.id),
        (Sr = e.overflow),
        (On = t)),
      (t = ep(t, n.children)),
      (t.flags |= 4096),
      t);
}
function _m(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), bd(e.return, t, r);
}
function cc(e, t, r, n, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = o));
}
function a1(e, t, r) {
  var n = t.pendingProps,
    o = n.revealOrder,
    i = n.tail;
  if ((qe(e, t, n.children, r), (n = ge.current), n & 2))
    (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _m(e, r, t);
        else if (e.tag === 19) _m(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((ae(ge, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (r = t.child, o = null; r !== null; )
          (e = r.alternate),
            e !== null && pl(e) === null && (o = r),
            (r = r.sibling);
        (r = o),
          r === null
            ? ((o = t.child), (t.child = null))
            : ((o = r.sibling), (r.sibling = null)),
          cc(t, !1, o, r, i);
        break;
      case "backwards":
        for (r = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && pl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = r), (r = o), (o = e);
        }
        cc(t, !0, r, null, i);
        break;
      case "together":
        cc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Rs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rr(e, t, r) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wn |= t.lanes),
    !(r & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, r = an(e, e.pendingProps), t.child = r, r.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (r = r.sibling = an(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function oC(e, t, r) {
  switch (t.tag) {
    case 3:
      o1(t), Vo();
      break;
    case 5:
      My(t);
      break;
    case 1:
      ct(t.type) && sl(t);
      break;
    case 4:
      Gf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        o = t.memoizedProps.value;
      ae(cl, n._currentValue), (n._currentValue = o);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ae(ge, ge.current & 1), (t.flags |= 128), null)
          : r & t.child.childLanes
          ? i1(e, t, r)
          : (ae(ge, ge.current & 1),
            (e = Rr(e, t, r)),
            e !== null ? e.sibling : null);
      ae(ge, ge.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return a1(e, t, r);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ae(ge, ge.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), r1(e, t, r);
  }
  return Rr(e, t, r);
}
var s1, Ed, l1, u1;
s1 = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Ed = function () {};
l1 = function (e, t, r, n) {
  var o = e.memoizedProps;
  if (o !== n) {
    (e = t.stateNode), zn(cr.current);
    var i = null;
    switch (r) {
      case "input":
        (o = Xc(e, o)), (n = Xc(e, n)), (i = []);
        break;
      case "select":
        (o = xe({}, o, { value: void 0 })),
          (n = xe({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Jc(e, o)), (n = Jc(e, n)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof n.onClick == "function" &&
          (e.onclick = il);
    }
    td(r, n);
    var a;
    r = null;
    for (u in o)
      if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ji.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((s = o != null ? o[u] : void 0),
        n.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (r || (r = {}), (r[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (r || (r = {}), (r[a] = l[a]));
          } else r || (i || (i = []), i.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ji.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && le("scroll", e),
                  i || s === l || (i = []))
                : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
u1 = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function fi(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags & 14680064),
        (n |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (r |= o.lanes | o.childLanes),
        (n |= o.subtreeFlags),
        (n |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function iC(e, t, r) {
  var n = t.pendingProps;
  switch ((Bf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ge(t), null;
    case 1:
      return ct(t.type) && al(), Ge(t), null;
    case 3:
      return (
        (n = t.stateNode),
        No(),
        ce(ut),
        ce(Xe),
        Yf(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (ns(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Wt !== null && (Ld(Wt), (Wt = null)))),
        Ed(e, t),
        Ge(t),
        null
      );
    case 5:
      Kf(t);
      var o = zn(da.current);
      if (((r = t.type), e !== null && t.stateNode != null))
        l1(e, t, r, n, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(A(166));
          return Ge(t), null;
        }
        if (((e = zn(cr.current)), ns(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[ar] = t), (n[ua] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              le("cancel", n), le("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              le("load", n);
              break;
            case "video":
            case "audio":
              for (o = 0; o < wi.length; o++) le(wi[o], n);
              break;
            case "source":
              le("error", n);
              break;
            case "img":
            case "image":
            case "link":
              le("error", n), le("load", n);
              break;
            case "details":
              le("toggle", n);
              break;
            case "input":
              jh(n, i), le("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                le("invalid", n);
              break;
            case "textarea":
              Lh(n, i), le("invalid", n);
          }
          td(r, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var s = i[a];
              a === "children"
                ? typeof s == "string"
                  ? n.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      rs(n.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    n.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      rs(n.textContent, s, e),
                    (o = ["children", "" + s]))
                : Ji.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  le("scroll", n);
            }
          switch (r) {
            case "input":
              Ya(n), Fh(n, i, !0);
              break;
            case "textarea":
              Ya(n), Ih(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = il);
          }
          (n = o), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Lv(r)),
            e === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof n.is == "string"
                ? (e = a.createElement(r, { is: n.is }))
                : ((e = a.createElement(r)),
                  r === "select" &&
                    ((a = e),
                    n.multiple
                      ? (a.multiple = !0)
                      : n.size && (a.size = n.size)))
              : (e = a.createElementNS(e, r)),
            (e[ar] = t),
            (e[ua] = n),
            s1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = rd(r, n)), r)) {
              case "dialog":
                le("cancel", e), le("close", e), (o = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                le("load", e), (o = n);
                break;
              case "video":
              case "audio":
                for (o = 0; o < wi.length; o++) le(wi[o], e);
                o = n;
                break;
              case "source":
                le("error", e), (o = n);
                break;
              case "img":
              case "image":
              case "link":
                le("error", e), le("load", e), (o = n);
                break;
              case "details":
                le("toggle", e), (o = n);
                break;
              case "input":
                jh(e, n), (o = Xc(e, n)), le("invalid", e);
                break;
              case "option":
                o = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }),
                  (o = xe({}, n, { value: void 0 })),
                  le("invalid", e);
                break;
              case "textarea":
                Lh(e, n), (o = Jc(e, n)), le("invalid", e);
                break;
              default:
                o = n;
            }
            td(r, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var l = s[i];
                i === "style"
                  ? Bv(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Iv(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && ea(e, l)
                    : typeof l == "number" && ea(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ji.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && le("scroll", e)
                      : l != null && Cf(e, i, l, a));
              }
            switch (r) {
              case "input":
                Ya(e), Fh(e, n, !1);
                break;
              case "textarea":
                Ya(e), Ih(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + ln(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? To(e, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      To(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = il);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ge(t), null;
    case 6:
      if (e && t.stateNode != null) u1(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(A(166));
        if (((r = zn(da.current)), zn(cr.current), ns(t))) {
          if (
            ((n = t.stateNode),
            (r = t.memoizedProps),
            (n[ar] = t),
            (i = n.nodeValue !== r) && ((e = xt), e !== null))
          )
            switch (e.tag) {
              case 3:
                rs(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  rs(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[ar] = t),
            (t.stateNode = n);
      }
      return Ge(t), null;
    case 13:
      if (
        (ce(ge),
        (n = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && vt !== null && t.mode & 1 && !(t.flags & 128))
          Ty(), Vo(), (t.flags |= 98560), (i = !1);
        else if (((i = ns(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(A(317));
            i[ar] = t;
          } else
            Vo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ge(t), (i = !1);
        } else Wt !== null && (Ld(Wt), (Wt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = r), t)
        : ((n = n !== null),
          n !== (e !== null && e.memoizedState !== null) &&
            n &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Me === 0 && (Me = 3) : ap())),
          t.updateQueue !== null && (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        No(), Ed(e, t), e === null && sa(t.stateNode.containerInfo), Ge(t), null
      );
    case 10:
      return Wf(t.type._context), Ge(t), null;
    case 17:
      return ct(t.type) && al(), Ge(t), null;
    case 19:
      if ((ce(ge), (i = t.memoizedState), i === null)) return Ge(t), null;
      if (((n = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (n) fi(i, !1);
        else {
          if (Me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = pl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    fi(i, !1),
                    n = a.updateQueue,
                    n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    n = r,
                    r = t.child;
                  r !== null;

                )
                  (i = r),
                    (e = n),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (r = r.sibling);
                return ae(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ke() > Uo &&
            ((t.flags |= 128), (n = !0), fi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = pl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (n = !0),
              (r = e.updateQueue),
              r !== null && ((t.updateQueue = r), (t.flags |= 4)),
              fi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !pe)
            )
              return Ge(t), null;
          } else
            2 * ke() - i.renderingStartTime > Uo &&
              r !== 1073741824 &&
              ((t.flags |= 128), (n = !0), fi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((r = i.last),
            r !== null ? (r.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ke()),
          (t.sibling = null),
          (r = ge.current),
          ae(ge, n ? (r & 1) | 2 : r & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        ip(),
        (n = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
        n && t.mode & 1
          ? gt & 1073741824 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function aC(e, t) {
  switch ((Bf(t), t.tag)) {
    case 1:
      return (
        ct(t.type) && al(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        No(),
        ce(ut),
        ce(Xe),
        Yf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Kf(t), null;
    case 13:
      if (
        (ce(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        Vo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ce(ge), null;
    case 4:
      return No(), null;
    case 10:
      return Wf(t.type._context), null;
    case 22:
    case 23:
      return ip(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var as = !1,
  Qe = !1,
  sC = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function po(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Se(e, t, n);
      }
    else r.current = null;
}
function $d(e, t, r) {
  try {
    r();
  } catch (n) {
    Se(e, t, n);
  }
}
var Tm = !1;
function lC(e, t) {
  if (((fd = rl), (e = py()), If(e))) {
    if ("selectionStart" in e)
      var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var o = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== r || (o !== 0 && d.nodeType !== 3) || (s = a + o),
                d !== i || (n !== 0 && d.nodeType !== 3) || (l = a + n),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === r && ++u === o && (s = a),
                f === i && ++c === n && (l = a),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          r = s === -1 || l === -1 ? null : { start: s, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (pd = { focusedElem: e, selectionRange: r }, rl = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var x = y.memoizedProps,
                    _ = y.memoizedState,
                    g = t.stateNode,
                    p = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ot(t.type, x),
                      _
                    );
                  g.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (k) {
          Se(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (y = Tm), (Tm = !1), y;
}
function Fi(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var o = (n = n.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && $d(t, r, i);
      }
      o = o.next;
    } while (o !== n);
  }
}
function lu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function zd(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function c1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), c1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ar], delete t[ua], delete t[gd], delete t[Uk], delete t[Hk])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function d1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || d1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ad(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode),
      t
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(e, t)
          : r.insertBefore(e, t)
        : (r.nodeType === 8
            ? ((t = r.parentNode), t.insertBefore(e, r))
            : ((t = r), t.appendChild(e)),
          (r = r._reactRootContainer),
          r != null || t.onclick !== null || (t.onclick = il));
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Ad(e, t, r), e = e.sibling; e !== null; ) Ad(e, t, r), (e = e.sibling);
}
function Rd(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6)
    (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null))
    for (Rd(e, t, r), e = e.sibling; e !== null; ) Rd(e, t, r), (e = e.sibling);
}
var Ve = null,
  Nt = !1;
function Dr(e, t, r) {
  for (r = r.child; r !== null; ) f1(e, t, r), (r = r.sibling);
}
function f1(e, t, r) {
  if (ur && typeof ur.onCommitFiberUnmount == "function")
    try {
      ur.onCommitFiberUnmount(eu, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Qe || po(r, t);
    case 6:
      var n = Ve,
        o = Nt;
      (Ve = null),
        Dr(e, t, r),
        (Ve = n),
        (Nt = o),
        Ve !== null &&
          (Nt
            ? ((e = Ve),
              (r = r.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r))
            : Ve.removeChild(r.stateNode));
      break;
    case 18:
      Ve !== null &&
        (Nt
          ? ((e = Ve),
            (r = r.stateNode),
            e.nodeType === 8
              ? nc(e.parentNode, r)
              : e.nodeType === 1 && nc(e, r),
            oa(e))
          : nc(Ve, r.stateNode));
      break;
    case 4:
      (n = Ve),
        (o = Nt),
        (Ve = r.stateNode.containerInfo),
        (Nt = !0),
        Dr(e, t, r),
        (Ve = n),
        (Nt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Qe &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        o = n = n.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && $d(r, t, a),
            (o = o.next);
        } while (o !== n);
      }
      Dr(e, t, r);
      break;
    case 1:
      if (
        !Qe &&
        (po(r, t),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (s) {
          Se(r, t, s);
        }
      Dr(e, t, r);
      break;
    case 21:
      Dr(e, t, r);
      break;
    case 22:
      r.mode & 1
        ? ((Qe = (n = Qe) || r.memoizedState !== null), Dr(e, t, r), (Qe = n))
        : Dr(e, t, r);
      break;
    default:
      Dr(e, t, r);
  }
}
function Em(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new sC()),
      t.forEach(function (n) {
        var o = vC.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(o, o));
      });
  }
}
function Bt(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      try {
        var i = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ve = s.stateNode), (Nt = !1);
              break e;
            case 3:
              (Ve = s.stateNode.containerInfo), (Nt = !0);
              break e;
            case 4:
              (Ve = s.stateNode.containerInfo), (Nt = !0);
              break e;
          }
          s = s.return;
        }
        if (Ve === null) throw Error(A(160));
        f1(i, a, o), (Ve = null), (Nt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) p1(t, e), (t = t.sibling);
}
function p1(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Bt(t, e), er(e), n & 4)) {
        try {
          Fi(3, e, e.return), lu(3, e);
        } catch (x) {
          Se(e, e.return, x);
        }
        try {
          Fi(5, e, e.return);
        } catch (x) {
          Se(e, e.return, x);
        }
      }
      break;
    case 1:
      Bt(t, e), er(e), n & 512 && r !== null && po(r, r.return);
      break;
    case 5:
      if (
        (Bt(t, e),
        er(e),
        n & 512 && r !== null && po(r, r.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ea(o, "");
        } catch (x) {
          Se(e, e.return, x);
        }
      }
      if (n & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = r !== null ? r.memoizedProps : i,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && jv(o, i),
              rd(s, a);
            var u = rd(s, i);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? Bv(o, d)
                : c === "dangerouslySetInnerHTML"
                ? Iv(o, d)
                : c === "children"
                ? ea(o, d)
                : Cf(o, c, d, u);
            }
            switch (s) {
              case "input":
                qc(o, i);
                break;
              case "textarea":
                Fv(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var h = i.value;
                h != null
                  ? To(o, !!i.multiple, h, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? To(o, !!i.multiple, i.defaultValue, !0)
                      : To(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ua] = i;
          } catch (x) {
            Se(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Bt(t, e), er(e), n & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (x) {
          Se(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Bt(t, e), er(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          oa(t.containerInfo);
        } catch (x) {
          Se(e, e.return, x);
        }
      break;
    case 4:
      Bt(t, e), er(e);
      break;
    case 13:
      Bt(t, e),
        er(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (np = ke())),
        n & 4 && Em(e);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        e.mode & 1 ? ((Qe = (u = Qe) || c), Bt(t, e), (Qe = u)) : Bt(t, e),
        er(e),
        n & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (j = e, c = e.child; c !== null; ) {
            for (d = j = c; j !== null; ) {
              switch (((f = j), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Fi(4, f, f.return);
                  break;
                case 1:
                  po(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (n = f), (r = f.return);
                    try {
                      (t = n),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (x) {
                      Se(n, r, x);
                    }
                  }
                  break;
                case 5:
                  po(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    zm(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (j = h)) : zm(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = Dv("display", a)));
              } catch (x) {
                Se(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (x) {
                Se(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Bt(t, e), er(e), n & 4 && Em(e);
      break;
    case 21:
      break;
    default:
      Bt(t, e), er(e);
  }
}
function er(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (d1(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(A(160));
      }
      switch (n.tag) {
        case 5:
          var o = n.stateNode;
          n.flags & 32 && (ea(o, ""), (n.flags &= -33));
          var i = Pm(e);
          Rd(e, i, o);
          break;
        case 3:
        case 4:
          var a = n.stateNode.containerInfo,
            s = Pm(e);
          Ad(e, s, a);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      Se(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function uC(e, t, r) {
  (j = e), h1(e);
}
function h1(e, t, r) {
  for (var n = (e.mode & 1) !== 0; j !== null; ) {
    var o = j,
      i = o.child;
    if (o.tag === 22 && n) {
      var a = o.memoizedState !== null || as;
      if (!a) {
        var s = o.alternate,
          l = (s !== null && s.memoizedState !== null) || Qe;
        s = as;
        var u = Qe;
        if (((as = a), (Qe = l) && !u))
          for (j = o; j !== null; )
            (a = j),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Am(o)
                : l !== null
                ? ((l.return = a), (j = l))
                : Am(o);
        for (; i !== null; ) (j = i), h1(i), (i = i.sibling);
        (j = o), (as = s), (Qe = u);
      }
      $m(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (j = i)) : $m(e);
  }
}
function $m(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qe || lu(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !Qe)
                if (r === null) n.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? r.memoizedProps
                      : Ot(t.type, r.memoizedProps);
                  n.componentDidUpdate(
                    o,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && fm(t, i, n);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                fm(t, a, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && oa(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        Qe || (t.flags & 512 && zd(t));
      } catch (f) {
        Se(t, t.return, f);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (j = r);
      break;
    }
    j = t.return;
  }
}
function zm(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (j = r);
      break;
    }
    j = t.return;
  }
}
function Am(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            lu(4, t);
          } catch (l) {
            Se(t, r, l);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var o = t.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Se(t, o, l);
            }
          }
          var i = t.return;
          try {
            zd(t);
          } catch (l) {
            Se(t, i, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            zd(t);
          } catch (l) {
            Se(t, a, l);
          }
      }
    } catch (l) {
      Se(t, t.return, l);
    }
    if (t === e) {
      j = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (j = s);
      break;
    }
    j = t.return;
  }
}
var cC = Math.ceil,
  gl = Fr.ReactCurrentDispatcher,
  tp = Fr.ReactCurrentOwner,
  Ft = Fr.ReactCurrentBatchConfig,
  Y = 0,
  Le = null,
  Ee = null,
  We = 0,
  gt = 0,
  ho = pn(0),
  Me = 0,
  ma = null,
  Wn = 0,
  uu = 0,
  rp = 0,
  Li = null,
  at = null,
  np = 0,
  Uo = 1 / 0,
  gr = null,
  vl = !1,
  Md = null,
  nn = null,
  ss = !1,
  Xr = null,
  yl = 0,
  Ii = 0,
  jd = null,
  Ms = -1,
  js = 0;
function Je() {
  return Y & 6 ? ke() : Ms !== -1 ? Ms : (Ms = ke());
}
function on(e) {
  return e.mode & 1
    ? Y & 2 && We !== 0
      ? We & -We
      : Kk.transition !== null
      ? (js === 0 && (js = qv()), js)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : oy(e.type))),
        e)
    : 1;
}
function Kt(e, t, r, n) {
  if (50 < Ii) throw ((Ii = 0), (jd = null), Error(A(185)));
  _a(e, r, n),
    (!(Y & 2) || e !== Le) &&
      (e === Le && (!(Y & 2) && (uu |= r), Me === 4 && Kr(e, We)),
      dt(e, n),
      r === 1 && Y === 0 && !(t.mode & 1) && ((Uo = ke() + 500), iu && hn()));
}
function dt(e, t) {
  var r = e.callbackNode;
  Kw(e, t);
  var n = tl(e, e === Le ? We : 0);
  if (n === 0)
    r !== null && Vh(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && Vh(r), t === 1))
      e.tag === 0 ? Gk(Rm.bind(null, e)) : ky(Rm.bind(null, e)),
        Nk(function () {
          !(Y & 6) && hn();
        }),
        (r = null);
    else {
      switch (Zv(n)) {
        case 1:
          r = $f;
          break;
        case 4:
          r = Qv;
          break;
        case 16:
          r = el;
          break;
        case 536870912:
          r = Xv;
          break;
        default:
          r = el;
      }
      r = w1(r, m1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function m1(e, t) {
  if (((Ms = -1), (js = 0), Y & 6)) throw Error(A(327));
  var r = e.callbackNode;
  if (Ao() && e.callbackNode !== r) return null;
  var n = tl(e, e === Le ? We : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = xl(e, n);
  else {
    t = n;
    var o = Y;
    Y |= 2;
    var i = v1();
    (Le !== e || We !== t) && ((gr = null), (Uo = ke() + 500), Mn(e, t));
    do
      try {
        pC();
        break;
      } catch (s) {
        g1(e, s);
      }
    while (!0);
    Nf(),
      (gl.current = i),
      (Y = o),
      Ee !== null ? (t = 0) : ((Le = null), (We = 0), (t = Me));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = sd(e)), o !== 0 && ((n = o), (t = Fd(e, o)))), t === 1)
    )
      throw ((r = ma), Mn(e, 0), Kr(e, n), dt(e, ke()), r);
    if (t === 6) Kr(e, n);
    else {
      if (
        ((o = e.current.alternate),
        !(n & 30) &&
          !dC(o) &&
          ((t = xl(e, n)),
          t === 2 && ((i = sd(e)), i !== 0 && ((n = i), (t = Fd(e, i)))),
          t === 1))
      )
        throw ((r = ma), Mn(e, 0), Kr(e, n), dt(e, ke()), r);
      switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          wn(e, at, gr);
          break;
        case 3:
          if (
            (Kr(e, n), (n & 130023424) === n && ((t = np + 500 - ke()), 10 < t))
          ) {
            if (tl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & n) !== n)) {
              Je(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = md(wn.bind(null, e, at, gr), t);
            break;
          }
          wn(e, at, gr);
          break;
        case 4:
          if ((Kr(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, o = -1; 0 < n; ) {
            var a = 31 - Gt(n);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (n &= ~i);
          }
          if (
            ((n = o),
            (n = ke() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * cC(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = md(wn.bind(null, e, at, gr), n);
            break;
          }
          wn(e, at, gr);
          break;
        case 5:
          wn(e, at, gr);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return dt(e, ke()), e.callbackNode === r ? m1.bind(null, e) : null;
}
function Fd(e, t) {
  var r = Li;
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    (e = xl(e, t)),
    e !== 2 && ((t = at), (at = r), t !== null && Ld(t)),
    e
  );
}
function Ld(e) {
  at === null ? (at = e) : at.push.apply(at, e);
}
function dC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var o = r[n],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Xt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
      (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Kr(e, t) {
  for (
    t &= ~rp,
      t &= ~uu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var r = 31 - Gt(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Rm(e) {
  if (Y & 6) throw Error(A(327));
  Ao();
  var t = tl(e, 0);
  if (!(t & 1)) return dt(e, ke()), null;
  var r = xl(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = sd(e);
    n !== 0 && ((t = n), (r = Fd(e, n)));
  }
  if (r === 1) throw ((r = ma), Mn(e, 0), Kr(e, t), dt(e, ke()), r);
  if (r === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wn(e, at, gr),
    dt(e, ke()),
    null
  );
}
function op(e, t) {
  var r = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = r), Y === 0 && ((Uo = ke() + 500), iu && hn());
  }
}
function Un(e) {
  Xr !== null && Xr.tag === 0 && !(Y & 6) && Ao();
  var t = Y;
  Y |= 1;
  var r = Ft.transition,
    n = te;
  try {
    if (((Ft.transition = null), (te = 1), e)) return e();
  } finally {
    (te = n), (Ft.transition = r), (Y = t), !(Y & 6) && hn();
  }
}
function ip() {
  (gt = ho.current), ce(ho);
}
function Mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Ok(r)), Ee !== null))
    for (r = Ee.return; r !== null; ) {
      var n = r;
      switch ((Bf(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && al();
          break;
        case 3:
          No(), ce(ut), ce(Xe), Yf();
          break;
        case 5:
          Kf(n);
          break;
        case 4:
          No();
          break;
        case 13:
          ce(ge);
          break;
        case 19:
          ce(ge);
          break;
        case 10:
          Wf(n.type._context);
          break;
        case 22:
        case 23:
          ip();
      }
      r = r.return;
    }
  if (
    ((Le = e),
    (Ee = e = an(e.current, null)),
    (We = gt = t),
    (Me = 0),
    (ma = null),
    (rp = uu = Wn = 0),
    (at = Li = null),
    $n !== null)
  ) {
    for (t = 0; t < $n.length; t++)
      if (((r = $n[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var o = n.next,
          i = r.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (n.next = a);
        }
        r.pending = n;
      }
    $n = null;
  }
  return e;
}
function g1(e, t) {
  do {
    var r = Ee;
    try {
      if ((Nf(), (zs.current = ml), hl)) {
        for (var n = ye.memoizedState; n !== null; ) {
          var o = n.queue;
          o !== null && (o.pending = null), (n = n.next);
        }
        hl = !1;
      }
      if (
        ((Nn = 0),
        (Fe = Re = ye = null),
        (ji = !1),
        (fa = 0),
        (tp.current = null),
        r === null || r.return === null)
      ) {
        (Me = 1), (ma = t), (Ee = null);
        break;
      }
      e: {
        var i = e,
          a = r.return,
          s = r,
          l = t;
        if (
          ((t = We),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = s,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = xm(a);
          if (h !== null) {
            (h.flags &= -257),
              bm(h, a, s, i, t),
              h.mode & 1 && ym(i, u, t),
              (t = h),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ym(i, u, t), ap();
              break e;
            }
            l = Error(A(426));
          }
        } else if (pe && s.mode & 1) {
          var _ = xm(a);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              bm(_, a, s, i, t),
              Vf(Wo(l, s));
            break e;
          }
        }
        (i = l = Wo(l, s)),
          Me !== 4 && (Me = 2),
          Li === null ? (Li = [i]) : Li.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var g = Jy(i, l, t);
              dm(i, g);
              break e;
            case 1:
              s = l;
              var p = i.type,
                m = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (nn === null || !nn.has(m))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = e1(i, s, t);
                dm(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      x1(r);
    } catch (P) {
      (t = P), Ee === r && r !== null && (Ee = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function v1() {
  var e = gl.current;
  return (gl.current = ml), e === null ? ml : e;
}
function ap() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    Le === null || (!(Wn & 268435455) && !(uu & 268435455)) || Kr(Le, We);
}
function xl(e, t) {
  var r = Y;
  Y |= 2;
  var n = v1();
  (Le !== e || We !== t) && ((gr = null), Mn(e, t));
  do
    try {
      fC();
      break;
    } catch (o) {
      g1(e, o);
    }
  while (!0);
  if ((Nf(), (Y = r), (gl.current = n), Ee !== null)) throw Error(A(261));
  return (Le = null), (We = 0), Me;
}
function fC() {
  for (; Ee !== null; ) y1(Ee);
}
function pC() {
  for (; Ee !== null && !Dw(); ) y1(Ee);
}
function y1(e) {
  var t = S1(e.alternate, e, gt);
  (e.memoizedProps = e.pendingProps),
    t === null ? x1(e) : (Ee = t),
    (tp.current = null);
}
function x1(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = aC(r, t)), r !== null)) {
        (r.flags &= 32767), (Ee = r);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Me = 6), (Ee = null);
        return;
      }
    } else if (((r = iC(r, t, gt)), r !== null)) {
      Ee = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ee = t;
      return;
    }
    Ee = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function wn(e, t, r) {
  var n = te,
    o = Ft.transition;
  try {
    (Ft.transition = null), (te = 1), hC(e, t, r, n);
  } finally {
    (Ft.transition = o), (te = n);
  }
  return null;
}
function hC(e, t, r, n) {
  do Ao();
  while (Xr !== null);
  if (Y & 6) throw Error(A(327));
  r = e.finishedWork;
  var o = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (Yw(e, i),
    e === Le && ((Ee = Le = null), (We = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      ss ||
      ((ss = !0),
      w1(el, function () {
        return Ao(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = Ft.transition), (Ft.transition = null);
    var a = te;
    te = 1;
    var s = Y;
    (Y |= 4),
      (tp.current = null),
      lC(e, r),
      p1(r, e),
      jk(pd),
      (rl = !!fd),
      (pd = fd = null),
      (e.current = r),
      uC(r),
      Bw(),
      (Y = s),
      (te = a),
      (Ft.transition = i);
  } else e.current = r;
  if (
    (ss && ((ss = !1), (Xr = e), (yl = o)),
    (i = e.pendingLanes),
    i === 0 && (nn = null),
    Nw(r.stateNode),
    dt(e, ke()),
    t !== null)
  )
    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
      (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
  if (vl) throw ((vl = !1), (e = Md), (Md = null), e);
  return (
    yl & 1 && e.tag !== 0 && Ao(),
    (i = e.pendingLanes),
    i & 1 ? (e === jd ? Ii++ : ((Ii = 0), (jd = e))) : (Ii = 0),
    hn(),
    null
  );
}
function Ao() {
  if (Xr !== null) {
    var e = Zv(yl),
      t = Ft.transition,
      r = te;
    try {
      if (((Ft.transition = null), (te = 16 > e ? 16 : e), Xr === null))
        var n = !1;
      else {
        if (((e = Xr), (Xr = null), (yl = 0), Y & 6)) throw Error(A(331));
        var o = Y;
        for (Y |= 4, j = e.current; j !== null; ) {
          var i = j,
            a = i.child;
          if (j.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l];
                for (j = u; j !== null; ) {
                  var c = j;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Fi(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (j = d);
                  else
                    for (; j !== null; ) {
                      c = j;
                      var f = c.sibling,
                        h = c.return;
                      if ((c1(c), c === u)) {
                        j = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (j = f);
                        break;
                      }
                      j = h;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
                  do {
                    var _ = x.sibling;
                    (x.sibling = null), (x = _);
                  } while (x !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (j = a);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fi(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (j = g);
                break e;
              }
              j = i.return;
            }
        }
        var p = e.current;
        for (j = p; j !== null; ) {
          a = j;
          var m = a.child;
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (j = m);
          else
            e: for (a = p; j !== null; ) {
              if (((s = j), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lu(9, s);
                  }
                } catch (P) {
                  Se(s, s.return, P);
                }
              if (s === a) {
                j = null;
                break e;
              }
              var k = s.sibling;
              if (k !== null) {
                (k.return = s.return), (j = k);
                break e;
              }
              j = s.return;
            }
        }
        if (
          ((Y = o), hn(), ur && typeof ur.onPostCommitFiberRoot == "function")
        )
          try {
            ur.onPostCommitFiberRoot(eu, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (te = r), (Ft.transition = t);
    }
  }
  return !1;
}
function Mm(e, t, r) {
  (t = Wo(r, t)),
    (t = Jy(e, t, 1)),
    (e = rn(e, t, 1)),
    (t = Je()),
    e !== null && (_a(e, 1, t), dt(e, t));
}
function Se(e, t, r) {
  if (e.tag === 3) Mm(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Mm(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (nn === null || !nn.has(n)))
        ) {
          (e = Wo(r, e)),
            (e = e1(t, e, 1)),
            (t = rn(t, e, 1)),
            (e = Je()),
            t !== null && (_a(t, 1, e), dt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function mC(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t),
    (t = Je()),
    (e.pingedLanes |= e.suspendedLanes & r),
    Le === e &&
      (We & r) === r &&
      (Me === 4 || (Me === 3 && (We & 130023424) === We && 500 > ke() - np)
        ? Mn(e, 0)
        : (rp |= r)),
    dt(e, t);
}
function b1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qa), (qa <<= 1), !(qa & 130023424) && (qa = 4194304))
      : (t = 1));
  var r = Je();
  (e = Ar(e, t)), e !== null && (_a(e, t, r), dt(e, r));
}
function gC(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), b1(e, r);
}
function vC(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        o = e.memoizedState;
      o !== null && (r = o.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  n !== null && n.delete(t), b1(e, r);
}
var S1;
S1 = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ut.current) lt = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (lt = !1), oC(e, t, r);
      lt = !!(e.flags & 131072);
    }
  else (lt = !1), pe && t.flags & 1048576 && Cy(t, ul, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      Rs(e, t), (e = t.pendingProps);
      var o = Bo(t, Xe.current);
      zo(t, r), (o = Xf(null, t, n, e, o, r));
      var i = qf();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ct(n) ? ((i = !0), sl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Hf(t),
            (o.updater = au),
            (t.stateNode = o),
            (o._reactInternals = t),
            wd(t, n, e, r),
            (t = _d(null, t, n, !0, i, r)))
          : ((t.tag = 0), pe && i && Df(t), qe(null, t, o, r), (t = t.child)),
        t
      );
    case 16:
      n = t.elementType;
      e: {
        switch (
          (Rs(e, t),
          (e = t.pendingProps),
          (o = n._init),
          (n = o(n._payload)),
          (t.type = n),
          (o = t.tag = xC(n)),
          (e = Ot(n, e)),
          o)
        ) {
          case 0:
            t = Cd(null, t, n, e, r);
            break e;
          case 1:
            t = km(null, t, n, e, r);
            break e;
          case 11:
            t = Sm(null, t, n, e, r);
            break e;
          case 14:
            t = wm(null, t, n, Ot(n.type, e), r);
            break e;
        }
        throw Error(A(306, n, ""));
      }
      return t;
    case 0:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ot(n, o)),
        Cd(e, t, n, o, r)
      );
    case 1:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ot(n, o)),
        km(e, t, n, o, r)
      );
    case 3:
      e: {
        if ((o1(t), e === null)) throw Error(A(387));
        (n = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Ey(e, t),
          fl(t, n, null, r);
        var a = t.memoizedState;
        if (((n = a.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Wo(Error(A(423)), t)), (t = Cm(e, t, n, r, o));
            break e;
          } else if (n !== o) {
            (o = Wo(Error(A(424)), t)), (t = Cm(e, t, n, r, o));
            break e;
          } else
            for (
              vt = tn(t.stateNode.containerInfo.firstChild),
                xt = t,
                pe = !0,
                Wt = null,
                r = Ry(t, null, n, r),
                t.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Vo(), n === o)) {
            t = Rr(e, t, r);
            break e;
          }
          qe(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        My(t),
        e === null && xd(t),
        (n = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        hd(n, o) ? (a = null) : i !== null && hd(n, i) && (t.flags |= 32),
        n1(e, t),
        qe(e, t, a, r),
        t.child
      );
    case 6:
      return e === null && xd(t), null;
    case 13:
      return i1(e, t, r);
    case 4:
      return (
        Gf(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Oo(t, null, n, r)) : qe(e, t, n, r),
        t.child
      );
    case 11:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ot(n, o)),
        Sm(e, t, n, o, r)
      );
    case 7:
      return qe(e, t, t.pendingProps, r), t.child;
    case 8:
      return qe(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return qe(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (
          ((n = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          ae(cl, n._currentValue),
          (n._currentValue = a),
          i !== null)
        )
          if (Xt(i.value, a)) {
            if (i.children === o.children && !ut.current) {
              t = Rr(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                a = i.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      (l = Cr(-1, r & -r)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      bd(i.return, r, t),
                      (s.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(A(341));
                (a.lanes |= r),
                  (s = a.alternate),
                  s !== null && (s.lanes |= r),
                  bd(a, r, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        qe(e, t, o.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (n = t.pendingProps.children),
        zo(t, r),
        (o = Lt(o)),
        (n = n(o)),
        (t.flags |= 1),
        qe(e, t, n, r),
        t.child
      );
    case 14:
      return (
        (n = t.type),
        (o = Ot(n, t.pendingProps)),
        (o = Ot(n.type, o)),
        wm(e, t, n, o, r)
      );
    case 15:
      return t1(e, t, t.type, t.pendingProps, r);
    case 17:
      return (
        (n = t.type),
        (o = t.pendingProps),
        (o = t.elementType === n ? o : Ot(n, o)),
        Rs(e, t),
        (t.tag = 1),
        ct(n) ? ((e = !0), sl(t)) : (e = !1),
        zo(t, r),
        zy(t, n, o),
        wd(t, n, o, r),
        _d(null, t, n, !0, e, r)
      );
    case 19:
      return a1(e, t, r);
    case 22:
      return r1(e, t, r);
  }
  throw Error(A(156, t.tag));
};
function w1(e, t) {
  return Yv(e, t);
}
function yC(e, t, r, n) {
  (this.tag = e),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Mt(e, t, r, n) {
  return new yC(e, t, r, n);
}
function sp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function xC(e) {
  if (typeof e == "function") return sp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Tf)) return 11;
    if (e === Pf) return 14;
  }
  return 2;
}
function an(e, t) {
  var r = e.alternate;
  return (
    r === null
      ? ((r = Mt(e.tag, t, e.key, e.mode)),
        (r.elementType = e.elementType),
        (r.type = e.type),
        (r.stateNode = e.stateNode),
        (r.alternate = e),
        (e.alternate = r))
      : ((r.pendingProps = t),
        (r.type = e.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = e.flags & 14680064),
    (r.childLanes = e.childLanes),
    (r.lanes = e.lanes),
    (r.child = e.child),
    (r.memoizedProps = e.memoizedProps),
    (r.memoizedState = e.memoizedState),
    (r.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (r.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (r.sibling = e.sibling),
    (r.index = e.index),
    (r.ref = e.ref),
    r
  );
}
function Fs(e, t, r, n, o, i) {
  var a = 2;
  if (((n = e), typeof e == "function")) sp(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case no:
        return jn(r.children, o, i, t);
      case _f:
        (a = 8), (o |= 8);
        break;
      case Gc:
        return (
          (e = Mt(12, r, t, o | 2)), (e.elementType = Gc), (e.lanes = i), e
        );
      case Kc:
        return (e = Mt(13, r, t, o)), (e.elementType = Kc), (e.lanes = i), e;
      case Yc:
        return (e = Mt(19, r, t, o)), (e.elementType = Yc), (e.lanes = i), e;
      case Av:
        return cu(r, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case $v:
              a = 10;
              break e;
            case zv:
              a = 9;
              break e;
            case Tf:
              a = 11;
              break e;
            case Pf:
              a = 14;
              break e;
            case Wr:
              (a = 16), (n = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Mt(a, r, t, o)), (t.elementType = e), (t.type = n), (t.lanes = i), t
  );
}
function jn(e, t, r, n) {
  return (e = Mt(7, e, n, t)), (e.lanes = r), e;
}
function cu(e, t, r, n) {
  return (
    (e = Mt(22, e, n, t)),
    (e.elementType = Av),
    (e.lanes = r),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function dc(e, t, r) {
  return (e = Mt(6, e, null, t)), (e.lanes = r), e;
}
function fc(e, t, r) {
  return (
    (t = Mt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = r),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function bC(e, t, r, n, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gu(0)),
    (this.expirationTimes = Gu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gu(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function lp(e, t, r, n, o, i, a, s, l) {
  return (
    (e = new bC(e, t, r, s, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Mt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Hf(i),
    e
  );
}
function SC(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ro,
    key: n == null ? null : "" + n,
    children: e,
    containerInfo: t,
    implementation: r,
  };
}
function k1(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (Yn(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ct(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (ct(r)) return wy(e, r, t);
  }
  return t;
}
function C1(e, t, r, n, o, i, a, s, l) {
  return (
    (e = lp(r, n, !0, e, o, i, a, s, l)),
    (e.context = k1(null)),
    (r = e.current),
    (n = Je()),
    (o = on(r)),
    (i = Cr(n, o)),
    (i.callback = t ?? null),
    rn(r, i, o),
    (e.current.lanes = o),
    _a(e, o, n),
    dt(e, n),
    e
  );
}
function du(e, t, r, n) {
  var o = t.current,
    i = Je(),
    a = on(o);
  return (
    (r = k1(r)),
    t.context === null ? (t.context = r) : (t.pendingContext = r),
    (t = Cr(i, a)),
    (t.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (t.callback = n),
    (e = rn(o, t, a)),
    e !== null && (Kt(e, o, a, i), $s(e, o, a)),
    a
  );
}
function bl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function up(e, t) {
  jm(e, t), (e = e.alternate) && jm(e, t);
}
function wC() {
  return null;
}
var _1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function cp(e) {
  this._internalRoot = e;
}
fu.prototype.render = cp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  du(e, t, null, null);
};
fu.prototype.unmount = cp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Un(function () {
      du(null, e, null, null);
    }),
      (t[zr] = null);
  }
};
function fu(e) {
  this._internalRoot = e;
}
fu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ty();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < Gr.length && t !== 0 && t < Gr[r].priority; r++);
    Gr.splice(r, 0, e), r === 0 && ny(e);
  }
};
function dp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function pu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Fm() {}
function kC(e, t, r, n, o) {
  if (o) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = bl(a);
        i.call(u);
      };
    }
    var a = C1(t, n, e, 0, null, !1, !1, "", Fm);
    return (
      (e._reactRootContainer = a),
      (e[zr] = a.current),
      sa(e.nodeType === 8 ? e.parentNode : e),
      Un(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof n == "function") {
    var s = n;
    n = function () {
      var u = bl(l);
      s.call(u);
    };
  }
  var l = lp(e, 0, !1, null, null, !1, !1, "", Fm);
  return (
    (e._reactRootContainer = l),
    (e[zr] = l.current),
    sa(e.nodeType === 8 ? e.parentNode : e),
    Un(function () {
      du(t, l, r, n);
    }),
    l
  );
}
function hu(e, t, r, n, o) {
  var i = r._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var l = bl(a);
        s.call(l);
      };
    }
    du(t, a, e, o);
  } else a = kC(r, t, e, o, n);
  return bl(a);
}
Jv = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = Si(t.pendingLanes);
        r !== 0 &&
          (zf(t, r | 1), dt(t, ke()), !(Y & 6) && ((Uo = ke() + 500), hn()));
      }
      break;
    case 13:
      Un(function () {
        var n = Ar(e, 1);
        if (n !== null) {
          var o = Je();
          Kt(n, e, 1, o);
        }
      }),
        up(e, 1);
  }
};
Af = function (e) {
  if (e.tag === 13) {
    var t = Ar(e, 134217728);
    if (t !== null) {
      var r = Je();
      Kt(t, e, 134217728, r);
    }
    up(e, 134217728);
  }
};
ey = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      r = Ar(e, t);
    if (r !== null) {
      var n = Je();
      Kt(r, e, t, n);
    }
    up(e, t);
  }
};
ty = function () {
  return te;
};
ry = function (e, t) {
  var r = te;
  try {
    return (te = e), t();
  } finally {
    te = r;
  }
};
od = function (e, t, r) {
  switch (t) {
    case "input":
      if ((qc(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < r.length;
          t++
        ) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var o = ou(n);
            if (!o) throw Error(A(90));
            Mv(n), qc(n, o);
          }
        }
      }
      break;
    case "textarea":
      Fv(e, r);
      break;
    case "select":
      (t = r.value), t != null && To(e, !!r.multiple, t, !1);
  }
};
Nv = op;
Wv = Un;
var CC = { usingClientEntryPoint: !1, Events: [Pa, so, ou, Vv, Ov, op] },
  pi = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  _C = {
    bundleType: pi.bundleType,
    version: pi.version,
    rendererPackageName: pi.rendererPackageName,
    rendererConfig: pi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Fr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Gv(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: pi.findFiberByHostInstance || wC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ls.isDisabled && ls.supportsFiber)
    try {
      (eu = ls.inject(_C)), (ur = ls);
    } catch {}
}
Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = CC;
Ct.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!dp(t)) throw Error(A(200));
  return SC(e, t, null, r);
};
Ct.createRoot = function (e, t) {
  if (!dp(e)) throw Error(A(299));
  var r = !1,
    n = "",
    o = _1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = lp(e, 1, !1, null, null, r, !1, n, o)),
    (e[zr] = t.current),
    sa(e.nodeType === 8 ? e.parentNode : e),
    new cp(t)
  );
};
Ct.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = Gv(t)), (e = e === null ? null : e.stateNode), e;
};
Ct.flushSync = function (e) {
  return Un(e);
};
Ct.hydrate = function (e, t, r) {
  if (!pu(t)) throw Error(A(200));
  return hu(null, e, t, !0, r);
};
Ct.hydrateRoot = function (e, t, r) {
  if (!dp(e)) throw Error(A(405));
  var n = (r != null && r.hydratedSources) || null,
    o = !1,
    i = "",
    a = _1;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (o = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (a = r.onRecoverableError)),
    (t = C1(t, null, e, 1, r ?? null, o, !1, i, a)),
    (e[zr] = t.current),
    sa(e),
    n)
  )
    for (e = 0; e < n.length; e++)
      (r = n[e]),
        (o = r._getVersion),
        (o = o(r._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [r, o])
          : t.mutableSourceEagerHydrationData.push(r, o);
  return new fu(t);
};
Ct.render = function (e, t, r) {
  if (!pu(t)) throw Error(A(200));
  return hu(null, e, t, !1, r);
};
Ct.unmountComponentAtNode = function (e) {
  if (!pu(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (Un(function () {
        hu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zr] = null);
        });
      }),
      !0)
    : !1;
};
Ct.unstable_batchedUpdates = op;
Ct.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!pu(r)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return hu(e, t, r, !1, n);
};
Ct.version = "18.2.0-next-9e3b772b8-20220608";
function T1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T1);
    } catch (e) {
      console.error(e);
    }
}
T1(), (Cv.exports = Ct);
var fp = Cv.exports,
  [P1, TC] = qo({ strict: !1, name: "PortalContext" }),
  pp = "chakra-portal",
  PC = ".chakra-portal",
  EC = (e) =>
    b.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  $C = (e) => {
    const { appendToParentPortal: t, children: r } = e,
      [n, o] = C.useState(null),
      i = C.useRef(null),
      [, a] = C.useState({});
    C.useEffect(() => a({}), []);
    const s = TC(),
      l = ww();
    Io(() => {
      if (!n) return;
      const c = n.ownerDocument,
        d = t ? s ?? c.body : c.body;
      if (!d) return;
      (i.current = c.createElement("div")),
        (i.current.className = pp),
        d.appendChild(i.current),
        a({});
      const f = i.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [n]);
    const u =
      l != null && l.zIndex
        ? b.jsx(EC, { zIndex: l == null ? void 0 : l.zIndex, children: r })
        : r;
    return i.current
      ? fp.createPortal(b.jsx(P1, { value: i.current, children: u }), i.current)
      : b.jsx("span", {
          ref: (c) => {
            c && o(c);
          },
        });
  },
  zC = (e) => {
    const { children: t, containerRef: r, appendToParentPortal: n } = e,
      o = r.current,
      i = o ?? (typeof window < "u" ? document.body : void 0),
      a = C.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement("div");
        return l && (l.className = pp), l;
      }, [o]),
      [, s] = C.useState({});
    return (
      Io(() => s({}), []),
      Io(() => {
        if (!(!a || !i))
          return (
            i.appendChild(a),
            () => {
              i.removeChild(a);
            }
          );
      }, [a, i]),
      i && a
        ? fp.createPortal(b.jsx(P1, { value: n ? a : null, children: t }), a)
        : null
    );
  };
function mu(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: r, ...n } = t;
  return r ? b.jsx(zC, { containerRef: r, ...n }) : b.jsx($C, { ...n });
}
mu.className = pp;
mu.selector = PC;
mu.displayName = "Portal";
function AC() {
  const e = C.useContext(Zi);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var hp = C.createContext({});
hp.displayName = "ColorModeContext";
function mp() {
  const e = C.useContext(hp);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
var us = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function RC(e = {}) {
  const { preventTransition: t = !0 } = e,
    r = {
      setDataset: (n) => {
        const o = t ? r.preventTransition() : void 0;
        (document.documentElement.dataset.theme = n),
          (document.documentElement.style.colorScheme = n),
          o == null || o();
      },
      setClassName(n) {
        document.body.classList.add(n ? us.dark : us.light),
          document.body.classList.remove(n ? us.light : us.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(n) {
        var o;
        return ((o = r.query().matches) != null ? o : n === "dark")
          ? "dark"
          : "light";
      },
      addListener(n) {
        const o = r.query(),
          i = (a) => {
            n(a.matches ? "dark" : "light");
          };
        return (
          typeof o.addListener == "function"
            ? o.addListener(i)
            : o.addEventListener("change", i),
          () => {
            typeof o.removeListener == "function"
              ? o.removeListener(i)
              : o.removeEventListener("change", i);
          }
        );
      },
      preventTransition() {
        const n = document.createElement("style");
        return (
          n.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          document.head.appendChild(n),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(n);
                });
              });
          }
        );
      },
    };
  return r;
}
var MC = "chakra-ui-color-mode";
function jC(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {}
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
var FC = jC(MC),
  Lm = () => {};
function Im(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function E1(e) {
  const {
      value: t,
      children: r,
      options: {
        useSystemColorMode: n,
        initialColorMode: o,
        disableTransitionOnChange: i,
      } = {},
      colorModeManager: a = FC,
    } = e,
    s = o === "dark" ? "dark" : "light",
    [l, u] = C.useState(() => Im(a, s)),
    [c, d] = C.useState(() => Im(a)),
    {
      getSystemTheme: f,
      setClassName: h,
      setDataset: y,
      addListener: x,
    } = C.useMemo(() => RC({ preventTransition: i }), [i]),
    _ = o === "system" && !l ? c : l,
    g = C.useCallback(
      (k) => {
        const P = k === "system" ? f() : k;
        u(P), h(P === "dark"), y(P), a.set(P);
      },
      [a, f, h, y]
    );
  Io(() => {
    o === "system" && d(f());
  }, []),
    C.useEffect(() => {
      const k = a.get();
      if (k) {
        g(k);
        return;
      }
      if (o === "system") {
        g("system");
        return;
      }
      g(s);
    }, [a, s, o, g]);
  const p = C.useCallback(() => {
    g(_ === "dark" ? "light" : "dark");
  }, [_, g]);
  C.useEffect(() => {
    if (n) return x(g);
  }, [n, x, g]);
  const m = C.useMemo(
    () => ({
      colorMode: t ?? _,
      toggleColorMode: t ? Lm : p,
      setColorMode: t ? Lm : g,
      forced: t !== void 0,
    }),
    [_, p, g, t]
  );
  return b.jsx(hp.Provider, { value: m, children: r });
}
E1.displayName = "ColorModeProvider";
function LC() {
  const e = mp(),
    t = AC();
  return { ...e, theme: t };
}
var ot = (...e) => e.filter(Boolean).join(" ");
function Yt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
function qr(e, ...t) {
  return IC(e) ? e(...t) : e;
}
var IC = (e) => typeof e == "function",
  Dm = (e) => (e ? "" : void 0),
  Sl = { exports: {} };
Sl.exports;
(function (e, t) {
  var r = 200,
    n = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    a = 9007199254740991,
    s = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    h = "[object Function]",
    y = "[object GeneratorFunction]",
    x = "[object Map]",
    _ = "[object Number]",
    g = "[object Null]",
    p = "[object Object]",
    m = "[object Proxy]",
    k = "[object RegExp]",
    P = "[object Set]",
    $ = "[object String]",
    E = "[object Undefined]",
    z = "[object WeakMap]",
    F = "[object ArrayBuffer]",
    L = "[object DataView]",
    be = "[object Float32Array]",
    ze = "[object Float64Array]",
    De = "[object Int8Array]",
    Te = "[object Int16Array]",
    qt = "[object Int32Array]",
    me = "[object Uint8Array]",
    it = "[object Uint8ClampedArray]",
    R = "[object Uint16Array]",
    B = "[object Uint32Array]",
    N = /[\\^$.*+?()[\]{}|]/g,
    O = /^\[object .+?Constructor\]$/,
    ie = /^(?:0|[1-9]\d*)$/,
    K = {};
  (K[be] = K[ze] = K[De] = K[Te] = K[qt] = K[me] = K[it] = K[R] = K[B] = !0),
    (K[s] =
      K[l] =
      K[F] =
      K[c] =
      K[L] =
      K[d] =
      K[f] =
      K[h] =
      K[x] =
      K[_] =
      K[p] =
      K[k] =
      K[P] =
      K[$] =
      K[z] =
        !1);
  var ht = typeof Ua == "object" && Ua && Ua.Object === Object && Ua,
    Lr = typeof self == "object" && self && self.Object === Object && self,
    Ae = ht || Lr || Function("return this")(),
    Zt = t && !t.nodeType && t,
    gn = Zt && !0 && e && !e.nodeType && e,
    qn = gn && gn.exports === Zt,
    Ir = qn && ht.process,
    Jt = (function () {
      try {
        var v = gn && gn.require && gn.require("util").types;
        return v || (Ir && Ir.binding && Ir.binding("util"));
      } catch {}
    })(),
    Eu = Jt && Jt.isTypedArray;
  function Vb(v, S, T) {
    switch (T.length) {
      case 0:
        return v.call(S);
      case 1:
        return v.call(S, T[0]);
      case 2:
        return v.call(S, T[0], T[1]);
      case 3:
        return v.call(S, T[0], T[1], T[2]);
    }
    return v.apply(S, T);
  }
  function Ob(v, S) {
    for (var T = -1, M = Array(v); ++T < v; ) M[T] = S(T);
    return M;
  }
  function Nb(v) {
    return function (S) {
      return v(S);
    };
  }
  function Wb(v, S) {
    return v == null ? void 0 : v[S];
  }
  function Ub(v, S) {
    return function (T) {
      return v(S(T));
    };
  }
  var Hb = Array.prototype,
    Gb = Function.prototype,
    La = Object.prototype,
    $u = Ae["__core-js_shared__"],
    Ia = Gb.toString,
    pr = La.hasOwnProperty,
    eh = (function () {
      var v = /[^.]+$/.exec(($u && $u.keys && $u.keys.IE_PROTO) || "");
      return v ? "Symbol(src)_1." + v : "";
    })(),
    th = La.toString,
    Kb = Ia.call(Object),
    Yb = RegExp(
      "^" +
        Ia.call(pr)
          .replace(N, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Da = qn ? Ae.Buffer : void 0,
    rh = Ae.Symbol,
    nh = Ae.Uint8Array,
    oh = Da ? Da.allocUnsafe : void 0,
    ih = Ub(Object.getPrototypeOf, Object),
    ah = Object.create,
    Qb = La.propertyIsEnumerable,
    Xb = Hb.splice,
    vn = rh ? rh.toStringTag : void 0,
    Ba = (function () {
      try {
        var v = Ru(Object, "defineProperty");
        return v({}, "", {}), v;
      } catch {}
    })(),
    qb = Da ? Da.isBuffer : void 0,
    sh = Math.max,
    Zb = Date.now,
    lh = Ru(Ae, "Map"),
    ri = Ru(Object, "create"),
    Jb = (function () {
      function v() {}
      return function (S) {
        if (!xn(S)) return {};
        if (ah) return ah(S);
        v.prototype = S;
        var T = new v();
        return (v.prototype = void 0), T;
      };
    })();
  function yn(v) {
    var S = -1,
      T = v == null ? 0 : v.length;
    for (this.clear(); ++S < T; ) {
      var M = v[S];
      this.set(M[0], M[1]);
    }
  }
  function eS() {
    (this.__data__ = ri ? ri(null) : {}), (this.size = 0);
  }
  function tS(v) {
    var S = this.has(v) && delete this.__data__[v];
    return (this.size -= S ? 1 : 0), S;
  }
  function rS(v) {
    var S = this.__data__;
    if (ri) {
      var T = S[v];
      return T === n ? void 0 : T;
    }
    return pr.call(S, v) ? S[v] : void 0;
  }
  function nS(v) {
    var S = this.__data__;
    return ri ? S[v] !== void 0 : pr.call(S, v);
  }
  function oS(v, S) {
    var T = this.__data__;
    return (
      (this.size += this.has(v) ? 0 : 1),
      (T[v] = ri && S === void 0 ? n : S),
      this
    );
  }
  (yn.prototype.clear = eS),
    (yn.prototype.delete = tS),
    (yn.prototype.get = rS),
    (yn.prototype.has = nS),
    (yn.prototype.set = oS);
  function hr(v) {
    var S = -1,
      T = v == null ? 0 : v.length;
    for (this.clear(); ++S < T; ) {
      var M = v[S];
      this.set(M[0], M[1]);
    }
  }
  function iS() {
    (this.__data__ = []), (this.size = 0);
  }
  function aS(v) {
    var S = this.__data__,
      T = Va(S, v);
    if (T < 0) return !1;
    var M = S.length - 1;
    return T == M ? S.pop() : Xb.call(S, T, 1), --this.size, !0;
  }
  function sS(v) {
    var S = this.__data__,
      T = Va(S, v);
    return T < 0 ? void 0 : S[T][1];
  }
  function lS(v) {
    return Va(this.__data__, v) > -1;
  }
  function uS(v, S) {
    var T = this.__data__,
      M = Va(T, v);
    return M < 0 ? (++this.size, T.push([v, S])) : (T[M][1] = S), this;
  }
  (hr.prototype.clear = iS),
    (hr.prototype.delete = aS),
    (hr.prototype.get = sS),
    (hr.prototype.has = lS),
    (hr.prototype.set = uS);
  function Zn(v) {
    var S = -1,
      T = v == null ? 0 : v.length;
    for (this.clear(); ++S < T; ) {
      var M = v[S];
      this.set(M[0], M[1]);
    }
  }
  function cS() {
    (this.size = 0),
      (this.__data__ = {
        hash: new yn(),
        map: new (lh || hr)(),
        string: new yn(),
      });
  }
  function dS(v) {
    var S = Na(this, v).delete(v);
    return (this.size -= S ? 1 : 0), S;
  }
  function fS(v) {
    return Na(this, v).get(v);
  }
  function pS(v) {
    return Na(this, v).has(v);
  }
  function hS(v, S) {
    var T = Na(this, v),
      M = T.size;
    return T.set(v, S), (this.size += T.size == M ? 0 : 1), this;
  }
  (Zn.prototype.clear = cS),
    (Zn.prototype.delete = dS),
    (Zn.prototype.get = fS),
    (Zn.prototype.has = pS),
    (Zn.prototype.set = hS);
  function Jn(v) {
    var S = (this.__data__ = new hr(v));
    this.size = S.size;
  }
  function mS() {
    (this.__data__ = new hr()), (this.size = 0);
  }
  function gS(v) {
    var S = this.__data__,
      T = S.delete(v);
    return (this.size = S.size), T;
  }
  function vS(v) {
    return this.__data__.get(v);
  }
  function yS(v) {
    return this.__data__.has(v);
  }
  function xS(v, S) {
    var T = this.__data__;
    if (T instanceof hr) {
      var M = T.__data__;
      if (!lh || M.length < r - 1)
        return M.push([v, S]), (this.size = ++T.size), this;
      T = this.__data__ = new Zn(M);
    }
    return T.set(v, S), (this.size = T.size), this;
  }
  (Jn.prototype.clear = mS),
    (Jn.prototype.delete = gS),
    (Jn.prototype.get = vS),
    (Jn.prototype.has = yS),
    (Jn.prototype.set = xS);
  function bS(v, S) {
    var T = Fu(v),
      M = !T && ju(v),
      G = !T && !M && ph(v),
      ne = !T && !M && !G && mh(v),
      de = T || M || G || ne,
      U = de ? Ob(v.length, String) : [],
      fe = U.length;
    for (var Tt in v)
      (S || pr.call(v, Tt)) &&
        !(
          de &&
          (Tt == "length" ||
            (G && (Tt == "offset" || Tt == "parent")) ||
            (ne &&
              (Tt == "buffer" || Tt == "byteLength" || Tt == "byteOffset")) ||
            dh(Tt, fe))
        ) &&
        U.push(Tt);
    return U;
  }
  function zu(v, S, T) {
    ((T !== void 0 && !Wa(v[S], T)) || (T === void 0 && !(S in v))) &&
      Au(v, S, T);
  }
  function SS(v, S, T) {
    var M = v[S];
    (!(pr.call(v, S) && Wa(M, T)) || (T === void 0 && !(S in v))) &&
      Au(v, S, T);
  }
  function Va(v, S) {
    for (var T = v.length; T--; ) if (Wa(v[T][0], S)) return T;
    return -1;
  }
  function Au(v, S, T) {
    S == "__proto__" && Ba
      ? Ba(v, S, { configurable: !0, enumerable: !0, value: T, writable: !0 })
      : (v[S] = T);
  }
  var wS = FS();
  function Oa(v) {
    return v == null
      ? v === void 0
        ? E
        : g
      : vn && vn in Object(v)
      ? LS(v)
      : NS(v);
  }
  function uh(v) {
    return ni(v) && Oa(v) == s;
  }
  function kS(v) {
    if (!xn(v) || VS(v)) return !1;
    var S = Iu(v) ? Yb : O;
    return S.test(GS(v));
  }
  function CS(v) {
    return ni(v) && hh(v.length) && !!K[Oa(v)];
  }
  function _S(v) {
    if (!xn(v)) return OS(v);
    var S = fh(v),
      T = [];
    for (var M in v) (M == "constructor" && (S || !pr.call(v, M))) || T.push(M);
    return T;
  }
  function ch(v, S, T, M, G) {
    v !== S &&
      wS(
        S,
        function (ne, de) {
          if ((G || (G = new Jn()), xn(ne))) TS(v, S, de, T, ch, M, G);
          else {
            var U = M ? M(Mu(v, de), ne, de + "", v, S, G) : void 0;
            U === void 0 && (U = ne), zu(v, de, U);
          }
        },
        gh
      );
  }
  function TS(v, S, T, M, G, ne, de) {
    var U = Mu(v, T),
      fe = Mu(S, T),
      Tt = de.get(fe);
    if (Tt) {
      zu(v, T, Tt);
      return;
    }
    var mt = ne ? ne(U, fe, T + "", v, S, de) : void 0,
      oi = mt === void 0;
    if (oi) {
      var Du = Fu(fe),
        Bu = !Du && ph(fe),
        yh = !Du && !Bu && mh(fe);
      (mt = fe),
        Du || Bu || yh
          ? Fu(U)
            ? (mt = U)
            : KS(U)
            ? (mt = RS(U))
            : Bu
            ? ((oi = !1), (mt = $S(fe, !0)))
            : yh
            ? ((oi = !1), (mt = AS(fe, !0)))
            : (mt = [])
          : YS(fe) || ju(fe)
          ? ((mt = U),
            ju(U) ? (mt = QS(U)) : (!xn(U) || Iu(U)) && (mt = IS(fe)))
          : (oi = !1);
    }
    oi && (de.set(fe, mt), G(mt, fe, M, ne, de), de.delete(fe)), zu(v, T, mt);
  }
  function PS(v, S) {
    return US(WS(v, S, vh), v + "");
  }
  var ES = Ba
    ? function (v, S) {
        return Ba(v, "toString", {
          configurable: !0,
          enumerable: !1,
          value: qS(S),
          writable: !0,
        });
      }
    : vh;
  function $S(v, S) {
    if (S) return v.slice();
    var T = v.length,
      M = oh ? oh(T) : new v.constructor(T);
    return v.copy(M), M;
  }
  function zS(v) {
    var S = new v.constructor(v.byteLength);
    return new nh(S).set(new nh(v)), S;
  }
  function AS(v, S) {
    var T = S ? zS(v.buffer) : v.buffer;
    return new v.constructor(T, v.byteOffset, v.length);
  }
  function RS(v, S) {
    var T = -1,
      M = v.length;
    for (S || (S = Array(M)); ++T < M; ) S[T] = v[T];
    return S;
  }
  function MS(v, S, T, M) {
    var G = !T;
    T || (T = {});
    for (var ne = -1, de = S.length; ++ne < de; ) {
      var U = S[ne],
        fe = M ? M(T[U], v[U], U, T, v) : void 0;
      fe === void 0 && (fe = v[U]), G ? Au(T, U, fe) : SS(T, U, fe);
    }
    return T;
  }
  function jS(v) {
    return PS(function (S, T) {
      var M = -1,
        G = T.length,
        ne = G > 1 ? T[G - 1] : void 0,
        de = G > 2 ? T[2] : void 0;
      for (
        ne = v.length > 3 && typeof ne == "function" ? (G--, ne) : void 0,
          de && DS(T[0], T[1], de) && ((ne = G < 3 ? void 0 : ne), (G = 1)),
          S = Object(S);
        ++M < G;

      ) {
        var U = T[M];
        U && v(S, U, M, ne);
      }
      return S;
    });
  }
  function FS(v) {
    return function (S, T, M) {
      for (var G = -1, ne = Object(S), de = M(S), U = de.length; U--; ) {
        var fe = de[v ? U : ++G];
        if (T(ne[fe], fe, ne) === !1) break;
      }
      return S;
    };
  }
  function Na(v, S) {
    var T = v.__data__;
    return BS(S) ? T[typeof S == "string" ? "string" : "hash"] : T.map;
  }
  function Ru(v, S) {
    var T = Wb(v, S);
    return kS(T) ? T : void 0;
  }
  function LS(v) {
    var S = pr.call(v, vn),
      T = v[vn];
    try {
      v[vn] = void 0;
      var M = !0;
    } catch {}
    var G = th.call(v);
    return M && (S ? (v[vn] = T) : delete v[vn]), G;
  }
  function IS(v) {
    return typeof v.constructor == "function" && !fh(v) ? Jb(ih(v)) : {};
  }
  function dh(v, S) {
    var T = typeof v;
    return (
      (S = S ?? a),
      !!S &&
        (T == "number" || (T != "symbol" && ie.test(v))) &&
        v > -1 &&
        v % 1 == 0 &&
        v < S
    );
  }
  function DS(v, S, T) {
    if (!xn(T)) return !1;
    var M = typeof S;
    return (M == "number" ? Lu(T) && dh(S, T.length) : M == "string" && S in T)
      ? Wa(T[S], v)
      : !1;
  }
  function BS(v) {
    var S = typeof v;
    return S == "string" || S == "number" || S == "symbol" || S == "boolean"
      ? v !== "__proto__"
      : v === null;
  }
  function VS(v) {
    return !!eh && eh in v;
  }
  function fh(v) {
    var S = v && v.constructor,
      T = (typeof S == "function" && S.prototype) || La;
    return v === T;
  }
  function OS(v) {
    var S = [];
    if (v != null) for (var T in Object(v)) S.push(T);
    return S;
  }
  function NS(v) {
    return th.call(v);
  }
  function WS(v, S, T) {
    return (
      (S = sh(S === void 0 ? v.length - 1 : S, 0)),
      function () {
        for (
          var M = arguments, G = -1, ne = sh(M.length - S, 0), de = Array(ne);
          ++G < ne;

        )
          de[G] = M[S + G];
        G = -1;
        for (var U = Array(S + 1); ++G < S; ) U[G] = M[G];
        return (U[S] = T(de)), Vb(v, this, U);
      }
    );
  }
  function Mu(v, S) {
    if (!(S === "constructor" && typeof v[S] == "function") && S != "__proto__")
      return v[S];
  }
  var US = HS(ES);
  function HS(v) {
    var S = 0,
      T = 0;
    return function () {
      var M = Zb(),
        G = i - (M - T);
      if (((T = M), G > 0)) {
        if (++S >= o) return arguments[0];
      } else S = 0;
      return v.apply(void 0, arguments);
    };
  }
  function GS(v) {
    if (v != null) {
      try {
        return Ia.call(v);
      } catch {}
      try {
        return v + "";
      } catch {}
    }
    return "";
  }
  function Wa(v, S) {
    return v === S || (v !== v && S !== S);
  }
  var ju = uh(
      (function () {
        return arguments;
      })()
    )
      ? uh
      : function (v) {
          return ni(v) && pr.call(v, "callee") && !Qb.call(v, "callee");
        },
    Fu = Array.isArray;
  function Lu(v) {
    return v != null && hh(v.length) && !Iu(v);
  }
  function KS(v) {
    return ni(v) && Lu(v);
  }
  var ph = qb || ZS;
  function Iu(v) {
    if (!xn(v)) return !1;
    var S = Oa(v);
    return S == h || S == y || S == u || S == m;
  }
  function hh(v) {
    return typeof v == "number" && v > -1 && v % 1 == 0 && v <= a;
  }
  function xn(v) {
    var S = typeof v;
    return v != null && (S == "object" || S == "function");
  }
  function ni(v) {
    return v != null && typeof v == "object";
  }
  function YS(v) {
    if (!ni(v) || Oa(v) != p) return !1;
    var S = ih(v);
    if (S === null) return !0;
    var T = pr.call(S, "constructor") && S.constructor;
    return typeof T == "function" && T instanceof T && Ia.call(T) == Kb;
  }
  var mh = Eu ? Nb(Eu) : CS;
  function QS(v) {
    return MS(v, gh(v));
  }
  function gh(v) {
    return Lu(v) ? bS(v, !0) : _S(v);
  }
  var XS = jS(function (v, S, T, M) {
    ch(v, S, T, M);
  });
  function qS(v) {
    return function () {
      return v;
    };
  }
  function vh(v) {
    return v;
  }
  function ZS() {
    return !1;
  }
  e.exports = XS;
})(Sl, Sl.exports);
var DC = Sl.exports;
const sr = cf(DC);
var BC = (e) => /!(important)?$/.test(e),
  Bm = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  VC = (e, t) => (r) => {
    const n = String(t),
      o = BC(n),
      i = Bm(n),
      a = e ? `${e}.${i}` : i;
    let s = Yt(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
    return (s = Bm(s)), o ? `${s} !important` : s;
  };
function gp(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = VC(t, i)(a);
    let u = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (u = n(u, a)), u;
  };
}
var cs =
  (...e) =>
  (t) =>
    e.reduce((r, n) => n(r), t);
function Pt(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return (n.transform = gp({ scale: e, transform: t })), n;
  };
}
var OC =
  ({ rtl: e, ltr: t }) =>
  (r) =>
    r.direction === "rtl" ? e : t;
function NC(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: OC(t),
    transform: r ? gp({ scale: r, compose: n }) : n,
  };
}
var $1 = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function WC() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...$1,
  ].join(" ");
}
function UC() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...$1,
  ].join(" ");
}
var HC = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  GC = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function KC(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
var YC = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  Id = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  QC = new Set(Object.values(Id)),
  Dd = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  XC = (e) => e.trim();
function qC(e, t) {
  if (e == null || Dd.has(e)) return e;
  if (!(Bd(e) || Dd.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    a = o == null ? void 0 : o[2];
  if (!i || !a) return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`,
    [l, ...u] = a.split(",").map(XC).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in Id ? Id[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (QC.has(f)) return f;
    const h = f.indexOf(" "),
      [y, x] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f],
      _ = Bd(x) ? x : x && x.split(" "),
      g = `colors.${y}`,
      p = g in t.__cssMap ? t.__cssMap[g].varRef : y;
    return _ ? [p, ...(Array.isArray(_) ? _ : [_])].join(" ") : p;
  });
  return `${s}(${d.join(", ")})`;
}
var Bd = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  ZC = (e, t) => qC(e, t ?? {});
function JC(e) {
  return /^var\(--.+\)$/.test(e);
}
var e3 = (e) => {
    const t = parseFloat(e.toString()),
      r = e.toString().replace(String(t), "");
    return { unitless: !r, value: t, unit: r };
  },
  tr = (e) => (t) => `${e}(${t})`,
  H = {
    filter(e) {
      return e !== "auto" ? e : HC;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : GC;
    },
    ring(e) {
      return KC(H.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? WC() : e === "auto-gpu" ? UC() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = e3(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const r = { left: "right", right: "left" };
      return t.direction === "rtl" ? r[e] : e;
    },
    degree(e) {
      if (JC(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: ZC,
    blur: tr("blur"),
    opacity: tr("opacity"),
    brightness: tr("brightness"),
    contrast: tr("contrast"),
    dropShadow: tr("drop-shadow"),
    grayscale: tr("grayscale"),
    hueRotate: (e) => tr("hue-rotate")(H.degree(e)),
    invert: tr("invert"),
    saturate: tr("saturate"),
    sepia: tr("sepia"),
    bgImage(e) {
      return e == null || Bd(e) || Dd.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      var t;
      const { space: r, divide: n } = (t = YC[e]) != null ? t : {},
        o = { flexDirection: e };
      return r && (o[r] = 1), n && (o[n] = 1), o;
    },
  },
  w = {
    borderWidths: Pt("borderWidths"),
    borderStyles: Pt("borderStyles"),
    colors: Pt("colors"),
    borders: Pt("borders"),
    gradients: Pt("gradients", H.gradient),
    radii: Pt("radii", H.px),
    space: Pt("space", cs(H.vh, H.px)),
    spaceT: Pt("space", cs(H.vh, H.px)),
    degreeT(e) {
      return { property: e, transform: H.degree };
    },
    prop(e, t, r) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: gp({ scale: t, transform: r }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Pt("sizes", cs(H.vh, H.px)),
    sizesT: Pt("sizes", cs(H.vh, H.fraction)),
    shadows: Pt("shadows"),
    logical: NC,
    blur: Pt("blur", H.blur),
  },
  Ls = {
    background: w.colors("background"),
    backgroundColor: w.colors("backgroundColor"),
    backgroundImage: w.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: H.bgClip },
    bgSize: w.prop("backgroundSize"),
    bgPosition: w.prop("backgroundPosition"),
    bg: w.colors("background"),
    bgColor: w.colors("backgroundColor"),
    bgPos: w.prop("backgroundPosition"),
    bgRepeat: w.prop("backgroundRepeat"),
    bgAttachment: w.prop("backgroundAttachment"),
    bgGradient: w.gradients("backgroundImage"),
    bgClip: { transform: H.bgClip },
  };
Object.assign(Ls, { bgImage: Ls.backgroundImage, bgImg: Ls.backgroundImage });
var Q = {
  border: w.borders("border"),
  borderWidth: w.borderWidths("borderWidth"),
  borderStyle: w.borderStyles("borderStyle"),
  borderColor: w.colors("borderColor"),
  borderRadius: w.radii("borderRadius"),
  borderTop: w.borders("borderTop"),
  borderBlockStart: w.borders("borderBlockStart"),
  borderTopLeftRadius: w.radii("borderTopLeftRadius"),
  borderStartStartRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: w.radii("borderTopRightRadius"),
  borderStartEndRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: w.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: w.borders("borderRight"),
  borderInlineEnd: w.borders("borderInlineEnd"),
  borderBottom: w.borders("borderBottom"),
  borderBlockEnd: w.borders("borderBlockEnd"),
  borderBottomLeftRadius: w.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: w.radii("borderBottomRightRadius"),
  borderLeft: w.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: w.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: w.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: w.borders(["borderLeft", "borderRight"]),
  borderInline: w.borders("borderInline"),
  borderY: w.borders(["borderTop", "borderBottom"]),
  borderBlock: w.borders("borderBlock"),
  borderTopWidth: w.borderWidths("borderTopWidth"),
  borderBlockStartWidth: w.borderWidths("borderBlockStartWidth"),
  borderTopColor: w.colors("borderTopColor"),
  borderBlockStartColor: w.colors("borderBlockStartColor"),
  borderTopStyle: w.borderStyles("borderTopStyle"),
  borderBlockStartStyle: w.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: w.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: w.borderWidths("borderBlockEndWidth"),
  borderBottomColor: w.colors("borderBottomColor"),
  borderBlockEndColor: w.colors("borderBlockEndColor"),
  borderBottomStyle: w.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: w.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: w.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: w.borderWidths("borderInlineStartWidth"),
  borderLeftColor: w.colors("borderLeftColor"),
  borderInlineStartColor: w.colors("borderInlineStartColor"),
  borderLeftStyle: w.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: w.borderStyles("borderInlineStartStyle"),
  borderRightWidth: w.borderWidths("borderRightWidth"),
  borderInlineEndWidth: w.borderWidths("borderInlineEndWidth"),
  borderRightColor: w.colors("borderRightColor"),
  borderInlineEndColor: w.colors("borderInlineEndColor"),
  borderRightStyle: w.borderStyles("borderRightStyle"),
  borderInlineEndStyle: w.borderStyles("borderInlineEndStyle"),
  borderTopRadius: w.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: w.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: w.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: w.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(Q, {
  rounded: Q.borderRadius,
  roundedTop: Q.borderTopRadius,
  roundedTopLeft: Q.borderTopLeftRadius,
  roundedTopRight: Q.borderTopRightRadius,
  roundedTopStart: Q.borderStartStartRadius,
  roundedTopEnd: Q.borderStartEndRadius,
  roundedBottom: Q.borderBottomRadius,
  roundedBottomLeft: Q.borderBottomLeftRadius,
  roundedBottomRight: Q.borderBottomRightRadius,
  roundedBottomStart: Q.borderEndStartRadius,
  roundedBottomEnd: Q.borderEndEndRadius,
  roundedLeft: Q.borderLeftRadius,
  roundedRight: Q.borderRightRadius,
  roundedStart: Q.borderInlineStartRadius,
  roundedEnd: Q.borderInlineEndRadius,
  borderStart: Q.borderInlineStart,
  borderEnd: Q.borderInlineEnd,
  borderTopStartRadius: Q.borderStartStartRadius,
  borderTopEndRadius: Q.borderStartEndRadius,
  borderBottomStartRadius: Q.borderEndStartRadius,
  borderBottomEndRadius: Q.borderEndEndRadius,
  borderStartRadius: Q.borderInlineStartRadius,
  borderEndRadius: Q.borderInlineEndRadius,
  borderStartWidth: Q.borderInlineStartWidth,
  borderEndWidth: Q.borderInlineEndWidth,
  borderStartColor: Q.borderInlineStartColor,
  borderEndColor: Q.borderInlineEndColor,
  borderStartStyle: Q.borderInlineStartStyle,
  borderEndStyle: Q.borderInlineEndStyle,
});
var t3 = {
    color: w.colors("color"),
    textColor: w.colors("color"),
    fill: w.colors("fill"),
    stroke: w.colors("stroke"),
  },
  Vd = {
    boxShadow: w.shadows("boxShadow"),
    mixBlendMode: !0,
    blendMode: w.prop("mixBlendMode"),
    backgroundBlendMode: !0,
    bgBlendMode: w.prop("backgroundBlendMode"),
    opacity: !0,
  };
Object.assign(Vd, { shadow: Vd.boxShadow });
var r3 = {
    filter: { transform: H.filter },
    blur: w.blur("--chakra-blur"),
    brightness: w.propT("--chakra-brightness", H.brightness),
    contrast: w.propT("--chakra-contrast", H.contrast),
    hueRotate: w.propT("--chakra-hue-rotate", H.hueRotate),
    invert: w.propT("--chakra-invert", H.invert),
    saturate: w.propT("--chakra-saturate", H.saturate),
    dropShadow: w.propT("--chakra-drop-shadow", H.dropShadow),
    backdropFilter: { transform: H.backdropFilter },
    backdropBlur: w.blur("--chakra-backdrop-blur"),
    backdropBrightness: w.propT("--chakra-backdrop-brightness", H.brightness),
    backdropContrast: w.propT("--chakra-backdrop-contrast", H.contrast),
    backdropHueRotate: w.propT("--chakra-backdrop-hue-rotate", H.hueRotate),
    backdropInvert: w.propT("--chakra-backdrop-invert", H.invert),
    backdropSaturate: w.propT("--chakra-backdrop-saturate", H.saturate),
  },
  wl = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: H.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: w.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: w.space("gap"),
    rowGap: w.space("rowGap"),
    columnGap: w.space("columnGap"),
  };
Object.assign(wl, { flexDir: wl.flexDirection });
var z1 = {
    gridGap: w.space("gridGap"),
    gridColumnGap: w.space("gridColumnGap"),
    gridRowGap: w.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  },
  n3 = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: H.outline },
    outlineOffset: !0,
    outlineColor: w.colors("outlineColor"),
  },
  $t = {
    width: w.sizesT("width"),
    inlineSize: w.sizesT("inlineSize"),
    height: w.sizes("height"),
    blockSize: w.sizes("blockSize"),
    boxSize: w.sizes(["width", "height"]),
    minWidth: w.sizes("minWidth"),
    minInlineSize: w.sizes("minInlineSize"),
    minHeight: w.sizes("minHeight"),
    minBlockSize: w.sizes("minBlockSize"),
    maxWidth: w.sizes("maxWidth"),
    maxInlineSize: w.sizes("maxInlineSize"),
    maxHeight: w.sizes("maxHeight"),
    maxBlockSize: w.sizes("maxBlockSize"),
    overflow: !0,
    overflowX: !0,
    overflowY: !0,
    overscrollBehavior: !0,
    overscrollBehaviorX: !0,
    overscrollBehaviorY: !0,
    display: !0,
    aspectRatio: !0,
    hideFrom: {
      scale: "breakpoints",
      transform: (e, t) => {
        var r, n, o;
        return {
          [`@media screen and (min-width: ${
            (o =
              (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
                ? void 0
                : n.minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    hideBelow: {
      scale: "breakpoints",
      transform: (e, t) => {
        var r, n, o;
        return {
          [`@media screen and (max-width: ${
            (o =
              (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null
                ? void 0
                : n._minW) != null
              ? o
              : e
          })`]: { display: "none" },
        };
      },
    },
    verticalAlign: !0,
    boxSizing: !0,
    boxDecorationBreak: !0,
    float: w.propT("float", H.float),
    objectFit: !0,
    objectPosition: !0,
    visibility: !0,
    isolation: !0,
  };
Object.assign($t, {
  w: $t.width,
  h: $t.height,
  minW: $t.minWidth,
  maxW: $t.maxWidth,
  minH: $t.minHeight,
  maxH: $t.maxHeight,
  overscroll: $t.overscrollBehavior,
  overscrollX: $t.overscrollBehaviorX,
  overscrollY: $t.overscrollBehaviorY,
});
var o3 = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: w.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: w.prop("listStyleImage"),
};
function i3(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
  return e === void 0 ? r : e;
}
var a3 = (e) => {
    const t = new WeakMap();
    return (n, o, i, a) => {
      if (typeof n > "u") return e(n, o, i);
      t.has(n) || t.set(n, new Map());
      const s = t.get(n);
      if (s.has(o)) return s.get(o);
      const l = e(n, o, i, a);
      return s.set(o, l), l;
    };
  },
  s3 = a3(i3),
  l3 = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  u3 = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  pc = (e, t, r) => {
    const n = {},
      o = s3(e, t, {});
    for (const i in o) (i in r && r[i] != null) || (n[i] = o[i]);
    return n;
  },
  c3 = {
    srOnly: {
      transform(e) {
        return e === !0 ? l3 : e === "focusable" ? u3 : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, r) => pc(t, `layerStyles.${e}`, r),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, r) => pc(t, `textStyles.${e}`, r),
    },
    apply: { processResult: !0, transform: (e, t, r) => pc(t, e, r) },
  },
  Di = {
    position: !0,
    pos: w.prop("position"),
    zIndex: w.prop("zIndex", "zIndices"),
    inset: w.spaceT("inset"),
    insetX: w.spaceT(["left", "right"]),
    insetInline: w.spaceT("insetInline"),
    insetY: w.spaceT(["top", "bottom"]),
    insetBlock: w.spaceT("insetBlock"),
    top: w.spaceT("top"),
    insetBlockStart: w.spaceT("insetBlockStart"),
    bottom: w.spaceT("bottom"),
    insetBlockEnd: w.spaceT("insetBlockEnd"),
    left: w.spaceT("left"),
    insetInlineStart: w.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: w.spaceT("right"),
    insetInlineEnd: w.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(Di, {
  insetStart: Di.insetInlineStart,
  insetEnd: Di.insetInlineEnd,
});
var d3 = {
    ring: { transform: H.ring },
    ringColor: w.colors("--chakra-ring-color"),
    ringOffset: w.prop("--chakra-ring-offset-width"),
    ringOffsetColor: w.colors("--chakra-ring-offset-color"),
    ringInset: w.prop("--chakra-ring-inset"),
  },
  ue = {
    margin: w.spaceT("margin"),
    marginTop: w.spaceT("marginTop"),
    marginBlockStart: w.spaceT("marginBlockStart"),
    marginRight: w.spaceT("marginRight"),
    marginInlineEnd: w.spaceT("marginInlineEnd"),
    marginBottom: w.spaceT("marginBottom"),
    marginBlockEnd: w.spaceT("marginBlockEnd"),
    marginLeft: w.spaceT("marginLeft"),
    marginInlineStart: w.spaceT("marginInlineStart"),
    marginX: w.spaceT(["marginInlineStart", "marginInlineEnd"]),
    marginInline: w.spaceT("marginInline"),
    marginY: w.spaceT(["marginTop", "marginBottom"]),
    marginBlock: w.spaceT("marginBlock"),
    padding: w.space("padding"),
    paddingTop: w.space("paddingTop"),
    paddingBlockStart: w.space("paddingBlockStart"),
    paddingRight: w.space("paddingRight"),
    paddingBottom: w.space("paddingBottom"),
    paddingBlockEnd: w.space("paddingBlockEnd"),
    paddingLeft: w.space("paddingLeft"),
    paddingInlineStart: w.space("paddingInlineStart"),
    paddingInlineEnd: w.space("paddingInlineEnd"),
    paddingX: w.space(["paddingInlineStart", "paddingInlineEnd"]),
    paddingInline: w.space("paddingInline"),
    paddingY: w.space(["paddingTop", "paddingBottom"]),
    paddingBlock: w.space("paddingBlock"),
  };
Object.assign(ue, {
  m: ue.margin,
  mt: ue.marginTop,
  mr: ue.marginRight,
  me: ue.marginInlineEnd,
  marginEnd: ue.marginInlineEnd,
  mb: ue.marginBottom,
  ml: ue.marginLeft,
  ms: ue.marginInlineStart,
  marginStart: ue.marginInlineStart,
  mx: ue.marginX,
  my: ue.marginY,
  p: ue.padding,
  pt: ue.paddingTop,
  py: ue.paddingY,
  px: ue.paddingX,
  pb: ue.paddingBottom,
  pl: ue.paddingLeft,
  ps: ue.paddingInlineStart,
  paddingStart: ue.paddingInlineStart,
  pr: ue.paddingRight,
  pe: ue.paddingInlineEnd,
  paddingEnd: ue.paddingInlineEnd,
});
var f3 = {
    textDecorationColor: w.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: w.shadows("textShadow"),
  },
  p3 = {
    clipPath: !0,
    transform: w.propT("transform", H.transform),
    transformOrigin: !0,
    translateX: w.spaceT("--chakra-translate-x"),
    translateY: w.spaceT("--chakra-translate-y"),
    skewX: w.degreeT("--chakra-skew-x"),
    skewY: w.degreeT("--chakra-skew-y"),
    scaleX: w.prop("--chakra-scale-x"),
    scaleY: w.prop("--chakra-scale-y"),
    scale: w.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: w.degreeT("--chakra-rotate"),
  },
  h3 = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: w.prop("transitionDuration", "transition.duration"),
    transitionProperty: w.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: w.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  m3 = {
    fontFamily: w.prop("fontFamily", "fonts"),
    fontSize: w.prop("fontSize", "fontSizes", H.px),
    fontWeight: w.prop("fontWeight", "fontWeights"),
    lineHeight: w.prop("lineHeight", "lineHeights"),
    letterSpacing: w.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  g3 = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: w.spaceT("scrollMargin"),
    scrollMarginTop: w.spaceT("scrollMarginTop"),
    scrollMarginBottom: w.spaceT("scrollMarginBottom"),
    scrollMarginLeft: w.spaceT("scrollMarginLeft"),
    scrollMarginRight: w.spaceT("scrollMarginRight"),
    scrollMarginX: w.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: w.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: w.spaceT("scrollPadding"),
    scrollPaddingTop: w.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: w.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: w.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: w.spaceT("scrollPaddingRight"),
    scrollPaddingX: w.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: w.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  };
function A1(e) {
  return Yt(e) && e.reference ? e.reference : String(e);
}
var gu = (e, ...t) => t.map(A1).join(` ${e} `).replace(/calc/g, ""),
  Vm = (...e) => `calc(${gu("+", ...e)})`,
  Om = (...e) => `calc(${gu("-", ...e)})`,
  Od = (...e) => `calc(${gu("*", ...e)})`,
  Nm = (...e) => `calc(${gu("/", ...e)})`,
  Wm = (e) => {
    const t = A1(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Od(t, -1);
  },
  Tn = Object.assign(
    (e) => ({
      add: (...t) => Tn(Vm(e, ...t)),
      subtract: (...t) => Tn(Om(e, ...t)),
      multiply: (...t) => Tn(Od(e, ...t)),
      divide: (...t) => Tn(Nm(e, ...t)),
      negate: () => Tn(Wm(e)),
      toString: () => e.toString(),
    }),
    { add: Vm, subtract: Om, multiply: Od, divide: Nm, negate: Wm }
  );
function v3(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function y3(e) {
  const t = v3(e.toString());
  return b3(x3(t));
}
function x3(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function b3(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function S3(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function w3(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function k3(e, t = "") {
  return y3(`--${S3(e, t)}`);
}
function D(e, t, r) {
  const n = k3(e, r);
  return { variable: n, reference: w3(n, t) };
}
function C3(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = D(`${e}-${o}`, i);
      continue;
    }
    r[n] = D(`${e}-${n}`);
  }
  return r;
}
function _3(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function T3(e) {
  const t = parseFloat(e.toString()),
    r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Nd(e) {
  if (e == null) return e;
  const { unitless: t } = T3(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var R1 = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  vp = (e) => Object.fromEntries(Object.entries(e).sort(R1));
function Um(e) {
  const t = vp(e);
  return Object.assign(Object.values(t), t);
}
function P3(e) {
  const t = Object.keys(vp(e));
  return new Set(t);
}
function Hm(e) {
  var t;
  if (!e) return e;
  e = (t = Nd(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number"
    ? `${e + r}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function ki(e, t) {
  const r = ["@media screen"];
  return (
    e && r.push("and", `(min-width: ${Nd(e)})`),
    t && r.push("and", `(max-width: ${Nd(t)})`),
    r.join(" ")
  );
}
function E3(e) {
  var t;
  if (!e) return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Um(e),
    n = Object.entries(e)
      .sort(R1)
      .map(([a, s], l, u) => {
        var c;
        let [, d] = (c = u[l + 1]) != null ? c : [];
        return (
          (d = parseFloat(d) > 0 ? Hm(d) : void 0),
          {
            _minW: Hm(s),
            breakpoint: a,
            minW: s,
            maxW: d,
            maxWQuery: ki(null, d),
            minWQuery: ki(s),
            minMaxQuery: ki(s, d),
          }
        );
      }),
    o = P3(e),
    i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: vp(e),
    asArray: Um(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [null, ...r.map((a) => ki(a)).slice(1)],
    toArrayValue(a) {
      if (!Yt(a)) throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var u;
        return (u = a[l]) != null ? u : null;
      });
      for (; _3(s) === null; ) s.pop();
      return s;
    },
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, u) => {
        const c = i[u];
        return c != null && l != null && (s[c] = l), s;
      }, {});
    },
  };
}
var Be = {
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  Br = (e) => M1((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  mr = (e) => M1((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  M1 = (e, ...t) => t.map(e).join(", "),
  vu = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty",
    _expanded: "&[aria-expanded=true], &[data-expanded]",
    _checked: "&[aria-checked=true], &[data-checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
    _groupHover: Br(Be.hover),
    _peerHover: mr(Be.hover),
    _groupFocus: Br(Be.focus),
    _peerFocus: mr(Be.focus),
    _groupFocusVisible: Br(Be.focusVisible),
    _peerFocusVisible: mr(Be.focusVisible),
    _groupActive: Br(Be.active),
    _peerActive: mr(Be.active),
    _groupDisabled: Br(Be.disabled),
    _peerDisabled: mr(Be.disabled),
    _groupInvalid: Br(Be.invalid),
    _peerInvalid: mr(Be.invalid),
    _groupChecked: Br(Be.checked),
    _peerChecked: mr(Be.checked),
    _groupFocusWithin: Br(Be.focusWithin),
    _peerFocusWithin: mr(Be.focusWithin),
    _peerPlaceholderShown: mr(Be.placeholderShown),
    _placeholder: "&::placeholder",
    _placeholderShown: "&:placeholder-shown",
    _fullScreen: "&:fullscreen",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
  },
  j1 = Object.keys(vu);
function Gm(e, t) {
  return D(String(e).replace(/\./g, "-"), void 0, t);
}
function $3(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i,
      { variable: l, reference: u } = Gm(
        o,
        t == null ? void 0 : t.cssVarPrefix
      );
    if (!a) {
      if (o.startsWith("space")) {
        const f = o.split("."),
          [h, ...y] = f,
          x = `${h}.-${y.join(".")}`,
          _ = Tn.negate(s),
          g = Tn.negate(u);
        n[x] = { value: _, var: l, varRef: g };
      }
      (r[l] = s), (n[o] = { value: s, var: l, varRef: u });
      continue;
    }
    const c = (f) => {
        const y = [String(o).split(".")[0], f].join(".");
        if (!e[y]) return f;
        const { reference: _ } = Gm(y, t == null ? void 0 : t.cssVarPrefix);
        return _;
      },
      d = Yt(s) ? s : { default: s };
    (r = sr(
      r,
      Object.entries(d).reduce((f, [h, y]) => {
        var x, _;
        if (!y) return f;
        const g = c(`${y}`);
        if (h === "default") return (f[l] = g), f;
        const p = (_ = (x = vu) == null ? void 0 : x[h]) != null ? _ : h;
        return (f[p] = { [l]: g }), f;
      }, {})
    )),
      (n[o] = { value: u, var: l, varRef: u });
  }
  return { cssVars: r, cssMap: n };
}
function z3(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t) n in r && delete r[n];
  return r;
}
function A3(e, t) {
  const r = {};
  for (const n of t) n in e && (r[n] = e[n]);
  return r;
}
function R3(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Km(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (R3(a) || Array.isArray(a)) {
      const u = {};
      for (const [c, d] of Object.entries(a)) {
        const f = (l = o == null ? void 0 : o(c)) != null ? l : c,
          h = [...s, f];
        if (n != null && n(a, h)) return t(a, s);
        u[f] = i(d, h);
      }
      return u;
    }
    return t(a, s);
  }
  return i(e);
}
var M3 = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints",
];
function j3(e) {
  return A3(e, M3);
}
function F3(e) {
  return e.semanticTokens;
}
function L3(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var I3 = (e) => j1.includes(e) || e === "default";
function D3({ tokens: e, semanticTokens: t }) {
  const r = {};
  return (
    Km(e, (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
    }),
    Km(
      t,
      (n, o) => {
        n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
      },
      { stop: (n) => Object.keys(n).every(I3) }
    ),
    r
  );
}
function B3(e) {
  var t;
  const r = L3(e),
    n = j3(r),
    o = F3(r),
    i = D3({ tokens: n, semanticTokens: o }),
    a = (t = r.config) == null ? void 0 : t.cssVarPrefix,
    { cssMap: s, cssVars: l } = $3(i, { cssVarPrefix: a });
  return (
    Object.assign(r, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...l,
      },
      __cssMap: s,
      __breakpoints: E3(r.breakpoints),
    }),
    r
  );
}
var yp = sr(
  {},
  Ls,
  Q,
  t3,
  wl,
  $t,
  r3,
  d3,
  n3,
  z1,
  c3,
  Di,
  Vd,
  ue,
  g3,
  m3,
  f3,
  p3,
  o3,
  h3
);
Object.assign({}, ue, $t, wl, z1, Di);
var V3 = [...Object.keys(yp), ...j1],
  O3 = { ...yp, ...vu },
  N3 = (e) => e in O3,
  W3 = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints,
      i = {};
    for (const a in e) {
      let s = qr(e[a], t);
      if (s == null) continue;
      if (((s = Yt(s) && r(s) ? n(s) : s), !Array.isArray(s))) {
        i[a] = s;
        continue;
      }
      const l = s.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u];
        if (!c) {
          i[a] = s[u];
          continue;
        }
        (i[c] = i[c] || {}), s[u] != null && (i[c][a] = s[u]);
      }
    }
    return i;
  };
function U3(e) {
  const t = [];
  let r = "",
    n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "("
      ? ((n = !0), (r += i))
      : i === ")"
      ? ((n = !1), (r += i))
      : i === "," && !n
      ? (t.push(r), (r = ""))
      : (r += i);
  }
  return (r = r.trim()), r && t.push(r), t;
}
function H3(e) {
  return /^var\(--.+\)$/.test(e);
}
var G3 = (e, t) => e.startsWith("--") && typeof t == "string" && !H3(t),
  K3 = (e, t) => {
    var r, n;
    if (t == null) return t;
    const o = (l) => {
        var u, c;
        return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null
          ? void 0
          : c.varRef;
      },
      i = (l) => {
        var u;
        return (u = o(l)) != null ? u : l;
      },
      [a, s] = U3(t);
    return (t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t)), t;
  };
function Y3(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e,
    o = (i, a = !1) => {
      var s, l, u;
      const c = qr(i, n),
        d = W3(c)(n);
      let f = {};
      for (let h in d) {
        const y = d[h];
        let x = qr(y, n);
        h in r && (h = r[h]), G3(h, x) && (x = K3(n, x));
        let _ = t[h];
        if ((_ === !0 && (_ = { property: h }), Yt(x))) {
          (f[h] = (s = f[h]) != null ? s : {}), (f[h] = sr({}, f[h], o(x, !0)));
          continue;
        }
        let g =
          (u =
            (l = _ == null ? void 0 : _.transform) == null
              ? void 0
              : l.call(_, x, n, c)) != null
            ? u
            : x;
        g = _ != null && _.processResult ? o(g, !0) : g;
        const p = qr(_ == null ? void 0 : _.property, n);
        if (!a && _ != null && _.static) {
          const m = qr(_.static, n);
          f = sr({}, f, m);
        }
        if (p && Array.isArray(p)) {
          for (const m of p) f[m] = g;
          continue;
        }
        if (p) {
          p === "&" && Yt(g) ? (f = sr({}, f, g)) : (f[p] = g);
          continue;
        }
        if (Yt(g)) {
          f = sr({}, f, g);
          continue;
        }
        f[h] = g;
      }
      return f;
    };
  return o;
}
var F1 = (e) => (t) => Y3({ theme: t, pseudos: vu, configs: yp })(e);
function se(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function Q3(e, t) {
  if (Array.isArray(e)) return e;
  if (Yt(e)) return t(e);
  if (e != null) return [e];
}
function X3(e, t) {
  for (let r = t + 1; r < e.length; r++) if (e[r] != null) return r;
  return -1;
}
function q3(e) {
  const t = e.__breakpoints;
  return function (n, o, i, a) {
    var s, l;
    if (!t) return;
    const u = {},
      c = Q3(i, t.toArrayValue);
    if (!c) return u;
    const d = c.length,
      f = d === 1,
      h = !!n.parts;
    for (let y = 0; y < d; y++) {
      const x = t.details[y],
        _ = t.details[X3(c, y)],
        g = ki(x.minW, _ == null ? void 0 : _._minW),
        p = qr((s = n[o]) == null ? void 0 : s[c[y]], a);
      if (p) {
        if (h) {
          (l = n.parts) == null ||
            l.forEach((m) => {
              sr(u, { [m]: f ? p[m] : { [g]: p[m] } });
            });
          continue;
        }
        if (!h) {
          f ? sr(u, p) : (u[g] = p);
          continue;
        }
        u[g] = p;
      }
    }
    return u;
  };
}
function Z3(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t,
      a = q3(i);
    return sr(
      {},
      qr((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function Qn(e) {
  return z3(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var J3 = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  e5 = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  t5 = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  r5 = { property: J3, easing: e5, duration: t5 },
  n5 = r5,
  o5 = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  i5 = o5,
  a5 = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  s5 = a5,
  l5 = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  u5 = l5,
  c5 = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    linkedin: {
      50: "#E8F4F9",
      100: "#CFEDFB",
      200: "#9BDAF3",
      300: "#68C7EC",
      400: "#34B3E4",
      500: "#00A0DC",
      600: "#008CC9",
      700: "#0077B5",
      800: "#005E93",
      900: "#004471",
    },
    facebook: {
      50: "#E8F4F9",
      100: "#D9DEE9",
      200: "#B7C2DA",
      300: "#6482C0",
      400: "#4267B2",
      500: "#385898",
      600: "#314E89",
      700: "#29487D",
      800: "#223B67",
      900: "#1E355B",
    },
    messenger: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
    whatsapp: {
      50: "#dffeec",
      100: "#b9f5d0",
      200: "#90edb3",
      300: "#65e495",
      400: "#3cdd78",
      500: "#22c35e",
      600: "#179848",
      700: "#0c6c33",
      800: "#01421c",
      900: "#001803",
    },
    twitter: {
      50: "#E5F4FD",
      100: "#C8E9FB",
      200: "#A8DCFA",
      300: "#83CDF7",
      400: "#57BBF5",
      500: "#1DA1F2",
      600: "#1A94DA",
      700: "#1681BF",
      800: "#136B9E",
      900: "#0D4D71",
    },
    telegram: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  d5 = c5,
  f5 = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  p5 = f5,
  h5 = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  m5 = h5,
  g5 = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  v5 = g5,
  y5 = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  L1 = y5,
  I1 = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  x5 = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  b5 = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  S5 = { ...I1, ...x5, container: b5 },
  D1 = S5,
  w5 = {
    breakpoints: u5,
    zIndices: i5,
    radii: p5,
    blur: v5,
    colors: d5,
    ...L1,
    sizes: D1,
    shadows: m5,
    space: I1,
    borders: s5,
    transition: n5,
  },
  { defineMultiStyleConfig: k5, definePartsStyle: Ci } = se([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  yr = D("stepper-indicator-size"),
  mo = D("stepper-icon-size"),
  go = D("stepper-title-font-size"),
  _i = D("stepper-description-font-size"),
  hi = D("stepper-accent-color"),
  C5 = Ci(({ colorScheme: e }) => ({
    stepper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4",
      "&[data-orientation=vertical]": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
        alignItems: "center",
      },
      [hi.variable]: `colors.${e}.500`,
      _dark: { [hi.variable]: `colors.${e}.200` },
    },
    title: { fontSize: go.reference, fontWeight: "medium" },
    description: { fontSize: _i.reference, color: "chakra-subtle-text" },
    number: { fontSize: go.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: mo.reference, height: mo.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: yr.reference,
      height: yr.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: hi.reference,
      },
      "&[data-status=complete]": {
        bg: hi.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: hi.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${yr.reference} - 8px)`,
        top: `calc(${yr.reference} + 4px)`,
        insetStart: `calc(${yr.reference} / 2 - 1px)`,
      },
    },
  })),
  _5 = k5({
    baseStyle: C5,
    sizes: {
      xs: Ci({
        stepper: {
          [yr.variable]: "sizes.4",
          [mo.variable]: "sizes.3",
          [go.variable]: "fontSizes.xs",
          [_i.variable]: "fontSizes.xs",
        },
      }),
      sm: Ci({
        stepper: {
          [yr.variable]: "sizes.6",
          [mo.variable]: "sizes.4",
          [go.variable]: "fontSizes.sm",
          [_i.variable]: "fontSizes.xs",
        },
      }),
      md: Ci({
        stepper: {
          [yr.variable]: "sizes.8",
          [mo.variable]: "sizes.5",
          [go.variable]: "fontSizes.md",
          [_i.variable]: "fontSizes.sm",
        },
      }),
      lg: Ci({
        stepper: {
          [yr.variable]: "sizes.10",
          [mo.variable]: "sizes.6",
          [go.variable]: "fontSizes.lg",
          [_i.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  });
function J(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    n();
    for (const d of c) t[d] = l(d);
    return J(e, t);
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return J(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const h = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c])
      .filter(Boolean)
      .join("__")}`;
    return { className: h, selector: `.${h}`, toString: () => c };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
var T5 = J("accordion")
    .parts("root", "container", "button", "panel")
    .extend("icon"),
  P5 = J("alert")
    .parts("title", "description", "container")
    .extend("icon", "spinner"),
  E5 = J("avatar")
    .parts("label", "badge", "container")
    .extend("excessLabel", "group"),
  $5 = J("breadcrumb").parts("link", "item", "container").extend("separator");
J("button").parts();
var z5 = J("checkbox").parts("control", "icon", "container").extend("label");
J("progress").parts("track", "filledTrack").extend("label");
var A5 = J("drawer")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  R5 = J("editable").parts("preview", "input", "textarea"),
  M5 = J("form").parts("container", "requiredIndicator", "helperText"),
  j5 = J("formError").parts("text", "icon"),
  F5 = J("input").parts("addon", "field", "element", "group"),
  L5 = J("list").parts("container", "item", "icon"),
  I5 = J("menu")
    .parts("button", "list", "item")
    .extend("groupTitle", "icon", "command", "divider"),
  D5 = J("modal")
    .parts("overlay", "dialogContainer", "dialog")
    .extend("header", "closeButton", "body", "footer"),
  B5 = J("numberinput").parts("root", "field", "stepperGroup", "stepper");
J("pininput").parts("field");
var V5 = J("popover")
    .parts("content", "header", "body", "footer")
    .extend("popper", "arrow", "closeButton"),
  O5 = J("progress").parts("label", "filledTrack", "track"),
  N5 = J("radio").parts("container", "control", "label"),
  W5 = J("select").parts("field", "icon"),
  U5 = J("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  H5 = J("stat").parts("container", "label", "helpText", "number", "icon"),
  G5 = J("switch").parts("container", "track", "thumb", "label"),
  K5 = J("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  Y5 = J("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  Q5 = J("tag").parts("container", "label", "closeButton"),
  X5 = J("card").parts("container", "header", "body", "footer");
J("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function An(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class q5 extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var Ti = q5;
function xp(e) {
  if (typeof e != "string") throw new Ti(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = i_.test(e) ? e_(e) : e;
  const r = t_.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(ga(s, 2), 16)),
      parseInt(ga(a[3] || "f", 2), 16) / 255,
    ];
  }
  const n = r_.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 16)),
      parseInt(a[3] || "ff", 16) / 255,
    ];
  }
  const o = n_.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [
      ...a.slice(0, 3).map((s) => parseInt(s, 10)),
      parseFloat(a[3] || "1"),
    ];
  }
  const i = o_.exec(t);
  if (i) {
    const [a, s, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (An(0, 100, s) !== s) throw new Ti(e);
    if (An(0, 100, l) !== l) throw new Ti(e);
    return [...a_(a, s, l), Number.isNaN(u) ? 1 : u];
  }
  throw new Ti(e);
}
function Z5(e) {
  let t = 5381,
    r = e.length;
  for (; r; ) t = (t * 33) ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Ym = (e) => parseInt(e.replace(/_/g, ""), 36),
  J5 =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const r = Ym(t.substring(0, 3)),
          n = Ym(t.substring(3)).toString(16);
        let o = "";
        for (let i = 0; i < 6 - n.length; i++) o += "0";
        return (e[r] = `${o}${n}`), e;
      }, {});
function e_(e) {
  const t = e.toLowerCase().trim(),
    r = J5[Z5(t)];
  if (!r) throw new Ti(e);
  return `#${r}`;
}
const ga = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  t_ = new RegExp(`^#${ga("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  r_ = new RegExp(`^#${ga("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  n_ = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${ga(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  o_ =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  i_ = /^[a-z]+$/i,
  Qm = (e) => Math.round(e * 255),
  a_ = (e, t, r) => {
    let n = r / 100;
    if (t === 0) return [n, n, n].map(Qm);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * n - 1)) * (t / 100),
      a = i * (1 - Math.abs((o % 2) - 1));
    let s = 0,
      l = 0,
      u = 0;
    o >= 0 && o < 1
      ? ((s = i), (l = a))
      : o >= 1 && o < 2
      ? ((s = a), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (u = a))
      : o >= 3 && o < 4
      ? ((l = a), (u = i))
      : o >= 4 && o < 5
      ? ((s = a), (u = i))
      : o >= 5 && o < 6 && ((s = i), (u = a));
    const c = n - i / 2,
      d = s + c,
      f = l + c,
      h = u + c;
    return [d, f, h].map(Qm);
  };
function s_(e, t, r, n) {
  return `rgba(${An(0, 255, e).toFixed()}, ${An(0, 255, t).toFixed()}, ${An(
    0,
    255,
    r
  ).toFixed()}, ${parseFloat(An(0, 1, n).toFixed(3))})`;
}
function l_(e, t) {
  const [r, n, o, i] = xp(e);
  return s_(r, n, o, i - t);
}
function u_(e) {
  const [t, r, n, o] = xp(e);
  let i = (a) => {
    const s = An(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function c_(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var d_ = (e) => Object.keys(e).length === 0,
  Ze = (e, t, r) => {
    const n = c_(e, `colors.${t}`, t);
    try {
      return u_(n), n;
    } catch {
      return r ?? "#000000";
    }
  },
  f_ = (e) => {
    const [t, r, n] = xp(e);
    return (t * 299 + r * 587 + n * 114) / 1e3;
  },
  p_ = (e) => (t) => {
    const r = Ze(t, e);
    return f_(r) < 128 ? "dark" : "light";
  },
  h_ = (e) => (t) => p_(e)(t) === "dark",
  Ho = (e, t) => (r) => {
    const n = Ze(r, e);
    return l_(n, 1 - t);
  };
function Xm(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
var m_ = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function g_(e) {
  const t = m_();
  return !e || d_(e)
    ? t
    : e.string && e.colors
    ? y_(e.string, e.colors)
    : e.string && !e.colors
    ? v_(e.string)
    : e.colors && !e.string
    ? x_(e.colors)
    : t;
}
function v_(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let n = 0; n < e.length; n += 1)
    (t = e.charCodeAt(n) + ((t << 5) - t)), (t = t & t);
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = (t >> (n * 8)) & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function y_(e, t) {
  let r = 0;
  if (e.length === 0) return t[0];
  for (let n = 0; n < e.length; n += 1)
    (r = e.charCodeAt(n) + ((r << 5) - r)), (r = r & r);
  return (r = ((r % t.length) + t.length) % t.length), t[r];
}
function x_(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function I(e, t) {
  return (r) => (r.colorMode === "dark" ? t : e);
}
function bp(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? (t === "vertical" ? r : n) : {};
}
function B1(e) {
  return Yt(e) && e.reference ? e.reference : String(e);
}
var yu = (e, ...t) => t.map(B1).join(` ${e} `).replace(/calc/g, ""),
  qm = (...e) => `calc(${yu("+", ...e)})`,
  Zm = (...e) => `calc(${yu("-", ...e)})`,
  Wd = (...e) => `calc(${yu("*", ...e)})`,
  Jm = (...e) => `calc(${yu("/", ...e)})`,
  e0 = (e) => {
    const t = B1(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : Wd(t, -1);
  },
  xr = Object.assign(
    (e) => ({
      add: (...t) => xr(qm(e, ...t)),
      subtract: (...t) => xr(Zm(e, ...t)),
      multiply: (...t) => xr(Wd(e, ...t)),
      divide: (...t) => xr(Jm(e, ...t)),
      negate: () => xr(e0(e)),
      toString: () => e.toString(),
    }),
    { add: qm, subtract: Zm, multiply: Wd, divide: Jm, negate: e0 }
  );
function b_(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function S_(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function V1(e) {
  const t = S_(e.toString());
  return t.includes("\\.") ? e : b_(e) ? t.replace(".", "\\.") : e;
}
function w_(e, t = "") {
  return [t, V1(e)].filter(Boolean).join("-");
}
function k_(e, t) {
  return `var(${V1(e)}${t ? `, ${t}` : ""})`;
}
function C_(e, t = "") {
  return `--${w_(e, t)}`;
}
function je(e, t) {
  const r = C_(e, t == null ? void 0 : t.prefix);
  return { variable: r, reference: k_(r, __(t == null ? void 0 : t.fallback)) };
}
function __(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: T_, definePartsStyle: Is } = se(G5.keys),
  Bi = je("switch-track-width"),
  Fn = je("switch-track-height"),
  hc = je("switch-track-diff"),
  P_ = xr.subtract(Bi, Fn),
  Ud = je("switch-thumb-x"),
  mi = je("switch-bg"),
  E_ = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [Bi.reference],
      height: [Fn.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [mi.variable]: "colors.gray.300",
      _dark: { [mi.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [mi.variable]: `colors.${t}.500`,
        _dark: { [mi.variable]: `colors.${t}.200` },
      },
      bg: mi.reference,
    };
  },
  $_ = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [Fn.reference],
    height: [Fn.reference],
    _checked: { transform: `translateX(${Ud.reference})` },
  },
  z_ = Is((e) => ({
    container: {
      [hc.variable]: P_,
      [Ud.variable]: hc.reference,
      _rtl: { [Ud.variable]: xr(hc).negate().toString() },
    },
    track: E_(e),
    thumb: $_,
  })),
  A_ = {
    sm: Is({
      container: { [Bi.variable]: "1.375rem", [Fn.variable]: "sizes.3" },
    }),
    md: Is({
      container: { [Bi.variable]: "1.875rem", [Fn.variable]: "sizes.4" },
    }),
    lg: Is({
      container: { [Bi.variable]: "2.875rem", [Fn.variable]: "sizes.6" },
    }),
  },
  R_ = T_({
    baseStyle: z_,
    sizes: A_,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: M_, definePartsStyle: Ro } = se(K5.keys),
  j_ = Ro({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  kl = { "&[data-is-numeric=true]": { textAlign: "end" } },
  F_ = Ro((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: I("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: I(`${t}.100`, `${t}.700`)(e),
        ...kl,
      },
      td: {
        borderBottom: "1px",
        borderColor: I(`${t}.100`, `${t}.700`)(e),
        ...kl,
      },
      caption: { color: I("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  L_ = Ro((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: I("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: I(`${t}.100`, `${t}.700`)(e),
        ...kl,
      },
      td: {
        borderBottom: "1px",
        borderColor: I(`${t}.100`, `${t}.700`)(e),
        ...kl,
      },
      caption: { color: I("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: I(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: I(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  I_ = { simple: F_, striped: L_, unstyled: {} },
  D_ = {
    sm: Ro({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: Ro({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: Ro({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  B_ = M_({
    baseStyle: j_,
    variants: I_,
    sizes: D_,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  st = D("tabs-color"),
  Ut = D("tabs-bg"),
  ds = D("tabs-border-color"),
  { defineMultiStyleConfig: V_, definePartsStyle: dr } = se(Y5.keys),
  O_ = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  N_ = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  W_ = (e) => {
    const { align: t = "start", orientation: r } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: r === "vertical" ? "column" : "row",
    };
  },
  U_ = { p: 4 },
  H_ = dr((e) => ({ root: O_(e), tab: N_(e), tablist: W_(e), tabpanel: U_ })),
  G_ = {
    sm: dr({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: dr({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: dr({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  K_ = dr((e) => {
    const { colorScheme: t, orientation: r } = e,
      n = r === "vertical",
      o = n ? "borderStart" : "borderBottom",
      i = n ? "marginStart" : "marginBottom";
    return {
      tablist: { [o]: "2px solid", borderColor: "inherit" },
      tab: {
        [o]: "2px solid",
        borderColor: "transparent",
        [i]: "-2px",
        _selected: {
          [st.variable]: `colors.${t}.600`,
          _dark: { [st.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [Ut.variable]: "colors.gray.200",
          _dark: { [Ut.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: st.reference,
        bg: Ut.reference,
      },
    };
  }),
  Y_ = dr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [ds.variable]: "transparent",
        _selected: {
          [st.variable]: `colors.${t}.600`,
          [ds.variable]: "colors.white",
          _dark: {
            [st.variable]: `colors.${t}.300`,
            [ds.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: ds.reference,
        },
        color: st.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  Q_ = dr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [Ut.variable]: "colors.gray.50",
        _dark: { [Ut.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [Ut.variable]: "colors.white",
          [st.variable]: `colors.${t}.600`,
          _dark: {
            [Ut.variable]: "colors.gray.800",
            [st.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: st.reference,
        bg: Ut.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  X_ = dr((e) => {
    const { colorScheme: t, theme: r } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: Ze(r, `${t}.700`), bg: Ze(r, `${t}.100`) },
      },
    };
  }),
  q_ = dr((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [st.variable]: "colors.gray.600",
        _dark: { [st.variable]: "inherit" },
        _selected: {
          [st.variable]: "colors.white",
          [Ut.variable]: `colors.${t}.600`,
          _dark: {
            [st.variable]: "colors.gray.800",
            [Ut.variable]: `colors.${t}.300`,
          },
        },
        color: st.reference,
        bg: Ut.reference,
      },
    };
  }),
  Z_ = dr({}),
  J_ = {
    line: K_,
    enclosed: Y_,
    "enclosed-colored": Q_,
    "soft-rounded": X_,
    "solid-rounded": q_,
    unstyled: Z_,
  },
  e4 = V_({
    baseStyle: H_,
    sizes: G_,
    variants: J_,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  Ce = C3("badge", ["bg", "color", "shadow"]),
  t4 = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: Ce.bg.reference,
    color: Ce.color.reference,
    boxShadow: Ce.shadow.reference,
  },
  r4 = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Ho(`${t}.500`, 0.6)(r);
    return {
      [Ce.bg.variable]: `colors.${t}.500`,
      [Ce.color.variable]: "colors.white",
      _dark: {
        [Ce.bg.variable]: n,
        [Ce.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  n4 = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Ho(`${t}.200`, 0.16)(r);
    return {
      [Ce.bg.variable]: `colors.${t}.100`,
      [Ce.color.variable]: `colors.${t}.800`,
      _dark: { [Ce.bg.variable]: n, [Ce.color.variable]: `colors.${t}.200` },
    };
  },
  o4 = (e) => {
    const { colorScheme: t, theme: r } = e,
      n = Ho(`${t}.200`, 0.8)(r);
    return {
      [Ce.color.variable]: `colors.${t}.500`,
      _dark: { [Ce.color.variable]: n },
      [Ce.shadow.variable]: `inset 0 0 0px 1px ${Ce.color.reference}`,
    };
  },
  i4 = { solid: r4, subtle: n4, outline: o4 },
  Vi = {
    baseStyle: t4,
    variants: i4,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: a4, definePartsStyle: Ln } = se(Q5.keys),
  t0 = D("tag-bg"),
  r0 = D("tag-color"),
  mc = D("tag-shadow"),
  Ds = D("tag-min-height"),
  Bs = D("tag-min-width"),
  Vs = D("tag-font-size"),
  Os = D("tag-padding-inline"),
  s4 = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [r0.variable]: Ce.color.reference,
    [t0.variable]: Ce.bg.reference,
    [mc.variable]: Ce.shadow.reference,
    color: r0.reference,
    bg: t0.reference,
    boxShadow: mc.reference,
    borderRadius: "md",
    minH: Ds.reference,
    minW: Bs.reference,
    fontSize: Vs.reference,
    px: Os.reference,
    _focusVisible: { [mc.variable]: "shadows.outline" },
  },
  l4 = { lineHeight: 1.2, overflow: "visible" },
  u4 = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  c4 = Ln({ container: s4, label: l4, closeButton: u4 }),
  d4 = {
    sm: Ln({
      container: {
        [Ds.variable]: "sizes.5",
        [Bs.variable]: "sizes.5",
        [Vs.variable]: "fontSizes.xs",
        [Os.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: Ln({
      container: {
        [Ds.variable]: "sizes.6",
        [Bs.variable]: "sizes.6",
        [Vs.variable]: "fontSizes.sm",
        [Os.variable]: "space.2",
      },
    }),
    lg: Ln({
      container: {
        [Ds.variable]: "sizes.8",
        [Bs.variable]: "sizes.8",
        [Vs.variable]: "fontSizes.md",
        [Os.variable]: "space.3",
      },
    }),
  },
  f4 = {
    subtle: Ln((e) => {
      var t;
      return { container: (t = Vi.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: Ln((e) => {
      var t;
      return { container: (t = Vi.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: Ln((e) => {
      var t;
      return { container: (t = Vi.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  p4 = a4({
    variants: f4,
    baseStyle: c4,
    sizes: d4,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  }),
  { definePartsStyle: wr, defineMultiStyleConfig: h4 } = se(F5.keys),
  vo = D("input-height"),
  yo = D("input-font-size"),
  xo = D("input-padding"),
  bo = D("input-border-radius"),
  m4 = wr({
    addon: {
      height: vo.reference,
      fontSize: yo.reference,
      px: xo.reference,
      borderRadius: bo.reference,
    },
    field: {
      width: "100%",
      height: vo.reference,
      fontSize: yo.reference,
      px: xo.reference,
      borderRadius: bo.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  Vr = {
    lg: {
      [yo.variable]: "fontSizes.lg",
      [xo.variable]: "space.4",
      [bo.variable]: "radii.md",
      [vo.variable]: "sizes.12",
    },
    md: {
      [yo.variable]: "fontSizes.md",
      [xo.variable]: "space.4",
      [bo.variable]: "radii.md",
      [vo.variable]: "sizes.10",
    },
    sm: {
      [yo.variable]: "fontSizes.sm",
      [xo.variable]: "space.3",
      [bo.variable]: "radii.sm",
      [vo.variable]: "sizes.8",
    },
    xs: {
      [yo.variable]: "fontSizes.xs",
      [xo.variable]: "space.2",
      [bo.variable]: "radii.sm",
      [vo.variable]: "sizes.6",
    },
  },
  g4 = {
    lg: wr({ field: Vr.lg, group: Vr.lg }),
    md: wr({ field: Vr.md, group: Vr.md }),
    sm: wr({ field: Vr.sm, group: Vr.sm }),
    xs: wr({ field: Vr.xs, group: Vr.xs }),
  };
function Sp(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || I("blue.500", "blue.300")(e),
    errorBorderColor: r || I("red.500", "red.300")(e),
  };
}
var v4 = wr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Sp(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: I("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: Ze(t, n), boxShadow: `0 0 0 1px ${Ze(t, n)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: Ze(t, r),
          boxShadow: `0 0 0 1px ${Ze(t, r)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: I("inherit", "whiteAlpha.50")(e),
        bg: I("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  y4 = wr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Sp(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: I("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: I("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: Ze(t, n) },
        _focusVisible: { bg: "transparent", borderColor: Ze(t, r) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: I("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  x4 = wr((e) => {
    const { theme: t } = e,
      { focusBorderColor: r, errorBorderColor: n } = Sp(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: Ze(t, n),
          boxShadow: `0px 1px 0px 0px ${Ze(t, n)}`,
        },
        _focusVisible: {
          borderColor: Ze(t, r),
          boxShadow: `0px 1px 0px 0px ${Ze(t, r)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  b4 = wr({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  S4 = { outline: v4, filled: y4, flushed: x4, unstyled: b4 },
  Z = h4({
    baseStyle: m4,
    sizes: g4,
    variants: S4,
    defaultProps: { size: "md", variant: "outline" },
  }),
  n0,
  w4 = {
    ...((n0 = Z.baseStyle) == null ? void 0 : n0.field),
    paddingY: "2",
    minHeight: "20",
    lineHeight: "short",
    verticalAlign: "top",
  },
  o0,
  i0,
  k4 = {
    outline: (e) => {
      var t, r;
      return (r = (t = Z.variants) == null ? void 0 : t.outline(e).field) !=
        null
        ? r
        : {};
    },
    flushed: (e) => {
      var t, r;
      return (r = (t = Z.variants) == null ? void 0 : t.flushed(e).field) !=
        null
        ? r
        : {};
    },
    filled: (e) => {
      var t, r;
      return (r = (t = Z.variants) == null ? void 0 : t.filled(e).field) != null
        ? r
        : {};
    },
    unstyled:
      (i0 = (o0 = Z.variants) == null ? void 0 : o0.unstyled.field) != null
        ? i0
        : {},
  },
  a0,
  s0,
  l0,
  u0,
  c0,
  d0,
  f0,
  p0,
  C4 = {
    xs: (s0 = (a0 = Z.sizes) == null ? void 0 : a0.xs.field) != null ? s0 : {},
    sm: (u0 = (l0 = Z.sizes) == null ? void 0 : l0.sm.field) != null ? u0 : {},
    md: (d0 = (c0 = Z.sizes) == null ? void 0 : c0.md.field) != null ? d0 : {},
    lg: (p0 = (f0 = Z.sizes) == null ? void 0 : f0.lg.field) != null ? p0 : {},
  },
  _4 = {
    baseStyle: w4,
    sizes: C4,
    variants: k4,
    defaultProps: { size: "md", variant: "outline" },
  },
  fs = je("tooltip-bg"),
  gc = je("tooltip-fg"),
  T4 = je("popper-arrow-bg"),
  P4 = {
    bg: fs.reference,
    color: gc.reference,
    [fs.variable]: "colors.gray.700",
    [gc.variable]: "colors.whiteAlpha.900",
    _dark: {
      [fs.variable]: "colors.gray.300",
      [gc.variable]: "colors.gray.900",
    },
    [T4.variable]: fs.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  E4 = { baseStyle: P4 },
  { defineMultiStyleConfig: $4, definePartsStyle: Pi } = se(O5.keys),
  z4 = (e) => {
    const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e,
      i = I(Xm(), Xm("1rem", "rgba(0,0,0,0.1)"))(e),
      a = I(`${t}.500`, `${t}.200`)(e),
      s = `linear-gradient(
    to right,
    transparent 0%,
    ${Ze(r, a)} 50%,
    transparent 100%
  )`;
    return { ...(!n && o && i), ...(n ? { bgImage: s } : { bgColor: a }) };
  },
  A4 = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  R4 = (e) => ({ bg: I("gray.100", "whiteAlpha.300")(e) }),
  M4 = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...z4(e),
  }),
  j4 = Pi((e) => ({ label: A4, filledTrack: M4(e), track: R4(e) })),
  F4 = {
    xs: Pi({ track: { h: "1" } }),
    sm: Pi({ track: { h: "2" } }),
    md: Pi({ track: { h: "3" } }),
    lg: Pi({ track: { h: "4" } }),
  },
  L4 = $4({
    sizes: F4,
    baseStyle: j4,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  I4 = (e) => typeof e == "function";
function et(e, ...t) {
  return I4(e) ? e(...t) : e;
}
var { definePartsStyle: Ns, defineMultiStyleConfig: D4 } = se(z5.keys),
  Oi = D("checkbox-size"),
  B4 = (e) => {
    const { colorScheme: t } = e;
    return {
      w: Oi.reference,
      h: Oi.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: I(`${t}.500`, `${t}.200`)(e),
        borderColor: I(`${t}.500`, `${t}.200`)(e),
        color: I("white", "gray.900")(e),
        _hover: {
          bg: I(`${t}.600`, `${t}.300`)(e),
          borderColor: I(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: I("gray.200", "transparent")(e),
          bg: I("gray.200", "whiteAlpha.300")(e),
          color: I("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: I(`${t}.500`, `${t}.200`)(e),
        borderColor: I(`${t}.500`, `${t}.200`)(e),
        color: I("white", "gray.900")(e),
      },
      _disabled: {
        bg: I("gray.100", "whiteAlpha.100")(e),
        borderColor: I("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: I("red.500", "red.300")(e) },
    };
  },
  V4 = { _disabled: { cursor: "not-allowed" } },
  O4 = { userSelect: "none", _disabled: { opacity: 0.4 } },
  N4 = { transitionProperty: "transform", transitionDuration: "normal" },
  W4 = Ns((e) => ({ icon: N4, container: V4, control: et(B4, e), label: O4 })),
  U4 = {
    sm: Ns({
      control: { [Oi.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: Ns({
      control: { [Oi.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: Ns({
      control: { [Oi.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  Cl = D4({
    baseStyle: W4,
    sizes: U4,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: H4, definePartsStyle: Ws } = se(N5.keys),
  G4 = (e) => {
    var t;
    const r = (t = et(Cl.baseStyle, e)) == null ? void 0 : t.control;
    return {
      ...r,
      borderRadius: "full",
      _checked: {
        ...(r == null ? void 0 : r._checked),
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  K4 = Ws((e) => {
    var t, r, n, o;
    return {
      label: (r = (t = Cl).baseStyle) == null ? void 0 : r.call(t, e).label,
      container:
        (o = (n = Cl).baseStyle) == null ? void 0 : o.call(n, e).container,
      control: G4(e),
    };
  }),
  Y4 = {
    md: Ws({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: Ws({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: Ws({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  Q4 = H4({
    baseStyle: K4,
    sizes: Y4,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: X4, definePartsStyle: q4 } = se(W5.keys),
  ps = D("select-bg"),
  h0,
  Z4 = {
    ...((h0 = Z.baseStyle) == null ? void 0 : h0.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: ps.reference,
    [ps.variable]: "colors.white",
    _dark: { [ps.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: ps.reference },
  },
  J4 = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  eT = q4({ field: Z4, icon: J4 }),
  hs = { paddingInlineEnd: "8" },
  m0,
  g0,
  v0,
  y0,
  x0,
  b0,
  S0,
  w0,
  tT = {
    lg: {
      ...((m0 = Z.sizes) == null ? void 0 : m0.lg),
      field: { ...((g0 = Z.sizes) == null ? void 0 : g0.lg.field), ...hs },
    },
    md: {
      ...((v0 = Z.sizes) == null ? void 0 : v0.md),
      field: { ...((y0 = Z.sizes) == null ? void 0 : y0.md.field), ...hs },
    },
    sm: {
      ...((x0 = Z.sizes) == null ? void 0 : x0.sm),
      field: { ...((b0 = Z.sizes) == null ? void 0 : b0.sm.field), ...hs },
    },
    xs: {
      ...((S0 = Z.sizes) == null ? void 0 : S0.xs),
      field: { ...((w0 = Z.sizes) == null ? void 0 : w0.xs.field), ...hs },
      icon: { insetEnd: "1" },
    },
  },
  rT = X4({
    baseStyle: eT,
    sizes: tT,
    variants: Z.variants,
    defaultProps: Z.defaultProps,
  }),
  vc = D("skeleton-start-color"),
  yc = D("skeleton-end-color"),
  nT = {
    [vc.variable]: "colors.gray.100",
    [yc.variable]: "colors.gray.400",
    _dark: {
      [vc.variable]: "colors.gray.800",
      [yc.variable]: "colors.gray.600",
    },
    background: vc.reference,
    borderColor: yc.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  oT = { baseStyle: nT },
  xc = D("skip-link-bg"),
  iT = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [xc.variable]: "colors.white",
      _dark: { [xc.variable]: "colors.gray.700" },
      bg: xc.reference,
    },
  },
  aT = { baseStyle: iT },
  { defineMultiStyleConfig: sT, definePartsStyle: xu } = se(U5.keys),
  va = D("slider-thumb-size"),
  ya = D("slider-track-size"),
  Yr = D("slider-bg"),
  lT = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...bp({
        orientation: t,
        vertical: { h: "100%" },
        horizontal: { w: "100%" },
      }),
    };
  },
  uT = (e) => ({
    ...bp({
      orientation: e.orientation,
      horizontal: { h: ya.reference },
      vertical: { w: ya.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [Yr.variable]: "colors.gray.200",
    _dark: { [Yr.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [Yr.variable]: "colors.gray.300",
      _dark: { [Yr.variable]: "colors.whiteAlpha.300" },
    },
    bg: Yr.reference,
  }),
  cT = (e) => {
    const { orientation: t } = e;
    return {
      ...bp({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: va.reference,
      h: va.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  dT = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [Yr.variable]: `colors.${t}.500`,
      _dark: { [Yr.variable]: `colors.${t}.200` },
      bg: Yr.reference,
    };
  },
  fT = xu((e) => ({
    container: lT(e),
    track: uT(e),
    thumb: cT(e),
    filledTrack: dT(e),
  })),
  pT = xu({
    container: { [va.variable]: "sizes.4", [ya.variable]: "sizes.1" },
  }),
  hT = xu({
    container: { [va.variable]: "sizes.3.5", [ya.variable]: "sizes.1" },
  }),
  mT = xu({
    container: { [va.variable]: "sizes.2.5", [ya.variable]: "sizes.0.5" },
  }),
  gT = { lg: pT, md: hT, sm: mT },
  vT = sT({
    baseStyle: fT,
    sizes: gT,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  Pn = je("spinner-size"),
  yT = { width: [Pn.reference], height: [Pn.reference] },
  xT = {
    xs: { [Pn.variable]: "sizes.3" },
    sm: { [Pn.variable]: "sizes.4" },
    md: { [Pn.variable]: "sizes.6" },
    lg: { [Pn.variable]: "sizes.8" },
    xl: { [Pn.variable]: "sizes.12" },
  },
  bT = { baseStyle: yT, sizes: xT, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: ST, definePartsStyle: O1 } = se(H5.keys),
  wT = { fontWeight: "medium" },
  kT = { opacity: 0.8, marginBottom: "2" },
  CT = { verticalAlign: "baseline", fontWeight: "semibold" },
  _T = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  TT = O1({ container: {}, label: wT, helpText: kT, number: CT, icon: _T }),
  PT = {
    md: O1({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  ET = ST({ baseStyle: TT, sizes: PT, defaultProps: { size: "md" } }),
  bc = D("kbd-bg"),
  $T = {
    [bc.variable]: "colors.gray.100",
    _dark: { [bc.variable]: "colors.whiteAlpha.100" },
    bg: bc.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  zT = { baseStyle: $T },
  AT = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  RT = { baseStyle: AT },
  { defineMultiStyleConfig: MT, definePartsStyle: jT } = se(L5.keys),
  FT = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  LT = jT({ icon: FT }),
  IT = MT({ baseStyle: LT }),
  { defineMultiStyleConfig: DT, definePartsStyle: BT } = se(I5.keys),
  nr = D("menu-bg"),
  Sc = D("menu-shadow"),
  VT = {
    [nr.variable]: "#fff",
    [Sc.variable]: "shadows.sm",
    _dark: {
      [nr.variable]: "colors.gray.700",
      [Sc.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
    bg: nr.reference,
    boxShadow: Sc.reference,
  },
  OT = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [nr.variable]: "colors.gray.100",
      _dark: { [nr.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [nr.variable]: "colors.gray.200",
      _dark: { [nr.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [nr.variable]: "colors.gray.100",
      _dark: { [nr.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: nr.reference,
  },
  NT = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  WT = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  UT = { opacity: 0.6 },
  HT = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  GT = { transitionProperty: "common", transitionDuration: "normal" },
  KT = BT({
    button: GT,
    list: VT,
    item: OT,
    groupTitle: NT,
    icon: WT,
    command: UT,
    divider: HT,
  }),
  YT = DT({ baseStyle: KT }),
  { defineMultiStyleConfig: QT, definePartsStyle: Hd } = se(D5.keys),
  wc = D("modal-bg"),
  kc = D("modal-shadow"),
  XT = { bg: "blackAlpha.600", zIndex: "modal" },
  qT = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: r === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  ZT = (e) => {
    const { isCentered: t, scrollBehavior: r } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [wc.variable]: "colors.white",
      [kc.variable]: "shadows.lg",
      _dark: {
        [wc.variable]: "colors.gray.700",
        [kc.variable]: "shadows.dark-lg",
      },
      bg: wc.reference,
      boxShadow: kc.reference,
    };
  },
  JT = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  eP = { position: "absolute", top: "2", insetEnd: "3" },
  tP = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  rP = { px: "6", py: "4" },
  nP = Hd((e) => ({
    overlay: XT,
    dialogContainer: et(qT, e),
    dialog: et(ZT, e),
    header: JT,
    closeButton: eP,
    body: et(tP, e),
    footer: rP,
  }));
function Vt(e) {
  return Hd(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
var oP = {
    xs: Vt("xs"),
    sm: Vt("sm"),
    md: Vt("md"),
    lg: Vt("lg"),
    xl: Vt("xl"),
    "2xl": Vt("2xl"),
    "3xl": Vt("3xl"),
    "4xl": Vt("4xl"),
    "5xl": Vt("5xl"),
    "6xl": Vt("6xl"),
    full: Vt("full"),
  },
  iP = QT({ baseStyle: nP, sizes: oP, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: aP, definePartsStyle: N1 } = se(B5.keys),
  wp = je("number-input-stepper-width"),
  W1 = je("number-input-input-padding"),
  sP = xr(wp).add("0.5rem").toString(),
  Cc = je("number-input-bg"),
  _c = je("number-input-color"),
  Tc = je("number-input-border-color"),
  lP = { [wp.variable]: "sizes.6", [W1.variable]: sP },
  uP = (e) => {
    var t, r;
    return (r = (t = et(Z.baseStyle, e)) == null ? void 0 : t.field) != null
      ? r
      : {};
  },
  cP = { width: wp.reference },
  dP = {
    borderStart: "1px solid",
    borderStartColor: Tc.reference,
    color: _c.reference,
    bg: Cc.reference,
    [_c.variable]: "colors.chakra-body-text",
    [Tc.variable]: "colors.chakra-border-color",
    _dark: {
      [_c.variable]: "colors.whiteAlpha.800",
      [Tc.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [Cc.variable]: "colors.gray.200",
      _dark: { [Cc.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  fP = N1((e) => {
    var t;
    return {
      root: lP,
      field: (t = et(uP, e)) != null ? t : {},
      stepperGroup: cP,
      stepper: dP,
    };
  });
function ms(e) {
  var t, r, n;
  const o = (t = Z.sizes) == null ? void 0 : t[e],
    i = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md",
    s = L1.fontSizes[a];
  return N1({
    field: { ...o.field, paddingInlineEnd: W1.reference, verticalAlign: "top" },
    stepper: {
      fontSize: xr(s).multiply(0.75).toString(),
      _first: { borderTopEndRadius: i[e] },
      _last: { borderBottomEndRadius: i[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
var pP = { xs: ms("xs"), sm: ms("sm"), md: ms("md"), lg: ms("lg") },
  hP = aP({
    baseStyle: fP,
    sizes: pP,
    variants: Z.variants,
    defaultProps: Z.defaultProps,
  }),
  k0,
  mP = {
    ...((k0 = Z.baseStyle) == null ? void 0 : k0.field),
    textAlign: "center",
  },
  gP = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  },
  C0,
  _0,
  vP = {
    outline: (e) => {
      var t, r, n;
      return (n =
        (r = et((t = Z.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    flushed: (e) => {
      var t, r, n;
      return (n =
        (r = et((t = Z.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    filled: (e) => {
      var t, r, n;
      return (n =
        (r = et((t = Z.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : r.field) != null
        ? n
        : {};
    },
    unstyled:
      (_0 = (C0 = Z.variants) == null ? void 0 : C0.unstyled.field) != null
        ? _0
        : {},
  },
  yP = { baseStyle: mP, sizes: gP, variants: vP, defaultProps: Z.defaultProps },
  { defineMultiStyleConfig: xP, definePartsStyle: bP } = se(V5.keys),
  gs = je("popper-bg"),
  SP = je("popper-arrow-bg"),
  T0 = je("popper-arrow-shadow-color"),
  wP = { zIndex: 10 },
  kP = {
    [gs.variable]: "colors.white",
    bg: gs.reference,
    [SP.variable]: gs.reference,
    [T0.variable]: "colors.gray.200",
    _dark: {
      [gs.variable]: "colors.gray.700",
      [T0.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  CP = { px: 3, py: 2, borderBottomWidth: "1px" },
  _P = { px: 3, py: 2 },
  TP = { px: 3, py: 2, borderTopWidth: "1px" },
  PP = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  EP = bP({
    popper: wP,
    content: kP,
    header: CP,
    body: _P,
    footer: TP,
    closeButton: PP,
  }),
  $P = xP({ baseStyle: EP }),
  { definePartsStyle: Gd, defineMultiStyleConfig: zP } = se(A5.keys),
  Pc = D("drawer-bg"),
  Ec = D("drawer-box-shadow");
function to(e) {
  return Gd(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
var AP = { bg: "blackAlpha.600", zIndex: "modal" },
  RP = { display: "flex", zIndex: "modal", justifyContent: "center" },
  MP = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [Pc.variable]: "colors.white",
      [Ec.variable]: "shadows.lg",
      _dark: {
        [Pc.variable]: "colors.gray.700",
        [Ec.variable]: "shadows.dark-lg",
      },
      bg: Pc.reference,
      boxShadow: Ec.reference,
    };
  },
  jP = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  FP = { position: "absolute", top: "2", insetEnd: "3" },
  LP = { px: "6", py: "2", flex: "1", overflow: "auto" },
  IP = { px: "6", py: "4" },
  DP = Gd((e) => ({
    overlay: AP,
    dialogContainer: RP,
    dialog: et(MP, e),
    header: jP,
    closeButton: FP,
    body: LP,
    footer: IP,
  })),
  BP = {
    xs: to("xs"),
    sm: to("md"),
    md: to("lg"),
    lg: to("2xl"),
    xl: to("4xl"),
    full: to("full"),
  },
  VP = zP({ baseStyle: DP, sizes: BP, defaultProps: { size: "xs" } }),
  { definePartsStyle: OP, defineMultiStyleConfig: NP } = se(R5.keys),
  WP = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  UP = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  HP = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  GP = OP({ preview: WP, input: UP, textarea: HP }),
  KP = NP({ baseStyle: GP }),
  { definePartsStyle: YP, defineMultiStyleConfig: QP } = se(M5.keys),
  Mo = D("form-control-color"),
  XP = {
    marginStart: "1",
    [Mo.variable]: "colors.red.500",
    _dark: { [Mo.variable]: "colors.red.300" },
    color: Mo.reference,
  },
  qP = {
    mt: "2",
    [Mo.variable]: "colors.gray.600",
    _dark: { [Mo.variable]: "colors.whiteAlpha.600" },
    color: Mo.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  ZP = YP({
    container: { width: "100%", position: "relative" },
    requiredIndicator: XP,
    helperText: qP,
  }),
  JP = QP({ baseStyle: ZP }),
  { definePartsStyle: e6, defineMultiStyleConfig: t6 } = se(j5.keys),
  jo = D("form-error-color"),
  r6 = {
    [jo.variable]: "colors.red.500",
    _dark: { [jo.variable]: "colors.red.300" },
    color: jo.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  n6 = {
    marginEnd: "0.5em",
    [jo.variable]: "colors.red.500",
    _dark: { [jo.variable]: "colors.red.300" },
    color: jo.reference,
  },
  o6 = e6({ text: r6, icon: n6 }),
  i6 = t6({ baseStyle: o6 }),
  a6 = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  s6 = { baseStyle: a6 },
  l6 = { fontFamily: "heading", fontWeight: "bold" },
  u6 = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  c6 = { baseStyle: l6, sizes: u6, defaultProps: { size: "xl" } },
  { defineMultiStyleConfig: d6, definePartsStyle: f6 } = se($5.keys),
  $c = D("breadcrumb-link-decor"),
  p6 = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    outline: "none",
    color: "inherit",
    textDecoration: $c.reference,
    [$c.variable]: "none",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      _hover: { [$c.variable]: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  h6 = f6({ link: p6 }),
  m6 = d6({ baseStyle: h6 }),
  g6 = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  U1 = (e) => {
    const { colorScheme: t, theme: r } = e;
    if (t === "gray")
      return {
        color: I("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: I("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: I("gray.200", "whiteAlpha.300")(e) },
      };
    const n = Ho(`${t}.200`, 0.12)(r),
      o = Ho(`${t}.200`, 0.24)(r);
    return {
      color: I(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: I(`${t}.50`, n)(e) },
      _active: { bg: I(`${t}.100`, o)(e) },
    };
  },
  v6 = (e) => {
    const { colorScheme: t } = e,
      r = I("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? r : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...et(U1, e),
    };
  },
  y6 = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  x6 = (e) => {
    var t;
    const { colorScheme: r } = e;
    if (r === "gray") {
      const l = I("gray.100", "whiteAlpha.200")(e);
      return {
        bg: l,
        color: I("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: I("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: l },
        },
        _active: { bg: I("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: n = `${r}.500`,
        color: o = "white",
        hoverBg: i = `${r}.600`,
        activeBg: a = `${r}.700`,
      } = (t = y6[r]) != null ? t : {},
      s = I(n, `${r}.200`)(e);
    return {
      bg: s,
      color: I(o, "gray.800")(e),
      _hover: { bg: I(i, `${r}.300`)(e), _disabled: { bg: s } },
      _active: { bg: I(a, `${r}.400`)(e) },
    };
  },
  b6 = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: I(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: I(`${t}.700`, `${t}.500`)(e) },
    };
  },
  S6 = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  w6 = { ghost: U1, outline: v6, solid: x6, link: b6, unstyled: S6 },
  k6 = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  C6 = {
    baseStyle: g6,
    variants: w6,
    sizes: k6,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: In, defineMultiStyleConfig: _6 } = se(X5.keys),
  _l = D("card-bg"),
  _r = D("card-padding"),
  H1 = D("card-shadow"),
  Us = D("card-radius"),
  G1 = D("card-border-width", "0"),
  K1 = D("card-border-color"),
  T6 = In({
    container: {
      [_l.variable]: "colors.chakra-body-bg",
      backgroundColor: _l.reference,
      boxShadow: H1.reference,
      borderRadius: Us.reference,
      color: "chakra-body-text",
      borderWidth: G1.reference,
      borderColor: K1.reference,
    },
    body: { padding: _r.reference, flex: "1 1 0%" },
    header: { padding: _r.reference },
    footer: { padding: _r.reference },
  }),
  P6 = {
    sm: In({
      container: { [Us.variable]: "radii.base", [_r.variable]: "space.3" },
    }),
    md: In({
      container: { [Us.variable]: "radii.md", [_r.variable]: "space.5" },
    }),
    lg: In({
      container: { [Us.variable]: "radii.xl", [_r.variable]: "space.7" },
    }),
  },
  E6 = {
    elevated: In({
      container: {
        [H1.variable]: "shadows.base",
        _dark: { [_l.variable]: "colors.gray.700" },
      },
    }),
    outline: In({
      container: {
        [G1.variable]: "1px",
        [K1.variable]: "colors.chakra-border-color",
      },
    }),
    filled: In({ container: { [_l.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [_r.variable]: 0 },
      header: { [_r.variable]: 0 },
      footer: { [_r.variable]: 0 },
    },
  },
  $6 = _6({
    baseStyle: T6,
    variants: E6,
    sizes: P6,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  Ni = je("close-button-size"),
  gi = je("close-button-bg"),
  z6 = {
    w: [Ni.reference],
    h: [Ni.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [gi.variable]: "colors.blackAlpha.100",
      _dark: { [gi.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [gi.variable]: "colors.blackAlpha.200",
      _dark: { [gi.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: gi.reference,
  },
  A6 = {
    lg: { [Ni.variable]: "sizes.10", fontSize: "md" },
    md: { [Ni.variable]: "sizes.8", fontSize: "xs" },
    sm: { [Ni.variable]: "sizes.6", fontSize: "2xs" },
  },
  R6 = { baseStyle: z6, sizes: A6, defaultProps: { size: "md" } },
  { variants: M6, defaultProps: j6 } = Vi,
  F6 = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: Ce.bg.reference,
    color: Ce.color.reference,
    boxShadow: Ce.shadow.reference,
  },
  L6 = { baseStyle: F6, variants: M6, defaultProps: j6 },
  I6 = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  D6 = { baseStyle: I6 },
  B6 = { opacity: 0.6, borderColor: "inherit" },
  V6 = { borderStyle: "solid" },
  O6 = { borderStyle: "dashed" },
  N6 = { solid: V6, dashed: O6 },
  W6 = { baseStyle: B6, variants: N6, defaultProps: { variant: "solid" } },
  { definePartsStyle: U6, defineMultiStyleConfig: H6 } = se(T5.keys),
  G6 = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  K6 = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  Y6 = { pt: "2", px: "4", pb: "5" },
  Q6 = { fontSize: "1.25em" },
  X6 = U6({ container: G6, button: K6, panel: Y6, icon: Q6 }),
  q6 = H6({ baseStyle: X6 }),
  { definePartsStyle: $a, defineMultiStyleConfig: Z6 } = se(P5.keys),
  bt = D("alert-fg"),
  Mr = D("alert-bg"),
  J6 = $a({
    container: { bg: Mr.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: bt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: bt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function kp(e) {
  const { theme: t, colorScheme: r } = e,
    n = Ho(`${r}.200`, 0.16)(t);
  return { light: `colors.${r}.100`, dark: n };
}
var eE = $a((e) => {
    const { colorScheme: t } = e,
      r = kp(e);
    return {
      container: {
        [bt.variable]: `colors.${t}.600`,
        [Mr.variable]: r.light,
        _dark: { [bt.variable]: `colors.${t}.200`, [Mr.variable]: r.dark },
      },
    };
  }),
  tE = $a((e) => {
    const { colorScheme: t } = e,
      r = kp(e);
    return {
      container: {
        [bt.variable]: `colors.${t}.600`,
        [Mr.variable]: r.light,
        _dark: { [bt.variable]: `colors.${t}.200`, [Mr.variable]: r.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: bt.reference,
      },
    };
  }),
  rE = $a((e) => {
    const { colorScheme: t } = e,
      r = kp(e);
    return {
      container: {
        [bt.variable]: `colors.${t}.600`,
        [Mr.variable]: r.light,
        _dark: { [bt.variable]: `colors.${t}.200`, [Mr.variable]: r.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: bt.reference,
      },
    };
  }),
  nE = $a((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [bt.variable]: "colors.white",
        [Mr.variable]: `colors.${t}.600`,
        _dark: {
          [bt.variable]: "colors.gray.900",
          [Mr.variable]: `colors.${t}.200`,
        },
        color: bt.reference,
      },
    };
  }),
  oE = { subtle: eE, "left-accent": tE, "top-accent": rE, solid: nE },
  iE = Z6({
    baseStyle: J6,
    variants: oE,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  { definePartsStyle: Y1, defineMultiStyleConfig: aE } = se(E5.keys),
  Fo = D("avatar-border-color"),
  Wi = D("avatar-bg"),
  xa = D("avatar-font-size"),
  Go = D("avatar-size"),
  sE = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: Fo.reference,
    [Fo.variable]: "white",
    _dark: { [Fo.variable]: "colors.gray.800" },
  },
  lE = {
    bg: Wi.reference,
    fontSize: xa.reference,
    width: Go.reference,
    height: Go.reference,
    lineHeight: "1",
    [Wi.variable]: "colors.gray.200",
    _dark: { [Wi.variable]: "colors.whiteAlpha.400" },
  },
  uE = (e) => {
    const { name: t, theme: r } = e,
      n = t ? g_({ string: t }) : "colors.gray.400",
      o = h_(n)(r);
    let i = "white";
    return (
      o || (i = "gray.800"),
      {
        bg: Wi.reference,
        fontSize: xa.reference,
        color: i,
        borderColor: Fo.reference,
        verticalAlign: "top",
        width: Go.reference,
        height: Go.reference,
        "&:not([data-loaded])": { [Wi.variable]: n },
        [Fo.variable]: "colors.white",
        _dark: { [Fo.variable]: "colors.gray.800" },
      }
    );
  },
  cE = { fontSize: xa.reference, lineHeight: "1" },
  dE = Y1((e) => ({
    badge: et(sE, e),
    excessLabel: et(lE, e),
    container: et(uE, e),
    label: cE,
  }));
function Or(e) {
  const t = e !== "100%" ? D1[e] : void 0;
  return Y1({
    container: {
      [Go.variable]: t ?? e,
      [xa.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [Go.variable]: t ?? e,
      [xa.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
var fE = {
    "2xs": Or(4),
    xs: Or(6),
    sm: Or(8),
    md: Or(12),
    lg: Or(16),
    xl: Or(24),
    "2xl": Or(32),
    full: Or("100%"),
  },
  pE = aE({ baseStyle: dE, sizes: fE, defaultProps: { size: "md" } }),
  hE = {
    Accordion: q6,
    Alert: iE,
    Avatar: pE,
    Badge: Vi,
    Breadcrumb: m6,
    Button: C6,
    Checkbox: Cl,
    CloseButton: R6,
    Code: L6,
    Container: D6,
    Divider: W6,
    Drawer: VP,
    Editable: KP,
    Form: JP,
    FormError: i6,
    FormLabel: s6,
    Heading: c6,
    Input: Z,
    Kbd: zT,
    Link: RT,
    List: IT,
    Menu: YT,
    Modal: iP,
    NumberInput: hP,
    PinInput: yP,
    Popover: $P,
    Progress: L4,
    Radio: Q4,
    Select: rT,
    Skeleton: oT,
    SkipLink: aT,
    Slider: vT,
    Spinner: bT,
    Stat: ET,
    Switch: R_,
    Table: B_,
    Tabs: e4,
    Tag: p4,
    Textarea: _4,
    Tooltip: E4,
    Card: $6,
    Stepper: _5,
  },
  mE = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  gE = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": { borderColor: "chakra-border-color" },
    },
  },
  vE = "ltr",
  yE = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  xE = {
    semanticTokens: mE,
    direction: vE,
    ...w5,
    components: hE,
    styles: gE,
    config: yE,
  };
function bE(e, t) {
  const r = {};
  return (
    Object.keys(e).forEach((n) => {
      t.includes(n) || (r[n] = e[n]);
    }),
    r
  );
}
function SE(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1) e = e[o[n]];
  return e === void 0 ? r : e;
}
var wE = (e) => {
    const t = new WeakMap();
    return (n, o, i, a) => {
      if (typeof n > "u") return e(n, o, i);
      t.has(n) || t.set(n, new Map());
      const s = t.get(n);
      if (s.has(o)) return s.get(o);
      const l = e(n, o, i, a);
      return s.set(o, l), l;
    };
  },
  Q1 = wE(SE);
function X1(e, t) {
  const r = {};
  return (
    Object.keys(e).forEach((n) => {
      const o = e[n];
      t(o, n, e) && (r[n] = o);
    }),
    r
  );
}
var q1 = (e) => X1(e, (t) => t != null);
function kE(e) {
  return typeof e == "function";
}
function Z1(e, ...t) {
  return kE(e) ? e(...t) : e;
}
var CE = typeof Element < "u",
  _E = typeof Map == "function",
  TE = typeof Set == "function",
  PE = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Hs(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (!Hs(e[n], t[n])) return !1;
      return !0;
    }
    var i;
    if (_E && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Hs(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (TE && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (PE && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((r = e.length), r != t.length)) return !1;
      for (n = r; n-- !== 0; ) if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (r = o.length), r !== Object.keys(t).length))
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (CE && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (
        !(
          (o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") &&
          e.$$typeof
        ) &&
        !Hs(e[o[n]], t[o[n]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var EE = function (t, r) {
  try {
    return Hs(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const $E = cf(EE);
function J1(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t,
    { theme: i, colorMode: a } = LC(),
    s = e ? Q1(i, `components.${e}`) : void 0,
    l = n || s,
    u = sr(
      { theme: i, colorMode: a },
      (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
      q1(bE(o, ["children"]))
    ),
    c = C.useRef({});
  if (l) {
    const f = Z3(l)(u);
    $E(c.current, f) || (c.current = f);
  }
  return c.current;
}
function ei(e, t = {}) {
  return J1(e, t);
}
function ex(e, t = {}) {
  return J1(e, t);
}
var zE = new Set([
    ...V3,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  AE = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function RE(e) {
  return AE.has(e) || !zE.has(e);
}
function ME(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) &&
          (o in r && delete r[o], (r[o] = n[o]));
  return r;
}
function tx(e) {
  const t = Object.assign({}, e);
  for (let r in t) t[r] === void 0 && delete t[r];
  return t;
}
var jE =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  FE = uv(function (e) {
    return (
      jE.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  LE = FE,
  IE = function (t) {
    return t !== "theme";
  },
  P0 = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? LE : IE;
  },
  E0 = function (t, r, n) {
    var o;
    if (r) {
      var i = r.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
  },
  DE = function (t) {
    var r = t.cache,
      n = t.serialized,
      o = t.isStringTag;
    return (
      mv(r, n, o),
      fw(function () {
        return gv(r, n, o);
      }),
      null
    );
  },
  BE = function e(t, r) {
    var n = t.__emotion_real === t,
      o = (n && t.__emotion_base) || t,
      i,
      a;
    r !== void 0 && ((i = r.label), (a = r.target));
    var s = E0(t, r, n),
      l = s || P0(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, h = 1; h < f; h++) d.push(c[h], c[0][h]);
      }
      var y = bv(function (x, _, g) {
        var p = (u && x.as) || o,
          m = "",
          k = [],
          P = x;
        if (x.theme == null) {
          P = {};
          for (var $ in x) P[$] = x[$];
          P.theme = C.useContext(Zi);
        }
        typeof x.className == "string"
          ? (m = iw(_.registered, k, x.className))
          : x.className != null && (m = x.className + " ");
        var E = Sf(d.concat(k), _.registered, P);
        (m += _.key + "-" + E.name), a !== void 0 && (m += " " + a);
        var z = u && s === void 0 ? P0(p) : l,
          F = {};
        for (var L in x) (u && L === "as") || (z(L) && (F[L] = x[L]));
        return (
          (F.className = m),
          (F.ref = g),
          C.createElement(
            C.Fragment,
            null,
            C.createElement(DE, {
              cache: _,
              serialized: E,
              isStringTag: typeof p == "string",
            }),
            C.createElement(p, F)
          )
        );
      });
      return (
        (y.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = o),
        (y.__emotion_styles = d),
        (y.__emotion_forwardProp = s),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (y.withComponent = function (x, _) {
          return e(x, Xs({}, r, _, { shouldForwardProp: E0(y, _, !0) })).apply(
            void 0,
            d
          );
        }),
        y
      );
    };
  },
  VE = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Tl = BE.bind();
VE.forEach(function (e) {
  Tl[e] = Tl(e);
});
var $0,
  OE = ($0 = Tl.default) != null ? $0 : Tl,
  NE =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: r, css: n, __css: o, sx: i, ...a } = t,
        s = X1(a, (d, f) => N3(f)),
        l = Z1(e, t),
        u = ME({}, o, l, q1(s), i),
        c = F1(u)(t.theme);
      return n ? [c, n] : c;
    };
function zc(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = RE);
  const o = NE({ baseStyle: r }),
    i = OE(e, n)(o);
  return jt.forwardRef(function (l, u) {
    const { colorMode: c, forced: d } = mp();
    return jt.createElement(i, { ref: u, "data-theme": d ? c : void 0, ...l });
  });
}
function WE() {
  const e = new Map();
  return new Proxy(zc, {
    apply(t, r, n) {
      return zc(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, zc(r)), e.get(r);
    },
  });
}
var oe = WE();
function _e(e) {
  return C.forwardRef(e);
}
function rx(e = {}) {
  const {
      strict: t = !0,
      errorMessage:
        r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
      name: n,
    } = e,
    o = C.createContext(void 0);
  o.displayName = n;
  function i() {
    var a;
    const s = C.useContext(o);
    if (!s && t) {
      const l = new Error(r);
      throw (
        ((l.name = "ContextError"),
        (a = Error.captureStackTrace) == null || a.call(Error, l, i),
        l)
      );
    }
    return s;
  }
  return [o.Provider, i, o];
}
function UE(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e,
    o = C.useMemo(() => B3(r), [r]);
  return b.jsxs(mw, { theme: o, children: [b.jsx(HE, { root: t }), n] });
}
function HE({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return b.jsx(Jl, { styles: (r) => ({ [t]: r.__cssVars }) });
}
rx({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function GE(e) {
  return rx({
    name: `${e}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `,
  });
}
function KE() {
  const { colorMode: e } = mp();
  return b.jsx(Jl, {
    styles: (t) => {
      const r = Q1(t, "styles.global"),
        n = Z1(r, { theme: t, colorMode: e });
      return n ? F1(n)(t) : void 0;
    },
  });
}
var Cp = C.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
Cp.displayName = "EnvironmentContext";
function YE({ defer: e } = {}) {
  const [, t] = C.useReducer((r) => r + 1, 0);
  return (
    Io(() => {
      e && t();
    }, [e]),
    C.useContext(Cp)
  );
}
function nx(e) {
  const { children: t, environment: r, disabled: n } = e,
    o = C.useRef(null),
    i = C.useMemo(
      () =>
        r || {
          getDocument: () => {
            var s, l;
            return (l = (s = o.current) == null ? void 0 : s.ownerDocument) !=
              null
              ? l
              : document;
          },
          getWindow: () => {
            var s, l;
            return (l =
              (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) !=
              null
              ? l
              : window;
          },
        },
      [r]
    ),
    a = !n || !r;
  return b.jsxs(Cp.Provider, {
    value: i,
    children: [
      t,
      a && b.jsx("span", { id: "__chakra_env", hidden: !0, ref: o }),
    ],
  });
}
nx.displayName = "EnvironmentProvider";
var QE = (e) => {
    const {
        children: t,
        colorModeManager: r,
        portalZIndex: n,
        resetScope: o,
        resetCSS: i = !0,
        theme: a = {},
        environment: s,
        cssVarsRoot: l,
        disableEnvironment: u,
        disableGlobalStyle: c,
      } = e,
      d = b.jsx(nx, { environment: s, disabled: u, children: t });
    return b.jsx(UE, {
      theme: a,
      cssVarsRoot: l,
      children: b.jsxs(E1, {
        colorModeManager: r,
        options: a.config,
        children: [
          i ? b.jsx(xw, { scope: o }) : b.jsx(yw, {}),
          !c && b.jsx(KE, {}),
          n ? b.jsx(kv, { zIndex: n, children: d }) : d,
        ],
      }),
    });
  },
  XE = (e, t) => e.find((r) => r.id === t);
function z0(e, t) {
  const r = ox(e, t),
    n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return { position: r, index: n };
}
function ox(e, t) {
  for (const [r, n] of Object.entries(e)) if (XE(n, t)) return r;
}
function qE(e) {
  const t = e.includes("right"),
    r = e.includes("left");
  let n = "center";
  return (
    t && (n = "flex-end"),
    r && (n = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: n }
  );
}
function ZE(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0,
    n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: i,
    left: a,
  };
}
function JE(e, t = []) {
  const r = C.useRef(e);
  return (
    C.useEffect(() => {
      r.current = e;
    }),
    C.useCallback((...n) => {
      var o;
      return (o = r.current) == null ? void 0 : o.call(r, ...n);
    }, t)
  );
}
function e$(e, t) {
  const r = JE(e);
  C.useEffect(() => {
    if (t == null) return;
    let n = null;
    return (
      (n = window.setTimeout(() => {
        r();
      }, t)),
      () => {
        n && window.clearTimeout(n);
      }
    );
  }, [t, r]);
}
function A0(e, t) {
  const r = C.useRef(!1),
    n = C.useRef(!1);
  C.useEffect(() => {
    if (r.current && n.current) return e();
    n.current = !0;
  }, t),
    C.useEffect(
      () => (
        (r.current = !0),
        () => {
          r.current = !1;
        }
      ),
      []
    );
}
const ix = C.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  bu = C.createContext({}),
  za = C.createContext(null),
  Su = typeof document < "u",
  _p = Su ? C.useLayoutEffect : C.useEffect,
  ax = C.createContext({ strict: !1 }),
  Tp = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  t$ = "framerAppearId",
  sx = "data-" + Tp(t$),
  lx = { skipAnimations: !1, useManualTiming: !1 };
class R0 {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const r = this.order.indexOf(t);
    r !== -1 && (this.order.splice(r, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function r$(e) {
  let t = new R0(),
    r = new R0(),
    n = 0,
    o = !1,
    i = !1;
  const a = new WeakSet(),
    s = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && o,
          f = d ? t : r;
        return u && a.add(l), f.add(l) && d && o && (n = t.order.length), l;
      },
      cancel: (l) => {
        r.remove(l), a.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([t, r] = [r, t]), r.clear(), (n = t.order.length), n))
          for (let u = 0; u < n; u++) {
            const c = t.order[u];
            a.has(c) && (s.schedule(c), e()), c(l);
          }
        (o = !1), i && ((i = !1), s.process(l));
      },
    };
  return s;
}
const vs = ["prepare", "read", "update", "preRender", "render", "postRender"],
  n$ = 40;
function ux(e, t) {
  let r = !1,
    n = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = vs.reduce((d, f) => ((d[f] = r$(() => (r = !0))), d), {}),
    a = (d) => {
      i[d].process(o);
    },
    s = () => {
      const d = performance.now();
      (r = !1),
        (o.delta = n ? 1e3 / 60 : Math.max(Math.min(d - o.timestamp, n$), 1)),
        (o.timestamp = d),
        (o.isProcessing = !0),
        vs.forEach(a),
        (o.isProcessing = !1),
        r && t && ((n = !1), e(s));
    },
    l = () => {
      (r = !0), (n = !0), o.isProcessing || e(s);
    };
  return {
    schedule: vs.reduce((d, f) => {
      const h = i[f];
      return (d[f] = (y, x = !1, _ = !1) => (r || l(), h.schedule(y, x, _))), d;
    }, {}),
    cancel: (d) => vs.forEach((f) => i[f].cancel(d)),
    state: o,
    steps: i,
  };
}
const { schedule: Pp, cancel: uM } = ux(queueMicrotask, !1);
function o$(e, t, r, n) {
  const { visualElement: o } = C.useContext(bu),
    i = C.useContext(ax),
    a = C.useContext(za),
    s = C.useContext(ix).reducedMotion,
    l = C.useRef();
  (n = n || i.renderer),
    !l.current &&
      n &&
      (l.current = n(e, {
        visualState: t,
        parent: o,
        props: r,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  const u = l.current;
  C.useInsertionEffect(() => {
    u && u.update(r, a);
  });
  const c = C.useRef(!!(r[sx] && !window.HandoffComplete));
  return (
    _p(() => {
      u &&
        (Pp.postRender(u.render),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    C.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function So(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function i$(e, t, r) {
  return C.useCallback(
    (n) => {
      n && e.mount && e.mount(n),
        t && (n ? t.mount(n) : t.unmount()),
        r && (typeof r == "function" ? r(n) : So(r) && (r.current = n));
    },
    [t]
  );
}
function ba(e) {
  return typeof e == "string" || Array.isArray(e);
}
function wu(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ep = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  $p = ["initial", ...Ep];
function ku(e) {
  return wu(e.animate) || $p.some((t) => ba(e[t]));
}
function cx(e) {
  return !!(ku(e) || e.variants);
}
function a$(e, t) {
  if (ku(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || ba(r) ? r : void 0,
      animate: ba(n) ? n : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function s$(e) {
  const { initial: t, animate: r } = a$(e, C.useContext(bu));
  return C.useMemo(() => ({ initial: t, animate: r }), [M0(t), M0(r)]);
}
function M0(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const j0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Sa = {};
for (const e in j0) Sa[e] = { isEnabled: (t) => j0[e].some((r) => !!t[r]) };
function l$(e) {
  for (const t in e) Sa[t] = { ...Sa[t], ...e[t] };
}
const zp = C.createContext({}),
  dx = C.createContext({}),
  u$ = Symbol.for("motionComponentSymbol");
function c$({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: r,
  useVisualState: n,
  Component: o,
}) {
  e && l$(e);
  function i(s, l) {
    let u;
    const c = { ...C.useContext(ix), ...s, layoutId: d$(s) },
      { isStatic: d } = c,
      f = s$(s),
      h = n(s, d);
    if (!d && Su) {
      f.visualElement = o$(o, h, c, t);
      const y = C.useContext(dx),
        x = C.useContext(ax).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, x, e, y));
    }
    return C.createElement(
      bu.Provider,
      { value: f },
      u && f.visualElement
        ? C.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      r(o, s, i$(h, f.visualElement, l), h, d, f.visualElement)
    );
  }
  const a = C.forwardRef(i);
  return (a[u$] = o), a;
}
function d$({ layoutId: e }) {
  const t = C.useContext(zp).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function f$(e) {
  function t(n, o = {}) {
    return c$(e(n, o));
  }
  if (typeof Proxy > "u") return t;
  const r = new Map();
  return new Proxy(t, {
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o)),
  });
}
const p$ = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Ap(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(p$.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Pl = {};
function h$(e) {
  Object.assign(Pl, e);
}
const Aa = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Xn = new Set(Aa);
function fx(e, { layout: t, layoutId: r }) {
  return (
    Xn.has(e) ||
    e.startsWith("origin") ||
    ((t || r !== void 0) && (!!Pl[e] || e === "opacity"))
  );
}
const pt = (e) => !!(e && e.getVelocity),
  m$ = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  g$ = Aa.length;
function v$(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 },
  n,
  o
) {
  let i = "";
  for (let a = 0; a < g$; a++) {
    const s = Aa[a];
    if (e[s] !== void 0) {
      const l = m$[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (i += "translateZ(0)"),
    (i = i.trim()),
    o ? (i = o(e, n ? "" : i)) : r && n && (i = "none"),
    i
  );
}
const px = (e) => (t) => typeof t == "string" && t.startsWith(e),
  hx = px("--"),
  y$ = px("var(--"),
  El = (e) => (y$(e) ? x$.test(e.split("/*")[0].trim()) : !1),
  x$ =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)$/i,
  b$ = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  cn = (e, t, r) => (r > t ? t : r < e ? e : r),
  ti = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ui = { ...ti, transform: (e) => cn(0, 1, e) },
  ys = { ...ti, default: 1 },
  Hi = (e) => Math.round(e * 1e5) / 1e5,
  Rp = /(-)?([\d]*\.?[\d])+/g,
  S$ =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  w$ =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ra(e) {
  return typeof e == "string";
}
const Ma = (e) => ({
    test: (t) => Ra(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Nr = Ma("deg"),
  fr = Ma("%"),
  V = Ma("px"),
  k$ = Ma("vh"),
  C$ = Ma("vw"),
  F0 = {
    ...fr,
    parse: (e) => fr.parse(e) / 100,
    transform: (e) => fr.transform(e * 100),
  },
  L0 = { ...ti, transform: Math.round },
  mx = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    size: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    rotate: Nr,
    rotateX: Nr,
    rotateY: Nr,
    rotateZ: Nr,
    scale: ys,
    scaleX: ys,
    scaleY: ys,
    scaleZ: ys,
    skew: Nr,
    skewX: Nr,
    skewY: Nr,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Ui,
    originX: F0,
    originY: F0,
    originZ: V,
    zIndex: L0,
    fillOpacity: Ui,
    strokeOpacity: Ui,
    numOctaves: L0,
  };
function Mp(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (hx(d)) {
      i[d] = f;
      continue;
    }
    const h = mx[d],
      y = b$(f, h);
    if (Xn.has(d)) {
      if (((l = !0), (a[d] = y), !c)) continue;
      f !== (h.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (s[d] = y)) : (o[d] = y);
  }
  if (
    (t.transform ||
      (l || n
        ? (o.transform = v$(e.transform, r, c, n))
        : o.transform && (o.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = s;
    o.transformOrigin = `${d} ${f} ${h}`;
  }
}
const jp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function gx(e, t, r) {
  for (const n in t) !pt(t[n]) && !fx(n, r) && (e[n] = t[n]);
}
function _$({ transformTemplate: e }, t, r) {
  return C.useMemo(() => {
    const n = jp();
    return (
      Mp(n, t, { enableHardwareAcceleration: !r }, e),
      Object.assign({}, n.vars, n.style)
    );
  }, [t]);
}
function T$(e, t, r) {
  const n = e.style || {},
    o = {};
  return gx(o, n, e), Object.assign(o, _$(e, t, r)), o;
}
function P$(e, t, r) {
  const n = {},
    o = T$(e, t, r);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = o),
    n
  );
}
const E$ = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function $l(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    E$.has(e)
  );
}
let vx = (e) => !$l(e);
function $$(e) {
  e && (vx = (t) => (t.startsWith("on") ? !$l(t) : e(t)));
}
try {
  $$(require("@emotion/is-prop-valid").default);
} catch {}
function z$(e, t, r) {
  const n = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((vx(o) ||
        (r === !0 && $l(o)) ||
        (!t && !$l(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (n[o] = e[o]));
  return n;
}
function I0(e, t, r) {
  return typeof e == "string" ? e : V.transform(t + r * e);
}
function A$(e, t, r) {
  const n = I0(t, e.x, e.width),
    o = I0(r, e.y, e.height);
  return `${n} ${o}`;
}
const R$ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  M$ = { offset: "strokeDashoffset", array: "strokeDasharray" };
function j$(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? R$ : M$;
  e[i.offset] = V.transform(-n);
  const a = V.transform(t),
    s = V.transform(r);
  e[i.array] = `${a} ${s}`;
}
function Fp(
  e,
  {
    attrX: t,
    attrY: r,
    attrScale: n,
    originX: o,
    originY: i,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f
) {
  if ((Mp(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: h, style: y, dimensions: x } = e;
  h.transform && (x && (y.transform = h.transform), delete h.transform),
    x &&
      (o !== void 0 || i !== void 0 || y.transform) &&
      (y.transformOrigin = A$(
        x,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (h.x = t),
    r !== void 0 && (h.y = r),
    n !== void 0 && (h.scale = n),
    a !== void 0 && j$(h, a, s, l, !1);
}
const yx = () => ({ ...jp(), attrs: {} }),
  Lp = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function F$(e, t, r, n) {
  const o = C.useMemo(() => {
    const i = yx();
    return (
      Fp(i, t, { enableHardwareAcceleration: !1 }, Lp(n), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    gx(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function L$(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (Ap(r) ? F$ : P$)(n, i, a, r),
      u = z$(n, typeof r == "string", e),
      c = r !== C.Fragment ? { ...u, ...l, ref: o } : {},
      { children: d } = n,
      f = C.useMemo(() => (pt(d) ? d.get() : d), [d]);
    return C.createElement(r, { ...c, children: f });
  };
}
function xx(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r) e.style.setProperty(i, r[i]);
}
const bx = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Sx(e, t, r, n) {
  xx(e, t, void 0, n);
  for (const o in t.attrs) e.setAttribute(bx.has(o) ? o : Tp(o), t.attrs[o]);
}
function Ip(e, t) {
  const { style: r } = e,
    n = {};
  for (const o in r)
    (pt(r[o]) || (t.style && pt(t.style[o])) || fx(o, e)) && (n[o] = r[o]);
  return n;
}
function wx(e, t) {
  const r = Ip(e, t);
  for (const n in e)
    if (pt(e[n]) || pt(t[n])) {
      const o =
        Aa.indexOf(n) !== -1
          ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
          : n;
      r[o] = e[n];
    }
  return r;
}
function Dp(e, t, r, n = {}, o = {}) {
  return (
    typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)),
    t
  );
}
function kx(e) {
  const t = C.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const zl = (e) => Array.isArray(e),
  I$ = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  D$ = (e) => (zl(e) ? e[e.length - 1] || 0 : e);
function Gs(e) {
  const t = pt(e) ? e.get() : e;
  return I$(t) ? t.toValue() : t;
}
function B$(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r },
  n,
  o,
  i
) {
  const a = { latestValues: V$(n, o, i, e), renderState: t() };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const Cx = (e) => (t, r) => {
  const n = C.useContext(bu),
    o = C.useContext(za),
    i = () => B$(e, t, n, o);
  return r ? i() : kx(i);
};
function V$(e, t, r, n) {
  const o = {},
    i = n(e, {});
  for (const f in i) o[f] = Gs(i[f]);
  let { initial: a, animate: s } = e;
  const l = ku(e),
    u = cx(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let c = r ? r.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? s : a;
  return (
    d &&
      typeof d != "boolean" &&
      !wu(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const y = Dp(e, h);
        if (!y) return;
        const { transitionEnd: x, transition: _, ...g } = y;
        for (const p in g) {
          let m = g[p];
          if (Array.isArray(m)) {
            const k = c ? m.length - 1 : 0;
            m = m[k];
          }
          m !== null && (o[p] = m);
        }
        for (const p in x) o[p] = x[p];
      }),
    o
  );
}
const $e = (e) => e,
  {
    schedule: he,
    cancel: jr,
    state: Oe,
    steps: Ac,
  } = ux(typeof requestAnimationFrame < "u" ? requestAnimationFrame : $e, !0),
  O$ = {
    useVisualState: Cx({
      scrapeMotionValuesFromProps: wx,
      createRenderState: yx,
      onMount: (e, t, { renderState: r, latestValues: n }) => {
        he.read(() => {
          try {
            r.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          he.render(() => {
            Fp(
              r,
              n,
              { enableHardwareAcceleration: !1 },
              Lp(t.tagName),
              e.transformTemplate
            ),
              Sx(t, r);
          });
      },
    }),
  },
  N$ = {
    useVisualState: Cx({
      scrapeMotionValuesFromProps: Ip,
      createRenderState: jp,
    }),
  };
function W$(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...(Ap(e) ? O$ : N$),
    preloadedFeatures: r,
    useRender: L$(t),
    createVisualElement: n,
    Component: e,
  };
}
function kr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const _x = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Cu(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const U$ = (e) => (t) => _x(t) && e(t, Cu(t));
function Tr(e, t, r, n) {
  return kr(e, t, U$(r), n);
}
const H$ = (e, t) => (r) => t(e(r)),
  Pr = (...e) => e.reduce(H$);
function Tx(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? ((t = e), r) : !1;
  };
}
const D0 = Tx("dragHorizontal"),
  B0 = Tx("dragVertical");
function Px(e) {
  let t = !1;
  if (e === "y") t = B0();
  else if (e === "x") t = D0();
  else {
    const r = D0(),
      n = B0();
    r && n
      ? (t = () => {
          r(), n();
        })
      : (r && r(), n && n());
  }
  return t;
}
function Ex() {
  const e = Px(!0);
  return e ? (e(), !1) : !0;
}
class mn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function V0(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"),
    n = "onHover" + (t ? "Start" : "End"),
    o = (i, a) => {
      if (i.pointerType === "touch" || Ex()) return;
      const s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t),
        s[n] && he.update(() => s[n](i, a));
    };
  return Tr(e.current, r, o, { passive: !e.getProps()[n] });
}
class G$ extends mn {
  mount() {
    this.unmount = Pr(V0(this.node, !0), V0(this.node, !1));
  }
  unmount() {}
}
class K$ extends mn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Pr(
      kr(this.node.current, "focus", () => this.onFocus()),
      kr(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const $x = (e, t) => (t ? (e === t ? !0 : $x(e, t.parentElement)) : !1);
function Rc(e, t) {
  if (!t) return;
  const r = new PointerEvent("pointer" + e);
  t(r, Cu(r));
}
class Y$ extends mn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = $e),
      (this.removeEndListeners = $e),
      (this.removeAccessibleListeners = $e),
      (this.startPointerPress = (t, r) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const n = this.node.getProps(),
          i = Tr(
            window,
            "pointerup",
            (s, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: d,
              } = this.node.getProps();
              he.update(() => {
                !d && !$x(this.node.current, s.target)
                  ? c && c(s, l)
                  : u && u(s, l);
              });
            },
            { passive: !(n.onTap || n.onPointerUp) }
          ),
          a = Tr(window, "pointercancel", (s, l) => this.cancelPress(s, l), {
            passive: !(n.onTapCancel || n.onPointerCancel),
          });
        (this.removeEndListeners = Pr(i, a)), this.startPress(t, r);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const a = (s) => {
              s.key !== "Enter" ||
                !this.checkPressEnd() ||
                Rc("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && he.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = kr(this.node.current, "keyup", a)),
              Rc("down", (s, l) => {
                this.startPress(s, l);
              });
          },
          r = kr(this.node.current, "keydown", t),
          n = () => {
            this.isPressing && Rc("cancel", (i, a) => this.cancelPress(i, a));
          },
          o = kr(this.node.current, "blur", n);
        this.removeAccessibleListeners = Pr(r, o);
      });
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      n && he.update(() => n(t, r));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Ex()
    );
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: n } = this.node.getProps();
    n && he.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(),
      r = Tr(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      n = kr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Pr(r, n);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Kd = new WeakMap(),
  Mc = new WeakMap(),
  Q$ = (e) => {
    const t = Kd.get(e.target);
    t && t(e);
  },
  X$ = (e) => {
    e.forEach(Q$);
  };
function q$({ root: e, ...t }) {
  const r = e || document;
  Mc.has(r) || Mc.set(r, {});
  const n = Mc.get(r),
    o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(X$, { root: e, ...t })), n[o];
}
function Z$(e, t, r) {
  const n = q$(t);
  return (
    Kd.set(e, r),
    n.observe(e),
    () => {
      Kd.delete(e), n.unobserve(e);
    }
  );
}
const J$ = { some: 0, all: 1 };
class ez extends mn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: r, margin: n, amount: o = "some", once: i } = t,
      a = {
        root: r ? r.current : void 0,
        rootMargin: n,
        threshold: typeof o == "number" ? o : J$[o],
      },
      s = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return Z$(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(tz(t, r)) && this.startObserver();
  }
  unmount() {}
}
function tz({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const rz = {
  inView: { Feature: ez },
  tap: { Feature: Y$ },
  focus: { Feature: K$ },
  hover: { Feature: G$ },
};
function zx(e, t) {
  if (!Array.isArray(t)) return !1;
  const r = t.length;
  if (r !== e.length) return !1;
  for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function nz(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.get())), t;
}
function oz(e) {
  const t = {};
  return e.values.forEach((r, n) => (t[n] = r.getVelocity())), t;
}
function _u(e, t, r) {
  const n = e.getProps();
  return Dp(n, t, r !== void 0 ? r : n.custom, nz(e), oz(e));
}
let Bp = $e;
const Dn = (e) => e * 1e3,
  Er = (e) => e / 1e3,
  iz = { current: !1 },
  Ax = (e) => Array.isArray(e) && typeof e[0] == "number";
function Rx(e) {
  return !!(
    !e ||
    (typeof e == "string" && Mx[e]) ||
    Ax(e) ||
    (Array.isArray(e) && e.every(Rx))
  );
}
const Ei = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
  Mx = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ei([0, 0.65, 0.55, 1]),
    circOut: Ei([0.55, 0, 1, 0.45]),
    backIn: Ei([0.31, 0.01, 0.66, -0.59]),
    backOut: Ei([0.33, 1.53, 0.69, 0.99]),
  };
function jx(e) {
  if (e) return Ax(e) ? Ei(e) : Array.isArray(e) ? e.map(jx) : Mx[e];
}
function az(
  e,
  t,
  r,
  {
    delay: n = 0,
    duration: o,
    repeat: i = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  const u = { [t]: r };
  l && (u.offset = l);
  const c = jx(s);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: n,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
function sz(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const Fx = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  lz = 1e-7,
  uz = 12;
function cz(e, t, r, n, o) {
  let i,
    a,
    s = 0;
  do (a = t + (r - t) / 2), (i = Fx(a, n, o) - e), i > 0 ? (r = a) : (t = a);
  while (Math.abs(i) > lz && ++s < uz);
  return a;
}
function ja(e, t, r, n) {
  if (e === t && r === n) return $e;
  const o = (i) => cz(i, 0, 1, e, r);
  return (i) => (i === 0 || i === 1 ? i : Fx(o(i), t, n));
}
const dz = ja(0.42, 0, 1, 1),
  fz = ja(0, 0, 0.58, 1),
  Lx = ja(0.42, 0, 0.58, 1),
  pz = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ix = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Dx = (e) => (t) => 1 - e(1 - t),
  Vp = (e) => 1 - Math.sin(Math.acos(e)),
  Bx = Dx(Vp),
  hz = Ix(Vp),
  Vx = ja(0.33, 1.53, 0.69, 0.99),
  Op = Dx(Vx),
  mz = Ix(Op),
  gz = (e) =>
    (e *= 2) < 1 ? 0.5 * Op(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  vz = {
    linear: $e,
    easeIn: dz,
    easeInOut: Lx,
    easeOut: fz,
    circIn: Vp,
    circInOut: hz,
    circOut: Bx,
    backIn: Op,
    backInOut: mz,
    backOut: Vx,
    anticipate: gz,
  },
  O0 = (e) => {
    if (Array.isArray(e)) {
      Bp(e.length === 4);
      const [t, r, n, o] = e;
      return ja(t, r, n, o);
    } else if (typeof e == "string") return vz[e];
    return e;
  },
  wa = (e, t, r) => {
    const n = t - e;
    return n === 0 ? 1 : (r - e) / n;
  },
  ve = (e, t, r) => e + (t - e) * r;
function jc(e, t, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? e + (t - e) * 6 * r
      : r < 1 / 2
      ? t
      : r < 2 / 3
      ? e + (t - e) * (2 / 3 - r) * 6
      : e
  );
}
function yz({ hue: e, saturation: t, lightness: r, alpha: n }) {
  (e /= 360), (t /= 100), (r /= 100);
  let o = 0,
    i = 0,
    a = 0;
  if (!t) o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t,
      l = 2 * r - s;
    (o = jc(l, s, e + 1 / 3)), (i = jc(l, s, e)), (a = jc(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n,
  };
}
const Np = (e, t) => (r) =>
    !!(
      (Ra(r) && w$.test(r) && r.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(r, t))
    ),
  Ox = (e, t, r) => (n) => {
    if (!Ra(n)) return n;
    const [o, i, a, s] = n.match(Rp);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [r]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  xz = (e) => cn(0, 255, e),
  Fc = { ...ti, transform: (e) => Math.round(xz(e)) },
  Rn = {
    test: Np("rgb", "red"),
    parse: Ox("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
      "rgba(" +
      Fc.transform(e) +
      ", " +
      Fc.transform(t) +
      ", " +
      Fc.transform(r) +
      ", " +
      Hi(Ui.transform(n)) +
      ")",
  };
function bz(e) {
  let t = "",
    r = "",
    n = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (r = e.substring(3, 5)),
        (n = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (r = e.substring(2, 3)),
        (n = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (r += r),
        (n += n),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(r, 16),
      blue: parseInt(n, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const Yd = { test: Np("#"), parse: bz, transform: Rn.transform },
  wo = {
    test: Np("hsl", "hue"),
    parse: Ox("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      fr.transform(Hi(t)) +
      ", " +
      fr.transform(Hi(r)) +
      ", " +
      Hi(Ui.transform(n)) +
      ")",
  },
  Lc = (e, t, r) => {
    const n = e * e,
      o = r * (t * t - n) + n;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  Sz = [Yd, Rn, wo],
  wz = (e) => Sz.find((t) => t.test(e));
function N0(e) {
  const t = wz(e);
  let r = t.parse(e);
  return t === wo && (r = yz(r)), r;
}
const W0 = (e, t) => {
    const r = N0(e),
      n = N0(t),
      o = { ...r };
    return (i) => (
      (o.red = Lc(r.red, n.red, i)),
      (o.green = Lc(r.green, n.green, i)),
      (o.blue = Lc(r.blue, n.blue, i)),
      (o.alpha = ve(r.alpha, n.alpha, i)),
      Rn.transform(o)
    );
  },
  Ye = {
    test: (e) => Rn.test(e) || Yd.test(e) || wo.test(e),
    parse: (e) =>
      Rn.test(e) ? Rn.parse(e) : wo.test(e) ? wo.parse(e) : Yd.parse(e),
    transform: (e) =>
      Ra(e) ? e : e.hasOwnProperty("red") ? Rn.transform(e) : wo.transform(e),
  };
function kz(e) {
  var t, r;
  return (
    isNaN(e) &&
    Ra(e) &&
    (((t = e.match(Rp)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((r = e.match(S$)) === null || r === void 0 ? void 0 : r.length) || 0) >
      0
  );
}
const Nx = "number",
  Wx = "color",
  Cz = "var",
  _z = "var(",
  U0 = "${}",
  H0 =
    /(var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\))|(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))|((-)?([\d]*\.?[\d])+)/gi;
function Al(e) {
  const t = e.toString(),
    r = t.match(H0) || [],
    n = [],
    o = { color: [], number: [], var: [] },
    i = [];
  for (let l = 0; l < r.length; l++) {
    const u = r[l];
    Ye.test(u)
      ? (o.color.push(l), i.push(Wx), n.push(Ye.parse(u)))
      : u.startsWith(_z)
      ? (o.var.push(l), i.push(Cz), n.push(u))
      : (o.number.push(l), i.push(Nx), n.push(parseFloat(u)));
  }
  const s = t.replace(H0, U0).split(U0);
  return { values: n, split: s, indexes: o, types: i };
}
function Ux(e) {
  return Al(e).values;
}
function Hx(e) {
  const { split: t, types: r } = Al(e),
    n = t.length;
  return (o) => {
    let i = "";
    for (let a = 0; a < n; a++)
      if (((i += t[a]), o[a] !== void 0)) {
        const s = r[a];
        s === Nx
          ? (i += Hi(o[a]))
          : s === Wx
          ? (i += Ye.transform(o[a]))
          : (i += o[a]);
      }
    return i;
  };
}
const Tz = (e) => (typeof e == "number" ? 0 : e);
function Pz(e) {
  const t = Ux(e);
  return Hx(e)(t.map(Tz));
}
const dn = {
  test: kz,
  parse: Ux,
  createTransformer: Hx,
  getAnimatableNone: Pz,
};
function Qd(e, t) {
  return (r) => (r > 0 ? t : e);
}
function Ez(e, t) {
  return (r) => ve(e, t, r);
}
function Wp(e) {
  return typeof e == "number"
    ? Ez
    : typeof e == "string"
    ? El(e)
      ? Qd
      : Ye.test(e)
      ? W0
      : Az
    : Array.isArray(e)
    ? Gx
    : typeof e == "object"
    ? Ye.test(e)
      ? W0
      : $z
    : Qd;
}
function Gx(e, t) {
  const r = [...e],
    n = r.length,
    o = e.map((i, a) => Wp(i)(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++) r[a] = o[a](i);
    return r;
  };
}
function $z(e, t) {
  const r = { ...e, ...t },
    n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Wp(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in n) r[i] = n[i](o);
    return r;
  };
}
function zz(e, t) {
  var r;
  const n = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const a = t.types[i],
      s = e.indexes[a][o[a]],
      l = (r = e.values[s]) !== null && r !== void 0 ? r : 0;
    (n[i] = l), o[a]++;
  }
  return n;
}
const Az = (e, t) => {
  const r = dn.createTransformer(t),
    n = Al(e),
    o = Al(t);
  return n.indexes.var.length === o.indexes.var.length &&
    n.indexes.color.length === o.indexes.color.length &&
    n.indexes.number.length >= o.indexes.number.length
    ? Pr(Gx(zz(n, o), o.values), r)
    : Qd(e, t);
};
function Kx(e, t, r) {
  return typeof e == "number" && typeof t == "number" && typeof r == "number"
    ? ve(e, t, r)
    : Wp(e)(e, t);
}
function Rz(e, t, r) {
  const n = [],
    o = r || Kx,
    i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || $e : t;
      s = Pr(l, s);
    }
    n.push(s);
  }
  return n;
}
function Mz(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if ((Bp(i === t.length), i === 1)) return () => t[0];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Rz(t, n, o),
    s = a.length,
    l = (u) => {
      let c = 0;
      if (s > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = wa(e[c], e[c + 1], u);
      return a[c](d);
    };
  return r ? (u) => l(cn(e[0], e[i - 1], u)) : l;
}
function jz(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = wa(0, t, n);
    e.push(ve(r, 1, o));
  }
}
function Fz(e) {
  const t = [0];
  return jz(t, e.length - 1), t;
}
function Lz(e, t) {
  return e.map((r) => r * t);
}
function Iz(e, t) {
  return e.map(() => t || Lx).splice(0, e.length - 1);
}
function Rl({
  duration: e = 300,
  keyframes: t,
  times: r,
  ease: n = "easeInOut",
}) {
  const o = pz(n) ? n.map(O0) : O0(n),
    i = { done: !1, value: t[0] },
    a = Lz(r && r.length === t.length ? r : Fz(t), e),
    s = Mz(a, t, { ease: Array.isArray(o) ? o : Iz(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = s(l)), (i.done = l >= e), i),
  };
}
function Yx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Dz = 5;
function Qx(e, t, r) {
  const n = Math.max(t - Dz, 0);
  return Yx(r - e(n), t - n);
}
const Ic = 0.001,
  Bz = 0.01,
  Vz = 10,
  Oz = 0.05,
  Nz = 1;
function Wz({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: r = 0,
  mass: n = 1,
}) {
  let o,
    i,
    a = 1 - t;
  (a = cn(Oz, Nz, a)),
    (e = cn(Bz, Vz, Er(e))),
    a < 1
      ? ((o = (u) => {
          const c = u * a,
            d = c * e,
            f = c - r,
            h = Xd(u, a),
            y = Math.exp(-d);
          return Ic - (f / h) * y;
        }),
        (i = (u) => {
          const d = u * a * e,
            f = d * r + r,
            h = Math.pow(a, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            x = Xd(Math.pow(u, 2), a);
          return ((-o(u) + Ic > 0 ? -1 : 1) * ((f - h) * y)) / x;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - r) * e + 1;
          return -Ic + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (r - u) * (e * e);
          return c * d;
        }));
  const s = 5 / e,
    l = Hz(o, i, s);
  if (((e = Dn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * n;
    return { stiffness: u, damping: a * 2 * Math.sqrt(n * u), duration: e };
  }
}
const Uz = 12;
function Hz(e, t, r) {
  let n = r;
  for (let o = 1; o < Uz; o++) n = n - e(n) / t(n);
  return n;
}
function Xd(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Gz = ["duration", "bounce"],
  Kz = ["stiffness", "damping", "mass"];
function G0(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function Yz(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!G0(e, Kz) && G0(e, Gz)) {
    const r = Wz(e);
    (t = { ...t, ...r, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Xx({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0],
    i = e[e.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: s,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = Yz({ ...n, velocity: -Er(n.velocity || 0) }),
    h = d || 0,
    y = l / (2 * Math.sqrt(s * u)),
    x = i - o,
    _ = Er(Math.sqrt(s / u)),
    g = Math.abs(x) < 5;
  r || (r = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const m = Xd(_, y);
    p = (k) => {
      const P = Math.exp(-y * _ * k);
      return (
        i - P * (((h + y * _ * x) / m) * Math.sin(m * k) + x * Math.cos(m * k))
      );
    };
  } else if (y === 1) p = (m) => i - Math.exp(-_ * m) * (x + (h + _ * x) * m);
  else {
    const m = _ * Math.sqrt(y * y - 1);
    p = (k) => {
      const P = Math.exp(-y * _ * k),
        $ = Math.min(m * k, 300);
      return (
        i - (P * ((h + y * _ * x) * Math.sinh($) + m * x * Math.cosh($))) / m
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (m) => {
      const k = p(m);
      if (f) a.done = m >= c;
      else {
        let P = h;
        m !== 0 && (y < 1 ? (P = Qx(p, m, k)) : (P = 0));
        const $ = Math.abs(P) <= r,
          E = Math.abs(i - k) <= t;
        a.done = $ && E;
      }
      return (a.value = a.done ? i : k), a;
    },
  };
}
function K0({
  keyframes: e,
  velocity: t = 0,
  power: r = 0.8,
  timeConstant: n = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (z) => (s !== void 0 && z < s) || (l !== void 0 && z > l),
    y = (z) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - z) < Math.abs(l - z)
        ? s
        : l;
  let x = r * t;
  const _ = d + x,
    g = a === void 0 ? _ : a(_);
  g !== _ && (x = g - d);
  const p = (z) => -x * Math.exp(-z / n),
    m = (z) => g + p(z),
    k = (z) => {
      const F = p(z),
        L = m(z);
      (f.done = Math.abs(F) <= u), (f.value = f.done ? g : L);
    };
  let P, $;
  const E = (z) => {
    h(f.value) &&
      ((P = z),
      ($ = Xx({
        keyframes: [f.value, y(f.value)],
        velocity: Qx(m, z, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (z) => {
        let F = !1;
        return (
          !$ && P === void 0 && ((F = !0), k(z), E(z)),
          P !== void 0 && z > P ? $.next(z - P) : (!F && k(z), f)
        );
      },
    }
  );
}
let Ks;
function Qz() {
  Ks = void 0;
}
const Bn = {
    now: () => (
      Ks === void 0 &&
        Bn.set(
          Oe.isProcessing || lx.useManualTiming
            ? Oe.timestamp
            : performance.now()
        ),
      Ks
    ),
    set: (e) => {
      (Ks = e), queueMicrotask(Qz);
    },
  },
  Xz = (e) => {
    const t = ({ timestamp: r }) => e(r);
    return {
      start: () => he.update(t, !0),
      stop: () => jr(t),
      now: () => (Oe.isProcessing ? Oe.timestamp : Bn.now()),
    };
  },
  Y0 = 2e4;
function Q0(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Y0; ) (t += r), (n = e.next(t));
  return t >= Y0 ? 1 / 0 : t;
}
const qz = { decay: K0, inertia: K0, tween: Rl, keyframes: Rl, spring: Xx },
  Zz = (e) => e / 100;
function Ml({
  autoplay: e = !0,
  delay: t = 0,
  driver: r = Xz,
  keyframes: n,
  type: o = "keyframes",
  repeat: i = 0,
  repeatDelay: a = 0,
  repeatType: s = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let h = 1,
    y = !1,
    x,
    _;
  const g = () => {
    _ = new Promise((O) => {
      x = O;
    });
  };
  g();
  let p;
  const m = qz[o] || Rl;
  let k;
  m !== Rl &&
    typeof n[0] != "number" &&
    ((k = Pr(Zz, Kx(n[0], n[1]))), (n = [0, 100]));
  const P = m({ ...f, keyframes: n });
  let $;
  s === "mirror" &&
    ($ = m({
      ...f,
      keyframes: [...n].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let E = "idle",
    z = null,
    F = null,
    L = null;
  P.calculatedDuration === null && i && (P.calculatedDuration = Q0(P));
  const { calculatedDuration: be } = P;
  let ze = 1 / 0,
    De = 1 / 0;
  be !== null && ((ze = be + a), (De = ze * (i + 1) - a));
  let Te = 0;
  const qt = (O) => {
      if (F === null) return;
      h > 0 && (F = Math.min(F, O)),
        h < 0 && (F = Math.min(O - De / h, F)),
        z !== null ? (Te = z) : (Te = Math.round(O - F) * h);
      const ie = Te - t * (h >= 0 ? 1 : -1),
        K = h >= 0 ? ie < 0 : ie > De;
      (Te = Math.max(ie, 0)), E === "finished" && z === null && (Te = De);
      let ht = Te,
        Lr = P;
      if (i) {
        const qn = Math.min(Te, De) / ze;
        let Ir = Math.floor(qn),
          Jt = qn % 1;
        !Jt && qn >= 1 && (Jt = 1),
          Jt === 1 && Ir--,
          (Ir = Math.min(Ir, i + 1)),
          !!(Ir % 2) &&
            (s === "reverse"
              ? ((Jt = 1 - Jt), a && (Jt -= a / ze))
              : s === "mirror" && (Lr = $)),
          (ht = cn(0, 1, Jt) * ze);
      }
      const Ae = K ? { done: !1, value: n[0] } : Lr.next(ht);
      k && (Ae.value = k(Ae.value));
      let { done: Zt } = Ae;
      !K && be !== null && (Zt = h >= 0 ? Te >= De : Te <= 0);
      const gn = z === null && (E === "finished" || (E === "running" && Zt));
      return d && d(Ae.value), gn && R(), Ae;
    },
    me = () => {
      p && p.stop(), (p = void 0);
    },
    it = () => {
      (E = "idle"), me(), x(), g(), (F = L = null);
    },
    R = () => {
      (E = "finished"), c && c(), me(), x();
    },
    B = () => {
      if (y) return;
      p || (p = r(qt));
      const O = p.now();
      l && l(),
        z !== null ? (F = O - z) : (!F || E === "finished") && (F = O),
        E === "finished" && g(),
        (L = F),
        (z = null),
        (E = "running"),
        p.start();
    };
  e && B();
  const N = {
    then(O, ie) {
      return _.then(O, ie);
    },
    get time() {
      return Er(Te);
    },
    set time(O) {
      (O = Dn(O)),
        (Te = O),
        z !== null || !p || h === 0 ? (z = O) : (F = p.now() - O / h);
    },
    get duration() {
      const O = P.calculatedDuration === null ? Q0(P) : P.calculatedDuration;
      return Er(O);
    },
    get speed() {
      return h;
    },
    set speed(O) {
      O === h || !p || ((h = O), (N.time = Er(Te)));
    },
    get state() {
      return E;
    },
    play: B,
    pause: () => {
      (E = "paused"), (z = Te);
    },
    stop: () => {
      (y = !0), E !== "idle" && ((E = "idle"), u && u(), it());
    },
    cancel: () => {
      L !== null && qt(L), it();
    },
    complete: () => {
      E = "finished";
    },
    sample: (O) => ((F = 0), qt(O)),
  };
  return N;
}
function Jz(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const e8 = Jz(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  t8 = new Set(["opacity", "clipPath", "filter", "transform"]),
  xs = 10,
  r8 = 2e4,
  n8 = (e, t) => t.type === "spring" || e === "backgroundColor" || !Rx(t.ease);
function o8(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (
    !(
      e8() &&
      t8.has(t) &&
      !o.repeatDelay &&
      o.repeatType !== "mirror" &&
      o.damping !== 0 &&
      o.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    s,
    l,
    u = !1;
  const c = () => {
    l = new Promise((m) => {
      s = m;
    });
  };
  c();
  let { keyframes: d, duration: f = 300, ease: h, times: y } = o;
  if (n8(t, o)) {
    const m = Ml({ ...o, repeat: 0, delay: 0 });
    let k = { done: !1, value: d[0] };
    const P = [];
    let $ = 0;
    for (; !k.done && $ < r8; ) (k = m.sample($)), P.push(k.value), ($ += xs);
    (y = void 0), (d = P), (f = $ - xs), (h = "linear");
  }
  const x = az(e.owner.current, t, d, { ...o, duration: f, ease: h, times: y }),
    _ = () => {
      (u = !1), x.cancel();
    },
    g = () => {
      (u = !0), he.update(_), s(), c();
    };
  return (
    (x.onfinish = () => {
      u || (e.set(sz(d, o)), n && n(), g());
    }),
    {
      then(m, k) {
        return l.then(m, k);
      },
      attachTimeline(m) {
        return (x.timeline = m), (x.onfinish = null), $e;
      },
      get time() {
        return Er(x.currentTime || 0);
      },
      set time(m) {
        x.currentTime = Dn(m);
      },
      get speed() {
        return x.playbackRate;
      },
      set speed(m) {
        x.playbackRate = m;
      },
      get duration() {
        return Er(f);
      },
      play: () => {
        a || (x.play(), jr(_));
      },
      pause: () => x.pause(),
      stop: () => {
        if (((a = !0), x.playState === "idle")) return;
        const { currentTime: m } = x;
        if (m) {
          const k = Ml({ ...o, autoplay: !1 });
          e.setWithVelocity(k.sample(m - xs).value, k.sample(m).value, xs);
        }
        g();
      },
      complete: () => {
        u || x.finish();
      },
      cancel: g,
    }
  );
}
function i8({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (
    r && r(e[e.length - 1]),
    n && n(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: $e,
      pause: $e,
      stop: $e,
      then: (i) => (i(), Promise.resolve()),
      cancel: $e,
      complete: $e,
    }
  );
  return t
    ? Ml({ keyframes: [0, 1], duration: 0, delay: t, onComplete: o })
    : o();
}
const a8 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  s8 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  l8 = { type: "keyframes", duration: 0.8 },
  u8 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  c8 = (e, { keyframes: t }) =>
    t.length > 2
      ? l8
      : Xn.has(e)
      ? e.startsWith("scale")
        ? s8(t[1])
        : a8
      : u8,
  qd = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (dn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  d8 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function f8(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [n] = r.match(Rp) || [];
  if (!n) return e;
  const o = r.replace(n, "");
  let i = d8.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const p8 = /([a-z-]*)\(.*?\)/g,
  Zd = {
    ...dn,
    getAnimatableNone: (e) => {
      const t = e.match(p8);
      return t ? t.map(f8).join(" ") : e;
    },
  },
  h8 = {
    ...mx,
    color: Ye,
    backgroundColor: Ye,
    outlineColor: Ye,
    fill: Ye,
    stroke: Ye,
    borderColor: Ye,
    borderTopColor: Ye,
    borderRightColor: Ye,
    borderBottomColor: Ye,
    borderLeftColor: Ye,
    filter: Zd,
    WebkitFilter: Zd,
  },
  Up = (e) => h8[e];
function qx(e, t) {
  let r = Up(e);
  return (
    r !== Zd && (r = dn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
  );
}
const Zx = (e) => /^0[^.\s]+$/.test(e);
function m8(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Zx(e);
}
function g8(e, t, r, n) {
  const o = qd(t, r);
  let i;
  Array.isArray(r) ? (i = [...r]) : (i = [null, r]);
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let u = 0; u < i.length; u++)
    i[u] === null && (i[u] = u === 0 ? a : i[u - 1]),
      m8(i[u]) && l.push(u),
      typeof i[u] == "string" && i[u] !== "none" && i[u] !== "0" && (s = i[u]);
  if (o && l.length && s)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      i[c] = qx(t, s);
    }
  return i;
}
function v8({
  when: e,
  delay: t,
  delayChildren: r,
  staggerChildren: n,
  staggerDirection: o,
  repeat: i,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Hp(e, t) {
  return e[t] || e.default || e;
}
const Gp =
  (e, t, r, n = {}) =>
  (o) => {
    const i = Hp(n, e) || {},
      a = i.delay || n.delay || 0;
    let { elapsed: s = 0 } = n;
    s = s - Dn(a);
    const l = g8(t, e, r, i),
      u = l[0],
      c = l[l.length - 1],
      d = qd(e, u),
      f = qd(e, c);
    let h = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...i,
      delay: -s,
      onUpdate: (y) => {
        t.set(y), i.onUpdate && i.onUpdate(y);
      },
      onComplete: () => {
        o(), i.onComplete && i.onComplete();
      },
    };
    if (
      (v8(i) || (h = { ...h, ...c8(e, h) }),
      h.duration && (h.duration = Dn(h.duration)),
      h.repeatDelay && (h.repeatDelay = Dn(h.repeatDelay)),
      !d || !f || iz.current || i.type === !1 || lx.skipAnimations)
    )
      return i8(h);
    if (
      !n.isHandoff &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = o8(t, e, h);
      if (y) return y;
    }
    return Ml(h);
  };
function jl(e) {
  return !!(pt(e) && e.add);
}
const Jx = (e) => /^\-?\d*\.?\d+$/.test(e);
function Kp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Yp(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class Qp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Kp(this.subscriptions, t), () => Yp(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const X0 = 30,
  y8 = (e) => !isNaN(parseFloat(e));
class x8 {
  constructor(t, r = {}) {
    (this.version = "11.0.8"),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (n, o = !0) => {
        const i = Bn.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(n),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.canTrackVelocity = y8(this.current)),
      (this.owner = r.owner);
  }
  setCurrent(t) {
    (this.current = t), (this.updatedAt = Bn.now());
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new Qp());
    const n = this.events[t].add(r);
    return t === "change"
      ? () => {
          n(),
            he.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : n;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, r) {
    (this.passiveEffect = t), (this.stopPassiveEffect = r);
  }
  set(t, r = !0) {
    !r || !this.passiveEffect
      ? this.updateAndNotify(t, r)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - n);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Bn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > X0
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, X0);
    return Yx(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((r) => {
        (this.hasAnimated = !0),
          (this.animation = t(r)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ko(e, t) {
  return new x8(e, t);
}
const eb = (e) => (t) => t.test(e),
  b8 = { test: (e) => e === "auto", parse: (e) => e },
  tb = [ti, V, fr, Nr, C$, k$, b8],
  vi = (e) => tb.find(eb(e)),
  S8 = [...tb, Ye, dn],
  w8 = (e) => S8.find(eb(e));
function k8(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Ko(r));
}
function C8(e, t) {
  const r = _u(e, t);
  let {
    transitionEnd: n = {},
    transition: o = {},
    ...i
  } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = D$(i[a]);
    k8(e, a, s);
  }
}
function _8(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !==
              null && o !== void 0
              ? o
              : t[l]),
        c != null &&
          (typeof c == "string" && (Jx(c) || Zx(c))
            ? (c = parseFloat(c))
            : !w8(c) && dn.test(u) && (c = qx(l, u)),
          e.addValue(l, Ko(c, { owner: e })),
          r[l] === void 0 && (r[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function T8(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function P8(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = T8(o, t);
    if (i !== void 0) n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function E8({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return (t[r] = !1), n;
}
function $8(e, t) {
  const r = e.get();
  if (Array.isArray(t)) {
    for (let n = 0; n < t.length; n++) if (t[n] !== r) return !0;
  } else return r !== t;
}
function rb(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let {
    transition: i = e.getDefaultTransition(),
    transitionEnd: a,
    ...s
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d),
      h = s[d];
    if (!f || h === void 0 || (c && E8(c, d))) continue;
    const y = { delay: r, elapsed: 0, ...Hp(i || {}, d) };
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[sx];
      if (g) {
        const p = window.HandoffAppearAnimations(g, d, f, he);
        p !== null && ((y.elapsed = p), (y.isHandoff = !0));
      }
    }
    let x = !y.isHandoff && !$8(f, h);
    if (
      (y.type === "spring" && (f.getVelocity() || y.velocity) && (x = !1),
      f.animation && (x = !1),
      x)
    )
      continue;
    f.start(Gp(d, f, h, e.shouldReduceMotion && Xn.has(d) ? { type: !1 } : y));
    const _ = f.animation;
    jl(l) && (l.add(d), _.then(() => l.remove(d))), u.push(_);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && C8(e, a);
      }),
    u
  );
}
function Jd(e, t, r = {}) {
  const n = _u(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(rb(e, n, r)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = o;
            return z8(e, t, u + l, c, d, r);
          }
        : () => Promise.resolve(),
    { when: s } = o;
  if (s) {
    const [l, u] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => u());
  } else return Promise.all([i(), a(r.delay)]);
}
function z8(e, t, r = 0, n = 0, o = 1, i) {
  const a = [],
    s = (e.variantChildren.size - 1) * n,
    l = o === 1 ? (u = 0) => u * n : (u = 0) => s - u * n;
  return (
    Array.from(e.variantChildren)
      .sort(A8)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            Jd(u, t, { ...i, delay: r + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function A8(e, t) {
  return e.sortNodePosition(t);
}
function R8(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Jd(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string") n = Jd(e, t, r);
  else {
    const o = typeof t == "function" ? _u(e, t, r.custom) : t;
    n = Promise.all(rb(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const M8 = [...Ep].reverse(),
  j8 = Ep.length;
function F8(e) {
  return (t) =>
    Promise.all(t.map(({ animation: r, options: n }) => R8(e, r, n)));
}
function L8(e) {
  let t = F8(e);
  const r = D8();
  let n = !0;
  const o = (l, u) => {
    const c = _u(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      h = new Set();
    let y = {},
      x = 1 / 0;
    for (let g = 0; g < j8; g++) {
      const p = M8[g],
        m = r[p],
        k = c[p] !== void 0 ? c[p] : d[p],
        P = ba(k),
        $ = p === u ? m.isActive : null;
      $ === !1 && (x = g);
      let E = k === d[p] && k !== c[p] && P;
      if (
        (E && n && e.manuallyAnimateOnMount && (E = !1),
        (m.protectedKeys = { ...y }),
        (!m.isActive && $ === null) ||
          (!k && !m.prevProp) ||
          wu(k) ||
          typeof k == "boolean")
      )
        continue;
      let F =
          I8(m.prevProp, k) ||
          (p === u && m.isActive && !E && P) ||
          (g > x && P),
        L = !1;
      const be = Array.isArray(k) ? k : [k];
      let ze = be.reduce(o, {});
      $ === !1 && (ze = {});
      const { prevResolvedValues: De = {} } = m,
        Te = { ...De, ...ze },
        qt = (me) => {
          (F = !0),
            h.has(me) && ((L = !0), h.delete(me)),
            (m.needsAnimating[me] = !0);
        };
      for (const me in Te) {
        const it = ze[me],
          R = De[me];
        if (y.hasOwnProperty(me)) continue;
        let B = !1;
        zl(it) && zl(R) ? (B = !zx(it, R)) : (B = it !== R),
          B
            ? it !== void 0
              ? qt(me)
              : h.add(me)
            : it !== void 0 && h.has(me)
            ? qt(me)
            : (m.protectedKeys[me] = !0);
      }
      (m.prevProp = k),
        (m.prevResolvedValues = ze),
        m.isActive && (y = { ...y, ...ze }),
        n && e.blockInitialAnimation && (F = !1),
        F &&
          (!E || L) &&
          f.push(
            ...be.map((me) => ({ animation: me, options: { type: p, ...l } }))
          );
    }
    if (h.size) {
      const g = {};
      h.forEach((p) => {
        const m = e.getBaseTarget(p);
        m !== void 0 && (g[p] = m);
      }),
        f.push({ animation: g });
    }
    let _ = !!f.length;
    return (
      n &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (_ = !1),
      (n = !1),
      _ ? t(f) : Promise.resolve()
    );
  }
  function s(l, u, c) {
    var d;
    if (r[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var y;
        return (y = h.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (r[l].isActive = u);
    const f = a(c, l);
    for (const h in r) r[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => r,
  };
}
function I8(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !zx(t, e) : !1;
}
function bn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function D8() {
  return {
    animate: bn(!0),
    whileInView: bn(),
    whileHover: bn(),
    whileTap: bn(),
    whileDrag: bn(),
    whileFocus: bn(),
    exit: bn(),
  };
}
class B8 extends mn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = L8(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), wu(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let V8 = 0;
class O8 extends mn {
  constructor() {
    super(...arguments), (this.id = V8++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: r,
        custom: n,
      } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o) return;
    const i = this.node.animationState.setActive("exit", !t, {
      custom: n ?? this.node.getProps().custom,
    });
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const N8 = { animation: { Feature: B8 }, exit: { Feature: O8 } },
  q0 = (e, t) => Math.abs(e - t);
function W8(e, t) {
  const r = q0(e.x, t.x),
    n = q0(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class nb {
  constructor(
    t,
    r,
    { transformPagePoint: n, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Bc(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          h = W8(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !h) return;
        const { point: y } = d,
          { timestamp: x } = Oe;
        this.history.push({ ...y, timestamp: x });
        const { onStart: _, onMove: g } = this.handlers;
        f ||
          (_ && _(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Dc(f, this.transformPagePoint)),
          he.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: h, onSessionEnd: y, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const _ = Bc(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Dc(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && h && h(d, _), y && y(d, _);
      }),
      !_x(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = r),
      (this.transformPagePoint = n),
      (this.contextWindow = o || window);
    const a = Cu(t),
      s = Dc(a, this.transformPagePoint),
      { point: l } = s,
      { timestamp: u } = Oe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = r;
    c && c(t, Bc(s, this.history)),
      (this.removeListeners = Pr(
        Tr(this.contextWindow, "pointermove", this.handlePointerMove),
        Tr(this.contextWindow, "pointerup", this.handlePointerUp),
        Tr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), jr(this.updatePoint);
  }
}
function Dc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Z0(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Bc({ point: e }, t) {
  return {
    point: e,
    delta: Z0(e, ob(t)),
    offset: Z0(e, U8(t)),
    velocity: H8(t, 0.1),
  };
}
function U8(e) {
  return e[0];
}
function ob(e) {
  return e[e.length - 1];
}
function H8(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let r = e.length - 1,
    n = null;
  const o = ob(e);
  for (; r >= 0 && ((n = e[r]), !(o.timestamp - n.timestamp > Dn(t))); ) r--;
  if (!n) return { x: 0, y: 0 };
  const i = Er(o.timestamp - n.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const a = { x: (o.x - n.x) / i, y: (o.y - n.y) / i };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function wt(e) {
  return e.max - e.min;
}
function ef(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function J0(e, t, r, n = 0.5) {
  (e.origin = n),
    (e.originPoint = ve(t.min, t.max, e.origin)),
    (e.scale = wt(r) / wt(t)),
    (ef(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = ve(r.min, r.max, e.origin) - e.originPoint),
    (ef(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Gi(e, t, r, n) {
  J0(e.x, t.x, r.x, n ? n.originX : void 0),
    J0(e.y, t.y, r.y, n ? n.originY : void 0);
}
function eg(e, t, r) {
  (e.min = r.min + t.min), (e.max = e.min + wt(t));
}
function G8(e, t, r) {
  eg(e.x, t.x, r.x), eg(e.y, t.y, r.y);
}
function tg(e, t, r) {
  (e.min = t.min - r.min), (e.max = e.min + wt(t));
}
function Ki(e, t, r) {
  tg(e.x, t.x, r.x), tg(e.y, t.y, r.y);
}
function K8(e, { min: t, max: r }, n) {
  return (
    t !== void 0 && e < t
      ? (e = n ? ve(t, e, n.min) : Math.max(e, t))
      : r !== void 0 && e > r && (e = n ? ve(r, e, n.max) : Math.min(e, r)),
    e
  );
}
function rg(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0,
  };
}
function Y8(e, { top: t, left: r, bottom: n, right: o }) {
  return { x: rg(e.x, r, o), y: rg(e.y, t, n) };
}
function ng(e, t) {
  let r = t.min - e.min,
    n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function Q8(e, t) {
  return { x: ng(e.x, t.x), y: ng(e.y, t.y) };
}
function X8(e, t) {
  let r = 0.5;
  const n = wt(e),
    o = wt(t);
  return (
    o > n
      ? (r = wa(t.min, t.max - n, e.min))
      : n > o && (r = wa(e.min, e.max - o, t.min)),
    cn(0, 1, r)
  );
}
function q8(e, t) {
  const r = {};
  return (
    t.min !== void 0 && (r.min = t.min - e.min),
    t.max !== void 0 && (r.max = t.max - e.min),
    r
  );
}
const tf = 0.35;
function Z8(e = tf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = tf),
    { x: og(e, "left", "right"), y: og(e, "top", "bottom") }
  );
}
function og(e, t, r) {
  return { min: ig(e, t), max: ig(e, r) };
}
function ig(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ag = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ko = () => ({ x: ag(), y: ag() }),
  sg = () => ({ min: 0, max: 0 }),
  we = () => ({ x: sg(), y: sg() });
function zt(e) {
  return [e("x"), e("y")];
}
function ib({ top: e, left: t, right: r, bottom: n }) {
  return { x: { min: t, max: r }, y: { min: e, max: n } };
}
function J8({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function eA(e, t) {
  if (!t) return e;
  const r = t({ x: e.left, y: e.top }),
    n = t({ x: e.right, y: e.bottom });
  return { top: r.y, left: r.x, bottom: n.y, right: n.x };
}
function Vc(e) {
  return e === void 0 || e === 1;
}
function rf({ scale: e, scaleX: t, scaleY: r }) {
  return !Vc(e) || !Vc(t) || !Vc(r);
}
function kn(e) {
  return rf(e) || ab(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function ab(e) {
  return lg(e.x) || lg(e.y);
}
function lg(e) {
  return e && e !== "0%";
}
function Fl(e, t, r) {
  const n = e - r,
    o = t * n;
  return r + o;
}
function ug(e, t, r, n, o) {
  return o !== void 0 && (e = Fl(e, o, n)), Fl(e, r, n) + t;
}
function nf(e, t = 0, r = 1, n, o) {
  (e.min = ug(e.min, t, r, n, o)), (e.max = ug(e.max, t, r, n, o));
}
function sb(e, { x: t, y: r }) {
  nf(e.x, t.translate, t.scale, t.originPoint),
    nf(e.y, r.translate, r.scale, r.originPoint);
}
function tA(e, t, r, n = !1) {
  const o = r.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    (i = r[s]), (a = i.projectionDelta);
    const l = i.instance;
    (l && l.style && l.style.display === "contents") ||
      (n &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Co(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), sb(e, a)),
      n && kn(i.latestValues) && Co(e, i.latestValues));
  }
  (t.x = cg(t.x)), (t.y = cg(t.y));
}
function cg(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Hr(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function dg(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5,
    a = ve(e.min, e.max, i);
  nf(e, t[r], t[n], a, t.scale);
}
const rA = ["x", "scaleX", "originX"],
  nA = ["y", "scaleY", "originY"];
function Co(e, t) {
  dg(e.x, t, rA), dg(e.y, t, nA);
}
function lb(e, t) {
  return ib(eA(e.getBoundingClientRect(), t));
}
function oA(e, t, r) {
  const n = lb(e, r),
    { scroll: o } = t;
  return o && (Hr(n.x, o.offset.x), Hr(n.y, o.offset.y)), n;
}
const ub = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  iA = new WeakMap();
class aA {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = we()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          r && this.snapToCursor(Cu(c, "page").point);
      },
      i = (c, d) => {
        const { drag: f, dragPropagation: h, onDragStart: y } = this.getProps();
        if (
          f &&
          !h &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Px(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          zt((_) => {
            let g = this.getAxisMotionValue(_).get() || 0;
            if (fr.test(g)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const m = p.layout.layoutBox[_];
                m && (g = wt(m) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[_] = g;
          }),
          y && he.update(() => y(c, d), !1, !0);
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      a = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: h,
          onDirectionLock: y,
          onDrag: x,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: _ } = d;
        if (h && this.currentDirection === null) {
          (this.currentDirection = sA(_)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, _),
          this.updateAxis("y", d.point, _),
          this.visualElement.render(),
          x && x(c, d);
      },
      s = (c, d) => this.stop(c, d),
      l = () =>
        zt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new nb(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: a,
        onSessionEnd: s,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: ub(this.visualElement),
      }
    );
  }
  stop(t, r) {
    const n = this.isDragging;
    if ((this.cancel(), !n)) return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && he.update(() => i(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: n } = this.getProps();
    !n &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !bs(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints &&
      this.constraints[t] &&
      (a = K8(a, this.constraints[t], this.elastic[t])),
      i.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: r, dragElastic: n } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    r && So(r)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : r && o
      ? (this.constraints = Y8(o.layoutBox, r))
      : (this.constraints = !1),
      (this.elastic = Z8(n)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        zt((a) => {
          this.getAxisMotionValue(a) &&
            (this.constraints[a] = q8(o.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !So(t)) return !1;
    const n = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = oA(n, o.root, this.visualElement.getTransformPagePoint());
    let a = Q8(o.layout.layoutBox, i);
    if (r) {
      const s = r(J8(a));
      (this.hasMutatedConstraints = !!s), s && (a = ib(s));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: r,
        dragMomentum: n,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: a,
        onDragTransitionEnd: s,
      } = this.getProps(),
      l = this.constraints || {},
      u = zt((c) => {
        if (!bs(c, r, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          h = o ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: n ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(Gp(t, n, 0, r));
  }
  stopAnimation() {
    zt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    zt((t) => {
      var r;
      return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
        ? void 0
        : r.pause();
    });
  }
  getAnimationState(t) {
    var r;
    return (r = this.getAxisMotionValue(t).animation) === null || r === void 0
      ? void 0
      : r.state;
  }
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(),
      n = this.visualElement.getProps(),
      o = n[r];
    return (
      o ||
      this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    zt((r) => {
      const { drag: n } = this.getProps();
      if (!bs(r, n, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - ve(a, s, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: r } = this.getProps(),
      { projection: n } = this.visualElement;
    if (!So(r) || !n || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    zt((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = X8({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      n.root && n.root.updateScroll(),
      n.updateLayout(),
      this.resolveConstraints(),
      zt((a) => {
        if (!bs(a, t, null)) return;
        const s = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        s.set(ve(l, u, o[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    iA.set(this.visualElement, this);
    const t = this.visualElement.current,
      r = Tr(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      n = () => {
        const { dragConstraints: l } = this.getProps();
        So(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = kr(window, "resize", () => this.scalePositionWithinConstraints()),
      s = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (zt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: n = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: a = tf,
        dragMomentum: s = !0,
      } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s,
    };
  }
}
function bs(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function sA(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? (r = "y") : Math.abs(e.x) > t && (r = "x"), r;
}
class lA extends mn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = $e),
      (this.removeListeners = $e),
      (this.controls = new aA(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || $e);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const fg = (e) => (t, r) => {
  e && he.update(() => e(t, r));
};
class uA extends mn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = $e);
  }
  onPointerDown(t) {
    this.session = new nb(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ub(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: r,
      onPan: n,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: fg(t),
      onStart: fg(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && he.update(() => o(i, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Tr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function cA() {
  const e = C.useContext(za);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e,
    o = C.useId();
  return C.useEffect(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function dA() {
  return fA(C.useContext(za));
}
function fA(e) {
  return e === null ? !0 : e.isPresent;
}
const Ys = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function pg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const yi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (V.test(e)) e = parseFloat(e);
        else return e;
      const r = pg(e, t.target.x),
        n = pg(e, t.target.y);
      return `${r}% ${n}%`;
    },
  },
  pA = {
    correct: (e, { treeScale: t, projectionDelta: r }) => {
      const n = e,
        o = dn.parse(e);
      if (o.length > 5) return n;
      const i = dn.createTransformer(e),
        a = typeof o[0] != "number" ? 1 : 0,
        s = r.x.scale * t.x,
        l = r.y.scale * t.y;
      (o[0 + a] /= s), (o[1 + a] /= l);
      const u = ve(s, l, 0.5);
      return (
        typeof o[2 + a] == "number" && (o[2 + a] /= u),
        typeof o[3 + a] == "number" && (o[3 + a] /= u),
        i(o)
      );
    },
  };
class hA extends jt.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    h$(mA),
      i &&
        (r.group && r.group.add(i),
        n && n.register && o && n.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ys.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: r,
        visualElement: n,
        drag: o,
        isPresent: i,
      } = this.props,
      a = n.projection;
    return (
      a &&
        ((a.isPresent = i),
        o || t.layoutDependency !== r || r === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? a.promote()
            : a.relegate() ||
              he.postRender(() => {
                const s = a.getStack();
                (!s || !s.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Pp.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: r,
        switchLayoutGroup: n,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      r && r.group && r.group.remove(o),
      n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function cb(e) {
  const [t, r] = cA(),
    n = C.useContext(zp);
  return jt.createElement(hA, {
    ...e,
    layoutGroup: n,
    switchLayoutGroup: C.useContext(dx),
    isPresent: t,
    safeToRemove: r,
  });
}
const mA = {
    borderRadius: {
      ...yi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: yi,
    borderTopRightRadius: yi,
    borderBottomLeftRadius: yi,
    borderBottomRightRadius: yi,
    boxShadow: pA,
  },
  db = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  gA = db.length,
  hg = (e) => (typeof e == "string" ? parseFloat(e) : e),
  mg = (e) => typeof e == "number" || V.test(e);
function vA(e, t, r, n, o, i) {
  o
    ? ((e.opacity = ve(0, r.opacity !== void 0 ? r.opacity : 1, yA(n))),
      (e.opacityExit = ve(t.opacity !== void 0 ? t.opacity : 1, 0, xA(n))))
    : i &&
      (e.opacity = ve(
        t.opacity !== void 0 ? t.opacity : 1,
        r.opacity !== void 0 ? r.opacity : 1,
        n
      ));
  for (let a = 0; a < gA; a++) {
    const s = `border${db[a]}Radius`;
    let l = gg(t, s),
      u = gg(r, s);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || mg(l) === mg(u)
        ? ((e[s] = Math.max(ve(hg(l), hg(u), n), 0)),
          (fr.test(u) || fr.test(l)) && (e[s] += "%"))
        : (e[s] = u);
  }
  (t.rotate || r.rotate) && (e.rotate = ve(t.rotate || 0, r.rotate || 0, n));
}
function gg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const yA = fb(0, 0.5, Bx),
  xA = fb(0.5, 0.95, $e);
function fb(e, t, r) {
  return (n) => (n < e ? 0 : n > t ? 1 : r(wa(e, t, n)));
}
function vg(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Et(e, t) {
  vg(e.x, t.x), vg(e.y, t.y);
}
function yg(e, t, r, n, o) {
  return (
    (e -= t), (e = Fl(e, 1 / r, n)), o !== void 0 && (e = Fl(e, 1 / o, n)), e
  );
}
function bA(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (
    (fr.test(t) &&
      ((t = parseFloat(t)), (t = ve(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = ve(i.min, i.max, n);
  e === i && (s -= t),
    (e.min = yg(e.min, t, r, s, o)),
    (e.max = yg(e.max, t, r, s, o));
}
function xg(e, t, [r, n, o], i, a) {
  bA(e, t[r], t[n], t[o], t.scale, i, a);
}
const SA = ["x", "scaleX", "originX"],
  wA = ["y", "scaleY", "originY"];
function bg(e, t, r, n) {
  xg(e.x, t, SA, r ? r.x : void 0, n ? n.x : void 0),
    xg(e.y, t, wA, r ? r.y : void 0, n ? n.y : void 0);
}
function Sg(e) {
  return e.translate === 0 && e.scale === 1;
}
function pb(e) {
  return Sg(e.x) && Sg(e.y);
}
function kA(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function hb(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function wg(e) {
  return wt(e.x) / wt(e.y);
}
class CA {
  constructor() {
    this.members = [];
  }
  add(t) {
    Kp(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Yp(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0) return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && ((this.prevLead = n), (this.lead = t), t.show(), n)) {
      n.instance && n.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = n),
        r && (t.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((t.snapshot = n.snapshot),
          (t.snapshot.latestValues = n.animationValues || n.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function kg(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y;
  if (
    ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
    r)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = r;
    l && (n += `rotate(${l}deg) `),
      u && (n += `rotateX(${u}deg) `),
      c && (n += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const _A = (e, t) => e.depth - t.depth;
class TA {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Kp(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Yp(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(_A),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function PA(e, t) {
  const r = Bn.now(),
    n = ({ timestamp: o }) => {
      const i = o - r;
      i >= t && (jr(n), e(i - t));
    };
  return he.read(n, !0), () => jr(n);
}
function EA(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function $A(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function zA(e, t, r) {
  const n = pt(e) ? e : Ko(e);
  return n.start(Gp("", n, t, r)), n.animation;
}
const Cg = ["", "X", "Y", "Z"],
  AA = { visibility: "hidden" },
  _g = 1e3;
let RA = 0;
const Cn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function mb({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: r,
  checkIsScrollRoot: n,
  resetTransform: o,
}) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      (this.id = RA++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Cn.totalNodes =
              Cn.resolvedTargetDeltas =
              Cn.recalculatedProjection =
                0),
            this.nodes.forEach(FA),
            this.nodes.forEach(VA),
            this.nodes.forEach(OA),
            this.nodes.forEach(LA),
            EA(Cn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new TA());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new Qp()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = $A(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = PA(f, 250)),
            Ys.hasAnimatedSinceResize &&
              ((Ys.hasAnimatedSinceResize = !1), this.nodes.forEach(Pg));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: h,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const x =
                  this.options.transition || c.getDefaultTransition() || GA,
                { onLayoutAnimationStart: _, onLayoutAnimationComplete: g } =
                  c.getProps(),
                p = !this.targetLayout || !hb(this.targetLayout, y) || h,
                m = !f && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (f && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, m);
                const k = { ...Hp(x, "layout"), onPlay: _, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k);
              } else
                f || Pg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        jr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(NA),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Tg);
        return;
      }
      this.isUpdating || this.nodes.forEach(DA),
        (this.isUpdating = !1),
        window.HandoffCancelAllAnimations &&
          window.HandoffCancelAllAnimations(),
        this.nodes.forEach(BA),
        this.nodes.forEach(MA),
        this.nodes.forEach(jA),
        this.clearAllSnapshots();
      const s = Bn.now();
      (Oe.delta = cn(0, 1e3 / 60, s - Oe.timestamp)),
        (Oe.timestamp = s),
        (Oe.isProcessing = !0),
        Ac.update.process(Oe),
        Ac.preRender.process(Oe),
        Ac.render.process(Oe),
        (Oe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Pp.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(IA), this.sharedNodes.forEach(WA);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        he.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      he.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = we()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: n(this.instance),
            offset: r(this.instance),
          });
    }
    resetTransform() {
      if (!o) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !pb(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (s || kn(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        KA(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return we();
      const s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (Hr(s.x, l.offset.x), Hr(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = we();
      Et(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            Et(s, a);
            const { scroll: f } = this.root;
            f && (Hr(s.x, -f.offset.x), Hr(s.y, -f.offset.y));
          }
          Hr(s.x, c.offset.x), Hr(s.y, c.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = we();
      Et(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !s &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Co(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          kn(c.latestValues) && Co(l, c.latestValues);
      }
      return kn(this.latestValues) && Co(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = we();
      Et(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !kn(u.latestValues)) continue;
        rf(u.latestValues) && u.updateSnapshot();
        const c = we(),
          d = u.measurePageBox();
        Et(c, d),
          bg(s, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return kn(this.latestValues) && bg(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Oe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Oe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = we()),
              (this.relativeTargetOrigin = we()),
              Ki(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              Et(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = we()), (this.targetWithTransforms = we())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                G8(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Et(this.target, this.layout.layoutBox),
                sb(this.target, this.targetDelta))
              : Et(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = we()),
                (this.relativeTargetOrigin = we()),
                Ki(this.relativeTargetOrigin, this.target, h.target),
                Et(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Cn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          rf(this.parent.latestValues) ||
          ab(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const s = this.getLead(),
        l = !!this.resumingFrom || this !== s;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Oe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Et(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      tA(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = we()));
      const { target: y } = s;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = ko()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = ko()),
        (this.projectionDeltaWithTransform = ko()));
      const x = this.projectionTransform;
      Gi(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = kg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== x ||
          this.treeScale.x !== f ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Cn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = ko();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      const f = we(),
        h = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        x = h !== y,
        _ = this.getStack(),
        g = !_ || _.members.length <= 1,
        p = !!(x && !g && this.options.crossfade === !0 && !this.path.some(HA));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (k) => {
        const P = k / 1e3;
        Eg(d.x, a.x, P),
          Eg(d.y, a.y, P),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ki(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            UA(this.relativeTarget, this.relativeTargetOrigin, f, P),
            m && kA(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = we()),
            Et(m, this.relativeTarget)),
          x &&
            ((this.animationValues = c), vA(c, u, this.latestValues, P, p, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (jr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = he.update(() => {
          (Ys.hasAnimatedSinceResize = !0),
            (this.currentAnimation = zA(0, _g, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(_g),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: s,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!s || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          gb(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || we();
          const d = wt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const f = wt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + f);
        }
        Et(s, l),
          Co(s, c),
          Gi(this.projectionDeltaWithTransform, this.layoutCorrected, s, c);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new CA()),
        this.sharedNodes.get(a).add(s);
      const u = s.options.initialPromotionConfig;
      s.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let s = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      const u = {};
      for (let c = 0; c < Cg.length; c++) {
        const d = "rotate" + Cg[c];
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return AA;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Gs(a == null ? void 0 : a.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const x = {};
        return (
          this.options.layoutId &&
            ((x.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (x.pointerEvents = Gs(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !kn(this.latestValues) &&
            ((x.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          x
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = kg(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: h, y } = this.projectionDelta;
      (u.transformOrigin = `${h.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (s = f.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const x in Pl) {
        if (f[x] === void 0) continue;
        const { correct: _, applyTo: g } = Pl[x],
          p = u.transform === "none" ? f[x] : _(f[x], d);
        if (g) {
          const m = g.length;
          for (let k = 0; k < m; k++) u[g[k]] = p;
        } else u[x] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Gs(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(Tg),
        this.root.sharedNodes.clear();
    }
  };
}
function MA(e) {
  e.updateLayout();
}
function jA(e) {
  var t;
  const r =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      a = r.source !== e.layout.source;
    i === "size"
      ? zt((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            h = wt(f);
          (f.min = n[d].min), (f.max = f.min + h);
        })
      : gb(i, r.layoutBox, n) &&
        zt((d) => {
          const f = a ? r.measuredBox[d] : r.layoutBox[d],
            h = wt(n[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const s = ko();
    Gi(s, n, r.layoutBox);
    const l = ko();
    a ? Gi(l, e.applyTransform(o, !0), r.measuredBox) : Gi(l, n, r.layoutBox);
    const u = !pb(s);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const y = we();
          Ki(y, r.layoutBox, f.layoutBox);
          const x = we();
          Ki(x, n, h.layoutBox),
            hb(y, x) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function FA(e) {
  Cn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function LA(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function IA(e) {
  e.clearSnapshot();
}
function Tg(e) {
  e.clearMeasurements();
}
function DA(e) {
  e.isLayoutDirty = !1;
}
function BA(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Pg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function VA(e) {
  e.resolveTargetDelta();
}
function OA(e) {
  e.calcProjection();
}
function NA(e) {
  e.resetRotation();
}
function WA(e) {
  e.removeLeadSnapshot();
}
function Eg(e, t, r) {
  (e.translate = ve(t.translate, 0, r)),
    (e.scale = ve(t.scale, 1, r)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function $g(e, t, r, n) {
  (e.min = ve(t.min, r.min, n)), (e.max = ve(t.max, r.max, n));
}
function UA(e, t, r, n) {
  $g(e.x, t.x, r.x, n), $g(e.y, t.y, r.y, n);
}
function HA(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const GA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  zg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Ag = zg("applewebkit/") && !zg("chrome/") ? Math.round : $e;
function Rg(e) {
  (e.min = Ag(e.min)), (e.max = Ag(e.max));
}
function KA(e) {
  Rg(e.x), Rg(e.y);
}
function gb(e, t, r) {
  return (
    e === "position" || (e === "preserve-aspect" && !ef(wg(t), wg(r), 0.2))
  );
}
const YA = mb({
    attachResizeListener: (e, t) => kr(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Oc = { current: void 0 },
  vb = mb({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Oc.current) {
        const e = new YA({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Oc.current = e);
      }
      return Oc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  QA = {
    pan: { Feature: uA },
    drag: { Feature: lA, ProjectionNode: vb, MeasureLayout: cb },
  },
  XA = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function qA(e) {
  const t = XA.exec(e);
  if (!t) return [,];
  const [, r, n] = t;
  return [r, n];
}
function of(e, t, r = 1) {
  const [n, o] = qA(e);
  if (!n) return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  if (i) {
    const a = i.trim();
    return Jx(a) ? parseFloat(a) : a;
  } else return El(o) ? of(o, t, r + 1) : o;
}
function ZA(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element)) return { target: t, transitionEnd: r };
  r && (r = { ...r }),
    e.values.forEach((o) => {
      const i = o.get();
      if (!El(i)) return;
      const a = of(i, n);
      a && o.set(a);
    });
  for (const o in t) {
    const i = t[o];
    if (!El(i)) continue;
    const a = of(i, n);
    a && ((t[o] = a), r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const JA = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  yb = (e) => JA.has(e),
  eR = (e) => Object.keys(e).some(yb),
  Mg = (e) => e === ti || e === V,
  jg = (e, t) => parseFloat(e.split(", ")[t]),
  Fg =
    (e, t) =>
    (r, { transform: n }) => {
      if (n === "none" || !n) return 0;
      const o = n.match(/^matrix3d\((.+)\)$/);
      if (o) return jg(o[1], t);
      {
        const i = n.match(/^matrix\((.+)\)$/);
        return i ? jg(i[1], e) : 0;
      }
    },
  tR = new Set(["x", "y", "z"]),
  rR = Aa.filter((e) => !tR.has(e));
function nR(e) {
  const t = [];
  return (
    rR.forEach((r) => {
      const n = e.getValue(r);
      n !== void 0 &&
        (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const Yo = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Fg(4, 13),
  y: Fg(5, 14),
};
Yo.translateX = Yo.x;
Yo.translateY = Yo.y;
const oR = (e, t, r) => {
    const n = t.measureViewportBox(),
      o = t.current,
      i = getComputedStyle(o),
      { display: a } = i,
      s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      r.forEach((u) => {
        s[u] = Yo[u](n, i);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      r.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(s[u]), (e[u] = Yo[u](l, i));
      }),
      e
    );
  },
  iR = (e, t, r = {}, n = {}) => {
    (t = { ...t }), (n = { ...n });
    const o = Object.keys(t).filter(yb);
    let i = [],
      a = !1;
    const s = [];
    if (
      (o.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = r[l],
          d = vi(c);
        const f = t[l];
        let h;
        if (zl(f)) {
          const y = f.length,
            x = f[0] === null ? 1 : 0;
          (c = f[x]), (d = vi(c));
          for (let _ = x; _ < y && f[_] !== null; _++)
            h ? Bp(vi(f[_]) === h) : (h = vi(f[_]));
        } else h = vi(f);
        if (d !== h)
          if (Mg(d) && Mg(h)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && h === V && (t[l] = f.map(parseFloat));
          } else
            d != null &&
            d.transform &&
            h != null &&
            h.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = d.transform(f))
              : (a || ((i = nR(e)), (a = !0)),
                s.push(l),
                (n[l] = n[l] !== void 0 ? n[l] : t[l]),
                u.jump(f));
      }),
      s.length)
    ) {
      const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = oR(t, e, s);
      return (
        i.length &&
          i.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        Su && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: n }
      );
    } else return { target: t, transitionEnd: n };
  };
function aR(e, t, r, n) {
  return eR(t) ? iR(e, t, r, n) : { target: t, transitionEnd: n };
}
const sR = (e, t, r, n) => {
    const o = ZA(e, t, n);
    return (t = o.target), (n = o.transitionEnd), aR(e, t, r, n);
  },
  af = { current: null },
  xb = { current: !1 };
function lR() {
  if (((xb.current = !0), !!Su))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (af.current = e.matches);
      e.addListener(t), t();
    } else af.current = !1;
}
function uR(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o],
      a = r[o];
    if (pt(i)) e.addValue(o, i), jl(n) && n.add(o);
    else if (pt(a)) e.addValue(o, Ko(i, { owner: e })), jl(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Ko(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r) t[o] === void 0 && e.removeValue(o);
  return t;
}
const Lg = new WeakMap(),
  bb = Object.keys(Sa),
  cR = bb.length,
  Ig = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  dR = $p.length;
class fR {
  constructor(
    {
      parent: t,
      props: r,
      presenceContext: n,
      reducedMotionConfig: o,
      visualState: i,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => he.render(this.render, !1, !0));
    const { latestValues: s, renderState: l } = i;
    (this.latestValues = s),
      (this.baseTarget = { ...s }),
      (this.initialValues = r.initial ? { ...s } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = r),
      (this.presenceContext = n),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.isControllingVariants = ku(r)),
      (this.isVariantNode = cx(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in c) {
      const f = c[d];
      s[d] !== void 0 && pt(f) && (f.set(s[d], !1), jl(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Lg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, n) => this.bindToMotionValue(n, r)),
      xb.current || lR(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : af.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Lg.delete(this.current),
      this.projection && this.projection.unmount(),
      jr(this.notifyUpdate),
      jr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = Xn.has(t),
      o = r.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && he.update(this.notifyUpdate, !1, !0),
          n && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, i) {
    let a, s;
    for (let l = 0; l < cR; l++) {
      const u = bb[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: h,
        } = Sa[u];
      f && (a = f),
        c(r) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          h && (s = h));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      a
    ) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: h,
      } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && So(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: i,
        layoutScroll: f,
        layoutRoot: h,
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : we();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, r);
  }
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r);
    for (let n = 0; n < Ig.length; n++) {
      const o = Ig[n];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    (this.prevMotionValues = uR(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (n.initial = this.props.initial), n
      );
    }
    const r = {};
    for (let n = 0; n < dR; n++) {
      const o = $p[n],
        i = this.props[o];
      (ba(i) || i === !1) && (r[o] = i);
    }
    return r;
  }
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(t),
        () => r.variantChildren.delete(t)
      );
  }
  addValue(t, r) {
    r !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, r)),
      this.values.set(t, r),
      (this.latestValues[t] = r.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let n = this.values.get(t);
    return (
      n === void 0 &&
        r !== void 0 &&
        ((n = Ko(r, { owner: this })), this.addValue(t, n)),
      n
    );
  }
  readValue(t) {
    var r;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
        r !== void 0
      ? r
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props,
      o =
        typeof n == "string" || typeof n == "object"
          ? (r = Dp(this.props, n)) === null || r === void 0
            ? void 0
            : r[t]
          : void 0;
    if (n && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !pt(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new Qp()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Sb extends fR {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: r, ...n },
    o
  ) {
    const i = P8(n, t || {}, this);
    if (o) {
      _8(this, n, i);
      const a = sR(this, n, i, r);
      (r = a.transitionEnd), (n = a.target);
    }
    return { transition: t, transitionEnd: r, ...n };
  }
}
function pR(e) {
  return window.getComputedStyle(e);
}
class hR extends Sb {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, r) {
    if (Xn.has(r)) {
      const n = Up(r);
      return (n && n.default) || 0;
    } else {
      const n = pR(t),
        o = (hx(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return lb(t, r);
  }
  build(t, r, n, o) {
    Mp(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return Ip(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    pt(t) &&
      (this.childSubscription = t.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
  renderInstance(t, r, n, o) {
    xx(t, r, n, o);
  }
}
class mR extends Sb {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (Xn.has(r)) {
      const n = Up(r);
      return (n && n.default) || 0;
    }
    return (r = bx.has(r) ? r : Tp(r)), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return we();
  }
  scrapeMotionValuesFromProps(t, r) {
    return wx(t, r);
  }
  build(t, r, n, o) {
    Fp(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Sx(t, r, n, o);
  }
  mount(t) {
    (this.isSVGTag = Lp(t.tagName)), super.mount(t);
  }
}
const gR = (e, t) =>
    Ap(e)
      ? new mR(t, { enableHardwareAcceleration: !1 })
      : new hR(t, { enableHardwareAcceleration: !0 }),
  vR = { layout: { ProjectionNode: vb, MeasureLayout: cb } },
  yR = { ...N8, ...rz, ...QA, ...vR },
  wb = f$((e, t) => W$(e, t, yR, gR));
function kb() {
  const e = C.useRef(!1);
  return (
    _p(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function xR() {
  const e = kb(),
    [t, r] = C.useState(0),
    n = C.useCallback(() => {
      e.current && r(t + 1);
    }, [t]);
  return [C.useCallback(() => he.postRender(n), [n]), t];
}
class bR extends C.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      (n.height = r.offsetHeight || 0),
        (n.width = r.offsetWidth || 0),
        (n.top = r.offsetTop),
        (n.left = r.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function SR({ children: e, isPresent: t }) {
  const r = C.useId(),
    n = C.useRef(null),
    o = C.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    C.useInsertionEffect(() => {
      const { width: i, height: a, top: s, left: l } = o.current;
      if (t || !n.current || !i || !a) return;
      n.current.dataset.motionPopId = r;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    C.createElement(
      bR,
      { isPresent: t, childRef: n, sizeRef: o },
      C.cloneElement(e, { ref: n })
    )
  );
}
const Nc = ({
  children: e,
  initial: t,
  isPresent: r,
  onExitComplete: n,
  custom: o,
  presenceAffectsLayout: i,
  mode: a,
}) => {
  const s = kx(wR),
    l = C.useId(),
    u = C.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: r,
        custom: o,
        onExitComplete: (c) => {
          s.set(c, !0);
          for (const d of s.values()) if (!d) return;
          n && n();
        },
        register: (c) => (s.set(c, !1), () => s.delete(c)),
      }),
      i ? void 0 : [r]
    );
  return (
    C.useMemo(() => {
      s.forEach((c, d) => s.set(d, !1));
    }, [r]),
    C.useEffect(() => {
      !r && !s.size && n && n();
    }, [r]),
    a === "popLayout" && (e = C.createElement(SR, { isPresent: r }, e)),
    C.createElement(za.Provider, { value: u }, e)
  );
};
function wR() {
  return new Map();
}
function kR(e) {
  return C.useEffect(() => () => e(), []);
}
const _n = (e) => e.key || "";
function CR(e, t) {
  e.forEach((r) => {
    const n = _n(r);
    t.set(n, r);
  });
}
function _R(e) {
  const t = [];
  return (
    C.Children.forEach(e, (r) => {
      C.isValidElement(r) && t.push(r);
    }),
    t
  );
}
const TR = ({
  children: e,
  custom: t,
  initial: r = !0,
  onExitComplete: n,
  exitBeforeEnter: o,
  presenceAffectsLayout: i = !0,
  mode: a = "sync",
}) => {
  const s = C.useContext(zp).forceRender || xR()[0],
    l = kb(),
    u = _R(e);
  let c = u;
  const d = C.useRef(new Map()).current,
    f = C.useRef(c),
    h = C.useRef(new Map()).current,
    y = C.useRef(!0);
  if (
    (_p(() => {
      (y.current = !1), CR(u, h), (f.current = c);
    }),
    kR(() => {
      (y.current = !0), h.clear(), d.clear();
    }),
    y.current)
  )
    return C.createElement(
      C.Fragment,
      null,
      c.map((p) =>
        C.createElement(
          Nc,
          {
            key: _n(p),
            isPresent: !0,
            initial: r ? void 0 : !1,
            presenceAffectsLayout: i,
            mode: a,
          },
          p
        )
      )
    );
  c = [...c];
  const x = f.current.map(_n),
    _ = u.map(_n),
    g = x.length;
  for (let p = 0; p < g; p++) {
    const m = x[p];
    _.indexOf(m) === -1 && !d.has(m) && d.set(m, void 0);
  }
  return (
    a === "wait" && d.size && (c = []),
    d.forEach((p, m) => {
      if (_.indexOf(m) !== -1) return;
      const k = h.get(m);
      if (!k) return;
      const P = x.indexOf(m);
      let $ = p;
      if (!$) {
        const E = () => {
          d.delete(m);
          const z = Array.from(h.keys()).filter((F) => !_.includes(F));
          if (
            (z.forEach((F) => h.delete(F)),
            (f.current = u.filter((F) => {
              const L = _n(F);
              return L === m || z.includes(L);
            })),
            !d.size)
          ) {
            if (l.current === !1) return;
            s(), n && n();
          }
        };
        ($ = C.createElement(
          Nc,
          {
            key: _n(k),
            isPresent: !1,
            onExitComplete: E,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
          },
          k
        )),
          d.set(m, $);
      }
      c.splice(P, 0, $);
    }),
    (c = c.map((p) => {
      const m = p.key;
      return d.has(m)
        ? p
        : C.createElement(
            Nc,
            { key: _n(p), isPresent: !0, presenceAffectsLayout: i, mode: a },
            p
          );
    })),
    C.createElement(
      C.Fragment,
      null,
      d.size ? c : c.map((p) => C.cloneElement(p))
    )
  );
};
var PR = {
    initial: (e) => {
      const { position: t } = e,
        r = ["top", "bottom"].includes(t) ? "y" : "x";
      let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (n = 1), { opacity: 0, [r]: n * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  Cb = C.memo((e) => {
    const {
        id: t,
        message: r,
        onCloseComplete: n,
        onRequestRemove: o,
        requestClose: i = !1,
        position: a = "bottom",
        duration: s = 5e3,
        containerStyle: l,
        motionVariants: u = PR,
        toastSpacing: c = "0.5rem",
      } = e,
      [d, f] = C.useState(s),
      h = dA();
    A0(() => {
      h || n == null || n();
    }, [h]),
      A0(() => {
        f(s);
      }, [s]);
    const y = () => f(null),
      x = () => f(s),
      _ = () => {
        h && o();
      };
    C.useEffect(() => {
      h && i && o();
    }, [h, i, o]),
      e$(_, d);
    const g = C.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      p = C.useMemo(() => qE(a), [a]);
    return b.jsx(wb.div, {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: y,
      onHoverEnd: x,
      custom: { position: a },
      style: p,
      children: b.jsx(oe.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: g,
        children: qr(r, { id: t, onClose: _ }),
      }),
    });
  });
Cb.displayName = "ToastComponent";
var Dg = {
    path: b.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        b.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        b.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        b.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  Fa = _e((e, t) => {
    const {
        as: r,
        viewBox: n,
        color: o = "currentColor",
        focusable: i = !1,
        children: a,
        className: s,
        __css: l,
        ...u
      } = e,
      c = ot("chakra-icon", s),
      d = ei("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      h = { ref: t, focusable: i, className: c, __css: f },
      y = n ?? Dg.viewBox;
    if (r && typeof r != "string") return b.jsx(oe.svg, { as: r, ...h, ...u });
    const x = a ?? Dg.path;
    return b.jsx(oe.svg, {
      verticalAlign: "middle",
      viewBox: y,
      ...h,
      ...u,
      children: x,
    });
  });
Fa.displayName = "Icon";
function ER(e) {
  return b.jsx(Fa, {
    viewBox: "0 0 24 24",
    ...e,
    children: b.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function $R(e) {
  return b.jsx(Fa, {
    viewBox: "0 0 24 24",
    ...e,
    children: b.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function Bg(e) {
  return b.jsx(Fa, {
    viewBox: "0 0 24 24",
    ...e,
    children: b.jsx("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
var zR = vw({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  Xp = _e((e, t) => {
    const r = ei("Spinner", e),
      {
        label: n = "Loading...",
        thickness: o = "2px",
        speed: i = "0.45s",
        emptyColor: a = "transparent",
        className: s,
        ...l
      } = Qn(e),
      u = ot("chakra-spinner", s),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: o,
        borderBottomColor: a,
        borderLeftColor: a,
        animation: `${zR} ${i} linear infinite`,
        ...r,
      };
    return b.jsx(oe.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: n && b.jsx(oe.span, { srOnly: !0, children: n }),
    });
  });
Xp.displayName = "Spinner";
var [AR, qp] = qo({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [RR, Zp] = qo({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  _b = {
    info: { icon: $R, colorScheme: "blue" },
    warning: { icon: Bg, colorScheme: "orange" },
    success: { icon: ER, colorScheme: "green" },
    error: { icon: Bg, colorScheme: "red" },
    loading: { icon: Xp, colorScheme: "blue" },
  };
function MR(e) {
  return _b[e].colorScheme;
}
function jR(e) {
  return _b[e].icon;
}
var Tb = _e(function (t, r) {
  const n = Zp(),
    { status: o } = qp(),
    i = { display: "inline", ...n.description };
  return b.jsx(oe.div, {
    ref: r,
    "data-status": o,
    ...t,
    className: ot("chakra-alert__desc", t.className),
    __css: i,
  });
});
Tb.displayName = "AlertDescription";
function Pb(e) {
  const { status: t } = qp(),
    r = jR(t),
    n = Zp(),
    o = t === "loading" ? n.spinner : n.icon;
  return b.jsx(oe.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: ot("chakra-alert__icon", e.className),
    __css: o,
    children: e.children || b.jsx(r, { h: "100%", w: "100%" }),
  });
}
Pb.displayName = "AlertIcon";
var Eb = _e(function (t, r) {
  const n = Zp(),
    { status: o } = qp();
  return b.jsx(oe.div, {
    ref: r,
    "data-status": o,
    ...t,
    className: ot("chakra-alert__title", t.className),
    __css: n.title,
  });
});
Eb.displayName = "AlertTitle";
var $b = _e(function (t, r) {
  var n;
  const { status: o = "info", addRole: i = !0, ...a } = Qn(t),
    s = (n = t.colorScheme) != null ? n : MR(o),
    l = ex("Alert", { ...t, colorScheme: s }),
    u = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...l.container,
    };
  return b.jsx(AR, {
    value: { status: o },
    children: b.jsx(RR, {
      value: l,
      children: b.jsx(oe.div, {
        "data-status": o,
        role: i ? "alert" : void 0,
        ref: r,
        ...a,
        className: ot("chakra-alert", t.className),
        __css: u,
      }),
    }),
  });
});
$b.displayName = "Alert";
function FR(e) {
  return b.jsx(Fa, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: b.jsx("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
var zb = _e(function (t, r) {
  const n = ei("CloseButton", t),
    { children: o, isDisabled: i, __css: a, ...s } = Qn(t),
    l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return b.jsx(oe.button, {
    type: "button",
    "aria-label": "Close",
    ref: r,
    disabled: i,
    __css: { ...l, ...n, ...a },
    ...s,
    children: o || b.jsx(FR, { width: "1em", height: "1em" }),
  });
});
zb.displayName = "CloseButton";
var LR = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  Yi = IR(LR);
function IR(e) {
  let t = e;
  const r = new Set(),
    n = (o) => {
      (t = o(t)), r.forEach((i) => i());
    };
  return {
    getState: () => t,
    subscribe: (o) => (
      r.add(o),
      () => {
        n(() => e), r.delete(o);
      }
    ),
    removeToast: (o, i) => {
      n((a) => ({ ...a, [i]: a[i].filter((s) => s.id != o) }));
    },
    notify: (o, i) => {
      const a = DR(o, i),
        { position: s, id: l } = a;
      return (
        n((u) => {
          var c, d;
          const h = s.includes("top")
            ? [a, ...((c = u[s]) != null ? c : [])]
            : [...((d = u[s]) != null ? d : []), a];
          return { ...u, [s]: h };
        }),
        l
      );
    },
    update: (o, i) => {
      o &&
        n((a) => {
          const s = { ...a },
            { position: l, index: u } = z0(s, o);
          return (
            l && u !== -1 && (s[l][u] = { ...s[l][u], ...i, message: VR(i) }), s
          );
        });
    },
    closeAll: ({ positions: o } = {}) => {
      n((i) =>
        (
          o ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (l, u) => ((l[u] = i[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...i }
        )
      );
    },
    close: (o) => {
      n((i) => {
        const a = ox(i, o);
        return a
          ? {
              ...i,
              [a]: i[a].map((s) =>
                s.id == o ? { ...s, requestClose: !0 } : s
              ),
            }
          : i;
      });
    },
    isActive: (o) => !!z0(Yi.getState(), o).position,
  };
}
var Vg = 0;
function DR(e, t = {}) {
  var r, n;
  Vg += 1;
  const o = (r = t.id) != null ? r : Vg,
    i = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: i,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Yi.removeToast(String(o), i),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
var BR = (e) => {
  const {
      status: t,
      variant: r = "solid",
      id: n,
      title: o,
      isClosable: i,
      onClose: a,
      description: s,
      colorScheme: l,
      icon: u,
    } = e,
    c = n
      ? {
          root: `toast-${n}`,
          title: `toast-${n}-title`,
          description: `toast-${n}-description`,
        }
      : void 0;
  return b.jsxs($b, {
    addRole: !1,
    status: t,
    variant: r,
    id: c == null ? void 0 : c.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: l,
    children: [
      b.jsx(Pb, { children: u }),
      b.jsxs(oe.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          o && b.jsx(Eb, { id: c == null ? void 0 : c.title, children: o }),
          s &&
            b.jsx(Tb, {
              id: c == null ? void 0 : c.description,
              display: "block",
              children: s,
            }),
        ],
      }),
      i &&
        b.jsx(zb, {
          size: "sm",
          onClick: a,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function VR(e = {}) {
  const { render: t, toastComponent: r = BR } = e;
  return (o) =>
    typeof t == "function" ? t({ ...o, ...e }) : b.jsx(r, { ...o, ...e });
}
var [OR, dM] = qo({ name: "ToastOptionsContext", strict: !1 }),
  NR = (e) => {
    const t = C.useSyncExternalStore(Yi.subscribe, Yi.getState, Yi.getState),
      { motionVariants: r, component: n = Cb, portalProps: o } = e,
      a = Object.keys(t).map((s) => {
        const l = t[s];
        return b.jsx(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": `Notifications-${s}`,
            id: `chakra-toast-manager-${s}`,
            style: ZE(s),
            children: b.jsx(TR, {
              initial: !1,
              children: l.map((u) =>
                b.jsx(n, { motionVariants: r, ...u }, u.id)
              ),
            }),
          },
          s
        );
      });
    return b.jsx(mu, { ...o, children: a });
  },
  WR = (e) =>
    function ({ children: r, theme: n = e, toastOptions: o, ...i }) {
      return b.jsxs(QE, {
        theme: n,
        ...i,
        children: [
          b.jsx(OR, {
            value: o == null ? void 0 : o.defaultOptions,
            children: r,
          }),
          b.jsx(NR, { ...o }),
        ],
      });
    },
  UR = WR(xE);
function HR(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function GR(...e) {
  return (t) => {
    e.forEach((r) => {
      HR(r, t);
    });
  };
}
function KR(...e) {
  return C.useMemo(() => GR(...e), e);
}
var sf = _e(function (t, r) {
  const { htmlWidth: n, htmlHeight: o, alt: i, ...a } = t;
  return b.jsx("img", { width: n, height: o, ref: r, alt: i, ...a });
});
sf.displayName = "NativeImage";
function YR(e) {
  const {
      loading: t,
      src: r,
      srcSet: n,
      onLoad: o,
      onError: i,
      crossOrigin: a,
      sizes: s,
      ignoreFallback: l,
    } = e,
    [u, c] = C.useState("pending");
  C.useEffect(() => {
    c(r ? "loading" : "pending");
  }, [r]);
  const d = C.useRef(),
    f = C.useCallback(() => {
      if (!r) return;
      h();
      const y = new Image();
      (y.src = r),
        a && (y.crossOrigin = a),
        n && (y.srcset = n),
        s && (y.sizes = s),
        t && (y.loading = t),
        (y.onload = (x) => {
          h(), c("loaded"), o == null || o(x);
        }),
        (y.onerror = (x) => {
          h(), c("failed"), i == null || i(x);
        }),
        (d.current = y);
    }, [r, a, n, s, o, i, t]),
    h = () => {
      d.current &&
        ((d.current.onload = null),
        (d.current.onerror = null),
        (d.current = null));
    };
  return (
    Io(() => {
      if (!l)
        return (
          u === "loading" && f(),
          () => {
            h();
          }
        );
    }, [u, f, l]),
    l ? "loaded" : u
  );
}
var QR = (e, t) =>
  (e !== "loaded" && t === "beforeLoadOrError") ||
  (e === "failed" && t === "onError");
function XR(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t) n in r && delete r[n];
  return r;
}
var Jp = _e(function (t, r) {
  const {
      fallbackSrc: n,
      fallback: o,
      src: i,
      srcSet: a,
      align: s,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = "beforeLoadOrError",
      referrerPolicy: h,
      ...y
    } = t,
    x = n !== void 0 || o !== void 0,
    _ = u != null || c || !x,
    g = YR({ ...t, crossOrigin: d, ignoreFallback: _ }),
    p = QR(g, f),
    m = {
      ref: r,
      objectFit: l,
      objectPosition: s,
      ...(_ ? y : XR(y, ["onError", "onLoad"])),
    };
  return p
    ? o ||
        b.jsx(oe.img, {
          as: sf,
          className: "chakra-image__placeholder",
          src: n,
          ...m,
        })
    : b.jsx(oe.img, {
        as: sf,
        src: i,
        srcSet: a,
        crossOrigin: d,
        loading: u,
        referrerPolicy: h,
        className: "chakra-image",
        ...m,
      });
});
Jp.displayName = "Image";
function qR(e) {
  return C.Children.toArray(e).filter((t) => C.isValidElement(t));
}
var [fM, ZR] = qo({ strict: !1, name: "ButtonGroupContext" });
function JR(e) {
  const [t, r] = C.useState(!e);
  return {
    ref: C.useCallback((i) => {
      i && r(i.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
function lf(e) {
  const { children: t, className: r, ...n } = e,
    o = C.isValidElement(t)
      ? C.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    i = ot("chakra-button__icon", r);
  return b.jsx(oe.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...n,
    className: i,
    children: o,
  });
}
lf.displayName = "ButtonIcon";
function uf(e) {
  const {
      label: t,
      placement: r,
      spacing: n = "0.5rem",
      children: o = b.jsx(Xp, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: i,
      __css: a,
      ...s
    } = e,
    l = ot("chakra-button__spinner", i),
    u = r === "start" ? "marginEnd" : "marginStart",
    c = C.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? n : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...a,
      }),
      [a, t, u, n]
    );
  return b.jsx(oe.div, { className: l, ...s, __css: c, children: o });
}
uf.displayName = "ButtonSpinner";
var Ab = _e((e, t) => {
  const r = ZR(),
    n = ei("Button", { ...r, ...e }),
    {
      isDisabled: o = r == null ? void 0 : r.isDisabled,
      isLoading: i,
      isActive: a,
      children: s,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: h,
      spinnerPlacement: y = "start",
      className: x,
      as: _,
      ...g
    } = Qn(e),
    p = C.useMemo(() => {
      const $ = { ...(n == null ? void 0 : n._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...n,
        ...(!!r && { _focus: $ }),
      };
    }, [n, r]),
    { ref: m, type: k } = JR(_),
    P = { rightIcon: u, leftIcon: l, iconSpacing: d, children: s };
  return b.jsxs(oe.button, {
    ref: KR(t, m),
    as: _,
    type: f ?? k,
    "data-active": Dm(a),
    "data-loading": Dm(i),
    __css: p,
    className: ot("chakra-button", x),
    ...g,
    disabled: o || i,
    children: [
      i &&
        y === "start" &&
        b.jsx(uf, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: h,
        }),
      i
        ? c || b.jsx(oe.span, { opacity: 0, children: b.jsx(Og, { ...P }) })
        : b.jsx(Og, { ...P }),
      i &&
        y === "end" &&
        b.jsx(uf, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: h,
        }),
    ],
  });
});
Ab.displayName = "Button";
function Og(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return b.jsxs(b.Fragment, {
    children: [
      t && b.jsx(lf, { marginEnd: o, children: t }),
      n,
      r && b.jsx(lf, { marginStart: o, children: r }),
    ],
  });
}
var [e9, Rb] = GE("Card"),
  t9 = _e(function (t, r) {
    const { className: n, ...o } = t,
      i = Rb();
    return b.jsx(oe.div, {
      ref: r,
      className: ot("chakra-card__body", n),
      __css: i.body,
      ...o,
    });
  }),
  r9 = _e(function (t, r) {
    const { className: n, justify: o, ...i } = t,
      a = Rb();
    return b.jsx(oe.div, {
      ref: r,
      className: ot("chakra-card__footer", n),
      __css: { display: "flex", justifyContent: o, ...a.footer },
      ...i,
    });
  }),
  n9 = _e(function (t, r) {
    const {
        className: n,
        children: o,
        direction: i = "column",
        justify: a,
        align: s,
        ...l
      } = Qn(t),
      u = ex("Card", t);
    return b.jsx(oe.div, {
      ref: r,
      className: ot("chakra-card", n),
      __css: {
        display: "flex",
        flexDirection: i,
        justifyContent: a,
        alignItems: s,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...u.container,
      },
      ...l,
      children: b.jsx(e9, { value: u, children: o }),
    });
  }),
  sn = _e(function (t, r) {
    const {
        templateAreas: n,
        gap: o,
        rowGap: i,
        columnGap: a,
        column: s,
        row: l,
        autoFlow: u,
        autoRows: c,
        templateRows: d,
        autoColumns: f,
        templateColumns: h,
        ...y
      } = t,
      x = {
        display: "grid",
        gridTemplateAreas: n,
        gridGap: o,
        gridRowGap: i,
        gridColumnGap: a,
        gridAutoColumns: f,
        gridColumn: s,
        gridRow: l,
        gridAutoFlow: u,
        gridAutoRows: c,
        gridTemplateRows: d,
        gridTemplateColumns: h,
      };
    return b.jsx(oe.div, { ref: r, __css: x, ...y });
  });
sn.displayName = "Grid";
function Mb(e, t) {
  return Array.isArray(e)
    ? e.map((r) => (r === null ? null : t(r)))
    : Yt(e)
    ? Object.keys(e).reduce((r, n) => ((r[n] = t(e[n])), r), {})
    : e != null
    ? t(e)
    : null;
}
var Ll = _e(function (t, r) {
  const n = ei("Text", t),
    { className: o, align: i, decoration: a, casing: s, ...l } = Qn(t),
    u = tx({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return b.jsx(oe.p, {
    ref: r,
    className: ot("chakra-text", t.className),
    ...u,
    ...l,
    __css: n,
  });
});
Ll.displayName = "Text";
var jb = (e) =>
  b.jsx(oe.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
jb.displayName = "StackItem";
function o9(e) {
  const { spacing: t, direction: r } = e,
    n = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": Mb(r, (o) => n[o]) };
}
var Tu = _e((e, t) => {
  const {
      isInline: r,
      direction: n,
      align: o,
      justify: i,
      spacing: a = "0.5rem",
      wrap: s,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    h = r ? "row" : n ?? "column",
    y = C.useMemo(() => o9({ spacing: a, direction: h }), [a, h]),
    x = !!u,
    _ = !d && !x,
    g = C.useMemo(() => {
      const m = qR(l);
      return _
        ? m
        : m.map((k, P) => {
            const $ = typeof k.key < "u" ? k.key : P,
              E = P + 1 === m.length,
              F = d ? b.jsx(jb, { children: k }, $) : k;
            if (!x) return F;
            const L = C.cloneElement(u, { __css: y }),
              be = E ? null : L;
            return b.jsxs(C.Fragment, { children: [F, be] }, $);
          });
    }, [u, y, x, _, d, l]),
    p = ot("chakra-stack", c);
  return b.jsx(oe.div, {
    ref: t,
    display: "flex",
    alignItems: o,
    justifyContent: i,
    flexDirection: h,
    flexWrap: s,
    gap: x ? void 0 : a,
    className: p,
    ...f,
    children: g,
  });
});
Tu.displayName = "Stack";
var Hn = _e((e, t) =>
  b.jsx(Tu, { align: "center", ...e, direction: "column", ref: t })
);
Hn.displayName = "VStack";
var Gn = _e((e, t) =>
  b.jsx(Tu, { align: "center", ...e, direction: "row", ref: t })
);
Gn.displayName = "HStack";
function Ng(e) {
  return Mb(e, (t) => (t === "auto" ? "auto" : `span ${t}/span ${t}`));
}
var Ht = _e(function (t, r) {
  const {
      area: n,
      colSpan: o,
      colStart: i,
      colEnd: a,
      rowEnd: s,
      rowSpan: l,
      rowStart: u,
      ...c
    } = t,
    d = tx({
      gridArea: n,
      gridColumn: Ng(o),
      gridRow: Ng(l),
      gridColumnStart: i,
      gridColumnEnd: a,
      gridRowStart: u,
      gridRowEnd: s,
    });
  return b.jsx(oe.div, { ref: r, __css: d, ...c });
});
Ht.displayName = "GridItem";
var Pu = _e(function (t, r) {
  const n = ei("Heading", t),
    { className: o, ...i } = Qn(t);
  return b.jsx(oe.h2, {
    ref: r,
    className: ot("chakra-heading", t.className),
    ...i,
    __css: n,
  });
});
Pu.displayName = "Heading";
var Qt = oe("div");
Qt.displayName = "Box";
var Fb = _e(function (t, r) {
  const { size: n, centerContent: o = !0, ...i } = t,
    a = o
      ? { display: "flex", alignItems: "center", justifyContent: "center" }
      : {};
  return b.jsx(Qt, {
    ref: r,
    boxSize: n,
    __css: { ...a, flexShrink: 0, flexGrow: 0 },
    ...i,
  });
});
Fb.displayName = "Square";
var i9 = _e(function (t, r) {
  const { size: n, ...o } = t;
  return b.jsx(Fb, { size: n, ref: r, borderRadius: "9999px", ...o });
});
i9.displayName = "Circle";
function a9(e, t = {}) {
  const { ssr: r = !0, fallback: n } = t,
    { getWindow: o } = YE(),
    i = Array.isArray(e) ? e : [e];
  let a = Array.isArray(n) ? n : [n];
  a = a.filter((u) => u != null);
  const [s, l] = C.useState(() =>
    i.map((u, c) => ({
      media: u,
      matches: r ? !!a[c] : o().matchMedia(u).matches,
    }))
  );
  return (
    C.useEffect(() => {
      const u = o();
      l(i.map((f) => ({ media: f, matches: u.matchMedia(f).matches })));
      const c = i.map((f) => u.matchMedia(f)),
        d = (f) => {
          l((h) =>
            h
              .slice()
              .map((y) =>
                y.media === f.media ? { ...y, matches: f.matches } : y
              )
          );
        };
      return (
        c.forEach((f) => {
          typeof f.addListener == "function"
            ? f.addListener(d)
            : f.addEventListener("change", d);
        }),
        () => {
          c.forEach((f) => {
            typeof f.removeListener == "function"
              ? f.removeListener(d)
              : f.removeEventListener("change", d);
          });
        }
      );
    }, [o]),
    s.map((u) => u.matches)
  );
}
var Lb,
  Wg = fp;
(Lb = Wg.createRoot), Wg.hydrateRoot;
var Ib = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ug = jt.createContext && jt.createContext(Ib),
  s9 = ["attr", "size", "title"];
function l9(e, t) {
  if (e == null) return {};
  var r = u9(e, t),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (n = i[o]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
function u9(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    i;
  for (i = 0; i < n.length; i++)
    (o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Il() {
  return (
    (Il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Il.apply(this, arguments)
  );
}
function Hg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hg(Object(r), !0).forEach(function (n) {
          c9(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Hg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function c9(e, t, r) {
  return (
    (t = d9(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function d9(e) {
  var t = f9(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function f9(e, t) {
  if (typeof e != "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Db(e) {
  return (
    e &&
    e.map((t, r) =>
      jt.createElement(t.tag, Dl({ key: r }, t.attr), Db(t.child))
    )
  );
}
function Dt(e) {
  return (t) =>
    jt.createElement(p9, Il({ attr: Dl({}, e.attr) }, t), Db(e.child));
}
function p9(e) {
  var t = (r) => {
    var { attr: n, size: o, title: i } = e,
      a = l9(e, s9),
      s = o || r.size || "1em",
      l;
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      jt.createElement(
        "svg",
        Il(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          r.attr,
          n,
          a,
          {
            className: l,
            style: Dl(Dl({ color: e.color || r.color }, r.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && jt.createElement("title", null, i),
        e.children
      )
    );
  };
  return Ug !== void 0
    ? jt.createElement(Ug.Consumer, null, (r) => t(r))
    : t(Ib);
}
function h9(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(e);
}
function m9(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(e);
}
function g9(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z",
        },
        child: [],
      },
    ],
  })(e);
}
function v9(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
        child: [],
      },
    ],
  })(e);
}
function y9(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
        },
        child: [],
      },
    ],
  })(e);
}
function x9(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
        },
        child: [],
      },
    ],
  })(e);
}
function b9(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z",
        },
        child: [],
      },
    ],
  })(e);
}
function S9(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z",
        },
        child: [],
      },
    ],
  })(e);
}
const w9 = ({ images: e, imageHeight: t, imageWidth: r, imageStyle: n }) => {
    const [o, i] = C.useState(0),
      [a, s] = C.useState(""),
      l = () => {
        i((c) => (c === 0 ? e.length - 1 : c - 1)), s("prev");
      },
      u = () => {
        i((c) => (c === e.length - 1 ? 0 : c + 1)), s("next");
      };
    return b.jsxs(Qt, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      w: "100%",
      h: "100%",
      overflow: "hidden",
      children: [
        b.jsx(
          wb.div,
          {
            initial: a === "prev" ? { x: "-100%" } : { x: "100%" },
            animate: { x: "0%" },
            exit: a === "prev" ? { x: "100%" } : { x: "-100%" },
            transition: { duration: 1.3 },
            children: b.jsx(Jp, {
              src: e[o],
              alt: "Carousel Image",
              w: r || "100%",
              h: t || "100%",
              objectFit: "cover",
              style: n,
            }),
          },
          o
        ),
        b.jsx(Qt, {
          position: "absolute",
          top: "25%",
          left: "0",
          transform: "translateY(-50%)",
          cursor: "pointer",
          width: "20%",
          h: "50%",
          bgColor: "rgba(0,0,0,0.01)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          onClick: l,
          _hover: { bgColor: "rgba(0,0,0,0.3)" },
          children: b.jsx(y9, { size: 20 }),
        }),
        b.jsx(Qt, {
          position: "absolute",
          top: "25%",
          right: "0",
          transform: "translateY(-50%)",
          cursor: "pointer",
          width: "20%",
          h: "50%",
          bgColor: "rgba(0,0,0,0.01)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          onClick: u,
          _hover: { bgColor: "rgba(0,0,0,0.3)" },
          children: b.jsx(x9, { size: 20, onClick: u }),
        }),
      ],
    });
  },
  ee = Object.freeze({
    primary: "#2c2c6c",
    secondary: "#4baef8",
    textColor: "#4db5ff",
  });
function k9({ images: e, usedTechnologies: t, url: r, type: n, title: o }) {
  return b.jsxs(n9, {
    bgColor: ee.primary,
    border: `1px solid ${ee.primary}`,
    borderRadius: 0,
    borderTopRadius: "35px",
    maxW: "350px",
    overflow: "hidden",
    transition: "transform 1.5s",
    _hover: {
      transition: "transform 1.5s",
      bgColor: "transparent",
      border: "1px solid #FFF",
    },
    children: [
      b.jsx(t9, {
        children: b.jsxs(Hn, {
          children: [
            b.jsx(w9, {
              imageHeight: "200px",
              images: e,
              imageStyle: {
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                borderBottomLeftRadius: "30px",
                borderBottomRightRadius: "30px",
              },
              imageWidth: "330px",
            }),
            b.jsxs(Tu, {
              textAlign: "center",
              align: "center",
              mt: "6",
              spacing: "3",
              children: [
                b.jsx(Pu, { color: "#FFF", size: "md", children: o }),
                b.jsx(Ll, {
                  color: ee.textColor,
                  fontSize: "sm",
                  fontWeight: "bold",
                  children: t,
                }),
                b.jsx(Ll, {
                  color: ee.textColor,
                  fontSize: "sm",
                  fontWeight: "bold",
                  children: n,
                }),
              ],
            }),
          ],
        }),
      }),
      b.jsx(r9, {
        justify: "center",
        children: b.jsx(Ab, {
          borderColor: ee.textColor,
          color: ee.textColor,
          variant: "outline",
          onClick: () => window.open(r, "_blank"),
          _hover: {
            bgColor: ee.textColor,
            color: "white",
            borderColor: ee.textColor,
          },
          children: "Github",
        }),
      }),
    ],
  });
}
function tt({
  children: e,
  color: t,
  fontSize: r,
  fontWeight: n,
  fontStyle: o,
  props: i,
}) {
  return b.jsx(Ll, {
    fontStyle: o || "normal",
    fontSize: r || "2xl",
    color: t || "#FFF",
    fontWeight: n || "normal",
    textAlign: "center",
    transition: "all 1s ease-in-out",
    _hover: { color: "#FFF", transition: "all 1.5s ease-in-out" },
    ...i,
    children: e,
  });
}
const C9 = "./assets/photo_1-B45TYox3.png",
  _9 = "./assets/photo_2-COwjBuDe.png",
  T9 = "./assets/photo_3-BCpPZ6Pf.png",
  P9 = "./assets/photo_4-EQyD37h0.png",
  E9 = "./assets/photo_5-oPnwZdW8.png",
  $9 = "./assets/photo_6-kTUHsHew.png",
  z9 = "./assets/photo_7-QCMZIqyK.png",
  A9 = "./assets/photo_8-pbDWKP4_.png",
  R9 = "./assets/screenShot1-ClY31n_n.png",
  M9 = "./assets/screenShot2-CFH0GE8b.png",
  j9 = "./assets/screenShot3-D6M__sj7.png",
  F9 = "./assets/screenShot4-Blgg5_qk.png",
  L9 = "./assets/screenShotFinal-D4ffM1yz.png",
  I9 = "./assets/screeShot-DhSeh6dC.jpg",
  D9 = "./assets/screeShot2-DHy_AzfU.jpg",
  B9 = "./assets/screeShot3-Bx0_W31p.png",
  V9 = "./assets/game_hub1-BpHcIDyc.jpg",
  O9 = "./assets/snake1-BsvpAMMh.png",
  N9 = "./assets/snake2-BSDASTrk.png",
  W9 = "./assets/snake3-B670e-Im.png",
  U9 = "./assets/snake4-Dn-SqEbQ.png",
  H9 = "./assets/snake5-DIoQp05k.png",
  G9 = "./assets/snake6-DhLGJlIi.png",
  K9 = [
    {
      title: "Pharmacy Management System",
      images: [I9, D9, B9],
      type: "Desktop Application",
      usedTechnologies: "Java | Swing | MySQL ",
      url: "https://github.com/yabulala432/PharmacyManagementSystemNewUI",
    },
    {
      title: "Employee Management System",
      images: [R9, M9, j9, F9, L9],
      type: "Web Application",
      usedTechnologies: "Angular | Ng-Zorro | NestJS | MongoDB",
      url: "https://github.com/yabulala432/FullStack-Employee-Management-System",
    },
    {
      title: "E-Commerce Application",
      images: [C9, E9, _9, $9, T9, A9, z9, P9],
      type: "Mobile Application (In Progress)",
      usedTechnologies: "React Native | Expo | NestJS | MongoDB Atlas | TS",
      url: "https://github.com/yabulala432/react-native-e-commerce-app",
    },
    {
      title: "Game-Hub",
      images: [V9],
      type: "Web Application",
      usedTechnologies: "React | Vite | Chackra-UI | TS",
      url: "https://github.com/yabulala432/game-hub",
    },
    {
      title: "Snake Game and Capital-Cities Quiz",
      images: [O9, N9, W9, U9, H9, G9],
      type: "Desktop Application",
      usedTechnologies: "Java | JavaFX",
      url: "https://github.com/yabulala432/Snake-Game-And-Capital-City-Quiz",
    },
  ];
function Y9() {
  return b.jsxs(Hn, {
    spacing: 10,
    p: 6,
    align: "center",
    justify: "center",
    children: [
      b.jsxs(Hn, {
        children: [
          b.jsx(tt, {
            fontWeight: "normal",
            fontSize: "sm",
            color: "gray",
            children: "Some of",
          }),
          b.jsx(tt, {
            fontWeight: "bold",
            fontSize: "2xl",
            color: ee.secondary,
            children: "My Projects ...",
          }),
        ],
      }),
      b.jsx(Gn, {
        justify: "center",
        spacing: 5,
        wrap: "wrap",
        children: K9.map((e, t) =>
          b.jsx(
            k9,
            {
              images: e.images,
              usedTechnologies: e.usedTechnologies,
              url: e.url,
              type: e.type,
              title: e.title,
            },
            t
          )
        ),
      }),
    ],
  });
}
function Q9(e) {
  return Dt({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.178.178 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.178.178 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.178.178 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.178.178 0 0 1-.134-.098L8.16 4.1z",
        },
        child: [],
      },
    ],
  })(e);
}
function Bb({ children: e, props: t }) {
  return b.jsx(Qt, {
    bgColor: ee.primary,
    borderRadius: "5%",
    h: "100%",
    w: "100%",
    p: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    transition: "all 1s ease-in-out",
    _hover: {
      boxShadow: "0 0 0px 1px #FFF",
      transition: "all 1.5s ease-in-out",
      bgColor: "transparent",
      border: "1px solid #FFF",
      transform: "scale(1.1)",
    },
    ...t,
    children: e,
  });
}
function X9({ title: e, icon: t, subtitle: r, footer: n }) {
  return b.jsx(Bb, {
    children: b.jsxs(sn, {
      templateColumns: "repeat(1, 1fr)",
      templateRows: "repeat(1, 1fr)",
      gap: 5,
      children: [
        b.jsx(sn, {
          row: 0.5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          children: t,
        }),
        b.jsxs(sn, {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "clip",
          w: "100%",
          children: [
            b.jsx(tt, { fontSize: "xl", fontWeight: "bold", children: e }),
            b.jsx(tt, {
              fontSize: "sm",
              fontWeight: "normal",
              color: "#94c7fc",
              children: r,
            }),
            b.jsx(tt, {
              fontSize: "11px",
              fontStyle: "italic",
              fontWeight: "normal",
              color: "#94c7fc",
              children: n,
            }),
          ],
        }),
      ],
    }),
  });
}
const q9 = "./assets/yeabsira-V22R89eD.jpg";
function Z9() {
  const e = [
      {
        title: "Degree",
        icon: b.jsx(S9, { size: 30 }),
        subtitle: "Bsc. Software Engineering",
        footer: "Addis Ababa Science and Technology University",
      },
      {
        title: "Current GPA",
        icon: b.jsx(Q9, { size: 30 }),
        subtitle: "3.56",
        footer: "",
      },
      {
        title: "Domains",
        icon: b.jsx(b9, { size: 30 }),
        subtitle:
          "Web Development, Mobile Development, UI/UX Design, and more...",
        footer: "",
      },
    ],
    [t] = a9("(min-width: 1280px)");
  return b.jsxs(sn, {
    templateAreas: {
      xl: `
        "title title title title"
        "photo photo boxes boxes"
        "photo photo description description"
        `,
      lg: `
        "title title title title"
        "photo photo photo photo"
        "boxes boxes description description"
        `,
      base: `
        "title"
        "photo"
        "boxes"
        "description"
        `,
    },
    p: 5,
    gap: 5,
    children: [
      b.jsx(Ht, {
        area: "title",
        children: b.jsx(Pu, {
          textAlign: "center",
          fontSize: "2xl",
          fontWeight: "bold",
          color: ee.secondary,
          children: "About Me",
        }),
      }),
      b.jsx(Ht, {
        area: "photo",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        p: 5,
        children: b.jsx(Qt, {
          borderRadius: "30px",
          backgroundColor: ee.primary,
          transition: "all 1s ease-in-out",
          transform: t ? "rotate(0deg)" : "rotate(30deg)",
          _hover: {
            backgroundColor: t ? "none" : ee.secondary,
            transform: t ? "" : "rotate(0deg)",
            transition: "all 1s ease-in-out",
          },
          width: t ? "100%" : "75%",
          maxH: t ? "650px" : "600px",
          maxW: t ? "650px" : "600px",
          height: "100%px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: t ? "none" : ee.primary,
          children: b.jsx(Jp, {
            borderRadius: "30px",
            height: "80%",
            maxH: "650px",
            src: q9,
            alt: "Yeabsira Yonas",
            transform: "rotate(0deg)",
            transition: "all 1s ease-in-out",
            _hover: {
              transform: "scale(0.97) rotate(-30deg)",
              transition: "all 1.5s ease-in-out",
            },
          }),
        }),
      }),
      b.jsx(Ht, {
        area: "boxes",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        children: b.jsx(Gn, {
          justifyContent: "center",
          wrap: "wrap",
          children: e.map(({ title: r, icon: n, subtitle: o, footer: i }, a) =>
            b.jsx(
              Qt,
              {
                p: 1,
                w: 240,
                h: 190,
                children: b.jsx(X9, {
                  title: r,
                  icon: n,
                  subtitle: o,
                  footer: i,
                }),
              },
              a
            )
          ),
        }),
      }),
      b.jsx(Ht, {
        display: "flex",
        justifyContent: "center",
        area: "description",
        children: b.jsx(Qt, {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 10,
          children: b.jsx(tt, {
            color: ee.textColor,
            fontSize: "1.2rem",
            fontWeight: "normal",
            fontStyle: "italic",
            props: { spacing: 3, textAlign: "justify" },
            children:
              "I'm a Software Engineering Undergradute at Addis Ababa Science and Technology University. I'm an enthusiastic and driven Software Engineering student seeking a challenging internship opportunity to apply and expand my technical skills. With a strong academic foundation in software engineering and hands-on experience in various programming languages, I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.",
          }),
        }),
      }),
    ],
  });
}
function J9(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
          clipRule: "evenodd",
        },
        child: [],
      },
    ],
  })(e);
}
function Gg({ title: e, experiences: t }) {
  return b.jsx(Bb, {
    props: {
      maxWidth: "550px",
      minWidth: "300px",
      height: "390px",
      bgImage: `linear-gradient(45deg, ${ee.primary}, ${ee.secondary})`,
      _hover: {
        boxShadow: "0 0 0px 1px white",
        transition: "all 1.5s ease-in-out",
        bgImage: `linear-gradient(45deg, ${ee.secondary}, ${ee.primary})`,
        border: "1px solid #FFF",
        transform: "scale(1.1)",
      },
    },
    children: b.jsxs(Hn, {
      spacing: 7,
      align: "center",
      justify: "center",
      h: "100%",
      w: "100%",
      children: [
        b.jsx(tt, { fontWeight: "bold", fontSize: "2xl", children: e }),
        b.jsx(sn, {
          alignItems: "center",
          pl: 5,
          pr: 5,
          w: "100%",
          h: "85%",
          templateColumns: "repeat(2, 1fr)",
          gap: 6,
          flexGrow: 1,
          overflowY: "scroll",
          children: t.map(({ technology: r, experienceLevel: n }, o) =>
            b.jsx(
              Ht,
              {
                w: "100%",
                h: "10",
                children: b.jsxs(Gn, {
                  gap: 4,
                  children: [
                    b.jsx(J9, { color: "#FFF", size: 25 }),
                    b.jsxs(Hn, {
                      alignItems: "flex-start",
                      gap: 0,
                      columnGap: 0,
                      children: [
                        b.jsx(tt, {
                          fontWeight: "bold",
                          fontSize: "md",
                          children: r,
                        }),
                        b.jsx(tt, {
                          fontStyle: "italic",
                          fontSize: "sm",
                          children: n,
                        }),
                      ],
                    }),
                  ],
                }),
              },
              o
            )
          ),
        }),
      ],
    }),
  });
}
const eM = [
    { technology: "HTML", experienceLevel: "Experienced" },
    { technology: "CSS", experienceLevel: "Intermediate" },
    { technology: "JavaScript", experienceLevel: "Intermediate" },
    { technology: "React", experienceLevel: "Intermediate" },
    { technology: "React Native", experienceLevel: "Intermediate" },
    { technology: "TypeScript", experienceLevel: "Intermediate" },
    { technology: "Angular", experienceLevel: "Intermediate" },
    { technology: "JavaScript", experienceLevel: "Intermediate" },
    { technology: "Java", experienceLevel: "Intermediate" },
    { technology: "UI / UX Design", experienceLevel: "Intermediate" },
  ],
  tM = [
    { technology: "Node.js", experienceLevel: "Intermediate" },
    { technology: "Express", experienceLevel: "Intermediate" },
    { technology: "NestJS", experienceLevel: "Intermediate" },
    { technology: "MongoDB", experienceLevel: "Intermediate" },
    { technology: "SQL", experienceLevel: "Intermediate" },
    { technology: "RESTful APIs", experienceLevel: "Intermediate" },
  ];
function rM() {
  return b.jsxs(Hn, {
    spacing: 10,
    p: 6,
    align: "center",
    justify: "center",
    children: [
      b.jsx(tt, {
        fontWeight: "bold",
        fontSize: "2xl",
        color: ee.secondary,
        children: "My Experiences",
      }),
      b.jsxs(Gn, {
        justify: "center",
        w: "100%",
        spacing: 3,
        wrap: "wrap",
        children: [
          b.jsx(Gg, { title: "Front-End Dev", experiences: eM }),
          b.jsx(Gg, { title: "Back-End Dev", experiences: tM }),
        ],
      }),
    ],
  });
}
function nM(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z",
        },
        child: [],
      },
    ],
  })(e);
}
function oM(e) {
  return Dt({
    tag: "svg",
    attr: { viewBox: "0 0 256 256", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M128,56a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,104a31.8,31.8,0,0,0,25.61-12.8,8,8,0,1,1,12.79,9.61,48,48,0,1,1,0-57.63,8,8,0,1,1-12.79,9.61A32,32,0,1,0,128,160Zm0-136A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z",
        },
        child: [],
      },
    ],
  })(e);
}
function iM() {
  return b.jsxs(sn, {
    as: "footer",
    bgGradient: "linear(to-r, #4baef8, #2c2c6c)",
    color: ee.primary,
    gap: 4,
    h: "400px",
    p: "2rem",
    templateColumns: "repeat(1, 1fr)",
    w: "100%",
    children: [
      b.jsx(Ht, {
        alignItems: "flex-end",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        children: b.jsxs(Pu, {
          children: [
            b.jsx(Qt, { style: { color: ee.primary }, children: "👋👋👋" }),
            b.jsx("span", { style: { color: "#FFF" }, children: "Y" }),
            "eabsira ",
            b.jsx("span", { style: { color: "#FFF" }, children: "Y" }),
            "onas",
          ],
        }),
      }),
      b.jsx(Ht, {
        alignItems: "flex-end",
        display: "flex",
        justifyContent: "center",
        children: b.jsx(Qt, {
          p: 2,
          width: "50%",
          children: b.jsx(tt, {
            fontSize: "1rem",
            fontStyle: "cursive",
            color: "#FFF",
            children:
              "Have something to say ? Feel free to reach out to me on any of the platforms below.",
          }),
        }),
      }),
      b.jsx(Ht, {
        children: b.jsxs(Gn, {
          justify: "center",
          children: [
            b.jsx(nM, {
              size: 35,
              color: ee.primary,
              onClick: () => window.open("mailto:yabulala432@gmail.com"),
            }),
            b.jsx(g9, {
              onClick: () => window.open("https://t.me/fkureyohanns"),
              size: 35,
              color: ee.primary,
            }),
            b.jsx(h9, {
              onClick: () => window.open("https://github.com/yabulala432"),
              size: 35,
              color: ee.primary,
            }),
            b.jsx(v9, {
              onClick: () => window.open("https://twitter.com/yeabsirayo77059"),
              size: 35,
              color: ee.primary,
            }),
            b.jsx(m9, {
              onClick: () =>
                window.open("https://www.linkedin.com/in/yeabsira-yonas/"),
              size: 35,
              color: ee.primary,
            }),
          ],
        }),
      }),
      b.jsx(Ht, {
        children: b.jsxs(Gn, {
          justify: "center",
          children: [
            b.jsx(oM, { color: "#fff", size: 20 }),
            b.jsx(tt, {
              fontSize: "1rem",
              fontStyle: "cursive",
              color: "#FFF",
              children: "Made with ❤️ by Yeabsira Yonas",
            }),
          ],
        }),
      }),
    ],
  });
}
function aM() {
  return b.jsx(sn, {
    templateAreas: "repeat(1, 1fr)",
    alignItems: "center",
    justifyContent: "center",
    h: "200px",
    children: b.jsxs(Ht, {
      children: [
        b.jsx(tt, {
          fontStyle: "italic",
          fontSize: "sm",
          fontWeight: "bold",
          children: "Hello I'm",
        }),
        b.jsxs(tt, {
          fontSize: "5xl",
          props: { padding: "0", margin: "0" },
          children: [
            b.jsx("span", { style: { color: ee.textColor }, children: "Y" }),
            "eabsira",
            " ",
            b.jsx("span", { style: { color: ee.textColor }, children: "Y" }),
            "onas",
          ],
        }),
        b.jsx(tt, {
          fontSize: "sm",
          color: "gray",
          fontStyle: "italic",
          fontWeight: "normal",
          children: "Software Engineering UnderGraduate",
        }),
      ],
    }),
  });
}
function sM() {
  return b.jsxs("div", {
    className: "background",
    children: [
      b.jsx(aM, {}),
      b.jsx(Z9, {}),
      b.jsx(rM, {}),
      b.jsx(Y9, {}),
      b.jsx(iM, {}),
    ],
  });
}
const lM = document.getElementById("root");
Lb(lM).render(
  b.jsx(C.StrictMode, { children: b.jsx(UR, { children: b.jsx(sM, {}) }) })
);
