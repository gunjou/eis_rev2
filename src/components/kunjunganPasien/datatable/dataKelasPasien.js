import React, { useState, useEffect } from "react";


const dataKelasPasien = () => {
  const [data2, setdata] = useState({
    judul: "",
    label: "",
    // age: 0,
    // programming: "",
  });

  useEffect(() => {
    fetch("/http://192.168.1.174/kunjungan/kelompok_pasien?tgl_awal=2018-01-01&tgl_akhir=2018-01-02").then((res) =>
      res.json().then((data2) => {
        setdata({
          judul: data2.judul,
          label: data2.label,
          // date: data.Date,
          // programming: data.programming,
        });
      })
    );
  }, []);
  return <div>dataKelasPasien</div>;
};

export default dataKelasPasien;
