let scrol = document.querySelectorAll('.scrol'),
         sections = scrol[0].querySelectorAll('section'),
         i = 0, j = 0;
    function down() {
        sections[i].style.display="none";
        i = (i < (sections.length - 1))?i+1:0;
        sections[i].style.display="flex";
        sections[i].style.opacity ="0";
        setTimeout(function(){
          sections[i].style.opacity ="1";
          sections[i].style.transition ="0.7s";
      },250);
   }
   function up() {
     sections[i].style.display="none";
        i = (i > 0)?i -1:sections.length - 1;							
        sections[i].style.display="flex";
        sections[i].style.opacity ="0";
        setTimeout(function(){
          sections[i].style.opacity ="1";
          sections[i].style.transition ="0.7s";
      },250);	
   }