const Sum = {
  X: 10,
  Y: 85,
  D: 30,

  //y-x=D // Steps

  //y=D*3+x // Y value

  //

  FinalDestination: function () {
    return this.D * 3 + this.X;
  },
};

console.log(`${Sum.FinalDestination()}`);

const FindX = {
  Y: 85,
  D: 30,

  FindX: function () {
    return this.D * 3 - this.Y;
  },
};

console.log(FindX.FindX(), " <---X,   Y: 85,D: 30,");

const FindY = {
  X: 10,
  D: 30,

  FindY: function () {
    return this.D * 3 + this.X;
  },
};

console.log(FindY.FindY(), ",<--Y , X: 10,D: 30,");

const MinimalJumph = {
  X: 10,
  Y: 85,

  MinimalLength: function () {
    var Jumph = this.Y - this.X;
    return Jumph / 3;
  },
};
console.log(MinimalJumph.MinimalLength(), "<---D  X: 10,Y: 85,");

const NumberofJumph = {
  X: 10,
  Y: 85,
  D: 30,

  //y-x=D // Steps

  //y=D*3+x // Y value

  //

  Jumph: function () {
    var a = this.Y - this.X;

    let b = a / this.D;
    // var jumps = b.Math.round();
    return Math.round(b);
  },
};

console.log(NumberofJumph.Jumph(), "<----X: 10,Y: 85, D: 30");

function ListofJumps(X, D) {
  const First = X + D;

  const Second = First + D;

  const Third = Second + D;

  const overallSteps = [X, First, Second, Third];

  return console.log(overallSteps, "ListOfJumps");
}
ListofJumps(Sum.X, Sum.D);
ListofJumps(FindX.FindX(), FindX.D); //Find x

ListofJumps(FindY.X, FindY.D); // Find Y

ListofJumps(MinimalJumph.X, MinimalJumph.MinimalLength());

//functions

//Find Minimal jumph

const Numberofjumphs = function () {
  const x = Number(document.querySelector(".x").value);

  const y = Number(document.querySelector(".y").value);

  const D = Number(document.querySelector(".D").value);
  if (isNaN(x) || x < 0 || x == 0) {
    alert("Not Validate");
    return false;
  } else if (isNaN(y) || y < 0 || y == 0) {
    alert("Not Validate");
    return false;
  } else if (isNaN(D) || D < 0 || D == 0) {
    alert("Not Validate");
    return false;
  }

  var Jumps = (y - x) / D;

  var FinalJumps = Math.round(Math.abs(Jumps));

  document.querySelector(
    ".jumpsText"
  ).textContent = `The Minimal Jumps ${FinalJumps}`;
  console.log(FinalJumps, "JUMPS");

  const First = x + D;

  const Second = First + D;

  const Third = Second + D;

  const overallSteps = [x, First, Second, Third];

  console.log(overallSteps, "overallsteps");
};

const FindDistance = function () {
  const x1 = Number(document.querySelector(".x1").value);

  const y1 = Number(document.querySelector(".y1").value);

  if (isNaN(x1) || x1 < 0 || x1 == 0) {
    alert("Not Validate");
    return false;
  } else if (isNaN(y1) || y1 < 0 || y1 == 0) {
    alert("Not Validate");
    return false;
  }

  var Distance = (y1 - x1) / 3;
  console.log(Distance, "--DD");

  var FinalDistance = Math.round(Math.abs(Distance));

  document.querySelector(
    ".Distance"
  ).textContent = `The Distance ${FinalDistance}`;
  console.log(FinalDistance, "Find Distance");
};

document.querySelector(".submitbtn").addEventListener("click", function () {
  Numberofjumphs();
});

document
  .querySelector(".submitFindDistance")
  .addEventListener("click", function () {
    FindDistance();
  });
