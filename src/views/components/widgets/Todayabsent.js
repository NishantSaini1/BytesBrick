import React from 'react'
import {
  CCardGroup,
  CCol,
  CLink,
  CRow,
  CWidgetIcon,
  CWidgetProgress,
  CWidgetProgressIcon,
  CWidgetSimple,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'

const Todayabsent = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="12" lg="12">
          <CWidgetIcon
            className="mb-2"
            icon={<CIcon width={24} name="cil-user" size="xl" />}
            iconPadding={3}
            title="8 Sep 2020"
            value="Martin Lewis"
            color="info"
          />
        </CCol>
        <CCol xs="12" sm="12" lg="12">
          <CWidgetIcon
            className="mb-2"
            icon={<CIcon width={24} name="cil-user" size="xl" />}
            iconPadding={3}
            title="6 Sep 2020"
            value="Martin Lewis"
            color="info"
          />
        </CCol>
        <CCol xs="12" sm="12" lg="12">
          <CWidgetIcon
            className="mb-2"
            icon={<CIcon width={24} name="cil-user" size="xl" />}
            iconPadding={3}
            title="1 Sep 2020"
            value="Martin Lewis"
            color="info"
          />
        </CCol>
        <CCol xs="12" sm="12" lg="12" className="loadbutton">
          <button className="loadbtn">Load More</button>
        </CCol>
      </CRow>
    </>
  )
}

export default Todayabsent
