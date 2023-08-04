import React, { useEffect } from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {LiaIndustrySolid} from 'react-icons/lia'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {URL} from '../../../url'
import { setCompanies } from '../../../redux/features/companySlice'
import './companies.css'

const Companies = () => {
  const dispatch = useDispatch()
  const {companies} = useSelector(state=>state.companies)

  useEffect(()=>{
    axios.get(`${URL}/companies`)
    .then(response=>{
      dispatch(setCompanies(response.data))
    })
    .catch(error=>console.log(error.response.data))
  },[dispatch])

  return (
    <div>
      <div className='companies-page-header'>
        <h2>Companies</h2>
        <p>Learn about what it's like to work at companies</p>
        <div>
          <input type="text" placeholder='Search all companies'/>
          <input type="text" placeholder='Search company by location'/>
          <button className='btn search-btn'>Search</button>
          <button className='btn filter-btn'>Filter <span><AiFillCaretDown/></span></button>
        </div>
        <p>{companies&& companies.length} companies</p>
      </div>
      <div className='companies-page-body'>
        {companies && companies.map(company=>(
          <div key={company._id} className='company-card'>
            <div>
              <img src={company.img_url} alt="Company logo" />
            </div>
            <div>
              <h3>{company.name}</h3>
              <p><span><IoLocationSharp/></span> {company.location} <span><LiaIndustrySolid/></span> {company.business_type}</p>
              <p>{company.description}</p>
              <div>
                {company.tags.map((tag,index)=>(<span key={index}>{tag}</span>))}
              </div>  
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Companies
