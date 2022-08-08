import React from 'react'
import { HiOutlineChevronDoubleDown, HiOutlineChevronDoubleUp } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export function TlpTittle(value, label) {
  if (value > 0) {
    return (<p className="text-green-600 flex">{label} ↗{Math.abs(value)}%</p>);
  } else if (value < 0) {
    return (<p className="text-red-600 flex">{label} ↘{Math.abs(value)}%</p>);
  } else {
    return (<p className="text-gray-700 flex">{label} ⇋{Math.abs(value)}%</p>);
  }
}

export function TlpPredict(value) {
  if (value > 0) {
    return (<p className="pb-2 text-xs text-green-600 flex">Predict: ↗{Math.abs(value)}%</p>);
  } else if (value < 0) {
    return (<p className="pb-2 text-xs text-red-600 flex">Predict: ↘{Math.abs(value)}%</p>);
  } else {
    return (<p className="pb-2 text-xs text-gray-700 flex">Predict: ⇋{Math.abs(value)}%</p>);
  }
}

export function GetTrend(value) {
  if (value > 0) {
    return (<span className="text-green-600 flex"><IoMdArrowDropup/> {Math.abs(value)}%</span>);
  } else if (value < 0) {
    return (<span className="text-red-600 flex"><IoMdArrowDropdown/> {Math.abs(value)}%</span>);
  } else {
    return (<span className="text-gray-700 flex"> ⇋ {Math.abs(value)}%</span>);
  }
}

export function GetPredict(value) {
  if (value > 0) {
    return (<span className="text-green-600 flex"><HiOutlineChevronDoubleUp/> {Math.abs(value)}%</span>);
  } else if (value < 0) {
    return (<span className="text-red-600 flex"><HiOutlineChevronDoubleDown/> {Math.abs(value)}%</span>);
  } else {
    return (<span className="text-gray-700 flex"> ⇋ {Math.abs(value)}%</span>);
  }
}