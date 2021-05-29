
const rset =()=> {
    location.reload();
   
}
const calcy = () => {
  let ss = document.getElementById("a").value;

  let maths = document.getElementById("b").value;
  let comp = document.getElementById("c").value;

  let phy = document.getElementById("d").value;
  let chem = document.getElementById("e").value;

  let bio = document.getElementById("f").value;
  let urdu = document.getElementById("g").value;

  let eng = document.getElementById("h").value;

  let totalGrades =
    parseFloat(urdu) +
    parseFloat(eng) +
    parseFloat(ss) +
    parseFloat(maths) +
    parseFloat(comp) +
    parseFloat(phy) +
    parseFloat(chem) +
    parseFloat(bio);

  let perc = (totalGrades / 800) * 100;
  if (totalGrades >= 0 && perc != 0 && perc <= 100) {
    let grades = " ";
    if (perc <= 100 && perc >= 80) {
      grades = "A";
    } else if (perc <= 79 && perc >= 60) {
      grades = "B";
    } else if (perc <= 59 && perc >= 33) {
      grades = "C";
    } else {
      grades = "F";
    }

    if (perc >= 33) {
      document.getElementById(
        "showData"
      ).innerHTML = `out  of 800 your tatal is ${totalGrades} and percentage is ${perc}%. <br> your grade is ${grades}. congrats you are pass..... `;
    } else {
      document.getElementById(
        "showData"
      ).innerHTML = `out  of 800 your tatal is ${totalGrades} and percentage is ${perc}%. <br> your grade is ${grades}.  you are fail...`;
    }
  } else {
    document.getElementById(
      "showData"
    ).innerHTML = `ups!!!.... plse enter the valid value or fill the all field   `;
  }
};
