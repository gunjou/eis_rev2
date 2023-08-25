import React, { useState } from "react";


const PartnerList = ({type}) => {
  let hospital;

  const date = new Date();
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
  const [dateFilter, setDateFilter] = useState({
    startDate: `${year}-${month+1}-${day}`,
    endDate: `${year}-${month+1}-${day}`,
  });
  const filterDate = `?tgl_awal=${dateFilter.startDate}&tgl_akhir=${dateFilter.endDate}`;

	switch (type) {
		case "partnerBaru":
			hospital = [
                { src: "logo_hospital/rs_grandmed.png", alt: "rs_grandmed", nama: "RS Grandmed", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rshbak.png", alt: "rshbak", nama: "RSAB Harapan Kita", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rs_kbp.png", alt: "rs_kbp", nama: "RS Karya Bhakti Pratiwi", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rskim.png", alt: "rskim", nama: "RSIA KIM", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_kendal.png", alt: "rsud_kendal", nama: "RSUD dr. H. Soewondo Kendal", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_doris.png", alt: "rsud_doris", nama: "RSUD dr. Doris Sylvanus", url: `/#/live-reports${filterDate}` },
              ]; break;
		case "partnerLama":
			hospital = [
                { src: "logo_hospital/rsjp_paramartha.png", alt: "rsjp_paramartha", nama: "RSJP Paramartha", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsgm_maranatha.png", alt: "rsgm_maranatha", nama: "RSGM Maranatha", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rskd_durensawit.png", alt: "rskd_durensawit", nama: "RSKD Duren Sawit", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_kota_mataram.png", alt: "rsud_kota_mataram", nama: "RSUD Kota Mataram", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_cibinong.png", alt: "rsud_cibinong", nama: "RSUD Cibinong", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rskp_karawang.png", alt: "rskp_karawang", nama: "RSKP Karawang", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_sintang.png", alt: "rsud_sintang", nama: "RSUD Sintang", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_soedarso.png", alt: "rsud_soedarso", nama: "RSUD dr. Soedarso", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_tasikmalaya.png", alt: "rsud_tasikmalaya", nama: "RSUD Tasikmalaya", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsu_prima.png", alt: "rsu_prima", nama: "RSU Royal Prima", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_trenggalek.png", alt: "rsud_trenggalek", nama: "RSUD dr. Soedomo Trenggalek", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_sungai_dareh.png", alt: "rsud_sungai_dareh", nama: "RSUD Sungai Dareh", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_malinau.png", alt: "rsud_malinau", nama: "RSUD Malinau", url: `/#/live-reports${filterDate}` },
                { src: "logo_hospital/rsud_kanujoso.png", alt: "rsud_kanujoso", nama: "RSUD Kanujoso", url: `/#/live-reports${filterDate}` },
              ]; break;
		case "partnerGroup":
			hospital = [
                { src: "logo_hospital/hospital20.png", alt: "hospital03", nama: "Rumah Sakit 19", url: "/#/group" },
                { src: "logo_hospital/hospital21.png", alt: "hospital03", nama: "Rumah Sakit 20", url: "/#/group" },
                { src: "logo_hospital/hospital22.png", alt: "hospital03", nama: "Rumah Sakit 21", url: "/#/group" },
                { src: "logo_hospital/hospital23.png", alt: "hospital03", nama: "Rumah Sakit 22", url: "/#/group" },
                { src: "logo_hospital/hospital24.png", alt: "hospital03", nama: "Rumah Sakit 23", url: "/#/group" },
                { src: "logo_hospital/hospital25.png", alt: "hospital03", nama: "Rumah Sakit 24", url: "/#/group" },
              ]; break;
		default:
			break;
	}

  return (
    <div className="PartnerList">
      <div className="grid grid-cols-6 gap-4">
        {hospital.map((img) => (
          <div className="cardHospital pb-6 ">
            {/* <Link to={img.url}> */}
            <a href={img.url}>
            <div className="rounded-xl hover:rounded-2xl transform transition duration-500 hover:scale-110 hover:bg-gradient-to-t hover:from-teal-700 flex text-black/0 hover:text-white ">
              <p className="block absolute ml-4 mb-3 font-semibold self-end ">{img.nama}
                {/* <p className="text-xs font-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
              </p>
              <img src={process.env.PUBLIC_URL + img.src} alt={img.alt} className="rounded-xl hover:gradient-mask-b-0 z-30"/>
            </div>
            </a>
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerList;
