function checkMood(mood, goodCallback, badCallback) {
    if (mood === "good") {
      //기분 좋을 때 하는 동장
      goodCallback();
    } else {
      //기분 안 좋을때
      badCallback();
    }
  }
  
  function cry() {
    console.log("ACTION :: CRY");
  }
  
  function sing() {
    console.log("ACTION :: SING");
  }
  
  function dance() {
    console.log("ACTION :: DANCE");
  }
  
  checkMood("bad", dance, cry);
  