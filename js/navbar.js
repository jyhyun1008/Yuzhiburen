
// ----- 메타태그 적용 -----

const metaTag_1 = document.createElement('meta')

metaTag_1.setAttribute('name','description')
metaTag_1.setAttribute('content', description )
document.getElementsByTagName('head')[0].insertBefore( metaTag_1, document.getElementsByTagName('head')[0].firstChild )

const metaTag_2 = document.createElement('meta')

metaTag_2.setAttribute('name','author')
metaTag_2.setAttribute('content', author )
document.getElementsByTagName('head')[0].insertBefore( metaTag_1, document.getElementsByTagName('head')[0].firstChild )

const logoText = document.querySelector('.logo');
logoText.innerHTML = "<a href='./'>" + logo + "</a>"

// ----- 모바일 뷰포트 계산 -----

let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// 리사이즈
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})

// ----- 테마색상 적용 -----

document.documentElement.style.setProperty('--accent', `${theme}`);

// ----- 내비게이션 바 -----

const navbar = document.querySelector('.navbar_list');

for (var i = 0; i < menu.length; i++){
    if (i == parseInt(menu.length / 2)) {
        navbar.innerHTML += "<li><a href='./' class='active'><i class='bx bx-home-alt'></i></a></li>";
    }
    navbar.innerHTML += "<li><a href='./?page=" + menu[i].url + "'>" + menu[i].ico + "</a></li>";
}
