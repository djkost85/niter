 // Alert javascript object in alert box
function alertObject(obj){      
    for(var key in obj) {
        alert('key: ' + key + '\n' + 'value: ' + obj[key]);
        if( typeof obj[key] === 'object' ) {
            alertObject(obj[key]);
        }
    }
}

$('#movie-modal').on('hidden.bs.modal', function () {
    jwplayer().play(false);
    // if (jwplayer().pause == false)
    //     jwplayer().pause();
})

$("#review-modal #submit, .review-form #submit").click(function(event){
    event.preventDefault();
    var title_id = $('#title_id').val();
    var url_main = $('body').attr('data-url');
    var url_temp = url_main +"/movies/" + title_id + "/reviews"
    alert(url_temp)
    $.ajax({
        type: "POST",
        url: url_temp,
        data: $('.review-form form').serialize(),
        success: function(msg){
            $("#review-modal").modal('hide');
            location.reload();        
        },
        error: function(){
            alert("Failure");
        }
    });
});


$(window).ready(function () {
    $(window).scroll(function () {
        $("body").hasClass("animate-nav") && (0 === $(window).scrollTop() ? ($("body").addClass("nav-trans"), $("nav").removeClass("animated bounce")) : ($("body").removeClass("nav-trans"), $("nav").addClass("animated bounce")))
    });
});

(function (t) {
    t(".movie-trigger").on("click", function () {
        var a = t(".modal-body").html();
        t("#movie-modal").modal(),
        t(document).on("hide.bs.modal",
        function () {
            t(".movie-trigger .modal-body").html(a)
        })
    })
})(jQuery);

! function (t, e) {
    function n(t) {
        var e = t.length,
            n = re.type(t);
        return re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t) {
        var e = fe[t] = {};
        return re.each(t.match(ae) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function o() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = re.expando + Math.random()
    }

    function r(t, n, i) {
        var o;
        if (i === e && 1 === t.nodeType)
            if (o = "data-" + n.replace(ye, "-$1").toLowerCase(), i = t.getAttribute(o), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : ve.test(i) ? JSON.parse(i) : i
                } catch (r) {}
                ge.set(t, n, i)
            } else i = e;
        return i
    }

    function s() {
        return !0
    }

    function a() {
        return !1
    }

    function l() {
        try {
            return V.activeElement
        } catch (t) {}
    }

    function u(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function c(t, e, n) {
        if (re.isFunction(e)) return re.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return re.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (Ae.test(e)) return re.filter(e, t, n);
            e = re.filter(e, t)
        }
        return re.grep(t, function (t) {
            return ee.call(e, t) >= 0 !== n
        })
    }

    function h(t, e) {
        return re.nodeName(t, "table") && re.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function p(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function d(t) {
        var e = Fe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function f(t, e) {
        for (var n = t.length, i = 0; n > i; i++) me.set(t[i], "globalEval", !e || me.get(e[i], "globalEval"))
    }

    function g(t, e) {
        var n, i, o, r, s, a, l, u;
        if (1 === e.nodeType) {
            if (me.hasData(t) && (r = me.access(t), s = me.set(e, r), u = r.events)) {
                delete s.handle, s.events = {};
                for (o in u)
                    for (n = 0, i = u[o].length; i > n; n++) re.event.add(e, o, u[o][n])
            }
            ge.hasData(t) && (a = ge.access(t), l = re.extend({}, a), ge.set(e, l))
        }
    }

    function m(t, n) {
        var i = t.getElementsByTagName ? t.getElementsByTagName(n || "*") : t.querySelectorAll ? t.querySelectorAll(n || "*") : [];
        return n === e || n && re.nodeName(t, n) ? re.merge([t], i) : i
    }

    function v(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Le.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function y(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = Ze.length; o--;)
            if (e = Ze[o] + n, e in t) return e;
        return i
    }

    function b(t, e) {
        return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
    }

    function w(e) {
        return t.getComputedStyle(e, null)
    }

    function x(t, e) {
        for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (r[s] = me.get(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && b(i) && (r[s] = me.access(i, "olddisplay", S(i.nodeName)))) : r[s] || (o = b(i), (n && "none" !== n || !o) && me.set(i, "olddisplay", o ? n : re.css(i, "display"))));
        for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function C(t, e, n) {
        var i = Qe.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function k(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += re.css(t, n + Je[r], !0, o)), i ? ("content" === n && (s -= re.css(t, "padding" + Je[r], !0, o)), "margin" !== n && (s -= re.css(t, "border" + Je[r] + "Width", !0, o))) : (s += re.css(t, "padding" + Je[r], !0, o), "padding" !== n && (s += re.css(t, "border" + Je[r] + "Width", !0, o)));
        return s
    }

    function T(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = w(t),
            s = re.support.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = We(t, e, r), (0 > o || null == o) && (o = t.style[e]), Ue.test(o)) return o;
            i = s && (re.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + k(t, e, n || (s ? "border" : "content"), i, r) + "px"
    }

    function S(t) {
        var e = V,
            n = Xe[t];
        return n || (n = E(t, e), "none" !== n && n || (ze = (ze || re("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ze[0].contentWindow || ze[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = E(t, e), ze.detach()), Xe[t] = n), n
    }

    function E(t, e) {
        var n = re(e.createElement(t)).appendTo(e.body),
            i = re.css(n[0], "display");
        return n.remove(), i
    }

    function P(t, e, n, i) {
        var o;
        if (re.isArray(e)) re.each(e, function (e, o) {
            n || en.test(t) ? i(t, o) : P(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== re.type(e)) i(t, e);
        else
            for (o in e) P(t + "[" + o + "]", e[o], n, i)
    }

    function A(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(ae) || [];
            if (re.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function I(t, n, i, o) {
        function r(l) {
            var u;
            return s[l] = !0, re.each(t[l] || [], function (t, l) {
                var c = l(n, i, o);
                return "string" != typeof c || a || s[c] ? a ? !(u = c) : e : (n.dataTypes.unshift(c), r(c), !1)
            }), u
        }
        var s = {},
            a = t === bn;
        return r(n.dataTypes[0]) || !s["*"] && r("*")
    }

    function D(t, n) {
        var i, o, r = re.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== e && ((r[i] ? t : o || (o = {}))[i] = n[i]);
        return o && re.extend(!0, t, o), t
    }

    function $(t, n, i) {
        for (var o, r, s, a, l = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), o === e && (o = t.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (r in l)
                if (l[r] && l[r].test(o)) {
                    u.unshift(r);
                    break
                }
        if (u[0] in i) s = u[0];
        else {
            for (r in i) {
                if (!u[0] || t.converters[r + " " + u[0]]) {
                    s = r;
                    break
                }
                a || (a = r)
            }
            s = s || a
        }
        return s ? (s !== u[0] && u.unshift(s), i[s]) : e
    }

    function O(t, e, n, i) {
        var o, r, s, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (r = c.shift(); r;)
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (s = u[l + " " + r] || u["* " + r], !s)
                for (o in u)
                    if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: s ? h : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function j() {
        return setTimeout(function () {
            An = e
        }), An = re.now()
    }

    function _(t, e, n) {
        for (var i, o = (_n[e] || []).concat(_n["*"]), r = 0, s = o.length; s > r; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function N(t, e, n) {
        var i, o, r = 0,
            s = jn.length,
            a = re.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var e = An || j(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                return a.notifyWith(t, [u, r, n]), 1 > r && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: re.extend({}, e),
                opts: re.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: An || j(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = re.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) u.tweens[n].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (L(c, u.opts.specialEasing); s > r; r++)
            if (i = jn[r].call(u, t, c, u.opts)) return i;
        return re.map(c, _, u), re.isFunction(u.opts.start) && u.opts.start.call(t, u), re.fx.timer(re.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function L(t, e) {
        var n, i, o, r, s;
        for (n in t)
            if (i = re.camelCase(n), o = e[i], r = t[n], re.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), s = re.cssHooks[i], s && "expand" in s) {
                r = s.expand(r), delete t[i];
                for (n in r) n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
    }

    function M(t, n, i) {
        var o, r, s, a, l, u, c = this,
            h = {},
            p = t.style,
            d = t.nodeType && b(t),
            f = me.get(t, "fxshow");
        i.queue || (l = re._queueHooks(t, "fx"), null == l.unqueued && (l.unqueued = 0, u = l.empty.fire, l.empty.fire = function () {
            l.unqueued || u()
        }), l.unqueued++, c.always(function () {
            c.always(function () {
                l.unqueued--, re.queue(t, "fx").length || l.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in n || "width" in n) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === re.css(t, "display") && "none" === re.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", c.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (o in n)
            if (r = n[o], Dn.exec(r)) {
                if (delete n[o], s = s || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !f || f[o] === e) continue;
                    d = !0
                }
                h[o] = f && f[o] || re.style(t, o)
            }
        if (!re.isEmptyObject(h)) {
            f ? "hidden" in f && (d = f.hidden) : f = me.access(t, "fxshow", {}), s && (f.hidden = !d), d ? re(t).show() : c.done(function () {
                re(t).hide()
            }), c.done(function () {
                var e;
                me.remove(t, "fxshow");
                for (e in h) re.style(t, e, h[e])
            });
            for (o in h) a = _(d ? f[o] : 0, o, c), o in f || (f[o] = a.start, d && (a.end = a.start, a.start = "width" === o || "height" === o ? 1 : 0))
        }
    }

    function H(t, e, n, i, o) {
        return new H.prototype.init(t, e, n, i, o)
    }

    function F(t, e) {
        var n, i = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = Je[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function R(t) {
        return re.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var q, W, z = typeof e,
        B = t.location,
        V = t.document,
        Q = V.documentElement,
        U = t.jQuery,
        K = t.$,
        X = {},
        Y = [],
        G = "2.0.3",
        J = Y.concat,
        Z = Y.push,
        te = Y.slice,
        ee = Y.indexOf,
        ne = X.toString,
        ie = X.hasOwnProperty,
        oe = G.trim,
        re = function (t, e) {
            return new re.fn.init(t, e, q)
        },
        se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ae = /\S+/g,
        le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ce = /^-ms-/,
        he = /-([\da-z])/gi,
        pe = function (t, e) {
            return e.toUpperCase()
        },
        de = function () {
            V.removeEventListener("DOMContentLoaded", de, !1), t.removeEventListener("load", de, !1), re.ready()
        };
    re.fn = re.prototype = {
            jquery: G,
            constructor: re,
            init: function (t, n, i) {
                var o, r;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : le.exec(t), !o || !o[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                    if (o[1]) {
                        if (n = n instanceof re ? n[0] : n, re.merge(this, re.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : V, !0)), ue.test(o[1]) && re.isPlainObject(n))
                            for (o in n) re.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                        return this
                    }
                    return r = V.getElementById(o[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = V, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
            },
            selector: "",
            length: 0,
            toArray: function () {
                return te.call(this)
            },
            get: function (t) {
                return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
            },
            pushStack: function (t) {
                var e = re.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function (t, e) {
                return re.each(this, t, e)
            },
            ready: function (t) {
                return re.ready.promise().done(t), this
            },
            slice: function () {
                return this.pushStack(te.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            map: function (t) {
                return this.pushStack(re.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: Z,
            sort: [].sort,
            splice: [].splice
        }, re.fn.init.prototype = re.fn, re.extend = re.fn.extend = function () {
            var t, n, i, o, r, s, a = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || re.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                if (null != (t = arguments[l]))
                    for (n in t) i = a[n], o = t[n], a !== o && (c && o && (re.isPlainObject(o) || (r = re.isArray(o))) ? (r ? (r = !1, s = i && re.isArray(i) ? i : []) : s = i && re.isPlainObject(i) ? i : {}, a[n] = re.extend(c, s, o)) : o !== e && (a[n] = o));
            return a
        }, re.extend({
            expando: "jQuery" + (G + Math.random()).replace(/\D/g, ""),
            noConflict: function (e) {
                return t.$ === re && (t.$ = K), e && t.jQuery === re && (t.jQuery = U), re
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (t) {
                t ? re.readyWait++ : re.ready(!0)
            },
            ready: function (t) {
                (t === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0, t !== !0 && --re.readyWait > 0 || (W.resolveWith(V, [re]), re.fn.trigger && re(V).trigger("ready").off("ready")))
            },
            isFunction: function (t) {
                return "function" === re.type(t)
            },
            isArray: Array.isArray,
            isWindow: function (t) {
                return null != t && t === t.window
            },
            isNumeric: function (t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            },
            type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[ne.call(t)] || "object" : typeof t
            },
            isPlainObject: function (t) {
                if ("object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ie.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                return !0
            },
            isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            error: function (t) {
                throw Error(t)
            },
            parseHTML: function (t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || V;
                var i = ue.exec(t),
                    o = !n && [];
                return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, o), o && re(o).remove(), re.merge([], i.childNodes))
            },
            parseJSON: JSON.parse,
            parseXML: function (t) {
                var n, i;
                if (!t || "string" != typeof t) return null;
                try {
                    i = new DOMParser, n = i.parseFromString(t, "text/xml")
                } catch (o) {
                    n = e
                }
                return (!n || n.getElementsByTagName("parsererror").length) && re.error("Invalid XML: " + t), n
            },
            noop: function () {},
            globalEval: function (t) {
                var e, n = eval;
                t = re.trim(t), t && (1 === t.indexOf("use strict") ? (e = V.createElement("script"), e.text = t, V.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function (t) {
                return t.replace(ce, "ms-").replace(he, pe)
            },
            nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function (t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t);
                if (i) {
                    if (a)
                        for (; s > r && (o = e.apply(t[r], i), o !== !1); r++);
                    else
                        for (r in t)
                            if (o = e.apply(t[r], i), o === !1) break
                } else if (a)
                    for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
                else
                    for (r in t)
                        if (o = e.call(t[r], r, t[r]), o === !1) break; return t
            },
            trim: function (t) {
                return null == t ? "" : oe.call(t)
            },
            makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : Z.call(i, t)), i
            },
            inArray: function (t, e, n) {
                return null == e ? -1 : ee.call(e, t, n)
            },
            merge: function (t, n) {
                var i = n.length,
                    o = t.length,
                    r = 0;
                if ("number" == typeof i)
                    for (; i > r; r++) t[o++] = n[r];
                else
                    for (; n[r] !== e;) t[o++] = n[r++];
                return t.length = o, t
            },
            grep: function (t, e, n) {
                var i, o = [],
                    r = 0,
                    s = t.length;
                for (n = !!n; s > r; r++) i = !!e(t[r], r), n !== i && o.push(t[r]);
                return o
            },
            map: function (t, e, i) {
                var o, r = 0,
                    s = t.length,
                    a = n(t),
                    l = [];
                if (a)
                    for (; s > r; r++) o = e(t[r], r, i), null != o && (l[l.length] = o);
                else
                    for (r in t) o = e(t[r], r, i), null != o && (l[l.length] = o);
                return J.apply([], l)
            },
            guid: 1,
            proxy: function (t, n) {
                var i, o, r;
                return "string" == typeof n && (i = t[n], n = t, t = i), re.isFunction(t) ? (o = te.call(arguments, 2), r = function () {
                    return t.apply(n || this, o.concat(te.call(arguments)))
                }, r.guid = t.guid = t.guid || re.guid++, r) : e
            },
            access: function (t, n, i, o, r, s, a) {
                var l = 0,
                    u = t.length,
                    c = null == i;
                if ("object" === re.type(i)) {
                    r = !0;
                    for (l in i) re.access(t, n, l, i[l], !0, s, a)
                } else if (o !== e && (r = !0, re.isFunction(o) || (a = !0), c && (a ? (n.call(t, o), n = null) : (c = n, n = function (t, e, n) {
                    return c.call(re(t), n)
                })), n))
                    for (; u > l; l++) n(t[l], i, a ? o : o.call(t[l], l, n(t[l], i)));
                return r ? t : c ? n.call(t) : u ? n(t[0], i) : s
            },
            now: Date.now,
            swap: function (t, e, n, i) {
                var o, r, s = {};
                for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = s[r];
                return o
            }
        }), re.ready.promise = function (e) {
            return W || (W = re.Deferred(), "complete" === V.readyState ? setTimeout(re.ready) : (V.addEventListener("DOMContentLoaded", de, !1), t.addEventListener("load", de, !1))), W.promise(e)
        }, re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            X["[object " + e + "]"] = e.toLowerCase()
        }), q = re(V),
        function (t, e) {
            function n(t, e, n, i) {
                var o, r, s, a, l, u, c, h, f, g;
                if ((e ? e.ownerDocument || e : R) !== O && $(e), e = e || O, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (a = e.nodeType) && 9 !== a) return [];
                if (_ && !i) {
                    if (o = be.exec(t))
                        if (s = o[1]) {
                            if (9 === a) {
                                if (r = e.getElementById(s), !r || !r.parentNode) return n;
                                if (r.id === s) return n.push(r), n
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && H(e, r) && r.id === s) return n.push(r), n
                        } else {
                            if (o[2]) return te.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = o[3]) && k.getElementsByClassName && e.getElementsByClassName) return te.apply(n, e.getElementsByClassName(s)), n
                        }
                    if (k.qsa && (!N || !N.test(t))) {
                        if (h = c = F, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (u = p(t), (c = e.getAttribute("id")) ? h = c.replace(Ce, "\\$&") : e.setAttribute("id", h), h = "[id='" + h + "'] ", l = u.length; l--;) u[l] = h + d(u[l]);
                            f = de.test(t) && e.parentNode || e, g = u.join(",")
                        }
                        if (g) try {
                            return te.apply(n, f.querySelectorAll(g)), n
                        } catch (m) {} finally {
                            c || e.removeAttribute("id")
                        }
                    }
                }
                return x(t.replace(ce, "$1"), e, n, i)
            }

            function i() {
                function t(n, i) {
                    return e.push(n += " ") > S.cacheLength && delete t[e.shift()], t[n] = i
                }
                var e = [];
                return t
            }

            function o(t) {
                return t[F] = !0, t
            }

            function r(t) {
                var e = O.createElement("div");
                try {
                    return !!t(e)
                } catch (n) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) S.attrHandle[n[i]] = e
            }

            function a(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function u(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return o(function (e) {
                    return e = +e, o(function (n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function h() {}

            function p(t, e) {
                var i, o, r, s, a, l, u, c = B[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (a = t, l = [], u = S.preFilter; a;) {
                    (!i || (o = he.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = pe.exec(a)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(ce, " ")
                    }), a = a.slice(i.length));
                    for (s in S.filter)!(o = ve[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: s,
                        matches: o
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return e ? a.length : a ? n.error(t) : B(t, l).slice(0)
            }

            function d(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function f(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = W++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function (e, n, s) {
                    var a, l, u, c = q + " " + r;
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o)
                                if (u = e[F] || (e[F] = {}), (l = u[i]) && l[0] === c) {
                                    if ((a = l[1]) === !0 || a === T) return a === !0
                                } else if (l = u[i] = [c], l[1] = t(e, n, s) || T, l[1] === !0) return !0
                }
            }

            function g(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), u && e.push(a));
                return s
            }

            function v(t, e, n, i, r, s) {
                return i && !i[F] && (i = v(i)), r && !r[F] && (r = v(r, s)), o(function (o, s, a, l) {
                    var u, c, h, p = [],
                        d = [],
                        f = s.length,
                        g = o || w(e || "*", a.nodeType ? [a] : a, []),
                        v = !t || !o && e ? g : m(g, p, t, a, l),
                        y = n ? r || (o ? t : f || i) ? [] : s : v;
                    if (n && n(v, y, a, l), i)
                        for (u = m(y, d), i(u, [], a, l), c = u.length; c--;)(h = u[c]) && (y[d[c]] = !(v[d[c]] = h));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (u = [], c = y.length; c--;)(h = y[c]) && u.push(v[c] = h);
                                r(null, y = [], u, l)
                            }
                            for (c = y.length; c--;)(h = y[c]) && (u = r ? ne.call(o, h) : p[c]) > -1 && (o[u] = !(s[u] = h))
                        }
                    } else y = m(y === s ? y.splice(f, y.length) : y), r ? r(null, s, y, l) : te.apply(s, y)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = S.relative[t[0].type], s = r || S.relative[" "], a = r ? 1 : 0, l = f(function (t) {
                    return t === e
                }, s, !0), u = f(function (t) {
                    return ne.call(e, t) > -1
                }, s, !0), c = [

                    function (t, n, i) {
                        return !r && (i || n !== I) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                    }
                ]; o > a; a++)
                    if (n = S.relative[t[a].type]) c = [f(g(c), n)];
                    else {
                        if (n = S.filter[t[a].type].apply(null, t[a].matches), n[F]) {
                            for (i = ++a; o > i && !S.relative[t[i].type]; i++);
                            return v(a > 1 && g(c), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(ce, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && d(t))
                        }
                        c.push(n)
                    }
                return g(c)
            }

            function b(t, e) {
                var i = 0,
                    r = e.length > 0,
                    s = t.length > 0,
                    a = function (o, a, l, u, c) {
                        var h, p, d, f = [],
                            g = 0,
                            v = "0",
                            y = o && [],
                            b = null != c,
                            w = I,
                            x = o || s && S.find.TAG("*", c && a.parentNode || a),
                            C = q += null == w ? 1 : Math.random() || .1;
                        for (b && (I = a !== O && a, T = i); null != (h = x[v]); v++) {
                            if (s && h) {
                                for (p = 0; d = t[p++];)
                                    if (d(h, a, l)) {
                                        u.push(h);
                                        break
                                    }
                                b && (q = C, T = ++i)
                            }
                            r && ((h = !d && h) && g--, o && y.push(h))
                        }
                        if (g += v, r && v !== g) {
                            for (p = 0; d = e[p++];) d(y, f, a, l);
                            if (o) {
                                if (g > 0)
                                    for (; v--;) y[v] || f[v] || (f[v] = J.call(u));
                                f = m(f)
                            }
                            te.apply(u, f), b && !o && f.length > 0 && g + e.length > 1 && n.uniqueSort(u)
                        }
                        return b && (q = C, I = w), y
                    };
                return r ? o(a) : a
            }

            function w(t, e, i) {
                for (var o = 0, r = e.length; r > o; o++) n(t, e[o], i);
                return i
            }

            function x(t, e, n, i) {
                var o, r, s, a, l, u = p(t);
                if (!i && 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && k.getById && 9 === e.nodeType && _ && S.relative[r[1].type]) {
                        if (e = (S.find.ID(s.matches[0].replace(ke, Te), e) || [])[0], !e) return n;
                        t = t.slice(r.shift().value.length)
                    }
                    for (o = ve.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !S.relative[a = s.type]);)
                        if ((l = S.find[a]) && (i = l(s.matches[0].replace(ke, Te), de.test(r[0].type) && e.parentNode || e))) {
                            if (r.splice(o, 1), t = i.length && d(r), !t) return te.apply(n, i), n;
                            break
                        }
                }
                return A(t, u)(i, e, !_, n, de.test(t)), n
            }
            var C, k, T, S, E, P, A, I, D, $, O, j, _, N, L, M, H, F = "sizzle" + -new Date,
                R = t.document,
                q = 0,
                W = 0,
                z = i(),
                B = i(),
                V = i(),
                Q = !1,
                U = function (t, e) {
                    return t === e ? (Q = !0, 0) : 0
                },
                K = typeof e,
                X = 1 << 31,
                Y = {}.hasOwnProperty,
                G = [],
                J = G.pop,
                Z = G.push,
                te = G.push,
                ee = G.slice,
                ne = G.indexOf || function (t) {
                    for (var e = 0, n = this.length; n > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                oe = "[\\x20\\t\\r\\n\\f]",
                se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ae = se.replace("w", "w#"),
                le = "\\[" + oe + "*(" + se + ")" + oe + "*(?:([*^$|!~]?=)" + oe + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ae + ")|)|)" + oe + "*\\]",
                ue = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + le.replace(3, 8) + ")*)|.*)\\)|)",
                ce = RegExp("^" + oe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + oe + "+$", "g"),
                he = RegExp("^" + oe + "*," + oe + "*"),
                pe = RegExp("^" + oe + "*([>+~]|" + oe + ")" + oe + "*"),
                de = RegExp(oe + "*[+~]"),
                fe = RegExp("=" + oe + "*([^\\]'\"]*)" + oe + "*\\]", "g"),
                ge = RegExp(ue),
                me = RegExp("^" + ae + "$"),
                ve = {
                    ID: RegExp("^#(" + se + ")"),
                    CLASS: RegExp("^\\.(" + se + ")"),
                    TAG: RegExp("^(" + se.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + le),
                    PSEUDO: RegExp("^" + ue),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + oe + "*(even|odd|(([+-]|)(\\d*)n|)" + oe + "*(?:([+-]|)" + oe + "*(\\d+)|))" + oe + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + ie + ")$", "i"),
                    needsContext: RegExp("^" + oe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + oe + "*((?:-\\d)?\\d*)" + oe + "*\\)|)(?=[^-]|$)", "i")
                },
                ye = /^[^{]+\{\s*\[native \w/,
                be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                we = /^(?:input|select|textarea|button)$/i,
                xe = /^h\d$/i,
                Ce = /'|\\/g,
                ke = RegExp("\\\\([\\da-f]{1,6}" + oe + "?|(" + oe + ")|.)", "ig"),
                Te = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                };
            try {
                te.apply(G = ee.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
            } catch (Se) {
                te = {
                    apply: G.length ? function (t, e) {
                        Z.apply(t, ee.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            P = n.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, k = n.support = {}, $ = n.setDocument = function (t) {
                var n = t ? t.ownerDocument || t : R,
                    i = n.defaultView;
                return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, j = n.documentElement, _ = !P(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                    $()
                }), k.attributes = r(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), k.getElementsByTagName = r(function (t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), k.getElementsByClassName = r(function (t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), k.getById = r(function (t) {
                    return j.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
                }), k.getById ? (S.find.ID = function (t, e) {
                    if (typeof e.getElementById !== K && _) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, S.filter.ID = function (t) {
                    var e = t.replace(ke, Te);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete S.find.ID, S.filter.ID = function (t) {
                    var e = t.replace(ke, Te);
                    return function (t) {
                        var n = typeof t.getAttributeNode !== K && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), S.find.TAG = k.getElementsByTagName ? function (t, n) {
                    return typeof n.getElementsByTagName !== K ? n.getElementsByTagName(t) : e
                } : function (t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, S.find.CLASS = k.getElementsByClassName && function (t, n) {
                    return typeof n.getElementsByClassName !== K && _ ? n.getElementsByClassName(t) : e
                }, L = [], N = [], (k.qsa = ye.test(n.querySelectorAll)) && (r(function (t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || N.push("\\[" + oe + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || N.push(":checked")
                }), r(function (t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && N.push("[*^$]=" + oe + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (k.matchesSelector = ye.test(M = j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function (t) {
                    k.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), L.push("!=", ue)
                }), N = N.length && RegExp(N.join("|")), L = L.length && RegExp(L.join("|")), H = ye.test(j.contains) || j.compareDocumentPosition ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = j.compareDocumentPosition ? function (t, e) {
                    if (t === e) return Q = !0, 0;
                    var i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                    return i ? 1 & i || !k.sortDetached && e.compareDocumentPosition(t) === i ? t === n || H(R, t) ? -1 : e === n || H(R, e) ? 1 : D ? ne.call(D, t) - ne.call(D, e) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function (t, e) {
                    var i, o = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        l = [t],
                        u = [e];
                    if (t === e) return Q = !0, 0;
                    if (!r || !s) return t === n ? -1 : e === n ? 1 : r ? -1 : s ? 1 : D ? ne.call(D, t) - ne.call(D, e) : 0;
                    if (r === s) return a(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) u.unshift(i);
                    for (; l[o] === u[o];) o++;
                    return o ? a(l[o], u[o]) : l[o] === R ? -1 : u[o] === R ? 1 : 0
                }, n) : O
            }, n.matches = function (t, e) {
                return n(t, null, null, e)
            }, n.matchesSelector = function (t, e) {
                if ((t.ownerDocument || t) !== O && $(t), e = e.replace(fe, "='$1']"), !(!k.matchesSelector || !_ || L && L.test(e) || N && N.test(e))) try {
                    var i = M.call(t, e);
                    if (i || k.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (o) {}
                return n(e, O, null, [t]).length > 0
            }, n.contains = function (t, e) {
                return (t.ownerDocument || t) !== O && $(t), H(t, e)
            }, n.attr = function (t, n) {
                (t.ownerDocument || t) !== O && $(t);
                var i = S.attrHandle[n.toLowerCase()],
                    o = i && Y.call(S.attrHandle, n.toLowerCase()) ? i(t, n, !_) : e;
                return o === e ? k.attributes || !_ ? t.getAttribute(n) : (o = t.getAttributeNode(n)) && o.specified ? o.value : null : o
            }, n.error = function (t) {
                throw Error("Syntax error, unrecognized expression: " + t)
            }, n.uniqueSort = function (t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (Q = !k.detectDuplicates, D = !k.sortStable && t.slice(0), t.sort(U), Q) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return t
            }, E = n.getText = function (t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += E(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i]; i++) n += E(e);
                return n
            }, S = n.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: ve,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(ke, Te), t[3] = (t[4] || t[5] || "").replace(ke, Te), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                    },
                    PSEUDO: function (t) {
                        var n, i = !t[5] && t[2];
                        return ve.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && ge.test(i) && (n = p(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(ke, Te).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function (t) {
                        var e = z[t + " "];
                        return e || (e = RegExp("(^|" + oe + ")" + t + "(" + oe + "|$)")) && z(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== K && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, e, i) {
                        return function (o) {
                            var r = n.attr(o, t);
                            return null == r ? "!=" === e : e ? (r += "", "=" === e ? r === i : "!=" === e ? r !== i : "^=" === e ? i && 0 === r.indexOf(i) : "*=" === e ? i && r.indexOf(i) > -1 : "$=" === e ? i && r.slice(-i.length) === i : "~=" === e ? (" " + r + " ").indexOf(i) > -1 : "|=" === e ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var u, c, h, p, d, f, g = r !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (h = e; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (c = m[F] || (m[F] = {}), u = c[t] || [], d = u[0] === q && u[1], p = u[0] === q && u[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (p = d = 0) || f.pop();)
                                        if (1 === h.nodeType && ++p && h === e) {
                                            c[t] = [q, d, p];
                                            break
                                        }
                                } else if (y && (u = (e[F] || (e[F] = {}))[t]) && u[0] === q) p = u[1];
                                else
                                    for (;
                                        (h = ++d && h && h[g] || (p = d = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++p || (y && ((h[F] || (h[F] = {}))[t] = [q, p]), h !== e)););
                                return p -= o, p === i || 0 === p % i && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function (t, e) {
                        var i, r = S.pseudos[t] || S.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                        return r[F] ? r(e) : r.length > 1 ? (i = [t, t, "", e], S.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function (t, n) {
                            for (var i, o = r(t, e), s = o.length; s--;) i = ne.call(t, o[s]), t[i] = !(n[i] = o[s])
                        }) : function (t) {
                            return r(t, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: o(function (t) {
                        var e = [],
                            n = [],
                            i = A(t.replace(ce, "$1"));
                        return i[F] ? o(function (t, e, n, o) {
                            for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function (t, o, r) {
                            return e[0] = t, i(e, null, r, n), !n.pop()
                        }
                    }),
                    has: o(function (t) {
                        return function (e) {
                            return n(t, e).length > 0
                        }
                    }),
                    contains: o(function (t) {
                        return function (e) {
                            return (e.textContent || e.innerText || E(e)).indexOf(t) > -1
                        }
                    }),
                    lang: o(function (t) {
                        return me.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(ke, Te).toLowerCase(),
                            function (e) {
                                var n;
                                do
                                    if (n = _ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function (t) {
                        return t === j
                    },
                    focus: function (t) {
                        return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function (t) {
                        return t.disabled === !1
                    },
                    disabled: function (t) {
                        return t.disabled === !0
                    },
                    checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                        return !0
                    },
                    parent: function (t) {
                        return !S.pseudos.empty(t)
                    },
                    header: function (t) {
                        return xe.test(t.nodeName)
                    },
                    input: function (t) {
                        return we.test(t.nodeName)
                    },
                    button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    },
                    first: c(function () {
                        return [0]
                    }),
                    last: c(function (t, e) {
                        return [e - 1]
                    }),
                    eq: c(function (t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: c(function (t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: c(function (t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: c(function (t, e, n) {
                        for (var i = 0 > n ? n + e : n; e > ++i;) t.push(i);
                        return t
                    })
                }
            }, S.pseudos.nth = S.pseudos.eq;
            for (C in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) S.pseudos[C] = l(C);
            for (C in {
                submit: !0,
                reset: !0
            }) S.pseudos[C] = u(C);
            h.prototype = S.filters = S.pseudos, S.setFilters = new h, A = n.compile = function (t, e) {
                var n, i = [],
                    o = [],
                    r = V[t + " "];
                if (!r) {
                    for (e || (e = p(t)), n = e.length; n--;) r = y(e[n]), r[F] ? i.push(r) : o.push(r);
                    r = V(t, b(o, i))
                }
                return r
            }, k.sortStable = F.split("").sort(U).join("") === F, k.detectDuplicates = Q, $(), k.sortDetached = r(function (t) {
                return 1 & t.compareDocumentPosition(O.createElement("div"))
            }), r(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (t, n, i) {
                return i ? e : t.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), k.attributes && r(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function (t, n, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? e : t.defaultValue
            }), r(function (t) {
                return null == t.getAttribute("disabled")
            }) || s(ie, function (t, n, i) {
                var o;
                return i ? e : (o = t.getAttributeNode(n)) && o.specified ? o.value : t[n] === !0 ? n.toLowerCase() : null
            }), re.find = n, re.expr = n.selectors, re.expr[":"] = re.expr.pseudos, re.unique = n.uniqueSort, re.text = n.getText, re.isXMLDoc = n.isXML, re.contains = n.contains
        }(t);
    var fe = {};
    re.Callbacks = function (t) {
        t = "string" == typeof t ? fe[t] || i(t) : re.extend({}, t);
        var n, o, r, s, a, l, u = [],
            c = !t.once && [],
            h = function (e) {
                for (n = t.memory && e, o = !0, l = s || 0, s = 0, a = u.length, r = !0; u && a > l; l++)
                    if (u[l].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                r = !1, u && (c ? c.length && h(c.shift()) : n ? u = [] : p.disable())
            },
            p = {
                add: function () {
                    if (u) {
                        var e = u.length;
                        ! function i(e) {
                            re.each(e, function (e, n) {
                                var o = re.type(n);
                                "function" === o ? t.unique && p.has(n) || u.push(n) : n && n.length && "string" !== o && i(n)
                            })
                        }(arguments), r ? a = u.length : n && (s = e, h(n))
                    }
                    return this
                },
                remove: function () {
                    return u && re.each(arguments, function (t, e) {
                        for (var n;
                            (n = re.inArray(e, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, l >= n && l--)
                    }), this
                },
                has: function (t) {
                    return t ? re.inArray(t, u) > -1 : !(!u || !u.length)
                },
                empty: function () {
                    return u = [], a = 0, this
                },
                disable: function () {
                    return u = c = n = e, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return c = e, n || p.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (t, e) {
                    return !u || o && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? c.push(e) : h(e)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return p
    }, re.extend({
        Deferred: function (t) {
            var e = [
                    ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", re.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return re.Deferred(function (n) {
                            re.each(e, function (e, r) {
                                var s = r[0],
                                    a = re.isFunction(t[e]) && t[e];
                                o[r[1]](function () {
                                    var t = a && a.apply(this, arguments);
                                    t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? re.extend(t, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, re.each(e, function (t, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add, a && s.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = s.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (t) {
            var e, n, i, o = 0,
                r = te.call(arguments),
                s = r.length,
                a = 1 !== s || t && re.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : re.Deferred(),
                u = function (t, n, i) {
                    return function (o) {
                        n[t] = this, i[t] = arguments.length > 1 ? te.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = Array(s), n = Array(s), i = Array(s); s > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().done(u(o, i, r)).fail(l.reject).progress(u(o, n, e)) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    }), re.support = function (e) {
        var n = V.createElement("input"),
            i = V.createDocumentFragment(),
            o = V.createElement("div"),
            r = V.createElement("select"),
            s = r.appendChild(V.createElement("option"));
        return n.type ? (n.type = "checkbox", e.checkOn = "" !== n.value, e.optSelected = s.selected, e.reliableMarginRight = !0, e.boxSizingReliable = !0, e.pixelPosition = !1, n.checked = !0, e.noCloneChecked = n.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !s.disabled, n = V.createElement("input"), n.value = "t", n.type = "radio", e.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), i.appendChild(n), e.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked, e.focusinBubbles = "onfocusin" in t, o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === o.style.backgroundClip, re(function () {
            var n, i, r = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                s = V.getElementsByTagName("body")[0];
            s && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(o), o.innerHTML = "", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", re.swap(s, null != s.style.zoom ? {
                zoom: 1
            } : {}, function () {
                e.boxSizing = 4 === o.offsetWidth
            }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(o, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(o, null) || {
                width: "4px"
            }).width, i = o.appendChild(V.createElement("div")), i.style.cssText = o.style.cssText = r, i.style.marginRight = i.style.width = "0", o.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), s.removeChild(n))
        }), e) : e
    }({});
    var ge, me, ve = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        ye = /([A-Z])/g;
    o.uid = 1, o.accepts = function (t) {
        return t.nodeType ? 1 === t.nodeType || 9 === t.nodeType : !0
    }, o.prototype = {
        key: function (t) {
            if (!o.accepts(t)) return 0;
            var e = {},
                n = t[this.expando];
            if (!n) {
                n = o.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (i) {
                    e[this.expando] = n, re.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function (t, e, n) {
            var i, o = this.key(t),
                r = this.cache[o];
            if ("string" == typeof e) r[e] = n;
            else if (re.isEmptyObject(r)) re.extend(this.cache[o], e);
            else
                for (i in e) r[i] = e[i];
            return r
        },
        get: function (t, n) {
            var i = this.cache[this.key(t)];
            return n === e ? i : i[n]
        },
        access: function (t, n, i) {
            var o;
            return n === e || n && "string" == typeof n && i === e ? (o = this.get(t, n), o !== e ? o : this.get(t, re.camelCase(n))) : (this.set(t, n, i), i !== e ? i : n)
        },
        remove: function (t, n) {
            var i, o, r, s = this.key(t),
                a = this.cache[s];
            if (n === e) this.cache[s] = {};
            else {
                re.isArray(n) ? o = n.concat(n.map(re.camelCase)) : (r = re.camelCase(n), n in a ? o = [n, r] : (o = r, o = o in a ? [o] : o.match(ae) || [])), i = o.length;
                for (; i--;) delete a[o[i]]
            }
        },
        hasData: function (t) {
            return !re.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function (t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    }, ge = new o, me = new o, re.extend({
        acceptData: o.accepts,
        hasData: function (t) {
            return ge.hasData(t) || me.hasData(t)
        },
        data: function (t, e, n) {
            return ge.access(t, e, n)
        },
        removeData: function (t, e) {
            ge.remove(t, e)
        },
        _data: function (t, e, n) {
            return me.access(t, e, n)
        },
        _removeData: function (t, e) {
            me.remove(t, e)
        }
    }), re.fn.extend({
        data: function (t, n) {
            var i, o, s = this[0],
                a = 0,
                l = null;
            if (t === e) {
                if (this.length && (l = ge.get(s), 1 === s.nodeType && !me.get(s, "hasDataAttrs"))) {
                    for (i = s.attributes; i.length > a; a++) o = i[a].name, 0 === o.indexOf("data-") && (o = re.camelCase(o.slice(5)), r(s, o, l[o]));
                    me.set(s, "hasDataAttrs", !0)
                }
                return l
            }
            return "object" == typeof t ? this.each(function () {
                ge.set(this, t)
            }) : re.access(this, function (n) {
                var i, o = re.camelCase(t);
                if (s && n === e) {
                    if (i = ge.get(s, t), i !== e) return i;
                    if (i = ge.get(s, o), i !== e) return i;
                    if (i = r(s, o, e), i !== e) return i
                } else this.each(function () {
                    var i = ge.get(this, o);
                    ge.set(this, o, n), -1 !== t.indexOf("-") && i !== e && ge.set(this, t, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                ge.remove(this, t)
            })
        }
    }), re.extend({
        queue: function (t, n, i) {
            var o;
            return t ? (n = (n || "fx") + "queue", o = me.get(t, n), i && (!o || re.isArray(i) ? o = me.access(t, n, re.makeArray(i)) : o.push(i)), o || []) : e
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = re.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = re._queueHooks(t, e),
                s = function () {
                    re.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return me.get(t, n) || me.access(t, n, {
                empty: re.Callbacks("once memory").add(function () {
                    me.remove(t, [e + "queue", n])
                })
            })
        }
    }), re.fn.extend({
        queue: function (t, n) {
            var i = 2;
            return "string" != typeof t && (n = t, t = "fx", i--), i > arguments.length ? re.queue(this[0], t) : n === e ? this : this.each(function () {
                var e = re.queue(this, t, n);
                re._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && re.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                re.dequeue(this, t)
            })
        },
        delay: function (t, e) {
            return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, n) {
            var i, o = 1,
                r = re.Deferred(),
                s = this,
                a = this.length,
                l = function () {
                    --o || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;) i = me.get(s[a], t + "queueHooks"), i && i.empty && (o++, i.empty.add(l));
            return l(), r.promise(n)
        }
    });
    var be, we, xe = /[\t\r\n\f]/g,
        Ce = /\r/g,
        ke = /^(?:input|select|textarea|button)$/i;
    re.fn.extend({
        attr: function (t, e) {
            return re.access(this, re.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                re.removeAttr(this, t)
            })
        },
        prop: function (t, e) {
            return re.access(this, re.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[re.propFix[t] || t]
            })
        },
        addClass: function (t) {
            var e, n, i, o, r, s = 0,
                a = this.length,
                l = "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function (e) {
                re(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ae) || []; a > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(xe, " ") : " ")) {
                        for (r = 0; o = e[r++];) 0 > i.indexOf(" " + o + " ") && (i += o + " ");
                        n.className = re.trim(i)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, o, r, s = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (re.isFunction(t)) return this.each(function (e) {
                re(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ae) || []; a > s; s++)
                    if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(xe, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        n.className = t ? re.trim(i) : ""
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function (n) {
                re(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function () {
                if ("string" === n)
                    for (var e, i = 0, o = re(this), r = t.match(ae) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(n === z || "boolean" === n) && (this.className && me.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : me.get(this, "__className__") || "")
            })
        },
        hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xe, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function (t) {
            var n, i, o, r = this[0];
            return arguments.length ? (o = re.isFunction(t), this.each(function (i) {
                var r;
                1 === this.nodeType && (r = o ? t.call(this, i, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), n = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, r, "value") !== e || (this.value = r))
            })) : r ? (n = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], n && "get" in n && (i = n.get(r, "value")) !== e ? i : (i = r.value, "string" == typeof i ? i.replace(Ce, "") : null == i ? "" : i)) : void 0
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (re.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                            if (e = re(n).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function (t, e) {
                    for (var n, i, o = t.options, r = re.makeArray(e), s = o.length; s--;) i = o[s], (i.selected = re.inArray(re(i).val(), r) >= 0) && (n = !0);
                    return n || (t.selectedIndex = -1), r
                }
            }
        },
        attr: function (t, n, i) {
            var o, r, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? typeof t.getAttribute === z ? re.prop(t, n, i) : (1 === s && re.isXMLDoc(t) || (n = n.toLowerCase(), o = re.attrHooks[n] || (re.expr.match.bool.test(n) ? we : be)), i === e ? o && "get" in o && null !== (r = o.get(t, n)) ? r : (r = re.find.attr(t, n), null == r ? e : r) : null !== i ? o && "set" in o && (r = o.set(t, i, n)) !== e ? r : (t.setAttribute(n, i + ""), i) : (re.removeAttr(t, n), e)) : void 0
        },
        removeAttr: function (t, e) {
            var n, i, o = 0,
                r = e && e.match(ae);
            if (r && 1 === t.nodeType)
                for (; n = r[o++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!re.support.radioValue && "radio" === e && re.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (t, n, i) {
            var o, r, s, a = t.nodeType;
            return t && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a || !re.isXMLDoc(t), s && (n = re.propFix[n] || n, r = re.propHooks[n]), i !== e ? r && "set" in r && (o = r.set(t, i, n)) !== e ? o : t[n] = i : r && "get" in r && null !== (o = r.get(t, n)) ? o : t[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    return t.hasAttribute("tabindex") || ke.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), we = {
        set: function (t, e, n) {
            return e === !1 ? re.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (t, n) {
        var i = re.expr.attrHandle[n] || re.find.attr;
        re.expr.attrHandle[n] = function (t, n, o) {
            var r = re.expr.attrHandle[n],
                s = o ? e : (re.expr.attrHandle[n] = e) != i(t, n, o) ? n.toLowerCase() : null;
            return re.expr.attrHandle[n] = r, s
        }
    }), re.support.optSelected || (re.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        re.propFix[this.toLowerCase()] = this
    }), re.each(["radio", "checkbox"], function () {
        re.valHooks[this] = {
            set: function (t, n) {
                return re.isArray(n) ? t.checked = re.inArray(re(t).val(), n) >= 0 : e
            }
        }, re.support.checkOn || (re.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Te = /^key/,
        Se = /^(?:mouse|contextmenu)|click/,
        Ee = /^(?:focusinfocus|focusoutblur)$/,
        Pe = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function (t, n, i, o, r) {
            var s, a, l, u, c, h, p, d, f, g, m, v = me.get(t);
            if (v) {
                for (i.handler && (s = i, i = s.handler, r = s.selector), i.guid || (i.guid = re.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
                    return typeof re === z || t && re.event.triggered === t.type ? e : re.event.dispatch.apply(a.elem, arguments)
                }, a.elem = t), n = (n || "").match(ae) || [""], c = n.length; c--;) l = Pe.exec(n[c]) || [], f = m = l[1], g = (l[2] || "").split(".").sort(), f && (p = re.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, p = re.event.special[f] || {}, h = re.extend({
                    type: f,
                    origType: m,
                    data: o,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && re.expr.match.needsContext.test(r),
                    namespace: g.join(".")
                }, s), (d = u[f]) || (d = u[f] = [], d.delegateCount = 0, p.setup && p.setup.call(t, o, g, a) !== !1 || t.addEventListener && t.addEventListener(f, a, !1)), p.add && (p.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), re.event.global[f] = !0);
                t = null
            }
        },
        remove: function (t, e, n, i, o) {
            var r, s, a, l, u, c, h, p, d, f, g, m = me.hasData(t) && me.get(t);
            if (m && (l = m.events)) {
                for (e = (e || "").match(ae) || [""], u = e.length; u--;)
                    if (a = Pe.exec(e[u]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d) {
                        for (h = re.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, p = l[d] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) c = p[r], !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(t, c));
                        s && !p.length && (h.teardown && h.teardown.call(t, f, m.handle) !== !1 || re.removeEvent(t, d, m.handle), delete l[d])
                    } else
                        for (d in l) re.event.remove(t, d + e[u], n, i, !0);
                re.isEmptyObject(l) && (delete m.handle, me.remove(t, "events"))
            }
        },
        trigger: function (n, i, o, r) {
            var s, a, l, u, c, h, p, d = [o || V],
                f = ie.call(n, "type") ? n.type : n,
                g = ie.call(n, "namespace") ? n.namespace.split(".") : [];
            if (a = l = o = o || V, 3 !== o.nodeType && 8 !== o.nodeType && !Ee.test(f + re.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), c = 0 > f.indexOf(":") && "on" + f, n = n[re.expando] ? n : new re.Event(f, "object" == typeof n && n), n.isTrigger = r ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = o), i = null == i ? [n] : re.makeArray(i, [n]), p = re.event.special[f] || {}, r || !p.trigger || p.trigger.apply(o, i) !== !1)) {
                if (!r && !p.noBubble && !re.isWindow(o)) {
                    for (u = p.delegateType || f, Ee.test(u + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), l = a;
                    l === (o.ownerDocument || V) && d.push(l.defaultView || l.parentWindow || t)
                }
                for (s = 0;
                    (a = d[s++]) && !n.isPropagationStopped();) n.type = s > 1 ? u : p.bindType || f, h = (me.get(a, "events") || {})[n.type] && me.get(a, "handle"), h && h.apply(a, i), h = c && a[c], h && re.acceptData(a) && h.apply && h.apply(a, i) === !1 && n.preventDefault();
                return n.type = f, r || n.isDefaultPrevented() || p._default && p._default.apply(d.pop(), i) !== !1 || !re.acceptData(o) || c && re.isFunction(o[f]) && !re.isWindow(o) && (l = o[c], l && (o[c] = null), re.event.triggered = f, o[f](), re.event.triggered = e, l && (o[c] = l)), n.result
            }
        },
        dispatch: function (t) {
            t = re.event.fix(t);
            var n, i, o, r, s, a = [],
                l = te.call(arguments),
                u = (me.get(this, "events") || {})[t.type] || [],
                c = re.event.special[t.type] || {};
            if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (a = re.event.handlers.call(this, t, u), n = 0;
                    (r = a[n++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, i = 0;
                        (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, o = ((re.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), o !== e && (t.result = o) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, n) {
            var i, o, r, s, a = [],
                l = n.delegateCount,
                u = t.target;
            if (l && u.nodeType && (!t.button || "click" !== t.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== t.type) {
                        for (o = [], i = 0; l > i; i++) s = n[i], r = s.selector + " ", o[r] === e && (o[r] = s.needsContext ? re(r, this).index(u) >= 0 : re.find(r, this, null, [u]).length), o[r] && o.push(s);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && a.push({
                elem: this,
                handlers: n.slice(l)
            }), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, n) {
                var i, o, r, s = n.button;
                return null == t.pageX && null != n.clientX && (i = t.target.ownerDocument || V, o = i.documentElement, r = i.body, t.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), t.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        fix: function (t) {
            if (t[re.expando]) return t;
            var e, n, i, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Se.test(o) ? this.mouseHooks : Te.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new re.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
            return t.target || (t.target = V), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== l() && this.focus ? (this.focus(), !1) : e
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === l() && this.blur ? (this.blur(), !1) : e
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : e
                },
                _default: function (t) {
                    return re.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    t.result !== e && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n, i) {
            var o = re.extend(new re.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(o, null, e) : re.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, re.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, re.Event = function (t, n) {
        return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.getPreventDefault && t.getPreventDefault() ? s : a) : this.type = t, n && re.extend(this, n), this.timeStamp = t && t.timeStamp || re.now(), this[re.expando] = !0, e) : new re.Event(t, n)
    }, re.Event.prototype = {
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = s, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = s, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = s, this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (t, e) {
        re.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = this,
                    o = t.relatedTarget,
                    r = t.handleObj;
                return (!o || o !== i && !re.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), re.support.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = 0,
            i = function (t) {
                re.event.simulate(e, t.target, re.event.fix(t), !0)
            };
        re.event.special[e] = {
            setup: function () {
                0 === n++ && V.addEventListener(t, i, !0)
            },
            teardown: function () {
                0 === --n && V.removeEventListener(t, i, !0)
            }
        }
    }), re.fn.extend({
        on: function (t, n, i, o, r) {
            var s, l;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = e);
                for (l in t) this.on(l, n, i, t[l], r);
                return this
            }
            if (null == i && null == o ? (o = n, i = n = e) : null == o && ("string" == typeof n ? (o = i, i = e) : (o = i, i = n, n = e)), o === !1) o = a;
            else if (!o) return this;
            return 1 === r && (s = o, o = function (t) {
                return re().off(t), s.apply(this, arguments)
            }, o.guid = s.guid || (s.guid = re.guid++)), this.each(function () {
                re.event.add(this, t, o, i, n)
            })
        },
        one: function (t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function (t, n, i) {
            var o, r;
            if (t && t.preventDefault && t.handleObj) return o = t.handleObj, re(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, n, t[r]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = a), this.each(function () {
                re.event.remove(this, t, i, n)
            })
        },
        trigger: function (t, e) {
            return this.each(function () {
                re.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, n) {
            var i = this[0];
            return i ? re.event.trigger(t, n, i, !0) : e
        }
    });
    var Ae = /^.[^:#\[\.,]*$/,
        Ie = /^(?:parents|prev(?:Until|All))/,
        De = re.expr.match.needsContext,
        $e = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.fn.extend({
        find: function (t) {
            var e, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof t) return this.pushStack(re(t).filter(function () {
                for (e = 0; o > e; e++)
                    if (re.contains(i[e], this)) return !0
            }));
            for (e = 0; o > e; e++) re.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        has: function (t) {
            var e = re(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; n > t; t++)
                    if (re.contains(this, e[t])) return !0
            })
        },
        not: function (t) {
            return this.pushStack(c(this, t || [], !0))
        },
        filter: function (t) {
            return this.pushStack(c(this, t || [], !1))
        },
        is: function (t) {
            return !!c(this, "string" == typeof t && De.test(t) ? re(t) : t || [], !1).length
        },
        closest: function (t, e) {
            for (var n, i = 0, o = this.length, r = [], s = De.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
                        n = r.push(n);
                        break
                    }
            return this.pushStack(r.length > 1 ? re.unique(r) : r)
        },
        index: function (t) {
            return t ? "string" == typeof t ? ee.call(re(t), this[0]) : ee.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            var n = "string" == typeof t ? re(t, e) : re.makeArray(t && t.nodeType ? [t] : t),
                i = re.merge(this.get(), n);
            return this.pushStack(re.unique(i))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), re.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return re.dir(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return re.dir(t, "parentNode", n)
        },
        next: function (t) {
            return u(t, "nextSibling")
        },
        prev: function (t) {
            return u(t, "previousSibling")
        },
        nextAll: function (t) {
            return re.dir(t, "nextSibling")
        },
        prevAll: function (t) {
            return re.dir(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return re.dir(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return re.dir(t, "previousSibling", n)
        },
        siblings: function (t) {
            return re.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return re.sibling(t.firstChild)
        },
        contents: function (t) {
            return t.contentDocument || re.merge([], t.childNodes)
        }
    }, function (t, e) {
        re.fn[t] = function (n, i) {
            var o = re.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && ($e[t] || re.unique(o), Ie.test(t) && o.reverse()), this.pushStack(o)
        }
    }), re.extend({
        filter: function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        },
        dir: function (t, n, i) {
            for (var o = [], r = i !== e;
                (t = t[n]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && re(t).is(i)) break;
                    o.push(t)
                }
            return o
        },
        sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    });
    var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        je = /<([\w:]+)/,
        _e = /<|&#?\w+;/,
        Ne = /<(?:script|style|link)/i,
        Le = /^(?:checkbox|radio)$/i,
        Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^$|\/(?:java|ecma)script/i,
        Fe = /^true\/(.*)/,
        Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    qe.optgroup = qe.option, qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td, re.fn.extend({
        text: function (t) {
            return re.access(this, function (t) {
                return t === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = h(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function (t, e) {
            for (var n, i = t ? re.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || re.cleanData(m(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && f(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (re.cleanData(m(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return re.clone(this, t, e)
            })
        },
        html: function (t) {
            return re.access(this, function (t) {
                var n = this[0] || {},
                    i = 0,
                    o = this.length;
                if (t === e && 1 === n.nodeType) return n.innerHTML;
                if ("string" == typeof t && !Ne.test(t) && !qe[(je.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Oe, "<$1></$2>");
                    try {
                        for (; o > i; i++) n = this[i] || {}, 1 === n.nodeType && (re.cleanData(m(n, !1)), n.innerHTML = t);
                        n = 0
                    } catch (r) {}
                }
                n && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = re.map(this, function (t) {
                    return [t.nextSibling, t.parentNode]
                }),
                e = 0;
            return this.domManip(arguments, function (n) {
                var i = t[e++],
                    o = t[e++];
                o && (i && i.parentNode !== o && (i = this.nextSibling), re(this).remove(), o.insertBefore(n, i))
            }, !0), e ? this : this.remove()
        },
        detach: function (t) {
            return this.remove(t, !0)
        },
        domManip: function (t, e, n) {
            t = J.apply([], t);
            var i, o, r, s, a, l, u = 0,
                c = this.length,
                h = this,
                f = c - 1,
                g = t[0],
                v = re.isFunction(g);
            if (v || !(1 >= c || "string" != typeof g || re.support.checkClone) && Me.test(g)) return this.each(function (i) {
                var o = h.eq(i);
                v && (t[0] = g.call(this, i, o.html())), o.domManip(t, e, n)
            });
            if (c && (i = re.buildFragment(t, this[0].ownerDocument, !1, !n && this), o = i.firstChild, 1 === i.childNodes.length && (i = o), o)) {
                for (r = re.map(m(i, "script"), p), s = r.length; c > u; u++) a = i, u !== f && (a = re.clone(a, !0, !0), s && re.merge(r, m(a, "script"))), e.call(this[u], a, u);
                if (s)
                    for (l = r[r.length - 1].ownerDocument, re.map(r, d), u = 0; s > u; u++) a = r[u], He.test(a.type || "") && !me.access(a, "globalEval") && re.contains(l, a) && (a.src ? re._evalUrl(a.src) : re.globalEval(a.textContent.replace(Re, "")))
            }
            return this
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        re.fn[t] = function (t) {
            for (var n, i = [], o = re(t), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0), re(o[s])[e](n), Z.apply(i, n.get());
            return this.pushStack(i)
        }
    }), re.extend({
        clone: function (t, e, n) {
            var i, o, r, s, a = t.cloneNode(!0),
                l = re.contains(t.ownerDocument, t);
            if (!(re.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
                for (s = m(a), r = m(t), i = 0, o = r.length; o > i; i++) v(r[i], s[i]);
            if (e)
                if (n)
                    for (r = r || m(t), s = s || m(a), i = 0, o = r.length; o > i; i++) g(r[i], s[i]);
                else g(t, a);
            return s = m(a, "script"), s.length > 0 && f(s, !l && m(t, "script")), a
        },
        buildFragment: function (t, e, n, i) {
            for (var o, r, s, a, l, u, c = 0, h = t.length, p = e.createDocumentFragment(), d = []; h > c; c++)
                if (o = t[c], o || 0 === o)
                    if ("object" === re.type(o)) re.merge(d, o.nodeType ? [o] : o);
                    else if (_e.test(o)) {
                for (r = r || p.appendChild(e.createElement("div")), s = (je.exec(o) || ["", ""])[1].toLowerCase(), a = qe[s] || qe._default, r.innerHTML = a[1] + o.replace(Oe, "<$1></$2>") + a[2], u = a[0]; u--;) r = r.lastChild;
                re.merge(d, r.childNodes), r = p.firstChild, r.textContent = ""
            } else d.push(e.createTextNode(o));
            for (p.textContent = "", c = 0; o = d[c++];)
                if ((!i || -1 === re.inArray(o, i)) && (l = re.contains(o.ownerDocument, o), r = m(p.appendChild(o), "script"), l && f(r), n))
                    for (u = 0; o = r[u++];) He.test(o.type || "") && n.push(o);
            return p
        },
        cleanData: function (t) {
            for (var n, i, r, s, a, l, u = re.event.special, c = 0;
                (i = t[c]) !== e; c++) {
                if (o.accepts(i) && (a = i[me.expando], a && (n = me.cache[a]))) {
                    if (r = Object.keys(n.events || {}), r.length)
                        for (l = 0;
                            (s = r[l]) !== e; l++) u[s] ? re.event.remove(i, s) : re.removeEvent(i, s, n.handle);
                    me.cache[a] && delete me.cache[a]
                }
                delete ge.cache[i[ge.expando]]
            }
        },
        _evalUrl: function (t) {
            return re.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), re.fn.extend({
        wrapAll: function (t) {
            var e;
            return re.isFunction(t) ? this.each(function (e) {
                re(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = re(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function (t) {
            return this.each(re.isFunction(t) ? function (e) {
                re(this).wrapInner(t.call(this, e))
            } : function () {
                var e = re(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = re.isFunction(t);
            return this.each(function (n) {
                re(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var We, ze, Be = /^(none|table(?!-c[ea]).+)/,
        Ve = /^margin/,
        Qe = RegExp("^(" + se + ")(.*)$", "i"),
        Ue = RegExp("^(" + se + ")(?!px)[a-z%]+$", "i"),
        Ke = RegExp("^([+-])=(" + se + ")", "i"),
        Xe = {
            BODY: "block"
        },
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Je = ["Top", "Right", "Bottom", "Left"],
        Ze = ["Webkit", "O", "Moz", "ms"];
    re.fn.extend({
        css: function (t, n) {
            return re.access(this, function (t, n, i) {
                var o, r, s = {},
                    a = 0;
                if (re.isArray(n)) {
                    for (o = w(t), r = n.length; r > a; a++) s[n[a]] = re.css(t, n[a], !1, o);
                    return s
                }
                return i !== e ? re.style(t, n, i) : re.css(t, n)
            }, t, n, arguments.length > 1)
        },
        show: function () {
            return x(this, !0)
        },
        hide: function () {
            return x(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                b(this) ? re(this).show() : re(this).hide()
            })
        }
    }), re.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = We(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (t, n, i, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, a, l = re.camelCase(n),
                    u = t.style;
                return n = re.cssProps[l] || (re.cssProps[l] = y(u, l)), a = re.cssHooks[n] || re.cssHooks[l], i === e ? a && "get" in a && (r = a.get(t, !1, o)) !== e ? r : u[n] : (s = typeof i, "string" === s && (r = Ke.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(re.css(t, n)), s = "number"), null == i || "number" === s && isNaN(i) || ("number" !== s || re.cssNumber[l] || (i += "px"), re.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (i = a.set(t, i, o)) === e || (u[n] = i)), e)
            }
        },
        css: function (t, n, i, o) {
            var r, s, a, l = re.camelCase(n);
            return n = re.cssProps[l] || (re.cssProps[l] = y(t.style, l)), a = re.cssHooks[n] || re.cssHooks[l], a && "get" in a && (r = a.get(t, !0, i)), r === e && (r = We(t, n, o)), "normal" === r && n in Ge && (r = Ge[n]), "" === i || i ? (s = parseFloat(r), i === !0 || re.isNumeric(s) ? s || 0 : r) : r
        }
    }), We = function (t, n, i) {
        var o, r, s, a = i || w(t),
            l = a ? a.getPropertyValue(n) || a[n] : e,
            u = t.style;
        return a && ("" !== l || re.contains(t.ownerDocument, t) || (l = re.style(t, n)), Ue.test(l) && Ve.test(n) && (o = u.width, r = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = o, u.minWidth = r, u.maxWidth = s)), l
    }, re.each(["height", "width"], function (t, n) {
        re.cssHooks[n] = {
            get: function (t, i, o) {
                return i ? 0 === t.offsetWidth && Be.test(re.css(t, "display")) ? re.swap(t, Ye, function () {
                    return T(t, n, o)
                }) : T(t, n, o) : e
            },
            set: function (t, e, i) {
                var o = i && w(t);
                return C(t, e, i ? k(t, n, i, re.support.boxSizing && "border-box" === re.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), re(function () {
        re.support.reliableMarginRight || (re.cssHooks.marginRight = {
            get: function (t, n) {
                return n ? re.swap(t, {
                    display: "inline-block"
                }, We, [t, "marginRight"]) : e
            }
        }), !re.support.pixelPosition && re.fn.position && re.each(["top", "left"], function (t, n) {
            re.cssHooks[n] = {
                get: function (t, i) {
                    return i ? (i = We(t, n), Ue.test(i) ? re(t).position()[n] + "px" : i) : e
                }
            }
        })
    }), re.expr && re.expr.filters && (re.expr.filters.hidden = function (t) {
        return 0 >= t.offsetWidth && 0 >= t.offsetHeight
    }, re.expr.filters.visible = function (t) {
        return !re.expr.filters.hidden(t)
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        re.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + Je[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, Ve.test(t) || (re.cssHooks[t + e].set = C)
    });
    var tn = /%20/g,
        en = /\[\]$/,
        nn = /\r?\n/g,
        on = /^(?:submit|button|image|reset|file)$/i,
        rn = /^(?:input|select|textarea|keygen)/i;
    re.fn.extend({
        serialize: function () {
            return re.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = re.prop(this, "elements");
                return t ? re.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !re(this).is(":disabled") && rn.test(this.nodeName) && !on.test(t) && (this.checked || !Le.test(t))
            }).map(function (t, e) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(nn, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(nn, "\r\n")
                }
            }).get()
        }
    }), re.param = function (t, n) {
        var i, o = [],
            r = function (t, e) {
                e = re.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (n === e && (n = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (i in t) P(i, t[i], n, r);
        return o.join("&").replace(tn, "+")
    }, re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        re.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), re.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var sn, an, ln = re.now(),
        un = /\?/,
        cn = /#.*$/,
        hn = /([?&])_=[^&]*/,
        pn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        dn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        fn = /^(?:GET|HEAD)$/,
        gn = /^\/\//,
        mn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        vn = re.fn.load,
        yn = {},
        bn = {},
        wn = "*/".concat("*");
    try {
        an = B.href
    } catch (xn) {
        an = V.createElement("a"), an.href = "", an = an.href
    }
    sn = mn.exec(an.toLowerCase()) || [], re.fn.load = function (t, n, i) {
        if ("string" != typeof t && vn) return vn.apply(this, arguments);
        var o, r, s, a = this,
            l = t.indexOf(" ");
        return l >= 0 && (o = t.slice(l), t = t.slice(0, l)), re.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (r = "POST"), a.length > 0 && re.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: n
        }).done(function (t) {
            s = arguments, a.html(o ? re("<div>").append(re.parseHTML(t)).find(o) : t)
        }).complete(i && function (t, e) {
            a.each(i, s || [t.responseText, e, t])
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        re.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: an,
            type: "GET",
            isLocal: dn.test(sn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? D(D(t, re.ajaxSettings), e) : D(re.ajaxSettings, t)
        },
        ajaxPrefilter: A(yn),
        ajaxTransport: A(bn),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var u, h, y, b, x, k = n;
                2 !== w && (w = 2, l && clearTimeout(l), o = e, s = a || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, i && (b = $(p, C, i)), b = O(p, b, C, u), u ? (p.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (re.lastModified[r] = x), x = C.getResponseHeader("etag"), x && (re.etag[r] = x)), 204 === t || "HEAD" === p.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state, h = b.data, y = b.error, u = !y)) : (y = k, (t || !k) && (k = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || k) + "", u ? g.resolveWith(d, [h, k, C]) : g.rejectWith(d, [C, k, y]), C.statusCode(v), v = e, c && f.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? h : y]), m.fireWith(d, [C, k]), c && (f.trigger("ajaxComplete", [C, p]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = e), n = n || {};
            var o, r, s, a, l, u, c, h, p = re.ajaxSetup({}, n),
                d = p.context || p,
                f = p.context && (d.nodeType || d.jquery) ? re(d) : re.event,
                g = re.Deferred(),
                m = re.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                b = {},
                w = 0,
                x = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; e = pn.exec(s);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return w || (t = b[n] = b[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return w || (p.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > w)
                                for (e in t) v[e] = [v[e], t[e]];
                            else C.always(t[C.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || x;
                        return o && o.abort(e), i(0, e), this
                    }
                };
            if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, p.url = ((t || p.url || an) + "").replace(cn, "").replace(gn, sn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = re.trim(p.dataType || "*").toLowerCase().match(ae) || [""], null == p.crossDomain && (u = mn.exec(p.url.toLowerCase()), p.crossDomain = !(!u || u[1] === sn[1] && u[2] === sn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (sn[3] || ("http:" === sn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = re.param(p.data, p.traditional)), I(yn, p, n, C), 2 === w) return C;
            c = p.global, c && 0 === re.active++ && re.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !fn.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (un.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = hn.test(r) ? r.replace(hn, "$1_=" + ln++) : r + (un.test(r) ? "&" : "?") + "_=" + ln++)), p.ifModified && (re.lastModified[r] && C.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && C.setRequestHeader("If-None-Match", re.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + wn + "; q=0.01" : "") : p.accepts["*"]);
            for (h in p.headers) C.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (p.beforeSend.call(d, C, p) === !1 || 2 === w)) return C.abort();
            x = "abort";
            for (h in {
                success: 1,
                error: 1,
                complete: 1
            }) C[h](p[h]);
            if (o = I(bn, p, n, C)) {
                C.readyState = 1, c && f.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (l = setTimeout(function () {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, o.send(y, i)
                } catch (k) {
                    if (!(2 > w)) throw k;
                    i(-1, k)
                }
            } else i(-1, "No Transport");
            return C
        },
        getJSON: function (t, e, n) {
            return re.get(t, e, n, "json")
        },
        getScript: function (t, n) {
            return re.get(t, e, n, "script")
        }
    }), re.each(["get", "post"], function (t, n) {
        re[n] = function (t, i, o, r) {
            return re.isFunction(i) && (r = r || o, o = i, i = e), re.ajax({
                url: t,
                type: n,
                dataType: r,
                data: i,
                success: o
            })
        }
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (t) {
                return re.globalEval(t), t
            }
        }
    }), re.ajaxPrefilter("script", function (t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), re.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (i, o) {
                    e = re("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function (t) {
                        e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
                    }), V.head.appendChild(e[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Cn = [],
        kn = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Cn.pop() || re.expando + "_" + ln++;
            return this[t] = !0, t
        }
    }), re.ajaxPrefilter("json jsonp", function (n, i, o) {
        var r, s, a, l = n.jsonp !== !1 && (kn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && kn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = re.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(kn, "$1" + r) : n.jsonp !== !1 && (n.url += (un.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function () {
            return a || re.error(r + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = t[r], t[r] = function () {
            a = arguments
        }, o.always(function () {
            t[r] = s, n[r] && (n.jsonpCallback = i.jsonpCallback, Cn.push(r)), a && re.isFunction(s) && s(a[0]), a = s = e
        }), "script") : e
    }), re.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var Tn = re.ajaxSettings.xhr(),
        Sn = {
            0: 200,
            1223: 204
        },
        En = 0,
        Pn = {};
    t.ActiveXObject && re(t).on("unload", function () {
        for (var t in Pn) Pn[t]();
        Pn = e
    }), re.support.cors = !!Tn && "withCredentials" in Tn, re.support.ajax = Tn = !!Tn, re.ajaxTransport(function (t) {
        var n;
        return re.support.cors || Tn && !t.crossDomain ? {
            send: function (i, o) {
                var r, s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) a[r] = t.xhrFields[r];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (r in i) a.setRequestHeader(r, i[r]);
                n = function (t) {
                    return function () {
                        n && (delete Pn[s], n = a.onload = a.onerror = null, "abort" === t ? a.abort() : "error" === t ? o(a.status || 404, a.statusText) : o(Sn[a.status] || a.status, a.statusText, "string" == typeof a.responseText ? {
                            text: a.responseText
                        } : e, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), a.onerror = n("error"), n = Pn[s = En++] = n("abort"), a.send(t.hasContent && t.data || null)
            },
            abort: function () {
                n && n()
            }
        } : e
    });
    var An, In, Dn = /^(?:toggle|show|hide)$/,
        $n = RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$", "i"),
        On = /queueHooks$/,
        jn = [M],
        _n = {
            "*": [

                function (t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        o = $n.exec(e),
                        r = o && o[3] || (re.cssNumber[t] ? "" : "px"),
                        s = (re.cssNumber[t] || "px" !== r && +i) && $n.exec(re.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +i || 1;
                        do a = a || ".5", s /= a, re.style(n.elem, t, s + r); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
                }
            ]
        };
    re.Animation = re.extend(N, {
        tweener: function (t, e) {
            re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, o = t.length; o > i; i++) n = t[i], _n[n] = _n[n] || [], _n[n].unshift(e)
        },
        prefilter: function (t, e) {
            e ? jn.unshift(t) : jn.push(t)
        }
    }), re.Tween = H, H.prototype = {
        constructor: H,
        init: function (t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = H.propHooks[this.prop];
            return t && t.get ? t.get(this) : H.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = H.propHooks[this.prop];
            return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function (t) {
                re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, re.each(["toggle", "show", "hide"], function (t, e) {
        var n = re.fn[e];
        re.fn[e] = function (t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, i, o)
        }
    }), re.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(b).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function (t, e, n, i) {
            var o = re.isEmptyObject(t),
                r = re.speed(e, n, i),
                s = function () {
                    var e = N(this, re.extend({}, t), r);
                    (o || me.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (t, n, i) {
            var o = function (t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                var e = !0,
                    n = null != t && t + "queueHooks",
                    r = re.timers,
                    s = me.get(this);
                if (n) s[n] && s[n].stop && o(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && On.test(n) && o(s[n]);
                for (n = r.length; n--;) r[n].elem !== this || null != t && r[n].queue !== t || (r[n].anim.stop(i), e = !1, r.splice(n, 1));
                (e || !i) && re.dequeue(this, t)
            })
        },
        finish: function (t) {
            return t !== !1 && (t = t || "fx"), this.each(function () {
                var e, n = me.get(this),
                    i = n[t + "queue"],
                    o = n[t + "queueHooks"],
                    r = re.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, re.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), re.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, e) {
        re.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), re.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? re.extend({}, t) : {
            complete: n || !n && e || re.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !re.isFunction(e) && e
        };
        return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
        }, i
    }, re.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, re.timers = [], re.fx = H.prototype.init, re.fx.tick = function () {
        var t, n = re.timers,
            i = 0;
        for (An = re.now(); n.length > i; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
        n.length || re.fx.stop(), An = e
    }, re.fx.timer = function (t) {
        t() && re.timers.push(t) && re.fx.start()
    }, re.fx.interval = 13, re.fx.start = function () {
        In || (In = setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function () {
        clearInterval(In), In = null
    }, re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, re.fx.step = {}, re.expr && re.expr.filters && (re.expr.filters.animated = function (t) {
        return re.grep(re.timers, function (e) {
            return t === e.elem
        }).length
    }), re.fn.offset = function (t) {
        if (arguments.length) return t === e ? this : this.each(function (e) {
            re.offset.setOffset(this, t, e)
        });
        var n, i, o = this[0],
            r = {
                top: 0,
                left: 0
            },
            s = o && o.ownerDocument;
        return s ? (n = s.documentElement, re.contains(n, o) ? (typeof o.getBoundingClientRect !== z && (r = o.getBoundingClientRect()), i = R(s), {
            top: r.top + i.pageYOffset - n.clientTop,
            left: r.left + i.pageXOffset - n.clientLeft
        }) : r) : void 0
    }, re.offset = {
        setOffset: function (t, e, n) {
            var i, o, r, s, a, l, u, c = re.css(t, "position"),
                h = re(t),
                p = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), r = re.css(t, "top"), l = re.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1, u ? (i = h.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : h.css(p)
        }
    }, re.fn.extend({
        position: function () {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === re.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (i = t.offset()), i.top += re.css(t[0], "borderTopWidth", !0), i.left += re.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - re.css(n, "marginTop", !0),
                    left: e.left - i.left - re.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || Q; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
                return t || Q
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (n, i) {
        var o = "pageYOffset" === i;
        re.fn[n] = function (r) {
            return re.access(this, function (n, r, s) {
                var a = R(n);
                return s === e ? a ? a[i] : n[r] : (a ? a.scrollTo(o ? t.pageXOffset : s, o ? s : t.pageYOffset) : n[r] = s, e)
            }, n, r, arguments.length, null)
        }
    }), re.each({
        Height: "height",
        Width: "width"
    }, function (t, n) {
        re.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function (i, o) {
            re.fn[o] = function (o, r) {
                var s = arguments.length && (i || "boolean" != typeof o),
                    a = i || (o === !0 || r === !0 ? "margin" : "border");
                return re.access(this, function (n, i, o) {
                    var r;
                    return re.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + t], r["scroll" + t], n.body["offset" + t], r["offset" + t], r["client" + t])) : o === e ? re.css(n, i, a) : re.style(n, i, o, a)
                }, n, s ? o : e, s, null)
            }
        })
    }), re.fn.size = function () {
        return this.length
    }, re.fn.andSelf = re.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = re : "function" == typeof define && define.amd && define("jquery", [], function () {
        return re
    }), "object" == typeof t && "object" == typeof t.document && (t.jQuery = t.$ = re)
}(window),
function () {
    "use strict";

    function t() {}

    function e(t, e) {
        for (var n = t.length; n--;)
            if (t[n].listener === e) return n;
        return -1
    }

    function n(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }
    var i = t.prototype;
    i.getListeners = function (t) {
        var e, n, i = this._getEvents();
        if ("object" == typeof t) {
            e = {};
            for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
        } else e = i[t] || (i[t] = []);
        return e
    }, i.flattenListeners = function (t) {
        var e, n = [];
        for (e = 0; t.length > e; e += 1) n.push(t[e].listener);
        return n
    }, i.getListenersAsObject = function (t) {
        var e, n = this.getListeners(t);
        return n instanceof Array && (e = {}, e[t] = n), e || n
    }, i.addListener = function (t, n) {
        var i, o = this.getListenersAsObject(t),
            r = "object" == typeof n;
        for (i in o) o.hasOwnProperty(i) && -1 === e(o[i], n) && o[i].push(r ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function (t) {
        return this.getListeners(t), this
    }, i.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, i.removeListener = function (t, n) {
        var i, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (i = e(r[o], n), -1 !== i && r[o].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, i.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, i.manipulateListeners = function (t, e, n) {
        var i, o, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (i = n.length; i--;) r.call(this, e, n[i]);
        else
            for (i in e) e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
        return this
    }, i.removeEvent = function (t) {
        var e, n = typeof t,
            i = this._getEvents();
        if ("string" === n) delete i[t];
        else if ("object" === n)
            for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (t, e) {
        var n, i, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (i = s[o].length; i--;) n = s[o][i], n.once === !0 && this.removeListener(t, n.listener), r = n.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, i.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, "function" == typeof define && define.amd ? define(function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
    function (t) {
        "use strict";
        var e = document.documentElement,
            n = function () {};
        e.addEventListener ? n = function (t, e, n) {
            t.addEventListener(e, n, !1)
        } : e.attachEvent && (n = function (e, n, i) {
            e[n + i] = i.handleEvent ? function () {
                var e = t.event;
                e.target = e.target || e.srcElement, i.handleEvent.call(i, e)
            } : function () {
                var n = t.event;
                n.target = n.target || n.srcElement, i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var i = function () {};
        e.removeEventListener ? i = function (t, e, n) {
            t.removeEventListener(e, n, !1)
        } : e.detachEvent && (i = function (t, e, n) {
            t.detachEvent("on" + e, t[e + n]);
            try {
                delete t[e + n]
            } catch (i) {
                t[e + n] = void 0
            }
        });
        var o = {
            bind: n,
            unbind: i
        };
        "function" == typeof define && define.amd ? define(o) : t.eventie = o
    }(this),
    function (t) {
        "use strict";

        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            return "[object Array]" === l.call(t)
        }

        function i(t) {
            var e = [];
            if (n(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, o = t.length; o > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, n) {
            function o(t, n, s) {
                if (!(this instanceof o)) return new o(t, n);
                "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = i(t), this.options = e({}, this.options), "function" == typeof n ? s = n : e(this.options, n), s && this.on("always", s), this.getImages(), r && (this.jqDeferred = new r.Deferred);
                var a = this;
                setTimeout(function () {
                    a.check()
                })
            }

            function l(t) {
                this.img = t
            }
            o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function () {
                this.images = [];
                for (var t = 0, e = this.elements.length; e > t; t++) {
                    var n = this.elements[t];
                    "IMG" === n.nodeName && this.addImage(n);
                    for (var i = n.querySelectorAll("img"), o = 0, r = i.length; r > o; o++) {
                        var s = i[o];
                        this.addImage(s)
                    }
                }
            }, o.prototype.addImage = function (t) {
                var e = new l(t);
                this.images.push(e)
            }, o.prototype.check = function () {
                function t(t, o) {
                    return e.options.debug && a && s.log("confirm", t, o), e.progress(t), n++, n === i && e.complete(), !0
                }
                var e = this,
                    n = 0,
                    i = this.images.length;
                if (this.hasAnyBroken = !1, !i) return void this.complete();
                for (var o = 0; i > o; o++) {
                    var r = this.images[o];
                    r.on("confirm", t), r.check()
                }
            }, o.prototype.progress = function (t) {
                this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
                var e = this;
                setTimeout(function () {
                    e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify(e, t)
                })
            }, o.prototype.complete = function () {
                var t = this.hasAnyBroken ? "fail" : "done";
                this.isComplete = !0;
                var e = this;
                setTimeout(function () {
                    if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                        var n = e.hasAnyBroken ? "reject" : "resolve";
                        e.jqDeferred[n](e)
                    }
                })
            }, r && (r.fn.imagesLoaded = function (t, e) {
                var n = new o(this, t, e);
                return n.jqDeferred.promise(r(this))
            });
            var u = {};
            return l.prototype = new t, l.prototype.check = function () {
                var t = u[this.img.src];
                if (t) return void this.useCached(t);
                if (u[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var e = this.proxyImage = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.img.src
            }, l.prototype.useCached = function (t) {
                if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed");
                else {
                    var e = this;
                    t.on("confirm", function (t) {
                        return e.confirm(t.isLoaded, "cache emitted confirmed"), !0
                    })
                }
            }, l.prototype.confirm = function (t, e) {
                this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
            }, l.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, l.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, l.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, l.prototype.unbindProxyEvents = function () {
                n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
            }, o
        }
        var r = t.jQuery,
            s = t.console,
            a = void 0 !== s,
            l = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], o) : t.imagesLoaded = o(t.EventEmitter, t.eventie)
    }(window), + function (t) {
        "use strict";
        var e = '[data-dismiss="alert"]',
            n = function (n) {
                t(n).on("click", e, this.close)
            };
        n.prototype.close = function (e) {
            function n() {
                r.trigger("closed.bs.alert").remove()
            }
            var i = t(this),
                o = i.attr("data-target");
            o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
            var r = t(o);
            e && e.preventDefault(), r.length || (r = i.hasClass("alert") ? i : i.parent()), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one(t.support.transition.end, n).emulateTransitionEnd(150) : n())
        };
        var i = t.fn.alert;
        t.fn.alert = function (e) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.alert");
                o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
            })
        }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
            return t.fn.alert = i, this
        }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
    }(window.jQuery), + function (t) {
        "use strict";
        var e = function (n, i) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i)
        };
        e.DEFAULTS = {
            loadingText: "loading..."
        }, e.prototype.setState = function (t) {
            var e = "disabled",
                n = this.$element,
                i = n.is("input") ? "val" : "html",
                o = n.data();
            t += "Text", o.resetText || n.data("resetText", n[i]()), n[i](o[t] || this.options[t]), setTimeout(function () {
                "loadingText" == t ? n.addClass(e).attr(e, e) : n.removeClass(e).removeAttr(e)
            }, 0)
        }, e.prototype.toggle = function () {
            var t = this.$element.closest('[data-toggle="buttons"]');
            if (t.length) {
                var e = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
                "radio" === e.prop("type") && t.find(".active").removeClass("active")
            }
            this.$element.toggleClass("active")
        };
        var n = t.fn.button;
        t.fn.button = function (n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.button"),
                    r = "object" == typeof n && n;
                o || i.data("bs.button", o = new e(this, r)), "toggle" == n ? o.toggle() : n && o.setState(n)
            })
        }, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
            return t.fn.button = n, this
        }, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (e) {
            var n = t(e.target);
            n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), e.preventDefault()
        })
    }(window.jQuery), + function (t) {
        "use strict";
        var e = function (e, n) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
        };
        e.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0
        }, e.prototype.cycle = function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, e.prototype.getActiveIndex = function () {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
        }, e.prototype.to = function (e) {
            var n = this,
                i = this.getActiveIndex();
            if (!(e > this.$items.length - 1 || 0 > e)) return this.sliding ? this.$element.one("slid", function () {
                n.to(e)
            }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
        }, e.prototype.pause = function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition.end && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, e.prototype.next = function () {
            return this.sliding ? void 0 : this.slide("next")
        }, e.prototype.prev = function () {
            return this.sliding ? void 0 : this.slide("prev")
        }, e.prototype.slide = function (e, n) {
            var i = this.$element.find(".item.active"),
                o = n || i[e](),
                r = this.interval,
                s = "next" == e ? "left" : "right",
                a = "next" == e ? "first" : "last",
                l = this;
            if (!o.length) {
                if (!this.options.wrap) return;
                o = this.$element.find(".item")[a]()
            }
            this.sliding = !0, r && this.pause();
            var u = t.Event("slide.bs.carousel", {
                relatedTarget: o[0],
                direction: s
            });
            if (!o.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                    var e = t(l.$indicators.children()[l.getActiveIndex()]);
                    e && e.addClass("active")
                })), t.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    o.addClass(e), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one(t.support.transition.end, function () {
                        o.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
                            l.$element.trigger("slid")
                        }, 0)
                    }).emulateTransitionEnd(600)
                } else {
                    if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                    i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                }
                return r && this.cycle(), this
            }
        };
        var n = t.fn.carousel;
        t.fn.carousel = function (n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.carousel"),
                    r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
                    s = "string" == typeof n ? n : r.slide;
                o || i.data("bs.carousel", o = new e(this, r)), "number" == typeof n ? o.to(n) : s ? o[s]() : r.interval && o.pause().cycle()
            })
        }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
            return t.fn.carousel = n, this
        }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
            var n, i = t(this),
                o = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
                r = t.extend({}, o.data(), i.data()),
                s = i.attr("data-slide-to");
            s && (r.interval = !1), o.carousel(r), (s = i.attr("data-slide-to")) && o.data("bs.carousel").to(s), e.preventDefault()
        }), t(window).on("load", function () {
            t('[data-ride="carousel"]').each(function () {
                var e = t(this);
                e.carousel(e.data())
            })
        })
    }(window.jQuery), + function (t) {
        function e() {
            t(i).remove(), t(o).each(function (e) {
                var i = n(t(this));
                i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown")))
            })
        }

        function n(e) {
            var n = e.attr("data-target");
            n || (n = e.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }
        var i = ".dropdown-backdrop",
            o = "[data-toggle=dropdown]",
            r = function (e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        r.prototype.toggle = function (i) {
            var o = t(this);
            if (!o.is(".disabled, :disabled")) {
                var r = n(o),
                    s = r.hasClass("open");
                if (e(), !s) {
                    if ("ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e), r.trigger(i = t.Event("show.bs.dropdown")), i.isDefaultPrevented()) return;
                    r.toggleClass("open").trigger("shown.bs.dropdown"), o.focus()
                }
                return !1
            }
        }, r.prototype.keydown = function (e) {
            if (/(38|40|27)/.test(e.keyCode)) {
                var i = t(this);
                if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var r = n(i),
                        s = r.hasClass("open");
                    if (!s || s && 27 == e.keyCode) return 27 == e.which && r.find(o).focus(), i.click();
                    var a = t("[role=menu] li:not(.divider):visible a", r);
                    if (a.length) {
                        var l = a.index(a.filter(":focus"));
                        38 == e.keyCode && l > 0 && l--, 40 == e.keyCode && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).focus()
                    }
                }
            }
        };
        var s = t.fn.dropdown;
        t.fn.dropdown = function (e) {
            return this.each(function () {
                var n = t(this),
                    i = n.data("dropdown");
                i || n.data("dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
            })
        }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
            return t.fn.dropdown = s, this
        }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ", [role=menu]", r.prototype.keydown)
    }(window.jQuery), + function (t) {
        "use strict";
        var e = function (e, n) {
            this.options = n, this.$element = t(e), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
        };
        e.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, e.prototype.toggle = function (t) {
            return this[this.isShown ? "hide" : "show"](t)
        }, e.prototype.show = function (e) {
            var n = this,
                i = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
                var i = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(document.body), n.$element.show(), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                var o = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                i ? n.$element.find(".modal-dialog").one(t.support.transition.end, function () {
                    n.$element.focus().trigger(o)
                }).emulateTransitionEnd(300) : n.$element.focus().trigger(o)
            }))
        }, e.prototype.hide = function (e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
        }, e.prototype.enforceFocus = function () {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                this.$element[0] !== t.target && !this.$element.has(t.target).length && this.$element.focus()
            }, this))
        }, e.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
        }, e.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
            })
        }, e.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, e.prototype.backdrop = function (e) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = t.support.transition && n;
                if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", t.proxy(function (t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                i ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
        };
        var n = t.fn.modal;
        t.fn.modal = function (n, i) {
            return this.each(function () {
                var o = t(this),
                    r = o.data("bs.modal"),
                    s = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n);
                r || o.data("bs.modal", r = new e(this, s)), "string" == typeof n ? r[n](i) : s.show && r.show(i)
            })
        }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
            return t.fn.modal = n, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
            var n = t(this),
                i = n.attr("href"),
                o = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                r = o.data("modal") ? "toggle" : t.extend({
                    remote: !/#/.test(i) && i
                }, o.data(), n.data());
            e.preventDefault(), o.modal(r, this).one("hide", function () {
                n.is(":visible") && n.focus()
            })
        }), t(document).on("show.bs.modal", ".modal", function () {
            t(document.body).addClass("modal-open")
        }).on("hidden.bs.modal", ".modal", function () {
            t(document.body).removeClass("modal-open")
        })
    }(window.jQuery), + function (t) {
        "use strict";
        var e = function (t, e) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
        };
        e.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1
        }, e.prototype.init = function (e, n, i) {
            this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i);
            for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
                var s = o[r];
                if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != s) {
                    var a = "hover" == s ? "mouseenter" : "focus",
                        l = "hover" == s ? "mouseleave" : "blur";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, e.prototype.getDefaults = function () {
            return e.DEFAULTS
        }, e.prototype.getOptions = function (e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, e.prototype.getDelegateOptions = function () {
            var e = {},
                n = this.getDefaults();
            return this._options && t.each(this._options, function (t, i) {
                n[t] != i && (e[t] = i)
            }), e
        }, e.prototype.enter = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)) : n.show()
        }, e.prototype.leave = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)) : n.hide()
        }, e.prototype.show = function () {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(e), e.isDefaultPrevented()) return;
                var n = this.tip();
                this.setContent(), this.options.animation && n.addClass("fade");
                var i = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
                    o = /\s?auto?\s?/i,
                    r = o.test(i);
                r && (i = i.replace(o, "") || "top"), n.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(i), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
                var s = this.getPosition(),
                    a = n[0].offsetWidth,
                    l = n[0].offsetHeight;
                if (r) {
                    var u = this.$element.parent(),
                        c = i,
                        h = document.documentElement.scrollTop || document.body.scrollTop,
                        p = "body" == this.options.container ? window.innerWidth : u.outerWidth(),
                        d = "body" == this.options.container ? window.innerHeight : u.outerHeight(),
                        f = "body" == this.options.container ? 0 : u.offset().left;
                    i = "bottom" == i && s.top + s.height + l - h > d ? "top" : "top" == i && s.top - h - l < 0 ? "bottom" : "right" == i && s.right + a > p ? "left" : "left" == i && s.left - a < f ? "right" : i, n.removeClass(c).addClass(i)
                }
                var g = this.getCalculatedOffset(i, s, a, l);
                this.applyPlacement(g, i), this.$element.trigger("shown.bs." + this.type)
            }
        }, e.prototype.applyPlacement = function (t, e) {
            var n, i = this.tip(),
                o = i[0].offsetWidth,
                r = i[0].offsetHeight,
                s = parseInt(i.css("margin-top"), 10),
                a = parseInt(i.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top = t.top + s, t.left = t.left + a, i.offset(t).addClass("in");
            var l = i[0].offsetWidth,
                u = i[0].offsetHeight;
            if ("top" == e && u != r && (n = !0, t.top = t.top + r - u), /bottom|top/.test(e)) {
                var c = 0;
                t.left < 0 && (c = -2 * t.left, t.left = 0, i.offset(t), l = i[0].offsetWidth, u = i[0].offsetHeight), this.replaceArrow(c - o + l, l, "left")
            } else this.replaceArrow(u - r, u, "top");
            n && i.offset(t)
        }, e.prototype.replaceArrow = function (t, e, n) {
            this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
        }, e.prototype.setContent = function () {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, e.prototype.hide = function () {
            function e() {
                "in" != n.hoverState && i.detach()
            }
            var n = this,
                i = this.tip(),
                o = t.Event("hide.bs." + this.type);
            return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.$element.trigger("hidden.bs." + this.type), this)
        }, e.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, e.prototype.hasContent = function () {
            return this.getTitle()
        }, e.prototype.getPosition = function () {
            var e = this.$element[0];
            return t.extend({}, "function" == typeof e.getBoundingClientRect ? e.getBoundingClientRect() : {
                width: e.offsetWidth,
                height: e.offsetHeight
            }, this.$element.offset())
        }, e.prototype.getCalculatedOffset = function (t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {
                top: e.top + e.height / 2 - i / 2,
                left: e.left + e.width
            }
        }, e.prototype.getTitle = function () {
            var t, e = this.$element,
                n = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
        }, e.prototype.tip = function () {
            return this.$tip = this.$tip || t(this.options.template)
        }, e.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, e.prototype.validate = function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, e.prototype.enable = function () {
            this.enabled = !0
        }, e.prototype.disable = function () {
            this.enabled = !1
        }, e.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, e.prototype.toggle = function (e) {
            var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
            n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, e.prototype.destroy = function () {
            this.hide().$element.off("." + this.type).removeData("bs." + this.type)
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = function (n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.tooltip"),
                    r = "object" == typeof n && n;
                o || i.data("bs.tooltip", o = new e(this, r)), "string" == typeof n && o[n]()
            })
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = n, this
        }
    }(window.jQuery), + function (t) {
        "use strict";
        var e = function (t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
            return e.DEFAULTS
        }, e.prototype.setContent = function () {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content")[this.options.html ? "html" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, e.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, e.prototype.getContent = function () {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, e.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, e.prototype.tip = function () {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip
        };
        var n = t.fn.popover;
        t.fn.popover = function (n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.popover"),
                    r = "object" == typeof n && n;
                o || i.data("bs.popover", o = new e(this, r)), "string" == typeof n && o[n]()
            })
        }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
            return t.fn.popover = n, this
        }
    }(window.jQuery), + function (t) {
        "use strict";
        var e = function (e) {
            this.element = t(e)
        };
        e.prototype.show = function () {
            var e = this.element,
                n = e.closest("ul:not(.dropdown-menu)"),
                i = e.attr("data-target");
            if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var o = n.find(".active:last a")[0],
                    r = t.Event("show.bs.tab", {
                        relatedTarget: o
                    });
                if (e.trigger(r), !r.isDefaultPrevented()) {
                    var s = t(i);
                    this.activate(e.parent("li"), n), this.activate(s, s.parent(), function () {
                        e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: o
                        })
                    })
                }
            }
        }, e.prototype.activate = function (e, n, i) {
            function o() {
                r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
            }
            var r = n.find("> .active"),
                s = i && t.support.transition && r.hasClass("fade");
            s ? r.one(t.support.transition.end, o).emulateTransitionEnd(150) : o(), r.removeClass("in")
        };
        var n = t.fn.tab;
        t.fn.tab = function (n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.tab");
                o || i.data("bs.tab", o = new e(this)), "string" == typeof n && o[n]()
            })
        }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
            return t.fn.tab = n, this
        }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
            e.preventDefault(), t(this).tab("show")
        })
    }(window.jQuery), + function (t) {
        "use strict";
        var e = function (n, i) {
            this.options = t.extend({}, e.DEFAULTS, i), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = this.unpin = null, this.checkPosition()
        };
        e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
            offset: 0
        }, e.prototype.checkPositionWithEventLoop = function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, e.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var n = t(document).height(),
                    i = this.$window.scrollTop(),
                    o = this.$element.offset(),
                    r = this.options.offset,
                    s = r.top,
                    a = r.bottom;
                "object" != typeof r && (a = s = r), "function" == typeof s && (s = r.top()), "function" == typeof a && (a = r.bottom());
                var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != a && o.top + this.$element.height() >= n - a ? "bottom" : null != s && s >= i ? "top" : !1;
                this.affixed !== l && (this.unpin && this.$element.css("top", ""), this.affixed = l, this.unpin = "bottom" == l ? o.top - i : null, this.$element.removeClass(e.RESET).addClass("affix" + (l ? "-" + l : "")), "bottom" == l && this.$element.offset({
                    top: document.body.offsetHeight - a - this.$element.height()
                }))
            }
        };
        var n = t.fn.affix;
        t.fn.affix = function (n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.affix"),
                    r = "object" == typeof n && n;
                o || i.data("bs.affix", o = new e(this, r)), "string" == typeof n && o[n]()
            })
        }, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
            return t.fn.affix = n, this
        }, t(window).on("load", function () {
            t('[data-spy="affix"]').each(function () {
                var e = t(this),
                    n = e.data();
                n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.affix(n)
            })
        })
    }(window.jQuery), + function (t) {
        "use strict";
        var e = function (n, i) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
        };
        e.DEFAULTS = {
            toggle: !0
        }, e.prototype.dimension = function () {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height"
        }, e.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e = t.Event("show.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.$parent && this.$parent.find("> .panel > .in");
                    if (n && n.length) {
                        var i = n.data("bs.collapse");
                        if (i && i.transitioning) return;
                        n.collapse("hide"), i || n.data("bs.collapse", null)
                    }
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("in")[o]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return r.call(this);
                    var s = t.camelCase(["scroll", o].join("-"));
                    this.$element.one(t.support.transition.end, t.proxy(r, this)).emulateTransitionEnd(350)[o](this.$element[0][s])
                }
            }
        }, e.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var i = function () {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                    return t.support.transition ? void this.$element[n](0).one(t.support.transition.end, t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
                }
            }
        }, e.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var n = t.fn.collapse;
        t.fn.collapse = function (n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.collapse"),
                    r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
                o || i.data("bs.collapse", o = new e(this, r)), "string" == typeof n && o[n]()
            })
        }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
            return t.fn.collapse = n, this
        }, t(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function (e) {
            var n, i = t(this),
                o = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
                r = t(o),
                s = r.data("bs.collapse"),
                a = s ? "toggle" : i.data(),
                l = i.attr("data-parent"),
                u = l && t(l);
            s && s.transitioning || (u && u.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), r.collapse(a)
        })
    }(window.jQuery), + function (t) {
        function e(n, i) {
            var o, r = t.proxy(this.process, this);
            this.$element = t(t(n).is("body") ? window : n), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", r), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || (o = t(n).attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
        }
        e.DEFAULTS = {
            offset: 10
        }, e.prototype.refresh = function () {
            var e = this.$element[0] == window ? "offset" : "position";
            this.offsets = t([]), this.targets = t([]); {
                var n = this;
                this.$body.find(this.selector).map(function () {
                    var i = t(this),
                        o = i.data("target") || i.attr("href"),
                        r = /^#\w/.test(o) && t(o);
                    return r && r.length && [
                        [r[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), o]
                    ] || null
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).each(function () {
                    n.offsets.push(this[0]), n.targets.push(this[1])
                })
            }
        }, e.prototype.process = function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                i = n - this.$scrollElement.height(),
                o = this.offsets,
                r = this.targets,
                s = this.activeTarget;
            if (e >= i) return s != (t = r.last()[0]) && this.activate(t);
            for (t = o.length; t--;) s != r[t] && e >= o[t] && (!o[t + 1] || e <= o[t + 1]) && this.activate(r[t])
        }, e.prototype.activate = function (e) {
            this.activeTarget = e, t(this.selector).parents(".active").removeClass("active");
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                i = t(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
        };
        var n = t.fn.scrollspy;
        t.fn.scrollspy = function (n) {
            return this.each(function () {
                var i = t(this),
                    o = i.data("bs.scrollspy"),
                    r = "object" == typeof n && n;
                o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
            })
        }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
            return t.fn.scrollspy = n, this
        }, t(window).on("load", function () {
            t('[data-spy="scroll"]').each(function () {
                var e = t(this);
                e.scrollspy(e.data())
            })
        })
    }(window.jQuery), + function (t) {
        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (void 0 !== t.style[n]) return {
                    end: e[n]
                }
        }
        t.fn.emulateTransitionEnd = function (e) {
            var n = !1,
                i = this;
            t(this).one(t.support.transition.end, function () {
                n = !0
            });
            var o = function () {
                n || t(i).trigger(t.support.transition.end)
            };
            return setTimeout(o, e), this
        }, t(function () {
            t.support.transition = e()
        })
    }(window.jQuery),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        var e, n, i;
        i = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }, n = {
            align: "center",
            autoResize: !1,
            comparator: null,
            container: t("body"),
            ignoreInactiveItems: !0,
            itemWidth: 0,
            fillEmptySpace: !1,
            flexibleWidth: 0,
            direction: void 0,
            offset: 2,
            onLayoutChanged: void 0,
            outerOffset: 0,
            resizeDelay: 50,
            possibleFilters: []
        }, e = function () {
            function e(e, o) {
                this.handler = e, this.columns = this.containerWidth = this.resizeTimer = null, this.activeItemCount = 0, this.itemHeightsDirty = !0, this.placeholders = [], t.extend(!0, this, n, o), this.update = i(this.update, this), this.onResize = i(this.onResize, this), this.onRefresh = i(this.onRefresh, this), this.getItemWidth = i(this.getItemWidth, this), this.layout = i(this.layout, this), this.layoutFull = i(this.layoutFull, this), this.layoutColumns = i(this.layoutColumns, this), this.filter = i(this.filter, this), this.clear = i(this.clear, this), this.getActiveItems = i(this.getActiveItems, this), this.refreshPlaceholders = i(this.refreshPlaceholders, this), this.sortElements = i(this.sortElements, this);
                for (var r, s, a, l = 0, u = 0, c = 0, h = {}; e.length > l; l++)
                    if (s = e.eq(l), r = s.data("filterClass"), "object" == typeof r && r.length > 0)
                        for (u = 0; r.length > u; u++) a = t.trim(r[u]).toLowerCase(), a in h || (h[a] = []), h[a].push(s[0]);
                for (var p = this.possibleFilters; p.length > c; c++) {
                    var d = t.trim(p[c]).toLowerCase();
                    d in h || (h[d] = [])
                }
                this.filterClasses = h, this.autoResize && t(window).bind("resize.wookmark", this.onResize), this.container.bind("refreshWookmark", this.onRefresh)
            }
            return e.prototype.update = function (e) {
                this.itemHeightsDirty = !0, t.extend(!0, this, e)
            }, e.prototype.onResize = function () {
                clearTimeout(this.resizeTimer), this.itemHeightsDirty = 0 !== this.flexibleWidth, this.resizeTimer = setTimeout(this.layout, this.resizeDelay)
            }, e.prototype.onRefresh = function () {
                this.itemHeightsDirty = !0, this.layout()
            }, e.prototype.filter = function (e, n) {
                var i, o, r, s, a, l = [],
                    u = t();
                if (e = e || [], n = n || "or", e.length) {
                    for (o = 0; e.length > o; o++) a = t.trim(e[o].toLowerCase()), a in this.filterClasses && l.push(this.filterClasses[a]);
                    if (i = l.length, "or" == n || 1 == i)
                        for (o = 0; i > o; o++) u = u.add(l[o]);
                    else if ("and" == n) {
                        var c, h, p, d = l[0],
                            f = !0;
                        for (o = 1; i > o; o++) l[o].length < d.length && (d = l[o]);
                        for (d = d || [], o = 0; d.length > o; o++) {
                            for (h = d[o], f = !0, r = 0; l.length > r && f; r++)
                                if (p = l[r], d != p) {
                                    for (s = 0, c = !1; p.length > s && !c; s++) c = p[s] == h;
                                    f &= c
                                }
                            f && u.push(d[o])
                        }
                    }
                    this.handler.not(u).addClass("inactive")
                } else u = this.handler;
                u.removeClass("inactive"), this.columns = null, this.layout()
            }, e.prototype.refreshPlaceholders = function (e, n) {
                for (var i, o, r, s, a, l, u = this.placeholders.length, c = this.columns.length, h = this.container.innerHeight(); c > u; u++) i = t('<div class="wookmark-placeholder"/>').appendTo(this.container), this.placeholders.push(i);
                for (l = this.offset + 2 * parseInt(this.placeholders[0].css("borderWidth"), 10), u = 0; this.placeholders.length > u; u++)
                    if (i = this.placeholders[u], r = this.columns[u], u >= c || !r[r.length - 1]) i.css("display", "none");
                    else {
                        if (o = r[r.length - 1], !o) continue;
                        a = o.data("wookmark-top") + o.data("wookmark-height") + this.offset, s = h - a - l, i.css({
                            position: "absolute",
                            display: s > 0 ? "block" : "none",
                            left: u * e + n,
                            top: a,
                            width: e - l,
                            height: s
                        })
                    }
            }, e.prototype.getActiveItems = function () {
                return this.ignoreInactiveItems ? this.handler.not(".inactive") : this.handler
            }, e.prototype.getItemWidth = function () {
                var t = this.itemWidth,
                    e = this.container.width() - 2 * this.outerOffset,
                    n = this.handler.eq(0),
                    i = this.flexibleWidth;
                if (void 0 === this.itemWidth || 0 === this.itemWidth && !this.flexibleWidth ? t = n.outerWidth() : "string" == typeof this.itemWidth && this.itemWidth.indexOf("%") >= 0 && (t = parseFloat(this.itemWidth) / 100 * e), i) {
                    "string" == typeof i && i.indexOf("%") >= 0 && (i = parseFloat(i) / 100 * e);
                    var o = ~~(.5 + (e + this.offset) / (i + this.offset)),
                        r = Math.min(i, ~~((e - (o - 1) * this.offset) / o));
                    t = Math.max(t, r), this.handler.css("width", t)
                }
                return t
            }, e.prototype.layout = function (t) {
                if (this.container.is(":visible")) {
                    var e, n = this.getItemWidth() + this.offset,
                        i = this.container.width(),
                        o = i - 2 * this.outerOffset,
                        r = ~~((o + this.offset) / n),
                        s = 0,
                        a = 0,
                        l = 0,
                        u = this.getActiveItems(),
                        c = u.length;
                    if (this.itemHeightsDirty || !this.container.data("itemHeightsInitialized")) {
                        for (; c > l; l++) e = u.eq(l), e.data("wookmark-height", e.outerHeight());
                        this.itemHeightsDirty = !1, this.container.data("itemHeightsInitialized", !0)
                    }
                    r = Math.max(1, Math.min(r, c)), s = this.outerOffset, "center" == this.align && (s += ~~(.5 + (o - (r * n - this.offset)) >> 1)), this.direction = this.direction || ("right" == this.align ? "right" : "left"), a = t || null === this.columns || this.columns.length != r || this.activeItemCount != c ? this.layoutFull(n, r, s) : this.layoutColumns(n, s), this.activeItemCount = c, this.container.css("height", a), this.fillEmptySpace && this.refreshPlaceholders(n, s), void 0 !== this.onLayoutChanged && "function" == typeof this.onLayoutChanged && this.onLayoutChanged()
                }
            }, e.prototype.sortElements = function (t) {
                return "function" == typeof this.comparator ? t.sort(this.comparator) : t
            }, e.prototype.layoutFull = function (e, n, i) {
                var o, r, s = 0,
                    a = 0,
                    l = t.makeArray(this.getActiveItems()),
                    u = l.length,
                    c = null,
                    h = null,
                    p = {
                        position: "absolute"
                    },
                    d = [],
                    f = "left" == this.align ? !0 : !1;
                for (this.columns = [], l = this.sortElements(l); n > d.length;) d.push(this.outerOffset), this.columns.push([]);
                for (; u > s; s++) {
                    for (o = t(l[s]), c = d[0], h = 0, a = 0; n > a; a++) c > d[a] && (c = d[a], h = a);
                    r = i, (h > 0 || !f) && (r += h * e), p[this.direction] = r, p.top = c, o.css(p).data("wookmark-top", c), d[h] += o.data("wookmark-height") + this.offset, this.columns[h].push(o)
                }
                return Math.max.apply(Math, d)
            }, e.prototype.layoutColumns = function (t, e) {
                for (var n, i, o, r, s, a = [], l = 0, u = 0; this.columns.length > l; l++) {
                    for (a.push(this.outerOffset), i = this.columns[l], s = l * t + e, n = a[l], u = 0; i.length > u; u++) o = i[u], r = {
                        top: n
                    }, r[this.direction] = s, o.css(r).data("wookmark-top", n), n += o.data("wookmark-height") + this.offset;
                    a[l] = n
                }
                return Math.max.apply(Math, a)
            }, e.prototype.clear = function () {
                clearTimeout(this.resizeTimer), t(window).unbind("resize.wookmark", this.onResize), this.container.unbind("refreshWookmark", this.onRefresh)
            }, e
        }(), t.fn.wookmark = function (t) {
            return this.wookmarkInstance ? this.wookmarkInstance.update(t || {}) : this.wookmarkInstance = new e(this, t || {}), this.wookmarkInstance.layout(!0), this.show()
        }
    }),
    function () {
        var t = this,
            e = t._,
            n = {},
            i = Array.prototype,
            o = Object.prototype,
            r = Function.prototype,
            s = i.push,
            a = i.slice,
            l = i.concat,
            u = o.toString,
            c = o.hasOwnProperty,
            h = i.forEach,
            p = i.map,
            d = i.reduce,
            f = i.reduceRight,
            g = i.filter,
            m = i.every,
            v = i.some,
            y = i.indexOf,
            b = i.lastIndexOf,
            w = Array.isArray,
            x = Object.keys,
            C = r.bind,
            k = function (t) {
                return t instanceof k ? t : this instanceof k ? void(this._wrapped = t) : new k(t)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : t._ = k, k.VERSION = "1.5.2";
        var T = k.each = k.forEach = function (t, e, i) {
            if (null != t)
                if (h && t.forEach === h) t.forEach(e, i);
                else if (t.length === +t.length) {
                for (var o = 0, r = t.length; r > o; o++)
                    if (e.call(i, t[o], o, t) === n) return
            } else
                for (var s = k.keys(t), o = 0, r = s.length; r > o; o++)
                    if (e.call(i, t[s[o]], s[o], t) === n) return
        };
        k.map = k.collect = function (t, e, n) {
            var i = [];
            return null == t ? i : p && t.map === p ? t.map(e, n) : (T(t, function (t, o, r) {
                i.push(e.call(n, t, o, r))
            }), i)
        };
        var S = "Reduce of empty array with no initial value";
        k.reduce = k.foldl = k.inject = function (t, e, n, i) {
            var o = arguments.length > 2;
            if (null == t && (t = []), d && t.reduce === d) return i && (e = k.bind(e, i)), o ? t.reduce(e, n) : t.reduce(e);
            if (T(t, function (t, r, s) {
                o ? n = e.call(i, n, t, r, s) : (n = t, o = !0)
            }), !o) throw new TypeError(S);
            return n
        }, k.reduceRight = k.foldr = function (t, e, n, i) {
            var o = arguments.length > 2;
            if (null == t && (t = []), f && t.reduceRight === f) return i && (e = k.bind(e, i)), o ? t.reduceRight(e, n) : t.reduceRight(e);
            var r = t.length;
            if (r !== +r) {
                var s = k.keys(t);
                r = s.length
            }
            if (T(t, function (a, l, u) {
                l = s ? s[--r] : --r, o ? n = e.call(i, n, t[l], l, u) : (n = t[l], o = !0)
            }), !o) throw new TypeError(S);
            return n
        }, k.find = k.detect = function (t, e, n) {
            var i;
            return E(t, function (t, o, r) {
                return e.call(n, t, o, r) ? (i = t, !0) : void 0
            }), i
        }, k.filter = k.select = function (t, e, n) {
            var i = [];
            return null == t ? i : g && t.filter === g ? t.filter(e, n) : (T(t, function (t, o, r) {
                e.call(n, t, o, r) && i.push(t)
            }), i)
        }, k.reject = function (t, e, n) {
            return k.filter(t, function (t, i, o) {
                return !e.call(n, t, i, o)
            }, n)
        }, k.every = k.all = function (t, e, i) {
            e || (e = k.identity);
            var o = !0;
            return null == t ? o : m && t.every === m ? t.every(e, i) : (T(t, function (t, r, s) {
                return (o = o && e.call(i, t, r, s)) ? void 0 : n
            }), !!o)
        };
        var E = k.some = k.any = function (t, e, i) {
            e || (e = k.identity);
            var o = !1;
            return null == t ? o : v && t.some === v ? t.some(e, i) : (T(t, function (t, r, s) {
                return o || (o = e.call(i, t, r, s)) ? n : void 0
            }), !!o)
        };
        k.contains = k.include = function (t, e) {
            return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : E(t, function (t) {
                return t === e
            })
        }, k.invoke = function (t, e) {
            var n = a.call(arguments, 2),
                i = k.isFunction(e);
            return k.map(t, function (t) {
                return (i ? e : t[e]).apply(t, n)
            })
        }, k.pluck = function (t, e) {
            return k.map(t, function (t) {
                return t[e]
            })
        }, k.where = function (t, e, n) {
            return k.isEmpty(e) ? n ? void 0 : [] : k[n ? "find" : "filter"](t, function (t) {
                for (var n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            })
        }, k.findWhere = function (t, e) {
            return k.where(t, e, !0)
        }, k.max = function (t, e, n) {
            if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            if (!e && k.isEmpty(t)) return -1 / 0;
            var i = {
                computed: -1 / 0,
                value: -1 / 0
            };
            return T(t, function (t, o, r) {
                var s = e ? e.call(n, t, o, r) : t;
                s > i.computed && (i = {
                    value: t,
                    computed: s
                })
            }), i.value
        }, k.min = function (t, e, n) {
            if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
            if (!e && k.isEmpty(t)) return 1 / 0;
            var i = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return T(t, function (t, o, r) {
                var s = e ? e.call(n, t, o, r) : t;
                s < i.computed && (i = {
                    value: t,
                    computed: s
                })
            }), i.value
        }, k.shuffle = function (t) {
            var e, n = 0,
                i = [];
            return T(t, function (t) {
                e = k.random(n++), i[n - 1] = i[e], i[e] = t
            }), i
        }, k.sample = function (t, e, n) {
            return arguments.length < 2 || n ? t[k.random(t.length - 1)] : k.shuffle(t).slice(0, Math.max(0, e))
        };
        var P = function (t) {
            return k.isFunction(t) ? t : function (e) {
                return e[t]
            }
        };
        k.sortBy = function (t, e, n) {
            var i = P(e);
            return k.pluck(k.map(t, function (t, e, o) {
                return {
                    value: t,
                    index: e,
                    criteria: i.call(n, t, e, o)
                }
            }).sort(function (t, e) {
                var n = t.criteria,
                    i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return t.index - e.index
            }), "value")
        };
        var A = function (t) {
            return function (e, n, i) {
                var o = {},
                    r = null == n ? k.identity : P(n);
                return T(e, function (n, s) {
                    var a = r.call(i, n, s, e);
                    t(o, a, n)
                }), o
            }
        };
        k.groupBy = A(function (t, e, n) {
            (k.has(t, e) ? t[e] : t[e] = []).push(n)
        }), k.indexBy = A(function (t, e, n) {
            t[e] = n
        }), k.countBy = A(function (t, e) {
            k.has(t, e) ? t[e]++ : t[e] = 1
        }), k.sortedIndex = function (t, e, n, i) {
            n = null == n ? k.identity : P(n);
            for (var o = n.call(i, e), r = 0, s = t.length; s > r;) {
                var a = r + s >>> 1;
                n.call(i, t[a]) < o ? r = a + 1 : s = a
            }
            return r
        }, k.toArray = function (t) {
            return t ? k.isArray(t) ? a.call(t) : t.length === +t.length ? k.map(t, k.identity) : k.values(t) : []
        }, k.size = function (t) {
            return null == t ? 0 : t.length === +t.length ? t.length : k.keys(t).length
        }, k.first = k.head = k.take = function (t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : a.call(t, 0, e)
        }, k.initial = function (t, e, n) {
            return a.call(t, 0, t.length - (null == e || n ? 1 : e))
        }, k.last = function (t, e, n) {
            return null == t ? void 0 : null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
        }, k.rest = k.tail = k.drop = function (t, e, n) {
            return a.call(t, null == e || n ? 1 : e)
        }, k.compact = function (t) {
            return k.filter(t, k.identity)
        };
        var I = function (t, e, n) {
            return e && k.every(t, k.isArray) ? l.apply(n, t) : (T(t, function (t) {
                k.isArray(t) || k.isArguments(t) ? e ? s.apply(n, t) : I(t, e, n) : n.push(t)
            }), n)
        };
        k.flatten = function (t, e) {
            return I(t, e, [])
        }, k.without = function (t) {
            return k.difference(t, a.call(arguments, 1))
        }, k.uniq = k.unique = function (t, e, n, i) {
            k.isFunction(e) && (i = n, n = e, e = !1);
            var o = n ? k.map(t, n, i) : t,
                r = [],
                s = [];
            return T(o, function (n, i) {
                (e ? i && s[s.length - 1] === n : k.contains(s, n)) || (s.push(n), r.push(t[i]))
            }), r
        }, k.union = function () {
            return k.uniq(k.flatten(arguments, !0))
        }, k.intersection = function (t) {
            var e = a.call(arguments, 1);
            return k.filter(k.uniq(t), function (t) {
                return k.every(e, function (e) {
                    return k.indexOf(e, t) >= 0
                })
            })
        }, k.difference = function (t) {
            var e = l.apply(i, a.call(arguments, 1));
            return k.filter(t, function (t) {
                return !k.contains(e, t)
            })
        }, k.zip = function () {
            for (var t = k.max(k.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = k.pluck(arguments, "" + n);
            return e
        }, k.object = function (t, e) {
            if (null == t) return {};
            for (var n = {}, i = 0, o = t.length; o > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
            return n
        }, k.indexOf = function (t, e, n) {
            if (null == t) return -1;
            var i = 0,
                o = t.length;
            if (n) {
                if ("number" != typeof n) return i = k.sortedIndex(t, e), t[i] === e ? i : -1;
                i = 0 > n ? Math.max(0, o + n) : n
            }
            if (y && t.indexOf === y) return t.indexOf(e, n);
            for (; o > i; i++)
                if (t[i] === e) return i;
            return -1
        }, k.lastIndexOf = function (t, e, n) {
            if (null == t) return -1;
            var i = null != n;
            if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
            for (var o = i ? n : t.length; o--;)
                if (t[o] === e) return o;
            return -1
        }, k.range = function (t, e, n) {
            arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((e - t) / n), 0), o = 0, r = new Array(i); i > o;) r[o++] = t, t += n;
            return r
        };
        var D = function () {};
        k.bind = function (t, e) {
            var n, i;
            if (C && t.bind === C) return C.apply(t, a.call(arguments, 1));
            if (!k.isFunction(t)) throw new TypeError;
            return n = a.call(arguments, 2), i = function () {
                if (!(this instanceof i)) return t.apply(e, n.concat(a.call(arguments)));
                D.prototype = t.prototype;
                var o = new D;
                D.prototype = null;
                var r = t.apply(o, n.concat(a.call(arguments)));
                return Object(r) === r ? r : o
            }
        }, k.partial = function (t) {
            var e = a.call(arguments, 1);
            return function () {
                return t.apply(this, e.concat(a.call(arguments)))
            }
        }, k.bindAll = function (t) {
            var e = a.call(arguments, 1);
            if (0 === e.length) throw new Error("bindAll must be passed function names");
            return T(e, function (e) {
                t[e] = k.bind(t[e], t)
            }), t
        }, k.memoize = function (t, e) {
            var n = {};
            return e || (e = k.identity),
                function () {
                    var i = e.apply(this, arguments);
                    return k.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
                }
        }, k.delay = function (t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, n)
            }, e)
        }, k.defer = function (t) {
            return k.delay.apply(k, [t, 1].concat(a.call(arguments, 1)))
        }, k.throttle = function (t, e, n) {
            var i, o, r, s = null,
                a = 0;
            n || (n = {});
            var l = function () {
                a = n.leading === !1 ? 0 : new Date, s = null, r = t.apply(i, o)
            };
            return function () {
                var u = new Date;
                a || n.leading !== !1 || (a = u);
                var c = e - (u - a);
                return i = this, o = arguments, 0 >= c ? (clearTimeout(s), s = null, a = u, r = t.apply(i, o)) : s || n.trailing === !1 || (s = setTimeout(l, c)), r
            }
        }, k.debounce = function (t, e, n) {
            var i, o, r, s, a;
            return function () {
                r = this, o = arguments, s = new Date;
                var l = function () {
                        var u = new Date - s;
                        e > u ? i = setTimeout(l, e - u) : (i = null, n || (a = t.apply(r, o)))
                    },
                    u = n && !i;
                return i || (i = setTimeout(l, e)), u && (a = t.apply(r, o)), a
            }
        }, k.once = function (t) {
            var e, n = !1;
            return function () {
                return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
            }
        }, k.wrap = function (t, e) {
            return function () {
                var n = [t];
                return s.apply(n, arguments), e.apply(this, n)
            }
        }, k.compose = function () {
            var t = arguments;
            return function () {
                for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                return e[0]
            }
        }, k.after = function (t, e) {
            return function () {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }, k.keys = x || function (t) {
            if (t !== Object(t)) throw new TypeError("Invalid object");
            var e = [];
            for (var n in t) k.has(t, n) && e.push(n);
            return e
        }, k.values = function (t) {
            for (var e = k.keys(t), n = e.length, i = new Array(n), o = 0; n > o; o++) i[o] = t[e[o]];
            return i
        }, k.pairs = function (t) {
            for (var e = k.keys(t), n = e.length, i = new Array(n), o = 0; n > o; o++) i[o] = [e[o], t[e[o]]];
            return i
        }, k.invert = function (t) {
            for (var e = {}, n = k.keys(t), i = 0, o = n.length; o > i; i++) e[t[n[i]]] = n[i];
            return e
        }, k.functions = k.methods = function (t) {
            var e = [];
            for (var n in t) k.isFunction(t[n]) && e.push(n);
            return e.sort()
        }, k.extend = function (t) {
            return T(a.call(arguments, 1), function (e) {
                if (e)
                    for (var n in e) t[n] = e[n]
            }), t
        }, k.pick = function (t) {
            var e = {},
                n = l.apply(i, a.call(arguments, 1));
            return T(n, function (n) {
                n in t && (e[n] = t[n])
            }), e
        }, k.omit = function (t) {
            var e = {},
                n = l.apply(i, a.call(arguments, 1));
            for (var o in t) k.contains(n, o) || (e[o] = t[o]);
            return e
        }, k.defaults = function (t) {
            return T(a.call(arguments, 1), function (e) {
                if (e)
                    for (var n in e) void 0 === t[n] && (t[n] = e[n])
            }), t
        }, k.clone = function (t) {
            return k.isObject(t) ? k.isArray(t) ? t.slice() : k.extend({}, t) : t
        }, k.tap = function (t, e) {
            return e(t), t
        };
        var $ = function (t, e, n, i) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
            var o = u.call(t);
            if (o != u.call(e)) return !1;
            switch (o) {
            case "[object String]":
                return t == String(e);
            case "[object Number]":
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +e;
            case "[object RegExp]":
                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
            }
            if ("object" != typeof t || "object" != typeof e) return !1;
            for (var r = n.length; r--;)
                if (n[r] == t) return i[r] == e;
            var s = t.constructor,
                a = e.constructor;
            if (s !== a && !(k.isFunction(s) && s instanceof s && k.isFunction(a) && a instanceof a)) return !1;
            n.push(t), i.push(e);
            var l = 0,
                c = !0;
            if ("[object Array]" == o) {
                if (l = t.length, c = l == e.length)
                    for (; l-- && (c = $(t[l], e[l], n, i)););
            } else {
                for (var h in t)
                    if (k.has(t, h) && (l++, !(c = k.has(e, h) && $(t[h], e[h], n, i)))) break;
                if (c) {
                    for (h in e)
                        if (k.has(e, h) && !l--) break;
                    c = !l
                }
            }
            return n.pop(), i.pop(), c
        };
        k.isEqual = function (t, e) {
            return $(t, e, [], [])
        }, k.isEmpty = function (t) {
            if (null == t) return !0;
            if (k.isArray(t) || k.isString(t)) return 0 === t.length;
            for (var e in t)
                if (k.has(t, e)) return !1;
            return !0
        }, k.isElement = function (t) {
            return !(!t || 1 !== t.nodeType)
        }, k.isArray = w || function (t) {
            return "[object Array]" == u.call(t)
        }, k.isObject = function (t) {
            return t === Object(t)
        }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
            k["is" + t] = function (e) {
                return u.call(e) == "[object " + t + "]"
            }
        }), k.isArguments(arguments) || (k.isArguments = function (t) {
            return !(!t || !k.has(t, "callee"))
        }), "function" != typeof / . / && (k.isFunction = function (t) {
            return "function" == typeof t
        }), k.isFinite = function (t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, k.isNaN = function (t) {
            return k.isNumber(t) && t != +t
        }, k.isBoolean = function (t) {
            return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
        }, k.isNull = function (t) {
            return null === t
        }, k.isUndefined = function (t) {
            return void 0 === t
        }, k.has = function (t, e) {
            return c.call(t, e)
        }, k.noConflict = function () {
            return t._ = e, this
        }, k.identity = function (t) {
            return t
        }, k.times = function (t, e, n) {
            for (var i = Array(Math.max(0, t)), o = 0; t > o; o++) i[o] = e.call(n, o);
            return i
        }, k.random = function (t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        };
        var O = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        O.unescape = k.invert(O.escape);
        var j = {
            escape: new RegExp("[" + k.keys(O.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + k.keys(O.unescape).join("|") + ")", "g")
        };
        k.each(["escape", "unescape"], function (t) {
            k[t] = function (e) {
                return null == e ? "" : ("" + e).replace(j[t], function (e) {
                    return O[t][e]
                })
            }
        }), k.result = function (t, e) {
            if (null == t) return void 0;
            var n = t[e];
            return k.isFunction(n) ? n.call(t) : n
        }, k.mixin = function (t) {
            T(k.functions(t), function (e) {
                var n = k[e] = t[e];
                k.prototype[e] = function () {
                    var t = [this._wrapped];
                    return s.apply(t, arguments), H.call(this, n.apply(k, t))
                }
            })
        };
        var _ = 0;
        k.uniqueId = function (t) {
            var e = ++_ + "";
            return t ? t + e : e
        }, k.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var N = /(.)^/,
            L = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                " ": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            M = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        k.template = function (t, e, n) {
            var i;
            n = k.defaults({}, n, k.templateSettings);
            var o = new RegExp([(n.escape || N).source, (n.interpolate || N).source, (n.evaluate || N).source].join("|") + "|$", "g"),
                r = 0,
                s = "__p+='";
            t.replace(o, function (e, n, i, o, a) {
                return s += t.slice(r, a).replace(M, function (t) {
                    return "\\" + L[t]
                }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), o && (s += "';\n" + o + "\n__p+='"), r = a + e.length, e
            }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", s)
            } catch (a) {
                throw a.source = s, a
            }
            if (e) return i(e, k);
            var l = function (t) {
                return i.call(this, t, k)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", l
        }, k.chain = function (t) {
            return k(t).chain()
        };
        var H = function (t) {
            return this._chain ? k(t).chain() : t
        };
        k.mixin(k), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
            var e = i[t];
            k.prototype[t] = function () {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], H.call(this, n)
            }
        }), T(["concat", "join", "slice"], function (t) {
            var e = i[t];
            k.prototype[t] = function () {
                return H.call(this, e.apply(this._wrapped, arguments))
            }
        }), k.extend(k.prototype, {
            chain: function () {
                return this._chain = !0, this
            },
            value: function () {
                return this._wrapped
            }
        })
    }.call(this), ! function (t) {
        var e = "0.9.3",
            n = {
                isMsie: function () {
                    var t = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
                    return t ? parseInt(t[2], 10) : !1
                },
                isBlankString: function (t) {
                    return !t || /^\s*$/.test(t)
                },
                escapeRegExChars: function (t) {
                    return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                },
                isString: function (t) {
                    return "string" == typeof t
                },
                isNumber: function (t) {
                    return "number" == typeof t
                },
                isArray: t.isArray,
                isFunction: t.isFunction,
                isObject: t.isPlainObject,
                isUndefined: function (t) {
                    return "undefined" == typeof t
                },
                bind: t.proxy,
                bindAll: function (e) {
                    var n;
                    for (var i in e) t.isFunction(n = e[i]) && (e[i] = t.proxy(n, e))
                },
                indexOf: function (t, e) {
                    for (var n = 0; n < t.length; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                each: t.each,
                map: t.map,
                filter: t.grep,
                every: function (e, n) {
                    var i = !0;
                    return e ? (t.each(e, function (t, o) {
                        return (i = n.call(null, o, t, e)) ? void 0 : !1
                    }), !!i) : i
                },
                some: function (e, n) {
                    var i = !1;
                    return e ? (t.each(e, function (t, o) {
                        return (i = n.call(null, o, t, e)) ? !1 : void 0
                    }), !!i) : i
                },
                mixin: t.extend,
                getUniqueId: function () {
                    var t = 0;
                    return function () {
                        return t++
                    }
                }(),
                defer: function (t) {
                    setTimeout(t, 0)
                },
                debounce: function (t, e, n) {
                    var i, o;
                    return function () {
                        var r, s, a = this,
                            l = arguments;
                        return r = function () {
                            i = null, n || (o = t.apply(a, l))
                        }, s = n && !i, clearTimeout(i), i = setTimeout(r, e), s && (o = t.apply(a, l)), o
                    }
                },
                throttle: function (t, e) {
                    var n, i, o, r, s, a;
                    return s = 0, a = function () {
                            s = new Date, o = null, r = t.apply(n, i)
                        },
                        function () {
                            var l = new Date,
                                u = e - (l - s);
                            return n = this, i = arguments, 0 >= u ? (clearTimeout(o), o = null, s = l, r = t.apply(n, i)) : o || (o = setTimeout(a, u)), r
                        }
                },
                tokenizeQuery: function (e) {
                    return t.trim(e).toLowerCase().split(/[\s]+/)
                },
                tokenizeText: function (e) {
                    return t.trim(e).toLowerCase().split(/[\s\-_]+/)
                },
                getProtocol: function () {
                    return location.protocol
                },
                noop: function () {}
            },
            i = function () {
                var t = /\s+/;
                return {
                    on: function (e, n) {
                        var i;
                        if (!n) return this;
                        for (this._callbacks = this._callbacks || {}, e = e.split(t); i = e.shift();) this._callbacks[i] = this._callbacks[i] || [], this._callbacks[i].push(n);
                        return this
                    },
                    trigger: function (e, n) {
                        var i, o;
                        if (!this._callbacks) return this;
                        for (e = e.split(t); i = e.shift();)
                            if (o = this._callbacks[i])
                                for (var r = 0; r < o.length; r += 1) o[r].call(this, {
                                    type: i,
                                    data: n
                                });
                        return this
                    }
                }
            }(),
            o = function () {
                function e(e) {
                    e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
                }
                var i = "typeahead:";
                return n.mixin(e.prototype, {
                    trigger: function (t) {
                        var e = [].slice.call(arguments, 1);
                        this.$el.trigger(i + t, e)
                    }
                }), e
            }(),
            r = function () {
                function t(t) {
                    this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + this.prefix)
                }

                function e() {
                    return (new Date).getTime()
                }

                function i(t) {
                    return JSON.stringify(n.isUndefined(t) ? null : t)
                }

                function o(t) {
                    return JSON.parse(t)
                }
                var r, s;
                try {
                    r = window.localStorage, r.setItem("~~~", "!"), r.removeItem("~~~")
                } catch (a) {
                    r = null
                }
                return s = r && window.JSON ? {
                    _prefix: function (t) {
                        return this.prefix + t
                    },
                    _ttlKey: function (t) {
                        return this._prefix(t) + this.ttlKey
                    },
                    get: function (t) {
                        return this.isExpired(t) && this.remove(t), o(r.getItem(this._prefix(t)))
                    },
                    set: function (t, o, s) {
                        return n.isNumber(s) ? r.setItem(this._ttlKey(t), i(e() + s)) : r.removeItem(this._ttlKey(t)), r.setItem(this._prefix(t), i(o))
                    },
                    remove: function (t) {
                        return r.removeItem(this._ttlKey(t)), r.removeItem(this._prefix(t)), this
                    },
                    clear: function () {
                        var t, e, n = [],
                            i = r.length;
                        for (t = 0; i > t; t++)(e = r.key(t)).match(this.keyMatcher) && n.push(e.replace(this.keyMatcher, ""));
                        for (t = n.length; t--;) this.remove(n[t]);
                        return this
                    },
                    isExpired: function (t) {
                        var i = o(r.getItem(this._ttlKey(t)));
                        return n.isNumber(i) && e() > i ? !0 : !1
                    }
                } : {
                    get: n.noop,
                    set: n.noop,
                    remove: n.noop,
                    clear: n.noop,
                    isExpired: n.noop
                }, n.mixin(t.prototype, s), t
            }(),
            s = function () {
                function t(t) {
                    n.bindAll(this), t = t || {}, this.sizeLimit = t.sizeLimit || 10, this.cache = {}, this.cachedKeysByAge = []
                }
                return n.mixin(t.prototype, {
                    get: function (t) {
                        return this.cache[t]
                    },
                    set: function (t, e) {
                        var n;
                        this.cachedKeysByAge.length === this.sizeLimit && (n = this.cachedKeysByAge.shift(), delete this.cache[n]), this.cache[t] = e, this.cachedKeysByAge.push(t)
                    }
                }), t
            }(),
            a = function () {
                function e(t) {
                    n.bindAll(this), t = n.isString(t) ? {
                        url: t
                    } : t, l = l || new s, a = n.isNumber(t.maxParallelRequests) ? t.maxParallelRequests : a || 6, this.url = t.url, this.wildcard = t.wildcard || "%QUERY", this.filter = t.filter, this.replace = t.replace, this.ajaxSettings = {
                        type: "get",
                        cache: t.cache,
                        timeout: t.timeout,
                        dataType: t.dataType || "json",
                        beforeSend: t.beforeSend
                    }, this._get = (/^throttle$/i.test(t.rateLimitFn) ? n.throttle : n.debounce)(this._get, t.rateLimitWait || 300)
                }

                function i() {
                    u++
                }

                function o() {
                    u--
                }

                function r() {
                    return a > u
                }
                var a, l, u = 0,
                    c = {};
                return n.mixin(e.prototype, {
                    _get: function (t, e) {
                        function n(n) {
                            var o = i.filter ? i.filter(n) : n;
                            e && e(o), l.set(t, n)
                        }
                        var i = this;
                        r() ? this._sendRequest(t).done(n) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
                    },
                    _sendRequest: function (e) {
                        function n() {
                            o(), c[e] = null, r.onDeckRequestArgs && (r._get.apply(r, r.onDeckRequestArgs), r.onDeckRequestArgs = null)
                        }
                        var r = this,
                            s = c[e];
                        return s || (i(), s = c[e] = t.ajax(e, this.ajaxSettings).always(n)), s
                    },
                    get: function (t, e) {
                        var i, o, r = this,
                            s = encodeURIComponent(t || "");
                        return e = e || n.noop, i = this.replace ? this.replace(this.url, s) : this.url.replace(this.wildcard, s), (o = l.get(i)) ? n.defer(function () {
                            e(r.filter ? r.filter(o) : o)
                        }) : this._get(i, e), !!o
                    }
                }), e
            }(),
            l = function () {
                function i(e) {
                    n.bindAll(this), n.isString(e.template) && !e.engine && t.error("no template engine specified"), e.local || e.prefetch || e.remote || t.error("one of local, prefetch, or remote is required"), this.name = e.name || n.getUniqueId(), this.limit = e.limit || 5, this.minLength = e.minLength || 1, this.header = e.header, this.footer = e.footer, this.valueKey = e.valueKey || "value", this.template = o(e.template, e.engine, this.valueKey), this.local = e.local, this.prefetch = e.prefetch, this.remote = e.remote, this.itemHash = {}, this.adjacencyList = {}, this.storage = e.name ? new r(e.name) : null
                }

                function o(t, e, i) {
                    var o, r;
                    return n.isFunction(t) ? o = t : n.isString(t) ? (r = e.compile(t), o = n.bind(r.render, r)) : o = function (t) {
                        return "<p>" + t[i] + "</p>"
                    }, o
                }
                var s = {
                    thumbprint: "thumbprint",
                    protocol: "protocol",
                    itemHash: "itemHash",
                    adjacencyList: "adjacencyList"
                };
                return n.mixin(i.prototype, {
                    _processLocalData: function (t) {
                        this._mergeProcessedData(this._processData(t))
                    },
                    _loadPrefetchData: function (i) {
                        function o(t) {
                            var e = i.filter ? i.filter(t) : t,
                                o = p._processData(e),
                                r = o.itemHash,
                                a = o.adjacencyList;
                            p.storage && (p.storage.set(s.itemHash, r, i.ttl), p.storage.set(s.adjacencyList, a, i.ttl), p.storage.set(s.thumbprint, d, i.ttl), p.storage.set(s.protocol, n.getProtocol(), i.ttl)), p._mergeProcessedData(o)
                        }
                        var r, a, l, u, c, h, p = this,
                            d = e + (i.thumbprint || "");
                        return this.storage && (r = this.storage.get(s.thumbprint), a = this.storage.get(s.protocol), l = this.storage.get(s.itemHash), u = this.storage.get(s.adjacencyList)), c = r !== d || a !== n.getProtocol(), i = n.isString(i) ? {
                            url: i
                        } : i, i.ttl = n.isNumber(i.ttl) ? i.ttl : 864e5, l && u && !c ? (this._mergeProcessedData({
                            itemHash: l,
                            adjacencyList: u
                        }), h = t.Deferred().resolve()) : h = t.getJSON(i.url).done(o), h
                    },
                    _transformDatum: function (t) {
                        var e = n.isString(t) ? t : t[this.valueKey],
                            i = t.tokens || n.tokenizeText(e),
                            o = {
                                value: e,
                                tokens: i
                            };
                        return n.isString(t) ? (o.datum = {}, o.datum[this.valueKey] = t) : o.datum = t, o.tokens = n.filter(o.tokens, function (t) {
                            return !n.isBlankString(t)
                        }), o.tokens = n.map(o.tokens, function (t) {
                            return t.toLowerCase()
                        }), o
                    },
                    _processData: function (t) {
                        var e = this,
                            i = {},
                            o = {};
                        return n.each(t, function (t, r) {
                            var s = e._transformDatum(r),
                                a = n.getUniqueId(s.value);
                            i[a] = s, n.each(s.tokens, function (t, e) {
                                var i = e.charAt(0),
                                    r = o[i] || (o[i] = [a]);
                                !~n.indexOf(r, a) && r.push(a)
                            })
                        }), {
                            itemHash: i,
                            adjacencyList: o
                        }
                    },
                    _mergeProcessedData: function (t) {
                        var e = this;
                        n.mixin(this.itemHash, t.itemHash), n.each(t.adjacencyList, function (t, n) {
                            var i = e.adjacencyList[t];
                            e.adjacencyList[t] = i ? i.concat(n) : n
                        })
                    },
                    _getLocalSuggestions: function (t) {
                        var e, i = this,
                            o = [],
                            r = [],
                            s = [];
                        return n.each(t, function (t, e) {
                            var i = e.charAt(0);
                            !~n.indexOf(o, i) && o.push(i)
                        }), n.each(o, function (t, n) {
                            var o = i.adjacencyList[n];
                            return o ? (r.push(o), void((!e || o.length < e.length) && (e = o))) : !1
                        }), r.length < o.length ? [] : (n.each(e, function (e, o) {
                            var a, l, u = i.itemHash[o];
                            a = n.every(r, function (t) {
                                return ~n.indexOf(t, o)
                            }), l = a && n.every(t, function (t) {
                                return n.some(u.tokens, function (e) {
                                    return 0 === e.indexOf(t)
                                })
                            }), l && s.push(u)
                        }), s)
                    },
                    initialize: function () {
                        var e;
                        return this.local && this._processLocalData(this.local), this.transport = this.remote ? new a(this.remote) : null, e = this.prefetch ? this._loadPrefetchData(this.prefetch) : t.Deferred().resolve(), this.local = this.prefetch = this.remote = null, this.initialize = function () {
                            return e
                        }, e
                    },
                    getSuggestions: function (t, e) {
                        function i(t) {
                            r = r.slice(0), n.each(t, function (t, e) {
                                var i, o = s._transformDatum(e);
                                return i = n.some(r, function (t) {
                                    return o.value === t.value
                                }), !i && r.push(o), r.length < s.limit
                            }), e && e(r)
                        }
                        var o, r, s = this,
                            a = !1;
                        t.length < this.minLength || (o = n.tokenizeQuery(t), r = this._getLocalSuggestions(o).slice(0, this.limit), r.length < this.limit && this.transport && (a = this.transport.get(t, i)), !a && e && e(r))
                    }
                }), i
            }(),
            u = function () {
                function e(e) {
                    var i = this;
                    n.bindAll(this), this.specialKeyCodeMap = {
                        9: "tab",
                        27: "esc",
                        37: "left",
                        39: "right",
                        13: "enter",
                        38: "up",
                        40: "down"
                    }, this.$hint = t(e.hint), this.$input = t(e.input).on("blur.tt", this._handleBlur).on("focus.tt", this._handleFocus).on("keydown.tt", this._handleSpecialKeyEvent), n.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (t) {
                        i.specialKeyCodeMap[t.which || t.keyCode] || n.defer(i._compareQueryToInputValue)
                    }) : this.$input.on("input.tt", this._compareQueryToInputValue), this.query = this.$input.val(), this.$overflowHelper = o(this.$input)
                }

                function o(e) {
                    return t("<span></span>").css({
                        position: "absolute",
                        left: "-9999px",
                        visibility: "hidden",
                        whiteSpace: "nowrap",
                        fontFamily: e.css("font-family"),
                        fontSize: e.css("font-size"),
                        fontStyle: e.css("font-style"),
                        fontVariant: e.css("font-variant"),
                        fontWeight: e.css("font-weight"),
                        wordSpacing: e.css("word-spacing"),
                        letterSpacing: e.css("letter-spacing"),
                        textIndent: e.css("text-indent"),
                        textRendering: e.css("text-rendering"),
                        textTransform: e.css("text-transform")
                    }).insertAfter(e)
                }

                function r(t, e) {
                    return t = (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "), e = (e || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "), t === e
                }
                return n.mixin(e.prototype, i, {
                    _handleFocus: function () {
                        this.trigger("focused")
                    },
                    _handleBlur: function () {
                        this.trigger("blured")
                    },
                    _handleSpecialKeyEvent: function (t) {
                        var e = this.specialKeyCodeMap[t.which || t.keyCode];
                        e && this.trigger(e + "Keyed", t)
                    },
                    _compareQueryToInputValue: function () {
                        var t = this.getInputValue(),
                            e = r(this.query, t),
                            n = e ? this.query.length !== t.length : !1;
                        n ? this.trigger("whitespaceChanged", {
                            value: this.query
                        }) : e || this.trigger("queryChanged", {
                            value: this.query = t
                        })
                    },
                    destroy: function () {
                        this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                    },
                    focus: function () {
                        this.$input.focus()
                    },
                    blur: function () {
                        this.$input.blur()
                    },
                    getQuery: function () {
                        return this.query
                    },
                    setQuery: function (t) {
                        this.query = t
                    },
                    getInputValue: function () {
                        return this.$input.val()
                    },
                    setInputValue: function (t, e) {
                        this.$input.val(t), !e && this._compareQueryToInputValue()
                    },
                    getHintValue: function () {
                        return this.$hint.val()
                    },
                    setHintValue: function (t) {
                        this.$hint.val(t)
                    },
                    getLanguageDirection: function () {
                        return (this.$input.css("direction") || "ltr").toLowerCase()
                    },
                    isOverflow: function () {
                        return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() > this.$input.width()
                    },
                    isCursorAtEnd: function () {
                        var t, e = this.$input.val().length,
                            i = this.$input[0].selectionStart;
                        return n.isNumber(i) ? i === e : document.selection ? (t = document.selection.createRange(), t.moveStart("character", -e), e === t.text.length) : !0
                    }
                }), e
            }(),
            c = function () {
                function e(e) {
                    n.bindAll(this), this.isOpen = !1, this.isEmpty = !0, this.isMouseOverDropdown = !1, this.$menu = t(e.menu).on("mouseenter.tt", this._handleMouseenter).on("mouseleave.tt", this._handleMouseleave).on("click.tt", ".tt-suggestion", this._handleSelection).on("mouseover.tt", ".tt-suggestion", this._handleMouseover)
                }

                function o(t) {
                    return t.data("suggestion")
                }
                var r = {
                        suggestionsList: '<span class="tt-suggestions"></span>'
                    },
                    s = {
                        suggestionsList: {
                            display: "block"
                        },
                        suggestion: {
                            whiteSpace: "nowrap",
                            cursor: "pointer"
                        },
                        suggestionChild: {
                            whiteSpace: "normal"
                        }
                    };
                return n.mixin(e.prototype, i, {
                    _handleMouseenter: function () {
                        this.isMouseOverDropdown = !0
                    },
                    _handleMouseleave: function () {
                        this.isMouseOverDropdown = !1
                    },
                    _handleMouseover: function (e) {
                        var n = t(e.currentTarget);
                        this._getSuggestions().removeClass("tt-is-under-cursor"), n.addClass("tt-is-under-cursor")
                    },
                    _handleSelection: function (e) {
                        var n = t(e.currentTarget);
                        this.trigger("suggestionSelected", o(n))
                    },
                    _show: function () {
                        this.$menu.css("display", "block")
                    },
                    _hide: function () {
                        this.$menu.hide()
                    },
                    _moveCursor: function (t) {
                        var e, n, i, r;
                        if (this.isVisible()) {
                            if (e = this._getSuggestions(), n = e.filter(".tt-is-under-cursor"), n.removeClass("tt-is-under-cursor"), i = e.index(n) + t, i = (i + 1) % (e.length + 1) - 1, -1 === i) return void this.trigger("cursorRemoved"); - 1 > i && (i = e.length - 1), r = e.eq(i).addClass("tt-is-under-cursor"), this._ensureVisibility(r), this.trigger("cursorMoved", o(r))
                        }
                    },
                    _getSuggestions: function () {
                        return this.$menu.find(".tt-suggestions > .tt-suggestion")
                    },
                    _ensureVisibility: function (t) {
                        var e = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10),
                            n = this.$menu.scrollTop(),
                            i = t.position().top,
                            o = i + t.outerHeight(!0);
                        0 > i ? this.$menu.scrollTop(n + i) : o > e && this.$menu.scrollTop(n + (o - e))
                    },
                    destroy: function () {
                        this.$menu.off(".tt"), this.$menu = null
                    },
                    isVisible: function () {
                        return this.isOpen && !this.isEmpty
                    },
                    closeUnlessMouseIsOverDropdown: function () {
                        this.isMouseOverDropdown || this.close()
                    },
                    close: function () {
                        this.isOpen && (this.isOpen = !1, this.isMouseOverDropdown = !1, this._hide(), this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"), this.trigger("closed"))
                    },
                    open: function () {
                        this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                    },
                    setLanguageDirection: function (t) {
                        var e = {
                                left: "0",
                                right: "auto"
                            },
                            n = {
                                left: "auto",
                                right: " 0"
                            };
                        this.$menu.css("ltr" === t ? e : n)
                    },
                    moveCursorUp: function () {
                        this._moveCursor(-1)
                    },
                    moveCursorDown: function () {
                        this._moveCursor(1)
                    },
                    getSuggestionUnderCursor: function () {
                        var t = this._getSuggestions().filter(".tt-is-under-cursor").first();
                        return t.length > 0 ? o(t) : null
                    },
                    getFirstSuggestion: function () {
                        var t = this._getSuggestions().first();
                        return t.length > 0 ? o(t) : null
                    },
                    renderSuggestions: function (e, i) {
                        var o, a, l, u, c, h = "tt-dataset-" + e.name,
                            p = '<div class="tt-suggestion">%body</div>',
                            d = this.$menu.find("." + h);
                        0 === d.length && (a = t(r.suggestionsList).css(s.suggestionsList), d = t("<div></div>").addClass(h).append(e.header).append(a).append(e.footer).appendTo(this.$menu)), i.length > 0 ? (this.isEmpty = !1, this.isOpen && this._show(), l = document.createElement("div"), u = document.createDocumentFragment(), n.each(i, function (n, i) {
                            i.dataset = e.name, o = e.template(i.datum), l.innerHTML = p.replace("%body", o), c = t(l.firstChild).css(s.suggestion).data("suggestion", i), c.children().each(function () {
                                t(this).css(s.suggestionChild)
                            }), u.appendChild(c[0])
                        }), d.show().find(".tt-suggestions").html(u)) : this.clearSuggestions(e.name), this.trigger("suggestionsRendered")
                    },
                    clearSuggestions: function (t) {
                        var e = this.$menu.find(t ? ".tt-dataset-" + t : '[class^="tt-dataset-"]'),
                            n = e.find(".tt-suggestions");
                        e.hide(), n.empty(), 0 === this._getSuggestions().length && (this.isEmpty = !0, this._hide())
                    }
                }), e
            }(),
            h = function () {
                function e(t) {
                    var e, i, r;
                    n.bindAll(this), this.$node = o(t.input), this.datasets = t.datasets, this.dir = null, this.eventBus = t.eventBus, e = this.$node.find(".tt-dropdown-menu"), i = this.$node.find(".tt-query"), r = this.$node.find(".tt-hint"), this.dropdownView = new c({
                        menu: e
                    }).on("suggestionSelected", this._handleSelection).on("cursorMoved", this._clearHint).on("cursorMoved", this._setInputValueToSuggestionUnderCursor).on("cursorRemoved", this._setInputValueToQuery).on("cursorRemoved", this._updateHint).on("suggestionsRendered", this._updateHint).on("opened", this._updateHint).on("closed", this._clearHint).on("opened closed", this._propagateEvent), this.inputView = new u({
                        input: i,
                        hint: r
                    }).on("focused", this._openDropdown).on("blured", this._closeDropdown).on("blured", this._setInputValueToQuery).on("enterKeyed tabKeyed", this._handleSelection).on("queryChanged", this._clearHint).on("queryChanged", this._clearSuggestions).on("queryChanged", this._getSuggestions).on("whitespaceChanged", this._updateHint).on("queryChanged whitespaceChanged", this._openDropdown).on("queryChanged whitespaceChanged", this._setLanguageDirection).on("escKeyed", this._closeDropdown).on("escKeyed", this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed", this._managePreventDefault).on("upKeyed downKeyed", this._moveDropdownCursor).on("upKeyed downKeyed", this._openDropdown).on("tabKeyed leftKeyed rightKeyed", this._autocomplete)
                }

                function o(e) {
                    var n = t(s.wrapper),
                        i = t(s.dropdown),
                        o = t(e),
                        r = t(s.hint);
                    n = n.css(a.wrapper), i = i.css(a.dropdown), r.css(a.hint).css({
                        backgroundAttachment: o.css("background-attachment"),
                        backgroundClip: o.css("background-clip"),
                        backgroundColor: o.css("background-color"),
                        backgroundImage: o.css("background-image"),
                        backgroundOrigin: o.css("background-origin"),
                        backgroundPosition: o.css("background-position"),
                        backgroundRepeat: o.css("background-repeat"),
                        backgroundSize: o.css("background-size")
                    }), o.data("ttAttrs", {
                        dir: o.attr("dir"),
                        autocomplete: o.attr("autocomplete"),
                        spellcheck: o.attr("spellcheck"),
                        style: o.attr("style")
                    }), o.addClass("tt-query").attr({
                        autocomplete: "off",
                        spellcheck: !1
                    }).css(a.query);
                    try {
                        !o.attr("dir") && o.attr("dir", "auto")
                    } catch (l) {}
                    return o.wrap(n).parent().prepend(r).append(i)
                }

                function r(t) {
                    var e = t.find(".tt-query");
                    n.each(e.data("ttAttrs"), function (t, i) {
                        n.isUndefined(i) ? e.removeAttr(t) : e.attr(t, i)
                    }), e.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(t), t.remove()
                }
                var s = {
                        wrapper: '<span class="twitter-typeahead"></span>',
                        hint: '<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',
                        dropdown: '<span class="tt-dropdown-menu"></span>'
                    },
                    a = {
                        wrapper: {
                            position: "relative",
                            display: "inline-block"
                        },
                        hint: {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            borderColor: "transparent",
                            boxShadow: "none"
                        },
                        query: {
                            position: "relative",
                            verticalAlign: "top",
                            backgroundColor: "transparent"
                        },
                        dropdown: {
                            position: "absolute",
                            top: "100%",
                            left: "0",
                            zIndex: "100",
                            display: "none"
                        }
                    };
                return n.isMsie() && n.mixin(a.query, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                }), n.isMsie() && n.isMsie() <= 7 && (n.mixin(a.wrapper, {
                    display: "inline",
                    zoom: "1"
                }), n.mixin(a.query, {
                    marginTop: "-1px"
                })), n.mixin(e.prototype, i, {
                    _managePreventDefault: function (t) {
                        var e, n, i = t.data,
                            o = !1;
                        switch (t.type) {
                        case "tabKeyed":
                            e = this.inputView.getHintValue(), n = this.inputView.getInputValue(), o = e && e !== n;
                            break;
                        case "upKeyed":
                        case "downKeyed":
                            o = !i.shiftKey && !i.ctrlKey && !i.metaKey
                        }
                        o && i.preventDefault()
                    },
                    _setLanguageDirection: function () {
                        var t = this.inputView.getLanguageDirection();
                        t !== this.dir && (this.dir = t, this.$node.css("direction", t), this.dropdownView.setLanguageDirection(t))
                    },
                    _updateHint: function () {
                        var t, e, i, o, r, s = this.dropdownView.getFirstSuggestion(),
                            a = s ? s.value : null,
                            l = this.dropdownView.isVisible(),
                            u = this.inputView.isOverflow();
                        a && l && !u && (t = this.inputView.getInputValue(), e = t.replace(/\s{2,}/g, " ").replace(/^\s+/g, ""), i = n.escapeRegExChars(e), o = new RegExp("^(?:" + i + ")(.*$)", "i"), r = o.exec(a), this.inputView.setHintValue(t + (r ? r[1] : "")))
                    },
                    _clearHint: function () {
                        this.inputView.setHintValue("")
                    },
                    _clearSuggestions: function () {
                        this.dropdownView.clearSuggestions()
                    },
                    _setInputValueToQuery: function () {
                        this.inputView.setInputValue(this.inputView.getQuery())
                    },
                    _setInputValueToSuggestionUnderCursor: function (t) {
                        var e = t.data;
                        this.inputView.setInputValue(e.value, !0)
                    },
                    _openDropdown: function () {
                        this.dropdownView.open()
                    },
                    _closeDropdown: function (t) {
                        this.dropdownView["blured" === t.type ? "closeUnlessMouseIsOverDropdown" : "close"]()
                    },
                    _moveDropdownCursor: function (t) {
                        var e = t.data;
                        e.shiftKey || e.ctrlKey || e.metaKey || this.dropdownView["upKeyed" === t.type ? "moveCursorUp" : "moveCursorDown"]()
                    },
                    _handleSelection: function (t) {
                        var e = "suggestionSelected" === t.type,
                            i = e ? t.data : this.dropdownView.getSuggestionUnderCursor();
                        i && (this.inputView.setInputValue(i.value), e ? this.inputView.focus() : t.data.preventDefault(), e && n.isMsie() ? n.defer(this.dropdownView.close) : this.dropdownView.close(), this.eventBus.trigger("selected", i.datum, i.dataset))
                    },
                    _getSuggestions: function () {
                        var t = this,
                            e = this.inputView.getQuery();
                        n.isBlankString(e) || n.each(this.datasets, function (n, i) {
                            i.getSuggestions(e, function (n) {
                                e === t.inputView.getQuery() && t.dropdownView.renderSuggestions(i, n)
                            })
                        })
                    },
                    _autocomplete: function (t) {
                        var e, n, i, o, r;
                        ("rightKeyed" !== t.type && "leftKeyed" !== t.type || (e = this.inputView.isCursorAtEnd(), n = "ltr" === this.inputView.getLanguageDirection() ? "leftKeyed" === t.type : "rightKeyed" === t.type, e && !n)) && (i = this.inputView.getQuery(), o = this.inputView.getHintValue(), "" !== o && i !== o && (r = this.dropdownView.getFirstSuggestion(), this.inputView.setInputValue(r.value), this.eventBus.trigger("autocompleted", r.datum, r.dataset)))
                    },
                    _propagateEvent: function (t) {
                        this.eventBus.trigger(t.type)
                    },
                    destroy: function () {
                        this.inputView.destroy(), this.dropdownView.destroy(), r(this.$node), this.$node = null
                    },
                    setQuery: function (t) {
                        this.inputView.setQuery(t), this.inputView.setInputValue(t), this._clearHint(), this._clearSuggestions(), this._getSuggestions()
                    }
                }), e
            }();
        ! function () {
            var e, i = {},
                r = "ttView";
            e = {
                initialize: function (e) {
                    function s() {
                        var e, i = t(this),
                            s = new o({
                                el: i
                            });
                        e = n.map(a, function (t) {
                            return t.initialize()
                        }), i.data(r, new h({
                            input: i,
                            eventBus: s = new o({
                                el: i
                            }),
                            datasets: a
                        })), t.when.apply(t, e).always(function () {
                            n.defer(function () {
                                s.trigger("initialized")
                            })
                        })
                    }
                    var a;
                    return e = n.isArray(e) ? e : [e], 0 === e.length && t.error("no datasets provided"), a = n.map(e, function (t) {
                        var e = i[t.name] ? i[t.name] : new l(t);
                        return t.name && (i[t.name] = e), e
                    }), this.each(s)
                },
                destroy: function () {
                    function e() {
                        var e = t(this),
                            n = e.data(r);
                        n && (n.destroy(), e.removeData(r))
                    }
                    return this.each(e)
                },
                setQuery: function (e) {
                    function n() {
                        var n = t(this).data(r);
                        n && n.setQuery(e)
                    }
                    return this.each(n)
                }
            }, jQuery.fn.typeahead = function (t) {
                return e[t] ? e[t].apply(this, [].slice.call(arguments, 1)) : e.initialize.apply(this, arguments)
            }
        }()
    }(window.jQuery),
    function (t) {
        var e = {
            init: function (n) {
                return this.each(function () {
                    e.destroy.call(this), this.opt = t.extend(!0, {}, t.fn.raty.defaults, n);
                    var i = t(this),
                        o = ["number", "readOnly", "score", "scoreName"];
                    e._callback.call(this, o), this.opt.precision && e._adjustPrecision.call(this), this.opt.number = e._between(this.opt.number, 0, this.opt.numberMax), this.opt.path = this.opt.path || "", this.opt.path && "/" !== this.opt.path.slice(this.opt.path.length - 1, this.opt.path.length) && (this.opt.path += "/"), this.stars = e._createStars.call(this), this.score = e._createScore.call(this), e._apply.call(this, this.opt.score);
                    var r = this.opt.space ? 4 : 0,
                        s = this.opt.width || this.opt.number * this.opt.size + this.opt.number * r;
                    this.opt.cancel && (this.cancel = e._createCancel.call(this), s += this.opt.size + r), this.opt.readOnly ? e._lock.call(this) : (i.css("cursor", "pointer"), e._binds.call(this)), this.opt.width !== !1 && i.css("width", s), e._target.call(this, this.opt.score), i.data({
                        settings: this.opt,
                        raty: !0
                    })
                })
            },
            _adjustPrecision: function () {
                this.opt.targetType = "score", this.opt.half = !0
            },
            _apply: function (t) {
                t && t > 0 && (t = e._between(t, 0, this.opt.number), this.score.val(t)), e._fill.call(this, t), t && e._roundStars.call(this, t)
            },
            _between: function (t, e, n) {
                return Math.min(Math.max(parseFloat(t), e), n)
            },
            _binds: function () {
                this.cancel && e._bindCancel.call(this), e._bindClick.call(this), e._bindOut.call(this), e._bindOver.call(this)
            },
            _bindCancel: function () {
                e._bindClickCancel.call(this), e._bindOutCancel.call(this), e._bindOverCancel.call(this)
            },
            _bindClick: function () {
                var e = this,
                    n = t(e);
                e.stars.on("click.raty", function (t) {
                    e.score.val(e.opt.half || e.opt.precision ? n.data("score") : this.alt), e.opt.click && e.opt.click.call(e, parseFloat(e.score.val()), t)
                })
            },
            _bindClickCancel: function () {
                var t = this;
                t.cancel.on("click.raty", function (e) {
                    t.score.removeAttr("value"), t.opt.click && t.opt.click.call(t, null, e)
                })
            },
            _bindOut: function () {
                var n = this;
                t(this).on("mouseleave.raty", function (t) {
                    var i = parseFloat(n.score.val()) || void 0;
                    e._apply.call(n, i), e._target.call(n, i, t), n.opt.mouseout && n.opt.mouseout.call(n, i, t)
                })
            },
            _bindOutCancel: function () {
                var e = this;
                e.cancel.on("mouseleave.raty", function (n) {
                    t(this).attr("src", e.opt.path + e.opt.cancelOff), e.opt.mouseout && e.opt.mouseout.call(e, e.score.val() || null, n)
                })
            },
            _bindOverCancel: function () {
                var n = this;
                n.cancel.on("mouseover.raty", function (i) {
                    t(this).attr("src", n.opt.path + n.opt.cancelOn), n.stars.attr("src", n.opt.path + n.opt.starOff), e._target.call(n, null, i), n.opt.mouseover && n.opt.mouseover.call(n, null)
                })
            },
            _bindOver: function () {
                var n = this,
                    i = t(n),
                    o = n.opt.half ? "mousemove.raty" : "mouseover.raty";
                n.stars.on(o, function (o) {
                    var r = parseInt(this.alt, 10);
                    if (n.opt.half) {
                        var s = parseFloat((o.pageX - t(this).offset().left) / n.opt.size),
                            a = s > .5 ? 1 : .5;
                        r = r - 1 + a, e._fill.call(n, r), n.opt.precision && (r = r - a + s), e._roundStars.call(n, r), i.data("score", r)
                    } else e._fill.call(n, r);
                    e._target.call(n, r, o), n.opt.mouseover && n.opt.mouseover.call(n, r, o)
                })
            },
            _callback: function (t) {
                for (i in t) "function" == typeof this.opt[t[i]] && (this.opt[t[i]] = this.opt[t[i]].call(this))
            },
            _createCancel: function () {
                var e = t(this),
                    n = this.opt.path + this.opt.cancelOff,
                    i = t("<img />", {
                        src: n,
                        alt: "x",
                        title: this.opt.cancelHint,
                        "class": "raty-cancel"
                    });
                return "left" == this.opt.cancelPlace ? e.prepend("&#160;").prepend(i) : e.append("&#160;").append(i), i
            },
            _createScore: function () {
                return t("<input />", {
                    type: "hidden",
                    name: this.opt.scoreName
                }).appendTo(this)
            },
            _createStars: function () {
                for (var n = t(this), i = 1; i <= this.opt.number; i++) {
                    var o = e._getHint.call(this, i),
                        r = this.opt.score && this.opt.score >= i ? "starOn" : "starOff";
                    r = this.opt.path + this.opt[r], t("<img />", {
                        src: r,
                        alt: i,
                        title: o
                    }).appendTo(this), this.opt.space && n.append(i < this.opt.number ? "&#160;" : "")
                }
                return n.children("img")
            },
            _error: function (e) {
                t(this).html(e), t.error(e)
            },
            _fill: function (t) {
                for (var e = this, n = 0, i = 1; i <= e.stars.length; i++) {
                    var o = e.stars.eq(i - 1),
                        r = e.opt.single ? i == t : t >= i;
                    if (e.opt.iconRange && e.opt.iconRange.length > n) {
                        var s = e.opt.iconRange[n],
                            a = s.on || e.opt.starOn,
                            l = s.off || e.opt.starOff,
                            u = r ? a : l;
                        i <= s.range && o.attr("src", e.opt.path + u), i == s.range && n++
                    } else {
                        var u = r ? "starOn" : "starOff";
                        o.attr("src", this.opt.path + this.opt[u])
                    }
                }
            },
            _getHint: function (t) {
                var e = this.opt.hints[t - 1];
                return "" === e ? "" : e || t
            },
            _lock: function () {
                var n = parseInt(this.score.val(), 10),
                    i = n ? e._getHint.call(this, n) : this.opt.noRatedMsg;
                t(this).data("readonly", !0).css("cursor", "").attr("title", i), this.score.attr("readonly", "readonly"), this.stars.attr("title", i), this.cancel && this.cancel.hide()
            },
            _roundStars: function (t) {
                var e = (t - Math.floor(t)).toFixed(2);
                if (e > this.opt.round.down) {
                    var n = "starOn";
                    this.opt.halfShow && e < this.opt.round.up ? n = "starHalf" : e < this.opt.round.full && (n = "starOff"), this.stars.eq(Math.ceil(t) - 1).attr("src", this.opt.path + this.opt[n])
                }
            },
            _target: function (n, i) {
                if (this.opt.target) {
                    var o = t(this.opt.target);
                    0 === o.length && e._error.call(this, "Target selector invalid or missing!"), this.opt.targetFormat.indexOf("{score}") < 0 && e._error.call(this, 'Template "{score}" missing!');
                    var r = i && "mouseover" == i.type;
                    void 0 === n ? n = this.opt.targetText : null === n ? n = r ? this.opt.cancelHint : this.opt.targetText : ("hint" == this.opt.targetType ? n = e._getHint.call(this, Math.ceil(n)) : this.opt.precision && (n = parseFloat(n).toFixed(1)), r || this.opt.targetKeep || (n = this.opt.targetText)), n && (n = this.opt.targetFormat.toString().replace("{score}", n)), o.is(":input") ? o.val(n) : o.html(n)
                }
            },
            _unlock: function () {
                t(this).data("readonly", !1).css("cursor", "pointer").removeAttr("title"), this.score.removeAttr("readonly", "readonly");
                for (var n = 0; n < this.opt.number; n++) this.stars.eq(n).attr("title", e._getHint.call(this, n + 1));
                this.cancel && this.cancel.css("display", "")
            },
            cancel: function (n) {
                return this.each(function () {
                    t(this).data("readonly") !== !0 && (e[n ? "click" : "score"].call(this, null), this.score.removeAttr("value"))
                })
            },
            click: function (n) {
                return t(this).each(function () {
                    t(this).data("readonly") !== !0 && (e._apply.call(this, n), this.opt.click || e._error.call(this, 'You must add the "click: function(score, evt) { }" callback.'), this.opt.click.call(this, n, {
                        type: "click"
                    }), e._target.call(this, n))
                })
            },
            destroy: function () {
                return t(this).each(function () {
                    var e = t(this),
                        n = e.data("raw");
                    n ? e.off(".raty").empty().css({
                        cursor: n.style.cursor,
                        width: n.style.width
                    }).removeData("readonly") : e.data("raw", e.clone()[0])
                })
            },
            getScore: function () {
                var e, n = [];
                return t(this).each(function () {
                    e = this.score.val(), n.push(e ? parseFloat(e) : void 0)
                }), n.length > 1 ? n : n[0]
            },
            readOnly: function (n) {
                return this.each(function () {
                    var i = t(this);
                    i.data("readonly") !== n && (n ? (i.off(".raty").children("img").off(".raty"), e._lock.call(this)) : (e._binds.call(this), e._unlock.call(this)), i.data("readonly", n))
                })
            },
            reload: function () {
                return e.set.call(this, {})
            },
            score: function () {
                return arguments.length ? e.setScore.apply(this, arguments) : e.getScore.call(this)
            },
            set: function (e) {
                return this.each(function () {
                    var n = t(this),
                        i = n.data("settings"),
                        o = t.extend({}, i, e);
                    n.raty(o)
                })
            },
            setScore: function (n) {
                return t(this).each(function () {
                    t(this).data("readonly") !== !0 && (e._apply.call(this, n), e._target.call(this, n))
                })
            }
        };
        t.fn.raty = function (n) {
            return e[n] ? e[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist!") : e.init.apply(this, arguments)
        }, t.fn.raty.defaults = {
            cancel: !1,
            cancelHint: "Cancel this rating!",
            cancelOff: "cancel-off.png",
            cancelOn: "cancel-on.png",
            cancelPlace: "left",
            click: void 0,
            half: !1,
            halfShow: !0,
            hints: ["bad", "poor", "regular", "good", "gorgeous"],
            iconRange: void 0,
            mouseout: void 0,
            mouseover: void 0,
            noRatedMsg: "Not rated yet!",
            number: 5,
            numberMax: 20,
            path: "",
            precision: !1,
            readOnly: !1,
            round: {
                down: .25,
                full: .6,
                up: .76
            },
            score: void 0,
            scoreName: "score",
            single: !1,
            size: 16,
            space: !0,
            starHalf: "star-half.png",
            starOff: "star-off.png",
            starOn: "star-on.png",
            target: void 0,
            targetFormat: "{score}",
            targetKeep: !1,
            targetText: "",
            targetType: "hint",
            width: void 0
        }
    }(jQuery),
    function (t, n, i, o) {
        function r(e, n) {
            this.element = e, this.options = t.extend(!0, {}, l, n), this.options.share = n.share, this._defaults = l, this._name = a, this.init()
        }
        var a = "sharrre",
            l = {
                className: "sharrre",
                share: {
                    googlePlus: !1,
                    facebook: !1,
                    twitter: !1,
                    digg: !1,
                    delicious: !1,
                    stumbleupon: !1,
                    linkedin: !1,
                    pinterest: !1
                },
                shareTotal: 0,
                template: "",
                title: "",
                url: i.location.href,
                text: i.title,
                urlCurl: "sharrre.php",
                count: {},
                total: 0,
                shorterTotal: !0,
                enableHover: !0,
                enableCounter: !0,
                enableTracking: !1,
                hover: function () {},
                hide: function () {},
                click: function () {},
                render: function () {},
                buttons: {
                    googlePlus: {
                        url: "",
                        urlCount: !1,
                        size: "medium",
                        lang: "en-US",
                        annotation: ""
                    },
                    facebook: {
                        url: "",
                        urlCount: !1,
                        action: "like",
                        layout: "button_count",
                        width: "",
                        send: "false",
                        faces: "false",
                        colorscheme: "",
                        font: "",
                        lang: "en_US"
                    },
                    twitter: {
                        url: "",
                        urlCount: !1,
                        count: "horizontal",
                        hashtags: "",
                        via: "",
                        related: "",
                        lang: "en"
                    },
                    digg: {
                        url: "",
                        urlCount: !1,
                        type: "DiggCompact"
                    },
                    delicious: {
                        url: "",
                        urlCount: !1,
                        size: "medium"
                    },
                    stumbleupon: {
                        url: "",
                        urlCount: !1,
                        layout: "1"
                    },
                    linkedin: {
                        url: "",
                        urlCount: !1,
                        counter: ""
                    },
                    pinterest: {
                        url: "",
                        media: "",
                        description: "",
                        layout: "horizontal"
                    }
                }
            },
            u = {
                googlePlus: "",
                facebook: "https://graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",
                twitter: "http://cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
                digg: "http://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",
                delicious: "http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",
                stumbleupon: "",
                linkedin: "http://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
                pinterest: "http://api.pinterest.com/v1/urls/count.json?url={url}&callback=?"
            },
            c = {
                googlePlus: function (e) {
                    var o = e.options.buttons.googlePlus;
                    t(e.element).find(".buttons").append('<div class="button googleplus"><div class="g-plusone" data-size="' + o.size + '" data-href="' + ("" !== o.url ? o.url : e.options.url) + '" data-annotation="' + o.annotation + '"></div></div>'), n.___gcfg = {
                        lang: e.options.buttons.googlePlus.lang
                    };
                    var r = 0;
                    "undefined" == typeof gapi && 0 == r ? (r = 1, function () {
                        var t = i.createElement("script");
                        t.type = "text/javascript", t.async = !0, t.src = "//apis.google.com/js/plusone.js";
                        var e = i.getElementsByTagName("script")[0];
                        e.parentNode.insertBefore(t, e)
                    }()) : gapi.plusone.go()
                },
                facebook: function (e) {
                    var n = e.options.buttons.facebook;
                    t(e.element).find(".buttons").append('<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="' + ("" !== n.url ? n.url : e.options.url) + '" data-send="' + n.send + '" data-layout="' + n.layout + '" data-width="' + n.width + '" data-show-faces="' + n.faces + '" data-action="' + n.action + '" data-colorscheme="' + n.colorscheme + '" data-font="' + n.font + '" data-via="' + n.via + '"></div></div>');
                    var o = 0;
                    "undefined" == typeof FB && 0 == o ? (o = 1, function (t, e, i) {
                        var o, r = t.getElementsByTagName(e)[0];
                        t.getElementById(i) || (o = t.createElement(e), o.id = i, o.src = "//connect.facebook.net/" + n.lang + "/all.js#xfbml=1", r.parentNode.insertBefore(o, r))
                    }(i, "script", "facebook-jssdk")) : FB.XFBML.parse()
                },
                twitter: function (e) {
                    var n = e.options.buttons.twitter;
                    t(e.element).find(".buttons").append('<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="' + ("" !== n.url ? n.url : e.options.url) + '" data-count="' + n.count + '" data-text="' + e.options.text + '" data-via="' + n.via + '" data-hashtags="' + n.hashtags + '" data-related="' + n.related + '" data-lang="' + n.lang + '">Tweet</a></div>');
                    var o = 0;
                    "undefined" == typeof twttr && 0 == o ? (o = 1, function () {
                        var t = i.createElement("script");
                        t.type = "text/javascript", t.async = !0, t.src = "//platform.twitter.com/widgets.js";
                        var e = i.getElementsByTagName("script")[0];
                        e.parentNode.insertBefore(t, e)
                    }()) : t.ajax({
                        url: "//platform.twitter.com/widgets.js",
                        dataType: "script",
                        cache: !0
                    })
                },
                digg: function (e) {
                    var n = e.options.buttons.digg;
                    t(e.element).find(".buttons").append('<div class="button digg"><a class="DiggThisButton ' + n.type + '" rel="nofollow external" href="http://digg.com/submit?url=' + encodeURIComponent("" !== n.url ? n.url : e.options.url) + '"></a></div>');
                    var o = 0;
                    "undefined" == typeof __DBW && 0 == o && (o = 1, function () {
                        var t = i.createElement("SCRIPT"),
                            e = i.getElementsByTagName("SCRIPT")[0];
                        t.type = "text/javascript", t.async = !0, t.src = "//widgets.digg.com/buttons.js", e.parentNode.insertBefore(t, e)
                    }())
                },
                delicious: function (e) {
                    if ("tall" == e.options.buttons.delicious.size) var n = "width:50px;",
                        i = "height:35px;width:50px;font-size:15px;line-height:35px;",
                        o = "height:18px;line-height:18px;margin-top:3px;";
                    else var n = "width:93px;",
                        i = "float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",
                        o = "float:left;height:20px;line-height:20px;";
                    var r = e.shorterTotal(e.options.count.delicious);
                    "undefined" == typeof r && (r = 0), t(e.element).find(".buttons").append('<div class="button delicious"><div style="' + n + 'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="' + i + 'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">' + r + '</div><div style="' + o + 'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>'), t(e.element).find(".delicious").on("click", function () {
                        e.openPopup("delicious")
                    })
                },
                stumbleupon: function (e) {
                    var o = e.options.buttons.stumbleupon;
                    t(e.element).find(".buttons").append('<div class="button stumbleupon"><su:badge layout="' + o.layout + '" location="' + ("" !== o.url ? o.url : e.options.url) + '"></su:badge></div>');
                    var r = 0;
                    "undefined" == typeof STMBLPN && 0 == r ? (r = 1, function () {
                        var t = i.createElement("script");
                        t.type = "text/javascript", t.async = !0, t.src = "//platform.stumbleupon.com/1/widgets.js";
                        var e = i.getElementsByTagName("script")[0];
                        e.parentNode.insertBefore(t, e)
                    }(), s = n.setTimeout(function () {
                        "undefined" != typeof STMBLPN && (STMBLPN.processWidgets(), clearInterval(s))
                    }, 500)) : STMBLPN.processWidgets()
                },
                linkedin: function (e) {
                    var o = e.options.buttons.linkedin;
                    t(e.element).find(".buttons").append('<div class="button linkedin"><script type="in/share" data-url="' + ("" !== o.url ? o.url : e.options.url) + '" data-counter="' + o.counter + '"></script></div>');
                    var r = 0;
                    "undefined" == typeof n.IN && 0 == r ? (r = 1, function () {
                        var t = i.createElement("script");
                        t.type = "text/javascript", t.async = !0, t.src = "//platform.linkedin.com/in.js";
                        var e = i.getElementsByTagName("script")[0];
                        e.parentNode.insertBefore(t, e)
                    }()) : n.IN.init()
                },
                pinterest: function (e) {
                    var n = e.options.buttons.pinterest;
                    t(e.element).find(".buttons").append('<div class="button pinterest"><a href="http://pinterest.com/pin/create/button/?url=' + ("" !== n.url ? n.url : e.options.url) + "&media=" + n.media + "&description=" + n.description + '" class="pin-it-button" count-layout="' + n.layout + '">Pin It</a></div>'),
                        function () {
                            var t = i.createElement("script");
                            t.type = "text/javascript", t.async = !0, t.src = "//assets.pinterest.com/js/pinit.js";
                            var e = i.getElementsByTagName("script")[0];
                            e.parentNode.insertBefore(t, e)
                        }()
                }
            },
            h = {
                googlePlus: function () {},
                facebook: function () {
                    fb = n.setInterval(function () {
                        "undefined" != typeof FB && (FB.Event.subscribe("edge.create", function (t) {
                            _gaq.push(["_trackSocial", "facebook", "like", t])
                        }), FB.Event.subscribe("edge.remove", function (t) {
                            _gaq.push(["_trackSocial", "facebook", "unlike", t])
                        }), FB.Event.subscribe("message.send", function (t) {
                            _gaq.push(["_trackSocial", "facebook", "send", t])
                        }), clearInterval(fb))
                    }, 1e3)
                },
                twitter: function () {
                    tw = n.setInterval(function () {
                        "undefined" != typeof twttr && (twttr.events.bind("tweet", function (t) {
                            t && _gaq.push(["_trackSocial", "twitter", "tweet"])
                        }), clearInterval(tw))
                    }, 1e3)
                },
                digg: function () {},
                delicious: function () {},
                stumbleupon: function () {},
                linkedin: function () {},
                pinterest: function () {}
            },
            p = {
                googlePlus: function (t) {
                    n.open("https://plus.google.com/share?hl=" + t.buttons.googlePlus.lang + "&url=" + encodeURIComponent("" !== t.buttons.googlePlus.url ? t.buttons.googlePlus.url : t.url), "", "toolbar=0, status=0, width=900, height=500")
                },
                facebook: function (t) {
                    n.open("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("" !== t.buttons.facebook.url ? t.buttons.facebook.url : t.url) + "&t=" + t.text, "", "toolbar=0, status=0, width=900, height=500")
                },
                twitter: function (t) {
                    n.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(t.text) + "&url=" + encodeURIComponent("" !== t.buttons.twitter.url ? t.buttons.twitter.url : t.url) + ("" !== t.buttons.twitter.via ? "&via=" + t.buttons.twitter.via : ""), "", "toolbar=0, status=0, width=650, height=360")
                },
                digg: function (t) {
                    n.open("http://digg.com/tools/diggthis/submit?url=" + encodeURIComponent("" !== t.buttons.digg.url ? t.buttons.digg.url : t.url) + "&title=" + t.text + "&related=true&style=true", "", "toolbar=0, status=0, width=650, height=360")
                },
                delicious: function (t) {
                    n.open("http://www.delicious.com/save?v=5&noui&jump=close&url=" + encodeURIComponent("" !== t.buttons.delicious.url ? t.buttons.delicious.url : t.url) + "&title=" + t.text, "delicious", "toolbar=no,width=550,height=550")
                },
                stumbleupon: function (t) {
                    n.open("http://www.stumbleupon.com/badge/?url=" + encodeURIComponent("" !== t.buttons.delicious.url ? t.buttons.delicious.url : t.url), "stumbleupon", "toolbar=no,width=550,height=550")
                },
                linkedin: function (t) {
                    n.open("https://www.linkedin.com/cws/share?url=" + encodeURIComponent("" !== t.buttons.delicious.url ? t.buttons.delicious.url : t.url) + "&token=&isFramed=true", "linkedin", "toolbar=no,width=550,height=550")
                },
                pinterest: function (t) {
                    n.open("http://pinterest.com/pin/create/button/?url=" + encodeURIComponent("" !== t.buttons.pinterest.url ? t.buttons.pinterest.url : t.url) + "&media=" + encodeURIComponent(t.buttons.pinterest.media) + "&description=" + t.buttons.pinterest.description, "pinterest", "toolbar=no,width=700,height=300")
                }
            };
        r.prototype.init = function () {
            var e = this;
            "" !== this.options.urlCurl && (u.googlePlus = this.options.urlCurl + "?url={url}&type=googlePlus", u.stumbleupon = this.options.urlCurl + "?url={url}&type=stumbleupon"), t(this.element).addClass(this.options.className), "undefined" != typeof t(this.element).data("title") && (this.options.title = t(this.element).attr("data-title")), "undefined" != typeof t(this.element).data("url") && (this.options.url = t(this.element).data("url")), "undefined" != typeof t(this.element).data("text") && (this.options.text = t(this.element).data("text")), t.each(this.options.share, function (t, n) {
                n === !0 && e.options.shareTotal++
            }), e.options.enableCounter === !0 ? t.each(this.options.share, function (t, n) {
                if (n === !0) try {
                    e.getSocialJson(t)
                } catch (i) {}
            }) : "" !== e.options.template ? this.options.render(this, this.options) : this.loadButtons(), t(this.element).hover(function () {
                0 === t(this).find(".buttons").length && e.options.enableHover === !0 && e.loadButtons(), e.options.hover(e, e.options)
            }, function () {
                e.options.hide(e, e.options)
            }), t(this.element).click(function () {
                return e.options.click(e, e.options), !1
            })
        }, r.prototype.loadButtons = function () {
            var e = this;
            t(this.element).append('<div class="buttons"></div>'), t.each(e.options.share, function (t, n) {
                1 == n && (c[t](e), e.options.enableTracking === !0 && h[t]())
            })
        }, r.prototype.getSocialJson = function (e) {
            var n = this,
                i = 0,
                o = u[e].replace("{url}", encodeURIComponent(this.options.url));
            this.options.buttons[e].urlCount === !0 && "" !== this.options.buttons[e].url && (o = u[e].replace("{url}", this.options.buttons[e].url)), "" != o && "" !== n.options.urlCurl ? t.getJSON(o, function (t) {
                if ("undefined" != typeof t.count) {
                    var o = t.count + "";
                    o = o.replace("Â ", ""), i += parseInt(o, 10)
                } else t.data && t.data.length > 0 && "undefined" != typeof t.data[0].total_count ? i += parseInt(t.data[0].total_count, 10) : "undefined" != typeof t[0] ? i += parseInt(t[0].total_posts, 10) : "undefined" != typeof t[0];
                n.options.count[e] = i, n.options.total += i, n.renderer(), n.rendererPerso()
            }).error(function () {
                n.options.count[e] = 0, n.rendererPerso()
            }) : (n.renderer(), n.options.count[e] = 0, n.rendererPerso())
        }, r.prototype.rendererPerso = function () {
            var t = 0;
            for (e in this.options.count) t++;
            t === this.options.shareTotal && this.options.render(this, this.options)
        }, r.prototype.renderer = function () {
            var e = this.options.total,
                n = this.options.template;
            this.options.shorterTotal === !0 && (e = this.shorterTotal(e)), "" !== n ? (n = n.replace("{total}", e), t(this.element).html(n)) : t(this.element).html('<div class="box"><a class="count" href="#">' + e + "</a>" + ("" !== this.options.title ? '<a class="share" href="#">' + this.options.title + "</a>" : "") + "</div>")
        }, r.prototype.shorterTotal = function (t) {
            return t >= 1e6 ? t = (t / 1e6).toFixed(2) + "M" : t >= 1e3 && (t = (t / 1e3).toFixed(1) + "k"), t
        }, r.prototype.openPopup = function (t) {
            if (p[t](this.options), this.options.enableTracking === !0) {
                var e = {
                    googlePlus: {
                        site: "Google",
                        action: "+1"
                    },
                    facebook: {
                        site: "facebook",
                        action: "like"
                    },
                    twitter: {
                        site: "twitter",
                        action: "tweet"
                    },
                    digg: {
                        site: "digg",
                        action: "add"
                    },
                    delicious: {
                        site: "delicious",
                        action: "add"
                    },
                    stumbleupon: {
                        site: "stumbleupon",
                        action: "add"
                    },
                    linkedin: {
                        site: "linkedin",
                        action: "share"
                    },
                    pinterest: {
                        site: "pinterest",
                        action: "pin"
                    }
                };
                _gaq.push(["_trackSocial", e[t].site, e[t].action])
            }
        }, r.prototype.simulateClick = function () {
            var e = t(this.element).html();
            t(this.element).html(e.replace(this.options.total, this.options.total + 1))
        }, r.prototype.update = function (t, e) {
            "" !== t && (this.options.url = t), "" !== e && (this.options.text = e)
        }, t.fn[a] = function (e) {
            var n = arguments;
            return e === o || "object" == typeof e ? this.each(function () {
                t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new r(this, e))
            }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function () {
                var i = t.data(this, "plugin_" + a);
                i instanceof r && "function" == typeof i[e] && i[e].apply(i, Array.prototype.slice.call(n, 1))
            }) : void 0
        }
    }(jQuery, window, document), "function" != typeof Object.create && (Object.create = function (t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function (t, e, n, i) {
        var o = {
            makeResponsive: function () {
                var n = this;
                t(n.sliderId + "-wrapper").addClass("ls-responsive").css({
                    "max-width": t(n.sliderId + " .panel:first-child").width(),
                    width: "100%"
                }), t(n.sliderId + " .panel-container").css("width", 100 * n.panelCountTotal + n.pSign), t(n.sliderId + " .panel").css("width", 100 / n.panelCountTotal + n.pSign), n.options.hideArrowsWhenMobile && (n.leftWrapperPadding = t(n.sliderId + "-wrapper").css("padding-left"), n.rightWrapperPadding = n.$sliderWrap.css("padding-right")), n.responsiveEvents(), t(e).bind("resize", function () {
                    n.responsiveEvents(), clearTimeout(n.resizingTimeout), n.resizingTimeout = setTimeout(function () {
                        var t = n.options.autoHeight ? n.getHeight() : n.getHeighestPanel(n.nextPanel);
                        n.adjustHeight(!1, t)
                    }, 500)
                })
            },
            responsiveEvents: function () {
                var e = this,
                    n = e.options.hideArrowsThreshold || e.options.mobileUIThreshold || e.totalNavWidth + 10;
                e.$sliderId.outerWidth() < n ? (e.options.mobileNavigation && (e.navigation.css("display", "none"), e.dropdown.css("display", "block"), e.dropdownSelect.css("display", "block"), t(e.sliderId + "-nav-select").val(e.options.mobileNavDefaultText)), e.options.dynamicArrows && (e.options.hideArrowsWhenMobile ? (e.leftArrow.remove().length = 0, e.rightArrow.remove().length = 0) : e.options.dynamicArrowsGraphical || (e.leftArrow.css("margin-" + e.options.dynamicTabsPosition, "0"), e.rightArrow.css("margin-" + e.options.dynamicTabsPosition, "0")))) : (e.options.mobileNavigation && (e.navigation.css("display", "block"), e.dropdown.css("display", "none"), e.dropdownSelect.css("display", "none")), e.options.dynamicArrows && (!e.options.hideArrowsWhenMobile || e.leftArrow.length && e.rightArrow.length ? e.options.dynamicArrowsGraphical || (e.leftArrow.css("margin-" + e.options.dynamicTabsPosition, e.navigation.css("height")), e.rightArrow.css("margin-" + e.options.dynamicTabsPosition, e.navigation.css("height"))) : (e.addArrows(), e.registerArrows()))), t(e.sliderId + "-wrapper").css("width", "100%"), e.options.mobileNavigation && e.dropdownSelect.change(function () {
                    e.setNextPanel(parseInt(t(this).val().split("tab")[1], 10) - 1)
                })
            },
            addNavigation: function (e) {
                var n = this,
                    i = "<" + n.options.navElementTag + ' class="ls-nav"><ul id="' + n.$elem.attr("id") + '-nav-ul"></ul></' + n.options.navElementTag + ">";
                if ("bottom" === n.options.dynamicTabsPosition ? n.$sliderId.after(i) : n.$sliderId.before(i), n.options.mobileNavigation) {
                    var o = n.options.mobileNavDefaultText ? '<option disabled="disabled" selected="selected">' + n.options.mobileNavDefaultText + "</option>" : null,
                        r = '<div class="ls-select-box"><select id="' + n.$elem.attr("id") + '-nav-select" name="navigation">' + o + "</select></div>";
                    n.navigation = t(n.sliderId + "-nav-ul").before(r), n.dropdown = t(n.sliderId + "-wrapper .ls-select-box"), n.dropdownSelect = t(n.sliderId + "-nav-select"), t.each(n.$elem.find(n.options.panelTitleSelector), function (e) {
                        t(n.$sliderWrap).find(".ls-select-box select").append('<option value="tab' + (e + 1) + '">' + t(this).text() + "</option>")
                    })
                }
                t.each(n.$elem.find(n.options.panelTitleSelector), function (i) {
                    t(n.$sliderWrap).find(".ls-nav ul").append('<li class="tab' + (i + 1) + '"><a class="' + (e || "") + '" href="#' + (i + 1) + '">' + n.getNavInsides(this) + "</a></li>"), n.options.includeTitle || t(this).remove()
                })
            },
            getNavInsides: function (e) {
                return this.options.dynamicTabsHtml ? t(e).html() : t(e).text()
            },
            alignNavigation: function () {
                var e = this,
                    n = e.options.dynamicArrowsGraphical ? "-arrow" : "";
                "center" !== e.options.dynamicTabsAlign && (e.options.responsive || t(e.$sliderWrap).find(".ls-nav ul").css("margin-" + e.options.dynamicTabsAlign, t(e.$sliderWrap).find(".ls-nav-" + e.options.dynamicTabsAlign + n).outerWidth(!0) + parseInt(e.$sliderId.css("margin-" + e.options.dynamicTabsAlign), 10)), t(e.$sliderWrap).find(".ls-nav ul").css("float", e.options.dynamicTabsAlign)), e.totalNavWidth = t(e.$sliderWrap).find(".ls-nav ul").outerWidth(!0), "center" === e.options.dynamicTabsAlign && (e.totalNavWidth = 0, t(e.$sliderWrap).find(".ls-nav li a").each(function () {
                    e.totalNavWidth += t(this).outerWidth(!0)
                }), t(e.$sliderWrap).find(".ls-nav ul").css("width", e.totalNavWidth + 1))
            },
            registerNav: function () {
                var e = this;
                e.$sliderWrap.find("[class^=ls-nav] li").on("click", function () {
                    return e.setNextPanel(parseInt(t(this).attr("class").split("tab")[1], 10) - 1), !1
                })
            },
            addArrows: function (e) {
                var n = this,
                    o = n.options.dynamicArrowsGraphical ? "-arrow " : " ";
                n.$sliderWrap.addClass("arrows"), n.options.dynamicArrowsGraphical && (n.options.dynamicArrowLeftText = "", n.options.dynamicArrowRightText = ""), n.$sliderId.before('<div class="ls-nav-left' + o + (e || "") + '"><a href="#">' + n.options.dynamicArrowLeftText + "</a></div>"), n.$sliderId.after('<div class="ls-nav-right' + o + (e || "") + '"><a href="#">' + n.options.dynamicArrowRightText + "</a></div>"), n.leftArrow = t(n.sliderId + "-wrapper [class^=ls-nav-left]").css("visibility", "hidden").addClass("ls-hidden"), n.rightArrow = t(n.sliderId + "-wrapper [class^=ls-nav-right]").css("visibility", "hidden").addClass("ls-hidden"), n.options.hoverArrows || n.hideShowArrows(i, !0, !0, !1)
            },
            hideShowArrows: function (e, n, i, o) {
                var r = this,
                    s = "undefined" != typeof e ? e : r.options.fadeOutDuration,
                    a = "undefined" != typeof e ? e : r.options.fadeInDuration,
                    l = n ? "visible" : "hidden";
                i || !o && 1 !== r.sanatizeNumber(r.nextPanel) ? (i || r.leftArrow.hasClass("ls-hidden")) && r.leftArrow.stop().css("visibility", "visible").fadeTo(a, 1).removeClass("ls-hidden") : r.leftArrow.stop().fadeTo(s, 0, function () {
                    t(this).css("visibility", l).addClass("ls-hidden")
                }), i || !o && r.sanatizeNumber(r.nextPanel) !== r.panelCount ? (i || r.rightArrow.hasClass("ls-hidden")) && r.rightArrow.stop().css("visibility", "visible").fadeTo(a, 1).removeClass("ls-hidden") : r.rightArrow.stop().fadeTo(s, 0, function () {
                    t(this).css("visibility", l).addClass("ls-hidden")
                })
            },
            registerArrows: function () {
                var e = this;
                t(e.$sliderWrap.find("[class^=ls-nav-]")).on("click", function () {
                    e.setNextPanel(t(this).attr("class").split(" ")[0].split("-")[2])
                })
            },
            registerCrossLinks: function () {
                var e = this;
                e.crosslinks = t("[data-liquidslider-ref*=" + e.sliderId.split("#")[1] + "]"), e.crosslinks.on("click", function (n) {
                    e.options.autoSlide === !0 && e.startAutoSlide(!0), e.setNextPanel(e.getPanelNumber(t(this).attr("href").split("#")[1], e.options.panelTitleSelector)), n.preventDefault()
                }), e.updateClass()
            },
            registerTouch: function () {
                var e = this,
                    n = e.options.swipeArgs || {
                        fallbackToMouseEvents: !1,
                        allowPageScroll: "vertical",
                        swipe: function (t, n) {
                            return "up" === n || "down" === n ? !1 : (e.swipeDir = "left" === n ? "right" : "left", void e.setNextPanel(e.swipeDir))
                        }
                    };
                t(e.sliderId + " .panel").swipe(n)
            },
            registerKeyboard: function () {
                var e = this;
                t(n).keydown(function (n) {
                    var i = n.keyCode || n.which;
                    "textarea" !== n.target.type && "textbox" !== n.target.type && (e.options.forceAutoSlide || t(this).trigger("click"), i === e.options.leftKey && e.setNextPanel("right"), i === e.options.rightKey && e.setNextPanel("left"), t.each(e.options.panelKeys, function (t, n) {
                        i === n && e.setNextPanel(t - 1)
                    }))
                })
            },
            autoSlide: function () {
                var t = this;
                t.options.autoSlideInterval < t.options.slideEaseDuration && (t.options.autoSlideInterval = t.options.slideEaseDuration > t.options.heightEaseDuration ? t.options.slideEaseDuration : t.options.heightEaseDuration), t.autoSlideTimeout = setTimeout(function () {
                    t.setNextPanel(t.options.autoSlideDirection), t.autoSlide()
                }, t.options.autoSlideInterval)
            },
            stopAutoSlide: function () {
                var t = this;
                t.options.autoSlide = !1, clearTimeout(t.autoSlideTimeout)
            },
            startAutoSlide: function (t) {
                var e = this;
                e.options.autoSlide = !0, t || e.setNextPanel(e.options.autoSlideDirection), e.autoSlide(clearTimeout(e.autoSlideTimeout))
            },
            updateHashTags: function () {
                var t = this,
                    n = t.nextPanel === t.panelCount ? 0 : t.nextPanel;
                e.location.hash = t.getFromPanel(t.options.hashTitleSelector, n)
            },
            adjustHeight: function (t, e, n, i) {
                var o = this;
                return t || o.useCSS ? (t && o.configureCSSTransitions("0", "0"), o.$sliderId.height(e), void(t && o.configureCSSTransitions())) : void o.$sliderId.animate({
                    height: e + "px"
                }, {
                    easing: n || o.options.heightEaseFunction,
                    duration: i || o.options.heightEaseDuration,
                    queue: !1
                })
            },
            getHeight: function (t) {
                var e = this;
                return t = t || e.$panelClass.eq(e.sanatizeNumber(e.nextPanel) - 1).outerHeight(!0), t = t < e.options.minHeight ? e.options.minHeight : t
            },
            addPreloader: function () {
                var e = this;
                t(e.sliderId + "-wrapper").append('<div class="ls-preloader"></div>')
            },
            removePreloader: function () {
                var e = this;
                t(e.sliderId + "-wrapper .ls-preloader").fadeTo("slow", 0, function () {
                    t(this).remove()
                })
            },
            init: function (n, i) {
                var o = this;
                o.elem = i, o.$elem = t(i), t("body").removeClass("no-js"), o.sliderId = "#" + o.$elem.attr("id"), o.$sliderId = t(o.sliderId), o.options = t.extend({}, t.fn.liquidSlider.options, n), o.pSign = o.options.responsive ? "%" : "px", o.options.responsive ? o.determineAnimationType() : (o.options.mobileNavigation = !1, o.options.hideArrowsWhenMobile = !1), "animate.css" === o.options.slideEaseFunction && (o.useCSS ? (o.options.continuous = !1, o.animateCSS = !0) : o.options.slideEaseFunction = o.options.slideEaseFunctionFallback), o.build(), o.events(), !o.options.responsive && o.options.dynamicArrows && o.$sliderWrap.width(o.$sliderId.outerWidth(!0) + o.leftArrow.outerWidth(!0) + o.rightArrow.outerWidth(!0)), o.loaded = !0, t(e).bind("load", function () {
                    o.options.preload.call(o)
                })
            },
            build: function () {
                var e, n = this;
                "ls-wrapper" !== n.$sliderId.parent().attr("class") && n.$sliderId.wrap('<div id="' + n.$elem.attr("id") + '-wrapper" class="ls-wrapper"></div>'), n.$sliderWrap = t(n.sliderId + "-wrapper"), n.options.preloader && n.addPreloader(), t(n.sliderId).children().addClass(n.$elem.attr("id") + "-panel panel"), n.panelClass = n.sliderId + " ." + n.$elem.attr("id") + "-panel:not(.clone)", n.$panelClass = t(n.panelClass), n.$panelClass.wrapAll('<div class="panel-container"></div>'), n.$panelClass.wrapInner('<div class="panel-wrapper"></div>'), n.panelContainer = n.$panelClass.parent(), n.$panelContainer = n.panelContainer, "fade" === n.options.slideEaseFunction && (n.$panelClass.addClass("fade"), n.options.continuous = !1, n.fade = !0), n.options.dynamicTabs ? n.addNavigation() : n.options.mobileNavigation = !1, n.options.dynamicArrows ? n.addArrows() : (n.options.hoverArrows = !1, n.options.hideSideArrows = !1, n.options.hideArrowsWhenMobile = !1), e = n.$leftArrow && "absolute" === n.$leftArrow.css("position") ? 0 : 1, n.totalSliderWidth = n.$sliderId.outerWidth(!0) + t(n.$leftArrow).outerWidth(!0) * e + t(n.$rightArrow).outerWidth(!0) * e, t(n.$sliderWrap).css("width", n.totalSliderWidth), n.options.dynamicTabs && n.alignNavigation(), n.options.hideSideArrows && (n.options.continuous = !1), n.options.continuous && (n.$panelContainer.prepend(n.$panelContainer.children().last().clone().addClass("clone")), n.$panelContainer.append(n.$panelContainer.children().eq(1).clone().addClass("clone")));
                var i = n.options.continuous ? 2 : 0;
                n.panelCount = t(n.panelClass).length, n.panelCountTotal = n.fade ? 1 : n.panelCount + i, n.panelWidth = t(n.panelClass).outerWidth(), n.totalWidth = n.panelCountTotal * n.panelWidth, t(n.sliderId + " .panel-container").css("width", n.totalWidth), n.slideDistance = n.options.responsive ? 100 : t(n.sliderId).outerWidth(), n.useCSS && (n.totalWidth = 100 * n.panelCountTotal, n.slideDistance = 100 / n.panelCountTotal), n.options.responsive && n.makeResponsive(), n.prepareTransition(n.getFirstPanel(), !0), n.updateClass()
            },
            determineAnimationType: function () {
                var t = this,
                    e = "animation",
                    o = "",
                    r = "Webkit Moz O ms Khtml".split(" "),
                    s = "",
                    a = 0;
                if (t.useCSS = !1, t.elem.style.animationName && (t.useCSS = !0), t.useCSS === !1)
                    for (a = 0; a < r.length; a++)
                        if (t.elem.style[r[a] + "AnimationName"] !== i) {
                            s = r[a], e = s + "Animation", o = "-" + s.toLowerCase() + "-", t.useCSS = !0;
                            break
                        }
                n.documentElement.clientWidth > t.options.useCSSMaxWidth && (t.useCSS = !1)
            },
            configureCSSTransitions: function (e, n) {
                var i, o, r = this;
                r.easing = {
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175,.885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                }, r.useCSS && (i = "all " + (e || r.options.slideEaseDuration) + "ms " + r.easing[r.options.slideEaseFunction], o = "all " + (n || r.options.heightEaseDuration) + "ms " + r.easing[r.options.heightEaseFunction], t(r.panelContainer).css({
                    "-webkit-transition": i,
                    "-moz-transition": i,
                    "-ms-transition": i,
                    "-o-transition": i,
                    transition: i
                }), r.options.autoHeight && r.$sliderId.css({
                    "-webkit-transition": o,
                    "-moz-transition": o,
                    "-ms-transition": o,
                    "-o-transition": o,
                    transition: o
                }))
            },
            transitionFade: function () {
                var e = this;
                t(e.panelClass).eq(e.nextPanel).fadeTo(e.options.fadeInDuration, 1).css("z-index", 1), t(e.panelClass).eq(e.prevPanel).fadeTo(e.options.fadeOutDuration, 0).css("z-index", 0), e.callback(e.options.callback, !0)
            },
            hover: function () {
                var t = this;
                t.$sliderWrap.hover(function () {
                    t.options.hoverArrows && t.hideShowArrows(t.options.fadeInDuration, !0, !0, !1), t.options.pauseOnHover && clearTimeout(t.autoSlideTimeout)
                }, function () {
                    t.options.hoverArrows && t.hideShowArrows(t.options.fadeOutnDuration, !0, !1, !0), t.options.pauseOnHover && t.options.autoSlide && t.startAutoSlide(!0)
                })
            },
            events: function () {
                var t = this;
                t.options.dynamicArrows && t.registerArrows(), t.options.crossLinks && t.registerCrossLinks(), t.options.dynamicTabs && t.registerNav(), t.options.swipe && t.registerTouch(), t.options.keyboardNavigation && t.registerKeyboard(), t.$sliderWrap.find("*").on("click", function () {
                    t.options.forceAutoSlide ? t.startAutoSlide(!0) : t.options.autoSlide && t.stopAutoSlide()
                }), t.hover()
            },
            setNextPanel: function (t) {
                var e = this;
                t !== e.nextPanel && (e.prevPanel = e.nextPanel, e.loaded && ("number" == typeof t ? e.nextPanel = t : (e.nextPanel += ~~("right" === t) || -1, e.options.continuous || (e.nextPanel = e.nextPanel < 0 ? e.panelCount - 1 : e.nextPanel % e.panelCount)), e.fade || e.animateCSS ? e.prepareTransition(e.nextPanel) : e.verifyPanel()))
            },
            getFirstPanel: function () {
                var t, n = this;
                return n.options.hashLinking && (t = n.getPanelNumber(e.location.hash, n.options.hashTitleSelector), "number" != typeof t && (t = 0)), t ? t : n.options.firstPanelToLoad - 1
            },
            getPanelNumber: function (e, n) {
                var i, o = this,
                    r = e.replace("#", "").toLowerCase();
                return o.$panelClass.each(function (e) {
                    i = o.convertRegex(t(this).find(n).text()), i === r && (r = e + 1)
                }), parseInt(r, 10) ? parseInt(r, 10) - 1 : r
            },
            getFromPanel: function (t, e) {
                var n = this;
                return n.convertRegex(n.$panelClass.find(t).eq(e).text())
            },
            convertRegex: function (t) {
                return t.replace(/[^\w -]+/g, "").replace(/ +/g, "-").toLowerCase()
            },
            updateClass: function () {
                var e = this;
                e.options.dynamicTabs && t(e.$sliderWrap).find(".tab" + e.sanatizeNumber(e.nextPanel) + ":first a").addClass("current").parent().siblings().children().removeClass("current"), e.options.crossLinks && e.crosslinks && (e.crosslinks.not(e.nextPanel).removeClass("currentCrossLink"), e.crosslinks.each(function () {
                    t(this).attr("href") === "#" + e.getFromPanel(e.options.panelTitleSelector, e.sanatizeNumber(e.nextPanel) - 1) && t(this).addClass("currentCrossLink")
                }))
            },
            sanatizeNumber: function (t) {
                var e = this;
                return t >= e.panelCount ? 1 : -1 >= t ? e.panelCount : t + 1
            },
            finalize: function () {
                var t = this,
                    e = t.options.autoHeight ? t.getHeight() : t.getHeighestPanel(t.nextPanel);
                t.options.autoHeight && t.adjustHeight(!0, e), t.options.autoSlide && t.autoSlide(), t.options.preloader && t.removePreloader(), t.onload()
            },
            callback: function (e, n) {
                var i = this;
                e && i.loaded && (i.useCSS && "undefined" != typeof n ? t(".panel-container").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                    e.call(i)
                }) : setTimeout(function () {
                    e.call(i)
                }, i.options.slideEaseDuration + 50))
            },
            onload: function () {
                var t = this;
                t.options.onload.call(t)
            },
            prepareTransition: function (t, e, n, i) {
                var o = this;
                o.nextPanel = t || 0, n || o.pretransition(o.options.pretransition), o.noAnimation = e, o.noPosttransition = i, o.loaded ? o.options.pretransition.call(o) : o.transition()
            },
            pretransition: function () {
                var t = this;
                t.options.hashLinking && t.updateHashTags(), t.options.mobileNavigation && t.dropdownSelect.val("tab" + (t.nextPanel + 1)), t.options.hideSideArrows && t.hideShowArrows(), t.updateClass()
            },
            getTransitionMargin: function () {
                var t = this;
                return -(t.nextPanel * t.slideDistance) - t.slideDistance * ~~t.options.continuous
            },
            transition: function () {
                var t = this,
                    e = t.getTransitionMargin();
                return t.animateCSS && t.loaded ? (t.transitionOutAnimateCSS(), !1) : ((e + t.pSign !== t.panelContainer.css("margin-left") || -100 !== e) && (t.options.autoHeight && !t.animateCSS && t.adjustHeight(!0, t.getHeight()), t.fade ? t.transitionFade() : t.animateCSS ? t.transitionInAnimateCSS(e) : t.useCSS ? t.transitionCSS(e, t.noAnimation) : t.transitionjQuery(e, t.noAnimation)), void(t.noPosttransition || t.callback(t.options.callback)))
            },
            transitionOutAnimateCSS: function () {
                var e = this;
                t(e.panelClass).removeClass(e.options.animateIn + " animated"), t(e.panelClass).eq(e.prevPanel).addClass("animated " + e.options.animateOut), e.callback(e.transitionInAnimateCSS, i)
            },
            transitionInAnimateCSS: function () {
                var e = this;
                e.options.autoHeight && e.adjustHeight(!1, e.getHeight()), e.transitionCSS(e.getTransitionMargin(), !e.loaded), t(e.panelClass).removeClass(e.options.animateOut + " animated"), t(e.panelClass).eq(e.nextPanel).addClass("animated " + e.options.animateIn), e.callback(e.options.callback, i)
            },
            transitionCSS: function (t, e) {
                var n = this;
                e && n.configureCSSTransitions("0", "0"), n.panelContainer.css({
                    "-webkit-transform": "translate3d(" + t + n.pSign + ", 0, 0)",
                    "-moz-transform": "translate3d(" + t + n.pSign + ", 0, 0)",
                    "-ms-transform": "translate3d(" + t + n.pSign + ", 0, 0)",
                    "-o-transform": "translate3d(" + t + n.pSign + ", 0, 0)",
                    transform: "translate3d(" + t + n.pSign + ", 0, 0)"
                }), e ? n.callback(function () {
                    n.configureCSSTransitions()
                }) : n.configureCSSTransitions()
            },
            transitionjQuery: function (t, e) {
                var n = this;
                e ? n.panelContainer.css("margin-left", t + n.pSign) : n.panelContainer.animate({
                    "margin-left": t + n.pSign
                }, {
                    easing: n.options.slideEaseFunction,
                    duration: n.options.slideEaseDuration,
                    queue: !1
                })
            },
            getHeighestPanel: function () {
                var e, n = this,
                    i = 0;
                return n.$panelClass.each(function () {
                    e = t(this).outerHeight(!0), i = e > i ? e : i
                }), n.options.autoHeight ? void 0 : i
            },
            verifyPanel: function () {
                var t = this,
                    e = !1;
                if (t.options.continuous)
                    if (t.nextPanel > t.panelCount) t.nextPanel = t.panelCount, t.setNextPanel(t.panelCount);
                    else if (t.nextPanel < -1) t.nextPanel = -1, t.setNextPanel(-1);
                else if (e || t.nextPanel !== t.panelCount && -1 !== t.nextPanel) e = !0, t.prepareTransition(t.nextPanel);
                else {
                    t.prepareTransition(t.nextPanel), t.updateClass(), clearTimeout(n);
                    var n = setTimeout(function () {
                        t.nextPanel === t.panelCount ? t.prepareTransition(0, !0, !0, !0) : -1 === t.nextPanel && t.prepareTransition(t.panelCount - 1, !0, !0, !0)
                    }, t.options.slideEaseDuration + 50)
                } else t.nextPanel === t.panelCount ? t.nextPanel = 0 : -1 === t.nextPanel && (t.nextPanel = t.panelCount - 1), t.prepareTransition(t.nextPanel)
            }
        };
        t.fn.liquidSlider = function (e) {
            return this.each(function () {
                var n = Object.create(o);
                n.init(e, this), t.data(this, "liquidSlider", n)
            })
        }, t.fn.liquidSlider.options = {
            autoHeight: !0,
            minHeight: 0,
            heightEaseDuration: 1500,
            heightEaseFunction: "easeInOutExpo",
            slideEaseDuration: 1500,
            slideEaseFunction: "easeInOutExpo",
            slideEaseFunctionFallback: "easeInOutExpo",
            animateIn: "bounceInRight",
            animateOut: "bounceOutRight",
            continuous: !0,
            fadeInDuration: 500,
            fadeOutDuration: 500,
            autoSlide: !1,
            autoSlideDirection: "right",
            autoSlideInterval: 6e3,
            forceAutoSlide: !1,
            pauseOnHover: !1,
            dynamicArrows: !0,
            dynamicArrowsGraphical: !0,
            dynamicArrowLeftText: "&#171; left",
            dynamicArrowRightText: "right &#187;",
            hideSideArrows: !1,
            hideSideArrowsDuration: 750,
            hoverArrows: !0,
            hoverArrowDuration: 250,
            dynamicTabs: !0,
            dynamicTabsHtml: !0,
            includeTitle: !0,
            panelTitleSelector: ".title",
            dynamicTabsAlign: "left",
            dynamicTabsPosition: "top",
            navElementTag: "div",
            firstPanelToLoad: 1,
            crossLinks: !1,
            hashLinking: !1,
            hashTitleSelector: ".title",
            keyboardNavigation: !1,
            leftKey: 39,
            rightKey: 37,
            panelKeys: {
                1: 49,
                2: 50,
                3: 51,
                4: 52
            },
            responsive: !0,
            mobileNavigation: !0,
            mobileNavDefaultText: "Menu",
            mobileUIThreshold: 0,
            hideArrowsWhenMobile: !0,
            hideArrowsThreshold: 0,
            useCSSMaxWidth: 2200,
            preload: function () {
                this.finalize()
            },
            onload: function () {},
            pretransition: function () {
                this.transition()
            },
            callback: function () {},
            preloader: false,
            swipe: !0,
            swipeArgs: i
        }
    }(jQuery, window, document),
    function (t) {
        function e(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = u), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function () {
                var i = t(this),
                    o = i.data(S);
                o || (o = new n(this, e), i.data(S, o))
            })
        }

        function n(e, n) {
            function E(e) {
                if (!(ae() || t(e.target).closest(n.excludedElements, We).length > 0)) {
                    var i, o = e.originalEvent ? e.originalEvent : e,
                        r = T ? o.touches[0] : o;
                    return ze = w, T ? Be = o.touches.length : e.preventDefault(), je = 0, _e = null, Re = null, Ne = 0, Le = 0, Me = 0, He = 1, Fe = 0, Ve = pe(), qe = ge(), re(), !T || Be === n.fingers || n.fingers === y || q() ? (ue(0, r), Qe = Te(), 2 == Be && (ue(1, o.touches[1]), Le = Me = ye(Ve[0].start, Ve[1].start)), (n.swipeStatus || n.pinchStatus) && (i = j(o, ze))) : i = !1, i === !1 ? (ze = k, j(o, ze), i) : void le(!0)
                }
            }

            function P(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                if (ze !== C && ze !== k && !se()) {
                    var i, o = T ? e.touches[0] : e,
                        r = ce(o);
                    if (Ue = Te(), T && (Be = e.touches.length), ze = x, 2 == Be && (0 == Le ? (ue(1, e.touches[1]), Le = Me = ye(Ve[0].start, Ve[1].start)) : (ce(e.touches[1]), Me = ye(Ve[0].end, Ve[1].end), Re = we(Ve[0].end, Ve[1].end)), He = be(Le, Me), Fe = Math.abs(Le - Me)), Be === n.fingers || n.fingers === y || !T || q()) {
                        if (_e = ke(r.start, r.end), F(t, _e), je = xe(r.start, r.end), Ne = ve(), de(_e, je), (n.swipeStatus || n.pinchStatus) && (i = j(e, ze)), !n.triggerOnTouchEnd || n.triggerOnTouchLeave) {
                            var s = !0;
                            if (n.triggerOnTouchLeave) {
                                var a = Se(this);
                                s = Ee(r.end, a)
                            }!n.triggerOnTouchEnd && s ? ze = O(x) : n.triggerOnTouchLeave && !s && (ze = O(C)), (ze == k || ze == C) && j(e, ze)
                        }
                    } else ze = k, j(e, ze);
                    i === !1 && (ze = k, j(e, ze))
                }
            }

            function A(t) {
                var e = t.originalEvent;
                return T && e.touches.length > 0 ? (oe(), !0) : (se() && (Be = Xe), t.preventDefault(), Ue = Te(), Ne = ve(), L() ? (ze = k, j(e, ze)) : n.triggerOnTouchEnd || 0 == n.triggerOnTouchEnd && ze === x ? (ze = C, j(e, ze)) : !n.triggerOnTouchEnd && K() ? (ze = C, _(e, ze, d)) : ze === x && (ze = k, j(e, ze)), void le(!1))
            }

            function I() {
                Be = 0, Ue = 0, Qe = 0, Le = 0, Me = 0, He = 1, re(), le(!1)
            }

            function D(t) {
                var e = t.originalEvent;
                n.triggerOnTouchLeave && (ze = O(C), j(e, ze))
            }

            function $() {
                We.unbind(Ae, E), We.unbind(Oe, I), We.unbind(Ie, P), We.unbind(De, A), $e && We.unbind($e, D), le(!1)
            }

            function O(t) {
                var e = t,
                    i = H(),
                    o = N(),
                    r = L();
                return !i || r ? e = k : !o || t != x || n.triggerOnTouchEnd && !n.triggerOnTouchLeave ? !o && t == C && n.triggerOnTouchLeave && (e = k) : e = C, e
            }

            function j(t, e) {
                var n = void 0;
                return V() || B() ? n = _(t, e, h) : (W() || q()) && n !== !1 && (n = _(t, e, p)), ne() && n !== !1 ? n = _(t, e, f) : ie() && n !== !1 ? n = _(t, e, g) : ee() && n !== !1 && (n = _(t, e, d)), e === k && I(t), e === C && (T ? 0 == t.touches.length && I(t) : I(t)), n
            }

            function _(e, u, c) {
                var m = void 0;
                if (c == h) {
                    if (We.trigger("swipeStatus", [u, _e || null, je || 0, Ne || 0, Be]), n.swipeStatus && (m = n.swipeStatus.call(We, e, u, _e || null, je || 0, Ne || 0, Be), m === !1)) return !1;
                    if (u == C && z()) {
                        if (We.trigger("swipe", [_e, je, Ne, Be]), n.swipe && (m = n.swipe.call(We, e, _e, je, Ne, Be), m === !1)) return !1;
                        switch (_e) {
                        case i:
                            We.trigger("swipeLeft", [_e, je, Ne, Be]), n.swipeLeft && (m = n.swipeLeft.call(We, e, _e, je, Ne, Be));
                            break;
                        case o:
                            We.trigger("swipeRight", [_e, je, Ne, Be]), n.swipeRight && (m = n.swipeRight.call(We, e, _e, je, Ne, Be));
                            break;
                        case r:
                            We.trigger("swipeUp", [_e, je, Ne, Be]), n.swipeUp && (m = n.swipeUp.call(We, e, _e, je, Ne, Be));
                            break;
                        case s:
                            We.trigger("swipeDown", [_e, je, Ne, Be]), n.swipeDown && (m = n.swipeDown.call(We, e, _e, je, Ne, Be))
                        }
                    }
                }
                if (c == p) {
                    if (We.trigger("pinchStatus", [u, Re || null, Fe || 0, Ne || 0, Be, He]), n.pinchStatus && (m = n.pinchStatus.call(We, e, u, Re || null, Fe || 0, Ne || 0, Be, He), m === !1)) return !1;
                    if (u == C && R()) switch (Re) {
                    case a:
                        We.trigger("pinchIn", [Re || null, Fe || 0, Ne || 0, Be, He]), n.pinchIn && (m = n.pinchIn.call(We, e, Re || null, Fe || 0, Ne || 0, Be, He));
                        break;
                    case l:
                        We.trigger("pinchOut", [Re || null, Fe || 0, Ne || 0, Be, He]), n.pinchOut && (m = n.pinchOut.call(We, e, Re || null, Fe || 0, Ne || 0, Be, He))
                    }
                }
                return c == d ? (u === k || u === C) && (clearTimeout(Ge), X() && !J() ? (Ye = Te(), Ge = setTimeout(t.proxy(function () {
                    Ye = null, We.trigger("tap", [e.target]), n.tap && (m = n.tap.call(We, e, e.target))
                }, this), n.doubleTapThreshold)) : (Ye = null, We.trigger("tap", [e.target]), n.tap && (m = n.tap.call(We, e, e.target)))) : c == f ? (u === k || u === C) && (clearTimeout(Ge), Ye = null, We.trigger("doubletap", [e.target]), n.doubleTap && (m = n.doubleTap.call(We, e, e.target))) : c == g && (u === k || u === C) && (clearTimeout(Ge), Ye = null, We.trigger("longtap", [e.target]), n.longTap && (m = n.longTap.call(We, e, e.target))), m
            }

            function N() {
                var t = !0;
                return null !== n.threshold && (t = je >= n.threshold), t
            }

            function L() {
                var t = !1;
                return null !== n.cancelThreshold && null !== _e && (t = fe(_e) - je >= n.cancelThreshold), t
            }

            function M() {
                return null !== n.pinchThreshold ? Fe >= n.pinchThreshold : !0
            }

            function H() {
                var t;
                return t = n.maxTimeThreshold ? Ne >= n.maxTimeThreshold ? !1 : !0 : !0
            }

            function F(t, e) {
                if (n.allowPageScroll === u || q()) t.preventDefault();
                else {
                    var a = n.allowPageScroll === c;
                    switch (e) {
                    case i:
                        (n.swipeLeft && a || !a && n.allowPageScroll != m) && t.preventDefault();
                        break;
                    case o:
                        (n.swipeRight && a || !a && n.allowPageScroll != m) && t.preventDefault();
                        break;
                    case r:
                        (n.swipeUp && a || !a && n.allowPageScroll != v) && t.preventDefault();
                        break;
                    case s:
                        (n.swipeDown && a || !a && n.allowPageScroll != v) && t.preventDefault()
                    }
                }
            }

            function R() {
                var t = Q(),
                    e = U(),
                    n = M();
                return t && e && n
            }

            function q() {
                return !!(n.pinchStatus || n.pinchIn || n.pinchOut)
            }

            function W() {
                return !(!R() || !q())
            }

            function z() {
                var t = H(),
                    e = N(),
                    n = Q(),
                    i = U(),
                    o = L(),
                    r = !o && i && n && e && t;
                return r
            }

            function B() {
                return !!(n.swipe || n.swipeStatus || n.swipeLeft || n.swipeRight || n.swipeUp || n.swipeDown)
            }

            function V() {
                return !(!z() || !B())
            }

            function Q() {
                return Be === n.fingers || n.fingers === y || !T
            }

            function U() {
                return 0 !== Ve[0].end.x
            }

            function K() {
                return !!n.tap
            }

            function X() {
                return !!n.doubleTap
            }

            function Y() {
                return !!n.longTap
            }

            function G() {
                if (null == Ye) return !1;
                var t = Te();
                return X() && t - Ye <= n.doubleTapThreshold
            }

            function J() {
                return G()
            }

            function Z() {
                return !(1 !== Be && T || !isNaN(je) && 0 !== je)
            }

            function te() {
                return Ne > n.longTapThreshold && b > je
            }

            function ee() {
                return !(!Z() || !K())
            }

            function ne() {
                return !(!G() || !X())
            }

            function ie() {
                return !(!te() || !Y())
            }

            function oe() {
                Ke = Te(), Xe = event.touches.length + 1
            }

            function re() {
                Ke = 0, Xe = 0
            }

            function se() {
                var t = !1;
                if (Ke) {
                    var e = Te() - Ke;
                    e <= n.fingerReleaseThreshold && (t = !0)
                }
                return t
            }

            function ae() {
                return !(We.data(S + "_intouch") !== !0)
            }

            function le(t) {
                t === !0 ? (We.bind(Ie, P), We.bind(De, A), $e && We.bind($e, D)) : (We.unbind(Ie, P, !1), We.unbind(De, A, !1), $e && We.unbind($e, D, !1)), We.data(S + "_intouch", t === !0)
            }

            function ue(t, e) {
                var n = void 0 !== e.identifier ? e.identifier : 0;
                return Ve[t].identifier = n, Ve[t].start.x = Ve[t].end.x = e.pageX || e.clientX, Ve[t].start.y = Ve[t].end.y = e.pageY || e.clientY, Ve[t]
            }

            function ce(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    n = he(e);
                return n.end.x = t.pageX || t.clientX, n.end.y = t.pageY || t.clientY, n
            }

            function he(t) {
                for (var e = 0; e < Ve.length; e++)
                    if (Ve[e].identifier == t) return Ve[e]
            }

            function pe() {
                for (var t = [], e = 0; 5 >= e; e++) t.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                });
                return t
            }

            function de(t, e) {
                e = Math.max(e, fe(t)), qe[t].distance = e
            }

            function fe(t) {
                return qe[t].distance
            }

            function ge() {
                var t = {};
                return t[i] = me(i), t[o] = me(o), t[r] = me(r), t[s] = me(s), t
            }

            function me(t) {
                return {
                    direction: t,
                    distance: 0
                }
            }

            function ve() {
                return Ue - Qe
            }

            function ye(t, e) {
                var n = Math.abs(t.x - e.x),
                    i = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(n * n + i * i))
            }

            function be(t, e) {
                var n = e / t * 1;
                return n.toFixed(2)
            }

            function we() {
                return 1 > He ? l : a
            }

            function xe(t, e) {
                return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
            }

            function Ce(t, e) {
                var n = t.x - e.x,
                    i = e.y - t.y,
                    o = Math.atan2(i, n),
                    r = Math.round(180 * o / Math.PI);
                return 0 > r && (r = 360 - Math.abs(r)), r
            }

            function ke(t, e) {
                var n = Ce(t, e);
                return 45 >= n && n >= 0 ? i : 360 >= n && n >= 315 ? i : n >= 135 && 225 >= n ? o : n > 45 && 135 > n ? s : r
            }

            function Te() {
                var t = new Date;
                return t.getTime()
            }

            function Se(e) {
                e = t(e);
                var n = e.offset(),
                    i = {
                        left: n.left,
                        right: n.left + e.outerWidth(),
                        top: n.top,
                        bottom: n.top + e.outerHeight()
                    };
                return i
            }

            function Ee(t, e) {
                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
            }
            var Pe = T || !n.fallbackToMouseEvents,
                Ae = Pe ? "touchstart" : "mousedown",
                Ie = Pe ? "touchmove" : "mousemove",
                De = Pe ? "touchend" : "mouseup",
                $e = Pe ? null : "mouseleave",
                Oe = "touchcancel",
                je = 0,
                _e = null,
                Ne = 0,
                Le = 0,
                Me = 0,
                He = 1,
                Fe = 0,
                Re = 0,
                qe = null,
                We = t(e),
                ze = "start",
                Be = 0,
                Ve = null,
                Qe = 0,
                Ue = 0,
                Ke = 0,
                Xe = 0,
                Ye = 0,
                Ge = null;
            try {
                We.bind(Ae, E), We.bind(Oe, I)
            } catch (Je) {
                t.error("events not supported " + Ae + "," + Oe + " on jQuery.swipe")
            }
            this.enable = function () {
                return We.bind(Ae, E), We.bind(Oe, I), We
            }, this.disable = function () {
                return $(), We
            }, this.destroy = function () {
                return $(), We.data(S, null), We
            }, this.option = function (e, i) {
                if (void 0 !== n[e]) {
                    if (void 0 === i) return n[e];
                    n[e] = i
                } else t.error("Option " + e + " does not exist on jQuery.swipe.options")
            }
        }
        var i = "left",
            o = "right",
            r = "up",
            s = "down",
            a = "in",
            l = "out",
            u = "none",
            c = "auto",
            h = "swipe",
            p = "pinch",
            d = "tap",
            f = "doubletap",
            g = "longtap",
            m = "horizontal",
            v = "vertical",
            y = "all",
            b = 10,
            w = "start",
            x = "move",
            C = "end",
            k = "cancel",
            T = "ontouchstart" in window,
            S = "TouchSwipe",
            E = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: "button, input, select, textarea, a, .noSwipe"
            };
        t.fn.swipe = function (n) {
            var i = t(this),
                o = i.data(S);
            if (o && "string" == typeof n) {
                if (o[n]) return o[n].apply(this, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + n + " does not exist on jQuery.swipe")
            } else if (!(o || "object" != typeof n && n)) return e.apply(this, arguments);
            return i
        }, t.fn.swipe.defaults = E, t.fn.swipe.phases = {
            PHASE_START: w,
            PHASE_MOVE: x,
            PHASE_END: C,
            PHASE_CANCEL: k
        }, t.fn.swipe.directions = {
            LEFT: i,
            RIGHT: o,
            UP: r,
            DOWN: s,
            IN: a,
            OUT: l
        }, t.fn.swipe.pageScroll = {
            NONE: u,
            HORIZONTAL: m,
            VERTICAL: v,
            AUTO: c
        }, t.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            ALL: y
        }
    }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function (t, e, n, i, o) {
            return jQuery.easing[jQuery.easing.def](t, e, n, i, o)
        },
        easeInQuad: function (t, e, n, i, o) {
            return i * (e /= o) * e + n
        },
        easeOutQuad: function (t, e, n, i, o) {
            return -i * (e /= o) * (e - 2) + n
        },
        easeInOutQuad: function (t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function (t, e, n, i, o) {
            return i * (e /= o) * e * e + n
        },
        easeOutCubic: function (t, e, n, i, o) {
            return i * ((e = e / o - 1) * e * e + 1) + n
        },
        easeInOutCubic: function (t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function (t, e, n, i, o) {
            return i * (e /= o) * e * e * e + n
        },
        easeOutQuart: function (t, e, n, i, o) {
            return -i * ((e = e / o - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function (t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function (t, e, n, i, o) {
            return i * (e /= o) * e * e * e * e + n
        },
        easeOutQuint: function (t, e, n, i, o) {
            return i * ((e = e / o - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function (t, e, n, i, o) {
            return (e /= o / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function (t, e, n, i, o) {
            return -i * Math.cos(e / o * (Math.PI / 2)) + i + n
        },
        easeOutSine: function (t, e, n, i, o) {
            return i * Math.sin(e / o * (Math.PI / 2)) + n
        },
        easeInOutSine: function (t, e, n, i, o) {
            return -i / 2 * (Math.cos(Math.PI * e / o) - 1) + n
        },
        easeInExpo: function (t, e, n, i, o) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n
        },
        easeOutExpo: function (t, e, n, i, o) {
            return e == o ? n + i : i * (-Math.pow(2, -10 * e / o) + 1) + n
        },
        easeInOutExpo: function (t, e, n, i, o) {
            return 0 == e ? n : e == o ? n + i : (e /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
        },
        easeInCirc: function (t, e, n, i, o) {
            return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n
        },
        easeOutCirc: function (t, e, n, i, o) {
            return i * Math.sqrt(1 - (e = e / o - 1) * e) + n
        },
        easeInOutCirc: function (t, e, n, i, o) {
            return (e /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function (t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * o - r) * Math.PI / s)) + n
        },
        easeOutElastic: function (t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * o - r) * Math.PI / s) + i + n
        },
        easeInOutElastic: function (t, e, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (2 == (e /= o / 2)) return n + i;
            if (s || (s = .3 * o * 1.5), a < Math.abs(i)) {
                a = i;
                var r = s / 4
            } else var r = s / (2 * Math.PI) * Math.asin(i / a);
            return 1 > e ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * o - r) * Math.PI / s) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * o - r) * Math.PI / s) * .5 + i + n
        },
        easeInBack: function (t, e, n, i, o, r) {
            return void 0 == r && (r = 1.70158), i * (e /= o) * e * ((r + 1) * e - r) + n
        },
        easeOutBack: function (t, e, n, i, o, r) {
            return void 0 == r && (r = 1.70158), i * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + n
        },
        easeInOutBack: function (t, e, n, i, o, r) {
            return void 0 == r && (r = 1.70158), (e /= o / 2) < 1 ? i / 2 * e * e * (((r *= 1.525) + 1) * e - r) + n : i / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + n
        },
        easeInBounce: function (t, e, n, i, o) {
            return i - jQuery.easing.easeOutBounce(t, o - e, 0, i, o) + n
        },
        easeOutBounce: function (t, e, n, i, o) {
            return (e /= o) < 1 / 2.75 ? 7.5625 * i * e * e + n : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function (t, e, n, i, o) {
            return o / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, i, o) + .5 * i + n
        }
    }),
    function (t) {
        t("#auto-complete-small").typeahead({
            name: "typeahead-small",
            limit: 6,
            dataType: "json",
            valueKey: "id",
            minLength: 3,
            remote: {
                url: t("#auto-complete-small").data("url") + "/%QUERY",
                filter: function (t) {
                    return console.log(t), t
                }
            },
            template: _.template('<div class="media row animated fadeInDownBig"><a class="pull-left col-sm-4" href="#"><img class="media-object img-responsive" src="<%= poster %>" alt="..."></a><div class="media-body col-sm-8"><h4 class="media-heading"><%= title %></h4><p class="tt-genre"><%= genre %></p></div></div>')
        }).bind("typeahead:selected", function (t, e) {
            // This trick hides the result id from the text box so the user can't se it
            $(this).css('text-indent', '-10000px');
            window.location.href = e.link
        })
    }(jQuery),
    function (t) {
        t("#rating").raty({
            path: t("#review-form, #user-review-form").data("path"),
            number: 10,
            numberMax: 10,
            hints: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            target: ".current",
            targetKeep: !0
        })
    }(jQuery),
    function (t) {
        t(".title-social #twitter").sharrre({
            share: {
                twitter: !0
            },
            enableHover: !1,
            enableTracking: !0,
            enableCounter: !0,
            click: function (t) {
                t.simulateClick(), t.openPopup("twitter")
            }
        }), t(".title-social #facebook").sharrre({
            share: {
                facebook: !0
            },
            enableHover: !1,
            enableTracking: !0,
            click: function (t) {
                t.simulateClick(), t.openPopup("facebook")
            }
        }), t(".title-social #pinterest").sharrre({
            share: {
                pinterest: !0
            },
            enableHover: !1,
            enableTracking: !0,
            click: function (t) {
                t.simulateClick(), t.openPopup("pinterest")
            }
        })
    }(jQuery),
    function (t) {
        t(window).ready(function () {
            var e = t(".review-score");
            e.each(function () {
                var e = t(this),
                    n = parseInt(e.text());
                50 >= n ? e.css("border-color", "#FF2E46") : n > 50 && 70 > n ? e.css("border-color", "#e67e22") : n >= 70 && 100 != n ? e.css("border-color", "#27AE60") : 100 == n && (e.css("border-color", "#27AE60"), e.find("span"))
            })
        })
    }(jQuery), $(window).ready(function () {
        $(window).scroll(function () {
            $("body").hasClass("animate-nav") && (0 === $(window).scrollTop() ? ($("body").addClass("nav-trans"), $("nav").removeClass("animated bounce")) : ($("body").removeClass("nav-trans"), $("nav").addClass("animated bounce")))
        })
    }),
    function (t) {
        t("#grid").imagesLoaded(function () {
            function e(e, n) {
                return t(e).data("name") < t(n).data("name") ? -1 : 1
            }

            function n(e, n) {
                return t(e).data("popularity") > t(n).data("popularity") ? -1 : 1
            }

            function i(e, n) {
                return t(e).data("release") < t(n).data("release") ? 1 : -1
            }
            if (t("#grid-sorters").find("[data-sortby='popularity']").addClass("active"), t("#grid").hasClass("order")) var o = "comparatorOrder";
            else var o = "comparatorPopularity";
            var r = {
                    autoResize: !0,
                    container: t("#grid"),
                    offset: 0,
                    fillEmptySpace: !1,
                    comparator: o,
                    align: "center"
                },
                s = t("#grid figure"),
                a = t("#grid-filters button");
            sorters = t("#grid-sorters button"), s.wookmark(r);
            var l = function (o) {
                    switch (o.preventDefault(), currentSortby = t(this), currentSortby.data("sortby")) {
                    case "release":
                        r.comparator = i;
                        break;
                    case "popularity":
                        r.comparator = n;
                        break;
                    case "name":
                    default:
                        r.comparator = e
                    }
                    sorters.removeClass("active"), currentSortby.addClass("active"), s.wookmark(r)
                },
                u = function (e) {
                    var n = t(e.currentTarget),
                        i = [];
                    n.toggleClass("active"), a.filter(".active").each(function () {
                        i.push(t(this).data("filter"))
                    }), s.wookmarkInstance.filter(i, "and")
                };
            a.click(u), sorters.click(l), t("#trigger").on("shown.bs.tab", function () {
                s.trigger("refreshWookmark")
            })
        })
    }(jQuery),
    function (t) {
        t(document).ready(function () {
            t(".lists-form").submit(function (e) {
                e.preventDefault();
                var n = t("body").data("url");
                url = n + "/lists/add", button = t(this).find(".lists"), dataString = t(this).serialize(), button.hasClass("watchlisted") && (url = n + "/lists/remove"), t.ajax({
                    type: "POST",
                    url: url,
                    data: dataString,
                    cache: !1,
                    success: function () {
                        button.hasClass("watchlisted") ? (button.removeClass("watchlisted"), button.prop("title", "add to your list")) : (button.addClass("watchlisted"), button.prop("title", "remove from your list"))
                    }
                }).fail(function (t) {
                    console.log(t), alert("Something went wrong on our end, sorry.")
                })
            })
        })
    }(jQuery),
    function (t) {
        t(".trailer-trigger").on("click", function () {
            var e = t(this).data("trailer");
            t(".yt-modal-box").append('<div class="modal fade" id="yt-modal"><div class="modal-dialog"><div class="modal-body flex-video widescreen"></div></div></div>'), t("#yt-modal").modal(), t("#yt-modal").find(".modal-body").html('<button type="button" class="modal-close" data-dismiss="modal" aria-hidden="true"></button><iframe src="' + e + '?version=3&autoplay=1&wmode=transparent&iv_load_policy=3" frameborder="0" allowfullscreen="true"></iframe>'), t(document).on("hide.bs.modal", function () {
                t(".modal-body").html("")
            })
        })
    }(jQuery),
    function (t) {
        t("#slide-2").css("display", "block");
        t("#slide-3").css("display", "block");
        t("#slide-4").css("display", "block");
        var e = t("#slider-home");
        0 != e.length && t("#slider-home").liquidSlider({
            dynamicTabs: !1,
            dynamicArrows: !1,
            hoverArrows: !1,
            mobileNavigation: !1,
            crossLinks: !0,
            responsive: !0
        })
    }(jQuery),
   function (t) {
        t("#user-review-form").submit(function (e) {
            return e.preventDefault(), t.ajax({
                url: t(this).attr("action"),
                type: "POST",
                datatype: "json",
                data: t("#user-review-form").serialize(),
                beforeSend: function () {
                    t("#ajax-loading").show()
                }
            }).done(function (e) {
                t("#ajax-loading").hide(), "success" != e ? t("#modal-errors").html('<span class="help-block alert alert-danger">' + e + "</span>") : (t("#review-modal").modal("hide"), t(".responses").html('<div class="alert alert-success alert-dismissable">Review saved successfully<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button></div>'))
            }).fail(function (t) {
                console.log(t), alert("Something went wrong on our end, sorry.")
            }), !1
        })
    }(jQuery), $(".home-social #twitter").sharrre({
        share: {
            twitter: !0
        },
        enableHover: !1,
        enableTracking: !0,
        enableCounter: !0,
        click: function (t) {
            t.simulateClick(), t.openPopup("twitter")
        }
    }), $(".home-social #facebook").sharrre({
        share: {
            facebook: !0
        },
        enableHover: !1,
        enableTracking: !0,
        enableCounter: !0,
        click: function (t) {
            t.simulateClick(), t.openPopup("facebook")
        }
    }), $(".home-social #pinterest").sharrre({
        share: {
            pinterest: !0
        },
        enableHover: !1,
        enableTracking: !0,
        enableCounter: !0,
        click: function (t) {
            t.simulateClick(), t.openPopup("pinterest")
        }
    }), $(".home-social #linkedin").sharrre({
        share: {
            linkedin: !0
        },
        enableHover: !1,
        enableTracking: !0,
        enableCounter: !0,
        click: function (t) {
            t.simulateClick(), t.openPopup("linkedin")
        }
    }),
    function (t) {
        t.fn.vAlign = function () {
            return this.each(function () {
                t(this).children().wrapAll('<div class="nitinh-vAlign" style="position:relative;"></div>');
                var e = t(this).children("div.nitinh-vAlign"),
                    n = t(this).innerHeight(),
                    i = e.height(),
                    o = (n - i) / 2;
                e.css("top", o)
            })
        }
    }(jQuery),
    function (t) {
        t("#register-page .container, #login-page .container, #forgot-pass-page .container").vAlign()
    }(jQuery),
    function (t) {
        t('.title-page a[data-toggle="tab"]').on("shown.bs.tab", function () {
            "#reviews" == t(this).attr("href") ? localStorage.setItem(t("#tabs-id").data("id"), t(this).attr("href")) : localStorage.removeItem(t("#tabs-id").data("id"))
        });
        var e = localStorage.getItem(t("#tabs-id").data("id"));
        e ? t("a[href=" + e + "]").tab("show") : t('a[data-toggle="tab"]:first').tab("show")
    }(jQuery),
    function (t) {
        t("#grid2").imagesLoaded(function () {
            function e(e, n) {
                return t(e).data("name") < t(n).data("name") ? -1 : 1
            }

            function n(e, n) {
                return t(e).data("popularity") > t(n).data("popularity") ? -1 : 1
            }

            function i(e, n) {
                return t(e).data("release") < t(n).data("release") ? 1 : -1
            }
            if (t("#grid-sorters").find("[data-sortby='popularity']").addClass("active"), t("#grid2").hasClass("order")) var o = "comparatorOrder";
            else var o = "comparatorPopularity";
            var r = {
                    autoResize: !0,
                    container: t("#grid2"),
                    offset: 0,
                    fillEmptySpace: !1,
                    comparator: o,
                    align: "center"
                },
                s = t("#grid2 figure"),
                a = t("#grid-filters button");
            sorters = t("#grid-sorters button"), s.wookmark(r);
            var l = function (o) {
                    switch (o.preventDefault(), currentSortby = t(this), currentSortby.data("sortby")) {
                    case "release":
                        r.comparator = i;
                        break;
                    case "popularity":
                        r.comparator = n;
                        break;
                    case "name":
                    default:
                        r.comparator = e
                    }
                    sorters.removeClass("active"), currentSortby.addClass("active"), s.wookmark(r)
                },
                u = function (e) {
                    var n = t(e.currentTarget),
                        i = [];
                    n.toggleClass("active"), a.filter(".active").each(function () {
                        i.push(t(this).data("filter"))
                    }), s.wookmarkInstance.filter(i, "and")
                };
            a.click(u), sorters.click(l), t("#trigger2").on("shown.bs.tab", function () {
                s.trigger("refreshWookmark")
            })
        })
    }(jQuery),
    function (t) {
        t("#grid3").imagesLoaded(function () {
            function e(e, n) {
                return t(e).data("name") < t(n).data("name") ? -1 : 1
            }

            function n(e, n) {
                return t(e).data("popularity") > t(n).data("popularity") ? -1 : 1
            }

            function i(e, n) {
                return t(e).data("release") < t(n).data("release") ? 1 : -1
            }
            if (t("#grid-sorters").find("[data-sortby='popularity']").addClass("active"), t("#grid3").hasClass("order")) var o = "comparatorOrder";
            else var o = "comparatorPopularity";
            var r = {
                    autoResize: !0,
                    container: t("#grid3"),
                    offset: 0,
                    fillEmptySpace: !1,
                    comparator: o,
                    align: "center"
                },
                s = t("#grid3 figure"),
                a = t("#grid-filters button");
            sorters = t("#grid-sorters button"), s.wookmark(r);
            var l = function (o) {
                    switch (o.preventDefault(), currentSortby = t(this), currentSortby.data("sortby")) {
                    case "release":
                        r.comparator = i;
                        break;
                    case "popularity":
                        r.comparator = n;
                        break;
                    case "name":
                    default:
                        r.comparator = e
                    }
                    sorters.removeClass("active"), currentSortby.addClass("active"), s.wookmark(r)
                },
                u = function (e) {
                    var n = t(e.currentTarget),
                        i = [];
                    n.toggleClass("active"), a.filter(".active").each(function () {
                        i.push(t(this).data("filter"))
                    }), s.wookmarkInstance.filter(i, "and")
                };
            a.click(u), sorters.click(l), t("#trigger3").on("shown.bs.tab", function () {
                s.trigger("refreshWookmark")
            })
        })
    }(jQuery),
    function (t) {
        t(".promo-trigger").on("click", function () {
            var e = t(this).data("trailer");
            t("#promo-modal-box").append('<div class="modal fade" id="yt-modal"><div class="modal-dialog"><div class="modal-body flex-video widescreen"></div></div></div>'), t("#yt-modal").modal(), t("#yt-modal").find(".modal-body").html('<button type="button" class="modal-close" data-dismiss="modal" aria-hidden="true"></button><iframe src="' + e + '?version=3&autoplay=1&wmode=transparent" frameborder="0" allowfullscreen="true"></iframe>'), t(document).on("hide.bs.modal", function () {
                t("#promo-modal-box .modal-body").html("")
            })
        })
    }(jQuery), ! function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper"], t) : (window.blueimp = window.blueimp || {}, window.blueimp.Gallery = t(window.blueimp.helper || window.jQuery))
    }(function (t) {
        "use strict";

        function e(t, n) {
            return t && t.length && void 0 !== document.body.style.maxHeight ? this && this.options === e.prototype.options ? (this.list = t, this.num = t.length, this.initOptions(n), void this.initialize()) : new e(t, n) : null
        }
        return t.extend(e.prototype, {
            options: {
                container: "#blueimp-gallery",
                slidesContainer: "div",
                titleElement: "h3",
                displayClass: "blueimp-gallery-display",
                controlsClass: "blueimp-gallery-controls",
                singleClass: "blueimp-gallery-single",
                leftEdgeClass: "blueimp-gallery-left",
                rightEdgeClass: "blueimp-gallery-right",
                playingClass: "blueimp-gallery-playing",
                slideClass: "slide",
                slideLoadingClass: "slide-loading",
                slideErrorClass: "slide-error",
                slideContentClass: "slide-content",
                toggleClass: "toggle",
                prevClass: "prev",
                nextClass: "next",
                closeClass: "close",
                playPauseClass: "play-pause",
                typeProperty: "type",
                titleProperty: "title",
                urlProperty: "href",
                displayTransition: !0,
                clearSlides: !0,
                stretchImages: !1,
                toggleControlsOnReturn: !0,
                toggleSlideshowOnSpace: !0,
                enableKeyboardNavigation: !0,
                closeOnEscape: !0,
                closeOnSlideClick: !0,
                closeOnSwipeUpOrDown: !0,
                emulateTouchEvents: !0,
                hidePageScrollbars: !0,
                disableScroll: !0,
                carousel: !1,
                continuous: !0,
                unloadElements: !0,
                startSlideshow: !1,
                slideshowInterval: 5e3,
                index: 0,
                preloadRange: 2,
                transitionSpeed: 400,
                slideshowTransitionSpeed: void 0,
                event: void 0,
                onopen: void 0,
                onopened: void 0,
                onslide: void 0,
                onslideend: void 0,
                onslidecomplete: void 0,
                onclose: void 0,
                onclosed: void 0
            },
            carouselOptions: {
                hidePageScrollbars: !1,
                toggleControlsOnReturn: !1,
                toggleSlideshowOnSpace: !1,
                enableKeyboardNavigation: !1,
                closeOnEscape: !1,
                closeOnSlideClick: !1,
                closeOnSwipeUpOrDown: !1,
                disableScroll: !1,
                startSlideshow: !0
            },
            support: function (e) {
                var n = {
                        touch: void 0 !== window.ontouchstart || window.DocumentTouch && document instanceof DocumentTouch
                    },
                    i = {
                        webkitTransition: {
                            end: "webkitTransitionEnd",
                            prefix: "-webkit-"
                        },
                        MozTransition: {
                            end: "transitionend",
                            prefix: "-moz-"
                        },
                        OTransition: {
                            end: "otransitionend",
                            prefix: "-o-"
                        },
                        transition: {
                            end: "transitionend",
                            prefix: ""
                        }
                    },
                    o = function () {
                        var t, i, o = n.transition;
                        document.body.appendChild(e), o && (t = o.name.slice(0, -9) + "ransform", void 0 !== e.style[t] && (e.style[t] = "translateZ(0)", i = window.getComputedStyle(e).getPropertyValue(o.prefix + "transform"), n.transform = {
                            prefix: o.prefix,
                            name: t,
                            translate: !0,
                            translateZ: !!i && "none" !== i
                        })), void 0 !== e.style.backgroundSize && (n.backgroundSize = {}, e.style.backgroundSize = "contain", n.backgroundSize.contain = "contain" === window.getComputedStyle(e).getPropertyValue("background-size"), e.style.backgroundSize = "cover", n.backgroundSize.cover = "cover" === window.getComputedStyle(e).getPropertyValue("background-size")), document.body.removeChild(e)
                    };
                return function (t, n) {
                    var i;
                    for (i in n)
                        if (n.hasOwnProperty(i) && void 0 !== e.style[i]) {
                            t.transition = n[i], t.transition.name = i;
                            break
                        }
                }(n, i), document.body ? o() : t(document).on("DOMContentLoaded", o), n
            }(document.createElement("div")),
            requestAnimationFrame: window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame,
            initialize: function () {
                return this.initStartIndex(), this.initWidget() === !1 ? !1 : (this.initEventListeners(), this.onslide(this.index), this.ontransitionend(), void(this.options.startSlideshow && this.play()))
            },
            slide: function (t, e) {
                window.clearTimeout(this.timeout);
                var n, i, o, r = this.index;
                if (r !== t && 1 !== this.num) {
                    if (e || (e = this.options.transitionSpeed), this.support.transition) {
                        for (this.options.continuous || (t = this.circle(t)), n = Math.abs(r - t) / (r - t), this.options.continuous && (i = n, n = -this.positions[this.circle(t)] / this.slideWidth, n !== i && (t = -n * this.num + t)), o = Math.abs(r - t) - 1; o;) o -= 1, this.move(this.circle((t > r ? t : r) - o - 1), this.slideWidth * n, 0);
                        t = this.circle(t), this.move(r, this.slideWidth * n, e), this.move(t, 0, e), this.options.continuous && this.move(this.circle(t - n), -(this.slideWidth * n), 0)
                    } else t = this.circle(t), this.animate(r * -this.slideWidth, t * -this.slideWidth, e);
                    this.onslide(t)
                }
            },
            getIndex: function () {
                return this.index
            },
            getNumber: function () {
                return this.num
            },
            prev: function () {
                (this.options.continuous || this.index) && this.slide(this.index - 1)
            },
            next: function () {
                (this.options.continuous || this.index < this.num - 1) && this.slide(this.index + 1)
            },
            play: function (t) {
                var e = this;
                window.clearTimeout(this.timeout), this.interval = t || this.options.slideshowInterval, this.elements[this.index] > 1 && (this.timeout = this.setTimeout(!this.requestAnimationFrame && this.slide || function (t, n) {
                    e.animationFrameId = e.requestAnimationFrame.call(window, function () {
                        e.slide(t, n)
                    })
                }, [this.index + 1, this.options.slideshowTransitionSpeed], this.interval)), this.container.addClass(this.options.playingClass)
            },
            pause: function () {
                window.clearTimeout(this.timeout), this.interval = null, this.container.removeClass(this.options.playingClass)
            },
            add: function (t) {
                var e;
                for (t.concat || (t = Array.prototype.slice.call(t)), this.list.concat || (this.list = Array.prototype.slice.call(this.list)), this.list = this.list.concat(t), this.num = this.list.length, this.num > 2 && null === this.options.continuous && (this.options.continuous = !0, this.container.removeClass(this.options.leftEdgeClass)), this.container.removeClass(this.options.rightEdgeClass).removeClass(this.options.singleClass), e = this.num - t.length; e < this.num; e += 1) this.addSlide(e), this.positionSlide(e);
                this.positions.length = this.num, this.initSlides(!0)
            },
            resetSlides: function () {
                this.slidesContainer.empty(), this.slides = []
            },
            handleClose: function () {
                var t = this.options;
                this.destroyEventListeners(), this.pause(), this.container[0].style.display = "none", this.container.removeClass(t.displayClass).removeClass(t.singleClass).removeClass(t.leftEdgeClass).removeClass(t.rightEdgeClass), t.hidePageScrollbars && (document.body.style.overflow = this.bodyOverflowStyle), this.options.clearSlides && this.resetSlides(), this.options.onclosed && this.options.onclosed.call(this)
            },
            close: function () {
                var t = this,
                    e = function (n) {
                        n.target === t.container[0] && (t.container.off(t.support.transition.end, e), t.handleClose())
                    };
                this.options.onclose && this.options.onclose.call(this), this.support.transition && this.options.displayTransition ? (this.container.on(this.support.transition.end, e), this.container.removeClass(this.options.displayClass)) : this.handleClose()
            },
            circle: function (t) {
                return (this.num + t % this.num) % this.num
            },
            move: function (t, e, n) {
                this.translateX(t, e, n), this.positions[t] = e
            },
            translate: function (t, e, n, i) {
                var o = this.slides[t].style,
                    r = this.support.transition,
                    s = this.support.transform;
                o[r.name + "Duration"] = i + "ms", o[s.name] = "translate(" + e + "px, " + n + "px)" + (s.translateZ ? " translateZ(0)" : "")
            },
            translateX: function (t, e, n) {
                this.translate(t, e, 0, n)
            },
            translateY: function (t, e, n) {
                this.translate(t, 0, e, n)
            },
            animate: function (t, e, n) {
                if (!n) return void(this.slidesContainer[0].style.left = e + "px");
                var i = this,
                    o = (new Date).getTime(),
                    r = window.setInterval(function () {
                        var s = (new Date).getTime() - o;
                        return s > n ? (i.slidesContainer[0].style.left = e + "px", i.ontransitionend(), void window.clearInterval(r)) : void(i.slidesContainer[0].style.left = (e - t) * (Math.floor(s / n * 100) / 100) + t + "px")
                    }, 4)
            },
            preventDefault: function (t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            },
            onresize: function () {
                this.initSlides(!0)
            },
            onmousedown: function (t) {
                t.which && 1 === t.which && "VIDEO" !== t.target.nodeName && ((t.originalEvent || t).touches = [{
                    pageX: t.pageX,
                    pageY: t.pageY
                }], this.ontouchstart(t))
            },
            onmousemove: function (t) {
                this.touchStart && ((t.originalEvent || t).touches = [{
                    pageX: t.pageX,
                    pageY: t.pageY
                }], this.ontouchmove(t))
            },
            onmouseup: function (t) {
                this.touchStart && (this.ontouchend(t), delete this.touchStart)
            },
            onmouseout: function (e) {
                if (this.touchStart) {
                    var n = e.target,
                        i = e.relatedTarget;
                    (!i || i !== n && !t.contains(n, i)) && this.onmouseup(e)
                }
            },
            ontouchstart: function (t) {
                var e = (t.originalEvent || t).touches[0];
                this.touchStart = {
                    x: e.pageX,
                    y: e.pageY,
                    time: Date.now()
                }, this.isScrolling = void 0, this.touchDelta = {}
            },
            ontouchmove: function (t) {
                var e, n, i = (t.originalEvent || t).touches[0],
                    o = (t.originalEvent || t).scale,
                    r = this.index;
                if (!(i.length > 1 || o && 1 !== o))
                    if (this.options.disableScroll && t.preventDefault(), this.touchDelta = {
                        x: i.pageX - this.touchStart.x,
                        y: i.pageY - this.touchStart.y
                    }, e = this.touchDelta.x, void 0 === this.isScrolling && (this.isScrolling = this.isScrolling || Math.abs(e) < Math.abs(this.touchDelta.y)), this.isScrolling) this.options.closeOnSwipeUpOrDown && this.translateY(r, this.touchDelta.y + this.positions[r], 0);
                    else
                        for (t.preventDefault(), window.clearTimeout(this.timeout), this.options.continuous ? n = [this.circle(r + 1), r, this.circle(r - 1)] : (this.touchDelta.x = e /= !r && e > 0 || r === this.num - 1 && 0 > e ? Math.abs(e) / this.slideWidth + 1 : 1, n = [r], r && n.push(r - 1), r < this.num - 1 && n.unshift(r + 1)); n.length;) r = n.pop(), this.translateX(r, e + this.positions[r], 0)
            },
            ontouchend: function () {
                var t, e, n, i, o, r = this.index,
                    s = this.options.transitionSpeed,
                    a = this.slideWidth,
                    l = Number(Date.now() - this.touchStart.time) < 250,
                    u = l && Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.x) > a / 2,
                    c = !r && this.touchDelta.x > 0 || r === this.num - 1 && this.touchDelta.x < 0,
                    h = !u && this.options.closeOnSwipeUpOrDown && (l && Math.abs(this.touchDelta.y) > 20 || Math.abs(this.touchDelta.y) > this.slideHeight / 2);
                this.options.continuous && (c = !1), t = this.touchDelta.x < 0 ? -1 : 1, this.isScrolling ? h ? this.close() : this.translateY(r, 0, s) : u && !c ? (e = r + t, n = r - t, i = a * t, o = -a * t, this.options.continuous ? (this.move(this.circle(e), i, 0), this.move(this.circle(r - 2 * t), o, 0)) : e >= 0 && e < this.num && this.move(e, i, 0), this.move(r, this.positions[r] + i, s), this.move(this.circle(n), this.positions[this.circle(n)] + i, s), r = this.circle(n), this.onslide(r)) : this.options.continuous ? (this.move(this.circle(r - 1), -a, s), this.move(r, 0, s), this.move(this.circle(r + 1), a, s)) : (r && this.move(r - 1, -a, s), this.move(r, 0, s), r < this.num - 1 && this.move(r + 1, a, s))
            },
            ontransitionend: function (t) {
                var e = this.slides[this.index];
                t && e !== t.target || (this.interval && this.play(), this.setTimeout(this.options.onslideend, [this.index, e]))
            },
            oncomplete: function (e) {
                var n, i = e.target || e.srcElement,
                    o = i && i.parentNode;
                i && o && (n = this.getNodeIndex(o), t(o).removeClass(this.options.slideLoadingClass), "error" === e.type ? (t(o).addClass(this.options.slideErrorClass), this.elements[n] = 3) : this.elements[n] = 2, i.clientHeight > this.container[0].clientHeight && (i.style.maxHeight = this.container[0].clientHeight), this.interval && this.slides[this.index] === o && this.play(), this.setTimeout(this.options.onslidecomplete, [n, o]))
            },
            onload: function (t) {
                this.oncomplete(t)
            },
            onerror: function (t) {
                this.oncomplete(t)
            },
            onkeydown: function (t) {
                switch (t.which || t.keyCode) {
                case 13:
                    this.options.toggleControlsOnReturn && (this.preventDefault(t), this.toggleControls());
                    break;
                case 27:
                    this.options.closeOnEscape && this.close();
                    break;
                case 32:
                    this.options.toggleSlideshowOnSpace && (this.preventDefault(t), this.toggleSlideshow());
                    break;
                case 37:
                    this.options.enableKeyboardNavigation && (this.preventDefault(t), this.prev());
                    break;
                case 39:
                    this.options.enableKeyboardNavigation && (this.preventDefault(t), this.next())
                }
            },
            handleClick: function (e) {
                var n = this.options,
                    i = e.target || e.srcElement,
                    o = i.parentNode,
                    r = function (e) {
                        return t(i).hasClass(e) || t(o).hasClass(e)
                    };
                r(n.toggleClass) ? (this.preventDefault(e), this.toggleControls()) : r(n.prevClass) ? (this.preventDefault(e), this.prev()) : r(n.nextClass) ? (this.preventDefault(e), this.next()) : r(n.closeClass) ? (this.preventDefault(e), this.close()) : r(n.playPauseClass) ? (this.preventDefault(e), this.toggleSlideshow()) : o === this.slidesContainer[0] ? (this.preventDefault(e), n.closeOnSlideClick ? this.close() : this.toggleControls()) : o.parentNode && o.parentNode === this.slidesContainer[0] && (this.preventDefault(e), this.toggleControls())
            },
            onclick: function (t) {
                return this.options.emulateTouchEvents && this.touchDelta && (Math.abs(this.touchDelta.x) > 20 || Math.abs(this.touchDelta.y) > 20) ? void delete this.touchDelta : this.handleClick(t)
            },
            updateEdgeClasses: function (t) {
                t ? this.container.removeClass(this.options.leftEdgeClass) : this.container.addClass(this.options.leftEdgeClass), t === this.num - 1 ? this.container.addClass(this.options.rightEdgeClass) : this.container.removeClass(this.options.rightEdgeClass)
            },
            handleSlide: function (t) {
                this.options.continuous || this.updateEdgeClasses(t), this.loadElements(t), this.options.unloadElements && this.unloadElements(t), this.setTitle(t)
            },
            onslide: function (t) {
                this.index = t, this.handleSlide(t), this.setTimeout(this.options.onslide, [t, this.slides[t]])
            },
            setTitle: function (t) {
                var e = this.slides[t].firstChild.title,
                    n = this.titleElement;
                n.length && (this.titleElement.empty(), e && n[0].appendChild(document.createTextNode(e)))
            },
            setTimeout: function (t, e, n) {
                var i = this;
                return t && window.setTimeout(function () {
                    t.apply(i, e || [])
                }, n || 0)
            },
            imageFactory: function (e, n) {
                var i, o, r, s = this,
                    a = this.imagePrototype.cloneNode(!1),
                    l = e,
                    u = this.options.stretchImages,
                    c = function (e) {
                        if (!i) {
                            if (e = {
                                type: e.type,
                                target: o
                            }, !o.parentNode) return s.setTimeout(c, [e]);
                            i = !0, t(a).off("load error", c), u && "load" === e.type && (o.style.background = 'url("' + l + '") center no-repeat', o.style.backgroundSize = u), n(e)
                        }
                    };
                return "string" != typeof l && (l = this.getItemProperty(e, this.options.urlProperty), r = this.getItemProperty(e, this.options.titleProperty)), u === !0 && (u = "contain"), u = this.support.backgroundSize && this.support.backgroundSize[u] && u, u ? o = this.elementPrototype.cloneNode(!1) : (o = a, a.draggable = !1), r && (o.title = r), t(a).on("load error", c), a.src = l, o
            },
            createElement: function (e, n) {
                var i = e && this.getItemProperty(e, this.options.typeProperty),
                    o = i && this[i.split("/")[0] + "Factory"] || this.imageFactory,
                    r = e && o.call(this, e, n);
                return r || (r = this.elementPrototype.cloneNode(!1), this.setTimeout(n, [{
                    type: "error",
                    target: r
                }])), t(r).addClass(this.options.slideContentClass), r
            },
            loadElement: function (e) {
                this.elements[e] || (this.slides[e].firstChild ? this.elements[e] = t(this.slides[e]).hasClass(this.options.slideErrorClass) ? 3 : 2 : (this.elements[e] = 1, t(this.slides[e]).addClass(this.options.slideLoadingClass), this.slides[e].appendChild(this.createElement(this.list[e], this.proxyListener))))
            },
            loadElements: function (t) {
                var e, n = Math.min(this.num, 2 * this.options.preloadRange + 1),
                    i = t;
                for (e = 0; n > e; e += 1) i += e * (e % 2 === 0 ? -1 : 1), i = this.circle(i), this.loadElement(i)
            },
            unloadElements: function (t) {
                var e, n, i;
                for (e in this.elements) this.elements.hasOwnProperty(e) && (i = Math.abs(t - e), i > this.options.preloadRange && i + this.options.preloadRange < this.num && (n = this.slides[e], n.removeChild(n.firstChild), delete this.elements[e]))
            },
            addSlide: function (t) {
                var e = this.slidePrototype.cloneNode(!1);
                e.setAttribute("data-index", t), this.slidesContainer[0].appendChild(e), this.slides.push(e)
            },
            positionSlide: function (t) {
                var e = this.slides[t];
                e.style.width = this.slideWidth + "px", this.support.transition && (e.style.left = t * -this.slideWidth + "px", this.move(t, this.index > t ? -this.slideWidth : this.index < t ? this.slideWidth : 0, 0))
            },
            initSlides: function (e) {
                var n, i;
                for (e || (this.positions = [], this.positions.length = this.num, this.elements = {}, this.imagePrototype = document.createElement("img"), this.elementPrototype = document.createElement("div"), this.slidePrototype = document.createElement("div"), t(this.slidePrototype).addClass(this.options.slideClass), this.slides = this.slidesContainer[0].children, n = this.options.clearSlides || this.slides.length !== this.num), this.slideWidth = this.container[0].offsetWidth, this.slideHeight = this.container[0].offsetHeight, this.slidesContainer[0].style.width = this.num * this.slideWidth + "px", n && this.resetSlides(), i = 0; i < this.num; i += 1) n && this.addSlide(i), this.positionSlide(i);
                this.options.continuous && this.support.transition && (this.move(this.circle(this.index - 1), -this.slideWidth, 0), this.move(this.circle(this.index + 1), this.slideWidth, 0)), this.support.transition || (this.slidesContainer[0].style.left = this.index * -this.slideWidth + "px")
            },
            toggleControls: function () {
                var t = this.options.controlsClass;
                this.container.hasClass(t) ? this.container.removeClass(t) : this.container.addClass(t)
            },
            toggleSlideshow: function () {
                this.interval ? this.pause() : this.play()
            },
            getNodeIndex: function (t) {
                return parseInt(t.getAttribute("data-index"), 10)
            },
            getNestedProperty: function (t, e) {
                return e.replace(/\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g, function (e, n, i, o, r) {
                    var s = r || n || i || o && parseInt(o, 10);
                    e && t && (t = t[s])
                }), t
            },
            getDataProperty: function (e, n) {
                if (e.getAttribute) {
                    var i = e.getAttribute("data-" + n.replace(/([A-Z])/g, "-$1").toLowerCase());
                    if ("string" == typeof i) {
                        if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/.test(i)) try {
                            return t.parseJSON(i)
                        } catch (o) {}
                        return i
                    }
                }
            },
            getItemProperty: function (t, e) {
                var n = t[e];
                return void 0 === n && (n = this.getDataProperty(t, e), void 0 === n && (n = this.getNestedProperty(t, e))), n
            },
            initStartIndex: function () {
                var t, e = this.options.index,
                    n = this.options.urlProperty;
                if (e && "number" != typeof e)
                    for (t = 0; t < this.num; t += 1)
                        if (this.list[t] === e || this.getItemProperty(this.list[t], n) === this.getItemProperty(e, n)) {
                            e = t;
                            break
                        }
                this.index = this.circle(parseInt(e, 10) || 0)
            },
            initEventListeners: function () {
                var e = this,
                    n = this.slidesContainer,
                    i = function (t) {
                        var n = e.support.transition && e.support.transition.end === t.type ? "transitionend" : t.type;
                        e["on" + n](t)
                    };
                t(window).on("resize", i), t(document.body).on("keydown", i), this.container.on("click", i), this.support.touch ? n.on("touchstart touchmove touchend", i) : this.options.emulateTouchEvents && this.support.transition && n.on("mousedown mousemove mouseup mouseout", i), this.support.transition && n.on(this.support.transition.end, i), this.proxyListener = i
            },
            destroyEventListeners: function () {
                var e = this.slidesContainer,
                    n = this.proxyListener;
                t(window).off("resize", n), t(document.body).off("keydown", n), this.container.off("click", n), this.support.touch ? e.off("touchstart touchmove touchend", n) : this.options.emulateTouchEvents && this.support.transition && e.off("mousedown mousemove mouseup mouseout", n), this.support.transition && e.off(this.support.transition.end, n)
            },
            handleOpen: function () {
                this.options.onopened && this.options.onopened.call(this)
            },
            initWidget: function () {
                var e = this,
                    n = function (t) {
                        t.target === e.container[0] && (e.container.off(e.support.transition.end, n), e.handleOpen())
                    };
                return this.container = t(this.options.container), this.container.length ? (this.slidesContainer = this.container.find(this.options.slidesContainer).first(), this.slidesContainer.length ? (this.titleElement = this.container.find(this.options.titleElement).first(), 1 === this.num && this.container.addClass(this.options.singleClass), this.options.onopen && this.options.onopen.call(this), this.support.transition && this.options.displayTransition ? this.container.on(this.support.transition.end, n) : this.handleOpen(), this.options.hidePageScrollbars && (this.bodyOverflowStyle = document.body.style.overflow, document.body.style.overflow = "hidden"), this.container[0].style.display = "block", this.initSlides(), void this.container.addClass(this.options.displayClass)) : !1) : !1
            },
            initOptions: function (e) {
                this.options = t.extend({}, this.options), (e && e.carousel || this.options.carousel && (!e || e.carousel !== !1)) && t.extend(this.options, this.carouselOptions), t.extend(this.options, e), this.num < 3 && (this.options.continuous = this.options.continuous ? null : !1), this.support.transition || (this.options.emulateTouchEvents = !1), this.options.event && this.preventDefault(this.options.event)
            }
        }), e
    }),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
    }(function (t, e) {
        "use strict";
        t.extend(e.prototype.options, {
            fullScreen: !1
        });
        var n = e.prototype.initialize,
            i = e.prototype.handleClose;
        return t.extend(e.prototype, {
            getFullScreenElement: function () {
                return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement
            },
            requestFullScreen: function (t) {
                t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen && t.mozRequestFullScreen()
            },
            exitFullScreen: function () {
                document.exitFullscreen ? document.exitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.mozCancelFullScreen && document.mozCancelFullScreen()
            },
            initialize: function () {
                n.call(this), this.options.fullScreen && !this.getFullScreenElement() && this.requestFullScreen(this.container[0])
            },
            handleClose: function () {
                this.getFullScreenElement() === this.container[0] && this.exitFullScreen(), i.call(this)
            }
        }), e
    }),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
    }(function (t, e) {
        "use strict";
        t.extend(e.prototype.options, {
            indicatorContainer: "ol",
            activeIndicatorClass: "active",
            thumbnailProperty: "thumbnail",
            thumbnailIndicators: !0
        });
        var n = e.prototype.initSlides,
            i = e.prototype.addSlide,
            o = e.prototype.resetSlides,
            r = e.prototype.handleClick,
            s = e.prototype.handleSlide,
            a = e.prototype.handleClose;
        return t.extend(e.prototype, {
            createIndicator: function (e) {
                var n, i, o = this.indicatorPrototype.cloneNode(!1),
                    r = this.getItemProperty(e, this.options.titleProperty),
                    s = this.options.thumbnailProperty;
                return this.options.thumbnailIndicators && (i = e.getElementsByTagName && t(e).find("img")[0], i ? n = i.src : s && (n = this.getItemProperty(e, s)), n && (o.style.backgroundImage = 'url("' + n + '")')), r && (o.title = r), o
            },
            addIndicator: function (t) {
                if (this.indicatorContainer.length) {
                    var e = this.createIndicator(this.list[t]);
                    e.setAttribute("data-index", t), this.indicatorContainer[0].appendChild(e), this.indicators.push(e)
                }
            },
            setActiveIndicator: function (e) {
                this.indicators && (this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), this.activeIndicator = t(this.indicators[e]), this.activeIndicator.addClass(this.options.activeIndicatorClass))
            },
            initSlides: function (t) {
                t || (this.indicatorContainer = this.container.find(this.options.indicatorContainer), this.indicatorContainer.length && (this.indicatorPrototype = document.createElement("li"), this.indicators = this.indicatorContainer[0].children)), n.call(this, t)
            },
            addSlide: function (t) {
                i.call(this, t), this.addIndicator(t)
            },
            resetSlides: function () {
                o.call(this), this.indicatorContainer.empty(), this.indicators = []
            },
            handleClick: function (t) {
                var e = t.target || t.srcElement,
                    n = e.parentNode;
                if (n === this.indicatorContainer[0]) this.preventDefault(t), this.slide(this.getNodeIndex(e));
                else {
                    if (n.parentNode !== this.indicatorContainer[0]) return r.call(this, t);
                    this.preventDefault(t), this.slide(this.getNodeIndex(n))
                }
            },
            handleSlide: function (t) {
                s.call(this, t), this.setActiveIndicator(t)
            },
            handleClose: function () {
                this.activeIndicator && this.activeIndicator.removeClass(this.options.activeIndicatorClass), a.call(this)
            }
        }), e
    }),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
    }(function (t, e) {
        "use strict";
        return t.extend(e.prototype.options, {
            videoContentClass: "video-content",
            videoLoadingClass: "video-loading",
            videoPlayingClass: "video-playing",
            videoPosterProperty: "poster",
            videoSourcesProperty: "sources"
        }), e.prototype.videoFactory = function (e, n, i) {
            var o, r, s, a, l, u = this,
                c = this.options,
                h = this.elementPrototype.cloneNode(!1),
                p = t(h),
                d = [{
                    type: "error",
                    target: h
                }],
                f = i || document.createElement("video"),
                g = this.getItemProperty(e, c.urlProperty),
                m = this.getItemProperty(e, c.typeProperty),
                v = this.getItemProperty(e, c.titleProperty),
                y = this.getItemProperty(e, c.videoPosterProperty),
                b = this.getItemProperty(e, c.videoSourcesProperty);
            if (p.addClass(c.videoContentClass), v && (h.title = v), f.canPlayType)
                if (g && m && f.canPlayType(m)) f.src = g;
                else
                    for (; b && b.length;)
                        if (r = b.shift(), g = this.getItemProperty(r, c.urlProperty), m = this.getItemProperty(r, c.typeProperty), g && m && f.canPlayType(m)) {
                            f.src = g;
                            break
                        }
            return y && (f.poster = y, o = this.imagePrototype.cloneNode(!1), t(o).addClass(c.toggleClass), o.src = y, o.draggable = !1, h.appendChild(o)), s = document.createElement("a"), s.setAttribute("target", "_blank"), i || s.setAttribute("download", v), s.href = g, f.src && (f.controls = !0, (i || t(f)).on("error", function () {
                u.setTimeout(n, d)
            }).on("pause", function () {
                a = !1, p.removeClass(u.options.videoLoadingClass).removeClass(u.options.videoPlayingClass), l && u.container.addClass(u.options.controlsClass), u.interval && u.play()
            }).on("playing", function () {
                a = !1, p.removeClass(u.options.videoLoadingClass).addClass(u.options.videoPlayingClass), u.container.hasClass(u.options.controlsClass) ? (l = !0, u.container.removeClass(u.options.controlsClass)) : l = !1
            }).on("play", function () {
                window.clearTimeout(u.timeout), a = !0, p.addClass(u.options.videoLoadingClass)
            }), t(s).on("click", function (t) {
                u.preventDefault(t), a ? f.pause() : f.play()
            }), h.appendChild(i && i.element || f)), h.appendChild(s), this.setTimeout(n, [{
                type: "load",
                target: h
            }]), h
        }, e
    }),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
    }(function (t, e) {
        "use strict";
        if (!window.postMessage) return e;
        t.extend(e.prototype.options, {
            vimeoVideoIdProperty: "vimeo",
            vimeoPlayerUrl: "//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",
            vimeoPlayerIdPrefix: "vimeo-player-",
            vimeoClickToPlay: !0
        });
        var n = e.prototype.textFactory || e.prototype.imageFactory,
            i = function (t, e, n, i) {
                this.url = t, this.videoId = e, this.playerId = n, this.clickToPlay = i, this.element = document.createElement("div"), this.listeners = {}
            },
            o = 0;
        return t.extend(i.prototype, {
            canPlayType: function () {
                return !0
            },
            on: function (t, e) {
                return this.listeners[t] = e, this
            },
            loadAPI: function () {
                for (var e, n, i = this, o = "//" + ("https" === location.protocol ? "secure-" : "") + "a.vimeocdn.com/js/froogaloop2.min.js", r = document.getElementsByTagName("script"), s = r.length, a = function () {
                    !n && i.playOnReady && i.play(), n = !0
                }; s;)
                    if (s -= 1, r[s].src === o) {
                        e = r[s];
                        break
                    }
                e || (e = document.createElement("script"), e.src = o), t(e).on("load", a), r[0].parentNode.insertBefore(e, r[0]), /loaded|complete/.test(e.readyState) && a()
            },
            onReady: function () {
                var t = this;
                this.ready = !0, this.player.addEvent("play", function () {
                    t.hasPlayed = !0, t.onPlaying()
                }), this.player.addEvent("pause", function () {
                    t.onPause()
                }), this.player.addEvent("finish", function () {
                    t.onPause()
                }), this.playOnReady && this.play()
            },
            onPlaying: function () {
                this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
            },
            onPause: function () {
                this.listeners.pause(), delete this.playStatus
            },
            insertIframe: function () {
                var t = document.createElement("iframe");
                t.src = this.url.replace("VIDEO_ID", this.videoId).replace("PLAYER_ID", this.playerId), t.id = this.playerId, this.element.parentNode.replaceChild(t, this.element), this.element = t
            },
            play: function () {
                var t = this;
                this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.api("play") : (this.playOnReady = !0, window.$f ? this.player || (this.insertIframe(), this.player = $f(this.element), this.player.addEvent("ready", function () {
                    t.onReady()
                })) : this.loadAPI())
            },
            pause: function () {
                this.ready ? this.player.api("pause") : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
            }
        }), t.extend(e.prototype, {
            VimeoPlayer: i,
            textFactory: function (t, e) {
                var r = this.getItemProperty(t, this.options.vimeoVideoIdProperty);
                return r ? (o += 1, this.videoFactory(t, e, new i(this.options.vimeoPlayerUrl, r, this.options.vimeoPlayerIdPrefix + o, this.options.vimeoClickToPlay))) : n.call(this, t, e)
            }
        }), e
    }),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["./blueimp-helper", "./blueimp-gallery-video"], t) : t(window.blueimp.helper || window.jQuery, window.blueimp.Gallery)
    }(function (t, e) {
        "use strict";
        if (!window.postMessage) return e;
        t.extend(e.prototype.options, {
            youTubeVideoIdProperty: "youtube",
            youTubePlayerVars: {
                wmode: "transparent"
            },
            youTubeClickToPlay: !0
        });
        var n = e.prototype.textFactory || e.prototype.imageFactory,
            i = function (t, e, n) {
                this.videoId = t, this.playerVars = e, this.clickToPlay = n, this.element = document.createElement("div"), this.listeners = {}
            };
        return t.extend(i.prototype, {
            canPlayType: function () {
                return !0
            },
            on: function (t, e) {
                return this.listeners[t] = e, this
            },
            loadAPI: function () {
                var t, e = this,
                    n = window.onYouTubeIframeAPIReady,
                    i = "//www.youtube.com/iframe_api",
                    o = document.getElementsByTagName("script"),
                    r = o.length;
                for (window.onYouTubeIframeAPIReady = function () {
                    n && n.apply(this), e.playOnReady && e.play()
                }; r;)
                    if (r -= 1, o[r].src === i) return;
                t = document.createElement("script"), t.src = i, o[0].parentNode.insertBefore(t, o[0])
            },
            onReady: function () {
                this.ready = !0, this.playOnReady && this.play()
            },
            onPlaying: function () {
                this.playStatus < 2 && (this.listeners.playing(), this.playStatus = 2)
            },
            onPause: function () {
                e.prototype.setTimeout.call(this, this.checkSeek, null, 2e3)
            },
            checkSeek: function () {
                (this.stateChange === YT.PlayerState.PAUSED || this.stateChange === YT.PlayerState.ENDED) && (this.listeners.pause(), delete this.playStatus)
            },
            onStateChange: function (t) {
                switch (t.data) {
                case YT.PlayerState.PLAYING:
                    this.hasPlayed = !0, this.onPlaying();
                    break;
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.ENDED:
                    this.onPause()
                }
                this.stateChange = t.data
            },
            onError: function (t) {
                this.listeners.error(t)
            },
            play: function () {
                var t = this;
                this.playStatus || (this.listeners.play(), this.playStatus = 1), this.ready ? !this.hasPlayed && (this.clickToPlay || window.navigator && /iP(hone|od|ad)/.test(window.navigator.platform)) ? this.onPlaying() : this.player.playVideo() : (this.playOnReady = !0, window.YT && YT.Player ? this.player || (this.player = new YT.Player(this.element, {
                    videoId: this.videoId,
                    playerVars: this.playerVars,
                    events: {
                        onReady: function () {
                            t.onReady()
                        },
                        onStateChange: function (e) {
                            t.onStateChange(e)
                        },
                        onError: function (e) {
                            t.onError(e)
                        }
                    }
                })) : this.loadAPI())
            },
            pause: function () {
                this.ready ? this.player.pauseVideo() : this.playStatus && (delete this.playOnReady, this.listeners.pause(), delete this.playStatus)
            }
        }), t.extend(e.prototype, {
            YouTubePlayer: i,
            textFactory: function (t, e) {
                var o = this.getItemProperty(t, this.options.youTubeVideoIdProperty);
                return o ? this.videoFactory(t, e, new i(o, this.options.youTubePlayerVars, this.options.youTubeClickToPlay)) : n.call(this, t, e)
            }
        }), e
    }),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery", "./blueimp-gallery"], t) : t(window.jQuery, window.blueimp.Gallery)
    }(function (t, e) {
        "use strict";
        t(document).on("click", "[data-gallery]", function (n) {
            var i = t(this).data("gallery"),
                o = t(i),
                r = o.length && o || t(e.prototype.options.container),
                s = {
                    onopen: function () {
                        r.data("gallery", this).trigger("open")
                    },
                    onopened: function () {
                        r.trigger("opened")
                    },
                    onslide: function () {
                        r.trigger("slide", arguments)
                    },
                    onslideend: function () {
                        r.trigger("slideend", arguments)
                    },
                    onslidecomplete: function () {
                        r.trigger("slidecomplete", arguments)
                    },
                    onclose: function () {
                        r.trigger("close")
                    },
                    onclosed: function () {
                        r.trigger("closed").removeData("gallery")
                    }
                },
                a = t.extend(r.data(), {
                    container: r[0],
                    index: this,
                    event: n
                }, s),
                l = t('[data-gallery="' + i + '"]');
            return a.filter && (l = l.filter(a.filter)), new e(l, a)
        })
    }), $(".news-master-share-inner").sharrre({
        share: {
            twitter: !0,
            facebook: !0,
            googlePlus: !0
        },
        template: '<div class="box"><div class="left">Share</div><div class="middle"><a href="#" class="news-m-facebook">f</a><a href="#" class="news-m-twitter">t</a><a href="#" class="news-m-googleplus">+1</a></div><div class="right">{total}</div></div>',
        enableHover: !1,
        enableTracking: !0,
        render: function (t) {
            $(t.element).on("click", ".news-m-twitter", function () {
                t.openPopup("twitter")
            }), $(t.element).on("click", ".news-m-facebook", function () {
                t.openPopup("facebook")
            }), $(t.element).on("click", ".news-m-googleplus", function () {
                t.openPopup("googlePlus")
            })
        }
    });

