define(function(require, exports, module) {
  require("jquery");

  ! function(a) {
    "use strict";

    function p() {
      var i, a = !1;
      if ("localStorage" in window) try {
        window.localStorage.setItem("_tmptest", "tmpval"), a = !0, window.localStorage.removeItem("_tmptest")
      } catch (b) {}
      if (a) try {
          window.localStorage && (e = window.localStorage, h = "localStorage", k = e.jStorage_update)
        } catch (c) {} else if ("globalStorage" in window) try {
          window.globalStorage && (e = "localhost" == window.location.hostname ? window.globalStorage["localhost.localdomain"] : window.globalStorage[window.location.hostname], h = "globalStorage", k = e.jStorage_update)
        } catch (d) {} else {
          if (f = document.createElement("link"), !f.addBehavior) return f = null, void 0;
          f.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(f);
          try {
            f.load("jStorage")
          } catch (g) {
            f.setAttribute("jStorage", "{}"), f.save("jStorage"), f.load("jStorage")
          }
          i = "{}";
          try {
            i = f.getAttribute("jStorage")
          } catch (j) {}
          try {
            k = f.getAttribute("jStorage_update")
          } catch (l) {}
          e.jStorage = i, h = "userDataBehavior"
        }
        w(), z(), r(), A(), "addEventListener" in window && window.addEventListener("pageshow", function(a) {
        a.persisted && s()
      }, !1)
    }

    function q() {
      var a = "{}";
      if ("userDataBehavior" == h) {
        f.load("jStorage");
        try {
          a = f.getAttribute("jStorage")
        } catch (b) {}
        try {
          k = f.getAttribute("jStorage_update")
        } catch (c) {}
        e.jStorage = a
      }
      w(), z(), A()
    }

    function r() {
      "localStorage" == h || "globalStorage" == h ? "addEventListener" in window ? window.addEventListener("storage", s, !1) : document.attachEvent("onstorage", s) : "userDataBehavior" == h && setInterval(s, 1e3)
    }

    function s() {
      var a;
      clearTimeout(j), j = setTimeout(function() {
        if ("localStorage" == h || "globalStorage" == h) a = e.jStorage_update;
        else if ("userDataBehavior" == h) {
          f.load("jStorage");
          try {
            a = f.getAttribute("jStorage_update")
          } catch (b) {}
        }
        a && a != k && (k = a, t())
      }, 25)
    }

    function t() {
      var b, e, f, g, a = c.parse(c.stringify(d.__jstorage_meta.CRC32));
      q(), b = c.parse(c.stringify(d.__jstorage_meta.CRC32)), f = [], g = [];
      for (e in a)
        if (a.hasOwnProperty(e)) {
          if (!b[e]) {
            g.push(e);
            continue
          }
          a[e] != b[e] && "2." == String(a[e]).substr(0, 2) && f.push(e)
        }
      for (e in b) b.hasOwnProperty(e) && (a[e] || f.push(e));
      u(f, "updated"), u(g, "deleted")
    }

    function u(a, b) {
      var c, d, e, f, g;
      if (a = [].concat(a || []), "flushed" == b) {
        a = [];
        for (g in i) i.hasOwnProperty(g) && a.push(g);
        b = "deleted"
      }
      for (c = 0, e = a.length; e > c; c++) {
        if (i[a[c]])
          for (d = 0, f = i[a[c]].length; f > d; d++) i[a[c]][d](a[c], b);
        if (i["*"])
          for (d = 0, f = i["*"].length; f > d; d++) i["*"][d](a[c], b)
      }
    }

    function v() {
      var a = (+new Date).toString();
      if ("localStorage" == h || "globalStorage" == h) try {
        e.jStorage_update = a
      } catch (b) {
        h = !1
      } else "userDataBehavior" == h && (f.setAttribute("jStorage_update", a), f.save("jStorage"));
      s()
    }

    function w() {
      if (e.jStorage) try {
        d = c.parse(String(e.jStorage))
      } catch (a) {
        e.jStorage = "{}"
      } else e.jStorage = "{}";
      g = e.jStorage ? String(e.jStorage).length : 0, d.__jstorage_meta || (d.__jstorage_meta = {}), d.__jstorage_meta.CRC32 || (d.__jstorage_meta.CRC32 = {})
    }

    function x() {
      C();
      try {
        e.jStorage = c.stringify(d), f && (f.setAttribute("jStorage", e.jStorage), f.save("jStorage")), g = e.jStorage ? String(e.jStorage).length : 0
      } catch (a) {}
    }

    function y(a) {
      if ("string" != typeof a && "number" != typeof a) throw new TypeError("Key name must be string or numeric");
      if ("__jstorage_meta" == a) throw new TypeError("Reserved key name");
      return !0
    }

    function z() {
      var a, b, c, e, f = 1 / 0,
        g = !1,
        h = [];
      if (clearTimeout(n), d.__jstorage_meta && "object" == typeof d.__jstorage_meta.TTL) {
        a = +new Date, c = d.__jstorage_meta.TTL, e = d.__jstorage_meta.CRC32;
        for (b in c) c.hasOwnProperty(b) && (c[b] <= a ? (delete c[b], delete e[b], delete d[b], g = !0, h.push(b)) : c[b] < f && (f = c[b]));
        1 / 0 != f && (n = setTimeout(z, Math.min(f - a, 2147483647))), g && (x(), v(), u(h, "deleted"))
      }
    }

    function A() {
      var a, b, c, e, f;
      if (d.__jstorage_meta.PubSub) {
        for (e = m, f = [], a = b = d.__jstorage_meta.PubSub.length - 1; a >= 0; a--) c = d.__jstorage_meta.PubSub[a], c[0] > m && (e = c[0], f.unshift(c));
        for (a = f.length - 1; a >= 0; a--) B(f[a][1], f[a][2]);
        m = e
      }
    }

    function B(a, b) {
      if (l[a])
        for (var d = 0, e = l[a].length; e > d; d++) try {
          l[a][d](a, c.parse(c.stringify(b)))
        } catch (f) {}
    }

    function C() {
      var a, b, c;
      if (d.__jstorage_meta.PubSub) {
        for (a = +new Date - 2e3, b = 0, c = d.__jstorage_meta.PubSub.length; c > b; b++)
          if (d.__jstorage_meta.PubSub[b][0] <= a) {
            d.__jstorage_meta.PubSub.splice(b, d.__jstorage_meta.PubSub.length - b);
            break
          }
        d.__jstorage_meta.PubSub.length || delete d.__jstorage_meta.PubSub
      }
    }

    function D(a, b) {
      d.__jstorage_meta || (d.__jstorage_meta = {}), d.__jstorage_meta.PubSub || (d.__jstorage_meta.PubSub = []), d.__jstorage_meta.PubSub.unshift([+new Date, a, b]), x(), v()
    }

    function E(a, b) {
      for (var f, c = a.length, d = b ^ c, e = 0; c >= 4;) f = 255 & a.charCodeAt(e) | (255 & a.charCodeAt(++e)) << 8 | (255 & a.charCodeAt(++e)) << 16 | (255 & a.charCodeAt(++e)) << 24, f = 1540483477 * (65535 & f) + ((65535 & 1540483477 * (f >>> 16)) << 16), f ^= f >>> 24, f = 1540483477 * (65535 & f) + ((65535 & 1540483477 * (f >>> 16)) << 16), d = 1540483477 * (65535 & d) + ((65535 & 1540483477 * (d >>> 16)) << 16) ^ f, c -= 4, ++e;
      switch (c) {
        case 3:
          d ^= (255 & a.charCodeAt(e + 2)) << 16;
        case 2:
          d ^= (255 & a.charCodeAt(e + 1)) << 8;
        case 1:
          d ^= 255 & a.charCodeAt(e), d = 1540483477 * (65535 & d) + ((65535 & 1540483477 * (d >>> 16)) << 16)
      }
      return d ^= d >>> 13, d = 1540483477 * (65535 & d) + ((65535 & 1540483477 * (d >>> 16)) << 16), d ^= d >>> 15, d >>> 0
    }
    var n, d, e, f, g, h, i, j, k, l, m, o, b = "0.4.12",
      c = {
        parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(a) {
          return String(a).evalJSON()
        } || a.parseJSON || a.evalJSON,
        stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || a.toJSON
      };
    if ("function" != typeof c.parse || "function" != typeof c.stringify) throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    d = {
      __jstorage_meta: {
        CRC32: {}
      }
    }, e = {
      jStorage: "{}"
    }, f = null, g = 0, h = !1, i = {}, j = !1, k = 0, l = {}, m = +new Date, o = {
      isXML: function(a) {
        var b = (a ? a.ownerDocument || a : 0).documentElement;
        return b ? "HTML" !== b.nodeName : !1
      },
      encode: function(a) {
        if (!this.isXML(a)) return !1;
        try {
          return (new XMLSerializer).serializeToString(a)
        } catch (b) {
          try {
            return a.xml
          } catch (c) {}
        }
        return !1
      },
      decode: function(a) {
        var c, b = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function(a) {
          var b = new ActiveXObject("Microsoft.XMLDOM");
          return b.async = "false", b.loadXML(a), b
        };
        return b ? (c = b.call("DOMParser" in window && new DOMParser || window, a, "text/xml"), this.isXML(c) ? c : !1) : !1
      }
    }, a.jStorage = {
      version: b,
      set: function(a, b, e) {
        if (y(a), e = e || {}, "undefined" == typeof b) return this.deleteKey(a), b;
        if (o.isXML(b)) b = {
          _is_xml: !0,
          xml: o.encode(b)
        };
        else {
          if ("function" == typeof b) return void 0;
          b && "object" == typeof b && (b = c.parse(c.stringify(b)))
        }
        return d[a] = b, d.__jstorage_meta.CRC32[a] = "2." + E(c.stringify(b), 2538058380), this.setTTL(a, e.TTL || 0), u(a, "updated"), b
      },
      get: function(a, b) {
        return y(a), a in d ? d[a] && "object" == typeof d[a] && d[a]._is_xml ? o.decode(d[a].xml) : d[a] : "undefined" == typeof b ? null : b
      },
      deleteKey: function(a) {
        return y(a), a in d ? (delete d[a], "object" == typeof d.__jstorage_meta.TTL && a in d.__jstorage_meta.TTL && delete d.__jstorage_meta.TTL[a], delete d.__jstorage_meta.CRC32[a], x(), v(), u(a, "deleted"), !0) : !1
      },
      setTTL: function(a, b) {
        var c = +new Date;
        return y(a), b = Number(b) || 0, a in d ? (d.__jstorage_meta.TTL || (d.__jstorage_meta.TTL = {}), b > 0 ? d.__jstorage_meta.TTL[a] = c + b : delete d.__jstorage_meta.TTL[a], x(), z(), v(), !0) : !1
      },
      getTTL: function(a) {
        var c, b = +new Date;
        return y(a), a in d && d.__jstorage_meta.TTL && d.__jstorage_meta.TTL[a] ? (c = d.__jstorage_meta.TTL[a] - b, c || 0) : 0
      },
      flush: function() {
        return d = {
          __jstorage_meta: {
            CRC32: {}
          }
        }, x(), v(), u(null, "flushed"), !0
      },
      storageObj: function() {
        function a() {}
        return a.prototype = d, new a
      },
      index: function() {
        var b, a = [];
        for (b in d) d.hasOwnProperty(b) && "__jstorage_meta" != b && a.push(b);
        return a
      },
      storageSize: function() {
        return g
      },
      currentBackend: function() {
        return h
      },
      storageAvailable: function() {
        return !!h
      },
      listenKeyChange: function(a, b) {
        y(a), i[a] || (i[a] = []), i[a].push(b)
      },
      stopListening: function(a, b) {
        if (y(a), i[a]) {
          if (!b) return delete i[a], void 0;
          for (var c = i[a].length - 1; c >= 0; c--) i[a][c] == b && i[a].splice(c, 1)
        }
      },
      subscribe: function(a, b) {
        if (a = (a || "").toString(), !a) throw new TypeError("Channel not defined");
        l[a] || (l[a] = []), l[a].push(b)
      },
      publish: function(a, b) {
        if (a = (a || "").toString(), !a) throw new TypeError("Channel not defined");
        D(a, b)
      },
      reInit: function() {
        q()
      },
      noConflict: function(a) {
        return delete window.$.jStorage, a && (window.jStorage = this), this
      }
    }, p()
  }($);
});