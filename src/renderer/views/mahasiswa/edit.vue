<template>
  <div class="app-container">
    <el-tabs>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-edit" /> Edit Mahasiswa</span>
        <el-form size=mini ref="form" label-width="120px" v-loading="listLoading">
          <el-form-item label="Nama" required>
            <el-input v-model="setName.nama_mahasiswa"></el-input>
          </el-form-item>
          <el-form-item label="Tempat Lahir" required>
            <el-input v-model="setName.tempat_lahir"></el-input>
          </el-form-item>
          <el-form-item label="Jenis Kelamin">
            <el-radio-group v-model="setName.jenis_kelamin">
              <el-radio label="L">Laki-laki</el-radio>
              <el-radio label="P">Perempuan</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Nama Ibu" required>
            <el-input v-model="setName.nama_ibu"></el-input>
          </el-form-item>
          <el-form-item label="Tanggal Lahir" required>
            <el-col :span="11">
              <el-date-picker type="date" placeholder="Pick a date" v-model="setName.tanggal_lahir" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="Agama" required>
            <el-select v-model="setName.id_agama" placeholder="Please select your religion">
              <el-option label="Islam" value="1"></el-option>
              <el-option label="Kristen" value="2"></el-option>
              <el-option label="Katholik" value="3"></el-option>
              <el-option label="Hindu" value="4"></el-option>
              <el-option label="Budha" value="5"></el-option>
              <el-option label="Konghucu" value="6"></el-option>
              <el-option label="Lainnya" value="99"></el-option>
            </el-select>
          </el-form-item>

          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label">Alamat</span>

                <el-form-item label="NIK" required>
                  <el-input v-model="setName.nik"></el-input>
                </el-form-item>
                <el-form-item label="NISN">
                  <el-input v-model="setName.nisn"></el-input>
                </el-form-item>
                <el-form-item label="NPWP">
                  <el-input v-model="setName.npwp"></el-input>
                </el-form-item>
                <el-form-item label="Kewarganegaraan" required>
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
                <el-form-item label="Kelurahan" required>
                  <el-input v-model="setName.kelurahan"></el-input>
                </el-form-item>
                <el-form-item label="Kodepos">
                  <el-input v-model="setName.kode_pos"></el-input>
                </el-form-item>
                <el-form-item label="Kecamatan" required>
                  <el-input v-model="setName.nama_wilayah"></el-input>
                </el-form-item>

                <el-form-item label="Jenis Tinggal">
                  <el-select v-model="setName.id_jenis_tinggal" placeholder="Pilih Jenis Tinggal">
                    <el-option label="Bersama orang tua" value="1"></el-option>
                    <el-option label="Wali" value="2"></el-option>
                    <el-option label="Kost" value="3"></el-option>
                    <el-option label="Asrama" value="4"></el-option>
                    <el-option label="Panti asuhan" value="5"></el-option>
                    <el-option label="Lainnya" value="99"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Alat Transportasi">
                  <el-select v-model="setName.id_alat_transportasi" placeholder="Pilih Alat Transportasi">
                    <el-option label="Jalan kaki" value="1"></el-option>
                    <el-option label="Angkutan umum/bus/pete-pete" value="3"></el-option>
                    <el-option label="Mobil/bus antar jemput" value="4"></el-option>
                    <el-option label="Kereta api" value="5"></el-option>
                    <el-option label="Ojek" value="6"></el-option>
                    <el-option label="Andong/bendi/sado/dokar/delman/becak" value="7"></el-option>
                    <el-option label="Perahu penyeberangan/rakit/getek" value="8"></el-option>
                    <el-option label="Kuda" value="11"></el-option>
                    <el-option label="Sepeda" value="12"></el-option>
                    <el-option label="Sepeda motor" value="13"></el-option>
                    <el-option label="Mobil pribadi" value="14"></el-option>
                    <el-option label="Lainnya" value="99"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Telepon">
                  <el-input v-model="setName.telepon"></el-input>
                </el-form-item>
                <el-form-item label="Email">
                  <el-input v-model="setName.email"></el-input>
                </el-form-item>
                <el-form-item label="Penerima KPS?" required>
                  <el-radio-group v-model="setName.penerima_kps">
                    <el-radio label="0">Tidak</el-radio>
                    <el-radio label="1">Ya</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="No KPS">
                  <el-input v-model="setName.nomor_kps"></el-input>
                </el-form-item>

            </el-tab-pane>
            <el-tab-pane>
              <span slot="label">Orang Tua</span>
              <h4>Ayah</h4>
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
                <el-select v-model="setName.id_pendidikan_ayah" placeholder="Pilih Jenjang">
                  <el-option label="Tidak sekolah" value="0"></el-option>
                  <el-option label="PAUD" value="1"></el-option>
                  <el-option label="TK / sederajat" value="2"></el-option>
                  <el-option label="Putus SD" value="3"></el-option>
                  <el-option label="SD / sederajat" value="4"></el-option>
                  <el-option label="SMP / sederajat" value="5"></el-option>
                  <el-option label="SMA / sederajat" value="6"></el-option>
                  <el-option label="Paket A" value="7"></el-option>
                  <el-option label="Paket B" value="8"></el-option>
                  <el-option label="Paket C" value="9"></el-option>
                  <el-option label="D1" value="20"></el-option>
                  <el-option label="D2" value="21"></el-option>
                  <el-option label="D3" value="22"></el-option>
                  <el-option label="D4" value="23"></el-option>
                  <el-option label="S1" value="30"></el-option>
                  <el-option label="Profesi" value="31"></el-option>
                  <el-option label="Sp-1" value="32"></el-option>
                  <el-option label="S2" value="35"></el-option>
                  <el-option label="S2 Terapan" value="36"></el-option>
                  <el-option label="Sp-2" value="37"></el-option>
                  <el-option label="S3" value="40"></el-option>
                  <el-option label="S3 Terapan" value="41"></el-option>
                  <el-option label="Non formal" value="90"></el-option>
                  <el-option label="Informal" value="91"></el-option>
                  <el-option label="Lainnya" value="99"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Pekerjaan">
                <el-select v-model="setName.id_pekerjaan_ayah" placeholder="Pilih Pekerjaan">
                  <el-option label="Tidak bekerja" value="1"></el-option>
                  <el-option label="Nelayan" value="2"></el-option>
                  <el-option label="Petani" value="3"></el-option>
                  <el-option label="Peternak" value="4"></el-option>
                  <el-option label="PNS/TNI/Polri" value="5"></el-option>
                  <el-option label="Karyawan Swasta" value="6"></el-option>
                  <el-option label="Pedagang Kecil" value="7"></el-option>
                  <el-option label="Pedagang Besar" value="8"></el-option>
                  <el-option label="Wiraswasta" value="9"></el-option>
                  <el-option label="Wirausaha" value="10"></el-option>
                  <el-option label="Buruh" value="11"></el-option>
                  <el-option label="Pensiunan" value="12"></el-option>
                  <el-option label="Sudah Meninggal" value="98"></el-option>
                  <el-option label="Lainnya" value="99"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Penghasilan">
                <el-select v-model="setName.id_penghasilan_ayah" placeholder="Pilih Penghasilan">
                  <el-option label=" " value="0"></el-option>
                  <el-option label="Kurang dari Rp 500,000" value="11"></el-option>
                  <el-option label="Rp 500,000 - Rp 999,999" value="12"></el-option>
                  <el-option label="Rp 1,000,000 - Rp 1,999,999" value="13"></el-option>
                  <el-option label="Rp 2,000,000 - Rp 4,999,999" value="14"></el-option>
                  <el-option label="Rp 5,000,000 - Rp 20,000,000" value="15"></el-option>
                  <el-option label="Lebih dari Rp 20,000,000" value="16"></el-option>
                </el-select>
              </el-form-item>
              <h4>Ibu</h4>
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
                <el-select v-model="setName.id_pendidikan_ibu" placeholder="Pilih Jenjang">
             <el-option label="Tidak sekolah" value="0"></el-option>
                  <el-option label="PAUD" value="1"></el-option>
                  <el-option label="TK / sederajat" value="2"></el-option>
                  <el-option label="Putus SD" value="3"></el-option>
                  <el-option label="SD / sederajat" value="4"></el-option>
                  <el-option label="SMP / sederajat" value="5"></el-option>
                  <el-option label="SMA / sederajat" value="6"></el-option>
                  <el-option label="Paket A" value="7"></el-option>
                  <el-option label="Paket B" value="8"></el-option>
                  <el-option label="Paket C" value="9"></el-option>
                  <el-option label="D1" value="20"></el-option>
                  <el-option label="D2" value="21"></el-option>
                  <el-option label="D3" value="22"></el-option>
                  <el-option label="D4" value="23"></el-option>
                  <el-option label="S1" value="30"></el-option>
                  <el-option label="Profesi" value="31"></el-option>
                  <el-option label="Sp-1" value="32"></el-option>
                  <el-option label="S2" value="35"></el-option>
                  <el-option label="S2 Terapan" value="36"></el-option>
                  <el-option label="Sp-2" value="37"></el-option>
                  <el-option label="S3" value="40"></el-option>
                  <el-option label="S3 Terapan" value="41"></el-option>
                  <el-option label="Non formal" value="90"></el-option>
                  <el-option label="Informal" value="91"></el-option>
                  <el-option label="Lainnya" value="99"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Pekerjaan">
                <el-select v-model="setName.id_pekerjaan_ibu" placeholder="Pilih Pekerjaan">
                  <el-option label="Tidak bekerja" value="1"></el-option>
                  <el-option label="Nelayan" value="2"></el-option>
                  <el-option label="Petani" value="3"></el-option>
                  <el-option label="Peternak" value="4"></el-option>
                  <el-option label="PNS/TNI/Polri" value="5"></el-option>
                  <el-option label="Karyawan Swasta" value="6"></el-option>
                  <el-option label="Pedagang Kecil" value="7"></el-option>
                  <el-option label="Pedagang Besar" value="8"></el-option>
                  <el-option label="Wiraswasta" value="9"></el-option>
                  <el-option label="Wirausaha" value="10"></el-option>
                  <el-option label="Buruh" value="11"></el-option>
                  <el-option label="Pensiunan" value="12"></el-option>
                  <el-option label="Sudah Meninggal" value="98"></el-option>
                  <el-option label="Lainnya" value="99"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Penghasilan">
                <el-select v-model="setName.id_penghasilan_ibu" placeholder="Pilih Penghasilan">
                  <el-option label=" " value="0"></el-option>
                  <el-option label="Kurang dari Rp 500,000" value="11"></el-option>
                  <el-option label="Rp 500,000 - Rp 999,999" value="12"></el-option>
                  <el-option label="Rp 1,000,000 - Rp 1,999,999" value="13"></el-option>
                  <el-option label="Rp 2,000,000 - Rp 4,999,999" value="14"></el-option>
                  <el-option label="Rp 5,000,000 - Rp 20,000,000" value="15"></el-option>
                  <el-option label="Lebih dari Rp 20,000,000" value="16"></el-option>
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
              <span slot="label">Wali</span>
                <h4>Wali</h4>
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
                  <el-select v-model="setName.id_pendidikan_wali" placeholder="Pilih Jenjang">
                    <el-option label="PAUD" value="1"></el-option>
                    <el-option label="TK / sederajat" value="2"></el-option>
                    <el-option label="Putus SD" value="3"></el-option>
                    <el-option label="SD / sederajat" value="4"></el-option>
                    <el-option label="SMP / sederajat" value="5"></el-option>
                    <el-option label="SMA / sederajat" value="6"></el-option>
                    <el-option label="Paket A" value="7"></el-option>
                    <el-option label="Paket B" value="8"></el-option>
                    <el-option label="Paket C" value="9"></el-option>
                    <el-option label="D1" value="20"></el-option>
                    <el-option label="D2" value="21"></el-option>
                    <el-option label="D3" value="22"></el-option>
                    <el-option label="D4" value="23"></el-option>
                    <el-option label="S1" value="30"></el-option>
                    <el-option label="Profesi" value="31"></el-option>
                    <el-option label="Sp-1" value="32"></el-option>
                    <el-option label="S2" value="35"></el-option>
                    <el-option label="S2 Terapan" value="36"></el-option>
                    <el-option label="Sp-2" value="37"></el-option>
                    <el-option label="S3" value="40"></el-option>
                    <el-option label="S3 Terapan" value="41"></el-option>
                    <el-option label="Non formal" value="90"></el-option>
                    <el-option label="Informal" value="91"></el-option>
                    <el-option label="Lainnya" value="99"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Pekerjaan">
                  <el-select v-model="setName.id_pekerjaan_wali" placeholder="Pilih Pekerjaan">
                    <el-option label="Tidak bekerja" value="1"></el-option>
                    <el-option label="Nelayan" value="2"></el-option>
                    <el-option label="Petani" value="3"></el-option>
                    <el-option label="Peternak" value="4"></el-option>
                    <el-option label="PNS/TNI/Polri" value="5"></el-option>
                    <el-option label="Karyawan Swasta" value="6"></el-option>
                    <el-option label="Pedagang Kecil" value="7"></el-option>
                    <el-option label="Pedagang Besar" value="8"></el-option>
                    <el-option label="Wiraswasta" value="9"></el-option>
                    <el-option label="Wirausaha" value="10"></el-option>
                    <el-option label="Buruh" value="11"></el-option>
                    <el-option label="Pensiunan" value="12"></el-option>
                    <el-option label="Sudah Meninggal" value="98"></el-option>
                    <el-option label="Lainnya" value="99"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Penghasilan">
                  <el-select v-model="setName.id_penghasilan_wali" placeholder="Pilih Penghasilan">
                    <el-option label=" " value="0"></el-option>
                    <el-option label="Kurang dari Rp 500,000" value="11"></el-option>
                    <el-option label="Rp 500,000 - Rp 999,999" value="12"></el-option>
                    <el-option label="Rp 1,000,000 - Rp 1,999,999" value="13"></el-option>
                    <el-option label="Rp 2,000,000 - Rp 4,999,999" value="14"></el-option>
                    <el-option label="Rp 5,000,000 - Rp 20,000,000" value="15"></el-option>
                    <el-option label="Lebih dari Rp 20,000,000" value="16"></el-option>
                  </el-select>
                </el-form-item>
            </el-tab-pane>
            <!-- <el-tab-pane>
              <span slot="label">Kebutuhan Khusus</span>
              Kebutuhan Khusus
              <el-form size=mini ref="form" :model="form" label-width="120px" v-loading="loading">
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
          <br>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Update</el-button>
            <el-button @click="onCancel">Cancel</el-button>
          </el-form-item>
        </el-form>

      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-info" /> History Pendidikan</span>
        <template>
          <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
            <el-col :span="10">
              <!-- <el-input v-model="listQuery.filter" placeholder="Nama Peserta Kelas Kuliah" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
              <el-button v-waves class="filter-item" type="info" icon="el-icon-search" @click="handleFilter">
                Search
              </el-button> -->
            </el-col>
            <el-col :span="14">
              <el-row type="flex" justify="end">
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                  <el-button v-waves :loading="downloadLoading" class="filter-item" type="success" icon="el-icon-upload2" @click="handleUpload">
                    Import Excel
                  </el-button>
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                  <el-button v-waves type="danger" icon="el-icon-delete" @click="deleteSelect" :disabled="disableDelete" >
                    Delete Selected
                  </el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <el-table size=mini stripe v-loading="listLoading" border :data="tablelistriwayatpendidikanmahasiswa" :cell-style="{padding: '0px', height: '35px'}" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
            <el-table-column min-width="50" prop="nim"
                            label="NIM">
            </el-table-column>
            <el-table-column min-width="80" prop="nama_jenis_daftar"
                            label="Jenis Pendaftaran">
            </el-table-column>
            <el-table-column min-width="60" prop="nama_periode_masuk"
                            label="Periode">
            </el-table-column>
            <el-table-column min-width="60" prop="tanggal_daftar"
                            label="Tanggal Masuk">
            </el-table-column>
            <el-table-column min-width="100" prop="nama_perguruan_tinggi"
                            label="Perguruan Tinggi">
            </el-table-column>
            <el-table-column min-width="50" prop="nama_program_studi"
                            label="Program Studi">
            </el-table-column>
            <el-table-column label="Actions" align="center" width="80" class-name="small-padding fixed-width">
              <template slot-scope="{row}">
                <el-button-group>
                  <el-button size="mini" type="warning" icon="el-icon-edit" circle @click="handleUpdate(row)"></el-button>
                  <el-button size="mini" type="danger" icon="el-icon-delete" circle @click="handleDelete(row)"></el-button>
                </el-button-group>
              </template>
            </el-table-column>
              </el-table>
        </template>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-info" /> Prestasi</span>
        <template>
          <el-row style="margin-bottom: 20px;" type="flex" class="filter-container">
            <el-col :span="10">
              <!-- <el-input v-model="listQuery.filter" placeholder="Nama Peserta Kelas Kuliah" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
              <el-button v-waves class="filter-item" type="info" icon="el-icon-search" @click="handleFilter">
                Search
              </el-button> -->
            </el-col>
            <el-col :span="14">
              <el-row type="flex" justify="end">
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                  <el-button v-waves :loading="downloadLoading" class="filter-item" type="success" icon="el-icon-upload2" @click="handleUploadPrestasi">
                    Import Excel
                  </el-button>
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                  <el-button v-waves type="danger" icon="el-icon-delete" @click="deleteSelectPrestasi" :disabled="disableDelete" >
                    Delete Selected
                  </el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-row>

          <el-table size=mini stripe v-loading="listLoading" border :data="tablelistprestasimahasiswa" :cell-style="{padding: '0px', height: '35px'}" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column min-width="50" type="index" :index="indexMethod" label="No."></el-table-column>
            <el-table-column min-width="50" prop="nama_jenis_prestasi"
                            label="Jenis Prestasi">
            </el-table-column>
            <el-table-column min-width="80" prop="nama_tingkat_prestasi"
                            label="Tingkat Prestasi">
            </el-table-column>
            <el-table-column min-width="60" prop="nama_prestasi"
                            label="Nama Prestasi">
            </el-table-column>
            <el-table-column min-width="60" prop="tahun_prestasi"
                            label="Tahun Prestasi">
            </el-table-column>
            <el-table-column min-width="100" prop="penyelenggara"
                            label="Penyelenggara">
            </el-table-column>
            <el-table-column min-width="50" prop="peringkat"
                            label="Peringkat">
            </el-table-column>
            <el-table-column label="Actions" align="center" width="80" class-name="small-padding fixed-width">
              <template slot-scope="{row}">
                <el-button-group>
                  <el-button size="mini" type="warning" icon="el-icon-edit" circle @click="handleUpdatePrestasi(row)"></el-button>
                  <el-button size="mini" type="danger" icon="el-icon-delete" circle @click="handleDeletePrestasi(row)"></el-button>
                </el-button-group>
              </template>
            </el-table-column>
              </el-table>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import store from '@/store'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import { Message, MessageBox } from 'element-ui'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      listriwayatpendidikanmahasiswa: null,
      total: 0,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        filter: null
      },
      downloadLoading: false,
      multipleSelection: [],
      disableDelete: true,
      // Prestasi
      listprestasimahasiswa: null,
      totalPrestasi: 0,
      listQueryPrestasi: {
        page: 1,
        limit: 10,
        filter: null
      }
    }
  },
  computed: {
    setName: {
      get() {
        return store.getters.updatebiodatamahasiswa[0]
      },
      set(value) {
        store.commit('GET_BIODATA_MAHASISWA', value)
      }
    },
    tablelistriwayatpendidikanmahasiswa() {
      return this.$store.getters.listriwayatpendidikanmahasiswa
    },
    tablelistprestasimahasiswa() {
      return this.$store.getters.listprestasimahasiswa
    }
  },
  methods: {
    indexMethod(index) {
      if (this.listQuery.page > 1) {
        return index + 1 + (this.listQuery.limit * (this.listQuery.page - 1))
      } else {
        return index + 1
      }
    },
    handleUpload() {
      this.$router.push('/mahasiswa/riwayatpendidikan')
    },
    handleUploadPrestasi() {
      this.$router.push('/mahasiswa/prestasimahasiswa')
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleFilter() {
      this.listQuery.page = 1
      this.listQueryPrestasi.page = 1
      this.getDataRiwayat()
      this.getDataPrestasi()
    },
    // handleUpdate(row) {
    //   this.$store.dispatch('GetDetailKelasKuliah', row.id_registrasi_mahasiswa).then(() => {
    //     this.$router.push('/riwayatpendidikanmahasiswa/edit')
    //     console.log('edit riwayatpendidikanmahasiswa ini')
    //   })
    //   console.log(row)
    // },
    handleDelete(row) {
      MessageBox.confirm('Apakah Anda ingin menghapus Riwayat Pendidikan Mahasiswa ini?', 'Confirm Delete', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteRiwayatPendidikanMahasiswa', row).then(() => {
          console.log('delete riwayatpendidikanmahasiswa ini')
          console.log(row)
          Message({
            message: 'Delete Successfully',
            type: 'success',
            duration: 2000
          })
          this.getDataRiwayat()
        })
      }).catch(() => {
        Message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    deleteSelect() {
      console.log(this.multipleSelection)
      const todelete = this.multipleSelection
      this.listLoading = true
      todelete.forEach(data => {
        console.log(data.id_registrasi_mahasiswa)
        store.dispatch('DeleteRiwayatPendidikanMahasiswa', data)
        store.dispatch('GetListRiwayatPendidikanMahasiswa', data.id_registrasi_mahasiswa)
        // this.getDataRiwayat()
      })
      this.getDataRiwayat()
      this.listLoading = false
    },
    deleteSelectPrestasi() {
      console.log(this.multipleSelection)
      const todelete = this.multipleSelection
      this.listLoading = true
      todelete.forEach(data => {
        console.log(data.id_registrasi_mahasiswa)
        store.dispatch('DeletePrestasiMahasiswa', data)
        store.dispatch('GetListPrestasiMahasiswa', data.id_registrasi_mahasiswa)
        // this.getDataRiwayat()
      })
      this.getDataRiwayat()
      this.listLoading = false
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      if (this.multipleSelection.length > 0) {
        this.disableDelete = false
      } else {
        this.disableDelete = true
      }
    },
    onSubmit() {
      console.log(store.getters.updatebiodatamahasiswa[0])
      this.listLoading = true
      store.dispatch('UpdateBiodataMahasiswa').then(() => {
        this.listLoading = false
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

