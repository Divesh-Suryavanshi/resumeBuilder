
module.exports = (values) => {

    let htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
            <style>
                * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                }

                html {
                height: 100%;
                }

                body {
                min-height: 100%;
                background: #eee;
                font-family: "Lato", sans-serif;
                font-weight: 400;
                color: #222;
                font-size: 14px;
                line-height: 26px;
                padding-bottom: 50px;
                }

                .container {
                max-width: 700px;
                background: #fff;
                margin: 0px auto 0px;
                box-shadow: 1px 1px 2px #dad7d7;
                border-radius: 3px;
                padding: 40px;
                margin-top: 50px;
                }

                .header {
                margin-bottom: 30px;
                }
                .header .full-name {
                font-size: 40px;
                text-transform: uppercase;
                margin-bottom: 5px;
                }
                .header .first-name {
                font-weight: 700;
                }
                .header .last-name {
                font-weight: 300;
                }
                .header .contact-info {
                margin-bottom: 20px;
                }
                .header .email,
                .header .phone {
                color: #999;
                font-weight: 300;
                }
                .header .separator {
                height: 10px;
                display: inline-block;
                border-left: 2px solid #999;
                margin: 0px 10px;
                }
                .header .position {
                font-weight: bold;
                display: inline-block;
                margin-right: 10px;
                text-decoration: underline;
                }

                .details {
                line-height: 20px;
                }
                .details .section {
                margin-bottom: 40px;
                }
                .details .section:last-of-type {
                margin-bottom: 0px;
                }
                .details .section__title {
                letter-spacing: 2px;
                color: #54afe4;
                font-weight: bold;
                margin-bottom: 10px;
                text-transform: uppercase;
                }
                .details .section__list-item {
                margin-bottom: 40px;
                }
                .details .section__list-item:last-of-type {
                margin-bottom: 0;
                }
                .details .left,
                .details .right {
                vertical-align: top;
                display: inline-block;
                }
                .details .left {
                width: 60%;
                }
                .details .right {
                text-align: right;
                width: 39%;
                }
                .details .name {
                font-weight: bold;
                }
                .details a {
                text-decoration: none;
                color: #000;
                font-style: italic;
                }
                .details a:hover {
                text-decoration: underline;
                color: #000;
                }
                .details .skills__item {
                margin-bottom: 10px;
                }
                .details .skills__item .right input {
                display: none;
                }
                .details .skills__item .right label {
                display: inline-block;
                width: 20px;
                height: 20px;
                background: #c3def3;
                border-radius: 20px;
                margin-right: 3px;
                }
                .details .skills__item .right input:checked + label {
                background: #79a9ce;
                }
            </style>
            <title>${values['Heading'].firstName}</title>
        </head>
        <body>

        <div class="container">
        <div class="header">
            <div class="full-name">
            <span class="first-name">${values['Heading'].firstName}</span> 
            <span class="last-name">${values['Heading'].lastName}</span>
            </div>
            <div class="contact-info">
            <span class="email">Email: </span>
            <span class="email-val">${values['Heading'].email}</span>
            <span class="separator"></span>
            <span class="phone">Phone: </span>
            <span class="phone-val">${values['Heading'].phone}</span>
            </div>
            
            <div class="about">
                <span class="position">${values['Final'].position}</span>
                <span class="desc">${values['Final'].summary}</span>
            </div>
        </div>
        <div class="details">
            <div class="section">
            <div class="section__title">Experience</div>
            <div class="section__list">
                <div class="section__list-item">
                <div class="left">
                        <div class="name">${values['Experience'].cName}</div>
                        <div class="addr">${values['Experience'].city}, ${values['Experience'].state}, ${values['Experience'].country}</div>
                </div>
                <div class="right">
                        <div class="name">${values['Experience'].job}</div>
                        <div class="duration"><small>Sep 2020 - July 2024</small></div>
                </div>
                <div class="desc" style="margin-top: 1rem">${values['Experience'].jobDesc}</div>
                </div>

            </div>
            </div>
            <div class="section">
            <div class="section__title">Education</div>
            <div class="section__list">
                <div class="section__list-item">
                <div class="left">
                    <div class="name">${values['Education'].instituteName}</div>
                    <div class="addr">Meerut, Uttar Pradesh</div>
                    <div class="duration"><small>Sep 2020 - July 2024</small></div>
                </div>
                <div class="right">
                    <div class="name">${values['Education'].degree} in ${values['Education'].fOS}</div>
                </div>
                </div>
                <div class="section__list-item">
                <div class="left">
                    <div class="name">CVPS</div>
                    <div class="addr">Meerut, Uttar Pradesh</div>
                    <div class="duration"><small>Apr 2019 - Jun 2020</small></div>
                </div>
                <div class="right">
                    <div class="name">Intermediate</div>
                </div>
                </div>

            </div>
            
        </div>
            <div class="section">
            <div class="section__title">Projects</div> 
            <div class="section__list">
                    <div class="section__list-item">
                    <div class="name">${values['Projects'].name}</div>
                    <div class="text">${values['Projects'].desc}</div>
                </div>
                
                <div class="section__list-item">
                    <div class="name">${values['Projects'].name2}</div>
                    <div class="text">${values['Projects'].desc2}</div>
                </div>
            </div>
            </div>
            <div class="section">
            <div class="section__title">Skills</div>
            <div class="skills">
                <div class="skills__item">
                <div class="left">
                    <div class="name">
                        MERN
                    </div>
                </div>
                <div class="right">
                                <input  id="ck1" type="checkbox" checked />

                    <label for="ck1"></label>
                                <input id="ck2" type="checkbox" checked />

                    <label for="ck2"></label>
                                <input id="ck3" type="checkbox" checked />

                    <label for="ck3"></label>
                                <input id="ck4" type="checkbox" />
                    <label for="ck4"></label>
                                <input id="ck5" type="checkbox" />
                    <label for="ck5"></label>

                </div>
                </div>
                
            </div>
            <div class="skills__item">
                <div class="left"><div class="name">
                    CSS</div></div>
                <div class="right">
                                <input  id="ck1" type="checkbox" checked/>

                    <label for="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>

                    <label for="ck2"></label>
                                <input id="ck3" type="checkbox" />

                    <label for="ck3"></label>
                                <input id="ck4" type="checkbox" />
                    <label for="ck4"></label>
                                <input id="ck5" type="checkbox" />
                    <label for="ck5"></label>

                </div>
                </div>
                
            </div>
            <div class="section">
            <div class="section__title">
            Interests
            </div>
            <div class="section__list">
                <div class="section__list-item">
                        ${values['Final'].interests}
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </body>
        </html>`;

    return htmlTemplate;
}