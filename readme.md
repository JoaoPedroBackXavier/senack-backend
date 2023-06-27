# verificar versão do node instalada
node -v

# gerar arquivo package.json
npm init -y

# instalar o type script
npm i -g typscript

# transpilar o codigo ts
npx tsc index.ts

# criar arquivo de configuração do ts
npx tsc --init

# configurações tsconfig.json
"target":"es6"
"module":"commonjs"
"sourceMap": true
"outDir":"./build"
"rootDir":"./src"
"removeComents": true
"noImplicitAny": true

# adicionar script no package.json
"start":"npx tsc && node ./build/index.js"