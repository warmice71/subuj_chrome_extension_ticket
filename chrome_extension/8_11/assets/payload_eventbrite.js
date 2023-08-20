(async function () {
    console.log("Hello Eventbrite");
    var fullText = document.body.innerHTML;
    var sp = fullText.split('<script type="application/ld+json">')[1];
    var mp = JSON.parse(sp.split('</script>')[0].trim());
    var seats = [];
    var totalTicekts = 0;
    var minPrice = 0;
    try {
        for (const item of mp.offers) {
            if (item.availability == 'InStock'
                && new Date(item.availabilityStarts) < new Date()
                && new Date(item.availabilityEnds) > new Date()
            ) {
                const seat = {
                    price: item.price,
                    lowPrice: item.lowPrice,
                    highPrice: item.highPrice,
                    count: item.offerCount
                }
                if (item.offerCount) totalTicekts = totalTicekts + item.offerCount;
                if (item.price) {
                    if (minPrice == 0) minPrice = item.price;
                    if (minPrice > item.price) minPrice = item.price;
                } else if (item.lowPrice) {
                    if (minPrice == 0) minPrice = item.lowPrice;
                    if (minPrice > item.lowPrice) minPrice = item.lowPrice;
                }
                seats.push(seat);
            }
        }
    } catch (error) {
        console.log(error);
    }
    const data = {
        total: totalTicekts,
        seats: seats,
        minPrice: minPrice
    }
    chrome.runtime.sendMessage({ status: true, data: data, type: "eventbrite" });
})();