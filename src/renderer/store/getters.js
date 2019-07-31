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
  // Mahasiswa
  listMahasiswa: state => state.list.listMahasiswa,
  listQueryMahasiswa: state => state.list.listQueryMahasiswa,
  totalMahasiswa: state => state.list.totalMahasiswa,
  contohbiodatamahasiswa: state => state.contoh.contohbiodatamahasiswa.contohbiodatamahasiswa,
  updatebiodatamahasiswa: state => state.getbiodatamahasiswa.updatebiodatamahasiswa,
  // deletebiodatamahasiswa: state => state.getbiodatamahasiswa.deletebiodatamahasiswa,
  listRiwayatPendidikanMahasiswa: state => state.getlistriwayatpendidikanmahasiswa.listRiwayatPendidikanMahasiswa,
  contohriwayatpendidikanmahasiswa: state => state.contoh.contohriwayatpendidikanmahasiswa.contohriwayatpendidikanmahasiswa,
  contohprestasimahasiswa: state => state.contoh.contohprestasimahasiswa.contohprestasimahasiswa,
  // Dosen
  listDosen: state => state.listdosen.listDosen,
  totalDosen: state => state.listdosen.totalDosen,
  listPenugasanSemuaDosen: state => state.listpenugasansemuadosen.listPenugasanSemuaDosen, // List Penugasan Semua Dosen
  totalPenugasanSemuaDosen: state => state.listpenugasansemuadosen.totalPenugasanSemuaDosen,
  contohdosenpengajarkelaskuliah: state => state.contoh.contohdosenpengajarkelaskuliah.contohdosenpengajarkelaskuliah,
  // Mata Kuliah
  listMataKuliah: state => state.listmatakuliah.listMataKuliah, // List MataKuliah
  listQueryMataKuliah: state => state.listmatakuliah.listQueryMataKuliah,
  totalMataKuliah: state => state.listmatakuliah.totalMataKuliah,
  contohmatakuliah: state => state.contoh.contohmatakuliah.contohmatakuliah,
  updatematakuliah: state => state.getdetailmatakuliah.updatematakuliah,
  // deletematakuliah: state => state.getdetailmatakuliah.deletematakuliah,
  // Substansi Kuliah
  listSubstansiKuliah: state => state.listsubstansikuliah.listSubstansiKuliah,
  totalSubstansiKuliah: state => state.listsubstansikuliah.totalSubstansiKuliah,
  // Kurikulum
  listKurikulum: state => state.listkurikulum.listKurikulum, // List Kurikulum
  listQueryKurikulum: state => state.listkurikulum.listQueryKurikulum,
  totalKurikulum: state => state.listkurikulum.totalKurikulum,
  contohkurikulum: state => state.contoh.contohkurikulum.contohkurikulum,
  updatekurikulum: state => state.getdetailkurikulum.updatekurikulum,
  // deletekurikulum: state => state.getdetailkurikulum.deletekurikulum,
  // Matkul Kurikulum
  contohmatkulkurikulum: state => state.contoh.contohmatkulkurikulum.contohmatkulkurikulum,
  // Kelas Perkuliahan
  listKelasKuliah: state => state.listkelaskuliah.listKelasKuliah, // List Kelas Kuliah
  listQueryKelasKuliah: state => state.listkelaskuliah.listQueryKelasKuliah,
  totalKelasKuliah: state => state.listkelaskuliah.totalKelasKuliah,
  contohkelaskuliah: state => state.contoh.contohkelaskuliah.contohkelaskuliah,
  updatekelaskuliah: state => state.getdetailkelaskuliah.updatekelaskuliah,
  // deletekelaskuliah: state => state.listkelaskuliah.deletekelaskuliah,
  contohpesertakelaskuliah: state => state.contoh.contohpesertakelaskuliah.contohpesertakelaskuliah,
  // Aktivitas Kuliah Mahasiswa
  aktivitasKuliahMahasiswa: state => state.aktivitaskuliahmahasiswa.aktivitasKuliahMahasiswa, // Aktivitas Kuliah Mahasiswa
  totalAktivitasKuliahMahasiswa: state => state.aktivitaskuliahmahasiswa.totalAktivitasKuliahMahasiswa,
  contohperkuliahan: state => state.contoh.contohperkuliahan.contohperkuliahan,
  // Nilai Perkuliahan Kelas
  listNilaiPerkuliahanKelas: state => state.listnilaiperkuliahankelas.listNilaiPerkuliahanKelas, // List Nilai Perkuliahan Kelas
  totalNilaiPerkuliahanKelas: state => state.listnilaiperkuliahankelas.totalNilaiPerkuliahanKelas,
  // Aktivitas Mahasiswa
  listAktivitasMahasiswa: state => state.listaktivitasmahasiswa.listAktivitasMahasiswa, // List Aktivitas Mahasiswa
  listQueryAktivitasMahasiswa: state => state.listaktivitasmahasiswa.listQueryAktivitasMahasiswa,
  totalAktivitasMahasiswa: state => state.listaktivitasmahasiswa.totalAktivitasMahasiswa,
  contohaktivitasmahasiswa: state => state.contoh.contohaktivitasmahasiswa.contohaktivitasmahasiswa,
  updateaktivitas: state => state.getdetailaktivitasmahasiswa.updateaktivitas,
  listAnggotaAktivitasMahasiswa: state => state.listanggotaaktivitasmahasiswa.listAnggotaAktivitasMahasiswa, // List Anggota Aktivitas Mahasiswa
  contohanggotaaktivitasmahasiswa: state => state.contoh.contohanggotaaktivitasmahasiswa.contohanggotaaktivitasmahasiswa,
  contohbimbingmahasiswa: state => state.contoh.contohbimbingmahasiswa.contohbimbingmahasiswa,
  contohujimahasiswa: state => state.contoh.contohujimahasiswa.contohujimahasiswa,
  // Mahasiswa Lulus/Drop Out
  listMahasiswaLulusDO: state => state.listmahasiswalulusdo.listMahasiswaLulusDO, // List Mahasiswa Lulus/Drop Out
  listQueryMahasiswaLulusDO: state => state.listmahasiswalulusdo.listQueryMahasiswaLulusDO,
  totalMahasiswaLulusDO: state => state.listmahasiswalulusdo.totalMahasiswaLulusDO,
  contohmahasiswalulusdo: state => state.contoh.contohmahasiswalulusdo.contohmahasiswalulusdo,
  updatelulusdo: state => state.getdetailmahasiswalulusdo.updatelulusdo,
  // Lainnya
  destination: state => state.destination.destination,
  loading: state => state.loading.loading,
  errorLogs: state => state.errorLog.logs
}
export default getters
