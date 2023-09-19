const boxes = document.querySelectorAll(".box");
const names = document.querySelectorAll(".content");
const profiles = document.querySelectorAll(".profile");
const movies = document.querySelectorAll(".movie");

window.addEventListener("scroll", checkBox);

checkBox();

function checkBox() {
  const boxTriggelBottom = (window.innerHeight / 5) * 5;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < boxTriggelBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }

    // console.log(namesBC);
  });
}

function removeClick() {
  profiles.forEach((profile) => {
    profile.classList.remove("move");
    movies.forEach((movie) => {
      movie.classList.remove("moveName");
    });
    names.forEach((name) => {
      name.classList.remove("off");
    });
  });
}

profiles.forEach((profile) => {
  profile.addEventListener("click", () => {
    let profileResult = profile.classList.contains("move");

    //profiles:
    if (profileResult === true) {
      profile.classList.toggle("move");
      // namesB:
      names.forEach((profile) => {
        profile.classList.toggle("off");
      });
      //moviesB:
      movies.forEach((profile) => {
        profile.classList.toggle("moveName");
      });
    } else {
      removeClick();
      profile.classList.toggle("move");
      // namesB:
      names.forEach((profile) => {
        profile.classList.toggle("off");
      });
      //movies:
      movies.forEach((profile) => {
        profile.classList.toggle("moveName");
      });
    }
  });
});
// e.classList.toggle("move");
// // names:
// names.forEach((e) => {
//   e.classList.toggle("off");
// });
// //movies:
// movies.forEach((e) => {
//   e.classList.toggle("moveName");
// });
