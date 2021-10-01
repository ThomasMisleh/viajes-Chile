$(document).ready(function () {
  //esconder y aparecer quienes somos y destacados
  $("#esconder-seccion1").click(function () {
    $(".quienessomos").toggle();
  });

  $("#esconder-seccion2").click(function () {
    $(".destacados").toggle();
  });

  // los parrafos de la seccion quienes somos se vuelven verde
  $(".verde").dblclick(function () {
    $(this).addClass("text-success");
  });

  //el nav se vuelve solido al hacer scroll
  $(window).scroll(function () {
    if ($("#navbar").offset().top > 200) {
      $("#navbar").addClass("navbar-color");
    } else {
      $("#navbar").removeClass("navbar-color");
    }
  });

  //al precionar las imagenes de las card estas se desvanecen
  $(document).ready(function () {
    $(".ocultar1").click(function (evento) {
      evento.preventDefault();
      $(".capaefectos1").hide("slow");
    });
    $("#mostrar").click(function (evento) {
      evento.preventDefault();
      $(".capaefectos1").show(5000);
    });
  });

  $(document).ready(function () {
    $(".ocultar2").click(function (evento) {
      evento.preventDefault();
      $(".capaefectos2").hide("slow");
    });
    $("#mostrar").click(function (evento) {
      evento.preventDefault();
      $(".capaefectos2").show(5000);
    });
  });
  $(document).ready(function () {
    $(".ocultar3").click(function (evento) {
      evento.preventDefault();
      $(".capaefectos3").hide("slow");
    });
    $("#mostrar").click(function (evento) {
      evento.preventDefault();
      $(".capaefectos3").show(5000);
    });
  });
  $(document).ready(function () {
    $(".ocultar4").click(function (evento) {
      evento.preventDefault();
      $(".capaefectos4").hide("slow");
    });
    $("#mostrar").click(function (evento) {
      evento.preventDefault();
      $(".capaefectos4").show(5000);
    });
  });

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
