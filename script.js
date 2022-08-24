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
