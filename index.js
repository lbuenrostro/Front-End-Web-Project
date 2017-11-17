///////BUY//////
var PAGE_DATA = {
    items: [
        {
            img: 'studio.png',
            Name: 'Beats STUDIO3 Wireless',
            Description:
                'Apple W1 chip, Wireless Bluetooth,<br>Pure Adaptive Noise Cancelling actively blocks external noise<br>With Fast Fuel, a 10-minute charge gives 3 hours of play when battery is low        ',
            Price: '$349.95',
            button:
                '<button type="button" id="btn3" class="btn btn-default">' +
                '<i class="fa fa-apple" aria-hidden="true"></i>Purchase' +
                '</button>' +
                '<br/>' +
                '<small id="btn3" class="form-text text-muted">' +
                'Taxes & shipping included</small>'
        },
        {
            img: 'pro.png',
            Name: 'Beats Pro',
            Description:
                'Clear highs adn deep lows for premium sound quality,<br>Rotating ear cups,<br>Durable housing and cushioned headband for long hours in the studio',
            Price: '$399.95',
            button:
                '<button type="button" id="btn4" class="btn btn-default">' +
                '<i class="fa fa-apple" aria-hidden="true"></i>Purchase' +
                '</button>' +
                '<br/>' +
                '<small id="btn4" class="form-text text-muted">' +
                'Taxes & shipping included</small>'
        },
        {
            img: 'solo.png',
            Name: 'Beats SOLO3 Wireless',
            Description:
                'Connect via Class 1 Bluetooth with your device for wireless listening<br>Up to 40 hours of battery life for multi-day use<br>With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low',
            Price: '$299.95',
            button:
                '<button type="button" id="btn5" class="btn btn-default">' +
                '<i class="fa fa-apple" aria-hidden="true"></i>Purchase' +
                '</button>' +
                '<br/>' +
                '<small id="btn5" class="form-text text-muted">' +
                'Taxes & shipping included</small>'
        },
        {
            img: 'ep.png',
            Name: 'Beats EP',
            Description:
                'Fine-tuned acoustics for the clarity and depth you expect from Beats<br>Durable,lightweight design reinforced with stainless steel<br>Battery-free for unlimited platback<br>Adjustment vertiical sliders for a peronalized fit',
            Price: '$129.95',
            button:
                '<button type="button" id="btn6" class="btn btn-default">' +
                '<i class="fa fa-apple" aria-hidden="true"></i>Purchase' +
                '</button>' +
                '<br/>' +
                '<small id="btn6" class="form-text text-muted">' +
                'Taxes & shipping included</small>'
        }
    ]
};

function makeItem(item) {
    var html = '<img id="ppic" src="' + item.img + '">';
    html += '<h3>' + item.Name + '</h3>';
    html += '<p>' + item.Description + '</p>';
    html += '<p>' + item.Price + '<p>' + item.button;
    return html;
}

function loaditemsInfo() {
    var items = PAGE_DATA.items;
    var html = items
        .map(function(item) {
            return makeItem(item);
        })
        .join('<hr>');
    $('#personaldata').html(html);
    $('#items-pic').attr('src', items.img);
    $('#btn').click(function() {
        $('#Create').toggle();
    });
    $('#btn2').click(function() {
        $('#Create2').toggle();
    });
    $('#btn3').on('click', function() {
        alert('Added to your bag! Thanks for the purchase');
        $('#btn3').attr('disabled', true);
    });
    $('#btn4').on('click', function() {
        alert('Added to your bag! Thanks for the purchase');
        $('#btn4').attr('disabled', true);
    });
    $('#btn5').on('click', function() {
        alert('Added to your bag! Thanks for the purchase');
        $('#btn5').attr('disabled', true);
    });
    $('#btn6').on('click', function() {
        alert('Added to your bag! Thanks for the purchase');
        $('#btn6').attr('disabled', true);
    });
}
///////Sell///
// *****Name FUNCTIONS*****//
function onlyLetters(string) {
    var letters = /[a-z]/i;
    if (letters.test(string)) {
        return true;
    }
    return false;
}
function checkingNameError(string) {
    var characters = [];
    if (string.length < 3) {
        characters.push('<li>Please Enter a valid name</li>');
    }
    if (onlyLetters(string) == false) {
        characters.push('<li>Invalid Only letters</li>');
    }
    return characters.join('');
}
function NameErrorHtml(name) {
    const html = checkingNameError(name);
    $('#Name-errors').html(html);
}

function addNameValidation() {
    const input = $('#Name-input');
    input.on('input', function(event) {
        NameErrorHtml(event.currentTarget.value);
        enableButton();
    });
}

// ********Description FUNCTION***********
function onlyLetters(string) {
    var letters = /[a-z]/i;
    if (letters.test(string)) {
        return true;
    }
    return false;
}
function checkingDescriptionError(string) {
    var characters = [];
    if (string.length < 3) {
        characters.push('<li>Write a small description of item</li>');
    }
    if (onlyLetters(string) == false) {
        characters.push('<li>Invalid Only letters</li>');
    }
    return characters.join('');
}
function DescriptionErrorHtml(Description) {
    const html = checkingDescriptionError(Description);
    $('#Description-errors').html(html);
}

function addDescriptionValidation() {
    const input = $('#Description-input');
    input.on('input', function(event) {
        DescriptionErrorHtml(event.currentTarget.value);
        enableButton();
    });
}

// *****Price FUNCTIONS**************

function containsNum(Price) {
    var num = /[$0-9]/;
    if (num.test(Price)) {
        return true;
    }
    return false;
}
function checkingPriceError(string) {
    var characters = [];
    if (containsNum(string) == false) {
        characters.push('<li>Price must contain "$" & number</li>');
    }
    return characters.join('');
}

function PriceErrorHtml(Price) {
    const html = checkingPriceError(Price);
    $('#Price-errors').html(html);
}

function addPriceValidation() {
    const input = $('#Price-input');
    input.on('input', function(event) {
        PriceErrorHtml(event.currentTarget.value);
        enableButton();
    });
}

// -------------- ENABLE BUTTON -----------

function checkValidName() {
    return checkingNameError($('#Name-input').val()).trim() === '';
}
function checkValidDescription() {
    return (
        checkingDescriptionError($('#Description-input').val()).trim() === ''
    );
}
function checkValidPrice() {
    return checkingPriceError($('#Price-input').val()).trim() === '';
}
function enableButton() {
    if (checkValidName() && checkValidDescription() && checkValidPrice()) {
        $('.btn').attr('disabled', false);
    } else {
        $('.btn').attr('disabled', true);
    }
}
// -------------- JSON PAGE-DATA -----------
$('#submit-form').on('submit', function(event) {
    event.preventDefault();
    var name = $('#Name-input').val();
    console.log(name);
    var Description = $('#Description-input').val();
    console.log(Description);
    var Price = $('#Price-input').val();
    console.log(Price);
});

function postServer() {
    $('#submit-form').on('submit', function(event) {
        $.post(
            'https://bcca-chirper.herokuapp.com/api/submit/',
            JSON.stringify({
                name: $('#Name-input').val(),
                Description: $('#Description-input').val(),
                Price: $('#Price-input').val()
            })
        )
            .then(function successfullsubmit(data) {
                console.log(data);
            })
            .catch(function unsuccessfulsubmit(response) {
                console.log(response.status);
                console.log(response.response.JSON);
            });
    });
}

// -------------- Log-in -----------
function loginServer() {
    $('#login-form').on('submit', function(event) {
        event.preventDefault();
        $.post(
            'https://bcca-chirper.herokuapp.com/api/login/',
            JSON.stringify({
                Description: $('#User').val(),
                password: $('#Pass').val()
            })
        )
            .then(function successfulLogin(data) {
                // console.log('Hello World');
                window.location = 'profile/profile.html';
                console.log(data);
            })
            .catch(function unsuccessfulLogin(response) {
                console.log();
                console.log(response.status);
                console.log(response.response.JSON);
            });
    });
}
// ------------------------------------------
function main() {
    loaditemsInfo();
    addNameValidation();
    addDescriptionValidation();
    addPriceValidation();
    addpasswordValidation();
    postServer();
    loginServer();
}

$(main);
