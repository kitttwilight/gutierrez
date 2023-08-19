document.addEventListener("DOMContentLoaded", function() {
    const audioElementG = new Audio("g_audio/diduknowmoon.mp3");
    const moonImage = document.getElementById("moon");
  
    if (moonImage) {
      // Add a hover effect to increase the moon size
      moonImage.addEventListener("mouseover", function () {
        moonImage.style.transform = "scale(1.1)";
      });
  
      // Reset the moon size when the mouse is moved away
      moonImage.addEventListener("mouseout", function () {
        moonImage.style.transform = "scale(1)";
      });
  
      // Play audio on moon image click
      moonImage.addEventListener("click", function () {
        audioElementG.play();
      });
    }
  
    const audioElementC = new Audio("g_audio/correct.mp3");
    const audioElementW = new Audio("g_audio/WRONG.wav");
  
    // Get references to the button elements
    const btnLarge = document.getElementById('btnL');
    const btnSmall = document.getElementById('btnS');
  
    // Get references to the div elements
    const wrongDiv = document.getElementById('WRONG');
    const rightDiv = document.getElementById('RIGHT');
  
    // Get references to the image elements
    const gImages = document.querySelectorAll('.msG img');
    const greerImage = document.getElementById('greer');
    const wilcockImage = document.getElementById('wilcock');
  
    // Define a single function for onmouseover and onmouseout
    function handleMouseOverAndOut(imageElement) {
      imageElement.addEventListener('mouseover', function () {
        imageElement.style.transform = "scale(1.1)";
      });
  
      imageElement.addEventListener('mouseout', function () {
        imageElement.style.transform = "scale(1)";
      });
    }
  
    // Add event listeners to the buttons
    btnLarge.addEventListener('click', function () {
      audioElementC.play();
      rightDiv.style.display = "block"; // Show right div
  
      // Automatically hide the div after a delay (e.g., 500 milliseconds)
      setTimeout(function () {
        rightDiv.style.display = "none"; // Hide right div
      }, 500); // Change the delay as needed
    });
  
    btnSmall.addEventListener('click', function () {
      audioElementW.play();
      wrongDiv.style.display = "block"; // Show wrong div
  
      // Automatically hide the div after a delay (e.g., 800 milliseconds)
      setTimeout(function () {
        wrongDiv.style.display = "none"; // Hide wrong div
      }, 800); // Change the delay as needed
    });
  
    // Add event listeners to the gImages
    gImages.forEach(function (image) {
      handleMouseOverAndOut(image);
  
      image.addEventListener('click', function () {
        let audioElement;
  
        switch (image.id) {
          case 'g1':
            audioElement = new Audio("g_audio/bomb.wav");
            break;
          case 'g2':
            audioElement = new Audio("g_audio/war.mp3");
            break;
          case 'g3':
            audioElement = new Audio("g_audio/effect.wav");
            break;
          case 'g4':
            audioElement = new Audio("g_audio/burger.wav");
            break;
          case 'g5':
            audioElement = new Audio("g_audio/dimension.wav");
            break;
          case 'g6':
            audioElement = new Audio("g_audio/government.wav");
            break;
          default:
            break;
        }
  
        if (audioElement) {
          audioElement.play();
        }
      });
    });
  
    // Add event listeners to the greer and wilcock images
    greerImage.addEventListener('click', function () {
      const audioElementGreer = new Audio("g_audio/greer.wav");
      audioElementGreer.play();
    });
  
    wilcockImage.addEventListener('click', function () {
      const audioElementWilcock = new Audio("g_audio/wilcock.wav");
      audioElementWilcock.play();
    });
  });
  