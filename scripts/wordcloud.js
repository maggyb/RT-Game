//d3 built in  colour palettes 
const fill = d3.scale.category20();
//takes window size and modifies the alue
var w = window.innerWidth / 1.5
var h = window.innerHeight / 1.5

function getText() {	
	//takes input from textarea and splits it, making a JS Object in the process
  var textArea = document.getElementById("inputWords");
  var words = textArea.value;

  // check if there are words before creating wordmap
  if(words) {
    words = words.split(" ").map(function(d) {
      return {text: d, size: 10 + Math.random() * 90};
    });
    
    //sets up a word cloud
    d3.layout.cloud().size([w,h])
      .words(words)
      .padding(5)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return d.size; })
      .on("end", draw)
      .start();
      
      document.getElementById("wordcloudContainer").style.width = "100%";
  } else {
    alert('Please give feedback')
  }
	
}

function draw(words) {
  // on the body create svg
  d3.select("#wordcloud").append("svg")
    .attr("width", w)
    .attr("height", h)
    .append("g")
    .attr("transform", "translate(" + w/2 + "," + h/2 + ")")
    .selectAll("text")
    .data(words)
    .enter().append("text")
    .style("font-size", function(d) { return d.size + "px"; })
    .style("font-family", "Impact")
    .style("fill", function(d, i) { return fill(i); })
    .attr("text-anchor", "middle")
    .attr("transform", function(d) {
    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
  })
    .text(function(d) { return d.text; });
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeWordcloud() {
  document.getElementById("wordcloudContainer").style.width = "0%";
}