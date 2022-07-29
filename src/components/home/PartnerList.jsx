import React from "react";


const PartnerList = ({type}) => {
    let hospital;

	switch (type) {
		case "partnerBaru":
			hospital = [
                { src: "logo_hospital/hospital09.png", alt: "hospital01", nama: "Rumah Sakit 01", url: "/#/live-reports" },
                { src: "logo_hospital/hospital02.png", alt: "hospital02", nama: "Rumah Sakit 02", url: "/#/live-reports" },
                { src: "logo_hospital/hospital03.png", alt: "hospital03", nama: "Rumah Sakit 03", url: "/#/live-reports" },
                { src: "logo_hospital/hospital04.png", alt: "hospital04", nama: "Rumah Sakit 04", url: "/#/live-reports" },
                { src: "logo_hospital/hospital05.png", alt: "hospital05", nama: "Rumah Sakit 05", url: "/#/live-reports" },
                { src: "logo_hospital/hospital06.png", alt: "hospital06", nama: "Rumah Sakit 06", url: "/#/live-reports" },
              ]; break;
		case "partnerLama":
			hospital = [
                { src: "logo_hospital/hospital36.png", alt: "hospital01", nama: "Rumah Sakit 07", url: "/#/live-reports" },
                { src: "logo_hospital/hospital08.png", alt: "hospital02", nama: "Rumah Sakit 08", url: "/#/live-reports" },
                { src: "logo_hospital/hospital10.png", alt: "hospital03", nama: "Rumah Sakit 09", url: "/#/live-reports" },
                { src: "logo_hospital/hospital11.png", alt: "hospital03", nama: "Rumah Sakit 10", url: "/#/live-reports" },
                { src: "logo_hospital/hospital12.png", alt: "hospital03", nama: "Rumah Sakit 11", url: "/#/live-reports" },
                { src: "logo_hospital/hospital13.png", alt: "hospital03", nama: "Rumah Sakit 12", url: "/#/live-reports" },
                { src: "logo_hospital/hospital14.png", alt: "hospital03", nama: "Rumah Sakit 13", url: "/#/live-reports" },
                { src: "logo_hospital/hospital15.png", alt: "hospital03", nama: "Rumah Sakit 14", url: "/#/live-reports" },
                { src: "logo_hospital/hospital16.png", alt: "hospital03", nama: "Rumah Sakit 15", url: "/#/live-reports" },
                { src: "logo_hospital/hospital17.png", alt: "hospital03", nama: "Rumah Sakit 16", url: "/#/live-reports" },
                { src: "logo_hospital/hospital18.png", alt: "hospital03", nama: "Rumah Sakit 17", url: "/#/live-reports" },
                { src: "logo_hospital/hospital19.png", alt: "hospital03", nama: "Rumah Sakit 18", url: "/#/live-reports" },
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
      <div className="grid grid-cols-6 ">
        {hospital.map((img) => (
          <div className="cardHospital pb-6 ">
            {/* <Link to={img.url}> */}
            <a href={img.url}>
            <div className="rounded-xl w-36 md:w-48 lg:w-56 hover:rounded-2xl transform transition duration-500 hover:scale-110 hover:bg-teal-700 flex text-black/0 hover:text-white ">
              <p className="block absolute ml-4 mb-3 font-semibold self-end ">{img.nama}
                <p className="text-xs font-normal ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
