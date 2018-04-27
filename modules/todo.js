var todoApp = angular.module("todoApp", [])
todoApp.controller('taskController', function ($scope) {
    /* List to hold the selected tasks*/
    var removeList = [];
    
    /**Default list of tasks */
    $scope.tasks = [
        'Prepare brakfast',
        'Go for Yoga classes',
        'Water the plants',
        'Pick up visitors from Tiananmen Square'
    ];

    /**Created: Vikas Thakur - Smartdata, Nagpur 27 Apr 2018
     * Method to validate the form and to add the task to the list
     */
    $scope.addTask = function (taskName) {
        if ($scope.taskForm.$valid) {
            var taskNameCopy = taskName;
            $scope.tasks.push(taskNameCopy);
            $scope.taskName = null;
            $scope.taskForm.$setPristine();
            $scope.taskForm.$setUntouched();
            alert('Task added to list successfully');
        }
    }

    /**Created: Vikas Thakur - Smartdata, Nagpur 27 Apr 2018
     * Method to push all the tasks into an array which is checked or
     * selected by user to remove
     */
    $scope.addToRemoveList = function (item) {
        if (removeList.indexOf(item) < 0)
            removeList.push(item);
        else
            removeList.splice(removeList.indexOf(item), 1);
    }

    /**Created: Vikas Thakur - Smartdata, Nagpur 27 Apr 2018
     * Method to remove a task from the list
     */
    $scope.remove = function () {
        if (removeList.length > 0 && confirm('Delete?')) {
            /** This will remove the selected tasks from the list */
            _.pullAt($scope.tasks, removeList);
            /** This will reset the selected task's list */
            removeList = [];

        } else {
            alert('Nothing selected to delete');
        }
    }
});