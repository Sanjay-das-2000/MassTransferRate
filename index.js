document.getElementById("Button").addEventListener("click", () => {
  const permiability = +(document.getElementById("Permiability").value);
  const thickness = +(document.getElementById("Thickness").value);
  const rhoutside = +(document.getElementById("RHoutside").value);
  const rhinside = +(document.getElementById("RHinside").value);
  const length = +(document.getElementById("Length").value);
  const breadth = +(document.getElementById("Breadth").value);
  const height = +(document.getElementById("Height").value);

  const Area = length * breadth + 2 * length * height + 2 * breadth * height;

  const Rate = permiability * Area * (Math.abs((rhoutside - rhinside)) / thickness);


    alert("The mass transfer rate is " + Rate + " kg/sec");
});

