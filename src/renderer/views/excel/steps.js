const steps = [
  {
    element: '#breadcrumb-container',
    popover: {
      title: 'Breadcrumb',
      description: 'Menunjukkan lokasi halaman yang sedang dikunjungi',
      position: 'bottom'
    }
  },
  {
    element: '#tombol-contoh',
    popover: {
      title: 'File Contoh Excel',
      description: 'Ini adalah salah satu tombol yang bisa ditekan, dengan menekan tombol ini, Anda dapat memilih tempat di mana file contoh Excel akan disimpan di komputer Anda',
      position: 'bottom'
    }
  },
  {
    element: '#upload',
    popover: {
      title: 'Upload File Excel',
      description: 'Anda dapat menekan tombol Browse untuk meng-upload file Excel Anda atau dapat juga langsung meng-upload dengan menyeret (drag) file Anda dari komputer menuju daerah yang disediakan.',
      position: 'bottom'
    }
  },
  {
    element: '#uploaded-table',
    popover: {
      title: 'Hasil Upload File',
      description: 'Berikut ini adalah file Excel yang sudah berhasil di-upload. Data yang ditampilkan berupa tabel berisi data pada file Excel.',
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
  },
  {
    element: '#button',
    popover: {
      title: 'Button',
      description: 'Ini adalah salah satu tombol yang bisa ditekan',
      position: 'right'
    }
  }
]

export default steps
