let dataNav = [
    {
    title: 'Startup 3',
    menu: [
        {name:'Tour'},
        {name:'Prices'},
        {name:'About'},
        {name:'F.A.Q.'},
        {name:'Support'}
    ],
    option: {
        option1: 'Login',
        option2: 'Sign Up'
    }

    }
];

let View = {};

View.formatNavMenu = function(name) {
    let template = document.querySelector("#navMenu-template");
    let html = template.innerHTML;
    html = html.replace('{{navMenu_name}}', name);
    return html;
}

View.formatNav = function(r) {
    let template = document.querySelector('#nav-template');
    let html = template.innerHTML;
    html = html.replace('{{nav_title}}', r.title);
    html = html.replace('{{nav_button1}}', r.option.option1);
    html = html.replace('{{nav_button2}}', r.option.option2);

    let items = "";
    for(let men of r.menu) {
        items = items + View.formatNavMenu(men.name);
    }
    html = html.replace('{{nav_list}}', items);
    
    
    return html;
    
}

View.renderNav = function(data){
    let all = "";
    for(let nv of data) {
        all = all + View.formatNav(nv);
    }
    let div = document.querySelector('.nav');
    div.innerHTML=all;
}

View.renderNav(dataNav);

let dataHeader = [
    {
        title: 'Simple and beautiful ready for use blocks',
        video: '/assets/sky.mp4'
    }
]


View.formatHeader = function(r) {
    let template = document.querySelector('#header-template');
    let html = template.innerHTML;
    html = html.replace('{{header_title}}', r.title);
    html = html.replace('{{header_url}}', r.video);
   
    return html;
    
}

View.renderHeader = function(data){
    let all = "";
    for(let head of data) {
        all = all + View.formatHeader(head);
    }
    let div = document.querySelector('.header');
    div.innerHTML=all;
}

View.renderHeader(dataHeader);

let dataContent = [
    {
        title: 'OUR CLIENTS',
        desc: 'Folks at these Awesome Companies are Already Using Startup Framework',
        logo: [
            {image: 'assets/amazon.png', name:'amazon'},
            {image: 'assets/netflix.png', name:'netflix'},
            {image: 'assets/mashable.png', name:'mashable'},
            {image: 'assets/atlassian.png', name:'atlassian'},
            {image: 'assets/forbes.png', name:'forbes'}
        ]        
    }
]


View.formatContentLogo = function(image, name) {
    let template = document.querySelector("#contentLogo-template");
    let html = template.innerHTML;
    html = html.replace('{{content_logoUrl}}', image);
    html = html.replace('{{content_logoName}}', name);
    return html;
}


View.formatContent = function(r) {
    let template = document.querySelector('#content-template');
    let html = template.innerHTML;
    html = html.replace('{{content_title}}', r.title);
    html = html.replace('{{content_desc}}', r.desc);

    let items = "";
    for(let log of r.logo) {
        items = items + View.formatContentLogo(log.image, log.name);
    }
    html = html.replace('{{content_logoList}}', items);

    return html;
    
}

View.renderContent = function(data){
    let all = "";
    for(let cont of data) {
        all = all + View.formatContent(cont);
    }
    let div = document.querySelector('.contents');
    div.innerHTML=all;
}

View.renderContent(dataContent);

let dataFeature = [
    {
        title: 'More Than Images',
        desc: 'We perpared some high-qulity photos, that you can use in your projects. When you have to show your application or website on iphone, iPad or Macbook you can use these images.',
        option: {
            option1: 'Download Photos',
            option2: 'Learn More'
        },
        image: 'assets/Nature-Paysage.jpg'
    }
]


View.formatFeature = function(r) {
    let template = document.querySelector('#feature-template');
    let html = template.innerHTML;
    html = html.replace('{{feature_title}}', r.title);
    html = html.replace('{{feature_desc}}', r.desc);
    html = html.replace('{{feature_button1}}', r.option.option1);
    html = html.replace('{{feature_button2}}', r.option.option2);
    html = html.replace('{{feature_url}}', r.image);

    return html;
    
}

View.renderFeature = function(data){
    let all = "";
    for(let feat of data) {
        all = all + View.formatFeature(feat);
    }
    let div = document.querySelector('.features');
    div.innerHTML=all;
}

View.renderFeature(dataFeature);

let dataForms = [
    {
        title: 'Sign In',
        info: {
            email: 'Your email',
            password: 'Your password'
        },        
        button: 'Sign In',
        option: {
            optionAcc1: 'Don’t have an account? ',
            optionAcc2: 'Sign Up',
            optionPasswd: 'Forgot Password?',
        }
    }
]


View.formatForms = function(r) {
    let template = document.querySelector('#forms-template');
    let html = template.innerHTML;
    html = html.replace('{{forms_title}}', r.title);
    html = html.replace('{{forms_email}}', r.info.email);
    html = html.replace('{{forms_password}}', r.info.password);
    html = html.replace('{{forms_optPasswd}}', r.option.optionPasswd);
    html = html.replace('{{forms_button}}', r.button);
    html = html.replace('{{forms_optAcc1}}', r.option.optionAcc1);
    html = html.replace('{{forms_optAcc2}}', r.option.optionAcc2);

    return html;
    
}

View.renderForms = function(data){
    let all = "";
    for(let frm of data) {
        all = all + View.formatForms(frm);
    }
    let div = document.querySelector('.form');
    div.innerHTML=all;
}

View.renderForms(dataForms);

let dataTestimonial = [
    {
        text:'You can decide whether to create your site using UI Kit blocks or samples. The blocks can merge together in various combinations.',
        profil: {
            photo:'assets/profil.jpg',
            name:'Jordan Bargeman',
            work:'GOOGLE'
        }
    }
]


View.formatTestimonial = function(r) {
    let template = document.querySelector('#testimonial-template');
    let html = template.innerHTML;
    html = html.replace('{{testimonial_text}}', r.text);
    html = html.replace('{{testimonial_profilUrl}}', r.profil.photo);
    html = html.replace('{{testimonial_profilName}}', r.profil.name);
    html = html.replace('{{testimonial_profilWork}}', r.profil.work);
   
    return html;
    
}

View.renderTestimonial = function(data){
    let all = "";
    for(let tes of data) {
        all = all + View.formatTestimonial(tes);
    }
    let div = document.querySelector('.testimonial');
    div.innerHTML=all;
}

View.renderTestimonial(dataTestimonial);

let dataCallToAction = [
    {
        title:'Create a beautiful, responsive website in under 60 minutes',
        desc:'She gave my mother such a turn, that I have always.',
        button: {
            option1:'Get started',
            option2:'Learn More'
        }
    }
]


View.formatCallToAction = function(r) {
    let template = document.querySelector('#callToAction-template');
    let html = template.innerHTML;
    html = html.replace('{{callToAction_title}}', r.title);
    html = html.replace('{{callToAction_desc}}', r.desc);
    html = html.replace('{{callToAction_btn1}}', r.button.option1);
    html = html.replace('{{callToAction_btn2}}', r.button.option2);
   
    return html;
    
}

View.renderCallToAction = function(data){
    let all = "";
    for(let cal of data) {
        all = all + View.formatCallToAction(cal);
    }
    let div = document.querySelector('.callToAction');
    div.innerHTML=all;
}

View.renderCallToAction(dataCallToAction);

let dataShowcase = [
    {
        title: 'More than 150 components',
        desc: 'Many carefully crafted components to present your business.',
        image: [
            {url: 'assets/showcaseImg/paysageSC1.jpg', name:'mountainNight'},
            {url: 'assets/showcaseImg/paysageSC2.jpg', name:'road'},
            {url: 'assets/showcaseImg/paysageSC3.jpg', name:'hill'},
            {url: 'assets/showcaseImg/paysageSC4.jpg', name:'lake'},
            {url: 'assets/showcaseImg/paysageSC5.jpg', name:'mountain'},
            {url: 'assets/showcaseImg/paysageSC6.jpg', name:'way'},
            {url: 'assets/showcaseImg/paysageSC7.jpg', name:'field'},
            {url: 'assets/showcaseImg/paysageSC8.jpg', name:'sae'},
            {url: 'assets/showcaseImg/paysageSC9.jpg', name:'sunset'},
            {url: 'assets/showcaseImg/paysageSC10.jpg', name:'cave'},
            {url: 'assets/showcaseImg/paysageSC11.jpg', name:'mountain'},
        ],
        button: 'View all Components'       
    }
]


View.formatShowcaseImage = function(url, name) {
    let template = document.querySelector("#showcaseImage-template");
    let html = template.innerHTML;
    html = html.replace('{{showcase_imageUrl}}', url);
    html = html.replace('{{showcase_imageName}}', name);
    return html;
}


View.formatShowcase = function(r) {
    let template = document.querySelector('#showcase-template');
    let html = template.innerHTML;
    html = html.replace('{{showcase_title}}', r.title);
    html = html.replace('{{showcase_desc}}', r.desc);
    html = html.replace('{{showcase_button}}', r.button);

    let items = "";
    for(let im of r.image) {
        items = items + View.formatShowcaseImage(im.url, im.name);
    }
    html = html.replace('{{showcase_imageList}}', items);

    return html;
    
}

View.renderShowcase = function(data){
    let all = "";
    for(let sho of data) {
        all = all + View.formatShowcase(sho);
    }
    let div = document.querySelector('.showcase');
    div.innerHTML=all;
}

View.renderShowcase(dataShowcase);

let dataTeam = [
    {
        image: [
            {url: 'assets/team1.jpg', name:'personne'},
            {url: 'assets/team2.jpg', name:'personne'}
        ],
        bigImage: {
            url:'assets/team3.jpg',
            name:'personne'
        },
        intro: 'Why Choose Us',
        title: 'Make Your Customers Happy By Giving Services.',
        text: [
            {desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.'},
            {desc:'A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business.'}
        ],
        option: 'Get Started'
    }
]


View.formatTeamImage = function(url, name) {
    let template = document.querySelector("#teamImage-template");
    let html = template.innerHTML;
    html = html.replace('{{team_imageUrl}}', url);
    html = html.replace('{{team_imageName}}', name);
    return html;
}

View.formatTeamText = function(desc) {
    let template = document.querySelector("#teamText-template");
    let html = template.innerHTML;
    html = html.replace('{{team_textDesc}}', desc);
    return html;
}


View.formatTeam = function(r) {
    let template = document.querySelector('#team-template');
    let html = template.innerHTML;
    html = html.replace('{{team_intro}}', r.intro);
    html = html.replace('{{team_title}}', r.title);
    html = html.replace('{{team_button}}', r.option);
    html = html.replace('{{team_bigImageUrl}}', r.bigImage.url);
    html = html.replace('{{team_bigImageName}}', r.bigImage.name);

    let items = "";
    for(let im of r.image) {
        items = items + View.formatTeamImage(im.url, im.name);
    }
    html = html.replace('{{team_imageList}}', items);

    let items2 = "";
    for(let tex of r.text) {
        items2 = items2 + View.formatTeamText(tex.desc);
    }
    html = html.replace('{{team_text}}', items2);

    return html;
    
}

View.renderTeam = function(data){
    let all = "";
    for(let tea of data) {
        all = all + View.formatTeam(tea);
    }
    let div = document.querySelector('.team');
    div.innerHTML=all;
}

View.renderTeam(dataTeam);

let dataContact = [
    {
        title: 'Drop Us a Line',
        desc: 'We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.',
        option: [
            {name: 'Your name'},
            {name: 'Your email'},
        ],
        optionMsg: 'Your message',
        button: "Let's Talk"
    }
]


View.formatContactInput = function(name) {
    let template = document.querySelector("#contactInput-template");
    let html = template.innerHTML;
    html = html.replace('{{contact_optionName}}', name);
    return html;
}


View.formatContact = function(r) {
    let template = document.querySelector('#contact-template');
    let html = template.innerHTML;
    html = html.replace('{{contact_title}}', r.title);
    html = html.replace('{{contact_desc}}', r.desc);
    html = html.replace('{{contact_optionMsg}}', r.optionMsg);
    html = html.replace('{{contact_button}}', r.button);

    let items = "";
    for(let inp of r.option) {
        items = items + View.formatContactInput(inp.name);
    }
    html = html.replace('{{contact_optionList}}', items);

    return html;
    
}

View.renderContact = function(data){
    let all = "";
    for(let conta of data) {
        all = all + View.formatContact(conta);
    }
    let div = document.querySelector('.contact');
    div.innerHTML=all;
}

View.renderContact(dataContact);

let dataPricingTables = [
    {
        title: 'Clear & Simple',
        desc: 'Pricing Plan',
        formule: [
            {forTitle: 'Free', forDesc: '$0/month', forImg: 'assets/eclair.png', forBtn:'Get Started', forLine1:'Up to 5 Members', forLine2:'Backups for 2 Weeks',forLine3:'50 Mb per File', forLine4:'100 Messages'},
            {forTitle: 'Starter', forDesc: '$9.99/month', forImg: 'assets/bombe.png', forBtn:'Get Started', forLine1:'Up to 10 Members', forLine2:'Backups for 2 Month',forLine3:'250 Mb per File', forLine4:'1000 Messages'},
            {forTitle: 'Standart', forDesc: '$19.99/month', forImg: 'assets/coeur.png', forBtn:'Get Started', forLine1:'Up to 20 Members', forLine2:'Backups for 6 Month',forLine3:'Unlimited Size per File', forLine4:'Unlimited Messages'},
            {forTitle: 'Enterprise', forDesc: '$49.99/month', forImg: 'assets/entreprise.png', forBtn:'Get Started', forLine1:'Up to 20 Members', forLine2:'Backups for 12 Month',forLine3:'Unlimited Size per File', forLine4:'Unlimited Messages'},
        ],
    }
]



View.formatPricingTablesFormule = function(forTitle, forDesc, forImg, forBtn, forLine1, forLine2, forLine3, forLine4) {
    let template = document.querySelector("#PricingTablesFormule-template");
    let html = template.innerHTML;
    html = html.replace('{{pricingTables_forTitle}}', forTitle);
    html = html.replace('{{pricingTables_forDesc}}', forDesc);
    html = html.replace('{{pricingTables_forImg}}', forImg);
    html = html.replace('{{pricingTables_forBtn}}', forBtn);
    html = html.replace('{{pricingTables_forLine1}}', forLine1);
    html = html.replace('{{pricingTables_forLine2}}', forLine2);
    html = html.replace('{{pricingTables_forLine3}}', forLine3);
    html = html.replace('{{pricingTables_forLine4}}', forLine4);
    return html;
}


View.formatPricingTables = function(r) {
    let template = document.querySelector('#pricingTables-template');
    let html = template.innerHTML;
    html = html.replace('{{pricingTables_desc}}', r.desc);
    html = html.replace('{{pricingTables_title}}', r.title);

    let items = "";
    for(let fo of r.formule) {
        items = items + View.formatPricingTablesFormule(fo.forTitle, fo.forDesc, fo.forImg, fo.forBtn, fo.forLine1, fo.forLine2,fo.forLine3,fo.forLine4);
    }
    html = html.replace('{{pricingTables_formuleList}}', items);

    return html;
    
}

View.renderPricingTables = function(data){
    let all = "";
    for(let pri of data) {
        all = all + View.formatPricingTables(pri);
    }
    let div = document.querySelector('.pricingTables');
    div.innerHTML=all;
}

View.renderPricingTables(dataPricingTables);

let dataFooter = [
    {
        title: '200,000 users registered since January 2015',
        desc: 'We’ve created the product that will help your startup to look even better',
        optionSub: 'Your email',
        buttonSub: 'Subscribe',
        read: [
            {name: 'Terms of Service'},
            {name: 'Privacy Policy'}
        ],
        menuTitle1: 'About',
        menu1: [
            {name: 'Features'},
            {name: 'Templates'},
            {name: 'Intergrations'},
            {name: 'Team'},
        ],
        menuTitle2: 'Resources',
        menu2: [
            {name: 'Ebooks'},
            {name: 'Infographics'},
            {name: 'Tools'},
            {name: 'Videos'},
            {name: 'Podcasts'},
        ],
        buttonBuy: 'Buy App Now',
        optionBuy: 'or Learn More'
    }
]


View.formatFooterRead = function(name) {
    let template = document.querySelector("#footerRead-template");
    let html = template.innerHTML;
    html = html.replace('{{footer_readName}}', name);
    return html;
}

View.formatFooterMenu1 = function(name) {
    let template = document.querySelector("#footerMenu1-template");
    let html = template.innerHTML;
    html = html.replace('{{footer_Menu1Name}}', name);
    return html;
}

View.formatFooterMenu2 = function(name) {
    let template = document.querySelector("#footerMenu2-template");
    let html = template.innerHTML;
    html = html.replace('{{footer_Menu2Name}}', name);
    return html;
}


View.formatFooter = function(r) {
    let template = document.querySelector('#footer-template');
    let html = template.innerHTML;
    html = html.replace('{{footer_title}}', r.title);
    html = html.replace('{{footer_desc}}', r.desc);
    html = html.replace('{{footer_optionSub}}', r.optionSub);
    html = html.replace('{{footer_buttonSub}}', r.buttonSub);
    html = html.replace('{{footer_menuTitle1}}', r.menuTitle1);
    html = html.replace('{{footer_menuTitle2}}', r.menuTitle2);
    html = html.replace('{{footer_buttonBuy}}', r.buttonBuy);
    html = html.replace('{{footer_optionBuy}}', r.optionBuy);


    let items = "";
    for(let rea of r.read) {
        items = items + View.formatFooterRead(rea.name);
    }
    html = html.replace('{{footer_readList}}', items);

    let items2 = "";
    for(let men1 of r.menu1) {
        items2 = items2 + View.formatFooterMenu1(men1.name);
    }
    html = html.replace('{{footer_menu1List}}', items2);

    let items3 = "";
    for(let men2 of r.menu2) {
        items3 = items3 + View.formatFooterMenu2(men2.name);
    }
    html = html.replace('{{footer_menu2List}}', items3);

    return html;
    
}

View.renderFooter = function(data){
    let all = "";
    for(let foo of data) {
        all = all + View.formatFooter(foo);
    }
    let div = document.querySelector('.footer');
    div.innerHTML=all;
}

View.renderFooter(dataFooter);