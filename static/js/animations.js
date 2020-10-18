// 打开网页封面缩放效果
new anime({
	targets: '#coverImg',
	scale: [1.2, 1],
	easing: 'easeInOutQuad',
	duration: 800
})

// 用于检测头像闪动次数的变量
var shiningTimes = 0
var doCheckShiningTimes = true

// 头像闪动
function avatorShine(){
	new anime({
		targets: '#shiningBar',
		translateY: [180, -30],
		easing: 'linear',
		duration: 400
	})
	
	shiningTimes += 1
	
	if(doCheckShiningTimes && shiningTimes >= 10){
		console.log("一闪一闪亮晶晶")
		loadInfo('brFloatingWindowContent', '一闪一闪亮晶晶')
		floatingWindowToggle('brFloatingWindow', 1)
		doCheckShiningTimes = false
	}
}

// header出现
function bannerShow(){
	new anime({
		targets: '#header',
		opacity: 1,
		easing: 'linear',
		duration: 200
	})
}

// header消失
function bannerHide(){
	new anime({
		targets: '#header',
		opacity: 0,
		easing: 'linear',
		duration: 300
	})
}

// 浮窗显示或消失
function floatingWindowToggle(selector, value){
	new anime({
		targets: '#' + selector,
		opacity: value,
		easing: 'linear',
		duration: 300
	})
}

// 为某id所指标签装载innerHTML
function loadInfo(selector, info){
	document.getElementById(selector).innerHTML = info;
}

// 使某浮窗展示一定信息
function showFloatingWinodwWithInfo(selector, target, info){
	loadInfo(target, info)
	floatingWindowToggle(selector, 1)
}

// 关闭右下角的浮窗
function closeBrFloatingWindow(){
	floatingWindowToggle('brFloatingWindow', 0)
	// loadInfo('brFloatingWindowContent', '')
}

// 鼠标在文章标题上时的动画
function articleTitleUnderline(){
	// console.log(this)
	// console.log('in')
	new anime({
		targets: this.nextElementSibling,
		width: '480px',
		easing: 'easeOutQuart',
		duration: 700
	})
}

//  鼠标离开文章标题时的动画
function articleTitleUnderlineShrink(){
	// console.log(this)
	// console.log('out')
	new anime({
		targets: this.nextElementSibling,
		width: 0,
		easing: 'easeOutQuart',
		duration: 700
	})
}

// 为文章标题添加边框动画
var articleTitles = document.querySelectorAll('.articleTitle')
for(let i = 0; i < articleTitles.length; i += 2){
	articleTitles[i].addEventListener('mouseenter', articleTitleUnderline)
	articleTitles[i].addEventListener('mouseleave', articleTitleUnderlineShrink)
}

// 文章封面缩放动画（放大）
function articleCoverZoomIn(){
//	console.log('in')
	new anime({
		targets: this,
		scale: 1.1,
		easing: 'easeOutQuart',
		duration: '1500'
	})
}

// 文章封面缩放动画（缩小至原大小）
function articleCoverZoomOut(){
//	console.log('out')
	new anime({
		targets: this,
		scale: 1,
		easing: 'easeOutQuart',
		duration: '1500'
	})
}

// 为文章封面添加鼠标交互缩放效果
var articleCovers = document.querySelectorAll('.articleCoverImg')
// console.log(articleCovers)
for(let i = 0; i < articleCovers.length; i++){
	articleCovers[i].addEventListener('mouseenter', articleCoverZoomIn)
	articleCovers[i].addEventListener('mouseleave', articleCoverZoomOut)
}

// 鼠标在文章信息块上时的阴影动画
function shadowExtend(){
	// console.log('in')
	new anime({
		targets: this,
		boxShadow: ['0px 0px 8px 1px rgb(219, 227, 227)', '0px 0px 12px 5px rgb(219, 227, 227)'],
		scale: 1.01,
		easing: 'easeOutQuart',
		duration: 500
	})
}

// 鼠标离开文章信息块时的阴影动画
function shadowShrink(){
	// console.log('out')
	new anime({
		targets: this,
		boxShadow: ['0px 0px 12px 5px rgb(219, 227, 227)', '0px 0px 8px 1px rgb(219, 227, 227)'],
		scale: 1,
		easing: 'easeOutQuart',
		duration: 500
	})
}

// 为文章文章信息块添加鼠标交互阴影动画
var articles = document.querySelectorAll('.article')
// console.log(articleCovers)
for(let i = 0; i < articles.length; i++){
	articles[i].addEventListener('mouseenter', shadowExtend)
	articles[i].addEventListener('mouseleave', shadowShrink)
}
