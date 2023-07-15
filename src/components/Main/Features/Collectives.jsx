import React from 'react'
import google_cloud_icon from '../../../assets/google-cloud-icon.png'
import wso2_icon from '../../../assets/wso2.jpg'
import aws_icon from '../../../assets/aws2.png'

const Collectives = () => {
  return (
    <div className='collectives-container'>
        <h4>Collectives</h4>
        <div className='collectives-content'>
            <div className='collectives-list-head'>
                <img src={aws_icon} alt='AWS Icon' className='aws-logo'/>
                <div>
                    <h4>AWS</h4>
                    <p>14k Members</p>
                </div>
                <button>Join</button>
            </div>
            <div>
                <p>Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud...</p>
            </div>
        </div>
        <div className='collectives-content'>
            <div className='collectives-list-head'>
                <img src={google_cloud_icon} alt='Google Cloud Icon'/>
                <div>
                    <h4>Google Cloud</h4>
                    <p>44k Members</p>
                </div>
                <button>Join</button>
            </div>
            <div>
                <p>Google Cloud provides organizations with leading infrastructure, platform capabilities and industry solutions to help them solve t...</p>
            </div>
        </div>
        <div className='collectives-content'>
            <div className='collectives-list-head'>
                <img src={wso2_icon} alt='WSO2 Icon'/>
                <div>
                    <h4>WSO2</h4>
                    <p>5k Members</p>
                </div>
                <button>Join</button>
            </div>
            <div>
                <p>WSO2 solutions give enterprises the flexibility to deploy applications and services on-premises, on private or public clouds, o...</p>
            </div>
        </div>
    </div>
  )
}

export default Collectives