const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const PORT = 3456;
const BUILD_DIR = path.join(__dirname, '..', 'dist');
const OUTPUT_DIR = path.join(__dirname, '..', 'output');

async function generatePDFForLang(lang, fileName) {
    let server;
    const OUTPUT_PDF = path.join(OUTPUT_DIR, fileName);

    try {
        server = spawn('npx', ['serve', '-s', BUILD_DIR, '-l', PORT], {
            stdio: 'ignore',
            env: { ...process.env, VITE_LANG: lang }
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();

        await page.goto(`http://localhost:${PORT}?lang=${lang}`, {
            waitUntil: 'networkidle0',
        });

        await page.pdf({
            path: OUTPUT_PDF,
            format: 'A4',
            scale: 1,
            printBackground: true,
            margin: {
                top: '0',
                right: '0',
                bottom: '0',
                left: '0',
            },
        });

        await browser.close();

        console.log(`PDF generated: ${OUTPUT_PDF}`);
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    } finally {
        if (server) {
            server.kill();
        }
    }
}

async function generatePDF() {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    
    const lang = process.argv[2];
    const fileName = process.argv[3];
    
    if (lang && fileName) {
        await generatePDFForLang(lang, fileName);
    } else {
        await generatePDFForLang('en', 'AlbertMenendezCV_EN.pdf');
        await generatePDFForLang('es', 'AlbertMenendezCV_ES.pdf');
    }
}

generatePDF();