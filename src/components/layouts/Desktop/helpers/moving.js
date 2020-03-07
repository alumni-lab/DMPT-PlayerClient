const postMove = (data) => {
  let results = data
  const shiftAlong = (moveFrom) => {
    results[`col${moveFrom + 1}`].unshift(results[`col${moveFrom}`][2])
    results[`col${moveFrom}`].pop();
  }
  const checkForEmpties = (columnToCheck) => {
    if (results[`col${columnToCheck}`].includes(0)) {
      if (results[`col${columnToCheck}`][0] === 0) {
        results[`col${columnToCheck}`].splice(0, 1);
      } else if (results[`col${columnToCheck}`][1] === 0) {
        results[`col${columnToCheck}`].splice(1, 1);
      } else if (results[`col${columnToCheck}`][2] === 0) {
        results[`col${columnToCheck}`].splice(2, 1);
      }
    }
  }

  const checkNewResults = () => {

    if (results.col1.length > 2) {
      shiftAlong(1);
      checkForEmpties(2);
    }
    if (results.col2.length > 2) {
      shiftAlong(2);
      checkForEmpties(3);
    }
    if (results.col3.length > 2) {
      shiftAlong(3);
      checkForEmpties(4);
    }
    if (results.col4.length > 2) {
      shiftAlong(4);
      checkForEmpties(5);
    }
    if (results.col5.length > 2) {
      results.col1.unshift(results.col5[2])
      results.col5.pop();
      checkNewResults();
    }
  }
  checkNewResults()
  return results;
}

export default postMove;