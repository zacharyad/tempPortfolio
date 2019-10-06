(function() {
  let btn = document.getElementById('btn');
  let container = document.querySelector('.btn-container');
  let confirmMsg = document.querySelector('#confirm');
  let welcomeHeader = document.querySelector('h1');
  let allSections = document.querySelectorAll('.section');
  let footer = document.querySelector('footer');
  let doubleCheck = true;
  let contactVerb = false;
  let contactVerbList = [
    'a collaboration.',
    'a conversation about the weather.',
    'a job.',
    'to talk video games and movies.',
    'an interview.',
  ];
  // // Hamburger logic
  let hamburger = document.querySelector('#hamContainer');
  let exitHamburgerArea = document.querySelector('#exitHamburgerArea');

  let isHamburgerMenuOpen = false;
  let nav = document.querySelector('#nav');
  let body = document.querySelector('body');
  let h1 = document.querySelector('h1');
  let hamLines = hamburger.childNodes;
  let navMenuItems = nav.childNodes;

  hamburger.addEventListener('click', () => {
    if (!isHamburgerMenuOpen) {
      hamburger.style.animation = 'hamburgerClick 300ms linear forwards';

      for (let node in hamLines) {
        if (hamLines[node].id) {
          hamLines[node].style.margin = '0px 0px';
        }
      }
      nav.style.display = 'flex';

      isHamburgerMenuOpen = true;
      exitHamburgerArea.style.backgroundColor = 'rgb(250,250, 255)';
      exitHamburgerArea.style.filter = 'blur(40px)';
      exitHamburgerArea.style.zIndex = '5';
    } else {
      hamburger.style.animation = 'hamburgerClick 300ms linear reverse';
      nav.style.display = 'none';
      for (let node in hamLines) {
        if (hamLines[node].id) {
          hamLines[node].style.margin = '5px 0px';
        }
      }
      exitHamburgerArea.style.backgroundColor = '';
      exitHamburgerArea.style.filter = '';
      exitHamburgerArea.style.zIndex = '-1';
      isHamburgerMenuOpen = false;
    }
  });

  exitHamburgerArea.addEventListener('click', () => {
    if (isHamburgerMenuOpen) {
      hamburger.style.animation = 'hamburgerClick 300ms linear reverse';
      nav.style.display = 'none';
      for (let node in hamLines) {
        if (hamLines[node].id) {
          hamLines[node].style.margin = '5px 0px';
        }
      }
    }
    exitHamburgerArea.style.backgroundColor = '';
    exitHamburgerArea.style.zIndex = '-1';
    isHamburgerMenuOpen = false;
  });

  // //

  btn.addEventListener('click', () => {
    if (!doubleCheck) {
      window.setInterval(cycleContactVerbs(), 3000);
      btnToSuccessAfterUserConfirms();
      hamburger.style.display = '';
      contactVerb = document.querySelector('#contactSpan');
      welcomeHeader.style.animation = 'successFade 1.5s linear 0ms reverse';
      welcomeHeader.style.height = '100vh';
      welcomeHeader.style.margin = '200px auto';
      // let nav = document.createElement('NAV');
      // nav.innerHTML = navBarHtmlCreation(
      //   'home',
      //   'about',
      //   'resume',
      //   'portfolio',
      //   'contact'
      // );
      // document.body.insertBefore(nav, welcomeHeader);
      allSections.forEach(elem => (elem.style.display = 'flex'));
      footer.classList.remove('firstHidden');
    } else {
      btn.innerText = 'confirm.';
      btn.style.animation = 'slideOver 500ms ease-out 0s 1 forwards';
      doubleCheck = false;
    }
  });

  window.addEventListener('submit', function(e) {
    e.preventDefault();
    let values = document.querySelectorAll('input');
    let valuesTa = document.querySelectorAll('textarea')[0].value;
    let valObj = {};

    for (let key in values) {
      if (values[key].value) {
        valObj[values[key].name] = values[key].value;
      }
    }

    valObj.message = valuesTa;

    window.open(
      `mailto:zacharyadcoding@gmail.com?subject=Hey&body=${valObj.message
        .split(' ')
        .join('%')}`
    );

    console.log(valObj);

    window.location.replace('#home');
    welcomeHeader.innerHTML = `Thank you for contacting me (Zachary Droge). <br/> Please, continue to look around and <a href=\"#contact\"></a>contact me again if you want. Thank you!`;
  });

  function btnToSuccessAfterUserConfirms() {
    btn.style.transform = '';
    btn.innerText = 'Success!';
    confirmMsg.innerText = '';
    btn.style.backgroundColor = 'rgba(0, 100, 0, .5)';
    btn.style.animation = 'successFade 2s linear 0ms 1 ';
    container.style.animation = 'successFade 1s linear 0ms forwards';
    welcomeHeader.style.animation = 'successFade 1.5s linear 0ms forwards';
    welcomeHeader.innerHTML = `Welcome, My name is Zach Droge...<br/> Look around and <a href=\"#contact\">contact me</a> for anything,  like... <br><span id=\"contactSpan\">chat.</span>`;
    container.removeChild(btn);
  }

  function navBarHtmlCreation(...args) {
    returnHTMLString = '';

    args.forEach(elem => {
      returnHTMLString += `<div class="${elem}">
    <a href=\'#${elem}\'> ${elem[0].toUpperCase() + elem.slice(1)}
    </a>
     </div>`;
    });
    return returnHTMLString;
  }

  function cycleContactVerbs() {
    //Some nice, clean closure...
    let counter = contactVerbList.length - 1;
    let colors = ['#1e2722', '#b67f61', '#488284', '#c39a6e', '#a0a483'];
    return () => {
      if (counter && contactVerb) {
        contactVerb.style.color = colors[counter];
        contactVerb.innerHTML = contactVerbList[counter];
        counter--;
      } else {
        counter = contactVerbList.length - 1;
      }
    };
  }
})();
