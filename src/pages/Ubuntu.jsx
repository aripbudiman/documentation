import React, { useState } from "react";
import Content from "../layouts/Content";
import Section from "../components/Section";
import SyntaxCode from "../components/SyntaxCode";

const codeString = [
  `ping google.com`,
  `sudo apt update`,
  "sudo apt upgrade",
  "sudo apt install nama-package",
  "sudo su -",
];

const Ubuntu = () => {
  return (
    <Content>
      <h1 className="text-3xl text-customGray-3 font-semibold my-5">
        Documentation Ubuntu
      </h1>
      <hr />
      <Section title="Perintah Commandline Ubuntu 22.04">
        <p>perintah untuk cek koneksi</p>
        <SyntaxCode codeString={codeString[0]} language={"plaintext"} />
        <p>mengupdate atau cek daftar daftar package yang tersedia</p>
        <SyntaxCode codeString={codeString[1]} language={"plaintext"} />
        <p>
          setelah melakukan `apt update`, maka langkah selanjutnya lakukan `apt
          upgrade` untuk mengupgrade package package
        </p>
        <SyntaxCode codeString={codeString[2]} language={"plaintext"} />
        <p>
          Perintah apt install dalam Ubuntu (dan distribusi Linux berbasis
          Debian lainnya) digunakan untuk menginstal perangkat lunak atau
          paket-paket tertentu di sistem Anda. Anda dapat menggunakan perintah
          ini untuk mengunduh, menginstal, dan mengkonfigurasi paket-paket yang
          diperlukan untuk aplikasi atau layanan yang ingin Anda jalankan.
          Contoh penggunaan umum dari perintah apt install adalah sebagai
          berikut:
        </p>
        <SyntaxCode codeString={codeString[3]} language={"plaintext"} />
        <p>
          Perintah sudo su - digunakan untuk beralih ke akun superuser (biasanya
          dikenal sebagai root) pada sistem Linux
        </p>
        <SyntaxCode codeString={codeString[4]} language={"plaintext"} />
      </Section>
    </Content>
  );
};

export default Ubuntu;
