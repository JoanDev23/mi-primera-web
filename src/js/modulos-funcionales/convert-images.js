const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../../assets/imagenes');
const outputDir = path.join(__dirname, '../../../build/imagenes');

// Asegúrate de que la carpeta de salida exista
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Leer todos los archivos PNG
fs.readdirSync(inputDir).forEach(file => {
  if (path.extname(file).toLowerCase() === '.png') {
    const inputPath = path.join(inputDir, file);
    const outputFile = path.basename(file, '.png') + '.webp';
    const outputPath = path.join(outputDir, outputFile);

    sharp(inputPath)
      .webp({ quality: 80 }) // Ajusta la calidad si lo deseas
      .toFile(outputPath)
      .then(() => console.log(`Convertido: ${file} → ${outputFile}`))
      .catch(err => console.error(`Error con ${file}:`, err));
  }
});
