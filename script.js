// 현재 페이지 탭 강조
//document.addEventListener("DOMContentLoaded", function () {
 //   const path = window.location.pathname.split("/").pop();
//    const map = {
 //       "index.html": "homeTab",
  //      "page1.html": "tab1",
  //      "page2.html": "tab2",
  //      "page3.html": "tab3",
  //      "page4.html": "tab4",
  //      "page6.html": "tab6",
  //      "page7.html": "tab7",
  //      "page8.html": "tab8",
  //      "page9.html": "tab9"
  //  };
  //  const activeId = map[path];
  //  if (activeId) {
  //      document.getElementById(activeId).style.outline = "3px solid #333";
  //  }
//});


// 현재 페이지 URL 기준으로 활성 탭 자동 표시
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".tabs a");
  const current = location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.querySelector("button").classList.add("active");
    }
  });
});
