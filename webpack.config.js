const path = require('path') // importando path do node, pois esse arquivo roda em cima do node.

module.exports = {

// iremos receber o arquivo de entrada da aplicacao que normalmente seria o index.js na chave entry:, esse e o arquivo que a aplicacao e desenvolvida e que depois esse codigo sera transpilado.
  entry: path.resolve(__dirname, 'src', 'index.js'),
// onde sera jogado o bundle (codigo transpilado para linguagem que o navegador/JS entenda)
  output: {
    path: path.resolve(__dirname, 'public'), // local onde ficara o bundle
    filename: 'bundle.js' // nome do arquivo
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'public'), //estamos informando o diretorio para a pasta public, onde o devServer ira encontrar o nosso index.html
  },
  module: {
    // aqui serao as configurações adicionais

    rules: [
      // iremos declarar regras que irao informar para o webpack para qual tipo de arquivo o que ele deve utrilizar, EX: arquivos .js ele deve utilizar o babel...
      // os arquivos que serao utilizados sao chamados de loaders
      //Para cada regra sera informado um objeto de configuracao.
      {
        test: /\.js$/, // utilizando da expressao regular para encontrar arquivos que sejam .js e terminem com isso
        // o "\." significa que estamos inserindo apenas o ".", caso colocasse sem a "\" iria dar problema, depois o js informando o tipo do arquivo, e depois o "$" que determina que a string deve terminar ali para que o babel entre em ação
        exclude: /node_modules/, // exclui da verificação todos os arquivos dentro da pasta nodemodules pois eles ja estao transpilados.
        use: {
          //aqui iremos declara o tipo de loader que sera utilizado para cada extensao de arquivo
                loader: 'babel-loader',
        },
        
      },{
        test: /\.css$/,
        use: [ // quando temos mais de 1 loader utilizamos use como array e dentro os varios loader necessarios.
          { loader: 'style-loader'},// esse loader serve para importar arquivos css no momento que a aplicação for montada e vai transferir para dentro do html dentro de uma tag style.
          { loader: 'css-loader'}, // o css loader e utilizado para que o webpack entende a importacao de outros arquivos dentro do arquivo do css, seja uma url por imagem ou importar mesmo outro arquivo css
        ]
      }, {
        test: /.*\.(gif|png|jpe?g)$/i, // aqui estamos informando as varias extensoes de arquivos que precisamos testar e vendo se tem o "e" no jpeg, no final o /i e para informar que nao e case sensitive ou seja, se o arquivo for .GIF ou .gif vai entender da mesma forma.
        use: {
          loader: 'file-loader',
        }
      }   
    ]
  }

}