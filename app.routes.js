(function() {
	'use strict';

	angular
	.module('app')
	.config(rotas);

	rotas.$inject = ['$stateProvider', '$urlRouterProvider'];

	function rotas($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/erro');

		$stateProvider
		.state('erro', {
			url: '/erro',
			template: templateErro,
			templateUrl: 'erro.html'
		})		
		.state('etapa', {
			url: '/etapa/{id:[1-9]{1}}',
			template: templateEtapa,
			controllerAs: 'vm',
			controller: function ($stateParams) {
				var vm = this;
			},
		})
		.state('inicio', {
			url: '/',
			template: templateInicio,
			controllerAs: 'vm',
			controller: function () {
				var vm = this;
			},
		})
		.state('sobre', {
			url: '/sobre',
			template: templateSobre,
			controllerAs: 'vm',
			controller: function () {
				var vm = this;
			},
		})
	}

	var templateInicio = 
		'<h2>Sistema de Gestão</h2>' +
		'<h4>Gestão de Projetos - 2015</h4>' +
		'<h4>Análise e Desenvolvimento de Sistemas</h4>' +
		'<h4>Monitoramento e Controle</h4>' +
		'<p>Este é um guia passo-a-passo de como se utilizar o framework criado pelos alunos do 5º semestre do curso ' +
		'de Análise e Desenvolvimento de Sistemas de 2015 da Faculdade de Tecnologia Bandeirantes.</p>' +
		'<p>Na disciplina de Gestão de Projetos tivemos a missão de entender e por em prática todo o processo de gestão.</p>' +
		'<p>Etapas de Início, Planejamento, Execução, Monitoramento & Controle e Encerramento.</p>' +
		'<p>Neste site abordaremos o processo de qualidade garantidos na etapa de Monitoramento & Controle.',

	templateErro = 
		'<h2>Erro</h2>' +
		'<h3></h3>',

	templateEtapa = 
		'<h2>Etapas</h2>' +
		'<p>Monitoramento & Controle' +
		'<ol>' +
		'<li><a href="#">Definição</a></li>' +
		'<li><a href="#">Análise</a></li>' +
		'<li><a href="#">Validação</a></li>' +
		'<li><a href="#">Implementação</a></li>' +
		'<li><a href="#">Monitoramento</a>' +
		'<ol><li><a href="#">Relatório Emergencial</a></li></ol></li>' +
		'<li><a href="#">Relatório Periódico</a></li>' +
		'</ol>',

	templateSobre = 
	'<h2>Sobre</h2>' +
	'<p>Equipe:</p>' +
	'<ul>' +
	'<li>Dannilo Cassimiro</li>' +
	'<li>Felipe Gonçalves</li>' +
	'<li>Felipe Monobe</li>' +
	'<li>Rafael Ferreira</li>' +
	'<li>Renato Lara</li>' +
	'</ul>';
})();