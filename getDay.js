module.exports = function(day){
    var date = new Date(day)
  var weekDays = ['Sunday','Monday','Tuesday','Wdnesay','Thursday','Friday','Saturday']
        return(weekDays[date.getDay()])
    }
