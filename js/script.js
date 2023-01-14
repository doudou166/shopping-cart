let header = document.querySelector("#header1")
header.style.color = "red"
console.log(header)

function clickSum(click) {
    let clickSum = document.getElimentById('clickSum');
    let sumValue = parseInt(clickSum.innerText) + click;
    console.log(sumValue + click);
    clickSum.innerText = sumValue;
}

