const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  // cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  username: state => state.user.username,
  password: state => state.user.password,
  frompath: state => state.user.frompath,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  // Profil Perguruan Tinggi
  profilPT: state => state.profil.profilPT,
  prodi: state => state.prodi.prodi,
  periode: state => state.periode.periode,
  listDosen: state => state.listdosen.listDosen,
  // Mahasiswa
  listMahasiswa: state => state.list.listMahasiswa,
  contohbiodatamahasiswa: state => state.contoh.contohbiodatamahasiswa.contohbiodatamahasiswa,
  editbiodatamahasiswa: state => state.getbiodatamahasiswa.editbiodatamahasiswa,
  deletebiodatamahasiswa: state => state.getbiodatamahasiswa.deletebiodatamahasiswa,
  listRiwayatPendidikanMahasiswa: state => state.getlistriwayatpendidikanmahasiswa.listRiwayatPendidikanMahasiswa,
  listQueryMahasiswa: state => state.list.listQueryMahasiswa,
  totalMahasiswa: state => state.list.totalMahasiswa,
  listPenugasanSemuaDosen: state => state.listpenugasansemuadosen.listPenugasanSemuaDosen, // List Penugasan Semua Dosen
  // Mata Kuliah
  contohmatakuliah: state => state.contoh.contohmatakuliah.contohmatakuliah,
  deletematakuliah: state => state.listmatakuliah.deletematakuliah,
  listMataKuliah: state => state.listmatakuliah.listMataKuliah, // List MataKuliah
  totalMataKuliah: state => state.listmatakuliah.totalMataKuliah,
  // Substansi Kuliah
  listsubstansiKuliah: state => state.listsubstansikuliah.listsubstansiKuliah,
  // Kurikulum
  contohkurikulum: state => state.contoh.contohkurikulum.contohkurikulum,
  listKurikulum: state => state.listkurikulum.listKurikulum, // List Kurikulum
  totalKurikulum: state => state.listkurikulum.totalKurikulum,
  deletekurikulum: state => state.listkurikulum.deletekurikulum,
  // Kelas Perkuliahan
  listKelasKuliah: state => state.listkelaskuliah.listKelasKuliah, // List Kelas Kuliah
  contohkelaskuliah: state => state.contoh.contohkelaskuliah.contohkelaskuliah,
  // Aktivitas Kuliah Mahasiswa
  aktivitasKuliahMahasiswa: state => state.aktivitaskuliahmahasiswa.aktivitasKuliahMahasiswa, // Aktivitas Kuliah Mahasiswa
  contohperkuliahan: state => state.contoh.contohperkuliahan.contohperkuliahan,

  listNilaiPerkuliahanKelas: state => state.listnilaiperkuliahankelas.listNilaiPerkuliahanKelas, // List Nilai Perkuliahan Kelas
  // Aktivitas Mahasiswa
  contohaktivitasmahasiswa: state => state.contoh.contohaktivitasmahasiswa.contohaktivitasmahasiswa,
  listAktivitasMahasiswa: state => state.listaktivitasmahasiswa.listAktivitasMahasiswa, // List Aktivitas Mahasiswa
  listAnggotaAktivitasMahasiswa: state => state.listanggotaaktivitasmahasiswa.listAnggotaAktivitasMahasiswa, // List Anggota Aktivitas Mahasiswa
  // Mahasiswa Lulus/DO
  listMahasiswaLulusDO: state => state.listmahasiswalulusdo.listMahasiswaLulusDO, // List Mahasiswa Lulus/DO
  contohmahasiswalulusdo: state => state.contoh.contohmahasiswalulusdo.contohmahasiswalulusdo,
  destination: state => state.destination.destination,
  errorLogs: state => state.errorLog.logs
}
export default getters
