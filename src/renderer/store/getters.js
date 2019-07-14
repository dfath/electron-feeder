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
  dosen: state => state.dosen.dosen,
  listMahasiswa: state => state.list.listMahasiswa,
  listMataKuliah: state => state.listmatakuliah.listMataKuliah, // List MataKuliah
  listKurikulum: state => state.listkurikulum.listKurikulum, // List Kurikulum
  destination: state => state.destination.destination,
  errorLogs: state => state.errorLog.logs,
  contohbiodatamahasiswa: state => state.contoh.contohbiodatamahasiswa.contohbiodatamahasiswa,
  editbiodatamahasiswa: state => state.getbiodatamahasiswa.editbiodatamahasiswa
}
export default getters
