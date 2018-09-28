/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */

var currentChannel = sevenContinents;
var currentLocation = {longitude: 48.265126, latitude: 11.669230, createdBy: "ausbau.weltbild.abweichen"};
console.log(currentLocation);
var channelName;


function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/minus.plus.yummy" target="_blank"><strong>minus.plus.yummy</strong></a>';

// get the correct star in the app bar
var checkIfStarred =  (channelName.starred ? true : false);
if (checkIfStarred === true){
  $('#channel-star').addClass("fas fa-star");
} else {
  $('#channel-star').removeClass("fas fa-star");
  $('#channel-star').addClass("far fa-star");
 }


    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');

currentChannel = channelName;
console.log("current channel: ", currentChannel);


return channelName;

}

/* #6 #liking a channel on #click */
function star() {
  /*  toggles between two classes solid/regular star */
  $('#channel-star').toggleClass("fas fa-star far fa-star");

  currentChannel.starred = !currentChannel.starred;
  console.log("is favorite now", currentChannel.starred);
  console.log("currentChannelName", currentChannel.name);

//  $('#channels li:contains(' + currentChannel.name + ')').toggleClass("fas fa-star far fa-star");



  $('#channels li:contains(' + currentChannel.name + ')').toggleClass("fas fa-star far fa-star");




}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}



// constructor function;

function Message(text){
  this.createdBy = currentLocation.createdBy;
  this.latitude = currentLocation.latitude;
  this.longitude = currentLocation.longitude;
  this.createdOn = Date.now();
  this.expiresOn = Date.now() + 15*60*1000;
  this.text = text;
  this.own = true;

}

function sendMessage(){
 var myMessage = new Message($('#input-field').val());
  console.log(myMessage);

//clear input field
  $('#input-field').val("");

  createMessageElement(myMessage);

//  diff= (myMessage.expiresOn - myMessage.createdOn)*1000*60 ;
//    console.log(diff);

}


function createMessageElement(Message){

  var expiresIn = Math.round(Message.expiresOn - Message.createdOn);

  //var result  ="<div class=\"message\"> <h3><a href=" + myMessage.createdBy +" target=\"_blank\"><strong>" + myMessage.createdBy + "</strong></a>"+ myMessage.createdOn + "<em>" + expiresIn + " min. left\"/em> </h3>  <p>" + Message.text + "</p> <button>+5 min.</button> </div> ";


  $('<div>').html("more elements").appendTo('#messages'); //Appends a new span to the element with id "parent".


return result;

}



function listChannels(){
  $('<li>').html("I am new").appendTo('#channels ul'); //Appends a new span to the element with id "parent".

  createChannelElement(channelObject);
  createChannelElement(channelObject);
  createChannelElement(channelObject);
  createChannelElement(channelObject);
  createChannelElement(channelObject);

}

function createChannelElement(channelObject){
    $('<li>').html("I am new").appendTo('#channels ul'); //Appends a new span to the element with id "parent".

}
