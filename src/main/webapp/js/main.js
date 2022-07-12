let isPlaying = false;
var clickJudge = true;
const aud =document.getElementById("aud");
aud.volume = 0.6;
var isMute = false;
var tempVolume = aud.volume;
var lyricIsHidden = true;
var coverAnimation;
var isUser = false;
var passwdIsCorrect = false;
var registrationIsSuccess = false;
var LyricsArray;
var fraction = 0.5;
var lineNumber = 0;
var perLineNumber = 0;
var songList = new Array();
var songNum = 0;

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

let insertAfter = (newElement,targetElement)=>{
     let parent = targetElement.parentNode;
     if(parent.lastChild == targetElement) {
         parent.appendChild(newElement);
     } else {
         parent.insertBefore(newElement,targetElement.nextSibling);
     }
}
//位移
$(document).ready(function() {
    $("#keyBtn").click(function() {
        // 上
        if(clickJudge) {
            if(lyricIsHidden != true) {
                $(".middle").removeClass("middleMR");
            }
            $(".player-wrapper").removeClass("moveUp");
            $(".player-wrapper").addClass("moveDown");
            $(".keyButton").removeClass("keyButtonMU");
            $(".keyButton").addClass("keyButtonMD");
            $(".right").removeClass("rightShow");
            $(".right").addClass("rightHide");
            $(".left").removeClass("leftShow");
            $(".left").addClass("leftHide");
            $(".middle").removeClass("middleMU");
            $(".middle").addClass("middleMD");
            $(".playing-buttons").removeClass("playing-buttonsMD");
            $(".playing-buttons").addClass("playing-buttonsMU");
            $(".playing-buttons").find("svg").addClass("up-svg");
            $(".playing-buttons").find("svg").removeClass("down-svg");
            $(".playing-buttons").find("span").addClass("up-span");
            $(".playing-buttons").find("span").removeClass("down-span");
            $(".playing-buttons").children("div").find("div").removeClass("playingButtons-right");
            $(".playing-buttons").children("div").find("div").addClass("button-display");
            $(".fm-mhz").removeClass("fm-mhz-bottomMD");
            $(".fm-mhz").addClass("fm-mhz-bottomMU");
            $(".boxingtuFamily").removeClass("boxingtu-display");
            $(".boxingtuFamily").addClass("boxingtu-none");
            $(".fm-mhz-span").css({ "font-size": "13px", "line-height": "18px", "height": "18px", "width": "280px" });
            $(".volume-and-time").removeClass("volume-and-timeMD");
            $(".volume-and-time").addClass("volume-and-timeMU");
            $(".sub-buttons-wrapper").css({ "opacity": "0", "display": "none" });
            $(".song-name").removeClass("song-nameMD");
            $(".song-name").addClass("song-nameMU");
            $(".hidden-span").css({ "display": "inline-block" });
            $(".writer-name").css({ "display": "none", "opacity": "0" });
            $(".exploreMD").addClass("exploreMU");
            $(".exploreMD").removeClass("exploreMD");
            clickJudge = false;
        }
        // 下
        else {
            if(lyricIsHidden != true) {
                $(".middle").addClass("middleMR");
            }
            $(".player-wrapper").removeClass("moveDown");
            $(".player-wrapper").addClass("moveUp");
            $(".keyButton").removeClass("keyButtonMD");
            $(".keyButton").addClass("keyButtonMU");
            $(".right").removeClass("rightHide");
            $(".right").addClass("rightShow");
            $(".left").removeClass("leftHide");
            $(".left").addClass("leftShow");
            $(".middle").removeClass("middleMD");
            $(".middle").addClass("middleMU");
            $(".playing-buttons").removeClass("playing-buttonsMU");
            $(".playing-buttons").addClass("playing-buttonsMD");
            $(".playing-buttons").find("svg").addClass("down-svg");
            $(".playing-buttons").find("svg").removeClass("up-svg");
            $(".playing-buttons").find("span").addClass("down-span");
            $(".playing-buttons").find("span").removeClass("up-span");
            $(".playing-buttons").children("div").find("div").addClass("playingButtons-right");
            $(".playing-buttons").children("div").find("div").removeClass("button-display");
            $(".fm-mhz").removeClass("fm-mhz-bottomMU");
            $(".fm-mhz").addClass("fm-mhz-bottomMD");
            $(".boxingtuFamily").removeClass("boxingtu-none");
            $(".boxingtuFamily").addClass("boxingtu-display");
            $(".fm-mhz-span").css({ "font-size": "16px", "line-height": "22px", "height": "22px", "width": "430px" });
            $(".volume-and-time").removeClass("volume-and-timeMU");
            $(".volume-and-time").addClass("volume-and-timeMD");
            $(".sub-buttons-wrapper").css({ "opacity": "1", "display": "block" });
            $(".song-name").removeClass("song-nameMU");
            $(".song-name").addClass("song-nameMD");
            $(".hidden-span").css({ "display": "none" });
            $(".writer-name").css({ "display": "block", "opacity": "1" });
            $(".exploreMU").addClass("exploreMD");
            $(".exploreMU").removeClass("exploreMU");
            clickJudge = true;
        }
    })
})

// 登录
$(document).ready(function() {
    $(".sign-in").click(function() {
        let loginHtml = `
            <div class="overlays">
                <div class="sign-in-block">
                    <svg class="guanbi">
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                    <form name="form-box" class="login-box">
                        <h1>Login</h1>
                        <input id="username" type="text" name="loginUsername" placeholder="Username">
                        <p class="hint" name="hint"></p>
                        <input id="password" type="password" name="password" placeholder="Password">
                        <p class="hint" name="hint"></p>
                        <p id="submit" type="button" name="login-submit">Login</p>
                        <p class="message">Not registered? <a name="turn-register" style="cursor:pointer;">Create an account</a></p>
                    </form>
                </div>
                <div class="white-background"></div>
            </div>`;
        $("body").append(loginHtml);
        checkUsernameIsExists();
        checkPasswdIsCorrects();
        guanbi();
        myTurn();
        initUser();
        clickSubmitBtn();
    })
})

// 注册
$(document).ready(function() {
    $(".register").click(function() {
        let registerHtml = `
            <div class="overlays">
                <div class="register-block">
                    <svg class="guanbi">
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                    <form name="form-box" class="register-box">
                        <h1>Register</h1>
                        <input id="username" type="text" name="registerUsername" placeholder="Username">
                        <p class="hint" name="hint">用户名开头应该为字母</p>
                        <input id="password" type="password" name="password" placeholder="Password">
                        <p class="hint" name="hint">&nbsp;</p>
                        <input id="email" type="email" name="email" placeholder="Email">
                        <p class="hint" name="hint">&nbsp;</p>
                        <p id="submit" type="submit" name="register-submit">Register</p>
                        <p class="message">Already registered? <a name="turn-sign-in" style="cursor:pointer;">Sign In</a></p>
                    </form>
                </div>
                <div class="white-background"></div>
            </div>`;
        $("body").append(registerHtml);
        checkUsername();
        checkPasswd();
        checkEmail();
        guanbi();
        myTurn();
        initUser();
        clickSubmitBtn();
    })
})

// 初始化参数
function initUser() {
    isUser = false;
    passwdIsCorrect = false;
    registrationIsSuccess = false;
}

// 转换登录和注册界面
let myTurn = () => {
    let flag = document.getElementsByName("turn-sign-in")[0];
    if(flag) {
        flag.addEventListener("click", () => {
            $(".overlays").remove();
            let loginHtml = `
                    <div class="overlays">
                        <div class="sign-in-block">
                            <svg class="guanbi">
                                <use xlink:href="#icon-guanbi"></use>
                            </svg>
                            <form name="form-box" class="login-box">
                                <h1>Login</h1>
                                <input id="username" type="text" name="loginUsername" placeholder="Username">
                                <p class="hint" name="hint"></p>
                                <input id="password" type="password" name="password" placeholder="Password">
                                <p class="hint" name="hint"></p>
                                <p id="submit" type="button" name="login-submit">Login</p>
                                <p class="message">Not registered? <a name="turn-register" style="cursor:pointer;">Create an account</a></p>
                            </form>
                        </div>
                        <div class="white-background"></div>
                    </div>`;
            $("body").append(loginHtml);
            checkUsernameIsExists();
            checkPasswdIsCorrects();
            guanbi();
            myTurn();
            initUser();
            clickSubmitBtn();
        })
    }
    flag = document.getElementsByName("turn-register")[0];
    if(flag) {
        flag.addEventListener("click", () => {
            $(".overlays").remove();
            let registerHtml = `
            <div class="overlays">
                <div class="register-block">
                    <svg class="guanbi">
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                    <form name="form-box" class="register-box">
                        <h1>Register</h1>
                        <input id="username" type="text" name="registerUsername" placeholder="Username">
                        <p class="hint" name="hint">用户名开头应该为字母</p>
                        <input id="password" type="password" name="password" placeholder="Password">
                        <p class="hint" name="hint">&nbsp;</p>
                        <input id="email" type="email" name="email" placeholder="Email">
                        <p class="hint" name="hint">&nbsp;</p>
                        <p id="submit" type="submit" name="register-submit">Register</p>
                        <p class="message">Already registered? <a name="turn-sign-in" style="cursor:pointer;">Sign In</a></p>
                    </form>
                </div>
                <div class="white-background"></div>
            </div>`;
            $("body").append(registerHtml);
            checkUsername();
            checkPasswd();
            checkEmail();
            guanbi();
            myTurn();
            initUser();
            clickSubmitBtn();
        })
    }
}

// 关闭注册/登录界面
let guanbi = () => {
    let guanbi = document.getElementsByClassName("guanbi")[0];
    if (guanbi) {
        guanbi.addEventListener("click", () => {
            $(".overlays").remove();
        });
    }
    else {
        console.log("Error in guanbi");
    }
};

// 检查用户名是否合乎规格
let checkUsername = () => {
    let username = document.getElementsByName("registerUsername")[0];
    let password = document.getElementsByName("password")[0];
    let email = document.getElementsByName("email")[0];
    let hint1 = document.getElementsByName("hint")[0];
    let hint2 = document.getElementsByName("hint")[1];
    let hint3 = document.getElementsByName("hint")[2];
    if (username) {
        username.addEventListener("blur", () => {
            let value1 = username.value.trim();
            let value2 = password.value.trim();
            let value3 = email.value.trim();
            let re1 = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/.test(value1);
            let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
            let re3 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/.test(value3);
            if (re1) {
                isUser = true;
                hint1.innerHTML = '&nbsp;';
            } else {
                isUser = false;
                hint1.style.color='red';
                hint1.innerText='输入错误,请输入6到15位的以字母开头的,由数字和字母组成的用户名';
            }
            if (re2 || value2 == '') {
                if(value2 != '')
                    passwdIsCorrect = true;
                hint2.innerHTML = '&nbsp;';
            } else {
                passwdIsCorrect = false;
                hint2.style.color='red';
                hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
            if (re3 || value3 == '') {
                if(value3 != '')
                    registrationIsSuccess = true;
                hint3.innerHTML = '&nbsp;';
            } else {
                registrationIsSuccess = false;
                hint3.style.color='red';
                hint3.innerText='输入错误,请输入格式正确的邮箱地址';
            }
        })
    } else {
        console.log("Error in checkUsername");
    }
}
// 检查密码是否合乎规格
let checkPasswd = () => {
    let username = document.getElementsByName("registerUsername")[0];
    let password = document.getElementsByName("password")[0];
    let email = document.getElementsByName("email")[0];
    let hint1 = document.getElementsByName("hint")[0];
    let hint2 = document.getElementsByName("hint")[1];
    let hint3 = document.getElementsByName("hint")[2];
    if (password) {
        password.addEventListener("blur", () => {
            let value1 = username.value.trim();
            let value2 = password.value.trim();
            let value3 = email.value.trim();
            let re1 = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/.test(value1);
            let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
            let re3 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/.test(value3);
            if (re1 || value1 == '') {
                if(value1 != '')
                    isUser = true;
                hint1.innerHTML = '&nbsp;';
            } else {
                isUser = false;
                hint1.style.color='red';
                hint1.innerText='输入错误,请输入6到15位的以字母开头的,由数字和字母组成的用户名';
            }
            if (re2) {
                passwdIsCorrect = true;
                hint2.innerHTML = '&nbsp;';
            } else {
                passwdIsCorrect = false;
                hint2.style.color='red';
                hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
            if (re3 || value3 == '') {
                if(value3 != '')
                    registrationIsSuccess = true;
                hint3.innerHTML = '&nbsp;';
            } else {
                registrationIsSuccess = false;
                hint3.style.color='red';
                hint3.innerText='输入错误,请输入格式正确的邮箱地址';
            }
        })
    } else {
        console.log("Error in checkPasswd");
    }
}
// 检查邮箱地址是否合乎规格
let checkEmail = () => {
    let username = document.getElementsByName("registerUsername")[0];
    let password = document.getElementsByName("password")[0];
    let email = document.getElementsByName("email")[0];
    let hint1 = document.getElementsByName("hint")[0];
    let hint2 = document.getElementsByName("hint")[1];
    let hint3 = document.getElementsByName("hint")[2];
    if (email) {
        email.addEventListener("blur", () => {
            let value1 = username.value.trim();
            let value2 = password.value.trim();
            let value3 = email.value.trim();
            let re1 = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/.test(value1);
            let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
            let re3 = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.com$/.test(value3);
            if (re1 || value1 == '') {
                if(value1 != '')
                    isUser = true;
                hint1.innerHTML = '&nbsp;';
            } else {
                isUser = false;
                hint1.style.color='red';
                hint1.innerText='输入错误,请输入6到15位的以字母开头的,由数字和字母组成的用户名';
            }
            if (re2 || value2 == '') {
                if(value2 != '')
                    passwdIsCorrect = true;
                hint2.innerHTML = '&nbsp;';
            } else {
                passwdIsCorrect = false;
                hint2.style.color='red';
                hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
            if (re3) {
                registrationIsSuccess = true;
                hint3.innerHTML = '&nbsp;';
            } else {
                registrationIsSuccess = false;
                hint3.style.color='red';
                hint3.innerText='输入错误,请输入格式正确的邮箱地址';
            }
        })
    } else {
        console.log("Error in checkEmail");
    }
}

// 检查该用户名
let checkUsernameIsExists = () => {
    let username = document.getElementsByName("loginUsername")[0];
    let password = document.getElementsByName("password")[0];
    let hint1 = document.getElementsByName("hint")[0];
    let hint2 = document.getElementsByName("hint")[1];
    if (username) {
        username.addEventListener("blur", () => {
            let value1 = username.value.trim();
            let value2 = password.value.trim();
            let re1 = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/.test(value1);
            let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
            if (re1) {
                isUser = true;
                hint1.innerHTML = '&nbsp;';
            } else {
                isUser = false;
                hint1.style.color='red';
                hint1.innerText='输入错误,请输入6到15位的以字母开头的,由数字和字母组成的用户名';
            }
            if (re2 || value2 == '') {
                if(value2 != '')
                    passwdIsCorrect = true;
                hint2.innerHTML = '&nbsp;';
            } else {
                passwdIsCorrect = false;
                hint2.style.color='red';
                hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
        })
    } else {
        console.log("Error in checkUsernameIsExists");
    }
}
// 检查密码
let checkPasswdIsCorrects = () => {
    let username = document.getElementsByName("loginUsername")[0];
    let password = document.getElementsByName("password")[0];
    let hint1 = document.getElementsByName("hint")[0];
    let hint2 = document.getElementsByName("hint")[1];
    if (password) {
        password.addEventListener("blur", () => {
            let value1 = username.value.trim();
            let value2 = password.value.trim();
            let re1 = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/.test(value1);
            let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
            if (re1 || value1 == '') {
                if(value1 != '')
                    isUser = true;
                hint1.innerHTML = '&nbsp;';
            } else {
                isUser = false;
                hint1.style.color='red';
                hint1.innerText='输入错误,请输入6到15位的以字母开头的,由数字和字母组成的用户名';
            }
            if (re2) {
                passwdIsCorrect = true;
                hint2.innerHTML = '&nbsp;';
            } else {
                passwdIsCorrect = false;
                hint2.style.color='red';
                hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
        })
    } else {
        console.log("Error in checkPasswdIsCorrects");
    }
}

// 若登录成功 用户模块user-block转换为用户菜单
let clickSubmitBtn = () => {
    let submitBtn = document.getElementById("submit");
    if(submitBtn){
        submitBtn.addEventListener("click", function(e) {
            // 用户登录成功
            if(submitBtn.getAttribute("name") == "login-submit") {
                if(isUser == true && passwdIsCorrect == true) {
                    let userNameString = document.getElementsByName("loginUsername")[0].value;
                    let passwordString = document.getElementsByName("password")[0].value;
                    $.ajax({
                        url: 'http://localhost:8080/MusicFM/selectLoginUserServlet',
                        type: 'post',
                        async: true,
                        data: "userName="+userNameString+"&pwd="+passwordString,
                        dataType: 'json',
                        success: (data) => {
                            if(data[0] == "wrong") {
                                alert("用户名不存在或密码错误，请重新输入。");
                                initUser();
                            } else {
                                $(".overlays").remove();
                                let userMenu = document.getElementById("user-menu");
                                userMenu.setAttribute("userId",data[1].userId);
                                document.getElementById("enter-box").style.display="none";
                                userMenu.style.display="block";
                                // 或设置为nickName 初始化为userName?
                                document.getElementById("user-menu-nickName").innerText = data[1].nickName;
                                if(data[1].description == undefined)
                                    document.getElementById("main-self-introduction").innerText = "该用户很懒，什么都没有写。";
                                else
                                    document.getElementById("main-self-introduction").innerText = data[1].description;
                                mineHandler();
                                collectOrNoT();
                            }
                        },
                        error: () => {
                            console.log("Error in selectLoginUserServlet.");
                        }
                    });
                } else {
                    alert("输入错误，请重新输入。");
                    initUser();
                }
            }

            // 用户注册成功
            if(submitBtn.getAttribute("name") == "register-submit") {
                let registerUsernameString = document.getElementsByName("registerUsername")[0].value;
                let passwordString = document.getElementsByName("password")[0].value;
                if(isUser == true && passwdIsCorrect == true && registrationIsSuccess == true) {
                    $.ajax({
                        url: 'http://localhost:8080/MusicFM/addRegestUserServlet',
                        type: 'post',
                        async: true,
                        data: "userName="+registerUsernameString+"&pwd="+passwordString+"&nickName="+registerUsernameString,
                        dataType: 'json',
                        success: (data) => {
                            if(data[0] == "wrong") {
                                alert("用户名已存在，请重新注册。");
                            } else {
                                alert("注册成功，请登录。");
                                $(".overlays").remove();
                            }
                        },
                        error: () => {
                            console.log("Error in addRegestUserServlet.");
                            alert("注册失败，请重试。");
                        }
                    });
                } else {
                    alert("输入错误，请重新输入。");
                    initUser();
                }
            }
        })
    } else {
        console.log("Error in clickSubmitBtn");
    }
}

let LoginHintClickSubmitBtn = () => {
    let submitBtn = document.getElementById("submit");
    if(submitBtn){
        submitBtn.addEventListener("click", function(e) {
            // 用户登录成功
            if(submitBtn.getAttribute("name") == "login-submit") {
                if(isUser == true && passwdIsCorrect == true) {
                    let userNameString = document.getElementsByName("loginUsername")[0].value;
                    let passwordString = document.getElementsByName("password")[0].value;
                    $.ajax({
                        url: 'http://localhost:8080/MusicFM/selectLoginUserServlet',
                        type: 'post',
                        async: true,
                        data: "userName="+userNameString+"&pwd="+passwordString,
                        dataType: 'json',
                        success: (data) => {
                            if(data[0] == "wrong") {
                                alert("用户名不存在或密码错误，请重新输入。");
                                initUser();
                            } else {
                                $(".overlays").remove();
                                let userMenu = document.getElementById("user-menu");
                                userMenu.setAttribute("userId",data[1].userId);
                                document.getElementById("enter-box").style.display="none";
                                userMenu.style.display="block";
                                document.getElementById("user-menu-nickName").innerText = data[1].nickName;
                                if(data[1].description == undefined)
                                    document.getElementById("main-self-introduction").innerText = "该用户很懒，什么都没有写。";
                                else
                                    document.getElementById("main-self-introduction").innerText = data[1].description;
                                mineHandler();
                                collectOrNoT();
                            }
                        },
                        error: () => {
                            console.log("Error in selectLoginUserServlet.");
                        }
                    });
                } else {
                    alert("输入错误，请重新输入。");
                    initUser();
                }
            }

            // 用户注册成功
            if(submitBtn.getAttribute("name") == "register-submit") {
                let registerUsernameString = document.getElementsByName("registerUsername")[0].value;
                let passwordString = document.getElementsByName("password")[0].value;
                if(isUser == true && passwdIsCorrect == true && registrationIsSuccess == true) {
                    $.ajax({
                        url: 'http://localhost:8080/MusicFM/addRegestUserServlet',
                        type: 'post',
                        async: true,
                        data: "userName="+registerUsernameString+"&pwd="+passwordString+"&nickName="+registerUsernameString,
                        dataType: 'json',
                        success: (data) => {
                            if(data[0] == "wrong") {
                                initUser();
                            } else {
                                $(".overlays").remove();
                            }
                        },
                        error: () => {
                            console.log("Error in addRegestUserServlet.");
                            alert("用户名已存在，请重新注册。");
                        }
                    });
                } else {
                    alert("输入错误，请重新输入。");
                    initUser();
                }
            }
        })
    } else {
        console.log("Error in LoginHintClickSubmitBtn");
    }
}

// 用户退出登录log-out
$(document).ready(function() {
    $("#log-out").click(function() {
        document.getElementById("enter-box").style.display="block";
        document.getElementById("user-menu").style.display="none";
        mineHandler();
        collectOrNoT();
    })
})
// 打开用户中心user-center
$(document).ready(function() {
    $("#user-center").click(function() {
        let userCenterHtml = `
            <div id="user-center-box">
                <svg id='user-center-close'>
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
                <p style="margin: 0 auto; box-shadow: 0 0 3px 0 rgba(0, 23, 77, .3), 0 1px 1px 0 rgba(77, 77, 77, .3); width: 233px; height: 42px; line-height: 42px; background-color: rgba(233, 233, 233, .3);">用户中心</p>
                <text class="user-center" title="用户名" id="user-name"></text>
                <input type="text" class="user-center" title="用户名" id="user-name-input" style="display: none;">
                <p class="user-center" title="个人介绍" id="self-introduction">该用户很懒，什么都没有写。</p>
                <textarea class="user-center" title="个人介绍" id="self-introduction-textarea" style="display: none;">该用户很懒，什么都没有写。</textarea>
                <p class="user-center2" title="我的红心" id="user-likes">我的红心
                <p class="user-center2" title="我的收藏" id="user-collections">我的收藏
                <p class="user-center2" title="我的歌单" id="user-songLists">我的歌单
                <p class="user-center2" title="我喜欢的艺术家" id="user-artists">我喜欢的艺术家
                <p class="user-center2" title="修改密码" id="user-center-change-password">修改密码
                <p class="user-center2" title="注销账号" id="user-remove">注销账号
                <p class="user-center2" title="退出登录" id="user-log-out">退出登录
            </div>
            <div id="user-center2-box" style="display: none; width: 600px; margin: 70px auto; padding: 42px; background-color: rgba(233, 233, 233, 0.3);"></div>
            <script src="src/download/font/iconfont.js"></script>
            <script src="src/download/fontul/iconfont.js"></script>`;

        let userIdNow = document.getElementById("user-menu").getAttribute("userId");
        let userNickNameNow = document.getElementById("user-menu-nickName").innerText;
        let userDescriptionNow = document.getElementById("main-self-introduction").innerText;
        $(".app-header")[0].style.display = "none";
        if(clickJudge) {
            $(".exploreMD")[0].style.display = "none";
        } else {
            $(".exploreMU")[0].style.display = "none";
        }
        $(".content").empty();
        $("body").append(userCenterHtml);
        document.getElementById("user-center-box").setAttribute("userId",userIdNow);
        document.getElementById("user-center-box").setAttribute("user-menu-userNickNameNow",userNickNameNow);
        document.getElementById("user-center-box").setAttribute("main-self-introduction",userDescriptionNow);
        userIdNow = document.getElementById("user-center-box").getAttribute("userId");
        userNickNameNow = document.getElementById("user-center-box").getAttribute("user-menu-userNickNameNow");
        userDescriptionNow = document.getElementById("user-center-box").getAttribute("main-self-introduction");
        let userCenterClose = document.getElementById("user-center-close");
        let userName = document.getElementById("user-name");
        let userNameInput = document.getElementById("user-name-input");
        let selfIntroduction = document.getElementById("self-introduction");
        let selfIntroductionTextarea = document.getElementById("self-introduction-textarea");
        userName.innerText = userNickNameNow;
        userNameInput.value = userNickNameNow;
        selfIntroduction.innerText = userDescriptionNow;
        selfIntroductionTextarea.value = userDescriptionNow;
        let oldIntroduction = selfIntroductionTextarea.value;
        let userCenterBox = document.getElementById("user-center-box");
        let userCenter2Box = document.getElementById("user-center2-box");

        userCenterClose.addEventListener("click", function () {
            console.log("#user-center-close");
            $("#user-center-box").remove();
            $("#user-center2-box").remove();
            $(".app-header")[0].style.display = "block";
            if(clickJudge) {
                $(".exploreMD")[0].style.display = "block";
            } else {
                $(".exploreMU")[0].style.display = "block";
            }
            mineHandler();
        })
        userName.addEventListener("click", function() {
            userName.style.display = 'none';
            userNameInput.style.display = 'block';
            userNameInput.focus();
            userNameInput.style.background = 'rgba(123, 233, 123, 0.1)';
        })
        userNameInput.addEventListener("blur", function() {
            let newNickName = userNameInput.value;
            // 此处提交修改到数据库 newUserName
            if(newNickName != "") {
                if(newNickName != userName.innerText) {
                    $.ajax({
                        url: 'http://localhost:8080/MusicFM/modifyNickNameServlet',
                        type: 'post',
                        async: true,
                        data: "userId="+userIdNow+"&nickName="+newNickName,
                        dataType: 'json',
                    });
                    alert("修改昵称成功");
                }
                userName.style.display = 'block';
                userNameInput.style.display = 'none';
                userName.innerText = newNickName;
            } else {
                let a = alert("昵称不能为空，请重试。");
                userName.style.display = 'block';
                userNameInput.style.display = 'none';
                userNameInput.value = userName.innerText;
            }
        })
        selfIntroduction.addEventListener("click", function() {
            selfIntroduction.style.display = 'none';
            selfIntroductionTextarea.style.display = 'block';
            selfIntroductionTextarea.focus();
            selfIntroductionTextarea.style.background = 'rgba(123, 233, 123, 0.1)';
            oldIntroduction = selfIntroductionTextarea.value;
        })
        selfIntroductionTextarea.addEventListener("blur", function() {
            let newIntroduction = selfIntroductionTextarea.value;
            // 此处提交修改到数据库 newIntroduction
            if(newIntroduction != oldIntroduction) {
                $.ajax({
                    url: 'http://localhost:8080/MusicFM/modifyDescriptionServlet',
                    type: 'post',
                    async: true,
                    data: "userId="+userIdNow+"&description="+newIntroduction,
                    dataType: 'json',
                });
                alert("修改自我介绍成功");
            }
            selfIntroduction.style.display = 'block';
            selfIntroductionTextarea.style.display = 'none';
            selfIntroduction.innerText = newIntroduction;
        })
        $('#user-likes').click(function() {
            let iconXin = `
                <svg style="width: 12px; height: 12px; vertical-align: middle;" class="iconXin">
                    <use xlink:href="#icon-xin" style="fill: rgba(233, 7, 7, 0.7)"></use>
                </svg>`;
            let mineHTML = `
                <div class="page-heart-songs container" style="width: 600px;">
                    <svg id='user-likes-close'>
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                    <div class="header-cover">
                        <button class="button button-rounded">
                            <svg class="bofangIcon">
                                <use xlink:href="#icon-bofang"></use>
                            </svg>
                        </button>
                        <p id='mine-like-number' style='display: inline'>0</p>首红心歌曲
                    </div>
                    <p class="mine-introduce">我的红心歌曲
                    <div class="container personalSongL" style="width: 100%; border-collapse: collapse;"></div>
                    <div id="songCollectionInnerBox"></div>
                </div>`;
            userCenterBox.style.display = "none";
            userCenter2Box.style.display = "block";
            userCenter2Box.innerHTML = mineHTML;
            $.ajax({
                url: "http://localhost:8080/MusicFM/selectMyLoveSongServlet",
                type: 'get',
                async: true,
                data: "userId="+userIdNow,
                dataType: 'json',
                // 我的红心曲目
                success: (data) => {
                    let personalSongL = userCenter2Box.getElementsByClassName("personalSongL")[0];
                    let unorderList = document.createElement("ul");
                    unorderList.className = "songlist-song";
                    let j = 1;
                    let myFavoriteId;
                    if(data.songList) {
                        myFavoriteId = data.favoriteId;
                        document.getElementById("mine-like-number").innerHTML = data.songList.length;
                        for(let i=0; i<data.songList.length; i++) {
                            let li = document.createElement("li");
                            let top = document.createElement("div");
                            top.className = "top";
                            let animateSpan = document.createElement("span");

                            animateSpanWord = document.createTextNode(j++);
                            animateSpan.appendChild(animateSpanWord);
                            animateSpan.className ="index";

                            let cover = document.createElement("div");
                            cover.className = "fengmian";
                            cover.style.height = "52px";
                            cover.style.width = "52px";
                            cover.style.backgroundImage = "url('src/2.jpg')";
                            cover.style.backgroundSize = "cover";
                            cover.style.display = "inline-block";
                            cover.style.marginTop = "1.5px";

                            let title = document.createElement("div");
                            title.className = "titles";
                            let h3 = document.createElement("h3");
                            h3.appendChild(document.createTextNode(data.songList[i].songName));

                            let p = document.createElement("p");
                            let artistSpan = document.createElement("span");
                            let artistLink = document.createElement("a");
                            artistLink.appendChild(document.createTextNode(data.songList[i].singer.singerName+"  ·  "));
                            artistSpan.appendChild(artistLink);

                            p.appendChild(artistSpan);
                            title.appendChild(h3);
                            title.appendChild(p);

                            let actions = document.createElement("div");
                            actions.className = "actions";

                            let a1 = document.createElement("a");
                            a1.style.marginRight = "10px";
                            a1.innerHTML = iconXin;
                            a1.setAttribute("songId",data.songList[i].songId);

                            let a2 = document.createElement("a");
                            a2.appendChild(document.createTextNode("+"));
                            a2.className = "songCollection";
                            a2.setAttribute("songId",data.songList[i].songId);

                            actions.appendChild(a1);
                            actions.appendChild(a2);

                            top.appendChild(animateSpan);
                            top.appendChild(cover);
                            top.appendChild(title);
                            top.appendChild(actions);
                            li.appendChild(top);
                            unorderList.appendChild(li);
                            personalSongL.appendChild(unorderList);
                        }
                    } else {
                        myFavoriteId = data;
                        console.log("LoveSongList is empty."+myFavoriteId);
                        document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                        let emptySongListHint = document.createElement("p");
                        emptySongListHint.id = "emptySongListHint";
                        emptySongListHint.innerText = "你还未设置红心歌曲，快去收藏几首吧~";
                        personalSongL.appendChild(emptySongListHint);
                    }
                    $(".iconXin").click(function(e) {
                        if(e.currentTarget.firstElementChild.style.fill == "rgba(233, 7, 7, 0.7)") {
                            // 取消收藏单曲并提交数据至数据库
                            $.ajax({
                                url: 'http://localhost:8080/MusicFM/deleteSongFromFavoriteServlet',
                                type: 'post',
                                async: true,
                                data: "songId="+e.currentTarget.parentNode.getAttribute("songId")+"&favoriteId="+myFavoriteId,
                                dataType: 'json',
                            })
                            e.currentTarget.firstElementChild.style.fill = "black";
                        } else {
                            // 收藏单曲并提交数据至数据库
                            $.ajax({
                                url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                type: 'post',
                                async: true,
                                data: "songId="+e.currentTarget.parentNode.getAttribute("songId")+"&favoriteId="+myFavoriteId,
                                dataType: 'json',
                            })
                            e.currentTarget.firstElementChild.style.fill = "rgba(233, 7, 7, 0.7)";
                        }
                    })
                    $(".songCollection").click(function(e) {
                        let songCollectionSongId = e.currentTarget.getAttribute("songId");
                        let mineHTML = `
                            <div class="page-heart-songs container" style="width: 233px;">
                                <div class="container personalSongL" style="width: 100%; border-collapse: collapse;">
                                    <ul class="songCollection-songlist-song" style="padding-left: 42px;padding-top: 42px;padding-bottom: 7px;"></ul>
                                </div>
                                <svg id='user-likes-songCollection-close'>
                                    <use xlink:href="#icon-guanbi"></use>
                                </svg>
                            </div>`;
                        let createNewFavourite = `
                            <li id="link-new-songlist" style="margin: 0">制作新歌单</li>
                            <p class="mine-introduce" style="margin-left: -23px;margin-bottom: 0px;margin-top: 23px;">我创建的歌单`;

                        $("#songCollectionInnerBox").html(mineHTML);
                        $.ajax({
                            url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                            type: 'get',
                            async: true,
                            data: "userId="+userIdNow,
                            dataType: 'json',
                            success: (data) => {
                                let songCollectionBox = document.getElementsByClassName("songCollection-songlist-song")[0];
                                songCollectionBox.innerHTML = createNewFavourite;
                                let j = 1;
                                if(data.length == 0) {
                                    console.log("MyCreateSongListList is empty.");
                                    songCollectionBox.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                    let emptyMyCreateSongListListHint = document.createElement("p");
                                    emptyMyCreateSongListListHint.className = "emptyHint";
                                    emptyMyCreateSongListListHint.innerText = "你还未创建歌单，快去创建几个吧~";
                                    emptyMyCreateSongListListHint.style.width = "137px";
                                    songCollectionBox.parentNode.appendChild(emptyMyCreateSongListListHint);
                                } else {
                                    for(let i=0; i<data.length; i++) {
                                        let myFavoriteId = data[i].favoriteId;
                                        let li = document.createElement("li");
                                        let top = document.createElement("div");
                                        top.className = "top";
                                        let topId = "top"+j;
                                        top.id = topId;
                                        top.setAttribute("favoriteId",myFavoriteId);
                                        let animateSpan = document.createElement("span");
                                        animateSpan.className = "index";
                                        animateSpan.innerHTML = j++;

                                        let title = document.createElement("div");
                                        title.className = "titles";
                                        let h3 = document.createElement("h3");
                                        h3.appendChild(document.createTextNode(data[i].favoriteName));

                                        let p = document.createElement("p");
                                        p.className = "isCollections";
                                        let messageSpan = document.createElement("span");
                                        messageSpan.className = "messageSpan";
                                        let isCollectionsSpan = document.createElement("span");
                                        isCollectionsSpan.className = "isCollectionsSpan";
                                        isCollectionsSpan.setAttribute("favoriteId",myFavoriteId);

                                        p.appendChild(messageSpan);
                                        p.appendChild(isCollectionsSpan);
                                        title.appendChild(h3);
                                        title.appendChild(p);

                                        top.appendChild(animateSpan);
                                        top.appendChild(title);
                                        li.appendChild(top);
                                        songCollectionBox.appendChild(li);
                                        $("#"+topId).click(function(e) {
                                            let updateSongNumber = true;
                                            $.ajax({
                                                url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                                type: 'post',
                                                async: false,
                                                data: "songId="+songCollectionSongId+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                dataType: 'json',
                                                error: (data) => {
                                                    if(data.responseText == "wrong") {
                                                        updateSongNumber = false;
                                                    } else {
                                                        updateSongNumber = true;
                                                    }
                                                }
                                            })
                                            if(updateSongNumber) {
                                                let songNumberSpan = e.currentTarget.getElementsByClassName("messageSpan")[0];
                                                $.ajax({
                                                    url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                                    type: 'get',
                                                    async: true,
                                                    data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                    dataType: 'json',
                                                    success: (data) => {
                                                        let newSongNumber = data.songList.length;
                                                        songNumberSpan.innerText = "歌曲数："+newSongNumber;
                                                    },
                                                    error: () => {
                                                        songNumberSpan.innerText = "歌曲数：1";
                                                    }
                                                });
                                            }
                                        })
                                    }
                                    for(let i=0; i<data.length; i++) {
                                        let songNumberSpan = songCollectionBox.getElementsByClassName("messageSpan")[i];
                                        let favoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[i];
                                        $.ajax({
                                            url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                            type: 'get',
                                            async: true,
                                            data: "favoriteId="+favoriteIdSpan.getAttribute("favoriteId"),
                                            dataType: 'json',
                                            success: (data) => {
                                                songNumberSpan.innerText = "歌曲数："+data.songList.length;
                                            },
                                            error: () => {
                                                songNumberSpan.innerText = "歌曲数：0";
                                            }
                                        });
                                    }
                                }

                                $("#link-new-songlist").click(function(e) {
                                    let createNewSongListHtml = `
                                        <div class="overlays">
                                            <div class="createNewSonglist-block">
                                                <svg class="createNewSonglist-block-close">
                                                    <use xlink:href="#icon-guanbi"></use>
                                                </svg>
                                                <form name="form-box" class="login-box">
                                                    <h1 style="text-align: center;">创建歌单</h1>
                                                    <input id="favoriteName" type="text" name="favoriteName" placeholder="歌单名">
                                                    <p class="hint" name="hint"></p>
                                                    <p id="create" type="button" name="create-submit">Create</p>
                                                </form>
                                            </div>
                                            <div class="white-background"></div>
                                        </div>`;
                                    $("body").append(createNewSongListHtml);
                                    $(".createNewSonglist-block-close").click(function() {
                                        $(".overlays").remove();
                                    })
                                    $("#create").click(function() {
                                        let newSonglistName = document.getElementById("favoriteName").value;
                                        let hint = document.getElementsByName("hint")[0];
                                        if(newSonglistName != "") {
                                            //创建歌单后刷新页面
                                            $.ajax({
                                                url: "http://localhost:8080/MusicFM/addCreateFavoriteServlet",
                                                type: 'post',
                                                async: false,
                                                data: "userId="+userIdNow+"&favoriteName="+newSonglistName,
                                                dataType: 'json',
                                                error: (data) => {
                                                    if(data.responseText == "success") {
                                                        $(".overlays").remove();
                                                        if(document.getElementsByClassName("emptyHint")[0]) {
                                                            songCollectionBox.getElementsByClassName("mine-introduce")[0].style.display = "block";
                                                            document.getElementsByClassName("emptyHint")[0].remove();
                                                        }
                                                        let li = document.createElement("li");
                                                        let top = document.createElement("div");
                                                        top.className = "top";
                                                        let topId = "top"+j;
                                                        top.id = topId;
                                                        let animateSpan = document.createElement("span");
                                                        animateSpan.className = "index";
                                                        animateSpan.innerHTML = j++;

                                                        let title = document.createElement("div");
                                                        title.className = "titles";
                                                        let h3 = document.createElement("h3");
                                                        h3.appendChild(document.createTextNode(newSonglistName));

                                                        let p = document.createElement("p");
                                                        p.className = "isCollections";
                                                        let messageSpan = document.createElement("span");
                                                        let songNumber = 0;
                                                        messageSpan.appendChild(document.createTextNode("歌曲数：" + songNumber));
                                                        messageSpan.className = "messageSpan";
                                                        let isCollectionsSpan = document.createElement("span");
                                                        isCollectionsSpan.className = "isCollectionsSpan";

                                                        p.appendChild(messageSpan);
                                                        p.appendChild(isCollectionsSpan);
                                                        title.appendChild(h3);
                                                        title.appendChild(p);

                                                        top.appendChild(animateSpan);
                                                        top.appendChild(title);
                                                        li.appendChild(top);
                                                        songCollectionBox.appendChild(li);
                                                        $("#"+topId).click(function(e) {
                                                            let updateSongNumber = true;
                                                            $.ajax({
                                                                url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                                                                type: 'post',
                                                                async: false,
                                                                data: "songId="+songCollectionSongId+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                                dataType: 'json',
                                                                error: (data) => {
                                                                    if(data.responseText == "wrong") {
                                                                        updateSongNumber = false;
                                                                    } else {
                                                                        updateSongNumber = true;
                                                                    }
                                                                }
                                                            })
                                                            if(updateSongNumber) {
                                                                let songNumberSpan = e.currentTarget.getElementsByClassName("messageSpan")[0];
                                                                $.ajax({
                                                                    url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                                                    type: 'get',
                                                                    async: true,
                                                                    data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                                    dataType: 'json',
                                                                    success: (data) => {
                                                                        let newSongNumber = data.songList.length;
                                                                        songNumberSpan.innerText = "歌曲数："+newSongNumber;
                                                                    },
                                                                    error: () => {
                                                                        songNumberSpan.innerText = "歌曲数：1";
                                                                    }
                                                                });
                                                            }
                                                        })
                                                    } else {
                                                        console.log("Error in addCreateFavoriteServlet.");
                                                        alert("创建失败，请重试。");
                                                    }
                                                }
                                            });
                                            $.ajax({
                                                url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                                                type: 'get',
                                                async: true,
                                                data: "userId="+userIdNow,
                                                dataType: 'json',
                                                success: (data) => {
                                                    let newSonglistNumber = data.length-1;
                                                    let newSonglistTop = songCollectionBox.getElementsByClassName("top")[newSonglistNumber];
                                                    let newFavoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[newSonglistNumber];
                                                    let newFavoriteId = data[newSonglistNumber].favoriteId;
                                                    newSonglistTop.setAttribute("favoriteId",newFavoriteId);
                                                    newFavoriteIdSpan.setAttribute("favoriteId",newFavoriteId);
                                                },
                                                error: () => {
                                                    console.log("Error in get newFavoriteId");
                                                }
                                            })
                                        } else {
                                            hint.style.color='red';
                                            hint.innerText='歌单名不能为空！';
                                        }
                                    })
                                })
                                $("#user-likes-songCollection-close").click(function() {
                                    $("#songCollectionInnerBox").empty();
                                })
                            },
                            error: () => {
                                console.log("Error in selectMyCreateFavoriteServlet");
                            }
                        })
                    })
                    $("#user-likes-close").click(function() {
                        userCenter2Box.innerHTML = "";
                        userCenter2Box.style.display = "none";
                        userCenterBox.style.display = "block";
                    })
                },
                error: () => {
                    console.log("Error in selectMyLoveSongServlet");
                }
            })
        })
        $('#user-collections').click(function() {
            let mineHTML = `
                <div class="page-heart-songs container" style="width: 600px;">
                    <svg id='user-likes-close'>
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                    <p class="mine-introduce">我收藏的歌单
                    <div class="container personalSongL" style="width: 100%; border-collapse: collapse;"></div>
                </div>`;

            userCenterBox.style.display = "none";
            userCenter2Box.style.display = "block";
            userCenter2Box.innerHTML = mineHTML;
            $.ajax({
                url: "http://localhost:8080/MusicFM/selectMyLoveFavoriteServlet",
                type: 'get',
                async: true,
                data: "userId="+userIdNow,
                dataType: 'json',
                // 我收藏的歌单
                success: (data) => {
                    let personalSongL = document.getElementsByClassName("personalSongL")[0];
                    let unorderList = document.createElement("ul");
                    unorderList.className = "songlist-song";
                    let j = 1;
                    if(data.length == 0) {
                        console.log("LoveSongListList is empty.");
                        document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                        let emptySongListListHint = document.createElement("p");
                        emptySongListListHint.className = "emptyHint";
                        emptySongListListHint.innerText = "你还未设置收藏歌单，快去收藏几个吧~";
                        personalSongL.appendChild(emptySongListListHint);
                    } else {
                        for(let i=0; i<data.length; i++) {
                            let li = document.createElement("li");
                            let top = document.createElement("div");
                            top.className = "top";
                            top.setAttribute("favoriteId",data[i].favoriteId);
                            let animateSpan = document.createElement("span");

                            animateSpanWord = document.createTextNode(j++);
                            animateSpan.appendChild(animateSpanWord);
                            animateSpan.className ="index";

                            let cover = document.createElement("div");
                            cover.className = "fengmian";
                            cover.style.height = "52px";
                            cover.style.width = "52px";
                            cover.style.backgroundImage = "url('src/1.jpg')";
                            cover.style.backgroundSize = "cover";
                            cover.style.display = "inline-block";
                            cover.style.marginTop = "1.5px";

                            let title = document.createElement("div");
                            title.className = "titles";
                            let h3 = document.createElement("h3");
                            h3.appendChild(document.createTextNode(data[i].favoriteName));

                            let p = document.createElement("p");
                            p.className = "isCollections";
                            let messageSpan = document.createElement("span");
                            messageSpan.className = "messageSpan";
                            let isCollectionsSpan = document.createElement("span");
                            isCollectionsSpan.innerText = "取消收藏";
                            isCollectionsSpan.className = "isCollectionsSpan";
                            isCollectionsSpan.setAttribute("favoriteId",data[i].favoriteId);

                            p.appendChild(messageSpan);
                            p.appendChild(isCollectionsSpan);
                            title.appendChild(h3);
                            title.appendChild(p);

                            top.appendChild(animateSpan);
                            top.appendChild(cover);
                            top.appendChild(title);
                            li.appendChild(top);
                            unorderList.appendChild(li);
                            personalSongL.appendChild(unorderList);
                        }
                        for(let i=0; i<data.length; i++) {
                            let messageSpan = document.getElementsByClassName("messageSpan")[i];
                            let thisFavoriteId = document.getElementsByClassName("top")[i].getAttribute("favoriteId");
                            $.ajax({
                                url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                type: 'get',
                                async: true,
                                data: "favoriteId="+thisFavoriteId,
                                dataType: 'json',
                                success: (data) => {
                                    messageSpan.appendChild(document.createTextNode("歌曲数："+data.songList.length));
                                },
                                error: () => {
                                    messageSpan.appendChild(document.createTextNode("歌曲数：0"));
                                }
                            })
                        }
                    }
                    $(".isCollectionsSpan").click(function(e) {
                        if(e.currentTarget.innerText == "取消收藏") {
                            // 删除收藏歌单并提交数据至数据库
                            $.ajax({
                                url: 'http://localhost:8080/MusicFM/deleteMyLoveFavoriteServlet',
                                type: 'post',
                                async: true,
                                data: "userId="+userIdNow+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                dataType: 'json',
                            })
                            e.currentTarget.innerText = "收藏";
                        } else {
                            // 收藏歌单并提交数据至数据库
                            $.ajax({
                                url: 'http://localhost:8080/MusicFM/addLoveFavoriteServlet',
                                type: 'post',
                                async: true,
                                data: "userId="+userIdNow+"&favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                dataType: 'json',
                            })
                            e.currentTarget.innerText = "取消收藏";
                        }
                    })
                    $("#user-likes-close").click(function() {
                        userCenter2Box.innerHTML = "";
                        userCenter2Box.style.display = "none";
                        userCenterBox.style.display = "block";
                    })
                },
                error: () => {
                    console.log("Error in user-collections");
                }
            })
        })
        $('#user-songLists').click(function() {
            let mineHTML = `
                <div class="page-heart-songs container" style="width: 600px;">
                    <svg id='user-likes-close'>
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                    <div class="container personalSongL" style="width: 100%; border-collapse: collapse;">
                        <ul class="songCollection-songlist-song"></ul>
                    </div>
                </div>`;
            let createNewFavourite = `
                <li id="link-new-songlist" style="margin-top: 27px">制作新歌单</li>
                <p class="mine-introduce">我创建的歌单`;

            userCenterBox.style.display = "none";
            userCenter2Box.style.display = "block";
            userCenter2Box.innerHTML = mineHTML;
            $.ajax({
                url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                type: 'get',
                async: true,
                data: "userId="+userIdNow,
                dataType: 'json',
                // 我创建的歌单
                success: (data) => {
                    let songCollectionBox = document.getElementsByClassName("songCollection-songlist-song")[0];
                    songCollectionBox.innerHTML = createNewFavourite;
                    let personalSongL = document.getElementsByClassName("personalSongL")[0];
                    let j = 1;
                    if(data.length == 0) {
                        console.log("MyCreateSongListList is empty.");
                        document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                        let emptyMyCreateSongListListHint = document.createElement("p");
                        emptyMyCreateSongListListHint.className = "emptyHint";
                        emptyMyCreateSongListListHint.innerText = "你还未创建歌单，快去创建几个吧~";
                        personalSongL.appendChild(emptyMyCreateSongListListHint);
                    } else {
                        for(let i=0; i<data.length; i++) {
                            let thisFavoriteId = data[i].favoriteId;
                            let li = document.createElement("li");
                            let top = document.createElement("div");
                            top.className = "top";
                            let topId = "top"+j;
                            top.id = topId;
                            top.setAttribute("favoriteId",thisFavoriteId);
                            let animateSpan = document.createElement("span");
                            animateSpan.className = "index";
                            animateSpan.innerHTML = j++;

                            let cover = document.createElement("div");
                            cover.className = "fengmian";
                            cover.style.height = "52px";
                            cover.style.width = "52px";
                            cover.style.backgroundImage = "url('src/1.jpg')";
                            cover.style.backgroundSize = "cover";
                            cover.style.display = "inline-block";
                            cover.style.marginTop = "1.5px";

                            let title = document.createElement("div");
                            title.className = "titles";
                            let h3 = document.createElement("h3");
                            h3.appendChild(document.createTextNode(data[i].favoriteName));

                            let p = document.createElement("p");
                            p.className = "isCollections";
                            let messageSpan = document.createElement("span");
                            messageSpan.className = "messageSpan";
                            let isCollectionsSpan = document.createElement("span");
                            isCollectionsSpan.innerText = "删除歌单";
                            isCollectionsSpan.className = "isCollectionsSpan";
                            isCollectionsSpan.setAttribute("favoriteId",thisFavoriteId);

                            p.appendChild(messageSpan);
                            p.appendChild(isCollectionsSpan);
                            title.appendChild(h3);
                            title.appendChild(p);

                            top.appendChild(animateSpan);
                            top.appendChild(cover);
                            top.appendChild(title);
                            li.appendChild(top);
                            songCollectionBox.appendChild(li);
                            $("#"+topId).click(function(e) {
                                console.log("歌单第"+topId.substring(3,topId.length));
                                // todo
                                // 预留给点击歌单跳转详情界面的
                                // $.ajax({
                                //         url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                //         type: 'get',
                                //         async: true,
                                //         data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                //         dataType: 'json',
                                //         success: (data) => {
                                //             let newSongNumber = data.songList.length;
                                //             songNumberSpan.innerText = "歌曲数："+newSongNumber;
                                //         },
                                //         error: () => {
                                //             songNumberSpan.innerText = "歌曲数：1";
                                //         }
                                //     });
                            })
                        }
                        for(let i=0; i<data.length; i++) {
                            let songNumberSpan = songCollectionBox.getElementsByClassName("messageSpan")[i];
                            let favoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[i];
                            $.ajax({
                                url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                type: 'get',
                                async: true,
                                data: "favoriteId="+favoriteIdSpan.getAttribute("favoriteId"),
                                dataType: 'json',
                                success: (data) => {
                                    songNumberSpan.innerText = "歌曲数："+data.songList.length;
                                },
                                error: () => {
                                    songNumberSpan.innerText = "歌曲数：0";
                                }
                            });
                        }
                    }

                    $("#link-new-songlist").click(function(e) {
                        let createNewSongListHtml = `
                            <div class="overlays">
                                <div class="createNewSonglist-block">
                                    <svg class="createNewSonglist-block-close">
                                        <use xlink:href="#icon-guanbi"></use>
                                    </svg>
                                    <form name="form-box" class="login-box">
                                        <h1 style="text-align: center;">创建歌单</h1>
                                        <input id="favoriteName" type="text" name="favoriteName" placeholder="歌单名">
                                        <p class="hint" name="hint"></p>
                                        <p id="create" type="button" name="create-submit">Create</p>
                                    </form>
                                </div>
                                <div class="white-background"></div>
                            </div>`;
                        $("body").append(createNewSongListHtml);
                        $(".createNewSonglist-block-close").click(function() {
                            $(".overlays").remove();
                        })
                        $("#create").click(function() {
                            let newSonglistName = document.getElementById("favoriteName").value;
                            let hint = document.getElementsByName("hint")[0];
                            if(newSonglistName != "") {
                                //创建歌单后刷新页面
                                $.ajax({
                                    url: "http://localhost:8080/MusicFM/addCreateFavoriteServlet",
                                    type: 'post',
                                    async: false,
                                    data: "userId="+userIdNow+"&favoriteName="+newSonglistName,
                                    dataType: 'json',
                                    error: (data) => {
                                        if(data.responseText == "success") {
                                            $(".overlays").remove();
                                            if(document.getElementsByClassName("emptyHint")[0]) {
                                                document.getElementsByClassName("mine-introduce")[0].style.display = "block";
                                                document.getElementsByClassName("emptyHint")[0].remove();
                                            }
                                            let li = document.createElement("li");
                                            let top = document.createElement("div");
                                            top.className = "top";
                                            let topId = "top" + j;
                                            top.id = topId;
                                            let animateSpan = document.createElement("span");
                                            animateSpan.className = "index";
                                            animateSpan.innerHTML = j++;

                                            let cover = document.createElement("div");
                                            cover.classname = "fengmian";
                                            cover.style.height = "52px";
                                            cover.style.width = "52px";
                                            cover.style.backgroundImage = "url('src/1.jpg')";
                                            cover.style.backgroundSize = "cover";
                                            cover.style.display = "inline-block";
                                            cover.style.marginTop = "1.5px";

                                            let title = document.createElement("div");
                                            title.className = "titles";
                                            let h3 = document.createElement("h3");
                                            h3.appendChild(document.createTextNode(newSonglistName));

                                            let p = document.createElement("p");
                                            p.className = "isCollections";
                                            let messageSpan = document.createElement("span");
                                            let songNumber = 0;
                                            messageSpan.appendChild(document.createTextNode("歌曲数：" + songNumber));
                                            messageSpan.className = "messageSpan";
                                            let isCollectionsSpan = document.createElement("span");
                                            isCollectionsSpan.innerText = "删除歌单";
                                            isCollectionsSpan.className = "isCollectionsSpan";

                                            p.appendChild(messageSpan);
                                            p.appendChild(isCollectionsSpan);
                                            title.appendChild(h3);
                                            title.appendChild(p);

                                            top.appendChild(animateSpan);
                                            top.appendChild(cover);
                                            top.appendChild(title);
                                            li.appendChild(top);
                                            songCollectionBox.appendChild(li);
                                            $("#"+topId).click(function(e) {
                                                console.log("歌单第"+topId.substring(3,topId.length));
                                                // 预留给点击歌单跳转详情界面的
                                                // $.ajax({
                                                //         url: "http://localhost:8080/MusicFM/selectFavoriteServlet",
                                                //         type: 'get',
                                                //         async: true,
                                                //         data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                //         dataType: 'json',
                                                //         success: (data) => {
                                                //             let newSongNumber = data.songList.length;
                                                //             songNumberSpan.innerText = "歌曲数："+newSongNumber;
                                                //         },
                                                //         error: () => {
                                                //             songNumberSpan.innerText = "歌曲数：1";
                                                //         }
                                                //     });
                                            })
                                            // todo
                                            // 删除歌单和点击跳转歌单详情可能冲突 待改进
                                            $(".isCollectionsSpan").click(function(e) {
                                                $.ajax({
                                                    url: 'http://localhost:8080/MusicFM/deleteMyCreateFavoriteServlet',
                                                    type: 'post',
                                                    async: true,
                                                    data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                                                    dataType: 'json',
                                                    error: (data) => {
                                                        if(data == 'success') {
                                                            console.log("删除成功");
                                                        } else {
                                                            console.log("Error in deleteMyCreateFavoriteServlet");
                                                        }
                                                    }
                                                })
                                                e.currentTarget.parentNode.parentNode.parentNode.parentNode.remove();
                                                let item = 1;
                                                for(let i=0; i<document.getElementsByClassName("index").length; i++,item++) {
                                                    let songlistIndex = document.getElementsByClassName("index")[i];
                                                    songlistIndex.innerText = item;
                                                }
                                                j = item;
                                                if(j == 1) {
                                                    document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                                                    let emptyMyCreateSongListListHint = document.createElement("p");
                                                    emptyMyCreateSongListListHint.className = "emptyHint";
                                                    emptyMyCreateSongListListHint.innerText = "你还未创建歌单，快去创建几个吧~";
                                                    personalSongL.appendChild(emptyMyCreateSongListListHint);
                                                }
                                            })
                                        } else {
                                            console.log("Error in addCreateFavoriteServlet.");
                                            alert("创建失败，请重试。");
                                        }
                                    },
                                });
                                $.ajax({
                                    url: "http://localhost:8080/MusicFM/selectMyCreateFavoriteServlet",
                                    type: 'get',
                                    async: true,
                                    data: "userId="+userIdNow,
                                    dataType: 'json',
                                    success: (data) => {
                                        let newSonglistNumber = data.length-1;
                                        let newSonglistTop = songCollectionBox.getElementsByClassName("top")[newSonglistNumber];
                                        let newFavoriteIdSpan = songCollectionBox.getElementsByClassName("isCollectionsSpan")[newSonglistNumber];
                                        let newFavoriteId = data[newSonglistNumber].favoriteId;
                                        newSonglistTop.setAttribute("favoriteId",newFavoriteId);
                                        newFavoriteIdSpan.setAttribute("favoriteId",newFavoriteId);
                                    },
                                    error: () => {
                                        console.log("Error in get newFavoriteId");
                                    }
                                })
                            } else {
                                hint.style.color='red';
                                hint.innerText='歌单名不能为空！';
                            }
                        })
                    })
                    $(".isCollectionsSpan").click(function(e) {
                        $.ajax({
                            url: 'http://localhost:8080/MusicFM/deleteMyCreateFavoriteServlet',
                            type: 'post',
                            async: true,
                            data: "favoriteId="+e.currentTarget.getAttribute("favoriteId"),
                            dataType: 'json',
                            error: (data) => {
                                if(data == 'success') {
                                    console.log("删除成功");
                                } else {
                                    console.log("Error in deleteMyCreateFavoriteServlet");
                                }
                            }
                        })
                        e.currentTarget.parentNode.parentNode.parentNode.parentNode.remove();
                        let item = 1;
                        for(let i=0; i<document.getElementsByClassName("index").length; i++,item++) {
                            let songlistIndex = document.getElementsByClassName("index")[i];
                            songlistIndex.innerText = item;
                        }
                        j = item;
                        if(j == 1) {
                            document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                            let emptyMyCreateSongListListHint = document.createElement("p");
                            emptyMyCreateSongListListHint.className = "emptyHint";
                            emptyMyCreateSongListListHint.innerText = "你还未创建歌单，快去创建几个吧~";
                            personalSongL.appendChild(emptyMyCreateSongListListHint);
                        }
                    })
                    $("#user-likes-close").click(function() {
                        userCenter2Box.innerHTML = "";
                        userCenter2Box.style.display = "none";
                        userCenterBox.style.display = "block";
                    })
                },
                error: () => {
                    console.log("Error in selectMyCreateFavoriteServlet");
                }
            })
        })
        $('#user-artists').click(function() {
            let mineHTML = `
                <div class="page-heart-songs container" style="width: 600px;">
                    <svg id='user-likes-close'>
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                    <p class="mine-introduce">我喜欢的歌手
                    <div class="container personalSongL" style="width: 100%; border-collapse: collapse;"></div>
                </div>`;
            let iconXin = `
                <svg style="width: 12px; height: 12px; vertical-align: middle;" class="iconXin">
                    <use xlink:href="#icon-xin" style="fill: rgba(233, 7, 7, 0.7)"></use>
                </svg>`;

            userCenterBox.style.display = "none";
            userCenter2Box.style.display = "block";
            userCenter2Box.innerHTML = mineHTML;
            $.ajax({
                url: "http://localhost:8080/MusicFM/selectMyLoveSingerServlet",
                type: 'get',
                async: true,
                data: "userId="+userIdNow,
                dataType: 'json',
                // 我喜欢的艺术家
                success: (data) => {
                    let personalSongL = document.getElementsByClassName("personalSongL")[0];
                    let unorderList = document.createElement("ul");
                    unorderList.className = "songlist-song";
                    let j = 1;
                    if(data.length == 0) {
                        console.log("LoveSingerList is empty.");
                        document.getElementsByClassName("mine-introduce")[0].style.display = "none";
                        let emptySingerListHint = document.createElement("p");
                        emptySingerListHint.className = "emptyHint";
                        emptySingerListHint.innerText = "你还未设置喜欢的歌手，快去收藏几个吧~";
                        personalSongL.appendChild(emptySingerListHint);
                    } else {
                        for(let i=0; i<data.length; i++) {
                            let li = document.createElement("li");
                            let top = document.createElement("div");
                            top.className = "top";
                            let animateSpan = document.createElement("span");

                            animateSpanWord = document.createTextNode(j++);
                            animateSpan.appendChild(animateSpanWord);
                            animateSpan.className ="index";

                            let cover = document.createElement("div");
                            cover.className = "fengmian";
                            cover.style.height = "52px";
                            cover.style.width = "52px";
                            cover.style.backgroundImage = "url('src/1.jpg')";
                            cover.style.backgroundSize = "cover";
                            cover.style.display = "inline-block";
                            cover.style.marginTop = "1.5px";

                            let title = document.createElement("div");
                            title.className = "titles";
                            let h3 = document.createElement("h3");
                            h3.appendChild(document.createTextNode(data[i].singerName));


                            let p = document.createElement("p");
                            let artistSpan = document.createElement("span");
                            let artistLink = document.createElement("a");
                            artistLink.appendChild(document.createTextNode("关注数："+data[i].fansCount));
                            artistSpan.appendChild(artistLink);

                            p.appendChild(artistSpan);
                            title.appendChild(h3);
                            title.appendChild(p);

                            let actions = document.createElement("div");
                            actions.className = "actions";

                            let a1 = document.createElement("a");
                            a1.style.marginRight = "10px";
                            a1.innerHTML = iconXin;
                            a1.setAttribute("singerId",data[i].singerId);
                            a1.setAttribute("fansCount",data[i].fansCount);
                            actions.appendChild(a1);

                            top.appendChild(animateSpan);
                            top.appendChild(cover);
                            top.appendChild(title);
                            top.appendChild(actions);
                            li.appendChild(top);
                            unorderList.appendChild(li);
                            personalSongL.appendChild(unorderList);
                        }
                    }

                    $(".iconXin").click(function(e) {
                        let FansCountNow = e.currentTarget.parentNode.getAttribute("fansCount");
                        let FansCountNext = FansCountNow-1;
                        let thisFansCountNow = "关注数："+ FansCountNow;
                        let thisFansCountNext = "关注数："+ FansCountNext;
                        if(e.currentTarget.firstElementChild.style.fill == "rgba(233, 7, 7, 0.7)") {
                            // 取消喜欢的歌手并提交数据至数据库
                            $.ajax({
                                url: 'http://localhost:8080/MusicFM/deleteLoveSingerServlet',
                                type: 'post',
                                async: true,
                                data: "userId="+userIdNow+"&singerId="+e.currentTarget.parentNode.getAttribute("singerId"),
                                dataType: 'json',
                            })
                            e.currentTarget.firstElementChild.style.fill = "black";
                            e.currentTarget.parentNode.parentNode.parentNode.getElementsByTagName("span")[1].firstElementChild.innerText = thisFansCountNext;
                        } else {
                            // 收藏喜欢的歌手并提交数据至数据库
                            $.ajax({
                                url: 'http://localhost:8080/MusicFM/addLoveSingerServlet',
                                type: 'post',
                                async: true,
                                data: "userId="+userIdNow+"&singerId="+e.currentTarget.parentNode.getAttribute("singerId"),
                                dataType: 'json',
                            })
                            e.currentTarget.firstElementChild.style.fill = "rgba(233, 7, 7, 0.7)";
                            e.currentTarget.parentNode.parentNode.parentNode.getElementsByTagName("span")[1].firstElementChild.innerText = thisFansCountNow;
                        }
                    })
                    $("#user-likes-close").click(function() {
                        userCenter2Box.innerHTML = "";
                        userCenter2Box.style.display = "none";
                        userCenterBox.style.display = "block";
                    })
                },
                error: () => {
                    console.log("Error in user-artists");
                }
            })
        })
        $('#user-center-change-password').click(function() {
            let changePasswordHtml = `
            <div id="user-center-change-password-box">
                <svg id="user-center-change-password-close">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
                <label>
                    请输入旧密码：
                    <input id="oldPassword" type="text" placeholder="oldPassword">
                    <p class="hint" name="hint"></p>
                </label>
                <label>
                    请输入新密码：
                    <input id="newPassword" type="text" placeholder="newPassword">
                    <p class="hint" name="hint"></p>
                </label>
                <label>
                    请重复新密码：
                    <input id="repeatNewPassword" type="text" placeholder="repeatNewPassword">
                    <p class="hint" name="hint"></p>
                </label>
                <button id="submitNewPassword-button">确认修改</button>
                <script src="src/download/font/iconfont.js"></script>
                <script src="src/download/fontul/iconfont.js"></script>
            </div>`;
            userCenterBox.style.display = "none";
            userCenter2Box.style.display = "block";
            userCenter2Box.innerHTML = changePasswordHtml;
            document.getElementById("user-center-change-password-box").setAttribute("userId",userIdNow);
            console.log("user-center-change-password");
            let oldPasswordIsCorrect = false;
            let newPasswordIsCorrect = false;
            let repeatNewPasswordIsCorrect = false;
            let oldPassword = document.getElementById("oldPassword");
            let newPassword = document.getElementById("newPassword");
            let repeatNewPassword = document.getElementById("repeatNewPassword");
            let submitNewPassword = document.getElementById("submitNewPassword-button");
            let hint1 = document.getElementsByName("hint")[0];
            let hint2 = document.getElementsByName("hint")[1];
            let hint3 = document.getElementsByName("hint")[2];

            oldPassword.addEventListener("blur", () => {
                let value1 = oldPassword.value.trim();
                let value2 = newPassword.value.trim();
                let re1 = /^[a-zA-Z0-9]{6,15}$/.test(value1);
                let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
                if (re1) {
                    oldPasswordIsCorrect = true;
                    hint1.innerHTML = '&nbsp;';
                } else {
                    oldPasswordIsCorrect = false;
                    hint1.style.color='red';
                    hint1.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
                }
                if (re2 || value2 == '') {
                    if(value2 != '')
                        newPasswordIsCorrect = true;
                    hint2.innerHTML = '&nbsp;';
                } else {
                    newPasswordIsCorrect = false;
                    hint2.style.color='red';
                    hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
                }
            })
            newPassword.addEventListener("blur", () => {
                let value1 = oldPassword.value.trim();
                let value2 = newPassword.value.trim();
                let value3 = repeatNewPassword.value.trim();
                let re1 = /^[a-zA-Z0-9]{6,15}$/.test(value1);
                let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
                if (re1 || value1 == '') {
                    if(value1 != '')
                        oldPasswordIsCorrect = true;
                    hint1.innerHTML = '&nbsp;';
                } else {
                    oldPasswordIsCorrect = false;
                    hint1.style.color='red';
                    hint1.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
                }
                if (re2) {
                    newPasswordIsCorrect = true;
                    hint2.innerHTML = '&nbsp;';
                } else {
                    newPasswordIsCorrect = false;
                    hint2.style.color='red';
                    hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
                }
                if(value3 != '') {
                    if(value2 == value3) {
                        hint3.innerHTML= '&nbsp;';
                        // if(re2)
                        //     repeatNewPasswordIsCorrect = true;
                        repeatNewPasswordIsCorrect = true;
                    } else {
                        hint3.style.color='red';
                        hint3.innerText='输入错误,两次输入密码需一致';
                        repeatNewPasswordIsCorrect = false;
                    }
                }
            })
            repeatNewPassword.addEventListener("blur", () => {
                let value1 = oldPassword.value.trim();
                let value2 = newPassword.value.trim();
                let value3 = repeatNewPassword.value.trim();
                let re1 = /^[a-zA-Z0-9]{6,15}$/.test(value1);
                let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
                if (re1 || value1 == '') {
                    if(value1 != '')
                        oldPasswordIsCorrect = true;
                    hint1.innerHTML = '&nbsp;';
                } else {
                    oldPasswordIsCorrect = false;
                    hint1.style.color='red';
                    hint1.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
                }
                if (re2 || value2 == '') {
                    if(value2 != '')
                        newPasswordIsCorrect = true;
                    hint2.innerHTML = '&nbsp;';
                } else {
                    newPasswordIsCorrect = false;
                    hint2.style.color='red';
                    hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
                }
                if(value2 == value3) {
                    hint3.innerHTML= '&nbsp;';
                    repeatNewPasswordIsCorrect = true;
                } else {
                    hint3.style.color='red';
                    hint3.innerText='输入错误,两次输入密码需一致';
                    repeatNewPasswordIsCorrect = false;
                }
            })
            submitNewPassword.addEventListener("click", () => {
                if(oldPasswordIsCorrect==true && newPasswordIsCorrect ==true && repeatNewPasswordIsCorrect == true) {
                    // 对数据库进行操作更新密码
                    // 返回首页重新登录
                    $.ajax({
                        url: "http://localhost:8080/MusicFM/modifyPwdServlet",
                        type: 'post',
                        async: true,
                        data: "userId="+document.getElementById("user-center-change-password-box").getAttribute("userId")+"&oldPwd="+oldPassword.value+"&newPwd="+newPassword.value,
                        dataType: 'json',
                        error: (data) => {
                            if(data.responseText == "success") {
                                alert("修改密码成功，请重新登录。");
                                location.href="/MusicFM";
                            } else {
                                alert("修改密码失败，请重试。");
                            }
                        }
                    })
                }
            })
            $("#user-center-change-password-close").click(function() {
                console.log("user-center-change-password-close");
                document.getElementById("user-center2-box").innerHTML = "";
                document.getElementById("user-center2-box").style.display = "none";
                document.getElementById("user-center-box").style.display = "block";
            })
        })
        $('#user-remove').click(function() {
            // 注销账号后返回主页 http://localhost:8080/MusicFM/deleteUserServlet
            let remove = confirm("确认注销账号？");
            if(remove == true) {
                $.ajax({
                    url: "http://localhost:8080/MusicFM/deleteUserServlet",
                    type: 'post',
                    async: true,
                    data: "userId="+userIdNow,
                    dataType: 'json',
                    error: (data) => {
                        if(data.responseText == "success") {
                            alert("注销账号成功。");
                            location.href="/MusicFM";
                        } else {
                            alert("注销账号失败，请重试。");
                            console.log("Error in deleteUserServlet.");
                        }
                    }
                })
            }
        })
        $("#user-log-out").click(function() {
            console.log("#user-log-out");
            location.href="/MusicFM";
        })
    })
})
// 打开修改密码界面change-password
$(document).ready(function() {
    $("#change-password").click(function() {
        let changePasswordHtml = `
            <div id="change-password-box">
                <svg id="change-password-close">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
                <label>
                    请输入旧密码：
                    <input id="oldPassword" type="text" placeholder="oldPassword">
                    <p class="hint" name="hint"></p>
                </label>
                <label>
                    请输入新密码：
                    <input id="newPassword" type="text" placeholder="newPassword">
                    <p class="hint" name="hint"></p>
                </label>
                <label>
                    请重复新密码：
                    <input id="repeatNewPassword" type="text" placeholder="repeatNewPassword">
                    <p class="hint" name="hint"></p>
                </label>
                <button id="submitNewPassword-button">确认修改</button>
                <script src="src/download/font/iconfont.js"></script>
                <script src="src/download/fontul/iconfont.js"></script>
            </div>`;
        let userIdNow = document.getElementById("user-menu").getAttribute("userId");
        $(".app-header")[0].style.display = "none";
        if(clickJudge) {
            $(".exploreMD")[0].style.display = "none";
        } else {
            $(".exploreMU")[0].style.display = "none";
        }
        $("body").append(changePasswordHtml);
        document.getElementById("change-password-box").setAttribute("userId",userIdNow);
        console.log("change-password");
        let oldPasswordIsCorrect = false;
        let newPasswordIsCorrect = false;
        let repeatNewPasswordIsCorrect = false;
        let oldPassword = document.getElementById("oldPassword");
        let newPassword = document.getElementById("newPassword");
        let repeatNewPassword = document.getElementById("repeatNewPassword");
        let submitNewPassword = document.getElementById("submitNewPassword-button");
        let hint1 = document.getElementsByName("hint")[0];
        let hint2 = document.getElementsByName("hint")[1];
        let hint3 = document.getElementsByName("hint")[2];

        oldPassword.addEventListener("blur", () => {
            let value1 = oldPassword.value.trim();
            let value2 = newPassword.value.trim();
            let re1 = /^[a-zA-Z0-9]{6,15}$/.test(value1);
            let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
            if (re1) {
                oldPasswordIsCorrect = true;
                hint1.innerHTML = '&nbsp;';
            } else {
                oldPasswordIsCorrect = false;
                hint1.style.color='red';
                hint1.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
            if (re2 || value2 == '') {
                if(value2 != '')
                    newPasswordIsCorrect = true;
                hint2.innerHTML = '&nbsp;';
            } else {
                newPasswordIsCorrect = false;
                hint2.style.color='red';
                hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
        })
        newPassword.addEventListener("blur", () => {
            let value1 = oldPassword.value.trim();
            let value2 = newPassword.value.trim();
            let value3 = repeatNewPassword.value.trim();
            let re1 = /^[a-zA-Z0-9]{6,15}$/.test(value1);
            let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
            if (re1 || value1 == '') {
                if(value1 != '')
                    oldPasswordIsCorrect = true;
                hint1.innerHTML = '&nbsp;';
            } else {
                oldPasswordIsCorrect = false;
                hint1.style.color='red';
                hint1.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
            if (re2) {
                newPasswordIsCorrect = true;
                hint2.innerHTML = '&nbsp;';
            } else {
                newPasswordIsCorrect = false;
                hint2.style.color='red';
                hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
            if(value3 != '') {
                if(value2 == value3) {
                    hint3.innerHTML= '&nbsp;';
                    // if(re2)
                    //     repeatNewPasswordIsCorrect = true;
                    repeatNewPasswordIsCorrect = true;
                } else {
                    hint3.style.color='red';
                    hint3.innerText='输入错误,两次输入密码需一致';
                    repeatNewPasswordIsCorrect = false;
                }
            }
        })
        repeatNewPassword.addEventListener("blur", () => {
            let value1 = oldPassword.value.trim();
            let value2 = newPassword.value.trim();
            let value3 = repeatNewPassword.value.trim();
            let re1 = /^[a-zA-Z0-9]{6,15}$/.test(value1);
            let re2 = /^[a-zA-Z0-9]{6,15}$/.test(value2);
            if (re1 || value1 == '') {
                if(value1 != '')
                    oldPasswordIsCorrect = true;
                hint1.innerHTML = '&nbsp;';
            } else {
                oldPasswordIsCorrect = false;
                hint1.style.color='red';
                hint1.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
            if (re2 || value2 == '') {
                if(value2 != '')
                    newPasswordIsCorrect = true;
                hint2.innerHTML = '&nbsp;';
            } else {
                newPasswordIsCorrect = false;
                hint2.style.color='red';
                hint2.innerText='输入错误,请输入6到15位的由数字和字母组成的密码';
            }
            if(value2 == value3) {
                hint3.innerHTML= '&nbsp;';
                repeatNewPasswordIsCorrect = true;
            } else {
                hint3.style.color='red';
                hint3.innerText='输入错误,两次输入密码需一致';
                repeatNewPasswordIsCorrect = false;
            }
        })
        submitNewPassword.addEventListener("click", () => {
            if(oldPasswordIsCorrect==true && newPasswordIsCorrect ==true && repeatNewPasswordIsCorrect == true) {
                // 对数据库进行操作更新密码
                // 返回首页重新登录
                $.ajax({
                    url: "http://localhost:8080/MusicFM/modifyPwdServlet",
                    type: 'post',
                    async: true,
                    data: "userId="+document.getElementById("change-password-box").getAttribute("userId")+"&oldPwd="+oldPassword.value+"&newPwd="+newPassword.value,
                    dataType: 'json',
                    error: (data) => {
                        if(data.responseText == "success") {
                            alert("修改密码成功，请重新登录。");
                            location.href="/MusicFM";
                        } else {
                            alert("修改密码失败，请重试。");
                        }
                    }
                })
            }
        })
        $("#change-password-close").click(function() {
            console.log("change-password-close");
            $("#change-password-box").remove();
            $(".app-header")[0].style.display = "block";
            if(clickJudge) {
                $(".exploreMD")[0].style.display = "block";
            } else {
                $(".exploreMU")[0].style.display = "block";
            }
        })
    })
})

// 封面播放时自动旋转
function coverAnimationCreate() {
    // let cover = document.getElementById("cover");
    coverAnimation = document.getElementById("cover").animate(
        [
            { transform: 'rotate(360deg)' }
        ], {
            duration: 20000,
            iterations: Infinity
        }
    );
    coverAnimation.pause();
}
addLoadEvent(coverAnimationCreate);

// 播放音乐相关
function playMusic(){
    let playBtn = document.getElementById("play");
    playBtn.addEventListener("click",() =>{
        if(aud.paused) {
            aud.play();
            playBtn.firstElementChild.setAttribute('xlink:href','#icon-stop');
            isPlaying = true;
            coverAnimation.play();
        } else{
            aud.pause();
            playBtn.firstElementChild.setAttribute('xlink:href','#icon-bofang'); 
            isPlaying = false;
            coverAnimation.pause();
        }
    });
}
addLoadEvent(playMusic);
// 改变时间
function timeChange(time){
    let minute = time / 60;
    minute = parseInt(minute);
    if(minute < 10){
        minute = "0" + minute;
    }
    let second = time % 60;
    second = parseInt(second);
    if(second < 10)
    {
        second = "0" + second;
    }
    let allTime ="-" + minute+":"+second+"";
    return allTime;
}
setInterval(() => {
    let currentTime = aud.currentTime;
    let getcurrentTime=document.getElementById("currentTime");
    getcurrentTime.innerHTML=timeChange(currentTime);

}, 1000);

// 音量控制
$('#music-volume').change(function() {
    let icon = document.getElementById("volumeBtn");
    let volumeIcon = icon.firstElementChild;
    aud.volume = $(this).val() / 1000;
    isMute = false;
    if(aud.volume==0){
        volumeIcon.setAttribute('xlink:href','#icon-24gl-volumeDisable');
        isMute = true;
    }
    else if(aud.volume>0&&aud.volume<=0.3){
            volumeIcon.setAttribute('xlink:href','#icon-24gl-volumeLow');
        }
        else if(aud.volume>0.3&&aud.volume<=0.7){
                volumeIcon.setAttribute('xlink:href','#icon-24gl-volumeMiddle');
            }
            else{
                volumeIcon.setAttribute('xlink:href','#icon-24gl-volumeHigh');
            }
});
$(document).ready(function() {
    $('#volumeBtn').click(function() {
        if(isMute == false) {
            tempVolume = aud.volume;
            aud.volume = 0;
            volumeIcon.setAttribute('xlink:href','#icon-24gl-volumeDisable');
            isMute = true;
        } else {
            if(document.getElementById("music-volume").value==0){
                aud.volume = 0.6;
                volumeIcon.setAttribute('xlink:href','#icon-24gl-volumeMiddle');
                document.getElementById("music-volume").value=600;
            }
            else {
                aud.volume = tempVolume;
                if(aud.volume>0&&aud.volume<=0.3){
                    volumeIcon.setAttribute('xlink:href','#icon-24gl-volumeLow');
                }
                else if(aud.volume>0.3&&aud.volume<=0.7){
                        volumeIcon.setAttribute('xlink:href','#icon-24gl-volumeMiddle');
                    }
                    else{
                        volumeIcon.setAttribute('xlink:href','#icon-24gl-volumeHigh');
                    }
            }
            isMute = false;
        }
    })
})
// 注入歌词
function lyricsInjection(data) {
    console.log(data);
    $.ajax({
        type: "get",
        url: `${data}`,
        async: true,
        success: function (lrc) {
            LyricsArray = new Array();
            var lyricData = lrc.toString();
            var lyricDatas = lyricData.split("\n");
            $.each(lyricDatas, function (i, item) {
                var time = item.substring(item.indexOf("[") + 1, item.indexOf("]"));
                LyricsArray.push({
                    t: (time.split(":")[0] * 60 + parseFloat(time.split(":")[1])).toFixed(3),
                    c: item.substring(item.indexOf("]") + 1, item.length)
                });
            });
            var ul = $('#lyrics-content');
            ul.empty();
            $.each(LyricsArray, function (i, item) {
                var li = $("<li style='list-style: none; margin: 7px 0'>");
                li.html(item.c);
                ul.append(li);
            })
        },
        error: () => {
            console.log("Error in lyricsInjection");
        }
    })
}
addLoadEvent(lyricsInjection);
// 歌词高亮
function lineHeight(lineNumber) {
    var ul = $('#lyrics-content');
    let lyricContent = document.getElementById("lyrics-content");
    if(lineNumber != perLineNumber) {
        $(ul.find("li").get(perLineNumber)).removeClass("lineheight");
    }
    var nowLine = ul.find("li").get(lineNumber);
    if(lineNumber == LyricsArray.length) {
        $(ul.find("li").get(lineNumber)).removeClass("lineheight");
        nowLine = ul.find("li").get(lineNumber-1);
    }
    $(nowLine).addClass("lineheight");
    perLineNumber = lineNumber;

    // 实现文字滚动
    var _scrollTop;
    lyricContent.scrollTop = 0;
    if (lyricContent.clientHeight * fraction > nowLine.offsetTop) {
    _scrollTop = 0;
    } else if (nowLine.offsetTop > (lyricContent.scrollHeight - lyricContent.clientHeight * (1 - fraction))) {
        _scrollTop = lyricContent.scrollHeight - lyricContent.clientHeight;
    } else {
        _scrollTop = nowLine.offsetTop - lyricContent.clientHeight * fraction;
    }
    //以下声明歌词高亮行固定的基准线位置成为 “A”
    if ((nowLine.offsetTop - lyricContent.scrollTop) >= lyricContent.clientHeight * fraction) {
    //如果高亮显示的歌词在A下面，那就将滚动条向下滚动，滚动距离为 当前高亮行距离顶部的距离-滚动条已经卷起的高度-A到可视窗口的距离
        lyricContent.scrollTop += Math.ceil(nowLine.offsetTop - lyricContent.scrollTop - lyricContent.clientHeight * fraction);
    } else if ((nowLine.offsetTop - lyricContent.scrollTop) < lyricContent.clientHeight * fraction && _scrollTop != 0) {
    //如果高亮显示的歌词在A上面，那就将滚动条向上滚动，滚动距离为 A到可视窗口的距离-当前高亮行距离顶部的距离-滚动条已经卷起的高度
        lyricContent.scrollTop -= Math.ceil(lyricContent.clientHeight * fraction - (nowLine.offsetTop - lyricContent.scrollTop));
    } else if (_scrollTop == 0) {
        lyricContent.scrollTop = 0;
    } else {
        lyricContent.scrollTop += $(ul.find('li').get(0)).height();
    }
}
function lineHeights() {
    for(let i=0; i<LyricsArray.length-1; i++) {
        if(aud.currentTime.toFixed(3) >= parseFloat(LyricsArray[i].t) && aud.currentTime.toFixed(3) <= parseFloat(LyricsArray[i+1].t)) {
            lineHeight(i);
        }
    }
    if(aud.currentTime.toFixed(3) >= parseFloat(LyricsArray[LyricsArray.length-1].t)) {
        lineHeight(LyricsArray.length);
    }
}

// 显示/隐藏歌词
$(document).ready(function() {
    let left = document.getElementsByClassName("left")[0];
    let center = document.getElementById("zhongjianbufen");
    $('#lyric-button').click(function() {
        if(lyricIsHidden == true) {
            $("#zhongjianbufen").addClass("middleMR");
            left.style.display = "block";
            lyricIsHidden = false;
        } else {
            $("#zhongjianbufen").removeClass("middleMR");
            left.style.display = "none";
            lyricIsHidden = true;
        }
    })
    $('.close-lyric-box').click(function() {
        $("#zhongjianbufen").removeClass("middleMR");
        left.style.display = "none";
        lyricIsHidden = true;
    })
})

// 下一首歌
function NextSong() {
    songNum++;
    aud.currentTime = 0;
    document.getElementsByClassName("progress-line")[0].style.width = "0%";
    document.getElementById("play").firstElementChild.setAttribute('xlink:href','#icon-bofang'); 
    isPlaying = false;
    aud.pause();
    coverAnimation.pause();
    if(songList[songNum]== -1 || songList[songNum]==null){
        songNum = 0;
    }
    $.ajax({
        url:"http://localhost:8080/MusicFM/selectNextSongServlet",
        type: 'post',
        data: 'songId='+songList[songNum],
        async: true,
        dataType: 'json',
        success:(data)=>{
            console.log(data);
            let fengmianMain = document.getElementById("cover");
            fengmianMain.style.backgroundImage = `url(${data.pictureHref})`;
            let songName = document.getElementById("songName");
            songName.firstChild.nodeValue = `${data.songName}`;
            for(let i=0; i<document.getElementsByClassName("singerNameTitle").length; i++) {
                document.getElementsByClassName("singerNameTitle")[i].firstChild.nodeValue =`${data.singer.singerName}`;
            }
            aud.src = `${data.locateHref}`;
            document.getElementById("play").firstElementChild.setAttribute('xlink:href','#icon-stop');
            aud.play();
            isPlaying = true;
            coverAnimation.play();
            lyricsInjection(`${data.lrcHref}`);
        }
    })
    coverAnimationCreate();
    perLineNumber = 0;
    lineNumber = 0;
    collectOrNoT();
}

function updateProgress(){
    lineHeights();
    if (isPlaying) {
        let progress = document.getElementById("progress");
        let progressLine = document.getElementsByClassName("progress-line")[0];
        let duration = aud.duration;
        let currentTime = aud.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        progress.value = progressPercent;
        progressLine.style.width = `${progressPercent}%`;
        // 下一首歌
        if(progressPercent==100) {
            NextSong();
        }
    }
}
aud.addEventListener("timeupdate", updateProgress);
function progressSlide(e){
    const { value } = e.target;
    const progressTime = Math.ceil((aud.duration / 100) * value);
    aud.currentTime = progressTime;
    if(!isPlaying) {
        document.getElementsByClassName("progress-line")[0].style.width = `${value}%`;    
    }
}
document.getElementsByClassName("dislike")[0].addEventListener("click",()=>{
    console.log(songList);
    console.log(songNum);
    NextSong();
})
document.getElementById("progress").addEventListener("input", progressSlide);
document.getElementsByClassName("next")[0].addEventListener("click", NextSong);
document.getElementsByClassName("like")[0].addEventListener("click",addOrDeleteLoveSong);

// 检测当前歌曲是否已被当前用户收藏
function collectOrNoT() {
    if(document.getElementById("user-menu").style.display == "block") {
        let userIdNow = document.getElementById("user-menu").getAttribute("userId");
        let songIdNow = songList[songNum];

        let isCollect = false;
        $.ajax({
            url: "http://localhost:8080/MusicFM/selectMyLoveSongServlet",
            type: 'get',
            async: false,
            data: "userId="+userIdNow,
            dataType: 'json',
            success: (data) => {
                if(data.songList)
                    for(let i=0; i<data.songList.length; i++) {
                        if(songIdNow == data.songList[i].songId)
                            isCollect = true;
                    }
            }
        })
        if(isCollect == true) {
            document.getElementsByClassName("like")[0].style.fill = "rgba(233, 52, 52, 0.7)";
        } else {
            document.getElementsByClassName("like")[0].style.fill = "rgba(23, 23, 23, 0.7)";
        }
    } else {
        document.getElementsByClassName("like")[0].style.fill = "rgba(23, 23, 23, 0.7)";
    }
}

function addOrDeleteLoveSong() {
    if(document.getElementById("user-menu").style.display == "block") {
        let userIdNow = document.getElementById("user-menu").getAttribute("userId");
        let songIdNow = songList[songNum];
        let favoriteIdNow;

        $.ajax({
            url: "http://localhost:8080/MusicFM/selectMyLoveSongServlet",
            type: 'get',
            async: false,
            data: "userId="+userIdNow,
            dataType: 'json',
            success: (data) => {
                if(data.songList)
                    favoriteIdNow = data.favoriteId;
                else
                    favoriteIdNow = data;
            }
        })
        if(document.getElementsByClassName("like")[0].style.fill == "rgba(233, 52, 52, 0.7)") {
            // 取消收藏单曲并提交数据至数据库
            $.ajax({
                url: 'http://localhost:8080/MusicFM/deleteSongFromFavoriteServlet',
                type: 'post',
                async: false,
                data: "songId=" + songIdNow + "&favoriteId=" + favoriteIdNow,
                dataType: 'json',
            })
            document.getElementsByClassName("like")[0].style.fill = "rgba(23, 23, 23, 0.7)";
        } else {
            // 收藏单曲并提交数据至数据库
            $.ajax({
                url: 'http://localhost:8080/MusicFM/addSongToFavoriteServlet',
                type: 'post',
                async: false,
                data: "songId=" + songIdNow + "&favoriteId=" + favoriteIdNow,
                dataType: 'json',
            })
            document.getElementsByClassName("like")[0].style.fill = "rgba(233, 52, 52, 0.7)";
        }
        if(document.getElementById("mine-like-number")) {
            mineHandler();
        }
    } else {
        document.getElementsByClassName("like")[0].style.fill = "rgba(23, 23, 23, 0.7)";
        alert("登录后才能收藏歌曲，请登录。");
    }
}