// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// Variables for heroku
// export const environment = {
//   production: false,
//   productoURL: 'https://sistemainventario-api.herokuapp.com/producto/',
//   authURL: 'https://sistemainventario-api.herokuapp.com/auth/',
//   changePasswordURL: 'https://sistemainventario-api.herokuapp.com/email-password/',
//   inmueblesURL: 'https://sistemainventario-api.herokuapp.com/usuarios/',
//   inmueblesURL: 'https://sistemainventario-api.herokuapp.com/inmuebles/',
// };

// Variables for localhost
export const environment = {
  production: false,
  productoURL: 'http://localhost:8080/productos/',
  authURL: 'http://localhost:8080/auth/',
  changePasswordURL: 'http://localhost:8080/email-password/',
  usuariosURL: 'http://localhost:8080/usuarios/',
  categoriaURL: 'http://localhost:8080/categorias/',
  inmueblesURL: 'http://localhost:8080/inmuebles/',
};