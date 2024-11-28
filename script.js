async function search() {
    const query = document.getElementById('search-input').value;

    if (!query) {
        alert('لطفا یک عبارت جستجو وارد کنید.');
        return;
    }

    const apiKey = 'AIzaSyAccC3GROeoACiPQ7k6FE8kfzhVQ6oOvAM';
    const cx = 'e7985f2fed7a74698';
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = '';  // پاک کردن نتایج قبلی

        if (data.items) {
            data.items.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `
                    <h3 onclick="loadIframe('${item.link}')">${item.title}</h3>
                    <p>${item.snippet}</p>
                `;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = '<p>نتیجه‌ای یافت نشد.</p>';
        }
    } catch (error) {
        console.error('Error fetching the API:', error);
        alert('مشکلی در جستجو وجود دارد. لطفاً دوباره تلاش کنید.');
    }
}

function loadIframe(url) {
    const iframe = document.getElementById('iframe');
    iframe.src = url;
}

document.getElementById('search-button').addEventListener('click', search);

document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});
// URL پروکسی که شما تنظیم کرده‌اید
const proxyUrl = 'http://46.8.232.80:3128/';
const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

// ارسال درخواست با استفاده از پروکسی
fetch(proxyUrl + apiUrl)
    .then(response => response.json())
    .then(data => {
        displayResults(data.items);
    })
    .catch(error => console.error('Error fetching data:', error));
// تابع برای نمایش نتایج جستجو
function displayResults(items) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    items.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        const resultTitle = document.createElement('h3');
        resultTitle.textContent = item.title;
        resultItem.appendChild(resultTitle);

        const resultSnippet = document.createElement('p');
        resultSnippet.textContent = item.snippet;
        resultItem.appendChild(resultSnippet);

        // نمایش تصویر (اگر موجود باشد)
        if (item.pagemap && item.pagemap.cse_image) {
            const resultImage = document.createElement('img');
            resultImage.src = item.pagemap.cse_image[0].src;
            resultImage.alt = item.title;
            resultItem.appendChild(resultImage);
        }

        resultsContainer.appendChild(resultItem);
    });
}
