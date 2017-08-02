/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2017
 * @compiler Bridge.NET 16.0.0-beta
 */
Bridge.assembly("test1", function ($asm, globals) {
    "use strict";

    Bridge.define("test1.App", {
        main: function Main() {
            var $t, $t1, $t2, $t3, $t4;
            test1.App.q73 = "";
            var div1 = document.createElement('div');
            div1.style.backgroundColor = "#CCCCCC";
            div1.style.top = "5px";
            div1.style.bottom = "5px";
            div1.style.left = "5px";
            div1.style.right = "5px";
            div1.style.height = "100%";
            div1.style.marginTop = "0px";
            div1.style.position = "fixed";


            //var form1 = new HTMLFormElement { };
            var p1 = ($t=document.createElement('p'), $t.id = "par1", $t);
            var p2 = ($t1=document.createElement('p'), $t1.id = "par2", $t1.innerHTML = "Write your equation here:", $t1);
            var textbox1 = document.createElement('input');
            var textbox2 = ($t2=document.createElement('input'), $t2.readOnly = true, $t2);
            textbox1.style.backgroundColor = "#CCCCCC";
            textbox1.style.height = "32px";
            textbox1.style.width = "250px";
            textbox1.style.fontSize = "Larger";
            textbox1.style.fontFamily = "monospace,Courier";
            textbox1.addEventListener("keypress", test1.App.InputKeyPress);
            textbox1.style.marginLeft = "10px";
            p2.style.marginBottom = "0px";
            p2.style.marginLeft = "10px";
            p1.style.marginLeft = "10px";
            textbox2.style.marginLeft = "5px";
            textbox2.style.backgroundColor = "#CCCCCC";
            textbox2.style.height = "32px";
            textbox2.style.width = "100px";
            textbox2.style.border = "None";
            textbox2.disabled = true;
            textbox2.style.marginLeft = "5px";
            textbox2.style.color = "Black";
            var br1 = document.createElement('br');
            var br2 = document.createElement('br');
            //var br3 = new HTMLBRElement { InnerHTML = "Write your equation here:" };
            // Create a new Button
            var button = ($t3=document.createElement('button'), $t3.innerHTML = "Solve", $t3.onclick = function (ev) {
                // When Button is clicked, 
                // the Bridge Console should open.
                //s = textarea1.Value;
                // t1 = Convert.ToInt32(s) +1;
                // textarea2.Value = Convert.ToString(t1);
                //Console.WriteLine("yes");

                // /*
                //-------------------
                // change Convert.ToDouble into Convert.ToDouble
                //---------------------------
                //---------------------------
                p1.innerHTML = "";
                var s = null;
                var s1 = null;
                var s2 = null;
                var s4 = null;
                var s7 = null;
                var s8 = null;
                var sx = null;
                var q1 = null;
                var q2 = null;
                var q3 = null;
                var q4 = null;
                var q5 = null;
                var q6 = null;
                var t1 = 0;
                var t = 0;
                var n1 = 0;
                var sn = 0;
                var n = 0;
                var we = false;
                var wx = false;
                var ws = false;
                var wl = false;
                var w2 = false;
                var we1 = false;
                var we2 = false;
                var wn = false;
                var a = 0;
                var b = 0;
                var c = 0;
                var x1 = 0;
                var x2 = 0;
                var x3 = 0;
                var x4 = 0;
                var x5 = 0;
                var d = 0;
                var d1 = 0;
                var d2 = 0;
                var d3 = 0;
                var d4 = 0;
                var d5 = 0;
                var d6 = 0;
                var d7 = 0;
                var d15 = 0;
                var d25 = 0;
                var q11 = 0;
                var q12 = 0;
                var st = null;
                var p = null;
                var sm = null;
                var a1 = 0;
                var b1 = 0;
                var c1 = 0;
                var a2 = null;
                var b2 = null;
                var c2 = null;
                var b3 = null;
                var d11 = null;
                var d12 = null;
                var q7 = null;
                var q8 = null;
                var q71 = null;
                //string q73 = null;
                var q75 = null;
                var d61 = null;
                var a11 = null;
                //m = 0;
                st = "";
                a = 0;
                b = 0;
                c = 0;
                d = 0;
                x1 = 0;
                x2 = 0;
                //sn1 = 1;

                //s = textarea1.Value;
                s = textbox1.value;
                test1.App.q73 = "";
                test1.App.s5t = "";
                s8 = System.String.concat("$", s, "$");
                if (System.String.isNullOrEmpty(s.trim())) {
                    textbox1.value = "";
                } else {
                    we = false;
                    ws = false;
                    wx = false;
                    wl = false;
                    wn = false;
                    sx = "";
                    sm = "";
                    t = 0;

                    s1 = "";
                    for (t = 1; t <= s.length; t = (t + 1) | 0) {
                        if (!Bridge.referenceEquals(test1.App.Mid(s, t, 1), " ")) {
                            s1 = System.String.concat(s1, test1.App.Mid(s, t, 1));
                        }
                    }
                    s = s1;
                    for (t = 1; t <= s.length; t = (t + 1) | 0) {
                        if (Bridge.referenceEquals(test1.App.Mid(s, t, 1), "=")) {
                            if (ws) {
                                we = true;
                            } else {
                                ws = true;
                                n1 = t;
                                if (t === s.length) {
                                    wl = true;
                                }
                            }
                        } else {
                            if (!!(Bridge.referenceEquals(test1.App.check1(test1.App.Mid(s, t, 1)), "o") & !Bridge.referenceEquals(test1.App.Mid(s, t, 1), "^"))) {
                                wn = true;
                                sm = test1.App.Mid(s, t, 1);
                            }
                        }
                        if (Bridge.referenceEquals(test1.App.check1(test1.App.Mid(s, t, 1)), "l")) {
                            if (System.String.isNullOrEmpty(sx)) {
                                sx = test1.App.Mid(s, t, 1);
                            } else {
                                if (!Bridge.referenceEquals(sx, test1.App.Mid(s, t, 1))) {
                                    wx = true;
                                }
                            }
                        }
                    }

                    if (we) {
                        test1.App.q73 = "Syntax error";
                    } else {
                        if (ws === false) {
                            test1.App.q73 = "Error";
                            we = true;
                        } else {
                            if (Bridge.referenceEquals(test1.App.check1(test1.App.Mid(s, 1, 1)), "o")) {
                                test1.App.q73 = "Syntax error";
                                we = true;
                            } else {
                                if (wx) {
                                    test1.App.q73 = "Error";
                                    we = true;
                                } else {
                                    if (wl) {
                                        test1.App.q73 = "Error";
                                        we = true;
                                    } else {
                                        if (wn) {
                                            if (!System.String.isNullOrEmpty(sm)) {
                                                test1.App.q73 = "Syntax error";
                                            } else {
                                                test1.App.q73 = "Syntax error";
                                            }
                                            we = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (we === false) {
                        if (!!(!Bridge.referenceEquals(test1.App.check1(test1.App.Mid(s, s.length, 1)), "d") & !Bridge.referenceEquals(test1.App.check1(test1.App.Mid(s, s.length, 1)), "l"))) {
                            test1.App.q73 = "Syntax error";
                            we = true;
                        }
                    }
                    we1 = we;
                    //---------------------------

                    st = "";
                    ws = false;
                    sn = 1;
                    p = "";
                    if (we === false) {
                        n = (n1 - 1) | 0;
                        for (t = 1; t <= n; t = (t + 1) | 0) {
                            switch (test1.App.Mid(s, t, 1)) {
                                case "1": 
                                case "2": 
                                case "3": 
                                case "4": 
                                case "5": 
                                case "6": 
                                case "7": 
                                case "8": 
                                case "9": 
                                case "0": 
                                    st = System.String.concat(st, test1.App.Mid(s, t, 1));
                                    if (t < n) {
                                        if (Bridge.referenceEquals(sx, test1.App.Mid(s, ((t + 1) | 0), 1))) {
                                            if (((t + 1) | 0) === n) {
                                                b = b + sn * System.Convert.toDouble(st);
                                                st = "";
                                                t = (t + 1) | 0;
                                            } else {
                                                if (((t + 1) | 0) < n) {
                                                    switch (test1.App.Mid(s, ((t + 2) | 0), 1)) {
                                                        case "+": 
                                                            b = b + sn * System.Convert.toDouble(st);
                                                            st = "";
                                                            p = "sign";
                                                            t = (t + 2) | 0;
                                                            sn = 1;
                                                            break;
                                                        case "-": 
                                                            b = b + sn * System.Convert.toDouble(st);
                                                            st = "";
                                                            p = "sign";
                                                            t = (t + 2) | 0;
                                                            sn = -1;
                                                            break;
                                                        case "^": 
                                                            if (((t + 2) | 0) < n) {
                                                                switch (test1.App.Mid(s, ((t + 3) | 0), 1)) {
                                                                    case "1": 
                                                                        b = b + sn * System.Convert.toDouble(st);
                                                                        st = "";
                                                                        p = "power";
                                                                        t = (t + 3) | 0;
                                                                        break;
                                                                    case "2": 
                                                                        a = a + sn * System.Convert.toDouble(st);
                                                                        st = "";
                                                                        p = "power";
                                                                        t = (t + 3) | 0;
                                                                        break;
                                                                    default: 
                                                                        we = true;
                                                                        break;
                                                                }
                                                            }
                                                            break;
                                                        default: 
                                                            we = true;
                                                            break;
                                                    }
                                                }
                                            }
                                        } else {
                                            switch (test1.App.Mid(s, ((t + 1) | 0), 1)) {
                                                case "+": 
                                                    c = c + sn * System.Convert.toDouble(st);
                                                    st = "";
                                                    sn = 1;
                                                    p = "sign";
                                                    t = (t + 1) | 0;
                                                    break;
                                                case "-": 
                                                    c = c + sn * System.Convert.toDouble(st);
                                                    st = "";
                                                    sn = -1;
                                                    p = "sign";
                                                    t = (t + 1) | 0;
                                                    break;
                                                case "1": 
                                                case "2": 
                                                case "3": 
                                                case "4": 
                                                case "5": 
                                                case "6": 
                                                case "7": 
                                                case "8": 
                                                case "9": 
                                                case "0": 
                                                    p = "digit";
                                                    break;
                                                case "^": 
                                                    //p = "digit^"
                                                    we = true;
                                                    break;
                                                default: 
                                                    we = true;
                                                    break;
                                            }
                                        }
                                    } else {
                                        c = c + sn * System.Convert.toDouble(st);
                                        st = "";
                                    }
                                    break;
                                case "+": 
                                    if (Bridge.referenceEquals(p, "digit")) {
                                        c = c + sn * System.Convert.toDouble(st);
                                        st = "";
                                    }
                                    sn = 1;
                                    p = "sign";
                                    break;
                                case "-": 
                                    if (Bridge.referenceEquals(p, "digit")) {
                                        c = c + sn * System.Convert.toDouble(st);
                                        st = "";
                                    }
                                    sn = -1;
                                    p = "sign";
                                    break;
                                case "^": 
                                    we = true;
                                    break;
                                case "(": 
                                    we = true;
                                    break;
                                case ")": 
                                    we = true;
                                    break;
                                default: 
                                    if (Bridge.referenceEquals(sx, test1.App.Mid(s, t, 1))) {
                                        //------------------
                                        //check1 = "l"
                                        if (!!(Bridge.referenceEquals(p, "sign") | System.String.isNullOrEmpty(p))) {
                                            st = System.Convert.toString(Bridge.box(1, System.Int32));
                                            if (t < n) {
                                                switch (test1.App.Mid(s, ((t + 1) | 0), 1)) {
                                                    case "^": 
                                                        if (((t + 1) | 0) < n) {
                                                            switch (test1.App.Mid(s, ((t + 2) | 0), 1)) {
                                                                case "1": 
                                                                    b = b + sn * System.Convert.toDouble(st);
                                                                    st = "";
                                                                    p = "power";
                                                                    t = (t + 2) | 0;
                                                                    break;
                                                                case "2": 
                                                                    a = a + sn * System.Convert.toDouble(st);
                                                                    st = "";
                                                                    p = "power";
                                                                    t = (t + 2) | 0;
                                                                    break;
                                                                default: 
                                                                    we = true;
                                                                    break;
                                                            }
                                                        }
                                                        break;
                                                    case "+": 
                                                        b = b + sn * System.Convert.toDouble(st);
                                                        st = "";
                                                        sn = 1;
                                                        p = "sign";
                                                        t = (t + 1) | 0;
                                                        break;
                                                    case "-": 
                                                        b = b + sn * System.Convert.toDouble(st);
                                                        st = "";
                                                        sn = -1;
                                                        p = "sign";
                                                        t = (t + 1) | 0;
                                                        break;
                                                    case "1": 
                                                    case "2": 
                                                    case "3": 
                                                    case "4": 
                                                    case "5": 
                                                    case "6": 
                                                    case "7": 
                                                    case "8": 
                                                    case "9": 
                                                    case "0": 
                                                        we = true;
                                                        break;
                                                    default: 
                                                        we = true;
                                                        break;
                                                }
                                            } else {
                                                b = b + sn * System.Convert.toDouble(st);
                                                st = "";
                                            }
                                        } else {
                                            we = true;
                                        }
                                        //-----------------------------
                                    } else {
                                        we = true;
                                    }
                                    break;
                            }
                        }
                    }
                    //-------------------------------
                    a1 = a;
                    b1 = b;
                    c1 = c;
                    a = 0;
                    b = 0;
                    c = 0;

                    //Second part
                    //---------------------------
                    st = "";
                    sn = 1;
                    p = "";
                    if (we === false) {
                        n = s.length;
                        for (t = (n1 + 1) | 0; t <= n; t = (t + 1) | 0) {
                            switch (test1.App.Mid(s, t, 1)) {
                                case "1": 
                                case "2": 
                                case "3": 
                                case "4": 
                                case "5": 
                                case "6": 
                                case "7": 
                                case "8": 
                                case "9": 
                                case "0": 
                                    st = System.String.concat(st, test1.App.Mid(s, t, 1));
                                    if (t < n) {
                                        switch (test1.App.Mid(s, ((t + 1) | 0), 1)) {
                                            case "+": 
                                                c = c + sn * System.Convert.toDouble(st);
                                                st = "";
                                                sn = 1;
                                                p = "sign";
                                                t = (t + 1) | 0;
                                                break;
                                            case "-": 
                                                c = c + sn * System.Convert.toDouble(st);
                                                st = "";
                                                sn = -1;
                                                p = "sign";
                                                t = (t + 1) | 0;
                                                break;
                                            case "1": 
                                            case "2": 
                                            case "3": 
                                            case "4": 
                                            case "5": 
                                            case "6": 
                                            case "7": 
                                            case "8": 
                                            case "9": 
                                            case "0": 
                                                p = "digit";
                                                break;
                                            default: 
                                                if (Bridge.referenceEquals(sx, test1.App.Mid(s, ((t + 1) | 0), 1))) {
                                                    if (((t + 1) | 0) === n) {
                                                        b = b + sn * System.Convert.toDouble(st);
                                                        st = "";
                                                        t = (t + 1) | 0;
                                                    } else {
                                                        if (((t + 1) | 0) < n) {
                                                            switch (test1.App.Mid(s, ((t + 2) | 0), 1)) {
                                                                case "+": 
                                                                    b = b + sn * System.Convert.toDouble(st);
                                                                    st = "";
                                                                    p = "sign";
                                                                    t = (t + 2) | 0;
                                                                    sn = 1;
                                                                    break;
                                                                case "-": 
                                                                    b = b + sn * System.Convert.toDouble(st);
                                                                    st = "";
                                                                    p = "sign";
                                                                    t = (t + 2) | 0;
                                                                    sn = -1;
                                                                    break;
                                                                case "^": 
                                                                    if (((t + 2) | 0) < n) {
                                                                        switch (test1.App.Mid(s, ((t + 3) | 0), 1)) {
                                                                            case "1": 
                                                                                b = b + sn * System.Convert.toDouble(st);
                                                                                st = "";
                                                                                p = "power";
                                                                                t = (t + 3) | 0;
                                                                                break;
                                                                            case "2": 
                                                                                a = a + sn * System.Convert.toDouble(st);
                                                                                st = "";
                                                                                p = "power";
                                                                                t = (t + 3) | 0;
                                                                                break;
                                                                            default: 
                                                                                we = true;
                                                                                break;
                                                                        }
                                                                    }
                                                                    break;
                                                                default: 
                                                                    we = true;
                                                                    break;
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    we = true;
                                                }
                                                break;
                                        }
                                    } else {
                                        c = c + sn * System.Convert.toDouble(st);
                                        st = "";
                                    }
                                    break;
                                case "+": 
                                    if (Bridge.referenceEquals(p, "digit")) {
                                        c = c + sn * System.Convert.toDouble(st);
                                        st = "";
                                    }
                                    sn = 1;
                                    p = "sign";
                                    break;
                                case "-": 
                                    if (Bridge.referenceEquals(p, "digit")) {
                                        c = c + sn * System.Convert.toDouble(st);
                                        st = "";
                                    }
                                    sn = -1;
                                    p = "sign";
                                    break;
                                case "^": 
                                    we = true;
                                    break;
                                case "(": 
                                    we = true;
                                    break;
                                case ")": 
                                    we = true;
                                    break;
                                default: 
                                    if (Bridge.referenceEquals(sx, test1.App.Mid(s, t, 1))) {
                                        //check1 = "l"
                                        if (!!(Bridge.referenceEquals(p, "sign") | System.String.isNullOrEmpty(p))) {
                                            st = System.Convert.toString(Bridge.box(1, System.Int32));
                                            if (t < n) {
                                                switch (test1.App.Mid(s, ((t + 1) | 0), 1)) {
                                                    case "^": 
                                                        if (((t + 1) | 0) < n) {
                                                            switch (test1.App.Mid(s, ((t + 2) | 0), 1)) {
                                                                case "1": 
                                                                    b = b + sn * System.Convert.toDouble(st);
                                                                    st = "";
                                                                    p = "power";
                                                                    t = (t + 2) | 0;
                                                                    break;
                                                                case "2": 
                                                                    a = a + sn * System.Convert.toDouble(st);
                                                                    st = "";
                                                                    p = "power";
                                                                    t = (t + 2) | 0;
                                                                    break;
                                                                default: 
                                                                    we = true;
                                                                    break;
                                                            }
                                                        }
                                                        break;
                                                    case "+": 
                                                        b = b + sn * System.Convert.toDouble(st);
                                                        st = "";
                                                        sn = 1;
                                                        p = "sign";
                                                        t = (t + 1) | 0;
                                                        break;
                                                    case "-": 
                                                        b = b + sn * System.Convert.toDouble(st);
                                                        st = "";
                                                        sn = -1;
                                                        p = "sign";
                                                        t = (t + 1) | 0;
                                                        break;
                                                    case "1": 
                                                    case "2": 
                                                    case "3": 
                                                    case "4": 
                                                    case "5": 
                                                    case "6": 
                                                    case "7": 
                                                    case "8": 
                                                    case "9": 
                                                    case "0": 
                                                        we = true;
                                                        break;
                                                    default: 
                                                        we = true;
                                                        break;
                                                }
                                            } else {
                                                b = b + sn * System.Convert.toDouble(st);
                                                st = "";
                                            }
                                        } else {
                                            we = true;
                                        }
                                    } else {
                                        we = true;
                                    }
                                    break;
                            }
                        }
                    }
                    //-------------------------------

                    a = a1 - a;
                    b = b1 - b;
                    c = c1 - c;

                    if (we1 === false) {
                        if (we) {
                            test1.App.q73 = "Error";
                        } else {
                            //change x^1 to x
                            s2 = "";
                            we2 = false;
                            for (t = 1; t <= ((s.length - 1) | 0); t = (t + 1) | 0) {
                                if (Bridge.referenceEquals(test1.App.Mid(s, t, 2), "^1")) {
                                    if (t < ((s.length - 1) | 0)) {
                                        if (!!(!!(!!(Bridge.referenceEquals(test1.App.Mid(s, ((t + 2) | 0), 1), "+") | Bridge.referenceEquals(test1.App.Mid(s, ((t + 2) | 0), 1), "-")) | Bridge.referenceEquals(test1.App.Mid(s, ((t + 2) | 0), 1), "=")) | t === ((s.length - 1) | 0))) {
                                            t = (t + 1) | 0;
                                        } else {
                                            s2 = System.String.concat(s2, test1.App.Mid(s, t, 1));
                                        }
                                    } else {
                                        we2 = true;
                                    }

                                } else {
                                    s2 = System.String.concat(s2, test1.App.Mid(s, t, 1));
                                }
                            }
                            if (we2 === false) {
                                s2 = System.String.concat(s2, test1.App.Mid(s, s.length, 1));
                            }
                            s8 = System.String.concat("$", s2, "$");

                            if (a === 0) {
                                a2 = "";
                            } else {
                                if (a === 1) {
                                    a2 = System.String.concat(sx, "^2");
                                } else {
                                    if (a === -1) {
                                        a2 = System.String.concat("-", sx, "^2");
                                    } else {
                                        a2 = System.String.concat(System.Double.format(a, 'G'), sx, "^2");
                                    }
                                }
                            }
                            if (b > 0) {
                                if (a === 0) {
                                    if (b === 1) {
                                        b2 = sx;
                                    } else {
                                        b2 = System.String.concat(System.Double.format(b, 'G'), sx);
                                    }
                                } else {
                                    if (a < 0) {
                                        if (b === 1) {
                                            b2 = System.String.concat("-", sx);
                                        } else {
                                            b2 = System.String.concat("-" + System.Double.format(b, 'G'), sx);
                                        }
                                    } else {
                                        if (b === 1) {
                                            b2 = System.String.concat("+", sx);
                                        } else {
                                            b2 = System.String.concat("+" + System.Double.format(b, 'G'), sx);
                                        }
                                    }
                                    if (b === 1) {
                                        b2 = System.String.concat("+", sx);
                                    } else {
                                        b2 = System.String.concat("+" + System.Double.format(b, 'G'), sx);
                                    }
                                }
                            } else {
                                if (b < 0) {
                                    if (a < 0) {
                                        if (b === -1) {
                                            b2 = System.String.concat("+", sx);
                                        } else {
                                            b2 = System.String.concat("+" + System.Double.format(-b, 'G'), sx);
                                        }
                                    } else {
                                        if (b === -1) {
                                            b2 = System.String.concat("-", sx);
                                        } else {
                                            b2 = System.String.concat(System.Double.format(b, 'G'), sx);
                                        }
                                    }
                                    if (b === -1) {
                                        b2 = System.String.concat("-", sx);
                                    } else {
                                        b2 = System.String.concat(System.Double.format(b, 'G'), sx);
                                    }
                                } else {
                                    b2 = "";
                                }
                            }
                            if (c > 0) {
                                c2 = "+" + System.Double.format(c, 'G');
                            } else {
                                if (a < 0) {
                                    if (c < 0) {
                                        c2 = "+" + System.Double.format(-c, 'G');
                                    } else {
                                        c2 = "";
                                    }
                                } else {
                                    if (c < 0) {
                                        c2 = System.Convert.toString(Bridge.box(c, System.Double, $box_.System.Double.toString));
                                    } else {
                                        c2 = "";
                                    }
                                }
                                if (c < 0) {
                                    c2 = System.Convert.toString(Bridge.box(c, System.Double, $box_.System.Double.toString));
                                } else {
                                    c2 = "";
                                }
                            }
                            d = Math.pow(b, 2) - 4 * a * c;
                            s7 = System.String.concat("$", a2, b2, c2, "=0", "$");
                            if (!!(d < 0 & b !== 0)) {

                                if (Math.sqrt(-d) === Bridge.Math.round(Math.sqrt(-d), 0, 6)) {
                                    //Disciminant ------------
                                    if (!!(b > 0 | b === 0)) {
                                        b3 = System.Convert.toString(Bridge.box(b, System.Double, $box_.System.Double.toString));
                                    } else {
                                        b3 = "(" + System.Double.format(b, 'G') + ")";
                                    }
                                    if (!!(b !== 0 & c !== 0)) {
                                        if (a * c > 0) {
                                            q7 = System.Double.format(Math.pow(b, 2), 'G') + "-" + System.Double.format(4 * a * c, 'G') + "=";
                                        } else {
                                            q7 = System.Double.format(Math.pow(b, 2), 'G') + "+" + System.Double.format(-4 * a * c, 'G') + "=";
                                        }
                                    } else {
                                        q7 = "";
                                    }

                                    if (!!(c > 0 | c === 0)) {
                                        if (a > 0) {
                                            s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", System.Double.format(a, 'G'), "\\cdot ", System.Double.format(c, 'G'), " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                        } else {
                                            s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", "(", System.Double.format(a, 'G'), ")", "\\cdot ", System.Double.format(c, 'G'), " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                        }
                                    } else {
                                        if (a > 0) {
                                            s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", System.Double.format(a, 'G'), "\\cdot ", "(", System.Double.format(c, 'G'), ")", " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                        } else {
                                            s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", "(", System.Double.format(a, 'G'), ")", "\\cdot ", "(", System.Double.format(c, 'G'), ")", " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                        }
                                    }
                                    //------------
                                    test1.App.s5 = s4;

                                    //Simplify------------
                                    q71 = "";
                                    d61 = "";
                                    d1 = Math.sqrt(-d);
                                    if (d1 !== 1) {
                                        d5 = Math.abs(2 * a);
                                        d6 = Math.abs(d1);
                                        d7 = Math.abs(b);
                                        for (t = 2; t <= 100; t = (t + 1) | 0) {
                                            if (!!(!!(t <= d5 & t <= d6) & t <= d7)) {
                                                for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                    x3 = d5 / t;
                                                    x4 = d6 / t;
                                                    x5 = d7 / t;
                                                    if (!!(!!(Bridge.Math.round(x3, 0, 6) === x3 & Bridge.Math.round(x4, 0, 6) === x4) & Bridge.Math.round(x5, 0, 6) === x5)) {
                                                        d5 = d5 / t;
                                                        d6 = d6 / t;
                                                        d7 = d7 / t;
                                                    } else {
                                                        t1 = 11;
                                                    }
                                                }
                                            } else {
                                                t = 101;
                                            }
                                        }
                                        if (a < 0) {
                                            d5 = -d5;
                                        }
                                        if (b < 0) {
                                            d7 = -d7;
                                        }
                                        if (2 * a !== d5) {
                                            if (d6 === 1) {
                                                d61 = "";
                                            } else {
                                                d61 = System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString));
                                            }
                                            if (d5 === 1) {
                                                q71 = System.String.concat(" = \\normalsize " + System.Double.format(-d7, 'G') + " \\  \\pm \\ ", d61, "i");
                                            } else {
                                                if (d5 === -1) {
                                                    q71 = System.String.concat(" = \\normalsize " + System.Double.format(d7, 'G') + " \\  \\pm \\ ", d61, "i");
                                                } else {
                                                    q71 = System.String.concat("\\large = \\frac{" + System.Double.format(-d7, 'G') + " \\  \\pm \\ ", d61, "i}{", System.Double.format(d5, 'G'), "}");
                                                }
                                            }
                                        }
                                    }
                                    //-----------------

                                    s4 = "";
                                    //Formula ------------
                                    if (d1 === 1) {
                                        d11 = "";
                                    } else {
                                        d11 = System.Convert.toString(Bridge.box(d1, System.Double, $box_.System.Double.toString));
                                    }
                                    if (d1 === 1) {
                                        d12 = "";
                                    } else {
                                        d12 = System.String.concat("\\large = \\frac{" + System.Double.format(-b, 'G') + " \\  \\pm \\ ", d11, "i}{", System.Double.format(2 * a, 'G'), "}");
                                    }

                                    if (a === 1) {
                                        s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2}", d12, q71, "$", " <br /> <br />")));
                                    } else {
                                        if (a < 0) {
                                            s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2 \\cdot", "(", System.Double.format(a, 'G'), ")", "}", d12, q71, "$", " <br /> <br />")));
                                        } else {
                                            s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2 \\cdot", System.Double.format(a, 'G'), "}", d12, q71, "$", " <br /> <br />")));
                                        }
                                    }
                                    //----------------

                                    if (b !== 0) {
                                        q1 = System.String.concat(System.Double.format(-b, 'G') + " \\  + \\ ", d11, "i");
                                    } else {
                                        q1 = System.String.concat(d11, "i");
                                    }
                                    if (b !== 0) {
                                        q2 = System.String.concat(System.Double.format(-b, 'G') + " \\  - \\ ", d11, "i");
                                    } else {
                                        q2 = System.String.concat("-", d11, "i");
                                    }
                                    if (2 * a === 1) {
                                        q3 = q1;
                                    } else {
                                        q3 = System.String.concat("\\frac{", q1, "}{", System.Double.format(2 * a, 'G'), "}");
                                    }
                                    if (2 * a === 1) {
                                        q4 = q2;
                                    } else {
                                        q4 = System.String.concat("\\frac{", q2, "}{", System.Double.format(2 * a, 'G'), "}");
                                    }

                                    //Formula for x1 and x2--------------
                                    if (!System.String.isNullOrEmpty(q71)) {
                                        if (d5 === 1) {
                                            q3 = System.String.concat(" \\normalsize " + System.Double.format(-d7, 'G') + " \\  + \\ ", d61, "i");
                                            q4 = System.String.concat(" \\normalsize " + System.Double.format(-d7, 'G') + " \\  - \\ ", d61, "i");
                                        } else {
                                            if (d5 === -1) {
                                                q3 = System.String.concat(" \\normalsize " + System.Double.format(d7, 'G') + " \\  + \\ ", d61, "i");
                                                q4 = System.String.concat(" \\normalsize " + System.Double.format(d7, 'G') + " \\  - \\ ", d61, "i");
                                            } else {
                                                q3 = System.String.concat("\\large \\frac{" + System.Double.format(-d7, 'G') + " \\  + \\ ", d61, "i}{", System.Double.format(d5, 'G'), "} ");
                                                q4 = System.String.concat("\\large \\frac{" + System.Double.format(-d7, 'G') + " \\  - \\ ", d61, "i}{", System.Double.format(d5, 'G'), "} ");
                                            }
                                        }
                                    }
                                    //--------------------

                                    s4 = System.String.concat(s4, (System.String.concat("$", sx, "_1 =", q3, "$ <br /> <br />", "\r\n", "$", sx, "_2 =", q4, "$", "<br /> <br />")));

                                    test1.App.s5t = System.String.concat("Your original equation:  <br /> <br />", s8, "  <br /> <br /> In the standard form:  <br /> <br />", s7, "  <br /> <br /> Solution: <br /> <br />", test1.App.s5, " $\\Delta < 0 $, so there are no solutions in real numbers.  <br /> <br /> Solution in complex numbers:  <br /> <br /> ", s4);
                                } else {
                                    d1 = 1;
                                    d2 = -d;
                                    for (t = 2; t <= 100; t = (t + 1) | 0) {
                                        if (Math.pow(t, 2) <= d2) {
                                            for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                x3 = d2 / (Math.pow(t, 2));

                                                if (Bridge.Math.round(x3, 0, 6) === x3) {
                                                    d1 = d1 * t;
                                                    d2 = d2 / (Math.pow(t, 2));
                                                } else {
                                                    t1 = 11;
                                                }
                                            }
                                        } else {
                                            t = 101;
                                        }
                                    }

                                    if (d1 === 1) {
                                        if (b === 0) {
                                            q1 = "i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                        } else {
                                            q1 = System.Double.format(-b, 'G') + "\\ +" + "\\ i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                        }
                                        if (b === 0) {
                                            q2 = "-i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                        } else {
                                            q2 = System.Double.format(-b, 'G') + "\\ -" + "\\ i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                        }
                                    } else {
                                        d3 = d1 / (2 * a);
                                        d4 = b / (2 * a);
                                        if (!!(d3 === Bridge.Math.round(d3, 0, 6) & d4 === Bridge.Math.round(d4, 0, 6))) {
                                            if (d3 === 1) {
                                                if (b === 0) {
                                                    q1 = "i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                } else {
                                                    q1 = System.Double.format(-d4, 'G') + " +" + "\\ i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                }
                                                if (b === 0) {
                                                    q2 = "-i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                } else {
                                                    q2 = System.Double.format(-d4, 'G') + " -" + "\\ i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                }
                                            } else {
                                                if (d3 === -1) {
                                                    if (b === 0) {
                                                        q1 = "-i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    } else {
                                                        q1 = System.Double.format(-d4, 'G') + " -" + "\\ i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    }
                                                    if (b === 0) {
                                                        q2 = "i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    } else {
                                                        q2 = System.Double.format(-d4, 'G') + " +" + "\\ i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    }
                                                } else {
                                                    if (b === 0) {
                                                        q1 = System.Double.format(d3, 'G') + "i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    } else {
                                                        q1 = System.Double.format(-d4, 'G') + " +" + System.Double.format(d3, 'G') + "\\ i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    }
                                                    if (b === 0) {
                                                        q2 = "-" + System.Double.format(d3, 'G') + "i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    } else {
                                                        q2 = System.Double.format(-d4, 'G') + " -" + System.Double.format(d3, 'G') + "\\ i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    }
                                                }
                                            }
                                        } else {
                                            if (b === 0) {
                                                q1 = System.Double.format(d1, 'G') + "i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                            } else {
                                                q1 = System.Double.format(-b, 'G') + " +" + System.Double.format(d1, 'G') + "\\ i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                            }
                                            if (b === 0) {
                                                q2 = "-" + System.Double.format(d1, 'G') + "i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                            } else {
                                                q2 = System.Double.format(-b, 'G') + " -" + System.Double.format(d1, 'G') + "\\ i\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                            }
                                        }
                                    }
                                    q5 = "";
                                    if (!!(d1 / (2 * a) === Bridge.Math.round(d1 / (2 * a), 0, 6) & b / (2 * a) === Bridge.Math.round(b / (2 * a), 0, 6))) {
                                        if (2 * a === 1) {
                                            q3 = q1;
                                        } else {
                                            q3 = System.String.concat(q1, q5);
                                        }
                                        if (2 * a === 1) {
                                            q4 = q2;
                                        } else {
                                            q4 = System.String.concat(q2, q5);
                                        }
                                    } else {
                                        if (2 * a === 1) {
                                            q3 = q1;
                                        } else {
                                            q3 = System.String.concat(" \\large \\frac{", q1, "}{", System.Double.format(2 * a, 'G'), "}", q5);
                                        }
                                        if (2 * a === 1) {
                                            q4 = q2;
                                        } else {
                                            q4 = System.String.concat(" \\large \\frac{", q2, "}{", System.Double.format(2 * a, 'G'), "}", q5);
                                        }
                                    }

                                    //Disciminant ------------
                                    if (!!(b > 0 | b === 0)) {
                                        b3 = System.Convert.toString(Bridge.box(b, System.Double, $box_.System.Double.toString));
                                    } else {
                                        b3 = "(" + System.Double.format(b, 'G') + ")";
                                    }
                                    if (!!(b !== 0 & c !== 0)) {
                                        if (a * c > 0) {
                                            q7 = System.Double.format(Math.pow(b, 2), 'G') + "-" + System.Double.format(4 * a * c, 'G') + "=";
                                        } else {
                                            q7 = System.Double.format(Math.pow(b, 2), 'G') + "+" + System.Double.format(-4 * a * c, 'G') + "=";
                                        }
                                    } else {
                                        q7 = "";
                                    }

                                    if (!!(c > 0 | c === 0)) {
                                        if (a > 0) {
                                            s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", System.Double.format(a, 'G'), "\\cdot ", System.Double.format(c, 'G'), " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                        } else {
                                            s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", "(", System.Double.format(a, 'G'), ")", "\\cdot ", System.Double.format(c, 'G'), " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                        }
                                    } else {
                                        if (a > 0) {
                                            s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", System.Double.format(a, 'G'), "\\cdot ", "(", System.Double.format(c, 'G'), ")", " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                        } else {
                                            s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", "(", System.Double.format(a, 'G'), ")", "\\cdot ", "(", System.Double.format(c, 'G'), ")", " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                        }
                                    }
                                    //------------

                                    //Simplify------------
                                    q71 = "";
                                    d61 = "";
                                    if (d1 !== 1) {
                                        d5 = Math.abs(2 * a);
                                        d6 = Math.abs(d1);
                                        d7 = Math.abs(b);
                                        for (t = 2; t <= 100; t = (t + 1) | 0) {
                                            if (!!(!!(t <= d5 & t <= d6) & t <= d7)) {
                                                for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                    x3 = d5 / t;
                                                    x4 = d6 / t;
                                                    x5 = d7 / t;
                                                    if (!!(!!(Bridge.Math.round(x3, 0, 6) === x3 & Bridge.Math.round(x4, 0, 6) === x4) & Bridge.Math.round(x5, 0, 6) === x5)) {
                                                        d5 = d5 / t;
                                                        d6 = d6 / t;
                                                        d7 = d7 / t;
                                                    } else {
                                                        t1 = 11;
                                                    }
                                                }
                                            } else {
                                                t = 101;
                                            }
                                        }
                                        if (a < 0) {
                                            d5 = -d5;
                                        }
                                        if (b < 0) {
                                            d7 = -d7;
                                        }
                                        if (2 * a !== d5) {
                                            if (d6 === 1) {
                                                d61 = "";
                                            } else {
                                                d61 = System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString));
                                            }
                                            if (d5 === 1) {
                                                q71 = System.String.concat(" = \\normalsize " + System.Double.format(-d7, 'G') + " \\  \\pm \\ ", d61, "i\\sqrt{", System.Double.format(d2, 'G'), "}");
                                            } else {
                                                if (d5 === -1) {
                                                    q71 = System.String.concat(" = \\normalsize " + System.Double.format(d7, 'G') + " \\  \\pm \\ ", d61, "i\\sqrt{", System.Double.format(d2, 'G'), "}");
                                                } else {
                                                    q71 = System.String.concat("\\large = \\frac{" + System.Double.format(-d7, 'G') + " \\  \\pm \\ ", d61, "i\\sqrt{", System.Double.format(d2, 'G'), "}}{", System.Double.format(d5, 'G'), "}");
                                                }
                                            }
                                        }
                                    }
                                    //-----------------

                                    test1.App.s5 = s4;
                                    s4 = "";
                                    //Formula ------------
                                    if (d1 === 1) {
                                        d11 = "";
                                    } else {
                                        d11 = System.Convert.toString(Bridge.box(d1, System.Double, $box_.System.Double.toString));
                                    }
                                    if (d1 === 1) {
                                        d12 = "";
                                    } else {
                                        d12 = System.String.concat("\\large = \\frac{" + System.Double.format(-b, 'G') + " \\  \\pm \\ ", d11, "i\\sqrt{", System.Double.format(d2, 'G'), "}}{", System.Double.format(2 * a, 'G'), "}");
                                    }
                                    if (!!(d1 === 1 & a !== 1)) {
                                        d12 = System.String.concat("\\large = \\frac{" + System.Double.format(-b, 'G') + " \\  \\pm \\ ", d11, "i\\sqrt{", System.Double.format(d2, 'G'), "}}{", System.Double.format(2 * a, 'G'), "}");
                                    }

                                    if (a === 1) {
                                        s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2}", d12, q71, "$", " <br /> <br />")));
                                    } else {
                                        if (a < 0) {
                                            s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2 \\cdot", "(", System.Double.format(a, 'G'), ")", "}", d12, q71, "$", " <br /> <br />")));
                                        } else {
                                            s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2 \\cdot", System.Double.format(a, 'G'), "}", d12, q71, "$", " <br /> <br />")));
                                        }
                                    }
                                    //----------------

                                    //Formula for x1 and x2--------------
                                    if (!System.String.isNullOrEmpty(q71)) {
                                        if (d5 === 1) {
                                            q3 = System.String.concat("\\normalsize " + System.Double.format(-d7, 'G') + " \\  + \\ ", d61, "i\\sqrt{", System.Double.format(d2, 'G'), "}");
                                            q4 = System.String.concat("\\normalsize " + System.Double.format(-d7, 'G') + " \\  - \\ ", d61, "i\\sqrt{", System.Double.format(d2, 'G'), "}");
                                        } else {
                                            if (d5 === -1) {
                                                q3 = System.String.concat("\\normalsize " + System.Double.format(d7, 'G') + " \\  + \\ ", d61, "i\\sqrt{", System.Double.format(d2, 'G'), "}");
                                                q4 = System.String.concat("\\normalsize " + System.Double.format(d7, 'G') + " \\  - \\ ", d61, "i\\sqrt{", System.Double.format(d2, 'G'), "}");
                                            } else {
                                                q3 = System.String.concat("\\large \\frac{" + System.Double.format(-d7, 'G') + " \\  + \\ ", d61, "i\\sqrt{", System.Double.format(d2, 'G'), "}}{", System.Double.format(d5, 'G'), "}");
                                                q4 = System.String.concat("\\large \\frac{" + System.Double.format(-d7, 'G') + " \\  - \\ ", d61, "i\\sqrt{", System.Double.format(d2, 'G'), "}}{", System.Double.format(d5, 'G'), "}");
                                            }
                                        }
                                    }
                                    //--------------------

                                    s4 = System.String.concat(s4, (System.String.concat("$", sx, "_1 = ", q3, "$ <br /> <br />", "\r\n", "$", sx, "_2 = ", q4, "$", "<br /> <br />")));
                                    test1.App.s5t = System.String.concat("Your original equation:  <br /> <br />", s8, "  <br /> <br /> In the standard form:  <br /> <br />", s7, "  <br /> <br /> Solution: <br /> <br /> ", test1.App.s5, "$\\Delta <0$, so there are no solutions in real numbers.  <br /> <br /> Solution in complex numbers:  <br /> <br /> ", s4);
                                }
                            } else {
                                if (a !== 0) {
                                    x1 = Bridge.Math.round((-b + Math.sqrt(d)) / (2 * a), 2, 6);
                                    x2 = Bridge.Math.round((-b - Math.sqrt(d)) / (2 * a), 2, 6);
                                    if (c !== 0) {
                                        if (b === 0) {
                                            q7 = "";
                                            // simplify abs(c/a)
                                            d5 = Math.abs(a);
                                            d6 = Math.abs(c);
                                            q8 = "";
                                            q4 = "";
                                            d7 = 0;
                                            if (Math.abs(c / a) !== Bridge.Math.round(Math.abs(c / a), 0, 6)) {
                                                d7 = 1;
                                                d5 = Math.abs(a);
                                                d6 = Math.abs(c);
                                                for (t = 2; t <= 100; t = (t + 1) | 0) {
                                                    if (!!(t <= d5 & t <= d6)) {
                                                        for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                            x3 = d5 / t;
                                                            x4 = d6 / t;
                                                            if (!!(Bridge.Math.round(x3, 0, 6) === x3 & Bridge.Math.round(x4, 0, 6) === x4)) {
                                                                d5 = d5 / t;
                                                                d6 = d6 / t;
                                                            } else {
                                                                t1 = 11;
                                                            }
                                                        }
                                                    } else {
                                                        t = 101;
                                                    }
                                                }
                                                if (a !== d5) {
                                                    if (Math.abs(d5) !== 1) {
                                                        if (c / a > 0) {
                                                            q8 = System.String.concat("=-\\frac{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}{", System.Convert.toString(Bridge.box(d5, System.Double, $box_.System.Double.toString)), "}");
                                                        } else {
                                                            q8 = System.String.concat("=\\frac{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}{", System.Convert.toString(Bridge.box(d5, System.Double, $box_.System.Double.toString)), "}");
                                                        }
                                                    } else {
                                                        q8 = System.String.concat("=", System.Convert.toString(Bridge.box(((-Bridge.Int.sign(c / a)) | 0) * d6, System.Double, $box_.System.Double.toString)));
                                                    }
                                                }
                                            } else {
                                                d5 = 1;
                                                d6 = Math.abs(c / a);
                                            }

                                            if (c / a > 0) {
                                                if (Bridge.Math.round(Math.sqrt(c / a), 2, 6) === 1) {
                                                    q3 = "i";
                                                } else {
                                                    q3 = System.Double.format(Bridge.Math.round(Math.sqrt(c / a), 2, 6), 'G') + "i";
                                                }
                                            } else {
                                                q3 = System.Convert.toString(Bridge.box(Bridge.Math.round(Math.sqrt(-c / a), 2, 6), System.Double, $box_.System.Double.toString));
                                            }


                                            if (a === 1) {
                                                if (c > 0) {
                                                    if (c === 1) {
                                                        q1 = " i";
                                                    } else {
                                                        q1 = "\\sqrt{" + System.Double.format(c, 'G') + "}i";
                                                    }
                                                    q7 = "i";
                                                    q2 = System.Convert.toString(Bridge.box(-c, System.Double, $box_.System.Double.toString));
                                                } else {
                                                    if (c === -1) {
                                                        q1 = "1";
                                                    } else {
                                                        q1 = "\\sqrt{" + System.Double.format(-c, 'G') + "}";
                                                    }
                                                    q2 = System.Convert.toString(Bridge.box(-c, System.Double, $box_.System.Double.toString));
                                                }
                                            } else {
                                                if (a === -1) {
                                                    if (c > 0) {
                                                        if (c === 1) {
                                                            q1 = "1";
                                                        } else {
                                                            q1 = "\\sqrt{" + System.Double.format(c, 'G') + "}";
                                                        }
                                                        q2 = System.Convert.toString(Bridge.box(c, System.Double, $box_.System.Double.toString));
                                                    } else {
                                                        if (c === -1) {
                                                            q1 = " i";
                                                        } else {
                                                            q1 = "\\sqrt{" + System.Double.format(-c, 'G') + "}i";
                                                        }
                                                        q2 = System.Convert.toString(Bridge.box(c, System.Double, $box_.System.Double.toString));
                                                        q7 = "i";
                                                    }
                                                } else {
                                                    if (Math.abs(c) === d6) {
                                                        if (d7 === 0) {
                                                            if (c / a > 0) {
                                                                q7 = "i";
                                                                if (Math.abs(c / a) === 1) {
                                                                    q1 = "i";
                                                                } else {
                                                                    q1 = System.String.concat("\\sqrt{", System.Convert.toString(Bridge.box(Math.abs(c / a), System.Double, $box_.System.Double.toString)), "}i");
                                                                }
                                                            } else if (Math.abs(c / a) === 1) {
                                                                q1 = "1";
                                                            } else {
                                                                q1 = System.String.concat("\\sqrt{", System.Convert.toString(Bridge.box(Math.abs(c / a), System.Double, $box_.System.Double.toString)), "}");
                                                            }
                                                            q2 = System.Convert.toString(Bridge.box(-c / a, System.Double, $box_.System.Double.toString));
                                                        } else {
                                                            if (c / a > 0) {
                                                                q1 = "\\sqrt{\\frac{" + System.Double.format(Math.abs(c), 'G') + "}{" + System.Double.format(Math.abs(a), 'G') + "}}i";
                                                                q7 = "i";
                                                            } else {
                                                                q1 = "\\sqrt{\\frac{" + System.Double.format(Math.abs(c), 'G') + "}{" + System.Double.format(Math.abs(a), 'G') + "}}";
                                                            }
                                                            if (c / a > 0) {
                                                                q2 = "-\\frac{" + System.Double.format(Math.abs(c), 'G') + "}{" + System.Double.format(Math.abs(a), 'G') + "}";
                                                            } else {
                                                                q2 = "\\frac{" + System.Double.format(Math.abs(c), 'G') + "}{" + System.Double.format(Math.abs(a), 'G') + "}";
                                                            }
                                                        }

                                                        if (!Bridge.referenceEquals(System.String.concat("=", q2), q8)) {
                                                            q2 = System.String.concat(q2, q8);
                                                        }
                                                    } else {
                                                        if (d5 === 1) {

                                                            if (c / a > 0) {
                                                                if (d6 === 1) {
                                                                    q1 = "i";
                                                                    q7 = "i";
                                                                } else {
                                                                    q1 = System.String.concat("\\sqrt{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}i");
                                                                    q7 = "i";
                                                                }
                                                            } else if (d6 === 1) {
                                                                q1 = "1";
                                                            } else {
                                                                q1 = System.String.concat("\\sqrt{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}");
                                                            }
                                                            if (c / a > 0) {
                                                                q2 = System.Convert.toString(Bridge.box(((-Bridge.Int.sign(c / a)) | 0) * d6, System.Double, $box_.System.Double.toString));
                                                            } else {
                                                                q2 = System.Convert.toString(Bridge.box(((-Bridge.Int.sign(c / a)) | 0) * d6, System.Double, $box_.System.Double.toString));
                                                            }
                                                            if (!Bridge.referenceEquals(System.String.concat("=", q2), q8)) {
                                                                q2 = System.String.concat(q2, q8);
                                                            }

                                                        } else {
                                                            if (c / a > 0) {
                                                                q1 = System.String.concat("\\sqrt{\\frac{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}{", System.Convert.toString(Bridge.box(d5, System.Double, $box_.System.Double.toString)), "}}i");
                                                                q7 = "i";
                                                            } else {
                                                                q1 = System.String.concat("\\sqrt{\\frac{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}{", System.Convert.toString(Bridge.box(d5, System.Double, $box_.System.Double.toString)), "}}");
                                                            }
                                                            if (c / a > 0) {
                                                                q2 = System.String.concat("-\\frac{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}{", System.Convert.toString(Bridge.box(d5, System.Double, $box_.System.Double.toString)), "}");
                                                            } else {
                                                                q2 = System.String.concat("\\frac{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}{", System.Convert.toString(Bridge.box(d5, System.Double, $box_.System.Double.toString)), "}");
                                                            }
                                                            if (!Bridge.referenceEquals(System.String.concat("=", q2), q8)) {
                                                                q2 = System.String.concat(q2, q8);
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                            if (Math.sqrt(Math.abs(c / a)) === Bridge.Math.round(Math.sqrt(Math.abs(c / a)), 2, 6)) {
                                                q5 = " =";
                                            } else {
                                                q5 = " \\approx";
                                            }

                                            if (Math.sqrt(Math.abs(c / a)) === Bridge.Math.round(Math.sqrt(Math.abs(c / a)), 0, 6)) {
                                                //q5 = " =";
                                                d2 = d6;
                                                d25 = d5;
                                            } else {
                                                //simplify square root
                                                d1 = 1;
                                                if (Math.abs(a) === 1) {
                                                    d2 = d6;
                                                } else {
                                                    d2 = d6;
                                                }

                                                if (Math.sqrt(d2) === Bridge.Math.round(Math.sqrt(d2), 0, 6)) {
                                                    d1 = Math.sqrt(d2);
                                                    d2 = 1;
                                                } else {
                                                    for (t = 2; t <= 100; t = (t + 1) | 0) {
                                                        if (Math.pow(t, 2) <= d2) {
                                                            for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                                x3 = d2 / (Math.pow(t, 2));

                                                                if (Bridge.Math.round(x3, 0, 6) === x3) {
                                                                    d1 = d1 * t;
                                                                    d2 = d2 / (Math.pow(t, 2));
                                                                } else {
                                                                    t1 = 11;
                                                                }
                                                            }
                                                        } else {
                                                            t = 101;
                                                        }
                                                    }
                                                }

                                                d15 = 1;
                                                d25 = d5;
                                                if (d7 === 1) {
                                                    //square root for denumerator
                                                    if (Math.sqrt(d25) === Bridge.Math.round(Math.sqrt(d25), 0, 6)) {
                                                        d15 = Math.sqrt(d25);
                                                        d25 = 1;
                                                    } else {
                                                        for (t = 2; t <= 100; t = (t + 1) | 0) {
                                                            if (Math.pow(t, 2) <= d25) {
                                                                for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                                    x3 = d25 / (Math.pow(t, 2));

                                                                    if (Bridge.Math.round(x3, 0, 6) === x3) {
                                                                        d15 = d15 * t;
                                                                        d25 = d25 / (Math.pow(t, 2));
                                                                    } else {
                                                                        t1 = 11;
                                                                    }
                                                                }
                                                            } else {
                                                                t = 101;
                                                            }
                                                        }
                                                    }
                                                }

                                                q4 = "";
                                                if (!!(d2 !== d6 | d25 !== d5)) {
                                                    if (d5 === 1) {
                                                        if (d1 === 1) {
                                                            if (d2 === 1) {
                                                                q4 = System.String.concat(" = \\pm ", q7);
                                                            } else {
                                                                q4 = System.String.concat(" = \\pm \\sqrt{" + System.Double.format(d2, 'G') + "}", q7);
                                                            }
                                                        } else {
                                                            if (d2 === 1) {
                                                                q4 = System.String.concat(" = \\pm " + System.Double.format(d1, 'G'), q7);
                                                            } else {
                                                                q4 = System.String.concat(" = \\pm " + System.Double.format(d1, 'G') + "\\sqrt{" + System.Double.format(d2, 'G') + "}", q7);
                                                            }
                                                        }
                                                    } else {
                                                        if (d2 === 1) {
                                                            if (d25 === 1) {
                                                                q4 = System.String.concat(" = \\pm \\frac{" + System.Double.format(d1, 'G') + "}{" + System.Double.format(d15, 'G') + "}", q7);
                                                            } else {
                                                                if (d15 === 1) {
                                                                    q4 = System.String.concat(" = \\pm \\frac{" + System.Double.format(d1, 'G') + "}{\\sqrt{" + System.Double.format(d25, 'G') + "}" + "}", q7);
                                                                } else {
                                                                    q4 = System.String.concat(" = \\pm \\frac{" + System.Double.format(d1, 'G') + "}{" + System.Double.format(d15, 'G') + "\\sqrt{" + System.Double.format(d25, 'G') + "}" + "}", q7);
                                                                }
                                                            }
                                                        } else {
                                                            if (d25 === 1) {
                                                                if (d1 === 1) {
                                                                    q4 = System.String.concat(" = \\pm \\frac{\\sqrt{" + System.Double.format(d2, 'G') + "}}{" + System.Double.format(d15, 'G') + "}", q7);
                                                                } else {
                                                                    q4 = System.String.concat(" = \\pm \\frac{" + System.Double.format(d1, 'G') + "\\sqrt{" + System.Double.format(d2, 'G') + "}}{" + System.Double.format(d15, 'G') + "}", q7);
                                                                }
                                                            } else {
                                                                if (d1 === 1) {
                                                                    if (d15 === 1) {
                                                                        q4 = System.String.concat(" = \\pm \\frac{\\sqrt{" + System.Double.format(d2, 'G') + "}}{\\sqrt{" + System.Double.format(d25, 'G') + "}" + "}", q7);
                                                                    } else {
                                                                        q4 = System.String.concat(" = \\pm \\frac{\\sqrt{" + System.Double.format(d2, 'G') + "}}{" + System.Double.format(d15, 'G') + "\\sqrt{" + System.Double.format(d25, 'G') + "}" + "}", q7);
                                                                    }
                                                                } else {
                                                                    if (d15 === 1) {
                                                                        q4 = System.String.concat(" = \\pm \\frac{" + System.Double.format(d1, 'G') + "\\sqrt{" + System.Double.format(d2, 'G') + "}}{\\sqrt{" + System.Double.format(d25, 'G') + "}" + "}", q7);
                                                                    } else {
                                                                        q4 = System.String.concat(" = \\pm \\frac{" + System.Double.format(d1, 'G') + "\\sqrt{" + System.Double.format(d2, 'G') + "}}{" + System.Double.format(d15, 'G') + "\\sqrt{" + System.Double.format(d25, 'G') + "}" + "}", q7);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                //q5 = " \\approx";
                                                if (d2 * d25 === 1) {
                                                    if (d15 * d25 === 1) {
                                                        q75 = System.String.concat(" = \\pm" + System.Double.format(d1, 'G'), q7);
                                                    } else {
                                                        q75 = System.String.concat(" = \\pm \\frac{" + System.Double.format(d1, 'G') + "}{" + System.Double.format(d15 * d25, 'G') + "}", q7);
                                                    }
                                                } else {
                                                    if (d15 * d25 === 1) {
                                                        q75 = System.String.concat(" = \\pm " + System.Double.format(d1, 'G') + "\\normalsize \\sqrt{" + System.Double.format(d2 * d25, 'G') + "}", q7);
                                                        w2 = true;
                                                    } else if (d1 === 1) {
                                                        q75 = System.String.concat(" = \\pm \\frac{\\sqrt{" + System.Double.format(d2 * d25, 'G') + "}}{" + System.Double.format(d15 * d25, 'G') + "}", q7);
                                                    } else {
                                                        q75 = System.String.concat(" = \\pm \\frac{" + System.Double.format(d1, 'G') + "\\sqrt{" + System.Double.format(d2 * d25, 'G') + "}}{" + System.Double.format(d15 * d25, 'G') + "}", q7);
                                                    }
                                                }
                                                if (!!(Bridge.referenceEquals(q4, q75) | w2)) {
                                                    q75 = "";
                                                }
                                            }
                                            w2 = false;
                                            if (System.String.contains(q2,"frac")) {
                                                q71 = "\\large ";
                                            } else {
                                                q71 = "";
                                            }
                                            if (d7 === 0) {
                                                s4 = System.String.concat("$", sx, "^2", "=", System.Convert.toString(Bridge.box(Bridge.Int.sign(-c / a) * Math.abs(c / a), System.Double, $box_.System.Double.toString)), "$");
                                            } else {
                                                s4 = System.String.concat("$", sx, "^2", q71, "=", q2, "$");
                                            }
                                            if (Bridge.referenceEquals(s4, s8)) {
                                                s4 = "";
                                            } else {
                                                s4 = System.String.concat(s4, " <br /> <br />");
                                            }
                                            if (System.String.contains(q1,"frac")) {
                                                q8 = "\\large ";
                                            } else {
                                                q8 = "";
                                            }
                                            if (System.String.contains((System.String.concat(q1, q4)),"frac")) {
                                                q71 = "\\large ";
                                            } else {
                                                q71 = "";
                                            }
                                            if (!!(!!(Bridge.referenceEquals(q4, "") & Bridge.referenceEquals(q5, " =")) & (!!(Bridge.referenceEquals(q1, q3) | Bridge.referenceEquals(q1, System.String.concat(" ", q3)))))) {
                                                s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", q8, "= \\pm ", q1, " $<br /> <br />")));
                                            } else {
                                                s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", q71, "= \\pm ", q1, q4, q75, q5, "\\normalsize \\pm ", q3, " $<br /> <br />")));
                                            }
                                            test1.App.s5t = System.String.concat("Your original equation:  <br /> <br />", s8, "  <br /> <br /> ", " Solution: <br /> <br />", s4);
                                        } else {
                                            if (Math.sqrt(d) === Bridge.Math.round(Math.sqrt(d), 0, 6)) {
                                                if (b === 0) {
                                                    q1 = System.Convert.toString(Bridge.box(Math.sqrt(d), System.Double, $box_.System.Double.toString));
                                                    q11 = Math.sqrt(d);
                                                } else {
                                                    q1 = System.Convert.toString(Bridge.box(-b + Math.sqrt(d), System.Double, $box_.System.Double.toString));
                                                    q11 = -b + Math.sqrt(d);
                                                }
                                                if (b === 0) {
                                                    q2 = System.Convert.toString(Bridge.box(-Math.sqrt(d), System.Double, $box_.System.Double.toString));
                                                    q12 = -Math.sqrt(d);
                                                } else {
                                                    q2 = System.Convert.toString(Bridge.box(-b - Math.sqrt(d), System.Double, $box_.System.Double.toString));
                                                    q12 = -b - Math.sqrt(d);
                                                }
                                                if (x1 === (-b + Math.sqrt(d)) / (2 * a)) {
                                                    q5 = " =";
                                                } else {
                                                    q5 = " \\approx";
                                                }
                                                if (x2 === (-b - Math.sqrt(d)) / (2 * a)) {
                                                    q6 = " =";
                                                } else {
                                                    q6 = " \\approx";
                                                }
                                                //gcd
                                                //q11 = Math.Sqrt(d);

                                                q7 = "";
                                                q8 = "";
                                                if (Bridge.referenceEquals(q5, " \\approx")) {
                                                    d5 = Math.abs(2 * a);
                                                    d6 = Math.abs(q11);
                                                    for (t = 2; t <= 100; t = (t + 1) | 0) {
                                                        if (!!(t <= d5 & t <= d6)) {
                                                            for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                                x3 = d5 / t;
                                                                x4 = d6 / t;
                                                                if (!!(Bridge.Math.round(x3, 0, 6) === x3 & Bridge.Math.round(x4, 0, 6) === x4)) {
                                                                    d5 = d5 / t;
                                                                    d6 = d6 / t;
                                                                } else {
                                                                    t1 = 11;
                                                                }
                                                            }
                                                        } else {
                                                            t = 101;
                                                        }
                                                    }
                                                    if (a < 0) {
                                                        d5 = -d5;
                                                    }
                                                    if (q11 < 0) {
                                                        d6 = -d6;
                                                    }
                                                    if (!!(a < 0 & q11 < 0)) {
                                                        d5 = -d5;
                                                        d6 = -d6;
                                                    }
                                                    if (2 * a !== d5) {
                                                        q7 = " = \\frac{" + System.Double.format(d6, 'G') + "}{" + System.Double.format(d5, 'G') + "}";
                                                    }
                                                }

                                                if (Bridge.referenceEquals(q6, " \\approx")) {
                                                    d5 = Math.abs(2 * a);
                                                    d6 = Math.abs(q12);
                                                    for (t = 2; t <= 100; t = (t + 1) | 0) {
                                                        if (!!(t <= d5 & t <= d6)) {
                                                            for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                                x3 = d5 / t;
                                                                x4 = d6 / t;
                                                                if (!!(Bridge.Math.round(x3, 0, 6) === x3 & Bridge.Math.round(x4, 0, 6) === x4)) {
                                                                    d5 = d5 / t;
                                                                    d6 = d6 / t;
                                                                } else {
                                                                    t1 = 11;
                                                                }
                                                            }
                                                        } else {
                                                            t = 101;
                                                        }
                                                    }
                                                    if (a < 0) {
                                                        d5 = -d5;
                                                    }
                                                    if (q12 < 0) {
                                                        d6 = -d6;
                                                    }
                                                    if (!!(a < 0 & q12 < 0)) {
                                                        d5 = -d5;
                                                        d6 = -d6;
                                                    }
                                                    if (2 * a !== d5) {
                                                        q8 = " = \\frac{" + System.Double.format(d6, 'G') + "}{" + System.Double.format(d5, 'G') + "}";
                                                    }
                                                }

                                                if (2 * a === 1) {
                                                    q3 = q1;
                                                } else {
                                                    q3 = System.String.concat("\\frac{", q1, "}{", System.Double.format(2 * a, 'G'), "}", q7, q5);
                                                }
                                                if (2 * a === 1) {
                                                    q4 = q2;
                                                } else {
                                                    q4 = System.String.concat("\\frac{", q2, "}{", System.Double.format(2 * a, 'G'), "}", q8, q6);
                                                }


                                                //Disciminant ------------
                                                if (!!(b > 0 | b === 0)) {
                                                    b3 = System.Convert.toString(Bridge.box(b, System.Double, $box_.System.Double.toString));
                                                } else {
                                                    b3 = "(" + System.Double.format(b, 'G') + ")";
                                                }
                                                if (!!(b !== 0 & c !== 0)) {
                                                    if (a * c > 0) {
                                                        q7 = System.Double.format(Math.pow(b, 2), 'G') + "-" + System.Double.format(4 * a * c, 'G') + "=";
                                                    } else {
                                                        q7 = System.Double.format(Math.pow(b, 2), 'G') + "+" + System.Double.format(-4 * a * c, 'G') + "=";
                                                    }
                                                } else {
                                                    q7 = "";
                                                }

                                                if (!!(c > 0 | c === 0)) {
                                                    if (a > 0) {
                                                        s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", System.Double.format(a, 'G'), "\\cdot ", System.Double.format(c, 'G'), " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                                    } else {
                                                        s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", "(", System.Double.format(a, 'G'), ")", "\\cdot ", System.Double.format(c, 'G'), " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                                    }
                                                } else {
                                                    if (a > 0) {
                                                        s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", System.Double.format(a, 'G'), "\\cdot ", "(", System.Double.format(c, 'G'), ")", " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                                    } else {
                                                        s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", "(", System.Double.format(a, 'G'), ")", "\\cdot ", "(", System.Double.format(c, 'G'), ")", " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                                    }
                                                }
                                                //------------

                                                if (d === 0) {
                                                    s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}$", " ", " <br /> <br />")));
                                                    s4 = System.String.concat(s4, (System.String.concat("$\\Delta =0$, so there is a double root  <br /> <br />$", sx, " =", q3, System.Double.format(x1, 'G'), "$ <br /> <br />")));
                                                } else {

                                                    if (a === 1) {
                                                        s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2}", " = \\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ ", System.Double.format(Math.sqrt(d), 'G'), "}{2}$", " <br /> <br />")));
                                                        q7 = "\\frac{" + System.Double.format(-b, 'G') + " \\  + \\ " + System.Double.format(Math.sqrt(d), 'G') + "}{2} = ";
                                                        q8 = "\\frac{" + System.Double.format(-b, 'G') + " \\  - \\ " + System.Double.format(Math.sqrt(d), 'G') + "}{2} = ";
                                                    } else {
                                                        q7 = "\\frac{" + System.Double.format(-b, 'G') + " \\  + \\ " + System.Double.format(Math.sqrt(d), 'G') + "}{" + System.Double.format(2 * a, 'G') + "} = ";
                                                        q8 = "\\frac{" + System.Double.format(-b, 'G') + " \\  - \\ " + System.Double.format(Math.sqrt(d), 'G') + "}{" + System.Double.format(2 * a, 'G') + "} = ";
                                                        if (a < 0) {
                                                            s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2 \\cdot", "(", System.Double.format(a, 'G'), ")", "}", " = \\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ ", System.Double.format(Math.sqrt(d), 'G'), "}{", System.Double.format(2 * a, 'G'), "}$", " <br /> <br />")));
                                                        } else {
                                                            s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2 \\cdot", System.Double.format(a, 'G'), "}", " = \\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ ", System.Double.format(Math.sqrt(d), 'G'), "}{", System.Double.format(2 * a, 'G'), "}$", " <br /> <br />")));
                                                        }
                                                    }
                                                    s4 = System.String.concat(s4, (System.String.concat("$", sx, "_1 \\large = ", q7, q3, "\\normalsize ", System.Double.format(x1, 'G'), "$ <br /> <br />", "\r\n", "$", sx, "_2 \\large = ", q8, q4, "\\normalsize ", System.Double.format(x2, 'G'), "$")));
                                                }
                                                test1.App.s5t = System.String.concat("Your original equation:  <br /> <br />", s8, "  <br /> <br /> In the standard form:  <br /> <br />", s7, "  <br /> <br /> Solution: <br /> <br />", s4);
                                            } else {
                                                d1 = 1;
                                                d2 = d;
                                                for (t = 2; t <= 100; t = (t + 1) | 0) {
                                                    if (Math.pow(t, 2) <= d2) {
                                                        for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                            x3 = d2 / (Math.pow(t, 2));

                                                            if (Bridge.Math.round(x3, 0, 6) === x3) {
                                                                d1 = d1 * t;
                                                                d2 = d2 / (Math.pow(t, 2));
                                                            } else {
                                                                t1 = 11;
                                                            }
                                                        }
                                                    } else {
                                                        t = 101;
                                                    }
                                                }
                                                if (d1 === 1) {
                                                    if (b === 0) {
                                                        q1 = "\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    } else {
                                                        q1 = System.Double.format(-b, 'G') + " +" + " \\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    }
                                                    if (b === 0) {
                                                        q2 = "-\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    } else {
                                                        q2 = System.Double.format(-b, 'G') + " -" + " \\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                    }
                                                } else {
                                                    d3 = d1 / (2 * a);
                                                    d4 = b / (2 * a);
                                                    if (!!(d3 === Bridge.Math.round(d3, 0, 6) & d4 === Bridge.Math.round(d4, 0, 6))) {
                                                        if (d3 === 1) {
                                                            if (b === 0) {
                                                                q1 = "\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                            } else {
                                                                q1 = System.Double.format(-d4, 'G') + " + \\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                            }
                                                            if (b === 0) {
                                                                q2 = "-\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                            } else {
                                                                q2 = System.Double.format(-d4, 'G') + " - \\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                            }
                                                        } else {
                                                            if (d3 === -1) {
                                                                if (b === 0) {
                                                                    q1 = "-\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                                } else {
                                                                    q1 = System.Double.format(-d4, 'G') + " -" + " \\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                                }
                                                                if (b === 0) {
                                                                    q2 = "\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                                } else {
                                                                    q2 = System.Double.format(-d4, 'G') + " +" + " \\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                                }
                                                            } else {
                                                                if (b === 0) {
                                                                    q1 = System.Double.format(d3, 'G') + "\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                                } else {
                                                                    q1 = System.Double.format(-d4, 'G') + " +" + System.Double.format(d3, 'G') + " \\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                                }
                                                                if (b === 0) {
                                                                    q2 = "-" + System.Double.format(d3, 'G') + "\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                                } else {
                                                                    q2 = System.Double.format(-d4, 'G') + " -" + System.Double.format(d3, 'G') + " \\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                                }
                                                            }
                                                        }
                                                    } else {
                                                        if (b === 0) {
                                                            q1 = System.Double.format(d1, 'G') + "\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                        } else {
                                                            q1 = System.Double.format(-b, 'G') + "\\ +" + System.Double.format(d1, 'G') + "\\ \\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                        }
                                                        if (b === 0) {
                                                            q2 = "-" + System.Double.format(d1, 'G') + "\\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                        } else {
                                                            q2 = System.Double.format(-b, 'G') + "\\ -" + System.Double.format(d1, 'G') + "\\ \\sqrt{" + System.Double.format(d2, 'G') + "}";
                                                        }
                                                    }
                                                }
                                                if (x1 === (-b + Math.sqrt(d)) / (2 * a)) {
                                                    q5 = " =";
                                                } else {
                                                    q5 = "\\normalsize \\approx";
                                                }

                                                if (!!(d1 / (2 * a) === Bridge.Math.round(d1 / (2 * a), 0, 6) & b / (2 * a) === Bridge.Math.round(b / (2 * a), 0, 6))) {
                                                    if (2 * a === 1) {
                                                        q3 = q1;
                                                    } else {
                                                        q3 = System.String.concat(q1, q5);
                                                    }
                                                    if (2 * a === 1) {
                                                        q4 = q2;
                                                    } else {
                                                        q4 = System.String.concat(q2, q5);
                                                    }
                                                } else {
                                                    if (2 * a === 1) {
                                                        q3 = q1;
                                                    } else {
                                                        q3 = System.String.concat("\\large \\frac{", q1, "}{", System.Double.format(2 * a, 'G'), "}", q5);
                                                    }
                                                    if (2 * a === 1) {
                                                        q4 = q2;
                                                    } else {
                                                        q4 = System.String.concat("\\large \\frac{", q2, "}{", System.Double.format(2 * a, 'G'), "}", q5);
                                                    }
                                                }

                                                if (!!(b > 0 | b === 0)) {
                                                    b3 = System.Convert.toString(Bridge.box(b, System.Double, $box_.System.Double.toString));
                                                } else {
                                                    b3 = "(" + System.Double.format(b, 'G') + ")";
                                                }
                                                if (!!(b !== 0 & c !== 0)) {
                                                    if (a * c > 0) {
                                                        q7 = System.Double.format(Math.pow(b, 2), 'G') + "-" + System.Double.format(4 * a * c, 'G') + "=";
                                                    } else {
                                                        q7 = System.Double.format(Math.pow(b, 2), 'G') + "+" + System.Double.format(-4 * a * c, 'G') + "=";
                                                    }
                                                } else {
                                                    q7 = "";
                                                }
                                                if (!!(c > 0 | c === 0)) {
                                                    if (a > 0) {
                                                        s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", System.Double.format(a, 'G'), "\\cdot ", System.Double.format(c, 'G'), " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                                    } else {
                                                        s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", "(", System.Double.format(a, 'G'), ")", "\\cdot ", System.Double.format(c, 'G'), " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                                    }
                                                } else {
                                                    if (a > 0) {
                                                        s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", System.Double.format(a, 'G'), "\\cdot ", "(", System.Double.format(c, 'G'), ")", " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                                    } else {
                                                        s4 = System.String.concat("$\\Delta = b^2 - 4ac =", b3, "^2 - 4 \\cdot ", "(", System.Double.format(a, 'G'), ")", "\\cdot ", "(", System.Double.format(c, 'G'), ")", " = ", q7, System.Double.format(d, 'G'), "$ <br /> <br />");
                                                    }
                                                }

                                                //Simplify------------
                                                q71 = "";
                                                d61 = "";
                                                if (d1 !== 1) {
                                                    d5 = Math.abs(2 * a);
                                                    d6 = Math.abs(d1);
                                                    d7 = Math.abs(b);
                                                    for (t = 2; t <= 100; t = (t + 1) | 0) {
                                                        if (!!(!!(t <= d5 & t <= d6) & t <= d7)) {
                                                            for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                                x3 = d5 / t;
                                                                x4 = d6 / t;
                                                                x5 = d7 / t;
                                                                if (!!(!!(Bridge.Math.round(x3, 0, 6) === x3 & Bridge.Math.round(x4, 0, 6) === x4) & Bridge.Math.round(x5, 0, 6) === x5)) {
                                                                    d5 = d5 / t;
                                                                    d6 = d6 / t;
                                                                    d7 = d7 / t;
                                                                } else {
                                                                    t1 = 11;
                                                                }
                                                            }
                                                        } else {
                                                            t = 101;
                                                        }
                                                    }
                                                    if (a < 0) {
                                                        d5 = -d5;
                                                    }
                                                    if (b < 0) {
                                                        d7 = -d7;
                                                    }
                                                    if (2 * a !== d5) {
                                                        if (d6 === 1) {
                                                            d61 = "";
                                                        } else {
                                                            d61 = System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString));
                                                        }
                                                        if (d5 === 1) {
                                                            q71 = System.String.concat(" = \\normalsize " + System.Double.format(-d7, 'G') + " \\  \\pm \\ ", d61, "\\sqrt{", System.Double.format(d2, 'G'), "}");
                                                        } else {
                                                            if (d5 === -1) {
                                                                q71 = System.String.concat(" = \\normalsize " + System.Double.format(d7, 'G') + " \\  \\pm \\ ", d61, "\\sqrt{", System.Double.format(d2, 'G'), "}");
                                                            } else {
                                                                q71 = System.String.concat("\\large = \\frac{" + System.Double.format(-d7, 'G') + " \\  \\pm \\ ", d61, "\\sqrt{", System.Double.format(d2, 'G'), "}}{", System.Double.format(d5, 'G'), "}");
                                                            }

                                                        }
                                                    }
                                                }

                                                if (a !== 1) {
                                                }
                                                //-----------------
                                                //Formula ------------
                                                if (d1 === 1) {
                                                    d11 = "";
                                                } else {
                                                    d11 = System.Convert.toString(Bridge.box(d1, System.Double, $box_.System.Double.toString));
                                                }
                                                if (d1 === 1) {
                                                    d12 = "";
                                                } else {
                                                    d12 = System.String.concat("\\large = \\frac{" + System.Double.format(-b, 'G') + " \\  \\pm \\ ", d11, "\\sqrt{", System.Double.format(d2, 'G'), "}}{", System.Double.format(2 * a, 'G'), "}");
                                                }
                                                if (!!(d1 === 1 & a !== 1)) {
                                                    d12 = System.String.concat("\\large = \\frac{" + System.Double.format(-b, 'G') + " \\  \\pm \\ ", d11, "\\sqrt{", System.Double.format(d2, 'G'), "}}{", System.Double.format(2 * a, 'G'), "}");
                                                }

                                                if (a === 1) {
                                                    s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2}", d12, q71, "$", " <br /> <br />")));
                                                } else {
                                                    if (a < 0) {
                                                        s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2 \\cdot", "(", System.Double.format(a, 'G'), ")", "}", d12, q71, "$", " <br /> <br />")));
                                                    } else {
                                                        s4 = System.String.concat(s4, (System.String.concat("$", sx, "_\\ ", "\\large = \\frac{-b \\  \\pm \\ \\sqrt{\\Delta}}{2a}=", "\\frac{", System.Double.format(-b, 'G'), " \\  \\pm \\ \\sqrt{", System.Double.format(d, 'G'), "}}{2 \\cdot", System.Double.format(a, 'G'), "}", d12, q71, "$", " <br /> <br />")));
                                                    }
                                                }
                                                //----------------

                                                //Formula for x1 and x2--------------
                                                if (!System.String.isNullOrEmpty(q71)) {
                                                    if (d5 === 1) {
                                                        q3 = System.String.concat(" \\normalsize " + System.Double.format(-d7, 'G') + " \\  + \\ ", d61, "\\sqrt{", System.Double.format(d2, 'G'), "} \\approx ");
                                                        q4 = System.String.concat(" \\normalsize " + System.Double.format(-d7, 'G') + " \\  - \\ ", d61, "\\sqrt{", System.Double.format(d2, 'G'), "} \\approx ");
                                                    } else {
                                                        if (d5 === -1) {
                                                            q3 = System.String.concat(" \\normalsize " + System.Double.format(d7, 'G') + " \\  + \\ ", d61, "\\sqrt{", System.Double.format(d2, 'G'), "} \\approx ");
                                                            q4 = System.String.concat(" \\normalsize " + System.Double.format(d7, 'G') + " \\  - \\ ", d61, "\\sqrt{", System.Double.format(d2, 'G'), "} \\approx ");
                                                        } else {
                                                            q3 = System.String.concat("\\large \\frac{" + System.Double.format(-d7, 'G') + " \\  + \\ ", d61, "\\sqrt{", System.Double.format(d2, 'G'), "}}{", System.Double.format(d5, 'G'), "}\\normalsize  \\approx ");
                                                            q4 = System.String.concat("\\large \\frac{" + System.Double.format(-d7, 'G') + " \\  - \\ ", d61, "\\sqrt{", System.Double.format(d2, 'G'), "}}{", System.Double.format(d5, 'G'), "}\\normalsize  \\approx ");
                                                        }
                                                    }
                                                }
                                                //--------------------

                                                s4 = System.String.concat(s4, (System.String.concat("$", sx, "_1 =", q3, System.Double.format(x1, 'G'), "$ <br /> <br />", "\r\n", "$", sx, "_2 =", q4, System.Double.format(x2, 'G'), "$", "<br /> <br />")));
                                                test1.App.s5t = System.String.concat("Your original equation:  <br /> <br />", s8, "  <br /> <br /> In the standard form:  <br /> <br />", s7, "  <br /> <br /> Solution: <br /> <br />", s4);
                                            }

                                        }
                                        //c=0
                                    } else {
                                        if (b === 0) {
                                            s4 = System.String.concat("$", sx, "=0 \\ $(double root)");
                                            test1.App.s5t = System.String.concat("Your original equation:  <br /> <br />", s8, "  <br /> <br /> Solution: <br /> <br />", s4);
                                        } else {
                                            x2 = Bridge.Math.round(-b / a, 2, 6);
                                            d5 = Math.abs(b);
                                            d6 = Math.abs(c);
                                            q8 = "";
                                            q4 = "";
                                            d7 = 0;
                                            if (b / a !== Bridge.Math.round(b / a, 0, 6)) {
                                                // simplify abs(b/a)
                                                d7 = 1;
                                                d5 = Math.abs(a);
                                                d6 = Math.abs(b);
                                                for (t = 2; t <= 100; t = (t + 1) | 0) {
                                                    if (!!(t <= d5 & t <= d6)) {
                                                        for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                            x3 = d5 / t;
                                                            x4 = d6 / t;
                                                            if (!!(Bridge.Math.round(x3, 0, 6) === x3 & Bridge.Math.round(x4, 0, 6) === x4)) {
                                                                d5 = d5 / t;
                                                                d6 = d6 / t;
                                                            } else {
                                                                t1 = 11;
                                                            }
                                                        }
                                                    } else {
                                                        t = 101;
                                                    }
                                                }
                                                if (Math.abs(a) !== d5) {
                                                    if (Math.abs(d5) !== 1) {
                                                        if (b / a > 0) {
                                                            q8 = System.String.concat("=-\\frac{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}{", System.Convert.toString(Bridge.box(d5, System.Double, $box_.System.Double.toString)), "}");
                                                        } else {
                                                            q8 = System.String.concat("=\\frac{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}{", System.Convert.toString(Bridge.box(d5, System.Double, $box_.System.Double.toString)), "}");
                                                        }
                                                    } else {
                                                        q8 = System.String.concat("=", System.Convert.toString(Bridge.box(((-Bridge.Int.sign(b / a)) | 0) * d6, System.Double, $box_.System.Double.toString)));
                                                    }
                                                }
                                            }
                                            if (-b / a === x2) {
                                                q5 = " =";
                                            } else {
                                                q5 = " \\approx ";
                                            }
                                            if (!!(a !== 1 & a !== -1)) {
                                                if (((Bridge.Int.sign(a) * Bridge.Int.sign(-b)) | 0) > 0) {
                                                    q4 = "\\frac{" + System.Double.format(Math.abs(b), 'G') + "}{" + System.Double.format(Math.abs(a), 'G') + "}";
                                                } else {
                                                    q4 = "-\\frac{" + System.Double.format(Math.abs(b), 'G') + "}{" + System.Double.format(Math.abs(a), 'G') + "}";
                                                }
                                            } else {
                                                q4 = "";
                                            }
                                            if (!Bridge.referenceEquals(System.String.concat("=", q4), q8)) {
                                                q4 = System.String.concat(q4, q8);
                                            }
                                            a11 = System.Convert.toString(Bridge.box(a, System.Double, $box_.System.Double.toString));
                                            if (a === 1) {
                                                a11 = "";
                                            }
                                            if (a === -1) {
                                                a11 = "-";
                                            }
                                            if (b > 0) {
                                                s4 = System.String.concat("$", sx, "(", a11, sx, "+", System.Double.format(b, 'G'), ")=0$", " <br /> <br />");
                                                q1 = System.String.concat("$", a11, sx, "+", System.Double.format(b, 'G'), "=0$");
                                            } else {
                                                s4 = System.String.concat("$", sx, "(", a11, sx, System.Double.format(b, 'G'), ")=0$", " <br /> <br />");
                                                q1 = System.String.concat("$", a11, sx, System.Double.format(b, 'G'), "=0$");
                                            }
                                            if (System.String.contains(q4,"frac")) {
                                                q71 = "\\large ";
                                            } else {
                                                q71 = "";
                                            }
                                            if (Bridge.referenceEquals(q4, "")) {
                                                q5 = "";
                                            }
                                            s4 = System.String.concat(s4, (System.String.concat("$", sx, "=0$", " <br /> <br />", q1, " <br /> <br />", "$", sx, q71, "=", q4, q5, "\\normalsize ", System.Double.format(x2, 'G'), "$", "<br /> <br />")));
                                            s4 = System.String.concat(s4, (System.String.concat("$", sx, "_1=0$", " <br /> <br />", "$", sx, "_2=", System.Double.format(x2, 'G'), "$")));
                                            test1.App.s5t = System.String.concat("Your original equation:  <br /> <br />", s8, "  <br /> <br /> In the standard form:  <br /> <br />", s7, "  <br /> <br /> Solution: <br /> <br />", s4);
                                        }
                                    }
                                    //a=0
                                } else {
                                    if (b !== 0) {
                                        d3 = (-c) / b;
                                        d5 = Math.abs(b);
                                        d6 = Math.abs(c);
                                        q8 = "";
                                        q4 = "";
                                        d7 = 0;
                                        if (d3 === Bridge.Math.round(d3, 0, 6)) {
                                            s4 = System.String.concat("$", sx, "=", System.Double.format(d3, 'G'), "$");
                                        } else {
                                            // simplify abs(c/b)
                                            d7 = 1;
                                            d5 = Math.abs(b);
                                            d6 = Math.abs(c);
                                            for (t = 2; t <= 100; t = (t + 1) | 0) {
                                                if (!!(t <= d5 & t <= d6)) {
                                                    for (t1 = 1; t1 <= 10; t1 = (t1 + 1) | 0) {
                                                        x3 = d5 / t;
                                                        x4 = d6 / t;
                                                        if (!!(Bridge.Math.round(x3, 0, 6) === x3 & Bridge.Math.round(x4, 0, 6) === x4)) {
                                                            d5 = d5 / t;
                                                            d6 = d6 / t;
                                                        } else {
                                                            t1 = 11;
                                                        }
                                                    }
                                                } else {
                                                    t = 101;
                                                }
                                            }
                                            if (Math.abs(b) !== d5) {
                                                if (Math.abs(d5) !== 1) {
                                                    if (c / b > 0) {
                                                        q8 = System.String.concat("=-\\frac{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}{", System.Convert.toString(Bridge.box(d5, System.Double, $box_.System.Double.toString)), "}");
                                                    } else {
                                                        q8 = System.String.concat("=\\frac{", System.Convert.toString(Bridge.box(d6, System.Double, $box_.System.Double.toString)), "}{", System.Convert.toString(Bridge.box(d5, System.Double, $box_.System.Double.toString)), "}");
                                                    }
                                                } else {
                                                    q8 = System.String.concat("=", System.Convert.toString(Bridge.box(((-Bridge.Int.sign(c / b)) | 0) * d6, System.Double, $box_.System.Double.toString)));
                                                }
                                            }
                                            if (d3 === Bridge.Math.round(d3, 2, 6)) {
                                                q5 = " =";
                                            } else {
                                                q5 = " \\approx";
                                            }
                                            if (c / b > 0) {
                                                q4 = "-\\frac{" + System.Double.format(Math.abs(c), 'G') + "}{" + System.Double.format(Math.abs(b), 'G') + "} ";
                                            } else {
                                                q4 = "\\frac{" + System.Double.format(Math.abs(c), 'G') + "}{" + System.Double.format(Math.abs(b), 'G') + "} ";
                                            }
                                            if (!Bridge.referenceEquals(System.String.concat("=", q4), q8)) {
                                                q4 = System.String.concat(q4, q8);
                                            }
                                            s4 = System.String.concat("$", sx, "\\large = ", q4, q5, "\\normalsize ", System.Double.format(Bridge.Math.round((-c) / b, 2, 6), 'G'), "$");
                                        }
                                        test1.App.s5t = System.String.concat("Your original equation:  <br /> <br />", s8, "  <br /> <br /> Solution: <br /> <br />", s4);
                                    } else {
                                        if (c === 0) {
                                            test1.App.s5t = System.String.concat("Your original equation:  <br /> <br />", s8, "  <br /> <br />  $0=0$  <br /> <br /> Infinitely many solutions");
                                        } else {
                                            test1.App.s5t = System.String.concat("Your original equation:  <br /> <br />", s8, " <br /> <br /> No solutions");
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
                //---------------------
                //change textbox2.text into q73
                //s5t += q73;
                textbox2.value = test1.App.q73;
                p1.innerHTML = test1.App.s5t;
                //-------------------
                //here should be some code that refreshes p1 MathJax
                mathrefresh("par1");
                //-------------------
                // */
            }, $t3);
            test1.App.button3 = button;
            // Create a new Button
            var button1 = ($t4=document.createElement('button'), $t4.innerHTML = "Clear", $t4.onclick = function (ev) {
                // When Button is clicked, 
                // the Bridge Console should open.
                //Console.WriteLine("cleared");
                /* 
                textarea1.Value = "";
                q73 = "";
                TextBox2.Text = "";
                */
                //textarea1.Value = "";
                textbox1.value = "";
                textbox2.value = "";
                test1.App.q73 = "";
                p1.innerHTML = "";
            }, $t4);

            // Add the Button to the page
            //Document.Body.AppendChild(textarea1);
            //Document.Body.AppendChild(textarea2);
            //Document.Body.AppendChild(button);
            //Document.Body.AppendChild(button1);
            button.style.width = "83px";
            button.style.marginLeft = "10px";
            button1.style.width = "83px";
            button1.style.marginLeft = "30px";
            //Document.Body.AppendChild(form1);
            //form1.AppendChild(div1);
            document.body.appendChild(div1);
            div1.appendChild(p2);
            div1.appendChild(textbox1);
            div1.appendChild(textbox2);
            div1.appendChild(br1);
            div1.appendChild(br2);
            div1.appendChild(button);
            div1.appendChild(button1);
            div1.appendChild(p1);
            //br3.InnerHTML = "yes";
            //div1.AppendChild(br3);
        },
        statics: {
            fields: {
                s5: null,
                s31: null,
                q73: null,
                button3: null
            },
            props: {
                s5t: {
                    get: function () {
                        return test1.App.s5;
                    },
                    set: function (value) {
                        test1.App.s5 = value;
                    }
                },
                s31t: {
                    get: function () {
                        return test1.App.s31;
                    },
                    set: function (value) {
                        test1.App.s31 = value;
                    }
                }
            },
            methods: {
                check1: function (st1) {
                    var functionReturnValue = null;
                    switch (st1) {
                        case "1": 
                        case "2": 
                        case "3": 
                        case "4": 
                        case "5": 
                        case "6": 
                        case "7": 
                        case "8": 
                        case "9": 
                        case "0": 
                            functionReturnValue = "d";
                            break;
                        case "a": 
                        case "b": 
                        case "c": 
                        case "d": 
                        case "e": 
                        case "f": 
                        case "g": 
                        case "h": 
                        case "i": 
                        case "j": 
                        case "k": 
                        case "l": 
                        case "m": 
                        case "n": 
                        case "o": 
                        case "p": 
                        case "q": 
                        case "r": 
                        case "s": 
                        case "t": 
                        case "u": 
                        case "v": 
                        case "w": 
                        case "x": 
                        case "y": 
                        case "z": 
                            functionReturnValue = "l";
                            break;
                        case "+": 
                            functionReturnValue = "p";
                            break;
                        case "-": 
                            functionReturnValue = "m";
                            break;
                        default: 
                            functionReturnValue = "o";
                            break;
                    }
                    return functionReturnValue;
                },
                Mid: function (s, a, b) {
                    var temp = s.substr(((a - 1) | 0), b);
                    return temp;
                },
                InputKeyPress: function (e) {
                    // We added the listener to EventType.KeyPress so it should be a KeyboardEvent
                    if (Bridge.is(e, KeyboardEvent) && e.keyCode === 13) {

                        test1.App.Solve();
                    }
                },
                Solve: function () {
                    // Window.Alert("Incorrect value.Please enter a number.");
                    test1.App.button3.click();
                }
            }
        }
    });

    var $box_ = {};

    Bridge.ns("System.Double", $box_);

    Bridge.apply($box_.System.Double, {
        toString: function (obj) {return System.Double.format(obj, 'G');}
    });
});
