document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('regButton').addEventListener('click', function(){
        document.getElementById('loginDiv').children[0].style.display='none';
        document.getElementById('registerDiv').children[0].style.display='block';
      
    });

    document.getElementById('loginButton').addEventListener('click', function(){
    
        document.getElementById('loginDiv').children[0].style.display='block';
        document.getElementById('registerDiv').children[0].style.display='none';
    });

})