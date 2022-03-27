const slider = document.querySelector('input[type=range]');
const pageViews = document.querySelector('.component__page-views');
const price = document.querySelector('.component__amount');
const toggle = document.querySelector('#toggle');
const pricesObj = {
    pageViews: [10,50,100,500,1],
    prices: [8,12,16,24,36],
    discount: []
}

const update = (arr) => {
    for (let i = 1; i <= pricesObj.pageViews.length; i++) {
        if(i == slider.value)
        {
            // pageViews.textContent = `${pricesObj.pageViews[i-1]} pageviews`;
            pageViews.textContent = `${pricesObj.pageViews[i-1]}${pricesObj.pageViews[i-1] != 1 ? 'K':'M'} pageviews`;
            price.textContent = `$` + parseFloat(arr[i-1]) + `.00`;
        }
    }
}
slider.addEventListener('change', ()=> {
    toggle.checked ? update(pricesObj.discount) : update(pricesObj.prices);
});
toggle.addEventListener('click', ()=>
{
    if(toggle.checked)
    {
        let discount = pricesObj.prices.map(price => price * .75)
        pricesObj.discount = [...discount];
        update(discount);
    }
    else
    {
        update(pricesObj.prices);
    }
})
