idNumber:function (idNumber) {
        var isIdCard = function(e) {
            function n(e) {
                var t = 0;
                e[17].toLowerCase() == "x" && (e[17] = 10);
                for (var n = 0; n < 17; n++) t += o[n] * e[n];
                return valCodePosition = t % 11, e[17] == u[valCodePosition] ? !0 : !1;
            }
            function r(e) {
                var t = e.substring(6, 10), n = e.substring(10, 12), r = e.substring(12, 14), i = new Date(t, parseFloat(n) - 1, parseFloat(r));
                return (new Date).getFullYear() - parseInt(t) < 18 ? !1 : i.getFullYear() != parseFloat(t) || i.getMonth() != parseFloat(n) - 1 || i.getDate() != parseFloat(r) ? !1 : !0;
            }
            function i(e) {
                var t = e.substring(6, 8), n = e.substring(8, 10), r = e.substring(10, 12), i = new Date(t, parseFloat(n) - 1, parseFloat(r));
                return i.getYear() != parseFloat(t) || i.getMonth() != parseFloat(n) - 1 || i.getDate() != parseFloat(r) ? !1 : !0;
            }
            function s(e) {
                e = e.replace(/ /g, "").trim();
                if (e.length == 15) return !1;
                if (e.length == 18) {
                    var i = e.split("");
                    return r(e) && n(i) ? !0 : !1;
                }
                return !1;
            }
            var o = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ], u = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];
            return s(e);
        };
        if (!str) return;
        var str = str.toUpperCase();
        return isIdCard(String(str));
    }
