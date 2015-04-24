(function() {
	'use strict';

// criação de configurações para o módulo "app" que será definido na função "rotas"
	angular
	.module('app')
	.config(rotas);

// injeção de serviços usados pelo AngularJS, stateProvider para a navegação entre estados (views), urlRouterProvider para configurar fallback
	rotas.$inject = ['$stateProvider', '$urlRouterProvider'];

	function rotas($stateProvider, $urlRouterProvider) {
		
// definimos o nosso fallback para que caso o usuário tente acessar uma rota que não está configurada, enviá-lo para o estado /erro, configurado mais abaixo
		$urlRouterProvider.otherwise('/erro');

// chamada do provedor de estados e configuração dos estados
// na configuração temos o nome do estado, seguido de um objeto com a url de acesso, o template HTML da view
		$stateProvider
		.state('erro', {
			url: '/erro',
			template: templateErro
		})		
// no estado "etapa" a url é composta do caminho e no final o parâmetro id que é definido por expressão regular, pra ser reconhecido apenas por numeros entre 0 e 6, 1 dígito apenas
// qualquer outro número ou texto não será válido e o fallback será chamado, id 01 também é inválido
// controller será onde manipularemos os dados de uma model ou as funções de eventos da view
// controllerAs configura um codinome que será usado para acessar funções e variáveis do controller. VM: View Model
		.state('etapa', {
			url: '/etapa/{id:[0-6]{1}}',
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

// templates das views
// num caso normal, teríamos "templateUrl" no lugar de "template" nos estados/rotas. Este acessaría um arquivo HTML externo, e também
// criaríamos os seus javascripts de controller em arquivos separados. No nosso caso, os templates são criados como string e os controllers junto com a rota.
// isso acontece pois para acessar os arquivos HTML externos, a aplicação precisaria fazer uma chamada AJAX. Entretanto, ao se executar
// a página localmente (abrindo o arquivo .html), os navegadores por padrão, bloqueiam a requisição por medidas de segurança.

//estamos usando bootstrap com tema Lumen, antes de adicionar um elemento verifique se já existe uma classe do bootstrap para seguir padrão
	var templateInicio = 
		'<h2>Análise e Desenvolvimento de Sistemas <small>Gestão de Projetos</small></h2><hr>' +
		'<p>Este é um guia passo-a-passo de como se utilizar o framework criado pelos alunos do 5º semestre do curso ' +
		'de Análise e Desenvolvimento de Sistemas de 2015 da Faculdade de Tecnologia Bandeirantes.</p>' +
		'<p>Na disciplina de Gestão de Projetos tivemos a missão de entender e por em prática todo o processo de gestão.</p>' +
		'<p>Etapas de Início, Planejamento, Execução, Monitoramento & Controle e Encerramento.</p>' +
		'<p>Neste site abordaremos o processo de qualidade garantidos na etapa de Monitoramento & Controle.' +
		'<br><br><button class="btn btn-primary" ui-sref="etapa({ id: 0 })">Ver processo</button>',

	templateErro = 
		'<h2>Erro</h2><hr>',

	templateEtapa = 
		'<h2>Etapas do Processo <small>Monitoramento e Controle</small></h2><hr>' +
		'<p>Monitoramento e Controle é uma etapa dentro do processo de gestão de projetos que tem como seu objetivo fornecer o entendimento do progresso do mesmo para que ações corretivas possam ser tomadas quando o projeto estiver desviando significantemente do seu plano estabelecido.</p>' +
		'<p><b>Monitoramento:</b> compreender, capturar, analisar, reportar e comunicar o desempenho do projeto, referente aos processos e documentos envolvidos, cruzando as medidas reais de andamento das atividades com as medidas previamente estimadas no planejamento. Isso inclui a análise processual e documental das diversas etapas do projeto para aplicarmos nossa metodologia e métricas.</p>'+
		'<p><b>Controle:</b> Tomar ações necessárias de correção para que as medidas reais se aproximem o máximo possível das medidas planejadas.</p>' +
		'<p class="lead">Seguem abaixo as etapas do processo propostas pelo framework:</p>' +
    	'<div class="list-group">' +
  		'<a ui-sref="etapa({ id: 1 })" class="list-group-item">' +
    	'<h4 class="list-group-item-heading">1. Definição</h4>' +
    	'<p class="list-group-item-text">Definir com os responsáveis de cada departamento como será o processo e quais os indicadores desejados por eles, a fim de evitar esforço em vão, medindo itens que não serão utilizados.</p>' +
  		'</a>' + 
  		'<a ui-sref="etapa({ id: 2 })" class="list-group-item">' +
    	'<h4 class="list-group-item-heading">2. Análise</h4>' +
    	'<p class="list-group-item-text">Análise sobre os processos e planejamento das melhores métricas para qualificar cada indicador. Documentar a definição dos indicadores planejados.</p>' +
  		'</a>' +
  		'<a ui-sref="etapa({ id: 3 })" class="list-group-item">' +
    	'<h4 class="list-group-item-heading">3. Validação</h4>' +
    	'<p class="list-group-item-text">Validar com os responsáveis os indicadores definidos na etapa anterior.</p>' +
  		'</a>' +
  		'<a ui-sref="etapa({ id: 4 })" class="list-group-item">' +
    	'<h4 class="list-group-item-heading">4. Implementação</h4>' +
    	'<p class="list-group-item-text">implementação dos indicadores nos processos.</p>' +
  		'</a>' +
  		'<a ui-sref="etapa({ id: 5 })" class="list-group-item">' +
    	'<h4 class="list-group-item-heading">5. Monitoramento</h4>' +
    	'<p class="list-group-item-text">Monitoramento dos indicadores.</p>' +
  		'</a>' +
  		'<a ui-sref="etapa({ id: 6 })" class="list-group-item">' +
    	'<h4 class="list-group-item-heading">6. Feedback</h4>' +
    	'<p class="list-group-item-text">Apresentar os resultados consolidados à equipe de Gestão de Projeto e responsáveis das demais áreas em forma de relatório periódico.</p>' +
  		'</a>' +
  		'</div>',

	templateSobre = 
		'<h2>Sobre <small>Equipe & Projeto</small></h2><hr>' +
		'<p>Equipe 5ADA - 2015:</p>' +
		'<ul>' +
		'<li>Dannilo Cassimiro</li>' +
		'<li>Felipe Gonçalves</li>' +
		'<li>Felipe Monobe</li>' +
		'<li>Rafael Ferreira</li>' +
		'<li>Renato Lara</li>' +
		'</ul>';
})();