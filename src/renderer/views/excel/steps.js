const steps = [
  // {
  //   element: '#breadcrumb-container',
  //   popover: {
  //     title: 'Breadcrumb',
  //     description: 'Menunjukkan lokasi halaman yang sedang dikunjungi',
  //     position: 'bottom'
  //   }
  // },
  {
    element: '#tombol-contoh',
    popover: {
      title: 'File Contoh Excel',
      description: 'Anda dapat men-download template file contoh Excel dengan fitur ini.',
      position: 'bottom'
    }
  },
  {
    element: '#upload',
    popover: {
      title: 'Upload File Excel',
      description: 'Tekan tombol Browse untuk meng-upload file Excel Anda atau langsung menyeret (drag) file dari komputer menuju daerah upload yang tersedia.',
      position: 'bottom'
    }
  },
  {
    element: '#uploaded-table',
    popover: {
      title: 'Hasil Upload File',
      description: 'Hasil file Excel yang sudah berhasil di-upload. Data yang ditampilkan berupa tabel dari file Excel.',
      position: 'bottom'
    }
  },
  {
    element: '#tombol-ekspor',
    popover: {
      title: 'Tombol Ekspor',
      description: 'Tombol ini hanya bisa ditekan apabila sudah meng-upload file Excel. Tekan tombol ini untuk mengirim data file Excel ke Feeder PDDIKTI.',
      position: 'bottom'
    }
  }
]

export default steps
