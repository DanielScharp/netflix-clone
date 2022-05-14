$(() => {

    $('#carousel1').owlCarousel({
      center: true, 
      items: 10,
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 4
        },
        1000: {
          items: 5.5
        }
      }
    });
    
    $('#carousel2').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 5
        },
        1000: {
          items: 6
        }
      }
    });
    
    $('#carousel3').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 3
        },
        600: {
          items: 5
        },
        1000: {
          items: 6
        }
      }
    });
  
  });