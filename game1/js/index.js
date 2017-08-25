var img = [
	"img/1.png",
	"img/10.png",
	"img/11.png",
	"img/12.png",
	"img/13.png",
	"img/14.png",
	"img/15.png",
	"img/2.png",
	"img/3.png",
	"img/4.png",
	"img/5.png",
	"img/6.png",
	"img/7.png",
	"img/8.png",
	"img/9.png",
	"img/ab.png",
	"img/af.png",
	"img/ar.png",
	"img/backg.png",
	"img/bao.png",
	"img/bb.png",
	"img/bf.png",
	"img/br.png",
	"img/cb.png",
	"img/cf.png",
	"img/cr.png",
	"img/da.png",
	"img/db.png",
	"img/df.png",
	"img/dg1.png",
	"img/dg2.png",
	"img/dg3.png",
	"img/dg4.png",
	"img/dj.png",
	"img/dr.png",
	"img/eb.png",
	"img/ef.png",
	"img/er.png",
	"img/fb.png",
	"img/fen.png",
	"img/fenh.png",
	"img/ff.png",
	"img/fr.png",
	"img/gb.png",
	"img/gf.png",
	"img/gr.png",
	"img/hb.png",
	"img/hf.png",
	"img/hr.png",
	"img/ib.png",
	"img/if.png",
	"img/ir.png",
	"img/jb.png",
	"img/jf.png",
	"img/jr.png",
	"img/kb.png",
	"img/kf.png",
	"img/kr.png",
	"img/last.png",
	"img/lb.png",
	"img/lf.png",
	"img/load1.png",
	"img/load2.png",
	"img/load3.png",
	"img/load4.png",
	"img/lr.png",
	"img/mb.png",
	"img/mb1.png",
	"img/mf.png",
	"img/nb.png",
	"img/nf.png",
	"img/nr.png",
	"img/ob.png",
	"img/of.png",
	"img/or.png",
	"img/pb.png",
	"img/pf.png",
	"img/piao.png",
	"img/pr.png",
	"img/san.png",
	"img/san2.png",
	"img/start.png",
	"img/tishi.png",
	"img/xg1.png",
	"img/xg2.png",
	"img/xg3.png",
	"img/Z.png"
];
var first = document.getElementById("first");
var second = document.getElementById("second");
var loadtxt = first.getElementsByTagName("p")[0];
var loadnum = document.getElementById("loadnum");
var start = document.getElementById("start");
var startbtn = start.getElementsByTagName("img")[0];
var yi = document.getElementById("yi");
var dagui = document.getElementById("dagui");
var daguiimg = dagui.getElementsByTagName("img");
var fubox = document.getElementById("fu");
var baoz = document.getElementById("baoz");
var san = document.getElementById("san");
var baoimg = baoz.getElementsByTagName("img")[0];
var sanimg = san.getElementsByTagName("img");
var third = document.getElementById("third");
var rbg = document.getElementById("rbg");
var leftimg = document.getElementById("leftimg");
var rightimg = document.getElementById("rightimg");
var lbtn = document.getElementById("lbtn");
var lbtna = lbtn.getElementsByTagName("a");
var xia = document.getElementsByClassName("xia")[0];
var fen = document.getElementById("fen");
var bg = document.getElementById("bg");
var click = document.getElementById("click");
var hit = document.getElementById("hit");
var mbg = document.getElementById("mbg");
var swipe = document.getElementById("swipe");
function load(img){
	len = 0;
	for( i in img ){
		len++;
	}
	var num = 0;
	for( i in img ){
		var loadImg = [];
		var img = new Image();
		img.src = img[i];
		img.onload = (function(index){
			num++;
			loadImg[index] = img[index];
			loadnum.innerHTML = parseInt(num/len)*100;
			if(num>=len){
				// loadtxt.style.transition = "all 1s";
				loadtxt.style.opacity = 0;				
				// start.style.transition = "all 1s";
				start.style.opacity = 1;
			}
		})(i)
	}
}
load(img);
//点击开始游戏
touch.on(startbtn,'touchstart',function(){
	click.play();
	mbg.play();
	first.style.display = "none";
	second.style.display = "block";
})
//随机数
function ran(min,max){
	return parseInt(Math.random()*(max-min)+min);
}
//点击屏幕打小鬼
var gui = ["img/dg1.png","img/dg2.png","img/dg3.png","img/dg4.png",]
var fu = ["img/1.png","img/2.png","img/3.png","img/4.png","img/5.png","img/6.png","img/7.png","img/8.png","img/9.png","img/10.png","img/11.png","img/12.png","img/13.png","img/14.png","img/15.png",]
var sanbao = ["img/bao.png"]
var bol = false;
var bolnum = 0;
var timer;
addEvent(second,'touchstart',da);
function da(){
	hit.play();
	hit.currentTime = 0;
	mbg.pause();
	bolnum++;
	daguiimg[1].style.display = "block";
	if(bol){
		daguiimg[0].src = "img/dj.png";
		daguiimg[0].className = "fz";
		daguiimg[1].className = "fz";
		bol = false;
	}else{
		yi.style.display = "none";
		dagui.style.display = "block";
		daguiimg[0].src = "img/dj.png";
		daguiimg[0].className = "";
		daguiimg[1].className = "";
		bol = true;
	}
	hua();
	fus();
	//时间到后爆炸
	if(bol&&bolnum == 1){
		setTimeout(function(){
			removeEvent(second,"touchstart",da);
			dagui.style.display = "none";
			baoz.style.display = "block";
			//小鬼爆炸
			var baozt;
			var bnum = 4;
			baozt = setInterval(function(){
				bg.play();
				baoimg.src = "img/xg3.png";
				bnum--;
				if(bnum<=0){
					clearInterval(baozt);
					baoz.style.display = "none";
					san.style.display = "block";
					sanimg[0].className = "bomb";
					sanimg[1].className = "debris";
					sanimg[2].className = "spark";
					setTimeout(function(){
						second.style.display = "none";
						third.style.display = "block";
						leftimg.className = "zuo";
						rightimg.className = "you";
						setTimeout(function(){
							leftimg.className = "zuod";
							rightimg.className = "youd";
							xia.className = "xia btnd";
							lbtn.className = "btnd";
						},2500);
					},1000)
				}else{
					baoimg.src = "img/xg"+bnum+".png";
				}
			},850)
		},6000);
	}
}
//点击后随机出现的小鬼
function hua() {
	clearTimeout(timer);
	timer = setTimeout(function(){
		daguiimg[0].src = gui[ran(0,4)];
		daguiimg[1].style.display = "none";
	},1000);
}
//符咒出现
function fus(){
	var fuimg = document.createElement("img");
	fuimg.src = fu[ran(0,15)];
	fuimg.className = "fu";
	fuimg.style.top = ran(0,70)+"%";
	fuimg.style.left = ran(0,60)+"%";
	fubox.appendChild(fuimg);
	setTimeout(function(){
		fuimg.style.opacity = 0;
		fuimg.remove();
	},1500)
}

//事件解除绑定
function removeEvent(ele,type,fn) {
	if (ele.addEventListener) {
		ele.removeEventListener(type, fn, false);
	} else if (ele.attachEvent) {
		ele.detachEvent("on" + type, fn);
	} else {
		ele["on" + type] = null;
	}
}
function addEvent(ele,type,fn) {
	if (ele.addEventListener) {
		ele.addEventListener(type, fn, false);
	} else if (ele.attachEvent) {
		ele.attachEvent("on" + type, fn);
	} else {
		ele["on" + type] = fn;
	}
}
// 最后一页的轮播
var zh = document.body.clientHeight || document.documentElement.clientHeight;
third.style.height = 2*zh + "px";
touch.on(third,"swipeup",function(){
	swipe.play();
	swipe.currentTime = 0;
	third.style.top = -100+"%";
})
touch.on(third,"swipedown",function(){
	swipe.play();
	swipe.currentTime = 0;
	third.style.top = 0;
})
//随机神
var sbg = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
function shen(){
	var zm = sbg[ran(0,16)]
	rbg.style.background = "url(img/"+zm+"b.png) 50% 0% /contain";
	leftimg.style.background = "url(img/"+zm+"z.png) 50% 0% /contain";
	rightimg.style.background = "url(img/"+zm+"y.png) 50% 0% /contain";
}
shen();
//点击分享
lbtna[1].onclick = function(){
	fen.style.display = "block";
	click.play();
}
fen.onclick = function(){
	fen.style.display = "none";
}
//重新开始
lbtna[0].onclick = function(){
	mbg.play();
	click.play();
	bg.pause();
	bg.currentTime = 0;
	third.style.display = 'none';
	second.style.display = "block";
	yi.style.display = "block";
	dagui.style.display = 'none';
	baoz.style.display = 'none';
	san.style.display = 'none';
	addEvent(second,'touchstart',da);
	bol = false;
	bolnum = 0;
	shen();
}





