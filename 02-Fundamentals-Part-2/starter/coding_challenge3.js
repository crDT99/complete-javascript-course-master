const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}


if (john.calcBMI() > mark.calcBMI()) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than Mark's BMI(${mark.BMI})`);
} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(` ${mark.fullName}'s's BMI(${mark.BMI}) is higher than John's BMI (${john.BMI})`);
} else {
    console.log(`Both have the same BMI (${mark.BMI})`);
}
