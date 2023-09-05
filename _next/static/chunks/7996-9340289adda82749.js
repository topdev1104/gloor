"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7996], {
        76497: function (e, s, t) {
            var a = t(88767),
                l = t(34123),
                i = t(46267),
                n = t(48589);
            s.Z = ({
                tokenId: e,
                assetAddress: s
            }) => {
                const {
                    network: t
                } = (0, l.gK)(), {
                    nftx: {
                        fetchAssetMeta: r
                    }
                } = (0, n.jR)();
                return (0, a.useQuery)(["assetMeta", s, e, t], (() => r(s, e, t)), {
                    staleTime: 1 / 0,
                    refetchInterval: !1,
                    retry: (e, s) => {
                        var t;
                        return (null === s || void 0 === s || null === (t = s.message) || void 0 === t || !t.includes("404")) && !(e > 10)
                    },
                    retryDelay: 1e3,
                    enabled: !!s && !!e && t !== i.a.Rinkeby
                })
            }
        },
        74763: function (e, s, t) {
            t.d(s, {
                Z: function () {
                    return u
                }
            });
            var a = t(7177),
                l = t(85528);
            var i = t(25081),
                n = t(57495),
                r = t(67294),
                c = t(51971),
                d = t(48589),
                x = t(34123),
                m = t(88767);
            var o = ({
                addresses: e,
                vaultIds: s
            }) => {
                const {
                    network: t
                } = (0, x.gK)(), {
                    nftx: {
                        fetchNftxVaults: a
                    }
                } = (0, d.jR)();
                return (0, m.useQuery)(["nftxVaults", t, `${e}`, `${s}`], (() => a({
                    network: t,
                    addresses: e,
                    vaultIds: s
                })), {
                    enabled: !(!t || !e && !s)
                })
            };
            var u = () => {
                const {
                    chainId: e
                } = (0, n.K)(), {
                    data: s
                } = (0, c.Z)(), t = (0, r.useMemo)((() => null === s || void 0 === s ? void 0 : s.filter((e => e.active))), [s]), d = null === t || void 0 === t ? void 0 : t.map((e => e.principal)).filter((s => !((e, s) => {
                    try {
                        return (0, l.Q)(e, s)
                    } catch (t) {
                        return console.log(t), !1
                    }
                })(s, (0, i.Z)(a.AH, e))));
                return o({
                    addresses: d
                })
            }
        },
        1750: function (e, s, t) {
            t.d(s, {
                E: function () {
                    return i
                }
            });
            var a = t(21225),
                l = t(21046);

            function i(e, s) {
                if (!e || !s) return 0;
                if (s.eq(0)) return 0;
                try {
                    const t = s.gt(e) ? s : e,
                        i = s.lt(e) ? s : e,
                        n = t.sub(i).mul(l.Ce).div(i.gt(0) ? i : "1"),
                        r = (0, a.Z)(n);
                    return i.eq(e) ? 0 - r : r
                } catch {
                    return 0
                }
            }
        },
        86603: function (e, s, t) {
            t.d(s, {
                Z: function () {
                    return i
                }
            });
            var a = t(50036),
                l = t(85893);
            var i = ({
                header: e,
                main: s,
                basket: t
            }) => (0, l.jsxs)("div", {
                className: "text-center",
                children: [e, (0, l.jsxs)("div", {
                    className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4",
                    children: [(0, l.jsx)(a.Z, {
                        className: "md:col-span-2",
                        children: s
                    }), t]
                })]
            })
        },
        46479: function (e, s, t) {
            t.d(s, {
                Z: function () {
                    return d
                }
            });
            var a = t(91085),
                l = t(67294),
                i = t(44012),
                n = t(85893);
            const r = {
                weeks: a.IZ,
                days: a.s2,
                hours: 3600,
                minutes: 60,
                seconds: 1
            },
                c = ["seconds", r.seconds];

            function d({
                units: e = ["seconds", "minutes", "hours", "days"],
                value: s,
                relativeTo: t,
                base: a = 1
            }) {
                const {
                    0: d,
                    1: x
                } = (0, l.useMemo)((() => {
                    var l, i;
                    let n = s;
                    t && (n = t - n), n /= a, n = Math.abs(n);
                    const d = Object.entries(r).filter((([s]) => e.includes(s))),
                        x = null !== (l = d[d.length - 1]) && void 0 !== l ? l : c,
                        [m, o] = null !== (i = d.find((([, e]) => n >= e))) && void 0 !== i ? i : x;
                    return n = Math.floor(n / o), [m, n]
                }), [a, t, e, s]);
                return (0, n.jsx)(i.Z, {
                    id: `generic.time.${d}`,
                    values: {
                        amount: x
                    }
                })
            }
        },
        50772: function (e, s, t) {
            t.d(s, {
                Z: function () {
                    return m
                }
            });
            var a = t(67294),
                l = t(54490),
                i = t(44012),
                n = t(10768),
                r = t(9093),
                c = t(85893);
            const d = e => e / 100,
                x = [.5, 5, 10];
            var m = () => {
                const [e, s] = (0, r.rV)(), {
                    0: t,
                    1: m
                } = (0, a.useState)();
                return (0, a.useEffect)((() => {
                    e.slippage !== t && (null != t ? s({
                        slippage: t
                    }) : x.includes(100 * (null === e || void 0 === e ? void 0 : e.slippage)) || m(null === e || void 0 === e ? void 0 : e.slippage))
                }), [t, e.slippage, s]), (0, c.jsxs)("section", {
                    children: [(0, c.jsxs)("div", {
                        children: [(0, c.jsx)("h5", {
                            className: "mb-4 opacity-75",
                            children: (0, c.jsx)(i.Z, {
                                id: "settings.transaction.slippage"
                            })
                        }), (0, c.jsxs)("div", {
                            className: "rounded-lg flex space-x-1",
                            children: [x.map((t => (0, c.jsx)(n.ZP, {
                                kind: n.hY.OUTLINE,
                                onClick: () => {
                                    m(null), s({
                                        slippage: d(t)
                                    })
                                },
                                className: "text-sm " + ((null === e || void 0 === e ? void 0 : e.slippage) === d(t) ? "bg-teal-900 border-opacity-100" : "border-opacity-25 "),
                                children: (0, c.jsx)(l.BK, {
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
                        children: (0, c.jsx)(i.Z, {
                            id: "settings.transaction.highSlippage"
                        })
                    }) : null]
                })
            }
        },
        8923: function (e, s, t) {
            var a = t(50036),
                l = t(10768),
                i = t(46479),
                n = t(44012),
                r = t(85893);
            s.Z = ({
                vestingPeriod: e,
                symbol: s
            }) => (0, r.jsxs)("div", {
                children: [(0, r.jsx)("header", {
                    className: "text-center bg-gray-700 p-3 text-opacity-75 text-white",
                    children: (0, r.jsx)("h5", {
                        children: (0, r.jsx)(n.Z, {
                            id: "bond.721.basket.title",
                            values: {
                                count: 0,
                                b: e => (0, r.jsx)("b", {
                                    className: "text-white",
                                    children: e
                                })
                            }
                        })
                    })
                }), (0, r.jsxs)(a.Z, {
                    children: [(0, r.jsxs)("dl", {
                        className: "text-sm space-y-4 mb-8",
                        children: [(0, r.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, r.jsx)("dt", {
                                className: "mr-2 h5 text-gray-600 text-left",
                                children: (0, r.jsx)(n.Z, {
                                    id: "bond.721.basket.sold.dt",
                                    values: {
                                        symbol: s || "NFT",
                                        nc: e => (0, r.jsx)("b", {
                                            className: "text-white",
                                            children: e
                                        })
                                    }
                                })
                            }), (0, r.jsxs)("dd", {
                                className: "text-right",
                                children: [(0, r.jsx)("span", {
                                    className: "text-teal-500",
                                    children: "--"
                                }), (0, r.jsx)("br", {}), (0, r.jsx)("span", {
                                    className: "text-xs text-white text-opacity-80",
                                    children: "--"
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, r.jsx)("dt", {
                                className: "mr-2 h5 text-gray-600 text-left",
                                children: (0, r.jsx)(n.Z, {
                                    id: "bond.721.basket.gfloor.dt",
                                    values: {
                                        nc: e => (0, r.jsx)("b", {
                                            className: "text-teal-500",
                                            children: e
                                        })
                                    }
                                })
                            }), (0, r.jsxs)("dd", {
                                className: "text-right",
                                children: [(0, r.jsx)("span", {
                                    className: "text-teal-500",
                                    children: "--"
                                }), (0, r.jsx)("br", {}), (0, r.jsx)("span", {
                                    className: "text-xs text-white text-opacity-80",
                                    children: "--"
                                })]
                            })]
                        }), (0, r.jsx)("hr", {
                            className: "h-px bg-gray-500 bg-opacity-30 border-0"
                        }), (0, r.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, r.jsx)("dt", {
                                className: "mr-2 h5 text-gray-600 text-left",
                                children: (0, r.jsx)(n.Z, {
                                    id: "bond.721.basket.received.dt",
                                    values: {
                                        b: e => (0, r.jsx)("b", {
                                            className: "text-teal-500",
                                            children: e
                                        })
                                    }
                                })
                            }), (0, r.jsxs)("dd", {
                                className: "text-right",
                                children: [(0, r.jsx)("span", {
                                    className: "text-teal-500",
                                    children: "--"
                                }), (0, r.jsx)("br", {}), (0, r.jsx)("span", {
                                    className: "text-xs text-white text-opacity-80",
                                    children: "--"
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, r.jsx)("dt", {
                                className: "mr-2 h5 text-gray-600 text-left",
                                children: (0, r.jsx)(n.Z, {
                                    id: "bond.721.basket.vestingPeriod.dt"
                                })
                            }), (0, r.jsx)("dd", {
                                className: "text-right",
                                children: e ? (0, r.jsx)(i.Z, {
                                    value: e
                                }) : "--"
                            })]
                        })]
                    }), (0, r.jsx)(l.ZP, {
                        kind: l.hY.INVERSE,
                        className: "w-full",
                        disabled: !0,
                        children: (0, r.jsx)(n.Z, {
                            id: "common.bond"
                        })
                    })]
                })]
            })
        },
        77849: function (e, s, t) {
            var a = t(50036),
                l = t(85893);
            s.Z = () => (0, l.jsxs)("div", {
                children: [(0, l.jsx)("div", {
                    className: "h-12 bg-gray-700"
                }), (0, l.jsxs)(a.Z, {
                    children: [(0, l.jsx)("div", {
                        className: "bg-gray-700 animate-pulse h-6 mb-4"
                    }), (0, l.jsx)("div", {
                        className: "bg-gray-700 animate-pulse h-6 mb-4"
                    }), (0, l.jsx)("div", {
                        className: "bg-gray-700 animate-pulse h-6 mb-8"
                    }), (0, l.jsx)("div", {
                        className: "bg-white bg-opacity-20 animate-pulse h-12"
                    })]
                })]
            })
        },
        61476: function (e, s, t) {
            t.d(s, {
                Z: function () {
                    return j
                }
            });
            var a = t(76250),
                l = t(1750),
                i = t(67294),
                n = t(50036),
                r = t(58054),
                c = t(50772),
                d = t(62205),
                x = t(54490),
                m = t(44012),
                o = t(41664),
                u = t(85893);
            var h = ({
                discount: e,
                assetName: s,
                bondId: t
            }) => {
                const a = (0, i.useRef)(),
                    l = (0, i.useRef)(),
                    {
                        0: h,
                        1: j
                    } = (0, i.useState)(!1),
                    g = (0, i.useCallback)((e => {
                        var s;
                        null !== l && void 0 !== l && null !== (s = l.current) && void 0 !== s && s.contains(e.target) || j(!1)
                    }), []);
                (0, d.Z)(a, g);
                const f = e < 0;
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsxs)("header", {
                        className: "flex items-center justify-between flex-wrap relative",
                        children: [(0, u.jsxs)("nav", {
                            className: "flex space-x-2 items-center mr-4",
                            children: [(0, u.jsx)("h3", {
                                className: "sm:w-auto w-full sm:mb-0",
                                children: (0, u.jsx)(o.default, {
                                    href: "/sell/",
                                    children: (0, u.jsx)("a", {
                                        className: "hover:underline",
                                        children: (0, u.jsx)(m.Z, {
                                            id: "bond.721.title"
                                        })
                                    })
                                })
                            }), s ? (0, u.jsxs)(u.Fragment, {
                                children: [(0, u.jsx)("span", {
                                    children: (0, u.jsx)(r.ZP, {
                                        name: r.PJ.CHEVRON_RIGHT,
                                        size: r.$u.XS
                                    })
                                }), (0, u.jsx)("h3", {
                                    className: "mr-4 sm:w-auto w-full mb-4 sm:mb-0",
                                    children: (0, u.jsx)(o.default, {
                                        href: `/sell/${t}`,
                                        children: (0, u.jsx)("a", {
                                            className: "hover:underline",
                                            children: s
                                        })
                                    })
                                })]
                            }) : null]
                        }), (0, u.jsxs)("div", {
                            className: `flex ${t ? "w-full" : ""} sm:w-auto`,
                            children: [(0, u.jsxs)("div", {
                                className: "bg-gray-800 p-4 mr-4 rounded-md flex-1 inline-flex justify-center md:justify-between items-center hover:bg-gray-700 " + (t ? "" : "invisible"),
                                children: [(0, u.jsx)("h5", {
                                    className: "mr-2 text-gray-600",
                                    children: (0, u.jsx)(m.Z, {
                                        id: "bond.721.bonus",
                                        values: {
                                            b: e => (0, u.jsx)("b", {
                                                className: "text-teal-500",
                                                children: e
                                            })
                                        }
                                    })
                                }), (0, u.jsxs)("span", {
                                    className: f ? "text-red-400" : "text-green-400",
                                    children: [f ? null : "+", (0, u.jsx)(x.BK, {
                                        style: "percent",
                                        value: e,
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })]
                                })]
                            }), (0, u.jsx)("button", {
                                onClick: () => j((e => !e)),
                                ref: l,
                                children: (0, u.jsx)(r.ZP, {
                                    name: r.PJ.COG,
                                    size: r.$u.SMALL
                                })
                            })]
                        }), h ? (0, u.jsx)("div", {
                            className: "absolute top-full -right-2 mt-2 z-30",
                            ref: a,
                            children: (0, u.jsx)(n.Z, {
                                className: "box-shadow",
                                children: (0, u.jsx)(c.Z, {})
                            })
                        }) : null]
                    }), (0, u.jsxs)("aside", {
                        className: "bg-gray-700 border border-gray-500 bg-opacity-90 rounded-md px-4 py-3 normal-case text-sm text-left flex mt-4",
                        children: [(0, u.jsx)(r.ZP, {
                            name: r.PJ.INFORMATION_CIRCLE,
                            className: "w-9 h-9 mr-4"
                        }), (0, u.jsx)("p", {
                            children: (0, u.jsx)(m.Z, {
                                id: "bond.721.disclaimer",
                                values: {
                                    br: () => (0, u.jsx)("br", {}),
                                    b: e => (0, u.jsx)("b", {
                                        className: "text-teal-500",
                                        children: e
                                    })
                                }
                            })
                        })]
                    })]
                })
            };
            var j = ({
                assetName: e,
                bondId: s,
                bondPrice: t
            }) => {
                const {
                    data: i
                } = (0, a.Z)(), n = (0, l.E)(i, t);
                return (0, u.jsx)(h, {
                    assetName: e,
                    bondId: s,
                    discount: n
                })
            }
        },
        57584: function (e, s, t) {
            t.d(s, {
                Z: function () {
                    return d
                }
            });
            var a = t(50036),
                l = t(86603),
                i = t(67294),
                n = t(77849),
                r = t(61476),
                c = t(85893);
            var d = () => {
                const {
                    0: e,
                    1: s
                } = (0, i.useState)(!1);
                return (0, i.useEffect)((() => {
                    const e = setTimeout((() => {
                        s(!0)
                    }), 3e3);
                    return () => clearTimeout(e)
                }), []), (0, c.jsx)(l.Z, {
                    header: (0, c.jsx)(r.Z, {}),
                    main: (0, c.jsxs)("div", {
                        className: "grid sm:grid-cols-2 md:grid-cols-3 gap-4",
                        children: [(0, c.jsxs)(a.Z, {
                            highlight: !0,
                            className: "justify-center flex",
                            children: [(0, c.jsx)("img", {
                                src: "/images/sweep.gif",
                                alt: "\ud83e\uddf9",
                                className: "w-10 h-10"
                            }), (0, c.jsx)("img", {
                                src: "/images/sweep.gif",
                                alt: "\ud83e\uddf9",
                                className: "w-10 h-10"
                            }), (0, c.jsx)("img", {
                                src: "/images/sweep.gif",
                                alt: "\ud83e\uddf9",
                                className: "w-10 h-10"
                            })]
                        }), (0, c.jsxs)(a.Z, {
                            highlight: !0,
                            className: "justify-center flex",
                            children: [(0, c.jsx)("img", {
                                src: "/images/sweep.gif",
                                alt: "\ud83e\uddf9",
                                className: "w-10 h-10"
                            }), (0, c.jsx)("img", {
                                src: "/images/sweep.gif",
                                alt: "\ud83e\uddf9",
                                className: "w-10 h-10"
                            }), (0, c.jsx)("img", {
                                src: "/images/sweep.gif",
                                alt: "\ud83e\uddf9",
                                className: "w-10 h-10"
                            })]
                        }), (0, c.jsxs)(a.Z, {
                            highlight: !0,
                            className: "justify-center flex",
                            children: [(0, c.jsx)("img", {
                                src: "/images/sweep.gif",
                                alt: "\ud83e\uddf9",
                                className: "w-10 h-10"
                            }), (0, c.jsx)("img", {
                                src: "/images/sweep.gif",
                                alt: "\ud83e\uddf9",
                                className: "w-10 h-10"
                            }), (0, c.jsx)("img", {
                                src: "/images/sweep.gif",
                                alt: "\ud83e\uddf9",
                                className: "w-10 h-10"
                            })]
                        })]
                    }),
                    basket: (0, c.jsx)(n.Z, {})
                })
            }
        }
    }
]);