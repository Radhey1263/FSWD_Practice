//Application module
let taskModule = angular.module('taskApp', [])

//Controller module
taskModule.controller('taskCtrl', ($scope, $http) => {

    $scope.newTask = {}
    $scope.editStat = false

    //HTTP service to fetch task data
    $scope.readTask = () => {
        $http.get('/api/taskData').then((response) => {
            $scope.task = response.data
        })
    }
    $scope.readTask()

    //Function to add New task
    $scope.addNewTask = (newTask) => {
        //HTTP Service to call Insert API
        $http.post('/api/addTask', $scope.newTask).then((response) => {
            $scope.msg = response.data.message
        })
        $scope.readTask()
    }

    $scope.deleteTask = (tID) => {
        $http.delete('/api/deleteTask/' + tID).then((response) => {
            $scope.msg = response.data.message
        })
        $scope.readTask()
    }

    $scope.edit = (item) => {
        $scope.newTask = item
        $scope.editStat = true
    }

    $scope.updateTask = (item) => {
        $http.put('/api/updateTask/' + item.taskID, item).then((response) => {
            $scope.msg = response.data.message
        })
        $scope.editStat = false
        $scope.newTask = {}
        $scope.readTask()
    }

})