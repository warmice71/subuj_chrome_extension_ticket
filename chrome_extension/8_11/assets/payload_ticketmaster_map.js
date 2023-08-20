console.log("map script loaded");
var priceData = null;
var seatData = null;
var colorsets = [
    "MidnightBlue",
    "Blue",
    "MediumSlateBlue",
    "DeepSkyBlue",
    "LightBlue",
    "DarkTurquoise",
    'Peru',
    'SandyBrown',
    'NavajoWhite',
    'DarkKhaki',
    'Yellow'
];
var customColor_Show = false;
var original_colors = {};

chrome.runtime.onMessage.addListener(function (response) {

    if (document.querySelector('#edp-map-container') && response && response.type == 'ticketmaster_map') {
        var npriceData = response.data.priceData;
        priceData = [];
        for (let i = 0; i < npriceData.length; i++) {
            if (npriceData[i].primary > 0) priceData.push(npriceData[i]);
        }
        for (let i = 0; i < colorsets.length; i++) {
            if (i >= priceData.length) break;
            priceData[i].color = colorsets[i];
        }
        for (let i = 0; i < priceData.length; i++) {
            if (!priceData[i].color) priceData[i].color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
        seatData = response.data.seatData;
        for (let i = 0; i < seatData.length; i++) {
            if (seatData[i].ticketType == 'primary') {
                for (let j = 0; j < priceData.length; j++) {
                    if (priceData[j].price == seatData[i].min) {
                        seatData[i].color = priceData[j].color;
                    }
                }
            } else if (seatData[i].ticketType == 'resale') {
                seatData[i].color = 'red';
            } else {
                seatData[i].color = 'darkred';
            }
        }
        showBox();

    }
})

function showBox() {
    if (document.querySelector('#priceData-box')) {
        document.querySelector('#priceData-box').remove();
    }
    var myHTML = document.createElement('div');
    let resaleColor = window.localStorage.getItem('resaleColor');
    if (!resaleColor) resaleColor = '#ff0000';
    let platinumColor = window.localStorage.getItem('platinumColor');
    if (!platinumColor) platinumColor = '#8B0000';
    var html = `
        <button title="Close" class="unbutton" id="btn-close-colorMap" name="back" style="position: absolute;right: 10px;"><svg class="icon-close" role="img" aria-hidden="true" focusable="false"><use xlink:href="/edp/v1/static/ccp/img/sprite.svg#icon-plus"></use></svg><span class="quick-picks-pane__ada-text">Go Back</span></button>
        <h4 style="text-align: center;font-size: 20px;">Price Level</h4>
        <div style="width:100%; margin-top: 3px; margin-bottom: 10px; padding-left: 14px;display: flex;">
            <button style="background-color: deepskyblue;border: none; border-right: 1px solid;" id="btn-setCustoncolor">Custom</button>
            <button style="background-color: deepskyblue;border: none; border-right: 1px solid;" id="btn-setcolor">Set Color On Map</button>
            <button style="background-color: #5c6064;border: none; color: white;" id="btn-resetcolor">Reset</button>
        </div>
        <div style="width: 100%;padding-left: 15px; display: none;" id="customColor-show">
            <div style="display: block; margin-right: 20px; float: right;">
                <input type="number" placeholder="From" style="width:50px;" id="customColorPriceFrom" value="0"/>-
                <input type="number" placeholder="To" style="width:50px;" id="customColorPriceTo" value="0"/>
                <input type="color" id="colorpicker" value="#0000ff"/>
            </div>
            <div style="display: block; margin-top: 5px; margin-right: 20px; float: right;">
                <label style="font-size: 14px; display: inline-block; margin-right: 7px;">Resale:</label>
                <input type="color" id="colorpicker-resale" value="${resaleColor}"/>
            </div>
            <div style="display: block; margin-top: 5px; margin-bottom:5px; margin-right: 20px; float: right;">
                <label style="font-size: 14px; display: inline-block; margin-right: 7px;">Platinum-VIP:</label>
                <input type="color" id="colorpicker-platinum" value="${platinumColor}"/>
            </div>

        </div>
        <div style="overflow-y:auto; height: 250px; width: 100%;" id="price-body">
            <ul class="legend__items">
    `;
    for (let i = 0; i < priceData.length; i++) {
        html = html +
            `<li class="legend__item"">
            <div class="legend__item-info">
                <div style="display: inline-flex;">
                    <div style="background-color: ${priceData[i].color};width: 35px;height: 15px;"></div>
                </div>
                <span style="font-size: 15px;">$${priceData[i].price} (${priceData[i].count})</span>
            </div>
        </li>`;
    }
    html = html + `</ul></div>`;
    myHTML.innerHTML = html;
    myHTML.style = 'border: 1px solid black;position: absolute;width: 220px;height: 350px;background: rgba(255, 255, 255, 0.9);left: 60px;bottom: 60px;padding: 5px;'
    myHTML.setAttribute('id', 'priceData-box');
    document.querySelector('body').append(myHTML);

    document.querySelector('#btn-setcolor').addEventListener("click", function () {
        setColorOnMap();
    })
    document.querySelector('#btn-close-colorMap').addEventListener("click", function () {
        document.querySelector('#priceData-box').remove();
    })
    document.querySelector('#btn-setCustoncolor').addEventListener("click", function () {
        if (customColor_Show == false) {
            customColor_Show = true;
            document.querySelector('#customColor-show').style.display = 'block';
            document.querySelector('#price-body').style.height = '180px';
        } else {
            customColor_Show = false;
            document.querySelector('#customColor-show').style.display = 'none';
            document.querySelector('#price-body').style.height = '280px';
        }

    })

    document.querySelector('#btn-resetcolor').addEventListener("click", function () {
        for (const [key, value] of Object.entries(original_colors)) {
            try {
                document.querySelector('#' + key).setAttribute('style', 'fill: ' + value + ';');
            } catch (error) {
                
            }
        }
    })

}

function setColorOnMap() {

    resaleColor = document.querySelector('#colorpicker-resale').value;
    platinumColor = document.querySelector('#colorpicker-platinum').value;
    window.localStorage.setItem('resaleColor', resaleColor)
    window.localStorage.setItem('platinumColor', platinumColor)

    for (let i = 0; i < seatData.length; i++) {
        const seat = seatData[i];
        const places = seat.places;

        for (let j = 0; j < places.length; j++) {
            const placeID = places[j];

            let color = 'dark';
            try {
                if (seat.ticketType == 'primary') {
                    var fromPrice = document.querySelector('#customColorPriceFrom').value;
                    var toPrice = document.querySelector('#customColorPriceTo').value;
                    if (customColor_Show && fromPrice <= seat.min && toPrice >= seat.min) {
                        color = document.querySelector('#colorpicker').value;
                    } else {
                        color = seat.color;
                    }
                } else if (seat.ticketType == 'resale')
                    color = resaleColor;
                else if (seat.ticketType == '')
                    color = platinumColor;
                if (document.querySelector('#' + placeID)) {
                    original_colors[placeID] = window.getComputedStyle(document.querySelector('#' + placeID)).fill;
                    document.querySelector('#' + placeID).setAttribute('style', 'fill: ' + color + ';');
                }


            } catch (error) {
                console.log(error);
            }

        }
    }
    console.log("original colors");
    console.log(original_colors);

}