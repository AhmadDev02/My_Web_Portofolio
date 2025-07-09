import DataImage from "./data";
import { listTools } from "./data";

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
      <section className="about mt-32 py-12 px-4 md:px-8 lg:px-2 ">
        <div className="max-w-6xl mx-auto shadow-lg rounded-2xl p-6 sm:p-10 lg:p-14 transition-all duration-300 hover:shadow-xl bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            👨‍💻 Tentang Saya
          </h2>
          <p className="text-justify text-base md:text-lg leading-relaxed text-gray-700">
            👋 Halo! Saya <strong>Ahmad Fajar Alfaravi</strong>, lulusan S1
            Sistem Informasi tahun 2023. Selama masa kuliah, saya aktif
            mengikuti berbagai kegiatan seperti <strong>organisasi</strong>,
            <strong> workshop</strong>, dan <strong>program magang</strong> yang
            memperkaya wawasan dan keterampilan saya.
            <br />
            <br />
            💼 Saya memiliki pengalaman magang sebagai{" "}
            <strong>Digitalisasi Intern</strong> di
            <strong> PT. Sanghiang Perkasa (Kalbe Group)</strong> selama hampir
            6 bulan. Selain itu, saya juga bekerja sebagai{" "}
            <strong>Network Staff</strong> di
            <strong>
              {" "}
              Universitas Muhammadiyah Sumatera Utara (UMSU)
            </strong>{" "}
            selama hampir 2 tahun sambil menyelesaikan studi.
            <br />
            <br />
            💻 Dalam perjalanan itu, saya terlibat langsung dalam:
            <ul className="list-disc list-inside mt-3 mb-5 ml-4 md:ml-6">
              <li>
                Pembuatan dan pengembangan <strong>website</strong>
              </li>
              <li>
                Pengelolaan <strong>jaringan komputer</strong>
              </li>
              <li>
                Pengembangan aplikasi menggunakan <strong>Flutter</strong>
              </li>
            </ul>
            🚀 Setelah lulus, saya melanjutkan karier sebagai{" "}
            <strong>Flutter Apps Developer</strong> di UMSU selama 1 tahun
            (kontrak).
            <br />
            <br />
            📈 Saya terus bersemangat untuk{" "}
            <strong>belajar dan berkembang</strong>, tidak hanya dalam
            pengembangan aplikasi, tapi juga dalam bidang teknologi lainnya yang
            relevan dengan era digital saat ini.
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 text-base/loose opacity-50">
          Berikut ini beberapa tools yang dipakai saat mengerjakan project
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
              key={tool.id}
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT */}
    </>
  );
}

export default App;
