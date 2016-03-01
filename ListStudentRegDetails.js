
app.controller('listCtrl', function ($scope, studentregFactory, $rootScope) {

    //Find All Student Details
    $scope.getStudentData = function () {
        studentregFactory.getAllStudnets().success(function (data) {
            $scope.studentinDb = JSON.parse(data.d);
            //$scope.sortOrder = false;
            $scope.success = true;
        })
    };

    $scope.fnDelete = function (id) {
        studentregFactory.deleteStudent(id).success(function (data) {

            if (data.d == true) {
                $scope.showMessage = true;
                $scope.message = "Student data Deleted Successfully";
                $scope.getStudentData();
            }
            else {
                $scope.showMessage = true;
                $scope.message = "Student data not deleted Successfully";
            }
        })
    };

    $scope.sortOrder= false;
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
        $scope.sortOrder = !$scope.sortOrder;
    };


    $scope.getStudentData();

});