# Culinary

Restaurant website built with Vue JS.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoint](#api-endpoint)
- [Author](#author)
- [Additional Information](#additional-information)

## Built With

- [Vue JS](https://vuejs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Love](https://pa1.narvii.com/6196/cb17531e2407c40e34d47aaf5c5b7bf69ce62fa0_hq.gif)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

These are list of things you need to have before you use the project and how to install them.

- Node.js<br>
  Download the Node.js installer [here](https://nodejs.org/en/download/)<br>
  Run the installer
- Text Editor<br>
  You can choose any text editor that suits you the most, but I recomend using Visual Studio Code<br>
  Download the VSCode installer [here](https://code.visualstudio.com/download)<br>
  Run the installer
- NPM<br>
  Download npm in Command Line Interface by typing the command :<br>

```
npm install npm@latest -g
```

- JSON Server<br>
  Download JSON Server in Command Line Interface by typing the command :<br>

```
npm install -g json-server
```

### Installation

1. Clone the repo

```
git clone https://github.com/jjulianto/culinary.git
```

2. Change current directory to this repository folder

```
cd culinary
```

3. Install dependencies

```
npm install
```

4. Run the project

   - Development mode

     1. Run the server

        ```
        npm run serve
        ```

     2. Run the API

        ```
        npm run api
        ```

     3. Lints and fixes files
        ```
        npm run lint
        ```

   - Production mode
     ```
     npm run build
     ```

## Usage

- Base URL : `http://localhost:8080/`
- URL API : `http://localhost:3000/`

### API Endpoint

| Endpoint      | Description                                                | Parameter | Method |
| ------------- | ---------------------------------------------------------- | --------- | ------ |
| `/`           | Only the start page shows basic information                | No        | GET    |
| `/products`   | To display the entire food list                            | No        | GET    |
| `/keranjangs` | To display the food that has successfully entered the cart | No        | GET    |
| `/pesanans`   | To display the food that has been successfully ordered     | No        | GET    |

## Author

**Julianto** - [Github](https://github.com/jjulianto)

## Additional Information

### License

- Vector Illustration [unDraw](https://undraw.co/)
- Icons [Font Awesome](https://fontawesome.com/)

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
