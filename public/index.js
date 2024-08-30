function openaboutus (){
    document.getElementById("about-us-overlay").style.display = "block";
  }
  aboutusfooter.addEventListener('click', openaboutus);
  
      function closeaboutusfun (){
          document.getElementById("about-us-overlay").style.display = "none";
          }
          document.getElementById("about-us-overlay").addEventListener('click', closeaboutusfun);
  
  
  
  
  
          function openprivatepolicy (){
              document.getElementById("privacy-policy-overlay").style.display = "block";
            }
            privatepolicyfooter.addEventListener('click', openprivatepolicy);
            
                function closeprivatepolicyfun (){
                    document.getElementById("privacy-policy-overlay").style.display = "none";
                    }
                    document.getElementById("privacy-policy-overlay").addEventListener('click', closeprivatepolicyfun);
  
  
  
  
  
                    function openterms (){
                      document.getElementById("terms-of-service-overlay").style.display = "block";
                    }
                    termsfooter.addEventListener('click', openterms);
                    
                        function closeterms (){
                            document.getElementById("terms-of-service-overlay").style.display = "none";
                            }
                            document.getElementById("terms-of-service-overlay").addEventListener('click', closeterms);
          
          
  



                            document.addEventListener('DOMContentLoaded', function() {
                                // Function to handle click events and perform redirection
                                function redirectToCategoryPage(event) {
                                    const categoryId = event.currentTarget.id;
                                    if (categoryId) {
                                        // Construct the URL based on the category ID
                                        const url = `/${categoryId}`;
                                        // Redirect to the constructed URL
                                        window.location.href = url;
                                    }
                                }
                            
                                // Get all category elements
                                const categories = document.querySelectorAll('.catagories-shopping');
                            
                                // Attach click event listener to each category element
                                categories.forEach(function(category) {
                                    category.addEventListener('click', redirectToCategoryPage);
                                });
                            });

                            

                            document.addEventListener('DOMContentLoaded', function() {
                                // Function to handle click events and perform redirection
                                function redirectToHomePage() {
                                    window.location.href = '/';
                                }
                            
                                // Get the header logo element
                                const headerLogo = document.getElementById('headerlogo');
                            
                                // Attach click event listener to the header logo element
                                if (headerLogo) {
                                    headerLogo.addEventListener('click', redirectToHomePage);
                                }
                            });
                            