var PAGE_DATA = {
    items: {
        img: 'solo3.jpg',
        Name: 'Beat SoloX3',
        Description:
            'Ultra Violet, with up to 40 hours of battery life,' +
            '<br/' +
            'Beats SoloX3 Wireless is your perfect everyday headphone.<br/>Get most out of your music and award-winning, emotionally <br/> charged Beats listening experience',
        Price: '$299.95'
    }
};

function loaditemsInfo() {
    var items = PAGE_DATA.items;

    var html = '<img id="ppic" src="' + items.img + '">';
    html += '<h3>' + items.Name + '</h3>';
    html += '<p>' + items.Description + '</p>';
    html += '<p>' + items.Price + '<p>';
    $('#personaldata').html(html);
    $('#items-pic').attr('src', items.img);
}

function main() {
    loaditemsInfo();
}

$(main);
// function main() {
//     $('#game-over').html(
//         'Game Over <i class="fa fa-gamepad" aria-hidden="true"></i>'
//     );
// }

// $(main);
