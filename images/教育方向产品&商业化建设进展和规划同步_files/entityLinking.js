var Zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ne(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var kS = Object.prototype, Jw = function(e) {
  var r = e && e.constructor;
  return e === (typeof r == "function" && r.prototype || kS);
}, xS = function(e, r) {
  return function(i) {
    return e(r(i));
  };
}, ES = xS(Object.keys, Object), SS = Jw, CS = ES, TS = Object.prototype.hasOwnProperty, AS = function(e) {
  if (!SS(e))
    return CS(e);
  var r = [];
  for (var i in Object(e))
    TS.call(e, i) && i != "constructor" && r.push(i);
  return r;
}, $w = typeof Zr == "object" && Zr && Zr.Object === Object && Zr, NS = $w, PS = typeof self == "object" && self && self.Object === Object && self, kr = NS || PS || Function("return this")(), kd = kr.Symbol, E0 = kd, e2 = Object.prototype, OS = e2.hasOwnProperty, LS = e2.toString, ca = E0 ? E0.toStringTag : void 0, MS = function(e) {
  var r = OS.call(e, ca), i = e[ca];
  try {
    e[ca] = void 0;
    var o = !0;
  } catch {
  }
  var a = LS.call(e);
  return o && (r ? e[ca] = i : delete e[ca]), a;
}, IS = Object.prototype.toString, _S = MS, RS = function(e) {
  return IS.call(e);
}, S0 = kd ? kd.toStringTag : void 0, Su = function(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : S0 && S0 in Object(e) ? _S(e) : RS(e);
}, t2 = function(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}, DS = Su, jS = t2, n2 = function(e) {
  if (!jS(e))
    return !1;
  var r = DS(e);
  return r == "[object Function]" || r == "[object GeneratorFunction]" || r == "[object AsyncFunction]" || r == "[object Proxy]";
}, Xf = kr["__core-js_shared__"], C0 = function() {
  var e = /[^.]+$/.exec(Xf && Xf.keys && Xf.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), HS = function(e) {
  return !!C0 && C0 in e;
}, FS = Function.prototype.toString, r2 = function(e) {
  if (e != null) {
    try {
      return FS.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}, BS = n2, zS = HS, US = t2, GS = r2, VS = /^\[object .+?Constructor\]$/, WS = Function.prototype, XS = Object.prototype, QS = WS.toString, YS = XS.hasOwnProperty, KS = RegExp("^" + QS.call(YS).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ZS = function(e) {
  return !(!US(e) || zS(e)) && (BS(e) ? KS : VS).test(GS(e));
}, qS = function(e, r) {
  return e == null ? void 0 : e[r];
}, Va = function(e, r) {
  var i = qS(e, r);
  return ZS(i) ? i : void 0;
}, xd = Va(kr, "DataView"), Ed = Va(kr, "Map"), Sd = Va(kr, "Promise"), Cd = Va(kr, "Set"), Td = Va(kr, "WeakMap"), o2 = Su, gi = r2, T0 = "[object Map]", A0 = "[object Promise]", N0 = "[object Set]", P0 = "[object WeakMap]", O0 = "[object DataView]", JS = gi(xd), $S = gi(Ed), eC = gi(Sd), tC = gi(Cd), nC = gi(Td), Xr = o2;
(xd && Xr(new xd(new ArrayBuffer(1))) != O0 || Ed && Xr(new Ed()) != T0 || Sd && Xr(Sd.resolve()) != A0 || Cd && Xr(new Cd()) != N0 || Td && Xr(new Td()) != P0) && (Xr = function(e) {
  var r = o2(e), i = r == "[object Object]" ? e.constructor : void 0, o = i ? gi(i) : "";
  if (o)
    switch (o) {
      case JS:
        return O0;
      case $S:
        return T0;
      case eC:
        return A0;
      case tC:
        return N0;
      case nC:
        return P0;
    }
  return r;
});
var rC = Xr, Dh = function(e) {
  return e != null && typeof e == "object";
}, oC = Su, iC = Dh, L0 = function(e) {
  return iC(e) && oC(e) == "[object Arguments]";
}, aC = Dh, i2 = Object.prototype, lC = i2.hasOwnProperty, sC = i2.propertyIsEnumerable, uC = L0(function() {
  return arguments;
}()) ? L0 : function(e) {
  return aC(e) && lC.call(e, "callee") && !sC.call(e, "callee");
}, cC = Array.isArray, a2 = function(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
}, fC = n2, pC = a2, dC = function(e) {
  return e != null && pC(e.length) && !fC(e);
}, Ad = { exports: {} }, hC = function() {
  return !1;
};
(function(e, r) {
  var i = kr, o = hC, a = r && !r.nodeType && r, u = a && e && !e.nodeType && e, c = u && u.exports === a ? i.Buffer : void 0, f = (c ? c.isBuffer : void 0) || o;
  e.exports = f;
})(Ad, Ad.exports);
var mC = Su, gC = a2, vC = Dh, je = {};
je["[object Float32Array]"] = je["[object Float64Array]"] = je["[object Int8Array]"] = je["[object Int16Array]"] = je["[object Int32Array]"] = je["[object Uint8Array]"] = je["[object Uint8ClampedArray]"] = je["[object Uint16Array]"] = je["[object Uint32Array]"] = !0, je["[object Arguments]"] = je["[object Array]"] = je["[object ArrayBuffer]"] = je["[object Boolean]"] = je["[object DataView]"] = je["[object Date]"] = je["[object Error]"] = je["[object Function]"] = je["[object Map]"] = je["[object Number]"] = je["[object Object]"] = je["[object RegExp]"] = je["[object Set]"] = je["[object String]"] = je["[object WeakMap]"] = !1;
var yC = function(e) {
  return vC(e) && gC(e.length) && !!je[mC(e)];
}, bC = function(e) {
  return function(r) {
    return e(r);
  };
}, Nd = { exports: {} };
(function(e, r) {
  var i = $w, o = r && !r.nodeType && r, a = o && e && !e.nodeType && e, u = a && a.exports === o && i.process, c = function() {
    try {
      var f = a && a.require && a.require("util").types;
      return f || u && u.binding && u.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(Nd, Nd.exports);
var wC = yC, kC = bC, M0 = Nd.exports, I0 = M0 && M0.isTypedArray, xC = I0 ? kC(I0) : wC, EC = AS, SC = rC, CC = uC, TC = cC, AC = dC, NC = Ad.exports, PC = Jw, OC = xC, LC = Object.prototype.hasOwnProperty, MC = function(e) {
  if (e == null)
    return !0;
  if (AC(e) && (TC(e) || typeof e == "string" || typeof e.splice == "function" || NC(e) || OC(e) || CC(e)))
    return !e.length;
  var r = SC(e);
  if (r == "[object Map]" || r == "[object Set]")
    return !e.size;
  if (PC(e))
    return !EC(e).length;
  for (var i in e)
    if (LC.call(e, i))
      return !1;
  return !0;
};
const IC = "p, h1, h2, h3, h4, h5, h6", _C = "span", RC = new RegExp("\uFEFF", "g");
function DC(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
}
const jC = { *pickup(e, r = {}) {
  var v;
  const { root: i = document.body, blockSelectors: o = IC, ignoreBlockSelectors: a = "", textSelectors: u = _C, ignoreTextSelectors: c = "" } = r;
  if (!i)
    return;
  const f = {};
  e.forEach((y) => {
    const b = y.mention.toLowerCase();
    if (!f[b])
      return void (f[b] = { [y.offset]: y, polysemeList: [] });
    const { baikeOriginalUrl: E, polyDesc: A, isPolyseme: S } = y;
    S && (f[b].polysemeList = f[b].polysemeList.concat({ baikeOriginalUrl: E, polyDesc: A }));
  });
  const h = {}, m = i.querySelectorAll(o);
  for (const y of m) {
    if (a && y.closest(a) || MC(f))
      return;
    const b = y.querySelectorAll(u), E = [], A = Array.from(b).reduce((H, D) => {
      let L = Array.from(D.querySelectorAll('[data-slate-string="true"]')).reduce((V, Q) => V + Q.innerText, "");
      return L = L.replace(RC, "*"), c && D.closest(c) && (L = Array(L.length).fill("*").join("")), L = H + L, E.push([[H.length, L.length - 1], D]), L;
    }, "");
    let S = Object.keys(f);
    for (let H = 0; H < S.length; H++) {
      const D = DC(S[H]);
      let L = null;
      for (; L = D.exec(A); ) {
        const V = L[0].toLowerCase(), Q = L.index, z = Q + V.length - 1;
        h[V] ? h[V]++ : h[V] = 1;
        const te = (v = f[V]) == null ? void 0 : v[h[V]];
        if (te) {
          const J = { "data-entity-linking": !0, "data-entity-id": te.entityId, "data-entity-name": te.entityName, "data-entity-mention": te.mention, "data-entity-polysemeList": JSON.stringify(f[V].polysemeList) };
          for (const he of E) {
            const [[le, me], ye] = he, be = { target: ye, start: le, end: me, attributes: J };
            Q >= le && z <= me ? (be.start = Q - le, be.end = z - le + 1, yield [be, te]) : Q >= le && Q <= me && z > me ? (be.start = Q - le, be.end = me - le + 1, yield [be, te]) : Q < le && z >= le && me >= z ? (be.start = 0, be.end = z - le + 1, yield [be, te]) : Q < le && z > me && (be.start = 0, be.end = me - le + 1, yield [be, te]);
          }
          delete f[V], S = Object.keys(f), H--;
          break;
        }
      }
    }
  }
  return [];
} };
var _0, G = { exports: {} }, ge = {};
function HC() {
  if (_0)
    return ge;
  _0 = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.iterator, b = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, E = Object.assign, A = {};
  function S(M, N, X) {
    this.props = M, this.context = N, this.refs = A, this.updater = X || b;
  }
  function H() {
  }
  function D(M, N, X) {
    this.props = M, this.context = N, this.refs = A, this.updater = X || b;
  }
  S.prototype.isReactComponent = {}, S.prototype.setState = function(M, N) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, M, N, "setState");
  }, S.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  }, H.prototype = S.prototype;
  var L = D.prototype = new H();
  L.constructor = D, E(L, S.prototype), L.isPureReactComponent = !0;
  var V = Array.isArray, Q = Object.prototype.hasOwnProperty, z = { current: null }, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(M, N, X) {
    var Y, re = {}, pe = null, Oe = null;
    if (N != null)
      for (Y in N.ref !== void 0 && (Oe = N.ref), N.key !== void 0 && (pe = "" + N.key), N)
        Q.call(N, Y) && !te.hasOwnProperty(Y) && (re[Y] = N[Y]);
    var Ce = arguments.length - 2;
    if (Ce === 1)
      re.children = X;
    else if (1 < Ce) {
      for (var de = Array(Ce), ve = 0; ve < Ce; ve++)
        de[ve] = arguments[ve + 2];
      re.children = de;
    }
    if (M && M.defaultProps)
      for (Y in Ce = M.defaultProps)
        re[Y] === void 0 && (re[Y] = Ce[Y]);
    return { $$typeof: e, type: M, key: pe, ref: Oe, props: re, _owner: z.current };
  }
  function he(M) {
    return typeof M == "object" && M !== null && M.$$typeof === e;
  }
  var le = /\/+/g;
  function me(M, N) {
    return typeof M == "object" && M !== null && M.key != null ? function(X) {
      var Y = { "=": "=0", ":": "=2" };
      return "$" + X.replace(/[=:]/g, function(re) {
        return Y[re];
      });
    }("" + M.key) : N.toString(36);
  }
  function ye(M, N, X, Y, re) {
    var pe = typeof M;
    pe !== "undefined" && pe !== "boolean" || (M = null);
    var Oe = !1;
    if (M === null)
      Oe = !0;
    else
      switch (pe) {
        case "string":
        case "number":
          Oe = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case e:
            case r:
              Oe = !0;
          }
      }
    if (Oe)
      return re = re(Oe = M), M = Y === "" ? "." + me(Oe, 0) : Y, V(re) ? (X = "", M != null && (X = M.replace(le, "$&/") + "/"), ye(re, N, X, "", function(ve) {
        return ve;
      })) : re != null && (he(re) && (re = function(ve, Dt) {
        return { $$typeof: e, type: ve.type, key: Dt, ref: ve.ref, props: ve.props, _owner: ve._owner };
      }(re, X + (!re.key || Oe && Oe.key === re.key ? "" : ("" + re.key).replace(le, "$&/") + "/") + M)), N.push(re)), 1;
    if (Oe = 0, Y = Y === "" ? "." : Y + ":", V(M))
      for (var Ce = 0; Ce < M.length; Ce++) {
        var de = Y + me(pe = M[Ce], Ce);
        Oe += ye(pe, N, X, de, re);
      }
    else if (de = function(ve) {
      return ve === null || typeof ve != "object" ? null : typeof (ve = y && ve[y] || ve["@@iterator"]) == "function" ? ve : null;
    }(M), typeof de == "function")
      for (M = de.call(M), Ce = 0; !(pe = M.next()).done; )
        Oe += ye(pe = pe.value, N, X, de = Y + me(pe, Ce++), re);
    else if (pe === "object")
      throw N = String(M), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
    return Oe;
  }
  function be(M, N, X) {
    if (M == null)
      return M;
    var Y = [], re = 0;
    return ye(M, Y, "", "", function(pe) {
      return N.call(X, pe, re++);
    }), Y;
  }
  function Me(M) {
    if (M._status === -1) {
      var N = M._result;
      (N = N()).then(function(X) {
        M._status !== 0 && M._status !== -1 || (M._status = 1, M._result = X);
      }, function(X) {
        M._status !== 0 && M._status !== -1 || (M._status = 2, M._result = X);
      }), M._status === -1 && (M._status = 0, M._result = N);
    }
    if (M._status === 1)
      return M._result.default;
    throw M._result;
  }
  var we = { current: null }, ot = { transition: null }, Ue = { ReactCurrentDispatcher: we, ReactCurrentBatchConfig: ot, ReactCurrentOwner: z };
  return ge.Children = { map: be, forEach: function(M, N, X) {
    be(M, function() {
      N.apply(this, arguments);
    }, X);
  }, count: function(M) {
    var N = 0;
    return be(M, function() {
      N++;
    }), N;
  }, toArray: function(M) {
    return be(M, function(N) {
      return N;
    }) || [];
  }, only: function(M) {
    if (!he(M))
      throw Error("React.Children.only expected to receive a single React element child.");
    return M;
  } }, ge.Component = S, ge.Fragment = i, ge.Profiler = a, ge.PureComponent = D, ge.StrictMode = o, ge.Suspense = h, ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ue, ge.cloneElement = function(M, N, X) {
    if (M == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + M + ".");
    var Y = E({}, M.props), re = M.key, pe = M.ref, Oe = M._owner;
    if (N != null) {
      if (N.ref !== void 0 && (pe = N.ref, Oe = z.current), N.key !== void 0 && (re = "" + N.key), M.type && M.type.defaultProps)
        var Ce = M.type.defaultProps;
      for (de in N)
        Q.call(N, de) && !te.hasOwnProperty(de) && (Y[de] = N[de] === void 0 && Ce !== void 0 ? Ce[de] : N[de]);
    }
    var de = arguments.length - 2;
    if (de === 1)
      Y.children = X;
    else if (1 < de) {
      Ce = Array(de);
      for (var ve = 0; ve < de; ve++)
        Ce[ve] = arguments[ve + 2];
      Y.children = Ce;
    }
    return { $$typeof: e, type: M.type, key: re, ref: pe, props: Y, _owner: Oe };
  }, ge.createContext = function(M) {
    return (M = { $$typeof: c, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: u, _context: M }, M.Consumer = M;
  }, ge.createElement = J, ge.createFactory = function(M) {
    var N = J.bind(null, M);
    return N.type = M, N;
  }, ge.createRef = function() {
    return { current: null };
  }, ge.forwardRef = function(M) {
    return { $$typeof: f, render: M };
  }, ge.isValidElement = he, ge.lazy = function(M) {
    return { $$typeof: v, _payload: { _status: -1, _result: M }, _init: Me };
  }, ge.memo = function(M, N) {
    return { $$typeof: m, type: M, compare: N === void 0 ? null : N };
  }, ge.startTransition = function(M) {
    var N = ot.transition;
    ot.transition = {};
    try {
      M();
    } finally {
      ot.transition = N;
    }
  }, ge.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, ge.useCallback = function(M, N) {
    return we.current.useCallback(M, N);
  }, ge.useContext = function(M) {
    return we.current.useContext(M);
  }, ge.useDebugValue = function() {
  }, ge.useDeferredValue = function(M) {
    return we.current.useDeferredValue(M);
  }, ge.useEffect = function(M, N) {
    return we.current.useEffect(M, N);
  }, ge.useId = function() {
    return we.current.useId();
  }, ge.useImperativeHandle = function(M, N, X) {
    return we.current.useImperativeHandle(M, N, X);
  }, ge.useInsertionEffect = function(M, N) {
    return we.current.useInsertionEffect(M, N);
  }, ge.useLayoutEffect = function(M, N) {
    return we.current.useLayoutEffect(M, N);
  }, ge.useMemo = function(M, N) {
    return we.current.useMemo(M, N);
  }, ge.useReducer = function(M, N, X) {
    return we.current.useReducer(M, N, X);
  }, ge.useRef = function(M) {
    return we.current.useRef(M);
  }, ge.useState = function(M) {
    return we.current.useState(M);
  }, ge.useSyncExternalStore = function(M, N, X) {
    return we.current.useSyncExternalStore(M, N, X);
  }, ge.useTransition = function() {
    return we.current.useTransition();
  }, ge.version = "18.2.0", ge;
}
G.exports = HC();
var R0, D0, j0, La = { exports: {} }, Pt = {}, H0 = { exports: {} }, F0 = {};
function FC() {
  return D0 || (D0 = 1, H0.exports = (R0 || (R0 = 1, function(e) {
    function r(N, X) {
      var Y = N.length;
      N.push(X);
      e:
        for (; 0 < Y; ) {
          var re = Y - 1 >>> 1, pe = N[re];
          if (!(0 < a(pe, X)))
            break e;
          N[re] = X, N[Y] = pe, Y = re;
        }
    }
    function i(N) {
      return N.length === 0 ? null : N[0];
    }
    function o(N) {
      if (N.length === 0)
        return null;
      var X = N[0], Y = N.pop();
      if (Y !== X) {
        N[0] = Y;
        e:
          for (var re = 0, pe = N.length, Oe = pe >>> 1; re < Oe; ) {
            var Ce = 2 * (re + 1) - 1, de = N[Ce], ve = Ce + 1, Dt = N[ve];
            if (0 > a(de, Y))
              ve < pe && 0 > a(Dt, de) ? (N[re] = Dt, N[ve] = Y, re = ve) : (N[re] = de, N[Ce] = Y, re = Ce);
            else {
              if (!(ve < pe && 0 > a(Dt, Y)))
                break e;
              N[re] = Dt, N[ve] = Y, re = ve;
            }
          }
      }
      return X;
    }
    function a(N, X) {
      var Y = N.sortIndex - X.sortIndex;
      return Y !== 0 ? Y : N.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      e.unstable_now = function() {
        return u.now();
      };
    } else {
      var c = Date, f = c.now();
      e.unstable_now = function() {
        return c.now() - f;
      };
    }
    var h = [], m = [], v = 1, y = null, b = 3, E = !1, A = !1, S = !1, H = typeof setTimeout == "function" ? setTimeout : null, D = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function V(N) {
      for (var X = i(m); X !== null; ) {
        if (X.callback === null)
          o(m);
        else {
          if (!(X.startTime <= N))
            break;
          o(m), X.sortIndex = X.expirationTime, r(h, X);
        }
        X = i(m);
      }
    }
    function Q(N) {
      if (S = !1, V(N), !A)
        if (i(h) !== null)
          A = !0, Ue(z);
        else {
          var X = i(m);
          X !== null && M(Q, X.startTime - N);
        }
    }
    function z(N, X) {
      A = !1, S && (S = !1, D(le), le = -1), E = !0;
      var Y = b;
      try {
        for (V(X), y = i(h); y !== null && (!(y.expirationTime > X) || N && !be()); ) {
          var re = y.callback;
          if (typeof re == "function") {
            y.callback = null, b = y.priorityLevel;
            var pe = re(y.expirationTime <= X);
            X = e.unstable_now(), typeof pe == "function" ? y.callback = pe : y === i(h) && o(h), V(X);
          } else
            o(h);
          y = i(h);
        }
        if (y !== null)
          var Oe = !0;
        else {
          var Ce = i(m);
          Ce !== null && M(Q, Ce.startTime - X), Oe = !1;
        }
        return Oe;
      } finally {
        y = null, b = Y, E = !1;
      }
    }
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var te, J = !1, he = null, le = -1, me = 5, ye = -1;
    function be() {
      return !(e.unstable_now() - ye < me);
    }
    function Me() {
      if (he !== null) {
        var N = e.unstable_now();
        ye = N;
        var X = !0;
        try {
          X = he(!0, N);
        } finally {
          X ? te() : (J = !1, he = null);
        }
      } else
        J = !1;
    }
    if (typeof L == "function")
      te = function() {
        L(Me);
      };
    else if (typeof MessageChannel < "u") {
      var we = new MessageChannel(), ot = we.port2;
      we.port1.onmessage = Me, te = function() {
        ot.postMessage(null);
      };
    } else
      te = function() {
        H(Me, 0);
      };
    function Ue(N) {
      he = N, J || (J = !0, te());
    }
    function M(N, X) {
      le = H(function() {
        N(e.unstable_now());
      }, X);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, e.unstable_continueExecution = function() {
      A || E || (A = !0, Ue(z));
    }, e.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : me = 0 < N ? Math.floor(1e3 / N) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, e.unstable_getFirstCallbackNode = function() {
      return i(h);
    }, e.unstable_next = function(N) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = b;
      }
      var Y = b;
      b = X;
      try {
        return N();
      } finally {
        b = Y;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(N, X) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var Y = b;
      b = N;
      try {
        return X();
      } finally {
        b = Y;
      }
    }, e.unstable_scheduleCallback = function(N, X, Y) {
      var re = e.unstable_now();
      switch (Y = typeof Y == "object" && Y !== null && typeof (Y = Y.delay) == "number" && 0 < Y ? re + Y : re, N) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return N = { id: v++, callback: X, priorityLevel: N, startTime: Y, expirationTime: pe = Y + pe, sortIndex: -1 }, Y > re ? (N.sortIndex = Y, r(m, N), i(h) === null && N === i(m) && (S ? (D(le), le = -1) : S = !0, M(Q, Y - re))) : (N.sortIndex = pe, r(h, N), A || E || (A = !0, Ue(z))), N;
    }, e.unstable_shouldYield = be, e.unstable_wrapCallback = function(N) {
      var X = b;
      return function() {
        var Y = b;
        b = X;
        try {
          return N.apply(this, arguments);
        } finally {
          b = Y;
        }
      };
    };
  }(F0)), F0)), H0.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function BC() {
  if (j0)
    return Pt;
  j0 = 1;
  var e = G.exports, r = FC();
  function i(t) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, l = 1; l < arguments.length; l++)
      n += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), a = {};
  function u(t, n) {
    c(t, n), c(t + "Capture", n);
  }
  function c(t, n) {
    for (a[t] = n, t = 0; t < n.length; t++)
      o.add(n[t]);
  }
  var f = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), h = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, y = {};
  function b(t, n, l, s, p, d, g) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = s, this.attributeNamespace = p, this.mustUseProperty = l, this.propertyName = t, this.type = n, this.sanitizeURL = d, this.removeEmptyString = g;
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    E[t] = new b(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var n = t[0];
    E[n] = new b(n, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    E[t] = new b(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    E[t] = new b(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    E[t] = new b(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    E[t] = new b(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    E[t] = new b(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    E[t] = new b(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    E[t] = new b(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var A = /[\-:]([a-z])/g;
  function S(t) {
    return t[1].toUpperCase();
  }
  function H(t, n, l, s) {
    var p = E.hasOwnProperty(n) ? E[n] : null;
    (p !== null ? p.type !== 0 : s || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (function(d, g, w, x) {
      if (g == null || function(T, P, j, I) {
        if (j !== null && j.type === 0)
          return !1;
        switch (typeof P) {
          case "function":
          case "symbol":
            return !0;
          case "boolean":
            return !I && (j !== null ? !j.acceptsBooleans : (T = T.toLowerCase().slice(0, 5)) !== "data-" && T !== "aria-");
          default:
            return !1;
        }
      }(d, g, w, x))
        return !0;
      if (x)
        return !1;
      if (w !== null)
        switch (w.type) {
          case 3:
            return !g;
          case 4:
            return g === !1;
          case 5:
            return isNaN(g);
          case 6:
            return isNaN(g) || 1 > g;
        }
      return !1;
    }(n, l, p, s) && (l = null), s || p === null ? function(d) {
      return !!h.call(y, d) || !h.call(v, d) && (m.test(d) ? y[d] = !0 : (v[d] = !0, !1));
    }(n) && (l === null ? t.removeAttribute(n) : t.setAttribute(n, "" + l)) : p.mustUseProperty ? t[p.propertyName] = l === null ? p.type !== 3 && "" : l : (n = p.attributeName, s = p.attributeNamespace, l === null ? t.removeAttribute(n) : (l = (p = p.type) === 3 || p === 4 && l === !0 ? "" : "" + l, s ? t.setAttributeNS(s, n, l) : t.setAttribute(n, l))));
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var n = t.replace(A, S);
    E[n] = new b(n, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var n = t.replace(A, S);
    E[n] = new b(n, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var n = t.replace(A, S);
    E[n] = new b(n, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    E[t] = new b(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    E[t] = new b(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, L = Symbol.for("react.element"), V = Symbol.for("react.portal"), Q = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), J = Symbol.for("react.provider"), he = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), ye = Symbol.for("react.suspense_list"), be = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), ot = Symbol.iterator;
  function Ue(t) {
    return t === null || typeof t != "object" ? null : typeof (t = ot && t[ot] || t["@@iterator"]) == "function" ? t : null;
  }
  var M, N = Object.assign;
  function X(t) {
    if (M === void 0)
      try {
        throw Error();
      } catch (l) {
        var n = l.stack.trim().match(/\n( *(at )?)/);
        M = n && n[1] || "";
      }
    return `
` + M + t;
  }
  var Y = !1;
  function re(t, n) {
    if (!t || Y)
      return "";
    Y = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (n = function() {
          throw Error();
        }, Object.defineProperty(n.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (T) {
            var s = T;
          }
          Reflect.construct(t, [], n);
        } else {
          try {
            n.call();
          } catch (T) {
            s = T;
          }
          t.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (T) {
          s = T;
        }
        t();
      }
    } catch (T) {
      if (T && s && typeof T.stack == "string") {
        for (var p = T.stack.split(`
`), d = s.stack.split(`
`), g = p.length - 1, w = d.length - 1; 1 <= g && 0 <= w && p[g] !== d[w]; )
          w--;
        for (; 1 <= g && 0 <= w; g--, w--)
          if (p[g] !== d[w]) {
            if (g !== 1 || w !== 1)
              do
                if (g--, 0 > --w || p[g] !== d[w]) {
                  var x = `
` + p[g].replace(" at new ", " at ");
                  return t.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", t.displayName)), x;
                }
              while (1 <= g && 0 <= w);
            break;
          }
      }
    } finally {
      Y = !1, Error.prepareStackTrace = l;
    }
    return (t = t ? t.displayName || t.name : "") ? X(t) : "";
  }
  function pe(t) {
    switch (t.tag) {
      case 5:
        return X(t.type);
      case 16:
        return X("Lazy");
      case 13:
        return X("Suspense");
      case 19:
        return X("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = re(t.type, !1);
      case 11:
        return t = re(t.type.render, !1);
      case 1:
        return t = re(t.type, !0);
      default:
        return "";
    }
  }
  function Oe(t) {
    if (t == null)
      return null;
    if (typeof t == "function")
      return t.displayName || t.name || null;
    if (typeof t == "string")
      return t;
    switch (t) {
      case Q:
        return "Fragment";
      case V:
        return "Portal";
      case te:
        return "Profiler";
      case z:
        return "StrictMode";
      case me:
        return "Suspense";
      case ye:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case he:
          return (t.displayName || "Context") + ".Consumer";
        case J:
          return (t._context.displayName || "Context") + ".Provider";
        case le:
          var n = t.render;
          return (t = t.displayName) || (t = (t = n.displayName || n.name || "") !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case be:
          return (n = t.displayName || null) !== null ? n : Oe(t.type) || "Memo";
        case Me:
          n = t._payload, t = t._init;
          try {
            return Oe(t(n));
          } catch {
          }
      }
    return null;
  }
  function Ce(t) {
    var n = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = (t = n.render).displayName || t.name || "", n.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Oe(n);
      case 8:
        return n === z ? "StrictMode" : "Mode";
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
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
    }
    return null;
  }
  function de(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ve(t) {
    var n = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Dt(t) {
    t._valueTracker || (t._valueTracker = function(n) {
      var l = ve(n) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(n.constructor.prototype, l), p = "" + n[l];
      if (!n.hasOwnProperty(l) && s !== void 0 && typeof s.get == "function" && typeof s.set == "function") {
        var d = s.get, g = s.set;
        return Object.defineProperty(n, l, { configurable: !0, get: function() {
          return d.call(this);
        }, set: function(w) {
          p = "" + w, g.call(this, w);
        } }), Object.defineProperty(n, l, { enumerable: s.enumerable }), { getValue: function() {
          return p;
        }, setValue: function(w) {
          p = "" + w;
        }, stopTracking: function() {
          n._valueTracker = null, delete n[l];
        } };
      }
    }(t));
  }
  function Or(t) {
    if (!t)
      return !1;
    var n = t._valueTracker;
    if (!n)
      return !0;
    var l = n.getValue(), s = "";
    return t && (s = ve(t) ? t.checked ? "true" : "false" : t.value), (t = s) !== l && (n.setValue(t), !0);
  }
  function $(t) {
    if ((t = t || (typeof document < "u" ? document : void 0)) === void 0)
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function yt(t, n) {
    var l = n.checked;
    return N({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l != null ? l : t._wrapperState.initialChecked });
  }
  function bt(t, n) {
    var l = n.defaultValue == null ? "" : n.defaultValue, s = n.checked != null ? n.checked : n.defaultChecked;
    l = de(n.value != null ? n.value : l), t._wrapperState = { initialChecked: s, initialValue: l, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function yl(t, n) {
    (n = n.checked) != null && H(t, "checked", n, !1);
  }
  function Yu(t, n) {
    yl(t, n);
    var l = de(n.value), s = n.type;
    if (l != null)
      s === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + l) : t.value !== "" + l && (t.value = "" + l);
    else if (s === "submit" || s === "reset")
      return void t.removeAttribute("value");
    n.hasOwnProperty("value") ? Ku(t, n.type, l) : n.hasOwnProperty("defaultValue") && Ku(t, n.type, de(n.defaultValue)), n.checked == null && n.defaultChecked != null && (t.defaultChecked = !!n.defaultChecked);
  }
  function Am(t, n, l) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var s = n.type;
      if (!(s !== "submit" && s !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + t._wrapperState.initialValue, l || n === t.value || (t.value = n), t.defaultValue = n;
    }
    (l = t.name) !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, l !== "" && (t.name = l);
  }
  function Ku(t, n, l) {
    n === "number" && $(t.ownerDocument) === t || (l == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + l && (t.defaultValue = "" + l));
  }
  var Ti = Array.isArray;
  function uo(t, n, l, s) {
    if (t = t.options, n) {
      n = {};
      for (var p = 0; p < l.length; p++)
        n["$" + l[p]] = !0;
      for (l = 0; l < t.length; l++)
        p = n.hasOwnProperty("$" + t[l].value), t[l].selected !== p && (t[l].selected = p), p && s && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + de(l), n = null, p = 0; p < t.length; p++) {
        if (t[p].value === l)
          return t[p].selected = !0, void (s && (t[p].defaultSelected = !0));
        n !== null || t[p].disabled || (n = t[p]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Zu(t, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(i(91));
    return N({}, n, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function Nm(t, n) {
    var l = n.value;
    if (l == null) {
      if (l = n.children, n = n.defaultValue, l != null) {
        if (n != null)
          throw Error(i(92));
        if (Ti(l)) {
          if (1 < l.length)
            throw Error(i(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), l = n;
    }
    t._wrapperState = { initialValue: de(l) };
  }
  function Pm(t, n) {
    var l = de(n.value), s = de(n.defaultValue);
    l != null && ((l = "" + l) !== t.value && (t.value = l), n.defaultValue == null && t.defaultValue !== l && (t.defaultValue = l)), s != null && (t.defaultValue = "" + s);
  }
  function Om(t) {
    var n = t.textContent;
    n === t._wrapperState.initialValue && n !== "" && n !== null && (t.value = n);
  }
  function Lm(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function qu(t, n) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? Lm(n) : t === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var Ju, $u, Mm = ($u = function(t, n) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = n;
    else {
      for ((Ju = Ju || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Ju.firstChild; t.firstChild; )
        t.removeChild(t.firstChild);
      for (; n.firstChild; )
        t.appendChild(n.firstChild);
    }
  }, typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, l, s) {
    MSApp.execUnsafeLocalFunction(function() {
      return $u(t, n);
    });
  } : $u);
  function Ai(t, n) {
    if (n) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3)
        return void (l.nodeValue = n);
    }
    t.textContent = n;
  }
  var Ni = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, $E = ["Webkit", "ms", "Moz", "O"];
  function Im(t, n, l) {
    return n == null || typeof n == "boolean" || n === "" ? "" : l || typeof n != "number" || n === 0 || Ni.hasOwnProperty(t) && Ni[t] ? ("" + n).trim() : n + "px";
  }
  function _m(t, n) {
    for (var l in t = t.style, n)
      if (n.hasOwnProperty(l)) {
        var s = l.indexOf("--") === 0, p = Im(l, n[l], s);
        l === "float" && (l = "cssFloat"), s ? t.setProperty(l, p) : t[l] = p;
      }
  }
  Object.keys(Ni).forEach(function(t) {
    $E.forEach(function(n) {
      n = n + t.charAt(0).toUpperCase() + t.substring(1), Ni[n] = Ni[t];
    });
  });
  var e3 = N({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ec(t, n) {
    if (n) {
      if (e3[t] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(i(137, t));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(i(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(i(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(i(62));
    }
  }
  function tc(t, n) {
    if (t.indexOf("-") === -1)
      return typeof n.is == "string";
    switch (t) {
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
  var nc = null;
  function rc(t) {
    return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var oc = null, co = null, fo = null;
  function Rm(t) {
    if (t = Ki(t)) {
      if (typeof oc != "function")
        throw Error(i(280));
      var n = t.stateNode;
      n && (n = Fl(n), oc(t.stateNode, t.type, n));
    }
  }
  function Dm(t) {
    co ? fo ? fo.push(t) : fo = [t] : co = t;
  }
  function jm() {
    if (co) {
      var t = co, n = fo;
      if (fo = co = null, Rm(t), n)
        for (t = 0; t < n.length; t++)
          Rm(n[t]);
    }
  }
  function Hm(t, n) {
    return t(n);
  }
  function Fm() {
  }
  var ic = !1;
  function Bm(t, n, l) {
    if (ic)
      return t(n, l);
    ic = !0;
    try {
      return Hm(t, n, l);
    } finally {
      ic = !1, (co !== null || fo !== null) && (Fm(), jm());
    }
  }
  function Pi(t, n) {
    var l = t.stateNode;
    if (l === null)
      return null;
    var s = Fl(l);
    if (s === null)
      return null;
    l = s[n];
    e:
      switch (n) {
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
          (s = !s.disabled) || (s = !((t = t.type) === "button" || t === "input" || t === "select" || t === "textarea")), t = !s;
          break e;
        default:
          t = !1;
      }
    if (t)
      return null;
    if (l && typeof l != "function")
      throw Error(i(231, n, typeof l));
    return l;
  }
  var ac = !1;
  if (f)
    try {
      var Oi = {};
      Object.defineProperty(Oi, "passive", { get: function() {
        ac = !0;
      } }), window.addEventListener("test", Oi, Oi), window.removeEventListener("test", Oi, Oi);
    } catch {
      ac = !1;
    }
  function t3(t, n, l, s, p, d, g, w, x) {
    var T = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(l, T);
    } catch (P) {
      this.onError(P);
    }
  }
  var Li = !1, bl = null, wl = !1, lc = null, n3 = { onError: function(t) {
    Li = !0, bl = t;
  } };
  function r3(t, n, l, s, p, d, g, w, x) {
    Li = !1, bl = null, t3.apply(n3, arguments);
  }
  function Lr(t) {
    var n = t, l = t;
    if (t.alternate)
      for (; n.return; )
        n = n.return;
    else {
      t = n;
      do
        (4098 & (n = t).flags) != 0 && (l = n.return), t = n.return;
      while (t);
    }
    return n.tag === 3 ? l : null;
  }
  function zm(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate) !== null && (n = t.memoizedState), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function Um(t) {
    if (Lr(t) !== t)
      throw Error(i(188));
  }
  function Gm(t) {
    return (t = function(n) {
      var l = n.alternate;
      if (!l) {
        if ((l = Lr(n)) === null)
          throw Error(i(188));
        return l !== n ? null : n;
      }
      for (var s = n, p = l; ; ) {
        var d = s.return;
        if (d === null)
          break;
        var g = d.alternate;
        if (g === null) {
          if ((p = d.return) !== null) {
            s = p;
            continue;
          }
          break;
        }
        if (d.child === g.child) {
          for (g = d.child; g; ) {
            if (g === s)
              return Um(d), n;
            if (g === p)
              return Um(d), l;
            g = g.sibling;
          }
          throw Error(i(188));
        }
        if (s.return !== p.return)
          s = d, p = g;
        else {
          for (var w = !1, x = d.child; x; ) {
            if (x === s) {
              w = !0, s = d, p = g;
              break;
            }
            if (x === p) {
              w = !0, p = d, s = g;
              break;
            }
            x = x.sibling;
          }
          if (!w) {
            for (x = g.child; x; ) {
              if (x === s) {
                w = !0, s = g, p = d;
                break;
              }
              if (x === p) {
                w = !0, p = g, s = d;
                break;
              }
              x = x.sibling;
            }
            if (!w)
              throw Error(i(189));
          }
        }
        if (s.alternate !== p)
          throw Error(i(190));
      }
      if (s.tag !== 3)
        throw Error(i(188));
      return s.stateNode.current === s ? n : l;
    }(t)) !== null ? Vm(t) : null;
  }
  function Vm(t) {
    if (t.tag === 5 || t.tag === 6)
      return t;
    for (t = t.child; t !== null; ) {
      var n = Vm(t);
      if (n !== null)
        return n;
      t = t.sibling;
    }
    return null;
  }
  var Wm = r.unstable_scheduleCallback, Xm = r.unstable_cancelCallback, o3 = r.unstable_shouldYield, i3 = r.unstable_requestPaint, Je = r.unstable_now, a3 = r.unstable_getCurrentPriorityLevel, sc = r.unstable_ImmediatePriority, Qm = r.unstable_UserBlockingPriority, uc = r.unstable_NormalPriority, l3 = r.unstable_LowPriority, Ym = r.unstable_IdlePriority, kl = null, mn = null, ln = Math.clz32 ? Math.clz32 : function(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (s3(t) / u3 | 0) | 0;
  }, s3 = Math.log, u3 = Math.LN2, cc = 64, fc = 4194304;
  function Mi(t) {
    switch (t & -t) {
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
        return 4194240 & t;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return 130023424 & t;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function xl(t, n) {
    var l = t.pendingLanes;
    if (l === 0)
      return 0;
    var s = 0, p = t.suspendedLanes, d = t.pingedLanes, g = 268435455 & l;
    if (g !== 0) {
      var w = g & ~p;
      w !== 0 ? s = Mi(w) : (d &= g) !== 0 && (s = Mi(d));
    } else
      (g = l & ~p) !== 0 ? s = Mi(g) : d !== 0 && (s = Mi(d));
    if (s === 0)
      return 0;
    if (n !== 0 && n !== s && (n & p) == 0 && ((p = s & -s) >= (d = n & -n) || p === 16 && (4194240 & d) != 0))
      return n;
    if ((4 & s) != 0 && (s |= 16 & l), (n = t.entangledLanes) !== 0)
      for (t = t.entanglements, n &= s; 0 < n; )
        p = 1 << (l = 31 - ln(n)), s |= t[l], n &= ~p;
    return s;
  }
  function c3(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return n + 250;
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
        return n + 5e3;
      default:
        return -1;
    }
  }
  function pc(t) {
    return (t = -1073741825 & t.pendingLanes) !== 0 ? t : 1073741824 & t ? 1073741824 : 0;
  }
  function Km() {
    var t = cc;
    return (4194240 & (cc <<= 1)) == 0 && (cc = 64), t;
  }
  function dc(t) {
    for (var n = [], l = 0; 31 > l; l++)
      n.push(t);
    return n;
  }
  function Ii(t, n, l) {
    t.pendingLanes |= n, n !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), (t = t.eventTimes)[n = 31 - ln(n)] = l;
  }
  function hc(t, n) {
    var l = t.entangledLanes |= n;
    for (t = t.entanglements; l; ) {
      var s = 31 - ln(l), p = 1 << s;
      p & n | t[s] & n && (t[s] |= n), l &= ~p;
    }
  }
  var Le = 0;
  function Zm(t) {
    return 1 < (t &= -t) ? 4 < t ? (268435455 & t) != 0 ? 16 : 536870912 : 4 : 1;
  }
  var qm, mc, Jm, $m, eg, gc = !1, El = [], Xn = null, Qn = null, Yn = null, _i = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), Kn = [], f3 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function tg(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        Xn = null;
        break;
      case "dragenter":
      case "dragleave":
        Qn = null;
        break;
      case "mouseover":
      case "mouseout":
        Yn = null;
        break;
      case "pointerover":
      case "pointerout":
        _i.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ri.delete(n.pointerId);
    }
  }
  function Di(t, n, l, s, p, d) {
    return t === null || t.nativeEvent !== d ? (t = { blockedOn: n, domEventName: l, eventSystemFlags: s, nativeEvent: d, targetContainers: [p] }, n !== null && (n = Ki(n)) !== null && mc(n), t) : (t.eventSystemFlags |= s, n = t.targetContainers, p !== null && n.indexOf(p) === -1 && n.push(p), t);
  }
  function ng(t) {
    var n = Ir(t.target);
    if (n !== null) {
      var l = Lr(n);
      if (l !== null) {
        if ((n = l.tag) === 13) {
          if ((n = zm(l)) !== null)
            return t.blockedOn = n, void eg(t.priority, function() {
              Jm(l);
            });
        } else if (n === 3 && l.stateNode.current.memoizedState.isDehydrated)
          return void (t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null);
      }
    }
    t.blockedOn = null;
  }
  function Sl(t) {
    if (t.blockedOn !== null)
      return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var l = yc(t.domEventName, t.eventSystemFlags, n[0], t.nativeEvent);
      if (l !== null)
        return (n = Ki(l)) !== null && mc(n), t.blockedOn = l, !1;
      var s = new (l = t.nativeEvent).constructor(l.type, l);
      nc = s, l.target.dispatchEvent(s), nc = null, n.shift();
    }
    return !0;
  }
  function rg(t, n, l) {
    Sl(t) && l.delete(n);
  }
  function p3() {
    gc = !1, Xn !== null && Sl(Xn) && (Xn = null), Qn !== null && Sl(Qn) && (Qn = null), Yn !== null && Sl(Yn) && (Yn = null), _i.forEach(rg), Ri.forEach(rg);
  }
  function ji(t, n) {
    t.blockedOn === n && (t.blockedOn = null, gc || (gc = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, p3)));
  }
  function Hi(t) {
    function n(p) {
      return ji(p, t);
    }
    if (0 < El.length) {
      ji(El[0], t);
      for (var l = 1; l < El.length; l++) {
        var s = El[l];
        s.blockedOn === t && (s.blockedOn = null);
      }
    }
    for (Xn !== null && ji(Xn, t), Qn !== null && ji(Qn, t), Yn !== null && ji(Yn, t), _i.forEach(n), Ri.forEach(n), l = 0; l < Kn.length; l++)
      (s = Kn[l]).blockedOn === t && (s.blockedOn = null);
    for (; 0 < Kn.length && (l = Kn[0]).blockedOn === null; )
      ng(l), l.blockedOn === null && Kn.shift();
  }
  var po = D.ReactCurrentBatchConfig, Cl = !0;
  function d3(t, n, l, s) {
    var p = Le, d = po.transition;
    po.transition = null;
    try {
      Le = 1, vc(t, n, l, s);
    } finally {
      Le = p, po.transition = d;
    }
  }
  function h3(t, n, l, s) {
    var p = Le, d = po.transition;
    po.transition = null;
    try {
      Le = 4, vc(t, n, l, s);
    } finally {
      Le = p, po.transition = d;
    }
  }
  function vc(t, n, l, s) {
    if (Cl) {
      var p = yc(t, n, l, s);
      if (p === null)
        Rc(t, n, s, Tl, l), tg(t, s);
      else if (function(g, w, x, T, P) {
        switch (w) {
          case "focusin":
            return Xn = Di(Xn, g, w, x, T, P), !0;
          case "dragenter":
            return Qn = Di(Qn, g, w, x, T, P), !0;
          case "mouseover":
            return Yn = Di(Yn, g, w, x, T, P), !0;
          case "pointerover":
            var j = P.pointerId;
            return _i.set(j, Di(_i.get(j) || null, g, w, x, T, P)), !0;
          case "gotpointercapture":
            return j = P.pointerId, Ri.set(j, Di(Ri.get(j) || null, g, w, x, T, P)), !0;
        }
        return !1;
      }(p, t, n, l, s))
        s.stopPropagation();
      else if (tg(t, s), 4 & n && -1 < f3.indexOf(t)) {
        for (; p !== null; ) {
          var d = Ki(p);
          if (d !== null && qm(d), (d = yc(t, n, l, s)) === null && Rc(t, n, s, Tl, l), d === p)
            break;
          p = d;
        }
        p !== null && s.stopPropagation();
      } else
        Rc(t, n, s, null, l);
    }
  }
  var Tl = null;
  function yc(t, n, l, s) {
    if (Tl = null, (t = Ir(t = rc(s))) !== null)
      if ((n = Lr(t)) === null)
        t = null;
      else if ((l = n.tag) === 13) {
        if ((t = zm(n)) !== null)
          return t;
        t = null;
      } else if (l === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        t = null;
      } else
        n !== t && (t = null);
    return Tl = t, null;
  }
  function og(t) {
    switch (t) {
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
        switch (a3()) {
          case sc:
            return 1;
          case Qm:
            return 4;
          case uc:
          case l3:
            return 16;
          case Ym:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mr = null, bc = null, Al = null;
  function ig() {
    if (Al)
      return Al;
    var t, n, l = bc, s = l.length, p = "value" in Mr ? Mr.value : Mr.textContent, d = p.length;
    for (t = 0; t < s && l[t] === p[t]; t++)
      ;
    var g = s - t;
    for (n = 1; n <= g && l[s - n] === p[d - n]; n++)
      ;
    return Al = p.slice(t, 1 < n ? 1 - n : void 0);
  }
  function Nl(t) {
    var n = t.keyCode;
    return "charCode" in t ? (t = t.charCode) === 0 && n === 13 && (t = 13) : t = n, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Pl() {
    return !0;
  }
  function ag() {
    return !1;
  }
  function jt(t) {
    function n(l, s, p, d, g) {
      for (var w in this._reactName = l, this._targetInst = p, this.type = s, this.nativeEvent = d, this.target = g, this.currentTarget = null, t)
        t.hasOwnProperty(w) && (l = t[w], this[w] = l ? l(d) : d[w]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Pl : ag, this.isPropagationStopped = ag, this;
    }
    return N(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Pl);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Pl);
    }, persist: function() {
    }, isPersistent: Pl }), n;
  }
  var wc, kc, Fi, ho = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, xc = jt(ho), Bi = N({}, ho, { view: 0, detail: 0 }), m3 = jt(Bi), Ol = N({}, Bi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Sc, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== Fi && (Fi && t.type === "mousemove" ? (wc = t.screenX - Fi.screenX, kc = t.screenY - Fi.screenY) : kc = wc = 0, Fi = t), wc);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : kc;
  } }), lg = jt(Ol), g3 = jt(N({}, Ol, { dataTransfer: 0 })), Ec = jt(N({}, Bi, { relatedTarget: 0 })), v3 = jt(N({}, ho, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), y3 = N({}, ho, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), b3 = jt(y3), sg = jt(N({}, ho, { data: 0 })), w3 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, k3 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, x3 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function E3(t) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(t) : !!(t = x3[t]) && !!n[t];
  }
  function Sc() {
    return E3;
  }
  var S3 = N({}, Bi, { key: function(t) {
    if (t.key) {
      var n = w3[t.key] || t.key;
      if (n !== "Unidentified")
        return n;
    }
    return t.type === "keypress" ? (t = Nl(t)) === 13 ? "Enter" : String.fromCharCode(t) : t.type === "keydown" || t.type === "keyup" ? k3[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Sc, charCode: function(t) {
    return t.type === "keypress" ? Nl(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Nl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), C3 = jt(S3), ug = jt(N({}, Ol, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), T3 = jt(N({}, Bi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Sc })), A3 = jt(N({}, ho, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), N3 = N({}, Ol, { deltaX: function(t) {
    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
  }, deltaY: function(t) {
    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), P3 = jt(N3), O3 = [9, 13, 27, 32], Cc = f && "CompositionEvent" in window, zi = null;
  f && "documentMode" in document && (zi = document.documentMode);
  var L3 = f && "TextEvent" in window && !zi, cg = f && (!Cc || zi && 8 < zi && 11 >= zi), fg = String.fromCharCode(32), pg = !1;
  function dg(t, n) {
    switch (t) {
      case "keyup":
        return O3.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hg(t) {
    return typeof (t = t.detail) == "object" && "data" in t ? t.data : null;
  }
  var mo = !1, M3 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function mg(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!M3[t.type] : n === "textarea";
  }
  function gg(t, n, l, s) {
    Dm(s), 0 < (n = Dl(n, "onChange")).length && (l = new xc("onChange", "change", null, l, s), t.push({ event: l, listeners: n }));
  }
  var Ll = null, Ui = null;
  function I3(t) {
    _g(t, 0);
  }
  function Ml(t) {
    if (Or(wo(t)))
      return t;
  }
  function _3(t, n) {
    if (t === "change")
      return n;
  }
  var vg = !1;
  if (f) {
    var Tc;
    if (f) {
      var Ac = "oninput" in document;
      if (!Ac) {
        var yg = document.createElement("div");
        yg.setAttribute("oninput", "return;"), Ac = typeof yg.oninput == "function";
      }
      Tc = Ac;
    } else
      Tc = !1;
    vg = Tc && (!document.documentMode || 9 < document.documentMode);
  }
  function bg() {
    Ll && (Ll.detachEvent("onpropertychange", wg), Ui = Ll = null);
  }
  function wg(t) {
    if (t.propertyName === "value" && Ml(Ui)) {
      var n = [];
      gg(n, Ui, t, rc(t)), Bm(I3, n);
    }
  }
  function R3(t, n, l) {
    t === "focusin" ? (bg(), Ui = l, (Ll = n).attachEvent("onpropertychange", wg)) : t === "focusout" && bg();
  }
  function D3(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Ml(Ui);
  }
  function j3(t, n) {
    if (t === "click")
      return Ml(n);
  }
  function H3(t, n) {
    if (t === "input" || t === "change")
      return Ml(n);
  }
  var sn = typeof Object.is == "function" ? Object.is : function(t, n) {
    return t === n && (t !== 0 || 1 / t == 1 / n) || t != t && n != n;
  };
  function Gi(t, n) {
    if (sn(t, n))
      return !0;
    if (typeof t != "object" || t === null || typeof n != "object" || n === null)
      return !1;
    var l = Object.keys(t), s = Object.keys(n);
    if (l.length !== s.length)
      return !1;
    for (s = 0; s < l.length; s++) {
      var p = l[s];
      if (!h.call(n, p) || !sn(t[p], n[p]))
        return !1;
    }
    return !0;
  }
  function kg(t) {
    for (; t && t.firstChild; )
      t = t.firstChild;
    return t;
  }
  function xg(t, n) {
    var l, s = kg(t);
    for (t = 0; s; ) {
      if (s.nodeType === 3) {
        if (l = t + s.textContent.length, t <= n && l >= n)
          return { node: s, offset: n - t };
        t = l;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = kg(s);
    }
  }
  function Eg(t, n) {
    return !(!t || !n) && (t === n || (!t || t.nodeType !== 3) && (n && n.nodeType === 3 ? Eg(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))));
  }
  function Sg() {
    for (var t = window, n = $(); n instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof n.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (!l)
        break;
      n = $((t = n.contentWindow).document);
    }
    return n;
  }
  function Nc(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true");
  }
  function F3(t) {
    var n = Sg(), l = t.focusedElem, s = t.selectionRange;
    if (n !== l && l && l.ownerDocument && Eg(l.ownerDocument.documentElement, l)) {
      if (s !== null && Nc(l)) {
        if (n = s.start, (t = s.end) === void 0 && (t = n), "selectionStart" in l)
          l.selectionStart = n, l.selectionEnd = Math.min(t, l.value.length);
        else if ((t = (n = l.ownerDocument || document) && n.defaultView || window).getSelection) {
          t = t.getSelection();
          var p = l.textContent.length, d = Math.min(s.start, p);
          s = s.end === void 0 ? d : Math.min(s.end, p), !t.extend && d > s && (p = s, s = d, d = p), p = xg(l, d);
          var g = xg(l, s);
          p && g && (t.rangeCount !== 1 || t.anchorNode !== p.node || t.anchorOffset !== p.offset || t.focusNode !== g.node || t.focusOffset !== g.offset) && ((n = n.createRange()).setStart(p.node, p.offset), t.removeAllRanges(), d > s ? (t.addRange(n), t.extend(g.node, g.offset)) : (n.setEnd(g.node, g.offset), t.addRange(n)));
        }
      }
      for (n = [], t = l; t = t.parentNode; )
        t.nodeType === 1 && n.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < n.length; l++)
        (t = n[l]).element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var B3 = f && "documentMode" in document && 11 >= document.documentMode, go = null, Pc = null, Vi = null, Oc = !1;
  function Cg(t, n, l) {
    var s = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Oc || go == null || go !== $(s) || ("selectionStart" in (s = go) && Nc(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : s = { anchorNode: (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }, Vi && Gi(Vi, s) || (Vi = s, 0 < (s = Dl(Pc, "onSelect")).length && (n = new xc("onSelect", "select", null, n, l), t.push({ event: n, listeners: s }), n.target = go)));
  }
  function Il(t, n) {
    var l = {};
    return l[t.toLowerCase()] = n.toLowerCase(), l["Webkit" + t] = "webkit" + n, l["Moz" + t] = "moz" + n, l;
  }
  var vo = { animationend: Il("Animation", "AnimationEnd"), animationiteration: Il("Animation", "AnimationIteration"), animationstart: Il("Animation", "AnimationStart"), transitionend: Il("Transition", "TransitionEnd") }, Lc = {}, Tg = {};
  function _l(t) {
    if (Lc[t])
      return Lc[t];
    if (!vo[t])
      return t;
    var n, l = vo[t];
    for (n in l)
      if (l.hasOwnProperty(n) && n in Tg)
        return Lc[t] = l[n];
    return t;
  }
  f && (Tg = document.createElement("div").style, "AnimationEvent" in window || (delete vo.animationend.animation, delete vo.animationiteration.animation, delete vo.animationstart.animation), "TransitionEvent" in window || delete vo.transitionend.transition);
  var Ag = _l("animationend"), Ng = _l("animationiteration"), Pg = _l("animationstart"), Og = _l("transitionend"), Lg = /* @__PURE__ */ new Map(), Mg = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Zn(t, n) {
    Lg.set(t, n), u(n, [t]);
  }
  for (var Mc = 0; Mc < Mg.length; Mc++) {
    var Ic = Mg[Mc];
    Zn(Ic.toLowerCase(), "on" + (Ic[0].toUpperCase() + Ic.slice(1)));
  }
  Zn(Ag, "onAnimationEnd"), Zn(Ng, "onAnimationIteration"), Zn(Pg, "onAnimationStart"), Zn("dblclick", "onDoubleClick"), Zn("focusin", "onFocus"), Zn("focusout", "onBlur"), Zn(Og, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Wi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), z3 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));
  function Ig(t, n, l) {
    var s = t.type || "unknown-event";
    t.currentTarget = l, function(p, d, g, w, x, T, P, j, I) {
      if (r3.apply(this, arguments), Li) {
        if (!Li)
          throw Error(i(198));
        var F = bl;
        Li = !1, bl = null, wl || (wl = !0, lc = F);
      }
    }(s, n, void 0, t), t.currentTarget = null;
  }
  function _g(t, n) {
    n = (4 & n) != 0;
    for (var l = 0; l < t.length; l++) {
      var s = t[l], p = s.event;
      s = s.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var g = s.length - 1; 0 <= g; g--) {
            var w = s[g], x = w.instance, T = w.currentTarget;
            if (w = w.listener, x !== d && p.isPropagationStopped())
              break e;
            Ig(p, w, T), d = x;
          }
        else
          for (g = 0; g < s.length; g++) {
            if (x = (w = s[g]).instance, T = w.currentTarget, w = w.listener, x !== d && p.isPropagationStopped())
              break e;
            Ig(p, w, T), d = x;
          }
      }
    }
    if (wl)
      throw t = lc, wl = !1, lc = null, t;
  }
  function De(t, n) {
    var l = n[zc];
    l === void 0 && (l = n[zc] = /* @__PURE__ */ new Set());
    var s = t + "__bubble";
    l.has(s) || (Rg(n, t, 2, !1), l.add(s));
  }
  function _c(t, n, l) {
    var s = 0;
    n && (s |= 4), Rg(l, t, s, n);
  }
  var Rl = "_reactListening" + Math.random().toString(36).slice(2);
  function Xi(t) {
    if (!t[Rl]) {
      t[Rl] = !0, o.forEach(function(l) {
        l !== "selectionchange" && (z3.has(l) || _c(l, !1, t), _c(l, !0, t));
      });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[Rl] || (n[Rl] = !0, _c("selectionchange", !1, n));
    }
  }
  function Rg(t, n, l, s) {
    switch (og(n)) {
      case 1:
        var p = d3;
        break;
      case 4:
        p = h3;
        break;
      default:
        p = vc;
    }
    l = p.bind(null, n, l, t), p = void 0, !ac || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (p = !0), s ? p !== void 0 ? t.addEventListener(n, l, { capture: !0, passive: p }) : t.addEventListener(n, l, !0) : p !== void 0 ? t.addEventListener(n, l, { passive: p }) : t.addEventListener(n, l, !1);
  }
  function Rc(t, n, l, s, p) {
    var d = s;
    if ((1 & n) == 0 && (2 & n) == 0 && s !== null)
      e:
        for (; ; ) {
          if (s === null)
            return;
          var g = s.tag;
          if (g === 3 || g === 4) {
            var w = s.stateNode.containerInfo;
            if (w === p || w.nodeType === 8 && w.parentNode === p)
              break;
            if (g === 4)
              for (g = s.return; g !== null; ) {
                var x = g.tag;
                if ((x === 3 || x === 4) && ((x = g.stateNode.containerInfo) === p || x.nodeType === 8 && x.parentNode === p))
                  return;
                g = g.return;
              }
            for (; w !== null; ) {
              if ((g = Ir(w)) === null)
                return;
              if ((x = g.tag) === 5 || x === 6) {
                s = d = g;
                continue e;
              }
              w = w.parentNode;
            }
          }
          s = s.return;
        }
    Bm(function() {
      var T = d, P = rc(l), j = [];
      e: {
        var I = Lg.get(t);
        if (I !== void 0) {
          var F = xc, U = t;
          switch (t) {
            case "keypress":
              if (Nl(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              F = C3;
              break;
            case "focusin":
              U = "focus", F = Ec;
              break;
            case "focusout":
              U = "blur", F = Ec;
              break;
            case "beforeblur":
            case "afterblur":
              F = Ec;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              F = lg;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = g3;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = T3;
              break;
            case Ag:
            case Ng:
            case Pg:
              F = v3;
              break;
            case Og:
              F = A3;
              break;
            case "scroll":
              F = m3;
              break;
            case "wheel":
              F = P3;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = b3;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = ug;
          }
          var W = (4 & n) != 0, R = !W && t === "scroll", C = W ? I !== null ? I + "Capture" : null : I;
          W = [];
          for (var O, B = T; B !== null; ) {
            var q = (O = B).stateNode;
            if (O.tag === 5 && q !== null && (O = q, C !== null && (q = Pi(B, C)) != null && W.push(Qi(B, q, O))), R)
              break;
            B = B.return;
          }
          0 < W.length && (I = new F(I, U, null, l, P), j.push({ event: I, listeners: W }));
        }
      }
      if ((7 & n) == 0) {
        if (F = t === "mouseout" || t === "pointerout", (!(I = t === "mouseover" || t === "pointerover") || l === nc || !(U = l.relatedTarget || l.fromElement) || !Ir(U) && !U[Ln]) && (F || I) && (I = P.window === P ? P : (I = P.ownerDocument) ? I.defaultView || I.parentWindow : window, F ? (F = T, (U = (U = l.relatedTarget || l.toElement) ? Ir(U) : null) !== null && (U !== (R = Lr(U)) || U.tag !== 5 && U.tag !== 6) && (U = null)) : (F = null, U = T), F !== U)) {
          if (W = lg, q = "onMouseLeave", C = "onMouseEnter", B = "mouse", t !== "pointerout" && t !== "pointerover" || (W = ug, q = "onPointerLeave", C = "onPointerEnter", B = "pointer"), R = F == null ? I : wo(F), O = U == null ? I : wo(U), (I = new W(q, B + "leave", F, l, P)).target = R, I.relatedTarget = O, q = null, Ir(P) === T && ((W = new W(C, B + "enter", U, l, P)).target = O, W.relatedTarget = R, q = W), R = q, F && U)
            e: {
              for (C = U, B = 0, O = W = F; O; O = yo(O))
                B++;
              for (O = 0, q = C; q; q = yo(q))
                O++;
              for (; 0 < B - O; )
                W = yo(W), B--;
              for (; 0 < O - B; )
                C = yo(C), O--;
              for (; B--; ) {
                if (W === C || C !== null && W === C.alternate)
                  break e;
                W = yo(W), C = yo(C);
              }
              W = null;
            }
          else
            W = null;
          F !== null && Dg(j, I, F, W, !1), U !== null && R !== null && Dg(j, R, U, W, !0);
        }
        if ((F = (I = T ? wo(T) : window).nodeName && I.nodeName.toLowerCase()) === "select" || F === "input" && I.type === "file")
          var se = _3;
        else if (mg(I))
          if (vg)
            se = H3;
          else {
            se = D3;
            var Z = R3;
          }
        else
          (F = I.nodeName) && F.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (se = j3);
        switch (se && (se = se(t, T)) ? gg(j, se, l, P) : (Z && Z(t, I, T), t === "focusout" && (Z = I._wrapperState) && Z.controlled && I.type === "number" && Ku(I, "number", I.value)), Z = T ? wo(T) : window, t) {
          case "focusin":
            (mg(Z) || Z.contentEditable === "true") && (go = Z, Pc = T, Vi = null);
            break;
          case "focusout":
            Vi = Pc = go = null;
            break;
          case "mousedown":
            Oc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Oc = !1, Cg(j, l, P);
            break;
          case "selectionchange":
            if (B3)
              break;
          case "keydown":
          case "keyup":
            Cg(j, l, P);
        }
        var fe;
        if (Cc)
          e: {
            switch (t) {
              case "compositionstart":
                var ie = "onCompositionStart";
                break e;
              case "compositionend":
                ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ie = "onCompositionUpdate";
                break e;
            }
            ie = void 0;
          }
        else
          mo ? dg(t, l) && (ie = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ie = "onCompositionStart");
        ie && (cg && l.locale !== "ko" && (mo || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && mo && (fe = ig()) : (bc = "value" in (Mr = P) ? Mr.value : Mr.textContent, mo = !0)), 0 < (Z = Dl(T, ie)).length && (ie = new sg(ie, t, null, l, P), j.push({ event: ie, listeners: Z }), (fe || (fe = hg(l)) !== null) && (ie.data = fe))), (fe = L3 ? function(ae, Ae) {
          switch (ae) {
            case "compositionend":
              return hg(Ae);
            case "keypress":
              return Ae.which !== 32 ? null : (pg = !0, fg);
            case "textInput":
              return (ae = Ae.data) === fg && pg ? null : ae;
            default:
              return null;
          }
        }(t, l) : function(ae, Ae) {
          if (mo)
            return ae === "compositionend" || !Cc && dg(ae, Ae) ? (ae = ig(), Al = bc = Mr = null, mo = !1, ae) : null;
          switch (ae) {
            case "paste":
            default:
              return null;
            case "keypress":
              if (!(Ae.ctrlKey || Ae.altKey || Ae.metaKey) || Ae.ctrlKey && Ae.altKey) {
                if (Ae.char && 1 < Ae.char.length)
                  return Ae.char;
                if (Ae.which)
                  return String.fromCharCode(Ae.which);
              }
              return null;
            case "compositionend":
              return cg && Ae.locale !== "ko" ? null : Ae.data;
          }
        }(t, l)) && 0 < (T = Dl(T, "onBeforeInput")).length && (P = new sg("onBeforeInput", "beforeinput", null, l, P), j.push({ event: P, listeners: T }), P.data = fe);
      }
      _g(j, n);
    });
  }
  function Qi(t, n, l) {
    return { instance: t, listener: n, currentTarget: l };
  }
  function Dl(t, n) {
    for (var l = n + "Capture", s = []; t !== null; ) {
      var p = t, d = p.stateNode;
      p.tag === 5 && d !== null && (p = d, (d = Pi(t, l)) != null && s.unshift(Qi(t, d, p)), (d = Pi(t, n)) != null && s.push(Qi(t, d, p))), t = t.return;
    }
    return s;
  }
  function yo(t) {
    if (t === null)
      return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function Dg(t, n, l, s, p) {
    for (var d = n._reactName, g = []; l !== null && l !== s; ) {
      var w = l, x = w.alternate, T = w.stateNode;
      if (x !== null && x === s)
        break;
      w.tag === 5 && T !== null && (w = T, p ? (x = Pi(l, d)) != null && g.unshift(Qi(l, x, w)) : p || (x = Pi(l, d)) != null && g.push(Qi(l, x, w))), l = l.return;
    }
    g.length !== 0 && t.push({ event: n, listeners: g });
  }
  var U3 = /\r\n?/g, G3 = /\u0000|\uFFFD/g;
  function jg(t) {
    return (typeof t == "string" ? t : "" + t).replace(U3, `
`).replace(G3, "");
  }
  function jl(t, n, l) {
    if (n = jg(n), jg(t) !== n && l)
      throw Error(i(425));
  }
  function Hl() {
  }
  var Dc = null, jc = null;
  function Hc(t, n) {
    return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Fc = typeof setTimeout == "function" ? setTimeout : void 0, V3 = typeof clearTimeout == "function" ? clearTimeout : void 0, Hg = typeof Promise == "function" ? Promise : void 0, W3 = typeof queueMicrotask == "function" ? queueMicrotask : Hg !== void 0 ? function(t) {
    return Hg.resolve(null).then(t).catch(X3);
  } : Fc;
  function X3(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Bc(t, n) {
    var l = n, s = 0;
    do {
      var p = l.nextSibling;
      if (t.removeChild(l), p && p.nodeType === 8)
        if ((l = p.data) === "/$") {
          if (s === 0)
            return t.removeChild(p), void Hi(n);
          s--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || s++;
      l = p;
    } while (l);
    Hi(n);
  }
  function qn(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3)
        break;
      if (n === 8) {
        if ((n = t.data) === "$" || n === "$!" || n === "$?")
          break;
        if (n === "/$")
          return null;
      }
    }
    return t;
  }
  function Fg(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (n === 0)
            return t;
          n--;
        } else
          l === "/$" && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var bo = Math.random().toString(36).slice(2), gn = "__reactFiber$" + bo, Yi = "__reactProps$" + bo, Ln = "__reactContainer$" + bo, zc = "__reactEvents$" + bo, Q3 = "__reactListeners$" + bo, Y3 = "__reactHandles$" + bo;
  function Ir(t) {
    var n = t[gn];
    if (n)
      return n;
    for (var l = t.parentNode; l; ) {
      if (n = l[Ln] || l[gn]) {
        if (l = n.alternate, n.child !== null || l !== null && l.child !== null)
          for (t = Fg(t); t !== null; ) {
            if (l = t[gn])
              return l;
            t = Fg(t);
          }
        return n;
      }
      l = (t = l).parentNode;
    }
    return null;
  }
  function Ki(t) {
    return !(t = t[gn] || t[Ln]) || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function wo(t) {
    if (t.tag === 5 || t.tag === 6)
      return t.stateNode;
    throw Error(i(33));
  }
  function Fl(t) {
    return t[Yi] || null;
  }
  var Uc = [], ko = -1;
  function Jn(t) {
    return { current: t };
  }
  function Ge(t) {
    0 > ko || (t.current = Uc[ko], Uc[ko] = null, ko--);
  }
  function Ie(t, n) {
    ko++, Uc[ko] = t.current, t.current = n;
  }
  var $n = {}, pt = Jn($n), Ct = Jn(!1), _r = $n;
  function xo(t, n) {
    var l = t.type.contextTypes;
    if (!l)
      return $n;
    var s = t.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === n)
      return s.__reactInternalMemoizedMaskedChildContext;
    var p, d = {};
    for (p in l)
      d[p] = n[p];
    return s && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = n, t.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Ht(t) {
    return (t = t.childContextTypes) != null;
  }
  function Gc() {
    Ge(Ct), Ge(pt);
  }
  function Bg(t, n, l) {
    if (pt.current !== $n)
      throw Error(i(168));
    Ie(pt, n), Ie(Ct, l);
  }
  function zg(t, n, l) {
    var s = t.stateNode;
    if (n = n.childContextTypes, typeof s.getChildContext != "function")
      return l;
    for (var p in s = s.getChildContext())
      if (!(p in n))
        throw Error(i(108, Ce(t) || "Unknown", p));
    return N({}, l, s);
  }
  function Bl(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || $n, _r = pt.current, Ie(pt, t), Ie(Ct, Ct.current), !0;
  }
  function Ug(t, n, l) {
    var s = t.stateNode;
    if (!s)
      throw Error(i(169));
    l ? (t = zg(t, n, _r), s.__reactInternalMemoizedMergedChildContext = t, Ge(Ct), Ge(pt), Ie(pt, t)) : Ge(Ct), Ie(Ct, l);
  }
  var Mn = null, zl = !1, Vc = !1;
  function Gg(t) {
    Mn === null ? Mn = [t] : Mn.push(t);
  }
  function er() {
    if (!Vc && Mn !== null) {
      Vc = !0;
      var t = 0, n = Le;
      try {
        var l = Mn;
        for (Le = 1; t < l.length; t++) {
          var s = l[t];
          do
            s = s(!0);
          while (s !== null);
        }
        Mn = null, zl = !1;
      } catch (p) {
        throw Mn !== null && (Mn = Mn.slice(t + 1)), Wm(sc, er), p;
      } finally {
        Le = n, Vc = !1;
      }
    }
    return null;
  }
  var Eo = [], So = 0, Ul = null, Gl = 0, Qt = [], Yt = 0, Rr = null, vn = 1, In = "";
  function Dr(t, n) {
    Eo[So++] = Gl, Eo[So++] = Ul, Ul = t, Gl = n;
  }
  function Vg(t, n, l) {
    Qt[Yt++] = vn, Qt[Yt++] = In, Qt[Yt++] = Rr, Rr = t;
    var s = vn;
    t = In;
    var p = 32 - ln(s) - 1;
    s &= ~(1 << p), l += 1;
    var d = 32 - ln(n) + p;
    if (30 < d) {
      var g = p - p % 5;
      d = (s & (1 << g) - 1).toString(32), s >>= g, p -= g, vn = 1 << 32 - ln(n) + p | l << p | s, In = d + t;
    } else
      vn = 1 << d | l << p | s, In = t;
  }
  function Wc(t) {
    t.return !== null && (Dr(t, 1), Vg(t, 1, 0));
  }
  function Xc(t) {
    for (; t === Ul; )
      Ul = Eo[--So], Eo[So] = null, Gl = Eo[--So], Eo[So] = null;
    for (; t === Rr; )
      Rr = Qt[--Yt], Qt[Yt] = null, In = Qt[--Yt], Qt[Yt] = null, vn = Qt[--Yt], Qt[Yt] = null;
  }
  var Ft = null, Bt = null, Ve = !1, un = null;
  function Wg(t, n) {
    var l = Jt(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = n, l.return = t, (n = t.deletions) === null ? (t.deletions = [l], t.flags |= 16) : n.push(l);
  }
  function Xg(t, n) {
    switch (t.tag) {
      case 5:
        var l = t.type;
        return (n = n.nodeType !== 1 || l.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) !== null && (t.stateNode = n, Ft = t, Bt = qn(n.firstChild), !0);
      case 6:
        return (n = t.pendingProps === "" || n.nodeType !== 3 ? null : n) !== null && (t.stateNode = n, Ft = t, Bt = null, !0);
      case 13:
        return (n = n.nodeType !== 8 ? null : n) !== null && (l = Rr !== null ? { id: vn, overflow: In } : null, t.memoizedState = { dehydrated: n, treeContext: l, retryLane: 1073741824 }, (l = Jt(18, null, null, 0)).stateNode = n, l.return = t, t.child = l, Ft = t, Bt = null, !0);
      default:
        return !1;
    }
  }
  function Qc(t) {
    return (1 & t.mode) != 0 && (128 & t.flags) == 0;
  }
  function Yc(t) {
    if (Ve) {
      var n = Bt;
      if (n) {
        var l = n;
        if (!Xg(t, n)) {
          if (Qc(t))
            throw Error(i(418));
          n = qn(l.nextSibling);
          var s = Ft;
          n && Xg(t, n) ? Wg(s, l) : (t.flags = -4097 & t.flags | 2, Ve = !1, Ft = t);
        }
      } else {
        if (Qc(t))
          throw Error(i(418));
        t.flags = -4097 & t.flags | 2, Ve = !1, Ft = t;
      }
    }
  }
  function Qg(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
      t = t.return;
    Ft = t;
  }
  function Vl(t) {
    if (t !== Ft)
      return !1;
    if (!Ve)
      return Qg(t), Ve = !0, !1;
    var n;
    if ((n = t.tag !== 3) && !(n = t.tag !== 5) && (n = (n = t.type) !== "head" && n !== "body" && !Hc(t.type, t.memoizedProps)), n && (n = Bt)) {
      if (Qc(t))
        throw Yg(), Error(i(418));
      for (; n; )
        Wg(t, n), n = qn(n.nextSibling);
    }
    if (Qg(t), t.tag === 13) {
      if (!(t = (t = t.memoizedState) !== null ? t.dehydrated : null))
        throw Error(i(317));
      e: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8) {
            var l = t.data;
            if (l === "/$") {
              if (n === 0) {
                Bt = qn(t.nextSibling);
                break e;
              }
              n--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || n++;
          }
          t = t.nextSibling;
        }
        Bt = null;
      }
    } else
      Bt = Ft ? qn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Yg() {
    for (var t = Bt; t; )
      t = qn(t.nextSibling);
  }
  function Co() {
    Bt = Ft = null, Ve = !1;
  }
  function Kc(t) {
    un === null ? un = [t] : un.push(t);
  }
  var K3 = D.ReactCurrentBatchConfig;
  function cn(t, n) {
    if (t && t.defaultProps) {
      for (var l in n = N({}, n), t = t.defaultProps)
        n[l] === void 0 && (n[l] = t[l]);
      return n;
    }
    return n;
  }
  var Wl = Jn(null), Xl = null, To = null, Zc = null;
  function qc() {
    Zc = To = Xl = null;
  }
  function Jc(t) {
    var n = Wl.current;
    Ge(Wl), t._currentValue = n;
  }
  function $c(t, n, l) {
    for (; t !== null; ) {
      var s = t.alternate;
      if ((t.childLanes & n) !== n ? (t.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), t === l)
        break;
      t = t.return;
    }
  }
  function Ao(t, n) {
    Xl = t, Zc = To = null, (t = t.dependencies) !== null && t.firstContext !== null && ((t.lanes & n) != 0 && (Tt = !0), t.firstContext = null);
  }
  function Kt(t) {
    var n = t._currentValue;
    if (Zc !== t)
      if (t = { context: t, memoizedValue: n, next: null }, To === null) {
        if (Xl === null)
          throw Error(i(308));
        To = t, Xl.dependencies = { lanes: 0, firstContext: t };
      } else
        To = To.next = t;
    return n;
  }
  var jr = null;
  function ef(t) {
    jr === null ? jr = [t] : jr.push(t);
  }
  function Kg(t, n, l, s) {
    var p = n.interleaved;
    return p === null ? (l.next = l, ef(n)) : (l.next = p.next, p.next = l), n.interleaved = l, _n(t, s);
  }
  function _n(t, n) {
    t.lanes |= n;
    var l = t.alternate;
    for (l !== null && (l.lanes |= n), l = t, t = t.return; t !== null; )
      t.childLanes |= n, (l = t.alternate) !== null && (l.childLanes |= n), l = t, t = t.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var tr = !1;
  function tf(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Zg(t, n) {
    t = t.updateQueue, n.updateQueue === t && (n.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Rn(t, n) {
    return { eventTime: t, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function nr(t, n, l) {
    var s = t.updateQueue;
    if (s === null)
      return null;
    if (s = s.shared, (2 & Te) != 0) {
      var p = s.pending;
      return p === null ? n.next = n : (n.next = p.next, p.next = n), s.pending = n, _n(t, l);
    }
    return (p = s.interleaved) === null ? (n.next = n, ef(s)) : (n.next = p.next, p.next = n), s.interleaved = n, _n(t, l);
  }
  function Ql(t, n, l) {
    if ((n = n.updateQueue) !== null && (n = n.shared, (4194240 & l) != 0)) {
      var s = n.lanes;
      l |= s &= t.pendingLanes, n.lanes = l, hc(t, l);
    }
  }
  function qg(t, n) {
    var l = t.updateQueue, s = t.alternate;
    if (s !== null && l === (s = s.updateQueue)) {
      var p = null, d = null;
      if ((l = l.firstBaseUpdate) !== null) {
        do {
          var g = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? p = d = g : d = d.next = g, l = l.next;
        } while (l !== null);
        d === null ? p = d = n : d = d.next = n;
      } else
        p = d = n;
      return l = { baseState: s.baseState, firstBaseUpdate: p, lastBaseUpdate: d, shared: s.shared, effects: s.effects }, void (t.updateQueue = l);
    }
    (t = l.lastBaseUpdate) === null ? l.firstBaseUpdate = n : t.next = n, l.lastBaseUpdate = n;
  }
  function Yl(t, n, l, s) {
    var p = t.updateQueue;
    tr = !1;
    var d = p.firstBaseUpdate, g = p.lastBaseUpdate, w = p.shared.pending;
    if (w !== null) {
      p.shared.pending = null;
      var x = w, T = x.next;
      x.next = null, g === null ? d = T : g.next = T, g = x;
      var P = t.alternate;
      P !== null && (w = (P = P.updateQueue).lastBaseUpdate) !== g && (w === null ? P.firstBaseUpdate = T : w.next = T, P.lastBaseUpdate = x);
    }
    if (d !== null) {
      var j = p.baseState;
      for (g = 0, P = T = x = null, w = d; ; ) {
        var I = w.lane, F = w.eventTime;
        if ((s & I) === I) {
          P !== null && (P = P.next = { eventTime: F, lane: 0, tag: w.tag, payload: w.payload, callback: w.callback, next: null });
          e: {
            var U = t, W = w;
            switch (I = n, F = l, W.tag) {
              case 1:
                if (typeof (U = W.payload) == "function") {
                  j = U.call(F, j, I);
                  break e;
                }
                j = U;
                break e;
              case 3:
                U.flags = -65537 & U.flags | 128;
              case 0:
                if ((I = typeof (U = W.payload) == "function" ? U.call(F, j, I) : U) == null)
                  break e;
                j = N({}, j, I);
                break e;
              case 2:
                tr = !0;
            }
          }
          w.callback !== null && w.lane !== 0 && (t.flags |= 64, (I = p.effects) === null ? p.effects = [w] : I.push(w));
        } else
          F = { eventTime: F, lane: I, tag: w.tag, payload: w.payload, callback: w.callback, next: null }, P === null ? (T = P = F, x = j) : P = P.next = F, g |= I;
        if ((w = w.next) === null) {
          if ((w = p.shared.pending) === null)
            break;
          w = (I = w).next, I.next = null, p.lastBaseUpdate = I, p.shared.pending = null;
        }
      }
      if (P === null && (x = j), p.baseState = x, p.firstBaseUpdate = T, p.lastBaseUpdate = P, (n = p.shared.interleaved) !== null) {
        p = n;
        do
          g |= p.lane, p = p.next;
        while (p !== n);
      } else
        d === null && (p.shared.lanes = 0);
      Br |= g, t.lanes = g, t.memoizedState = j;
    }
  }
  function Jg(t, n, l) {
    if (t = n.effects, n.effects = null, t !== null)
      for (n = 0; n < t.length; n++) {
        var s = t[n], p = s.callback;
        if (p !== null) {
          if (s.callback = null, s = l, typeof p != "function")
            throw Error(i(191, p));
          p.call(s);
        }
      }
  }
  var $g = new e.Component().refs;
  function nf(t, n, l, s) {
    l = (l = l(s, n = t.memoizedState)) == null ? n : N({}, n, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Kl = { isMounted: function(t) {
    return !!(t = t._reactInternals) && Lr(t) === t;
  }, enqueueSetState: function(t, n, l) {
    t = t._reactInternals;
    var s = xt(), p = lr(t), d = Rn(s, p);
    d.payload = n, l != null && (d.callback = l), (n = nr(t, d, p)) !== null && (fn(n, t, p, s), Ql(n, t, p));
  }, enqueueReplaceState: function(t, n, l) {
    t = t._reactInternals;
    var s = xt(), p = lr(t), d = Rn(s, p);
    d.tag = 1, d.payload = n, l != null && (d.callback = l), (n = nr(t, d, p)) !== null && (fn(n, t, p, s), Ql(n, t, p));
  }, enqueueForceUpdate: function(t, n) {
    t = t._reactInternals;
    var l = xt(), s = lr(t), p = Rn(l, s);
    p.tag = 2, n != null && (p.callback = n), (n = nr(t, p, s)) !== null && (fn(n, t, s, l), Ql(n, t, s));
  } };
  function ev(t, n, l, s, p, d, g) {
    return typeof (t = t.stateNode).shouldComponentUpdate == "function" ? t.shouldComponentUpdate(s, d, g) : !n.prototype || !n.prototype.isPureReactComponent || !Gi(l, s) || !Gi(p, d);
  }
  function tv(t, n, l) {
    var s = !1, p = $n, d = n.contextType;
    return typeof d == "object" && d !== null ? d = Kt(d) : (p = Ht(n) ? _r : pt.current, d = (s = (s = n.contextTypes) != null) ? xo(t, p) : $n), n = new n(l, d), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Kl, t.stateNode = n, n._reactInternals = t, s && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = p, t.__reactInternalMemoizedMaskedChildContext = d), n;
  }
  function nv(t, n, l, s) {
    t = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(l, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(l, s), n.state !== t && Kl.enqueueReplaceState(n, n.state, null);
  }
  function rf(t, n, l, s) {
    var p = t.stateNode;
    p.props = l, p.state = t.memoizedState, p.refs = $g, tf(t);
    var d = n.contextType;
    typeof d == "object" && d !== null ? p.context = Kt(d) : (d = Ht(n) ? _r : pt.current, p.context = xo(t, d)), p.state = t.memoizedState, typeof (d = n.getDerivedStateFromProps) == "function" && (nf(t, n, d, l), p.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (n = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), n !== p.state && Kl.enqueueReplaceState(p, p.state, null), Yl(t, l, p, s), p.state = t.memoizedState), typeof p.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function Zi(t, n, l) {
    if ((t = l.ref) !== null && typeof t != "function" && typeof t != "object") {
      if (l._owner) {
        if (l = l._owner) {
          if (l.tag !== 1)
            throw Error(i(309));
          var s = l.stateNode;
        }
        if (!s)
          throw Error(i(147, t));
        var p = s, d = "" + t;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === d ? n.ref : (n = function(g) {
          var w = p.refs;
          w === $g && (w = p.refs = {}), g === null ? delete w[d] : w[d] = g;
        }, n._stringRef = d, n);
      }
      if (typeof t != "string")
        throw Error(i(284));
      if (!l._owner)
        throw Error(i(290, t));
    }
    return t;
  }
  function Zl(t, n) {
    throw t = Object.prototype.toString.call(n), Error(i(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t));
  }
  function rv(t) {
    return (0, t._init)(t._payload);
  }
  function ov(t) {
    function n(R, C) {
      if (t) {
        var O = R.deletions;
        O === null ? (R.deletions = [C], R.flags |= 16) : O.push(C);
      }
    }
    function l(R, C) {
      if (!t)
        return null;
      for (; C !== null; )
        n(R, C), C = C.sibling;
      return null;
    }
    function s(R, C) {
      for (R = /* @__PURE__ */ new Map(); C !== null; )
        C.key !== null ? R.set(C.key, C) : R.set(C.index, C), C = C.sibling;
      return R;
    }
    function p(R, C) {
      return (R = ur(R, C)).index = 0, R.sibling = null, R;
    }
    function d(R, C, O) {
      return R.index = O, t ? (O = R.alternate) !== null ? (O = O.index) < C ? (R.flags |= 2, C) : O : (R.flags |= 2, C) : (R.flags |= 1048576, C);
    }
    function g(R) {
      return t && R.alternate === null && (R.flags |= 2), R;
    }
    function w(R, C, O, B) {
      return C === null || C.tag !== 6 ? ((C = Bf(O, R.mode, B)).return = R, C) : ((C = p(C, O)).return = R, C);
    }
    function x(R, C, O, B) {
      var q = O.type;
      return q === Q ? P(R, C, O.props.children, B, O.key) : C !== null && (C.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Me && rv(q) === C.type) ? ((B = p(C, O.props)).ref = Zi(R, C, O), B.return = R, B) : ((B = ms(O.type, O.key, O.props, null, R.mode, B)).ref = Zi(R, C, O), B.return = R, B);
    }
    function T(R, C, O, B) {
      return C === null || C.tag !== 4 || C.stateNode.containerInfo !== O.containerInfo || C.stateNode.implementation !== O.implementation ? ((C = zf(O, R.mode, B)).return = R, C) : ((C = p(C, O.children || [])).return = R, C);
    }
    function P(R, C, O, B, q) {
      return C === null || C.tag !== 7 ? ((C = Gr(O, R.mode, B, q)).return = R, C) : ((C = p(C, O)).return = R, C);
    }
    function j(R, C, O) {
      if (typeof C == "string" && C !== "" || typeof C == "number")
        return (C = Bf("" + C, R.mode, O)).return = R, C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case L:
            return (O = ms(C.type, C.key, C.props, null, R.mode, O)).ref = Zi(R, null, C), O.return = R, O;
          case V:
            return (C = zf(C, R.mode, O)).return = R, C;
          case Me:
            return j(R, (0, C._init)(C._payload), O);
        }
        if (Ti(C) || Ue(C))
          return (C = Gr(C, R.mode, O, null)).return = R, C;
        Zl(R, C);
      }
      return null;
    }
    function I(R, C, O, B) {
      var q = C !== null ? C.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number")
        return q !== null ? null : w(R, C, "" + O, B);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case L:
            return O.key === q ? x(R, C, O, B) : null;
          case V:
            return O.key === q ? T(R, C, O, B) : null;
          case Me:
            return I(R, C, (q = O._init)(O._payload), B);
        }
        if (Ti(O) || Ue(O))
          return q !== null ? null : P(R, C, O, B, null);
        Zl(R, O);
      }
      return null;
    }
    function F(R, C, O, B, q) {
      if (typeof B == "string" && B !== "" || typeof B == "number")
        return w(C, R = R.get(O) || null, "" + B, q);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case L:
            return x(C, R = R.get(B.key === null ? O : B.key) || null, B, q);
          case V:
            return T(C, R = R.get(B.key === null ? O : B.key) || null, B, q);
          case Me:
            return F(R, C, O, (0, B._init)(B._payload), q);
        }
        if (Ti(B) || Ue(B))
          return P(C, R = R.get(O) || null, B, q, null);
        Zl(C, B);
      }
      return null;
    }
    function U(R, C, O, B) {
      for (var q = null, se = null, Z = C, fe = C = 0, ie = null; Z !== null && fe < O.length; fe++) {
        Z.index > fe ? (ie = Z, Z = null) : ie = Z.sibling;
        var ae = I(R, Z, O[fe], B);
        if (ae === null) {
          Z === null && (Z = ie);
          break;
        }
        t && Z && ae.alternate === null && n(R, Z), C = d(ae, C, fe), se === null ? q = ae : se.sibling = ae, se = ae, Z = ie;
      }
      if (fe === O.length)
        return l(R, Z), Ve && Dr(R, fe), q;
      if (Z === null) {
        for (; fe < O.length; fe++)
          (Z = j(R, O[fe], B)) !== null && (C = d(Z, C, fe), se === null ? q = Z : se.sibling = Z, se = Z);
        return Ve && Dr(R, fe), q;
      }
      for (Z = s(R, Z); fe < O.length; fe++)
        (ie = F(Z, R, fe, O[fe], B)) !== null && (t && ie.alternate !== null && Z.delete(ie.key === null ? fe : ie.key), C = d(ie, C, fe), se === null ? q = ie : se.sibling = ie, se = ie);
      return t && Z.forEach(function(Ae) {
        return n(R, Ae);
      }), Ve && Dr(R, fe), q;
    }
    function W(R, C, O, B) {
      var q = Ue(O);
      if (typeof q != "function")
        throw Error(i(150));
      if ((O = q.call(O)) == null)
        throw Error(i(151));
      for (var se = q = null, Z = C, fe = C = 0, ie = null, ae = O.next(); Z !== null && !ae.done; fe++, ae = O.next()) {
        Z.index > fe ? (ie = Z, Z = null) : ie = Z.sibling;
        var Ae = I(R, Z, ae.value, B);
        if (Ae === null) {
          Z === null && (Z = ie);
          break;
        }
        t && Z && Ae.alternate === null && n(R, Z), C = d(Ae, C, fe), se === null ? q = Ae : se.sibling = Ae, se = Ae, Z = ie;
      }
      if (ae.done)
        return l(R, Z), Ve && Dr(R, fe), q;
      if (Z === null) {
        for (; !ae.done; fe++, ae = O.next())
          (ae = j(R, ae.value, B)) !== null && (C = d(ae, C, fe), se === null ? q = ae : se.sibling = ae, se = ae);
        return Ve && Dr(R, fe), q;
      }
      for (Z = s(R, Z); !ae.done; fe++, ae = O.next())
        (ae = F(Z, R, fe, ae.value, B)) !== null && (t && ae.alternate !== null && Z.delete(ae.key === null ? fe : ae.key), C = d(ae, C, fe), se === null ? q = ae : se.sibling = ae, se = ae);
      return t && Z.forEach(function(Do) {
        return n(R, Do);
      }), Ve && Dr(R, fe), q;
    }
    return function R(C, O, B, q) {
      if (typeof B == "object" && B !== null && B.type === Q && B.key === null && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case L:
            e: {
              for (var se = B.key, Z = O; Z !== null; ) {
                if (Z.key === se) {
                  if ((se = B.type) === Q) {
                    if (Z.tag === 7) {
                      l(C, Z.sibling), (O = p(Z, B.props.children)).return = C, C = O;
                      break e;
                    }
                  } else if (Z.elementType === se || typeof se == "object" && se !== null && se.$$typeof === Me && rv(se) === Z.type) {
                    l(C, Z.sibling), (O = p(Z, B.props)).ref = Zi(C, Z, B), O.return = C, C = O;
                    break e;
                  }
                  l(C, Z);
                  break;
                }
                n(C, Z), Z = Z.sibling;
              }
              B.type === Q ? ((O = Gr(B.props.children, C.mode, q, B.key)).return = C, C = O) : ((q = ms(B.type, B.key, B.props, null, C.mode, q)).ref = Zi(C, O, B), q.return = C, C = q);
            }
            return g(C);
          case V:
            e: {
              for (Z = B.key; O !== null; ) {
                if (O.key === Z) {
                  if (O.tag === 4 && O.stateNode.containerInfo === B.containerInfo && O.stateNode.implementation === B.implementation) {
                    l(C, O.sibling), (O = p(O, B.children || [])).return = C, C = O;
                    break e;
                  }
                  l(C, O);
                  break;
                }
                n(C, O), O = O.sibling;
              }
              (O = zf(B, C.mode, q)).return = C, C = O;
            }
            return g(C);
          case Me:
            return R(C, O, (Z = B._init)(B._payload), q);
        }
        if (Ti(B))
          return U(C, O, B, q);
        if (Ue(B))
          return W(C, O, B, q);
        Zl(C, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" ? (B = "" + B, O !== null && O.tag === 6 ? (l(C, O.sibling), (O = p(O, B)).return = C, C = O) : (l(C, O), (O = Bf(B, C.mode, q)).return = C, C = O), g(C)) : l(C, O);
    };
  }
  var No = ov(!0), iv = ov(!1), qi = {}, yn = Jn(qi), Ji = Jn(qi), $i = Jn(qi);
  function Hr(t) {
    if (t === qi)
      throw Error(i(174));
    return t;
  }
  function of(t, n) {
    switch (Ie($i, n), Ie(Ji, t), Ie(yn, qi), t = n.nodeType) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : qu(null, "");
        break;
      default:
        n = qu(n = (t = t === 8 ? n.parentNode : n).namespaceURI || null, t = t.tagName);
    }
    Ge(yn), Ie(yn, n);
  }
  function Po() {
    Ge(yn), Ge(Ji), Ge($i);
  }
  function av(t) {
    Hr($i.current);
    var n = Hr(yn.current), l = qu(n, t.type);
    n !== l && (Ie(Ji, t), Ie(yn, l));
  }
  function af(t) {
    Ji.current === t && (Ge(yn), Ge(Ji));
  }
  var Qe = Jn(0);
  function ql(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var l = n.memoizedState;
        if (l !== null && ((l = l.dehydrated) === null || l.data === "$?" || l.data === "$!"))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((128 & n.flags) != 0)
          return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var lf = [];
  function sf() {
    for (var t = 0; t < lf.length; t++)
      lf[t]._workInProgressVersionPrimary = null;
    lf.length = 0;
  }
  var Jl = D.ReactCurrentDispatcher, uf = D.ReactCurrentBatchConfig, Fr = 0, Xe = null, at = null, lt = null, $l = !1, ea = !1, ta = 0, Z3 = 0;
  function dt() {
    throw Error(i(321));
  }
  function cf(t, n) {
    if (n === null)
      return !1;
    for (var l = 0; l < n.length && l < t.length; l++)
      if (!sn(t[l], n[l]))
        return !1;
    return !0;
  }
  function ff(t, n, l, s, p, d) {
    if (Fr = d, Xe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Jl.current = t === null || t.memoizedState === null ? eS : tS, t = l(s, p), ea) {
      d = 0;
      do {
        if (ea = !1, ta = 0, 25 <= d)
          throw Error(i(301));
        d += 1, lt = at = null, n.updateQueue = null, Jl.current = nS, t = l(s, p);
      } while (ea);
    }
    if (Jl.current = ns, n = at !== null && at.next !== null, Fr = 0, lt = at = Xe = null, $l = !1, n)
      throw Error(i(300));
    return t;
  }
  function pf() {
    var t = ta !== 0;
    return ta = 0, t;
  }
  function bn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return lt === null ? Xe.memoizedState = lt = t : lt = lt.next = t, lt;
  }
  function Zt() {
    if (at === null) {
      var t = Xe.alternate;
      t = t !== null ? t.memoizedState : null;
    } else
      t = at.next;
    var n = lt === null ? Xe.memoizedState : lt.next;
    if (n !== null)
      lt = n, at = t;
    else {
      if (t === null)
        throw Error(i(310));
      t = { memoizedState: (at = t).memoizedState, baseState: at.baseState, baseQueue: at.baseQueue, queue: at.queue, next: null }, lt === null ? Xe.memoizedState = lt = t : lt = lt.next = t;
    }
    return lt;
  }
  function na(t, n) {
    return typeof n == "function" ? n(t) : n;
  }
  function df(t) {
    var n = Zt(), l = n.queue;
    if (l === null)
      throw Error(i(311));
    l.lastRenderedReducer = t;
    var s = at, p = s.baseQueue, d = l.pending;
    if (d !== null) {
      if (p !== null) {
        var g = p.next;
        p.next = d.next, d.next = g;
      }
      s.baseQueue = p = d, l.pending = null;
    }
    if (p !== null) {
      d = p.next, s = s.baseState;
      var w = g = null, x = null, T = d;
      do {
        var P = T.lane;
        if ((Fr & P) === P)
          x !== null && (x = x.next = { lane: 0, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null }), s = T.hasEagerState ? T.eagerState : t(s, T.action);
        else {
          var j = { lane: P, action: T.action, hasEagerState: T.hasEagerState, eagerState: T.eagerState, next: null };
          x === null ? (w = x = j, g = s) : x = x.next = j, Xe.lanes |= P, Br |= P;
        }
        T = T.next;
      } while (T !== null && T !== d);
      x === null ? g = s : x.next = w, sn(s, n.memoizedState) || (Tt = !0), n.memoizedState = s, n.baseState = g, n.baseQueue = x, l.lastRenderedState = s;
    }
    if ((t = l.interleaved) !== null) {
      p = t;
      do
        d = p.lane, Xe.lanes |= d, Br |= d, p = p.next;
      while (p !== t);
    } else
      p === null && (l.lanes = 0);
    return [n.memoizedState, l.dispatch];
  }
  function hf(t) {
    var n = Zt(), l = n.queue;
    if (l === null)
      throw Error(i(311));
    l.lastRenderedReducer = t;
    var s = l.dispatch, p = l.pending, d = n.memoizedState;
    if (p !== null) {
      l.pending = null;
      var g = p = p.next;
      do
        d = t(d, g.action), g = g.next;
      while (g !== p);
      sn(d, n.memoizedState) || (Tt = !0), n.memoizedState = d, n.baseQueue === null && (n.baseState = d), l.lastRenderedState = d;
    }
    return [d, s];
  }
  function lv() {
  }
  function sv(t, n) {
    var l = Xe, s = Zt(), p = n(), d = !sn(s.memoizedState, p);
    if (d && (s.memoizedState = p, Tt = !0), s = s.queue, mf(fv.bind(null, l, s, t), [t]), s.getSnapshot !== n || d || lt !== null && 1 & lt.memoizedState.tag) {
      if (l.flags |= 2048, ra(9, cv.bind(null, l, s, p, n), void 0, null), st === null)
        throw Error(i(349));
      (30 & Fr) != 0 || uv(l, n, p);
    }
    return p;
  }
  function uv(t, n, l) {
    t.flags |= 16384, t = { getSnapshot: n, value: l }, (n = Xe.updateQueue) === null ? (n = { lastEffect: null, stores: null }, Xe.updateQueue = n, n.stores = [t]) : (l = n.stores) === null ? n.stores = [t] : l.push(t);
  }
  function cv(t, n, l, s) {
    n.value = l, n.getSnapshot = s, pv(n) && dv(t);
  }
  function fv(t, n, l) {
    return l(function() {
      pv(n) && dv(t);
    });
  }
  function pv(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var l = n();
      return !sn(t, l);
    } catch {
      return !0;
    }
  }
  function dv(t) {
    var n = _n(t, 1);
    n !== null && fn(n, t, 1, -1);
  }
  function hv(t) {
    var n = bn();
    return typeof t == "function" && (t = t()), n.memoizedState = n.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: na, lastRenderedState: t }, n.queue = t, t = t.dispatch = $3.bind(null, Xe, t), [n.memoizedState, t];
  }
  function ra(t, n, l, s) {
    return t = { tag: t, create: n, destroy: l, deps: s, next: null }, (n = Xe.updateQueue) === null ? (n = { lastEffect: null, stores: null }, Xe.updateQueue = n, n.lastEffect = t.next = t) : (l = n.lastEffect) === null ? n.lastEffect = t.next = t : (s = l.next, l.next = t, t.next = s, n.lastEffect = t), t;
  }
  function mv() {
    return Zt().memoizedState;
  }
  function es(t, n, l, s) {
    var p = bn();
    Xe.flags |= t, p.memoizedState = ra(1 | n, l, void 0, s === void 0 ? null : s);
  }
  function ts(t, n, l, s) {
    var p = Zt();
    s = s === void 0 ? null : s;
    var d = void 0;
    if (at !== null) {
      var g = at.memoizedState;
      if (d = g.destroy, s !== null && cf(s, g.deps))
        return void (p.memoizedState = ra(n, l, d, s));
    }
    Xe.flags |= t, p.memoizedState = ra(1 | n, l, d, s);
  }
  function gv(t, n) {
    return es(8390656, 8, t, n);
  }
  function mf(t, n) {
    return ts(2048, 8, t, n);
  }
  function vv(t, n) {
    return ts(4, 2, t, n);
  }
  function yv(t, n) {
    return ts(4, 4, t, n);
  }
  function bv(t, n) {
    return typeof n == "function" ? (t = t(), n(t), function() {
      n(null);
    }) : n != null ? (t = t(), n.current = t, function() {
      n.current = null;
    }) : void 0;
  }
  function wv(t, n, l) {
    return l = l != null ? l.concat([t]) : null, ts(4, 4, bv.bind(null, n, t), l);
  }
  function gf() {
  }
  function kv(t, n) {
    var l = Zt();
    n = n === void 0 ? null : n;
    var s = l.memoizedState;
    return s !== null && n !== null && cf(n, s[1]) ? s[0] : (l.memoizedState = [t, n], t);
  }
  function xv(t, n) {
    var l = Zt();
    n = n === void 0 ? null : n;
    var s = l.memoizedState;
    return s !== null && n !== null && cf(n, s[1]) ? s[0] : (t = t(), l.memoizedState = [t, n], t);
  }
  function Ev(t, n, l) {
    return (21 & Fr) == 0 ? (t.baseState && (t.baseState = !1, Tt = !0), t.memoizedState = l) : (sn(l, n) || (l = Km(), Xe.lanes |= l, Br |= l, t.baseState = !0), n);
  }
  function q3(t, n) {
    var l = Le;
    Le = l !== 0 && 4 > l ? l : 4, t(!0);
    var s = uf.transition;
    uf.transition = {};
    try {
      t(!1), n();
    } finally {
      Le = l, uf.transition = s;
    }
  }
  function Sv() {
    return Zt().memoizedState;
  }
  function J3(t, n, l) {
    var s = lr(t);
    l = { lane: s, action: l, hasEagerState: !1, eagerState: null, next: null }, Cv(t) ? Tv(n, l) : (l = Kg(t, n, l, s)) !== null && (fn(l, t, s, xt()), Av(l, n, s));
  }
  function $3(t, n, l) {
    var s = lr(t), p = { lane: s, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Cv(t))
      Tv(n, p);
    else {
      var d = t.alternate;
      if (t.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer) !== null)
        try {
          var g = n.lastRenderedState, w = d(g, l);
          if (p.hasEagerState = !0, p.eagerState = w, sn(w, g)) {
            var x = n.interleaved;
            return x === null ? (p.next = p, ef(n)) : (p.next = x.next, x.next = p), void (n.interleaved = p);
          }
        } catch {
        }
      (l = Kg(t, n, p, s)) !== null && (fn(l, t, s, p = xt()), Av(l, n, s));
    }
  }
  function Cv(t) {
    var n = t.alternate;
    return t === Xe || n !== null && n === Xe;
  }
  function Tv(t, n) {
    ea = $l = !0;
    var l = t.pending;
    l === null ? n.next = n : (n.next = l.next, l.next = n), t.pending = n;
  }
  function Av(t, n, l) {
    if ((4194240 & l) != 0) {
      var s = n.lanes;
      l |= s &= t.pendingLanes, n.lanes = l, hc(t, l);
    }
  }
  var ns = { readContext: Kt, useCallback: dt, useContext: dt, useEffect: dt, useImperativeHandle: dt, useInsertionEffect: dt, useLayoutEffect: dt, useMemo: dt, useReducer: dt, useRef: dt, useState: dt, useDebugValue: dt, useDeferredValue: dt, useTransition: dt, useMutableSource: dt, useSyncExternalStore: dt, useId: dt, unstable_isNewReconciler: !1 }, eS = { readContext: Kt, useCallback: function(t, n) {
    return bn().memoizedState = [t, n === void 0 ? null : n], t;
  }, useContext: Kt, useEffect: gv, useImperativeHandle: function(t, n, l) {
    return l = l != null ? l.concat([t]) : null, es(4194308, 4, bv.bind(null, n, t), l);
  }, useLayoutEffect: function(t, n) {
    return es(4194308, 4, t, n);
  }, useInsertionEffect: function(t, n) {
    return es(4, 2, t, n);
  }, useMemo: function(t, n) {
    var l = bn();
    return n = n === void 0 ? null : n, t = t(), l.memoizedState = [t, n], t;
  }, useReducer: function(t, n, l) {
    var s = bn();
    return n = l !== void 0 ? l(n) : n, s.memoizedState = s.baseState = n, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: n }, s.queue = t, t = t.dispatch = J3.bind(null, Xe, t), [s.memoizedState, t];
  }, useRef: function(t) {
    return t = { current: t }, bn().memoizedState = t;
  }, useState: hv, useDebugValue: gf, useDeferredValue: function(t) {
    return bn().memoizedState = t;
  }, useTransition: function() {
    var t = hv(!1), n = t[0];
    return t = q3.bind(null, t[1]), bn().memoizedState = t, [n, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, n, l) {
    var s = Xe, p = bn();
    if (Ve) {
      if (l === void 0)
        throw Error(i(407));
      l = l();
    } else {
      if (l = n(), st === null)
        throw Error(i(349));
      (30 & Fr) != 0 || uv(s, n, l);
    }
    p.memoizedState = l;
    var d = { value: l, getSnapshot: n };
    return p.queue = d, gv(fv.bind(null, s, d, t), [t]), s.flags |= 2048, ra(9, cv.bind(null, s, d, l, n), void 0, null), l;
  }, useId: function() {
    var t = bn(), n = st.identifierPrefix;
    if (Ve) {
      var l = In;
      n = ":" + n + "R" + (l = (vn & ~(1 << 32 - ln(vn) - 1)).toString(32) + l), 0 < (l = ta++) && (n += "H" + l.toString(32)), n += ":";
    } else
      n = ":" + n + "r" + (l = Z3++).toString(32) + ":";
    return t.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, tS = { readContext: Kt, useCallback: kv, useContext: Kt, useEffect: mf, useImperativeHandle: wv, useInsertionEffect: vv, useLayoutEffect: yv, useMemo: xv, useReducer: df, useRef: mv, useState: function() {
    return df(na);
  }, useDebugValue: gf, useDeferredValue: function(t) {
    return Ev(Zt(), at.memoizedState, t);
  }, useTransition: function() {
    return [df(na)[0], Zt().memoizedState];
  }, useMutableSource: lv, useSyncExternalStore: sv, useId: Sv, unstable_isNewReconciler: !1 }, nS = { readContext: Kt, useCallback: kv, useContext: Kt, useEffect: mf, useImperativeHandle: wv, useInsertionEffect: vv, useLayoutEffect: yv, useMemo: xv, useReducer: hf, useRef: mv, useState: function() {
    return hf(na);
  }, useDebugValue: gf, useDeferredValue: function(t) {
    var n = Zt();
    return at === null ? n.memoizedState = t : Ev(n, at.memoizedState, t);
  }, useTransition: function() {
    return [hf(na)[0], Zt().memoizedState];
  }, useMutableSource: lv, useSyncExternalStore: sv, useId: Sv, unstable_isNewReconciler: !1 };
  function Oo(t, n) {
    try {
      var l = "", s = n;
      do
        l += pe(s), s = s.return;
      while (s);
      var p = l;
    } catch (d) {
      p = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: t, source: n, stack: p, digest: null };
  }
  function vf(t, n, l) {
    return { value: t, source: null, stack: l != null ? l : null, digest: n != null ? n : null };
  }
  function yf(t, n) {
    try {
      console.error(n.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var rS = typeof WeakMap == "function" ? WeakMap : Map;
  function Nv(t, n, l) {
    (l = Rn(-1, l)).tag = 3, l.payload = { element: null };
    var s = n.value;
    return l.callback = function() {
      us || (us = !0, Mf = s), yf(0, n);
    }, l;
  }
  function Pv(t, n, l) {
    (l = Rn(-1, l)).tag = 3;
    var s = t.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var p = n.value;
      l.payload = function() {
        return s(p);
      }, l.callback = function() {
        yf(0, n);
      };
    }
    var d = t.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      yf(0, n), typeof s != "function" && (ir === null ? ir = /* @__PURE__ */ new Set([this]) : ir.add(this));
      var g = n.stack;
      this.componentDidCatch(n.value, { componentStack: g !== null ? g : "" });
    }), l;
  }
  function Ov(t, n, l) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new rS();
      var p = /* @__PURE__ */ new Set();
      s.set(n, p);
    } else
      (p = s.get(n)) === void 0 && (p = /* @__PURE__ */ new Set(), s.set(n, p));
    p.has(l) || (p.add(l), t = pS.bind(null, t, n, l), n.then(t, t));
  }
  function Lv(t) {
    do {
      var n;
      if ((n = t.tag === 13) && (n = (n = t.memoizedState) === null || n.dehydrated !== null), n)
        return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function Mv(t, n, l, s, p) {
    return (1 & t.mode) == 0 ? (t === n ? t.flags |= 65536 : (t.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : ((n = Rn(-1, 1)).tag = 2, nr(l, n, 1))), l.lanes |= 1), t) : (t.flags |= 65536, t.lanes = p, t);
  }
  var oS = D.ReactCurrentOwner, Tt = !1;
  function At(t, n, l, s) {
    n.child = t === null ? iv(n, null, l, s) : No(n, t.child, l, s);
  }
  function Iv(t, n, l, s, p) {
    l = l.render;
    var d = n.ref;
    return Ao(n, p), s = ff(t, n, l, s, d, p), l = pf(), t === null || Tt ? (Ve && l && Wc(n), n.flags |= 1, At(t, n, s, p), n.child) : (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~p, Dn(t, n, p));
  }
  function _v(t, n, l, s, p) {
    if (t === null) {
      var d = l.type;
      return typeof d != "function" || Ff(d) || d.defaultProps !== void 0 || l.compare !== null || l.defaultProps !== void 0 ? ((t = ms(l.type, null, s, n, n.mode, p)).ref = n.ref, t.return = n, n.child = t) : (n.tag = 15, n.type = d, Rv(t, n, d, s, p));
    }
    if (d = t.child, (t.lanes & p) == 0) {
      var g = d.memoizedProps;
      if ((l = (l = l.compare) !== null ? l : Gi)(g, s) && t.ref === n.ref)
        return Dn(t, n, p);
    }
    return n.flags |= 1, (t = ur(d, s)).ref = n.ref, t.return = n, n.child = t;
  }
  function Rv(t, n, l, s, p) {
    if (t !== null) {
      var d = t.memoizedProps;
      if (Gi(d, s) && t.ref === n.ref) {
        if (Tt = !1, n.pendingProps = s = d, (t.lanes & p) == 0)
          return n.lanes = t.lanes, Dn(t, n, p);
        (131072 & t.flags) != 0 && (Tt = !0);
      }
    }
    return bf(t, n, l, s, p);
  }
  function Dv(t, n, l) {
    var s = n.pendingProps, p = s.children, d = t !== null ? t.memoizedState : null;
    if (s.mode === "hidden")
      if ((1 & n.mode) == 0)
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ie(Mo, zt), zt |= l;
      else {
        if ((1073741824 & l) == 0)
          return t = d !== null ? d.baseLanes | l : l, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, n.updateQueue = null, Ie(Mo, zt), zt |= t, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = d !== null ? d.baseLanes : l, Ie(Mo, zt), zt |= s;
      }
    else
      d !== null ? (s = d.baseLanes | l, n.memoizedState = null) : s = l, Ie(Mo, zt), zt |= s;
    return At(t, n, p, l), n.child;
  }
  function jv(t, n) {
    var l = n.ref;
    (t === null && l !== null || t !== null && t.ref !== l) && (n.flags |= 512, n.flags |= 2097152);
  }
  function bf(t, n, l, s, p) {
    var d = Ht(l) ? _r : pt.current;
    return d = xo(n, d), Ao(n, p), l = ff(t, n, l, s, d, p), s = pf(), t === null || Tt ? (Ve && s && Wc(n), n.flags |= 1, At(t, n, l, p), n.child) : (n.updateQueue = t.updateQueue, n.flags &= -2053, t.lanes &= ~p, Dn(t, n, p));
  }
  function Hv(t, n, l, s, p) {
    if (Ht(l)) {
      var d = !0;
      Bl(n);
    } else
      d = !1;
    if (Ao(n, p), n.stateNode === null)
      os(t, n), tv(n, l, s), rf(n, l, s, p), s = !0;
    else if (t === null) {
      var g = n.stateNode, w = n.memoizedProps;
      g.props = w;
      var x = g.context, T = l.contextType;
      typeof T == "object" && T !== null ? T = Kt(T) : T = xo(n, T = Ht(l) ? _r : pt.current);
      var P = l.getDerivedStateFromProps, j = typeof P == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      j || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (w !== s || x !== T) && nv(n, g, s, T), tr = !1;
      var I = n.memoizedState;
      g.state = I, Yl(n, s, g, p), x = n.memoizedState, w !== s || I !== x || Ct.current || tr ? (typeof P == "function" && (nf(n, l, P, s), x = n.memoizedState), (w = tr || ev(n, l, w, s, I, x, T)) ? (j || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = x), g.props = s, g.state = x, g.context = T, s = w) : (typeof g.componentDidMount == "function" && (n.flags |= 4194308), s = !1);
    } else {
      g = n.stateNode, Zg(t, n), w = n.memoizedProps, T = n.type === n.elementType ? w : cn(n.type, w), g.props = T, j = n.pendingProps, I = g.context, typeof (x = l.contextType) == "object" && x !== null ? x = Kt(x) : x = xo(n, x = Ht(l) ? _r : pt.current);
      var F = l.getDerivedStateFromProps;
      (P = typeof F == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (w !== j || I !== x) && nv(n, g, s, x), tr = !1, I = n.memoizedState, g.state = I, Yl(n, s, g, p);
      var U = n.memoizedState;
      w !== j || I !== U || Ct.current || tr ? (typeof F == "function" && (nf(n, l, F, s), U = n.memoizedState), (T = tr || ev(n, l, T, s, I, U, x) || !1) ? (P || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(s, U, x), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(s, U, x)), typeof g.componentDidUpdate == "function" && (n.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || w === t.memoizedProps && I === t.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || w === t.memoizedProps && I === t.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = U), g.props = s, g.state = U, g.context = x, s = T) : (typeof g.componentDidUpdate != "function" || w === t.memoizedProps && I === t.memoizedState || (n.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || w === t.memoizedProps && I === t.memoizedState || (n.flags |= 1024), s = !1);
    }
    return wf(t, n, l, s, d, p);
  }
  function wf(t, n, l, s, p, d) {
    jv(t, n);
    var g = (128 & n.flags) != 0;
    if (!s && !g)
      return p && Ug(n, l, !1), Dn(t, n, d);
    s = n.stateNode, oS.current = n;
    var w = g && typeof l.getDerivedStateFromError != "function" ? null : s.render();
    return n.flags |= 1, t !== null && g ? (n.child = No(n, t.child, null, d), n.child = No(n, null, w, d)) : At(t, n, w, d), n.memoizedState = s.state, p && Ug(n, l, !0), n.child;
  }
  function Fv(t) {
    var n = t.stateNode;
    n.pendingContext ? Bg(0, n.pendingContext, n.pendingContext !== n.context) : n.context && Bg(0, n.context, !1), of(t, n.containerInfo);
  }
  function Bv(t, n, l, s, p) {
    return Co(), Kc(p), n.flags |= 256, At(t, n, l, s), n.child;
  }
  var zv, kf, Uv, Gv, xf = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ef(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function Vv(t, n, l) {
    var s, p = n.pendingProps, d = Qe.current, g = !1, w = (128 & n.flags) != 0;
    if ((s = w) || (s = (t === null || t.memoizedState !== null) && (2 & d) != 0), s ? (g = !0, n.flags &= -129) : t !== null && t.memoizedState === null || (d |= 1), Ie(Qe, 1 & d), t === null)
      return Yc(n), (t = n.memoizedState) !== null && (t = t.dehydrated) !== null ? ((1 & n.mode) == 0 ? n.lanes = 1 : t.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (w = p.children, t = p.fallback, g ? (p = n.mode, g = n.child, w = { mode: "hidden", children: w }, (1 & p) == 0 && g !== null ? (g.childLanes = 0, g.pendingProps = w) : g = gs(w, p, 0, null), t = Gr(t, p, l, null), g.return = n, t.return = n, g.sibling = t, n.child = g, n.child.memoizedState = Ef(l), n.memoizedState = xf, t) : Sf(n, w));
    if ((d = t.memoizedState) !== null && (s = d.dehydrated) !== null)
      return function(T, P, j, I, F, U, W) {
        if (j)
          return 256 & P.flags ? (P.flags &= -257, rs(T, P, W, I = vf(Error(i(422))))) : P.memoizedState !== null ? (P.child = T.child, P.flags |= 128, null) : (U = I.fallback, F = P.mode, I = gs({ mode: "visible", children: I.children }, F, 0, null), (U = Gr(U, F, W, null)).flags |= 2, I.return = P, U.return = P, I.sibling = U, P.child = I, (1 & P.mode) != 0 && No(P, T.child, null, W), P.child.memoizedState = Ef(W), P.memoizedState = xf, U);
        if ((1 & P.mode) == 0)
          return rs(T, P, W, null);
        if (F.data === "$!") {
          if (I = F.nextSibling && F.nextSibling.dataset)
            var R = I.dgst;
          return I = R, rs(T, P, W, I = vf(U = Error(i(419)), I, void 0));
        }
        if (R = (W & T.childLanes) != 0, Tt || R) {
          if ((I = st) !== null) {
            switch (W & -W) {
              case 4:
                F = 2;
                break;
              case 16:
                F = 8;
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
                F = 32;
                break;
              case 536870912:
                F = 268435456;
                break;
              default:
                F = 0;
            }
            (F = (F & (I.suspendedLanes | W)) != 0 ? 0 : F) !== 0 && F !== U.retryLane && (U.retryLane = F, _n(T, F), fn(I, T, F, -1));
          }
          return Hf(), rs(T, P, W, I = vf(Error(i(421))));
        }
        return F.data === "$?" ? (P.flags |= 128, P.child = T.child, P = dS.bind(null, T), F._reactRetry = P, null) : (T = U.treeContext, Bt = qn(F.nextSibling), Ft = P, Ve = !0, un = null, T !== null && (Qt[Yt++] = vn, Qt[Yt++] = In, Qt[Yt++] = Rr, vn = T.id, In = T.overflow, Rr = P), P = Sf(P, I.children), P.flags |= 4096, P);
      }(t, n, w, p, s, d, l);
    if (g) {
      g = p.fallback, w = n.mode, s = (d = t.child).sibling;
      var x = { mode: "hidden", children: p.children };
      return (1 & w) == 0 && n.child !== d ? ((p = n.child).childLanes = 0, p.pendingProps = x, n.deletions = null) : (p = ur(d, x)).subtreeFlags = 14680064 & d.subtreeFlags, s !== null ? g = ur(s, g) : (g = Gr(g, w, l, null)).flags |= 2, g.return = n, p.return = n, p.sibling = g, n.child = p, p = g, g = n.child, w = (w = t.child.memoizedState) === null ? Ef(l) : { baseLanes: w.baseLanes | l, cachePool: null, transitions: w.transitions }, g.memoizedState = w, g.childLanes = t.childLanes & ~l, n.memoizedState = xf, p;
    }
    return t = (g = t.child).sibling, p = ur(g, { mode: "visible", children: p.children }), (1 & n.mode) == 0 && (p.lanes = l), p.return = n, p.sibling = null, t !== null && ((l = n.deletions) === null ? (n.deletions = [t], n.flags |= 16) : l.push(t)), n.child = p, n.memoizedState = null, p;
  }
  function Sf(t, n) {
    return (n = gs({ mode: "visible", children: n }, t.mode, 0, null)).return = t, t.child = n;
  }
  function rs(t, n, l, s) {
    return s !== null && Kc(s), No(n, t.child, null, l), (t = Sf(n, n.pendingProps.children)).flags |= 2, n.memoizedState = null, t;
  }
  function Wv(t, n, l) {
    t.lanes |= n;
    var s = t.alternate;
    s !== null && (s.lanes |= n), $c(t.return, n, l);
  }
  function Cf(t, n, l, s, p) {
    var d = t.memoizedState;
    d === null ? t.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: s, tail: l, tailMode: p } : (d.isBackwards = n, d.rendering = null, d.renderingStartTime = 0, d.last = s, d.tail = l, d.tailMode = p);
  }
  function Xv(t, n, l) {
    var s = n.pendingProps, p = s.revealOrder, d = s.tail;
    if (At(t, n, s.children, l), (2 & (s = Qe.current)) != 0)
      s = 1 & s | 2, n.flags |= 128;
    else {
      if (t !== null && (128 & t.flags) != 0)
        e:
          for (t = n.child; t !== null; ) {
            if (t.tag === 13)
              t.memoizedState !== null && Wv(t, l, n);
            else if (t.tag === 19)
              Wv(t, l, n);
            else if (t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === n)
              break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === n)
                break e;
              t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
          }
      s &= 1;
    }
    if (Ie(Qe, s), (1 & n.mode) == 0)
      n.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (l = n.child, p = null; l !== null; )
            (t = l.alternate) !== null && ql(t) === null && (p = l), l = l.sibling;
          (l = p) === null ? (p = n.child, n.child = null) : (p = l.sibling, l.sibling = null), Cf(n, !1, p, l, d);
          break;
        case "backwards":
          for (l = null, p = n.child, n.child = null; p !== null; ) {
            if ((t = p.alternate) !== null && ql(t) === null) {
              n.child = p;
              break;
            }
            t = p.sibling, p.sibling = l, l = p, p = t;
          }
          Cf(n, !0, l, null, d);
          break;
        case "together":
          Cf(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function os(t, n) {
    (1 & n.mode) == 0 && t !== null && (t.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Dn(t, n, l) {
    if (t !== null && (n.dependencies = t.dependencies), Br |= n.lanes, (l & n.childLanes) == 0)
      return null;
    if (t !== null && n.child !== t.child)
      throw Error(i(153));
    if (n.child !== null) {
      for (l = ur(t = n.child, t.pendingProps), n.child = l, l.return = n; t.sibling !== null; )
        t = t.sibling, (l = l.sibling = ur(t, t.pendingProps)).return = n;
      l.sibling = null;
    }
    return n.child;
  }
  function oa(t, n) {
    if (!Ve)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var s = null; l !== null; )
            l.alternate !== null && (s = l), l = l.sibling;
          s === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : s.sibling = null;
      }
  }
  function wt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child, l = 0, s = 0;
    if (n)
      for (var p = t.child; p !== null; )
        l |= p.lanes | p.childLanes, s |= 14680064 & p.subtreeFlags, s |= 14680064 & p.flags, p.return = t, p = p.sibling;
    else
      for (p = t.child; p !== null; )
        l |= p.lanes | p.childLanes, s |= p.subtreeFlags, s |= p.flags, p.return = t, p = p.sibling;
    return t.subtreeFlags |= s, t.childLanes = l, n;
  }
  function iS(t, n, l) {
    var s = n.pendingProps;
    switch (Xc(n), n.tag) {
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
        return wt(n), null;
      case 1:
      case 17:
        return Ht(n.type) && Gc(), wt(n), null;
      case 3:
        return s = n.stateNode, Po(), Ge(Ct), Ge(pt), sf(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), t !== null && t.child !== null || (Vl(n) ? n.flags |= 4 : t === null || t.memoizedState.isDehydrated && (256 & n.flags) == 0 || (n.flags |= 1024, un !== null && (Rf(un), un = null))), kf(t, n), wt(n), null;
      case 5:
        af(n);
        var p = Hr($i.current);
        if (l = n.type, t !== null && n.stateNode != null)
          Uv(t, n, l, s, p), t.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!s) {
            if (n.stateNode === null)
              throw Error(i(166));
            return wt(n), null;
          }
          if (t = Hr(yn.current), Vl(n)) {
            s = n.stateNode, l = n.type;
            var d = n.memoizedProps;
            switch (s[gn] = n, s[Yi] = d, t = (1 & n.mode) != 0, l) {
              case "dialog":
                De("cancel", s), De("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                De("load", s);
                break;
              case "video":
              case "audio":
                for (p = 0; p < Wi.length; p++)
                  De(Wi[p], s);
                break;
              case "source":
                De("error", s);
                break;
              case "img":
              case "image":
              case "link":
                De("error", s), De("load", s);
                break;
              case "details":
                De("toggle", s);
                break;
              case "input":
                bt(s, d), De("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!d.multiple }, De("invalid", s);
                break;
              case "textarea":
                Nm(s, d), De("invalid", s);
            }
            for (var g in ec(l, d), p = null, d)
              if (d.hasOwnProperty(g)) {
                var w = d[g];
                g === "children" ? typeof w == "string" ? s.textContent !== w && (d.suppressHydrationWarning !== !0 && jl(s.textContent, w, t), p = ["children", w]) : typeof w == "number" && s.textContent !== "" + w && (d.suppressHydrationWarning !== !0 && jl(s.textContent, w, t), p = ["children", "" + w]) : a.hasOwnProperty(g) && w != null && g === "onScroll" && De("scroll", s);
              }
            switch (l) {
              case "input":
                Dt(s), Am(s, d, !0);
                break;
              case "textarea":
                Dt(s), Om(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (s.onclick = Hl);
            }
            s = p, n.updateQueue = s, s !== null && (n.flags |= 4);
          } else {
            g = p.nodeType === 9 ? p : p.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = Lm(l)), t === "http://www.w3.org/1999/xhtml" ? l === "script" ? ((t = g.createElement("div")).innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof s.is == "string" ? t = g.createElement(l, { is: s.is }) : (t = g.createElement(l), l === "select" && (g = t, s.multiple ? g.multiple = !0 : s.size && (g.size = s.size))) : t = g.createElementNS(t, l), t[gn] = n, t[Yi] = s, zv(t, n, !1, !1), n.stateNode = t;
            e: {
              switch (g = tc(l, s), l) {
                case "dialog":
                  De("cancel", t), De("close", t), p = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", t), p = s;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < Wi.length; p++)
                    De(Wi[p], t);
                  p = s;
                  break;
                case "source":
                  De("error", t), p = s;
                  break;
                case "img":
                case "image":
                case "link":
                  De("error", t), De("load", t), p = s;
                  break;
                case "details":
                  De("toggle", t), p = s;
                  break;
                case "input":
                  bt(t, s), p = yt(t, s), De("invalid", t);
                  break;
                case "option":
                default:
                  p = s;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!s.multiple }, p = N({}, s, { value: void 0 }), De("invalid", t);
                  break;
                case "textarea":
                  Nm(t, s), p = Zu(t, s), De("invalid", t);
              }
              for (d in ec(l, p), w = p)
                if (w.hasOwnProperty(d)) {
                  var x = w[d];
                  d === "style" ? _m(t, x) : d === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0) != null && Mm(t, x) : d === "children" ? typeof x == "string" ? (l !== "textarea" || x !== "") && Ai(t, x) : typeof x == "number" && Ai(t, "" + x) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (a.hasOwnProperty(d) ? x != null && d === "onScroll" && De("scroll", t) : x != null && H(t, d, x, g));
                }
              switch (l) {
                case "input":
                  Dt(t), Am(t, s, !1);
                  break;
                case "textarea":
                  Dt(t), Om(t);
                  break;
                case "option":
                  s.value != null && t.setAttribute("value", "" + de(s.value));
                  break;
                case "select":
                  t.multiple = !!s.multiple, (d = s.value) != null ? uo(t, !!s.multiple, d, !1) : s.defaultValue != null && uo(t, !!s.multiple, s.defaultValue, !0);
                  break;
                default:
                  typeof p.onClick == "function" && (t.onclick = Hl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return wt(n), null;
      case 6:
        if (t && n.stateNode != null)
          Gv(t, n, t.memoizedProps, s);
        else {
          if (typeof s != "string" && n.stateNode === null)
            throw Error(i(166));
          if (l = Hr($i.current), Hr(yn.current), Vl(n)) {
            if (s = n.stateNode, l = n.memoizedProps, s[gn] = n, (d = s.nodeValue !== l) && (t = Ft) !== null)
              switch (t.tag) {
                case 3:
                  jl(s.nodeValue, l, (1 & t.mode) != 0);
                  break;
                case 5:
                  t.memoizedProps.suppressHydrationWarning !== !0 && jl(s.nodeValue, l, (1 & t.mode) != 0);
              }
            d && (n.flags |= 4);
          } else
            (s = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(s))[gn] = n, n.stateNode = s;
        }
        return wt(n), null;
      case 13:
        if (Ge(Qe), s = n.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (Ve && Bt !== null && (1 & n.mode) != 0 && (128 & n.flags) == 0)
            Yg(), Co(), n.flags |= 98560, d = !1;
          else if (d = Vl(n), s !== null && s.dehydrated !== null) {
            if (t === null) {
              if (!d)
                throw Error(i(318));
              if (!(d = (d = n.memoizedState) !== null ? d.dehydrated : null))
                throw Error(i(317));
              d[gn] = n;
            } else
              Co(), (128 & n.flags) == 0 && (n.memoizedState = null), n.flags |= 4;
            wt(n), d = !1;
          } else
            un !== null && (Rf(un), un = null), d = !0;
          if (!d)
            return 65536 & n.flags ? n : null;
        }
        return (128 & n.flags) != 0 ? (n.lanes = l, n) : ((s = s !== null) != (t !== null && t.memoizedState !== null) && s && (n.child.flags |= 8192, (1 & n.mode) != 0 && (t === null || (1 & Qe.current) != 0 ? it === 0 && (it = 3) : Hf())), n.updateQueue !== null && (n.flags |= 4), wt(n), null);
      case 4:
        return Po(), kf(t, n), t === null && Xi(n.stateNode.containerInfo), wt(n), null;
      case 10:
        return Jc(n.type._context), wt(n), null;
      case 19:
        if (Ge(Qe), (d = n.memoizedState) === null)
          return wt(n), null;
        if (s = (128 & n.flags) != 0, (g = d.rendering) === null)
          if (s)
            oa(d, !1);
          else {
            if (it !== 0 || t !== null && (128 & t.flags) != 0)
              for (t = n.child; t !== null; ) {
                if ((g = ql(t)) !== null) {
                  for (n.flags |= 128, oa(d, !1), (s = g.updateQueue) !== null && (n.updateQueue = s, n.flags |= 4), n.subtreeFlags = 0, s = l, l = n.child; l !== null; )
                    t = s, (d = l).flags &= 14680066, (g = d.alternate) === null ? (d.childLanes = 0, d.lanes = t, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = g.childLanes, d.lanes = g.lanes, d.child = g.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = g.memoizedProps, d.memoizedState = g.memoizedState, d.updateQueue = g.updateQueue, d.type = g.type, t = g.dependencies, d.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l = l.sibling;
                  return Ie(Qe, 1 & Qe.current | 2), n.child;
                }
                t = t.sibling;
              }
            d.tail !== null && Je() > Io && (n.flags |= 128, s = !0, oa(d, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if ((t = ql(g)) !== null) {
              if (n.flags |= 128, s = !0, (l = t.updateQueue) !== null && (n.updateQueue = l, n.flags |= 4), oa(d, !0), d.tail === null && d.tailMode === "hidden" && !g.alternate && !Ve)
                return wt(n), null;
            } else
              2 * Je() - d.renderingStartTime > Io && l !== 1073741824 && (n.flags |= 128, s = !0, oa(d, !1), n.lanes = 4194304);
          d.isBackwards ? (g.sibling = n.child, n.child = g) : ((l = d.last) !== null ? l.sibling = g : n.child = g, d.last = g);
        }
        return d.tail !== null ? (n = d.tail, d.rendering = n, d.tail = n.sibling, d.renderingStartTime = Je(), n.sibling = null, l = Qe.current, Ie(Qe, s ? 1 & l | 2 : 1 & l), n) : (wt(n), null);
      case 22:
      case 23:
        return jf(), s = n.memoizedState !== null, t !== null && t.memoizedState !== null !== s && (n.flags |= 8192), s && (1 & n.mode) != 0 ? (1073741824 & zt) != 0 && (wt(n), 6 & n.subtreeFlags && (n.flags |= 8192)) : wt(n), null;
      case 24:
      case 25:
        return null;
    }
    throw Error(i(156, n.tag));
  }
  function aS(t, n) {
    switch (Xc(n), n.tag) {
      case 1:
        return Ht(n.type) && Gc(), 65536 & (t = n.flags) ? (n.flags = -65537 & t | 128, n) : null;
      case 3:
        return Po(), Ge(Ct), Ge(pt), sf(), (65536 & (t = n.flags)) != 0 && (128 & t) == 0 ? (n.flags = -65537 & t | 128, n) : null;
      case 5:
        return af(n), null;
      case 13:
        if (Ge(Qe), (t = n.memoizedState) !== null && t.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(i(340));
          Co();
        }
        return 65536 & (t = n.flags) ? (n.flags = -65537 & t | 128, n) : null;
      case 19:
        return Ge(Qe), null;
      case 4:
        return Po(), null;
      case 10:
        return Jc(n.type._context), null;
      case 22:
      case 23:
        return jf(), null;
      default:
        return null;
    }
  }
  zv = function(t, n) {
    for (var l = n.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        t.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === n)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === n)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, kf = function() {
  }, Uv = function(t, n, l, s) {
    var p = t.memoizedProps;
    if (p !== s) {
      t = n.stateNode, Hr(yn.current);
      var d, g = null;
      switch (l) {
        case "input":
          p = yt(t, p), s = yt(t, s), g = [];
          break;
        case "select":
          p = N({}, p, { value: void 0 }), s = N({}, s, { value: void 0 }), g = [];
          break;
        case "textarea":
          p = Zu(t, p), s = Zu(t, s), g = [];
          break;
        default:
          typeof p.onClick != "function" && typeof s.onClick == "function" && (t.onclick = Hl);
      }
      for (T in ec(l, s), l = null, p)
        if (!s.hasOwnProperty(T) && p.hasOwnProperty(T) && p[T] != null)
          if (T === "style") {
            var w = p[T];
            for (d in w)
              w.hasOwnProperty(d) && (l || (l = {}), l[d] = "");
          } else
            T !== "dangerouslySetInnerHTML" && T !== "children" && T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && T !== "autoFocus" && (a.hasOwnProperty(T) ? g || (g = []) : (g = g || []).push(T, null));
      for (T in s) {
        var x = s[T];
        if (w = p != null ? p[T] : void 0, s.hasOwnProperty(T) && x !== w && (x != null || w != null))
          if (T === "style")
            if (w) {
              for (d in w)
                !w.hasOwnProperty(d) || x && x.hasOwnProperty(d) || (l || (l = {}), l[d] = "");
              for (d in x)
                x.hasOwnProperty(d) && w[d] !== x[d] && (l || (l = {}), l[d] = x[d]);
            } else
              l || (g || (g = []), g.push(T, l)), l = x;
          else
            T === "dangerouslySetInnerHTML" ? (x = x ? x.__html : void 0, w = w ? w.__html : void 0, x != null && w !== x && (g = g || []).push(T, x)) : T === "children" ? typeof x != "string" && typeof x != "number" || (g = g || []).push(T, "" + x) : T !== "suppressContentEditableWarning" && T !== "suppressHydrationWarning" && (a.hasOwnProperty(T) ? (x != null && T === "onScroll" && De("scroll", t), g || w === x || (g = [])) : (g = g || []).push(T, x));
      }
      l && (g = g || []).push("style", l);
      var T = g;
      (n.updateQueue = T) && (n.flags |= 4);
    }
  }, Gv = function(t, n, l, s) {
    l !== s && (n.flags |= 4);
  };
  var is = !1, ht = !1, lS = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
  function Lo(t, n) {
    var l = t.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (s) {
          Ye(t, n, s);
        }
      else
        l.current = null;
  }
  function Qv(t, n, l) {
    try {
      l();
    } catch (s) {
      Ye(t, n, s);
    }
  }
  var Yv = !1;
  function ia(t, n, l) {
    var s = n.updateQueue;
    if ((s = s !== null ? s.lastEffect : null) !== null) {
      var p = s = s.next;
      do {
        if ((p.tag & t) === t) {
          var d = p.destroy;
          p.destroy = void 0, d !== void 0 && Qv(n, l, d);
        }
        p = p.next;
      } while (p !== s);
    }
  }
  function as(t, n) {
    if ((n = (n = n.updateQueue) !== null ? n.lastEffect : null) !== null) {
      var l = n = n.next;
      do {
        if ((l.tag & t) === t) {
          var s = l.create;
          l.destroy = s();
        }
        l = l.next;
      } while (l !== n);
    }
  }
  function Tf(t) {
    var n = t.ref;
    if (n !== null) {
      var l = t.stateNode;
      t.tag, t = l, typeof n == "function" ? n(t) : n.current = t;
    }
  }
  function Kv(t) {
    var n = t.alternate;
    n !== null && (t.alternate = null, Kv(n)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (n = t.stateNode) !== null && (delete n[gn], delete n[Yi], delete n[zc], delete n[Q3], delete n[Y3]), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function Zv(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function qv(t) {
    e:
      for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Zv(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (2 & t.flags || t.child === null || t.tag === 4)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(2 & t.flags))
          return t.stateNode;
      }
  }
  function Af(t, n, l) {
    var s = t.tag;
    if (s === 5 || s === 6)
      t = t.stateNode, n ? l.nodeType === 8 ? l.parentNode.insertBefore(t, n) : l.insertBefore(t, n) : (l.nodeType === 8 ? (n = l.parentNode).insertBefore(t, l) : (n = l).appendChild(t), (l = l._reactRootContainer) != null || n.onclick !== null || (n.onclick = Hl));
    else if (s !== 4 && (t = t.child) !== null)
      for (Af(t, n, l), t = t.sibling; t !== null; )
        Af(t, n, l), t = t.sibling;
  }
  function Nf(t, n, l) {
    var s = t.tag;
    if (s === 5 || s === 6)
      t = t.stateNode, n ? l.insertBefore(t, n) : l.appendChild(t);
    else if (s !== 4 && (t = t.child) !== null)
      for (Nf(t, n, l), t = t.sibling; t !== null; )
        Nf(t, n, l), t = t.sibling;
  }
  var kt = null, wn = !1;
  function rr(t, n, l) {
    for (l = l.child; l !== null; )
      Jv(t, n, l), l = l.sibling;
  }
  function Jv(t, n, l) {
    if (mn && typeof mn.onCommitFiberUnmount == "function")
      try {
        mn.onCommitFiberUnmount(kl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        ht || Lo(l, n);
      case 6:
        var s = kt, p = wn;
        kt = null, rr(t, n, l), wn = p, (kt = s) !== null && (wn ? (t = kt, l = l.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(l) : t.removeChild(l)) : kt.removeChild(l.stateNode));
        break;
      case 18:
        kt !== null && (wn ? (t = kt, l = l.stateNode, t.nodeType === 8 ? Bc(t.parentNode, l) : t.nodeType === 1 && Bc(t, l), Hi(t)) : Bc(kt, l.stateNode));
        break;
      case 4:
        s = kt, p = wn, kt = l.stateNode.containerInfo, wn = !0, rr(t, n, l), kt = s, wn = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ht && (s = l.updateQueue) !== null && (s = s.lastEffect) !== null) {
          p = s = s.next;
          do {
            var d = p, g = d.destroy;
            d = d.tag, g !== void 0 && ((2 & d) != 0 || (4 & d) != 0) && Qv(l, n, g), p = p.next;
          } while (p !== s);
        }
        rr(t, n, l);
        break;
      case 1:
        if (!ht && (Lo(l, n), typeof (s = l.stateNode).componentWillUnmount == "function"))
          try {
            s.props = l.memoizedProps, s.state = l.memoizedState, s.componentWillUnmount();
          } catch (w) {
            Ye(l, n, w);
          }
        rr(t, n, l);
        break;
      case 21:
        rr(t, n, l);
        break;
      case 22:
        1 & l.mode ? (ht = (s = ht) || l.memoizedState !== null, rr(t, n, l), ht = s) : rr(t, n, l);
        break;
      default:
        rr(t, n, l);
    }
  }
  function $v(t) {
    var n = t.updateQueue;
    if (n !== null) {
      t.updateQueue = null;
      var l = t.stateNode;
      l === null && (l = t.stateNode = new lS()), n.forEach(function(s) {
        var p = hS.bind(null, t, s);
        l.has(s) || (l.add(s), s.then(p, p));
      });
    }
  }
  function kn(t, n) {
    var l = n.deletions;
    if (l !== null)
      for (var s = 0; s < l.length; s++) {
        var p = l[s];
        try {
          var d = t, g = n, w = g;
          e:
            for (; w !== null; ) {
              switch (w.tag) {
                case 5:
                  kt = w.stateNode, wn = !1;
                  break e;
                case 3:
                case 4:
                  kt = w.stateNode.containerInfo, wn = !0;
                  break e;
              }
              w = w.return;
            }
          if (kt === null)
            throw Error(i(160));
          Jv(d, g, p), kt = null, wn = !1;
          var x = p.alternate;
          x !== null && (x.return = null), p.return = null;
        } catch (T) {
          Ye(p, n, T);
        }
      }
    if (12854 & n.subtreeFlags)
      for (n = n.child; n !== null; )
        e0(n, t), n = n.sibling;
  }
  function e0(t, n) {
    var l = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (kn(n, t), jn(t), 4 & s) {
          try {
            ia(3, t, t.return), as(3, t);
          } catch (W) {
            Ye(t, t.return, W);
          }
          try {
            ia(5, t, t.return);
          } catch (W) {
            Ye(t, t.return, W);
          }
        }
        break;
      case 1:
        kn(n, t), jn(t), 512 & s && l !== null && Lo(l, l.return);
        break;
      case 5:
        if (kn(n, t), jn(t), 512 & s && l !== null && Lo(l, l.return), 32 & t.flags) {
          var p = t.stateNode;
          try {
            Ai(p, "");
          } catch (W) {
            Ye(t, t.return, W);
          }
        }
        if (4 & s && (p = t.stateNode) != null) {
          var d = t.memoizedProps, g = l !== null ? l.memoizedProps : d, w = t.type, x = t.updateQueue;
          if (t.updateQueue = null, x !== null)
            try {
              w === "input" && d.type === "radio" && d.name != null && yl(p, d), tc(w, g);
              var T = tc(w, d);
              for (g = 0; g < x.length; g += 2) {
                var P = x[g], j = x[g + 1];
                P === "style" ? _m(p, j) : P === "dangerouslySetInnerHTML" ? Mm(p, j) : P === "children" ? Ai(p, j) : H(p, P, j, T);
              }
              switch (w) {
                case "input":
                  Yu(p, d);
                  break;
                case "textarea":
                  Pm(p, d);
                  break;
                case "select":
                  var I = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!d.multiple;
                  var F = d.value;
                  F != null ? uo(p, !!d.multiple, F, !1) : I !== !!d.multiple && (d.defaultValue != null ? uo(p, !!d.multiple, d.defaultValue, !0) : uo(p, !!d.multiple, d.multiple ? [] : "", !1));
              }
              p[Yi] = d;
            } catch (W) {
              Ye(t, t.return, W);
            }
        }
        break;
      case 6:
        if (kn(n, t), jn(t), 4 & s) {
          if (t.stateNode === null)
            throw Error(i(162));
          p = t.stateNode, d = t.memoizedProps;
          try {
            p.nodeValue = d;
          } catch (W) {
            Ye(t, t.return, W);
          }
        }
        break;
      case 3:
        if (kn(n, t), jn(t), 4 & s && l !== null && l.memoizedState.isDehydrated)
          try {
            Hi(n.containerInfo);
          } catch (W) {
            Ye(t, t.return, W);
          }
        break;
      case 4:
      default:
        kn(n, t), jn(t);
        break;
      case 13:
        kn(n, t), jn(t), 8192 & (p = t.child).flags && (d = p.memoizedState !== null, p.stateNode.isHidden = d, !d || p.alternate !== null && p.alternate.memoizedState !== null || (Lf = Je())), 4 & s && $v(t);
        break;
      case 22:
        if (P = l !== null && l.memoizedState !== null, 1 & t.mode ? (ht = (T = ht) || P, kn(n, t), ht = T) : kn(n, t), jn(t), 8192 & s) {
          if (T = t.memoizedState !== null, (t.stateNode.isHidden = T) && !P && (1 & t.mode) != 0)
            for (ee = t, P = t.child; P !== null; ) {
              for (j = ee = P; ee !== null; ) {
                switch (F = (I = ee).child, I.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ia(4, I, I.return);
                    break;
                  case 1:
                    Lo(I, I.return);
                    var U = I.stateNode;
                    if (typeof U.componentWillUnmount == "function") {
                      s = I, l = I.return;
                      try {
                        n = s, U.props = n.memoizedProps, U.state = n.memoizedState, U.componentWillUnmount();
                      } catch (W) {
                        Ye(s, l, W);
                      }
                    }
                    break;
                  case 5:
                    Lo(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      r0(j);
                      continue;
                    }
                }
                F !== null ? (F.return = I, ee = F) : r0(j);
              }
              P = P.sibling;
            }
          e:
            for (P = null, j = t; ; ) {
              if (j.tag === 5) {
                if (P === null) {
                  P = j;
                  try {
                    p = j.stateNode, T ? typeof (d = p.style).setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none" : (w = j.stateNode, g = (x = j.memoizedProps.style) != null && x.hasOwnProperty("display") ? x.display : null, w.style.display = Im("display", g));
                  } catch (W) {
                    Ye(t, t.return, W);
                  }
                }
              } else if (j.tag === 6) {
                if (P === null)
                  try {
                    j.stateNode.nodeValue = T ? "" : j.memoizedProps;
                  } catch (W) {
                    Ye(t, t.return, W);
                  }
              } else if ((j.tag !== 22 && j.tag !== 23 || j.memoizedState === null || j === t) && j.child !== null) {
                j.child.return = j, j = j.child;
                continue;
              }
              if (j === t)
                break e;
              for (; j.sibling === null; ) {
                if (j.return === null || j.return === t)
                  break e;
                P === j && (P = null), j = j.return;
              }
              P === j && (P = null), j.sibling.return = j.return, j = j.sibling;
            }
        }
        break;
      case 19:
        kn(n, t), jn(t), 4 & s && $v(t);
      case 21:
    }
  }
  function jn(t) {
    var n = t.flags;
    if (2 & n) {
      try {
        e: {
          for (var l = t.return; l !== null; ) {
            if (Zv(l)) {
              var s = l;
              break e;
            }
            l = l.return;
          }
          throw Error(i(160));
        }
        switch (s.tag) {
          case 5:
            var p = s.stateNode;
            32 & s.flags && (Ai(p, ""), s.flags &= -33), Nf(t, qv(t), p);
            break;
          case 3:
          case 4:
            var d = s.stateNode.containerInfo;
            Af(t, qv(t), d);
            break;
          default:
            throw Error(i(161));
        }
      } catch (g) {
        Ye(t, t.return, g);
      }
      t.flags &= -3;
    }
    4096 & n && (t.flags &= -4097);
  }
  function sS(t, n, l) {
    ee = t, t0(t);
  }
  function t0(t, n, l) {
    for (var s = (1 & t.mode) != 0; ee !== null; ) {
      var p = ee, d = p.child;
      if (p.tag === 22 && s) {
        var g = p.memoizedState !== null || is;
        if (!g) {
          var w = p.alternate, x = w !== null && w.memoizedState !== null || ht;
          w = is;
          var T = ht;
          if (is = g, (ht = x) && !T)
            for (ee = p; ee !== null; )
              x = (g = ee).child, g.tag === 22 && g.memoizedState !== null ? o0(p) : x !== null ? (x.return = g, ee = x) : o0(p);
          for (; d !== null; )
            ee = d, t0(d), d = d.sibling;
          ee = p, is = w, ht = T;
        }
        n0(t);
      } else
        (8772 & p.subtreeFlags) != 0 && d !== null ? (d.return = p, ee = d) : n0(t);
    }
  }
  function n0(t) {
    for (; ee !== null; ) {
      var n = ee;
      if ((8772 & n.flags) != 0) {
        var l = n.alternate;
        try {
          if ((8772 & n.flags) != 0)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ht || as(5, n);
                break;
              case 1:
                var s = n.stateNode;
                if (4 & n.flags && !ht)
                  if (l === null)
                    s.componentDidMount();
                  else {
                    var p = n.elementType === n.type ? l.memoizedProps : cn(n.type, l.memoizedProps);
                    s.componentDidUpdate(p, l.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = n.updateQueue;
                d !== null && Jg(n, d, s);
                break;
              case 3:
                var g = n.updateQueue;
                if (g !== null) {
                  if (l = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                      case 1:
                        l = n.child.stateNode;
                    }
                  Jg(n, g, l);
                }
                break;
              case 5:
                var w = n.stateNode;
                if (l === null && 4 & n.flags) {
                  l = w;
                  var x = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      x.autoFocus && l.focus();
                      break;
                    case "img":
                      x.src && (l.src = x.src);
                  }
                }
                break;
              case 6:
              case 4:
              case 12:
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var T = n.alternate;
                  if (T !== null) {
                    var P = T.memoizedState;
                    if (P !== null) {
                      var j = P.dehydrated;
                      j !== null && Hi(j);
                    }
                  }
                }
                break;
              default:
                throw Error(i(163));
            }
          ht || 512 & n.flags && Tf(n);
        } catch (I) {
          Ye(n, n.return, I);
        }
      }
      if (n === t) {
        ee = null;
        break;
      }
      if ((l = n.sibling) !== null) {
        l.return = n.return, ee = l;
        break;
      }
      ee = n.return;
    }
  }
  function r0(t) {
    for (; ee !== null; ) {
      var n = ee;
      if (n === t) {
        ee = null;
        break;
      }
      var l = n.sibling;
      if (l !== null) {
        l.return = n.return, ee = l;
        break;
      }
      ee = n.return;
    }
  }
  function o0(t) {
    for (; ee !== null; ) {
      var n = ee;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var l = n.return;
            try {
              as(4, n);
            } catch (x) {
              Ye(n, l, x);
            }
            break;
          case 1:
            var s = n.stateNode;
            if (typeof s.componentDidMount == "function") {
              var p = n.return;
              try {
                s.componentDidMount();
              } catch (x) {
                Ye(n, p, x);
              }
            }
            var d = n.return;
            try {
              Tf(n);
            } catch (x) {
              Ye(n, d, x);
            }
            break;
          case 5:
            var g = n.return;
            try {
              Tf(n);
            } catch (x) {
              Ye(n, g, x);
            }
        }
      } catch (x) {
        Ye(n, n.return, x);
      }
      if (n === t) {
        ee = null;
        break;
      }
      var w = n.sibling;
      if (w !== null) {
        w.return = n.return, ee = w;
        break;
      }
      ee = n.return;
    }
  }
  var i0, uS = Math.ceil, ls = D.ReactCurrentDispatcher, Pf = D.ReactCurrentOwner, qt = D.ReactCurrentBatchConfig, Te = 0, st = null, tt = null, ct = 0, zt = 0, Mo = Jn(0), it = 0, aa = null, Br = 0, ss = 0, Of = 0, la = null, Ut = null, Lf = 0, Io = 1 / 0, or = null, us = !1, Mf = null, ir = null, cs = !1, ar = null, fs = 0, sa = 0, If = null, ps = -1, ds = 0;
  function xt() {
    return (6 & Te) != 0 ? Je() : ps !== -1 ? ps : ps = Je();
  }
  function lr(t) {
    return (1 & t.mode) == 0 ? 1 : (2 & Te) != 0 && ct !== 0 ? ct & -ct : K3.transition !== null ? (ds === 0 && (ds = Km()), ds) : (t = Le) !== 0 ? t : t = (t = window.event) === void 0 ? 16 : og(t.type);
  }
  function fn(t, n, l, s) {
    if (50 < sa)
      throw sa = 0, If = null, Error(i(185));
    Ii(t, l, s), (2 & Te) != 0 && t === st || (t === st && ((2 & Te) == 0 && (ss |= l), it === 4 && sr(t, ct)), Nt(t, s), l === 1 && Te === 0 && (1 & n.mode) == 0 && (Io = Je() + 500, zl && er()));
  }
  function Nt(t, n) {
    var l = t.callbackNode;
    (function(p, d) {
      for (var g = p.suspendedLanes, w = p.pingedLanes, x = p.expirationTimes, T = p.pendingLanes; 0 < T; ) {
        var P = 31 - ln(T), j = 1 << P, I = x[P];
        I === -1 ? (j & g) != 0 && (j & w) == 0 || (x[P] = c3(j, d)) : I <= d && (p.expiredLanes |= j), T &= ~j;
      }
    })(t, n);
    var s = xl(t, t === st ? ct : 0);
    if (s === 0)
      l !== null && Xm(l), t.callbackNode = null, t.callbackPriority = 0;
    else if (n = s & -s, t.callbackPriority !== n) {
      if (l != null && Xm(l), n === 1)
        t.tag === 0 ? function(p) {
          zl = !0, Gg(p);
        }(l0.bind(null, t)) : Gg(l0.bind(null, t)), W3(function() {
          (6 & Te) == 0 && er();
        }), l = null;
      else {
        switch (Zm(s)) {
          case 1:
            l = sc;
            break;
          case 4:
            l = Qm;
            break;
          case 16:
          default:
            l = uc;
            break;
          case 536870912:
            l = Ym;
        }
        l = h0(l, a0.bind(null, t));
      }
      t.callbackPriority = n, t.callbackNode = l;
    }
  }
  function a0(t, n) {
    if (ps = -1, ds = 0, (6 & Te) != 0)
      throw Error(i(327));
    var l = t.callbackNode;
    if (Ro() && t.callbackNode !== l)
      return null;
    var s = xl(t, t === st ? ct : 0);
    if (s === 0)
      return null;
    if ((30 & s) != 0 || (s & t.expiredLanes) != 0 || n)
      n = hs(t, s);
    else {
      n = s;
      var p = Te;
      Te |= 2;
      var d = u0();
      for (st === t && ct === n || (or = null, Io = Je() + 500, Ur(t, n)); ; )
        try {
          fS();
          break;
        } catch (w) {
          s0(t, w);
        }
      qc(), ls.current = d, Te = p, tt !== null ? n = 0 : (st = null, ct = 0, n = it);
    }
    if (n !== 0) {
      if (n === 2 && (p = pc(t)) !== 0 && (s = p, n = _f(t, p)), n === 1)
        throw l = aa, Ur(t, 0), sr(t, s), Nt(t, Je()), l;
      if (n === 6)
        sr(t, s);
      else {
        if (p = t.current.alternate, (30 & s) == 0 && !function(w) {
          for (var x = w; ; ) {
            if (16384 & x.flags) {
              var T = x.updateQueue;
              if (T !== null && (T = T.stores) !== null)
                for (var P = 0; P < T.length; P++) {
                  var j = T[P], I = j.getSnapshot;
                  j = j.value;
                  try {
                    if (!sn(I(), j))
                      return !1;
                  } catch {
                    return !1;
                  }
                }
            }
            if (T = x.child, 16384 & x.subtreeFlags && T !== null)
              T.return = x, x = T;
            else {
              if (x === w)
                break;
              for (; x.sibling === null; ) {
                if (x.return === null || x.return === w)
                  return !0;
                x = x.return;
              }
              x.sibling.return = x.return, x = x.sibling;
            }
          }
          return !0;
        }(p) && ((n = hs(t, s)) === 2 && (d = pc(t)) !== 0 && (s = d, n = _f(t, d)), n === 1))
          throw l = aa, Ur(t, 0), sr(t, s), Nt(t, Je()), l;
        switch (t.finishedWork = p, t.finishedLanes = s, n) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
          case 5:
            _o(t, Ut, or);
            break;
          case 3:
            if (sr(t, s), (130023424 & s) === s && 10 < (n = Lf + 500 - Je())) {
              if (xl(t, 0) !== 0)
                break;
              if (((p = t.suspendedLanes) & s) !== s) {
                xt(), t.pingedLanes |= t.suspendedLanes & p;
                break;
              }
              t.timeoutHandle = Fc(_o.bind(null, t, Ut, or), n);
              break;
            }
            _o(t, Ut, or);
            break;
          case 4:
            if (sr(t, s), (4194240 & s) === s)
              break;
            for (n = t.eventTimes, p = -1; 0 < s; ) {
              var g = 31 - ln(s);
              d = 1 << g, (g = n[g]) > p && (p = g), s &= ~d;
            }
            if (s = p, 10 < (s = (120 > (s = Je() - s) ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * uS(s / 1960)) - s)) {
              t.timeoutHandle = Fc(_o.bind(null, t, Ut, or), s);
              break;
            }
            _o(t, Ut, or);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return Nt(t, Je()), t.callbackNode === l ? a0.bind(null, t) : null;
  }
  function _f(t, n) {
    var l = la;
    return t.current.memoizedState.isDehydrated && (Ur(t, n).flags |= 256), (t = hs(t, n)) !== 2 && (n = Ut, Ut = l, n !== null && Rf(n)), t;
  }
  function Rf(t) {
    Ut === null ? Ut = t : Ut.push.apply(Ut, t);
  }
  function sr(t, n) {
    for (n &= ~Of, n &= ~ss, t.suspendedLanes |= n, t.pingedLanes &= ~n, t = t.expirationTimes; 0 < n; ) {
      var l = 31 - ln(n), s = 1 << l;
      t[l] = -1, n &= ~s;
    }
  }
  function l0(t) {
    if ((6 & Te) != 0)
      throw Error(i(327));
    Ro();
    var n = xl(t, 0);
    if ((1 & n) == 0)
      return Nt(t, Je()), null;
    var l = hs(t, n);
    if (t.tag !== 0 && l === 2) {
      var s = pc(t);
      s !== 0 && (n = s, l = _f(t, s));
    }
    if (l === 1)
      throw l = aa, Ur(t, 0), sr(t, n), Nt(t, Je()), l;
    if (l === 6)
      throw Error(i(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = n, _o(t, Ut, or), Nt(t, Je()), null;
  }
  function Df(t, n) {
    var l = Te;
    Te |= 1;
    try {
      return t(n);
    } finally {
      (Te = l) === 0 && (Io = Je() + 500, zl && er());
    }
  }
  function zr(t) {
    ar !== null && ar.tag === 0 && (6 & Te) == 0 && Ro();
    var n = Te;
    Te |= 1;
    var l = qt.transition, s = Le;
    try {
      if (qt.transition = null, Le = 1, t)
        return t();
    } finally {
      Le = s, qt.transition = l, (6 & (Te = n)) == 0 && er();
    }
  }
  function jf() {
    zt = Mo.current, Ge(Mo);
  }
  function Ur(t, n) {
    t.finishedWork = null, t.finishedLanes = 0;
    var l = t.timeoutHandle;
    if (l !== -1 && (t.timeoutHandle = -1, V3(l)), tt !== null)
      for (l = tt.return; l !== null; ) {
        var s = l;
        switch (Xc(s), s.tag) {
          case 1:
            (s = s.type.childContextTypes) != null && Gc();
            break;
          case 3:
            Po(), Ge(Ct), Ge(pt), sf();
            break;
          case 5:
            af(s);
            break;
          case 4:
            Po();
            break;
          case 13:
          case 19:
            Ge(Qe);
            break;
          case 10:
            Jc(s.type._context);
            break;
          case 22:
          case 23:
            jf();
        }
        l = l.return;
      }
    if (st = t, tt = t = ur(t.current, null), ct = zt = n, it = 0, aa = null, Of = ss = Br = 0, Ut = la = null, jr !== null) {
      for (n = 0; n < jr.length; n++)
        if ((s = (l = jr[n]).interleaved) !== null) {
          l.interleaved = null;
          var p = s.next, d = l.pending;
          if (d !== null) {
            var g = d.next;
            d.next = p, s.next = g;
          }
          l.pending = s;
        }
      jr = null;
    }
    return t;
  }
  function s0(t, n) {
    for (; ; ) {
      var l = tt;
      try {
        if (qc(), Jl.current = ns, $l) {
          for (var s = Xe.memoizedState; s !== null; ) {
            var p = s.queue;
            p !== null && (p.pending = null), s = s.next;
          }
          $l = !1;
        }
        if (Fr = 0, lt = at = Xe = null, ea = !1, ta = 0, Pf.current = null, l === null || l.return === null) {
          it = 1, aa = n, tt = null;
          break;
        }
        e: {
          var d = t, g = l.return, w = l, x = n;
          if (n = ct, w.flags |= 32768, x !== null && typeof x == "object" && typeof x.then == "function") {
            var T = x, P = w, j = P.tag;
            if ((1 & P.mode) == 0 && (j === 0 || j === 11 || j === 15)) {
              var I = P.alternate;
              I ? (P.updateQueue = I.updateQueue, P.memoizedState = I.memoizedState, P.lanes = I.lanes) : (P.updateQueue = null, P.memoizedState = null);
            }
            var F = Lv(g);
            if (F !== null) {
              F.flags &= -257, Mv(F, g, w, 0, n), 1 & F.mode && Ov(d, T, n), x = T;
              var U = (n = F).updateQueue;
              if (U === null) {
                var W = /* @__PURE__ */ new Set();
                W.add(x), n.updateQueue = W;
              } else
                U.add(x);
              break e;
            }
            if ((1 & n) == 0) {
              Ov(d, T, n), Hf();
              break e;
            }
            x = Error(i(426));
          } else if (Ve && 1 & w.mode) {
            var R = Lv(g);
            if (R !== null) {
              (65536 & R.flags) == 0 && (R.flags |= 256), Mv(R, g, w, 0, n), Kc(Oo(x, w));
              break e;
            }
          }
          d = x = Oo(x, w), it !== 4 && (it = 2), la === null ? la = [d] : la.push(d), d = g;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, n &= -n, d.lanes |= n, qg(d, Nv(0, x, n));
                break e;
              case 1:
                w = x;
                var C = d.type, O = d.stateNode;
                if ((128 & d.flags) == 0 && (typeof C.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (ir === null || !ir.has(O)))) {
                  d.flags |= 65536, n &= -n, d.lanes |= n, qg(d, Pv(d, w, n));
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        f0(l);
      } catch (B) {
        n = B, tt === l && l !== null && (tt = l = l.return);
        continue;
      }
      break;
    }
  }
  function u0() {
    var t = ls.current;
    return ls.current = ns, t === null ? ns : t;
  }
  function Hf() {
    it !== 0 && it !== 3 && it !== 2 || (it = 4), st === null || (268435455 & Br) == 0 && (268435455 & ss) == 0 || sr(st, ct);
  }
  function hs(t, n) {
    var l = Te;
    Te |= 2;
    var s = u0();
    for (st === t && ct === n || (or = null, Ur(t, n)); ; )
      try {
        cS();
        break;
      } catch (p) {
        s0(t, p);
      }
    if (qc(), Te = l, ls.current = s, tt !== null)
      throw Error(i(261));
    return st = null, ct = 0, it;
  }
  function cS() {
    for (; tt !== null; )
      c0(tt);
  }
  function fS() {
    for (; tt !== null && !o3(); )
      c0(tt);
  }
  function c0(t) {
    var n = i0(t.alternate, t, zt);
    t.memoizedProps = t.pendingProps, n === null ? f0(t) : tt = n, Pf.current = null;
  }
  function f0(t) {
    var n = t;
    do {
      var l = n.alternate;
      if (t = n.return, (32768 & n.flags) == 0) {
        if ((l = iS(l, n, zt)) !== null)
          return void (tt = l);
      } else {
        if ((l = aS(l, n)) !== null)
          return l.flags &= 32767, void (tt = l);
        if (t === null)
          return it = 6, void (tt = null);
        t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
      }
      if ((n = n.sibling) !== null)
        return void (tt = n);
      tt = n = t;
    } while (n !== null);
    it === 0 && (it = 5);
  }
  function _o(t, n, l) {
    var s = Le, p = qt.transition;
    try {
      qt.transition = null, Le = 1, function(d, g, w, x) {
        do
          Ro();
        while (ar !== null);
        if ((6 & Te) != 0)
          throw Error(i(327));
        w = d.finishedWork;
        var T = d.finishedLanes;
        if (w === null)
          return null;
        if (d.finishedWork = null, d.finishedLanes = 0, w === d.current)
          throw Error(i(177));
        d.callbackNode = null, d.callbackPriority = 0;
        var P = w.lanes | w.childLanes;
        if (function(F, U) {
          var W = F.pendingLanes & ~U;
          F.pendingLanes = U, F.suspendedLanes = 0, F.pingedLanes = 0, F.expiredLanes &= U, F.mutableReadLanes &= U, F.entangledLanes &= U, U = F.entanglements;
          var R = F.eventTimes;
          for (F = F.expirationTimes; 0 < W; ) {
            var C = 31 - ln(W), O = 1 << C;
            U[C] = 0, R[C] = -1, F[C] = -1, W &= ~O;
          }
        }(d, P), d === st && (tt = st = null, ct = 0), (2064 & w.subtreeFlags) == 0 && (2064 & w.flags) == 0 || cs || (cs = !0, h0(uc, function() {
          return Ro(), null;
        })), P = (15990 & w.flags) != 0, (15990 & w.subtreeFlags) != 0 || P) {
          P = qt.transition, qt.transition = null;
          var j = Le;
          Le = 1;
          var I = Te;
          Te |= 4, Pf.current = null, function(F, U) {
            if (Dc = Cl, Nc(F = Sg())) {
              if ("selectionStart" in F)
                var W = { start: F.selectionStart, end: F.selectionEnd };
              else
                e: {
                  var R = (W = (W = F.ownerDocument) && W.defaultView || window).getSelection && W.getSelection();
                  if (R && R.rangeCount !== 0) {
                    W = R.anchorNode;
                    var C = R.anchorOffset, O = R.focusNode;
                    R = R.focusOffset;
                    try {
                      W.nodeType, O.nodeType;
                    } catch {
                      W = null;
                      break e;
                    }
                    var B = 0, q = -1, se = -1, Z = 0, fe = 0, ie = F, ae = null;
                    t:
                      for (; ; ) {
                        for (var Ae; ie !== W || C !== 0 && ie.nodeType !== 3 || (q = B + C), ie !== O || R !== 0 && ie.nodeType !== 3 || (se = B + R), ie.nodeType === 3 && (B += ie.nodeValue.length), (Ae = ie.firstChild) !== null; )
                          ae = ie, ie = Ae;
                        for (; ; ) {
                          if (ie === F)
                            break t;
                          if (ae === W && ++Z === C && (q = B), ae === O && ++fe === R && (se = B), (Ae = ie.nextSibling) !== null)
                            break;
                          ae = (ie = ae).parentNode;
                        }
                        ie = Ae;
                      }
                    W = q === -1 || se === -1 ? null : { start: q, end: se };
                  } else
                    W = null;
                }
              W = W || { start: 0, end: 0 };
            } else
              W = null;
            for (jc = { focusedElem: F, selectionRange: W }, Cl = !1, ee = U; ee !== null; )
              if (F = (U = ee).child, (1028 & U.subtreeFlags) != 0 && F !== null)
                F.return = U, ee = F;
              else
                for (; ee !== null; ) {
                  U = ee;
                  try {
                    var Do = U.alternate;
                    if ((1024 & U.flags) != 0)
                      switch (U.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                          break;
                        case 1:
                          if (Do !== null) {
                            var w0 = Do.memoizedProps, bS = Do.memoizedState, k0 = U.stateNode, wS = k0.getSnapshotBeforeUpdate(U.elementType === U.type ? w0 : cn(U.type, w0), bS);
                            k0.__reactInternalSnapshotBeforeUpdate = wS;
                          }
                          break;
                        case 3:
                          var jo = U.stateNode.containerInfo;
                          jo.nodeType === 1 ? jo.textContent = "" : jo.nodeType === 9 && jo.documentElement && jo.removeChild(jo.documentElement);
                          break;
                        default:
                          throw Error(i(163));
                      }
                  } catch (x0) {
                    Ye(U, U.return, x0);
                  }
                  if ((F = U.sibling) !== null) {
                    F.return = U.return, ee = F;
                    break;
                  }
                  ee = U.return;
                }
            Do = Yv, Yv = !1;
          }(d, w), e0(w, d), F3(jc), Cl = !!Dc, jc = Dc = null, d.current = w, sS(w), i3(), Te = I, Le = j, qt.transition = P;
        } else
          d.current = w;
        if (cs && (cs = !1, ar = d, fs = T), P = d.pendingLanes, P === 0 && (ir = null), function(F) {
          if (mn && typeof mn.onCommitFiberRoot == "function")
            try {
              mn.onCommitFiberRoot(kl, F, void 0, (128 & F.current.flags) == 128);
            } catch {
            }
        }(w.stateNode), Nt(d, Je()), g !== null)
          for (x = d.onRecoverableError, w = 0; w < g.length; w++)
            T = g[w], x(T.value, { componentStack: T.stack, digest: T.digest });
        if (us)
          throw us = !1, d = Mf, Mf = null, d;
        (1 & fs) != 0 && d.tag !== 0 && Ro(), P = d.pendingLanes, (1 & P) != 0 ? d === If ? sa++ : (sa = 0, If = d) : sa = 0, er();
      }(t, n, l, s);
    } finally {
      qt.transition = p, Le = s;
    }
    return null;
  }
  function Ro() {
    if (ar !== null) {
      var t = Zm(fs), n = qt.transition, l = Le;
      try {
        if (qt.transition = null, Le = 16 > t ? 16 : t, ar === null)
          var s = !1;
        else {
          if (t = ar, ar = null, fs = 0, (6 & Te) != 0)
            throw Error(i(331));
          var p = Te;
          for (Te |= 4, ee = t.current; ee !== null; ) {
            var d = ee, g = d.child;
            if ((16 & ee.flags) != 0) {
              var w = d.deletions;
              if (w !== null) {
                for (var x = 0; x < w.length; x++) {
                  var T = w[x];
                  for (ee = T; ee !== null; ) {
                    var P = ee;
                    switch (P.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ia(8, P, d);
                    }
                    var j = P.child;
                    if (j !== null)
                      j.return = P, ee = j;
                    else
                      for (; ee !== null; ) {
                        var I = (P = ee).sibling, F = P.return;
                        if (Kv(P), P === T) {
                          ee = null;
                          break;
                        }
                        if (I !== null) {
                          I.return = F, ee = I;
                          break;
                        }
                        ee = F;
                      }
                  }
                }
                var U = d.alternate;
                if (U !== null) {
                  var W = U.child;
                  if (W !== null) {
                    U.child = null;
                    do {
                      var R = W.sibling;
                      W.sibling = null, W = R;
                    } while (W !== null);
                  }
                }
                ee = d;
              }
            }
            if ((2064 & d.subtreeFlags) != 0 && g !== null)
              g.return = d, ee = g;
            else
              e:
                for (; ee !== null; ) {
                  if ((2048 & (d = ee).flags) != 0)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ia(9, d, d.return);
                    }
                  var C = d.sibling;
                  if (C !== null) {
                    C.return = d.return, ee = C;
                    break e;
                  }
                  ee = d.return;
                }
          }
          var O = t.current;
          for (ee = O; ee !== null; ) {
            var B = (g = ee).child;
            if ((2064 & g.subtreeFlags) != 0 && B !== null)
              B.return = g, ee = B;
            else
              e:
                for (g = O; ee !== null; ) {
                  if ((2048 & (w = ee).flags) != 0)
                    try {
                      switch (w.tag) {
                        case 0:
                        case 11:
                        case 15:
                          as(9, w);
                      }
                    } catch (se) {
                      Ye(w, w.return, se);
                    }
                  if (w === g) {
                    ee = null;
                    break e;
                  }
                  var q = w.sibling;
                  if (q !== null) {
                    q.return = w.return, ee = q;
                    break e;
                  }
                  ee = w.return;
                }
          }
          if (Te = p, er(), mn && typeof mn.onPostCommitFiberRoot == "function")
            try {
              mn.onPostCommitFiberRoot(kl, t);
            } catch {
            }
          s = !0;
        }
        return s;
      } finally {
        Le = l, qt.transition = n;
      }
    }
    return !1;
  }
  function p0(t, n, l) {
    t = nr(t, n = Nv(0, n = Oo(l, n), 1), 1), n = xt(), t !== null && (Ii(t, 1, n), Nt(t, n));
  }
  function Ye(t, n, l) {
    if (t.tag === 3)
      p0(t, t, l);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          p0(n, t, l);
          break;
        }
        if (n.tag === 1) {
          var s = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ir === null || !ir.has(s))) {
            n = nr(n, t = Pv(n, t = Oo(l, t), 1), 1), t = xt(), n !== null && (Ii(n, 1, t), Nt(n, t));
            break;
          }
        }
        n = n.return;
      }
  }
  function pS(t, n, l) {
    var s = t.pingCache;
    s !== null && s.delete(n), n = xt(), t.pingedLanes |= t.suspendedLanes & l, st === t && (ct & l) === l && (it === 4 || it === 3 && (130023424 & ct) === ct && 500 > Je() - Lf ? Ur(t, 0) : Of |= l), Nt(t, n);
  }
  function d0(t, n) {
    n === 0 && ((1 & t.mode) == 0 ? n = 1 : (n = fc, (130023424 & (fc <<= 1)) == 0 && (fc = 4194304)));
    var l = xt();
    (t = _n(t, n)) !== null && (Ii(t, n, l), Nt(t, l));
  }
  function dS(t) {
    var n = t.memoizedState, l = 0;
    n !== null && (l = n.retryLane), d0(t, l);
  }
  function hS(t, n) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var s = t.stateNode, p = t.memoizedState;
        p !== null && (l = p.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    s !== null && s.delete(n), d0(t, l);
  }
  function h0(t, n) {
    return Wm(t, n);
  }
  function mS(t, n, l, s) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Jt(t, n, l, s) {
    return new mS(t, n, l, s);
  }
  function Ff(t) {
    return !(!(t = t.prototype) || !t.isReactComponent);
  }
  function ur(t, n) {
    var l = t.alternate;
    return l === null ? ((l = Jt(t.tag, n, t.key, t.mode)).elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = n, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = 14680064 & t.flags, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, n = t.dependencies, l.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l;
  }
  function ms(t, n, l, s, p, d) {
    var g = 2;
    if (s = t, typeof t == "function")
      Ff(t) && (g = 1);
    else if (typeof t == "string")
      g = 5;
    else
      e:
        switch (t) {
          case Q:
            return Gr(l.children, p, d, n);
          case z:
            g = 8, p |= 8;
            break;
          case te:
            return (t = Jt(12, l, n, 2 | p)).elementType = te, t.lanes = d, t;
          case me:
            return (t = Jt(13, l, n, p)).elementType = me, t.lanes = d, t;
          case ye:
            return (t = Jt(19, l, n, p)).elementType = ye, t.lanes = d, t;
          case we:
            return gs(l, p, d, n);
          default:
            if (typeof t == "object" && t !== null)
              switch (t.$$typeof) {
                case J:
                  g = 10;
                  break e;
                case he:
                  g = 9;
                  break e;
                case le:
                  g = 11;
                  break e;
                case be:
                  g = 14;
                  break e;
                case Me:
                  g = 16, s = null;
                  break e;
              }
            throw Error(i(130, t == null ? t : typeof t, ""));
        }
    return (n = Jt(g, l, n, p)).elementType = t, n.type = s, n.lanes = d, n;
  }
  function Gr(t, n, l, s) {
    return (t = Jt(7, t, s, n)).lanes = l, t;
  }
  function gs(t, n, l, s) {
    return (t = Jt(22, t, s, n)).elementType = we, t.lanes = l, t.stateNode = { isHidden: !1 }, t;
  }
  function Bf(t, n, l) {
    return (t = Jt(6, t, null, n)).lanes = l, t;
  }
  function zf(t, n, l) {
    return (n = Jt(4, t.children !== null ? t.children : [], t.key, n)).lanes = l, n.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, n;
  }
  function gS(t, n, l, s, p) {
    this.tag = n, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = dc(0), this.expirationTimes = dc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dc(0), this.identifierPrefix = s, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function Uf(t, n, l, s, p, d, g, w, x) {
    return t = new gS(t, n, l, w, x), n === 1 ? (n = 1, d === !0 && (n |= 8)) : n = 0, d = Jt(3, null, null, n), t.current = d, d.stateNode = t, d.memoizedState = { element: s, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, tf(d), t;
  }
  function m0(t) {
    if (!t)
      return $n;
    e: {
      if (Lr(t = t._reactInternals) !== t || t.tag !== 1)
        throw Error(i(170));
      var n = t;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Ht(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(i(171));
    }
    if (t.tag === 1) {
      var l = t.type;
      if (Ht(l))
        return zg(t, l, n);
    }
    return n;
  }
  function g0(t, n, l, s, p, d, g, w, x) {
    return (t = Uf(l, s, !0, t, 0, d, 0, w, x)).context = m0(null), l = t.current, (d = Rn(s = xt(), p = lr(l))).callback = n != null ? n : null, nr(l, d, p), t.current.lanes = p, Ii(t, p, s), Nt(t, s), t;
  }
  function vs(t, n, l, s) {
    var p = n.current, d = xt(), g = lr(p);
    return l = m0(l), n.context === null ? n.context = l : n.pendingContext = l, (n = Rn(d, g)).payload = { element: t }, (s = s === void 0 ? null : s) !== null && (n.callback = s), (t = nr(p, n, g)) !== null && (fn(t, p, g, d), Ql(t, p, g)), g;
  }
  function ys(t) {
    return (t = t.current).child ? (t.child.tag, t.child.stateNode) : null;
  }
  function v0(t, n) {
    if ((t = t.memoizedState) !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < n ? l : n;
    }
  }
  function Gf(t, n) {
    v0(t, n), (t = t.alternate) && v0(t, n);
  }
  i0 = function(t, n, l) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps || Ct.current)
        Tt = !0;
      else {
        if ((t.lanes & l) == 0 && (128 & n.flags) == 0)
          return Tt = !1, function(j, I, F) {
            switch (I.tag) {
              case 3:
                Fv(I), Co();
                break;
              case 5:
                av(I);
                break;
              case 1:
                Ht(I.type) && Bl(I);
                break;
              case 4:
                of(I, I.stateNode.containerInfo);
                break;
              case 10:
                var U = I.type._context, W = I.memoizedProps.value;
                Ie(Wl, U._currentValue), U._currentValue = W;
                break;
              case 13:
                if ((U = I.memoizedState) !== null)
                  return U.dehydrated !== null ? (Ie(Qe, 1 & Qe.current), I.flags |= 128, null) : (F & I.child.childLanes) != 0 ? Vv(j, I, F) : (Ie(Qe, 1 & Qe.current), (j = Dn(j, I, F)) !== null ? j.sibling : null);
                Ie(Qe, 1 & Qe.current);
                break;
              case 19:
                if (U = (F & I.childLanes) != 0, (128 & j.flags) != 0) {
                  if (U)
                    return Xv(j, I, F);
                  I.flags |= 128;
                }
                if ((W = I.memoizedState) !== null && (W.rendering = null, W.tail = null, W.lastEffect = null), Ie(Qe, Qe.current), U)
                  break;
                return null;
              case 22:
              case 23:
                return I.lanes = 0, Dv(j, I, F);
            }
            return Dn(j, I, F);
          }(t, n, l);
        Tt = (131072 & t.flags) != 0;
      }
    else
      Tt = !1, Ve && (1048576 & n.flags) != 0 && Vg(n, Gl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var s = n.type;
        os(t, n), t = n.pendingProps;
        var p = xo(n, pt.current);
        Ao(n, l), p = ff(null, n, s, t, p, l);
        var d = pf();
        return n.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Ht(s) ? (d = !0, Bl(n)) : d = !1, n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, tf(n), p.updater = Kl, n.stateNode = p, p._reactInternals = n, rf(n, s, t, l), n = wf(null, n, s, !0, d, l)) : (n.tag = 0, Ve && d && Wc(n), At(null, n, p, l), n = n.child), n;
      case 16:
        s = n.elementType;
        e: {
          switch (os(t, n), t = n.pendingProps, s = (p = s._init)(s._payload), n.type = s, p = n.tag = function(j) {
            if (typeof j == "function")
              return Ff(j) ? 1 : 0;
            if (j != null) {
              if ((j = j.$$typeof) === le)
                return 11;
              if (j === be)
                return 14;
            }
            return 2;
          }(s), t = cn(s, t), p) {
            case 0:
              n = bf(null, n, s, t, l);
              break e;
            case 1:
              n = Hv(null, n, s, t, l);
              break e;
            case 11:
              n = Iv(null, n, s, t, l);
              break e;
            case 14:
              n = _v(null, n, s, cn(s.type, t), l);
              break e;
          }
          throw Error(i(306, s, ""));
        }
        return n;
      case 0:
        return s = n.type, p = n.pendingProps, bf(t, n, s, p = n.elementType === s ? p : cn(s, p), l);
      case 1:
        return s = n.type, p = n.pendingProps, Hv(t, n, s, p = n.elementType === s ? p : cn(s, p), l);
      case 3:
        e: {
          if (Fv(n), t === null)
            throw Error(i(387));
          s = n.pendingProps, p = (d = n.memoizedState).element, Zg(t, n), Yl(n, s, null, l);
          var g = n.memoizedState;
          if (s = g.element, d.isDehydrated) {
            if (d = { element: s, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, n.updateQueue.baseState = d, n.memoizedState = d, 256 & n.flags) {
              n = Bv(t, n, s, l, p = Oo(Error(i(423)), n));
              break e;
            }
            if (s !== p) {
              n = Bv(t, n, s, l, p = Oo(Error(i(424)), n));
              break e;
            }
            for (Bt = qn(n.stateNode.containerInfo.firstChild), Ft = n, Ve = !0, un = null, l = iv(n, null, s, l), n.child = l; l; )
              l.flags = -3 & l.flags | 4096, l = l.sibling;
          } else {
            if (Co(), s === p) {
              n = Dn(t, n, l);
              break e;
            }
            At(t, n, s, l);
          }
          n = n.child;
        }
        return n;
      case 5:
        return av(n), t === null && Yc(n), s = n.type, p = n.pendingProps, d = t !== null ? t.memoizedProps : null, g = p.children, Hc(s, p) ? g = null : d !== null && Hc(s, d) && (n.flags |= 32), jv(t, n), At(t, n, g, l), n.child;
      case 6:
        return t === null && Yc(n), null;
      case 13:
        return Vv(t, n, l);
      case 4:
        return of(n, n.stateNode.containerInfo), s = n.pendingProps, t === null ? n.child = No(n, null, s, l) : At(t, n, s, l), n.child;
      case 11:
        return s = n.type, p = n.pendingProps, Iv(t, n, s, p = n.elementType === s ? p : cn(s, p), l);
      case 7:
        return At(t, n, n.pendingProps, l), n.child;
      case 8:
      case 12:
        return At(t, n, n.pendingProps.children, l), n.child;
      case 10:
        e: {
          if (s = n.type._context, p = n.pendingProps, d = n.memoizedProps, g = p.value, Ie(Wl, s._currentValue), s._currentValue = g, d !== null)
            if (sn(d.value, g)) {
              if (d.children === p.children && !Ct.current) {
                n = Dn(t, n, l);
                break e;
              }
            } else
              for ((d = n.child) !== null && (d.return = n); d !== null; ) {
                var w = d.dependencies;
                if (w !== null) {
                  g = d.child;
                  for (var x = w.firstContext; x !== null; ) {
                    if (x.context === s) {
                      if (d.tag === 1) {
                        (x = Rn(-1, l & -l)).tag = 2;
                        var T = d.updateQueue;
                        if (T !== null) {
                          var P = (T = T.shared).pending;
                          P === null ? x.next = x : (x.next = P.next, P.next = x), T.pending = x;
                        }
                      }
                      d.lanes |= l, (x = d.alternate) !== null && (x.lanes |= l), $c(d.return, l, n), w.lanes |= l;
                      break;
                    }
                    x = x.next;
                  }
                } else if (d.tag === 10)
                  g = d.type === n.type ? null : d.child;
                else if (d.tag === 18) {
                  if ((g = d.return) === null)
                    throw Error(i(341));
                  g.lanes |= l, (w = g.alternate) !== null && (w.lanes |= l), $c(g, l, n), g = d.sibling;
                } else
                  g = d.child;
                if (g !== null)
                  g.return = d;
                else
                  for (g = d; g !== null; ) {
                    if (g === n) {
                      g = null;
                      break;
                    }
                    if ((d = g.sibling) !== null) {
                      d.return = g.return, g = d;
                      break;
                    }
                    g = g.return;
                  }
                d = g;
              }
          At(t, n, p.children, l), n = n.child;
        }
        return n;
      case 9:
        return p = n.type, s = n.pendingProps.children, Ao(n, l), s = s(p = Kt(p)), n.flags |= 1, At(t, n, s, l), n.child;
      case 14:
        return p = cn(s = n.type, n.pendingProps), _v(t, n, s, p = cn(s.type, p), l);
      case 15:
        return Rv(t, n, n.type, n.pendingProps, l);
      case 17:
        return s = n.type, p = n.pendingProps, p = n.elementType === s ? p : cn(s, p), os(t, n), n.tag = 1, Ht(s) ? (t = !0, Bl(n)) : t = !1, Ao(n, l), tv(n, s, p), rf(n, s, p, l), wf(null, n, s, !0, t, l);
      case 19:
        return Xv(t, n, l);
      case 22:
        return Dv(t, n, l);
    }
    throw Error(i(156, n.tag));
  };
  var y0 = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function Vf(t) {
    this._internalRoot = t;
  }
  function bs(t) {
    this._internalRoot = t;
  }
  function Wf(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function ws(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function b0() {
  }
  function ks(t, n, l, s, p) {
    var d = l._reactRootContainer;
    if (d) {
      var g = d;
      if (typeof p == "function") {
        var w = p;
        p = function() {
          var x = ys(g);
          w.call(x);
        };
      }
      vs(n, g, t, p);
    } else
      g = function(x, T, P, j, I) {
        if (I) {
          if (typeof j == "function") {
            var F = j;
            j = function() {
              var C = ys(U);
              F.call(C);
            };
          }
          var U = g0(T, j, x, 0, null, !1, 0, "", b0);
          return x._reactRootContainer = U, x[Ln] = U.current, Xi(x.nodeType === 8 ? x.parentNode : x), zr(), U;
        }
        for (; I = x.lastChild; )
          x.removeChild(I);
        if (typeof j == "function") {
          var W = j;
          j = function() {
            var C = ys(R);
            W.call(C);
          };
        }
        var R = Uf(x, 0, !1, null, 0, !1, 0, "", b0);
        return x._reactRootContainer = R, x[Ln] = R.current, Xi(x.nodeType === 8 ? x.parentNode : x), zr(function() {
          vs(T, R, P, j);
        }), R;
      }(l, n, t, p, s);
    return ys(g);
  }
  bs.prototype.render = Vf.prototype.render = function(t) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(i(409));
    vs(t, n, null, null);
  }, bs.prototype.unmount = Vf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var n = t.containerInfo;
      zr(function() {
        vs(null, t, null, null);
      }), n[Ln] = null;
    }
  }, bs.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var n = $m();
      t = { blockedOn: null, target: t, priority: n };
      for (var l = 0; l < Kn.length && n !== 0 && n < Kn[l].priority; l++)
        ;
      Kn.splice(l, 0, t), l === 0 && ng(t);
    }
  }, qm = function(t) {
    switch (t.tag) {
      case 3:
        var n = t.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var l = Mi(n.pendingLanes);
          l !== 0 && (hc(n, 1 | l), Nt(n, Je()), (6 & Te) == 0 && (Io = Je() + 500, er()));
        }
        break;
      case 13:
        zr(function() {
          var s = _n(t, 1);
          if (s !== null) {
            var p = xt();
            fn(s, t, 1, p);
          }
        }), Gf(t, 1);
    }
  }, mc = function(t) {
    if (t.tag === 13) {
      var n = _n(t, 134217728);
      n !== null && fn(n, t, 134217728, xt()), Gf(t, 134217728);
    }
  }, Jm = function(t) {
    if (t.tag === 13) {
      var n = lr(t), l = _n(t, n);
      l !== null && fn(l, t, n, xt()), Gf(t, n);
    }
  }, $m = function() {
    return Le;
  }, eg = function(t, n) {
    var l = Le;
    try {
      return Le = t, n();
    } finally {
      Le = l;
    }
  }, oc = function(t, n, l) {
    switch (n) {
      case "input":
        if (Yu(t, l), n = l.name, l.type === "radio" && n != null) {
          for (l = t; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < l.length; n++) {
            var s = l[n];
            if (s !== t && s.form === t.form) {
              var p = Fl(s);
              if (!p)
                throw Error(i(90));
              Or(s), Yu(s, p);
            }
          }
        }
        break;
      case "textarea":
        Pm(t, l);
        break;
      case "select":
        (n = l.value) != null && uo(t, !!l.multiple, n, !1);
    }
  }, Hm = Df, Fm = zr;
  var vS = { usingClientEntryPoint: !1, Events: [Ki, wo, Fl, Dm, jm, Df] }, ua = { findFiberByHostInstance: Ir, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, yS = { bundleType: ua.bundleType, version: ua.version, rendererPackageName: ua.rendererPackageName, rendererConfig: ua.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: D.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return (t = Gm(t)) === null ? null : t.stateNode;
  }, findFiberByHostInstance: ua.findFiberByHostInstance || function() {
    return null;
  }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xs.isDisabled && xs.supportsFiber)
      try {
        kl = xs.inject(yS), mn = xs;
      } catch {
      }
  }
  return Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vS, Pt.createPortal = function(t, n) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wf(n))
      throw Error(i(200));
    return function(s, p, d) {
      var g = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: V, key: g == null ? null : "" + g, children: s, containerInfo: p, implementation: d };
    }(t, n, null, l);
  }, Pt.createRoot = function(t, n) {
    if (!Wf(t))
      throw Error(i(299));
    var l = !1, s = "", p = y0;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (p = n.onRecoverableError)), n = Uf(t, 1, !1, null, 0, l, 0, s, p), t[Ln] = n.current, Xi(t.nodeType === 8 ? t.parentNode : t), new Vf(n);
  }, Pt.findDOMNode = function(t) {
    if (t == null)
      return null;
    if (t.nodeType === 1)
      return t;
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","), Error(i(268, t)));
    return t = (t = Gm(n)) === null ? null : t.stateNode;
  }, Pt.flushSync = function(t) {
    return zr(t);
  }, Pt.hydrate = function(t, n, l) {
    if (!ws(n))
      throw Error(i(200));
    return ks(null, t, n, !0, l);
  }, Pt.hydrateRoot = function(t, n, l) {
    if (!Wf(t))
      throw Error(i(405));
    var s = l != null && l.hydratedSources || null, p = !1, d = "", g = y0;
    if (l != null && (l.unstable_strictMode === !0 && (p = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (g = l.onRecoverableError)), n = g0(n, null, t, 1, l != null ? l : null, p, 0, d, g), t[Ln] = n.current, Xi(t), s)
      for (t = 0; t < s.length; t++)
        p = (p = (l = s[t])._getVersion)(l._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [l, p] : n.mutableSourceEagerHydrationData.push(l, p);
    return new bs(n);
  }, Pt.render = function(t, n, l) {
    if (!ws(n))
      throw Error(i(200));
    return ks(null, t, n, !1, l);
  }, Pt.unmountComponentAtNode = function(t) {
    if (!ws(t))
      throw Error(i(40));
    return !!t._reactRootContainer && (zr(function() {
      ks(null, null, t, !1, function() {
        t._reactRootContainer = null, t[Ln] = null;
      });
    }), !0);
  }, Pt.unstable_batchedUpdates = Df, Pt.unstable_renderSubtreeIntoContainer = function(t, n, l, s) {
    if (!ws(l))
      throw Error(i(200));
    if (t == null || t._reactInternals === void 0)
      throw Error(i(38));
    return ks(t, n, l, !1, s);
  }, Pt.version = "18.2.0-next-9e3b772b8-20220608", Pt;
}
(function(e) {
  (function r() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function")
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  })(), e.exports = BC();
})(La);
const l2 = Ne(La.exports);
var Pd = function(e, r) {
  return Pd = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, o) {
    i.__proto__ = o;
  } || function(i, o) {
    for (var a in o)
      Object.prototype.hasOwnProperty.call(o, a) && (i[a] = o[a]);
  }, Pd(e, r);
};
function on(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  function i() {
    this.constructor = e;
  }
  Pd(e, r), e.prototype = r === null ? Object.create(r) : (i.prototype = r.prototype, new i());
}
var ne = function() {
  return ne = Object.assign || function(e) {
    for (var r, i = 1, o = arguments.length; i < o; i++)
      for (var a in r = arguments[i])
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    return e;
  }, ne.apply(this, arguments);
};
function jh(e, r) {
  var i = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && r.indexOf(o) < 0 && (i[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") {
    var a = 0;
    for (o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      r.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (i[o[a]] = e[o[a]]);
  }
  return i;
}
function Cn(e, r, i) {
  if (i || arguments.length === 2)
    for (var o, a = 0, u = r.length; a < u; a++)
      !o && a in r || (o || (o = Array.prototype.slice.call(r, 0, a)), o[a] = r[a]);
  return e.concat(o || Array.prototype.slice.call(r));
}
var B0, zC = { exports: {} }, Pe = {}, ke, Fe, ci, z0 = zC.exports = function() {
  if (B0)
    return Pe;
  B0 = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, h = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, H = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, L = e ? Symbol.for("react.scope") : 60119;
  function V(z) {
    if (typeof z == "object" && z !== null) {
      var te = z.$$typeof;
      switch (te) {
        case r:
          switch (z = z.type) {
            case h:
            case m:
            case o:
            case u:
            case a:
            case y:
              return z;
            default:
              switch (z = z && z.$$typeof) {
                case f:
                case v:
                case A:
                case E:
                case c:
                  return z;
                default:
                  return te;
              }
          }
        case i:
          return te;
      }
    }
  }
  function Q(z) {
    return V(z) === m;
  }
  return Pe.AsyncMode = h, Pe.ConcurrentMode = m, Pe.ContextConsumer = f, Pe.ContextProvider = c, Pe.Element = r, Pe.ForwardRef = v, Pe.Fragment = o, Pe.Lazy = A, Pe.Memo = E, Pe.Portal = i, Pe.Profiler = u, Pe.StrictMode = a, Pe.Suspense = y, Pe.isAsyncMode = function(z) {
    return Q(z) || V(z) === h;
  }, Pe.isConcurrentMode = Q, Pe.isContextConsumer = function(z) {
    return V(z) === f;
  }, Pe.isContextProvider = function(z) {
    return V(z) === c;
  }, Pe.isElement = function(z) {
    return typeof z == "object" && z !== null && z.$$typeof === r;
  }, Pe.isForwardRef = function(z) {
    return V(z) === v;
  }, Pe.isFragment = function(z) {
    return V(z) === o;
  }, Pe.isLazy = function(z) {
    return V(z) === A;
  }, Pe.isMemo = function(z) {
    return V(z) === E;
  }, Pe.isPortal = function(z) {
    return V(z) === i;
  }, Pe.isProfiler = function(z) {
    return V(z) === u;
  }, Pe.isStrictMode = function(z) {
    return V(z) === a;
  }, Pe.isSuspense = function(z) {
    return V(z) === y;
  }, Pe.isValidElementType = function(z) {
    return typeof z == "string" || typeof z == "function" || z === o || z === m || z === u || z === a || z === y || z === b || typeof z == "object" && z !== null && (z.$$typeof === A || z.$$typeof === E || z.$$typeof === c || z.$$typeof === f || z.$$typeof === v || z.$$typeof === H || z.$$typeof === D || z.$$typeof === L || z.$$typeof === S);
  }, Pe.typeOf = V, Pe;
}(), U0 = {};
function s2(e, r, i) {
  if (i === void 0 && (i = Error), !e)
    throw new i(r);
}
function G0(e) {
  return e.type === Fe.literal;
}
function UC(e) {
  return e.type === Fe.argument;
}
function u2(e) {
  return e.type === Fe.number;
}
function c2(e) {
  return e.type === Fe.date;
}
function f2(e) {
  return e.type === Fe.time;
}
function p2(e) {
  return e.type === Fe.select;
}
function d2(e) {
  return e.type === Fe.plural;
}
function GC(e) {
  return e.type === Fe.pound;
}
function h2(e) {
  return e.type === Fe.tag;
}
function m2(e) {
  return !(!e || typeof e != "object" || e.type !== ci.number);
}
function Od(e) {
  return !(!e || typeof e != "object" || e.type !== ci.dateTime);
}
U0[z0.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, U0[z0.Memo] = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
}(ke || (ke = {})), function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
}(Fe || (Fe = {})), function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
}(ci || (ci = {}));
var g2 = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, VC = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function WC(e) {
  var r = {};
  return e.replace(VC, function(i) {
    var o = i.length;
    switch (i[0]) {
      case "G":
        r.era = o === 4 ? "long" : o === 5 ? "narrow" : "short";
        break;
      case "y":
        r.year = o === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        r.month = ["numeric", "2-digit", "short", "long", "narrow"][o - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        r.day = ["numeric", "2-digit"][o - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        r.weekday = o === 4 ? "short" : o === 5 ? "narrow" : "short";
        break;
      case "e":
        if (o < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        r.weekday = ["short", "long", "narrow", "short"][o - 4];
        break;
      case "c":
        if (o < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        r.weekday = ["short", "long", "narrow", "short"][o - 4];
        break;
      case "a":
        r.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        r.hourCycle = "h12", r.hour = ["numeric", "2-digit"][o - 1];
        break;
      case "H":
        r.hourCycle = "h23", r.hour = ["numeric", "2-digit"][o - 1];
        break;
      case "K":
        r.hourCycle = "h11", r.hour = ["numeric", "2-digit"][o - 1];
        break;
      case "k":
        r.hourCycle = "h24", r.hour = ["numeric", "2-digit"][o - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        r.minute = ["numeric", "2-digit"][o - 1];
        break;
      case "s":
        r.second = ["numeric", "2-digit"][o - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        r.timeZoneName = o < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), r;
}
var XC = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i, V0 = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, v2 = /^(@+)?(\+|#+)?[rs]?$/g, QC = /(\*)(0+)|(#+)(0+)|(0+)/g, y2 = /^(0+)$/;
function W0(e) {
  var r = {};
  return e[e.length - 1] === "r" ? r.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (r.roundingPriority = "lessPrecision"), e.replace(v2, function(i, o, a) {
    return typeof a != "string" ? (r.minimumSignificantDigits = o.length, r.maximumSignificantDigits = o.length) : a === "+" ? r.minimumSignificantDigits = o.length : o[0] === "#" ? r.maximumSignificantDigits = o.length : (r.minimumSignificantDigits = o.length, r.maximumSignificantDigits = o.length + (typeof a == "string" ? a.length : 0)), "";
  }), r;
}
function b2(e) {
  switch (e) {
    case "sign-auto":
      return { signDisplay: "auto" };
    case "sign-accounting":
    case "()":
      return { currencySign: "accounting" };
    case "sign-always":
    case "+!":
      return { signDisplay: "always" };
    case "sign-accounting-always":
    case "()!":
      return { signDisplay: "always", currencySign: "accounting" };
    case "sign-except-zero":
    case "+?":
      return { signDisplay: "exceptZero" };
    case "sign-accounting-except-zero":
    case "()?":
      return { signDisplay: "exceptZero", currencySign: "accounting" };
    case "sign-never":
    case "+_":
      return { signDisplay: "never" };
  }
}
function YC(e) {
  var r;
  if (e[0] === "E" && e[1] === "E" ? (r = { notation: "engineering" }, e = e.slice(2)) : e[0] === "E" && (r = { notation: "scientific" }, e = e.slice(1)), r) {
    var i = e.slice(0, 2);
    if (i === "+!" ? (r.signDisplay = "always", e = e.slice(2)) : i === "+?" && (r.signDisplay = "exceptZero", e = e.slice(2)), !y2.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    r.minimumIntegerDigits = e.length;
  }
  return r;
}
function X0(e) {
  var r = b2(e);
  return r || {};
}
function KC(e) {
  for (var r = {}, i = 0, o = e; i < o.length; i++) {
    var a = o[i];
    switch (a.stem) {
      case "percent":
      case "%":
        r.style = "percent";
        continue;
      case "%x100":
        r.style = "percent", r.scale = 100;
        continue;
      case "currency":
        r.style = "currency", r.currency = a.options[0];
        continue;
      case "group-off":
      case ",_":
        r.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        r.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        r.style = "unit", r.unit = a.options[0].replace(/^(.*?)-/, "");
        continue;
      case "compact-short":
      case "K":
        r.notation = "compact", r.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        r.notation = "compact", r.compactDisplay = "long";
        continue;
      case "scientific":
        r = ne(ne(ne({}, r), { notation: "scientific" }), a.options.reduce(function(h, m) {
          return ne(ne({}, h), X0(m));
        }, {}));
        continue;
      case "engineering":
        r = ne(ne(ne({}, r), { notation: "engineering" }), a.options.reduce(function(h, m) {
          return ne(ne({}, h), X0(m));
        }, {}));
        continue;
      case "notation-simple":
        r.notation = "standard";
        continue;
      case "unit-width-narrow":
        r.currencyDisplay = "narrowSymbol", r.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        r.currencyDisplay = "code", r.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        r.currencyDisplay = "name", r.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        r.currencyDisplay = "symbol";
        continue;
      case "scale":
        r.scale = parseFloat(a.options[0]);
        continue;
      case "integer-width":
        if (a.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        a.options[0].replace(QC, function(h, m, v, y, b, E) {
          if (m)
            r.minimumIntegerDigits = v.length;
          else {
            if (y && b)
              throw new Error("We currently do not support maximum integer digits");
            if (E)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (y2.test(a.stem))
      r.minimumIntegerDigits = a.stem.length;
    else if (V0.test(a.stem)) {
      if (a.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      a.stem.replace(V0, function(h, m, v, y, b, E) {
        return v === "*" ? r.minimumFractionDigits = m.length : y && y[0] === "#" ? r.maximumFractionDigits = y.length : b && E ? (r.minimumFractionDigits = b.length, r.maximumFractionDigits = b.length + E.length) : (r.minimumFractionDigits = m.length, r.maximumFractionDigits = m.length), "";
      });
      var u = a.options[0];
      u === "w" ? r = ne(ne({}, r), { trailingZeroDisplay: "stripIfInteger" }) : u && (r = ne(ne({}, r), W0(u)));
    } else if (v2.test(a.stem))
      r = ne(ne({}, r), W0(a.stem));
    else {
      var c = b2(a.stem);
      c && (r = ne(ne({}, r), c));
      var f = YC(a.stem);
      f && (r = ne(ne({}, r), f));
    }
  }
  return r;
}
var Qf, Es = { AX: ["H"], BQ: ["H"], CP: ["H"], CZ: ["H"], DK: ["H"], FI: ["H"], ID: ["H"], IS: ["H"], ML: ["H"], NE: ["H"], RU: ["H"], SE: ["H"], SJ: ["H"], SK: ["H"], AS: ["h", "H"], BT: ["h", "H"], DJ: ["h", "H"], ER: ["h", "H"], GH: ["h", "H"], IN: ["h", "H"], LS: ["h", "H"], PG: ["h", "H"], PW: ["h", "H"], SO: ["h", "H"], TO: ["h", "H"], VU: ["h", "H"], WS: ["h", "H"], "001": ["H", "h"], AL: ["h", "H", "hB"], TD: ["h", "H", "hB"], "ca-ES": ["H", "h", "hB"], CF: ["H", "h", "hB"], CM: ["H", "h", "hB"], "fr-CA": ["H", "h", "hB"], "gl-ES": ["H", "h", "hB"], "it-CH": ["H", "h", "hB"], "it-IT": ["H", "h", "hB"], LU: ["H", "h", "hB"], NP: ["H", "h", "hB"], PF: ["H", "h", "hB"], SC: ["H", "h", "hB"], SM: ["H", "h", "hB"], SN: ["H", "h", "hB"], TF: ["H", "h", "hB"], VA: ["H", "h", "hB"], CY: ["h", "H", "hb", "hB"], GR: ["h", "H", "hb", "hB"], CO: ["h", "H", "hB", "hb"], DO: ["h", "H", "hB", "hb"], KP: ["h", "H", "hB", "hb"], KR: ["h", "H", "hB", "hb"], NA: ["h", "H", "hB", "hb"], PA: ["h", "H", "hB", "hb"], PR: ["h", "H", "hB", "hb"], VE: ["h", "H", "hB", "hb"], AC: ["H", "h", "hb", "hB"], AI: ["H", "h", "hb", "hB"], BW: ["H", "h", "hb", "hB"], BZ: ["H", "h", "hb", "hB"], CC: ["H", "h", "hb", "hB"], CK: ["H", "h", "hb", "hB"], CX: ["H", "h", "hb", "hB"], DG: ["H", "h", "hb", "hB"], FK: ["H", "h", "hb", "hB"], GB: ["H", "h", "hb", "hB"], GG: ["H", "h", "hb", "hB"], GI: ["H", "h", "hb", "hB"], IE: ["H", "h", "hb", "hB"], IM: ["H", "h", "hb", "hB"], IO: ["H", "h", "hb", "hB"], JE: ["H", "h", "hb", "hB"], LT: ["H", "h", "hb", "hB"], MK: ["H", "h", "hb", "hB"], MN: ["H", "h", "hb", "hB"], MS: ["H", "h", "hb", "hB"], NF: ["H", "h", "hb", "hB"], NG: ["H", "h", "hb", "hB"], NR: ["H", "h", "hb", "hB"], NU: ["H", "h", "hb", "hB"], PN: ["H", "h", "hb", "hB"], SH: ["H", "h", "hb", "hB"], SX: ["H", "h", "hb", "hB"], TA: ["H", "h", "hb", "hB"], ZA: ["H", "h", "hb", "hB"], "af-ZA": ["H", "h", "hB", "hb"], AR: ["H", "h", "hB", "hb"], CL: ["H", "h", "hB", "hb"], CR: ["H", "h", "hB", "hb"], CU: ["H", "h", "hB", "hb"], EA: ["H", "h", "hB", "hb"], "es-BO": ["H", "h", "hB", "hb"], "es-BR": ["H", "h", "hB", "hb"], "es-EC": ["H", "h", "hB", "hb"], "es-ES": ["H", "h", "hB", "hb"], "es-GQ": ["H", "h", "hB", "hb"], "es-PE": ["H", "h", "hB", "hb"], GT: ["H", "h", "hB", "hb"], HN: ["H", "h", "hB", "hb"], IC: ["H", "h", "hB", "hb"], KG: ["H", "h", "hB", "hb"], KM: ["H", "h", "hB", "hb"], LK: ["H", "h", "hB", "hb"], MA: ["H", "h", "hB", "hb"], MX: ["H", "h", "hB", "hb"], NI: ["H", "h", "hB", "hb"], PY: ["H", "h", "hB", "hb"], SV: ["H", "h", "hB", "hb"], UY: ["H", "h", "hB", "hb"], JP: ["H", "h", "K"], AD: ["H", "hB"], AM: ["H", "hB"], AO: ["H", "hB"], AT: ["H", "hB"], AW: ["H", "hB"], BE: ["H", "hB"], BF: ["H", "hB"], BJ: ["H", "hB"], BL: ["H", "hB"], BR: ["H", "hB"], CG: ["H", "hB"], CI: ["H", "hB"], CV: ["H", "hB"], DE: ["H", "hB"], EE: ["H", "hB"], FR: ["H", "hB"], GA: ["H", "hB"], GF: ["H", "hB"], GN: ["H", "hB"], GP: ["H", "hB"], GW: ["H", "hB"], HR: ["H", "hB"], IL: ["H", "hB"], IT: ["H", "hB"], KZ: ["H", "hB"], MC: ["H", "hB"], MD: ["H", "hB"], MF: ["H", "hB"], MQ: ["H", "hB"], MZ: ["H", "hB"], NC: ["H", "hB"], NL: ["H", "hB"], PM: ["H", "hB"], PT: ["H", "hB"], RE: ["H", "hB"], RO: ["H", "hB"], SI: ["H", "hB"], SR: ["H", "hB"], ST: ["H", "hB"], TG: ["H", "hB"], TR: ["H", "hB"], WF: ["H", "hB"], YT: ["H", "hB"], BD: ["h", "hB", "H"], PK: ["h", "hB", "H"], AZ: ["H", "hB", "h"], BA: ["H", "hB", "h"], BG: ["H", "hB", "h"], CH: ["H", "hB", "h"], GE: ["H", "hB", "h"], LI: ["H", "hB", "h"], ME: ["H", "hB", "h"], RS: ["H", "hB", "h"], UA: ["H", "hB", "h"], UZ: ["H", "hB", "h"], XK: ["H", "hB", "h"], AG: ["h", "hb", "H", "hB"], AU: ["h", "hb", "H", "hB"], BB: ["h", "hb", "H", "hB"], BM: ["h", "hb", "H", "hB"], BS: ["h", "hb", "H", "hB"], CA: ["h", "hb", "H", "hB"], DM: ["h", "hb", "H", "hB"], "en-001": ["h", "hb", "H", "hB"], FJ: ["h", "hb", "H", "hB"], FM: ["h", "hb", "H", "hB"], GD: ["h", "hb", "H", "hB"], GM: ["h", "hb", "H", "hB"], GU: ["h", "hb", "H", "hB"], GY: ["h", "hb", "H", "hB"], JM: ["h", "hb", "H", "hB"], KI: ["h", "hb", "H", "hB"], KN: ["h", "hb", "H", "hB"], KY: ["h", "hb", "H", "hB"], LC: ["h", "hb", "H", "hB"], LR: ["h", "hb", "H", "hB"], MH: ["h", "hb", "H", "hB"], MP: ["h", "hb", "H", "hB"], MW: ["h", "hb", "H", "hB"], NZ: ["h", "hb", "H", "hB"], SB: ["h", "hb", "H", "hB"], SG: ["h", "hb", "H", "hB"], SL: ["h", "hb", "H", "hB"], SS: ["h", "hb", "H", "hB"], SZ: ["h", "hb", "H", "hB"], TC: ["h", "hb", "H", "hB"], TT: ["h", "hb", "H", "hB"], UM: ["h", "hb", "H", "hB"], US: ["h", "hb", "H", "hB"], VC: ["h", "hb", "H", "hB"], VG: ["h", "hb", "H", "hB"], VI: ["h", "hb", "H", "hB"], ZM: ["h", "hb", "H", "hB"], BO: ["H", "hB", "h", "hb"], EC: ["H", "hB", "h", "hb"], ES: ["H", "hB", "h", "hb"], GQ: ["H", "hB", "h", "hb"], PE: ["H", "hB", "h", "hb"], AE: ["h", "hB", "hb", "H"], "ar-001": ["h", "hB", "hb", "H"], BH: ["h", "hB", "hb", "H"], DZ: ["h", "hB", "hb", "H"], EG: ["h", "hB", "hb", "H"], EH: ["h", "hB", "hb", "H"], HK: ["h", "hB", "hb", "H"], IQ: ["h", "hB", "hb", "H"], JO: ["h", "hB", "hb", "H"], KW: ["h", "hB", "hb", "H"], LB: ["h", "hB", "hb", "H"], LY: ["h", "hB", "hb", "H"], MO: ["h", "hB", "hb", "H"], MR: ["h", "hB", "hb", "H"], OM: ["h", "hB", "hb", "H"], PH: ["h", "hB", "hb", "H"], PS: ["h", "hB", "hb", "H"], QA: ["h", "hB", "hb", "H"], SA: ["h", "hB", "hb", "H"], SD: ["h", "hB", "hb", "H"], SY: ["h", "hB", "hb", "H"], TN: ["h", "hB", "hb", "H"], YE: ["h", "hB", "hb", "H"], AF: ["H", "hb", "hB", "h"], LA: ["H", "hb", "hB", "h"], CN: ["H", "hB", "hb", "h"], LV: ["H", "hB", "hb", "h"], TL: ["H", "hB", "hb", "h"], "zu-ZA": ["H", "hB", "hb", "h"], CD: ["hB", "H"], IR: ["hB", "H"], "hi-IN": ["hB", "h", "H"], "kn-IN": ["hB", "h", "H"], "ml-IN": ["hB", "h", "H"], "te-IN": ["hB", "h", "H"], KH: ["hB", "h", "H", "hb"], "ta-IN": ["hB", "h", "hb", "H"], BN: ["hb", "hB", "h", "H"], MY: ["hb", "hB", "h", "H"], ET: ["hB", "hb", "h", "H"], "gu-IN": ["hB", "hb", "h", "H"], "mr-IN": ["hB", "hb", "h", "H"], "pa-IN": ["hB", "hb", "h", "H"], TW: ["hB", "hb", "h", "H"], KE: ["hB", "hb", "H", "h"], MM: ["hB", "hb", "H", "h"], TZ: ["hB", "hb", "H", "h"], UG: ["hB", "hb", "H", "h"] };
function ZC(e) {
  var r = e.hourCycle;
  if (r === void 0 && e.hourCycles && e.hourCycles.length && (r = e.hourCycles[0]), r)
    switch (r) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var i, o = e.language;
  return o !== "root" && (i = e.maximize().region), (Es[i || ""] || Es[o || ""] || Es["".concat(o, "-001")] || Es["001"])[0];
}
var qC = new RegExp("^".concat(g2.source, "*")), JC = new RegExp("".concat(g2.source, "*$"));
function xe(e, r) {
  return { start: e, end: r };
}
var $C = !!String.prototype.startsWith, eT = !!String.fromCodePoint, tT = !!Object.fromEntries, nT = !!String.prototype.codePointAt, rT = !!String.prototype.trimStart, oT = !!String.prototype.trimEnd, iT = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Ld = !0;
try {
  Ld = ((Qf = k2("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) === null || Qf === void 0 ? void 0 : Qf[0]) === "a";
} catch {
  Ld = !1;
}
var Md, Q0 = $C ? function(e, r, i) {
  return e.startsWith(r, i);
} : function(e, r, i) {
  return e.slice(i, i + r.length) === r;
}, Id = eT ? String.fromCodePoint : function() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  for (var i, o = "", a = e.length, u = 0; a > u; ) {
    if ((i = e[u++]) > 1114111)
      throw RangeError(i + " is not a valid code point");
    o += i < 65536 ? String.fromCharCode(i) : String.fromCharCode(55296 + ((i -= 65536) >> 10), i % 1024 + 56320);
  }
  return o;
}, Y0 = tT ? Object.fromEntries : function(e) {
  for (var r = {}, i = 0, o = e; i < o.length; i++) {
    var a = o[i], u = a[0], c = a[1];
    r[u] = c;
  }
  return r;
}, w2 = nT ? function(e, r) {
  return e.codePointAt(r);
} : function(e, r) {
  var i = e.length;
  if (!(r < 0 || r >= i)) {
    var o, a = e.charCodeAt(r);
    return a < 55296 || a > 56319 || r + 1 === i || (o = e.charCodeAt(r + 1)) < 56320 || o > 57343 ? a : o - 56320 + (a - 55296 << 10) + 65536;
  }
}, aT = rT ? function(e) {
  return e.trimStart();
} : function(e) {
  return e.replace(qC, "");
}, lT = oT ? function(e) {
  return e.trimEnd();
} : function(e) {
  return e.replace(JC, "");
};
function k2(e, r) {
  return new RegExp(e, r);
}
if (Ld) {
  var K0 = k2("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Md = function(e, r) {
    var i;
    return K0.lastIndex = r, (i = K0.exec(e)[1]) !== null && i !== void 0 ? i : "";
  };
} else
  Md = function(e, r) {
    for (var i = []; ; ) {
      var o = w2(e, r);
      if (o === void 0 || x2(o) || uT(o))
        break;
      i.push(o), r += o >= 65536 ? 2 : 1;
    }
    return Id.apply(void 0, i);
  };
var sT = function() {
  function e(r, i) {
    i === void 0 && (i = {}), this.message = r, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!i.ignoreTag, this.locale = i.locale, this.requiresOtherClause = !!i.requiresOtherClause, this.shouldParseSkeletons = !!i.shouldParseSkeletons;
  }
  return e.prototype.parse = function() {
    if (this.offset() !== 0)
      throw Error("parser can only be used once");
    return this.parseMessage(0, "", !1);
  }, e.prototype.parseMessage = function(r, i, o) {
    for (var a = []; !this.isEOF(); ) {
      var u = this.char();
      if (u === 123) {
        if ((c = this.parseArgument(r, o)).err)
          return c;
        a.push(c.val);
      } else {
        if (u === 125 && r > 0)
          break;
        if (u !== 35 || i !== "plural" && i !== "selectordinal") {
          if (u === 60 && !this.ignoreTag && this.peek() === 47) {
            if (o)
              break;
            return this.error(ke.UNMATCHED_CLOSING_TAG, xe(this.clonePosition(), this.clonePosition()));
          }
          if (u === 60 && !this.ignoreTag && Yf(this.peek() || 0)) {
            if ((c = this.parseTag(r, i)).err)
              return c;
            a.push(c.val);
          } else {
            var c;
            if ((c = this.parseLiteral(r, i)).err)
              return c;
            a.push(c.val);
          }
        } else {
          var f = this.clonePosition();
          this.bump(), a.push({ type: Fe.pound, location: xe(f, this.clonePosition()) });
        }
      }
    }
    return { val: a, err: null };
  }, e.prototype.parseTag = function(r, i) {
    var o = this.clonePosition();
    this.bump();
    var a = this.parseTagName();
    if (this.bumpSpace(), this.bumpIf("/>"))
      return { val: { type: Fe.literal, value: "<".concat(a, "/>"), location: xe(o, this.clonePosition()) }, err: null };
    if (this.bumpIf(">")) {
      var u = this.parseMessage(r + 1, i, !0);
      if (u.err)
        return u;
      var c = u.val, f = this.clonePosition();
      if (this.bumpIf("</")) {
        if (this.isEOF() || !Yf(this.char()))
          return this.error(ke.INVALID_TAG, xe(f, this.clonePosition()));
        var h = this.clonePosition();
        return a !== this.parseTagName() ? this.error(ke.UNMATCHED_CLOSING_TAG, xe(h, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? { val: { type: Fe.tag, value: a, children: c, location: xe(o, this.clonePosition()) }, err: null } : this.error(ke.INVALID_TAG, xe(f, this.clonePosition())));
      }
      return this.error(ke.UNCLOSED_TAG, xe(o, this.clonePosition()));
    }
    return this.error(ke.INVALID_TAG, xe(o, this.clonePosition()));
  }, e.prototype.parseTagName = function() {
    var r, i = this.offset();
    for (this.bump(); !this.isEOF() && ((r = this.char()) === 45 || r === 46 || r >= 48 && r <= 57 || r === 95 || r >= 97 && r <= 122 || r >= 65 && r <= 90 || r == 183 || r >= 192 && r <= 214 || r >= 216 && r <= 246 || r >= 248 && r <= 893 || r >= 895 && r <= 8191 || r >= 8204 && r <= 8205 || r >= 8255 && r <= 8256 || r >= 8304 && r <= 8591 || r >= 11264 && r <= 12271 || r >= 12289 && r <= 55295 || r >= 63744 && r <= 64975 || r >= 65008 && r <= 65533 || r >= 65536 && r <= 983039); )
      this.bump();
    return this.message.slice(i, this.offset());
  }, e.prototype.parseLiteral = function(r, i) {
    for (var o = this.clonePosition(), a = ""; ; ) {
      var u = this.tryParseQuote(i);
      if (u)
        a += u;
      else {
        var c = this.tryParseUnquoted(r, i);
        if (c)
          a += c;
        else {
          var f = this.tryParseLeftAngleBracket();
          if (!f)
            break;
          a += f;
        }
      }
    }
    var h = xe(o, this.clonePosition());
    return { val: { type: Fe.literal, value: a, location: h }, err: null };
  }, e.prototype.tryParseLeftAngleBracket = function() {
    return this.isEOF() || this.char() !== 60 || !this.ignoreTag && (Yf(r = this.peek() || 0) || r === 47) ? null : (this.bump(), "<");
    var r;
  }, e.prototype.tryParseQuote = function(r) {
    if (this.isEOF() || this.char() !== 39)
      return null;
    switch (this.peek()) {
      case 39:
        return this.bump(), this.bump(), "'";
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        if (r === "plural" || r === "selectordinal")
          break;
        return null;
      default:
        return null;
    }
    this.bump();
    var i = [this.char()];
    for (this.bump(); !this.isEOF(); ) {
      var o = this.char();
      if (o === 39) {
        if (this.peek() !== 39) {
          this.bump();
          break;
        }
        i.push(39), this.bump();
      } else
        i.push(o);
      this.bump();
    }
    return Id.apply(void 0, i);
  }, e.prototype.tryParseUnquoted = function(r, i) {
    if (this.isEOF())
      return null;
    var o = this.char();
    return o === 60 || o === 123 || o === 35 && (i === "plural" || i === "selectordinal") || o === 125 && r > 0 ? null : (this.bump(), Id(o));
  }, e.prototype.parseArgument = function(r, i) {
    var o = this.clonePosition();
    if (this.bump(), this.bumpSpace(), this.isEOF())
      return this.error(ke.EXPECT_ARGUMENT_CLOSING_BRACE, xe(o, this.clonePosition()));
    if (this.char() === 125)
      return this.bump(), this.error(ke.EMPTY_ARGUMENT, xe(o, this.clonePosition()));
    var a = this.parseIdentifierIfPossible().value;
    if (!a)
      return this.error(ke.MALFORMED_ARGUMENT, xe(o, this.clonePosition()));
    if (this.bumpSpace(), this.isEOF())
      return this.error(ke.EXPECT_ARGUMENT_CLOSING_BRACE, xe(o, this.clonePosition()));
    switch (this.char()) {
      case 125:
        return this.bump(), { val: { type: Fe.argument, value: a, location: xe(o, this.clonePosition()) }, err: null };
      case 44:
        return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ke.EXPECT_ARGUMENT_CLOSING_BRACE, xe(o, this.clonePosition())) : this.parseArgumentOptions(r, i, a, o);
      default:
        return this.error(ke.MALFORMED_ARGUMENT, xe(o, this.clonePosition()));
    }
  }, e.prototype.parseIdentifierIfPossible = function() {
    var r = this.clonePosition(), i = this.offset(), o = Md(this.message, i), a = i + o.length;
    return this.bumpTo(a), { value: o, location: xe(r, this.clonePosition()) };
  }, e.prototype.parseArgumentOptions = function(r, i, o, a) {
    var u, c = this.clonePosition(), f = this.parseIdentifierIfPossible().value, h = this.clonePosition();
    switch (f) {
      case "":
        return this.error(ke.EXPECT_ARGUMENT_TYPE, xe(c, h));
      case "number":
      case "date":
      case "time":
        this.bumpSpace();
        var m = null;
        if (this.bumpIf(",")) {
          this.bumpSpace();
          var v = this.clonePosition();
          if ((L = this.parseSimpleArgStyleIfPossible()).err)
            return L;
          if ((A = lT(L.val)).length === 0)
            return this.error(ke.EXPECT_ARGUMENT_STYLE, xe(this.clonePosition(), this.clonePosition()));
          m = { style: A, styleLocation: xe(v, this.clonePosition()) };
        }
        if ((V = this.tryParseArgumentClose(a)).err)
          return V;
        var y = xe(a, this.clonePosition());
        if (m && Q0(m == null ? void 0 : m.style, "::", 0)) {
          var b = aT(m.style.slice(2));
          if (f === "number")
            return (L = this.parseNumberSkeletonFromString(b, m.styleLocation)).err ? L : { val: { type: Fe.number, value: o, location: y, style: L.val }, err: null };
          if (b.length === 0)
            return this.error(ke.EXPECT_DATE_TIME_SKELETON, y);
          var E = b;
          this.locale && (E = function(te, J) {
            for (var he = "", le = 0; le < te.length; le++) {
              var me = te.charAt(le);
              if (me === "j") {
                for (var ye = 0; le + 1 < te.length && te.charAt(le + 1) === me; )
                  ye++, le++;
                var be = 1 + (1 & ye), Me = ye < 2 ? 1 : 3 + (ye >> 1), we = ZC(J);
                for (we != "H" && we != "k" || (Me = 0); Me-- > 0; )
                  he += "a";
                for (; be-- > 0; )
                  he = we + he;
              } else
                he += me === "J" ? "H" : me;
            }
            return he;
          }(b, this.locale));
          var A = { type: ci.dateTime, pattern: E, location: m.styleLocation, parsedOptions: this.shouldParseSkeletons ? WC(E) : {} };
          return { val: { type: f === "date" ? Fe.date : Fe.time, value: o, location: y, style: A }, err: null };
        }
        return { val: { type: f === "number" ? Fe.number : f === "date" ? Fe.date : Fe.time, value: o, location: y, style: (u = m == null ? void 0 : m.style) !== null && u !== void 0 ? u : null }, err: null };
      case "plural":
      case "selectordinal":
      case "select":
        var S = this.clonePosition();
        if (this.bumpSpace(), !this.bumpIf(","))
          return this.error(ke.EXPECT_SELECT_ARGUMENT_OPTIONS, xe(S, ne({}, S)));
        this.bumpSpace();
        var H = this.parseIdentifierIfPossible(), D = 0;
        if (f !== "select" && H.value === "offset") {
          if (!this.bumpIf(":"))
            return this.error(ke.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, xe(this.clonePosition(), this.clonePosition()));
          var L;
          if (this.bumpSpace(), (L = this.tryParseDecimalInteger(ke.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ke.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)
            return L;
          this.bumpSpace(), H = this.parseIdentifierIfPossible(), D = L.val;
        }
        var V, Q = this.tryParsePluralOrSelectOptions(r, f, i, H);
        if (Q.err)
          return Q;
        if ((V = this.tryParseArgumentClose(a)).err)
          return V;
        var z = xe(a, this.clonePosition());
        return f === "select" ? { val: { type: Fe.select, value: o, options: Y0(Q.val), location: z }, err: null } : { val: { type: Fe.plural, value: o, options: Y0(Q.val), offset: D, pluralType: f === "plural" ? "cardinal" : "ordinal", location: z }, err: null };
      default:
        return this.error(ke.INVALID_ARGUMENT_TYPE, xe(c, h));
    }
  }, e.prototype.tryParseArgumentClose = function(r) {
    return this.isEOF() || this.char() !== 125 ? this.error(ke.EXPECT_ARGUMENT_CLOSING_BRACE, xe(r, this.clonePosition())) : (this.bump(), { val: !0, err: null });
  }, e.prototype.parseSimpleArgStyleIfPossible = function() {
    for (var r = 0, i = this.clonePosition(); !this.isEOF(); )
      switch (this.char()) {
        case 39:
          this.bump();
          var o = this.clonePosition();
          if (!this.bumpUntil("'"))
            return this.error(ke.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, xe(o, this.clonePosition()));
          this.bump();
          break;
        case 123:
          r += 1, this.bump();
          break;
        case 125:
          if (!(r > 0))
            return { val: this.message.slice(i.offset, this.offset()), err: null };
          r -= 1;
          break;
        default:
          this.bump();
      }
    return { val: this.message.slice(i.offset, this.offset()), err: null };
  }, e.prototype.parseNumberSkeletonFromString = function(r, i) {
    var o = [];
    try {
      o = function(a) {
        if (a.length === 0)
          throw new Error("Number skeleton cannot be empty");
        for (var u = [], c = 0, f = a.split(XC).filter(function(E) {
          return E.length > 0;
        }); c < f.length; c++) {
          var h = f[c].split("/");
          if (h.length === 0)
            throw new Error("Invalid number skeleton");
          for (var m = h[0], v = h.slice(1), y = 0, b = v; y < b.length; y++)
            if (b[y].length === 0)
              throw new Error("Invalid number skeleton");
          u.push({ stem: m, options: v });
        }
        return u;
      }(r);
    } catch {
      return this.error(ke.INVALID_NUMBER_SKELETON, i);
    }
    return { val: { type: ci.number, tokens: o, location: i, parsedOptions: this.shouldParseSkeletons ? KC(o) : {} }, err: null };
  }, e.prototype.tryParsePluralOrSelectOptions = function(r, i, o, a) {
    for (var u, c = !1, f = [], h = /* @__PURE__ */ new Set(), m = a.value, v = a.location; ; ) {
      if (m.length === 0) {
        var y = this.clonePosition();
        if (i === "select" || !this.bumpIf("="))
          break;
        var b = this.tryParseDecimalInteger(ke.EXPECT_PLURAL_ARGUMENT_SELECTOR, ke.INVALID_PLURAL_ARGUMENT_SELECTOR);
        if (b.err)
          return b;
        v = xe(y, this.clonePosition()), m = this.message.slice(y.offset, this.offset());
      }
      if (h.has(m))
        return this.error(i === "select" ? ke.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ke.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, v);
      m === "other" && (c = !0), this.bumpSpace();
      var E = this.clonePosition();
      if (!this.bumpIf("{"))
        return this.error(i === "select" ? ke.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ke.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, xe(this.clonePosition(), this.clonePosition()));
      var A = this.parseMessage(r + 1, i, o);
      if (A.err)
        return A;
      var S = this.tryParseArgumentClose(E);
      if (S.err)
        return S;
      f.push([m, { value: A.val, location: xe(E, this.clonePosition()) }]), h.add(m), this.bumpSpace(), m = (u = this.parseIdentifierIfPossible()).value, v = u.location;
    }
    return f.length === 0 ? this.error(i === "select" ? ke.EXPECT_SELECT_ARGUMENT_SELECTOR : ke.EXPECT_PLURAL_ARGUMENT_SELECTOR, xe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !c ? this.error(ke.MISSING_OTHER_CLAUSE, xe(this.clonePosition(), this.clonePosition())) : { val: f, err: null };
  }, e.prototype.tryParseDecimalInteger = function(r, i) {
    var o = 1, a = this.clonePosition();
    this.bumpIf("+") || this.bumpIf("-") && (o = -1);
    for (var u = !1, c = 0; !this.isEOF(); ) {
      var f = this.char();
      if (!(f >= 48 && f <= 57))
        break;
      u = !0, c = 10 * c + (f - 48), this.bump();
    }
    var h = xe(a, this.clonePosition());
    return u ? iT(c *= o) ? { val: c, err: null } : this.error(i, h) : this.error(r, h);
  }, e.prototype.offset = function() {
    return this.position.offset;
  }, e.prototype.isEOF = function() {
    return this.offset() === this.message.length;
  }, e.prototype.clonePosition = function() {
    return { offset: this.position.offset, line: this.position.line, column: this.position.column };
  }, e.prototype.char = function() {
    var r = this.position.offset;
    if (r >= this.message.length)
      throw Error("out of bound");
    var i = w2(this.message, r);
    if (i === void 0)
      throw Error("Offset ".concat(r, " is at invalid UTF-16 code unit boundary"));
    return i;
  }, e.prototype.error = function(r, i) {
    return { val: null, err: { kind: r, message: this.message, location: i } };
  }, e.prototype.bump = function() {
    if (!this.isEOF()) {
      var r = this.char();
      r === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += r < 65536 ? 1 : 2);
    }
  }, e.prototype.bumpIf = function(r) {
    if (Q0(this.message, r, this.offset())) {
      for (var i = 0; i < r.length; i++)
        this.bump();
      return !0;
    }
    return !1;
  }, e.prototype.bumpUntil = function(r) {
    var i = this.offset(), o = this.message.indexOf(r, i);
    return o >= 0 ? (this.bumpTo(o), !0) : (this.bumpTo(this.message.length), !1);
  }, e.prototype.bumpTo = function(r) {
    if (this.offset() > r)
      throw Error("targetOffset ".concat(r, " must be greater than or equal to the current offset ").concat(this.offset()));
    for (r = Math.min(r, this.message.length); ; ) {
      var i = this.offset();
      if (i === r)
        break;
      if (i > r)
        throw Error("targetOffset ".concat(r, " is at invalid UTF-16 code unit boundary"));
      if (this.bump(), this.isEOF())
        break;
    }
  }, e.prototype.bumpSpace = function() {
    for (; !this.isEOF() && x2(this.char()); )
      this.bump();
  }, e.prototype.peek = function() {
    if (this.isEOF())
      return null;
    var r = this.char(), i = this.offset(), o = this.message.charCodeAt(i + (r >= 65536 ? 2 : 1));
    return o != null ? o : null;
  }, e;
}();
function Yf(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function x2(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function uT(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function _d(e) {
  e.forEach(function(r) {
    if (delete r.location, p2(r) || d2(r))
      for (var i in r.options)
        delete r.options[i].location, _d(r.options[i].value);
    else
      u2(r) && m2(r.style) || (c2(r) || f2(r)) && Od(r.style) ? delete r.style.location : h2(r) && _d(r.children);
  });
}
function cT(e, r) {
  r === void 0 && (r = {}), r = ne({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, r);
  var i = new sT(e, r).parse();
  if (i.err) {
    var o = SyntaxError(ke[i.err.kind]);
    throw o.location = i.err.location, o.originalMessage = i.err.message, o;
  }
  return r != null && r.captureLocation || _d(i.val), i.val;
}
function En(e, r) {
  var i = r && r.cache ? r.cache : dT, o = r && r.serializer ? r.serializer : pT;
  return (r && r.strategy ? r.strategy : fT)(e, { cache: i, serializer: o });
}
function E2(e, r, i, o) {
  var a, u = (a = o) == null || typeof a == "number" || typeof a == "boolean" ? o : i(o), c = r.get(u);
  return c === void 0 && (c = e.call(this, o), r.set(u, c)), c;
}
function S2(e, r, i) {
  var o = Array.prototype.slice.call(arguments, 3), a = i(o), u = r.get(a);
  return u === void 0 && (u = e.apply(this, o), r.set(a, u)), u;
}
function Rd(e, r, i, o, a) {
  return i.bind(r, e, o, a);
}
function fT(e, r) {
  return Rd(e, this, e.length === 1 ? E2 : S2, r.cache.create(), r.serializer);
}
var pT = function() {
  return JSON.stringify(arguments);
};
function Dd() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Dd.prototype.get = function(e) {
  return this.cache[e];
}, Dd.prototype.set = function(e, r) {
  this.cache[e] = r;
};
var An, dT = { create: function() {
  return new Dd();
} }, Sn = { variadic: function(e, r) {
  return Rd(e, this, S2, r.cache.create(), r.serializer);
}, monadic: function(e, r) {
  return Rd(e, this, E2, r.cache.create(), r.serializer);
} };
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(An || (An = {}));
var Et, xr = function(e) {
  function r(i, o, a) {
    var u = e.call(this, i) || this;
    return u.code = o, u.originalMessage = a, u;
  }
  return on(r, e), r.prototype.toString = function() {
    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
  }, r;
}(Error), Z0 = function(e) {
  function r(i, o, a, u) {
    return e.call(this, 'Invalid values for "'.concat(i, '": "').concat(o, '". Options are "').concat(Object.keys(a).join('", "'), '"'), An.INVALID_VALUE, u) || this;
  }
  return on(r, e), r;
}(xr), hT = function(e) {
  function r(i, o, a) {
    return e.call(this, 'Value for "'.concat(i, '" must be of type ').concat(o), An.INVALID_VALUE, a) || this;
  }
  return on(r, e), r;
}(xr), mT = function(e) {
  function r(i, o) {
    return e.call(this, 'The intl string context variable "'.concat(i, '" was not provided to the string "').concat(o, '"'), An.MISSING_VALUE, o) || this;
  }
  return on(r, e), r;
}(xr);
function C2(e) {
  return typeof e == "function";
}
function Vs(e, r, i, o, a, u, c) {
  if (e.length === 1 && G0(e[0]))
    return [{ type: Et.literal, value: e[0].value }];
  for (var f = [], h = 0, m = e; h < m.length; h++) {
    var v = m[h];
    if (G0(v))
      f.push({ type: Et.literal, value: v.value });
    else if (GC(v))
      typeof u == "number" && f.push({ type: Et.literal, value: i.getNumberFormat(r).format(u) });
    else {
      var y = v.value;
      if (!a || !(y in a))
        throw new mT(y, c);
      var b = a[y];
      if (UC(v))
        b && typeof b != "string" && typeof b != "number" || (b = typeof b == "string" || typeof b == "number" ? String(b) : ""), f.push({ type: typeof b == "string" ? Et.literal : Et.object, value: b });
      else if (c2(v)) {
        var E = typeof v.style == "string" ? o.date[v.style] : Od(v.style) ? v.style.parsedOptions : void 0;
        f.push({ type: Et.literal, value: i.getDateTimeFormat(r, E).format(b) });
      } else if (f2(v))
        E = typeof v.style == "string" ? o.time[v.style] : Od(v.style) ? v.style.parsedOptions : o.time.medium, f.push({ type: Et.literal, value: i.getDateTimeFormat(r, E).format(b) });
      else if (u2(v))
        (E = typeof v.style == "string" ? o.number[v.style] : m2(v.style) ? v.style.parsedOptions : void 0) && E.scale && (b *= E.scale || 1), f.push({ type: Et.literal, value: i.getNumberFormat(r, E).format(b) });
      else {
        if (h2(v)) {
          var A = v.children, S = v.value, H = a[S];
          if (!C2(H))
            throw new hT(S, "function", c);
          var D = H(Vs(A, r, i, o, a, u).map(function(Q) {
            return Q.value;
          }));
          Array.isArray(D) || (D = [D]), f.push.apply(f, D.map(function(Q) {
            return { type: typeof Q == "string" ? Et.literal : Et.object, value: Q };
          }));
        }
        if (p2(v)) {
          if (!(L = v.options[b] || v.options.other))
            throw new Z0(v.value, b, Object.keys(v.options), c);
          f.push.apply(f, Vs(L.value, r, i, o, a));
        } else if (d2(v)) {
          var L;
          if (!(L = v.options["=".concat(b)])) {
            if (!Intl.PluralRules)
              throw new xr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, An.MISSING_INTL_API, c);
            var V = i.getPluralRules(r, { type: v.pluralType }).select(b - (v.offset || 0));
            L = v.options[V] || v.options.other;
          }
          if (!L)
            throw new Z0(v.value, b, Object.keys(v.options), c);
          f.push.apply(f, Vs(L.value, r, i, o, a, b - (v.offset || 0)));
        }
      }
    }
  }
  return function(Q) {
    return Q.length < 2 ? Q : Q.reduce(function(z, te) {
      var J = z[z.length - 1];
      return J && J.type === Et.literal && te.type === Et.literal ? J.value += te.value : z.push(te), z;
    }, []);
  }(f);
}
function gT(e, r) {
  return r ? Object.keys(e).reduce(function(i, o) {
    var a, u;
    return i[o] = (a = e[o], (u = r[o]) ? ne(ne(ne({}, a || {}), u || {}), Object.keys(a).reduce(function(c, f) {
      return c[f] = ne(ne({}, a[f]), u[f] || {}), c;
    }, {})) : a), i;
  }, ne({}, e)) : e;
}
function Kf(e) {
  return { create: function() {
    return { get: function(r) {
      return e[r];
    }, set: function(r, i) {
      e[r] = i;
    } };
  } };
}
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Et || (Et = {}));
var mt, T2 = function() {
  function e(r, i, o, a) {
    var u, c = this;
    if (i === void 0 && (i = e.defaultLocale), this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }, this.format = function(f) {
      var h = c.formatToParts(f);
      if (h.length === 1)
        return h[0].value;
      var m = h.reduce(function(v, y) {
        return v.length && y.type === Et.literal && typeof v[v.length - 1] == "string" ? v[v.length - 1] += y.value : v.push(y.value), v;
      }, []);
      return m.length <= 1 ? m[0] || "" : m;
    }, this.formatToParts = function(f) {
      return Vs(c.ast, c.locales, c.formatters, c.formats, f, void 0, c.message);
    }, this.resolvedOptions = function() {
      return { locale: c.resolvedLocale.toString() };
    }, this.getAst = function() {
      return c.ast;
    }, this.locales = i, this.resolvedLocale = e.resolveLocale(i), typeof r == "string") {
      if (this.message = r, !e.__parse)
        throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
      this.ast = e.__parse(r, { ignoreTag: a == null ? void 0 : a.ignoreTag, locale: this.resolvedLocale });
    } else
      this.ast = r;
    if (!Array.isArray(this.ast))
      throw new TypeError("A message must be provided as a String or AST.");
    this.formats = gT(e.formats, o), this.formatters = a && a.formatters || ((u = this.formatterCache) === void 0 && (u = { number: {}, dateTime: {}, pluralRules: {} }), { getNumberFormat: En(function() {
      for (var f, h = [], m = 0; m < arguments.length; m++)
        h[m] = arguments[m];
      return new ((f = Intl.NumberFormat).bind.apply(f, Cn([void 0], h, !1)))();
    }, { cache: Kf(u.number), strategy: Sn.variadic }), getDateTimeFormat: En(function() {
      for (var f, h = [], m = 0; m < arguments.length; m++)
        h[m] = arguments[m];
      return new ((f = Intl.DateTimeFormat).bind.apply(f, Cn([void 0], h, !1)))();
    }, { cache: Kf(u.dateTime), strategy: Sn.variadic }), getPluralRules: En(function() {
      for (var f, h = [], m = 0; m < arguments.length; m++)
        h[m] = arguments[m];
      return new ((f = Intl.PluralRules).bind.apply(f, Cn([void 0], h, !1)))();
    }, { cache: Kf(u.pluralRules), strategy: Sn.variadic }) });
  }
  return Object.defineProperty(e, "defaultLocale", { get: function() {
    return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
  }, enumerable: !1, configurable: !0 }), e.memoizedDefaultLocale = null, e.resolveLocale = function(r) {
    var i = Intl.NumberFormat.supportedLocalesOf(r);
    return i.length > 0 ? new Intl.Locale(i[0]) : new Intl.Locale(typeof r == "string" ? r : r[0]);
  }, e.__parse = cT, e.formats = { number: { integer: { maximumFractionDigits: 0 }, currency: { style: "currency" }, percent: { style: "percent" } }, date: { short: { month: "numeric", day: "numeric", year: "2-digit" }, medium: { month: "short", day: "numeric", year: "numeric" }, long: { month: "long", day: "numeric", year: "numeric" }, full: { weekday: "long", month: "long", day: "numeric", year: "numeric" } }, time: { short: { hour: "numeric", minute: "numeric" }, medium: { hour: "numeric", minute: "numeric", second: "numeric" }, long: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" }, full: { hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" } } }, e;
}();
(function(e) {
  e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION";
})(mt || (mt = {}));
var Mt = function(e) {
  function r(i, o, a) {
    var u = this, c = a ? a instanceof Error ? a : new Error(String(a)) : void 0;
    return (u = e.call(this, "[@formatjs/intl Error ".concat(i, "] ").concat(o, ` 
`).concat(c ? `
`.concat(c.message, `
`).concat(c.stack) : "")) || this).code = i, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(u, r), u;
  }
  return on(r, e), r;
}(Error), vT = function(e) {
  function r(i, o) {
    return e.call(this, mt.UNSUPPORTED_FORMATTER, i, o) || this;
  }
  return on(r, e), r;
}(Mt), yT = function(e) {
  function r(i, o) {
    return e.call(this, mt.INVALID_CONFIG, i, o) || this;
  }
  return on(r, e), r;
}(Mt), q0 = function(e) {
  function r(i, o) {
    return e.call(this, mt.MISSING_DATA, i, o) || this;
  }
  return on(r, e), r;
}(Mt), Hh = function(e) {
  function r(i, o, a) {
    return e.call(this, mt.FORMAT_ERROR, "".concat(i, ` 
Locale: `).concat(o, `
`), a) || this;
  }
  return on(r, e), r;
}(Mt), Zf = function(e) {
  function r(i, o, a, u) {
    var c = e.call(this, "".concat(i, ` 
MessageID: `).concat(a == null ? void 0 : a.id, `
Default Message: `).concat(a == null ? void 0 : a.defaultMessage, `
Description: `).concat(a == null ? void 0 : a.description, ` 
`), o, u) || this;
    return c.descriptor = a, c;
  }
  return on(r, e), r;
}(Hh), bT = function(e) {
  function r(i, o) {
    var a = e.call(this, mt.MISSING_TRANSLATION, 'Missing message: "'.concat(i.id, '" for locale "').concat(o, '", using ').concat(i.defaultMessage ? "default message" : "id", " as fallback.")) || this;
    return a.descriptor = i, a;
  }
  return on(r, e), r;
}(Mt);
function ro(e, r, i) {
  return i === void 0 && (i = {}), r.reduce(function(o, a) {
    return a in e ? o[a] = e[a] : a in i && (o[a] = i[a]), o;
  }, {});
}
var A2 = { formats: {}, messages: {}, timeZone: void 0, defaultLocale: "en", defaultFormats: {}, fallbackOnEmptyString: !0, onError: function(e) {
}, onWarn: function(e) {
} };
function Vr(e) {
  return { create: function() {
    return { get: function(r) {
      return e[r];
    }, set: function(r, i) {
      e[r] = i;
    } };
  } };
}
function Fh(e, r, i, o) {
  var a, u = e && e[r];
  if (u && (a = u[i]), a)
    return a;
  o(new vT("No ".concat(r, " format named: ").concat(i)));
}
function Ss(e, r) {
  return Object.keys(e).reduce(function(i, o) {
    return i[o] = ne({ timeZone: r }, e[o]), i;
  }, {});
}
function J0(e, r) {
  return Object.keys(ne(ne({}, e), r)).reduce(function(i, o) {
    return i[o] = ne(ne({}, e[o] || {}), r[o] || {}), i;
  }, {});
}
function $0(e, r) {
  if (!r)
    return e;
  var i = T2.formats;
  return ne(ne(ne({}, i), e), { date: J0(Ss(i.date, r), Ss(e.date || {}, r)), time: J0(Ss(i.time, r), Ss(e.time || {}, r)) });
}
function jd(e, r, i, o, a) {
  var u = e.locale, c = e.formats, f = e.messages, h = e.defaultLocale, m = e.defaultFormats, v = e.fallbackOnEmptyString, y = e.onError, b = e.timeZone, E = e.defaultRichTextElements;
  i === void 0 && (i = { id: "" });
  var A = i.id, S = i.defaultMessage;
  s2(!!A, "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");
  var H = String(A), D = f && Object.prototype.hasOwnProperty.call(f, H) && f[H];
  if (Array.isArray(D) && D.length === 1 && D[0].type === Fe.literal)
    return D[0].value;
  if (!o && D && typeof D == "string" && !E)
    return D.replace(/'\{(.*?)\}'/gi, "{$1}");
  if (o = ne(ne({}, E), o || {}), c = $0(c, b), m = $0(m, b), !D) {
    if (v === !1 && D === "")
      return D;
    if ((!S || u && u.toLowerCase() !== h.toLowerCase()) && y(new bT(i, u)), S)
      try {
        return r.getMessageFormat(S, h, m, a).format(o);
      } catch (L) {
        return y(new Zf('Error formatting default message for: "'.concat(H, '", rendering default message verbatim'), u, i, L)), typeof S == "string" ? S : H;
      }
    return H;
  }
  try {
    return r.getMessageFormat(D, u, c, ne({ formatters: r }, a || {})).format(o);
  } catch (L) {
    y(new Zf('Error formatting message: "'.concat(H, '", using ').concat(S ? "default message" : "id", " as fallback."), u, i, L));
  }
  if (S)
    try {
      return r.getMessageFormat(S, h, m, a).format(o);
    } catch (L) {
      y(new Zf('Error formatting the default message for: "'.concat(H, '", rendering message verbatim'), u, i, L));
    }
  return typeof D == "string" ? D : typeof S == "string" ? S : H;
}
var N2 = ["localeMatcher", "formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem"];
function Cu(e, r, i, o) {
  var a = e.locale, u = e.formats, c = e.onError, f = e.timeZone;
  o === void 0 && (o = {});
  var h = o.format, m = ne(ne({}, f && { timeZone: f }), h && Fh(u, r, h, c)), v = ro(o, N2, m);
  return r !== "time" || v.hour || v.minute || v.second || v.timeStyle || v.dateStyle || (v = ne(ne({}, v), { hour: "numeric", minute: "numeric" })), i(a, v);
}
function wT(e, r) {
  for (var i = [], o = 2; o < arguments.length; o++)
    i[o - 2] = arguments[o];
  var a = i[0], u = i[1], c = u === void 0 ? {} : u, f = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return Cu(e, "date", r, c).format(f);
  } catch (h) {
    e.onError(new Mt(mt.FORMAT_ERROR, "Error formatting date.", h));
  }
  return String(f);
}
function kT(e, r) {
  for (var i = [], o = 2; o < arguments.length; o++)
    i[o - 2] = arguments[o];
  var a = i[0], u = i[1], c = u === void 0 ? {} : u, f = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return Cu(e, "time", r, c).format(f);
  } catch (h) {
    e.onError(new Mt(mt.FORMAT_ERROR, "Error formatting time.", h));
  }
  return String(f);
}
function xT(e, r) {
  for (var i = [], o = 2; o < arguments.length; o++)
    i[o - 2] = arguments[o];
  var a = i[0], u = i[1], c = i[2], f = c === void 0 ? {} : c, h = e.timeZone, m = e.locale, v = e.onError, y = ro(f, N2, h ? { timeZone: h } : {});
  try {
    return r(m, y).formatRange(a, u);
  } catch (b) {
    v(new Mt(mt.FORMAT_ERROR, "Error formatting date time range.", b));
  }
  return String(a);
}
function ET(e, r) {
  for (var i = [], o = 2; o < arguments.length; o++)
    i[o - 2] = arguments[o];
  var a = i[0], u = i[1], c = u === void 0 ? {} : u, f = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return Cu(e, "date", r, c).formatToParts(f);
  } catch (h) {
    e.onError(new Mt(mt.FORMAT_ERROR, "Error formatting date.", h));
  }
  return [];
}
function ST(e, r) {
  for (var i = [], o = 2; o < arguments.length; o++)
    i[o - 2] = arguments[o];
  var a = i[0], u = i[1], c = u === void 0 ? {} : u, f = typeof a == "string" ? new Date(a || 0) : a;
  try {
    return Cu(e, "time", r, c).formatToParts(f);
  } catch (h) {
    e.onError(new Mt(mt.FORMAT_ERROR, "Error formatting time.", h));
  }
  return [];
}
var CT = ["localeMatcher", "style", "type", "fallback"];
function TT(e, r, i, o) {
  var a = e.locale, u = e.onError;
  Intl.DisplayNames || u(new xr(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`, An.MISSING_INTL_API));
  var c = ro(o, CT);
  try {
    return r(a, c).of(i);
  } catch (f) {
    u(new Mt(mt.FORMAT_ERROR, "Error formatting display name.", f));
  }
}
var AT = ["localeMatcher", "type", "style"], e1 = Date.now();
function NT(e, r, i, o) {
  o === void 0 && (o = {});
  var a = P2(e, r, i, o).reduce(function(u, c) {
    var f = c.value;
    return typeof f != "string" ? u.push(f) : typeof u[u.length - 1] == "string" ? u[u.length - 1] += f : u.push(f), u;
  }, []);
  return a.length === 1 ? a[0] : a;
}
function P2(e, r, i, o) {
  var a = e.locale, u = e.onError;
  o === void 0 && (o = {}), Intl.ListFormat || u(new xr(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`, An.MISSING_INTL_API));
  var c = ro(o, AT);
  try {
    var f = {}, h = i.map(function(m, v) {
      if (typeof m == "object") {
        var y = function(b) {
          return "".concat(e1, "_").concat(b, "_").concat(e1);
        }(v);
        return f[y] = m, y;
      }
      return String(m);
    });
    return r(a, c).formatToParts(h).map(function(m) {
      return m.type === "literal" ? m : ne(ne({}, m), { value: f[m.value] || m.value });
    });
  } catch (m) {
    u(new Mt(mt.FORMAT_ERROR, "Error formatting list.", m));
  }
  return i;
}
var PT = ["localeMatcher", "type"];
function OT(e, r, i, o) {
  var a = e.locale, u = e.onError;
  o === void 0 && (o = {}), Intl.PluralRules || u(new xr(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, An.MISSING_INTL_API));
  var c = ro(o, PT);
  try {
    return r(a, c).select(i);
  } catch (f) {
    u(new Hh("Error formatting plural.", a, f));
  }
  return "other";
}
var LT = ["numeric", "style"];
function MT(e, r, i, o, a) {
  a === void 0 && (a = {}), o || (o = "second"), Intl.RelativeTimeFormat || e.onError(new xr(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`, An.MISSING_INTL_API));
  try {
    return function(u, c, f) {
      var h = u.locale, m = u.formats, v = u.onError;
      f === void 0 && (f = {});
      var y = f.format, b = !!y && Fh(m, "relative", y, v) || {};
      return c(h, ro(f, LT, b));
    }(e, r, a).format(i, o);
  } catch (u) {
    e.onError(new Hh("Error formatting relative time.", e.locale, u));
  }
  return String(i);
}
var IT = ["localeMatcher", "style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem"];
function O2(e, r, i) {
  var o = e.locale, a = e.formats, u = e.onError;
  i === void 0 && (i = {});
  var c = i.format, f = c && Fh(a, "number", c, u) || {};
  return r(o, ro(i, IT, f));
}
function _T(e, r, i, o) {
  o === void 0 && (o = {});
  try {
    return O2(e, r, o).format(i);
  } catch (a) {
    e.onError(new Mt(mt.FORMAT_ERROR, "Error formatting number.", a));
  }
  return String(i);
}
function RT(e, r, i, o) {
  o === void 0 && (o = {});
  try {
    return O2(e, r, o).formatToParts(i);
  } catch (a) {
    e.onError(new Mt(mt.FORMAT_ERROR, "Error formatting number.", a));
  }
  return [];
}
function DT(e) {
  e.onWarn && e.defaultRichTextElements && function(r) {
    return typeof (r ? r[Object.keys(r)[0]] : void 0) == "string";
  }(e.messages || {}) && e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`);
}
function jT(e, r) {
  var i = function(f) {
    f === void 0 && (f = { dateTime: {}, number: {}, message: {}, relativeTime: {}, pluralRules: {}, list: {}, displayNames: {} });
    var h = Intl.RelativeTimeFormat, m = Intl.ListFormat, v = Intl.DisplayNames, y = En(function() {
      for (var A, S = [], H = 0; H < arguments.length; H++)
        S[H] = arguments[H];
      return new ((A = Intl.DateTimeFormat).bind.apply(A, Cn([void 0], S, !1)))();
    }, { cache: Vr(f.dateTime), strategy: Sn.variadic }), b = En(function() {
      for (var A, S = [], H = 0; H < arguments.length; H++)
        S[H] = arguments[H];
      return new ((A = Intl.NumberFormat).bind.apply(A, Cn([void 0], S, !1)))();
    }, { cache: Vr(f.number), strategy: Sn.variadic }), E = En(function() {
      for (var A, S = [], H = 0; H < arguments.length; H++)
        S[H] = arguments[H];
      return new ((A = Intl.PluralRules).bind.apply(A, Cn([void 0], S, !1)))();
    }, { cache: Vr(f.pluralRules), strategy: Sn.variadic });
    return { getDateTimeFormat: y, getNumberFormat: b, getMessageFormat: En(function(A, S, H, D) {
      return new T2(A, S, H, ne({ formatters: { getNumberFormat: b, getDateTimeFormat: y, getPluralRules: E } }, D || {}));
    }, { cache: Vr(f.message), strategy: Sn.variadic }), getRelativeTimeFormat: En(function() {
      for (var A = [], S = 0; S < arguments.length; S++)
        A[S] = arguments[S];
      return new (h.bind.apply(h, Cn([void 0], A, !1)))();
    }, { cache: Vr(f.relativeTime), strategy: Sn.variadic }), getPluralRules: E, getListFormat: En(function() {
      for (var A = [], S = 0; S < arguments.length; S++)
        A[S] = arguments[S];
      return new (m.bind.apply(m, Cn([void 0], A, !1)))();
    }, { cache: Vr(f.list), strategy: Sn.variadic }), getDisplayNames: En(function() {
      for (var A = [], S = 0; S < arguments.length; S++)
        A[S] = arguments[S];
      return new (v.bind.apply(v, Cn([void 0], A, !1)))();
    }, { cache: Vr(f.displayNames), strategy: Sn.variadic }) };
  }(r), o = ne(ne({}, A2), e), a = o.locale, u = o.defaultLocale, c = o.onError;
  return a ? !Intl.NumberFormat.supportedLocalesOf(a).length && c ? c(new q0('Missing locale data for locale: "'.concat(a, '" in Intl.NumberFormat. Using default locale: "').concat(u, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : !Intl.DateTimeFormat.supportedLocalesOf(a).length && c && c(new q0('Missing locale data for locale: "'.concat(a, '" in Intl.DateTimeFormat. Using default locale: "').concat(u, '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))) : (c && c(new yT('"locale" was not configured, using "'.concat(u, '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))), o.locale = o.defaultLocale || "en"), DT(o), ne(ne({}, o), { formatters: i, formatNumber: _T.bind(null, o, i.getNumberFormat), formatNumberToParts: RT.bind(null, o, i.getNumberFormat), formatRelativeTime: MT.bind(null, o, i.getRelativeTimeFormat), formatDate: wT.bind(null, o, i.getDateTimeFormat), formatDateToParts: ET.bind(null, o, i.getDateTimeFormat), formatTime: kT.bind(null, o, i.getDateTimeFormat), formatDateTimeRange: xT.bind(null, o, i.getDateTimeFormat), formatTimeToParts: ST.bind(null, o, i.getDateTimeFormat), formatPlural: OT.bind(null, o, i.getPluralRules), formatMessage: jd.bind(null, o, i), $t: jd.bind(null, o, i), formatList: NT.bind(null, o, i.getListFormat), formatListToParts: P2.bind(null, o, i.getListFormat), formatDisplayName: TT.bind(null, o, i.getDisplayNames) });
}
function L2(e) {
  s2(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var M2 = ne(ne({}, A2), { textComponent: G.exports.Fragment }), t1, Bh = { exports: {} }, fa = {};
const Gt = (Bh.exports = function() {
  if (t1)
    return fa;
  t1 = 1;
  var e = G.exports, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, h, m) {
    var v, y = {}, b = null, E = null;
    for (v in m !== void 0 && (b = "" + m), h.key !== void 0 && (b = "" + h.key), h.ref !== void 0 && (E = h.ref), h)
      o.call(h, v) && !u.hasOwnProperty(v) && (y[v] = h[v]);
    if (f && f.defaultProps)
      for (v in h = f.defaultProps)
        y[v] === void 0 && (y[v] = h[v]);
    return { $$typeof: r, type: f, key: b, ref: E, props: y, _owner: a.current };
  }
  return fa.Fragment = i, fa.jsx = c, fa.jsxs = c, fa;
}()).Fragment, k = Bh.exports.jsx, K = Bh.exports.jsxs;
var zh = G.exports.createContext(null);
zh.Consumer;
var Hd, Fd, HT = zh.Provider, FT = zh;
function Uh() {
  var e = G.exports.useContext(FT);
  return L2(e), e;
}
function n1(e) {
  var r = function(i) {
    var o = Uh(), a = i.value, u = i.children, c = jh(i, ["value", "children"]), f = typeof a == "string" ? new Date(a || 0) : a;
    return u(e === "formatDate" ? o.formatDateToParts(f, c) : o.formatTimeToParts(f, c));
  };
  return r.displayName = Fd[e], r;
}
function pa(e) {
  var r = function(i) {
    var o = Uh(), a = i.value, u = i.children, c = jh(i, ["value", "children"]), f = o[e](a, c);
    if (typeof u == "function")
      return u(f);
    var h = o.textComponent || G.exports.Fragment;
    return k(h, { children: f });
  };
  return r.displayName = Hd[e], r;
}
function qf(e) {
  return { locale: e.locale, timeZone: e.timeZone, fallbackOnEmptyString: e.fallbackOnEmptyString, formats: e.formats, textComponent: e.textComponent, messages: e.messages, defaultLocale: e.defaultLocale, defaultFormats: e.defaultFormats, onError: e.onError, onWarn: e.onWarn, wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment, defaultRichTextElements: e.defaultRichTextElements };
}
function I2(e) {
  return e && Object.keys(e).reduce(function(r, i) {
    var o, a = e[i];
    return r[i] = C2(a) ? (o = a, function(u) {
      return o(G.exports.Children.toArray(u));
    }) : a, r;
  }, {});
}
(function(e) {
  e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName";
})(Hd || (Hd = {})), function(e) {
  e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts";
}(Fd || (Fd = {}));
var BT = function(e, r, i, o) {
  for (var a = [], u = 4; u < arguments.length; u++)
    a[u - 4] = arguments[u];
  var c = I2(o), f = jd.apply(void 0, Cn([e, r, i, c], a, !1));
  return Array.isArray(f) ? G.exports.Children.toArray(f) : f;
}, r1 = function(e, r) {
  var i = e.defaultRichTextElements, o = jh(e, ["defaultRichTextElements"]), a = I2(i), u = jT(ne(ne(ne({}, M2), o), { defaultRichTextElements: a }), r);
  return ne(ne({}, u), { formatMessage: BT.bind(null, { locale: u.locale, timeZone: u.timeZone, fallbackOnEmptyString: u.fallbackOnEmptyString, formats: u.formats, defaultLocale: u.defaultLocale, defaultFormats: u.defaultFormats, messages: u.messages, onError: u.onError, defaultRichTextElements: a }, u.formatters) });
}, zT = function(e) {
  function r() {
    var i = e !== null && e.apply(this, arguments) || this;
    return i.cache = { dateTime: {}, number: {}, message: {}, relativeTime: {}, pluralRules: {}, list: {}, displayNames: {} }, i.state = { cache: i.cache, intl: r1(qf(i.props), i.cache), prevConfig: qf(i.props) }, i;
  }
  return on(r, e), r.getDerivedStateFromProps = function(i, o) {
    var a = o.prevConfig, u = o.cache, c = qf(i);
    return function(f, h) {
      if (f === h)
        return !0;
      if (!f || !h)
        return !1;
      var m = Object.keys(f), v = Object.keys(h), y = m.length;
      if (v.length !== y)
        return !1;
      for (var b = 0; b < y; b++) {
        var E = m[b];
        if (f[E] !== h[E] || !Object.prototype.hasOwnProperty.call(h, E))
          return !1;
      }
      return !0;
    }(a, c) ? null : { intl: r1(c, u), prevConfig: c };
  }, r.prototype.render = function() {
    return L2(this.state.intl), k(HT, { value: this.state.intl, children: this.props.children });
  }, r.displayName = "IntlProvider", r.defaultProps = M2, r;
}(G.exports.PureComponent);
const UT = zT;
pa("formatDate"), pa("formatTime"), pa("formatNumber"), pa("formatList"), pa("formatDisplayName"), n1("formatDate"), n1("formatTime");
var _2 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var r = {}.hasOwnProperty;
    function i() {
      for (var o = [], a = 0; a < arguments.length; a++) {
        var u = arguments[a];
        if (u) {
          var c = typeof u;
          if (c === "string" || c === "number")
            o.push(u);
          else if (Array.isArray(u)) {
            if (u.length) {
              var f = i.apply(null, u);
              f && o.push(f);
            }
          } else if (c === "object") {
            if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]")) {
              o.push(u.toString());
              continue;
            }
            for (var h in u)
              r.call(u, h) && u[h] && o.push(h);
          }
        }
      }
      return o.join(" ");
    }
    e.exports ? (i.default = i, e.exports = i) : window.classNames = i;
  })();
})(_2);
const ue = _2.exports;
var GT = { exports: {} }, Cs = function(e) {
  return e && e.Math == Math && e;
}, Ze = Cs(typeof globalThis == "object" && globalThis) || Cs(typeof window == "object" && window) || Cs(typeof self == "object" && self) || Cs(typeof Zr == "object" && Zr) || function() {
  return this;
}() || Zr || Function("return this")(), ze = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, Wa = !ze(function() {
  var e = function() {
  }.bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), VT = Wa, R2 = Function.prototype, o1 = R2.apply, i1 = R2.call, Tu = typeof Reflect == "object" && Reflect.apply || (VT ? i1.bind(o1) : function() {
  return i1.apply(o1, arguments);
}), D2 = Wa, j2 = Function.prototype, Bd = j2.call, WT = D2 && j2.bind.bind(Bd, Bd), Re = D2 ? WT : function(e) {
  return function() {
    return Bd.apply(e, arguments);
  };
}, H2 = Re, XT = H2({}.toString), QT = H2("".slice), Er = function(e) {
  return QT(XT(e), 8, -1);
}, YT = Er, KT = Re, su = function(e) {
  if (YT(e) === "Function")
    return KT(e);
}, Jf = typeof document == "object" && document.all, Au = { all: Jf, IS_HTMLDDA: Jf === void 0 && Jf !== void 0 }, ZT = Au.all, et = Au.IS_HTMLDDA ? function(e) {
  return typeof e == "function" || e === ZT;
} : function(e) {
  return typeof e == "function";
}, Xa = {}, Xt = !ze(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), qT = Wa, Ts = Function.prototype.call, ft = qT ? Ts.bind(Ts) : function() {
  return Ts.apply(Ts, arguments);
}, Nu = {}, F2 = {}.propertyIsEnumerable, B2 = Object.getOwnPropertyDescriptor, JT = B2 && !F2.call({ 1: 2 }, 1);
Nu.f = JT ? function(e) {
  var r = B2(this, e);
  return !!r && r.enumerable;
} : F2;
var cr, Ws, oo = function(e, r) {
  return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: r };
}, $T = ze, eA = Er, $f = Object, tA = Re("".split), Gh = $T(function() {
  return !$f("z").propertyIsEnumerable(0);
}) ? function(e) {
  return eA(e) == "String" ? tA(e, "") : $f(e);
} : $f, Pu = function(e) {
  return e == null;
}, nA = Pu, rA = TypeError, Qa = function(e) {
  if (nA(e))
    throw rA("Can't call method on " + e);
  return e;
}, oA = Gh, iA = Qa, Sr = function(e) {
  return oA(iA(e));
}, a1 = et, aA = Au.all, It = Au.IS_HTMLDDA ? function(e) {
  return typeof e == "object" ? e !== null : a1(e) || e === aA;
} : function(e) {
  return typeof e == "object" ? e !== null : a1(e);
}, _t = {}, ep = _t, tp = Ze, lA = et, l1 = function(e) {
  return lA(e) ? e : void 0;
}, Rt = function(e, r) {
  return arguments.length < 2 ? l1(ep[e]) || l1(tp[e]) : ep[e] && ep[e][r] || tp[e] && tp[e][r];
}, nt = Re({}.isPrototypeOf), Cr = typeof navigator < "u" && String(navigator.userAgent) || "", z2 = Ze, np = Cr, s1 = z2.process, u1 = z2.Deno, c1 = s1 && s1.versions || u1 && u1.version, f1 = c1 && c1.v8;
f1 && (Ws = (cr = f1.split("."))[0] > 0 && cr[0] < 4 ? 1 : +(cr[0] + cr[1])), !Ws && np && (!(cr = np.match(/Edge\/(\d+)/)) || cr[1] >= 74) && (cr = np.match(/Chrome\/(\d+)/)) && (Ws = +cr[1]);
var Ya = Ws, p1 = Ya, sA = ze, uA = Ze.String, vi = !!Object.getOwnPropertySymbols && !sA(function() {
  var e = Symbol();
  return !uA(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && p1 && p1 < 41;
}), U2 = vi && !Symbol.sham && typeof Symbol.iterator == "symbol", cA = Rt, fA = et, pA = nt, dA = Object, Ka = U2 ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var r = cA("Symbol");
  return fA(r) && pA(r.prototype, dA(e));
}, hA = String, yi = function(e) {
  try {
    return hA(e);
  } catch {
    return "Object";
  }
}, mA = et, gA = yi, vA = TypeError, an = function(e) {
  if (mA(e))
    return e;
  throw vA(gA(e) + " is not a function");
}, yA = an, bA = Pu, Vh = function(e, r) {
  var i = e[r];
  return bA(i) ? void 0 : yA(i);
}, rp = ft, op = et, ip = It, wA = TypeError, io = { exports: {} }, d1 = Ze, kA = Object.defineProperty, xA = function(e, r) {
  try {
    kA(d1, e, { value: r, configurable: !0, writable: !0 });
  } catch {
    d1[e] = r;
  }
  return r;
}, h1 = "__core-js_shared__", Wh = Ze[h1] || xA(h1, {}), m1 = Wh;
(io.exports = function(e, r) {
  return m1[e] || (m1[e] = r !== void 0 ? r : {});
})("versions", []).push({ version: "3.30.2", mode: "pure", copyright: "\xA9 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE", source: "https://github.com/zloirock/core-js" });
var EA = Qa, SA = Object, Wn = function(e) {
  return SA(EA(e));
}, CA = Wn, TA = Re({}.hasOwnProperty), gt = Object.hasOwn || function(e, r) {
  return TA(CA(e), r);
}, AA = Re, NA = 0, PA = Math.random(), OA = AA(1 .toString), Xh = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + OA(++NA + PA, 36);
}, LA = Ze, MA = io.exports, g1 = gt, IA = Xh, _A = vi, RA = U2, Yo = LA.Symbol, ap = MA("wks"), DA = RA ? Yo.for || Yo : Yo && Yo.withoutSetter || IA, We = function(e) {
  return g1(ap, e) || (ap[e] = _A && g1(Yo, e) ? Yo[e] : DA("Symbol." + e)), ap[e];
}, jA = ft, v1 = It, y1 = Ka, HA = Vh, FA = function(e, r) {
  var i, o;
  if (r === "string" && op(i = e.toString) && !ip(o = rp(i, e)) || op(i = e.valueOf) && !ip(o = rp(i, e)) || r !== "string" && op(i = e.toString) && !ip(o = rp(i, e)))
    return o;
  throw wA("Can't convert object to primitive value");
}, BA = TypeError, zA = We("toPrimitive"), UA = function(e, r) {
  if (!v1(e) || y1(e))
    return e;
  var i, o = HA(e, zA);
  if (o) {
    if (r === void 0 && (r = "default"), i = jA(o, e, r), !v1(i) || y1(i))
      return i;
    throw BA("Can't convert object to primitive value");
  }
  return r === void 0 && (r = "number"), FA(e, r);
}, GA = Ka, Ou = function(e) {
  var r = UA(e, "string");
  return GA(r) ? r : r + "";
}, b1 = It, zd = Ze.document, VA = b1(zd) && b1(zd.createElement), Qh = function(e) {
  return VA ? zd.createElement(e) : {};
}, WA = Qh, G2 = !Xt && !ze(function() {
  return Object.defineProperty(WA("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), XA = Xt, QA = ft, YA = Nu, KA = oo, ZA = Sr, qA = Ou, JA = gt, $A = G2, w1 = Object.getOwnPropertyDescriptor;
Xa.f = XA ? w1 : function(e, r) {
  if (e = ZA(e), r = qA(r), $A)
    try {
      return w1(e, r);
    } catch {
    }
  if (JA(e, r))
    return KA(!QA(YA.f, e, r), e[r]);
};
var e6 = ze, t6 = et, n6 = /#|\.prototype\./, Za = function(e, r) {
  var i = o6[r6(e)];
  return i == a6 || i != i6 && (t6(r) ? e6(r) : !!r);
}, r6 = Za.normalize = function(e) {
  return String(e).replace(n6, ".").toLowerCase();
}, o6 = Za.data = {}, i6 = Za.NATIVE = "N", a6 = Za.POLYFILL = "P", V2 = Za, l6 = an, s6 = Wa, u6 = su(su.bind), qa = function(e, r) {
  return l6(e), r === void 0 ? e : s6 ? u6(e, r) : function() {
    return e.apply(r, arguments);
  };
}, dn = {}, W2 = Xt && ze(function() {
  return Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: !1 }).prototype != 42;
}), c6 = It, f6 = String, p6 = TypeError, hn = function(e) {
  if (c6(e))
    return e;
  throw p6(f6(e) + " is not an object");
}, d6 = Xt, h6 = G2, m6 = W2, As = hn, k1 = Ou, g6 = TypeError, lp = Object.defineProperty, v6 = Object.getOwnPropertyDescriptor, sp = "enumerable", up = "configurable", cp = "writable";
dn.f = d6 ? m6 ? function(e, r, i) {
  if (As(e), r = k1(r), As(i), typeof e == "function" && r === "prototype" && "value" in i && cp in i && !i[cp]) {
    var o = v6(e, r);
    o && o[cp] && (e[r] = i.value, i = { configurable: up in i ? i[up] : o[up], enumerable: sp in i ? i[sp] : o[sp], writable: !1 });
  }
  return lp(e, r, i);
} : lp : function(e, r, i) {
  if (As(e), r = k1(r), As(i), h6)
    try {
      return lp(e, r, i);
    } catch {
    }
  if ("get" in i || "set" in i)
    throw g6("Accessors not supported");
  return "value" in i && (e[r] = i.value), e;
};
var y6 = dn, b6 = oo, Tr = Xt ? function(e, r, i) {
  return y6.f(e, r, b6(1, i));
} : function(e, r, i) {
  return e[r] = i, e;
}, Ns = Ze, w6 = Tu, k6 = su, x6 = et, E6 = Xa.f, S6 = V2, Ho = _t, C6 = qa, Fo = Tr, x1 = gt, T6 = function(e) {
  var r = function(i, o, a) {
    if (this instanceof r) {
      switch (arguments.length) {
        case 0:
          return new e();
        case 1:
          return new e(i);
        case 2:
          return new e(i, o);
      }
      return new e(i, o, a);
    }
    return w6(e, this, arguments);
  };
  return r.prototype = e.prototype, r;
}, ce = function(e, r) {
  var i, o, a, u, c, f, h, m, v, y = e.target, b = e.global, E = e.stat, A = e.proto, S = b ? Ns : E ? Ns[y] : (Ns[y] || {}).prototype, H = b ? Ho : Ho[y] || Fo(Ho, y, {})[y], D = H.prototype;
  for (u in r)
    o = !(i = S6(b ? u : y + (E ? "." : "#") + u, e.forced)) && S && x1(S, u), f = H[u], o && (h = e.dontCallGetSet ? (v = E6(S, u)) && v.value : S[u]), c = o && h ? h : r[u], o && typeof f == typeof c || (m = e.bind && o ? C6(c, Ns) : e.wrap && o ? T6(c) : A && x6(c) ? k6(c) : c, (e.sham || c && c.sham || f && f.sham) && Fo(m, "sham", !0), Fo(H, u, m), A && (x1(Ho, a = y + "Prototype") || Fo(Ho, a, {}), Fo(Ho[a], u, c), e.real && D && (i || !D[u]) && Fo(D, u, c)));
}, X2 = {};
X2[We("toStringTag")] = "z";
var Yh = String(X2) === "[object z]", A6 = Yh, N6 = et, Xs = Er, P6 = We("toStringTag"), O6 = Object, L6 = Xs(function() {
  return arguments;
}()) == "Arguments", bi = A6 ? Xs : function(e) {
  var r, i, o;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (i = function(a, u) {
    try {
      return a[u];
    } catch {
    }
  }(r = O6(e), P6)) == "string" ? i : L6 ? Xs(r) : (o = Xs(r)) == "Object" && N6(r.callee) ? "Arguments" : o;
}, M6 = bi, I6 = String, Nn = function(e) {
  if (M6(e) === "Symbol")
    throw TypeError("Cannot convert a Symbol value to a string");
  return I6(e);
}, Kh = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`, _6 = Qa, R6 = Nn, Ud = Kh, E1 = Re("".replace), D6 = RegExp("^[" + Ud + "]+"), j6 = RegExp("(^|[^" + Ud + "])[" + Ud + "]+$"), fp = function(e) {
  return function(r) {
    var i = R6(_6(r));
    return 1 & e && (i = E1(i, D6, "")), 2 & e && (i = E1(i, j6, "$1")), i;
  };
}, Q2 = { start: fp(1), end: fp(2), trim: fp(3) }, Y2 = Ze, H6 = ze, F6 = Re, B6 = Nn, z6 = Q2.trim, S1 = Kh, da = Y2.parseInt, C1 = Y2.Symbol, T1 = C1 && C1.iterator, K2 = /^[+-]?0x/i, U6 = F6(K2.exec), A1 = da(S1 + "08") !== 8 || da(S1 + "0x16") !== 22 || T1 && !H6(function() {
  da(Object(T1));
}) ? function(e, r) {
  var i = z6(B6(e));
  return da(i, r >>> 0 || (U6(K2, i) ? 16 : 10));
} : da;
ce({ global: !0, forced: parseInt != A1 }, { parseInt: A1 });
const Gd = Ne(GT.exports = _t.parseInt);
var G6 = { exports: {} }, V6 = Math.ceil, W6 = Math.floor, X6 = Math.trunc || function(e) {
  var r = +e;
  return (r > 0 ? W6 : V6)(r);
}, Lu = function(e) {
  var r = +e;
  return r != r || r === 0 ? 0 : X6(r);
}, Q6 = Lu, Y6 = Math.min, K6 = function(e) {
  return e > 0 ? Y6(Q6(e), 9007199254740991) : 0;
}, Ar = function(e) {
  return K6(e.length);
}, N1 = yi, Z6 = TypeError, Z2 = function(e, r) {
  if (!delete e[r])
    throw Z6("Cannot delete property " + N1(r) + " of " + N1(e));
}, q6 = Lu, J6 = Math.max, $6 = Math.min, Mu = function(e, r) {
  var i = q6(e);
  return i < 0 ? J6(i + r, 0) : $6(i, r);
}, e5 = Ou, t5 = dn, n5 = oo, Iu = function(e, r, i) {
  var o = e5(r);
  o in e ? t5.f(e, o, n5(0, i)) : e[o] = i;
}, P1 = Mu, r5 = Ar, o5 = Iu, i5 = Array, a5 = Math.max, q2 = function(e, r, i) {
  for (var o = r5(e), a = P1(r, o), u = P1(i === void 0 ? o : i, o), c = i5(a5(u - a, 0)), f = 0; a < u; a++, f++)
    o5(c, f, e[a]);
  return c.length = f, c;
}, O1 = q2, l5 = Math.floor, Vd = function(e, r) {
  var i = e.length, o = l5(i / 2);
  return i < 8 ? s5(e, r) : u5(e, Vd(O1(e, 0, o), r), Vd(O1(e, o), r), r);
}, s5 = function(e, r) {
  for (var i, o, a = e.length, u = 1; u < a; ) {
    for (o = u, i = e[u]; o && r(e[o - 1], i) > 0; )
      e[o] = e[--o];
    o !== u++ && (e[o] = i);
  }
  return e;
}, u5 = function(e, r, i, o) {
  for (var a = r.length, u = i.length, c = 0, f = 0; c < a || f < u; )
    e[c + f] = c < a && f < u ? o(r[c], i[f]) <= 0 ? r[c++] : i[f++] : c < a ? r[c++] : i[f++];
  return e;
}, c5 = Vd, f5 = ze, Ja = function(e, r) {
  var i = [][e];
  return !!i && f5(function() {
    i.call(null, r || function() {
      return 1;
    }, 1);
  });
}, L1 = Cr.match(/firefox\/(\d+)/i), p5 = !!L1 && +L1[1], d5 = /MSIE|Trident/.test(Cr), M1 = Cr.match(/AppleWebKit\/(\d+)\./), h5 = !!M1 && +M1[1], m5 = ce, J2 = Re, g5 = an, v5 = Wn, I1 = Ar, y5 = Z2, _1 = Nn, Zh = ze, b5 = c5, w5 = Ja, R1 = p5, k5 = d5, D1 = Ya, j1 = h5, pr = [], H1 = J2(pr.sort), x5 = J2(pr.push), E5 = Zh(function() {
  pr.sort(void 0);
}), S5 = Zh(function() {
  pr.sort(null);
}), C5 = w5("sort"), F1 = !Zh(function() {
  if (D1)
    return D1 < 70;
  if (!(R1 && R1 > 3)) {
    if (k5)
      return !0;
    if (j1)
      return j1 < 603;
    var e, r, i, o, a = "";
    for (e = 65; e < 76; e++) {
      switch (r = String.fromCharCode(e), e) {
        case 66:
        case 69:
        case 70:
        case 72:
          i = 3;
          break;
        case 68:
        case 71:
          i = 4;
          break;
        default:
          i = 2;
      }
      for (o = 0; o < 47; o++)
        pr.push({ k: r + o, v: i });
    }
    for (pr.sort(function(u, c) {
      return c.v - u.v;
    }), o = 0; o < pr.length; o++)
      r = pr[o].k.charAt(0), a.charAt(a.length - 1) !== r && (a += r);
    return a !== "DGBEFHACIJK";
  }
});
m5({ target: "Array", proto: !0, forced: E5 || !S5 || !C5 || !F1 }, { sort: function(e) {
  e !== void 0 && g5(e);
  var r = v5(this);
  if (F1)
    return e === void 0 ? H1(r) : H1(r, e);
  var i, o, a = [], u = I1(r);
  for (o = 0; o < u; o++)
    o in r && x5(a, r[o]);
  for (b5(a, function(c) {
    return function(f, h) {
      return h === void 0 ? -1 : f === void 0 ? 1 : c !== void 0 ? +c(f, h) || 0 : _1(f) > _1(h) ? 1 : -1;
    };
  }(e)), i = I1(a), o = 0; o < i; )
    r[o] = a[o++];
  for (; o < u; )
    y5(r, o++);
  return r;
} });
var T5 = _t, vt = function(e) {
  return T5[e + "Prototype"];
}, A5 = vt("Array").sort, N5 = nt, P5 = A5, pp = Array.prototype;
const O5 = Ne(G6.exports = function(e) {
  var r = e.sort;
  return e === pp || N5(pp, e) && r === pp.sort ? P5 : r;
});
var L5 = { exports: {} }, M5 = Er, wi = Array.isArray || function(e) {
  return M5(e) == "Array";
}, I5 = TypeError, $2 = function(e) {
  if (e > 9007199254740991)
    throw I5("Maximum allowed index exceeded");
  return e;
}, _5 = et, Wd = Wh, R5 = Re(Function.toString);
_5(Wd.inspectSource) || (Wd.inspectSource = function(e) {
  return R5(e);
});
var ek = Wd.inspectSource, D5 = Re, j5 = ze, tk = et, H5 = bi, F5 = ek, nk = function() {
}, B5 = [], rk = Rt("Reflect", "construct"), qh = /^\s*(?:class|function)\b/, z5 = D5(qh.exec), U5 = !qh.exec(nk), ha = function(e) {
  if (!tk(e))
    return !1;
  try {
    return rk(nk, B5, e), !0;
  } catch {
    return !1;
  }
}, ok = function(e) {
  if (!tk(e))
    return !1;
  switch (H5(e)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return U5 || !!z5(qh, F5(e));
  } catch {
    return !0;
  }
};
ok.sham = !0;
var Jh = !rk || j5(function() {
  var e;
  return ha(ha.call) || !ha(Object) || !ha(function() {
    e = !0;
  }) || e;
}) ? ok : ha, B1 = wi, G5 = Jh, V5 = It, W5 = We("species"), z1 = Array, X5 = function(e) {
  var r;
  return B1(e) && (r = e.constructor, (G5(r) && (r === z1 || B1(r.prototype)) || V5(r) && (r = r[W5]) === null) && (r = void 0)), r === void 0 ? z1 : r;
}, $h = function(e, r) {
  return new (X5(e))(r === 0 ? 0 : r);
}, Q5 = ze, Y5 = Ya, K5 = We("species"), $a = function(e) {
  return Y5 >= 51 || !Q5(function() {
    var r = [];
    return (r.constructor = {})[K5] = function() {
      return { foo: 1 };
    }, r[e](Boolean).foo !== 1;
  });
}, Z5 = ce, q5 = ze, J5 = wi, $5 = It, eN = Wn, tN = Ar, U1 = $2, G1 = Iu, nN = $h, rN = $a, oN = Ya, ik = We("isConcatSpreadable"), iN = oN >= 51 || !q5(function() {
  var e = [];
  return e[ik] = !1, e.concat()[0] !== e;
}), aN = function(e) {
  if (!$5(e))
    return !1;
  var r = e[ik];
  return r !== void 0 ? !!r : J5(e);
};
Z5({ target: "Array", proto: !0, arity: 1, forced: !iN || !rN("concat") }, { concat: function(e) {
  var r, i, o, a, u, c = eN(this), f = nN(c, 0), h = 0;
  for (r = -1, o = arguments.length; r < o; r++)
    if (aN(u = r === -1 ? c : arguments[r]))
      for (a = tN(u), U1(h + a), i = 0; i < a; i++, h++)
        i in u && G1(f, h, u[i]);
    else
      U1(h + 1), G1(f, h++, u);
  return f.length = h, f;
} });
var lN = vt("Array").concat, sN = nt, uN = lN, dp = Array.prototype;
const $e = Ne(L5.exports = function(e) {
  var r = e.concat;
  return e === dp || sN(dp, e) && r === dp.concat ? uN : r;
}), ak = typeof global == "object" && global && global.Object === Object && global;
var cN = typeof self == "object" && self && self.Object === Object && self;
const Pn = ak || cN || Function("return this")(), tn = Pn.Symbol;
var lk = Object.prototype, fN = lk.hasOwnProperty, pN = lk.toString, ma = tn ? tn.toStringTag : void 0, dN = Object.prototype.toString, hN = "[object Null]", mN = "[object Undefined]", V1 = tn ? tn.toStringTag : void 0;
function Gn(e) {
  return e == null ? e === void 0 ? mN : hN : V1 && V1 in Object(e) ? function(r) {
    var i = fN.call(r, ma), o = r[ma];
    try {
      r[ma] = void 0;
      var a = !0;
    } catch {
    }
    var u = pN.call(r);
    return a && (i ? r[ma] = o : delete r[ma]), u;
  }(e) : function(r) {
    return dN.call(r);
  }(e);
}
function nn(e) {
  return e != null && typeof e == "object";
}
var gN = "[object Symbol]";
function _u(e) {
  return typeof e == "symbol" || nn(e) && Gn(e) == gN;
}
function sk(e, r) {
  for (var i = -1, o = e == null ? 0 : e.length, a = Array(o); ++i < o; )
    a[i] = r(e[i], i, e);
  return a;
}
const Wt = Array.isArray;
var vN = 1 / 0, W1 = tn ? tn.prototype : void 0, X1 = W1 ? W1.toString : void 0;
function uk(e) {
  if (typeof e == "string")
    return e;
  if (Wt(e))
    return sk(e, uk) + "";
  if (_u(e))
    return X1 ? X1.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -vN ? "-0" : r;
}
var yN = /\s/, bN = /^\s+/;
function wN(e) {
  return e && e.slice(0, function(r) {
    for (var i = r.length; i-- && yN.test(r.charAt(i)); )
      ;
    return i;
  }(e) + 1).replace(bN, "");
}
function rn(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var kN = /^[-+]0x[0-9a-f]+$/i, xN = /^0b[01]+$/i, EN = /^0o[0-7]+$/i, SN = parseInt;
function ck(e) {
  return e;
}
var CN = "[object AsyncFunction]", TN = "[object Function]", AN = "[object GeneratorFunction]", NN = "[object Proxy]";
function em(e) {
  if (!rn(e))
    return !1;
  var r = Gn(e);
  return r == TN || r == AN || r == CN || r == NN;
}
const hp = Pn["__core-js_shared__"];
var Q1 = function() {
  var e = /[^.]+$/.exec(hp && hp.keys && hp.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), PN = Function.prototype.toString;
function ao(e) {
  if (e != null) {
    try {
      return PN.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ON = /^\[object .+?Constructor\]$/, LN = Function.prototype, MN = Object.prototype, IN = LN.toString, _N = MN.hasOwnProperty, RN = RegExp("^" + IN.call(_N).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function DN(e) {
  return !(!rn(e) || (r = e, Q1 && Q1 in r)) && (em(e) ? RN : ON).test(ao(e));
  var r;
}
function lo(e, r) {
  var i = function(o, a) {
    return o == null ? void 0 : o[a];
  }(e, r);
  return DN(i) ? i : void 0;
}
const Xd = lo(Pn, "WeakMap");
var Y1 = Object.create;
const jN = function() {
  function e() {
  }
  return function(r) {
    if (!rn(r))
      return {};
    if (Y1)
      return Y1(r);
    e.prototype = r;
    var i = new e();
    return e.prototype = void 0, i;
  };
}();
function fk(e, r) {
  var i = -1, o = e.length;
  for (r || (r = Array(o)); ++i < o; )
    r[i] = e[i];
  return r;
}
var HN = Date.now, FN = function() {
  try {
    var e = lo(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const uu = FN;
var BN = uu ? function(e, r) {
  return uu(e, "toString", { configurable: !0, enumerable: !1, value: (i = r, function() {
    return i;
  }), writable: !0 });
  var i;
} : ck, K1, mp, gp;
const pk = (K1 = BN, mp = 0, gp = 0, function() {
  var e = HN(), r = 16 - (e - gp);
  if (gp = e, r > 0) {
    if (++mp >= 800)
      return arguments[0];
  } else
    mp = 0;
  return K1.apply(void 0, arguments);
});
var zN = 9007199254740991, UN = /^(?:0|[1-9]\d*)$/;
function Ru(e, r) {
  var i = typeof e;
  return !!(r = r == null ? zN : r) && (i == "number" || i != "symbol" && UN.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
function tm(e, r, i) {
  r == "__proto__" && uu ? uu(e, r, { configurable: !0, enumerable: !0, value: i, writable: !0 }) : e[r] = i;
}
function el(e, r) {
  return e === r || e != e && r != r;
}
var GN = Object.prototype.hasOwnProperty;
function nm(e, r, i) {
  var o = e[r];
  GN.call(e, r) && el(o, i) && (i !== void 0 || r in e) || tm(e, r, i);
}
function Ko(e, r, i, o) {
  var a = !i;
  i || (i = {});
  for (var u = -1, c = r.length; ++u < c; ) {
    var f = r[u], h = o ? o(i[f], e[f], f, i, e) : void 0;
    h === void 0 && (h = e[f]), a ? tm(i, f, h) : nm(i, f, h);
  }
  return i;
}
var Z1 = Math.max;
function dk(e, r, i) {
  return r = Z1(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var o = arguments, a = -1, u = Z1(o.length - r, 0), c = Array(u); ++a < u; )
      c[a] = o[r + a];
    a = -1;
    for (var f = Array(r + 1); ++a < r; )
      f[a] = o[a];
    return f[r] = i(c), function(h, m, v) {
      switch (v.length) {
        case 0:
          return h.call(m);
        case 1:
          return h.call(m, v[0]);
        case 2:
          return h.call(m, v[0], v[1]);
        case 3:
          return h.call(m, v[0], v[1], v[2]);
      }
      return h.apply(m, v);
    }(e, this, f);
  };
}
function hk(e, r) {
  return pk(dk(e, r, ck), e + "");
}
var VN = 9007199254740991;
function rm(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= VN;
}
function Du(e) {
  return e != null && rm(e.length) && !em(e);
}
var WN = Object.prototype;
function om(e) {
  var r = e && e.constructor;
  return e === (typeof r == "function" && r.prototype || WN);
}
function q1(e) {
  return nn(e) && Gn(e) == "[object Arguments]";
}
var mk = Object.prototype, XN = mk.hasOwnProperty, QN = mk.propertyIsEnumerable;
const Ma = q1(function() {
  return arguments;
}()) ? q1 : function(e) {
  return nn(e) && XN.call(e, "callee") && !QN.call(e, "callee");
};
var gk = typeof exports == "object" && exports && !exports.nodeType && exports, J1 = gk && typeof module == "object" && module && !module.nodeType && module, $1 = J1 && J1.exports === gk ? Pn.Buffer : void 0;
const Ia = ($1 ? $1.isBuffer : void 0) || function() {
  return !1;
};
var He = {};
function im(e) {
  return function(r) {
    return e(r);
  };
}
He["[object Float32Array]"] = He["[object Float64Array]"] = He["[object Int8Array]"] = He["[object Int16Array]"] = He["[object Int32Array]"] = He["[object Uint8Array]"] = He["[object Uint8ClampedArray]"] = He["[object Uint16Array]"] = He["[object Uint32Array]"] = !0, He["[object Arguments]"] = He["[object Array]"] = He["[object ArrayBuffer]"] = He["[object Boolean]"] = He["[object DataView]"] = He["[object Date]"] = He["[object Error]"] = He["[object Function]"] = He["[object Map]"] = He["[object Number]"] = He["[object Object]"] = He["[object RegExp]"] = He["[object Set]"] = He["[object String]"] = He["[object WeakMap]"] = !1;
var vk = typeof exports == "object" && exports && !exports.nodeType && exports, xa = vk && typeof module == "object" && module && !module.nodeType && module, vp = xa && xa.exports === vk && ak.process;
const fi = function() {
  try {
    var e = xa && xa.require && xa.require("util").types;
    return e || vp && vp.binding && vp.binding("util");
  } catch {
  }
}();
var ey = fi && fi.isTypedArray;
const am = ey ? im(ey) : function(e) {
  return nn(e) && rm(e.length) && !!He[Gn(e)];
};
var YN = Object.prototype.hasOwnProperty;
function yk(e, r) {
  var i = Wt(e), o = !i && Ma(e), a = !i && !o && Ia(e), u = !i && !o && !a && am(e), c = i || o || a || u, f = c ? function(v, y) {
    for (var b = -1, E = Array(v); ++b < v; )
      E[b] = y(b);
    return E;
  }(e.length, String) : [], h = f.length;
  for (var m in e)
    !r && !YN.call(e, m) || c && (m == "length" || a && (m == "offset" || m == "parent") || u && (m == "buffer" || m == "byteLength" || m == "byteOffset") || Ru(m, h)) || f.push(m);
  return f;
}
function bk(e, r) {
  return function(i) {
    return e(r(i));
  };
}
const KN = bk(Object.keys, Object);
var ZN = Object.prototype.hasOwnProperty;
function Qd(e) {
  return Du(e) ? yk(e) : function(r) {
    if (!om(r))
      return KN(r);
    var i = [];
    for (var o in Object(r))
      ZN.call(r, o) && o != "constructor" && i.push(o);
    return i;
  }(e);
}
var qN = Object.prototype.hasOwnProperty;
function JN(e) {
  if (!rn(e))
    return function(a) {
      var u = [];
      if (a != null)
        for (var c in Object(a))
          u.push(c);
      return u;
    }(e);
  var r = om(e), i = [];
  for (var o in e)
    (o != "constructor" || !r && qN.call(e, o)) && i.push(o);
  return i;
}
function _a(e) {
  return Du(e) ? yk(e, !0) : JN(e);
}
var $N = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, e4 = /^\w*$/;
const ga = lo(Object, "create");
var t4 = Object.prototype.hasOwnProperty, n4 = Object.prototype.hasOwnProperty;
function Yr(e) {
  var r = -1, i = e == null ? 0 : e.length;
  for (this.clear(); ++r < i; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
function Ps(e, r) {
  for (var i = e.length; i--; )
    if (el(e[i][0], r))
      return i;
  return -1;
}
Yr.prototype.clear = function() {
  this.__data__ = ga ? ga(null) : {}, this.size = 0;
}, Yr.prototype.delete = function(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}, Yr.prototype.get = function(e) {
  var r = this.__data__;
  if (ga) {
    var i = r[e];
    return i === "__lodash_hash_undefined__" ? void 0 : i;
  }
  return t4.call(r, e) ? r[e] : void 0;
}, Yr.prototype.has = function(e) {
  var r = this.__data__;
  return ga ? r[e] !== void 0 : n4.call(r, e);
}, Yr.prototype.set = function(e, r) {
  var i = this.__data__;
  return this.size += this.has(e) ? 0 : 1, i[e] = ga && r === void 0 ? "__lodash_hash_undefined__" : r, this;
};
var r4 = Array.prototype.splice;
function Hn(e) {
  var r = -1, i = e == null ? 0 : e.length;
  for (this.clear(); ++r < i; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
Hn.prototype.clear = function() {
  this.__data__ = [], this.size = 0;
}, Hn.prototype.delete = function(e) {
  var r = this.__data__, i = Ps(r, e);
  return !(i < 0) && (i == r.length - 1 ? r.pop() : r4.call(r, i, 1), --this.size, !0);
}, Hn.prototype.get = function(e) {
  var r = this.__data__, i = Ps(r, e);
  return i < 0 ? void 0 : r[i][1];
}, Hn.prototype.has = function(e) {
  return Ps(this.__data__, e) > -1;
}, Hn.prototype.set = function(e, r) {
  var i = this.__data__, o = Ps(i, e);
  return o < 0 ? (++this.size, i.push([e, r])) : i[o][1] = r, this;
};
const Ra = lo(Pn, "Map");
function Os(e, r) {
  var i, o, a = e.__data__;
  return ((o = typeof (i = r)) == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
}
function Fn(e) {
  var r = -1, i = e == null ? 0 : e.length;
  for (this.clear(); ++r < i; ) {
    var o = e[r];
    this.set(o[0], o[1]);
  }
}
Fn.prototype.clear = function() {
  this.size = 0, this.__data__ = { hash: new Yr(), map: new (Ra || Hn)(), string: new Yr() };
}, Fn.prototype.delete = function(e) {
  var r = Os(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}, Fn.prototype.get = function(e) {
  return Os(this, e).get(e);
}, Fn.prototype.has = function(e) {
  return Os(this, e).has(e);
}, Fn.prototype.set = function(e, r) {
  var i = Os(this, e), o = i.size;
  return i.set(e, r), this.size += i.size == o ? 0 : 1, this;
};
var o4 = "Expected a function";
function lm(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(o4);
  var i = function() {
    var o = arguments, a = r ? r.apply(this, o) : o[0], u = i.cache;
    if (u.has(a))
      return u.get(a);
    var c = e.apply(this, o);
    return i.cache = u.set(a, c) || u, c;
  };
  return i.cache = new (lm.Cache || Fn)(), i;
}
lm.Cache = Fn;
var i4 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, a4 = /\\(\\)?/g, l4 = function(e) {
  var r = lm(e, function(o) {
    return i.size === 500 && i.clear(), o;
  }), i = r.cache;
  return r;
}(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(i4, function(i, o, a, u) {
    r.push(a ? u.replace(a4, "$1") : o || i);
  }), r;
});
const s4 = l4;
function ki(e, r) {
  return Wt(e) ? e : function(i, o) {
    if (Wt(i))
      return !1;
    var a = typeof i;
    return !(a != "number" && a != "symbol" && a != "boolean" && i != null && !_u(i)) || e4.test(i) || !$N.test(i) || o != null && i in Object(o);
  }(e, r) ? [e] : s4(function(i) {
    return i == null ? "" : uk(i);
  }(e));
}
var u4 = 1 / 0;
function ju(e) {
  if (typeof e == "string" || _u(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -u4 ? "-0" : r;
}
function wk(e, r) {
  for (var i = 0, o = (r = ki(r, e)).length; e != null && i < o; )
    e = e[ju(r[i++])];
  return i && i == o ? e : void 0;
}
function sm(e, r) {
  for (var i = -1, o = r.length, a = e.length; ++i < o; )
    e[a + i] = r[i];
  return e;
}
var ty = tn ? tn.isConcatSpreadable : void 0;
function c4(e) {
  return Wt(e) || Ma(e) || !!(ty && e && e[ty]);
}
function kk(e, r, i, o, a) {
  var u = -1, c = e.length;
  for (i || (i = c4), a || (a = []); ++u < c; ) {
    var f = e[u];
    r > 0 && i(f) ? r > 1 ? kk(f, r - 1, i, o, a) : sm(a, f) : o || (a[a.length] = f);
  }
  return a;
}
function f4(e) {
  return e != null && e.length ? kk(e, 1) : [];
}
function xk(e) {
  return pk(dk(e, void 0, f4), e + "");
}
const um = bk(Object.getPrototypeOf, Object);
var p4 = "[object Object]", d4 = Function.prototype, h4 = Object.prototype, Ek = d4.toString, m4 = h4.hasOwnProperty, g4 = Ek.call(Object);
function Sk(e) {
  if (!nn(e) || Gn(e) != p4)
    return !1;
  var r = um(e);
  if (r === null)
    return !0;
  var i = m4.call(r, "constructor") && r.constructor;
  return typeof i == "function" && i instanceof i && Ek.call(i) == g4;
}
function Tn(e) {
  var r = this.__data__ = new Hn(e);
  this.size = r.size;
}
Tn.prototype.clear = function() {
  this.__data__ = new Hn(), this.size = 0;
}, Tn.prototype.delete = function(e) {
  var r = this.__data__, i = r.delete(e);
  return this.size = r.size, i;
}, Tn.prototype.get = function(e) {
  return this.__data__.get(e);
}, Tn.prototype.has = function(e) {
  return this.__data__.has(e);
}, Tn.prototype.set = function(e, r) {
  var i = this.__data__;
  if (i instanceof Hn) {
    var o = i.__data__;
    if (!Ra || o.length < 199)
      return o.push([e, r]), this.size = ++i.size, this;
    i = this.__data__ = new Fn(o);
  }
  return i.set(e, r), this.size = i.size, this;
};
var Ck = typeof exports == "object" && exports && !exports.nodeType && exports, ny = Ck && typeof module == "object" && module && !module.nodeType && module, ry = ny && ny.exports === Ck ? Pn.Buffer : void 0, oy = ry ? ry.allocUnsafe : void 0;
function Tk(e, r) {
  if (r)
    return e.slice();
  var i = e.length, o = oy ? oy(i) : new e.constructor(i);
  return e.copy(o), o;
}
function Ak() {
  return [];
}
var v4 = Object.prototype.propertyIsEnumerable, iy = Object.getOwnPropertySymbols, y4 = iy ? function(e) {
  return e == null ? [] : (e = Object(e), function(r, i) {
    for (var o = -1, a = r == null ? 0 : r.length, u = 0, c = []; ++o < a; ) {
      var f = r[o];
      i(f, o, r) && (c[u++] = f);
    }
    return c;
  }(iy(e), function(r) {
    return v4.call(e, r);
  }));
} : Ak;
const cm = y4, Nk = Object.getOwnPropertySymbols ? function(e) {
  for (var r = []; e; )
    sm(r, cm(e)), e = um(e);
  return r;
} : Ak;
function Pk(e, r, i) {
  var o = r(e);
  return Wt(e) ? o : sm(o, i(e));
}
function Yd(e) {
  return Pk(e, Qd, cm);
}
function Ok(e) {
  return Pk(e, _a, Nk);
}
const Kd = lo(Pn, "DataView"), Zd = lo(Pn, "Promise"), qd = lo(Pn, "Set");
var ay = "[object Map]", ly = "[object Promise]", sy = "[object Set]", uy = "[object WeakMap]", cy = "[object DataView]", b4 = ao(Kd), w4 = ao(Ra), k4 = ao(Zd), x4 = ao(qd), E4 = ao(Xd), Qr = Gn;
(Kd && Qr(new Kd(new ArrayBuffer(1))) != cy || Ra && Qr(new Ra()) != ay || Zd && Qr(Zd.resolve()) != ly || qd && Qr(new qd()) != sy || Xd && Qr(new Xd()) != uy) && (Qr = function(e) {
  var r = Gn(e), i = r == "[object Object]" ? e.constructor : void 0, o = i ? ao(i) : "";
  if (o)
    switch (o) {
      case b4:
        return cy;
      case w4:
        return ay;
      case k4:
        return ly;
      case x4:
        return sy;
      case E4:
        return uy;
    }
  return r;
});
const Da = Qr;
var S4 = Object.prototype.hasOwnProperty;
const cu = Pn.Uint8Array;
function Jd(e) {
  var r = new e.constructor(e.byteLength);
  return new cu(r).set(new cu(e)), r;
}
var C4 = /\w*$/, fy = tn ? tn.prototype : void 0, py = fy ? fy.valueOf : void 0;
function Lk(e, r) {
  var i = r ? Jd(e.buffer) : e.buffer;
  return new e.constructor(i, e.byteOffset, e.length);
}
var T4 = "[object Boolean]", A4 = "[object Date]", N4 = "[object Map]", P4 = "[object Number]", O4 = "[object RegExp]", L4 = "[object Set]", M4 = "[object String]", I4 = "[object Symbol]", _4 = "[object ArrayBuffer]", R4 = "[object DataView]", D4 = "[object Float32Array]", j4 = "[object Float64Array]", H4 = "[object Int8Array]", F4 = "[object Int16Array]", B4 = "[object Int32Array]", z4 = "[object Uint8Array]", U4 = "[object Uint8ClampedArray]", G4 = "[object Uint16Array]", V4 = "[object Uint32Array]";
function W4(e, r, i) {
  var o, a, u = e.constructor;
  switch (r) {
    case _4:
      return Jd(e);
    case T4:
    case A4:
      return new u(+e);
    case R4:
      return function(c, f) {
        var h = f ? Jd(c.buffer) : c.buffer;
        return new c.constructor(h, c.byteOffset, c.byteLength);
      }(e, i);
    case D4:
    case j4:
    case H4:
    case F4:
    case B4:
    case z4:
    case U4:
    case G4:
    case V4:
      return Lk(e, i);
    case N4:
      return new u();
    case P4:
    case M4:
      return new u(e);
    case O4:
      return (a = new (o = e).constructor(o.source, C4.exec(o))).lastIndex = o.lastIndex, a;
    case L4:
      return new u();
    case I4:
      return function(c) {
        return py ? Object(py.call(c)) : {};
      }(e);
  }
}
function Mk(e) {
  return typeof e.constructor != "function" || om(e) ? {} : jN(um(e));
}
var dy = fi && fi.isMap;
const X4 = dy ? im(dy) : function(e) {
  return nn(e) && Da(e) == "[object Map]";
};
var hy = fi && fi.isSet;
const Q4 = hy ? im(hy) : function(e) {
  return nn(e) && Da(e) == "[object Set]";
};
var Ik = "[object Arguments]", _k = "[object Function]", Rk = "[object Object]", _e = {};
function Qs(e, r, i, o, a, u) {
  var c, f = 1 & r, h = 2 & r, m = 4 & r;
  if (i && (c = a ? i(e, o, a, u) : i(e)), c !== void 0)
    return c;
  if (!rn(e))
    return e;
  var v = Wt(e);
  if (v) {
    if (c = function(S) {
      var H = S.length, D = new S.constructor(H);
      return H && typeof S[0] == "string" && S4.call(S, "index") && (D.index = S.index, D.input = S.input), D;
    }(e), !f)
      return fk(e, c);
  } else {
    var y = Da(e), b = y == _k || y == "[object GeneratorFunction]";
    if (Ia(e))
      return Tk(e, f);
    if (y == Rk || y == Ik || b && !a) {
      if (c = h || b ? {} : Mk(e), !f)
        return h ? function(S, H) {
          return Ko(S, Nk(S), H);
        }(e, function(S, H) {
          return S && Ko(H, _a(H), S);
        }(c, e)) : function(S, H) {
          return Ko(S, cm(S), H);
        }(e, function(S, H) {
          return S && Ko(H, Qd(H), S);
        }(c, e));
    } else {
      if (!_e[y])
        return a ? e : {};
      c = W4(e, y, f);
    }
  }
  u || (u = new Tn());
  var E = u.get(e);
  if (E)
    return E;
  u.set(e, c), Q4(e) ? e.forEach(function(S) {
    c.add(Qs(S, r, i, S, e, u));
  }) : X4(e) && e.forEach(function(S, H) {
    c.set(H, Qs(S, r, i, H, e, u));
  });
  var A = v ? void 0 : (m ? h ? Ok : Yd : h ? _a : Qd)(e);
  return function(S, H) {
    for (var D = -1, L = S == null ? 0 : S.length; ++D < L && H(S[D], D, S) !== !1; )
      ;
  }(A || e, function(S, H) {
    A && (S = e[H = S]), nm(c, H, Qs(S, r, i, H, e, u));
  }), c;
}
_e[Ik] = _e["[object Array]"] = _e["[object ArrayBuffer]"] = _e["[object DataView]"] = _e["[object Boolean]"] = _e["[object Date]"] = _e["[object Float32Array]"] = _e["[object Float64Array]"] = _e["[object Int8Array]"] = _e["[object Int16Array]"] = _e["[object Int32Array]"] = _e["[object Map]"] = _e["[object Number]"] = _e[Rk] = _e["[object RegExp]"] = _e["[object Set]"] = _e["[object String]"] = _e["[object Symbol]"] = _e["[object Uint8Array]"] = _e["[object Uint8ClampedArray]"] = _e["[object Uint16Array]"] = _e["[object Uint32Array]"] = !0, _e["[object Error]"] = _e[_k] = _e["[object WeakMap]"] = !1;
function Ys(e) {
  var r = -1, i = e == null ? 0 : e.length;
  for (this.__data__ = new Fn(); ++r < i; )
    this.add(e[r]);
}
function Y4(e, r) {
  for (var i = -1, o = e == null ? 0 : e.length; ++i < o; )
    if (r(e[i], i, e))
      return !0;
  return !1;
}
Ys.prototype.add = Ys.prototype.push = function(e) {
  return this.__data__.set(e, "__lodash_hash_undefined__"), this;
}, Ys.prototype.has = function(e) {
  return this.__data__.has(e);
};
var K4 = 1, Z4 = 2;
function my(e, r, i, o, a, u) {
  var c = i & K4, f = e.length, h = r.length;
  if (f != h && !(c && h > f))
    return !1;
  var m = u.get(e), v = u.get(r);
  if (m && v)
    return m == r && v == e;
  var y = -1, b = !0, E = i & Z4 ? new Ys() : void 0;
  for (u.set(e, r), u.set(r, e); ++y < f; ) {
    var A = e[y], S = r[y];
    if (o)
      var H = c ? o(S, A, y, r, e, u) : o(A, S, y, e, r, u);
    if (H !== void 0) {
      if (H)
        continue;
      b = !1;
      break;
    }
    if (E) {
      if (!Y4(r, function(D, L) {
        if (V = L, !E.has(V) && (A === D || a(A, D, i, o, u)))
          return E.push(L);
        var V;
      })) {
        b = !1;
        break;
      }
    } else if (A !== S && !a(A, S, i, o, u)) {
      b = !1;
      break;
    }
  }
  return u.delete(e), u.delete(r), b;
}
function q4(e) {
  var r = -1, i = Array(e.size);
  return e.forEach(function(o, a) {
    i[++r] = [a, o];
  }), i;
}
function J4(e) {
  var r = -1, i = Array(e.size);
  return e.forEach(function(o) {
    i[++r] = o;
  }), i;
}
var $4 = 1, eP = 2, tP = "[object Boolean]", nP = "[object Date]", rP = "[object Error]", oP = "[object Map]", iP = "[object Number]", aP = "[object RegExp]", lP = "[object Set]", sP = "[object String]", uP = "[object Symbol]", cP = "[object ArrayBuffer]", fP = "[object DataView]", gy = tn ? tn.prototype : void 0, yp = gy ? gy.valueOf : void 0, pP = 1, dP = Object.prototype.hasOwnProperty, hP = 1, vy = "[object Arguments]", yy = "[object Array]", Ls = "[object Object]", by = Object.prototype.hasOwnProperty;
function mP(e, r, i, o, a, u) {
  var c = Wt(e), f = Wt(r), h = c ? yy : Da(e), m = f ? yy : Da(r), v = (h = h == vy ? Ls : h) == Ls, y = (m = m == vy ? Ls : m) == Ls, b = h == m;
  if (b && Ia(e)) {
    if (!Ia(r))
      return !1;
    c = !0, v = !1;
  }
  if (b && !v)
    return u || (u = new Tn()), c || am(e) ? my(e, r, i, o, a, u) : function(D, L, V, Q, z, te, J) {
      switch (V) {
        case fP:
          if (D.byteLength != L.byteLength || D.byteOffset != L.byteOffset)
            return !1;
          D = D.buffer, L = L.buffer;
        case cP:
          return !(D.byteLength != L.byteLength || !te(new cu(D), new cu(L)));
        case tP:
        case nP:
        case iP:
          return el(+D, +L);
        case rP:
          return D.name == L.name && D.message == L.message;
        case aP:
        case sP:
          return D == L + "";
        case oP:
          var he = q4;
        case lP:
          var le = Q & $4;
          if (he || (he = J4), D.size != L.size && !le)
            return !1;
          var me = J.get(D);
          if (me)
            return me == L;
          Q |= eP, J.set(D, L);
          var ye = my(he(D), he(L), Q, z, te, J);
          return J.delete(D), ye;
        case uP:
          if (yp)
            return yp.call(D) == yp.call(L);
      }
      return !1;
    }(e, r, h, i, o, a, u);
  if (!(i & hP)) {
    var E = v && by.call(e, "__wrapped__"), A = y && by.call(r, "__wrapped__");
    if (E || A) {
      var S = E ? e.value() : e, H = A ? r.value() : r;
      return u || (u = new Tn()), a(S, H, i, o, u);
    }
  }
  return !!b && (u || (u = new Tn()), function(D, L, V, Q, z, te) {
    var J = V & pP, he = Yd(D), le = he.length;
    if (le != Yd(L).length && !J)
      return !1;
    for (var me = le; me--; ) {
      var ye = he[me];
      if (!(J ? ye in L : dP.call(L, ye)))
        return !1;
    }
    var be = te.get(D), Me = te.get(L);
    if (be && Me)
      return be == L && Me == D;
    var we = !0;
    te.set(D, L), te.set(L, D);
    for (var ot = J; ++me < le; ) {
      var Ue = D[ye = he[me]], M = L[ye];
      if (Q)
        var N = J ? Q(M, Ue, ye, L, D, te) : Q(Ue, M, ye, D, L, te);
      if (!(N === void 0 ? Ue === M || z(Ue, M, V, Q, te) : N)) {
        we = !1;
        break;
      }
      ot || (ot = ye == "constructor");
    }
    if (we && !ot) {
      var X = D.constructor, Y = L.constructor;
      X == Y || !("constructor" in D) || !("constructor" in L) || typeof X == "function" && X instanceof X && typeof Y == "function" && Y instanceof Y || (we = !1);
    }
    return te.delete(D), te.delete(L), we;
  }(e, r, i, o, a, u));
}
function Dk(e, r, i, o, a) {
  return e === r || (e == null || r == null || !nn(e) && !nn(r) ? e != e && r != r : mP(e, r, i, o, Dk, a));
}
function gP(e, r) {
  return e != null && r in Object(e);
}
function vP(e, r) {
  return e != null && function(i, o, a) {
    for (var u = -1, c = (o = ki(o, i)).length, f = !1; ++u < c; ) {
      var h = ju(o[u]);
      if (!(f = i != null && a(i, h)))
        break;
      i = i[h];
    }
    return f || ++u != c ? f : !!(c = i == null ? 0 : i.length) && rm(c) && Ru(h, c) && (Wt(i) || Ma(i));
  }(e, r, gP);
}
var yP, bP = function(e, r, i) {
  for (var o = -1, a = Object(e), u = i(e), c = u.length; c--; ) {
    var f = u[yP ? c : ++o];
    if (r(a[f], f, a) === !1)
      break;
  }
  return e;
};
const wP = bP;
function $d(e, r, i) {
  (i !== void 0 && !el(e[r], i) || i === void 0 && !(r in e)) && tm(e, r, i);
}
function eh(e, r) {
  if ((r !== "constructor" || typeof e[r] != "function") && r != "__proto__")
    return e[r];
}
function kP(e, r, i, o, a, u, c) {
  var f = eh(e, i), h = eh(r, i), m = c.get(h);
  if (m)
    $d(e, i, m);
  else {
    var v, y = u ? u(f, h, i + "", e, r, c) : void 0, b = y === void 0;
    if (b) {
      var E = Wt(h), A = !E && Ia(h), S = !E && !A && am(h);
      y = h, E || A || S ? Wt(f) ? y = f : nn(v = f) && Du(v) ? y = fk(f) : A ? (b = !1, y = Tk(h, !0)) : S ? (b = !1, y = Lk(h, !0)) : y = [] : Sk(h) || Ma(h) ? (y = f, Ma(f) ? y = function(H) {
        return Ko(H, _a(H));
      }(f) : rn(f) && !em(f) || (y = Mk(h))) : b = !1;
    }
    b && (c.set(h, y), a(y, h, o, u, c), c.delete(h)), $d(e, i, y);
  }
}
function jk(e, r, i, o, a) {
  e !== r && wP(r, function(u, c) {
    if (a || (a = new Tn()), rn(u))
      kP(e, r, c, i, jk, o, a);
    else {
      var f = o ? o(eh(e, c), u, c + "", e, r, a) : void 0;
      f === void 0 && (f = u), $d(e, c, f);
    }
  }, _a);
}
var xP = hk(function(e, r, i) {
  return function(o, a, u) {
    if (typeof o != "function")
      throw new TypeError("Expected a function");
    return setTimeout(function() {
      o.apply(void 0, u);
    }, a);
  }(e, function(o) {
    if (typeof o == "number")
      return o;
    if (_u(o))
      return NaN;
    if (rn(o)) {
      var a = typeof o.valueOf == "function" ? o.valueOf() : o;
      o = rn(a) ? a + "" : a;
    }
    if (typeof o != "string")
      return o === 0 ? o : +o;
    o = wN(o);
    var u = xN.test(o);
    return u || EN.test(o) ? SN(o.slice(2), u ? 2 : 8) : kN.test(o) ? NaN : +o;
  }(r) || 0, i);
});
const EP = xP;
function SP(e, r) {
  return r.length < 2 ? e : wk(e, function(i, o, a) {
    var u = -1, c = i.length;
    o < 0 && (o = -o > c ? 0 : c + o), (a = a > c ? c : a) < 0 && (a += c), c = o > a ? 0 : a - o >>> 0, o >>>= 0;
    for (var f = Array(c); ++u < c; )
      f[u] = i[u + o];
    return f;
  }(r, 0, -1));
}
function wy(e, r) {
  return Dk(e, r);
}
function oe(e) {
  return e === void 0;
}
var bp, CP = (bp = function(e, r, i) {
  jk(e, r, i);
}, hk(function(e, r) {
  var i = -1, o = r.length, a = o > 1 ? r[o - 1] : void 0, u = o > 2 ? r[2] : void 0;
  for (a = bp.length > 3 && typeof a == "function" ? (o--, a) : void 0, u && function(f, h, m) {
    if (!rn(m))
      return !1;
    var v = typeof h;
    return !!(v == "number" ? Du(m) && Ru(h, m.length) : v == "string" && h in m) && el(m[h], f);
  }(r[0], r[1], u) && (a = o < 3 ? void 0 : a, o = 1), e = Object(e); ++i < o; ) {
    var c = r[i];
    c && bp(e, c, i, a);
  }
  return e;
}));
const TP = CP;
function AP(e, r) {
  return (e = SP(e, r = ki(r, e))) == null || delete e[ju((i = r, o = i == null ? 0 : i.length, o ? i[o - 1] : void 0))];
  var i, o;
}
function NP(e) {
  return Sk(e) ? void 0 : e;
}
var PP = xk(function(e, r) {
  var i = {};
  if (e == null)
    return i;
  var o = !1;
  r = sk(r, function(u) {
    return u = ki(u, e), o || (o = u.length > 1), u;
  }), Ko(e, Ok(e), i), o && (i = Qs(i, 7, NP));
  for (var a = r.length; a--; )
    AP(i, r[a]);
  return i;
});
const OP = PP;
function LP(e, r, i, o) {
  if (!rn(e))
    return e;
  for (var a = -1, u = (r = ki(r, e)).length, c = u - 1, f = e; f != null && ++a < u; ) {
    var h = ju(r[a]), m = i;
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return e;
    if (a != c) {
      var v = f[h];
      (m = o ? o(v, h, f) : void 0) === void 0 && (m = rn(v) ? v : Ru(r[a + 1]) ? [] : {});
    }
    nm(f, h, m), f = f[h];
  }
  return e;
}
function MP(e, r) {
  return function(i, o, a) {
    for (var u = -1, c = o.length, f = {}; ++u < c; ) {
      var h = o[u], m = wk(i, h);
      a(m, h) && LP(f, ki(h, i), m);
    }
    return f;
  }(e, r, function(i, o) {
    return vP(e, o);
  });
}
const IP = xk(function(e, r) {
  return e == null ? {} : MP(e, r);
});
function _P(e) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    i[o - 1] = arguments[o];
  if (!e)
    return "";
  if (i.length) {
    var a = e.match(/\$\{(\d+)\}/g);
    return a && a.length && Gd(O5(a).call(a)[0].substr(2), 10) === 1 && i.unshift(""), e.replace(/\$\{(\d+)\}/g, function(u, c) {
      var f = Gd(c, 10), h = i[f];
      return typeof h == "number" ? "" + h : h || "";
    });
  }
  return e;
}
function Hk(e, r) {
  return { componentName: e, defaultLocaleSet: r };
}
var ky = "zh_cn", RP = {}, DP = { exports: {} }, th = Xt, jP = gt, Fk = Function.prototype, HP = th && Object.getOwnPropertyDescriptor, wp = jP(Fk, "name"), Bk = { EXISTS: wp, PROPER: wp && function() {
}.name === "something", CONFIGURABLE: wp && (!th || th && HP(Fk, "name").configurable) }, FP = Bk.PROPER, BP = ze, xy = Kh, zP = Q2.trim;
ce({ target: "String", proto: !0, forced: function(e) {
  return BP(function() {
    return !!xy[e]() || "\u200B\x85\u180E"[e]() !== "\u200B\x85\u180E" || FP && xy[e].name !== e;
  });
}("trim") }, { trim: function() {
  return zP(this);
} });
var UP = vt("String").trim, GP = nt, VP = UP, kp = String.prototype;
const WP = Ne(DP.exports = function(e) {
  var r = e.trim;
  return typeof e == "string" || e === kp || GP(kp, e) && r === kp.trim ? VP : r;
});
var XP = { exports: {} }, QP = Sr, YP = Mu, KP = Ar, Ey = function(e) {
  return function(r, i, o) {
    var a, u = QP(r), c = KP(u), f = YP(o, c);
    if (e && i != i) {
      for (; c > f; )
        if ((a = u[f++]) != a)
          return !0;
    } else
      for (; c > f; f++)
        if ((e || f in u) && u[f] === i)
          return e || f || 0;
    return !e && -1;
  };
}, fm = { includes: Ey(!0), indexOf: Ey(!1) }, Hu = {}, xp = gt, ZP = Sr, qP = fm.indexOf, JP = Hu, Sy = Re([].push), zk = function(e, r) {
  var i, o = ZP(e), a = 0, u = [];
  for (i in o)
    !xp(JP, i) && xp(o, i) && Sy(u, i);
  for (; r.length > a; )
    xp(o, i = r[a++]) && (~qP(u, i) || Sy(u, i));
  return u;
}, pm = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], $P = zk, e8 = pm, Fu = Object.keys || function(e) {
  return $P(e, e8);
}, tl = {};
tl.f = Object.getOwnPropertySymbols;
var Cy = Xt, t8 = Re, n8 = ft, r8 = ze, Ep = Fu, o8 = tl, i8 = Nu, a8 = Wn, l8 = Gh, Bo = Object.assign, Ty = Object.defineProperty, s8 = t8([].concat), u8 = !Bo || r8(function() {
  if (Cy && Bo({ b: 1 }, Bo(Ty({}, "a", { enumerable: !0, get: function() {
    Ty(this, "b", { value: 3, enumerable: !1 });
  } }), { b: 2 })).b !== 1)
    return !0;
  var e = {}, r = {}, i = Symbol(), o = "abcdefghijklmnopqrst";
  return e[i] = 7, o.split("").forEach(function(a) {
    r[a] = a;
  }), Bo({}, e)[i] != 7 || Ep(Bo({}, r)).join("") != o;
}) ? function(e, r) {
  for (var i = a8(e), o = arguments.length, a = 1, u = o8.f, c = i8.f; o > a; )
    for (var f, h = l8(arguments[a++]), m = u ? s8(Ep(h), u(h)) : Ep(h), v = m.length, y = 0; v > y; )
      f = m[y++], Cy && !n8(c, h, f) || (i[f] = h[f]);
  return i;
} : Bo, Ay = u8;
ce({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== Ay }, { assign: Ay });
var Uk = _t.Object.assign;
const pi = Ne(XP.exports = Uk);
var c8 = { exports: {} };
const Ny = Ne(c8.exports = Uk);
var f8 = { exports: {} }, nl = Re([].slice), Gk = Re, p8 = an, d8 = It, h8 = gt, Py = nl, m8 = Wa, Oy = Function, g8 = Gk([].concat), v8 = Gk([].join), Sp = {}, y8 = m8 ? Oy.bind : function(e) {
  var r = p8(this), i = r.prototype, o = Py(arguments, 1), a = function() {
    var u = g8(o, Py(arguments));
    return this instanceof a ? function(c, f, h) {
      if (!h8(Sp, f)) {
        for (var m = [], v = 0; v < f; v++)
          m[v] = "a[" + v + "]";
        Sp[f] = Oy("C,a", "return new C(" + v8(m, ",") + ")");
      }
      return Sp[f](c, h);
    }(r, u.length, u) : r.apply(e, u);
  };
  return d8(i) && (a.prototype = i), a;
}, Ly = y8;
ce({ target: "Function", proto: !0, forced: Function.bind !== Ly }, { bind: Ly });
var b8 = vt("Function").bind, w8 = nt, k8 = b8, Cp = Function.prototype;
const Vk = Ne(f8.exports = function(e) {
  var r = e.bind;
  return e === Cp || w8(Cp, e) && r === Cp.bind ? k8 : r;
});
function Be() {
  var e;
  return Be = Ny ? Vk(e = Ny).call(e) : function(r) {
    for (var i = 1; i < arguments.length; i++) {
      var o = arguments[i];
      for (var a in o)
        Object.prototype.hasOwnProperty.call(o, a) && (r[a] = o[a]);
    }
    return r;
  }, Be.apply(this, arguments);
}
var x8 = function(e) {
  return k("svg", { width: "1em", height: "1em", viewBox: "0 0 12 12", fill: "currentColor", ...e, children: k("path", { d: "M11.287 0L12 .605 6.655 6 12 11.395l-.713.605L6 6.662.713 12 0 11.395 5.344 6 0 .605.713 0 6 5.338 11.287 0z", fillRule: "nonzero" }) });
}, E8 = function(e) {
  return k("svg", { width: "1em", height: "1em", viewBox: "0 0 8 8", fill: "currentColor", ...e, children: k("path", { d: "M.17.41a.583.583 0 01.825 0L4 3.415 7.005.41a.583.583 0 11.824.824L4.824 4.24l2.764 2.764a.583.583 0 01.067.744l-.067.08a.583.583 0 01-.824 0L4 5.063 1.236 7.827a.583.583 0 01-.824-.824L3.176 4.24.171 1.234A.583.583 0 01.103.491z", fillRule: "nonzero" }) });
}, S8 = function(e) {
  return k("svg", { width: "1em", height: "1em", viewBox: "0 0 11 8", fill: "currentColor", ...e, children: k("path", { d: "M3.086 6.5l-3-3L1.5 2.086l3 3 5-5L10.914 1.5 4.5 7.914z", fillRule: "nonzero" }) });
}, My = function(e) {
  return k("svg", { "data-name": "\\u56FE\\u5C42 1", viewBox: "0 0 768 768", width: "1em", height: "1em", fill: "currentColor", ...e, children: k("path", { d: "M726.63 201.37a32 32 0 00-45.25 0L384 498.75 86.63 201.37a32 32 0 00-45.25 0 32 32 0 000 45.26l320 320a32 32 0 0045.26 0l320-320a32 32 0 00-.01-45.26z" }) });
}, Wk = function(e) {
  return k("svg", { "data-name": "\\u56FE\\u5C42 1", viewBox: "0 0 768 768", width: "1em", height: "1em", fill: "currentColor", ...e, children: k("path", { d: "M598.63 361.37L299 73.37a32 32 0 00-45.25 0 32 32 0 000 45.26L529.83 384l-276.1 265.37a32 32 0 000 45.26 32 32 0 0045.25 0l299.65-288a32 32 0 000-45.26z" }) });
}, C8 = function(e) {
  return k("svg", { "data-name": "\\u56FE\\u5C42 1", viewBox: "0 0 768 768", width: "1em", height: "1em", fill: "currentColor", ...e, children: k("path", { d: "M41.38 566.63a32 32 0 0045.25 0L384 269.25l297.38 297.38a32 32 0 0045.25 0 32 32 0 000-45.26l-320-320a32 32 0 00-45.25 0l-320 320a32 32 0 000 45.26z" }) });
}, T8 = function(e) {
  return k("svg", { width: "1em", height: "1em", viewBox: "0 0 14 14", fill: "currentColor", ...e, children: k("path", { d: "M13.917 7a.5.5 0 01-1 0A5.917 5.917 0 007 1.083a.5.5 0 010-1A6.917 6.917 0 0113.917 7z" }) });
}, A8 = { exports: {} }, N8 = Wn, Iy = Fu;
ce({ target: "Object", stat: !0, forced: ze(function() {
  Iy(1);
}) }, { keys: function(e) {
  return Iy(N8(e));
} });
var Xk = _t.Object.keys;
const Qk = Ne(A8.exports = Xk);
var fu, Ea, pu, P8 = { exports: {} }, xi = {}, O8 = et, _y = Ze.WeakMap, L8 = O8(_y) && /native code/.test(String(_y)), M8 = io.exports, I8 = Xh, Ry = M8("keys"), Bu = function(e) {
  return Ry[e] || (Ry[e] = I8(e));
}, _8 = L8, Yk = Ze, R8 = It, D8 = Tr, Tp = gt, Ap = Wh, j8 = Bu, H8 = Hu, Dy = "Object already initialized", nh = Yk.TypeError, F8 = Yk.WeakMap;
if (_8 || Ap.state) {
  var xn = Ap.state || (Ap.state = new F8());
  xn.get = xn.get, xn.has = xn.has, xn.set = xn.set, fu = function(e, r) {
    if (xn.has(e))
      throw nh(Dy);
    return r.facade = e, xn.set(e, r), r;
  }, Ea = function(e) {
    return xn.get(e) || {};
  }, pu = function(e) {
    return xn.has(e);
  };
} else {
  var zo = j8("state");
  H8[zo] = !0, fu = function(e, r) {
    if (Tp(e, zo))
      throw nh(Dy);
    return r.facade = e, D8(e, zo, r), r;
  }, Ea = function(e) {
    return Tp(e, zo) ? e[zo] : {};
  }, pu = function(e) {
    return Tp(e, zo);
  };
}
var zu = { set: fu, get: Ea, has: pu, enforce: function(e) {
  return pu(e) ? Ea(e) : fu(e, {});
}, getterFor: function(e) {
  return function(r) {
    var i;
    if (!R8(r) || (i = Ea(r)).type !== e)
      throw nh("Incompatible receiver, " + e + " required");
    return i;
  };
} }, dm = {}, B8 = Xt, z8 = W2, U8 = dn, G8 = hn, V8 = Sr, W8 = Fu;
dm.f = B8 && !z8 ? Object.defineProperties : function(e, r) {
  G8(e);
  for (var i, o = V8(r), a = W8(r), u = a.length, c = 0; u > c; )
    U8.f(e, i = a[c++], o[i]);
  return e;
};
var Ms, Kk = Rt("document", "documentElement"), X8 = hn, Q8 = dm, jy = pm, Y8 = Hu, K8 = Kk, Z8 = Qh, rh = "prototype", oh = "script", Zk = Bu("IE_PROTO"), Np = function() {
}, qk = function(e) {
  return "<" + oh + ">" + e + "</" + oh + ">";
}, Hy = function(e) {
  e.write(qk("")), e.close();
  var r = e.parentWindow.Object;
  return e = null, r;
}, Ks = function() {
  try {
    Ms = new ActiveXObject("htmlfile");
  } catch {
  }
  var e, r, i;
  Ks = typeof document < "u" ? document.domain && Ms ? Hy(Ms) : (r = Z8("iframe"), i = "java" + oh + ":", r.style.display = "none", K8.appendChild(r), r.src = String(i), (e = r.contentWindow.document).open(), e.write(qk("document.F=Object")), e.close(), e.F) : Hy(Ms);
  for (var o = jy.length; o--; )
    delete Ks[rh][jy[o]];
  return Ks();
};
Y8[Zk] = !0;
var Jr, Fy, By, rl = Object.create || function(e, r) {
  var i;
  return e !== null ? (Np[rh] = X8(e), i = new Np(), Np[rh] = null, i[Zk] = e) : i = Ks(), r === void 0 ? i : Q8.f(i, r);
}, q8 = !ze(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), J8 = gt, $8 = et, eO = Wn, tO = q8, zy = Bu("IE_PROTO"), ih = Object, nO = ih.prototype, hm = tO ? ih.getPrototypeOf : function(e) {
  var r = eO(e);
  if (J8(r, zy))
    return r[zy];
  var i = r.constructor;
  return $8(i) && r instanceof i ? i.prototype : r instanceof ih ? nO : null;
}, rO = Tr, ol = function(e, r, i, o) {
  return o && o.enumerable ? e[r] = i : rO(e, r, i), e;
}, oO = ze, iO = et, aO = It, lO = rl, Uy = hm, sO = ol, ah = We("iterator"), Jk = !1;
[].keys && ("next" in (By = [].keys()) ? (Fy = Uy(Uy(By))) !== Object.prototype && (Jr = Fy) : Jk = !0);
var uO = !aO(Jr) || oO(function() {
  var e = {};
  return Jr[ah].call(e) !== e;
});
iO((Jr = uO ? {} : lO(Jr))[ah]) || sO(Jr, ah, function() {
  return this;
});
var $k = { IteratorPrototype: Jr, BUGGY_SAFARI_ITERATORS: Jk }, cO = bi, fO = Yh ? {}.toString : function() {
  return "[object " + cO(this) + "]";
}, pO = Yh, dO = dn.f, hO = Tr, mO = gt, gO = fO, Gy = We("toStringTag"), Ei = function(e, r, i, o) {
  if (e) {
    var a = i ? e : e.prototype;
    mO(a, Gy) || dO(a, Gy, { configurable: !0, value: r }), o && !pO && hO(a, "toString", gO);
  }
}, vO = $k.IteratorPrototype, yO = rl, bO = oo, wO = Ei, kO = xi, xO = function() {
  return this;
}, EO = Re, SO = an, CO = et, TO = String, AO = TypeError, NO = function(e, r, i) {
  try {
    return EO(SO(Object.getOwnPropertyDescriptor(e, r)[i]));
  } catch {
  }
}, PO = hn, OO = function(e) {
  if (typeof e == "object" || CO(e))
    return e;
  throw AO("Can't set " + TO(e) + " as a prototype");
}, ex = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e, r = !1, i = {};
  try {
    (e = NO(Object.prototype, "__proto__", "set"))(i, []), r = i instanceof Array;
  } catch {
  }
  return function(o, a) {
    return PO(o), OO(a), r ? e(o, a) : o.__proto__ = a, o;
  };
}() : void 0), LO = ce, MO = ft, IO = Bk, _O = function(e, r, i, o) {
  var a = r + " Iterator";
  return e.prototype = yO(vO, { next: bO(+!o, i) }), wO(e, a, !1, !0), kO[a] = xO, e;
}, RO = hm, DO = Ei, Vy = ol, Wy = xi, jO = $k, HO = IO.PROPER, Is = jO.BUGGY_SAFARI_ITERATORS, Pp = We("iterator"), Xy = "keys", _s = "values", Qy = "entries", FO = function() {
  return this;
}, tx = function(e, r, i, o, a, u, c) {
  _O(i, r, o);
  var f, h, m, v = function(D) {
    if (D === a && S)
      return S;
    if (!Is && D in E)
      return E[D];
    switch (D) {
      case Xy:
      case _s:
      case Qy:
        return function() {
          return new i(this, D);
        };
    }
    return function() {
      return new i(this);
    };
  }, y = r + " Iterator", b = !1, E = e.prototype, A = E[Pp] || E["@@iterator"] || a && E[a], S = !Is && A || v(a), H = r == "Array" && E.entries || A;
  if (H && (f = RO(H.call(new e()))) !== Object.prototype && f.next && (DO(f, y, !0, !0), Wy[y] = FO), HO && a == _s && A && A.name !== _s && (b = !0, S = function() {
    return MO(A, this);
  }), a)
    if (h = { values: v(_s), keys: u ? S : v(Xy), entries: v(Qy) }, c)
      for (m in h)
        (Is || b || !(m in E)) && Vy(E, m, h[m]);
    else
      LO({ target: r, proto: !0, forced: Is || b }, h);
  return c && E[Pp] !== S && Vy(E, Pp, S, { name: a }), Wy[r] = S, h;
}, nx = function(e, r) {
  return { value: e, done: r };
}, BO = Sr, Op = function() {
}, Yy = xi, rx = zu, zO = (dn.f, tx), Ky = nx, ox = "Array Iterator", UO = rx.set, GO = rx.getterFor(ox);
zO(Array, "Array", function(e, r) {
  UO(this, { type: ox, target: BO(e), index: 0, kind: r });
}, function() {
  var e = GO(this), r = e.target, i = e.kind, o = e.index++;
  return !r || o >= r.length ? (e.target = void 0, Ky(void 0, !0)) : Ky(i == "keys" ? o : i == "values" ? r[o] : [o, r[o]], !1);
}, "values");
Yy.Arguments = Yy.Array;
Op(), Op(), Op();
var VO = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }, WO = Ze, XO = bi, QO = Tr, Zy = xi, qy = We("toStringTag");
for (var Lp in VO) {
  var Jy = WO[Lp], Mp = Jy && Jy.prototype;
  Mp && XO(Mp) !== qy && QO(Mp, qy, Lp), Zy[Lp] = Zy.Array;
}
var YO = qa, KO = Gh, ZO = Wn, qO = Ar, JO = $h, $y = Re([].push), fr = function(e) {
  var r = e == 1, i = e == 2, o = e == 3, a = e == 4, u = e == 6, c = e == 7, f = e == 5 || u;
  return function(h, m, v, y) {
    for (var b, E, A = ZO(h), S = KO(A), H = YO(m, v), D = qO(S), L = 0, V = y || JO, Q = r ? V(h, D) : i || c ? V(h, 0) : void 0; D > L; L++)
      if ((f || L in S) && (E = H(b = S[L], L, A), e))
        if (r)
          Q[L] = E;
        else if (E)
          switch (e) {
            case 3:
              return !0;
            case 5:
              return b;
            case 6:
              return L;
            case 2:
              $y(Q, b);
          }
        else
          switch (e) {
            case 4:
              return !1;
            case 7:
              $y(Q, b);
          }
    return u ? -1 : o || a ? a : Q;
  };
}, Nr = { forEach: fr(0), map: fr(1), filter: fr(2), some: fr(3), every: fr(4), find: fr(5), findIndex: fr(6), filterReject: fr(7) }, $O = Nr.forEach, eb = Ja("forEach") ? [].forEach : function(e) {
  return $O(this, e, arguments.length > 1 ? arguments[1] : void 0);
};
ce({ target: "Array", proto: !0, forced: [].forEach != eb }, { forEach: eb });
var eL = vt("Array").forEach, tL = bi, nL = gt, rL = nt, oL = eL, Ip = Array.prototype, iL = { DOMTokenList: !0, NodeList: !0 };
const zn = Ne(P8.exports = function(e) {
  var r = e.forEach;
  return e === Ip || rL(Ip, e) && r === Ip.forEach || nL(iL, tL(e)) ? oL : r;
});
var aL = { exports: {} }, lL = fm.includes;
ce({ target: "Array", proto: !0, forced: ze(function() {
  return !Array(1).includes();
}) }, { includes: function(e) {
  return lL(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
var sL = vt("Array").includes, uL = It, cL = Er, fL = We("match"), pL = function(e) {
  var r;
  return uL(e) && ((r = e[fL]) !== void 0 ? !!r : cL(e) == "RegExp");
}, dL = TypeError, hL = We("match"), mL = ce, gL = function(e) {
  if (pL(e))
    throw dL("The method doesn't accept regular expressions");
  return e;
}, vL = Qa, tb = Nn, yL = function(e) {
  var r = /./;
  try {
    "/./"[e](r);
  } catch {
    try {
      return r[hL] = !1, "/./"[e](r);
    } catch {
    }
  }
  return !1;
}, bL = Re("".indexOf);
mL({ target: "String", proto: !0, forced: !yL("includes") }, { includes: function(e) {
  return !!~bL(tb(vL(this)), tb(gL(e)), arguments.length > 1 ? arguments[1] : void 0);
} });
var wL = vt("String").includes, nb = nt, kL = sL, xL = wL, _p = Array.prototype, Rp = String.prototype;
const St = Ne(aL.exports = function(e) {
  var r = e.includes;
  return e === _p || nb(_p, e) && r === _p.includes ? kL : typeof e == "string" || e === Rp || nb(Rp, e) && r === Rp.includes ? xL : r;
});
var EL = { exports: {} }, SL = typeof Bun == "function" && Bun && typeof Bun.version == "string", CL = TypeError, ix = function(e, r) {
  if (e < r)
    throw CL("Not enough arguments");
  return e;
}, ax = Ze, TL = Tu, AL = et, NL = SL, PL = Cr, OL = nl, LL = ix, ML = ax.Function, IL = /MSIE .\./.test(PL) || NL && function() {
  var e = ax.Bun.version.split(".");
  return e.length < 3 || e[0] == 0 && (e[1] < 3 || e[1] == 3 && e[2] == 0);
}(), lx = function(e, r) {
  var i = r ? 2 : 1;
  return IL ? function(o, a) {
    var u = LL(arguments.length, 1) > i, c = AL(o) ? o : ML(o), f = u ? OL(arguments, i) : [], h = u ? function() {
      TL(c, this, f);
    } : c;
    return r ? e(h, a) : e(h);
  } : e;
}, _L = ce, sx = Ze, rb = lx(sx.setInterval, !0);
_L({ global: !0, bind: !0, forced: sx.setInterval !== rb }, { setInterval: rb });
var RL = ce, ux = Ze, ob = lx(ux.setTimeout, !0);
RL({ global: !0, bind: !0, forced: ux.setTimeout !== ob }, { setTimeout: ob });
const cx = Ne(EL.exports = _t.setTimeout);
var DL = { exports: {} }, jL = Xt, HL = wi, FL = TypeError, BL = Object.getOwnPropertyDescriptor, zL = jL && !function() {
  if (this !== void 0)
    return !0;
  try {
    Object.defineProperty([], "length", { writable: !1 }).length = 1;
  } catch (e) {
    return e instanceof TypeError;
  }
}(), UL = ce, GL = Wn, VL = Mu, WL = Lu, XL = Ar, QL = zL ? function(e, r) {
  if (HL(e) && !BL(e, "length").writable)
    throw FL("Cannot set read only .length");
  return e.length = r;
} : function(e, r) {
  return e.length = r;
}, YL = $2, KL = $h, ZL = Iu, Dp = Z2, qL = $a("splice"), JL = Math.max, $L = Math.min;
UL({ target: "Array", proto: !0, forced: !qL }, { splice: function(e, r) {
  var i, o, a, u, c, f, h = GL(this), m = XL(h), v = VL(e, m), y = arguments.length;
  for (y === 0 ? i = o = 0 : y === 1 ? (i = 0, o = m - v) : (i = y - 2, o = $L(JL(WL(r), 0), m - v)), YL(m + i - o), a = KL(h, o), u = 0; u < o; u++)
    (c = v + u) in h && ZL(a, u, h[c]);
  if (a.length = o, i < o) {
    for (u = v; u < m - o; u++)
      f = u + i, (c = u + o) in h ? h[f] = h[c] : Dp(h, f);
    for (u = m; u > m - o + i; u--)
      Dp(h, u - 1);
  } else if (i > o)
    for (u = m - o; u > v; u--)
      f = u + i - 1, (c = u + o - 1) in h ? h[f] = h[c] : Dp(h, f);
  for (u = 0; u < i; u++)
    h[u + v] = arguments[u + 2];
  return QL(h, m - o + i), a;
} });
var e9 = vt("Array").splice, t9 = nt, n9 = e9, jp = Array.prototype;
const mm = Ne(DL.exports = function(e) {
  var r = e.splice;
  return e === jp || t9(jp, e) && r === jp.splice ? n9 : r;
});
var r9 = { exports: {} }, fx = { exports: {} }, o9 = ce, i9 = Xt, ib = dn.f;
o9({ target: "Object", stat: !0, forced: Object.defineProperty !== ib, sham: !i9 }, { defineProperty: ib });
var px = _t.Object, a9 = fx.exports = function(e, r, i) {
  return px.defineProperty(e, r, i);
};
px.defineProperty.sham && (a9.sham = !0);
var l9 = fx.exports;
const dx = Ne(r9.exports = l9);
var s9 = { exports: {} }, Uu = {}, u9 = zk, c9 = pm.concat("length", "prototype");
Uu.f = Object.getOwnPropertyNames || function(e) {
  return u9(e, c9);
};
var hx = {}, f9 = Er, p9 = Sr, ab = Uu.f, d9 = q2, lb = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
hx.f = function(e) {
  return lb && f9(e) == "Window" ? function(r) {
    try {
      return ab(r);
    } catch {
      return d9(lb);
    }
  }(e) : ab(p9(e));
};
var h9 = dn, mx = function(e, r, i) {
  return h9.f(e, r, i);
}, il = {}, m9 = We;
il.f = m9;
var sb = _t, g9 = gt, v9 = il, y9 = dn.f, Ke = function(e) {
  var r = sb.Symbol || (sb.Symbol = {});
  g9(r, e) || y9(r, e, { value: v9.f(e) });
}, b9 = ft, w9 = Rt, k9 = We, x9 = ol, gx = function() {
  var e = w9("Symbol"), r = e && e.prototype, i = r && r.valueOf, o = k9("toPrimitive");
  r && !r[o] && x9(r, o, function(a) {
    return b9(i, this);
  }, { arity: 1 });
}, Rs = ce, gm = Ze, vm = ft, E9 = Re, ii = Xt, Uo = vi, S9 = ze, ut = gt, C9 = nt, lh = hn, Gu = Sr, ym = Ou, T9 = Nn, sh = oo, ja = rl, vx = Fu, A9 = Uu, yx = hx, N9 = tl, bx = Xa, wx = dn, P9 = dm, kx = Nu, ub = ol, O9 = mx, bm = io.exports, xx = Hu, cb = Xh, L9 = We, M9 = il, I9 = Ke, _9 = gx, R9 = Ei, Ex = zu, Vu = Nr.forEach, Ot = Bu("hidden"), du = "Symbol", Ha = "prototype", D9 = Ex.set, fb = Ex.getterFor(du), pn = Object[Ha], Zo = gm.Symbol, Zs = Zo && Zo[Ha], j9 = gm.TypeError, Hp = gm.QObject, Sx = bx.f, Kr = wx.f, Cx = yx.f, H9 = kx.f, Tx = E9([].push), Vn = bm("symbols"), al = bm("op-symbols"), F9 = bm("wks"), Fp = !Hp || !Hp[Ha] || !Hp[Ha].findChild, uh = ii && S9(function() {
  return ja(Kr({}, "a", { get: function() {
    return Kr(this, "a", { value: 7 }).a;
  } })).a != 7;
}) ? function(e, r, i) {
  var o = Sx(pn, r);
  o && delete pn[r], Kr(e, r, i), o && e !== pn && Kr(pn, r, o);
} : Kr, Bp = function(e, r) {
  var i = Vn[e] = ja(Zs);
  return D9(i, { type: du, tag: e, description: r }), ii || (i.description = r), i;
}, hu = function(e, r, i) {
  e === pn && hu(al, r, i), lh(e);
  var o = ym(r);
  return lh(i), ut(Vn, o) ? (i.enumerable ? (ut(e, Ot) && e[Ot][o] && (e[Ot][o] = !1), i = ja(i, { enumerable: sh(0, !1) })) : (ut(e, Ot) || Kr(e, Ot, sh(1, {})), e[Ot][o] = !0), uh(e, o, i)) : Kr(e, o, i);
}, zp = function(e, r) {
  lh(e);
  var i = Gu(r), o = vx(i).concat(Nx(i));
  return Vu(o, function(a) {
    ii && !vm(Ax, i, a) || hu(e, a, i[a]);
  }), e;
}, Ax = function(e) {
  var r = ym(e), i = vm(H9, this, r);
  return !(this === pn && ut(Vn, r) && !ut(al, r)) && (!(i || !ut(this, r) || !ut(Vn, r) || ut(this, Ot) && this[Ot][r]) || i);
}, pb = function(e, r) {
  var i = Gu(e), o = ym(r);
  if (i !== pn || !ut(Vn, o) || ut(al, o)) {
    var a = Sx(i, o);
    return !a || !ut(Vn, o) || ut(i, Ot) && i[Ot][o] || (a.enumerable = !0), a;
  }
}, db = function(e) {
  var r = Cx(Gu(e)), i = [];
  return Vu(r, function(o) {
    ut(Vn, o) || ut(xx, o) || Tx(i, o);
  }), i;
}, Nx = function(e) {
  var r = e === pn, i = Cx(r ? al : Gu(e)), o = [];
  return Vu(i, function(a) {
    !ut(Vn, a) || r && !ut(pn, a) || Tx(o, Vn[a]);
  }), o;
};
Uo || (ub(Zs = (Zo = function() {
  if (C9(Zs, this))
    throw j9("Symbol is not a constructor");
  var e = arguments.length && arguments[0] !== void 0 ? T9(arguments[0]) : void 0, r = cb(e), i = function(o) {
    this === pn && vm(i, al, o), ut(this, Ot) && ut(this[Ot], r) && (this[Ot][r] = !1), uh(this, r, sh(1, o));
  };
  return ii && Fp && uh(pn, r, { configurable: !0, set: i }), Bp(r, e);
})[Ha], "toString", function() {
  return fb(this).tag;
}), ub(Zo, "withoutSetter", function(e) {
  return Bp(cb(e), e);
}), kx.f = Ax, wx.f = hu, P9.f = zp, bx.f = pb, A9.f = yx.f = db, N9.f = Nx, M9.f = function(e) {
  return Bp(L9(e), e);
}, ii && O9(Zs, "description", { configurable: !0, get: function() {
  return fb(this).description;
} })), Rs({ global: !0, constructor: !0, wrap: !0, forced: !Uo, sham: !Uo }, { Symbol: Zo }), Vu(vx(F9), function(e) {
  I9(e);
}), Rs({ target: du, stat: !0, forced: !Uo }, { useSetter: function() {
  Fp = !0;
}, useSimple: function() {
  Fp = !1;
} }), Rs({ target: "Object", stat: !0, forced: !Uo, sham: !ii }, { create: function(e, r) {
  return r === void 0 ? ja(e) : zp(ja(e), r);
}, defineProperty: hu, defineProperties: zp, getOwnPropertyDescriptor: pb }), Rs({ target: "Object", stat: !0, forced: !Uo }, { getOwnPropertyNames: db }), _9(), R9(Zo, du), xx[Ot] = !0;
var Px = vi && !!Symbol.for && !!Symbol.keyFor, B9 = ce, z9 = Rt, U9 = gt, G9 = Nn, Ox = io.exports, V9 = Px, Up = Ox("string-to-symbol-registry"), W9 = Ox("symbol-to-string-registry");
B9({ target: "Symbol", stat: !0, forced: !V9 }, { for: function(e) {
  var r = G9(e);
  if (U9(Up, r))
    return Up[r];
  var i = z9("Symbol")(r);
  return Up[r] = i, W9[i] = r, i;
} });
var X9 = ce, Q9 = gt, Y9 = Ka, K9 = yi, Z9 = Px, hb = (0, io.exports)("symbol-to-string-registry");
X9({ target: "Symbol", stat: !0, forced: !Z9 }, { keyFor: function(e) {
  if (!Y9(e))
    throw TypeError(K9(e) + " is not a symbol");
  if (Q9(hb, e))
    return hb[e];
} });
var mb = wi, q9 = et, gb = Er, J9 = Nn, vb = Re([].push), $9 = ce, Lx = Rt, Mx = Tu, e7 = ft, ll = Re, Ix = ze, yb = et, bb = Ka, _x = nl, t7 = function(e) {
  if (q9(e))
    return e;
  if (mb(e)) {
    for (var r = e.length, i = [], o = 0; o < r; o++) {
      var a = e[o];
      typeof a == "string" ? vb(i, a) : typeof a != "number" && gb(a) != "Number" && gb(a) != "String" || vb(i, J9(a));
    }
    var u = i.length, c = !0;
    return function(f, h) {
      if (c)
        return c = !1, h;
      if (mb(this))
        return h;
      for (var m = 0; m < u; m++)
        if (i[m] === f)
          return h;
    };
  }
}, n7 = vi, r7 = String, yr = Lx("JSON", "stringify"), Ds = ll(/./.exec), wb = ll("".charAt), o7 = ll("".charCodeAt), i7 = ll("".replace), a7 = ll(1 .toString), l7 = /[\uD800-\uDFFF]/g, kb = /^[\uD800-\uDBFF]$/, xb = /^[\uDC00-\uDFFF]$/, Eb = !n7 || Ix(function() {
  var e = Lx("Symbol")();
  return yr([e]) != "[null]" || yr({ a: e }) != "{}" || yr(Object(e)) != "{}";
}), Sb = Ix(function() {
  return yr("\uDF06\uD834") !== '"\\udf06\\ud834"' || yr("\uDEAD") !== '"\\udead"';
}), s7 = function(e, r) {
  var i = _x(arguments), o = t7(r);
  if (yb(o) || e !== void 0 && !bb(e))
    return i[1] = function(a, u) {
      if (yb(o) && (u = e7(o, this, r7(a), u)), !bb(u))
        return u;
    }, Mx(yr, null, i);
}, u7 = function(e, r, i) {
  var o = wb(i, r - 1), a = wb(i, r + 1);
  return Ds(kb, e) && !Ds(xb, a) || Ds(xb, e) && !Ds(kb, o) ? "\\u" + a7(o7(e, 0), 16) : e;
};
yr && $9({ target: "JSON", stat: !0, arity: 3, forced: Eb || Sb }, { stringify: function(e, r, i) {
  var o = _x(arguments), a = Mx(Eb ? s7 : yr, null, o);
  return Sb && typeof a == "string" ? i7(a, l7, u7) : a;
} });
var Cb = tl, c7 = Wn;
ce({ target: "Object", stat: !0, forced: !vi || ze(function() {
  Cb.f(1);
}) }, { getOwnPropertySymbols: function(e) {
  var r = Cb.f;
  return r ? r(c7(e)) : [];
} }), Ke("asyncIterator"), Ke("hasInstance"), Ke("isConcatSpreadable"), Ke("iterator"), Ke("match"), Ke("matchAll"), Ke("replace"), Ke("search"), Ke("species"), Ke("split");
var f7 = gx;
Ke("toPrimitive"), f7();
var p7 = Rt, d7 = Ei;
Ke("toStringTag"), d7(p7("Symbol"), "Symbol"), Ke("unscopables"), Ei(Ze.JSON, "JSON", !0);
var h7 = _t.Symbol;
Ke("dispose");
var m7 = h7;
Ke("asyncDispose");
var g7 = ce, v7 = Re, Rx = Rt("Symbol"), y7 = Rx.keyFor, b7 = v7(Rx.prototype.valueOf);
g7({ target: "Symbol", stat: !0 }, { isRegistered: function(e) {
  try {
    return y7(b7(e)) !== void 0;
  } catch {
    return !1;
  }
} });
for (var w7 = ce, k7 = io.exports, Tb = Rt, x7 = Re, E7 = Ka, S7 = We, js = Tb("Symbol"), Ab = js.isWellKnown, Dx = Tb("Object", "getOwnPropertyNames"), C7 = x7(js.prototype.valueOf), Nb = k7("wks"), Gp = 0, Pb = Dx(js), T7 = Pb.length; Gp < T7; Gp++)
  try {
    var Ob = Pb[Gp];
    E7(js[Ob]) && S7(Ob);
  } catch {
  }
w7({ target: "Symbol", stat: !0, forced: !0 }, { isWellKnown: function(e) {
  if (Ab && Ab(e))
    return !0;
  try {
    for (var r = C7(e), i = 0, o = Dx(Nb), a = o.length; i < a; i++)
      if (Nb[o[i]] == r)
        return !0;
  } catch {
  }
  return !1;
} }), Ke("matcher"), Ke("metadataKey"), Ke("observable"), Ke("metadata"), Ke("patternMatch"), Ke("replaceAll");
const Hs = Ne(s9.exports = m7);
var A7 = { exports: {} }, wm = Re, N7 = Lu, P7 = Nn, O7 = Qa, L7 = wm("".charAt), Lb = wm("".charCodeAt), M7 = wm("".slice), Mb = function(e) {
  return function(r, i) {
    var o, a, u = P7(O7(r)), c = N7(i), f = u.length;
    return c < 0 || c >= f ? e ? "" : void 0 : (o = Lb(u, c)) < 55296 || o > 56319 || c + 1 === f || (a = Lb(u, c + 1)) < 56320 || a > 57343 ? e ? L7(u, c) : o : e ? M7(u, c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536;
  };
}, I7 = { codeAt: Mb(!1), charAt: Mb(!0) }.charAt, _7 = Nn, jx = zu, R7 = tx, Ib = nx, Hx = "String Iterator", D7 = jx.set, j7 = jx.getterFor(Hx);
R7(String, "String", function(e) {
  D7(this, { type: Hx, string: _7(e), index: 0 });
}, function() {
  var e, r = j7(this), i = r.string, o = r.index;
  return o >= i.length ? Ib(void 0, !0) : (e = I7(i, o), r.index += e.length, Ib(e, !1));
});
var H7 = il.f("iterator");
const F7 = Ne(A7.exports = H7);
function Sa(e) {
  return Sa = typeof Hs == "function" && typeof F7 == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Hs == "function" && r.constructor === Hs && r !== Hs.prototype ? "symbol" : typeof r;
  }, Sa(e);
}
var B7 = { exports: {} }, z7 = il.f("toPrimitive");
const U7 = Ne(B7.exports = z7);
function G7(e) {
  var r = function(i, o) {
    if (Sa(i) !== "object" || i === null)
      return i;
    var a = i[U7];
    if (a !== void 0) {
      var u = a.call(i, o || "default");
      if (Sa(u) !== "object")
        return u;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (o === "string" ? String : Number)(i);
  }(e, "string");
  return Sa(r) === "symbol" ? r : String(r);
}
var V7 = { exports: {} }, W7 = ce, X7 = fm.indexOf, Q7 = Ja, ch = su([].indexOf), _b = !!ch && 1 / ch([1], 1, -0) < 0;
W7({ target: "Array", proto: !0, forced: _b || !Q7("indexOf") }, { indexOf: function(e) {
  var r = arguments.length > 1 ? arguments[1] : void 0;
  return _b ? ch(this, e, r) || 0 : X7(this, e, r);
} });
var Y7 = vt("Array").indexOf, K7 = nt, Z7 = Y7, Vp = Array.prototype, Fx = function(e) {
  var r = e.indexOf;
  return e === Vp || K7(Vp, e) && r === Vp.indexOf ? Z7 : r;
};
const Bx = Ne(V7.exports = Fx);
function mu(e, r) {
  return e ? e.classList ? e.classList.contains(r) : !!e.className.match(new RegExp("(\\s|^)" + r + "(\\s|$)")) : (console.warn("param `elem` hasClass(elem, className) should be an element"), !1);
}
function fh(e, r) {
  if (!e)
    return !1;
  for (; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
function Ca() {
  for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
    r[i] = arguments[i];
  return r;
}
var q7 = { exports: {} }, J7 = ce, Rb = wi, $7 = Jh, eM = It, Db = Mu, tM = Ar, nM = Sr, rM = Iu, oM = We, iM = nl, aM = $a("slice"), lM = oM("species"), Wp = Array, sM = Math.max;
J7({ target: "Array", proto: !0, forced: !aM }, { slice: function(e, r) {
  var i, o, a, u = nM(this), c = tM(u), f = Db(e, c), h = Db(r === void 0 ? c : r, c);
  if (Rb(u) && (i = u.constructor, ($7(i) && (i === Wp || Rb(i.prototype)) || eM(i) && (i = i[lM]) === null) && (i = void 0), i === Wp || i === void 0))
    return iM(u, f, h);
  for (o = new (i === void 0 ? Wp : i)(sM(h - f, 0)), a = 0; f < h; f++, a++)
    f in u && rM(o, a, u[f]);
  return o.length = a, o;
} });
var uM = vt("Array").slice, cM = nt, fM = uM, Xp = Array.prototype;
const Fa = Ne(q7.exports = function(e) {
  var r = e.slice;
  return e === Xp || cM(Xp, e) && r === Xp.slice ? fM : r;
});
var pM = { exports: {} };
ce({ target: "Array", stat: !0 }, { isArray: wi });
var dM = _t.Array.isArray;
const hM = Ne(pM.exports = dM);
var mM = { exports: {} }, gM = Rt, vM = Uu, yM = tl, bM = hn, wM = Re([].concat), kM = gM("Reflect", "ownKeys") || function(e) {
  var r = vM.f(bM(e)), i = yM.f;
  return i ? wM(r, i(e)) : r;
}, jb = gt, xM = kM, EM = Xa, SM = dn, CM = It, TM = Tr, zx = Error, AM = Re("".replace), NM = String(zx("zxcasd").stack), Ux = /\n\s*at [^:]*:[^\n]*/, PM = Ux.test(NM), OM = oo, LM = !ze(function() {
  var e = Error("a");
  return !("stack" in e) || (Object.defineProperty(e, "stack", OM(1, 7)), e.stack !== 7);
}), MM = Tr, IM = function(e, r) {
  if (PM && typeof e == "string" && !zx.prepareStackTrace)
    for (; r--; )
      e = AM(e, Ux, "");
  return e;
}, _M = LM, Hb = Error.captureStackTrace, RM = xi, DM = We("iterator"), jM = Array.prototype, HM = bi, Fb = Vh, FM = Pu, BM = xi, zM = We("iterator"), Gx = function(e) {
  if (!FM(e))
    return Fb(e, zM) || Fb(e, "@@iterator") || BM[HM(e)];
}, UM = ft, GM = an, VM = hn, WM = yi, XM = Gx, QM = TypeError, YM = ft, Bb = hn, KM = Vh, ZM = qa, qM = ft, JM = hn, $M = yi, eI = function(e) {
  return e !== void 0 && (RM.Array === e || jM[DM] === e);
}, tI = Ar, zb = nt, nI = function(e, r) {
  var i = arguments.length < 2 ? XM(e) : r;
  if (GM(i))
    return VM(UM(i, e));
  throw QM(WM(e) + " is not iterable");
}, rI = Gx, Ub = function(e, r, i) {
  var o, a;
  Bb(e);
  try {
    if (!(o = KM(e, "return"))) {
      if (r === "throw")
        throw i;
      return i;
    }
    o = YM(o, e);
  } catch (u) {
    a = !0, o = u;
  }
  if (r === "throw")
    throw i;
  if (a)
    throw o;
  return Bb(o), i;
}, oI = TypeError, qs = function(e, r) {
  this.stopped = e, this.result = r;
}, Gb = qs.prototype, sl = function(e, r, i) {
  var o, a, u, c, f, h, m, v = i && i.that, y = !(!i || !i.AS_ENTRIES), b = !(!i || !i.IS_RECORD), E = !(!i || !i.IS_ITERATOR), A = !(!i || !i.INTERRUPTED), S = ZM(r, v), H = function(L) {
    return o && Ub(o, "normal", L), new qs(!0, L);
  }, D = function(L) {
    return y ? (JM(L), A ? S(L[0], L[1], H) : S(L[0], L[1])) : A ? S(L, H) : S(L);
  };
  if (b)
    o = e.iterator;
  else if (E)
    o = e;
  else {
    if (!(a = rI(e)))
      throw oI($M(e) + " is not iterable");
    if (eI(a)) {
      for (u = 0, c = tI(e); c > u; u++)
        if ((f = D(e[u])) && zb(Gb, f))
          return f;
      return new qs(!1);
    }
    o = nI(e, a);
  }
  for (h = b ? e.next : o.next; !(m = qM(h, o)).done; ) {
    try {
      f = D(m.value);
    } catch (L) {
      Ub(o, "throw", L);
    }
    if (typeof f == "object" && f && zb(Gb, f))
      return f;
  }
  return new qs(!1);
}, iI = Nn, aI = ce, lI = nt, sI = hm, gu = ex, uI = function(e, r, i) {
  for (var o = xM(r), a = SM.f, u = EM.f, c = 0; c < o.length; c++) {
    var f = o[c];
    jb(e, f) || i && jb(i, f) || a(e, f, u(r, f));
  }
}, Vx = rl, Qp = Tr, Yp = oo, cI = function(e, r) {
  CM(r) && "cause" in r && TM(e, "cause", r.cause);
}, fI = function(e, r, i, o) {
  _M && (Hb ? Hb(e, r) : MM(e, "stack", IM(i, o)));
}, pI = sl, dI = function(e, r) {
  return e === void 0 ? arguments.length < 2 ? "" : r : iI(e);
}, hI = We("toStringTag"), vu = Error, mI = [].push, di = function(e, r) {
  var i, o = lI(Kp, this);
  gu ? i = gu(vu(), o ? sI(this) : Kp) : (i = o ? this : Vx(Kp), Qp(i, hI, "Error")), r !== void 0 && Qp(i, "message", dI(r)), fI(i, di, i.stack, 1), arguments.length > 2 && cI(i, arguments[2]);
  var a = [];
  return pI(e, mI, { that: a }), Qp(i, "errors", a), i;
};
gu ? gu(di, vu) : uI(di, vu, { name: !0 });
var Kp = di.prototype = Vx(vu.prototype, { constructor: Yp(1, di), message: Yp(1, ""), name: Yp(1, "AggregateError") });
aI({ global: !0, constructor: !0, arity: 2 }, { AggregateError: di });
var Ba, Go, Vb, Zp, Wu = typeof process < "u" && Er(process) == "process", gI = Rt, vI = mx, yI = Xt, Wb = We("species"), bI = nt, wI = TypeError, kI = Jh, xI = yi, EI = TypeError, Xb = hn, SI = function(e) {
  if (kI(e))
    return e;
  throw EI(xI(e) + " is not a constructor");
}, CI = Pu, TI = We("species"), Wx = function(e, r) {
  var i, o = Xb(e).constructor;
  return o === void 0 || CI(i = Xb(o)[TI]) ? r : SI(i);
}, Xx = /(?:ipad|iphone|ipod).*applewebkit/i.test(Cr), Vt = Ze, AI = Tu, NI = qa, Qb = et, PI = gt, Qx = ze, Yb = Kk, OI = nl, Kb = Qh, LI = ix, MI = Xx, II = Wu, ph = Vt.setImmediate, dh = Vt.clearImmediate, _I = Vt.process, qp = Vt.Dispatch, RI = Vt.Function, Zb = Vt.MessageChannel, DI = Vt.String, Jp = 0, Ta = {}, qb = "onreadystatechange";
Qx(function() {
  Ba = Vt.location;
});
var km = function(e) {
  if (PI(Ta, e)) {
    var r = Ta[e];
    delete Ta[e], r();
  }
}, $p = function(e) {
  return function() {
    km(e);
  };
}, Jb = function(e) {
  km(e.data);
}, $b = function(e) {
  Vt.postMessage(DI(e), Ba.protocol + "//" + Ba.host);
};
ph && dh || (ph = function(e) {
  LI(arguments.length, 1);
  var r = Qb(e) ? e : RI(e), i = OI(arguments, 1);
  return Ta[++Jp] = function() {
    AI(r, void 0, i);
  }, Go(Jp), Jp;
}, dh = function(e) {
  delete Ta[e];
}, II ? Go = function(e) {
  _I.nextTick($p(e));
} : qp && qp.now ? Go = function(e) {
  qp.now($p(e));
} : Zb && !MI ? (Zp = (Vb = new Zb()).port2, Vb.port1.onmessage = Jb, Go = NI(Zp.postMessage, Zp)) : Vt.addEventListener && Qb(Vt.postMessage) && !Vt.importScripts && Ba && Ba.protocol !== "file:" && !Qx($b) ? (Go = $b, Vt.addEventListener("message", Jb, !1)) : Go = qb in Kb("script") ? function(e) {
  Yb.appendChild(Kb("script"))[qb] = function() {
    Yb.removeChild(this), km(e);
  };
} : function(e) {
  setTimeout($p(e), 0);
});
var Yx = { set: ph, clear: dh }, Kx = function() {
  this.head = null, this.tail = null;
};
Kx.prototype = { add: function(e) {
  var r = { item: e, next: null }, i = this.tail;
  i ? i.next = r : this.head = r, this.tail = r;
}, get: function() {
  var e = this.head;
  if (e)
    return (this.head = e.next) === null && (this.tail = null), e.item;
} };
var Vo, ed, td, nd, ew, Zx = Kx, jI = /ipad|iphone|ipod/i.test(Cr) && typeof Pebble < "u", HI = /web0s(?!.*chrome)/i.test(Cr), eo = Ze, tw = qa, FI = Xa.f, rd = Yx.set, BI = Zx, zI = Xx, UI = jI, GI = HI, od = Wu, nw = eo.MutationObserver || eo.WebKitMutationObserver, rw = eo.document, ow = eo.process, Fs = eo.Promise, iw = FI(eo, "queueMicrotask"), hh = iw && iw.value;
if (!hh) {
  var Bs = new BI(), zs = function() {
    var e, r;
    for (od && (e = ow.domain) && e.exit(); r = Bs.get(); )
      try {
        r();
      } catch (i) {
        throw Bs.head && Vo(), i;
      }
    e && e.enter();
  };
  zI || od || GI || !nw || !rw ? !UI && Fs && Fs.resolve ? ((nd = Fs.resolve(void 0)).constructor = Fs, ew = tw(nd.then, nd), Vo = function() {
    ew(zs);
  }) : od ? Vo = function() {
    ow.nextTick(zs);
  } : (rd = tw(rd, eo), Vo = function() {
    rd(zs);
  }) : (ed = !0, td = rw.createTextNode(""), new nw(zs).observe(td, { characterData: !0 }), Vo = function() {
    td.data = ed = !ed;
  }), hh = function(e) {
    Bs.head || Vo(), Bs.add(e);
  };
}
var VI = hh, ul = function(e) {
  try {
    return { error: !1, value: e() };
  } catch (r) {
    return { error: !0, value: r };
  }
}, to = Ze.Promise, qx = typeof Deno == "object" && Deno && typeof Deno.version == "object", WI = !qx && !Wu && typeof window == "object" && typeof document == "object", XI = Ze, Aa = to, QI = et, YI = V2, KI = ek, ZI = We, qI = WI, JI = qx, id = Ya, aw = Aa && Aa.prototype, $I = ZI("species"), Jx = !1, $x = QI(XI.PromiseRejectionEvent), e_ = YI("Promise", function() {
  var e = KI(Aa), r = e !== String(Aa);
  if (!r && id === 66 || !aw.catch || !aw.finally)
    return !0;
  if (!id || id < 51 || !/native code/.test(e)) {
    var i = new Aa(function(a) {
      a(1);
    }), o = function(a) {
      a(function() {
      }, function() {
      });
    };
    if ((i.constructor = {})[$I] = o, !(Jx = i.then(function() {
    }) instanceof o))
      return !0;
  }
  return !r && (qI || JI) && !$x;
}), cl = { CONSTRUCTOR: e_, REJECTION_EVENT: $x, SUBCLASSING: Jx }, Pr = {}, lw = an, t_ = TypeError, n_ = function(e) {
  var r, i;
  this.promise = new e(function(o, a) {
    if (r !== void 0 || i !== void 0)
      throw t_("Bad Promise constructor");
    r = o, i = a;
  }), this.resolve = lw(r), this.reject = lw(i);
};
Pr.f = function(e) {
  return new n_(e);
};
var ad, sw, r_ = ce, yu = Wu, br = Ze, fl = ft, o_ = ol, i_ = Ei, a_ = function(e) {
  var r = gI(e);
  yI && r && !r[Wb] && vI(r, Wb, { configurable: !0, get: function() {
    return this;
  } });
}, l_ = an, mh = et, s_ = It, u_ = function(e, r) {
  if (bI(r, e))
    return e;
  throw wI("Incorrect invocation");
}, c_ = Wx, eE = Yx.set, xm = VI, f_ = function(e, r) {
  try {
    arguments.length == 1 ? console.error(e) : console.error(e, r);
  } catch {
  }
}, p_ = ul, d_ = Zx, tE = zu, gh = to, nE = cl, rE = Pr, Js = "Promise", uw = nE.CONSTRUCTOR, h_ = nE.REJECTION_EVENT, ld = tE.getterFor(Js), m_ = tE.set, g_ = gh && gh.prototype, Wo = gh, sd = g_, oE = br.TypeError, vh = br.document, Em = br.process, yh = rE.f, v_ = yh, y_ = !!(vh && vh.createEvent && br.dispatchEvent), iE = "unhandledrejection", aE = function(e) {
  var r;
  return !(!s_(e) || !mh(r = e.then)) && r;
}, lE = function(e, r) {
  var i, o, a, u = r.value, c = r.state == 1, f = c ? e.ok : e.fail, h = e.resolve, m = e.reject, v = e.domain;
  try {
    f ? (c || (r.rejection === 2 && w_(r), r.rejection = 1), f === !0 ? i = u : (v && v.enter(), i = f(u), v && (v.exit(), a = !0)), i === e.promise ? m(oE("Promise-chain cycle")) : (o = aE(i)) ? fl(o, i, h, m) : h(i)) : m(u);
  } catch (y) {
    v && !a && v.exit(), m(y);
  }
}, sE = function(e, r) {
  e.notified || (e.notified = !0, xm(function() {
    for (var i, o = e.reactions; i = o.get(); )
      lE(i, e);
    e.notified = !1, r && !e.rejection && b_(e);
  }));
}, uE = function(e, r, i) {
  var o, a;
  y_ ? ((o = vh.createEvent("Event")).promise = r, o.reason = i, o.initEvent(e, !1, !0), br.dispatchEvent(o)) : o = { promise: r, reason: i }, !h_ && (a = br["on" + e]) ? a(o) : e === iE && f_("Unhandled promise rejection", i);
}, b_ = function(e) {
  fl(eE, br, function() {
    var r, i = e.facade, o = e.value;
    if (cw(e) && (r = p_(function() {
      yu ? Em.emit("unhandledRejection", o, i) : uE(iE, i, o);
    }), e.rejection = yu || cw(e) ? 2 : 1, r.error))
      throw r.value;
  });
}, cw = function(e) {
  return e.rejection !== 1 && !e.parent;
}, w_ = function(e) {
  fl(eE, br, function() {
    var r = e.facade;
    yu ? Em.emit("rejectionHandled", r) : uE("rejectionhandled", r, e.value);
  });
}, qo = function(e, r, i) {
  return function(o) {
    e(r, o, i);
  };
}, ai = function(e, r, i) {
  e.done || (e.done = !0, i && (e = i), e.value = r, e.state = 2, sE(e, !0));
}, bh = function(e, r, i) {
  if (!e.done) {
    e.done = !0, i && (e = i);
    try {
      if (e.facade === r)
        throw oE("Promise can't be resolved itself");
      var o = aE(r);
      o ? xm(function() {
        var a = { done: !1 };
        try {
          fl(o, r, qo(bh, a, e), qo(ai, a, e));
        } catch (u) {
          ai(a, u, e);
        }
      }) : (e.value = r, e.state = 1, sE(e, !1));
    } catch (a) {
      ai({ done: !1 }, a, e);
    }
  }
};
uw && (Wo = function(e) {
  u_(this, sd), l_(e), fl(ad, this);
  var r = ld(this);
  try {
    e(qo(bh, r), qo(ai, r));
  } catch (i) {
    ai(r, i);
  }
}, sd = Wo.prototype, (ad = function(e) {
  m_(this, { type: Js, done: !1, notified: !1, parent: !1, reactions: new d_(), rejection: !1, state: 0, value: void 0 });
}).prototype = o_(sd, "then", function(e, r) {
  var i = ld(this), o = yh(c_(this, Wo));
  return i.parent = !0, o.ok = !mh(e) || e, o.fail = mh(r) && r, o.domain = yu ? Em.domain : void 0, i.state == 0 ? i.reactions.add(o) : xm(function() {
    lE(o, i);
  }), o.promise;
}), sw = function() {
  var e = new ad(), r = ld(e);
  this.promise = e, this.resolve = qo(bh, r), this.reject = qo(ai, r);
}, rE.f = yh = function(e) {
  return e === Wo || e === void 0 ? new sw(e) : v_(e);
}), r_({ global: !0, constructor: !0, wrap: !0, forced: uw }, { Promise: Wo }), i_(Wo, Js, !1, !0), a_(Js);
var cE = We("iterator"), fE = !1;
try {
  var k_ = 0, fw = { next: function() {
    return { done: !!k_++ };
  }, return: function() {
    fE = !0;
  } };
  fw[cE] = function() {
    return this;
  }, Array.from(fw, function() {
    throw 2;
  });
} catch {
}
var x_ = to, E_ = function(e, r) {
  if (!r && !fE)
    return !1;
  var i = !1;
  try {
    var o = {};
    o[cE] = function() {
      return { next: function() {
        return { done: i = !0 };
      } };
    }, e(o);
  } catch {
  }
  return i;
}, Xu = cl.CONSTRUCTOR || !E_(function(e) {
  x_.all(e).then(void 0, function() {
  });
}), S_ = ft, C_ = an, T_ = Pr, A_ = ul, N_ = sl;
ce({ target: "Promise", stat: !0, forced: Xu }, { all: function(e) {
  var r = this, i = T_.f(r), o = i.resolve, a = i.reject, u = A_(function() {
    var c = C_(r.resolve), f = [], h = 0, m = 1;
    N_(e, function(v) {
      var y = h++, b = !1;
      m++, S_(c, r, v).then(function(E) {
        b || (b = !0, f[y] = E, --m || o(f));
      }, a);
    }), --m || o(f);
  });
  return u.error && a(u.value), i.promise;
} });
var P_ = ce, O_ = cl.CONSTRUCTOR;
to && to.prototype, P_({ target: "Promise", proto: !0, forced: O_, real: !0 }, { catch: function(e) {
  return this.then(void 0, e);
} });
var L_ = ft, M_ = an, I_ = Pr, __ = ul, R_ = sl;
ce({ target: "Promise", stat: !0, forced: Xu }, { race: function(e) {
  var r = this, i = I_.f(r), o = i.reject, a = __(function() {
    var u = M_(r.resolve);
    R_(e, function(c) {
      L_(u, r, c).then(i.resolve, o);
    });
  });
  return a.error && o(a.value), i.promise;
} });
var D_ = ft, j_ = Pr;
ce({ target: "Promise", stat: !0, forced: cl.CONSTRUCTOR }, { reject: function(e) {
  var r = j_.f(this);
  return D_(r.reject, void 0, e), r.promise;
} });
var H_ = hn, F_ = It, B_ = Pr, pE = function(e, r) {
  if (H_(e), F_(r) && r.constructor === e)
    return r;
  var i = B_.f(e);
  return (0, i.resolve)(r), i.promise;
}, z_ = ce, U_ = to, G_ = cl.CONSTRUCTOR, V_ = pE, W_ = Rt("Promise"), X_ = !G_;
z_({ target: "Promise", stat: !0, forced: !0 }, { resolve: function(e) {
  return V_(X_ && this === W_ ? U_ : this, e);
} });
var Q_ = ft, Y_ = an, K_ = Pr, Z_ = ul, q_ = sl;
ce({ target: "Promise", stat: !0, forced: Xu }, { allSettled: function(e) {
  var r = this, i = K_.f(r), o = i.resolve, a = i.reject, u = Z_(function() {
    var c = Y_(r.resolve), f = [], h = 0, m = 1;
    q_(e, function(v) {
      var y = h++, b = !1;
      m++, Q_(c, r, v).then(function(E) {
        b || (b = !0, f[y] = { status: "fulfilled", value: E }, --m || o(f));
      }, function(E) {
        b || (b = !0, f[y] = { status: "rejected", reason: E }, --m || o(f));
      });
    }), --m || o(f);
  });
  return u.error && a(u.value), i.promise;
} });
var J_ = ft, $_ = an, eR = Rt, tR = Pr, nR = ul, rR = sl, pw = "No one promise resolved";
ce({ target: "Promise", stat: !0, forced: Xu }, { any: function(e) {
  var r = this, i = eR("AggregateError"), o = tR.f(r), a = o.resolve, u = o.reject, c = nR(function() {
    var f = $_(r.resolve), h = [], m = 0, v = 1, y = !1;
    rR(e, function(b) {
      var E = m++, A = !1;
      v++, J_(f, r, b).then(function(S) {
        A || y || (y = !0, a(S));
      }, function(S) {
        A || y || (A = !0, h[E] = S, --v || u(new i(h, pw)));
      });
    }), --v || u(new i(h, pw));
  });
  return c.error && u(c.value), o.promise;
} });
var oR = ce, wh = to, iR = ze, aR = Rt, lR = et, sR = Wx, dw = pE, uR = wh && wh.prototype;
oR({ target: "Promise", proto: !0, real: !0, forced: !!wh && iR(function() {
  uR.finally.call({ then: function() {
  } }, function() {
  });
}) }, { finally: function(e) {
  var r = sR(this, aR("Promise")), i = lR(e);
  return this.then(i ? function(o) {
    return dw(r, e()).then(function() {
      return o;
    });
  } : e, i ? function(o) {
    return dw(r, e()).then(function() {
      throw o;
    });
  } : e);
} });
const dE = Ne(mM.exports = _t.Promise);
function hE(e, r) {
  var i, o;
  function a() {
    i && (clearTimeout(i), i = 0);
  }
  function u() {
    a();
    for (var f = arguments.length, h = new Array(f), m = 0; m < f; m++)
      h[m] = arguments[m];
    if (!o)
      return e.apply(void 0, h);
    i = EP(e, o, h);
  }
  function c(f) {
    o = !f || f < 0 ? 0 : f;
  }
  return c(r), u.clear = a, u.getId = function() {
    return i;
  }, u.updateDelayTime = c, u;
}
function Se(e) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    i[o - 1] = arguments[o];
  if (e && typeof e == "function")
    return e.apply(void 0, i);
}
function hw(e, r, i) {
  var o, a = i === void 0 ? {} : i, u = a.multiple, c = u === void 0 || u, f = a.onSelect, h = a.onDeselect, m = Bx(r).call(r, e), v = Fa(r).call(r);
  return m > -1 ? (mm(v).call(v, m, 1), o = h, Se(h, e, v, r)) : (o = f, c ? v.push(e) : v = [e]), Se(o, e, v, r), v;
}
function On(e, r) {
  return OP(e, r);
}
function Un(e, r) {
  return IP(e, r);
}
function mE(e) {
  e === void 0 && (e = "");
  var r = ("" + Math.random()).replace("0.", "");
  return e + Gd(r, 10).toString(26);
}
function gE() {
  return /windows/i.test(window.navigator.userAgent);
}
function vE() {
  return /mac/i.test(window.navigator.userAgent);
}
var cR = { exports: {} }, fR = ce, pR = Nr.find, mw = "find", gw = !0;
mw in [] && Array(1)[mw](function() {
  gw = !1;
}), fR({ target: "Array", proto: !0, forced: gw }, { find: function(e) {
  return pR(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
var dR = vt("Array").find, hR = nt, mR = dR, ud = Array.prototype;
const Na = Ne(cR.exports = function(e) {
  var r = e.find;
  return e === ud || hR(ud, e) && r === ud.find ? mR : r;
});
var gR = { exports: {} }, vR = Nr.filter;
ce({ target: "Array", proto: !0, forced: !$a("filter") }, { filter: function(e) {
  return vR(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
var yR = vt("Array").filter, bR = nt, wR = yR, cd = Array.prototype;
const pl = Ne(gR.exports = function(e) {
  var r = e.filter;
  return e === cd || bR(cd, e) && r === cd.filter ? wR : r;
});
function $s(e, r) {
  var i, o;
  e && (typeof e == "function" ? e(r) : (i = e, o = "current", Object.prototype.hasOwnProperty.call(i, o) && (e.current = r)));
}
function Si(e, r) {
  var i = {};
  return zn(r).call(r, function(o) {
    oe(e[o]) || (i[o] = e[o]);
  }), Qk(i).length ? i : null;
}
function dr(e, r) {
  return function(i, o, a, u, c) {
    return oe(i[o]) ? null : new Error("[" + a + "] prop `" + o + "` has been deprecated since " + e + ". " + r);
  };
}
function Jo(e, r) {
  return oe(r) ? e : r;
}
var kR = { exports: {} }, xR = Nr.map;
ce({ target: "Array", proto: !0, forced: !$a("map") }, { map: function(e) {
  return xR(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
var ER = vt("Array").map, SR = nt, CR = ER, fd = Array.prototype;
const za = Ne(kR.exports = function(e) {
  var r = e.map;
  return e === fd || SR(fd, e) && r === fd.map ? CR : r;
});
var TR = { exports: {} };
ce({ target: "Object", stat: !0, sham: !Xt }, { create: rl });
var AR = _t.Object;
const NR = Ne(TR.exports = function(e, r) {
  return AR.create(e, r);
});
var PR = { exports: {} };
ce({ target: "Object", stat: !0 }, { setPrototypeOf: ex });
var OR = _t.Object.setPrototypeOf;
const vw = Ne(PR.exports = OR);
function kh(e, r) {
  var i;
  return kh = vw ? Vk(i = vw).call(i) : function(o, a) {
    return o.__proto__ = a, o;
  }, kh(e, r);
}
function qe(e, r) {
  e.prototype = NR(r.prototype), e.prototype.constructor = e, kh(e, r);
}
var LR = { exports: {} }, MR = Nr.some;
ce({ target: "Array", proto: !0, forced: !Ja("some") }, { some: function(e) {
  return MR(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
var IR = vt("Array").some, _R = nt, RR = IR, pd = Array.prototype;
const Qu = Ne(LR.exports = function(e) {
  var r = e.some;
  return e === pd || _R(pd, e) && r === pd.some ? RR : r;
});
var yw, bw, ww, kw, _ = { exports: {} };
_.exports = function() {
  if (kw)
    return ww;
  kw = 1;
  var e = bw ? yw : (bw = 1, yw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
  function r() {
  }
  function i() {
  }
  return i.resetWarningCache = r, ww = function() {
    function o(c, f, h, m, v, y) {
      if (y !== e) {
        var b = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw b.name = "Invariant Violation", b;
      }
    }
    function a() {
      return o;
    }
    o.isRequired = o;
    var u = { array: o, bigint: o, bool: o, func: o, number: o, object: o, string: o, symbol: o, any: o, arrayOf: a, element: o, elementType: o, instanceOf: a, node: o, objectOf: a, oneOf: a, oneOfType: a, shape: a, exact: a, checkPropTypes: i, resetWarningCache: r };
    return u.PropTypes = u, u;
  };
}()();
var bu = { defaultSize: "sm", dialogActionsAlign: "center", popoverActionsAlign: "center", alertIcon: { info: function(e) {
  return k("svg", { viewBox: "0 0 768 768", width: "1em", height: "1em", fill: "currentColor", ...e, children: k("g", { "data-name": "\\u56FE\\u5C42 2", children: K("g", { "data-name": "\\u56FE\\u5C42 1", children: [k("path", { d: "M384 64a320.11 320.11 0 01124.54 614.88A320.1 320.1 0 01259.46 89.12 317.92 317.92 0 01384 64m0-64C171.92 0 0 171.92 0 384s171.92 384 384 384 384-171.92 384-384S596.08 0 384 0z" }), k("rect", { x: 352, y: 223.98, width: 64, height: 416, rx: 32 }), k("path", { d: "M384 128a32 32 0 1032 32 32 32 0 00-32-32z" })] }) }) });
}, success: function(e) {
  return K("svg", { "data-name": "\\u56FE\\u5C42 1", viewBox: "0 0 768 768", width: "1em", height: "1em", fill: "currentColor", ...e, children: [k("path", { d: "M384 0C171.92 0 0 171.92 0 384s171.92 384 384 384 384-171.92 384-384S596.08 0 384 0zm0 704A320.1 320.1 0 01259.46 89.12a320.1 320.1 0 01249.08 589.76A317.92 317.92 0 01384 704z" }), k("path", { d: "M576 224a31.9 31.9 0 00-22.63 9.37l-232 233.44-106.74-105.44a32 32 0 00-45.26 45.26l129.63 128a32 32 0 0045.26 0l254.39-256A32 32 0 00576 224z" })] });
}, warning: function(e) {
  return K("svg", { "data-name": "\\u56FE\\u5C42 1", viewBox: "0 0 768 768", width: "1em", height: "1em", fill: "currentColor", ...e, children: [k("path", { d: "M384 64a320.11 320.11 0 01124.54 614.88A320.1 320.1 0 01259.46 89.12 317.92 317.92 0 01384 64m0-64C171.92 0 0 171.92 0 384s171.92 384 384 384 384-171.92 384-384S596.08 0 384 0z" }), k("rect", { x: 352, y: 127.98, width: 64, height: 416, rx: 32, ry: 32 }), k("path", { d: "M384 576a32 32 0 1032 32 32 32 0 00-32-32z" })] });
}, error: function(e) {
  return k("svg", { viewBox: "0 0 768 768", width: "1em", height: "1em", fill: "currentColor", ...e, children: k("g", { "data-name": "\\u56FE\\u5C42 2", children: K("g", { "data-name": "\\u56FE\\u5C42 1", children: [k("path", { d: "M384 0C171.92 0 0 171.92 0 384s171.92 384 384 384 384-171.92 384-384S596.08 0 384 0zm0 704A320.11 320.11 0 01259.46 89.12a320.1 320.1 0 01249.08 589.76A317.92 317.92 0 01384 704z" }), k("path", { d: "M429.26 384l137.4-137.37a32 32 0 000-45.26 32 32 0 00-45.26 0L384 338.75 246.66 201.37a32 32 0 00-45.26 0 32 32 0 000 45.26L338.75 384 201.4 521.37a32 32 0 000 45.26 32 32 0 0045.26 0L384 429.26l137.4 137.37a32 32 0 0045.26 0 32 32 0 000-45.26z" })] }) }) });
} }, selectedSeparator: ";", dialogMaxHeight: 680, dialogMinHeight: 240, dialogTopDistance: 60, drawerMinWidth: 248, drawerMaxWidth: 648, drawerMinHeight: 330, drawerMaxHeight: 530 }, xw = "";
function DR(e, r) {
  r === void 0 && (r = bu), xw || (xw = e, function(i) {
    document.body.setAttribute("data-brick-theme", i || "");
  }(e), function(i) {
    pi(bu, i);
  }(r));
}
var yE = { getLocaleText: function(e, r) {
  for (var i, o = e.defaultLocaleSet, a = e.componentName, u = (RP[ky] || {})[a] || {}, c = TP(o[ky], u), f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), m = 2; m < f; m++)
    h[m - 2] = arguments[m];
  return _P.apply(void 0, $e(i = [c[r]]).call(i, h));
}, theme: bu, isResponseSuccess: function(e, r) {
  return !(!e || e.status !== "ok");
}, getResponseMessage: function(e, r) {
  return (e ? e.message : function(i) {
    try {
      var o, a = new DOMParser().parseFromString(i, "text/html");
      return WP(o = a.body.innerText).call(o);
    } catch {
      return "";
    }
  }(r)) || "";
} }, dl = G.exports.createContext(yE);
function bE(e, r) {
  var i = e.theme;
  return i && i[r] || yE.theme[r];
}
function $r(e, r, i) {
  var o = e.props[r];
  return oe(o) ? bE(e.context, i) : o;
}
dl.Consumer;
var hl = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).context = void 0, a.componentLocale = void 0, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.getLocaleText = function(o) {
    for (var a, u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
      c[f - 1] = arguments[f];
    return this.componentLocale && Se.apply(void 0, $e(a = [this.context.getLocaleText, this.componentLocale, o]).call(a, c)) || "";
  }, i.getThemeValue = function(o) {
    return bE(this.context, o);
  }, i.getDefaultValueUsingTheme = function(o, a) {
    return $r(this, o, a);
  }, r;
}(G.exports.Component);
function ml() {
  DR("hi", { defaultSize: "md", checkboxMarkChecked: S8, dialogMinHeight: 160, dialogMaxHeight: 680 }), function() {
    var e = document.body;
    vE() ? e.setAttribute("data-os", "mac") : gE() && e.setAttribute("data-os", "windows");
  }();
}
hl.contextType = dl;
var jR = Ca("info", "success", "warning", "error");
function Ew(e, r) {
  for (var i = 0; i < r.length; i++) {
    var o = r[i];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), dx(e, G7(o.key), o);
  }
}
function rt(e, r, i) {
  return r && Ew(e.prototype, r), i && Ew(e, i), dx(e, "prototype", { writable: !1 }), e;
}
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
Ca("normal", "capsule", "circle"), Ca("normal", "icon-only"), Ca("right", "center", "left");
var gl = typeof window < "u" && typeof document < "u" && typeof navigator < "u", HR = function() {
  for (var e = ["Edge", "Trident", "Firefox"], r = 0; r < e.length; r += 1)
    if (gl && navigator.userAgent.indexOf(e[r]) >= 0)
      return 1;
  return 0;
}(), FR = gl && window.Promise ? function(e) {
  var r = !1;
  return function() {
    r || (r = !0, window.Promise.resolve().then(function() {
      r = !1, e();
    }));
  };
} : function(e) {
  var r = !1;
  return function() {
    r || (r = !0, setTimeout(function() {
      r = !1, e();
    }, HR));
  };
};
function wE(e) {
  return e && {}.toString.call(e) === "[object Function]";
}
function so(e, r) {
  if (e.nodeType !== 1)
    return [];
  var i = e.ownerDocument.defaultView.getComputedStyle(e, null);
  return r ? i[r] : i;
}
function Sm(e) {
  return e.nodeName === "HTML" ? e : e.parentNode || e.host;
}
function vl(e) {
  if (!e)
    return document.body;
  switch (e.nodeName) {
    case "HTML":
    case "BODY":
      return e.ownerDocument.body;
    case "#document":
      return e.body;
  }
  var r = so(e), i = r.overflow, o = r.overflowX, a = r.overflowY;
  return /(auto|scroll|overlay)/.test(i + a + o) ? e : vl(Sm(e));
}
function kE(e) {
  return e && e.referenceNode ? e.referenceNode : e;
}
var Sw = gl && !(!window.MSInputMethodContext || !document.documentMode), Cw = gl && /MSIE 10/.test(navigator.userAgent);
function Ci(e) {
  return e === 11 ? Sw : e === 10 ? Cw : Sw || Cw;
}
function li(e) {
  if (!e)
    return document.documentElement;
  for (var r = Ci(10) ? document.body : null, i = e.offsetParent || null; i === r && e.nextElementSibling; )
    i = (e = e.nextElementSibling).offsetParent;
  var o = i && i.nodeName;
  return o && o !== "BODY" && o !== "HTML" ? ["TH", "TD", "TABLE"].indexOf(i.nodeName) !== -1 && so(i, "position") === "static" ? li(i) : i : e ? e.ownerDocument.documentElement : document.documentElement;
}
function xh(e) {
  return e.parentNode !== null ? xh(e.parentNode) : e;
}
function wu(e, r) {
  if (!(e && e.nodeType && r && r.nodeType))
    return document.documentElement;
  var i = e.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_FOLLOWING, o = i ? e : r, a = i ? r : e, u = document.createRange();
  u.setStart(o, 0), u.setEnd(a, 0);
  var c, f, h = u.commonAncestorContainer;
  if (e !== h && r !== h || o.contains(a))
    return (f = (c = h).nodeName) === "BODY" || f !== "HTML" && li(c.firstElementChild) !== c ? li(h) : h;
  var m = xh(e);
  return m.host ? wu(m.host, r) : wu(e, xh(r).host);
}
function hi(e) {
  var r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top") === "top" ? "scrollTop" : "scrollLeft", i = e.nodeName;
  if (i === "BODY" || i === "HTML") {
    var o = e.ownerDocument.documentElement;
    return (e.ownerDocument.scrollingElement || o)[r];
  }
  return e[r];
}
function Tw(e, r) {
  var i = r === "x" ? "Left" : "Top", o = i === "Left" ? "Right" : "Bottom";
  return parseFloat(e["border" + i + "Width"]) + parseFloat(e["border" + o + "Width"]);
}
function Aw(e, r, i, o) {
  return Math.max(r["offset" + e], r["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], Ci(10) ? parseInt(i["offset" + e]) + parseInt(o["margin" + (e === "Height" ? "Top" : "Left")]) + parseInt(o["margin" + (e === "Height" ? "Bottom" : "Right")]) : 0);
}
function xE(e) {
  var r = e.body, i = e.documentElement, o = Ci(10) && getComputedStyle(i);
  return { height: Aw("Height", r, i, o), width: Aw("Width", r, i, o) };
}
var BR = function() {
  function e(r, i) {
    for (var o = 0; o < i.length; o++) {
      var a = i[o];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(r, a.key, a);
    }
  }
  return function(r, i, o) {
    return i && e(r.prototype, i), o && e(r, o), r;
  };
}(), Xo = function(e, r, i) {
  return r in e ? Object.defineProperty(e, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = i, e;
}, en = Object.assign || function(e) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r];
    for (var o in i)
      Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
  }
  return e;
};
function wr(e) {
  return en({}, e, { right: e.left + e.width, bottom: e.top + e.height });
}
function Eh(e) {
  var r = {};
  try {
    if (Ci(10)) {
      r = e.getBoundingClientRect();
      var i = hi(e, "top"), o = hi(e, "left");
      r.top += i, r.left += o, r.bottom += i, r.right += o;
    } else
      r = e.getBoundingClientRect();
  } catch {
  }
  var a = { left: r.left, top: r.top, width: r.right - r.left, height: r.bottom - r.top }, u = e.nodeName === "HTML" ? xE(e.ownerDocument) : {}, c = u.width || e.clientWidth || a.width, f = u.height || e.clientHeight || a.height, h = e.offsetWidth - c, m = e.offsetHeight - f;
  if (h || m) {
    var v = so(e);
    h -= Tw(v, "x"), m -= Tw(v, "y"), a.width -= h, a.height -= m;
  }
  return wr(a);
}
function Sh(e, r) {
  var i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], o = Ci(10), a = r.nodeName === "HTML", u = Eh(e), c = Eh(r), f = vl(e), h = so(r), m = parseFloat(h.borderTopWidth), v = parseFloat(h.borderLeftWidth);
  i && a && (c.top = Math.max(c.top, 0), c.left = Math.max(c.left, 0));
  var y = wr({ top: u.top - c.top - m, left: u.left - c.left - v, width: u.width, height: u.height });
  if (y.marginTop = 0, y.marginLeft = 0, !o && a) {
    var b = parseFloat(h.marginTop), E = parseFloat(h.marginLeft);
    y.top -= m - b, y.bottom -= m - b, y.left -= v - E, y.right -= v - E, y.marginTop = b, y.marginLeft = E;
  }
  return (o && !i ? r.contains(f) : r === f && f.nodeName !== "BODY") && (y = function(A, S) {
    var H = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], D = hi(S, "top"), L = hi(S, "left"), V = H ? -1 : 1;
    return A.top += D * V, A.bottom += D * V, A.left += L * V, A.right += L * V, A;
  }(y, r)), y;
}
function EE(e) {
  var r = e.nodeName;
  if (r === "BODY" || r === "HTML")
    return !1;
  if (so(e, "position") === "fixed")
    return !0;
  var i = Sm(e);
  return !!i && EE(i);
}
function SE(e) {
  if (!e || !e.parentElement || Ci())
    return document.documentElement;
  for (var r = e.parentElement; r && so(r, "transform") === "none"; )
    r = r.parentElement;
  return r || document.documentElement;
}
function Ch(e, r, i, o) {
  var a = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], u = { top: 0, left: 0 }, c = a ? SE(e) : wu(e, kE(r));
  if (o === "viewport")
    u = function(E) {
      var A = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], S = E.ownerDocument.documentElement, H = Sh(E, S), D = Math.max(S.clientWidth, window.innerWidth || 0), L = Math.max(S.clientHeight, window.innerHeight || 0), V = A ? 0 : hi(S), Q = A ? 0 : hi(S, "left");
      return wr({ top: V - H.top + H.marginTop, left: Q - H.left + H.marginLeft, width: D, height: L });
    }(c, a);
  else {
    var f = void 0;
    o === "scrollParent" ? (f = vl(Sm(r))).nodeName === "BODY" && (f = e.ownerDocument.documentElement) : f = o === "window" ? e.ownerDocument.documentElement : o;
    var h = Sh(f, c, a);
    if (f.nodeName !== "HTML" || EE(c))
      u = h;
    else {
      var m = xE(e.ownerDocument), v = m.height, y = m.width;
      u.top += h.top - h.marginTop, u.bottom = v + h.top, u.left += h.left - h.marginLeft, u.right = y + h.left;
    }
  }
  var b = typeof (i = i || 0) == "number";
  return u.left += b ? i : i.left || 0, u.top += b ? i : i.top || 0, u.right -= b ? i : i.right || 0, u.bottom -= b ? i : i.bottom || 0, u;
}
function CE(e, r, i, o, a) {
  var u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (e.indexOf("auto") === -1)
    return e;
  var c = Ch(i, o, u, a), f = { top: { width: c.width, height: r.top - c.top }, right: { width: c.right - r.right, height: c.height }, bottom: { width: c.width, height: c.bottom - r.bottom }, left: { width: r.left - c.left, height: c.height } }, h = Object.keys(f).map(function(b) {
    return en({ key: b }, f[b], { area: (E = f[b], E.width * E.height) });
    var E;
  }).sort(function(b, E) {
    return E.area - b.area;
  }), m = h.filter(function(b) {
    var E = b.width, A = b.height;
    return E >= i.clientWidth && A >= i.clientHeight;
  }), v = m.length > 0 ? m[0].key : h[0].key, y = e.split("-")[1];
  return v + (y ? "-" + y : "");
}
function TE(e, r, i) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  return Sh(i, o ? SE(r) : wu(r, kE(i)), o);
}
function AE(e) {
  var r = e.ownerDocument.defaultView.getComputedStyle(e), i = parseFloat(r.marginTop || 0) + parseFloat(r.marginBottom || 0), o = parseFloat(r.marginLeft || 0) + parseFloat(r.marginRight || 0);
  return { width: e.offsetWidth + o, height: e.offsetHeight + i };
}
function eu(e) {
  var r = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return e.replace(/left|right|bottom|top/g, function(i) {
    return r[i];
  });
}
function NE(e, r, i) {
  i = i.split("-")[0];
  var o = AE(e), a = { width: o.width, height: o.height }, u = ["right", "left"].indexOf(i) !== -1, c = u ? "top" : "left", f = u ? "left" : "top", h = u ? "height" : "width", m = u ? "width" : "height";
  return a[c] = r[c] + r[h] / 2 - o[h] / 2, a[f] = i === f ? r[f] - o[m] : r[eu(f)], a;
}
function Ua(e, r) {
  return Array.prototype.find ? e.find(r) : e.filter(r)[0];
}
function PE(e, r, i) {
  var o = i === void 0 ? e : e.slice(0, function(a, u, c) {
    if (Array.prototype.findIndex)
      return a.findIndex(function(h) {
        return h[u] === c;
      });
    var f = Ua(a, function(h) {
      return h[u] === c;
    });
    return a.indexOf(f);
  }(e, "name", i));
  return o.forEach(function(a) {
    a.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    var u = a.function || a.fn;
    a.enabled && wE(u) && (r.offsets.popper = wr(r.offsets.popper), r.offsets.reference = wr(r.offsets.reference), r = u(r, a));
  }), r;
}
function zR() {
  if (!this.state.isDestroyed) {
    var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
    e.offsets.reference = TE(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = CE(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = NE(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = PE(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
  }
}
function OE(e, r) {
  return e.some(function(i) {
    var o = i.name;
    return i.enabled && o === r;
  });
}
function Th(e) {
  for (var r = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < r.length; o++) {
    var a = r[o], u = a ? "" + a + i : e;
    if (document.body.style[u] !== void 0)
      return u;
  }
  return null;
}
function UR() {
  return this.state.isDestroyed = !0, OE(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Th("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
}
function LE(e) {
  var r = e.ownerDocument;
  return r ? r.defaultView : window;
}
function ME(e, r, i, o) {
  var a = e.nodeName === "BODY", u = a ? e.ownerDocument.defaultView : e;
  u.addEventListener(r, i, { passive: !0 }), a || ME(vl(u.parentNode), r, i, o), o.push(u);
}
function GR(e, r, i, o) {
  i.updateBound = o, LE(e).addEventListener("resize", i.updateBound, { passive: !0 });
  var a = vl(e);
  return ME(a, "scroll", i.updateBound, i.scrollParents), i.scrollElement = a, i.eventsEnabled = !0, i;
}
function VR() {
  this.state.eventsEnabled || (this.state = GR(this.reference, this.options, this.state, this.scheduleUpdate));
}
function WR() {
  var e, r;
  this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, r = this.state, LE(e).removeEventListener("resize", r.updateBound), r.scrollParents.forEach(function(i) {
    i.removeEventListener("scroll", r.updateBound);
  }), r.updateBound = null, r.scrollParents = [], r.scrollElement = null, r.eventsEnabled = !1, r));
}
function Cm(e) {
  return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
}
function dd(e, r) {
  Object.keys(r).forEach(function(i) {
    var o = "";
    ["width", "height", "top", "right", "bottom", "left"].indexOf(i) !== -1 && Cm(r[i]) && (o = "px"), e.style[i] = r[i] + o;
  });
}
var XR = gl && /Firefox/i.test(navigator.userAgent);
function Nw(e, r, i) {
  var o = Ua(e, function(f) {
    return f.name === r;
  }), a = !!o && e.some(function(f) {
    return f.name === i && f.enabled && f.order < o.order;
  });
  if (!a) {
    var u = "`" + r + "`", c = "`" + i + "`";
    console.warn(c + " modifier is required by " + u + " modifier in order to work, be sure to include it before " + u + "!");
  }
  return a;
}
var IE = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"], hd = IE.slice(3);
function Pw(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = hd.indexOf(e), o = hd.slice(i + 1).concat(hd.slice(0, i));
  return r ? o.reverse() : o;
}
var QR = "flip", YR = "clockwise", KR = "counterclockwise";
function ZR(e, r, i, o) {
  var a = [0, 0], u = ["right", "left"].indexOf(o) !== -1, c = e.split(/(\+|\-)/).map(function(v) {
    return v.trim();
  }), f = c.indexOf(Ua(c, function(v) {
    return v.search(/,|\s/) !== -1;
  }));
  c[f] && c[f].indexOf(",") === -1 && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  var h = /\s*,\s*|\s+/, m = f !== -1 ? [c.slice(0, f).concat([c[f].split(h)[0]]), [c[f].split(h)[1]].concat(c.slice(f + 1))] : [c];
  return m = m.map(function(v, y) {
    var b = (y === 1 ? !u : u) ? "height" : "width", E = !1;
    return v.reduce(function(A, S) {
      return A[A.length - 1] === "" && ["+", "-"].indexOf(S) !== -1 ? (A[A.length - 1] = S, E = !0, A) : E ? (A[A.length - 1] += S, E = !1, A) : A.concat(S);
    }, []).map(function(A) {
      return function(S, H, D, L) {
        var V = S.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), Q = +V[1], z = V[2];
        return Q ? z.indexOf("%") === 0 ? wr(z === "%p" ? D : L)[H] / 100 * Q : z === "vh" || z === "vw" ? (z === "vh" ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * Q : Q : S;
      }(A, b, r, i);
    });
  }), m.forEach(function(v, y) {
    v.forEach(function(b, E) {
      Cm(b) && (a[y] += b * (v[E - 1] === "-" ? -1 : 1));
    });
  }), a;
}
var qR = { shift: { order: 100, enabled: !0, fn: function(e) {
  var r = e.placement, i = r.split("-")[0], o = r.split("-")[1];
  if (o) {
    var a = e.offsets, u = a.reference, c = a.popper, f = ["bottom", "top"].indexOf(i) !== -1, h = f ? "left" : "top", m = f ? "width" : "height", v = { start: Xo({}, h, u[h]), end: Xo({}, h, u[h] + u[m] - c[m]) };
    e.offsets.popper = en({}, c, v[o]);
  }
  return e;
} }, offset: { order: 200, enabled: !0, fn: function(e, r) {
  var i = r.offset, o = e.placement, a = e.offsets, u = a.popper, c = a.reference, f = o.split("-")[0], h = void 0;
  return h = Cm(+i) ? [+i, 0] : ZR(i, u, c, f), f === "left" ? (u.top += h[0], u.left -= h[1]) : f === "right" ? (u.top += h[0], u.left += h[1]) : f === "top" ? (u.left += h[0], u.top -= h[1]) : f === "bottom" && (u.left += h[0], u.top += h[1]), e.popper = u, e;
}, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function(e, r) {
  var i = r.boundariesElement || li(e.instance.popper);
  e.instance.reference === i && (i = li(i));
  var o = Th("transform"), a = e.instance.popper.style, u = a.top, c = a.left, f = a[o];
  a.top = "", a.left = "", a[o] = "";
  var h = Ch(e.instance.popper, e.instance.reference, r.padding, i, e.positionFixed);
  a.top = u, a.left = c, a[o] = f, r.boundaries = h;
  var m = r.priority, v = e.offsets.popper, y = { primary: function(b) {
    var E = v[b];
    return v[b] < h[b] && !r.escapeWithReference && (E = Math.max(v[b], h[b])), Xo({}, b, E);
  }, secondary: function(b) {
    var E = b === "right" ? "left" : "top", A = v[E];
    return v[b] > h[b] && !r.escapeWithReference && (A = Math.min(v[E], h[b] - (b === "right" ? v.width : v.height))), Xo({}, E, A);
  } };
  return m.forEach(function(b) {
    var E = ["left", "top"].indexOf(b) !== -1 ? "primary" : "secondary";
    v = en({}, v, y[E](b));
  }), e.offsets.popper = v, e;
}, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function(e) {
  var r = e.offsets, i = r.popper, o = r.reference, a = e.placement.split("-")[0], u = Math.floor, c = ["top", "bottom"].indexOf(a) !== -1, f = c ? "right" : "bottom", h = c ? "left" : "top", m = c ? "width" : "height";
  return i[f] < u(o[h]) && (e.offsets.popper[h] = u(o[h]) - i[m]), i[h] > u(o[f]) && (e.offsets.popper[h] = u(o[f])), e;
} }, arrow: { order: 500, enabled: !0, fn: function(e, r) {
  var i;
  if (!Nw(e.instance.modifiers, "arrow", "keepTogether"))
    return e;
  var o = r.element;
  if (typeof o == "string") {
    if (!(o = e.instance.popper.querySelector(o)))
      return e;
  } else if (!e.instance.popper.contains(o))
    return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
  var a = e.placement.split("-")[0], u = e.offsets, c = u.popper, f = u.reference, h = ["left", "right"].indexOf(a) !== -1, m = h ? "height" : "width", v = h ? "Top" : "Left", y = v.toLowerCase(), b = h ? "left" : "top", E = h ? "bottom" : "right", A = AE(o)[m];
  f[E] - A < c[y] && (e.offsets.popper[y] -= c[y] - (f[E] - A)), f[y] + A > c[E] && (e.offsets.popper[y] += f[y] + A - c[E]), e.offsets.popper = wr(e.offsets.popper);
  var S = f[y] + f[m] / 2 - A / 2, H = so(e.instance.popper), D = parseFloat(H["margin" + v]), L = parseFloat(H["border" + v + "Width"]), V = S - e.offsets.popper[y] - D - L;
  return V = Math.max(Math.min(c[m] - A, V), 0), e.arrowElement = o, e.offsets.arrow = (Xo(i = {}, y, Math.round(V)), Xo(i, b, ""), i), e;
}, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function(e, r) {
  if (OE(e.instance.modifiers, "inner") || e.flipped && e.placement === e.originalPlacement)
    return e;
  var i = Ch(e.instance.popper, e.instance.reference, r.padding, r.boundariesElement, e.positionFixed), o = e.placement.split("-")[0], a = eu(o), u = e.placement.split("-")[1] || "", c = [];
  switch (r.behavior) {
    case QR:
      c = [o, a];
      break;
    case YR:
      c = Pw(o);
      break;
    case KR:
      c = Pw(o, !0);
      break;
    default:
      c = r.behavior;
  }
  return c.forEach(function(f, h) {
    if (o !== f || c.length === h + 1)
      return e;
    o = e.placement.split("-")[0], a = eu(o);
    var m = e.offsets.popper, v = e.offsets.reference, y = Math.floor, b = o === "left" && y(m.right) > y(v.left) || o === "right" && y(m.left) < y(v.right) || o === "top" && y(m.bottom) > y(v.top) || o === "bottom" && y(m.top) < y(v.bottom), E = y(m.left) < y(i.left), A = y(m.right) > y(i.right), S = y(m.top) < y(i.top), H = y(m.bottom) > y(i.bottom), D = o === "left" && E || o === "right" && A || o === "top" && S || o === "bottom" && H, L = ["top", "bottom"].indexOf(o) !== -1, V = !!r.flipVariations && (L && u === "start" && E || L && u === "end" && A || !L && u === "start" && S || !L && u === "end" && H), Q = !!r.flipVariationsByContent && (L && u === "start" && A || L && u === "end" && E || !L && u === "start" && H || !L && u === "end" && S), z = V || Q;
    (b || D || z) && (e.flipped = !0, (b || D) && (o = c[h + 1]), z && (u = function(te) {
      return te === "end" ? "start" : te === "start" ? "end" : te;
    }(u)), e.placement = o + (u ? "-" + u : ""), e.offsets.popper = en({}, e.offsets.popper, NE(e.instance.popper, e.offsets.reference, e.placement)), e = PE(e.instance.modifiers, e, "flip"));
  }), e;
}, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function(e) {
  var r = e.placement, i = r.split("-")[0], o = e.offsets, a = o.popper, u = o.reference, c = ["left", "right"].indexOf(i) !== -1, f = ["top", "left"].indexOf(i) === -1;
  return a[c ? "left" : "top"] = u[i] - (f ? a[c ? "width" : "height"] : 0), e.placement = eu(r), e.offsets.popper = wr(a), e;
} }, hide: { order: 800, enabled: !0, fn: function(e) {
  if (!Nw(e.instance.modifiers, "hide", "preventOverflow"))
    return e;
  var r = e.offsets.reference, i = Ua(e.instance.modifiers, function(o) {
    return o.name === "preventOverflow";
  }).boundaries;
  if (r.bottom < i.top || r.left > i.right || r.top > i.bottom || r.right < i.left) {
    if (e.hide === !0)
      return e;
    e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
  } else {
    if (e.hide === !1)
      return e;
    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
  }
  return e;
} }, computeStyle: { order: 850, enabled: !0, fn: function(e, r) {
  var i = r.x, o = r.y, a = e.offsets.popper, u = Ua(e.instance.modifiers, function(V) {
    return V.name === "applyStyle";
  }).gpuAcceleration;
  u !== void 0 && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  var c = u !== void 0 ? u : r.gpuAcceleration, f = li(e.instance.popper), h = Eh(f), m = { position: a.position }, v = function(V, Q) {
    var z = V.offsets, te = z.popper, J = z.reference, he = Math.round, le = Math.floor, me = function(M) {
      return M;
    }, ye = he(J.width), be = he(te.width), Me = ["left", "right"].indexOf(V.placement) !== -1, we = V.placement.indexOf("-") !== -1, ot = Q ? Me || we || ye % 2 == be % 2 ? he : le : me, Ue = Q ? he : me;
    return { left: ot(ye % 2 == 1 && be % 2 == 1 && !we && Q ? te.left - 1 : te.left), top: Ue(te.top), bottom: Ue(te.bottom), right: ot(te.right) };
  }(e, window.devicePixelRatio < 2 || !XR), y = i === "bottom" ? "top" : "bottom", b = o === "right" ? "left" : "right", E = Th("transform"), A = void 0, S = void 0;
  if (S = y === "bottom" ? f.nodeName === "HTML" ? -f.clientHeight + v.bottom : -h.height + v.bottom : v.top, A = b === "right" ? f.nodeName === "HTML" ? -f.clientWidth + v.right : -h.width + v.right : v.left, c && E)
    m[E] = "translate3d(" + A + "px, " + S + "px, 0)", m[y] = 0, m[b] = 0, m.willChange = "transform";
  else {
    var H = y === "bottom" ? -1 : 1, D = b === "right" ? -1 : 1;
    m[y] = S * H, m[b] = A * D, m.willChange = y + ", " + b;
  }
  var L = { "x-placement": e.placement };
  return e.attributes = en({}, L, e.attributes), e.styles = en({}, m, e.styles), e.arrowStyles = en({}, e.offsets.arrow, e.arrowStyles), e;
}, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function(e) {
  var r, i;
  return dd(e.instance.popper, e.styles), r = e.instance.popper, i = e.attributes, Object.keys(i).forEach(function(o) {
    i[o] !== !1 ? r.setAttribute(o, i[o]) : r.removeAttribute(o);
  }), e.arrowElement && Object.keys(e.arrowStyles).length && dd(e.arrowElement, e.arrowStyles), e;
}, onLoad: function(e, r, i, o, a) {
  var u = TE(a, r, e, i.positionFixed), c = CE(i.placement, u, r, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
  return r.setAttribute("x-placement", c), dd(r, { position: i.positionFixed ? "fixed" : "absolute" }), i;
}, gpuAcceleration: void 0 } }, JR = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function() {
}, onUpdate: function() {
}, modifiers: qR }, tu = function() {
  function e(r, i) {
    var o = this, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (function(c, f) {
      if (!(c instanceof f))
        throw new TypeError("Cannot call a class as a function");
    })(this, e), this.scheduleUpdate = function() {
      return requestAnimationFrame(o.update);
    }, this.update = FR(this.update.bind(this)), this.options = en({}, e.Defaults, a), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = r && r.jquery ? r[0] : r, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(en({}, e.Defaults.modifiers, a.modifiers)).forEach(function(c) {
      o.options.modifiers[c] = en({}, e.Defaults.modifiers[c] || {}, a.modifiers ? a.modifiers[c] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function(c) {
      return en({ name: c }, o.options.modifiers[c]);
    }).sort(function(c, f) {
      return c.order - f.order;
    }), this.modifiers.forEach(function(c) {
      c.enabled && wE(c.onLoad) && c.onLoad(o.reference, o.popper, o.options, c, o.state);
    }), this.update();
    var u = this.options.eventsEnabled;
    u && this.enableEventListeners(), this.state.eventsEnabled = u;
  }
  return BR(e, [{ key: "update", value: function() {
    return zR.call(this);
  } }, { key: "destroy", value: function() {
    return UR.call(this);
  } }, { key: "enableEventListeners", value: function() {
    return VR.call(this);
  } }, { key: "disableEventListeners", value: function() {
    return WR.call(this);
  } }]), e;
}();
tu.Utils = (typeof window < "u" ? window : global).PopperUtils, tu.placements = IE, tu.Defaults = JR;
const $R = tu;
var eD = { exports: {} };
const tD = Ne(eD.exports = Xk);
var nD = { exports: {} };
const rD = Ne(nD.exports = Fx);
function _E(e, r) {
  if (e == null)
    return {};
  var i, o, a = {}, u = tD(e);
  for (o = 0; o < u.length; o++)
    i = u[o], rD(r).call(r, i) >= 0 || (a[i] = e[i]);
  return a;
}
var oD = ["className", "disablePortal", "visible", "destroyOnHide", "children"], ku = G.exports.forwardRef(function(e, r) {
  var i = e.className, o = e.disablePortal, a = e.visible, u = e.destroyOnHide, c = e.children, f = _E(e, oD), h = function(y) {
    var b = y.portalContainer;
    return typeof b == "function" ? b() : b instanceof HTMLElement ? b : document.body;
  }(e), m = Be({ className: ue("brick-popup", "brick-popup-" + (a ? "visible" : "hidden"), i), ref: o ? r : null }, f), v = k("div", { ...m, children: c });
  return !a && u ? null : o ? v : h ? La.exports.createPortal(v, h) : null;
});
ku.displayName = "Popup", ku.defaultProps = { className: "", visible: !1, disablePortal: !1, destroyOnHide: !0 };
var Tm = G.exports.createContext({}), Ow = function(e) {
  return typeof e == "function" ? e() : e;
}, Lw = { position: "absolute", top: 0, left: 0, opacity: 0, pointerEvents: "none" }, Mw = {}, iD = { top: "down", bottom: "up", left: "right", right: "left" }, aD = { "top-start": "left", "bottom-start": "left", "top-end": "right", "bottom-end": "right", "left-start": "top", "right-start": "top", "left-end": "bottom", "right-end": "bottom" }, hr = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).context = void 0, a.state = { placement: void 0, styles: void 0, arrowStyles: void 0, popperOffset: void 0, targetOffset: void 0, originalPlacement: void 0, flipped: void 0, hide: void 0 }, a.elemPopperWrap = null, a.popperInstance = null, a.targetLastRect = null, a.arrow = G.exports.createRef(), a.refPopperWrap = function(h) {
      a.elemPopperWrap = h, a.props.popperWrapRef && $s(a.props.popperWrapRef, h);
    }, a;
  }
  qe(r, e), r.getDerivedStateFromProps = function(o) {
    return Si(o, ["visible", "target"]);
  };
  var i = r.prototype;
  return i.destroyPopperInstance = function() {
    this.popperInstance && (this.popperInstance.destroy(), this.popperInstance = null);
  }, i.updatePopperInstance = function() {
    this.popperInstance && (this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners(), this.popperInstance.scheduleUpdate());
  }, i.reCreatePopperInstance = function() {
    this.destroyPopperInstance();
    var o = this.target, a = this.elemPopperWrap;
    o && a && (this.popperInstance = new $R(o, a, this.options));
  }, i.renderPopperArrow = function() {
    if (!this.props.withArrow)
      return null;
    var o = this.state.placement, a = o ? iD[o.split("-")[0]] : "", u = this.arrowStyle, c = { className: ue("brick-popper-arrow", a && "direction-" + a), ref: this.arrow, style: u };
    return k("div", { ...c });
  }, i.renderPopper = function() {
    var o = Be({}, Un(this.props, ["onMouseEnter", "onMouseLeave"]), { className: "brick-popper-wrap", style: this.wrapStyle, ref: this.refPopperWrap }), a = this.props.children;
    return a && K("div", { ...o, children: [k("div", { className: "brick-popper-inner", children: a }), this.renderPopperArrow()] });
  }, i.componentWillUnmount = function() {
    this.destroyPopperInstance();
  }, i.componentDidMount = function() {
    this.props.visible && this.reCreatePopperInstance();
  }, i.componentDidUpdate = function(o, a) {
    var u = this.props, c = u.visible, f = u.children, h = u.placement, m = u.target, v = u.positionFixed, y = u.eventsEnabled, b = u.destroyOnHide, E = u.modifiers, A = u.type, S = Ow(m);
    if (!o.visible && c && b || h !== o.placement || f && !o.children || S !== Ow(o.target) || v !== o.positionFixed || !wy(E, o.modifiers) || !wy(a.styles, this.state.styles))
      this.reCreatePopperInstance();
    else if (y !== o.eventsEnabled || this.state.placement !== a.placement || c && !o.visible)
      this.updatePopperInstance();
    else if (c && S) {
      var H, D = A === "context" ? m : S.getBoundingClientRect(), L = this.targetLastRect;
      L && Qu(H = function(V) {
        return V === "context" ? ["pageX", "pageY"] : ["height", "width", "top", "left"];
      }(A)).call(H, function(V) {
        return D[V] !== L[V];
      }) && this.updatePopperInstance(), this.targetLastRect = D;
    } else
      this.targetLastRect = null;
  }, i.render = function() {
    var o = this.props.visible, a = Be({ className: this.className, visible: o }, Un(this.props, ["destroyOnHide", "disablePortal", "portalContainer"]));
    return k(ku, { ...a, children: this.renderPopper() });
  }, rt(r, [{ key: "className", get: function() {
    var o, a = this.props, u = a.className, c = a.withArrow, f = this.state, h = f.hide, m = f.placement, v = f.originalPlacement;
    return ue("brick-popper", ((o = {})["brick-popper-ref-hidden"] = h, o["brick-popper-with-arrow"] = c, o["brick-popper-placement-" + m] = m, o["brick-popper-original-placement-" + v] = v, o), u);
  } }, { key: "preventOverflowBoundary", get: function() {
    return oe(this.props.preventOverflowBoundary) ? Se(this.context.getPreventOverflowBoundary) : this.props.preventOverflowBoundary;
  } }, { key: "options", get: function() {
    var o = this, a = { applyStyle: { enabled: !1 }, arrow: { element: this.arrow.current || void 0, enabled: this.props.withArrow }, updateStateModifier: { enabled: !0, order: 900, fn: function(c) {
      var f = Be({}, Un(c, ["placement", "styles", "arrowStyles", "originalPlacement", "flipped", "hide"]), { popperOffset: c.offsets.popper, targetOffset: c.offsets.reference });
      return o.setState(f), Se(o.props.onChange, f), c;
    } } }, u = this.preventOverflowBoundary;
    return u && (a.preventOverflow = { boundariesElement: u }), { placement: this.props.placement, eventsEnabled: this.props.eventsEnabled, positionFixed: this.props.positionFixed, modifiers: Be({}, a, this.props.modifiers) };
  } }, { key: "wrapWidthStyle", get: function() {
    var o, a = this.props, u = a.matchMinWidthToTarget;
    a.type;
    var c = "" + this.state.placement, f = {};
    if (u && St(o = ["bottom", "top"]).call(o, c.split("-")[0])) {
      var h = this.target;
      f.minWidth = h.getBoundingClientRect().width;
    }
    return f;
  } }, { key: "wrapStyle", get: function() {
    var o = this.props, a = o.type, u = o.target, c = this.elemPopperWrap, f = this.popperInstance;
    if (!c || !f)
      return Lw;
    var h = this.state, m = h.styles, v = m === void 0 ? {} : m, y = h.popperOffset, b = {};
    if (a === "context") {
      var E = [];
      c.clientHeight + u.clientY > window.innerHeight && E.push("translateY(-100%)"), c.clientWidth + u.clientX > window.innerWidth && E.push("translateX(-100%)"), b = { left: u.pageX + "px", top: u.pageY + "px", transform: E.length > 0 ? E.join(" ") : "inital" };
    }
    return Be({ position: oe(y) ? Lw.position : y.position }, v, this.wrapWidthStyle, b);
  } }, { key: "arrowStyle", get: function() {
    var o, a, u, c = this.props.arrowOffset, f = this.state, h = f.targetOffset, m = f.popperOffset, v = f.placement, y = v === void 0 ? "" : v, b = f.arrowStyles, E = y.split("-"), A = E[0], S = E[1];
    return this.arrow.current && h && m ? S ? typeof c == "number" ? ((u = {})[aD[y]] = c + "px", u) : c === "default" || St(o = ["top", "bottom"]).call(o, A) && 3 * h.width / 4 > m.width || St(a = ["left", "right"]).call(a, A) && 3 * h.height / 4 > m.height ? Mw : b : b : Mw;
  } }, { key: "target", get: function() {
    var o = this.props.target;
    return typeof o == "function" ? o() : o;
  } }]), r;
}(G.exports.Component);
hr.propTypes = { className: _.exports.string, visible: _.exports.bool, target: _.exports.oneOfType([_.exports.oneOfType([_.exports.any, _.exports.any]), _.exports.func, _.exports.oneOf([null])]), placement: _.exports.any, positionFixed: _.exports.bool, eventsEnabled: _.exports.bool, modifiers: _.exports.any, popperWrapRef: _.exports.oneOfType([_.exports.string, _.exports.func, _.exports.object]), matchMinWidthToTarget: _.exports.bool, onMouseEnter: _.exports.func, onMouseLeave: _.exports.func, onChange: _.exports.func, withArrow: _.exports.bool, arrowOffset: _.exports.oneOfType([_.exports.oneOf(["auto"]), _.exports.oneOf(["default"]), _.exports.number]), preventOverflowBoundary: _.exports.oneOfType([_.exports.oneOf(["scrollParent"]), _.exports.oneOf(["viewport"]), _.exports.element]) }, hr.displayName = "Popper", hr.defaultProps = { className: "", destroyOnHide: !0, placement: "bottom", eventsEnabled: !0, positionFixed: !1, matchMinWidthToTarget: !1, withArrow: !1, arrowOffset: "auto" }, hr.contextType = Tm;
var md = function(e) {
  return G.exports.isValidElement(e) && e.type === hr;
};
function lD(e) {
  var r = { listenerGroup: null };
  function i(c) {
    e.setVisible(!1, c), e.hideParent(c);
  }
  function o(c) {
    var f = c.target, h = e.elemPopperWrap;
    !e.state.visible || e.hasChildShow || fh(e.targetElement, f) || fh(h, f) || i(c);
  }
  function a() {
    var c;
    (c = r.listenerGroup) == null || c.removeAll(), r.listenerGroup = null;
  }
  function u(c) {
    r.listenerGroup = function() {
      var f = [];
      function h(m, v, y) {
        m.addEventListener(v, y), f.push([m, v, y]);
      }
      return { add: function(m, v) {
        var y;
        m && m.addEventListener && zn(y = Qk(v)).call(y, function(b) {
          var E = v[b];
          typeof E != "function" ? zn(E).call(E, function(A) {
            return h(m, b, A);
          }) : h(m, b, E);
        });
      }, removeAll: function() {
        zn(f).call(f, function(m) {
          var v = m[0], y = m[1], b = m[2];
          v.removeEventListener(y, b);
        });
      } };
    }(), c === "click" ? r.listenerGroup.add(window, { mousedown: o }) : c === "context" && r.listenerGroup.add(window, { mousedown: o, wheel: i });
  }
  return { clear: function() {
    a();
  }, update: function(c, f) {
    e.state.visible ? r.listenerGroup ? f !== c && (a(), u(c)) : u(c) : a();
  } };
}
var $o = function(e) {
  function r(o) {
    var a;
    (a = e.call(this, o) || this).context = void 0, a.hasChildShow = !1, a.nodeTarget = null, a.elemPopperWrap = null, a.nodePopper = null, a.visibleTimoutId = null, a.scrollElement = null, a.popperHideHandler = lD(function(h) {
      if (h === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return h;
    }(a)), a.refTarget = function(h) {
      a.nodeTarget = h;
      var m = a.childTarget;
      oe(m) || oe(m.ref) || $s(m.ref, h);
    }, a.refPopper = function(h) {
      a.nodePopper = h;
      var m = a.childPopper;
      m && $s(m.ref, h);
    }, a.refPopperWrap = function(h) {
      a.elemPopperWrap = h;
      var m = a.childPopper;
      m && $s(m.props.popperWrapRef, h);
    }, a.getPreventOverflowBoundary = function() {
      return a.context.getPreventOverflowBoundary ? a.context.getPreventOverflowBoundary() : a.scrollElement;
    }, a.handleChildTargetShow = function() {
      a.hasChildShow = !0;
    }, a.handleChildTargetHide = function() {
      a.hasChildShow = !1;
    }, a.handleClickTarget = function(h) {
      a.invokeTargetEventHandler("onClick", h);
    }, a.handleMouseEnterTarget = function(h) {
      a.invokeTargetEventHandler("onMouseEnter", h, !0);
    }, a.handleMouseLeaveTarget = function(h) {
      a.invokeTargetEventHandler("onMouseLeave", h, !1);
    }, a.handleFocusTarget = function(h) {
      a.invokeTargetEventHandler("onFocus", h, !0);
    }, a.handleContextTarget = function(h) {
      h.preventDefault(), h.persist(), a.invokeTargetEventHandler("onContextMenu", h, !0, !0);
    }, a.handleBlurTarget = function(h) {
      a.invokeTargetEventHandler("onBlur", h, !1);
    }, a.handleMouseEnterPopper = function(h) {
      a.invokePopperEventHandler("onMouseEnter", h), a.clearVisibleDelayTimeout();
    }, a.handleMouseLeavePopper = function(h) {
      a.props.disabled || (a.invokePopperEventHandler("onMouseLeave", h), a.delaySetVisible(!1, a.getEventDelay("onMouseLeave"), h));
    }, a.hideByChild = function(h) {
      h && fh(a.elemPopperWrap, h.target) || (a.setVisible(!1), a.hideParent(h));
    };
    var u = o.target, c = o.visible, f = { visible: oe(c) ? !!o.defaultVisible : c, target: u };
    return a.state = f, a;
  }
  qe(r, e), r.getDerivedStateFromProps = function(o) {
    return Si(o, ["visible", "target"]);
  };
  var i = r.prototype;
  return i.setScrollElement = function(o) {
    if (!this.context.getPreventOverflowBoundary && this.nodePopper) {
      var a = this.nodePopper.popperInstance;
      this.scrollElement = o && a ? a.state.scrollElement : null;
    }
  }, i.delaySetVisible = function(o, a, u) {
    var c = this;
    a === void 0 && (a = 0), this.clearVisibleDelayTimeout(), a ? (u.persist(), this.visibleTimoutId = cx(function() {
      c.setVisible(o, u), c.clearVisibleDelayTimeout();
    }, a)) : this.setVisible(o, u);
  }, i.clearVisibleDelayTimeout = function() {
    this.visibleTimoutId && (clearTimeout(this.visibleTimoutId), this.visibleTimoutId = null);
  }, i.hideParent = function(o) {
    Se(this.context.hideByChild, o);
  }, i.setVisible = function(o, a) {
    var u = this;
    this.clearVisibleDelayTimeout();
    var c = Se(this.props.beforeChange, o);
    if (c !== !1) {
      c !== !0 && c !== void 0 || (c = dE.resolve());
      var f = a;
      f && typeof f.persist == "function" && f.persist(), c.then(function() {
        oe(u.props.visible) && u.setState({ visible: o }), Se(u.props.onChange, o, a);
        var h = u.context, m = h.onChildHide, v = h.onChildShow;
        Se(o ? v : m), u.setScrollElement(o);
      });
    }
  }, i.setTarget = function(o) {
    oe(this.props.target) && this.setState({ target: o });
  }, i.getEventDelay = function(o) {
    var a = this.props;
    switch (o) {
      case "onBlur":
        return Jo(a.blurDelay, a.blurDelayInMS);
      case "onFocus":
        return Jo(a.focusDelay, a.focusDelayInMS);
      case "onMouseLeave":
        return Jo(a.mouseLeaveDelay, a.mouseLeaveDelayInMS) || 60;
      case "onMouseEnter":
        return Jo(a.mouseEnterDelay, a.mouseEnterDelayInMS);
      case "onContextMenu":
        return a.mouseContextDelay;
      default:
        return 0;
    }
  }, i.invokeTargetEventHandler = function(o, a, u, c) {
    u === void 0 && (u = !this.state.visible), c === void 0 && (c = !1);
    var f = this.childTarget;
    f && f.props && Se(f.props[o], a), this.delayToggleVisible(a, this.getEventDelay(o), u, c);
  }, i.invokePopperEventHandler = function(o, a) {
    var u = this.childPopper;
    u && u.props && Se(u.props[o], a);
  }, i.delayToggleVisible = function(o, a, u, c) {
    a === void 0 && (a = 0), u === void 0 && (u = !this.state.visible), c === void 0 && (c = !1), this.clearVisibleDelayTimeout(), c ? this.setTarget(o) : o && this.setTarget(o.currentTarget), this.state.visible !== u && this.delaySetVisible(u, a, o);
  }, i.componentWillUnmount = function() {
    this.popperHideHandler.clear();
  }, i.componentDidMount = function() {
    this.popperHideHandler.update(this.props.type);
  }, i.componentDidUpdate = function(o) {
    this.popperHideHandler.update(this.props.type, o.type);
  }, i.render = function() {
    var o, a = this, u = za(o = this.childrenArray).call(o, function(c) {
      return c ? md(c) ? G.exports.cloneElement(c, a.popperInjectProps) : G.exports.cloneElement(c, a.targetInjectProps) : null;
    });
    return k(Tm.Provider, { value: this.contextValue, children: k(Gt, { children: u }) });
  }, rt(r, [{ key: "targetElement", get: function() {
    var o = this.state.target;
    return typeof o == "function" ? o() : o;
  } }, { key: "contextValue", get: function() {
    return { onChildHide: this.handleChildTargetHide, onChildShow: this.handleChildTargetShow, hideByChild: this.hideByChild, getPreventOverflowBoundary: this.getPreventOverflowBoundary };
  } }, { key: "childrenArray", get: function() {
    var o;
    return this.props.children ? pl(o = G.exports.Children.toArray(this.props.children)).call(o, function(a) {
      return G.exports.isValidElement(a);
    }) : [];
  } }, { key: "childTarget", get: function() {
    var o;
    return Na(o = this.childrenArray).call(o, function(a) {
      return !md(a);
    });
  } }, { key: "childPopper", get: function() {
    var o;
    return Na(o = this.childrenArray).call(o, function(a) {
      return md(a);
    });
  } }, { key: "targetInjectHandlers", get: function() {
    switch (this.props.type) {
      case "click":
        return { onClick: this.handleClickTarget };
      case "hover":
        return { onMouseEnter: this.handleMouseEnterTarget, onMouseLeave: this.handleMouseLeaveTarget };
      case "focus":
        return { onFocus: this.handleFocusTarget, onBlur: this.handleBlurTarget };
      case "context":
        return { onContextMenu: this.handleContextTarget };
    }
    return {};
  } }, { key: "targetPopperHandlers", get: function() {
    return this.props.type === "hover" ? { onMouseEnter: this.handleMouseEnterPopper, onMouseLeave: this.handleMouseLeavePopper } : {};
  } }, { key: "targetInjectProps", get: function() {
    return Be({ ref: this.refTarget }, this.targetInjectHandlers);
  } }, { key: "popperInjectProps", get: function() {
    return Be({ ref: this.refPopper, popperWrapRef: this.refPopperWrap, visible: this.state.visible, target: this.state.target }, this.targetPopperHandlers);
  } }]), r;
}(G.exports.Component);
$o.displayName = "PopperTrigger", $o.propTypes = { blurDelayInMS: _.exports.number, focusDelayInMS: _.exports.number, mouseContextDelay: _.exports.number, blurDelay: _.exports.number, focusDelay: _.exports.number, mouseLeaveDelay: _.exports.number, mouseEnterDelay: _.exports.number, beforeChange: _.exports.func, onChange: _.exports.func, defaultVisible: _.exports.bool, target: _.exports.oneOfType([_.exports.func, _.exports.any, _.exports.oneOf([null])]), visible: _.exports.bool, disabled: _.exports.bool, type: _.exports.oneOf(["click", "hover", "focus", "context"]), mouseEnterDelayInMS: dr("^0.1.100", "use `mouseEnterDelay` instead"), mouseLeaveDelayInMS: dr("^0.1.100", "use `mouseLeaveDelay` instead"), mouseFocusDelayInMS: dr("^0.1.100", "use `mouseFocusDelay` instead"), mouseBlurDelayInMS: dr("^0.1.100", "use `mouseBlurDelay` instead") }, $o.defaultProps = { type: "click", defaultVisible: !1, disabled: !1, mouseEnterDelay: 150, mouseLeaveDelay: 60, mouseFocusDelay: 150, mouseBlurDelay: 0, mouseContextDelay: 150 }, $o.contextType = Tm;
function RE(e) {
  return k(hr, { ...e, className: ue("ku-entity-linking-popper", e.className) });
}
const Iw = { icon: "kel-icon-o4JQ6", spin: "kel-spin-hE1lp" }, sD = (e) => {
  const { visible: r, className: i } = e;
  return r ? k("div", { className: ue(i, Iw.loading), children: k("i", { className: Iw.icon, children: k("img", { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAACeklEQVQ4EX1TPWtUQRS9d2Z29mU1ZDcGRUTIF5JOLARBS7FNo4uFYc2myy+wM3/AKqQyYdVVi20stUslFqKooEgsEjVCYGORuNG8N/PueGbDSoghF95jhnvOuWfuzGU6EI3G0wkhX+PA14hppD49Nbi8vGza7bYCNK9Wq/l+iultWq2W3dlJ70rIZ5jZBqICE9mYX1lZ4e3tvsLQUF5aWGj52dkbO8AAQtQViOTO7/QBUbjCTDEhAEhARFClUmHvifN8W1m7dazRaPQhtRlFoi3qdLI7QegilnkIDCi/DMI3veORmEfAdpuUUtp7a0SKJYgMxQQvLjbHWYVnTKxxZoOS9+u3b92LDiKgF6jI8/NP+kslrhjjTJ5ro5T/aozhSQnkcV7JA72Zmf6fHEWiXcQvVB5wzlhstUgyqCRItO5Q2SkKiwcr9xz0RCyaoBRbVLdapxVDrE5AOYMDThLzcT/hsDUEdrOsk+Q52k2qoECO9h3AmXPRyNGxsbEBuEm01kW4tUozrYOVUQgp9uNH04nK5fKAJ0q6ZCVeidBrtCfDCVLv88m5ubnu1R4mBLcsoid0kGLAh5vYUsaEF8wqCxwcsYwOD49dP0wkkhuNxxdE3JkQFAR0wVpax3mIlpYezZCiq3j/HkJwGD4VdPE5Ov0tTVNw7Snm/DyzrgiJ08wOep/r9am33ac8Onr24erq95Mgn4OeI1HDPmT1wJSSsrvo9B+QUwinLNEqbZSPF9/H4l0HcREnbm3tRxXLy5gAH1AJrwckNFhigykVCo4Nv+tPkle9qfwnEEViNJvN01nGl+BmzCguYTg85m4TTftiDH2o1Wo/95B7/7/NNjpwDg8WRAAAAABJRU5ErkJggg==", alt: "" }) }) }) : null;
}, uD = (e) => k("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "currentColor", ...e, children: k("g", { id: "\u5931\u8D25", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: k("g", { id: "Group-6", transform: "translate(-0.900000, -1.200000)", fill: "#FF6B78", children: k("path", { d: "M12.9,1.2 C19.527417,1.2 24.9,6.572583 24.9,13.2 C24.9,19.827417 19.527417,25.2 12.9,25.2 C6.272583,25.2 0.9,19.827417 0.9,13.2 C0.9,6.572583 6.272583,1.2 12.9,1.2 Z M13.2333333,17.2 L12.5666667,17.2 C12.0143819,17.2 11.5666667,17.6477153 11.5666667,18.2 L11.5666667,18.8666667 C11.5666667,19.4189514 12.0143819,19.8666667 12.5666667,19.8666667 L13.2333333,19.8666667 C13.7856181,19.8666667 14.2333333,19.4189514 14.2333333,18.8666667 L14.2333333,18.2 C14.2333333,17.6477153 13.7856181,17.2 13.2333333,17.2 Z M12.9,6.53333333 C12.1636203,6.53333333 11.5666667,7.130287 11.5666667,7.86666667 L11.5666667,14.5333333 C11.5666667,15.269713 12.1636203,15.8666667 12.9,15.8666667 C13.6363797,15.8666667 14.2333333,15.269713 14.2333333,14.5333333 L14.2333333,7.86666667 C14.2333333,7.130287 13.6363797,6.53333333 12.9,6.53333333 Z", id: "\u5F62\u72B6\u7ED3\u5408" }) }) }) }), cD = (e) => k("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "currentColor", ...e, children: k("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: k("path", { d: "M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M17.8208296,8.47361939 C17.4303054,8.08309511 16.7971404,8.0830951 16.4066161,8.47361939 L16.4066161,8.47361939 L10.5225543,14.3567573 L7.46335938,11.2980644 C7.0728351,10.9075401 6.4396701,10.9075401 6.04914582,11.2980644 C5.65862154,11.6885886 5.65862154,12.3217536 6.04914582,12.7122779 L6.04914582,12.7122779 L9.70849606,16.3731317 C9.73796516,16.4130775 9.7707841,16.4513275 9.8069528,16.4874962 C10.0839034,16.7644469 10.4828857,16.8449906 10.8306403,16.7295676 C10.9783976,16.6827085 11.117419,16.6006907 11.2345955,16.4835141 C11.2619665,16.4561432 11.2874191,16.4275803 11.3109532,16.3979927 L11.3109532,16.3979927 L17.8208296,9.88783296 C18.2113539,9.49730866 18.2113539,8.86414367 17.8208296,8.47361939 Z", fill: "#18C460", fillRule: "nonzero" }) }) }), fD = (e) => k("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", ...e, xmlns: "http://www.w3.org/2000/svg", children: K("g", { fill: "none", fillRule: "evenodd", children: [k("path", { d: "M0 0h16v16H0z" }), K("g", { stroke: "#37F", strokeWidth: "1.3", children: [k("path", { d: "M4.636 5.85a.97.97 0 00.76-.373L7.71 2.558a1.524 1.524 0 011.943-.352c.625.362.88 1.165.583 1.844l-.706 1.8h3.274c.289 0 .563.131.75.36.187.23.269.533.223.83l-.847 5.47c-.116.747-.733 1.295-1.458 1.295H2.985c-.544 0-.985-.46-.985-1.026V6.876c0-.567.44-1.026.985-1.026h1.651z" }), k("path", { strokeLinecap: "round", d: "M4.548 6.116v3.92" })] })] }) }), pD = (e) => K("svg", { width: "16", height: "16", viewBox: "0 0 16 16", ...e, children: [K("defs", { children: [K("linearGradient", { x1: ".116%", y1: "-9.589%", x2: "99.884%", y2: "100%", id: "prefix__c", children: [k("stop", { stopColor: "#62AFFF", offset: "0%" }), k("stop", { stopColor: "#37F", offset: "100%" })] }), K("filter", { x: "-26.7%", y: "-19.1%", width: "153.5%", height: "153.4%", filterUnits: "objectBoundingBox", id: "prefix__a", children: [k("feOffset", { dy: "1", in: "SourceAlpha", result: "shadowOffsetOuter1" }), k("feGaussianBlur", { stdDeviation: "1", in: "shadowOffsetOuter1", result: "shadowBlurOuter1" }), k("feColorMatrix", { values: "0 0 0 0 0.2 0 0 0 0 0.466666667 0 0 0 0 1 0 0 0 0.223448427 0", in: "shadowBlurOuter1" })] }), k("path", { d: "M6.214 1.14A2.174 2.174 0 018.979.644c.915.53 1.281 1.688.863 2.645l-.358.911h2.321c.431 0 .841.175 1.145.48l.108.12c.305.373.436.862.362 1.34l-.847 5.47c-.164 1.06-1.05 1.846-2.1 1.846H1.985c-.91 0-1.635-.756-1.635-1.676V5.876c0-.92.726-1.676 1.635-1.676l.871-.001.042 4.843.008.096a.65.65 0 001.292-.108l-.047-5.292z", id: "prefix__b" })] }), K("g", { fill: "none", fillRule: "evenodd", children: [k("path", { d: "M0 0h16v16H0z" }), K("g", { transform: "translate(1 1)", fillRule: "nonzero", children: [k("use", { fill: "#000", filter: "url(#prefix__a)", xlinkHref: "#prefix__b" }), k("use", { fill: "url(#prefix__c)", xlinkHref: "#prefix__b" })] })] })] }), dD = (e) => k("svg", { width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: K("g", { transform: "translate(1.5 2)", fill: "none", fillRule: "evenodd", children: [k("path", { d: "M1.5 0h10A1.5 1.5 0 0113 1.5v7a1.5 1.5 0 01-1.5 1.5H4.055a1.5 1.5 0 00-.976.361L1.75 11.5A1.06 1.06 0 010 10.695V1.5A1.5 1.5 0 011.5 0z", stroke: "#37F", strokeWidth: "1.3" }), k("path", { stroke: "#37F", strokeWidth: "1.3", strokeLinecap: "round", d: "M6.5 2.5v3" }), k("rect", { fill: "#37F", x: "5.85", y: "6.7", width: "1.3", height: "1.3", rx: ".65" })] }) }), hD = (e) => {
  const r = Date.now(), i = `defaultAvatarSvg-1-${r}`, o = `defaultAvatarSvg-2-${r}`, a = `defaultAvatarSvg-3-${r}`, u = `defaultAvatarSvg-4-${r}`, c = `defaultAvatarSvg-5-${r}`, f = `defaultAvatarSvg-6-${r}`, h = `defaultAvatarSvg-7-${r}`, m = `defaultAvatarSvg-8-${r}`;
  return K("svg", { width: "300px", height: "300px", viewBox: "0 0 300 300", ...e, children: [K("defs", { children: [k("circle", { id: i, cx: "150", cy: "150", r: "150" }), K("linearGradient", { x1: "19.748949%", y1: "70.7559719%", x2: "55.0379008%", y2: "38.4641084%", id: o, children: [k("stop", { stopColor: "#EBF4FF", offset: "0%" }), k("stop", { stopColor: "#FFFFFF", offset: "100%" })] }), k("path", { d: "M104.322581,0 L104.322581,21.545592 C104.322581,34.3589612 96.1845581,45.7579106 84.065777,49.9193497 L47.0901972,62.616305 C25.8561129,69.907826 9.00528596,86.3284946 1.16723418,107.366973 L0,110.5 L0,110.5 L294,110.5 L290.084316,102.415178 C281.321845,84.3230585 265.663236,70.505859 246.621225,64.0632274 L204.643335,49.8605217 C192.458581,45.7379591 184.258065,34.306246 184.258065,21.4429747 L184.258065,4 L184.258065,4 L104.322581,0 Z", id: a }), K("linearGradient", { x1: "24.8841558%", y1: "33.8555307%", x2: "11.2430637%", y2: "61.0927911%", id: u, children: [k("stop", { stopColor: "#BEDDFF", offset: "0%" }), k("stop", { stopColor: "#F6FAFF", offset: "100%" })] }), k("path", { d: "M71.25,184.5 C110.600288,184.5 142.5,121.946408 142.5,72.75 C142.5,33.3998819 110.600288,0 71.25,0 C31.8997116,0 0,33.4009672 0,72.75 C0,121.5 31.8997116,184.5 71.25,184.5 Z", id: c }), K("linearGradient", { x1: "40.4319189%", y1: "52.5824918%", x2: "57.9817527%", y2: "41.6570884%", id: f, children: [k("stop", { stopColor: "#FFFFFF", offset: "0%" }), k("stop", { stopColor: "#F0F7FF", offset: "100%" })] }), k("path", { d: "M142.5,75.75 C142.5,55.1072329 141.476869,38.2592791 129,24 C118.5,12 97.5,0 71.25,0 C52.4417348,0 27,9 15,22.5 C2.43421406,36.6365092 0,55.2086693 0,75.75 C0,106.25 5.5,119.5 16.5,115.5 C17.5,77.5 26.25,59.25 42.75,60.75 C67.5,63 78.4109931,63.4243862 99.75,58.5 C112.75,55.5 121.5,72.5 126,109.5 C137,115.588052 142.5,104.338052 142.5,75.75 Z", id: h }), K("radialGradient", { cx: "63.7539219%", cy: "14.2222298%", fx: "63.7539219%", fy: "14.2222298%", r: "22.0279816%", gradientTransform: "translate(0.637539,0.142222),scale(0.965843,1.000000),rotate(112.984437),scale(1.000000,2.030742),translate(-0.637539,-0.142222)", id: m, children: [k("stop", { stopColor: "#F0F7FF", offset: "0%" }), k("stop", { stopColor: "#D1E8FF", offset: "100%" })] })] }), k("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: K("g", { children: [K("g", { children: [K("g", { children: [k("mask", { fill: "white", children: k("use", { xlinkHref: `#${i}` }) }), k("use", { fill: "#87BFFF", fillRule: "nonzero", xlinkHref: `#${i}` }), k("g", { mask: "url(#mask-2)", children: K("g", { transform: "translate(7.500000, 201.500000)", children: [k("mask", { fill: "white", children: k("use", { xlinkHref: `#${a}` }) }), k("use", { stroke: "none", fill: `url(#${o})`, fillRule: "nonzero", xlinkHref: `#${a}` }), k("path", { d: "M104.322581,0 L181.45976,3.86170826 C170.943945,29.55123 155.751861,45.3707911 135.883508,51.3203915 C112.735685,58.2520326 84.759191,61.4608231 51.9540254,60.946763 L84.065777,49.9193497 C96.1845581,45.7579106 104.322581,34.3589612 104.322581,21.545592 L104.322581,21.545592 L104.322581,0 Z", stroke: "none", fill: `url(#${u})`, fillRule: "evenodd", opacity: "0.3" })] }) })] }), K("g", { transform: "translate(81.000000, 40.500000)", children: [K("g", { transform: "translate(0.000000, 3.000000)", children: [k("mask", { fill: "white", children: k("use", { xlinkHref: `#${c}` }) }), k("use", { fill: "#FFFFFF", fillRule: "nonzero", xlinkHref: `#${c}` }), k("path", { d: "M81,43.5 C76.5,63.5 73.25,78.25 71.25,87.75 C66.225132,111.618123 57.2150238,119.123726 58.5,132 C58.7182354,134.186856 71.25,132.386771 71.25,135 C71.25,153 69.056338,151.133803 69,165 C68.9624413,174.244131 71.8579812,184.244131 77.6866197,195 L16.9014085,159.366197 L4.75352113,75.9507042 L40.3873239,37.5 L81,43.5 Z", fill: `url(#${f})`, fillRule: "nonzero", opacity: "0.7", mask: "url(#mask-8)" })] }), k("mask", { fill: "white", children: k("use", { xlinkHref: `#${h}` }) }), k("use", { fill: "#D1E8FF", fillRule: "nonzero", xlinkHref: `#${h}` }), k("path", { d: "M139.894985,60.9022713 C139.894985,25.4556603 115.759837,6.45874042 81.2902308,2.22023641 C54.9088543,-1.02371046 41.2246469,6.88566282 40.5044254,22.0103132 C40.1618232,29.2049597 59.7835112,48.0037951 74.3548334,45.7776209 C108.925463,40.495997 126.930999,57.5455921 128.371442,96.9264062 C136.053804,100.363287 139.894985,88.3552424 139.894985,60.9022713 Z", fill: `url(#${m})`, fillRule: "nonzero", opacity: "0.5", mask: "url(#mask-11)" })] }), k("path", { d: "M98.25,149.25 C96.75,142.5 87.0640023,138.75 84,139.5 C80.9359977,140.25 75.3699392,144.586957 80.7125688,159.847826 C84.2743219,170.021739 89.8701323,176.23913 97.5,178.5 C99,163.5 99.25,153.75 98.25,149.25 Z", fill: "#FFFFFF", fillRule: "nonzero" })] }), k("path", { d: "M226.309813,148.5 C219.809813,141.5 215.059813,138.578094 212.059813,139.734282 C207.559813,141.468565 203.429752,144.821239 208.772382,160.082108 C212.334135,170.256021 217.929945,176.473413 225.559813,178.734282 L226.309813,148.5 Z", fill: "#FFFFFF", fillRule: "nonzero", transform: "translate(216.279906, 159.111360) scale(-1, 1) translate(-216.279906, -159.111360) " })] }) })] });
}, mD = (e) => k("svg", { width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "currentColor", ...e, children: k("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: k("path", { d: "M4.875,10.5 C5.91053391,10.5 6.75,11.3394661 6.75,12.375 C6.75,13.4105339 5.91053391,14.25 4.875,14.25 C3.83946609,14.25 3,13.4105339 3,12.375 C3,11.3394661 3.83946609,10.5 4.875,10.5 Z M12.0214609,10.5 C13.0569948,10.5 13.8964609,11.3394661 13.8964609,12.375 C13.8964609,13.4105339 13.0569948,14.25 12.0214609,14.25 C10.985927,14.25 10.1464609,13.4105339 10.1464609,12.375 C10.1464609,11.3394661 10.985927,10.5 12.0214609,10.5 Z M19.1679218,10.5 C20.2034558,10.5 21.0429218,11.3394661 21.0429218,12.375 C21.0429218,13.4105339 20.2034558,14.25 19.1679218,14.25 C18.1323879,14.25 17.2929218,13.4105339 17.2929218,12.375 C17.2929218,11.3394661 18.1323879,10.5 19.1679218,10.5 Z", fill: "currentColor" }) }) }), gD = () => k("svg", { width: "12", height: "12", viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", children: K("g", { fill: "#878D99", fillRule: "nonzero", children: [k("path", { d: "M6 0a6 6 0 110 12A6 6 0 016 0zm0 1a5 5 0 100 10A5 5 0 006 1z" }), k("path", { d: "M6 4.5a.5.5 0 01.492.41L6.5 5v4a.5.5 0 01-.992.09L5.5 9V5a.5.5 0 01.5-.5zM6 2.705a.5.5 0 01.492.41l.008.09v.213a.5.5 0 01-.992.09l-.008-.09v-.213a.5.5 0 01.5-.5z" })] }) });
ml();
var Lt = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).handleClick = function(h) {
      a.props.onClick && a.props.onClick(h);
    }, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.renderIcon = function() {
    var o = this.props.svg;
    return o ? k(o, {}) : null;
  }, i.render = function() {
    var o = On(this.props, ["className", "style", "onClick", "spin", "svg"]);
    return k("i", { className: this.className, style: this.style, onClick: this.handleClick, ...o, children: this.props.children || this.renderIcon() });
  }, rt(r, [{ key: "className", get: function() {
    var o = this.props, a = o.className, u = o.spin;
    return ue("brick-icon", "brick-hi-icon", a, { "brick-icon-spin": !!u });
  } }, { key: "style", get: function() {
    var o = this.props.spin, a = this.props.style || {};
    return typeof o == "number" && (a.animationDuration = o + "s"), Be({}, a);
  } }]), r;
}(G.exports.Component);
Lt.propTypes = { className: _.exports.string, svg: _.exports.any, spin: _.exports.oneOfType([_.exports.bool, _.exports.number]), onClick: _.exports.func }, Lt.displayName = "Icon", Lt.defaultProps = { className: "" };
const _w = { xxxs: "kel-xxxs-Tbrnc", xxs: "kel-xxs-AG71g", xs: "kel-xs-7aEr0", sm: "kel-sm-Eji31", md: "kel-md-dNeni", lg: "kel-lg-dR-32", lgx: "kel-lgx-G3zoY", xl: "kel-xl-yStVB", xxl: "kel-xxl-fSzWU", xxxl: "kel-xxxl-Ghazk", xxxxl: "kel-xxxxl-jZ26R", lgpromax: "kel-lgpromax-5eFnF", auto: "kel-auto-PY9zJ", noSpace: "kel-noSpace-wxmPz" };
var Ga = ((e) => (e.XXXS = "xxxs", e.XXS = "xxs", e.XS = "xs", e.SM = "sm", e.MD = "md", e.LG = "lg", e.LGX = "lgx", e.XL = "xl", e.XXL = "xxl", e.XXXL = "xxxl", e.XXXXL = "xxxxl", e.LG_PROMAX = "lgpromax", e.Auto = "auto", e))(Ga || {});
function mi(e) {
  const { children: r, size: i = "md", noSpace: o = !1, className: a, ...u } = e, c = _w[i], f = ue(a, c, o && _w.noSpace);
  return k(Lt, { className: f, ...u, children: r });
}
ml();
var mr = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).state = { asyncLoading: !1, showLoading: !!a.props.loading }, a.showLoadingHandler = hE(function() {
      a.setState({ showLoading: !0 });
    }, a.getLoadingDelay()), a.handleClick = function(h) {
      var m = a.props, v = m.disabled, y = m.loading, b = m.onClick, E = a.state.asyncLoading;
      if (!(v || y || E) && typeof b == "function") {
        var A = b(h);
        a.isUncontrolledLoading && A instanceof dE && (a.setAsyncLoading(!0), a.showLoadingHandler(), A.finally(function() {
          a.setAsyncLoading(!1), a.setShowLoading(!1);
        }));
      }
    }, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.getLoadingDelay = function(o) {
    return o === void 0 && (o = this.props), Jo(o.loadingDelay, o.loadingDelayInMS);
  }, i.setAsyncLoading = function(o) {
    this.setState({ asyncLoading: o });
  }, i.setShowLoading = function(o) {
    this.showLoadingHandler.clear(), this.setState({ showLoading: o });
  }, i.renderLoadingIcon = function() {
    return this.state.showLoading ? k("span", { className: "brick-button-loading-icon", children: k(Lt, { svg: this.loadingIcon, spin: 1 }) }) : null;
  }, i.renderButtonIcon = function() {
    var o = this.props.icon;
    return o ? k(Lt, { svg: o }) : null;
  }, i.renderIcon = function() {
    return K(Gt, { children: [this.renderLoadingIcon(), this.loadingType !== "icon-only" && this.state.showLoading ? null : this.renderButtonIcon()] });
  }, i.renderContent = function() {
    var o = this.props.children;
    return o ? k("span", { className: "brick-button-content", children: o }) : null;
  }, i.renderInnerContent = function() {
    return K("span", { className: "brick-button-inner", children: [this.renderIcon(), this.renderContent()] });
  }, i.componentWillUnmount = function() {
    this.showLoadingHandler.clear();
  }, i.componentDidUpdate = function(o, a) {
    var u = this.props.loading, c = this.getLoadingDelay(this.props);
    c !== this.getLoadingDelay(o) && this.showLoadingHandler.updateDelayTime(c), this.isUncontrolledLoading || this.state.showLoading === u || (u ? this.showLoadingHandler() : this.setShowLoading(u));
  }, i.render = function() {
    var o = this.props.href, a = this.renderInnerContent();
    return o !== void 0 ? k("a", { ...this.anchorProps, children: a }) : k("button", { ...this.buttonProps, children: a });
  }, rt(r, [{ key: "className", get: function() {
    var o, a = this.props, u = a.className, c = a.type, f = a.disabled, h = a.block, m = this.shape, v = this.color, y = this.size, b = this.loadingType;
    return ue("brick-button", u, ((o = {})["brick-button-size-" + y] = y, o["brick-button-shape-" + m] = m, o["brick-button-type-" + c] = c, o["brick-button-loading-type-" + b] = b, o["brick-button-color-" + v] = v, o["brick-button-disabled"] = f, o["brick-button-icon-only"] = this.isIconOnly, o["brick-button-content-icon-only"] = this.isContentIconOnly, o["brick-button-loading"] = this.state.showLoading, o["brick-button-block"] = h, o));
  } }, { key: "size", get: function() {
    if (this.props.size !== void 0)
      return this.props.size;
    var o = this.context.theme;
    return o && o.defaultSize ? o.defaultSize : "sm";
  } }, { key: "shape", get: function() {
    return $r(this, "shape", "buttonDefaultShape");
  } }, { key: "loadingIcon", get: function() {
    return $r(this, "loadingIcon", "buttonLoadingIcon") || function() {
      return k(T8, { className: "brick-common-loading-icon" });
    };
  } }, { key: "loadingType", get: function() {
    return $r(this, "loadingType", "buttonLoadingType");
  } }, { key: "color", get: function() {
    var o, a = this.props, u = a.color, c = a.type;
    return u && u !== "normal" ? u : this.isIconOnly && c === "plain" ? "normal" : c && St(o = r.noNormalTypeList).call(o, c) ? "primary" : "normal";
  } }, { key: "isIconOnly", get: function() {
    var o = this.props, a = o.children;
    return !(!o.icon || a);
  } }, { key: "isContentIconOnly", get: function() {
    var o = this.props.children;
    return o && G.exports.isValidElement(o) && o.type === Lt;
  } }, { key: "buttonProps", get: function() {
    return Be({}, On(this.props, ["className", "onClick", "target", "href", "size", "type", "color", "icon", "loading", "loadingType", "loadingIcon", "loadingDelay", "loadingDelayInMS", "refHTMLElement"]), { ref: this.props.refHTMLElement, className: this.className, onClick: this.handleClick });
  } }, { key: "anchorProps", get: function() {
    return Be({}, this.buttonProps, { ref: this.props.refHTMLElement, href: this.href, target: this.props.target });
  } }, { key: "href", get: function() {
    var o = this.props, a = o.href, u = o.disabled;
    if (a && !u)
      return a;
  } }, { key: "isUncontrolledLoading", get: function() {
    return typeof this.props.loading != "boolean";
  } }]), r;
}(hl);
mr.displayName = "Button", mr.propTypes = { loadingDelayInMS: dr("0.1.100", "use `loadingDelay` instead") }, mr.defaultProps = { className: "", color: "normal", disabled: !1, loadingDelay: 300, type: "normal" }, mr.noNormalTypeList = ["intensive", "important", "translucent", "ghost"];
var Rw = jR, DE = function(e) {
  return e.show ? k(mr, { className: "brick-toast-close-icon", onClick: e.onClose, icon: E8, type: "plain" }) : null;
};
DE.propTypes = { show: _.exports.bool, onClose: _.exports.func };
var Ah = function(e) {
  var r = function(c, f) {
    return f === void 0 && (f = !1), typeof c != "number" ? 1500 : c <= 0 ? 0 : Math.max(f ? 3e3 : 1500, c);
  }(Jo(e.duration, e.durationInMS), e.manualClose), i = function() {
    Se(e.onClose), o.clear();
  }, o = hE(function() {
    i();
  }, r), a = function() {
    r && o();
  };
  G.exports.useEffect(function() {
    return a(), o.clear;
  }, []);
  var u = ue("brick-toast", { "brick-toast-with-close-x": e.manualClose }, e.className);
  return k("div", { onMouseEnter: function() {
    o.clear();
  }, onMouseLeave: function() {
    a();
  }, className: u, children: K("div", { className: "brick-toast-inner", children: [e.content, k(DE, { show: e.manualClose, onClose: i })] }) });
};
Ah.defaultProps = { duration: 1500, manualClose: !1 }, Ah.propTypes = { manualClose: _.exports.bool, onClose: _.exports.func, duration: _.exports.number, content: _.exports.node, className: _.exports.string, durationInMS: dr("0.2", "use `duration` instead") };
var vD = { exports: {} }, yD = ce, bD = Nr.findIndex, Dw = "findIndex", jw = !0;
Dw in [] && Array(1)[Dw](function() {
  jw = !1;
}), yD({ target: "Array", proto: !0, forced: jw }, { findIndex: function(e) {
  return bD(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
var wD = vt("Array").findIndex, kD = nt, xD = wD, gd = Array.prototype;
const ED = Ne(vD.exports = function(e) {
  var r = e.findIndex;
  return e === gd || kD(gd, e) && r === gd.findIndex ? xD : r;
});
var Hw, SD = ["id", "onClose"], nu = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).refToaster = G.exports.createRef(), a.state = { toastList: [] }, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.add = function(o) {
    var a = this;
    this.setState(function(u) {
      var c = u.toastList, f = ED(c).call(c, function(h) {
        return h.id === o.id;
      });
      return f > -1 ? (mm(c).call(c, f, 1, o), { toastList: c }) : { toastList: $e(c).call(c, o) };
    }, function() {
      var u, c, f = a.refToaster.current;
      a.state.toastList.length && f && (c = (u = f).style.display, u.style.display = "none", u.offsetHeight, u.style.display = c);
    });
  }, i.remove = function(o) {
    this.setState(function(a) {
      var u;
      return { toastList: pl(u = a.toastList).call(u, function(c) {
        return c.id !== o;
      }) };
    });
  }, i.renderToast = function(o) {
    var a = this, u = o.id, c = o.onClose, f = _E(o, SD);
    return k(Ah, { onClose: function() {
      a.remove(u), Se(c);
    }, ...f }, u);
  }, i.render = function() {
    var o = this, a = this.state.toastList;
    return k("div", { className: this.className, ref: this.refToaster, children: za(a).call(a, function(u) {
      return o.renderToast(u);
    }) });
  }, rt(r, [{ key: "className", get: function() {
    var o = this.props.className;
    return ue("brick-toaster", o);
  } }]), r;
}(G.exports.Component);
function Fw(e) {
  return Hw = Hw || function(r, i) {
    r === void 0 && (r = {}), i === void 0 && (i = nu);
    var o = document.createElement("div");
    o.className = "brick-toaster-container";
    var a = G.exports.createRef();
    return document.body.appendChild(o), La.exports.render(k(i, { ref: a, ...r }), o), { toast: function(u) {
      function c(f) {
        return u.apply(this, arguments);
      }
      return c.toString = function() {
        return u.toString();
      }, c;
    }(function(u) {
      a.current && a.current.add(u);
    }), remove: function(u) {
      a.current && a.current.remove(u);
    }, destroy: function() {
      La.exports.unmountComponentAtNode(o), document.body.removeChild(o);
    } };
  }(e);
}
nu.propTypes = { className: _.exports.string }, nu.displayName = "Toaster", nu.defaultProps = { className: "" };
var CD = 0, TD = +new Date();
function Nh(e) {
  var r;
  typeof e == "string" || typeof e == "number" || G.exports.isValidElement(e) ? r = e : r = e.content || "";
  var i = pi(e, { content: r }), o = i.id, a = o === void 0 ? "TOAST_OBJ_" + TD + "_" + CD++ : o;
  return r && Fw().toast(Be({ id: a }, i)), { id: a, remove: function() {
    return function(u) {
      u && Fw().remove(u);
    }(a);
  } };
}
var Bw = {};
zn(Rw).call(Rw, function(e) {
  Bw[e] = function(r, i, o) {
    var a, u, c, f = { type: e };
    return i && typeof i == "string" || typeof i == "number" || G.exports.isValidElement(i) ? (a = r, u = i, c = o) : (u = r, c = i), pi(f, { headline: a, content: u }, c), Nh(f);
  };
}), pi(Nh, Bw);
var AD = Nh, ru = ((e) => (e.Info = "info", e.Normal = "normal", e.Success = "success", e.Warning = "warning", e.Error = "error", e))(ru || {});
const Us = {};
function vd(e) {
  const { svg: r, content: i } = e;
  return K("div", { className: "ku-toast-custom-content", children: [k(mi, { svg: r, size: Ga.LG }), i] });
}
async function yd(e) {
  const { content: r, manualClose: i, duration: o, type: a, icon: u, onClose: c, id: f, className: h } = e;
  let m = r;
  a === "success" ? m = k(vd, { content: r, svg: cD }) : a === "error" && (m = k(vd, { content: r, svg: uD })), u && (m = k(vd, { content: r, svg: u }));
  const v = await { content: m, manualClose: !!i, onClose: c, className: h };
  (o || o === 0) && (v.duration = o), a && a !== "normal" && (v.id = f || a, Object.keys(Us).forEach((b) => {
    var E;
    if (b !== a) {
      const A = b;
      (E = Us[A]) == null || E.remove(), delete Us[A];
    }
  }));
  const y = AD(v);
  return a && a !== "normal" && (Us[a] = y), y;
}
var ND = function(e) {
  return k("svg", { width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", ...e, children: k("path", { d: "M12.146 5.146a.5.5 0 01.708.708L7.157 11.55a.5.5 0 01-.707 0L3.146 8.247a.5.5 0 11.708-.708l2.95 2.95 5.342-5.343z", fillRule: "nonzero" }) });
}, PD = function(e) {
  return k("svg", { width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "currentColor", ...e, children: k("path", { d: "M4 8.5a.5.5 0 010-1h8a.5.5 0 110 1H4z", fillRule: "nonzero" }) });
}, ei = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).state = { checked: oe(a.props.checked) ? a.props.defaultChecked : a.props.checked }, a.context = void 0, a.elemCheckbox = G.exports.createRef(), a.handleChange = function(h) {
      var m = a.props, v = m.onChange, y = m.data, b = h.target.checked;
      oe(a.props.checked) && a.setState({ checked: h.target.checked }), Se(v, h, b, y);
    }, a;
  }
  qe(r, e), r.getDerivedStateFromProps = function(o) {
    return Si(o, ["checked"]);
  };
  var i = r.prototype;
  return i.updateIndeterminate = function() {
    this.props.mode === "checkbox" && this.elemCheckbox.current && (this.elemCheckbox.current.indeterminate = !!this.isIndeterminate);
  }, i.renderMarkInner = function() {
    return this.isRadio ? null : this.isIndeterminate ? k(Lt, { svg: this.markIndeterminate }) : this.isChecked || this.props.type === "intensive" ? k(Lt, { svg: this.markChecked }) : null;
  }, i.renderCheckbox = function() {
    var o = this.state.checked, a = Un(this.props, ["disabled", "onClick"]);
    return K("div", { className: this.baseClass + "-wrap", children: [k("input", { className: this.baseClass + "-input", onChange: this.handleChange, type: this.props.mode, checked: o, ...a }), k("div", { className: this.baseClass + "-mark", children: k("div", { className: this.baseClass + "-mark-inner", children: this.renderMarkInner() }) })] });
  }, i.renderLabel = function() {
    var o = this.props.children;
    if (!o)
      return null;
    var a = { className: this.baseClass + "-label", title: typeof o == "string" ? o : "" };
    return k("span", { ...a, children: o });
  }, i.componentDidMount = function() {
    this.updateIndeterminate();
  }, i.componentDidUpdate = function(o, a, u) {
    this.updateIndeterminate();
  }, i.render = function() {
    var o = On(this.props, ["className", "mode", "type", "size", "checked", "defaultChecked", "disabled", "indeterminate", "onClick", "onChange", "data"]);
    return K("label", { className: this.className, ...o, children: [this.renderCheckbox(), this.renderLabel()] });
  }, rt(r, [{ key: "baseClass", get: function() {
    return "brick-" + this.props.mode;
  } }, { key: "className", get: function() {
    var o, a = this.props, u = a.className, c = a.disabled, f = a.type, h = this.state.checked, m = this.size, v = this.baseClass;
    return ue("" + this.baseClass, u, ((o = {})[v + "-disabled"] = c, o[v + "-indeterminate"] = this.isIndeterminate, o[v + "-checked"] = h, o[v + "-size-" + m] = m, o[v + "-type-" + f] = f, o));
  } }, { key: "size", get: function() {
    return this.getDefaultValueUsingTheme("size", "defaultSize");
  } }, { key: "markChecked", get: function() {
    return this.getThemeValue("checkboxMarkChecked") || ND;
  } }, { key: "markIndeterminate", get: function() {
    return this.getThemeValue("checkboxMarkIndeterminate") || PD;
  } }, { key: "isRadio", get: function() {
    return this.props.mode === "radio";
  } }, { key: "isChecked", get: function() {
    return this.state.checked;
  } }, { key: "isIndeterminate", get: function() {
    return !this.isRadio && !this.isChecked && this.props.indeterminate;
  } }]), r;
}(hl);
function OD(e) {
  return k(ei, { ...e, mode: "checkbox" });
}
ei.displayName = "GenericCheckbox", ei.Self = void 0, ei.defaultProps = { className: "", mode: "checkbox", type: "normal", defaultChecked: !1, disabled: !1, indeterminate: !1 }, ei.contextType = dl;
var ou = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).state = { value: oe(a.props.value) ? a.props.defaultValue : a.props.value }, a.checkboxChangeHandler = function(h, m, v) {
      var y = m ? a.check(v) : a.uncheck(v);
      oe(a.props.value) && a.setState({ value: y }), Se(a.props.onChange, y);
    }, a;
  }
  qe(r, e), r.getDerivedStateFromProps = function(o) {
    return Si(o, ["value"]);
  };
  var i = r.prototype;
  return i.check = function(o) {
    var a = this.value, u = this.isRadio ? [] : Fa(a).call(a);
    return u.push(o.value), Se(this.props.onCheck, o, u, a), u;
  }, i.uncheck = function(o) {
    var a = this.value, u = Fa(a).call(a), c = Bx(a).call(a, o.value);
    return c > -1 && mm(u).call(u, c, 1), Se(this.props.onUncheck, o, u, a), u;
  }, i.renderOptions = function() {
    var o = this, a = this.normalizedOptions, u = this.value;
    return a.length ? za(a).call(a, function(c) {
      var f = o.props.mode, h = c.value, m = c.label, v = St(u).call(u, h), y = oe(c.disabled) ? o.props.disabled : c.disabled;
      return k(ei, { size: o.props.size, type: o.props.type, mode: f, disabled: y, checked: v, data: c, onChange: o.checkboxChangeHandler, children: m }, h);
    }) : null;
  }, i.render = function() {
    return k("div", { className: this.className, children: this.renderOptions() });
  }, rt(r, [{ key: "className", get: function() {
    var o, a = this.props, u = a.className, c = a.mode, f = a.layout;
    return ue("brick-" + c + "-group", ((o = {})["brick-" + c + "-group-layout-" + f] = f, o), u);
  } }, { key: "normalizedOptions", get: function() {
    var o, a = this.props.options;
    return za(o = a === void 0 ? [] : a).call(o, function(u) {
      return typeof (c = u) == "string" || !Wt(c) && nn(c) && Gn(c) == "[object String]" || function(f) {
        return typeof f == "number" || nn(f) && Gn(f) == "[object Number]";
      }(u) ? { value: u, label: "" + u } : Be({}, u);
      var c;
    });
  } }, { key: "value", get: function() {
    return this.state.value || [];
  } }, { key: "isRadio", get: function() {
    return this.props.mode === "radio";
  } }]), r;
}(G.exports.Component);
function LD(e) {
  return k(ou, { ...e, mode: "checkbox" });
}
ou.propTypes = { className: _.exports.string, mode: _.exports.oneOf(["checkbox", "radio"]), value: _.exports.arrayOf(_.exports.oneOfType([_.exports.string, _.exports.number])), defaultValue: _.exports.arrayOf(_.exports.oneOfType([_.exports.string, _.exports.number])), disabled: _.exports.bool, layout: _.exports.oneOf(["horizontal", "vertical"]), options: _.exports.any, onCheck: _.exports.func, onUncheck: _.exports.func, onChange: _.exports.oneOfType([_.exports.func, _.exports.func]) }, ou.displayName = "GenericCheckboxGroup", ou.defaultProps = { className: "", type: "normal", mode: "checkbox", layout: "horizontal", defaultValue: [], options: [] };
const MD = "kel-popper-P3Q20", ID = "kel-trigger-3IEu7", _D = "kel-dialog-WPZyy", RD = "kel-title-3BgFH", DD = "kel-body-iuboC", jD = "kel-textarea-Jemym", HD = "kel-footer-xkFgv", FD = "kel-cancelBtn-EPMUL", BD = "kel-commitBtn--ydDP", zD = ["\u5361\u7247\u5C55\u793A\u5185\u5BB9\u8F83\u5DEE", "\u5361\u7247\u89E6\u53D1\u9519\u8BEF", "\u5176\u5B83\u95EE\u9898"].map((e) => ({ value: e, label: e })), UD = ({ children: e, onCommit: r }) => {
  const i = G.exports.useRef(null), [o, a] = G.exports.useState(!1), u = G.exports.useCallback(() => {
    a(!1);
  }, []), c = G.exports.useCallback(() => {
    a(!o);
  }, [o]), [f, h] = G.exports.useState([]), [m, v] = G.exports.useState("");
  G.exports.useEffect(() => {
    o && v("");
  }, [o]);
  const y = G.exports.useCallback((E) => {
    v(E.target.value.trim());
  }, []), b = G.exports.useCallback(() => {
    r({ reason: f, inputReason: m }), u();
  }, [f, u, r, m]);
  return K(Gt, { children: [k("div", { className: ID, ref: i, onClick: c, children: e }), k(RE, { withArrow: !0, disablePortal: !0, visible: o, className: MD, placement: "top-start", target: i.current, children: K("div", { className: _D, children: [k("div", { className: RD, children: "\u9047\u5230\u4EC0\u4E48\u95EE\u9898\u4E86\u5462\uFF1F" }), k(LD, { size: "sm", layout: "vertical", value: f, options: zD, onChange: (E) => {
    h(E);
  } }), k("div", { className: DD, children: k("textarea", { className: jD, onChange: y, maxLength: 15, placeholder: "\u63CF\u8FF0\u4E0B\u60A8\u7684\u95EE\u9898\u5427" }) }), K("div", { className: HD, children: [k("button", { className: FD, onClick: u, children: "\u53D6\u6D88" }), k("button", { className: BD, disabled: f.length === 0 && !m, onClick: b, children: "\u63D0\u4EA4" })] })] }) })] });
};
ml();
var Pa = function(e) {
  function r() {
    return e.apply(this, arguments) || this;
  }
  return qe(r, e), r.prototype.render = function() {
    var i = this.props, o = i.src, a = i.alt, u = i.children, c = i.style, f = i.onClick;
    return k("div", { onClick: f, className: this.className, style: c, children: o ? k("img", { src: o, alt: a }) : k("span", { className: "brick-hi-avatar-text", children: u }) });
  }, rt(r, [{ key: "className", get: function() {
    var i, o = this.props, a = o.className, u = o.size;
    return ue("brick-hi-avatar", ((i = {})["brick-hi-avatar-" + u] = u, i), a);
  } }]), r;
}(G.exports.Component);
Pa.propTypes = { className: _.exports.string, defaultAvatar: _.exports.string, size: _.exports.oneOf(["xs", "sm", "md", "lg", "xl"]), src: _.exports.string, alt: _.exports.string, onClick: _.exports.func }, Pa.displayName = "Avatar", Pa.defaultProps = { className: "", size: "md", alt: "\u5934\u50CF", src: "" };
const $t = { container: "kel-container-mbcgg", img: "kel-img-fc7tk", xs: "kel-xs-C0hVJ", square: "kel-square-m5j3Y", sm: "kel-sm-vndYE", md: "kel-md-Wi6PR", lg: "kel-lg-2pDO4", xl: "kel-xl-dRkX4", errorAvatar: "kel-errorAvatar-hpmYf" }, GD = ["#f4c327", "#71d381", "#389af2", "#bd6de2", "#f79f57", "#f96e75", "#6ec7cc", "#737ee0", "#b4d344", "#9eb6d8"];
var jE = ((e) => (e.XS = "xs", e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e))(jE || {});
const HE = (e) => {
  const { children: r, userGuid: i, spaceGuid: o, groupGuid: a, repositoryGuid: u, repositoryTemplateId: c, uploadTime: f, className: h, size: m, src: v, gid: y, defaultText: b, emailGroup: E = !1, ...A } = e, [S, H] = G.exports.useState(!1), D = A, L = !i && o && a;
  if (E)
    return k("div", { className: ue($t.container, $t[m], h), children: k("img", { className: $t.img, src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAAhXUlEQVR4Ad2dbaylV1mG1z5zZlrKTIu0JqKg/KgZlAD+KSZKSGgMCjGFSLASJKgloGhA/GEJfhF/EGqMglEMJoINipTGhBaF8pGixGIs/imEhNGiJDZKsAXaKe2087G9r3s999pr756ZnmmnQzsr877rWc9zP59rvet998fZs2iP0/ZLNywP3HdfO7g8oWO7Hdxq7WDbak/fWrYDJ1o7sGerHViKrvAPnzjeDi9bO6zxYfHvOHGiHTquQ/hDRy9qh2582QLZ464tHi8Rvfqvlxce224v3LOnXa6gXrTYas9TbIsTqipNE9BCM1aRT9pmGfSxY2157MF2myblMzJ084X72mf/5ucX95zUwFkUfEcn4JUfXl60daK9cnu7vWZr0X5ctdozcqfARKd+LvwsB5I26EFI71hrDz7Y2vHjQfWJk6/jgt0i7gfOv7Bdf/3PLu5eIc4uddYnYLlcLq78cHuJVvprVfgr2ol2flIeK1fV0TazWvU1EcgXogcuitWHr+2oPfCAbGAkE6I+pInKXLwjurpu1HHtR17XPr5YLAZsw/xjMjxrE6DVrpq3K/fuaW/Tyn72nE0KB4/VznZDo36rqjHoDTxVSvCz/pEj0tPKp838tXHpG2RBpzS5X1L533H+d7XrdFVM181AnnEiOZxxwzFYhf+F7b3trUru0mwrkVMkr2qqXdFkEuatZ7OY1p8m4riK/oCKDy5YketXjBldnsQHVjLiqHa7VsE7L7io/dVjPRErl3F9Bvuf+9vlj+09r71HiXFDdWFcbAqRsegaru/1M4YoJ5yVO8vkUW03R7XXp5iR06/xsClbgxfHpTD4NVast2ki3vgPr198rlhnvHtMJuBVH1xesrWvXbNnu/2ikvLC0uOkW5IcEzEVwSs+ERUffLBLilclAAb+gfvF02ZhfoSSWY++8CY02PSfsWGAy//EVwbt/dtb7eqPvmFxZ8ydqT7pnil77crrly87b097n3J5KkZTCCc2qrEqBIWZ2C4q4wQ2y+Yg2XIe1MrPxMZX+qEfA2JMRR1OR3xSNFSnNV70W7tLW+hVH/u1xQ1zHI+WTpyP1k57/b8t9977X171b8FYkpiTNl2FiGNW8eYzfvTnoFIH9Cj+Ea182mzfFSzDg1+K7jghj7HS75doZyeu6A+VuoL1CPvHT99uV//FGxZHpf6oW/w9KkPa65+5Z1+7bmurPX8zuZFrZZLEcBh6pwmY5RQtheCZ/sh9KK/0s0Wt6XigU2WIr4HDmFr894HPc/hRXcd1vVuftKdd+ZFfWXy1az3y86OegCs/tLxs33ntYwrhEicpwnv5FFP4zpsTXqsIwEIOXBgI1TI8oTV3v550hnoEHeZCWbbJL7ltSTYmYic9DNRqj1omaviVQDa4H7z0pl9dfD64R9LnkfuR6LLfv3jfvnazKnRJquTciZRDLcH30erMDZVmuZTSmwcfQi18nu15cUXANl+F7KDCeRBAhQBu81CB4dlJHg6iS5/41QNLs4pOxKR7zyXqbn7Jny1fHPkj6asMp6/6quuWr9q7t12rIPbqGM0FqxG0HVQi3DAZg3cvIveAGEAWPWgaevdr25n1uqSw2B/gjuuKhSqnAzOUO5ZJjTqEr2B05ia+MZxM9E5XwlFtva/VlfC3M3y39KabXelR/O197W8UyCJJud+0prH5FTCBB29HjEVsbglmlg7F4IaLHlcNLmab0IO3EX2ZGNx5AZiJTfQTZ5AbisRgzIZ8xLFoS73Kf/VNbzr9SSD202ra8198/r7293o3yyvfycdCBe5uTkIg3pexM/i15JwAusGWzCuw+A9qz+fGC3bgZx3oasjX4olA/dDFh0AeQ9NKyfqTgeiYhf9g1UcGq6+ixlPRT3/qTYtPmrfLE7Z33XzD1Z4v5/s3lUZAUzLzSs6e7+QzGRgRnoKjn0TLRDuqlHiFSxv2PehYC5CVPHrmu1pdaLmZ0hMotrgPGEZvIqCu51H46RGBR4jDalxdGt+7vWyX3/Tru78xTyZiaueeR83t89rn5fmSIEZMEFP2XsEUmWQLbDFB0jQIaUD0ASHQmFXPTdeJoVK2SN62xEsLj7H96RSexwHKNuNN/Wwx9lH+1/RKyRO2JpA94pp5y3anJuGym96yu0fUXT0F8SJLby1cJz/c+UfN7BgGGSlwEtGnUCPLrHqK6FVOsBWwn0IExVhWJdsUOEzwxlpk2McN/nx0kWnwNOuhC0ZjH9GTwVqhPVbxacbo5CIUJvbxWbABduwaES8NfYJ1LjZm3iVaO9e9/r3LvYgfru1qAg5/pf2BfD7fBZfFOcgU1MVWEAk6wZF4AqfA8NXZRiYBnvWspG1HKx/MCTFdUPFtp+QuZtG9iiqisNjwKrWDrmNDypIYMjnpBZfA/0bgKS56uLAb6Tpn7KolD/wlYdM1FOz5/3lf+wPED9eid1Kc9v2X7d3XPuJAfOrBWAFt8TwxyDSGtlH1Fa8xZpYsBRgTgC5NiiTHG2w02yqbGXeBz704FvSxybLlGDZlK1j/sIYxwIoL2rlMuOSTEO1Ug4xz9dqfmCNnTC/byz/9G6d+72jEOfkcJO9qat8/JKNPtUNOFXD6EWBkgniF0mMpfBnxGH2irN5XDjCEOvwRol500YbtRFl64YO3zWALZ1vh0evwKXLZ0bP7WrGZeGIyBIWy7QJHHz56woKL3UxCmOajozfwLrigPetU76Keegva267Ran0qnrxa6TFb3l0I8exQvGwTjNeKYACKakUjZ4sxTjT2ufHyRlvaSAwdjuogqVexTDgkMTP5EeZq6xs9FnrzNgJeQ2LwFuZBH3thTPGhZX8+iY4s/AHouWBTx8X33duuQXSyRtw7Nj5M0Yutf1YC1GGtoCi4OFSBVlbstHM6W0FQAH3DoReGoCTh2Nx+SOgBvdrNSuzZljEUQhadycHnaDbcR4NfvIjWVq98GrdhY822MKQHzj3modGFnGtQfATg6+pebu9pL/jkm3f+UGfHK8AfI+5t75ERvcbrxlJkiolzF4pgiIomnBt4ERR4sCpIj3XSd3UsjBw9Vj6TZXvCY9amC0QymPHKU5+VPduwTAzbEYZmuU6OZ4rDhR8AEckDPyihA0+9iyy6CmosGC+i6KEDHHwnTVDDY8fbe6hp2HO/4wTsOd5+QSB/jDjAMUyvw34JCoBOLg4D8SiwC2Rht5AxeqYhJMcWY31vxwmRlCcYHJDC0CczVI0DG371yJxU+KVmn0U7/vJvm8HaYfc/ii2ZV7tkYyLAqwHPJCRO7GGaZpl6yZ73jTtcU/PnU7CDx0ztW7Qvy+mlfHlmAHCqzAjCCWjoOMAIRIIGm9nNgaOlJyD2/V7Z0i95nnxIyobBCe8OOxz4Dw0LmlZYSLPCT49gatFD7CIxY3bc9eH5ahKP3NwMLp/iGTPZN1kYxy1MtifLFu32S57RnrX5If92mR+dVv+V+irgpS6ouCgTcFaBjRc6sRkrDNvSHjF1L+2K6l5/WWs/+ozWnrxP9YtC6T9eO/K4V69FPvsfrb37M5U/wVIMmvqQnnwmCnYx02dhwNaEXXrnHe1KkR/UMZqv1oz40tTWtr+30y1KMIwVCGMc8mkZxfZYETgIjWE846LW/uLlrf3Epfoi53lPnOITPo+oFz5J76w9t7UPva61Z17cc0RGbq4JSVfCkG6M1XzVhElftCbhbdTYoDqtTcCVH2wvEf/ZVpASjkB79U9j7Nk3PAzpxCUJ03utZud3XtTaU5TEE71d/OTWrvmZnmd2BXIi3WzHGbuXgLrloCYUmbGurGdf/keuMVC3tQnQ6n9tBPQuvHrpulH0NDuAgbD64N7w/HOj+MmVSXjL5X3kdHWaa4HEuVtYWqkNMguLv1yv8ZgA3Xwv0v59BZa8itXPip7B2Vjk9Frx6mpf0p7//eXsHOpe+IM9Gd9YVdxRGxLXMW7KNQYNxjjw3rPdX/ET711qg+5tTMDWsfZK4f1F2cyu+8mgxxiDp8YV4tcFosNDxA33XGv7dR+jyH5ROdXEl8JcE2QulLrqqcVEnn/s7vbK1Gc1AXvaa8LEBrMaPxTXBooBbZKVHx7M8vJEedohzd02v3ckMPk6Z+Ua2qsbQ1VN82tXMFY6YztH/8Sq1lbhjyME+PEYHEGhqINHnvHKFyG8NAzOwcyyYM6h3muM05wnY2pAnWZ+5Q0rEwGLWr/kT5YXQnsC+MsU0auXytKwnfT22h0gwNEwKBqeIVbC7LnZnLNSS+8thpx3yrt4YFOb6Knfo+83UfM+AWJcHmFmEKWq7bpDtNSML+OeEMDwq++jc/ecBxUyDF3rtBdcg9TUc6Fx5OgsTrTL6X0FaH8bE8D+PWpYswgQJzkw7NnHiWTcmGjmd/KcPJOrc3TSDCp/KgtdfPdUgDGtZPAn1osQbfHXiJqG5zI9KTACaFqM4WNu8OcrBLh58TCDz1GafF375Kx+8MjZwp68F2yx4Aj6vCuuWR7Yult/CqpK+m3nMT1dZ+08fOBkkuCQFl4cde45eCbRkaxI0ck5bGc941ApIQ8zpvU2tf5M8+CW9qKDKZMNCRhw+GMsGZPqq6EMmg4vCudqXzmTHjVJ7kk341EvA6ueJaTGHIU5uK3txxMwK4H1GIelOGY9MoOGoYGfYsT9OdVSjuRIjUad5kyrwCmdRbXyp+LzwMIfoGsCsDgfGvpqsGbJio5zhnniGdhyfKf+Jv3+k/zNVpl5wnQU+Nt6a/p/v7VaiwkemYs8V7rqON6aGOBeU09Y8UQf1J8+tWeEaYMUMY9BZYzOTQQ0/sJzX/jIjuo96m/q811w+/Xmhj8LqCcl23kCnNir79GXww7rKzJ82Wxt5RK/kvXTn2SjbvB0uBwpBlD41aPqhlw/vbAtQ/uRMt6prfGF8ytjgBiNHkHAQ64jjSepb2ki7tFxgd5LOaDJ0AfUj+vG4tGDSbtbhScV8slbK/TOkxNHjVMT8G6DEKxwg1+6dFqTB7ZlxD94kcJZoZsZytiDjxItvWkNrAtTh2fbCh2HjCvqXlaTjvP1hT0+7KB/PDW2TK5athvCTz0qFU9CakOqXNBjpwiIngaApt52xHf9GHd27/VjI9sSHHCRUIoiymoGi2e2TlxaWQ1mTg6DRSmBxq4/AyrbJHqfktynD0MvvKBvT0nWTs/iiThZFN9Q4R/QN7HJzbGIT09OtPTQlUb/hoQG2HCe4CIEqIaeWeBqHF6N+xWQF11BxShGwgsGGcrMRt6EOy6rXhFi48ABAdLBeGQQXTEf1NdQvq6fyNDPzrSLdEUc0AF9Nhp7Olsjx1HRidm+iRlGeiewloK/9ZE6FLQDUhP1Niob6cGHFuWm+8yB7RTLRRd79EBk3YooT80YyXCOPv48QcJlooA7EfXg7b90+qDrU4y7vt0Ptqan6KrQ70k8Jo1J/4Z8sb87rykH51Ixm0YGEZ7o5L1Rjl5XJ1j4Wo2pbfLt0pUd5Nv6K3N+yOhi+9KJy8jBFTp0jDkIyRxEOWUvRI4Ns2ys7IjhISdw2NUpdqKEHoVhVT5ZN+zv0kQ86Qx9sHOftr1v3Kvthv3dAfQYIBP36CeeyCEnMa54vXBda9leXTcMgkNPuKUmAppmEQMdoeXzMF9LOSzOxS50AVBI44MIv3wuBpCaYBtjHINAUlj4tCTMJDkBmKXkbhhA0Bs3wm+raOcpOibCn0bh5DQacbC/36XCH9HKT4ExEdqxCYfpcYiwK/qi6QkzcdN7HB692qihDXQeE5NdYbCx2w1oApa+AnoRu47PvsOPSotFAUtuR1hDLn4SQQ6LZl4nrZixJwhdgbnpSb0HU7w5kAd1Y/w/XZ88FnKP8Ndb4iC2N/o8v9+jq4lHymOJDz+VD65yoE5sHlfPwDfkkpFXcgQ/GkoSjtXvZDRW78UmmWtVfrNTmCdV4Q7zFMQW1JsMukAa4TBAC3FGw+jcwzIDZpeNYCcbUSc5+4AhvUwCMRI/PH5YCBvIaKwgtia2qP3alpiMzfsExaborPqEw9Wr363wFczEuD6yOeLDfyal/KG7U/EJpcIZ9iHgoeMaaODcCguNLLhhoPCCawJauwOHNqCBDVqrKzvYUrA1sBoTN81QnUplFZFk2OLkoGwYhtoGL/4p/Da4klMwx6UxbGj28XvqMXaf8PAeVPG5wc4tccPj6SpPWExEXtmWqz4hDNROVfzE0pH9PHYKxUBRPJ8Vb+oF0jgIJ6JOvezdwQQcitAOAFUzdlR2ZtZqiqwcom9bjKFR0amcrVYe/B6AeXydkZUI3jGgI9rJwNMxN2T6IT7/FWX4YNda+Z15xLHFJHNVSJ68cYZN5OnxOcZFYwu5Y4TwJVV2KtjEim1osEwqLTIPJJf9QzwFHeLT4DWhBihaj5OOFJTf5qERnHXAdpYJB21FMRFAV2+bNQZH0R1c2bBIJ/KyTZ3A0aJrfo17gBbveAIb/TLjMbT9kjeFilHwOqxXNOPYQMgVRM83wNnnhy5KyOaJQBk+WHXoBY9Idg9tqwiHEAYLzslC0MqhlaFpGAq/D83OI1kywGbo9PCyxzs2gltz3otjWalXTljriUy9mXZkqp9QrpbiBcIYMWPLME4Tg62JBgsZmDRjpciNfCxGhGUMHorUzkUuZboUHazZhRH80Lb+GPqQ/hJG3xmVDCMgJPFMi6TFiHsYKb7wXMrhoy5VB58gkGGX1e59WIw5oKEMTjLwfmwru7CDxz7NNjvpc+RhzXJo9DhMY1eEMTMtBjEiwB6Hiw6r8GL1la8emhOLx1dDjbug9MPrUEYjBhHLC/fqh2VvvGpxWDZuizTOPbaXbsxJCkiLcxeqxog4MjdZMax23vfhfW+3TZsaW5eT6CSepNkqNg/sWC7Zw/VgN/UZ4647rnwYKkZkLBTuE8YFix0dhO8UiBUdn0TQiofd5N8F/YxP15Hhst1249ULvxBr+p3Nz8j5jzj5GQRQLUr4SoHmK8RyWxdA/QgcnlrkSYBACTB7qG0CBA9/ksOmlak+2DifSmbdAtCRQ/wQT2IxxEKJNchREMfkHYqTFdWBF9b5ifZuIJnjL1tDjivplgpmP8Opmzrh339g3BvR1GHj4ceoes8w/OKBi2NWvS9n5LEFFDptov0CqcZMHkHlYIU5SHyKv3nMuGDhbeIYE6tl1VtXAi8G5NAw06wkHfXklOp51csGeNdHtCen8JZjI3LowhcEPzfD5q2IdoF+S/n+E/o5X31jy4WESUOJhpZoO8OomcWLuCyDIQAwZkFw0ODr8ORt8JG5EPDxQQ9Zdvtg0jdjhevONC7+mt5kZ+bbVdn3ghHDQ53oTTMhxQefp5/EmpoEn6cqxuBppjVgbJu63x+4qH0WmeebH7LW4+Ut0YixEUUsYQC6xgRRBmsJYFLiwSxoxvQ6CNrbj+gUJCsvNimI6dL1WOq+QsQ73R4zuSpjd63oismx0JNDDi9tDdSy5UC78OTBgAZdWNuREezMfIY0QW/5+Jv6j4d7AmBq//pAjLlADMKQJTuEVbzMNLppDkBYXpm60L2z2EnXOMV0gDpRfGiP41N9xk7IVlanEeOKtUadTD4XmfzmuBwDFRFhWmRifUAv/HLPclGlO+aGmHNIMaTrwQBxMenk8wNm6jQmYN/+dr0GR1LgAIY1IqLhoIyaFX6XehV8bfphePuN89KLzRSDsW1iSweru8hRAMZZ9aYVLMV5uGNTL7r0NGLwFStbCc98jUcT5n/u0og41bnw4jkeQFP85GHbAE0AqKax/h3R2+zXhzXc8BPuerK5MQIXBMNicKTNDoxRNO4FoBi0f7pdJym5wCLdd+cjJnj61w9oBtXsj4IUb5YByXYV/Kn6TWxsYdsy4syBbY5p7Dw0/tSXVnVwWOKNXQC8Fbv+WPlg6kgc2mlu/PRbVz+XPyaAJHQfuDbP9oxHtWRkzEI5Qmy2Tg6IMQy1m76sl3hfX40BGKt+XLbCGR5ljSHH6seulTqQBFM8FAl8N0d30nWtP9m0DLtrVeiBAEv74h2tffQLfUSMmaDICcRmdXLxh6BsSym10XtR107iUTvz+BPKl7+/fVHgZw8QlmNAdFZNV1gZHngRqPDR4pteoG99ffckiZ2wAKrRFdnHGWziwUVmZJ2EW2s7YMbkRQWdwj1EFmPCfPG/W/vDT+gbE/pgh+KCdQzxGV/q59hMM7GTXHX80i2/254z/x8Fa3OPQNvQO/Af+45FRjwu5xjnhdi4WnBSjuxYNO/f/74C/8t/be0r2j/5VGoEiB1U6ItWN3ySpA/xxhVR8uz5AwO2ZKOPvvqBnzDDZuEkGjag71es//611v7006391t+p+HxiooDx6aY+ecIfWxH8QObiw5NMft8xF7/YpVEdP1XwwD3ty1K4FCf4tNFYZgw/QZReLj2SS6HZbhjPE4WZYbeMu0MAVk9Q/EIubfgpGt6MJTBsDx4ANfRGHBaKZ4FONU6lHKt46Yc+dqb90voIaQywI3lI6yOLLZHwpjrd/vQffuhPFaxdAejzWwZSfCeWHSseaAymZoeRlSPEXBnI7Fw9BU0DnpUL7QQLm8C9xelVJ7lzdcTefD9w1qVHoWm228lefDN1siHJ7VDj0rPtwiDqyaoXHmyKH9la+jDJEz0110IAxqbN7TFlrDjfufk7EcAeMgEwz9f/HCH7t8UBvBhKDy9Fs2MwxRv8GCBYTYQ/K2VCSFIBp3jYJOFMiF/2Y4tG5jr84070GnrbQkd0JggbXA22RV/2NvWMkR4N0xghLg4bh1c+OwBGtwvWdjur8zkLL9Fac52KqVxv+94fan+1BqjBjhPATO050d4oxW5CZ2Ky0VKc6Rh2QsFVEgmEgs9BptgwDdWJ/Ro8R9578ZgC4WQyAInNrtz7jA2LjIEOZLBI2ElT8JKJsjBPQ47ZTJ2EcayMsaOOA1UIaFp6aPSnMW/1v3Gn1Q92xwlAcIP+2w5tH++3I43noIYDhNMRjAuBERqR6LCsjIVODywrNgXi6sjnuENevjJ50WHlDrp8JK6x9RTGtsAkrvTijfihJ3x0bJpcYNBKB705F/IHwyHy/f/y9p1/LQsTJ50AhAr+agHuSmDw5jb4JKFmxwlGY+SICMRt8maVCOjrQMdsARa6F3BVgMU2k0KfA5vmgYEfbOGRp9AmJY9txiP+8p0YjJW9tVZ+rV+C6OPbTb3jX4Hu0pc4ri7pjp1COnnj1/70c1tXDYQMx6l9lOPBK8cbQVTWshJ9AsXopG8y+ll9GrMV2X7pxpfVJ33GkW36H3zZ7TeR3nN1+IYbv1NvEvs6ir1W3PCEWPM78hBAE3PVP7791P/vzCknAOMf++XFDboc3wWdgplei2AVhGGKIqsiyVsnp1k3SVZvfZ2cCANh9Z8BuZmHrg62CPeMq7BjuzF6HTeqiAz9wiQ+bux2mn5D7qFkjoGBDCRH24tBZIC22h9/7vdO/ZuhQB92AgB936L9ppK8NUk7YfHHShtRrXhOLEFJDjmSxaja0O9DB24csjpIxi+mciWUHi6Hjw3/UUaOiEIN/9A6Bs+ACSdg7LpHXwcGMp570wYAGphbn/M9p956OrpsZ3Cq/uV/vnzm0a368W6yUWPhERjJ8DhITywlRurBGA+iRIw5pJSkLNkJJwE+eF2xE3aNZyP9tMYvu8O8COSejMGU3kSbrDGd85vlomeebN2pff8ybT1f7RGc+ozurttP/dnyMn24frN87ud5erM5GTGTNJAxKYVfS3jDhvWcTbccO4ysp56vjvCagrHtIwNAK2LW64KOH5jy8RBcGRz8YXjSHwaHu3Do79WDwOWf+93d/3z9rrageOA/rFEBXqEa1JsFkawCdMw1rc6TVUvRJOBYW20ACrtT0mA3G4+mbEm0iN1PxYre4E8ylOLLi6OMhOcYu/mVg4yrDxbVUmfuj4p+xekUH3PRL9O763QlvEoz7f/CBI0EFG2PSRrrU/JrOPEDiV7w89WFjoPUKXZtVny+nuiGoakFh2J8Riew8D2OvkErHWTBZeEwLlhMkcdS8lf/y++d/n9hclpXQDzyH9bohvxqOT6agFxNIqkAg6WHtxN/yArjPV5Xy9yceMnDlzlXYe0ti/KBn7lRLFdoJ37JPFHAygbsNPzTNu12pk0ffaTFx0aZt7nTPvFfOClmvWFb/6VJJTkHC+0iIuOQR/PK2xoWXtnYxIKzeumPyMX0jbm2OZsNFnNW6nbtN/oGdv4gwVab9cwqm6Hxr3/6lEDbzttP7/+NKRfuZOPRNW7MsvAxVecSLDnwyeTauIph3may0hkTVfpruvBKZ41fBeUROU9IScrwyU+ZdYzYGLhgytZD+JvxCK9H2Tt1L3rp6e75iSH9I9qCokzv/0luq12mhG51Holess0kLefEUTiToQ3oesbUGBpbPqQ6NwqPOgcv2LhBR21FTPoIdYytBd3ybz7i+CpDGQ97i3ar/ub8skdbfLna3QsxgKdqN+n/VPyBfe0FKsa7EiRB09Inx85F0GXwg1njAbQQopNzD43e0BfhsSaAvwEo98M2uLWG/2LEP31oRJtXZMHf9ZyntRfs9jm/dE7aPSSukyJ3KfjJdy9fpqq8T7k81SpkWcUZ47LlAvjUGUmeoEKX+mpc+FGcTf1kJD42+Fn8gZ3s2keNQ48Z2eRrrHaX7Fy1m7cXOnx350e9BW26+cSbFzfoP/fkF1jep8K7jpxcl41ipVaxkXGKb34VshvoxZwLGl16+BQx+ozZlvw+f8noTFYs0LT00CNeBhpK9r7z9rdnneniY3z2y/iMthe/e/ljyvM9Mvo8F0YEDlMgnCVZ14NTRTT4VaiBlXxH/QkXLH0aOtbjZq0jbbblK2D2r0+yJH/jqd7Pj51H2pe7R6r+8Hp8yH+3/vMCLaO3Cn0pGk66CukAira1qZA7FWfmhcZGaNuo0+BRfPGMQ1aTwf9ZAz1fUaVzuz5neCcfI57skyzMnInm/M+EoYezwUR8U7+fr4l4m942XvveEcWhOqxMPmAZhSujjOfirQYdELxxJ9E3ksJ3V+77qftDVw8RX5L/dzztWe26x7rwlZpTCX1Wer78xU+4axJeq0fGK5T4+SlEAhg7BEXRwQpdmwABRyEhagxzXs3ml9ygAVzZlc4RTfyNgl37z7/dPr75vZ2h9xgR5PUda/yK+InD+iHrRXuNngb46eQ9p3ofyJOhaKlprhToOQkwM47kPHnwV9jjWu23SPAB/SH39fN3NcGfzTbHfjb9PsQXv6XMz/kqoMt5S1fFeq4qNv6/YitQQbXqTFBsXnyxfbH63QZgYPlmwhc0uTcLc/OB/e2z+X5+aXzHuoT8HQvgZI75UVN9y51fdDyoIA+qvtBPV/X5gakD9CroAfQl5wdHDot3WPeYw5qMO7TFHeLQ3BzirxH5gziwj7f2/1ZpxcT9HeBeAAAAAElFTkSuQmCC", alt: "" }) });
  if (S)
    return K(Pa, { ...D, size: m, src: v, className: ue($t.errorAvatar, h), children: [y && k(HE, { style: y ? { backgroundColor: GD[+y % 10] } : {}, className: $t.errorIcon, size: m, children: b && b[0] }), !y && k(mi, { className: ue($t.errorIcon, L && $t.square, L && "square"), svg: hD, noSpace: !0 })] });
  if (!(i || o || a || u || c || y))
    return k(Pa, { ...D, size: m, src: v, className: h, children: r });
  let V = v;
  return k("div", { className: ue($t.container, $t[m], h, L && $t.square, L && "square"), children: k("img", { className: ue($t.img, L && $t.square, L && "square"), src: V, onError: function() {
    H(!0);
  } }) });
}, Wr = { wrap: "kel-wrap-nCy0D", avatar: "kel-avatar-7ShjF", main: "kel-main-QzsvB", top: "kel-top-lh5oe", name: "kel-name-FGVLv", desc: "kel-desc-rfX-Y" }, VD = (e) => {
  const { name: r, organize: i, describe: o, avatar: a, onClick: u } = e;
  return K("div", { className: Wr.wrap, onClick: u, children: [k(HE, { className: Wr.avatar, src: a, size: jE.SM }), K("div", { className: Wr.main, children: [K("div", { className: Wr.top, children: [K("span", { className: Wr.name, children: [r, "\xA0"] }), k("span", { className: Wr.dept, children: i })] }), k("div", { className: Wr.desc, children: o })] })] });
}, va = { link: "kel-link--YFuA", inner: "kel-inner-5Yq-r", icon: "kel-icon-tzIRy", plain: "kel-plain-RtjK9", wiki: "kel-wiki-xQC1x", recommend: "kel-recommend-Eqo8L", text: "kel-text-Ee6FH" };
var wa = ((e) => (e.plain = "plain", e.wiki = "wiki", e.recommend = "recommend", e))(wa || {});
const Gs = ({ name: e, url: r, type: i, onClick: o }) => k("div", { className: va.link, children: K("a", { className: va.inner, href: r, title: e, target: "_blank", rel: "noreferrer", onClick: o, children: [k("i", { className: ue(va.icon, va[i || "plain"]) }), k("div", { className: va.text, children: e })] }) });
var WD = { exports: {} }, XD = Nr.every;
ce({ target: "Array", proto: !0, forced: !Ja("every") }, { every: function(e) {
  return XD(this, e, arguments.length > 1 ? arguments[1] : void 0);
} });
var QD = vt("Array").every, YD = nt, KD = QD, bd = Array.prototype;
const zw = Ne(WD.exports = function(e) {
  var r = e.every;
  return e === bd || YD(bd, e) && r === bd.every ? KD : r;
});
var FE = "folder", BE = "hover", no = G.exports.createContext({});
no.Provider, no.Consumer;
var ti = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).context = void 0, a.divRef = G.exports.createRef(), a.handleMouseEnter = function(h) {
      var m = a.props, v = m.disabled, y = m.id;
      v || oe(y) || Se(a.context.moveCursor, y, h);
    }, a.handleMouseLeave = function(h) {
      Se(a.context.moveCursor, null, h);
    }, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.componentDidUpdate = function() {
    var o = this.context, a = o.cursorItem, u = o.setCursorItem;
    this.inCursor && !a && Se(u, this.divRef.current);
  }, i.renderPrefix = function() {
    var o = this.props.prefix;
    return G.exports.isValidElement(o) && k("div", { className: "brick-menu-item-prefix", children: o });
  }, i.renderSuffix = function() {
    var o, a = this.props, u = a.suffixArrow, c = a.suffix;
    return G.exports.isValidElement(c) && (o = c), u && (o = k(Lt, { className: "brick-menu-item-suffix-arrow", svg: u === !0 ? Wk : u })), o && k("div", { className: "brick-menu-item-suffix", children: o });
  }, i.render = function() {
    return k("div", { className: this.className, ref: this.divRef, ...this.divProps, children: K("div", { className: "brick-menu-item-content-inner", children: [this.renderPrefix(), this.props.children, this.renderSuffix()] }) });
  }, rt(r, [{ key: "className", get: function() {
    var o, a = this.props.className;
    return ue("brick-menu-item-content", ((o = {})["brick-menu-item-content-in-cursor"] = this.inCursor, o["brick-menu-item-content-with-suffix"] = this.withSuffix, o), a);
  } }, { key: "divProps", get: function() {
    return Be({}, On(this.props, ["className", "id", "disabled", "suffix", "prefix", "suffixArrow"]), { onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave });
  } }, { key: "inCursor", get: function() {
    var o = this.context.cursorId;
    return o !== null && this.props.id === o;
  } }, { key: "withSuffix", get: function() {
    var o = this.props, a = o.suffixArrow, u = o.suffix;
    return a || u;
  } }]), r;
}(G.exports.Component);
ti.propTypes = { className: _.exports.string, id: _.exports.any, disabled: _.exports.bool, prefix: _.exports.node, suffix: _.exports.node, suffixArrow: _.exports.oneOfType([_.exports.bool, _.exports.any]) }, ti.displayName = "MenuItemContent", ti.defaultProps = { className: "" }, ti.contextType = no;
var gr = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this)._id = mE("menu-item_"), a.context = void 0, a.handleClick = function(h) {
      var m = a.props.disabled, v = a.id;
      m || (Se(a.props.onClick, h), oe(v) || (a.hideMenuPopper(h), Se(a.context.onClickItem, v, h)));
    }, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.hideMenuPopper = function(o) {
    if (!this.multiple) {
      var a = this.context.refMenuPopper;
      a && a.current && a.current.hidePopperOnSelect(o);
    }
  }, i.renderPrefix = function() {
    var o = this.props, a = o.icon, u = o.prefix;
    return G.exports.isValidElement(u) ? u : a && !this.context.parentLayout ? k(Lt, { svg: a }) : this.multiple && this.type === "checkbox" ? k(OD, { checked: this.isSelected, size: this.checkboxSize, indeterminate: this.props.indeterminate, disabled: this.props.disabled }) : null;
  }, i.render = function() {
    var o = this.props.children, a = typeof o == "string" ? o : void 0;
    return k("li", { className: this.className, ...this.liProps, children: k(ti, { title: a, id: this.id, prefix: this.renderPrefix(), ...Un(this.props, ["disabled", "suffix", "suffixArrow"]), children: o }) });
  }, rt(r, [{ key: "id", get: function() {
    var o = this.props.id;
    return oe(o) ? this._id : o;
  } }, { key: "className", get: function() {
    var o, a = this.props, u = a.className, c = a.disabled, f = this.type;
    return ue("brick-menu-item", ((o = {})["brick-menu-item-selected"] = this.isSelected, o["brick-menu-item-type-" + f] = f, o["brick-menu-item-disabled"] = c, o), u);
  } }, { key: "type", get: function() {
    return this.context.multipleItemType;
  } }, { key: "multiple", get: function() {
    return this.context.multiple;
  } }, { key: "liProps", get: function() {
    return Be({}, On(this.props, ["className", "onClick", "style", "id", "indeterminate", "icon", "prefix", "suffix", "suffixArrow"]), { onClick: this.handleClick });
  } }, { key: "isSelected", get: function() {
    var o = this.props.selected;
    if (!oe(o))
      return o;
    var a = this.context.selectedIds, u = a === void 0 ? [] : a, c = this.id;
    return !oe(c) && St(u).call(u, c);
  } }, { key: "checkboxSize", get: function() {
    return this.context.size;
  } }]), r;
}(G.exports.Component);
gr.propTypes = { className: _.exports.string, id: _.exports.any, disabled: _.exports.bool, onClick: _.exports.func, type: _.exports.oneOf(["normal", "checkbox"]), selected: _.exports.bool, icon: _.exports.any }, gr.displayName = "MenuItem", gr.defaultProps = { className: "", disabled: !1, type: "normal" }, gr.contextType = no;
var ni = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).context = void 0, a.refTrigger = G.exports.createRef(), a.handleClickNonMenu = function(h) {
      a.setPopperVisible(!1, h);
    }, a.hidePopperOnSelect = function(h) {
      var m = a.refTrigger.current;
      m && m.hideByChild();
    }, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.setPopperVisible = function(o, a) {
    var u = this.refTrigger.current;
    u && u.setVisible(o, a);
  }, i.renderPopperContent = function() {
    if (this.props.loading)
      return K("div", { className: "brick-menu-popper-loading", onClick: this.handleClickNonMenu, children: [k("img", { className: "brick-menu-popper-loading-image", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABYWlDQ1BrQ0dDb2xvclNwYWNlRGlzcGxheVAzAAAokWNgYFJJLCjIYWFgYMjNKykKcndSiIiMUmB/yMAOhLwMYgwKicnFBY4BAT5AJQwwGhV8u8bACKIv64LMOiU1tUm1XsDXYqbw1YuvRJsw1aMArpTU4mQg/QeIU5MLikoYGBhTgGzl8pICELsDyBYpAjoKyJ4DYqdD2BtA7CQI+whYTUiQM5B9A8hWSM5IBJrB+API1klCEk9HYkPtBQFul8zigpzESoUAYwKuJQOUpFaUgGjn/ILKosz0jBIFR2AopSp45iXr6SgYGRiaMzCAwhyi+nMgOCwZxc4gxJrvMzDY7v////9uhJjXfgaGjUCdXDsRYhoWDAyC3AwMJ3YWJBYlgoWYgZgpLY2B4dNyBgbeSAYG4QtAPdHFacZGYHlGHicGBtZ7//9/VmNgYJ/MwPB3wv//vxf9//93MVDzHQaGA3kAFSFl7jXH0fsAAAA4ZVhJZk1NACoAAAAIAAGHaQAEAAAAAQAAABoAAAAAAAKgAgAEAAAAAQAAAA6gAwAEAAAAAQAAAA4AAAAAnjgbwAAAAgdJREFUKBVtkk1oE1EQx2dmP9IuabVLinrSgxdBsHoQKngQ9CL4ASUePEhjbZeqCHrx4KF7K54qiTkUbD2oBzdULTkoIogXQUQQQb0IIqb4QTWaNU12s/vGidSQNnnwHm/+7zfz5r0ZhLbBAJiff7AXORpnwIOI2v5zp4+XXNdFmaoNBfxv5L2nSeX/uKIBnmHmBhC8rjXCUy8G9PJwCcxKpcpTU6MBIkp8uaG55D0vCX+0aVAwImpOnIsV1D5dHjvmAzO6hYKxoWpYwbcG1+tpXxJQuqRAUMWLAhyOkUcvjKUfN4O1htzgAoSu58HgJrDNuKDJ2U/Mzt3bRazuiOON8+Ppay2HLpts9nZ/rGOK68YXQhUfRVY+K3zUhV0jJRLVGrNBKwA2ySsPAdIHilRpDdXFcCYmokhX3GvpKXHEgIHDLlyH1PzOXtANg6MEIfMTBLSJjFQHuU7I5R6aTNHGWOk+6cRFiaRFhtq3juswyapt1kjrT2DtKzmZ9Hsp6iIiHLk+v7Cng14VZm4tbJEn7eaIlifPnvz1rwFmZ4tWqK04CLRTxXCXerRXyx8HfgM8A9vebmGfuVX0IZNhqUcffJ7JHKi3Wu7q3GJfMg5GgGgIkMtxjJ+RUABlQSw1QHj3ncsvXceRaqy2XHt6MzfvbzMjlpTVDgkQKIS3jZDfXJo8sdTO/QWJE9DukJjVwAAAAABJRU5ErkJggg==" }), " \u52A0\u8F7D\u4E2D"] });
    var o = this.props, a = o.children, u = o.emptyHint, c = o.errorHint;
    if (!a) {
      if (c)
        return k("div", { className: "brick-menu-popper-error-hint", children: c });
      if (u)
        return k("div", { className: "brick-menu-popper-empty-hint", onClick: this.handleClickNonMenu, children: u });
    }
    return a;
  }, i.render = function() {
    return K($o, { ...this.triggerProps, children: [this.targetNode, k(hr, { ...this.popperProps, children: this.renderPopperContent() })] });
  }, rt(r, [{ key: "className", get: function() {
    var o, a = this.props, u = a.className;
    a.placement;
    var c = this.size;
    return ue("brick-menu-popper", ((o = {})["brick-menu-popper-size-" + c] = c, o), u);
  } }, { key: "targetNode", get: function() {
    var o = this.props, a = o.targetContent, u = o.targetNode;
    return oe(u) && !oe(a) ? a : u;
  } }, { key: "triggerProps", get: function() {
    return Be({}, On(this.props, ["className", "placement", "targetNode", "targetContent"]), { ref: this.refTrigger });
  } }, { key: "popperProps", get: function() {
    return Be({ className: this.className }, Un(this.props, ["placement", "matchMinWidthToTarget", "popperWrapRef", "withArrow", "type", "preventOverflowBoundary", "portalContainer"]));
  } }, { key: "size", get: function() {
    return $r(this, "size", "defaultSize");
  } }]), r;
}(G.exports.Component);
ni.displayName = "MenuPopper", ni.propTypes = { portalContainer: _.exports.oneOfType([_.exports.any, _.exports.func]), errorHint: _.exports.node, emptyHint: _.exports.node, loading: _.exports.bool, targetNode: _.exports.node, disabled: _.exports.bool, type: _.exports.oneOf(["click", "hover", "context"]), size: _.exports.oneOf(["xs", "sm", "md", "lg"]), className: _.exports.string, targetContent: dr("0.1.81", "Use prop `targetNode` instead") }, ni.defaultProps = { className: "", disabled: !1, type: "click", placement: "bottom-start", matchMinWidthToTarget: !0, preventOverflowBoundary: "scrollParent" }, ni.contextType = dl;
var ri = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this)._id = mE("submenu_"), a.context = void 0, a.refMenuPopper = G.exports.createRef(), a.handleClickItemContent = function(h) {
      var m = a.props.onClick, v = a.id, y = a.context.folderToggleSpot;
      if (oe(m)) {
        var b = h.target;
        b instanceof Element && b.tagName === "A" || a.type !== "folder" || oe(v) || y === "toggle" || Se(a.context.onClickSubmenu, v, h);
      } else
        Se(a.props.onClick, h);
    }, a.handleToggle = function(h) {
      var m = a.id;
      a.type !== "folder" || oe(m) || Se(a.context.onClickSubmenu, m, h);
    }, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.renderMenuArrow = function() {
    var o = this.type;
    if (o === "group")
      return null;
    var a = { className: "brick-menu-item-suffix-arrow" };
    return o === "folder" ? (a.svg = this.isExpanded ? C8 : My, a.onClick = this.handleToggle) : o === "popper" && (a.svg = this.layout === "horizontal" ? My : Wk), a.svg && k(Lt, { ...a });
  }, i.renderPrefix = function() {
    var o = this.props, a = o.icon, u = o.prefix;
    return G.exports.isValidElement(u) ? u : a && !this.context.parentLayout ? k(Lt, { svg: a }) : void 0;
  }, i.renderMenuItem = function(o) {
    var a = this.props.itemContent, u = this.id, c = this.type, f = this.mustBePopper, h = { className: this.className, style: this.props.style };
    (c === "popper" || f || c === "folder" && !this.isExpanded) && (o = null);
    var m = a && k(ti, { onClick: this.handleClickItemContent, id: c === "group" ? void 0 : u, prefix: this.renderPrefix(), suffix: this.renderMenuArrow(), children: a });
    return K("li", { ...h, children: [m, o] });
  }, i.renderSubmenu = function() {
    return k(oi, { className: "brick-menu-submenu-menu", size: this.submenuSize, refMenuPopper: this.submenuRefMenuPopper, type: "common", children: this.props.children });
  }, i.render = function() {
    var o = this.renderSubmenu(), a = this.renderMenuItem(o);
    return this.isTypePopper ? k(ni, { ref: this.refMenuPopper, size: this.menuPopperSize, targetNode: a, placement: this.popperMenuPlacement, type: this.popperTriggerType, children: o }) : a;
  }, rt(r, [{ key: "id", get: function() {
    var o = this.props.id;
    return oe(o) ? this._id : o;
  } }, { key: "className", get: function() {
    var o, a = this.props.className, u = this.type;
    return ue("brick-menu-submenu", "brick-menu-submenu-type-" + u, ((o = {})["brick-menu-submenu-selected"] = this.isSelected, o["brick-menu-submenu-" + (this.isExpanded ? "expanded" : "collapsed")] = u === "folder", o["brick-menu-submenu-has-descendant-selected"] = this.hasDescendantSelected, o), a);
  } }, { key: "layout", get: function() {
    return this.context.layout;
  } }, { key: "isLayoutHorizontal", get: function() {
    return this.layout === "horizontal";
  } }, { key: "popperMenuPlacement", get: function() {
    var o = this.props.popperPlacement;
    return oe(o) ? this.isLayoutHorizontal ? "bottom-start" : this.layout === "vertical-right" ? "left-start" : "right-start" : o;
  } }, { key: "isExpanded", get: function() {
    var o = this.context.expandedIds, a = o === void 0 ? [] : o;
    return !oe(this.id) && St(a).call(a, this.id);
  } }, { key: "isSelected", get: function() {
    var o = this.props.selected;
    if (!oe(o))
      return o;
    var a = this.context.selectedIds, u = a === void 0 ? [] : a, c = this.id;
    return !oe(c) && St(u).call(u, c);
  } }, { key: "hasDescendantSelected", get: function() {
    var o = this.context.selectedIds;
    return o ? function a(u) {
      var c;
      return Qu(c = G.exports.Children.toArray(u)).call(c, function(f) {
        if (!G.exports.isValidElement(f))
          return !1;
        if (f.type === gr) {
          var h = f.props.selected;
          return oe(h) ? St(o).call(o, f.props.id) : h;
        }
        return f.type === r && a(f.props.children);
      });
    }(this.props.children) : !1;
  } }, { key: "mustBePopper", get: function() {
    return this.isLayoutHorizontal;
  } }, { key: "isTypePopper", get: function() {
    return this.type === "popper" || this.mustBePopper;
  } }, { key: "menuPopperSize", get: function() {
    switch (this.context.size) {
      case "md":
      case "sm":
        return "sm";
    }
  } }, { key: "type", get: function() {
    var o = this.props.type, a = this.context.submenuType;
    return (oe(o) ? a : o) || FE;
  } }, { key: "popperTriggerType", get: function() {
    var o = this.props.popperTriggerType, a = this.context.submenuPopperTriggerType;
    return (oe(o) ? a : o) || BE;
  } }, { key: "submenuSize", get: function() {
    return this.type === "popper" ? this.menuPopperSize : this.context.size;
  } }, { key: "submenuRefMenuPopper", get: function() {
    return this.isTypePopper ? this.refMenuPopper : this.context.refMenuPopper;
  } }]), r;
}(G.exports.Component);
ri.propTypes = { className: _.exports.string, style: _.exports.any, type: _.exports.oneOf(["group", "folder", "popper"]), id: _.exports.any, selected: _.exports.bool, itemContent: _.exports.node, popperTriggerType: _.exports.oneOf(["hover", "click", "context"]), onClick: _.exports.func }, ri.displayName = "Submenu", ri.defaultProps = { className: "", disabled: !1 }, ri.contextType = no;
var ZD = Hk("menu-item-select-all", { en_us: { all: "All" }, zh_cn: { all: "\u5168\u90E8" } }), zE = "__menu-item-select-all__", ka = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).context = void 0, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.getLocaleText = function(o) {
    for (var a, u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
      c[f - 1] = arguments[f];
    return Se.apply(void 0, $e(a = [this.context.getLocaleText, ZD, o]).call(a, c)) || "";
  }, i.render = function() {
    return k(gr, { className: this.className, id: zE, ...On(this.props, ["className"]), children: this.getLocaleText("all") });
  }, rt(r, [{ key: "className", get: function() {
    var o = this.props.className;
    return ue("brick-menu-item-select-all", {}, o);
  } }]), r;
}(G.exports.Component);
ka.propTypes = { className: _.exports.string }, ka.displayName = "MenuItemSelectAll", ka.defaultProps = { className: "" }, ka.contextType = dl;
var oi = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).itemHeightDefault = 32, a.context = void 0, a.ulRef = G.exports.createRef(), a.state = { cursorId: null, selectedIds: [], expandedIds: [], itemHeight: a.itemHeightDefault }, a.handleItemClick = function(h, m) {
      var v;
      !a.props.multiple && St(v = a.state.selectedIds).call(v, h) || a.toggleSelected(h);
    }, a.handleClickSubMenu = function(h, m) {
      a.toggleExpanded(h);
    }, a.moveCursor = function(h, m, v, y) {
      a.setState({ cursorId: h, cursorItem: null }), cx(function() {
        var b = a.ulRef.current, E = a.state.cursorItem;
        if (h && E && v) {
          var A = b.getBoundingClientRect(), S = A.top, H = A.height, D = E.getBoundingClientRect(), L = D.top, V = D.height, Q = b.scrollTop, z = L - S + Q;
          v === "down" ? y ? Q = 0 : L + V > S + H && (Q = z + V - H) : v === "up" && (y ? Q = z + V - H : L < S && (Q = z)), b.scrollTop = Q;
        }
      }, 0);
    }, a;
  }
  qe(r, e), r.getDerivedStateFromProps = function(o) {
    return Si(o, ["selectedIds", "expandedIds"]);
  };
  var i = r.prototype;
  return i.getChildrenArray = function(o) {
    return G.exports.isValidElement(o) && o.type === G.exports.Fragment ? this.getChildrenArray(o.props.children) : G.exports.Children.toArray(o);
  }, i.setCursorItem = function(o) {
    this.setState({ cursorItem: o });
  }, i.getContextValue = function() {
    var o = this, a = this.state, u = a.selectedIds, c = a.expandedIds, f = a.cursorId, h = a.cursorItem, m = this.props, v = m.layout, y = m.multiple, b = m.multipleItemType, E = m.folderToggleSpot, A = m.submenuPopperTriggerType;
    return Be({ size: this.size, onClickItem: this.handleItemClick, onClickSubmenu: this.handleClickSubMenu, moveCursor: this.moveCursor, cursorId: f, expandedIds: c, selectedIds: u, multiple: y, multipleItemType: b, submenuType: this.submenuType, submenuPopperTriggerType: A, folderToggleSpot: E, cursorItem: h, setCursorItem: function(S) {
      return o.setCursorItem(S);
    } }, this.context, { layout: v, parentLayout: this.context.layout, refMenuPopper: this.props.refMenuPopper });
  }, i.toggleSelected = function(o) {
    if (o === void 0 && (o = this.state.cursorId), o !== null && o !== zE) {
      var a = hw(o, this.state.selectedIds, { multiple: this.props.multiple, onSelect: this.props.onSelect, onDeselect: this.props.onDeselect });
      Se(this.props.onChangeSelectedIds, a), oe(this.props.selectedIds) && this.setSelectIds(a);
    }
  }, i.toggleExpanded = function(o) {
    var a = hw(o, this.state.expandedIds, { onSelect: this.props.onExpand, onDeselect: this.props.onCollapse });
    Se(this.props.onChangeExpandedIds, a), oe(this.props.expandedIds) && this.setExpandedIds(a);
  }, i.setSelectIds = function(o) {
    this.setState({ selectedIds: o });
  }, i.setExpandedIds = function(o) {
    this.setState({ expandedIds: o });
  }, i.render = function() {
    return k(no.Provider, { value: this.contextValue, children: k("ul", { ref: this.ulRef, className: this.className, children: this.props.children }) });
  }, rt(r, [{ key: "className", get: function() {
    var o, a = this.props, u = a.className, c = a.layout, f = a.reverseColor, h = this.size, m = this.type, v = this.contextValue, y = v.parentLayout, b = v.multiple, E = v.multipleItemType;
    return ue("brick-menu", ((o = {})["brick-menu-type-" + m] = m, o["brick-menu-layout-" + c] = c, o["brick-menu-parent-layout-" + y] = y, o["brick-menu-size-" + h] = h, o["brick-menu-multiple"] = b, o["brick-menu-multiple-item-type-" + E] = b && E, o["brick-menu-reverse-color"] = f, o["brick-menu-with-prefix-icon"] = this.withPrefixIcon, o), u);
  } }, { key: "size", get: function() {
    var o, a = this.props.size;
    return !oe(a) && St(o = ["sm", "md"]).call(o, a) ? a : this.context.size || bu.defaultSize;
  } }, { key: "type", get: function() {
    var o = this.props.type;
    return oe(o) ? this.context.layout ? "common" : "nav" : o;
  } }, { key: "submenuType", get: function() {
    var o = this.props, a = o.submenuType, u = o.submenuTypeDefault;
    return oe(a) && !oe(u) ? u : a;
  } }, { key: "contextValue", get: function() {
    return this.getContextValue();
  } }, { key: "withPrefixIcon", get: function() {
    var o;
    return !this.context.parentLayout && Qu(o = this.getChildrenArray(this.props.children)).call(o, function(a) {
      return G.exports.isValidElement(a) && (a.type === gr || a.type === ri) && !!a.props.icon;
    });
  } }]), r;
}(G.exports.Component);
function Uw(e) {
  return typeof e == "string" || typeof e == "number";
}
oi.displayName = "Menu", oi.propTypes = { reverseColor: _.exports.bool, onChangeExpandedIds: _.exports.func, onCollapse: _.exports.func, onExpand: _.exports.func, onChangeSelectedIds: _.exports.func, onDeselect: _.exports.func, onSelect: _.exports.func, type: _.exports.oneOf(["nav", "common"]), className: _.exports.string, submenuTypeDefault: dr("0.1.86", "Use prop `submenuType` instead") }, oi.defaultProps = { className: "", layout: "vertical", multiple: !1, multipleItemType: "normal", reverseColor: !1, folderToggleSpot: "auto", submenuType: FE, submenuPopperTriggerType: BE }, oi.contextType = no, ml();
var Ph = function(e) {
  function r(o) {
    var a;
    (a = e.call(this, o) || this).refMenuPopper = G.exports.createRef(), a.renderOptions = function(m) {
      return hM(m) ? za(m).call(m, function(v, y) {
        var b = v.children, E = v.value, A = v.label;
        if (oe(b))
          return k(gr, { id: v.value, disabled: v.disabled, onClick: v.onClick, children: A }, E);
        var S = oe(v.type) ? a.props.groupType : v.type;
        return S !== "popper" && (S = "group"), k(ri, { itemContent: v.label, type: S, ...Un(v, ["disabled", "popperTriggerType"]), children: a.renderOptions(b) }, "sub" + y);
      }) : null;
    }, a.handleChangeSelectedIds = function(m) {
      var v = a.isMultiple ? m : pl(m).call(m, function(y) {
        return Uw(y);
      })[0];
      a.changeValue(v);
    }, a.renderPopper = function() {
      var m = a.props.mode, v = a.renderOptions(a.props.options);
      return K(oi, { refMenuPopper: a.refMenuPopper, selectedIds: a.selectedIds, onChangeSelectedIds: a.handleChangeSelectedIds, size: a.menuSize, type: "common", multiple: m === "multiple", multipleItemType: "checkbox", submenuPopperTriggerType: a.submenuPopperTriggerType, children: [a.renderSelectAllOption(), v] });
    }, a.renderTargetNode = function() {
      var m = a.props, v = m.children;
      return m.renderTargetNode, G.exports.isValidElement(v) ? v : null;
    }, a.handlerPopperVisibleChange = function(m, v) {
      a.props.disabled || (oe(a.props.menuPopperVisible) && a.setState({ menuPopperVisible: m }), Se(a.props.onChangeMenuPopperVisible, m, v));
    }, a.handleClickSelectAll = function(m) {
      var v = [], y = a.props.options;
      if (y) {
        if (!a.isSelectedAll) {
          var b;
          v = Fa(b = a.selectedIds).call(b), zn(y).call(y, function E(A) {
            var S = A.value, H = A.children;
            oe(H) ? S === null || A.disabled || St(v).call(v, S) || v.push(S) : zn(H).call(H, E);
          });
        }
        a.handleChangeSelectedIds(v);
      }
    };
    var u = o.mode, c = o.value, f = o.defaultValue, h = oe(c) ? f : c;
    return oe(h) && (h = u === "multiple" ? [] : null), a.state = { value: h, menuPopperVisible: !1 }, a;
  }
  qe(r, e), r.getDerivedStateFromProps = function(o) {
    return Si(o, ["value", "menuPopperVisible"]);
  };
  var i = r.prototype;
  return i.changeValue = function(o) {
    oe(o) && (o = null), oe(this.props.value) && this.setState({ value: o }), Se(this.props.onChange, o);
  }, i.renderSelectAllOption = function() {
    if (!this.isMultiple || !this.props.withSelectAll)
      return null;
    var o = this.state.value, a = !this.isSelectedAll && !!o.length;
    return k(ka, { onClick: this.handleClickSelectAll, selected: this.isSelectedAll, indeterminate: a });
  }, i.render = function() {
    return k(ni, { ...this.menuPopperProps, children: this.renderPopper() });
  }, rt(r, [{ key: "className", get: function() {
    var o = this.props.className;
    return ue("brick-drop-menu", {}, o);
  } }, { key: "isMultiple", get: function() {
    return this.props.mode === "multiple";
  } }, { key: "size", get: function() {
    return $r(this, "size", "defaultSize");
  } }, { key: "menuSize", get: function() {
    switch (this.size) {
      case "md":
      case "sm":
        return "sm";
    }
  } }, { key: "triggerType", get: function() {
    return this.props.triggerType;
  } }, { key: "submenuPopperTriggerType", get: function() {
    return this.props.triggerType;
  } }, { key: "selectedIds", get: function() {
    var o, a = this.state.value, u = this.props.triggerType;
    return this.isMultiple ? Fa(o = a).call(o) : Uw(a) && u !== "context" ? [a] : [];
  } }, { key: "isSelectedAll", get: function() {
    if (!this.isMultiple)
      return !1;
    var o = this.props.options, a = o === void 0 ? [] : o, u = this.state.value;
    return zw(a).call(a, function c(f) {
      var h = f.children;
      return !!f.disabled || (oe(h) ? St(u).call(u, f.value) : zw(h).call(h, c));
    });
  } }, { key: "menuPopperProps", get: function() {
    var o = this.triggerType !== "context" && this.props.matchMinWidthToTarget;
    return Be({ className: this.className, targetNode: this.renderTargetNode(), onChange: this.handlerPopperVisibleChange, type: this.triggerType, visible: this.state.menuPopperVisible, ref: this.refMenuPopper, size: this.size, matchMinWidthToTarget: o }, Un(this.props, ["matchMinWidthToTarget", "placement", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "popperWrapRef", "withArrow", "mouseEnterDelayInMS", "mouseLeaveDelayInMS", "focusDelayInMS", "blurDelayInMS"]));
  } }]), r;
}(hl);
Ph.displayName = "DropMenu", Ph.defaultProps = { className: "", mode: "single", triggerType: "hover", withSelectAll: !0, groupType: "group" };
function qD(e) {
  return k(Ph, { ...e, className: ue("ku-entity-linking-dropMunu", e.className) });
}
var UE = function(e) {
  var r;
  return e && St(r = ["mac", "windows"]).call(r, e) ? e : vE() ? "mac" : gE() ? "windows" : void 0;
}, ya, GE = G.exports, JD = (ya = GE) && typeof ya == "object" && "default" in ya ? ya.default : ya;
function Gw(e, r, i) {
  return r in e ? Object.defineProperty(e, r, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = i, e;
}
var $D = !(typeof window > "u" || !window.document || !window.document.createElement), ej = function(e, r, i) {
  if (typeof e != "function")
    throw new Error("Expected reducePropsToState to be a function.");
  if (typeof r != "function")
    throw new Error("Expected handleStateChangeOnClient to be a function.");
  if (i !== void 0 && typeof i != "function")
    throw new Error("Expected mapStateOnServer to either be undefined or a function.");
  return function(o) {
    if (typeof o != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var a, u = [];
    function c() {
      a = e(u.map(function(h) {
        return h.props;
      })), f.canUseDOM ? r(a) : i && (a = i(a));
    }
    var f = function(h) {
      var m, v;
      function y() {
        return h.apply(this, arguments) || this;
      }
      v = h, (m = y).prototype = Object.create(v.prototype), m.prototype.constructor = m, m.__proto__ = v, y.peek = function() {
        return a;
      }, y.rewind = function() {
        if (y.canUseDOM)
          throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");
        var E = a;
        return a = void 0, u = [], E;
      };
      var b = y.prototype;
      return b.UNSAFE_componentWillMount = function() {
        u.push(this), c();
      }, b.componentDidUpdate = function() {
        c();
      }, b.componentWillUnmount = function() {
        var E = u.indexOf(this);
        u.splice(E, 1), c();
      }, b.render = function() {
        return JD.createElement(o, this.props);
      }, y;
    }(GE.PureComponent);
    return Gw(f, "displayName", "SideEffect(" + function(h) {
      return h.displayName || h.name || "Component";
    }(o) + ")"), Gw(f, "canUseDOM", $D), f;
  };
};
const tj = ej;
var nj = function() {
  var e = document.createElement("div"), r = document.body;
  pi(e.style, { position: "absolute", top: "-9999px", width: "50px", height: "50px", overflow: "scroll" }), r.appendChild(e);
  var i = e.offsetWidth - e.clientWidth;
  return r.removeChild(e), i;
}(), Vw = "has-brick-modal-visible", VE = !1, Bn = null;
function rj() {
  VE && (Bn = function() {
    if (Bn)
      return Bn;
    for (var e = [{ element: document.body, originStyle: { width: document.body.style.width } }], r = document.body.getElementsByTagName("*"), i = r.length; i-- > 0; ) {
      var o = r[i];
      mu(o, "brick-modal-mask") || mu(o, "brick-modal-wrap") || window.getComputedStyle(o).getPropertyValue("position") === "fixed" && o.getBoundingClientRect().width === document.body.clientWidth && e.push({ originStyle: { width: o.style.width }, element: o });
    }
    return e;
  }(), zn(Bn).call(Bn, function(e) {
    e.element.style.width = "calc(100% - " + nj + "px)";
  }));
}
function oj(e) {
  return pl(e).call(e, function(r) {
    return r.visible;
  }).length;
}
function ij(e) {
  var r, i;
  e ? (VE = document.body.clientWidth < window.innerWidth, r = document.body, i = Vw, r ? r.classList ? r.classList.add(i) : mu(r, i) || (r.className += " " + i) : console.warn("param `elem` hasClass(elem, className) should be an element"), rj()) : (function(o, a) {
    if (o) {
      if (o.classList)
        o.classList.remove(a);
      else if (mu(o, a)) {
        var u = new RegExp("(\\s|^)" + a + "(\\s|$)");
        o.className = o.className.replace(u, " ");
      }
    } else
      console.warn("param `elem` hasClass(elem, className) should be an element");
  }(document.body, Vw), Bn && (zn(Bn).call(Bn, function(o) {
    var a = o.element, u = o.originStyle;
    pi(a.style, u);
  }), Bn = null));
}
ml();
var iu = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).popup = G.exports.createRef(), a.handleClickMask = function(h) {
      h.target === h.currentTarget && typeof a.props.onClickMask == "function" && a.props.onClickMask(h);
    }, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.renderMask = function() {
    return k("div", { className: "brick-modal-mask", onClick: this.handleClickMask });
  }, i.renderContent = function() {
    return k("div", { className: "brick-modal-content", children: this.props.children });
  }, i.renderModalWrap = function() {
    return K("div", { className: "brick-modal-wrap", children: [this.renderMask(), this.renderContent()] });
  }, i.render = function() {
    var o = Be({ className: this.className }, On(this.props, ["className", "onClickMask"]));
    return k(ku, { ...o, children: this.renderModalWrap() });
  }, rt(r, [{ key: "className", get: function() {
    var o = this.props.className;
    return ue("brick-modal", o);
  } }]), r;
}(G.exports.Component);
iu.propTypes = { className: _.exports.string, visible: _.exports.bool, onClickMask: _.exports.func }, iu.displayName = "Modal", iu.defaultProps = { className: "", visible: !1 };
var Ww, aj = (Ww = iu, tj(oj, ij)(Ww)), Oh = G.exports.memo(function(e) {
  var r, i = UE(e.osType), o = ue("brick-dialog-header", ((r = {})["brick-dialog-header-type-" + i] = i, r), e.className);
  return K("div", { className: o, children: [" ", e.children] });
});
Oh.propTypes = { className: _.exports.string, osType: _.exports.oneOf(["windows", "mac"]) };
var si = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).state = { overflowX: !1, overflowY: !1 }, a.body = G.exports.createRef(), a.bodyInner = G.exports.createRef(), a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.updateBodyOverflow = function() {
    var o = this.body.current, a = this.bodyInner.current;
    if (o && a) {
      var u = o.getBoundingClientRect(), c = a.getBoundingClientRect(), f = c.height > u.height, h = c.width > u.width;
      h === this.state.overflowX && f === this.state.overflowY || this.setState({ overflowX: h, overflowY: f });
    }
  }, i.componentDidMount = function() {
    this.updateBodyOverflow();
  }, i.componentDidUpdate = function(o, a, u) {
    this.updateBodyOverflow();
  }, i.render = function() {
    return k("div", { className: this.className, ref: this.body, children: k("div", { className: "brick-dialog-body-inner", ref: this.bodyInner, children: this.props.children }) });
  }, rt(r, [{ key: "className", get: function() {
    var o, a = this.props.className;
    return ue("brick-dialog-body", ((o = {})["brick-dialog-body-overflow-x"] = this.state.overflowX, o["brick-dialog-body-overflow-y"] = this.state.overflowY, o), a);
  } }]), r;
}(G.exports.Component);
si.propTypes = { className: _.exports.string }, si.displayName = "DialogBody", si.defaultProps = { className: "" };
var qr = function(e) {
  function r() {
    return e.apply(this, arguments) || this;
  }
  return qe(r, e), r.prototype.render = function() {
    return k("div", { className: this.className, children: this.props.children });
  }, rt(r, [{ key: "className", get: function() {
    var i = this.props.className;
    return ue("brick-dialog-foot", i);
  } }]), r;
}(G.exports.Component);
qr.propTypes = { className: _.exports.string }, qr.displayName = "DialogFoot", qr.defaultProps = { className: "" };
var Xw = Ca("xs", "sm", "md", "lg", "xl"), lj = Hk("dialog", { en_us: { confirm: "Confirm", cancel: "Cancel" }, zh_cn: { confirm: "\u786E\u5B9A", cancel: "\u53D6\u6D88" } }), WE = { className: "", maskCancel: !1, width: "sm", actionsAlign: "right", showHeader: !0, showCloseX: !1 }, Lh = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).componentLocale = lj, a.resizeListener = null, a.handleClickConfirm = function(h) {
      return Se(a.props.onConfirm, h);
    }, a.handleClickCancel = function(h) {
      return Se(a.props.onCancel, h);
    }, a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.getClassName = function() {
    var o, a = this.props, u = a.className, c = a.width, f = a.headline, h = this.actionsAlign, m = this.size;
    return ue("brick-dialog", ((o = {})["brick-dialog-size-" + m] = m, o["brick-dialog-width-" + c] = St(Xw).call(Xw, c), o["brick-dialog-without-headline"] = !f, o["brick-dialog-actions-align-" + h] = h, o), u);
  }, i.getModalProps = function() {
    var o = this.props;
    return Be({ className: this.className, onClickMask: o.maskCancel ? this.handleClickCancel : void 0 }, On(o, ["className", "size", "width", "headline", "actions", "onConfirm", "onCancel", "maskCancel", "actionsAlign", "showCloseX", "minHeight", "osType", "showHeader"]));
  }, i.renderCloseX = function() {
    if (!this.props.showCloseX)
      return k(Gt, {});
    var o = ue("brick-dialog-close-x", "brick-dialog-close-type-" + this.osType);
    return k("div", { className: o, onClick: this.handleClickCancel, children: k(Lt, { svg: x8 }) });
  }, i.renderHead = function() {
    var o = this.props, a = o.headline, u = o.showHeader, c = o.osType;
    return u ? k(Oh, { osType: c, children: a }) : k(Gt, {});
  }, i.renderBody = function() {
    var o;
    return Qu(o = this.childrenArray).call(o, function(a) {
      if (G.exports.isValidElement(a)) {
        var u = a.type;
        return u === qr || u === qr || u === si;
      }
      return !1;
    }) ? null : k(si, { children: this.props.children });
  }, i.renderActions = function() {
    var o = this.props.actions;
    if (!oe(o))
      return o;
    var a = this.size, u = k(mr, { size: a, onClick: this.handleClickCancel, children: this.cancelLabel }), c = k(mr, { size: a, type: "important", onClick: this.handleClickConfirm, children: this.confirmLabel });
    return this.osType === "mac" ? K(Gt, { children: [u, c] }) : K(Gt, { children: [c, u] });
  }, i.renderFoot = function() {
    var o = this.renderActions();
    return o ? k(qr, { children: o }) : null;
  }, i.componentDidMount = function() {
    var o = this;
    this.resizeListener = function(a, u, c, f) {
      return f === void 0 && (f = !1), a && a.addEventListener ? (a.addEventListener(u, c, f), { target: a, remove: function() {
        a.removeEventListener(u, c, f);
      } }) : null;
    }(window, "resize", function() {
      o.forceUpdate();
    });
  }, i.componentWillUnmount = function() {
    this.resizeListener && this.resizeListener.remove();
  }, i.render = function() {
    var o, a = pl(o = this.childrenArray).call(o, function(h) {
      return G.exports.isValidElement(h);
    }), u = Na(a).call(a, function(h) {
      return h.type === Oh;
    }), c = Na(a).call(a, function(h) {
      return h.type === si;
    }), f = Na(a).call(a, function(h) {
      return h.type === qr;
    });
    return k(aj, { ...this.modalProps, children: K("div", { className: "brick-dialog-wrap", style: this.wrapStyle, children: [this.renderCloseX(), u || this.renderHead(), c || this.renderBody(), f || this.renderFoot()] }) });
  }, rt(r, [{ key: "osType", get: function() {
    return UE(this.props.osType);
  } }, { key: "className", get: function() {
    return this.getClassName();
  } }, { key: "size", get: function() {
    return this.getDefaultValueUsingTheme("size", "defaultSize");
  } }, { key: "actionsAlign", get: function() {
    return $r(this, "actionsAlign", "dialogActionsAlign");
  } }, { key: "modalProps", get: function() {
    return this.getModalProps();
  } }, { key: "childrenArray", get: function() {
    return this.props.children ? G.exports.Children.toArray(this.props.children) : [];
  } }, { key: "confirmLabel", get: function() {
    var o = this.props.confirmLabel;
    return oe(o) ? this.getLocaleText("confirm") : o;
  } }, { key: "cancelLabel", get: function() {
    var o = this.props.cancelLabel;
    return oe(o) ? this.getLocaleText("cancel") : o;
  } }, { key: "minHeight", get: function() {
    var o = this.getDefaultValueUsingTheme("minHeight", "dialogMinHeight");
    return oe(o) ? 240 : o;
  } }, { key: "maxHeight", get: function() {
    return this.getDefaultValueUsingTheme("maxHeight", "dialogMaxHeight") || 680;
  } }, { key: "topDistance", get: function() {
    return this.getDefaultValueUsingTheme("topDistance", "dialogTopDistance") || 60;
  } }, { key: "wrapStyle", get: function() {
    var o = this.props.width, a = this.maxHeight, u = this.minHeight, c = this.topDistance, f = c / 2, h = { maxHeight: a, minHeight: u }, m = window.innerHeight;
    typeof o == "number" && (h.width = o);
    var v = c;
    return m < u + 2 * f ? (v = f, h.maxHeight = u) : m <= a + 2 * f ? (v = f, h.maxHeight = m - 2 * v) : m < a + 2 * v && (v = (m - a) / 2), h.margin = v + "px auto", h;
  } }]), r;
}(hl);
Lh.displayName = "BaseDialog", Lh.defaultProps = WE;
var XE = function(e) {
  function r() {
    return e.apply(this, arguments) || this;
  }
  return qe(r, e), r;
}(Lh);
XE.defaultProps = WE;
function sj(e) {
  const { showCancelButton: r, showConfirmButton: i, maskCancel: o, actions: a, osType: u, children: c, ...f } = e;
  let h = a, m = o;
  return r || i || a || (h = k("div", {}), o === void 0 && (m = !0)), k(XE, { actions: h, maskCancel: m, osType: "windows", ...f, children: c });
}
const Qo = { root: "kel-root-JtbsZ", border: "kel-border-BglZy", borderPadding: "kel-borderPadding-il8UU", arrow: "kel-arrow-buJQo", link: "kel-link-NXog6", arrownormal: "kel-arrownormal-J-5--", arrowerror: "kel-arrowerror-bXFZA", arrowsuccess: "kel-arrowsuccess-rkrX7", arrowsecondary: "kel-arrowsecondary-rOoEA", arrowprimary: "kel-arrowprimary-lEKAt" };
var Mh = ((e) => (e.Normal = "normal", e.Important = "important", e.Plain = "plain", e.Intensive = "intensive", e.WithArrow = "withArrow", e))(Mh || {}), QE = ((e) => (e.Normal = "normal", e.Error = "error", e.Success = "success", e.Primary = "primary", e.Secondary = "secondary", e))(QE || {}), YE = ((e) => (e.XS = "xs", e.SM = "sm", e.MD = "md", e.LG = "lg", e))(YE || {});
const Qw = G.exports.forwardRef((e, r) => {
  const { type: i } = e, { children: o, border: a = !1, className: u, ...c } = e, f = i === "withArrow", h = ue(f ? Qo.link : "", (c == null ? void 0 : c.noMinWidth) && Qo.root, a && Qo.border, a && i === "plain" && Qo.borderPadding, u), m = f ? "plain" : i;
  return delete c.noMinWidth, K(mr, { className: h, ...c, type: m, ref: r, children: [o, f && k("div", { className: ue(Qo.arrow, Qo[`arrow${(c == null ? void 0 : c.color) || "normal"}`]) })] });
}), uj = "kel-root-ToWcq";
function cj(e) {
  const r = Uh(), { confirmDisabled: i = !1, confirmColor: o = QE.Normal, confirmLabel: a, cancelLabel: u, onConfirm: c, onCancel: f, className: h, children: m, ButtonClassName: v, showCancelButton: y = !0, confirmLoading: b = !1, ...E } = e, A = YE.MD, S = a || r.formatMessage({ id: "commonEnter" }), H = u || r.formatMessage({ id: "commonCancel" }), D = ue("in-entity-linking-popper-inner", uj, h);
  return k(sj, { className: D, actions: K("div", { children: [y && k(Qw, { type: Mh.Plain, border: !0, shape: "capsule", size: A, onClick: f, className: v, children: H }), k(Qw, { noMinWidth: !0, type: Mh.Important, shape: "capsule", color: o, size: A, disabled: i, onClick: c, className: v, loading: b, children: S })] }), onCancel: f, ...E, children: m });
}
const ba = { t18: "kel-t18-OOydI", t16: "kel-t16-n6sci", t14: "kel-t14-xlMhk", t13: "kel-t13-PQF-k", t12: "kel-t12-ZNe-z", t10: "kel-t10-tNx9Z", bold: "kel-bold-XNfCo", error: "kel-error-wwBex", warning: "kel-warning-b2s3y", primary: "kel-primary-yCwlH", secondary: "kel-secondary-IQWYR", disabled: "kel-disabled-1D66Q", dark: "kel-dark--jKtH", white: "kel-white-5VFVo", link: "kel-link-nqOYB", info: "kel-info---B1h", normal: "kel-normal-zH9gv" };
var Ih = ((e) => (e.T18 = "t18", e.T16 = "t16", e.T14 = "t14", e.T13 = "t13", e.T12 = "t12", e.T10 = "t10", e))(Ih || {}), _h = ((e) => (e.Error = "error", e.Warning = "warning", e.Primary = "primary", e.Secondary = "secondary", e.Disabled = "disabled", e.Dark = "dark", e.White = "white", e.Link = "link", e.Info = "info", e.Normal = "normal", e))(_h || {});
const Yw = G.exports.forwardRef((e, r) => {
  const { type: i, color: o, bold: a, className: u, title: c, children: f, ...h } = e, m = ue(i ? ba[i] : ba.t14, o ? ba[o] : ba.primary, a ? ba.bold : "", u);
  return k("span", { className: m, ...h, ref: r, title: c, children: f });
});
var au = function(e) {
  function r() {
    for (var o, a, u = arguments.length, c = new Array(u), f = 0; f < u; f++)
      c[f] = arguments[f];
    return (a = e.call.apply(e, $e(o = [this]).call(o, c)) || this).refTrigger = G.exports.createRef(), a;
  }
  qe(r, e);
  var i = r.prototype;
  return i.renderTooltipWrap = function() {
    var o = this.props.content;
    return o ? k("div", { className: "brick-tooltip-wrap", children: k("div", { children: o }) }) : null;
  }, i.render = function() {
    return K($o, { ...this.triggerProps, children: [this.props.children, k(hr, { ...this.popperProps, children: this.renderTooltipWrap() })] });
  }, rt(r, [{ key: "className", get: function() {
    var o, a = this.props, u = a.className, c = a.reverseColor;
    return ue("brick-tooltip", ((o = {})["brick-tooltip-reverse-color"] = c, o), u);
  } }, { key: "triggerProps", get: function() {
    return Be({}, On(this.props, ["className", "placement", "content"]), { ref: this.refTrigger });
  } }, { key: "popperProps", get: function() {
    return Be({ className: this.className, withArrow: !0 }, Un(this.props, ["placement", "arrowOffset"]));
  } }]), r;
}(G.exports.Component);
au.propTypes = { className: _.exports.string, content: _.exports.node, reverseColor: _.exports.bool }, au.displayName = "Tooltip", au.defaultProps = { className: "", type: "hover", reverseColor: !0 };
function fj(e) {
  return k(au, { ...e, className: ue("ku-entity-linking-tooltip", e.className) });
}
const pj = "kel-tooltip-mhsC1";
var KE = ((e) => (e.Click = "click", e.Hover = "hover", e.Focus = "focus", e))(KE || {});
const dj = G.exports.forwardRef((e, r) => {
  const { children: i, trigger: o, type: a, className: u, ...c } = e, f = o;
  return k(fj, { className: ue(pj, u), type: f, ref: r, ...c, children: i });
}), hj = "kel-icon-5Iulk", mj = "kel-dialog-shvmp", gj = "kel-moreMenu-NRGi8", vj = ({ onBlockEntity: e }) => {
  const [r, i] = G.exports.useState(!1), o = G.exports.useCallback(() => {
    i(!0);
  }, []), a = G.exports.useCallback(() => {
    e && e();
  }, [e]), u = G.exports.useCallback(() => {
    i(!1);
  }, []), c = [{ value: "block", label: K("span", { className: "block-the-entry", children: [k("span", { children: "\u5C4F\u853D\u8BE5\u8BCD\u6761" }), k(dj, { className: "block-the-entry-tooltip", placement: "bottom", trigger: KE.Hover, content: "\u53EF\u5728\u4E2A\u4EBA\u5934\u50CF > \u8BBE\u7F6E > \u667A\u80FD\u63A8\u8350 > \u77E5\u8BC6\u661F\u94FE \u5173\u95ED\u6B64\u529F\u80FD", children: k("span", { style: { display: "flex" }, children: k(mi, { svg: gD, size: Ga.XS }) }) })] }), onClick: o }];
  return K(Gt, { children: [k(qD, { className: ue("in-entity-linking-popper-inner", gj), triggerType: "click", placement: "bottom-end", options: c, value: null, children: k("span", { children: k(mi, { className: hj, svg: mD }) }) }), k(cj, { visible: r, className: mj, onConfirm: a, onCancel: u, showCloseX: !1, showHeader: !1, children: K("div", { children: [k("div", { children: k(Yw, { type: Ih.T16, color: _h.Dark, children: "\u786E\u5B9A\u5C4F\u853D\u8BCD\u6761\u4E48\uFF1F" }) }), k("div", { style: { marginTop: 10 }, children: k(Yw, { type: Ih.T14, color: _h.Secondary, children: "\u5C4F\u853D\u540E\u9488\u5BF9\u5F53\u524D\u8BCD\u6761\u5C06\u4E0D\u518D\u8FDB\u884C\u661F\u94FE\u5C55\u793A" }) })] }) })] });
}, yj = "kel-expand-collapse-wphEb", bj = "kel-header--b-hF", wj = "kel-desc-n0yiI", kj = "kel-btn-mxQ6-", xj = "kel-content-Rg3Na", Ej = "kel-expanded-dI8oj";
function Sj(e) {
  const { title: r, children: i, className: o, onClickExpand: a } = e, [u, c] = G.exports.useState(!1), f = ue(o, yj, { [Ej]: u });
  return K("div", { className: f, children: [K("div", { className: bj, onClick: (h) => ((m) => {
    m.stopPropagation();
    const v = !u;
    c(v), a == null || a(v);
  })(h), children: [k("div", { className: wj, children: r }), k("div", { className: kj, children: u ? "\u6536\u8D77" : "\u5C55\u5F00" })] }), k("div", { className: xj, children: i })] });
}
const Ee = { popper: "kel-popper-UFsNo", hidden: "kel-hidden-3Dryj", card: "kel-card-XybKF", pictureWrap: "kel-pictureWrap-IqR97", picture: "kel-picture-dAJNO", header: "kel-header-9HN6t", title: "kel-title-6vj9k", right: "kel-right-JRNY8", body: "kel-body-wEMOI", content: "kel-content-rj5xG", "expand-btn": "kel-expand-btn-WAlVE", "link-wrap": "kel-link-wrap-W8n1q", "link-title": "kel-link-title-J5VBw", "link-list": "kel-link-list-D-x5F", "person-title": "kel-person-title-NjOl1", source: "kel-source-j6yBn", namesake: "kel-namesake-MRD6l", item: "kel-item-FVrvP", footer: "kel-footer-zLK0S", top: "kel-top-0kw14", like: "kel-like-JZLWr", icon: "kel-icon-U7B0w", feedback: "kel-feedback-xSYmk", bottom: "kel-bottom-pTWip", inner: "kel-inner-UXDyQ", logo: "kel-logo-IGdIl", text: "kel-text--DFz-", footerMask: "kel-footerMask-chcn-", loading: "kel-loading-Z0Wo2" }, lu = {};
function Kw(e) {
  delete lu[e];
}
function Zw(e) {
  Array.isArray(e == null ? void 0 : e.relatedPerson) && (e.relatedPerson = e.relatedPerson.filter((r) => r.chineseName && r.deptName));
}
const Cj = G.exports.forwardRef((e, r) => {
  const { target: i, entity: o, onMouseEnter: a, onMouseLeave: u, destroy: c, onExpandPolyseme: f, onLinkPolyseme: h } = e, { onRelatedPersonClick: m, onPoweredByClick: v, onLikedChange: y } = e, { getPopperData: b, usePopperEffect: E, openPageOfBaike: A, onFeedbackClick: S } = e, { onFeedbackSubmit: H, onLinkClick: D, onBlockEntity: L } = e, { entityId: V, entityName: Q, polysemeList: z = [], mention: te } = o, [J, he] = G.exports.useState(lu[V] || {}), le = G.exports.useRef(null), [me, ye] = G.exports.useState(Object.keys(J).length !== 0), [be, Me] = G.exports.useState(Object.keys(J).length !== 0 ? 1 : 0);
  G.exports.useImperativeHandle(r, () => ({ getPopperWrapEl: () => le.current })), G.exports.useEffect(() => {
    if (E)
      return E([o]);
  }, []), G.exports.useEffect(() => {
    if (Object.keys(J).length !== 0)
      return;
    const $ = b(o);
    $ instanceof Promise ? $.then((bt) => {
      if (!bt || Object.keys(bt).length === 0)
        return Me(2);
      Zw(bt), he(bt), Me(1), ye(!0), lu[V] = bt;
    }).catch((bt) => {
      bt && bt.code && bt.code === 404 ? Me(3) : Me(2);
    }) : (Zw($), he($), Me(1), ye(!0), lu[V] = $);
    const yt = setTimeout(() => {
      ye(!0);
    }, 100);
    return () => {
      clearTimeout(yt);
    };
  }, [V]);
  const we = G.exports.useCallback(() => {
    if (L) {
      const $ = L([o]);
      $ instanceof Promise && $.then(() => {
        yd({ content: "\u5DF2\u5C4F\u853D\u5F53\u524D\u8BCD\u6761\uFF0C\u540E\u7EED\u4E0D\u518D\u5C55\u793A", type: ru.Success }), c();
      }).catch((yt) => {
        console.log(yt), yd({ content: "\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5", type: ru.Error });
      });
    }
  }, [L]), ot = G.exports.useCallback(($) => {
    A && A([o, $]);
  }, [A]), Ue = G.exports.useCallback(($, yt) => {
    D && D([o, { event: $, url: yt }]);
  }, [D]), M = G.exports.useCallback(($) => {
    m && m([o, $]);
  }, [m]), N = G.exports.useCallback(($) => {
    f && f([o, $ ? "open" : "closed"]);
  }, [f]), X = G.exports.useCallback(($) => {
    h && h([$]);
  }, [h]), Y = G.exports.useCallback(() => {
    const $ = !J.userLike, yt = Number(J.likeNum) + ($ ? 1 : -1);
    if (y) {
      const bt = y([o, { nextUserLikeLocal: $, nextLikeNumLocal: yt }]);
      bt instanceof Promise ? bt.then(() => {
        he({ ...J, userLike: $, likeNum: yt }), Kw(V);
      }).catch((yl) => {
        console.error(yl);
      }) : (he({ ...J, userLike: $, likeNum: yt }), Kw(V));
    }
  }, [V, J]), re = G.exports.useCallback(() => {
    S && S([o]);
  }, [S]), pe = G.exports.useCallback(($) => {
    H && (H([o, $]), yd({ type: ru.Success, content: "\u53CD\u9988\u6210\u529F" }));
  }, [H]), Oe = G.exports.useCallback(() => {
    v && v([o]);
  }, [v]), Ce = J.likeNum && J.likeNum !== 0 ? J.likeNum > 999 ? "999+" : J.likeNum : "", de = J.wikiGroup && J.wikiGroup[0], ve = J.url || J.topicUrl || de || J.relatedLink && J.relatedLink.length !== 0, Dt = K("div", { className: Ee["link-list"], children: [J.url && k(Gs, { type: wa.plain, url: J.url, name: "\u5B98\u7F51", onClick: ($) => {
    Ue($, J.url);
  } }), J.topicUrl && k(Gs, { type: wa.plain, url: J.topicUrl, name: `${J.name}\u4E13\u9898\u9875`, onClick: ($) => {
    Ue($, J.topicUrl);
  } }), de && k(Gs, { type: wa.wiki, url: de.url, name: "\u5B98\u65B9\u77E5\u8BC6\u5E93", onClick: ($) => {
    Ue($, de.url);
  } }), J.relatedLink && J.relatedLink.slice(0, (() => {
    let $ = 3;
    return J.url && $--, J.topicUrl && $--, de && $--, $;
  })()).map(($) => k(Gs, { type: wa.recommend, url: $.pcUrl, name: $.name, onClick: (yt) => {
    Ue(yt, $.pcUrl);
  } }, $.pcUrl || $.mobileUrl))] });
  let Or = null;
  switch (be) {
    case 0:
      Or = K(Gt, { children: [k(sD, { className: Ee.icon, visible: !0 }), "\u8BCD\u6761\u52A0\u8F7D\u4E2D..."] });
      break;
    case 3:
      Or = k(Gt, { children: "\u8BCD\u6761\u5DF2\u4E0B\u7EBF" });
      break;
    case 2:
      Or = k(Gt, { children: "\u8BCD\u6761\u6682\u65F6\u65E0\u6CD5\u52A0\u8F7D\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5" });
  }
  return k(RE, { visible: me, target: i, className: ue("in-entity-linking-popper-inner", Ee.popper), onMouseEnter: a, onMouseLeave: u, placement: "bottom-start", popperWrapRef: le, preventOverflowBoundary: "viewport", modifiers: { offset: { offset: "0, 5" } }, children: K("div", { className: Ee.card, children: [J.pictureUrl && k("div", { className: Ee.pictureWrap, children: k("div", { className: Ee.picture, style: { backgroundImage: `url(${J.pictureUrl})` } }) }), K("div", { children: [K("div", { className: Ee.header, children: [k("div", { className: Ee.title, children: Q }), k("div", { className: Ee.right, children: k(vj, { onBlockEntity: we }) })] }), k("div", { className: Ee.body, children: be === 1 ? K(Gt, { children: [z.length > 0 ? k(Sj, { title: `${te}\u6709\u5176\u5B83\u540C\u540D\u8BCD\u6761`, className: Ee.namesake, onClickExpand: ($) => N($), children: z.map(($) => k("div", { title: $.polyDesc, className: Ee.item, children: k("span", { onClick: () => X($), children: $.polyDesc }) }, $.baikeOriginalUrl)) }) : null, k("div", { className: Ee.content, onClick: () => ot("card"), children: J.description }), ve && K("div", { className: Ee["link-wrap"], children: [k("div", { className: Ee["link-title"], children: "\u76F8\u5173\u94FE\u63A5" }), Dt] }), J.relatedPerson && J.relatedPerson.length > 0 && K(Gt, { children: [k("div", { className: Ee["person-title"], children: "\u76F8\u5173\u4EBA" }), k("div", { className: Ee["person-list"], children: J.relatedPerson.slice(0, 2).map(($) => k(VD, { name: $.chineseName, avatar: $.picUrl, organize: $.deptName, describe: (($ == null ? void 0 : $.labels) || []).join("\u3001") || ($ == null ? void 0 : $.tag) || "", onClick: () => M($) }, $.email)) })] })] }) : k("div", { className: Ee.loading, children: Or }) })] }), K("div", { className: Ee.footer, children: [K("div", { className: Ee.top, children: [K("div", { className: Ee.like, onClick: Y, children: [k(mi, { className: Ee.icon, svg: J.userLike ? pD : fD, size: Ga.LG }), "\u6709\u7528 ", Ce] }), k(UD, { onCommit: pe, children: K("div", { className: Ee.feedback, onClick: re, children: [k(mi, { className: Ee.icon, svg: dD, size: Ga.LG }), "\u53CD\u9988"] }) }), k("div", { className: Ee.right, onClick: () => ot("search"), children: k("span", { className: Ee["search-text"], children: "\u4F01\u4E1A\u767E\u79D1" }) })] }), k("div", { className: Ee.bottom, children: K("div", { className: Ee.inner, children: ["Powered By", K("div", { className: Ee.right, onClick: Oe, children: [k("i", { className: Ee.logo }), k("span", { className: Ee.text, children: "\u667A\u80FD\u77E5\u8BC6\u52A9\u624B" })] })] }) })] }), k("div", { className: Ee.footerMask })] }) });
}), Tj = "zh", Aj = { zh: { commonEnter: "\u786E\u5B9A", commonCancel: "\u53D6\u6D88" } };
let vr = null, Rh = null, wd = -1, ui = -1, xu = !1;
const Nj = 500, ZE = 200, Pj = "#1242B3", Oj = G.exports.createRef();
let Eu;
function Oa() {
  vr && (l2.unmountComponentAtNode(vr), document.body.removeChild(vr), vr = null, Rh = null);
}
function Lj(e) {
  var c, f, h, m, v;
  const r = e.closest("[data-entity-id]"), i = (c = r == null ? void 0 : r.dataset) == null ? void 0 : c.entityId, o = (f = r == null ? void 0 : r.dataset) == null ? void 0 : f.entityName, a = ((h = r == null ? void 0 : r.dataset) == null ? void 0 : h.entityMention) || "", u = JSON.parse(((m = r == null ? void 0 : r.dataset) == null ? void 0 : m.polysemeList) || "[]");
  if (r && i && o) {
    const y = (v = r.closest(Eu.blockSelectors)) == null ? void 0 : v.querySelector(`[data-entity-id="${i}"][data-entity-mention="${a}"]`);
    if (y === Rh)
      return;
    y && (Oa(), function(b, E) {
      E && (vr = document.createElement("div"), document.body.appendChild(vr), l2.render(k(UT, { locale: Tj, messages: Aj.zh, children: k(Cj, { ref: Oj, target: b, entity: E, onMouseEnter: function() {
        xu = !0, clearTimeout(ui);
      }, onMouseLeave: function() {
        xu = !1, clearTimeout(ui), ui = window.setTimeout(() => {
          Oa();
        }, ZE);
      }, destroy: Oa, ...Eu }) }), vr), Rh = b);
    }(y, { entityId: i, entityName: o, mention: a, polysemeList: u }));
  }
}
function qE(e) {
  var u, c, f;
  const r = e.target, i = (u = r == null ? void 0 : r.dataset) == null ? void 0 : u.entityId, o = (c = r == null ? void 0 : r.dataset) == null ? void 0 : c.entityMention;
  let a = [];
  i && r instanceof HTMLElement && (a = ((f = r.closest(Eu.blockSelectors)) == null ? void 0 : f.querySelectorAll(`[data-entity-id="${i}"][data-entity-mention="${o}"]`)) || [], a.forEach((h) => {
    h.style.color = Pj;
  }), xu = !1, clearTimeout(wd), clearTimeout(ui), wd = window.setTimeout(() => {
    Lj(r);
  }, Nj), r.addEventListener("mouseleave", function h() {
    a.forEach((m) => {
      m.style.color = "";
    }), clearTimeout(wd), clearTimeout(ui), xu || (ui = window.setTimeout(() => {
      Oa();
    }, ZE)), r == null || r.removeEventListener("mouseleave", h);
  }));
}
function JE(e) {
  const r = e.target;
  if (r && r instanceof Element) {
    const i = r.closest("[data-entity-id]"), o = !r.closest(".in-entity-linking-popper-inner");
    !i && vr && o && Oa();
  }
}
function qw() {
  document.removeEventListener("mouseenter", qE, !0), document.removeEventListener("click", JE, !0);
}
const Mj = function(e) {
  return qw(), Eu = e, document.addEventListener("mouseenter", qE, !0), document.addEventListener("click", JE, !0), () => {
    qw();
  };
}, Ij = { Decorator: jC, renderEntityPopper: Mj };
// export {
//   jC as Decorator,
//   Ij as default,
//   Mj as renderEntityPopper
// };

window.Decorator = jC;
window.renderEntityPopper = Mj;