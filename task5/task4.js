do {
  let i = 0;
  let newStudent = prompt("Введите имя нового студента!");
  i++;
  newStudent = newStudent.trim();
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`);
  }
} while (i < 3);

// let i = 0;
// while (i < 3) {
//   let newStudent = prompt("Введите имя нового студента!");
//   i++;
//   newStudent = newStudent.trim();
//   if (newStudent) {
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
// }

// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt("Введите имя нового студента!");
//   newStudent = newStudent.trim();
//   if (newStudent) {
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
// }
