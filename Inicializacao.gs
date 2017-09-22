/**
* @fileOverview
* Rotinas de inicialização do addon.
* cf. https://developers.google.com/apps-script/add-ons/lifecycle
*/

function onInstall(e) {
  onOpen(e);
}

function onOpen(e) {
  SpreadsheetApp.getUi().createAddonMenu()
  .addItem('Usar nesta planilha', 'usar')
  .addToUi();
}

function usar() {
  var titulo = 'Índices Previdenciários';
  var mensagem = 'As funções para consulta aos índices previdenciários ' +
    'obtidos nos sistemas SGS (Bacen) e Sidra (IBGE) ' +
    'estão agora ativadas nesta planilha.';
  var ui = SpreadsheetApp.getUi();
  ui.alert(titulo, mensagem, ui.ButtonSet.OK);
}