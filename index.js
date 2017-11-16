var PAGE_DATA = {
    items: [
        {
            img: 'studio.png',
            Name: 'Beats STUDIO3 Wireless',
            Description:
                'Ultra Violet, Apple W1 chip, Wireless Bluetooth,<br>Pure Adaptive Noise Cancelling actively blocks external noise<br>With Fast Fuel, a 10-minute charge gives 3 hours of play when battery is low        ',
            Price: '$349.95'
        },
        {
            img: 'pro.png',
            Name: 'Beats Pro',
            Description:
                'Ultra Fire, clear highs adn deep lows for premium sound quality,<br>Rotating ear cups,<br>Durable housing and cushioned headband for long hours in the studio',
            Price: '$399.95'
        },
        {
            img: 'solo.png',
            Name: 'Beats SOLO3 Wireless',
            Description:
                'Ultra Violet, Connect via Class 1 Bluetooth with your device for wireless listening<br>Up to 40 hours of battery life for multi-day use<br>With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low',
            Price: '$299.95'
        },
        {
            img: 'ep.png',
            Name: 'Beats EP',
            Description:
                'Ultra Violet, Fine-tuned acoustics for the clarity and depth you expect from Beats<br>Durable,lightweight design reinforced with stainless steel<br>Battery-free for unlimited platback<br>Adjustment vertiical sliders for a peronalized fit',
            Price: '$129.95'
        }
    ]
};

function makeItem(item) {
    var html = '<img id="ppic" src="' + item.img + '">';
    html += '<h3>' + item.Name + '</h3>';
    html += '<p>' + item.Description + '</p>';
    html += '<p>' + item.Price + '<p>';
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
}

function main() {
    loaditemsInfo();
}

$(main);
