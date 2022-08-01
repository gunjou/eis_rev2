import React from "react";
import "./listGroup.css";

const ListGroup = () => {
  let hospital = [
    { src: "logo_hospital/hospital26.png", alt: "hospital01", nama: "Rumah Sakit 01", url: "/#/live-reports", },
    { src: "logo_hospital/hospital27.png", alt: "hospital02", nama: "Rumah Sakit 02", url: "/#/live-reports", },
    { src: "logo_hospital/hospital28.png", alt: "hospital03", nama: "Rumah Sakit 03", url: "/#/live-reports", },
    { src: "logo_hospital/hospital29.png", alt: "hospital04", nama: "Rumah Sakit 04", url: "/#/live-reports", },
    { src: "logo_hospital/hospital30.png", alt: "hospital05", nama: "Rumah Sakit 05", url: "/#/live-reports", },
    { src: "logo_hospital/hospital31.png", alt: "hospital06", nama: "Rumah Sakit 06", url: "/#/live-reports", },
    { src: "logo_hospital/hospital32.png", alt: "hospital07", nama: "Rumah Sakit 07", url: "/#/live-reports", },
    { src: "logo_hospital/hospital33.png", alt: "hospital08", nama: "Rumah Sakit 08", url: "/#/live-reports", },
    { src: "logo_hospital/hospital34.png", alt: "hospital09", nama: "Rumah Sakit 09", url: "/#/live-reports", },
    { src: "logo_hospital/hospital35.png", alt: "hospital10", nama: "Rumah Sakit 10", url: "/#/live-reports", },
    // { src: "logo_hospital/hospital36.png", alt: "hospital11", nama: "Rumah Sakit 11", url: "#" },
  ];

  return (
    <div className="ListGroup m-8 pb-7 grid grid-cols-5 ">
      {hospital.map((img) => (
        <>
          <a href={img.url}>
            <div className="pb-10">
              <div className="flip-box ">
                <div className="flip-box-inner ">
                  <div className="flip-box-front cursor-pointer">
                    <img
                      src={process.env.PUBLIC_URL + img.src}
                      alt="aaa"
                      className="image"
                    />
                  </div>
                  <div className="flip-box-back p-2 cursor-pointer">
                    <h2 className="font-bold">{img.nama}</h2>
                    <table className="text-left font-semibold">
                      <span className="text-[10pt] pl-1">
                        <tr className="">
                          <th className="">Type</th>
                          <th className="">Trend</th>
                          <th className="">Predict</th>
                        </tr>
                        <tr>
                          <td>Service</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="text-[9pt]">
                          <td className="pl-4">Pelayanan</td>
                          <td className="flex">24.5% ➚</td>
                          <td>10.3% ▲</td>
                        </tr>
                        <tr className="text-[9pt]">
                          <td className="pl-4 pb-1">Kunjungan</td>
                          <td className="flex">32.3% ➚</td>
                          <td>12.0% ▲</td>
                        </tr>
                        <tr>
                          <td>Inventory</td>
                          <td className="flex pr-3">17.9% ➘</td>
                          <td>2.7% ▲</td>
                        </tr>
                        <tr>
                          <td>Medical Record</td>
                          <td className="flex">22.4% ➚</td>
                          <td>5.8% ▼</td>
                        </tr>
                        <tr>
                          <td>Finance</td>
                          <td className="flex">13.9% ➚</td>
                          <td>3.4% ▲</td>
                        </tr>
                        <tr>
                          <td>
                            <pre>Human Resource{"  "}</pre>
                          </td>
                          <td className="flex">0.0% ⇋</td>
                          <td>0.0% ⇋</td>
                        </tr>
                      </span>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </>
      ))}
    </div>
  );
};

export default ListGroup;
