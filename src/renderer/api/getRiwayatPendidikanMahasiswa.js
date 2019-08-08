import request from '@/utils/request'

export function getRiwayatPendidikanMahasiswa(token, id_registrasi_mahasiswa) {
  return request({
    url: '/ws/live2.php',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: {
      'act': 'GetListRiwayatPendidikanMahasiswa',
      token,
      'filter': `id_registrasi_mahasiswa = '${id_registrasi_mahasiswa}'`,
      'limit': '',
      'offset': 0
    }
  })
}
