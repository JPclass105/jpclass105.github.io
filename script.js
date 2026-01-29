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


// 현재 페이지 자동 활성화 (파일명 기준)
const path = window.location.pathname.split("/").pop();

document.querySelectorAll(".tabs a").forEach(link => {
    if (link.getAttribute("href") === path) {
        link.querySelector("button").classList.add("active");
    }
});
