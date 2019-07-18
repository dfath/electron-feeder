<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
      <el-form-item label="Nama">
        <el-input v-model="setName.nama_mahasiswa"></el-input>
      </el-form-item>
      <el-form-item label="Tempat Lahir">
        <el-input v-model="setName.tempat_lahir"></el-input>
      </el-form-item>
      <el-form-item label="Jenis Kelamin">
        <el-radio-group v-model="setName.jenis_kelamin">
          <el-radio label="L">Laki-laki</el-radio>
          <el-radio label="P">Perempuan</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Nama Ibu">
        <el-input v-model="setName.nama_ibu"></el-input>
      </el-form-item>
      <el-form-item label="Tanggal Lahir">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="Pick a date" v-model="setName.tanggal_lahir" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Agama">
        <el-select v-model="setName.nama_agama" placeholder="Please select your religion">
          <el-option label="Islam" value="Islam"></el-option>
          <el-option label="Kristen" value="Kristen"></el-option>
          <el-option label="Katholik" value="Katholik"></el-option>
          <el-option label="Hindu" value="Hindu"></el-option>
          <el-option label="Budha" value="Budha"></el-option>
          <el-option label="Konghucu" value="Konghucu"></el-option>
          <el-option label="Lainnya" value="Lainnya"></el-option>
        </el-select>
      </el-form-item>

      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-location" /> Alamat</span>
          Alamat

          <el-form inline="true" ref="form" :model="form" label-width="120px" v-loading="loading">
            <el-form-item label="NIK">
              <el-input v-model="setName.nik"></el-input>
            </el-form-item>
            <el-form-item label="NISN">
              <el-input v-model="setName.nisn"></el-input>
            </el-form-item>
            <el-form-item label="NPWP">
              <el-input v-model="setName.npwp"></el-input>
            </el-form-item>
            <el-form-item label="Kewarganegaraan">
              <el-input v-model="setName.kewarganegaraan"></el-input>
            </el-form-item>
            <el-form-item label="Jalan">
              <el-input v-model="setName.jalan"></el-input>
            </el-form-item>
            <el-form-item label="Dusun">
              <el-input v-model="setName.dusun"></el-input>
            </el-form-item>
            <el-form-item label="RT">
              <el-input v-model="setName.rt"></el-input>
            </el-form-item>
            <el-form-item label="RW">
              <el-input v-model="setName.rw"></el-input>
            </el-form-item>
            <el-form-item label="Kelurahan">
              <el-input v-model="setName.kelurahan"></el-input>
            </el-form-item>
            <el-form-item label="Kodepos">
              <el-input v-model="setName.kode_pos"></el-input>
            </el-form-item>
            <el-form-item label="Kecamatan">
              <el-input v-model="setName.nama_wilayah"></el-input>
            </el-form-item>

            <el-form-item label="Jenis Tinggal">
              <el-select v-model="setName.nama_jenis_tinggal" placeholder="Pilih Jenis Tinggal">
                <el-option label="Bersama orang tua" value="Bersama orang tua"></el-option>
                <el-option label="Wali" value="Wali"></el-option>
                <el-option label="Kost" value="Kost"></el-option>
                <el-option label="Asrama" value="Asrama"></el-option>
                <el-option label="Panti asuhan" value="Panti asuhan"></el-option>
                <el-option label="Lainnya" value="Lainnya"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Alat Transportasi">
              <el-select v-model="setName.nama_alat_transportasi" placeholder="Pilih Alat Transportasi">
                <el-option label="Jalan kaki" value="Jalan kaki"></el-option>
                <el-option label="Angkutan umum/bus/pete-pete" value="Angkutan umum/bus/pete-pete"></el-option>
                <el-option label="Mobil/bus antar jemput" value="Mobil/bus antar jemput"></el-option>
                <el-option label="Kereta api" value="Kereta api"></el-option>
                <el-option label="Ojek" value="Ojek"></el-option>
                <el-option label="Andong/bendi/sado/dokar/delman/becak" value="Andong/bendi/sado/dokar/delman/becak"></el-option>
                <el-option label="Perahu penyeberangan/rakit/getek" value="Perahu penyeberangan/rakit/getek"></el-option>
                <el-option label="Kuda" value="Kuda"></el-option>
                <el-option label="Sepeda" value="Sepeda"></el-option>
                <el-option label="Sepeda motor" value="Sepeda motor"></el-option>
                <el-option label="Mobil pribadi" value="Mobil pribadi"></el-option>
                <el-option label="Lainnya" value="Lainnya"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Telepon">
              <el-input v-model="setName.telepon"></el-input>
            </el-form-item>
            <el-form-item label="Email">
              <el-input v-model="setName.email"></el-input>
            </el-form-item>
            <el-form-item label="Penerima KPS?">
              <el-radio-group v-model="setName.penerima_kps">
                <el-radio label="0">Tidak</el-radio>
                <el-radio label="1">Ya</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="No KPS">
              <el-input v-model="setName.nomor_kps"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">Update</el-button>
              <el-button @click="onCancel">Cancel</el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-location" /> Orang Tua</span>
          Orang Tua

          Ayah
          <el-form-item label="NIK">
            <el-input v-model="setName.nik_ayah"></el-input>
          </el-form-item>        
          <el-form-item label="Nama">
            <el-input v-model="setName.nama_ayah"></el-input>
          </el-form-item>        
          <el-form-item label="Tanggal Lahir">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="setName.tanggal_lahir_ayah" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="Pendidikan">
            <el-select v-model="setName.nama_pendidikan_ayah" placeholder="Pilih Jenjang">
              <el-option label="Tidak sekolah"></el-option>
              <el-option label="PAUD"></el-option>
              <el-option label="TK / sederajat"></el-option>
              <el-option label="Putus SD"></el-option>
              <el-option label="SD / sederajat"></el-option>
              <el-option label="SMP / sederajat"></el-option>
              <el-option label="SMA / sederajat"></el-option>
              <el-option label="Paket A"></el-option>
              <el-option label="Paket B"></el-option>
              <el-option label="Paket C"></el-option>
              <el-option label="D1"></el-option>
              <el-option label="D2"></el-option>
              <el-option label="D3"></el-option>
              <el-option label="D4"></el-option>
              <el-option label="S1"></el-option>
              <el-option label="Profesi"></el-option>
              <el-option label="Sp-1"></el-option>
              <el-option label="S2"></el-option>
              <el-option label="S2 Terapan"></el-option>
              <el-option label="Sp-2"></el-option>
              <el-option label="S3"></el-option>
              <el-option label="S3 Terapan"></el-option>
              <el-option label="Non formal"></el-option>
              <el-option label="Informal"></el-option>
              <el-option label="Lainnya"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Pekerjaan">
            <el-select v-model="setName.nama_pekerjaan_ayah" placeholder="Pilih Pekerjaan">
              <el-option label=""></el-option>
              <el-option label="Tidak bekerja"></el-option>
              <el-option label="Nelayan"></el-option>
              <el-option label="Petani"></el-option>
              <el-option label="Peternak"></el-option>
              <el-option label="PNS/TNI/Polri"></el-option>
              <el-option label="Karyawan Swasta"></el-option>
              <el-option label="Pedagang Kecil"></el-option>
              <el-option label="Pedagang Besar"></el-option>
              <el-option label="Wiraswasta"></el-option>
              <el-option label="Wirausaha"></el-option>
              <el-option label="Buruh"></el-option>
              <el-option label="Pensiunan"></el-option>
              <el-option label="Sudah Meninggal"></el-option>
              <el-option label="Lainnya"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Penghasilan">
            <el-select v-model="setName.nama_penghasilan_ayah" placeholder="Pilih Penghasilan">
              <el-option label=""></el-option>
              <el-option label="Kurang dari Rp 1.000.000"></el-option>
              <el-option label="Kurang dari Rp 500,000"></el-option>
              <el-option label="Rp 500,000 - Rp 999,999"></el-option>
              <el-option label="Rp 1,000,000 - Rp 1,999,999"></el-option>
              <el-option label="Rp 2,000,000 - Rp 4,999,999"></el-option>
              <el-option label="Rp 5,000,000 - Rp 20,000,000"></el-option>
              <el-option label="Lebih dari Rp 20,000,000"></el-option>
            </el-select>
          </el-form-item>

          Ibu
          <el-form-item label="NIK">
            <el-input v-model="setName.nik_ibu"></el-input>
          </el-form-item>        
          <el-form-item label="Nama">
            <el-input v-model="setName.nama_ibu"></el-input>
          </el-form-item>        
          <el-form-item label="Tanggal Lahir">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="setName.tanggal_lahir_ibu" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="Pendidikan">
            <el-select v-model="setName.nama_pendidikan_ibu" placeholder="Pilih Jenjang">
              <el-option label="Tidak sekolah"></el-option>
              <el-option label="PAUD"></el-option>
              <el-option label="TK / sederajat"></el-option>
              <el-option label="Putus SD"></el-option>
              <el-option label="SD / sederajat"></el-option>
              <el-option label="SMP / sederajat"></el-option>
              <el-option label="SMA / sederajat"></el-option>
              <el-option label="Paket A"></el-option>
              <el-option label="Paket B"></el-option>
              <el-option label="Paket C"></el-option>
              <el-option label="D1"></el-option>
              <el-option label="D2"></el-option>
              <el-option label="D3"></el-option>
              <el-option label="D4"></el-option>
              <el-option label="S1"></el-option>
              <el-option label="Profesi"></el-option>
              <el-option label="Sp-1"></el-option>
              <el-option label="S2"></el-option>
              <el-option label="S2 Terapan"></el-option>
              <el-option label="Sp-2"></el-option>
              <el-option label="S3"></el-option>
              <el-option label="S3 Terapan"></el-option>
              <el-option label="Non formal"></el-option>
              <el-option label="Informal"></el-option>
              <el-option label="Lainnya"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Pekerjaan">
            <el-select v-model="setName.nama_pekerjaan_ibu" placeholder="Pilih Pekerjaan">
              <el-option label=""></el-option>
              <el-option label="Tidak bekerja"></el-option>
              <el-option label="Nelayan"></el-option>
              <el-option label="Petani"></el-option>
              <el-option label="Peternak"></el-option>
              <el-option label="PNS/TNI/Polri"></el-option>
              <el-option label="Karyawan Swasta"></el-option>
              <el-option label="Pedagang Kecil"></el-option>
              <el-option label="Pedagang Besar"></el-option>
              <el-option label="Wiraswasta"></el-option>
              <el-option label="Wirausaha"></el-option>
              <el-option label="Buruh"></el-option>
              <el-option label="Pensiunan"></el-option>
              <el-option label="Sudah Meninggal"></el-option>
              <el-option label="Lainnya"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Penghasilan">
            <el-select v-model="setName.nama_penghasilan_ibu" placeholder="Pilih Penghasilan">
              <el-option label=""></el-option>
              <el-option label="Kurang dari Rp 1.000.000"></el-option>
              <el-option label="Kurang dari Rp 500,000"></el-option>
              <el-option label="Rp 500,000 - Rp 999,999"></el-option>
              <el-option label="Rp 1,000,000 - Rp 1,999,999"></el-option>
              <el-option label="Rp 2,000,000 - Rp 4,999,999"></el-option>
              <el-option label="Rp 5,000,000 - Rp 20,000,000"></el-option>
              <el-option label="Lebih dari Rp 20,000,000"></el-option>
            </el-select>
          </el-form-item>

          <!-- <el-form-item label="">
            <el-radio-group v-model="setName.">
              <el-radio label=""></el-radio>
              <el-radio label=""></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="">
            <el-input v-model="setName."></el-input>
          </el-form-item> -->
        </el-tab-pane>

        <el-tab-pane>
          <span slot="label"><i class="el-icon-location" /> Wali</span>
          Wali

          <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
            <el-form-item label="NIK">
              <el-input v-model="setName.nik_wali"></el-input>
            </el-form-item>        
            <el-form-item label="Nama">
              <el-input v-model="setName.nama_wali"></el-input>
            </el-form-item>        
            <el-form-item label="Tanggal Lahir">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="Pick a date" v-model="setName.tanggal_lahir_wali" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="Pendidikan">
              <el-select v-model="setName.nama_pendidikan_wali" placeholder="Pilih Jenjang">
                <el-option label="Tidak sekolah"></el-option>
                <el-option label="PAUD"></el-option>
                <el-option label="TK / sederajat"></el-option>
                <el-option label="Putus SD"></el-option>
                <el-option label="SD / sederajat"></el-option>
                <el-option label="SMP / sederajat"></el-option>
                <el-option label="SMA / sederajat"></el-option>
                <el-option label="Paket A"></el-option>
                <el-option label="Paket B"></el-option>
                <el-option label="Paket C"></el-option>
                <el-option label="D1"></el-option>
                <el-option label="D2"></el-option>
                <el-option label="D3"></el-option>
                <el-option label="D4"></el-option>
                <el-option label="S1"></el-option>
                <el-option label="Profesi"></el-option>
                <el-option label="Sp-1"></el-option>
                <el-option label="S2"></el-option>
                <el-option label="S2 Terapan"></el-option>
                <el-option label="Sp-2"></el-option>
                <el-option label="S3"></el-option>
                <el-option label="S3 Terapan"></el-option>
                <el-option label="Non formal"></el-option>
                <el-option label="Informal"></el-option>
                <el-option label="Lainnya"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Pekerjaan">
              <el-select v-model="setName.nama_pekerjaan_wali" placeholder="Pilih Pekerjaan">
                <el-option label=""></el-option>
                <el-option label="Tidak bekerja"></el-option>
                <el-option label="Nelayan"></el-option>
                <el-option label="Petani"></el-option>
                <el-option label="Peternak"></el-option>
                <el-option label="PNS/TNI/Polri"></el-option>
                <el-option label="Karyawan Swasta"></el-option>
                <el-option label="Pedagang Kecil"></el-option>
                <el-option label="Pedagang Besar"></el-option>
                <el-option label="Wiraswasta"></el-option>
                <el-option label="Wirausaha"></el-option>
                <el-option label="Buruh"></el-option>
                <el-option label="Pensiunan"></el-option>
                <el-option label="Sudah Meninggal"></el-option>
                <el-option label="Lainnya"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Penghasilan">
              <el-select v-model="setName.nama_penghasilan_wali" placeholder="Pilih Penghasilan">
                <el-option label=""></el-option>
                <el-option label="Kurang dari Rp 1.000.000"></el-option>
                <el-option label="Kurang dari Rp 500,000"></el-option>
                <el-option label="Rp 500,000 - Rp 999,999"></el-option>
                <el-option label="Rp 1,000,000 - Rp 1,999,999"></el-option>
                <el-option label="Rp 2,000,000 - Rp 4,999,999"></el-option>
                <el-option label="Rp 5,000,000 - Rp 20,000,000"></el-option>
                <el-option label="Lebih dari Rp 20,000,000"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Update</el-button>
              <el-button @click="onCancel">Cancel</el-button>
            </el-form-item>
          </el-form>

        </el-tab-pane>
        <!-- <el-tab-pane>
          <span slot="label"><i class="el-icon-location" /> Kebutuhan Khusus</span>
          Kebutuhan Khusus
          <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
            <el-form-item label="Mahasiswa">
              <el-checkbox-group v-model="setName.nama_kebutuhan_khusus_mahasiswa">
                <el-checkbox label="1" name="netra">A - Tuna netra</el-checkbox>
                <el-checkbox label="2" name="rungu">B - Tuna rungu</el-checkbox>
                <el-checkbox label="" name="grahita">C - Tuna grahita ringan</el-checkbox>
                <el-checkbox label="" name="grahitas">C1 - Tuna grahita ringan</el-checkbox>
                <el-checkbox label="" name="daksar">D - Tuna daksa ringan</el-checkbox>
                <el-checkbox label="" name="daksas">D1 - Tuna daksa sedang</el-checkbox>
                <el-checkbox label="" name="laras">E - Tuna laras</el-checkbox>
                <el-checkbox label="" name="wicara">F - Tuna wicara</el-checkbox>
                <el-checkbox label="" name="hiperaktif">H- Hiperaktif</el-checkbox>
                <el-checkbox label="" name="cerdas">I - Cerdas Istimewa</el-checkbox>
                <el-checkbox label="" name="bakat">J - Bakat Istimewa</el-checkbox>
                <el-checkbox label="" name="sulit">K - Kesulitan Belajar</el-checkbox>
                <el-checkbox label="" name="narkoba">N - Narkoba</el-checkbox>
                <el-checkbox label="" name="indigo">O - Indigo</el-checkbox>
                <el-checkbox label="" name="down">P - Down Syndrome</el-checkbox>
                <el-checkbox label="" name="autis">Q - Autis</el-checkbox>
              </el-checkbox-group>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="Option A"></el-checkbox>
                <el-checkbox label="Option B"></el-checkbox>
                <el-checkbox label="Option C"></el-checkbox>
                <el-checkbox label="disabled" disabled></el-checkbox>
                <el-checkbox label="selected and disabled" disabled></el-checkbox>
              </el-checkbox-group>

            </el-form-item>
            <el-form-item label="Ayah">
              <el-checkbox-group v-model="setName.nama_kebutuhan_khusus_ayah">
                <el-checkbox label="A - Tuna netra" name="type"></el-checkbox>
                <el-checkbox label="B - Tuna rungu" name="type"></el-checkbox>
                <el-checkbox label="C - Tuna grahita ringan" name="type"></el-checkbox>
                <el-checkbox label="C1 - Tuna grahita ringan" name="type"></el-checkbox>
                <el-checkbox label="D - Tuna daksa ringan" name="type"></el-checkbox>
                <el-checkbox label="D1 - Tuna daksa sedang" name="type"></el-checkbox>
                <el-checkbox label="E - Tuna laras" name="type"></el-checkbox>
                <el-checkbox label="F - Tuna wicara" name="type"></el-checkbox>
                <el-checkbox label="H- Hiperaktif" name="type"></el-checkbox>
                <el-checkbox label="I - Cerdas Istimewa" name="type"></el-checkbox>
                <el-checkbox label="J - Bakat Istimewa" name="type"></el-checkbox>
                <el-checkbox label="K - Kesulitan Belajar" name="type"></el-checkbox>
                <el-checkbox label="N - Narkoba" name="type"></el-checkbox>
                <el-checkbox label="O - Indigo" name="type"></el-checkbox>
                <el-checkbox label="P - Down Syndrome" name="type"></el-checkbox>
                <el-checkbox label="Q - Autis" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Ibu">
              <el-checkbox-group v-model="setName.nama_kebutuhan_khusus_ibu">
                <el-checkbox label="A - Tuna netra" name="type" value="ab"></el-checkbox>
                <el-checkbox label="B - Tuna rungu" name="type"></el-checkbox>
                <el-checkbox label="C - Tuna grahita ringan" name="type"></el-checkbox>
                <el-checkbox label="C1 - Tuna grahita ringan" name="type"></el-checkbox>
                <el-checkbox label="D - Tuna daksa ringan" name="type"></el-checkbox>
                <el-checkbox label="D1 - Tuna daksa sedang" name="type"></el-checkbox>
                <el-checkbox label="E - Tuna laras" name="type"></el-checkbox>
                <el-checkbox label="F - Tuna wicara" name="type"></el-checkbox>
                <el-checkbox label="H- Hiperaktif" name="type"></el-checkbox>
                <el-checkbox label="I - Cerdas Istimewa" name="type"></el-checkbox>
                <el-checkbox label="J - Bakat Istimewa" name="type"></el-checkbox>
                <el-checkbox label="K - Kesulitan Belajar" name="type"></el-checkbox>
                <el-checkbox label="N - Narkoba" name="type"></el-checkbox>
                <el-checkbox label="O - Indigo" name="type"></el-checkbox>
                <el-checkbox label="P - Down Syndrome" name="type"></el-checkbox>
                <el-checkbox label="Q - Autis" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </el-form>
        </el-tab-pane> -->

      </el-tabs>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Update</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      loading: false,
      checkList: ['selected and disabled', 'Option A'],
      nama_kebutuhan_khusus: ['A - Tuna netra', 'B - Tuna rungu']

    }
  },
  computed: {
    setName: {
      get() {
        return store.getters.editbiodatamahasiswa[0]
      },
      set(value) {
        store.commit('GET_BIODATA_MAHASISWA', value)
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(store.getters.editbiodatamahasiswa[0])
      this.loading = true
      store.dispatch('EditBiodataMahasiswa').then(() => {
        this.loading = false
      })
    },
    onCancel() {
      this.$router.push('/mahasiswa/data')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

