```
Certifique-se de ter o Appium e o Webdriver.io baixado no pc e as variaveis de ambiente pronto. 
```

```
Realizei dois projetos em um só, onde foi feito duas Config para cada projeto, onde está configurado conforme o diretório da spec de cada app, sendo assim, dois script para rodar cada teste.

O app SwagLabs é um projeto de loja de roupas, compra de produtos, e o app ToDoList é uma lista de tarefas, onde se pode adicionar como texto e checklist.

Utilizei as melhores práticas para automatizar, como a criação de funções, suporte de comando a serem utilizados, etc. Isso facilita muito!
```

# Mobile Automation Tests

### Clone Project 

```
git clone https://github.com/Hrqlv/mobileTests.git
```
### Install dependencies

```
npm install / npm i
```

## How run the tests

### Running tests of SwagLabs
```
npm run wdio:swagLabs
```
### Running tests of ToDoList
```
npm run wdio:toDoList
```