function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  let errors = "";

  // Validasi input
  if (!name) errors += "Nama tidak boleh kosong.<br>";
  if (!email.match(/^[\w._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i))
    errors += "Format email tidak valid.<br>";
  if (!phone.match(/^\d+$/))
    errors += "Nomor telepon hanya boleh berisi angka.<br>";
  if (password.length < 6) errors += "Password minimal harus 6 karakter.<br>";

  // Tampilkan pesan error atau sukses
  document.getElementById("errorMessages").innerHTML = errors;
  document.getElementById("successMessage").innerHTML = errors
    ? ""
    : "Form berhasil disubmit!";

  return !errors; // Mencegah submit jika ada error
}
