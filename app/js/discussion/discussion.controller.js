(function() {
    'use strict';

    angular
        .module('app')
        .controller('DiscussionController', DiscussionController);

    DiscussionController.$inject = ['serviceGenerator', 'apiUrl', '$http', '$state'];

    /* @ngInject */
    function DiscussionController(serviceGenerator, apiUrl, $http, $state) {
        var vm = this;
        vm.title = 'DiscussionController';
        var moduleId = 1;
        var url = apiUrl + 'Modules/' + moduleId + '/Questions';
        var questionsForModule = serviceGenerator(url, 'Questions');
        console.log(url);

        vm.postAnswer = function(questionId){
            var postAnswerUrl = url + '/' + questionId;
            var moduleAnswers = serviceGenerator(postAnswerUrl, 'answer');
            moduleAnswers.create(data).then(function(response){
                 $state.go($state.current, {}, {reload: true});
            }, function(error){});

        };

        vm.upVoteQuestion = function(questionId){
            var postAnswerUrl = url + '/' + questionId;
            var moduleAnswers = serviceGenerator(postAnswerUrl, 'answer');
            moduleAnswers.upVote().then(function(response){
                 $state.go($state.current, {}, {reload: true});
            }, function(error){});
        };

        vm.downVoteQuestion = function(questionId){
            var postAnswerUrl = url + '/' + questionId;
            var moduleAnswers = serviceGenerator(postAnswerUrl, 'answer');
            moduleAnswers.downVote().then(function(response){
                 $state.go($state.current, {}, {reload: true});
            }, function(error){});
        };

        vm.upVoteAnswer = function(answerId){
            console.log('called');
            var postAnswerUrl = apiUrl + 'Modules/' + moduleId +  '/Answers/' + answerId;
            var moduleAnswers = serviceGenerator(postAnswerUrl, 'answer');
            moduleAnswers.upVote().then(function(response){
                 $state.go($state.current, {}, {reload: true});
            }, function(error){});
        };

        vm.downVoteAnswer = function(answerId){
            console.log(answerId);
            var postAnswerUrl = apiUrl + 'Modules/' + moduleId + '/Answers/' + answerId;
            var moduleAnswers = serviceGenerator(postAnswerUrl, 'answer');
            moduleAnswers.downVote().then(function(response){
                 $state.go($state.current, {}, {reload: true});
            }, function(error){});
        };

        activate();
        
        //////////////

        function activate() {
        	questionsForModule.getAll().then(function(response){
        		vm.questions = response;
                console.log(vm.questions);
        	}, function(error){
        		vm.questions = null;
        	});
        }
    }
})();