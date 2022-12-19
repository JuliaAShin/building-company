//block_commertial

let service_button = document.querySelectorAll('.service_button')
let services_p1 = document.getElementById('block_commertial_p1');
let services_h3 = document.querySelector('#block_commertial h3');
let services_p2 = document.getElementById('block_commertial_p2');
let services_p3 = document.getElementById('block_commertial_p3');
let services_img = document.querySelector('#block_commertial img');

let p1Default = services_p1.innerHTML;
let h3Default = services_h3.innerHTML;
let p2Default = services_p2.innerHTML;
let p3Default = services_p3.innerHTML;
let imgDefault = services_img.src;

function displayCommercial() {
    services_p1.innerHTML = p1Default;
    services_h3.innerHTML = h3Default;
    services_p2.innerHTML = p2Default;
    services_p3.innerHTML = p3Default;
    services_img.src = imgDefault;
}

function displayResidential() {
    services_p1.innerHTML = 'Residential';
    services_h3.innerHTML = 'Residential';
    services_p2.innerHTML = `Home security systems, outdoor lighting, and
    surveillance equipment.<br><p>Energy savings, exhaust fans, and
    residential generators</p>`;
    services_p3.innerHTML = 'You may call us';
    services_img.src = 'imgs/JS/residential_js.jpg';
}

function displayIndustrial() {
    services_p1.innerHTML = 'Services for industry';
    services_h3.innerHTML = 'Industrial';
    services_p2.innerHTML = `24-hour customer service is an exciting challenge
    to solve. It typically means your business is expanding or you are taking
    on larger customers.`;
    services_p3.innerHTML = '';
    services_img.src = 'imgs/JS/industrial_js.jpg';
}

service_button[0].onclick = displayCommercial;
service_button[1].onclick = displayResidential;
service_button[2].onclick = displayIndustrial;

service_button.forEach(function(elem) {
    elem.addEventListener('click', function() {
        service_button.forEach(function(elem) {
           return elem.classList.remove('professionalMainServices_button_active')
        })
    return elem.classList.add('professionalMainServices_button_active')
    })
})

//Customer Says

let reviewImages = document.querySelectorAll('.reviewImg');
let btnLeft = document.getElementById('left');
let btnRight = document.getElementById('right');
let customerName = document.getElementById('customerName');
let customerCity = document.getElementById('customerCity');
let review = document.getElementById('review');

let names = ['Nancy Luther','John','Bob','Andrew'];
let cities = ['New York','London','New Orlean','New York'];
let reviewText = [
    `<p>We have had several good experiences with <span>Blue Collar</span> team. 
    Most recently, they replaced our 20-year-old HVAC system with a new, <span>modern,
    and more efficient</span> system &amp; it worked fine.</p>`,

    '<p>Goog Job!<br><br>Thanks.',

    'Excellent service.<br><br> Arrived in time.<br><br>Highly recommend.',

    `First Class Service, I recommend this company. In the future
    I will certainly use them again`
]

let i = 0;
btnRight.addEventListener('click', function() {
    reviewImages[i].style.display = 'none'; 
    customerName.innerHTML = names[i];
    customerCity.innerHTML = cities[i];
    review.innerHTML = reviewText[i];
    i++;
     if(i == reviewImages.length) 
        i = 0;
    reviewImages[i].style.display = 'inline'; 
    customerName.innerHTML = names[i];
    customerCity.innerHTML = cities[i];
    review.innerHTML = reviewText[i];
})

btnLeft.addEventListener('click', function() {
    reviewImages[i].style.display = 'none';
    customerName.innerHTML = names[i];
    customerCity.innerHTML = cities[i];
    review.innerHTML = reviewText[i];
    i--;
        if(i < 0)
           i = reviewImages.length-1;
    reviewImages[i].style.display = 'inline';
    customerName.innerHTML = names[i];
    customerCity.innerHTML = cities[i];
    review.innerHTML = reviewText[i];
}) 






