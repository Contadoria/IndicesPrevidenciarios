/**
* @fileOverview
* UDFs para uso nas planilhas.
*/

'use strict';

/**
* Obtém a tabela de percentuais históricos da TRD no período especificado.
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/SOAP do SGS/BACEN, na forma de matriz bidimensional.
*
* @customfunction
*/
function SGS_TRD(dataInicial, dataFinal) {
  return SGSBacen.consultarTRD(dataInicial, dataFinal);
}

/**
* Obtém a tabela de percentuais históricos da TRD no período especificado, restringindo
* o resultado da consulta à TRD projetada do dia 1º de cada mês ao dia 1º do mês seguinte.
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/SOAP do SGS/BACEN, na forma de matriz bidimensional.
*
* @customfunction
*/
function SGS_TRD_PRIMEIRO_DIA(dataInicial, dataFinal) {
  return SGSBacen.consultarTRDPrimeiroDia(dataInicial, dataFinal);
}

/**
* Obtém a tabela de percentuais históricos da TR mensal (primeiro dia do mês) no período especificado.
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/SOAP do SGS/BACEN, na forma de matriz bidimensional.
*
* @customfunction
*/
function SGS_TR_MENSAL(dataInicial, dataFinal) {
  return SGSBacen.consultarTRMensal(dataInicial, dataFinal);
}

/**
* Obtém a tabela de percentuais históricos da SELIC mensal no período especificado.
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/SOAP do SGS/BACEN, na forma de matriz bidimensional.
*
* @customfunction
*/
function SGS_SELIC_MENSAL(dataInicial, dataFinal) {
  return SGSBacen.consultarSelicMensal(dataInicial, dataFinal);
}

/**
* Obtém a tabela de percentuais históricos da meta anualizada do COPOM para a SELIC (no mês) no período especificado.
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/SOAP do SGS/BACEN, na forma de matriz bidimensional.
*
* @customfunction
*/
function SGS_SELIC_META_COPOM(dataInicial, dataFinal) {
  return SGSBacen.consultarSelicMetaCopom(dataInicial, dataFinal);
}

/**
* Obtém a tabela dos valores históricos do salário mínimo no período especificado (o BACEN reproduz informações do MTE).
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/SOAP do SGS/BACEN, na forma de matriz bidimensional.
*
* @customfunction
*/
function SGS_SALARIO_MINIMO(dataInicial, dataFinal) {
  return SGSBacen.consultarSalarioMinimo(dataInicial, dataFinal);
}

/**
* Obtém a tabela de percentuais históricos da BTN mensal no período especificado.
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/SOAP do SGS/BACEN, na forma de matriz bidimensional.
*
* @customfunction
*/
function SGS_BTN_MENSAL(dataInicial, dataFinal) {
  return SGSBacen.consultarBTNMensal(dataInicial, dataFinal);
}

/**
* Obtém a tabela dos valores históricos da URV no período especificado.
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/SOAP do SGS/BACEN, na forma de matriz bidimensional.
*
* @customfunction
*/
function SGS_URV(dataInicial, dataFinal) {
  return SGSBacen.consultarURV(dataInicial, dataFinal);
}

/**
* Obtém tabela de percentuais do INPC no período especificado.
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/REST do SIDRA/IBGE, na forma de matriz bidimensional.
*
* @customfunction
*/
function SIDRA_INPC_PERCENTUAL(dataInicial, dataFinal) {
  return SidraIBGE.consultarINPCPercentual(dataInicial, dataFinal);
}

/**
* Obtém tabela de índices históricos do INPC no período especificado.
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/REST do SIDRA/IBGE, na forma de matriz bidimensional.
*
* @customfunction
*/
function SIDRA_INPC_INDICE(dataInicial, dataFinal) {
  return SidraIBGE.consultarINPCIndice(dataInicial, dataFinal);
}

/**
* Obtém tabela de percentuais do IRSM no período especificado.
*
* @param {string|Date=} Data inicial (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @param {string|Date=} Data final (opcional). A string deve ter o formato "mm/aaaa" ou "dd/mm/aaaa". Como default, será utilizada a data de hoje.
* @return {Array} Os dados obtidos da API/REST do SIDRA/IBGE, na forma de matriz bidimensional.
*
* @customfunction
*/
function SIDRA_IRSM(dataInicial, dataFinal) {
  return SidraIBGE.consultarIRSM(dataInicial, dataFinal);
}