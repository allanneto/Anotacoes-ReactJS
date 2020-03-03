module.exports = {
  // estamos exportando os presets instalados juntos com o babel 
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};