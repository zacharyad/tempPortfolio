let btn = document.getElementById('btn');
let container = document.querySelector('.btn-container');
let confirmMsg = document.querySelector('#confirm');
let welcomeHeader = document.querySelector('h1');
let aboutSection = document.querySelector('.about');
let resumeSection = document.querySelector('.resume');
let doubleCheck = true;
let contactVerb = false;
let contactVerbList = [
  'a collaboration.',
  'a conversation about the weather.',
  'a job.',
  'to talk video games and movies.',
  'an interview.',
];

btn.addEventListener('click', () => {
  if (!doubleCheck) {
    window.setInterval(cycleContactVerbs(), 3000);
    btnSuccess();
    contactVerb = document.querySelector('#contactSpan');
    welcomeHeader.style.animation = 'successFade 1.5s linear 0ms reverse';
    let nav = document.createElement('NAV');
    nav.innerHTML = navBarHtml();
    document.body.insertBefore(nav, welcomeHeader);
    aboutSection.style.display = 'flex';
    resumeSection.style.display = 'flex';
  } else {
    btn.innerText = 'continue?';
    btn.style.animation = 'slideOver 500ms ease-in-out 0s 1 forwards';
    doubleCheck = false;
  }
});

function btnSuccess() {
  btn.style.transform = '';
  btn.innerText = 'Success!';
  confirmMsg.innerText = '';
  btn.style.backgroundColor = 'rgba(0, 100, 0, .5)';
  btn.style.animation = 'successFade 2s linear 0ms 1 ';
  container.style.animation = 'successFade 1s linear 0ms forwards';
  welcomeHeader.style.animation = 'successFade 1.5s linear 0ms forwards';
  welcomeHeader.innerHTML = `Welcome, My name is Zach Droge...<br/> Look around and <a href=\"#\">contact me</a> for anything,  like... <br><span id=\"contactSpan\">chat.</span>`;
  container.removeChild(btn);
}

function navBarHtml() {
  return `<nav><div><a href=\'#about\'>About Me</a></div><div><a href=\'#resume\'>Resume</a></div></nav>`;
}

function cycleContactVerbs() {
  //Some nice, clean closure...
  let counter = contactVerbList.length - 1;
  return () => {
    if (counter && contactVerb) {
      contactVerb.innerHTML = contactVerbList[counter];
      counter--;
    } else {
      counter = contactVerbList.length - 1;
    }
  };
}
