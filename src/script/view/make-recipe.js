$(document).ready(function(){
    var total_member = 1;

    function tambahMember(){
      var n = total_member + 1;

      var isi = '<div class="member" id="tambahmember'+total_member+'" style="display:none">';

      isi += '<div class="col-lg-12" style="margin-top: 20px;"><span class="placeholder">STEPS</span><div class="steps-img" style="width: 70%; margin: auto; height: 150px; background-color: #eee; vertical-align: center; text-align: center;"><a href="#"><img src="assets/img/photo-camera.png" alt="" style="width: 60px; margin-top: 20px;"><p style="font-weight: bold;">Tap to insert photos</p></a></div><input type="text" style="border: none; width: 100%; border-bottom: 1px solid #333; outline: none;">';

      isi += '</div>';

      $('button.btn-tambah').before(isi);
      $('#tambahmember'+total_member).slideDown('medium');

      total_member++;
    }

    function hapusMember(){
      total_member--;
      if(total_member<=1){
        total_member = 1;
      }
      $('#tambahmember'+total_member).slideUp('medium', function(){
        $(this).remove();
      });
    }

    $('button.btn-tambah').click(function(){
      tambahMember();
    });

    $('button.btn-kurang').click(function(){
      hapusMember();
    });

    });

    function validation(){
      var data = document.getElementById('data').value;
      if(data==""){
        alert("No recipe data input");
      }else{
        var yakin = confirm("Do you want to reset?");
        
        if (yakin) {
            window.location = "make-recipe-page.html";
          }
      }
    }  
     
     function dataSave(){
          var data = document.getElementById('data').value;
          if(data==""){
            alert("No recipe saved, Please fill all information of recipe");
          }else{
            alert("Recipe Saved");
            window.location = "detail-recipe-page.html";
          }
     }

        //confirm
        // var yakin = confirm("Apakah kamu yakin akan mengunjungi petanikode?");

        // if (yakin) {
        //     window.location = "https://www.petanikode.com";
        // } else {
        //     document.write("Baiklah, tetap di sini saja ya :)");
        // }
