function switchSection(switchSec){
  let sections= document.querySelectorAll(".art-sec");
  let heading = document.querySelector(".main-heading");
  const progess_bar = document.querySelectorAll(".progress-bar");
  sections.forEach(section=>{
    section.classList.remove("active");
  })
  
  let selectedSection = document.querySelector(`#${switchSec}`);
  if(selectedSection){
    selectedSection.classList.add("active");
    heading.innerHTML = switchSec;
  }
}


let progress_no = [70, 90, 80, 85];

function updateUI(i, progress) {
  document.getElementById(`progress${i}`).textContent = progress + "%";
  document.getElementById(`progress${i}`).style.width = progress + "%";
}

function startProgress() {
  for (let i = 0; i < progress_no.length; i++) {
    let progress = 0; // Each progress bar gets its own progress variable
    const interval = setInterval(() => {
      if (progress < progress_no[i]) {
        progress += 1; // Increment progress for this specific bar
        updateUI(i, progress);
      } else {
        clearInterval(interval);
      }
    }, 10);
  }
}


window.onload = () => {
  startProgress();
};


function header_phn(){
  let ph_header = document.querySelector(".header-mob");
  ph_header.classList.toggle("phn-header-height");
}