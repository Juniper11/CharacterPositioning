var CharacterPositioning = function CharacterPositioning (letters) {
    
    var PositionNumber = {}
   
    for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      
      if (letter !== ' ') {

          //Could use either line below
      //if(PositionNumber.hasOwnProperty(letter)) 
      if(PositionNumber[letter]) {
       // console.log(PositionNumber[letter]);
       PositionNumber[letter].push(i);
     } else {
       PositionNumber[letter] = [i];
     }

    }

    }
    return PositionNumber;
   }
   
    console.log(CharacterPositioning('lighthouse in the house'));