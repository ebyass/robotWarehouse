export function createWarehouse(gridXLength: number, gridYLength: number) {
  let rows = [];
  for (let y = 0; y < gridYLength; y++) {
    let col = [];
    for (let x = 0; x < gridXLength; x++) {
      col.push(0);
    }
    rows.push(col);
  }
  return rows;
}

function putRobotOnGrid(xAxis: number, yAxis: number, grid: number[][]) {
  grid[yAxis][xAxis] = 1;
  return grid;
}

export function moveRobot(
  gridWithRobot: number[][],
  commands: string,
  xAxisRobotStartPos: number,
  yAxisRobotStartPos: number
) {
  const commandsData = commands.split(" ");
  for (let i = 0; i < commandsData.length; i++) {
    if (
      xAxisRobotStartPos < 0 ||
      xAxisRobotStartPos > 9 ||
      yAxisRobotStartPos < 0 ||
      yAxisRobotStartPos > 9
    ) {
      throw new Error("You're outside the warehouse!");
    } else {
      if (commandsData[i] === "N") {
        gridWithRobot[yAxisRobotStartPos][xAxisRobotStartPos] = 0;
        gridWithRobot[(yAxisRobotStartPos -= 1)][xAxisRobotStartPos] = 1;
      }
      if (commandsData[i] === "E") {
        gridWithRobot[yAxisRobotStartPos][xAxisRobotStartPos] = 0;
        gridWithRobot[yAxisRobotStartPos][(xAxisRobotStartPos += 1)] = 1;
      }
      if (commandsData[i] === "S") {
        gridWithRobot[yAxisRobotStartPos][xAxisRobotStartPos] = 0;
        gridWithRobot[(yAxisRobotStartPos += 1)][xAxisRobotStartPos] = 1;
      }
      if (commandsData[i] === "W") {
        gridWithRobot[yAxisRobotStartPos][xAxisRobotStartPos] = 0;
        gridWithRobot[yAxisRobotStartPos][(xAxisRobotStartPos -= 1)] = 1;
      }
    }
  }

  return gridWithRobot;
}

export function runProgramme() {
  let xAxisRobotStartPos = 0;
  let yAxisRobotStartPos = 9;
  let commands = "N E N E N E N E";

  const grid = createWarehouse(10, 10);
  const gridWithRobot = putRobotOnGrid(
    xAxisRobotStartPos,
    yAxisRobotStartPos,
    grid
  );
  const newGrid = moveRobot(
    gridWithRobot,
    commands,
    xAxisRobotStartPos,
    yAxisRobotStartPos
  );
  return newGrid;
}
