//rendering Map of India from code on http://bl.ocks.org/karmadude/4526201

var width = 910,
    height = 563;

var projection = d3.geo.mercator()
  .center([83, 23.5])
  .scale(890);

var path = d3.geo.path()
  .projection(projection)
  .pointRadius(2);

var tile = d3.geo.tile()
    .scale(projection.scale() * 2 * Math.PI)
    .translate(projection([0, 0]))
    .zoomDelta((window.devicePixelRatio || 1) - .5);

var svg = d3.select(".map")
  .append("svg")
    .attr("width", width)
    .attr("height", height);

var tooltip = d3.select("body")
  .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

tooltip.append("div")
    .attr("class", "state-title");
tooltip.append("div")
    .attr("class", "state-population");

var defs = svg.append("defs");

var ne = svg.append("g")
  .attr("id", "natural-earth");

var india = svg.append("g")
  .attr("id", "india");

var indiaPlaces = svg.append("g")
  .attr("id", "places");

var states = svg.append("g")
  .attr("id", "states");

var pop;

var format1000 = d3.format(',');

d3.json("in-map-major-cities.json", function(error, data) {
  drawNaturalEarth();
  drawIndia(data);
  drawIndiaPlaces(data);
  drawStates(function() {
  });
});

function drawIndia(data) {
  var subunits = topojson.object(data, data.objects.subunits);

  india.selectAll("path.subpath")
      .data(subunits.geometries)
    .enter().append("path")
      .attr('class', function(d) { return 'subunit ' + d.id; })
      .attr('id', function(d) { return d.id; })
      .attr("d", path);
}

function drawIndiaPlaces(data) {
  indiaPlaces.selectAll("path.place")
      .data(topojson.object(data, data.objects.places).geometries)
    .enter().append("path")
      .attr("d", path)
      .attr("class", "place")
      .on("mouseenter", function(d) {
          tooltip.transition()
            .duration(100)
            .style("opacity", 1);

          tooltip.select('.state-title')
            .text(d.properties.name);
          tooltip.select('.state-population')
              .text('');
        })
        .on("mousemove", function(d) {
          tooltip.style("left", (d3.event.pageX+5) + "px")
            .style("top", (d3.event.pageY+5) + "px");
        })
        .on("mouseleave", function(d) {
          tooltip.transition()
            .duration(100)
            .style("opacity", 0);
        });
}

// Code from D3 United States Example at http://bl.ocks.org/4150951
function drawNaturalEarth() {
  var tiles = tile();

  india.selectAll('.subunit')
    .classed('natural-earth', true);

  var clips = defs.append("clipPath")
      .attr("id", "clip");
  clips.append("use")
      .attr("xlink:href", "#INX");
  clips.append("use")
      .attr("xlink:href", "#INA");
  clips.append("use")
      .attr("xlink:href", "#INN");
  clips.append("use")
      .attr("xlink:href", "#INL");

  ne.attr("clip-path", "url(#clip)")
      .selectAll("image")
        .data(tiles)
      .enter().append("image")
        .attr("xlink:href", function(d) { return "http://" + ["a", "b", "c", "d"][Math.random() * 4 | 0] + ".tiles.mapbox.com/v3/mapbox.natural-earth-2/" + d[2] + "/" + d[0] + "/" + d[1] + ".png"; })
        .attr("width", Math.round(tiles.scale))
        .attr("height", Math.round(tiles.scale))
        .attr("x", function(d) { return Math.round((d[0] + tiles.translate[0]) * tiles.scale); })
        .attr("y", function(d) { return Math.round((d[1] + tiles.translate[1]) * tiles.scale); });
}

function drawStates(callback) {
  d3.json("in-states-topo.json", function(data) {
    states.selectAll("path")
        .data(topojson.object(data, data.objects.states).geometries)
      .enter().append("path")
        .attr('class', "state")
        .attr("title", function(d) { return d.properties.name; })
        .attr("d", path)
        .on("mouseenter", function(d) {
          d3.select(this).classed('hover', true);
          tooltip.transition()
            .duration(100)
            .style("opacity", 1);

          if (pop[d.id]) {
            tooltip.select('.state-title')
              .text(d.properties.name);
            tooltip.select('.state-population')
              .text(format1000(pop[d.id]));
          }
        })
        .on("mousemove", function(d) {
          tooltip.style("left", (d3.event.pageX+5) + "px")
            .style("top", (d3.event.pageY+5) + "px");
        })
        .on("mouseleave", function(d) {
          d3.select(this).classed('hover', false);
          tooltip.transition()
            .duration(100)
            .style("opacity", 0);
        });

    drawPopulation(callback);
  });
}

function drawPopulation(callback) {
  d3.json("in-population.json", function(population) {
    pop = population.states;
      callback();
  });
}

  d3.select(self.frameElement.parentElement).style('background', '#faf5e2');
  d3.select(self.frameElement)
    .style("height", "664px")
    .style("border", "none");


