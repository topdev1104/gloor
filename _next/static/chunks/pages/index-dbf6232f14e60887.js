(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        89915: function (e, t, r) {
            "use strict";
            r.d(t, {
                Z: function () {
                    return f
                }
            });
            var n = r(7177),
                s = r(25081),
                a = r(4401),
                i = r(57495),
                o = r(88767),
                l = r(21046),
                c = r(70452);
            var d = () => {
                const {
                    chainId: e
                } = (0, i.K)(), t = (0, c.m)((0, s.Z)(n.aj, e), (0, s.Z)(n.VX, e)) || l._Y, r = (0, c.m)((0, s.Z)(n.aj, e), (0, s.Z)(n.HX, e)) || l._Y;
                return null === t || void 0 === t ? void 0 : t.add(r)
            },
                u = r(54880),
                p = r(38076),
                m = r(7205);
            var f = () => {
                const {
                    chainId: e
                } = (0, i.K)(), t = d(), {
                    data: r
                } = (0, p.Z)((0, s.Z)(n.aj, e)), {
                    data: l
                } = (0, m.Z)(), {
                    data: c
                } = (0, u.Z)(), f = t.add((0, a.Gc)((null === c || void 0 === c ? void 0 : c.totalValueLockedToken1) || "0"));
                return (0, o.useQuery)(["amountStaked", `${l}`, `${r}`, `${f}`], (() => {
                    const e = Math.min(Number((0, a.oJ)(null === l || void 0 === l ? void 0 : l.mul(a.D_).div(null !== r && void 0 !== r && r.gt(0) ? r.sub(f) : "1"), 4)), 1);
                    return {
                        total: l,
                        percent: e
                    }
                }), {
                    enabled: !!l && !!r && !!f,
                    refetchInterval: !1
                })
            }
        },
        7205: function (e, t, r) {
            "use strict";
            r.d(t, {
                Z: function () {
                    return d
                }
            });
            var n = r(7177),
                s = r(28828),
                a = r(25081),
                i = r(92343);
            var o = async ({
                chainId: e,
                provider: t
            }) => {
                const r = new i.Z(e, (0, a.Z)(n.CR, e), s, t);
                return await r.circulatingSupply()
            }, l = r(57495), c = r(88767);
            var d = () => {
                const {
                    chainId: e,
                    library: t
                } = (0, l.K)();
                return (0, c.useQuery)(["circulatingSupply", e], (() => o({
                    chainId: e,
                    provider: t
                })), {
                    enabled: !!e
                })
            }
        },
        38076: function (e, t, r) {
            "use strict";
            var n = r(59499),
                s = r(53279),
                a = r(57495),
                i = r(88767);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            t.Z = (e, t) => {
                const {
                    library: r,
                    chainId: l
                } = (0, a.K)();
                return (0, i.useQuery)(["totalSupply", l, e], (() => (0, s.Z)({
                    chainId: l,
                    provider: r,
                    tokenAddress: e
                })), function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(r), !0).forEach((function (t) {
                            (0, n.Z)(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }({
                    enabled: !(!l || !e)
                }, t))
            }
        },
        21010: function (e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function () {
                    return v
                }
            });
            var n = r(48541),
                s = r(10768),
                a = r(30776),
                i = r(41664),
                o = r(54490),
                l = r(44012),
                c = r(92401),
                d = r(89915),
                u = r(2949),
                p = r(97735),
                m = r(58709),
                f = r(88943),
                h = r(58054),
                x = r(85893);
            var y = () => {
                const {
                    data: e,
                    status: t
                } = (0, n.Z)(), {
                    data: r,
                    status: y
                } = (0, d.Z)(), {
                    data: b,
                    status: j
                } = (0, u.Z)();
                return (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsxs)("div", {
                        className: "flex flex-col items-center justify-center w-full flex-1 py-10 px-4 sm:px-10 md:px-20 text-center font-mono hero-gradient",
                        children: [(0, x.jsx)("h1", {
                            className: "text-3xl font-bold mt-auto mb-4",
                            children: (0, x.jsx)(i.default, {
                                href: "/",
                                children: (0, x.jsx)("a", {
                                    className: "text-teal-300 text-glow",
                                    children: (0, x.jsx)(l.Z, {
                                        id: "home.hero.title"
                                    })
                                })
                            })
                        }), (0, x.jsx)("p", {
                            className: "my-4 text-xl",
                            children: (0, x.jsx)(l.Z, {
                                id: "home.hero.text"
                            })
                        }), (0, x.jsxs)("div", {
                            className: "my-4 space-x-6",
                            children: [(0, x.jsx)(s.ZP, {
                                kind: a.hY.LINK,
                                href: "https://docs.floor.xyz",
                                children: (0, x.jsx)(l.Z, {
                                    id: "home.hero.action.learn"
                                })
                            }), (0, x.jsx)(i.default, {
                                href: "/bond",
                                passHref: !0,
                                children: (0, x.jsx)(s.ZP, {
                                    children: (0, x.jsx)(l.Z, {
                                        id: "home.hero.action.bond"
                                    })
                                })
                            })]
                        }), (0, x.jsx)("div", {
                            className: "mt-auto",
                            children: (0, x.jsx)(c.Z, {
                                dividers: !0,
                                statistics: [{
                                    key: "apy",
                                    label: (0, x.jsx)(l.Z, {
                                        id: "home.stats.apy"
                                    }),
                                    value: "success" === t ? (0, x.jsx)(m.Z, {
                                        value: e
                                    }) : "\u2014"
                                }, {
                                    key: "treasury",
                                    label: (0, x.jsx)(l.Z, {
                                        id: "home.stats.treasury"
                                    }),
                                    value: "success" === j ? (0, x.jsx)(p.Z, {
                                        value: b,
                                        maximumFractionDigits: 0
                                    }) : "\u2014"
                                }, {
                                    key: "staked",
                                    label: (0, x.jsxs)(f.Tooltip, {
                                        styles: {
                                            wrapper: {
                                                zIndex: 10,
                                                color: "inherit",
                                                display: "inline-flex",
                                                alignItems: "center"
                                            },
                                            content: {
                                                backgroundColor: "black"
                                            },
                                            arrow: {},
                                            tooltip: {
                                                backgroundColor: "black"
                                            },
                                            gap: {}
                                        },
                                        content: (0, x.jsx)(l.Z, {
                                            id: "stakedDisclaimer"
                                        }),
                                        children: [(0, x.jsx)("span", {
                                            className: "mr-1",
                                            children: (0, x.jsx)(l.Z, {
                                                id: "home.stats.staked"
                                            })
                                        }), (0, x.jsx)(h.ZP, {
                                            name: h.PJ.INFORMATION_CIRCLE,
                                            size: h.$u.SMALL,
                                            className: "text-white"
                                        })]
                                    }),
                                    value: "success" === y && null !== r && void 0 !== r && r.percent ? (0, x.jsx)(o.BK, {
                                        style: "percent",
                                        value: r.percent,
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }) : "\u2014"
                                }]
                            })
                        })]
                    }), (0, x.jsx)("div", {
                        className: "bg-gray-900 py-10 md:py-32 px-6 sm:px-10 md:px-20 teal-inset antialiased",
                        children: (0, x.jsxs)("div", {
                            className: "container mx-auto grid grid-cols-2 gap-16 place-items-center",
                            children: [(0, x.jsxs)("div", {
                                className: "",
                                children: [(0, x.jsx)("h4", {
                                    className: "text-teal-500 mb-4",
                                    children: (0, x.jsx)(l.Z, {
                                        id: "home.yield.title"
                                    })
                                }), (0, x.jsx)("p", {
                                    className: "text-gray-100 max-w-prose",
                                    children: (0, x.jsx)(l.Z, {
                                        id: "home.yield.text"
                                    })
                                })]
                            }), (0, x.jsx)("div", {
                                children: (0, x.jsx)("img", {
                                    src: "/images/punks-graphic-1000w.svg",
                                    className: "w-80 max-w-full teal-filter",
                                    alt: "CryptoPunks"
                                })
                            }), (0, x.jsx)("div", {
                                children: (0, x.jsx)("img", {
                                    src: "/images/pepe-graphic-1000w.svg",
                                    className: "w-80 max-w-full teal-filter",
                                    alt: "Pepe"
                                })
                            }), (0, x.jsxs)("div", {
                                children: [(0, x.jsx)("h4", {
                                    className: "text-teal-500 mb-4",
                                    children: (0, x.jsx)(l.Z, {
                                        id: "home.rewards.title"
                                    })
                                }), (0, x.jsx)("p", {
                                    className: "text-gray-100 max-w-prose",
                                    children: (0, x.jsx)(l.Z, {
                                        id: "home.rewards.text"
                                    })
                                })]
                            }), (0, x.jsxs)("div", {
                                children: [(0, x.jsx)("h4", {
                                    className: "text-teal-500 mb-4",
                                    children: (0, x.jsx)(l.Z, {
                                        id: "home.treasury.title"
                                    })
                                }), (0, x.jsx)("p", {
                                    className: "text-gray-100 max-w-prose",
                                    children: (0, x.jsx)(l.Z, {
                                        id: "home.treasury.text",
                                        values: {
                                            b: e => (0, x.jsx)("b", {
                                                className: "text-teal-500 normal-case",
                                                children: e
                                            })
                                        }
                                    })
                                })]
                            }), (0, x.jsx)("div", {
                                children: (0, x.jsx)("img", {
                                    src: "/images/treasure-graphic-1000w.svg",
                                    className: "w-80 max-w-full teal-filter",
                                    alt: "Treasury"
                                })
                            })]
                        })
                    })]
                })
            },
                b = r(9008),
                j = r(86896);

            function v() {
                const {
                    formatMessage: e
                } = (0, j.Z)();
                return (0, x.jsxs)(x.Fragment, {
                    children: [(0, x.jsxs)(b.default, {
                        children: [(0, x.jsx)("title", {
                            children: e({
                                id: "meta.index.title"
                            })
                        }), (0, x.jsx)("meta", {
                            name: "description",
                            content: e({
                                id: "meta.index.description"
                            })
                        }), (0, x.jsx)("meta", {
                            property: "og:title",
                            name: "twitter:title",
                            content: e({
                                id: "common.floordao"
                            })
                        }), (0, x.jsx)("meta", {
                            property: "og:description",
                            name: "twitter:description",
                            content: e({
                                id: "meta.index.description"
                            })
                        })]
                    }), (0, x.jsx)(y, {})]
                })
            }
        },
        92401: function (e, t, r) {
            "use strict";
            r.d(t, {
                Z: function () {
                    return a
                }
            });
            var n = r(67294),
                s = r(85893);
            var a = ({
                statistics: e,
                dividers: t
            }) => (0, s.jsx)("div", {
                className: "py-8 inline-flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-12 md:space-x-20 lg:space-x-24 xl:space-x-36",
                children: null === e || void 0 === e ? void 0 : e.map(((e, r) => (0, s.jsxs)(n.Fragment, {
                    children: [0 !== r && t ? (0, s.jsx)("div", {
                        className: "hidden sm:block flex-none w-0.5 h-8 bg-teal-700"
                    }) : null, (0, s.jsxs)("div", {
                        className: "text-center",
                        children: [(0, s.jsx)("h5", {
                            className: "mb-2 sm:mb-4 opacity-75",
                            children: e.label
                        }), (0, s.jsx)("b", {
                            className: "text-3xl",
                            children: e.value
                        })]
                    })]
                }, e.key)))
            })
        },
        45301: function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return r(21010)
            }])
        },
        92703: function (e, t, r) {
            "use strict";
            var n = r(50414);

            function s() { }

            function a() { }
            a.resetWarningCache = s, e.exports = function () {
                function e(e, t, r, s, a, i) {
                    if (i !== n) {
                        var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw o.name = "Invariant Violation", o
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: a,
                    resetWarningCache: s
                };
                return r.PropTypes = r, r
            }
        },
        45697: function (e, t, r) {
            e.exports = r(92703)()
        },
        50414: function (e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        87873: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function () {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, r, n) {
                    return r && e(t.prototype, r), n && e(t, n), t
                }
            }(),
                s = o(r(67294)),
                a = o(r(73935)),
                i = o(r(45697));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = function (e) {
                function t(e) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return r.styles = {
                        wrapper: {
                            position: "relative",
                            display: "inline-block",
                            zIndex: "98",
                            color: "#555",
                            cursor: "help"
                        },
                        tooltip: {
                            position: "absolute",
                            zIndex: "99",
                            minWidth: "200px",
                            maxWidth: "420px",
                            background: "#000",
                            bottom: "100%",
                            left: "50%",
                            marginBottom: "10px",
                            padding: "5px",
                            WebkitTransform: "translateX(-50%)",
                            msTransform: "translateX(-50%)",
                            OTransform: "translateX(-50%)",
                            transform: "translateX(-50%)"
                        },
                        content: {
                            background: "#000",
                            color: "#fff",
                            display: "inline",
                            fontSize: ".8em",
                            padding: ".3em 1em"
                        },
                        arrow: {
                            position: "absolute",
                            width: "0",
                            height: "0",
                            bottom: "-5px",
                            left: "50%",
                            marginLeft: "-5px",
                            borderLeft: "solid transparent 5px",
                            borderRight: "solid transparent 5px",
                            borderTop: "solid #000 5px"
                        },
                        gap: {
                            position: "absolute",
                            width: "100%",
                            height: "20px",
                            bottom: "-20px"
                        }
                    }, r.mergeStyles = function (e) {
                        Object.keys(r.styles).forEach((function (t) {
                            Object.assign(r.styles[t], e[t])
                        }))
                    }, r.show = function () {
                        return r.setVisibility(!0)
                    }, r.hide = function () {
                        return r.setVisibility(!1)
                    }, r.setVisibility = function (e) {
                        r.setState(Object.assign({}, r.state, {
                            visible: e
                        }))
                    }, r.handleTouch = function () {
                        r.show(), r.assignOutsideTouchHandler()
                    }, r.assignOutsideTouchHandler = function () {
                        document.addEventListener("touchstart", (function e(t) {
                            for (var n = t.target, s = a.default.findDOMNode(r.refs.instance); n.parentNode;) {
                                if (n === s) return;
                                n = n.parentNode
                            }
                            n === document && (r.hide(), document.removeEventListener("touchstart", e))
                        }))
                    }, r.state = {
                        visible: !1
                    }, e.styles && r.mergeStyles(e.styles), r
                }
                return function (e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), n(t, [{
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = this.state,
                            r = this.styles,
                            n = this.show,
                            a = this.hide,
                            i = this.handleTouch;
                        return s.default.createElement("div", {
                            onMouseEnter: n,
                            onMouseLeave: a,
                            onTouchStart: i,
                            ref: "wrapper",
                            style: r.wrapper
                        }, e.children, t.visible && s.default.createElement("div", {
                            ref: "tooltip",
                            style: r.tooltip
                        }, s.default.createElement("div", {
                            ref: "content",
                            style: r.content
                        }, e.content), s.default.createElement("div", {
                            ref: "arrow",
                            style: r.arrow
                        }), s.default.createElement("div", {
                            ref: "gap",
                            style: r.gap
                        })))
                    }
                }]), t
            }(s.default.Component);
            l.propTypes = {
                children: i.default.any.isRequired,
                content: i.default.oneOfType([i.default.string, i.default.array]),
                styles: i.default.object
            }, t.default = l
        },
        88943: function (e, t, r) {
            "use strict";
            var n, s = r(87873),
                a = (n = s) && n.__esModule ? n : {
                    default: n
                };
            e.exports = {
                Tooltip: a.default
            }
        }
    },
    function (e) {
        e.O(0, [9774, 2888, 179], (function () {
            return t = 45301, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);