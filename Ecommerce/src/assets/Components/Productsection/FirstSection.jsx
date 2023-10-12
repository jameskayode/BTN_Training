// import React from 'react'
import './client.css'
import arrowdown from '../../../assets/images/dropbesidefilter.svg'
import icon1 from '../../../assets/images/T1.png'
import icon2 from '../../../assets/images/T2.png'
import icon3 from '../../../assets/images/T3.png'
import icon4 from '../../../assets/images/T4.png'
import icon5 from '../../../assets/images/T5.png'
import grid from '../../../assets/images/grid.svg'
import list from '../../../assets/images/list.svg'
import next from '../../../assets/images/iconafterhome.svg'


const FirstSection = () => {
  return (
    <>
    <div className="container2">
        <div className="row2">
          <div className="col-md-6">
            <b className="h2">Shop</b>
          </div>
          <div className="col-md-61">
            <div className="breadcrumb">
              <b className="login-register">Home</b>
              <img
                className="icn-arrow-right-icn-xs"
                alt=""
                src={next}
              />


              <b className="h64">Shop</b>
            </div>
          </div>
        </div>
      </div>


      <div className="desktop-shop-cards-18">
        <div className="container3">
          <div className="row3">
            <div className="col-md-43">
              <div className="card-item">
                <div className="media-bg-cover">
                  <img
                    className="card-cover-5-icon"
                    alt=""
                    src={icon1}
                  />
                  <div className="filter" />
                </div>
                <div className="card-content">
                  <b className="h65">CLOTHS</b>
                  <div className="h66">5 Items</div>
                </div>
              </div>
            </div>


            <div className="col-md-43">
              <div className="card-item">
                <div className="media-bg-cover">
                  <img
                    className="card-cover-5-icon"
                    alt=""
                    src={icon2}
                  />
                  <div className="filter" />
                </div>
                <div className="card-content1">
                  <b className="h67">CLOTHS</b>
                  <div className="h68">5 Items</div>
                </div>
              </div>
            </div>
            <div className="col-md-45">
              <div className="card-item2">
                <div className="media-bg-cover">
                  <img
                    className="card-cover-5-icon"
                    alt=""
                    src={icon3}
                  />
                  <div className="filter2" />
                </div>
                <div className="card-content2">
                  <b className="h67">CLOTHS</b>
                  <div className="h68">5 Items</div>
                </div>
              </div>
            </div>
            <div className="col-md-45">
              <div className="card-item2">
                <div className="media-bg-cover">
                  <img
                    className="card-cover-5-icon"
                    alt=""
                    src={icon4}
                  />
                  <div className="filter2" />
                </div>
                <div className="card-content2">
                  <b className="h67">CLOTHS</b>
                  <div className="h68">5 Items</div>
                </div>
              </div>
            </div>
            <div className="col-md-45">
              <div className="card-item2">
                <div className="media-bg-cover">
                  <img
                    className="card-cover-5-icon"
                    alt=""
                    src={icon5}
                  />
                  <div className="filter2" />
                </div>
                <div className="card-content2">
                  <b className="h613">CLOTHS</b>
                  <div className="h68">5 Items</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="filter-row">
        <div className="container4">
          <div className="row4">
            <div className="sort">
              <b className="login-register">Showing all 12 results</b>
            </div>
            <div className="sort1">
              <b className="login-register">Views:</b>
              <div className="btn-sm-24-parent">
                <div className="btn-sm-24">
                  <img className="icn-settings-icn-xs" alt="" src={grid} />
                </div>
                <div className="btn-sm-24">
                  <img
                    className="icn-settings-icn-xs"
                    alt=""
                    src={list}
                  />
                </div>
              </div>
            </div>
            <div className="sort2">
              <div className="custom-select">
                <div className="select">
                  <div className="option">
                    <div className="dropdown1">Popularity</div>
                    <img className="vector-icon1" alt="" src={arrowdown}/>
                  </div>
                  <div className="option1">
                    <div className="list-entry">List Entry # 1</div>
                  </div>
                  <div className="option2">
                    <div className="list-entry">List Entry # 2</div>
                  </div>
                  <div className="option3">
                    <div className="list-entry">List Entry # 3</div>
                  </div>
                  <div className="option4">
                    <div className="list-entry">List Entry # 4</div>
                  </div>
                  <div className="option5">
                    <div className="list-entry">List Entry # 5</div>
                  </div>
                </div>
              </div>
              <div className="btnprimary-colorbtn-sm">
                <b className="login-register">Filter</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default FirstSection
