const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
}

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(`Mark's BMI(${mark.BMI}) is higher than John's(${john.BMI})`)
} else {
  console.log(`John's BMI(${john.BMI}) is higher than Mark's(${mark.BMI})`)
}
