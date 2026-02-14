
//membuat data array berisi 3 lagu favorit (judul, penyanyi, jumlah_likes, jumlah_play)

var lagu = [
  ['Fuwa - Fuwa Time', 'K-ON', 9820, 12111, 'fw.jpeg'],
  ['Listen', 'K-On', 7500, 9600, 'ls.jpeg'],
  ['Dont Say Lazy', 'K-On', 8000, 11000, 'dsz.jpeg'],
  ['Sajak Usang Kelas Pekerja', 'The Cloves and The Tobacco', 4000, 8000, 'sjk.jpeg'],
  ['Biarkan Berlari', 'The Cloves and The Tobacco', 1500, 2300, 'bbr.jpeg'],
  ['Kota Di Utara', 'The Cloves and The Tobacco', 2440, 5400, 'kdt.jpeg'],
  ['Sajak Usang Kelas Pekerja', 'Kitauji High School', 4000, 8000, 'rct.jpeg'],
  ['Hibike! Euphonium', 'Kitauji High School', 1500, 2300, 'he.jpeg'],
  ['Tutti!', 'Kitauji High School', 2440, 5400, 'tut.jpeg'],
  
];

var element = `` 
for (let i = 0; i < lagu.length; i++) {
  element += `<div class="lagu">
                <h2>${lagu[i][0]}</h2>
                <small>
                     <i>Oleh ${lagu[i][1]}</i>
                </small>
                <img src="img/${lagu[i][4]}" alt="" srcset="">
                <div class="bawah">
                     <div class="kanan">${lagu[i][2]}</div>
                     <div class="kiri">${lagu[i][3]}</div>
                </div>
              </div>`
}



var konten = document.getElementById("container");

konten.innerHTML = element;