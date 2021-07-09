export default class helper {
getClickedTime(){
    today = new Date();
    timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + this.today.getMilliseconds();
    return timeNow;
}
getPercent(count, totalCount ){
    
    return Math.round((count / totalCount) *100);
}
}