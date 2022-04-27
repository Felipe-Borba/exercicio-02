let keepAddingStudent = true;
const students = [];

do {
  const option = promptNumber(`
  Digite 2 para calcular a nota de todos os alunos
  Digite 1 para adicionar um estudante
  Digite 0 para sair`);

  switch (option) {
    case 2:
      evaluateAllStudent();
      break;
    case 1:
      const name = prompt("Digite o nome do estudante");
      const firstGade = promptNumber("Digite o valor da primeira nota");
      const secondGrade = promptNumber("Digite o valor da segunda nota");

      students.push({ name, firstGade, secondGrade });
      break;
    case 0:
      alert("Saindo...");
      keepAddingStudent = false;
      break;

    default:
      alert("Opção inválida saindo do programa!");
      break;
  }
} while (keepAddingStudent);

function promptNumber(params) {
  return Number(prompt(params));
}

function evaluateAllStudent() {
  for (const student of students) {
    const average = calculateAverage(student);
    alert(`
    A média do aluno(a) ${student.name} é: ${average}
    ${makeEvaluateMessage(average, student)}`);
  }
}

function makeEvaluateMessage(average, student) {
  const approved = average >= 7;

  if (approved) {
    return `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`;
  } else {
    return `Não foi dessa vez, ${student.name}! Tente novamente!`;
  }
}

function calculateAverage(student) {
  const { firstGade, secondGrade } = student;
  const average = (firstGade + secondGrade) / 2;
  return average.toFixed(2);
}
