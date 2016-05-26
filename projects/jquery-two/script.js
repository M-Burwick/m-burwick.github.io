$(function(){
  var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

  const toDashCase = (str) =>
    str.toLowerCase().split(" ").join("-");
  
  const createAvengers = (avengers) => {
      let $ul = $("<ul>").attr("id", "avengers");
      
      let avengerslis = avengers.map((a) => {
        return $('<li>')
            .addClass(toDashCase(a))
            .text(a);
    });
        return $ul.append(avengerslis);
   };
    $(".container").append(createAvengers(avengers));
});
    
    
    
    
    
    
    
    
  