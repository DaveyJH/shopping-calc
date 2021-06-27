let sainsburys;
let butchers;
let waitrose;
let other;
let total;
let joSplit;
let daveJL;
let daveS;

function calculate(event){
  // stop refresh
  event.preventDefault();
  // get values
  sainsburys = ((Number(document.getElementById("sainsburys").value)) * 100);
  waitrose = ((Number(document.getElementById("waitrose").value)) * 100);
  butchers = ((Number(document.getElementById("butchers").value)) * 100);
  other = ((Number(document.getElementById("other").value)) * 100);
  // run calculation
  shopTotal(sainsburys, butchers, waitrose, other);
}

function shopTotal(s, b, w, o){
  // calculate total
  total = (s + b + w + o);
  // display total
  document.getElementById("calculated-total").innerHTML = (total / 100);
  // calculate individuals
  split(total);
}

function split(t){
  // check sainsburys if more than half
  if (t <= (2 * sainsburys)){
    // jo sainsburys = half total rounded up
    joSplit = Math.ceil(t / 2);
    document.getElementById("jo-result").innerHTML = (joSplit / 100);
    // jo JL = 0
    document.getElementById("jo-mc").innerHTML = 0;
    // dave sainsburys = remaining sainsburys amount
    daveS = Math.floor((t - joSplit) - (butchers + waitrose + other));
    document.getElementById("dave-s-result").innerHTML = (daveS / 100);
    // dave JL = other three amounts
    daveJL = (Math.round(t) - (joSplit + daveS));
    document.getElementById("dave-mc-result").innerHTML = (daveJL / 100);
  }
  // if sainsburys is less than half
  else{
    // jo sainsburys = total sainsburys
    document.getElementById("jo-result").innerHTML = (sainsburys / 100);
    // jo JL = half of total rounded down - sainsburys
    document.getElementById("jo-mc").innerHTML = (Math.floor((total - 2 * Math.floor(sainsburys)) / 2) / 100);
    // dave sainsburys = 0
    daveS = 0;
    document.getElementById("dave-s-result").innerHTML = daveS;
    // dave JL = half of total rounded up
    daveJL = ((Math.ceil(t / 2)) / 100);
    document.getElementById("dave-mc-result").innerHTML = daveJL;
  }
}

document.getElementById("total").addEventListener("click", calculate);