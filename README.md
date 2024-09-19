<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->


<!-- Cara merubah / Menambahkan Gambar -->
1. Masukkan gambar di folder assets
2. Perhatikan format gambar
3. Buka folder components
4. Buka folder GallerySwiper
5. Buka file GallerySwiper.jsx
6. Import gambar dengan menambahkan baris code berikut 
import {namaGambar} from '{../../assets/{formatgambar}}'
7. Panggil gambar namaGambar tersebut di dengan kode berikut
<SwiperSlide><img loading='lazy' className='w-full h-auto' src={namaGambar} alt="namaGambar" /></SwiperSlide>
