document.querySelector('html').style.scrollBehavior = 'smooth';
var insertPosition = document.body.children[(document.body.children.length) - 4],
    h2 = document.createElement('h2');

h2.textContent = 'our features';
h2.style.color = '#575757';
h2.style.textTransform = 'uppercase';
h2.style.fontSize = '35px';
h2.style.fontWeight = 'bold';
h2.style.letterSpacing = '1.5px';
h2.style.marginBottom = '50px';

function createHeader() {
    'use strict';
    /*start header*/
    var header = document.createElement('section'),
        nav = document.createElement('nav'),
        container1 = document.createElement('div'),
        headerBtn = document.createElement('button'),
        btnSpan = document.createElement('span'),
        h = document.createElement('h1'),
        hText = document.createTextNode('Pure jS'),
        c = document.createElement('div'),
        link = document.createElement('a'),
        icon = document.createElement('i');

    document.body.insertBefore(header, insertPosition);
    nav.setAttribute('class', 'navbar navbar-expand-lg');
    nav.style.backgroundColor = '#0000008a ';
    headerBtn.setAttribute('class', 'navbar-toggler navbar-dark bg-info');
    headerBtn.setAttribute('type', 'button');
    headerBtn.setAttribute('data-toggle', 'collapse');
    headerBtn.setAttribute('data-target', '#navbarsupportedcontent');
    headerBtn.setAttribute('aria-controls', 'navbarsupportedcontent');
    headerBtn.setAttribute('aria-expanded', 'false');
    headerBtn.setAttribute('aria-label', 'toggle navigation');
    headerBtn.appendChild(btnSpan);
    btnSpan.setAttribute('class', 'navbar-toggler-icon');
    nav.appendChild(c);
    c.setAttribute('class', 'container');
    c.appendChild(h);
    c.appendChild(headerBtn);
    c.appendChild(container1);
    header.setAttribute('class', 'text-center');
    header.appendChild(nav);
    header.appendChild(link);
    link.appendChild(icon);
    link.setAttribute('href', '#features');
    icon.setAttribute('class', 'fas fa-chevron-down');
    icon.style.position = 'absolute';
    icon.style.bottom = '60px';
    icon.style.fontSize = '60px';
    icon.style.color = 'rgb(13 183 200 / 82%)';
    icon.style.transition = 'all .5s ease-in-out';
    icon.onmouseenter = function () { icon.style.transform = 'translateY(-10px)';}; 
    icon.onmouseleave = function () { icon.style.transform = 'translateY(0px)';}; 
    container1.setAttribute('class', 'collapse navbar-collapse');
    container1.setAttribute('id', 'navbarsupportedcontent');
    container1.style.direction = 'rtl';
    /*div elements*/
    var list = document.createElement('ul'),
        liArr = [document.createTextNode('contact'), document.createTextNode('About'), document.createTextNode('features')];

    h.appendChild(hText);
    list.setAttribute('class', 'navbar-nav list-unstyled');
    for (var i = 0; i < 3; i++) {
        var listItems = document.createElement('li'),
            links = document.createElement('a');

        listItems.appendChild(links);
        links.appendChild(liArr[i]);
        list.appendChild(listItems);

        listItems.setAttribute('class', 'nav-item');
        listItems.style.display = 'inline-block';
        listItems.style.padding = '10px 30px';
        listItems.style.fontSize = '18px';

        links.setAttribute('class', 'nav-link')
        links.style.color = 'rgb(223 223 223)';
        links.style.textDecoration = 'none';
        links.style.fontWeight = '600';
        links.style.transition = 'all .5s ease';
        links.onmouseover = function () {
            'use strict';
            this.style.color = '#05cbdf';
        };
        links.onmouseout = function () {
            'use strict';
            this.style.color = 'rgb(223 223 223)';
        };
    }
    container1.appendChild(list);
    /*div elements*/
    header.style.background = 'url(photos/background.jpg)';
    header.style.backgroundRepeat = 'no-repeat';
    header.style.webkitBackgroundSize = 'cover';
    header.style.position = 'relative';
    window.onresize = function () {
        'use strict';
        if (window.innerWidth <= 360) {
            header.style.background = 'url(photos/background2.jpg)';
            header.style.backgroundRepeat = 'no-repeat';
            header.style.webkitBackgroundSize = 'cover';
        } else {
            header.style.background = 'url(photos/background.jpg)';
            header.style.backgroundRepeat = 'no-repeat';
            header.style.webkitBackgroundSize = 'cover';
        }
    };
    header.style.height = '730px';
    header.style.position = 'relative';

    h.style.float = 'left';
    h.style.color = '#0cb7c8';
    h.style.fontWeight = 'bold';
    h.style.marginTop = '5px';

    list.style.float = 'right';
    list.children[0].firstElementChild.setAttribute('href', '#contact');
    list.children[1].firstElementChild.setAttribute('href', '#about');
    list.children[2].firstElementChild.setAttribute('href', '#features');
/*end header*/
};

function createFeatures() {
    'use strict';

    /*start features*/
    var features = document.createElement('section'),
        container2 = document.createElement('div'),
        featuresRow = document.createElement('div'),
        featuresCol = document.createElement('div');

    document.body.insertBefore(features, insertPosition);
    features.appendChild(container2);
    features.setAttribute('id', 'features');
    container2.setAttribute('class', 'container text-center');
    featuresRow.setAttribute('class', 'row');
    container2.appendChild(h2);
    container2.appendChild(featuresRow);
    featuresCol.setAttribute('class', 'col-md-4 col-sm-12');
    featuresRow.appendChild(featuresCol);
    /*div element*/
    var i = document.createElement('i'),
        h3 = document.createElement('h3'),
        p = document.createElement('p'),
        h3Text = document.createTextNode('HTML5'),
        ptext = document.createTextNode('lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

    i.setAttribute('class', 'fas fa-code fa-3x');
    i.style.color = '#0cb7c8';
    i.style.marginBottom = '15px';
    h3.appendChild(h3Text);
    h3.style.color = '#5c5c5c';
    p.appendChild(ptext);

    featuresCol.appendChild(i);
    featuresCol.appendChild(h3);
    featuresCol.appendChild(p);
    for (var i = 0; i < 2; i++) {
        var copyCol = featuresCol.cloneNode(true);
        featuresRow.appendChild(copyCol);
    }
    /*div element*/
    features.style.padding = '40px';
    featuresRow.children[1].firstElementChild.setAttribute('class', 'fab fa-css3 fa-3x');
    featuresRow.children[2].firstElementChild.setAttribute('class', 'fab fa-node-js fa-3x');
    featuresRow.children[1].children[1].textContent = 'CSS3';
    featuresRow.children[2].children[1].textContent = 'JAVASCRIPT';
/*end features*/
};

function createAbout() {
    'use strict';
    /*start about*/
    var about = document.createElement('section'),
        container3 = document.createElement('div'),
        aboutRow = document.createElement('div'),
        aboutCol1 = document.createElement('div'),
        aboutCol2 = document.createElement('div');

    document.body.insertBefore(about, insertPosition);
    about.appendChild(container3);
    about.setAttribute('id', 'about');
    container3.setAttribute('class', 'container-fluid');
    aboutRow.setAttribute('class', 'row');
    container3.appendChild(aboutRow);
    aboutCol1.setAttribute('class', 'col-lg-6 col-sm-12');
    aboutCol2.setAttribute('class', 'col-lg-6 col-sm-12');
    aboutRow.appendChild(aboutCol1);
    aboutRow.appendChild(aboutCol2);

    /*div element*/
    aboutCol1.style.backgroundImage = 'url(photos/about.jpg)';
    aboutCol1.style.backgroundRepeat = 'no-repeat';
    aboutCol1.style.backgroundSize = 'cover';
    aboutCol1.style.backgroundPositionX = 'center';
    aboutCol1.style.backgroundPositionY = 'center';
    aboutCol1.style.minHeight = '300px';

    var abouth2 = document.createElement('h2'),
        aboutP1 = document.createElement('p'),
        aboutP2 = document.createElement('p'),
        h2Text = document.createTextNode('about us'),
        p1text = document.createTextNode('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'),
        p2text = document.createTextNode('It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'),
        aboutBtn = document.createElement('button');


    abouth2.appendChild(h2Text);
    aboutP1.appendChild(p1text);
    aboutP2.appendChild(p2text);

    aboutBtn.textContent = 'see more';
    aboutBtn.setAttribute('class', 'btn-info btn-lg');

    aboutCol2.appendChild(abouth2);
    aboutCol2.appendChild(aboutP1);
    aboutCol2.appendChild(document.createElement('br'));
    aboutCol2.appendChild(aboutP2);
    aboutCol2.appendChild(aboutBtn);

    aboutCol2.style.padding = '50px';
    aboutCol2.style.backgroundColor = '#f0f0f0';

    abouth2.style.color = '#0db7c8';
    abouth2.style.textTransform = 'uppercase';
    abouth2.style.fontSize = '35px';
    abouth2.style.letterSpacing = '1.3px';
    abouth2.style.marginBottom = '50px';

    aboutP1.style.color = '#6a6a6a';
    aboutP1.style.letterSpacing = '1px';
    aboutP1.style.fontSize = '17px';
    aboutP2.style.color = '#6a6a6a';
    aboutP2.style.letterSpacing = '1px';
    aboutP2.style.fontSize = '17px';

    aboutBtn.style.marginTop = '50px';
/*div element*/

/*end about*/
};

function createcontact() {
    'use strict';
    /*start contact*/
    var contact = document.createElement('section'),
        container4 = document.createElement('div');

    document.body.insertBefore(contact, insertPosition);
    var h2copy = h2.cloneNode();
    container4.appendChild(h2copy);
    h2copy.textContent = 'contact us';
    contact.appendChild(container4);
    contact.setAttribute('id', 'contact');
    contact.style.padding = '50px 0';
    container4.setAttribute('class', 'container text-center');
    /*div element*/
    var form = document.createElement('form'),
        input = document.createElement('input'),
        textarea = document.createElement('textarea'),
        formRow = document.createElement('div'),
        formbtn = document.createElement('button');

    form.setAttribute('class', 'form-group');
    input.setAttribute('class', 'form-control');
    input.setAttribute('type', 'email');
    textarea.setAttribute('class', 'form-control');
    textarea.setAttribute('rows', '8');
    textarea.setAttribute('placeholder', 'Type Your Message');
    formbtn.setAttribute('class', 'form-control');
    form.appendChild(formRow);
    for (var i = 0; i < 2; i++) {
        var input2 = document.createElement('input'),
            formCol = document.createElement('div');

        formRow.setAttribute('class', 'form-row');
        formCol.setAttribute('class', 'col');
        input2.setAttribute('class', 'form-control');
        input2.setAttribute('type', 'text');
        formRow.appendChild(formCol);
        formCol.appendChild(input2);
    }
    container4.appendChild(form);

    form.appendChild(input);
    form.appendChild(textarea);
    form.appendChild(formbtn);

    var x = document.querySelectorAll('.form-control');
    for (var i = 0; i < x.length; i++) {
        x[i].setAttribute('required', '');
    }

    var myinput = document.querySelectorAll('input');
    myinput[0].setAttribute('placeholder', 'First Name');
    myinput[1].setAttribute('placeholder', 'Last Name');
    myinput[2].setAttribute('placeholder', 'Email Address');
    myinput[2].style.marginTop = '20px';
    textarea.style.margin = '20px 0';
    formbtn.textContent = 'Done';
    formbtn.setAttribute('type', 'submit');
    formbtn.style.backgroundColor = 'rgb(12, 183, 200)';
    formbtn.style.color = '#fff';

/*div element*/
/*end contact*/
};

function createFooter() {
    'use strict';
    /*start footer*/
    var footer = document.createElement('section'),
        container5 = document.createElement('div');

    document.body.insertBefore(footer, insertPosition);
    footer.appendChild(container5);
    container5.setAttribute('class', 'container text-center');
    container5.textContent = 'All rights are reserved' + '\u00A9' + 'BASSAM';

    footer.style.padding = '10px';
    footer.style.backgroundColor = '#343a40';
    footer.style.color = '#fff';
/*end footer*/
};

/*call myFunctions*/
createHeader();
createFeatures();
createAbout();
createcontact();
createFooter();

