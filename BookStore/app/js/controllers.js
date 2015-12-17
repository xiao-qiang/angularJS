var bookStoreCtrls = angular.module('bookStoreCtrls',[]);

 bookStoreCtrls.controller('HelloCtrl',['$scope',
    function($scope) {
        $scope.greeting = {
            text:'Hello World'
        };
    }
]);

bookStoreCtrls.controller('BookListCtrl',['$scope',
    function($scope) {
        $scope.books =[
            {title:"《Ext江湖》",author:"大漠穷秋"},
            {title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
            {title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
        ]
    }
]);
// 表单数据
var userInfoModule = angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope',
    function($scope) {
        $scope.userInfo = {
            email:"123465@qq.com",
            password:"12346646",
            autoLogin:true
        };
        $scope.getFormData = function(){
            console.log($scope.userInfo);
        };
        $scope.setFormData = function(){
            $scope.userInfo = {
                email:"lxqiao@qq.com",
                password:"1324657979",
                autoLogin:false
            }
        };
        $scope.resetForm = function(){
            $scope.userInfo = {
                email: "253445528@qq.com",
                password: "253445528",
                autoLogin: true
            }
        }
    }
])
// testCSS  测试CSS样式
var myCSSModule = angular.module('MyCSSModule',[]);
myCSSModule.controller('CSSCtrl',['$scope',
    function($scope){
        $scope.color = "orange";
        $scope.setOrange = function(){
            $scope.color = "orange";
        }
        $scope.setGreen = function(){
            $scope.color = "green";
        }
        $scope.setRed = function(){
            $scope.color = "red";
        }
    }
]);
 /**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */