﻿# Zexa-Browser
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Zexa-Browser Project</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            color: #333;
            padding: 20px;
        }
        h1, h2 {
            color: #1a73e8;
        }
        p, ul {
            font-size: 16px;
            margin-bottom: 10px;
        }
        ul {
            list-style-type: disc;
            padding-left: 20px;
        }
        pre {
            background-color: #282c34;
            color: white;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        .highlight {
            color: #ff6347;
            font-weight: bold;
        }
        footer {
            text-align: center;
            font-size: 14px;
            margin-top: 20px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Zexa-Browser</h1>
        <p>Welcome to <strong>Zexa-Browser</strong>! A sleek, responsive, and modern web browser built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. This browser leverages the Google Custom Search API to allow users to perform searches directly within the browser, bringing a smooth and efficient search experience.</p>
        <h2>Features</h2>
        <ul>
            <li><strong>Custom Google Search</strong>: Perform searches directly using Google's search engine through the browser interface.</li>
            <li><strong>Responsive Design</strong>: Fully responsive and adaptive to any screen size, providing an optimal experience on desktop, tablet, and mobile devices.</li>
            <li><strong>Modern UI</strong>: A user-friendly interface with a clean, minimalistic design that includes a search bar, logo, and custom-styled buttons.</li>
            <li><strong>Integrated Results</strong>: The search results are presented beautifully, providing users with all the relevant information in an organized and easy-to-read format.</li>
            <li><strong>Customizable</strong>: You can change the logo, themes, and integrate new features as needed.</li>
        </ul>
        <h2>Installation</h2>
        <p>To get started, follow these simple steps:</p>
        <ol>
            <li>Clone the repository:</li>
            <pre><code>git clone https://github.com/your-username/Zexa-Browser.git</code></pre>
            <li>Navigate to the project directory:</li>
            <pre><code>cd Zexa-Browser</code></pre>
            <li>Open the <strong>index.html</strong> file in your browser:</li>
            <pre><code>open index.html</code></pre>
        </ol>
        <h2>How It Works</h2>
        <p>The Zexa-Browser uses the <strong>Google Custom Search API</strong> to fetch search results based on the user's input. The search is executed via the <strong>searchQuery</strong> function in the <strong>script.js</strong> file, which interacts with the API and displays the results within the browser.</p>
        <h3>Example of Search API Request:</h3>
        <pre><code>
const apiUrl = `https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CUSTOM_SEARCH_ENGINE_ID&q=${query}`;
        </code></pre>
        <h2>Contributing</h2>
        <p>We welcome contributions! Feel free to fork the repository, make improvements, and create pull requests. Here are a few ways you can contribute:</p>
        <ul>
            <li><strong>Fix bugs</strong> and improve code efficiency.</li>
            <li><strong>Enhance the UI/UX</strong> to make the browser even more intuitive.</li>
            <li><strong>Add more features</strong> such as bookmarks, history, or new search engines.</li>
        </ul>
        <h2>License</h2>
        <p>This project is licensed under the <strong>MIT License</strong> - see the <a href="LICENSE">LICENSE</a> file for details.</p>
        <h2>Contact</h2>
        <p>If you have any questions or suggestions, feel free to open an issue or reach out to me via email or GitHub discussions.</p>
        <ul>
            <li>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></li>
            <li>GitHub: <a href="https://github.com/your-username" target="_blank">your-username</a></li>
        </ul>
        <footer>
            <p>&copy; 2024 Zexa-Browser. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>
