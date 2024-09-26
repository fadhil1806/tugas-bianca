// 1.
// Array (Rak) untuk menyimpan piring
const task = []

// 2.
task.push('Piring Baru') //add piring ke dalam rak

const getPiring = task.pop() // Mengambil piring yang ada di bagian paling atas tumpukan

const seePiring = task[0] // Melihat piring di bagian paling atas tanpa mengeluarkannya

if(task.length == 0) console.log('Tidak ada piring') //Memeriksa apakah tumpukan piring kosong. hasilnya benar karena sudah di ambil

// 3.
// Kasus 1
task.push('Piring 1')
task.push('Piring 2')
task.push('Piring 3')

// Kasus 2
const getPiring2 = task.pop() //Ngambil piring paling terakhir jadi piring 3

// Kasus 3
console.log(task[0]); //Melihat piring paling atas hasilnya piring 1

// Kasus 4
if(task.length == 0)  console.log('Tidak ada piring') //Hasilnya ada piring

// Kasus 5
// Ambil semua piring yang tersisa, lalu cek apakah tumpukan kosong.
task.length = 0 //jadi in array nya 0 atau piring semua di ambil
if(task.length == 0)  console.log('Tidak ada piring') // hasilnya true


