"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3054], {
        87502: function (e, t, n) {
            n.d(t, {
                Z: function () {
                    return i
                }
            });
            var a = async ({
                provider: e,
                address: t,
                symbol: n
            }) => await (null === e || void 0 === e ? void 0 : e.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: t,
                        symbol: n.slice(0, 6),
                        decimals: 18
                    }
                }
            })), s = n(57495);
            var i = () => {
                const {
                    library: e
                } = (0, s.K)();
                return async ({
                    address: t,
                    symbol: n
                }) => {
                    await a({
                        provider: null === e || void 0 === e ? void 0 : e.provider,
                        address: t,
                        symbol: n
                    })
                }
            }
        },
        95805: function (e, t, n) {
            n.d(t, {
                Z: function () {
                    return p
                }
            });
            var a = n(57495),
                s = n(48375),
                i = n(88767),
                r = n(66686),
                l = n(7177),
                u = n(25081),
                d = n(1434),
                o = n(92343);
            var p = (e, t) => {
                const {
                    chainId: n,
                    library: p
                } = (0, a.K)(), c = (0, s.N)(t, 500);
                return (0, i.useQuery)(["gloorValue", e, `${c}`, n], (() => e === r.O.S_FLOOR ? c : (({
                    chainId: e,
                    provider: t,
                    amount: n
                }) => new o.Z(e, (0, u.Z)(l.Dj, e), d, t).balanceFrom(n))({
                    amount: c,
                    chainId: n,
                    provider: p
                })), {
                    enabled: !!(n && e && c)
                })
            }
        },
        54865: function (e, t, n) {
            n.d(t, {
                b: function () {
                    return a
                }
            });
            const a = (e, t) => Number(e) < Date.now() / 1e3 && t.gt(0)
        },
        3645: function (e, t, n) {
            n.d(t, {
                Z: function () {
                    return i
                }
            });
            var a = n(25675),
                s = n(85893);
            var i = ({
                slp: e,
                name: t,
                size: n = 48,
                src: i = `/images/tokens/256x256/${e ? t.replace(/(WETH|WEETH)/, "") : t}.png`
            }) => {
                const r = 32 === n ? "w-8 h-8" : "w-12 h-12";
                return (0, s.jsxs)("span", {
                    className: "inline-flex items-center",
                    children: [(0, s.jsx)("span", {
                        className: `${r} flex-none ${e ? 32 === n ? "-mr-3 z-10" : "-mr-6 z-10" : ""}`,
                        children: i.startsWith("/") ? (0, s.jsx)(a.default, {
                            src: i,
                            width: n,
                            height: n,
                            alt: t
                        }) : (0, s.jsx)("img", {
                            src: i,
                            width: n,
                            height: n,
                            alt: t
                        })
                    }), e ? (0, s.jsx)("span", {
                        className: `${r} flex-none`,
                        children: (0, s.jsx)(a.default, {
                            src: "/images/tokens/256x256/ETH.png",
                            width: n,
                            height: n,
                            alt: "ETH"
                        })
                    }) : null]
                })
            }
        },
        3054: function (e, t, n) {
            n.d(t, {
                Z: function () {
                    return z
                }
            });
            var a = n(15263),
                s = n(54865),
                i = n(9870),
                r = n(77534),
                l = n(7177),
                u = n(25081),
                d = n(11466),
                o = n(26677);
            var p = ({
                chainId: e,
                provider: t,
                userAddress: n,
                indexes: a
            }) => new d.CH((0, u.Z)(l.jK, e), o, t.getSigner()).redeem(n, a, !0),
                c = n(4401),
                m = n(34165),
                y = n(57495),
                b = n(2593),
                v = n(86896),
                f = n(88767),
                x = n(42303),
                h = n(10768),
                T = n(87502),
                g = n(85893);
            var j = () => {
                var e;
                const {
                    address: t
                } = (0, r.tN)(), {
                    chainId: n,
                    library: d
                } = (0, y.K)(), {
                    showErrorModal: o
                } = (0, i.vR)(), j = (() => {
                    const {
                        formatMessage: e
                    } = (0, v.Z)(), {
                        showSuccessModal: t
                    } = (0, i.vR)(), {
                        chainId: n
                    } = (0, y.K)(), a = (0, T.Z)();
                    return (s, i) => {
                        t({
                            chainId: n,
                            receipt: s,
                            title: e({
                                id: "modal.success.claim.title"
                            }),
                            text: e({
                                id: "modal.success.claim.text"
                            }, {
                                payout: (0, c.qe)(i, 4)
                            }),
                            action: (0, g.jsx)(h.ZP, {
                                className: "normal-case",
                                onClick: () => a({
                                    address: (0, u.Z)(l.Dj, n),
                                    symbol: e({
                                        id: "common.gfloor"
                                    })
                                }),
                                children: e({
                                    id: "modal.success.claim.action"
                                })
                            })
                        })
                    }
                })(), w = (() => {
                    const e = (0, f.useQueryClient)();
                    return () => {
                        e.invalidateQueries({
                            queryKey: "depositories",
                            exact: !1
                        }), e.invalidateQueries({
                            queryKey: "vestingBonds",
                            exact: !1
                        })
                    }
                })(), {
                    data: O
                } = (0, a.Z)(t), {
                    addClaim: Z
                } = (0, x.YS)(), M = null !== (e = null === O || void 0 === O ? void 0 : O.filter((({
                    payout: e,
                    vestsAt: t
                }) => (0, s.b)(t, e)))) && void 0 !== e ? e : [], N = M.reduce(((e, {
                    payout: t
                }) => e.add(t)), b.O$.from(0)), C = M.map((({
                    index: e
                }) => e));
                return (0, m.Z)((() => p({
                    chainId: n,
                    provider: d,
                    userAddress: t,
                    indexes: C
                })), {
                    onSuccess(e) {
                        j(e, N), w(), C.forEach(Z)
                    },
                    onError(e) {
                        o({
                            error: e
                        })
                    }
                })
            },
                w = n(67294),
                O = n(59499),
                Z = n(44012),
                M = n(4730);
            var N = ({
                chainId: e,
                provider: t,
                userAddress: n,
                index: a
            }) => p({
                chainId: e,
                provider: t,
                userAddress: n,
                indexes: [a]
            });
            var C = () => {
                const {
                    address: e
                } = (0, r.tN)(), {
                    chainId: t,
                    library: n
                } = (0, y.K)(), {
                    showErrorModal: a
                } = (0, i.vR)(), s = (() => {
                    const {
                        formatMessage: e
                    } = (0, v.Z)(), {
                        showSuccessModal: t
                    } = (0, i.vR)(), {
                        chainId: n
                    } = (0, y.K)(), a = (0, T.Z)();
                    return (s, i) => {
                        t({
                            chainId: n,
                            receipt: s,
                            title: e({
                                id: "modal.success.claim.title"
                            }),
                            text: e({
                                id: "modal.success.claim.text"
                            }, {
                                payout: (0, c.qe)(i, 4)
                            }),
                            action: (0, g.jsx)(h.ZP, {
                                className: "normal-case",
                                onClick: () => a({
                                    address: (0, u.Z)(l.Dj, n),
                                    symbol: e({
                                        id: "common.gfloor"
                                    })
                                }),
                                children: e({
                                    id: "modal.success.claim.action"
                                })
                            })
                        })
                    }
                })(), d = (() => {
                    const e = (0, f.useQueryClient)();
                    return () => {
                        e.invalidateQueries({
                            queryKey: "depositories",
                            exact: !1
                        }), e.invalidateQueries({
                            queryKey: "vestingBonds",
                            exact: !1
                        })
                    }
                })(), {
                    addClaim: o
                } = (0, x.YS)();
                return (0, m.Z)((({
                    index: a
                }) => N({
                    chainId: t,
                    provider: n,
                    userAddress: e,
                    index: a
                })), {
                    onSuccess(e, t) {
                        o(t.index), s(e, t.payout), d()
                    },
                    onError(e) {
                        a({
                            error: e
                        })
                    }
                })
            },
                k = n(76250),
                P = n(95805),
                A = n(66686),
                D = n(50036),
                E = n(30776),
                S = n(25705),
                I = n(54490),
                _ = n(97735),
                K = n(3645),
                R = n(21225);
            var F = ({
                symbol: e,
                vestsAt: t,
                payout: n,
                claiming: a,
                pending: i,
                onClaimClick: r,
                ethValue: l,
                slp: u
            }) => {
                const {
                    0: d,
                    1: o
                } = (0, w.useState)((() => (0, s.b)(t, n)));
                return (0, w.useEffect)((() => {
                    if (!d) {
                        const e = 1e3 * Number(t) - Date.now() + 1e3,
                            a = setTimeout((() => {
                                o((0, s.b)(t, n))
                            }), e);
                        return () => clearTimeout(a)
                    }
                }), [n, t, d]), (0, g.jsxs)(D.Z, {
                    className: "sm:flex items-center",
                    children: [(0, g.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, g.jsx)(K.Z, {
                            size: 32,
                            name: e,
                            slp: u
                        }), (0, g.jsx)("span", {
                            className: "mx-2",
                            children: e.toUpperCase()
                        })]
                    }), (0, g.jsxs)("div", {
                        className: "sm:flex sm:ml-auto sm:space-x-12 mt-4 sm:mt-0",
                        children: [(0, g.jsxs)("div", {
                            className: "sm:text-center flex justify-between sm:block mb-1 sm:mb-0",
                            children: [(0, g.jsx)("h5", {
                                className: "sm:mb-2",
                                children: (0, g.jsx)(Z.Z, {
                                    id: "vest.payout"
                                })
                            }), (0, g.jsxs)("div", {
                                className: "text-white",
                                children: [(0, g.jsx)(I.BK, {
                                    value: (0, R.Z)(n, c.m6),
                                    minimumFractionDigits: 3,
                                    maximumFractionDigits: 3
                                }), " ", (0, g.jsx)(Z.Z, {
                                    id: "common.gfloor"
                                })]
                            })]
                        }), (0, g.jsxs)("div", {
                            className: "sm:text-center flex justify-between sm:block mb-1 sm:mb-0",
                            children: [(0, g.jsx)("h5", {
                                className: "sm:mb-2",
                                children: (0, g.jsx)(Z.Z, {
                                    id: "staked.value"
                                })
                            }), (0, g.jsx)("div", {
                                className: "text-white",
                                children: l ? (0, g.jsx)(_.Z, {
                                    value: l
                                }) : "\u2014"
                            })]
                        }), d ? (0, g.jsx)("div", {
                            className: "text-center w-full mt-4 sm:mt-0 sm:w-auto",
                            children: (0, g.jsx)(h.ZP, {
                                disabled: !d || i || a,
                                onClick: r,
                                kind: E.hY.INVERSE,
                                state: a || i ? E.ZM.BUSY : E.ZM.IDLE,
                                children: (0, g.jsx)(Z.Z, {
                                    id: "common.claim"
                                })
                            })
                        }) : (0, g.jsxs)("div", {
                            className: "sm:text-center flex justify-between sm:block mb-1 sm:mb-0",
                            children: [(0, g.jsx)("h5", {
                                className: "sm:mb-2",
                                children: (0, g.jsx)(Z.Z, {
                                    id: "vest.vests"
                                })
                            }), (0, g.jsx)("div", {
                                className: "text-teal-500",
                                children: (0, g.jsx)(S.Z, {
                                    time: Number(t)
                                })
                            })]
                        })]
                    })]
                })
            };
            const V = ["claimingAll"];

            function q(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(n), !0).forEach((function (t) {
                        (0, O.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var L = e => {
                let {
                    claimingAll: t
                } = e, n = (0, M.Z)(e, V);
                const {
                    isMining: a,
                    isPending: s,
                    mutate: i
                } = C(), {
                    data: r
                } = (0, k.Z)(), {
                    data: l
                } = (0, P.Z)(A.O.G_FLOOR, n.payout), u = a || t, d = r && l ? null === r || void 0 === r ? void 0 : r.mul(l).div(c.D_) : null;
                return (0, g.jsx)(F, B(B({}, n), {}, {
                    claiming: u,
                    pending: s,
                    ethValue: d,
                    onClaimClick: () => {
                        i({
                            index: n.index,
                            payout: n.payout
                        })
                    }
                }))
            };

            function Q(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }
            var $ = ({
                vesting: e,
                canClaimAll: t,
                claimingAll: n,
                onClaimAll: a
            }) => (0, g.jsxs)("div", {
                children: [(0, g.jsxs)("header", {
                    className: "flex justify-between items-center",
                    children: [(0, g.jsx)("h3", {
                        className: "",
                        children: (0, g.jsx)(Z.Z, {
                            id: "vesting.title",
                            values: {
                                count: e.length
                            }
                        })
                    }), t && (0, g.jsx)(h.ZP, {
                        className: "text-sm",
                        disabled: !t,
                        state: n ? h.ZM.BUSY : h.ZM.IDLE,
                        onClick: a,
                        children: "Claim All"
                    })]
                }), (0, g.jsx)("div", {
                    className: "mt-6 space-y-4 text-gray-300",
                    children: e.map((e => (0, g.jsx)(L, function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Q(Object(n), !0).forEach((function (t) {
                                (0, O.Z)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        claimingAll: n
                    }, e), `${e.index}`)))
                })]
            });
            var z = () => {
                var e;
                const {
                    address: t
                } = (0, r.tN)(), {
                    data: n
                } = (0, a.Z)(t), {
                    mutate: i,
                    isPending: l,
                    isMining: u
                } = j(), {
                    claimed: d
                } = (0, x.YS)(), o = (0, w.useMemo)((() => null === n || void 0 === n ? void 0 : n.filter((e => !d.some((t => t.eq(e.index)))))), [n, d]), p = (null === o || void 0 === o || null === (e = o.filter((({
                    index: e,
                    payout: t,
                    vestsAt: n
                }) => (0, s.b)(n, t)))) || void 0 === e ? void 0 : e.length) > 1;
                return null !== o && void 0 !== o && o.length ? (0, g.jsx)($, {
                    vesting: o,
                    canClaimAll: p,
                    claimingAll: l || u,
                    onClaimAll: () => {
                        i(null)
                    }
                }) : null
            }
        },
        1434: function (e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_sFLOOR","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"approved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"balanceFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"balanceTo","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"checkpoints","outputs":[{"internalType":"uint256","name":"fromBlock","type":"uint256"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"index","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_staking","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sFLOOR","outputs":[{"internalType":"contract IsFLOOR","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')
        }
    }
]);