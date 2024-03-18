## UPLOAD DE IMAGENS COM NODEJS

Nesse codigo criaremos uma aplicação onde sera possivel fazer upload de imagens!

#### Dependencias:

- Node.js
- Express.js
- EJS
- Multer

#### Instalação:

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

## Middleware de Upload de Imagens

Este projeto utiliza o middleware Multer para lidar com o upload de imagens. O Multer é um middleware para o Node.js que facilita o manuseio de arquivos de upload. Ele fornece um meio flexível de armazenar arquivos em disco e permite definir filtros para restringir os tipos de arquivo que podem ser enviados.

### Configuração

O middleware de upload de imagens está configurado para armazenar os arquivos na pasta `public/uploads/produtos` e utiliza um nome de arquivo único baseado no carimbo de data/hora e no nome original do arquivo.

Além disso, um filtro é aplicado para aceitar apenas arquivos com formatos de imagem PNG, JPG e JPEG.

```javascript
const multer = require("multer");

module.exports = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/uploads/produtos");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now().toString() + "_" + file.originalname);
    },
  }),
  fileFilter: (req, file, cb) => {
    const extensaoImg = ["image/png", "image/jpg", "image/jpeg"].find(
      (formatoAceito) => formatoAceito == file.mimetype
    );

    if (extensaoImg) {
      return cb(null, true);
    }

    return cb(null, false);
  },
});
```
