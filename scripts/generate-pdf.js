const puppeteer = require('puppeteer');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const PORT = 3456;
const BUILD_DIR = path.join(__dirname, '..', 'build');
const OUTPUT_DIR = path.join(__dirname, '..', 'output');

const fileName = process.argv[2] || 'AlbertMenendezCV.pdf';
const OUTPUT_PDF = path.join(OUTPUT_DIR, fileName);

async function generatePDF() {
    let server;

    try {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });

        server = spawn('npx', ['serve', '-s', BUILD_DIR, '-l', PORT], {
            stdio: 'ignore',
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();

        await page.goto(`http://localhost:${PORT}`, {
            waitUntil: 'networkidle0',
        });

        await page.pdf({
            path: OUTPUT_PDF,
            format: 'A4',
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

generatePDF();