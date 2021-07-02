# SMARTWEB V2

---

Pagina web de la empresa smartsuitetools conectividad y uso de API Rest, el lenguaje usado es Angular 11.

<!-- ![status](https://img.shields.io/badge/status-running-green.svg?colorB=00C106) -->

![styles](https://img.shields.io/badge/Angular-red.svg)
![styles](https://img.shields.io/badge/JavaScript-yellow.svg)
![styles](https://img.shields.io/badge/jQuery-brown.svg)
![styles](https://img.shields.io/badge/TypeScript-blue.svg)
![styles](https://img.shields.io/badge/Taildwind CSS-green.svg?colorB=00C106)
![styles](https://img.shields.io/badge/JSON-gray.svg)
![styles](https://img.shields.io/badge/API Rest-purple.svg)

---

## Clonación del repositrio GIT

---

Siga los siguientes pasos para este nuevo repositorio y sus archivos recién agregados:

1.  Copie y conecte el repositorio localmente para que pueda enviar las actualizaciones que realice y extraer los cambios que otros realicen.
2.  Ingrese git clone y la URL del repositorio en su línea de comando:

        git clone https://rgomez2978@bitbucket.org/rgomez-alpha/smartwebnew.git

---

## Instalación de Librerias

A continuación se indican las librerias necesarias para la ejecución del proyecto.

1.  Instalación de librerias NPM globales.

        npm install -g npm@latest
        npm install -g eslint
        npm install -g jshint
        npm install -g typescript
        npm install -g tslint
        npm install -g fsevents@latest
        npm install --no-optional --no-shrinkwrap --no-package-lock
        npm install json-server
        npm install win-node-env --save

        npm uninstall -g angular-cli
        npm uninstall -g @angular-cli
        npm cache clean --force
        npm install -g @angular/cli@latest
        npm install -g @angular-devkit/build-angular@latest

2.  Instalación de librerias NPM locales.

        npm install jquery --save
        npm install @types/jquery --save-dev
        npm install -D @types/jquery
        npm install jquery.easing --save
        npm install animate.css --save
        npm install magnific-popup --save
        npm install ng-lazyload-image --save
        npm install slick-carousel --save
        npm install ngx-slick-carousel --save --force
        npm install zone.js --save
        npm install gsap --save
        npm install --save-dev @types/greensock
        npm install --save-dev @types/gsap
        npm install @tailwindcss/line-clamp
        npm install @ngrx/store --save
        npm install @ngrx/store-devtools --save
        npm install ngx-build-plus --save

3.  Configuracion de librerias NPM locales.

        "styles": [
            "src/styles.scss",
            "node_modules/wowjs/css/libs/animate.css",
            "node_modules/animate.css/animate.css",
            "node_modules/swiper/swiper-bundle.min.css",
            "node_modules/slick-carousel/slick/slick.scss",
            "node_modules/slick-carousel/slick/slick-theme.scss",
            "node_modules/magnific-popup/dist/magnific-popup.css",
        ],
        "scripts": [
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/magnific-popup/dist/jquery.magnific-popup.min.js",
            "node_modules/slick-carousel/slick/slick.min.js"
        ]

---

## Configuración y preparación del proyecto Angular

1.  Creación del proyecto angular.

        ng new smartwebredux --style=scss --routing

3.  Creación de layout

        ng g c components/layout/navbar --skip-tests
        ng g c components/layout/footer --skip-tests
        ng g c components/layout/loading --skip-tests
        ng g c components/layout/float --skip-tests

4.  Creación de componentes

        ng g c components/shared/header --skip-tests
        ng g c components/shared/carousel --skip-tests
        ng g c components/shared/accordion --skip-tests
        ng g c components/shared/content --skip-tests
        ng g c components/shared/title --skip-tests
        ng g c components/shared/call-to-action --skip-tests
        ng g c components/shared/tab --skip-tests
        ng g c components/shared/price --skip-tests
        ng g c components/shared/service --skip-tests
        ng g c components/shared/menu --skip-tests
        ng g c components/shared/form --skip-tests
        ng g c components/shared/breadcrumb --skip-tests
        ng g c components/shared/stycky --skip-tests
        ng g c components/shared/media --skip-tests

5.  Creación de pages

        ng g c components/pages/home --skip-tests
        ng g c components/pages/products --skip-tests
        ng g c components/pages/planes --skip-tests
        ng g c components/pages/resources-center --skip-tests
        ng g c components/pages/help-center --skip-tests
        ng g c components/pages/help-center-detail --skip-tests
        ng g c components/pages/faq --skip-tests
        ng g c components/pages/news --skip-tests
        ng g c components/pages/news-detail --skip-tests
        ng g c components/pages/contactus --skip-tests
        ng g c components/pages/privacy-politics --skip-tests
        ng g c components/pages/legal-terms --skip-tests
        ng g c components/pages/related-sites --skip-tests
        ng g c components/pages/site-map --skip-tests
        ng g c components/pages/aboutus --skip-tests
        ng g c components/pages/why-smart --skip-tests
        ng g c components/pages/not-found --skip-tests

6.  Creación de Directivas

        ng g d directives/form-validate --skip-tests

7.  Creación de servicios

        ng g s services/api-json --flat --skip-tests
        ng g s services/commons --flat --skip-tests
        ng g s services/redux-data --flat --skip-tests
        ng g s services/local-session-storage-data --flat --skip-tests

8.  Creación de pipes

        ng g p pipes/safedom --flat --skip-tests
        ng g p pipes/noimage --flat --skip-tests

9.  Creacion de interfaces

        ng g i interfaces/layout interface
        ng g i interfaces/home interface
        ng g i interfaces/products interface
        ng g i interfaces/planes interface
        ng g i interfaces/contacts interface
        ng g i interfaces/help interface
        ng g i interfaces/faqs interface
        ng g i interfaces/news interface
        ng g i interfaces/privacyPolitics interface
        ng g i interfaces/legalTerms interface
        ng g i interfaces/relatedSites interface
        ng g i interfaces/siteMap interface
        ng g i interfaces/aboutus interface

10. Levantar o ejecutar servidor de angular

        ng serve
        ng serve -o
        ng serve -o --port 1192

## Creacion de Alias (Modificacion de archivo tsconfig.json)

        "baseUrl": "./",
        "paths": {
                "@app/*": ["src/app/*"],
                "@directives/*": ["src/app/directives/*"],
                "@services/*": ["src/app/services/*"],
                "@pipes/*": ["src/app/pipes/*"],
                "@interfaces/*": ["src/app/interfaces/*"],
                "@layout/*": ["src/app/components/layout/*"],
                "@pages/*": ["src/app/components/pages/*"],
                "@components/*": ["src/app/components/shared/*"],
                "@redux/*": ["src/app/store/*"],
                "@assets/*": ["src/assets/*"],
                "@environments/*": ["src/environments/*"],
        },

## Agregar opciones a la seccion angularCompilerOptions (Modificacion de archivo tsconfig.json)

        "angularCompilerOptions": {
            "enableI18nLegacyMessageIdFormat": false,
            "strictInjectionParameters": true,
            "strictInputAccessModifiers": true,
            "strictTemplates": true,
            "fullTemplateTypeCheck": true,
            "disableTypeScriptVersionCheck": true
        }

## Instalacion y configuracion de tailwind

1.  En primer lugar, instale los últimos tailwindcss, postcssy los autoprefixerpaquetes como devDependencies:

        npm i -D tailwindcss@latest postcss@latest autoprefixer@latest
        npm i -D postcss-import@12 postcss-loader@4 postcss-scss@3

2.  extender las configuraciones predeterminadas del paquete web sin la necesidad de expulsar la aplicación angular:

        ng add ngx-build-plus
        npm i ngx-build-plus --save

3.  Ahora creemos un archivo de configuración de paquete web personalizado llamado webpack.config.js

        touch webpack.config.js

4.  Colocar el siguiente bloque de código en el archivo webpack.config.js, con esto la configuración del paquete web anterior es principalmente para configurar PostCSS. En este caso, estamos utilizando postcss-import, tailwindcssy autoprefixerplugins PostCSS.

        module.exports = {
            module: {
            rules: [
                {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                    ident: 'postcss',
                    syntax: 'postcss-scss',
                    plugins: [
                        require('postcss-import'),
                        require('tailwindcss'),
                        require('autoprefixer'),
                    ],
                    },
                },
                },
            ],
            },
        };

5.  Ahora, necesitamos agregar una configuración adicional para permitir que angular lea nuestro webpack.config.jsarchivo adicional . Copia el siguiente nueva línea de angular.jsonbajo "build", "serve"y "test"

        {
        "architect": {
            "build": {
            "builder": "ngx-build-plus:browser",
            "options": {
                "extraWebpackConfig": "webpack.config.js",
            },
            },
            "serve": {
            "builder": "ngx-build-plus:dev-server",
            "options": {
                "extraWebpackConfig": "webpack.config.js",
            },
            },
            "test": {
            "builder": "ngx-build-plus:karma",
            "options": {
                "extraWebpackConfig": "webpack.config.js",
            },
            },
        }
        }

6.  Para comenzar a usar tailwind en el proyecto, primero generemos un archivo de configuración tailwindcss en la carpeta raíz usando el comando:

        npx tailwindcss init

7.  El siguiente paso es incluir estilos de Tailwind en el src/app/styles.scss  archivo global , así:

        /* You can add global styles to this file, and also import other style files */
        @import 'tailwindcss/base';
        @import 'tailwindcss/components';
        @import 'tailwindcss/utilities';

8.  Agregue el siguiente fragmento de código para ver si Tailwind aplica estilos a la siguiente tarjeta. (No te preocupes por la imagen al azar)src/app.component.html

        <h1 class="my-8 text-6xl font-bold text-center"><span class="text-green-600">TailwindCSS</span> and <span class="text-red-600">Angular</span> is awesome!</h1>
        <p class="text-3xl text-center">Thanks for reading!</p>

9.- Ejecutar aplicacion y validar si tailwind esta bien configurado

    ng serve -o

debe quedar asi de la sigueinte manera

![alt text](README.jpg)

## Optmizar el tamaño de tailwind

1.  Ahora, el truco para optimizar el tamaño de Tailwind es usar una biblioteca de terceros llamada PurgeCSS , que ya está incluida y se usa en Tailwind  debajo del capó. Como dice el nombre, purgará todo el CSS no utilizado cuando creemos nuestra aplicación para la producción. Debido a que PurgeCSS ya se ha incluido en tailwind, no necesitamos instalar una biblioteca adicional. En su lugar, solo necesitamos agregar la siguiente configuración adicional en tailwind.config.js:

        module.exports = {
        purge: ['./src/**/*.html', './src/**/*.ts'], // add this line
        ...
        }

    La configuración presentada anteriormente purga las clases CSS no utilizadas en todos los archivos HTML y TS. Si desea obtener más información sobre las mejores prácticas de optimización específicamente para el viento de cola, se recomienda leer este artículo de la documentación oficial de viento de cola.

2.- Instalar node env para windows

    npm install -g win-node-env

3.- Sin embargo, hay otro paso. Dado que tailwind purga el CSS no utilizado al verificar si NODE_ENV está configurado en production, necesitamos incluir un comando de script adicional a nuestro package.json, así:

    {
        ...
        "scripts": {
                "build:prod": "NODE_ENV=production ng build --prod",
                ...
        }
    }

## Instalr y configurar JSON SERVER

1.- Instalar json server

        npm i json-server --save

2.- PAra configurar o activar los comandos de json server dentro del proyecto , incluir un comando de script adicional a nuestro package.json, así

    {
    ...
        "scripts": {
                "json-server:smartv2_en": "json-server --watch src/assets/JSON/smartweb_v2_en.json -p 3101",
                "json-server:smartv2_es": "json-server --watch src/assets/JSON/smartweb_v2_es.json -p 3102"
                ...
        }
    }

---
