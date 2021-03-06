module.exports = class Task{
  subject; 
  date;
  description;
  constructor(subject, day, description){
    this.subject = subject;
    this.date = day;
    this.description = description;
  };

  static fromFirebase(obj){
    let {subject, date, description} = obj;
    date = new Date(String(date));
    return new Task(subject, date, description);
  }

  getDate(){
    return this.date.getDate();
  }

  getMonth(){
    return this.date.getMonth()+1;
  }

  getTaskObject(){
    const temp = {...this};
		temp.date = String(temp.date);
    return temp;
  }
};