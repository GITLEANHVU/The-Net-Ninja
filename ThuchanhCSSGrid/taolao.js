let person = new Person('LEANHVU', 19);
function chao() {
  // let person = new Person('LEANHVU', 19);

  document.getElementById("bien1").innerHTML = person.getName() + " tuoi: " + person.getAge();
}
function thuctap() {
  // let person = new Person('LEANHVU', 19);
  $("#thuctap").html("Jquery: " + person.getName() + ": " + person.getAge());
}