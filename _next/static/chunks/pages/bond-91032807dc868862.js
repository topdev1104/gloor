(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2905], {
        1750: function (e, s, t) {
            "use strict";
            t.d(s, {
                E: function () {
                    return a
                }
            });
            var i = t(21225),
                n = t(21046);

            function a(e, s) {
                if (!e || !s) return 0;
                if (s.eq(0)) return 0;
                try {
                    const t = s.gt(e) ? s : e,
                        a = s.lt(e) ? s : e,
                        r = t.sub(a).mul(n.Ce).div(a.gt(0) ? a : "1"),
                        l = (0, i.Z)(r);
                    return a.eq(e) ? 0 - l : l
                } catch {
                    return 0
                }
            }
        },
        94944: function (e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function () {
                    return L
                }
            });
            var i = t(9008),
                n = t(86896),
                a = t(67294),
                r = t(85893);
            var l = ({
                children: e
            }) => (0, r.jsx)("div", {
                className: "w-full max-w-6xl mx-auto",
                children: (0, r.jsx)("div", {
                    className: "px-6",
                    children: (0, r.jsx)("div", {
                        className: "mt-20 space-y-12",
                        children: e
                    })
                })
            }),
                c = t(59499),
                d = t(51971),
                o = t(76250),
                m = t(90004),
                u = t(1750),
                x = t(57495),
                p = t(5152),
                j = t(44012),
                h = t(50036),
                f = t(54490),
                v = t(3645),
                g = t(21225);
            var b = ({
                name: e,
                slp: s,
                capacityUsed: t,
                amountBonded: i
            }) => {
                const n = (0, g.Z)(i),
                    a = (0, g.Z)(t);
                return (0, r.jsx)(h.Z, {
                    darken: !0,
                    children: (0, r.jsxs)("div", {
                        className: "sm:flex sm:items-center",
                        children: [(0, r.jsxs)("div", {
                            className: "inline-flex items-center",
                            children: [(0, r.jsx)(v.Z, {
                                size: 32,
                                slp: s,
                                name: e
                            }), (0, r.jsx)("span", {
                                className: "mx-2",
                                children: null === e || void 0 === e ? void 0 : e.toUpperCase()
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "ml-auto sm:flex sm:space-x-8 sm:items-center mt-4 sm:mt-0",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center justify-between sm:justify-start",
                                children: [(0, r.jsx)("h5", {
                                    className: "mr-2 text-gray-600",
                                    children: (0, r.jsx)(j.Z, {
                                        id: "bond.ended.sold"
                                    })
                                }), (0, r.jsxs)("span", {
                                    className: "text-white",
                                    children: [(0, r.jsx)(f.BK, {
                                        value: a,
                                        maximumFractionDigits: 0,
                                        minimumFractionDigits: 0
                                    }), " ", (0, r.jsx)(j.Z, {
                                        id: "common.floor"
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center justify-between sm:justify-start",
                                children: [(0, r.jsx)("h5", {
                                    className: "mr-2 text-gray-600",
                                    children: (0, r.jsx)(j.Z, {
                                        id: "bond.ended.acquired"
                                    })
                                }), (0, r.jsxs)("span", {
                                    className: "text-white",
                                    children: [(0, r.jsx)(f.BK, {
                                        value: n,
                                        maximumFractionDigits: 3,
                                        minimumFractionDigits: 2
                                    }), " ", e]
                                })]
                            })]
                        })]
                    })
                })
            },
                y = t(49263),
                N = t(58054),
                w = t(97735),
                Z = t(50772),
                P = t(62205),
                O = t(58668);
            var k = ({
                activeBonds: e,
                inactiveBonds: s,
                floorPrice: t,
                chainId: i
            }) => {
                const n = (0, a.useRef)(),
                    l = (0, a.useRef)(),
                    {
                        0: c,
                        1: d
                    } = (0, a.useState)(!1),
                    o = (0, a.useCallback)((e => {
                        var s;
                        null !== l && void 0 !== l && null !== (s = l.current) && void 0 !== s && s.contains(e.target) || d(!1)
                    }), []);
                return (0, P.Z)(n, o), (0, r.jsxs)("div", {
                    children: [(0, r.jsxs)("header", {
                        className: "flex items-center justify-between flex-wrap relative",
                        children: [(0, r.jsx)("h3", {
                            className: "mr-4 sm:w-auto w-full mb-4 sm:mb-0",
                            children: (0, r.jsx)(j.Z, {
                                id: "bonds.title"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "flex w-full sm:w-auto",
                            children: [null !== t && void 0 !== t && t.gt(0) ? (0, r.jsxs)("a", {
                                className: "bg-gray-800 p-4 mr-4 rounded-md flex-1 inline-flex justify-center md:justify-between items-center hover:bg-gray-700",
                                href: (0, O.MP)({
                                    chainId: i
                                }),
                                target: "_blank",
                                rel: "nofollow noreferrer",
                                children: [(0, r.jsx)("h5", {
                                    className: "mr-2 text-gray-600",
                                    children: (0, r.jsx)(j.Z, {
                                        id: "bonds.marketPrice",
                                        values: {
                                            b: e => (0, r.jsx)("b", {
                                                className: "text-teal-500",
                                                children: e
                                            })
                                        }
                                    })
                                }), (0, r.jsx)("span", {
                                    className: "text-white",
                                    children: (0, r.jsx)(w.Z, {
                                        value: t
                                    })
                                }), (0, r.jsx)(N.ZP, {
                                    name: N.PJ.EXTERNAL_LINK,
                                    size: N.$u.SMALL,
                                    className: "ml-2"
                                })]
                            }) : null, (0, r.jsx)("button", {
                                onClick: () => d((e => !e)),
                                ref: l,
                                children: (0, r.jsx)(N.ZP, {
                                    name: N.PJ.COG,
                                    size: N.$u.SMALL
                                })
                            })]
                        }), c ? (0, r.jsx)("div", {
                            className: "absolute top-full -right-2 mt-2 z-30",
                            ref: n,
                            children: (0, r.jsx)(h.Z, {
                                className: "box-shadow",
                                children: (0, r.jsx)(Z.Z, {})
                            })
                        }) : null]
                    }), (0, r.jsxs)("aside", {
                        className: "bg-gray-700 border border-gray-500 bg-opacity-90 rounded-md px-4 py-3 normal-case text-sm text-left flex mt-4",
                        children: [(0, r.jsx)(N.ZP, {
                            name: N.PJ.INFORMATION_CIRCLE,
                            className: "w-9 h-9 mr-4"
                        }), (0, r.jsx)("p", {
                            children: (0, r.jsx)(j.Z, {
                                id: "bonds.disclaimer",
                                values: {
                                    br: () => (0, r.jsx)("br", {}),
                                    b: e => (0, r.jsx)("b", {
                                        className: "text-teal-500",
                                        children: e
                                    })
                                }
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: "mt-6 space-y-8",
                        children: e
                    }), (0, r.jsx)("div", {
                        className: "my-12",
                        children: s
                    })]
                })
            };

            function _(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    s && (i = i.filter((function (s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function E(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? _(Object(t), !0).forEach((function (s) {
                        (0, c.Z)(e, s, t[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach((function (s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                    }))
                }
                return e
            }
            const B = (0, p.default)((() => t.e(5569).then(t.bind(t, 35569))), {
                loading: y.Z,
                loadableGenerated: {
                    webpack: () => [35569]
                }
            });
            var I = () => {
                const {
                    chainId: e
                } = (0, x.K)(), {
                    data: s,
                    status: t
                } = (0, d.Z)(), {
                    data: i
                } = (0, o.Z)(), n = (0, a.useMemo)((() => {
                    var e;
                    return null !== (e = null === s || void 0 === s ? void 0 : s.filter((e => e.active)).map((e => {
                        const s = (0, u.E)(i, e.bondPrice);
                        return E(E({}, e), {}, {
                            discount: s
                        })
                    })).sort(((e, s) => s.discount - e.discount))) && void 0 !== e ? e : []
                }), [s, i]), l = (0, a.useMemo)((() => {
                    var e;
                    return null !== (e = null === s || void 0 === s ? void 0 : s.filter((e => !e.active && e.capacityUsed.gt(0))).sort(((e, s) => Number(s.conclusion) - Number(e.conclusion))).slice(0, 5)) && void 0 !== e ? e : []
                }), [s]);
                return "success" !== t ? (0, r.jsx)(k, {
                    chainId: e,
                    floorPrice: i,
                    activeBonds: new Array(2).fill(null).map(((e, s) => (0, r.jsx)(y.Z, {}, s))),
                    inactiveBonds: []
                }) : (0, r.jsx)(k, {
                    floorPrice: i,
                    chainId: e,
                    activeBonds: (null === n || void 0 === n ? void 0 : n.length) > 0 ? n.map(((e, s) => (0, r.jsx)(B, E(E({}, e), {}, {
                        expanded: 0 === s && n.length < 3,
                        toggle: n.length > 1,
                        floorMarketPrice: i
                    }), e.principal + s))) : (0, r.jsx)("p", {
                        children: (0, r.jsx)(j.Z, {
                            id: "bonds.none"
                        })
                    }),
                    inactiveBonds: (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("h3", {
                            children: (0, r.jsx)(j.Z, {
                                id: "bonds.ended.title"
                            })
                        }), (0, r.jsx)("div", {
                            className: "mt-4 space-y-4",
                            children: null === l || void 0 === l ? void 0 : l.map(((e, s) => (0, r.jsx)(b, {
                                name: e.symbol,
                                capacityUsed: e.capacityUsed,
                                slp: e.type === m.R.SLP,
                                amountBonded: e.amountBonded
                            }, e.principal + s)))
                        })]
                    })
                })
            },
                C = t(3054);
            var D = () => (0, r.jsxs)(l, {
                children: [(0, r.jsx)(C.Z, {}), (0, r.jsx)(I, {})]
            });

            function L() {
                const {
                    formatMessage: e
                } = (0, n.Z)();
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(i.default, {
                        children: [(0, r.jsx)("title", {
                            children: e({
                                id: "meta.bond.title"
                            })
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: e({
                                id: "meta.bond.description"
                            })
                        }), (0, r.jsx)("meta", {
                            property: "og:title",
                            name: "twitter:title",
                            content: e({
                                id: "meta.bond.title"
                            })
                        }), (0, r.jsx)("meta", {
                            property: "og:description",
                            name: "twitter:description",
                            content: e({
                                id: "meta.bond.description"
                            })
                        })]
                    }), (0, r.jsx)(D, {})]
                })
            }
        },
        50772: function (e, s, t) {
            "use strict";
            t.d(s, {
                Z: function () {
                    return m
                }
            });
            var i = t(67294),
                n = t(54490),
                a = t(44012),
                r = t(10768),
                l = t(9093),
                c = t(85893);
            const d = e => e / 100,
                o = [.5, 5, 10];
            var m = () => {
                const [e, s] = (0, l.rV)(), {
                    0: t,
                    1: m
                } = (0, i.useState)();
                return (0, i.useEffect)((() => {
                    e.slippage !== t && (null != t ? s({
                        slippage: t
                    }) : o.includes(100 * (null === e || void 0 === e ? void 0 : e.slippage)) || m(null === e || void 0 === e ? void 0 : e.slippage))
                }), [t, e.slippage, s]), (0, c.jsxs)("section", {
                    children: [(0, c.jsxs)("div", {
                        children: [(0, c.jsx)("h5", {
                            className: "mb-4 opacity-75",
                            children: (0, c.jsx)(a.Z, {
                                id: "settings.transaction.slippage"
                            })
                        }), (0, c.jsxs)("div", {
                            className: "rounded-lg flex space-x-1",
                            children: [o.map((t => (0, c.jsx)(r.ZP, {
                                kind: r.hY.OUTLINE,
                                onClick: () => {
                                    m(null), s({
                                        slippage: d(t)
                                    })
                                },
                                className: "text-sm " + ((null === e || void 0 === e ? void 0 : e.slippage) === d(t) ? "bg-teal-900 border-opacity-100" : "border-opacity-25 "),
                                children: (0, c.jsx)(n.BK, {
                                    value: d(t),
                                    style: "percent",
                                    minimumSignificantDigits: 1
                                })
                            }, t))), (0, c.jsxs)("span", {
                                className: "inline-flex relative",
                                children: [(0, c.jsx)("input", {
                                    className: ((null === e || void 0 === e ? void 0 : e.slippage) === t ? "border-teal-500 text-white" : "border-gray-900 text-gray-300") + " ml-auto w-16 pl-2 pr-4 py-1 text-sm text-right rounded-md border  focus:text-white bg-black bg-opacity-50 focus:outline-none focus:border-teal-500 focus:ring-0",
                                    value: "number" === typeof t ? 100 * t : "",
                                    placeholder: "0.0",
                                    max: 50,
                                    min: 0,
                                    step: .01,
                                    type: "number",
                                    onInput: e => {
                                        parseFloat(e.target.value) >= 0 ? m(d(parseFloat(e.target.value))) : m(null)
                                    }
                                }), (0, c.jsx)("span", {
                                    className: "absolute right-1 top-0 bottom-0 text-sm flex items-center justify-center",
                                    children: "%"
                                })]
                            })]
                        })]
                    }), (null === e || void 0 === e ? void 0 : e.slippage) > .1 ? (0, c.jsx)("div", {
                        className: "bg-orange-900 border border-orange-500 p-2 rounded-md text-xs mt-2",
                        children: (0, c.jsx)(a.Z, {
                            id: "settings.transaction.highSlippage"
                        })
                    }) : null]
                })
            }
        },
        49263: function (e, s, t) {
            "use strict";
            var i = t(50036),
                n = t(85893);
            s.Z = () => (0, n.jsxs)(i.Z, {
                className: "flex items-center justify-center",
                children: [(0, n.jsx)("img", {
                    src: "/images/sweep.gif",
                    alt: "\ud83e\uddf9",
                    className: "w-10 h-10"
                }), (0, n.jsx)("img", {
                    src: "/images/sweep.gif",
                    alt: "\ud83e\uddf9",
                    className: "w-10 h-10"
                }), (0, n.jsx)("img", {
                    src: "/images/sweep.gif",
                    alt: "\ud83e\uddf9",
                    className: "w-10 h-10"
                })]
            })
        },
        66928: function (e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/bond", function () {
                return t(94944)
            }])
        }
    },
    function (e) {
        e.O(0, [1466, 5675, 3054, 9774, 2888, 179], (function () {
            return s = 66928, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);