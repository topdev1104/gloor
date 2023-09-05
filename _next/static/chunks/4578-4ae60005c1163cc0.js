"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4578], {
        7606: function (e, s, t) {
            t.d(s, {
                Z: function () {
                    return l
                }
            });
            var r = t(85893);
            const a = {
                teal: {
                    wrapper: "bg-teal-900",
                    bar: "bg-teal-500"
                },
                red: {
                    wrapper: "bg-red-800",
                    bar: "bg-red-500"
                },
                gray: {
                    wrapper: "bg-gray-700",
                    bar: "bg-teal-500"
                }
            };
            var l = ({
                value: e,
                color: s = "teal"
            }) => {
                const t = `${Math.min(e, 100).toFixed(0)}%`;
                return (0, r.jsx)("div", {
                    className: `w-full h-2 relative ${a[s].wrapper}`,
                    children: (0, r.jsx)("span", {
                        className: `absolute left-0 top-0 bottom-0 ${a[s].bar}`,
                        style: {
                            width: t
                        }
                    })
                })
            }
        },
        22633: function (e, s, t) {
            t.d(s, {
                Z: function () {
                    return a
                }
            });
            var r = t(85893);
            var a = ({
                children: e,
                className: s
            }) => (0, r.jsx)("div", {
                className: `p-2 rounded-sm border border-yellow-200 bg-yellow-300 text-black ${null !== s && void 0 !== s ? s : ""}`,
                children: e
            })
        },
        24578: function (e, s, t) {
            t.d(s, {
                Z: function () {
                    return Oe
                }
            });
            var r = t(34123),
                a = t(39229);
            const l = "floordao.eth";
            var n = t(25081),
                o = t(92328);
            var c = async (e, s) => {
                const {
                    proposals: t
                } = await (0, o.Z)({
                    url: (0, n.Z)(a.vQ, e),
                    query: `query Proposals {\n      proposals(\n        first: 1000, # will not have to paginate for a long time\n        skip: 0,\n        where: {\n          ${s ? `id: "${s}"` : ""}\n          space_in: ["floordao.eth"]\n          # aeto.eth, floorintern.eth, multisig, javery.eth, 0xcaps.eth, nobi.eth\n          author_in: ["0x1297ad486549a430d59d9d5f99ed7c216b6e77dd", "0x329393e440fd67ba84296a6d64de42ee79ddd0bd", "0xa9d93a5cca9c98512c8c56547866b1db09090326", "0x4eac46c2472b32dc7158110825a7443d35a90168", "0x84f4840e47199f1090ceb108f74c5f332219539a", "0x51200aa490f8df9ebdc9671cf8c8f8a12c089fda"]\n        },\n        orderBy: "created",\n        orderDirection: desc\n      ) {\n        id\n        link\n        title\n        choices\n        start\n        end\n        snapshot\n        state\n        scores\n      }\n    }`
                });
                return null === t || void 0 === t ? void 0 : t.filter((e => e.title.toLowerCase().includes("collections addition")))
            }, i = t(88767);
            var d = e => {
                const {
                    network: s
                } = (0, r.gK)();
                return (0, i.useQuery)(["proposals", s, e], (() => c(s, e)), {
                    enabled: !!s,
                    refetchInterval: 1e5
                })
            };
            var m = async (e, s) => {
                const {
                    votes: t
                } = await (0, o.Z)({
                    url: (0, n.Z)(a.vQ, e),
                    query: `query Votes {\n      votes (\n        first: 10\n        skip: 0 # may need to paginate this query\n        where: {\n          proposal: "${s.toLowerCase()}"\n        }\n        orderBy: "vp",\n        orderDirection: desc\n      ) {\n        id\n        voter\n        created\n        choice\n        vp\n      }\n    }\n    `
                });
                return t
            };
            var x = e => {
                const {
                    network: s
                } = (0, r.gK)();
                return (0, i.useQuery)(["topVotes", s, e], (() => m(s, e)), {
                    enabled: !(!e || !s),
                    refetchInterval: 1e5
                })
            };
            var u = async (e, s, t) => {
                const {
                    votes: r
                } = await (0, o.Z)({
                    url: (0, n.Z)(a.vQ, e),
                    query: `query UserVote {\n      votes (\n        first: 1\n        where: {\n          proposal: "${s.toLowerCase()}"\n          voter: "${t.toLowerCase()}"\n        }\n      ) {\n        id\n        voter\n        created\n        choice\n        vp\n      }\n    }\n    `
                });
                return null === r || void 0 === r ? void 0 : r[0]
            };
            var h = (e, s) => {
                const {
                    network: t
                } = (0, r.gK)();
                return (0, i.useQuery)(["userVote", t, e, s], (() => u(t, e, s)), {
                    enabled: !!(e && t && s),
                    refetchInterval: 1e5
                })
            },
                v = t(34478),
                p = t.n(v);
            const j = new (p().Client712)("https://hub.snapshot.org"),
                b = p().utils;
            var g = t(7177);
            var f = async ({
                address: e,
                chainId: s,
                blockNumber: t
            }) => {
                var r;
                const [a] = null !== (r = await b.getScores(l, [{
                    name: "erc20-balance-of",
                    network: s,
                    params: {
                        address: (0, n.Z)(g.Dj, s),
                        symbol: "gFLOOR",
                        decimals: 18
                    }
                }], `${s}`, [e], Number(t))) && void 0 !== r ? r : [];
                return a[e] || 0
            };
            var y = ({
                address: e,
                blockNumber: s
            }) => {
                const {
                    network: t
                } = (0, r.gK)();
                return (0, i.useQuery)(["votePower", t, e], (() => f({
                    address: e,
                    chainId: t,
                    blockNumber: s
                })), {
                    enabled: !!(e && t && s),
                    refetchInterval: 1e5
                })
            },
                N = t(77534),
                w = t(1832),
                Z = t(57495),
                O = t(70452),
                k = t(59499),
                P = t(50036),
                D = t(11163),
                S = t(54490),
                C = t(44012),
                I = t(10768),
                F = t(67294),
                E = t(85893);

            function L(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    s && (r = r.filter((function (s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function K(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? L(Object(t), !0).forEach((function (s) {
                        (0, k.Z)(e, s, t[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach((function (s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                    }))
                }
                return e
            }
            var M = ({
                proposal: e,
                votingWeight: s,
                onVoteSubmit: t
            }) => {
                var r;
                const {
                    0: a,
                    1: l
                } = (0, F.useState)({}), n = Object.values(a).reduce(((e, s) => e + s), 0);
                return (0, E.jsxs)(P.Z, {
                    children: [(0, E.jsx)("h3", {
                        className: "text-center font-bold mb-8",
                        children: (0, E.jsx)(C.Z, {
                            id: "vote.form.title"
                        })
                    }), (0, E.jsx)("div", {
                        className: "bg-gray-700 p-3 sm:flex justify-center h4 sm:space-x-8 text-gray-100 text-opacity-75 mb-8",
                        children: (0, E.jsxs)("div", {
                            className: "text-center space-x-3",
                            children: [(0, E.jsx)("span", {
                                className: "text-orange-500",
                                children: (0, E.jsx)(C.Z, {
                                    id: "vote.form.votePower"
                                })
                            }), (0, E.jsx)("span", {
                                children: (0, E.jsx)(C.Z, {
                                    id: "vote.form.weight",
                                    values: {
                                        balance: (0, E.jsx)("b", {
                                            className: "ml-2 text-white",
                                            children: (0, E.jsx)(S.BK, {
                                                value: s
                                            })
                                        }),
                                        nc: e => (0, E.jsx)("span", {
                                            className: "normal-case",
                                            children: e
                                        }),
                                        block: null === e || void 0 === e ? void 0 : e.snapshot
                                    }
                                })
                            })]
                        })
                    }), (0, E.jsxs)("form", {
                        className: "",
                        children: [(0, E.jsx)("div", {
                            className: "space-y-8 sm:space-y-4 mb-8",
                            children: null === e || void 0 === e || null === (r = e.choices) || void 0 === r ? void 0 : r.map(((e, t) => {
                                const r = t + 1;
                                return (0, E.jsxs)("fieldset", {
                                    className: "sm:flex md:block lg:flex justify-between items-center",
                                    children: [(0, E.jsxs)("h5", {
                                        className: "flex sm:block md:flex lg:block justify-between mb-2 sm:mb-0 md:mb-2 lg:mb-0",
                                        children: [e, a[r] ? (0, E.jsx)("span", {
                                            className: "text-teal-500 block",
                                            children: (0, E.jsx)(C.Z, {
                                                id: "vote.form.boost",
                                                values: {
                                                    boost: (0, E.jsx)(S.BK, {
                                                        value: s / n * a[r]
                                                    })
                                                }
                                            })
                                        }) : null]
                                    }), (0, E.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, E.jsxs)("div", {
                                            className: "flex border border-gray-500 rounded-md overflow-hidden ml-auto h-16 flex-1",
                                            children: [(0, E.jsx)("button", {
                                                type: "button",
                                                className: "p-4 bg-gray-700",
                                                onClick: () => l((e => K(K({}, e), {}, {
                                                    [r]: e[r] && e[r] > 1 ? e[r] - 1 : 0
                                                }))),
                                                children: "-"
                                            }), (0, E.jsx)("input", {
                                                type: "number",
                                                min: 0,
                                                max: 100,
                                                className: "bg-gray-800 border-none flex-1 text-center w-24 focus:ring-0 focus:outline-none text-xl",
                                                value: (null === a || void 0 === a ? void 0 : a[r]) || 0,
                                                onChange: e => l((s => K(K({}, s), {}, {
                                                    [r]: Number(e.target.value)
                                                })))
                                            }), (0, E.jsx)("button", {
                                                type: "button",
                                                className: "p-4 bg-gray-700",
                                                onClick: () => l((e => K(K({}, e), {}, {
                                                    [r]: e[r] ? e[r] < 100 ? e[r] + 1 : 100 : 1
                                                }))),
                                                children: "+"
                                            })]
                                        }), (0, E.jsx)("div", {
                                            className: "p-2 ml-4 w-16 text-right",
                                            children: (0, E.jsx)(S.BK, {
                                                style: "percent",
                                                value: a[r] / n || 0,
                                                maximumFractionDigits: 2
                                            })
                                        })]
                                    })]
                                }, r)
                            }))
                        }), (0, E.jsx)(I.ZP, {
                            type: "button",
                            className: "w-full",
                            kind: I.hY.INVERSE,
                            disabled: !n,
                            onClick: () => t({
                                choice: a
                            }),
                            children: (0, E.jsx)(C.Z, {
                                id: "common.vote"
                            })
                        })]
                    })]
                })
            },
                R = t(9870);
            var V = async ({
                provider: e,
                address: s,
                proposalId: t,
                choice: r
            }) => await j.vote(e, s, {
                space: l,
                proposal: t,
                type: "weighted",
                choice: r,
                metadata: JSON.stringify({})
            });
            var $ = () => {
                const {
                    library: e
                } = (0, Z.K)(), s = (0, i.useQueryClient)(), {
                    showVoteSuccessModal: t
                } = (0, R.vR)(), {
                    showErrorModal: r
                } = (0, R.vR)();
                return (0, i.useMutation)((({
                    address: s,
                    choice: t,
                    proposalId: r
                }) => V({
                    address: s,
                    choice: t,
                    proposalId: r,
                    provider: e
                })), {
                    onSuccess(e) {
                        t({
                            receipt: e
                        }), s.refetchQueries(["proposals"]), s.refetchQueries(["topVotes"]), s.refetchQueries(["userVote"])
                    },
                    onError(e) {
                        4001 !== (null === e || void 0 === e ? void 0 : e.code) && r({
                            error: e
                        })
                    }
                })
            };
            var Q = e => {
                switch (e) {
                    case "loading":
                        return I.ZM.BUSY;
                    case "success":
                        return I.ZM.SUCCESS;
                    default:
                        return I.ZM.IDLE
                }
            };
            var _ = ({
                address: e,
                proposalId: s,
                onCancelClick: t,
                choices: r,
                choice: a,
                votePower: l
            }) => {
                const {
                    mutate: n,
                    status: o
                } = $(), c = Object.entries(a).filter((([, e]) => !!e)), i = null === c || void 0 === c ? void 0 : c.reduce(((e, [, s]) => e + Number(s)), 0);
                return (0, E.jsxs)("div", {
                    className: "space-y-4 my-4",
                    children: [(0, E.jsx)("h5", {
                        className: "text-center",
                        children: (0, E.jsx)(C.Z, {
                            id: "vote.form.confirm.title"
                        })
                    }), (0, E.jsx)("div", {
                        className: "border border-gray-700 rounded-md p-6 uppercase",
                        children: (0, E.jsxs)("dl", {
                            children: [null === c || void 0 === c ? void 0 : c.map((([e, s]) => (0, E.jsxs)("div", {
                                className: "flex justify-between mb-1",
                                children: [(0, E.jsx)("dt", {
                                    className: "mr-4",
                                    children: r[Number(e) - 1]
                                }), (0, E.jsx)("dd", {
                                    children: (0, E.jsx)(S.BK, {
                                        value: s / i,
                                        style: "percent",
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2
                                    })
                                })]
                            }, e))), (0, E.jsxs)("div", {
                                className: "flex justify-between mt-4 pt-4 border-t border-gray-700",
                                children: [(0, E.jsx)("dt", {
                                    className: "text-orange-500",
                                    children: (0, E.jsx)(C.Z, {
                                        id: "vote.form.confirm.votePower"
                                    })
                                }), (0, E.jsxs)("dd", {
                                    className: "normal-case",
                                    children: [(0, E.jsx)(S.BK, {
                                        value: l,
                                        maximumFractionDigits: 3,
                                        minimumFractionDigits: 2
                                    }), " ", (0, E.jsx)(C.Z, {
                                        id: "common.gfloor"
                                    })]
                                })]
                            })]
                        })
                    }), (0, E.jsxs)("div", {
                        className: "grid grid-cols-2 space-x-4",
                        children: [(0, E.jsx)(I.ZP, {
                            onClick: t,
                            children: (0, E.jsx)(C.Z, {
                                id: "common.cancel"
                            })
                        }), (0, E.jsx)(I.ZP, {
                            kind: I.hY.INVERSE,
                            onClick: () => n({
                                address: e,
                                choice: a,
                                proposalId: s
                            }),
                            state: Q(o),
                            children: (0, E.jsx)(C.Z, {
                                id: "common.vote"
                            })
                        })]
                    })]
                })
            };
            const B = e => e ? Object.fromEntries(Object.entries(e).filter((([, e]) => e && e > 0))) : {};
            var A = ({
                proposal: e
            }) => {
                const {
                    address: s
                } = (0, N.tN)(), {
                    setModal: t
                } = (0, R.vR)(), {
                    data: r
                } = y({
                    address: s,
                    blockNumber: null === e || void 0 === e ? void 0 : e.snapshot
                });
                return (0, E.jsx)(M, {
                    proposal: e,
                    votingWeight: r,
                    onVoteSubmit: ({
                        choice: a
                    }) => {
                        const l = B(a);
                        t((0, E.jsx)(_, {
                            address: s,
                            onCancelClick: () => t(null),
                            choices: e.choices,
                            choice: l,
                            votePower: r,
                            proposalId: e.id
                        }))
                    }
                })
            },
                q = t(58054),
                z = t(25705),
                T = t(57938),
                W = t(17540);
            var U = ({
                id: e,
                link: s,
                start: t,
                end: r,
                active: a
            }) => {
                const {
                    chainId: l
                } = (0, Z.K)(), {
                    getExplorerAddressLink: o
                } = (0, W.e)(l || 1), c = new Date(1e3 * t), i = new Date(1e3 * r);
                return (0, E.jsxs)(P.Z, {
                    flush: !0,
                    children: [(0, E.jsx)("header", {
                        className: "bg-gray-700 flex-1 p-4 text-h3 text-center border-b border-gray-900 text-gray-100 text-opacity-75",
                        children: (0, E.jsx)(C.Z, {
                            id: "vote.info.title"
                        })
                    }), (0, E.jsx)("div", {
                        className: "p-10",
                        children: (0, E.jsxs)("dl", {
                            className: "space-y-3 h4",
                            children: [(0, E.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, E.jsx)("dt", {
                                    className: "text-gray-100 text-opacity-75",
                                    children: (0, E.jsx)(C.Z, {
                                        id: "vote.info.snapshot"
                                    })
                                }), (0, E.jsx)("dd", {
                                    className: "ml-4 text-right font-bold",
                                    children: (0, E.jsxs)("a", {
                                        href: s,
                                        target: "_blank",
                                        rel: "noreferrer nofollow",
                                        className: "inline-flex hover:underline cursor-pointer",
                                        children: [(0, T.Z)(e), (0, E.jsx)(q.ZP, {
                                            name: q.PJ.EXTERNAL_LINK,
                                            size: q.$u.SMALL,
                                            className: "ml-2"
                                        })]
                                    })
                                })]
                            }), (0, E.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, E.jsx)("dt", {
                                    className: "text-gray-100 text-opacity-75",
                                    children: (0, E.jsx)(C.Z, {
                                        id: "vote.info.system"
                                    })
                                }), (0, E.jsx)("dd", {
                                    className: "ml-4 text-right font-bold",
                                    children: (0, E.jsx)(C.Z, {
                                        id: "vote.info.system.weighted"
                                    })
                                })]
                            }), (0, E.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, E.jsx)("dt", {
                                    className: "text-gray-100 text-opacity-75",
                                    children: (0, E.jsx)(C.Z, {
                                        id: "common.gfloor"
                                    })
                                }), (0, E.jsx)("dd", {
                                    className: "ml-4 text-right font-bold",
                                    children: (0, E.jsxs)("a", {
                                        href: o((0, n.Z)(g.Dj, l)),
                                        className: "inline-flex hover:underline cursor-pointer",
                                        children: [(0, T.Z)((0, n.Z)(g.Dj, l)), (0, E.jsx)(q.ZP, {
                                            name: q.PJ.EXTERNAL_LINK,
                                            size: q.$u.SMALL,
                                            className: "ml-2"
                                        })]
                                    })
                                })]
                            }), (0, E.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, E.jsx)("dt", {
                                    className: "text-gray-100 text-opacity-75",
                                    children: (0, E.jsx)(C.Z, {
                                        id: "vote.info.startDate"
                                    })
                                }), (0, E.jsx)("dd", {
                                    className: "ml-4 text-right font-bold",
                                    children: c.toDateString()
                                })]
                            }), a ? (0, E.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, E.jsx)("dt", {
                                    className: "text-gray-100 text-opacity-75",
                                    children: (0, E.jsx)(C.Z, {
                                        id: "vote.info.endsIn"
                                    })
                                }), (0, E.jsx)("dd", {
                                    className: "ml-4 text-right font-bold text-teal-500 tracking-normal",
                                    children: (0, E.jsx)(z.Z, {
                                        time: i.getTime() / 1e3
                                    })
                                })]
                            }) : (0, E.jsx)(E.Fragment, {
                                children: (0, E.jsxs)("div", {
                                    className: "flex justify-between",
                                    children: [(0, E.jsx)("dt", {
                                        className: "text-gray-100 text-opacity-75",
                                        children: (0, E.jsx)(C.Z, {
                                            id: "vote.info.endDate"
                                        })
                                    }), (0, E.jsx)("dd", {
                                        className: "ml-4 text-right font-bold",
                                        children: i.toDateString()
                                    })]
                                })
                            })]
                        })
                    })]
                })
            },
                J = t(66686),
                Y = t(58668),
                G = t(41664);
            var X = ({
                hasFloor: e,
                hasSFloor: s,
                chainId: t
            }) => {
                const r = ((e, s) => !1 === s && !1 === e ? "buy" : !0 === s ? "stake" : !0 === e ? "wrap" : "unknown")(s, e),
                    a = ((e, s) => "buy" === e ? (0, Y.MP)({
                        chainId: s
                    }) : "wrap" === e ? "/wrap" : "stake" === e ? "/stake" : "")(r, t),
                    l = (0, Y.Ss)(s ? J.O.S_FLOOR : J.O.FLOOR);
                return (0, E.jsx)(G.default, {
                    href: a,
                    children: (0, E.jsxs)("a", {
                        className: "group font-sans block p-8 text-center border-teal-500 border-2 rounded-lg teal-inset--large hover:bg-teal-900 hover:bg-opacity-20 transition-colors",
                        href: a,
                        target: "buy" === r ? "_blank" : null,
                        rel: "noopener noreferrer",
                        children: [(0, E.jsx)("h1", {
                            className: "text-xl mb-2 text-teal-500",
                            children: (0, E.jsx)(C.Z, {
                                id: "vote.operate.title"
                            })
                        }), "unknown" === r ? (0, E.jsx)("span", {
                            className: "inline-block w-40 h-4 bg-teal-900 bg-opacity-50 animate-pulse"
                        }) : (0, E.jsx)("p", {
                            className: "text-xs animate-pulse group-hover:animate-none",
                            children: (0, E.jsx)(C.Z, {
                                id: `vote.operate.${r}`,
                                values: {
                                    b: e => (0, E.jsx)("b", {
                                        className: `${l.color} normal-case`,
                                        children: e
                                    })
                                }
                            })
                        })]
                    })
                })
            };
            var H = () => {
                const {
                    chainId: e
                } = (0, Z.K)(), {
                    address: s
                } = (0, N.tN)(), t = (0, O.m)((0, n.Z)(g.CR, e), s), r = (0, O.m)((0, n.Z)(g.aj, e), s), a = t && t.gt(0), l = r && r.gt(0);
                return (0, E.jsx)(X, {
                    hasSFloor: a,
                    hasFloor: l,
                    chainId: e
                })
            },
                ee = t(7606),
                se = t(48209);
            var te = ({
                proposal: e,
                status: s
            }) => {
                const t = (0, se.Z)(),
                    r = null === e || void 0 === e ? void 0 : e.scores.reduce(((e, s) => e + Number(s)), 0),
                    a = null === e || void 0 === e ? void 0 : e.scores.map(((s, t) => ({
                        name: e.choices[t],
                        votes: s
                    }))).sort(((e, s) => s.votes - e.votes));
                return (0, E.jsx)("div", {
                    className: "space-y-6",
                    children: null === a || void 0 === a ? void 0 : a.map(((e, a) => (0, E.jsxs)("div", {
                        children: [(0, E.jsxs)("header", {
                            className: "flex justify-between items-center mb-2 " + (0 === a && "closed" === s ? "text-white" : "text-gray-600"),
                            children: [(0, E.jsxs)("h5", {
                                className: "truncate mr-4",
                                children: [0 === a && "closed" === s ? (0, E.jsx)("span", {
                                    className: "text-teal-500 mr-2",
                                    children: (0, E.jsx)(C.Z, {
                                        id: "vote.results.winner"
                                    })
                                }) : null, e.name]
                            }), (0, E.jsxs)("span", {
                                className: "whitespace-nowrap text-sm",
                                children: [(0, E.jsxs)("span", {
                                    className: "mr-2 normal-case text-xs",
                                    children: [t(e.votes, {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }), " ", (0, E.jsx)(C.Z, {
                                        id: "common.gfloor"
                                    })]
                                }), (0, E.jsx)("span", {
                                    className: "" + ("active" === s ? "text-gray-50" : ""),
                                    children: (0, E.jsx)(S.BK, {
                                        value: e.votes / r || 0,
                                        style: "percent",
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })
                                })]
                            })]
                        }), (0, E.jsx)(ee.Z, {
                            value: e.votes / r * 100,
                            color: "teal"
                        })]
                    }, e.name)))
                })
            };
            var re = async (e, s) => await e.getAvatar(s);
            var ae = e => {
                const {
                    library: s,
                    chainId: t,
                    active: r
                } = (0, Z.K)();
                return (0, i.useQuery)(["avatar", e, t], (() => re(s, e)), {
                    enabled: r && !!e,
                    staleTime: 1 / 0,
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    refetchOnReconnect: !1,
                    refetchOnMount: !1
                })
            };
            var le = async (e, s) => await e.lookupAddress(s);
            var ne = e => {
                const {
                    library: s,
                    active: t
                } = (0, Z.K)();
                return (0, i.useQuery)(["ens", null === e || void 0 === e ? void 0 : e.toLowerCase()], (() => le(s, e)), {
                    enabled: t && !!e,
                    staleTime: 1 / 0,
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    refetchOnReconnect: !1,
                    refetchOnMount: !1
                })
            };
            const oe = new Array(4);

            function ce() {
                const e = oe[0] ^ oe[0] << 11;
                return oe[0] = oe[1], oe[1] = oe[2], oe[2] = oe[3], oe[3] = oe[3] ^ oe[3] >> 19 ^ e ^ e >> 8, (oe[3] >>> 0) / (1 << 31 >>> 0)
            }

            function ie() {
                return "hsl(" + Math.floor(360 * ce()) + "," + (60 * ce() + 40 + "%") + "," + (25 * (ce() + ce() + ce() + ce()) + "%") + ")"
            }

            function de(e) {
                const s = {};
                return s.seed = e.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16),
                    function (e) {
                        oe.fill(0);
                        for (let s = 0; s < e.length; s++) oe[s % 4] = (oe[s % 4] << 5) - oe[s % 4] + e.charCodeAt(s)
                    }(s.seed), s.size = e.size || 8, s.scale = e.scale || 4, s.color = e.color || ie(), s.bgcolor = e.bgcolor || ie(), s.spotcolor = e.spotcolor || ie(), s
            }

            function me(e, s) {
                const t = function (e) {
                    const s = e,
                        t = e,
                        r = Math.ceil(s / 2),
                        a = s - r,
                        l = [];
                    for (let n = 0; n < t; n++) {
                        let e = [];
                        for (let t = 0; t < r; t++) e[t] = Math.floor(2.3 * ce());
                        const s = e.slice(0, a);
                        s.reverse(), e = e.concat(s);
                        for (let t = 0; t < e.length; t++) l.push(e[t])
                    }
                    return l
                }((e = de(e || {})).size),
                    r = Math.sqrt(t.length);
                s.width = s.height = e.size * e.scale;
                const a = s.getContext("2d");
                a.fillStyle = e.bgcolor, a.fillRect(0, 0, s.width, s.height), a.fillStyle = e.color;
                for (let l = 0; l < t.length; l++)
                    if (t[l]) {
                        const s = Math.floor(l / r),
                            n = l % r;
                        a.fillStyle = 1 == t[l] ? e.color : e.spotcolor, a.fillRect(n * e.scale, s * e.scale, e.scale, e.scale)
                    } return s
            }
            var xe = ({
                address: e,
                diameter: s = 32
            }) => {
                const {
                    0: t,
                    1: r
                } = (0, F.useState)(null), a = (0, F.useRef)(null);
                return (0, F.useEffect)((() => {
                    if (e && a.current) {
                        const s = a.current;
                        me({
                            seed: null === e || void 0 === e ? void 0 : e.toLowerCase()
                        }, s);
                        const l = s.toDataURL();
                        l !== t && r(l)
                    }
                }), [t, e]), e ? (0, E.jsxs)(E.Fragment, {
                    children: [(0, E.jsx)("canvas", {
                        ref: a,
                        style: {
                            display: "none"
                        }
                    }), (0, E.jsx)("img", {
                        src: t,
                        height: s,
                        width: s,
                        alt: "blockie",
                        className: "rounded-full"
                    })]
                }) : (0, E.jsx)("span", {
                    style: {
                        width: s,
                        height: s
                    },
                    className: "animate-pulse bg-gray-600 rounded-full"
                })
            },
                ue = t(83778);
            const he = ({
                ens: e,
                address: s
            }) => {
                const {
                    data: t,
                    isLoading: r
                } = ae(e);
                return r ? (0, E.jsx)("span", {
                    style: {
                        width: 24,
                        height: 24
                    },
                    className: "animate-pulse bg-gray-600 rounded-full"
                }) : t ? (0, E.jsx)("img", {
                    src: `https://metadata.ens.domains/mainnet/avatar/${e}`,
                    width: 24,
                    height: 24,
                    alt: e,
                    className: "rounded-full"
                }) : (0, E.jsx)(xe, {
                    address: s,
                    diameter: 24
                })
            };
            var ve = ({
                vp: e,
                voter: s,
                choice: t,
                choices: r,
                chainId: a
            }) => {
                const l = (0, se.Z)(),
                    {
                        data: n,
                        isLoading: o
                    } = ne(s),
                    c = B(t),
                    i = Object.values(c).reduce(((e, s) => e + s), 0);
                return (0, E.jsxs)("div", {
                    children: [(0, E.jsxs)("div", {
                        className: "flex justify-between items-center h5",
                        children: [(0, E.jsx)("span", {
                            className: "text-gray-100 text-opacity-75 normal-case inline-flex items-center",
                            children: o ? (0, E.jsx)("img", {
                                src: "/images/sweep.gif",
                                className: "w-4 h-4",
                                alt: "\ud83e\uddf9"
                            }) : (0, E.jsxs)(E.Fragment, {
                                children: [(0, E.jsx)(he, {
                                    address: s,
                                    ens: n
                                }), (0, E.jsx)("a", {
                                    className: "ml-2 truncate hover:underline",
                                    href: (0, ue.Ne)(n || s, a),
                                    target: "_blank",
                                    rel: "nofollow noreferrer",
                                    children: n || (0, T.Z)(s)
                                })]
                            })
                        }), (0, E.jsx)("span", {
                            className: "ml-4",
                            children: l(e, {
                                maximumFractionDigits: 2
                            })
                        })]
                    }), (0, E.jsx)("div", {
                        className: "text-xs mt-1 text-gray-300",
                        children: Object.entries(c).map((([s, t]) => {
                            const a = r[Number(s) - 1],
                                l = e / i * t;
                            return (0, E.jsxs)("span", {
                                className: "mr-4 inline-block",
                                children: [(0, E.jsx)("span", {
                                    className: "mr-2",
                                    children: a
                                }), (0, E.jsx)("span", {
                                    children: (0, E.jsx)(S.BK, {
                                        value: l / e,
                                        style: "percent"
                                    })
                                })]
                            }, s)
                        }))
                    })]
                })
            };

            function pe(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    s && (r = r.filter((function (s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function je(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? pe(Object(t), !0).forEach((function (s) {
                        (0, k.Z)(e, s, t[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : pe(Object(t)).forEach((function (s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                    }))
                }
                return e
            }
            var be = ({
                votes: e,
                choices: s
            }) => {
                const {
                    chainId: t
                } = (0, Z.K)(), r = (0, F.useMemo)((() => null === e || void 0 === e ? void 0 : e.sort(((e, s) => s.vp - e.vp)).filter((e => e.vp)).slice(0, 10)), [e]);
                return null !== r && void 0 !== r && r.length ? (0, E.jsxs)(P.Z, {
                    flush: !0,
                    children: [(0, E.jsx)("header", {
                        className: "bg-gray-700 flex-1 p-4 text-h3 text-center border-b border-gray-900 text-gray-100 text-opacity-75",
                        children: (0, E.jsx)(C.Z, {
                            id: "vote.top.title"
                        })
                    }), (0, E.jsx)("div", {
                        className: "p-10",
                        children: (0, E.jsx)("div", {
                            className: "space-y-4",
                            children: null === r || void 0 === r ? void 0 : r.map((e => (0, F.createElement)(ve, je(je({}, e), {}, {
                                key: e.id,
                                choices: s,
                                chainId: t
                            }))))
                        })
                    })]
                }) : null
            },
                ge = t(22633);
            var fe = ({
                proposal: e,
                vote: s
            }) => {
                const t = Object.entries(B(null === s || void 0 === s ? void 0 : s.choice)),
                    r = null === t || void 0 === t ? void 0 : t.reduce(((e, [, s]) => e + s), 0),
                    a = (0, se.Z)();
                return (0, E.jsxs)(P.Z, {
                    children: [(0, E.jsx)("h3", {
                        className: "text-center font-bold mb-8",
                        children: (0, E.jsx)(C.Z, {
                            id: "vote.voted.title"
                        })
                    }), (0, E.jsxs)("div", {
                        className: "mb-8 grid lg:grid-cols-2 gap-4 text-center group font-sans p-8  border-teal-500 border-2 rounded-lg teal-inset--large hover:bg-teal-900 hover:bg-opacity-20 transition-colors",
                        children: [(0, E.jsxs)("div", {
                            className: "lg:border-r lg:border-teal-900 border-opacity-50 flex flex-col-reverse lg:flex-col",
                            children: [(0, E.jsx)("h2", {
                                className: "normal-case my-auto truncate pt-2",
                                children: s.vp ? a(s.vp, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 3
                                }) : (0, E.jsx)("img", {
                                    src: "/images/sweep.gif",
                                    className: "w-8 h-8 my-auto mx-auto",
                                    alt: "\ud83e\uddf9"
                                })
                            }), (0, E.jsx)("p", {
                                className: "mt-auto text-orange-500 text-sm py-2",
                                children: (0, E.jsx)(C.Z, {
                                    id: "vote.voted.votePower"
                                })
                            })]
                        }), (0, E.jsxs)("div", {
                            className: "flex flex-col-reverse lg:flex-col",
                            children: [(0, E.jsx)("div", {
                                className: "my-auto text-xs pt-2",
                                children: null === t || void 0 === t ? void 0 : t.map((([s, t]) => {
                                    const a = e.choices[Number(s) - 1];
                                    return (0, E.jsxs)("span", {
                                        className: "inline-block px-3 align-middle break-words",
                                        children: [a, " ", (0, E.jsx)(S.BK, {
                                            value: t / r,
                                            style: "percent"
                                        })]
                                    }, s)
                                }))
                            }), (0, E.jsx)("p", {
                                className: "mt-auto text-orange-500 text-sm py-2",
                                children: (0, E.jsx)(C.Z, {
                                    id: "vote.voted.voteWeight"
                                })
                            })]
                        })]
                    }), 0 === (null === s || void 0 === s ? void 0 : s.vp) ? (0, E.jsx)(ge.Z, {
                        className: "text-xs mb-8",
                        children: (0, E.jsx)(C.Z, {
                            id: "vote.voted.apiDelay",
                            values: {
                                a: s => (0, E.jsx)("a", {
                                    href: e.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "underline hover:no-underline",
                                    children: s
                                })
                            }
                        })
                    }) : null, (0, E.jsx)(te, {
                        proposal: e,
                        status: e.state
                    })]
                })
            };

            function ye(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    s && (r = r.filter((function (s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function Ne(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? ye(Object(t), !0).forEach((function (s) {
                        (0, k.Z)(e, s, t[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ye(Object(t)).forEach((function (s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                    }))
                }
                return e
            }
            var we = ({
                proposals: e,
                proposal: s,
                topVotes: t,
                userVote: r,
                canVote: a,
                hasGFloor: l,
                votePower: n,
                isConnected: o
            }) => {
                const {
                    push: c
                } = (0, D.useRouter)(), i = "active" === (null === s || void 0 === s ? void 0 : s.state), d = i && a, m = !!r;
                return (0, E.jsx)("article", {
                    className: "mt-10 sm:mt-20 mb-20 space-y-12 w-full max-w-7xl mx-auto",
                    children: (0, E.jsxs)("div", {
                        className: "px-6",
                        children: [(0, E.jsx)("h1", {
                            className: "text-center text-teal-500",
                            children: (0, E.jsx)(C.Z, {
                                id: "common.vote"
                            })
                        }), (0, E.jsxs)("div", {
                            className: "md:grid md:grid-cols-2 lg:grid-cols-3 mt-14 gap-6 space-y-6 md:space-y-0",
                            children: [(0, E.jsxs)("section", {
                                className: "lg:col-span-2",
                                children: [l || i ? null : (0, E.jsx)("div", {
                                    className: "mb-8",
                                    children: (0, E.jsx)(H, {})
                                }), (0, E.jsxs)("header", {
                                    className: "flex justify-between items-center",
                                    children: [(0, E.jsx)("h3", {
                                        children: null === s || void 0 === s ? void 0 : s.title
                                    }), i ? (0, E.jsxs)("span", {
                                        className: "align-middle inline-flex rounded-md border border-red-400 text-xs items-center px-1 ml-2 mr-auto animate-pulse",
                                        children: [(0, E.jsx)("span", {
                                            className: "w-2 h-2 rounded-full bg-red-400 mr-1"
                                        }), (0, E.jsx)(C.Z, {
                                            id: "common.live"
                                        })]
                                    }) : null, (0, E.jsx)("select", {
                                        className: "bg-gray-800 rounded-md py-2 border-none cursor-pointer focus:ring-1 focus:ring-teal-500 ml-4",
                                        onChange: e => c(`/vote/${e.target.value}`),
                                        value: null === s || void 0 === s ? void 0 : s.id,
                                        children: null === e || void 0 === e ? void 0 : e.map((e => (0, E.jsx)("option", {
                                            value: e.id,
                                            children: e.title.split(" - ")[0]
                                        }, e.id)))
                                    })]
                                }), (0, E.jsx)("div", {
                                    className: "mt-6",
                                    children: m ? (0, E.jsx)(fe, {
                                        proposal: s,
                                        vote: r
                                    }) : d ? (0, E.jsx)(A, {
                                        proposal: s
                                    }) : (0, E.jsxs)(P.Z, {
                                        children: [(0, E.jsx)("h3", {
                                            className: "text-center font-bold mb-8",
                                            children: (0, E.jsx)(C.Z, {
                                                id: `vote.results.${i ? "active" : "closed"}.title`
                                            })
                                        }), o ? (0, E.jsx)("div", {
                                            className: "bg-gray-700 p-3 sm:flex justify-center h4 sm:space-x-8 text-gray-100 text-opacity-75 mb-8",
                                            children: (0, E.jsxs)("div", {
                                                className: "text-center space-x-3",
                                                children: [(0, E.jsx)("span", {
                                                    className: "text-orange-500",
                                                    children: (0, E.jsx)(C.Z, {
                                                        id: "vote.form.votePower"
                                                    })
                                                }), (0, E.jsx)("span", {
                                                    children: (0, E.jsx)(C.Z, {
                                                        id: "vote.form.weight",
                                                        values: {
                                                            balance: (0, E.jsx)("b", {
                                                                className: "ml-2 text-white",
                                                                children: (0, E.jsx)(S.BK, {
                                                                    value: n || 0
                                                                })
                                                            }),
                                                            nc: e => (0, E.jsx)("span", {
                                                                className: "normal-case",
                                                                children: e
                                                            }),
                                                            block: null === s || void 0 === s ? void 0 : s.snapshot
                                                        }
                                                    })
                                                })]
                                            })
                                        }) : null, (0, E.jsx)(te, {
                                            proposal: s,
                                            status: null === s || void 0 === s ? void 0 : s.state
                                        })]
                                    })
                                })]
                            }), (0, E.jsxs)("aside", {
                                className: "space-y-6",
                                children: [(0, E.jsx)(U, Ne(Ne({}, s), {}, {
                                    active: i
                                })), d && !m ? (0, E.jsxs)(P.Z, {
                                    flush: !0,
                                    children: [(0, E.jsx)("header", {
                                        className: "bg-gray-700 flex-1 p-4 text-h3 text-center border-b border-gray-900 text-gray-100 text-opacity-75",
                                        children: (0, E.jsx)(C.Z, {
                                            id: "vote.currentResults.title"
                                        })
                                    }), (0, E.jsx)("div", {
                                        className: "p-10",
                                        children: (0, E.jsx)(te, {
                                            proposal: s,
                                            status: "active"
                                        })
                                    })]
                                }) : null, (0, E.jsx)(be, {
                                    votes: t,
                                    choices: null === s || void 0 === s ? void 0 : s.choices
                                })]
                            })]
                        })]
                    })
                })
            };
            var Ze = () => (0, E.jsx)("article", {
                className: "mt-10 sm:mt-20 mb-20 space-y-12 w-full max-w-7xl mx-auto",
                children: (0, E.jsxs)("div", {
                    className: "px-6",
                    children: [(0, E.jsx)("h1", {
                        className: "text-center text-teal-500",
                        children: (0, E.jsx)(C.Z, {
                            id: "common.vote"
                        })
                    }), (0, E.jsxs)("div", {
                        className: "md:grid md:grid-cols-2 lg:grid-cols-3 mt-14 gap-6 space-y-6 md:space-y-0 animate-pulse",
                        children: [(0, E.jsxs)("section", {
                            className: "lg:col-span-2",
                            children: [(0, E.jsxs)("header", {
                                className: "flex justify-between items-center",
                                children: [(0, E.jsx)("div", {
                                    className: "h-6 w-64 bg-gray-700"
                                }), (0, E.jsx)("div", {
                                    className: "w-32 h-8 bg-gray-700"
                                })]
                            }), (0, E.jsx)("div", {
                                className: "mt-6",
                                children: (0, E.jsxs)(P.Z, {
                                    className: "space-y-4",
                                    children: [(0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-6"
                                    }), (0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-6"
                                    }), (0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-6"
                                    }), (0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-6"
                                    })]
                                })
                            })]
                        }), (0, E.jsxs)("aside", {
                            className: "space-y-6",
                            children: [(0, E.jsxs)(P.Z, {
                                flush: !0,
                                children: [(0, E.jsx)("div", {
                                    className: "bg-gray-700 flex-1 p-7 border-b border-gray-900 text-gray-100 text-opacity-75"
                                }), (0, E.jsxs)("div", {
                                    className: "p-10 space-y-4",
                                    children: [(0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-3"
                                    }), (0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-3"
                                    }), (0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-3"
                                    }), (0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-3"
                                    })]
                                })]
                            }), (0, E.jsxs)(P.Z, {
                                flush: !0,
                                children: [(0, E.jsx)("div", {
                                    className: "bg-gray-700 flex-1 p-7 border-b border-gray-900 text-gray-100 text-opacity-75"
                                }), (0, E.jsxs)("div", {
                                    className: "p-10 space-y-4",
                                    children: [(0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-3"
                                    }), (0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-3"
                                    }), (0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-3"
                                    }), (0, E.jsx)("div", {
                                        className: "bg-gray-700 flex-1 p-3"
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            });
            var Oe = ({
                voteId: e
            }) => {
                const {
                    address: s
                } = (0, N.tN)(), {
                    chainId: t
                } = (0, Z.K)(), {
                    data: r,
                    status: a
                } = d(), l = (0, O.m)((0, n.Z)(g.Dj, t), s), o = r ? e ? null === r || void 0 === r ? void 0 : r.find((s => s.id.toLowerCase() === e.toLowerCase())) : null === r || void 0 === r ? void 0 : r[0] : null, {
                    data: c
                } = y({
                    address: s,
                    blockNumber: null === o || void 0 === o ? void 0 : o.snapshot
                }), {
                    data: i,
                    status: m
                } = x(null === o || void 0 === o ? void 0 : o.id), {
                    data: u,
                    status: v
                } = h(null === o || void 0 === o ? void 0 : o.id, s), p = null === l || void 0 === l ? void 0 : l.gt(0), j = c && c > 0, b = (0, w.Z)(m, a), f = !!s;
                return "loading" === b || "idle" === b || f && ("idle" === v || "loading" === v) ? (0, E.jsx)(Ze, {}) : (0, E.jsx)(we, {
                    proposals: r,
                    proposal: o,
                    topVotes: i,
                    userVote: u,
                    canVote: j,
                    hasGFloor: p,
                    votePower: c,
                    isConnected: f
                })
            }
        },
        1832: function (e, s) {
            const t = ["success", "error", "idle", "loading"];
            s.Z = (...e) => e.reduce(((e, s) => t.indexOf(s) > t.indexOf(e) ? s : e), "success")
        }
    }
]);