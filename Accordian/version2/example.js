angular.module('plunker', ['ui.bootstrap']);
function AccordionDemoCtrl($scope) {

  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      items: [{"item-title": "item 1"}, {"item-title": "item 2"}]
    },
    {
      title: "Dynamic Group Header - 2",
      items: [{"item-title": "item 3"}, {"item-title": "item 4"}]
    }
  ];
}
