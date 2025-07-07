import DataImage from "./data";

function App() {
  return (
    <>
      {/* Hero */}
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-blue-950  w-fit p-4 rounded-2xl">
            {" "}
            <img
              src={DataImage.ImageAhmad}
              alt="ahmad"
              className="w-10 rounded-md"
            />
            <a>Hiduplah Seperti Air Mengalir 💦👍</a>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hai, Saya Ahmad Fajar Alfaravi{" "}
          </h1>
          <p className="text-base/loose mb-6 opacity-50 text-justify">
            Saya adalah lulusan S1 Sistem Informasi (2023) dengan minat besar di
            bidang teknologi dan pengembangan aplikasi. Selama kuliah, saya
            aktif mengikuti organisasi, workshop, dan program magang.
            Berpengalaman sebagai Digitalisasi Intern di PT Sanghiang Perkasa
            (Kalbe Group) selama hampir 6 bulan, serta sebagai Network Staff di
            UMSU selama hampir 2 tahun sambil menjalani studi. Setelah lulus,
            saya bekerja sebagai Apps Developer (Flutter) di UMSU selama 1
            tahun. Saya terbiasa mengembangkan aplikasi, membangun website,
            serta mengelola jaringan. Saya memiliki semangat tinggi untuk terus
            belajar dan berkembang di dunia teknologi yang dinamis.
          </p>

          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="https://drive.google.com/file/d/19j5Z6QWzehNZTS6pvl5AIclC23saZtNV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600"
            >
              Lihat CV <i className="ri-eye-line"></i>
            </a>
            <a
              href="#"
              className="bg-white/100 text-black p-4 rounded-2xl hover:bg-white-600"
            >
              My Project <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.ImageAhmad}
          alt="ahmad"
          className="w-[500px] md:ml-auto rounded-2xl"
        />
      </div>

      {/* About */}
      <div></div>
    </>
  );
}

export default App;
