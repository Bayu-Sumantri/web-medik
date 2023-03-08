
function hitungBMI() {
    var berat = document.getElementById("berat-badan").value;
    var tinggi = document.getElementById("tinggi-badan").value;
    var bmi = berat / Math.pow(tinggi / 100, 2);

    if (bmi >= 1 && bmi < 18.5) {
        keterangan = "Underweight";
        saran1 = "1. Konsumsi makanan yang sehat dan bergizi, termasuk sayuran, buah-buahan, protein rendah lemak, karbohidrat kompleks, dan lemak sehat.";
        saran2 = "2. Konsumsi makanan yang lebih sering dalam jumlah kecil-kecil, daripada makan dalam jumlah besar dan jarang.";
        saran3 = "3. Minum air yang cukup untuk membantu menjaga tubuh tetap terhidrasi.";
        saran4 = "4. Lakukan latihan fisik secara teratur, seperti berjalan, berlari, bersepeda, atau berenang.";
    } else if (bmi >= 18.5 && bmi < 25) {
        keterangan = "Normal weight";
        saran1 = "1. Makanlah makanan sehat: Pilihlah makanan yang kaya akan nutrisi seperti sayuran, buah-buahan, biji-bijian, dan protein rendah lemak. Hindari makanan yang tinggi kalori dan lemak jenuh.";
        saran2 = "2. Olahraga secara teratur: Lakukanlah olahraga setidaknya 30 menit setiap hari. Jenis olahraga yang disarankan antara lain berjalan kaki, berlari, berenang, atau bersepeda. ";
        saran3 = "3. Kurangi konsumsi gula: Batasi asupan gula, termasuk gula dalam minuman manis, kue-kue, dan camilan.";
        saran4 = "4. Minum banyak air: Minumlah setidaknya 8 gelas air putih setiap hari. Ini membantu menjaga tubuh tetap terhidrasi dan mengurangi rasa lapar.";
    } else if (bmi >= 25 && bmi < 30) {
        keterangan = "Berat badan berlebih";
        saran1 = "1. Lakukan olahraga secara teratur: Cobalah untuk melakukan olahraga setidaknya 30 menit per hari. Pilih aktivitas fisik yang menyenangkan seperti berjalan, bersepeda atau berenang.";
        saran2 = "2. Kurangi konsumsi kalori: Kurangi konsumsi makanan yang mengandung lemak dan gula tinggi. Makanlah lebih banyak buah-buahan, sayuran, dan sumber protein rendah lemak seperti ikan dan ayam tanpa kulit. ";
        saran3 = "3. Perbaiki pola makan: Makanlah lebih sering dan dalam porsi kecil. Jangan melewatkan sarapan, dan hindari ngemil di malam hari. ";
        saran4 = "4. Perbanyak minum air putih: Minumlah air putih secara teratur untuk membantu membuang racun dan menjaga tubuh tetap terhidrasi.";
    } else if (bmi >= 30) {
        keterangan = "Obesitas";
        saran1 = "1. Meningkatkan aktivitas fisik dengan berolahraga secara teratur dan konsisten, minimal 150 menit per minggu.";
        saran2 = "2. Nutrisi seimbang Makanlah makanan yang tinggi serat, protein, dan rendah kalori, serta kurangi makanan yang tinggi lemak, gula, dan garam. ";
        saran3 = "3. Hindari makanan olahan dan makanan cepat saji serta perbanyak konsumsi sayur dan buah segar. ";
        saran4 = "4. Preferensi Makanan : Cobalah makan dalam porsi kecil tapi sering dan hindari makan malam. Jangan melewatkan sarapan, karena sarapan dapat membantu metabolisme Anda. ";
    } else {
        keterangan = "please enter first";
        saran1 = "Enter a valid value";
        saran2 = "Enter a valid value";
        saran3 = "Enter a valid value";
        saran4 = "Enter a valid value";
    }

    var hasil = "BMI Anda: " + bmi.toFixed(1) + "<br>";
    hasil = "(" + keterangan + ")";
    document.getElementById("hasil_imt").innerHTML = hasil;
    document.getElementById("hasil_imt2").innerHTML = hasil;
    document.getElementById("saran_imt").innerHTML = saran1;
    document.getElementById("saran1_imt").innerHTML = saran1;
    document.getElementById("saran2_imt").innerHTML = saran2;
    document.getElementById("saran3_imt").innerHTML = saran3;
    document.getElementById("saran4_imt").innerHTML = saran4;
        swal("Informasi", hasil, "success");
    // alert(hasil);
    document.getElementById("saran1_imt").focus();
    
  }

  function cekGulaDarah() {
    // Ambil nilai kadar gula darah dari input
    var gulaDarah = document.getElementById("gulaDarah").value;

    // Cek kadar gula darah dan tampilkan hasil
    if (gulaDarah < 70) {
        keterangan = "Kadar gula darah rendah";
        saran1 = "Makan dengan teratur:\nIngatlah untuk makan setidaknya tiga kali sehari dan jangan melewatkan waktu makan. Perut kosong dapat menurunkan gula darah, jadi penting untuk makan secara teratur.";
        saran2 = "Pilih makanan yang sehat:\nUsahakan untuk memilih makanan yang sehat dan berserat tinggi seperti sayuran, buah-buahan dan biji-bijian.\nHindari makanan tinggi gula atau karbohidrat sederhana seperti permen, minuman manis, roti tawar dan nasi putih.";
        saran3 = "Minum cukup air:\nMinum banyak air dapat membantu menjaga kadar gula darah tetap stabil.";
        saran4 = "Olahraga:\nOlahraga teratur dapat meningkatkan sensitivitas insulin dan membantu menjaga kadar gula darah tetap stabil. Pilih olahraga yang Anda sukai, seperti hiking, berenang, atau bersepeda.";
    } else if (gulaDarah >= 70 && gulaDarah < 140) {
        
        keterangan = "Kadar gula darah normal";
        saran1 = "Makan makanan yang sehat dan seimbang:\nKontrol asupan karbohidrat, protein, dan lemak. Kurangi konsumsi makanan manis dan karbohidrat sederhana, yang dapat meningkatkan gula darah secara drastis.";
        saran2 = "Berolahraga secara teratur:\nOlahraga dapat meningkatkan sensitivitas insulin dan membantu tubuh mengatur gula darah dengan lebih efektif. Usahakan untuk melakukan olahraga minimal 30 menit setiap hari atau tiga kali seminggu.";
        saran3 = "Hindari stres:\nStres dapat meningkatkan kadar gula darah.";
        saran4 = "Minum air yang cukup:\nAir membantu mengatur gula darah dengan membantu tubuh menghilangkan kelebihan gula dalam urin.";
    } else if (gulaDarah >= 140 && gulaDarah < 200) {
        keterangan = "Kadar gula darah tinggi, prediabetes";
        saran1 = "Lakukan perubahan gaya hidup sehat seperti:\n* Mengurangi stres dan tidur yang cukup setiap hari.\n* Meningkatkan aktivitas fisik dengan olahraga teratur minimal.\n* Menjaga pola makan yang seimbang dengan mengonsumsi makanan yang rendah gula, rendah karbohidrat, dan tinggi serat.";
        saran2 = "Memantau kadar gula darah secara teratur dengan mengukur kadar gula darah di rumah atau melakukan tes darah di laboratorium.";
        saran3 = "Mengonsumsi obat-obatan yang diresepkan oleh dokter, jika diperlukan.";
        saran4 = "Konsultasikan dengan dokter atau ahli gizi untuk perawatan yang tepat dan terus ikuti rejimen yang direkomendasikan.";
    } else if (gulaDarah >= 200) {
        keterangan = "Kadar gula darah sangat tinggi, diabetes";
        saran1 = "Jadikan pola makan Anda lebih sehat dengan memilih makanan yang rendah karbohidrat dan gula, tinggi serat dan kaya nutrisi.";
        saran2 = "Tingkatkan aktivitas fisik dengan berolahraga secara rutin dan konsisten minimal 30 menit setiap hari.";
        saran3 = "Memantau kadar gula darah secara teratur dengan mengukur kadar gula darah di rumah atau melakukan tes darah di laboratorium.";
        saran4 = "Mengonsumsi obat-obatan yang diresepkan oleh dokter, seperti insulin atau obat diabetes oral, jika diperlukan,Menghindari kebiasaan merokok dan mengonsumsi alkohol secara berlebihan.";
    } else {
        keterangan = "Enter a valid value";
        saran1 = "invalid";
        saran2 = "invalid";
        saran3 = "invalid";
        saran4 = "invalid";
    }

    hasil = "hasil: " + keterangan;
    document.getElementById("hasil_gula").innerHTML = "hasil:" + keterangan;
    document.getElementById("saran_gula").innerHTML = saran1;
    document.getElementById("saran1_gula").innerHTML = saran1;
    document.getElementById("saran2_gula").innerHTML = saran2;
    document.getElementById("saran3_gula").innerHTML = saran3;
    document.getElementById("saran4_gula").innerHTML = saran4;
    document.getElementById("hasil_gula2").innerHTML = "hasil:" + keterangan;
    swal("Informasi", hasil, "success");
    // alert(hasil);
    document.getElementById("saran1_gula").focus();
}

  function hitungTekananDarah() {
    var sistolik = parseInt(document.getElementById("sistolik").value);
    var diastolik = parseInt(document.getElementById("diastolik").value);

    if (isNaN(sistolik) || isNaN(diastolik)) {
      keterangan = "Masukkan nilai tekanan darah";
      saran1 = "invalid";
      saran2 = "invalid";
      saran3 = "invalid";
      saran4 = "invalid";
    } else if (sistolik < 0 || diastolik < 0) {
      keterangan = "Tidak ada tekanan darah negatif";
      saran1 = "invalid";
      saran2 = "invalid";
      saran3 = "invalid";
      saran4 = "invalid";
    } else if (sistolik >= 180 || diastolik >= 120) {
      keterangan = "tekanan darah Anda sangat tinggi, harap segera periksa ke dokter.";
      saran1 = "1. Tetap tenang dan jangan panik. Tekanan darah yang sangat tinggi dapat menyebabkan kepanikan dan kecemasan, yang dapat memperburuk kondisi.";
      saran2 = "2. Santai dan istirahatlah dalam posisi yang nyaman. Cobalah untuk tidak melakukan aktivitas apa pun dan beristirahatlah dalam posisi yang nyaman, mis. B. duduk atau berbaring.";
      saran3 = "3. Periksa tekanan darah Anda secara teratur. Jika monitor tekanan darah tersedia, periksa secara teratur untuk memantau tekanan darah.";
      saran4 = "4. Hindari makanan atau minuman yang dapat memperburuk kondisi, seperti B. Minuman yang terlalu asin atau berkafein.";
    } else if (sistolik >= 140 || diastolik >= 90) {
      keterangan = "Tekanan Darah Anda tinggi";
      saran1 = "1. Lakukan pemeriksaan medis:\nJika Anda memiliki gejala tekanan darah tinggi, seperti sakit kepala, pusing, atau dada sesak, segera hubungi dokter.";
      saran2 = "2. Perubahan gaya hidup:\nPerubahan gaya hidup dapat membantu mengontrol tekanan darah Anda. Beberapa perubahan yang dapat Anda lakukan adalah: Makan makanan yang sehat dan rendah garam \n* Berolahraga secara teratur \n* Mengurangi konsumsi alkohol \n* Berhenti merokok \n* Mengurangi stres.";
      saran3 = "3. Minum obat sesuai petunjuk dokter:\nJika dokter meresepkan obat untuk mengontrol tekanan darah Anda, pastikan untuk minum obat tersebut sesuai petunjuk dokter. Jangan menghentikan penggunaan obat tanpa persetujuan dokter.";
      saran4 = "4. Pantau tekanan darah Anda secara teratur \nPeriksa tekanan darah Anda secara teratur di rumah dan dokumentasikan hasilnya. Beri tahu dokter Anda tentang tekanan darah Anda pada setiap kunjungan.";
    } else if (sistolik >= 120 || diastolik >= 80) {
      keterangan = "Tekanan darah Anda normal";
      saran1 = "1. Makan yang sehat: \nMakan makanan yang sehat dan seimbang seperti sayuran, buah-buahan, biji-bijian, ikan, kacang-kacangan dan daging tanpa lemak. Hindari makanan yang mengandung lemak jenuh dan kolesterol tinggi.";
      saran2 = "2. Berolahraga secara teratur:\nLakukan olahraga minimal 30 menit setiap hari, seperti berjalan kaki, joging, berenang, atau bersepeda. Olahraga dapat membantu meningkatkan sirkulasi dan mempertahankan tekanan darah normal.";
      saran3 = "3. Kurangi konsumsi garam:\nBatasi penggunaan garam, karena garam dapat meningkatkan tekanan darah. Jangan menambahkan garam pada makanan dan hindari makanan olahan yang tinggi garam.";
      saran4 = "4. Kurangi konsumsi alkohol:\nMinum alkohol dapat meningkatkan tekanan darah, jadi batasi atau hindari alkohol sama sekali.";
    } else {
      keterangan = "Tekanan Darah Anda Rendah";
      saran1 = "1. Konsumsi air yang cukup:\nMinum cukup air dapat membantu menjaga jumlah darah dalam tubuh, yang mencegah penurunan tekanan darah. Dianjurkan untuk minum setidaknya 8 gelas air setiap hari.";
      saran2 = "2. Konsumsi  gara dalam jumlah yang cukup:\nGaram dapat membantu menjaga keseimbangan elektrolit dalam tubuh, yang mencegah penurunan tekanan darah. Namun, konsumsi garam yang berlebihan juga dapat berdampak negatif bagi kesehatan. \nDianjurkan untuk makan garam secara merata.";
      saran3 = "3. Konsumsi makanan yang mengandung natrium:\nSodium adalah mineral yang membantu menjaga keseimbangan elektrolit dalam tubuh. Mengonsumsi makanan dengan sodium, seperti daging, ikan, susu, dan kacang-kacangan, dapat membantu menjaga tekanan \ndarah.";
      saran4 = "4. Hindari berdiri terlalu lama:\nBerdiri terlalu lama dapat menyebabkan darah menggenang di kaki dan membuat kaki terasa lemas, yang dapat menyebabkan tekanan darah rendah.\nJika Anda harus berdiri dalam waktu lama, usahakan untuk bergerak atau mengangkat kaki secara teratur.";
    }

    hasil = "Hasil: " + keterangan;
    document.getElementById("hasil_tekanan_darah").innerHTML = hasil;
    document.getElementById("hasil_tekanan_darah2").innerHTML = hasil;
    document.getElementById("saran_tekanan_darah").innerHTML = saran1;
    document.getElementById("saran1_tekanan_darah").innerHTML = saran1;
    document.getElementById("saran2_tekanan_darah").innerHTML = saran2;
    document.getElementById("saran3_tekanan_darah").innerHTML = saran3;
    document.getElementById("saran4_tekanan_darah").innerHTML = saran4;
        swal("Informasi", hasil, "success");
    // alert(hasil);
    document.getElementById("saran1_tekanan_darah").focus();
}

  $(document).ready(function() {
    $("#imt_muncul").click(function() {
        $("#imt_hasil").show("slow");
    });
    $("#tekanan_darah_muncul").click(function() {
        $("#tekanan_darah_hasil").show("slow");
    });
    $("#gula_muncul").click(function() {
        $("#gula_hasil").show("slow");
});
});
