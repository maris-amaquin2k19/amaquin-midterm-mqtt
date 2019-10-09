// basic functionalities
var client;

var btnPublish = $("#publish-btn");




// client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt")
// client.subscribe("mqtt/demo")




// client.publish("mqtt/demo", "hello world!")
$(document).ready(function () {
 
    var topic = "amaquin/fan/status";
    console.log("connect button clicked..")
    client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
    $("#btn-connect").click(function () {
      var time = new Date();
      var topic = "amaquin/fan/status";
      var message = "Fan is turned off";
      $("#status").text("Fan is currently turned off")
      client.publish(topic, message + " " + time);
      console.log(message)
    })

    $(".btn-1").click(function () {
      var time = new Date();
      var topic = "amaquin/fan/status";
      var message = "Fan is in mode 1";
      $("#status").text("Fan is currently turned in 1")
      client.publish(topic, message + " " + time);
      console.log(message)
    })
    $(".btn-2").click(function () {
      var time = new Date();
      var topic = "amaquin/fan/status";
      var message = "Fan is in mode 2";
      $("#status").text("Fan is currently turned in 2")
      client.publish(topic, message + " " + time);
    })
    $(".btn-3").click(function () {
      var time = new Date();
      var topic = "amaquin/fan/status";
      var message = "Fan is in mode 3";
      $("#status").text("Fan is currently turned in 3")
      client.publish(topic, message + " " + time);
    })

    // client.on("message", function (topic, payload) {
    //   var row = $("<tr>")
    //   $("<td>").text(topic).appendTo($(row))
    //   $("<td>").text(payload).appendTo($(row))
    //   $("<td>").text(moment().format('MMMM Do YYYY, h:mm:ss a')).appendTo($(row))
    //   $("tbody").append($(row))
    //   // console.log([topic, payload].join(": "));
    // })
  })//end of click




