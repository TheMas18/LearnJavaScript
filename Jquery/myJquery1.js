// console.log("we are using jquery");

//Syntax $('selector').action()
 

/*  $('p').click(); //click on p
    $('p').click(function(){
        console.log("You click on p");
     $('p').hide(); 
    }); 
 */

/*  $('p').click(function(){

    //  $(this).hide();
     $('.par').hide();
    }); //for example we have multiple p now if we want to hide the paragraph on which we will click., for this we can go for this
  */
$(document).ready(function () {
  //Your jquery code here
  /*Sometimes page takes time to load so performing any task using jquery before
          page loads it can cause error.
          So this will make sure document is loaded and in this block we will write our jquery
          so whenever document will be loaded completely then only it will get executed
        */
  /*
              There is another way to write this 
              $(function () {
                    //Your jquery code here
              });
          */
  /*There are three main types of selectors in jQuery
             1. element selector
             2. class selector
             3. id selector
          */
  /*
     // 1. Element selector0
  
          $('p').click(()=>{
              console.log("You Clicked On P",this);
          }); */
  /* // 2. Class selector
  
          $('.first').click(()=>{
              console.log("You click on P by class selector");
          });
   */
  /* // 3. id selector
          $('#second').click(()=>{
              console.log("You click on P by id selector");
          }); */
          
  /* Events in Jquery
             1. Mouse Events = click , dblclick,mousecenter ,mouse leave ...
             2. keyboard Events = keypress , keydown , MediaKeyStatusMap ...
             3. form events= submit ,change , focus , blur ...
             4. document/window events = load,resize , scroll , unload ...;

          */
  /*
          //Lets try double click

           $('.first').dblclick(()=>{
            console.log("Double clicked Event")
          });
 */
  /* $('.first').mouseenter(()=>{
            console.log("Mouse enter Event") // whenever you will go on the element it will show you entered its like hovering
          }); */
  /* $('.first').hover(()=>{
            console.log("Hover Event")
          }, 
          function (){
            console.log("Thanks For Coming");
          }
          );
 */
  //on method
  /* 
  $("p").on(
    {
        click: function () {
        console.log("Thanks for clicking");
        },
        mouseleave : function(){
        console.log("Leaving");
        }
    }
  ); */
  /* 
  //show and hide 
  $('#wiki').hide(1000,function(){
    console.log("hidden"); // when 1000 ms will be done it will hide and then it will show it onconsole
  })
  $('#wiki').show(1000,function(){
    console.log("show");
  });
   */
  /* // toggle 
  $(".but").click(() => {
    $("#wiki").toggle(1000);
  }); */
  /* $("#wiki").slideUp(1000)
  $("#wiki").slideDown(1000)
  $("#wiki").slideToggle(1000)
  
  /*
  they take two args first is speed second is callback function
  speed is like , for example if we take paragraph. speed is how much in speed 
                                that paragraph will show/slide
  callback function is like function you want to execute after the speed 
  */
  /*
  $("#wiki").slideUp(1000,()=>{
    console.log("Done Sliding Up");
  })

  //callback  function and speed are optional arguments.
  */
/* 
  //Animate Function is jQuery

  $('#wiki').animate({
    opacity:0.3,
    height: '150px',
    width :'350px',

  },2000);
  //we can write slow ,fast in speed instead of 2000

 */
/* 
  //Below will execute in queue 
  $('#wiki').animate({opacity:0.3,},2000);
  $('#wiki').animate({opacity:0.9,},4000);
  $('#wiki').animate({height: '300px'},2000);
  $('#wiki').animate({width :'350px'},2000);
 */
/* 
  // stop method can stop the animation if we use .
  $('#wiki').animate({opacity:0.3,},2000);
  $('#wiki').animate({opacity:0.9,},1000);
  $('#wiki').animate({width :'350px'},12000);

  //Here we used button to stop
  $('#stop').click(()=>{
    $('#wiki').stop();
  });
   */
});
