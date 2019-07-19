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
  profilPT: state => state.profil.profilPT,
  prodi: state => state.prodi.prodi,
  periode: state => state.periode.periode,
  listDosen: state => state.listdosen.listDosen,
  listMahasiswa: state => state.list.listMahasiswa,
  listQueryMahasiswa: state => state.list.listQueryMahasiswa,
  totalMahasiswa: state => state.list.totalMahasiswa,
  listPenugasanSemuaDosen: state => state.listpenugasansemuadosen.listPenugasanSemuaDosen, // List Penugasan Semua Dosen
  listMataKuliah: state => state.listmatakuliah.listMataKuliah, // List MataKuliah
  totalMataKuliah: state => state.listmatakuliah.totalMataKuliah,
  listKurikulum: state => state.listkurikulum.listKurikulum, // List Kurikulum
  totalKurikulum: state => state.listkurikulum.totalKurikulum,
  listKelasKuliah: state => state.listkelaskuliah.listKelasKuliah, // List Kelas Kuliah
  listNilaiPerkuliahanKelas: state => state.listnilaiperkuliahankelas.listNilaiPerkuliahanKelas, // List Nilai Perkuliahan Kelas
  aktivitasKuliahMahasiswa: state => state.aktivitaskuliahmahasiswa.aktivitasKuliahMahasiswa, // Aktivitas Kuliah Mahasiswa
  listAktivitasMahasiswa: state => state.listaktivitasmahasiswa.listAktivitasMahasiswa, // List Aktivitas Mahasiswa
  listMahasiswaLulusDO: state => state.listmahasiswalulusdo.listMahasiswaLulusDO, // List Mahasiswa Lulus/DO
  destination: state => state.destination.destination,
  errorLogs: state => state.errorLog.logs,
  contohbiodatamahasiswa: state => state.contoh.contohbiodatamahasiswa.contohbiodatamahasiswa,
  editbiodatamahasiswa: state => state.getbiodatamahasiswa.editbiodatamahasiswa,
  deletebiodatamahasiswa: state => state.getbiodatamahasiswa.deletebiodatamahasiswa,
  deletematakuliah: state => state.listmatakuliah.deletematakuliah,
  deletekurikulum: state => state.listkurikulum.deletekurikulum
}
export default getters
