console.log("notes from class");
console.log(3.14);
console.log(true);

const user = {
  firstname: "Userfirst",
  lastname: "Userlast",
  age: 30,
  get name() {
    return this.firstname + " " + this.lastname;
  }
};

console.log(user.name);

const today = {
  day: 20,
  month: 4,
  year: 2019,
  get prettyToday() {
    return this.month + "/" + this.day + "/" + this.year;
  }
};

function MyMoment(day, month, year, hour, minute, second) {
  this.day = day;
  this.month = month;
  this.year = year;
  this.hour = hour;
  this.minute = minute;
  this.second = second;

  this.printDate = function() {
    return this.day + "/" + this.month + "/" + this.year;
  };

  this.printTime = function() {
    return (
      this.hour +
      ":" +
      (this.minute < 10 ? "0" + this.minute : this.minute) +
      ":" +
      (this.second < 10 ? "0" + this.second : this.second)
    );
  };

  this.printDateTime = function() {
    return this.printDate() + " " + this.printTime();
  };
}

const tomorrow = new MyMoment(21, 4, 2019, 12, 0, 0);
const easter = new MyMoment("20/04/2019 10:11:00");
console.log(easter.month);