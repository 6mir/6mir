<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نمایش README</title>
    <style>
        /* تنظیمات پایه */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* استایل‌های بدنه */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f9;
            color: #333;
            line-height: 1.6;
        }

        /* هدر */
        header {
            background-color: #2C3E50;
            color: white;
            padding: 20px;
            text-align: center;
        }

        header h1 {
            font-size: 2.5rem;
        }

        header p {
            font-size: 1rem;
            margin-top: 10px;
        }

        /* بخش محتوای اصلی */
        .content {
            padding: 20px;
            max-width: 900px;
            margin: 0 auto;
        }

        .content h2 {
            font-size: 2rem;
            margin-bottom: 15px;
        }

        .content h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .content p {
            font-size: 1rem;
            margin-bottom: 20px;
        }

        /* کدها */
        pre {
            background-color: #2D3E50;
            color: white;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
        }

        code {
            font-family: 'Courier New', monospace;
            font-size: 1rem;
        }

        /* فوتر */
        footer {
            background-color: #34495E;
            color: white;
            text-align: center;
            padding: 10px;
            margin-top: 30px;
        }

        footer p {
            font-size: 1rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>نام پروژه</h1>
        <p>توضیحات کوتاه درباره پروژه</p>
    </header>

    <section class="content">
        <h2>مقدمه</h2>
        <p>در این بخش می‌توانید توضیحات مقدماتی پروژه خود را وارد کنید.</p>

        <h3>نصب و راه‌اندازی</h3>
        <pre><code>
            npm install
            npm start
        </code></pre>

        <h3>استفاده</h3>
        <p>توضیحات در مورد نحوه استفاده از پروژه.</p>

        <h3>مسايل و مشکلات</h3>
        <ul>
            <li>مشکل 1</li>
            <li>مشکل 2</li>
        </ul>
    </section>

    <footer>
        <p>تمامی حقوق محفوظ است &copy; 2024</p>
    </footer>
</body>
</html>
