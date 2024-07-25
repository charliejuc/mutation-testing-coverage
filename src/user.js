class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getUserInfo() {
    return {
      name: this.name,
      age: this.age,
      description: this.isAdult() && this.age >= 22 ? "Adult" : "Young",
    };
  }

  isAdult() {
    return this.age >= 18;
  }
}

module.exports = User;
