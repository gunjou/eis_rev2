import React from 'react'
import './listGroup.css'
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi'
import { CgArrowsExchange, } from 'react-icons/cg'

const ListGroup = () => {
    let hospital = [
        { src: "logo_hospital/hospital26.png", alt: "hospital01", nama: "Rumah Sakit 01", url: "#" },
        { src: "logo_hospital/hospital27.png", alt: "hospital02", nama: "Rumah Sakit 02", url: "#" },
        { src: "logo_hospital/hospital28.png", alt: "hospital03", nama: "Rumah Sakit 03", url: "#" },
        { src: "logo_hospital/hospital29.png", alt: "hospital04", nama: "Rumah Sakit 04", url: "#" },
        { src: "logo_hospital/hospital30.png", alt: "hospital05", nama: "Rumah Sakit 05", url: "#" },
        { src: "logo_hospital/hospital31.png", alt: "hospital06", nama: "Rumah Sakit 06", url: "#" },
        { src: "logo_hospital/hospital32.png", alt: "hospital07", nama: "Rumah Sakit 07", url: "#" },
        { src: "logo_hospital/hospital33.png", alt: "hospital08", nama: "Rumah Sakit 08", url: "#" },
        { src: "logo_hospital/hospital34.png", alt: "hospital09", nama: "Rumah Sakit 09", url: "#" },
        { src: "logo_hospital/hospital35.png", alt: "hospital10", nama: "Rumah Sakit 10", url: "#" },
        // { src: "logo_hospital/hospital36.png", alt: "hospital11", nama: "Rumah Sakit 11", url: "#" },
      ];

  return (
    <div className="ListGroup m-8 pb-7 grid grid-cols-5 ">
					{hospital.map((img) => (
						<>
					<div className="p-m pb-10">
        <div className="flip-box ">

					<div className="flip-box-inner ">
						<div className="flip-box-front cursor-pointer">
							<img src={process.env.PUBLIC_URL + img.src} alt="aaa" className='image' />
						</div>
						<div className="flip-box-back p-2 cursor-pointer">
							<h2 className='font-bold'>{img.nama}</h2>
							<table className='text-left font-semibold'>
								<tr className='hidden'>
									<th>Type</th>
									<th>Value</th>
									<th>Status</th>
								</tr>
								<tr>
									<td>Service</td>
									<td></td>
									<td></td>
								</tr>
								<tr className='text-sm'>
									<td className='pl-4'>Pelayanan</td>
									<td>24.5%</td>
									<td><BiUpArrowAlt /></td>
								</tr>
								<tr className='text-sm'>
									<td className='pl-4 pb-1.5'>Kunjungan</td>
									<td>32.3%</td>
									<td><BiUpArrowAlt /></td>
								</tr>
								<tr>
									<td>Inventory</td>
									<td>17.9%</td>
									<td><BiDownArrowAlt /></td>
								</tr>
								<tr>
									<td>Medical Record</td>
									<td>22.4%</td>
									<td><BiUpArrowAlt /></td>
								</tr>
								<tr>
									<td>Finance</td>
									<td>13.9%</td>
									<td><BiUpArrowAlt /></td>
								</tr>
								<tr>
									<td><pre>Human Resource{'  '}</pre></td>
									<td>0.0%</td>
									<td><CgArrowsExchange /></td>
								</tr>
							</table>
						</div>
					</div>
					</div>
				</div>
						</>
						 ))}
    </div>
  )
}

export default ListGroup
//   return (
//     <div className="ListGroup m-8 pb-5">
//         <div className="flip grid grid-cols-6 gap-4">
//         {hospital.map((img) => (
//           <div className="flip-content w-36 md:w-48 lg:w-56 pb-12 ">
//             <img src={process.env.PUBLIC_URL + img.src} alt={img.alt} className="flip-front rounded-xl"/>
// 					<div className="flip-back text-left">
// 					kkkkkkkkk
// 					</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ListGroup