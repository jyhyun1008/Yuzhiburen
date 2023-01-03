// ----- 주소 -----

// 당신의 깃허브 아이디
var user = 'jyhyun1008';

// 사용할 깃허브 저장소
var repo = 'movel';

// ----- 페이지 헤더 설정 -----

// 페이지 제목
document.title = 'MOVEL';

// 페이지 설명
var description = 'Markdown fOr Visual novEL';

// 작가 이름
var author = 'Hyun Jaeyeon';

// ----- 페이지 컨텐츠 설정 -----

// 로고 문구 (강조하고 싶은 부분을 <span>이렇게</span> 감싸면 로고의 색상이 변합니다. 이미지로 하고 싶으시면 <img src="url" height="50px"> 로 지정해주세요.)
var logo = '<span>M</span>OVEL';

// 메뉴 이름 (page 폴더 내 <파일이름>.md 의 <파일이름> 부분을 적어주세요. "" 또는 ''로 지정하시면 루트 디렉토리의 README.md 파일로 연결됩니다.)
// 및 메뉴 아이콘 (https://boxicons.com/ 에서 아이콘을 찾아, 'Font' 탭을 복사해서 따옴표 안에 붙여넣어주세요.)
var menu = [
  {
    url: "intro",
    ico: "<i class='bx bx-chalkboard' ></i>"
  }, {
    url: "character",
    ico: "<i class='bx bx-user' ></i>"
  }, {
    url: "main",
    ico: "<i class='bx bx-book-bookmark' ></i>"
  }, {
    url: "side",
    ico: "<i class='bx bx-book-alt' ></i>"
  }
]

// ----- 테마 -----

// 테마 색상
var theme = '#7174F6';

// 타이틀 에모지 (필요 없을 경우 var emoji = ''; 으로 설정)
var emoji = '📜';
