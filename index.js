///////BUY//////
var PAGE_DATA = {
    items: [
        {
            img: 'images/studio.png',
            Name: 'Beats STUDIO3 Wireless',
            Description:
                'Apple W1 chip, Wireless Bluetooth,<br>Pure Adaptive Noise Cancelling actively blocks external noise<br>With Fast Fuel, a 10-minute charge gives 3 hours of play when battery is low        ',
            Price: '349.95',
            quantity: '5'
        },
        {
            img: 'images/pro.png',
            Name: 'Beats Pro',
            Description:
                'Clear highs adn deep lows for premium sound quality,<br>Rotating ear cups,<br>Durable housing and cushioned headband for long hours in the studio',
            Price: '399.95',
            quantity: '6'
        },
        {
            img: 'images/solo.png',
            Name: 'Beats SOLO3 Wireless',
            Description:
                'Connect via Class 1 Bluetooth with your device for wireless listening<br>Up to 40 hours of battery life for multi-day use<br>With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low',
            Price: '299.95',
            quantity: '2'
        },
        {
            img: 'images/ep.png',
            Name: 'Beats EP',
            Description:
                'Fine-tuned acoustics for the clarity and depth you expect from Beats<br>Durable,lightweight design reinforced with stainless steel<br>Battery-free for unlimited platback<br>Adjustment vertiical sliders for a peronalized fit',
            Price: '129.95',
            quantity: '7'
        }
    ]
};

function makeItem(i) {
    var item = PAGE_DATA.items[i];
    var html = '<div class="col-lg-4 col-sm-12">';
    html += '<img class="ppic" src="' + item.img + '">';
    html += '<h3>' + item.Name + '</h3>';
    html += '<p>' + item.Description + '</p>';
    html += '<p><strong><h4>' + '$' + item.Price + '</h4></strong></p>';
    html += '<p>Quantity: ' + item.quantity + '</p>';
    html +=
        '<button type="button" class="btn btn-default" onclick="RemoveQuantity(' +
        i +
        ')">' +
        '<i class="fa fa-apple" aria-hidden="true"></i>Purchase' +
        '</button>';
    html += '</div>';
    return html;
}

function loaditemsInfo() {
    var html = '';
    for (var c = 0; c < PAGE_DATA.items.length; c++) {
        html += makeItem(c);
    }
    $('#personaldata').html(html);
    $('#btn').click(function() {
        $('#Create').toggle();
    });
    $('#btn2').click(function() {
        $('#Create2').toggle();
    });
}
/////Sell///
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
// -------Make sell-----
function makeBeatsObj() {
    return {
        img: $('#imagename').val(),
        Name: $('#Name-input').val(),
        Description: $('#Description-input').val(),
        Price: $('#Price-input').val()
    };
}
// -------shopping cart -----

function RemoveQuantity(i) {
    var instock = PAGE_DATA.items[i].quantity;
    instock = Math.max(0, instock - 1);
    PAGE_DATA.items[i].quantity = instock;
    loaditemsInfo();
}

function main() {
    loaditemsInfo();
    addNameValidation();
    addDescriptionValidation();
    addPriceValidation();
    $('#submit-form').on('submit', function(event) {
        event.preventDefault();
        PAGE_DATA.items.splice(0, 0, makeBeatsObj());
        loaditemsInfo();
    });
}

$(main);
