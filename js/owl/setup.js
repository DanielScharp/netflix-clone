$(() => {

    $('#carousel1').owlCarousel({
      center: true, 
      items: 10,
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
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
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 7
        }
      }
    });
    
    $('#carousel3').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 7
        }
      }
    });
  
  });