(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2927],
  {
    29937: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { __N_SSP: () => z, default: () => C });
      var r = n(59860),
        i = n(42969),
        o = n(27925),
        a = n(63857),
        s = n(43081),
        c = n.n(s),
        l = n(66125),
        p = n(14232),
        d = n(78820),
        u = n(6428),
        h = n.n(u),
        m = n(33845),
        f = n.n(m),
        b = n(16752),
        v = n(4105),
        x = n(46962),
        g = n(14e3),
        w = n(733),
        j = n(62867),
        y = n(36423),
        O = n(32939),
        N = n(40673),
        k = n(80277),
        _ = n(32716),
        D = n(98524),
        P = n(80937),
        A = n(54737),
        T = n(37876),
        E = ["editorViewportWidth"];
      function S(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(n), !0).forEach(function (t) {
                (0, i.A)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : S(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var z = !0;
      let C = function (e) {
        var t,
          n,
          i,
          s,
          u,
          m = e.pageData,
          S = e.pageId,
          z = (0, g.useRouter)(),
          C = (0, w.bi)().setPageId;
        (0, p.useEffect)(
          function () {
            var e;
            C(S),
              ((e = (0, a.A)(
                c().mark(function e() {
                  return c().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), (0, d.HV)(S);
                          case 3:
                            e.next = 8;
                            break;
                          case 5:
                            (e.prev = 5),
                              (e.t0 = e.catch(0)),
                              console.error(
                                "Failed to update view count:",
                                e.t0
                              );
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  );
                })
              )),
              function () {
                return e.apply(this, arguments);
              })();
          },
          [S, z]
        );
        var R = JSON.parse(h().decompress(h().decodeBase64(m.pageData))),
          I = (0, p.useState)(!0),
          U = I[0],
          M = I[1],
          H = (0, p.useState)(R),
          K = H[0],
          V = H[1],
          W = (0, p.useState)(0),
          B = W[0],
          F = W[1],
          X = (0, p.useMemo)(function () {
            return (0, A.n)(R);
          }, []),
          G = X.hasEnvelope && X.preventScrollUntilOpened;
        (0, p.useEffect)(
          function () {
            var e = function () {
              M(!0);
              var e = parseInt(R.ROOT.props.width),
                t = parseInt(R.ROOT.props.height),
                n = B / e,
                i = Math.max(t * n, 0.9 * window.innerHeight),
                a = Object.entries(R).reduce(function (e, t) {
                  var r = (0, o.A)(t, 2),
                    i = r[0],
                    a = r[1];
                  if (!a.props) return (e[i] = a), e;
                  var s = L(
                    L({}, a.props),
                    {},
                    {
                      top: a.props.top * n,
                      left: a.props.left * n,
                      width: a.props.width * n,
                      height: a.props.height * n,
                      fontSize: a.props.fontSize * n,
                    }
                  );
                  return (e[i] = L(L({}, a), {}, { props: s })), e;
                }, {}),
                s = R.ROOT.props,
                c = (s.editorViewportWidth, (0, r.A)(s, E));
              (a.ROOT = L(
                L({}, R.ROOT),
                {},
                { props: L(L({}, c), {}, { width: B, height: i }) }
              )),
                V(a),
                setTimeout(function () {
                  M(!1);
                }, 1e3 * !m.openingEffect);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          },
          [B]
        ),
          (0, p.useEffect)(function () {
            var e = function () {
              var e = Math.round(0.55 * (0.9 * window.innerHeight));
              e > 500 ? F(500) : F(e);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          }, []);
        var J = (0, _.g)(m.categoryId),
          Z = m.pageName || "Thiệp online",
          q = m.description
            ? m.description
            : "".concat(Z, " - ").concat(J, " tr\xean CineLove"),
          Q = m.thumbnailKey
            ? (0, N.T_)(m.thumbnailKey)
            : "".concat(y.A.APP_URL, "/cinelove-default-thumbnail.jpg"),
          Y =
            (null == (t = m.openingEffect) ? void 0 : t.duration) * 1e3 || 2e3;
        return m.reachLimit
          ? (0, T.jsx)(D.A, {})
          : (0, T.jsxs)(T.Fragment, {
              children: [
                (0, T.jsx)(j.bV, {
                  title: Z,
                  titleTemplate: "%s | CineLove",
                  defaultTitle: "CineLove",
                  description: q,
                  canonical: "".concat(y.A.APP_URL, "/s/").concat(S),
                  openGraph: {
                    type: "website",
                    url: "".concat(y.A.APP_URL, "/s/").concat(S),
                    title: Z + " | CineLove",
                    description: q,
                    images: [{ url: Q, secureUrl: Q, alt: Z }],
                    siteName: "CineLove",
                  },
                  twitter: {
                    handle: "@cinelove",
                    site: "@cinelove",
                    cardType: "summary_large_image",
                  },
                }),
                (0, T.jsx)(P.yb, {
                  pageId: S,
                  pageTitle: Z,
                  pageDescription: q,
                  thumbnailUrl: Q,
                  userName: m.userName,
                  createdAt: m.createdAt,
                  updatedAt: m.updatedAt,
                  isMobile: !1,
                }),
                (0, T.jsx)(x.A, {
                  containerWidth: B,
                  children: (0, T.jsx)(v.A, {
                    device: "pc",
                    ownerName: m.userName,
                    pageData: m,
                    shouldPreventScroll: G,
                    children: (0, T.jsxs)(O.Z, {
                      isProcessing: U,
                      className: "h-full",
                      scrollSpeed:
                        null !=
                        (n = null == (i = m.autoScroll) ? void 0 : i.speed)
                          ? n
                          : 0.06,
                      initialDelay: Y,
                      rootBackground: K.ROOT.props.backgroundColor,
                      shouldPreventScroll: G,
                      enabled:
                        null ==
                          (s =
                            null == (u = m.autoScroll) ? void 0 : u.enabled) ||
                        s,
                      children: [
                        U &&
                          (0, T.jsx)("div", {
                            className:
                              "absolute inset-0 bg-white z-50 flex items-center justify-center",
                            children: (0, T.jsx)(f(), {
                              animationData: b,
                              loop: !0,
                              style: { width: 200, height: 200 },
                            }),
                          }),
                        (0, T.jsx)(l.KE, {
                          resolver: k.K6,
                          enabled: !1,
                          children: (0, T.jsx)(
                            l.wI,
                            { data: K },
                            K.ROOT.props.width
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            });
      };
    },
    46962: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var r = n(27002),
        i = n.n(r);
      n(14232);
      var o = n(37876);
      let a = function (e) {
        var t = e.children,
          n = e.containerWidth;
        return (0, o.jsxs)("div", {
          style: {
            backgroundColor: "#f0f2f5",
            height: "100vh",
            width: "100vw",
            paddingTop: "5vh",
          },
          className: "jsx-3147566159 pc-container",
          children: [
            (0, o.jsx)("div", {
              style: {
                width: n ? "".concat(n, "px") : "auto",
                height: "90vh",
                margin: "auto",
                position: "relative",
                border: "1px solid #e0e0e0",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                borderRadius: 3,
                overflow: "hidden",
              },
              className: "jsx-3147566159 pc-content",
              children: t,
            }),
            (0, o.jsx)(i(), {
              id: "3147566159",
              children: [
                "#app-view-index{height:100% !important;}",
                ".pc-container #cinelove-toolbar .message-box-button{width:130px;}",
                ".pc-container #cinelove-toolbar .message-box-button,.pc-container #cinelove-toolbar #animation-gift-preview-btn,.pc-container #cinelove-toolbar #cinelove-gift-button,.pc-container #cinelove-toolbar #cinelove-like-button{font-size:12px;height:35px;line-height:35px;border-radius:25px;}",
                ".pc-container #cinelove-toolbar #animation-gift-preview-btn span{font-size:12px;}",
                ".pc-container #cinelove-toolbar #cinelove-like-button,.pc-container #cinelove-toolbar #cinelove-gift-button{width:35px;}",
                ".pc-container .bar-messwin *{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
                ".pc-container .bar-gift-new .select-type .option{font-size:17px !important;cursor:pointer;}",
                ".pc-container .bar-gift-new .gift-li .title{font-size:10px !important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;width:70px;}",
                ".pc-container .bar-gift-new .give-tip{font-size:10px !important;}",
                ".pc-container .bar-gift-new .give-username{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
                ".pc-container .animate-slide-gift.gift-minibar *{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
                ".pc-container #cinelove-canvas-preview,.pc-container #cinelove-canvas{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}",
              ],
            }),
          ],
        });
      };
    },
    64098: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/s/pc/[page_id]",
        function () {
          return n(29937);
        },
      ]);
    },
    98524: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s }), n(14232);
      var r = n(98594),
        i = n(48230),
        o = n.n(i),
        a = n(37876);
      let s = function () {
        return (0, a.jsx)("div", {
          className:
            "min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-4",
          children: (0, a.jsxs)("div", {
            className:
              "max-w-lg w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center border border-white/20",
            children: [
              (0, a.jsx)("div", {
                className:
                  "w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",
                children: (0, a.jsx)(r.In, {
                  icon: "solar:heart-broken-bold",
                  className: "text-4xl text-pink-500",
                }),
              }),
              (0, a.jsx)("h1", {
                className:
                  "text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4",
                children: "Oops! \uD83E\uDD7A",
              }),
              (0, a.jsx)("h2", {
                className: "text-xl font-semibold text-gray-700 mb-6",
                children: "Tạm thời kh\xf4ng thể xem được",
              }),
              (0, a.jsxs)("div", {
                className:
                  "bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8 border border-pink-100",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex items-center justify-center space-x-2 mb-3",
                    children: [
                      (0, a.jsx)(r.In, {
                        icon: "solar:chat-round-dots-bold",
                        className: "text-pink-500 text-lg",
                      }),
                      (0, a.jsx)("span", {
                        className: "text-pink-600 font-medium",
                        children: "Th\xf4ng b\xe1o nhỏ",
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className: "text-gray-600 leading-relaxed",
                    children:
                      "Trang web n\xe0y đ\xe3 đạt giới hạn lượt xem rồi. H\xe3y thử lại sau nh\xe9! \uD83D\uDC95",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "mt-8 flex justify-center space-x-2",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "w-2 h-2 bg-pink-400 rounded-full animate-bounce",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "w-2 h-2 bg-purple-400 rounded-full animate-bounce",
                    style: { animationDelay: "0.1s" },
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "w-2 h-2 bg-blue-400 rounded-full animate-bounce",
                    style: { animationDelay: "0.2s" },
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "mt-6 pt-6 border-t border-pink-100",
                children: (0, a.jsxs)("p", {
                  className: "text-xs text-gray-500",
                  children: [
                    "Made with \uD83D\uDC96 by",
                    " ",
                    (0, a.jsx)(o(), {
                      href: "/",
                      className: "hover:text-pink-500 transition-colors",
                      children: "CineLove",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
  },
  (e) => {
    e.O(
      0,
      [
        3634, 7884, 3433, 530, 6701, 888, 8433, 8513, 4938, 8511, 713, 3753,
        3629, 241, 2517, 9942, 9897, 1385, 5711, 289, 1285, 7141, 9026, 9923,
        8470, 3301, 878, 8594, 3521, 3401, 9556, 5503, 3566, 9084, 501, 1805,
        6499, 8561, 8593, 8972, 7692, 7974, 916, 1210, 981, 4085, 4587, 456,
        5958, 9271, 4038, 5818, 3587, 7315, 8353, 7603, 8162, 1508, 4510, 5293,
        9032, 700, 5675, 1078, 636, 6593, 8792,
      ],
      () => e((e.s = 64098))
    ),
      (_N_E = e.O());
  },
]);
