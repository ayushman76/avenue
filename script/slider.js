section = () => {
    var body = document.getElementById('body');
    var section = document.createElement('section');
    body.appendChild(section);
    section.innerHTML += '<div class="container"><div class="row"></div><!--//row--></div><!--//container-->'

    var slider_jason = [{
        heading: 'Website is Best Marketing Material',
        para: 'We strongly understand the value of a good website & App. A website is not just few pages on your domain but is reflection of your business and its standards. A website is what search engines need to make you visible. Each word on website is content and today content is king. We have proven again and again that website design and development is art which involves technology.',
        btn: '8224973413'
    }, {
        img: 'images/slider.gif'
    }]

    document.querySelector('section>.container>.row').innerHTML += `
        <div class="col-md-6"> 
            <div class="myslider_content">
                <h2>${slider_jason[0].heading}</h2>
                <p>${slider_jason[0].para}</p>
                <a href="tel:${slider_jason[0].btn}" class="my_btn">Call Now</a>
            </div>
        </div>
        <!--//col-md-6-->
        <div class="col-md-6"> 
            <div class="pad-10">
                <img src="${slider_jason[1].img}" class="img-responsive">
            </div>
        </div>
        <!--//col-md-6-->
    `;
}

section();